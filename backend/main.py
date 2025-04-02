<<<<<<< HEAD
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
=======
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.exception_handlers import http_exception_handler
from pydantic import BaseModel
import re, time
import emoji  # Ensure emoji>=2.0.0 is installed
from config import GEMINI_API_KEY, PORT

# Import the Google GenAI client and types.
from google import genai
from google.genai import types

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Twitter Reply Generator")

# Set up CORS to allow all origins (for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, replace "*" with allowed origins.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Custom exception handler to attach CORS headers on error responses.
@app.exception_handler(HTTPException)
async def custom_http_exception_handler(request: Request, exc: HTTPException):
    response = await http_exception_handler(request, exc)
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

# Input model for tweet prompt, now including a reply_options field.
class TweetPrompt(BaseModel):
    tweet_text: str
    reply_options: int = 1  # Number of reply options to generate

# Utility function to remove hashtags and emojis.
def filter_reply(text: str) -> str:
    # Remove hashtags (words starting with '#')
    text = re.sub(r"#\S+", "", text)
    # Remove emojis using emoji.replace_emoji
    text = emoji.replace_emoji(text, replace='')
    return text.strip()

# Initialize the Gemini client.
client = genai.Client(api_key=GEMINI_API_KEY)

# Helper function with retry logic for the Gemini API.
def query_gemini(prompt: str, retries: int = 3, delay: int = 5):
    config = types.GenerateContentConfig(
        max_output_tokens=60,
        temperature=0.7
    )
    attempt = 0
    last_error = None
    while attempt < retries:
        attempt += 1
        try:
            response = client.models.generate_content(
                model="gemini-2.0-flash",
                contents=[prompt],
                config=config
            )
            # Expecting response with a "text" attribute.
            if response and hasattr(response, "text"):
                return response.text
            else:
                last_error = "Unexpected response format from Gemini API."
        except Exception as e:
            last_error = str(e)
            print(f"Attempt {attempt} failed: {last_error}")
        time.sleep(delay)
    raise HTTPException(status_code=500, detail=f"Error from Gemini API after {retries} attempts: {last_error}")

# Endpoint to generate human-like replies.
@app.post("/generate_reply")
def generate_reply(prompt: TweetPrompt):
    # Construct the prompt.
    input_prompt = (
        f"Generate a human-like reply for the following tweet without using hashtags or emojis:\n\n"
        f"Tweet: {prompt.tweet_text}\nReply:"
    )
    
    # Determine how many replies to generate (at least 1).
    num_options = prompt.reply_options if prompt.reply_options > 0 else 1
    replies = []
    for _ in range(num_options):
        try:
            generated_text = query_gemini(input_prompt)
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        filtered_reply = filter_reply(generated_text)
        replies.append(filtered_reply)
        
    return {"replies": replies}

# Run the server.
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=PORT, reload=True)
>>>>>>> 083b62acd7d35feb658e84bf523707acd348233a
