from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException
from pydantic import BaseModel
from datetime import datetime
from bson import ObjectId
from database import db
from clerk_auth import verify_clerk_token
from scraper import fetch_user_tweets
from tone_analysis import analyze_tone

router = APIRouter(prefix="/profiles")

class CreateProfile(BaseModel):
    twitter_handle: str

@router.post("/")
def create_profile(data: CreateProfile, background_tasks: BackgroundTasks, clerk_uid: str = Depends(verify_clerk_token)):
    handle = data.twitter_handle.strip()
    if not handle:
        raise HTTPException(status_code=400, detail="Handle required")

    existing = db.profiles.find_one({"clerk_uid": clerk_uid, "handle": handle})
    if existing:
        profile_id = existing["_id"]
    else:
        profile_id = db.profiles.insert_one({
            "clerk_uid": clerk_uid,
            "handle": handle,
            "tweet_count": 0,
            "tone_summary": None,
            "tweets": [],
            "last_scraped_at": None,
        }).inserted_id
        background_tasks.add_task(_scrape_and_analyze, profile_id, handle)

    # Set active profile for the user
    db.users.update_one(
        {"clerk_uid": clerk_uid},
        {"$set": {"active_profile_id": profile_id}},
        upsert=True,
    )
    return {"profile_id": str(profile_id)}

@router.get("/")
def list_profiles(clerk_uid: str = Depends(verify_clerk_token)):
    profiles = list(db.profiles.find({"clerk_uid": clerk_uid}, {
        "tweets": 0  # exclude big field
    }))
    for p in profiles:
        p["_id"] = str(p["_id"])
    return profiles

@router.patch("/{profile_id}/activate")
def activate_profile(profile_id: str, clerk_uid: str = Depends(verify_clerk_token)):
    if not ObjectId.is_valid(profile_id):
        raise HTTPException(status_code=400, detail="Invalid id")
    profile = db.profiles.find_one({"_id": ObjectId(profile_id), "clerk_uid": clerk_uid})
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    db.users.update_one({"clerk_uid": clerk_uid}, {"$set": {"active_profile_id": profile["_id"]}}, upsert=True)
    return {"status": "activated"}

@router.delete("/{profile_id}")
def delete_profile(profile_id: str, clerk_uid: str = Depends(verify_clerk_token)):
    if not ObjectId.is_valid(profile_id):
        raise HTTPException(status_code=400, detail="Invalid id")
    db.profiles.delete_one({"_id": ObjectId(profile_id), "clerk_uid": clerk_uid})
    # If it was active, clear active_profile_id
    db.users.update_one({"clerk_uid": clerk_uid, "active_profile_id": ObjectId(profile_id)}, {"$unset": {"active_profile_id": ""}})
    return {"status": "deleted"}

def _scrape_and_analyze(profile_id: ObjectId, handle: str):
    # 1) scrape
    tweets = fetch_user_tweets(handle)[:400]
    tweet_count = len(tweets)

    # 2) analyze tone
    tone_summary = analyze_tone(tweets) if tweet_count else ""

    # 3) update profile doc
    db.profiles.update_one(
        {"_id": profile_id},
        {"$set": {
            "tweet_count": tweet_count,
            "tweets": tweets,
            "tone_summary": tone_summary,
            "last_scraped_at": datetime.utcnow().isoformat()
        }}
    ) 