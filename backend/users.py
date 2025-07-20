# backend/users.py
from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from profiles import _scrape_and_analyze
from database import db
from clerk_auth import verify_clerk_token

router = APIRouter(prefix="/users")

# ---------------------- NEW: current user endpoint ----------------------
# Ensures a user doc exists with default FREE plan and returns it so the
# frontend / extension can display the subscription tier.


@router.get("/me")
def get_or_create_me(clerk_uid: str = Depends(verify_clerk_token)):
    doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not doc:
        # First-time sign-up: create a basic FREE plan document
        db.users.insert_one({
            "clerk_uid": clerk_uid,
            "plan": "FREE",
            "quota_used_today": 0,
        })
        plan = "FREE"
    else:
        plan = doc.get("plan", "FREE")
    return {"plan": plan}

# ---------------------- NEW: authenticated profile endpoint ----------------------

@router.get("/me/profile")
def get_my_profile(clerk_uid: str = Depends(verify_clerk_token)):
    """Return the profile doc for the currently authenticated Clerk user."""
    user_doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not user_doc:
        raise HTTPException(status_code=404, detail="User not found")

    profile_id = user_doc.get("active_profile_id")
    if not profile_id:
        raise HTTPException(status_code=404, detail="No active profile")

    profile = db.profiles.find_one({"_id": profile_id})
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    return {
        "tone_summary": profile.get("tone_summary", ""),
        "tweet_count": profile.get("tweet_count", 0),
        "last_scraped_at": profile.get("last_scraped_at", ""),
        "recent_replies": profile.get("recent_replies", []),
        "handle": profile.get("handle"),
    }

@router.post("/me/history")
def add_my_reply_history(data: dict, clerk_uid: str = Depends(verify_clerk_token)):
    """Append a tweet→reply pair to the recent_replies array of the active profile
    for the current authenticated Clerk user.
    """
    if not data.get("tweet") or not data.get("reply"):
        raise HTTPException(status_code=400, detail="Missing tweet or reply")

    user_doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not user_doc or not user_doc.get("active_profile_id"):
        raise HTTPException(status_code=404, detail="Active profile not found")

    db.profiles.update_one(
        {"_id": user_doc["active_profile_id"]},
        {"$push": {"recent_replies": {"tweet": data["tweet"], "reply": data["reply"]}}}
    )
    return {"status": "ok"}

class RegisterUser(BaseModel):
    twitter_handle: str
    firebase_uid: Optional[str] = None

@router.post("/register")
def register_user(
    user: RegisterUser,
    background_tasks: BackgroundTasks,
    clerk_uid: str = Depends(verify_clerk_token),
):
    """Upsert a user document keyed by Clerk UID. Optionally store firebase_uid
    for Twitter OAuth users. Kick off scraping & tone analysis if we have not done
    it before.
    """
    handle = user.twitter_handle.strip()
    if not handle:
        raise HTTPException(status_code=400, detail="Handle required")

    # Ensure the user doc exists
    db.users.update_one(
        {"clerk_uid": clerk_uid},
        {"$setOnInsert": {"plan": "FREE", "quota_used_today": 0}},
        upsert=True,
    )

    # Find or create profile
    profile = db.profiles.find_one({"clerk_uid": clerk_uid, "handle": handle})
    if profile:
        profile_id = profile["_id"]
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

    # Set active profile
    db.users.update_one({"clerk_uid": clerk_uid}, {"$set": {"active_profile_id": profile_id}})

    # Store firebase_uid if provided
    if user.firebase_uid:
        db.users.update_one({"clerk_uid": clerk_uid}, {"$set": {"firebase_uid": user.firebase_uid}})

    return {"status": "ok", "profile_id": str(profile_id)}
