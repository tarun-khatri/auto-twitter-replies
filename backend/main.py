from fastapi import FastAPI, HTTPException, Header
from config import PORT
from auth import verify_firebase_token
from scraper import fetch_user_tweets
from tone_analysis import analyze_tone
from reply_generator import generate_reply
from database import store_user_data

app = FastAPI(title="Twitter AI Reply Generator")

@app.post("/analyze_user")
def analyze_user(twitter_username: str, auth_token: str = Header(...)):
    # Authenticate user
    user_id = verify_firebase_token(auth_token)
    
    # Fetch tweets
    tweets = fetch_user_tweets(twitter_username)
    
    # Analyze tone
    tone_analysis = analyze_tone(tweets)
    
    # Store in DB
    store_user_data(user_id, tweets, tone_analysis)
    
    return {"message": "User analysis complete", "tone": tone_analysis}

@app.post("/generate_reply")
def generate_tweet_reply(tweet_text: str, auth_token: str = Header(...)):
    # Authenticate user
    user_id = verify_firebase_token(auth_token)
    
    # Fetch user's tone from DB
    user_data = db.users.find_one({"user_id": user_id})
    if not user_data:
        raise HTTPException(status_code=404, detail="User data not found")
    
    user_tone = user_data.get("tone_analysis", "neutral")
    
    # Generate replies
    replies = generate_reply(user_tone, tweet_text)
    
    return {"replies": replies}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT, reload=True)
