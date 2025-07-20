# backend/main.py
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi import Depends
from clerk_auth import verify_clerk_token
from database import db
from reply_generator import generate_reply
from users import router as users_router
from profiles import router as profiles_router
from config import PORT
from scraper import fetch_user_tweets
from datetime import date

app = FastAPI(title="Twitter Reply Generator")

# CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)
app.include_router(profiles_router)

@app.on_event("startup")
def startup_db_check():
    try:
        db.command("ping")
        print(f"✅ MongoDB connected to database: {db.name}")
    except Exception as e:
        print(f"❌ MongoDB connection error: {e}")

class ReplyRequest(BaseModel):
    tweet_text: str

FREE_DAILY_LIMIT = 50

@app.post("/generate_reply")
def generate_reply_endpoint(
    req: ReplyRequest,
    clerk_uid: str = Depends(verify_clerk_token)
):
    # 1. get user and enforce daily quota
    user_doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not user_doc:
        raise HTTPException(status_code=404, detail="User not found")

    today = date.today().isoformat()
    if user_doc.get("last_quota_date") != today:
        db.users.update_one({"_id": user_doc["_id"]}, {"$set": {"last_quota_date": today, "quota_used_today": 0}})
        user_doc["quota_used_today"] = 0

    if user_doc.get("plan", "FREE") == "FREE" and user_doc.get("quota_used_today", 0) >= FREE_DAILY_LIMIT:
        raise HTTPException(status_code=429, detail="Daily quota exceeded")

    # 2. fetch active profile
    profile_id = user_doc.get("active_profile_id")
    if not profile_id:
        raise HTTPException(status_code=400, detail="No active profile")

    profile_doc = db.profiles.find_one({"_id": profile_id})
    if not profile_doc:
        raise HTTPException(status_code=404, detail="Active profile not found")

    tone = profile_doc.get("tone_summary")
    if tone is None:
        raise HTTPException(status_code=400, detail="Tone analysis not ready")
    if tone == "":
        tone = "neutral and friendly"

    # 3. generate reply
    reply = generate_reply(user_tone=tone, tweet_text=req.tweet_text, num_replies=1)[0]

    # 4. increment quota
    db.users.update_one({"_id": user_doc["_id"]}, {"$inc": {"quota_used_today": 1}})

    remaining = max(0, FREE_DAILY_LIMIT - (user_doc.get("quota_used_today", 0) + 1))

    return {"reply": reply, "remaining_quota": remaining}

@app.get("/users/{clerk_uid}/profile")
def get_user_profile(clerk_uid: str):
    user_doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not user_doc:
        raise HTTPException(status_code=404, detail="User not found")
    # Return tone summary, tweet count, last scraped, and recent replies (if any)
    return {
        "tone_summary": user_doc.get("tone_summary", ""),
        "tweet_count": user_doc.get("tweet_count", 0),
        "last_scraped_at": user_doc.get("last_scraped_at", ""),
        "recent_replies": user_doc.get("recent_replies", [])
    }

@app.post("/users/{clerk_uid}/history")
def add_reply_history(clerk_uid: str, data: dict):
    # data = {"tweet": ..., "reply": ...}
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

@app.websocket("/ws/scrape/{username}")
async def websocket_scrape(websocket: WebSocket, username: str):
    await websocket.accept()
    try:
        tweets = fetch_user_tweets(username)
        await websocket.send_json({
            "status": "completed",
            "tweets_found": len(tweets),
            "tweets": tweets
        })
    except WebSocketDisconnect:
        # client disconnected, nothing to do
        pass
    except Exception as e:
        await websocket.send_json({
            "status": "error",
            "message": str(e),
            "tweets_found": 0,
            "tweets": []
        })
    finally:
        await websocket.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT, reload=True)
