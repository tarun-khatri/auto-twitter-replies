# backend/users.py
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel
from datetime import datetime
from scraper import fetch_user_tweets
from tone_analysis import analyze_tone
from database import db

router = APIRouter(prefix="/users")

class RegisterUser(BaseModel):
    user_id: str
    twitter_handle: str

@router.post("/register")
def register_user(user: RegisterUser, background_tasks: BackgroundTasks):
    existing = db.users.find_one({"user_id": user.user_id})
    if existing and existing.get("tone_summary") is not None:
        return {"status": "already_registered"}

    background_tasks.add_task(_scrape_and_analyze, user.user_id, user.twitter_handle)
    return {"status": "registration_started"}

def _scrape_and_analyze(user_id: str, handle: str):
    # 1) scrape
    tweets = fetch_user_tweets(handle)[:400]
    tweet_count = len(tweets)
    print(f"[users] scraped {tweet_count} tweets for {handle}")

    # 2) analyze
    if tweet_count > 0:
        tone_summary = analyze_tone(tweets)
    else:
        tone_summary = ""

    # Optional: log the first few tweets so you can see what came in
    print(f"[users] sample tweets: {tweets[:5]}")

    # 3) write to Mongo
    db.users.update_one(
        {"user_id": user_id},
        {"$set":{
            "twitter_handle": handle,
            "tweet_count": tweet_count,
            "tone_summary": tone_summary,
            "tweets": tweets,  # Save the tweets array
            "last_scraped_at": datetime.utcnow().isoformat()
        }},
        upsert=True
    )
    print(f"[users] tone_summary length = {len(tone_summary)}")
