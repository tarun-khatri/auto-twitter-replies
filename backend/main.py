# backend/main.py
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import db
from reply_generator import generate_reply
from users import router as users_router
from config import PORT
from scraper import fetch_user_tweets

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

@app.on_event("startup")
def startup_db_check():
    try:
        db.command("ping")
        print(f"✅ MongoDB connected to database: {db.name}")
    except Exception as e:
        print(f"❌ MongoDB connection error: {e}")

class ReplyRequest(BaseModel):
    user_id: str
    tweet_text: str

@app.post("/generate_reply")
def generate_reply_endpoint(req: ReplyRequest):
    user_doc = db.users.find_one({"user_id": req.user_id})
    if not user_doc:
        raise HTTPException(status_code=404, detail="User not registered")
    tone = user_doc.get("tone_summary")
    if tone is None:
        raise HTTPException(status_code=400, detail="Tone analysis not ready")
    if tone == "":
        tone = "neutral and friendly"

    reply = generate_reply(
        user_tone=tone,
        tweet_text=req.tweet_text,
        num_replies=1
    )[0]
    return {"reply": reply}

@app.get("/users/{user_id}/profile")
def get_user_profile(user_id: str):
    user_doc = db.users.find_one({"user_id": user_id})
    if not user_doc:
        raise HTTPException(status_code=404, detail="User not found")
    # Return tone summary, tweet count, last scraped, and recent replies (if any)
    return {
        "tone_summary": user_doc.get("tone_summary", ""),
        "tweet_count": user_doc.get("tweet_count", 0),
        "last_scraped_at": user_doc.get("last_scraped_at", ""),
        "recent_replies": user_doc.get("recent_replies", [])
    }

@app.post("/users/{user_id}/history")
def add_reply_history(user_id: str, data: dict):
    # data = {"tweet": ..., "reply": ...}
    if not data.get("tweet") or not data.get("reply"):
        raise HTTPException(status_code=400, detail="Missing tweet or reply")
    db.users.update_one(
        {"user_id": user_id},
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
