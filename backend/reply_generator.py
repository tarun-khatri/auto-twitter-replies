from google import genai
from google.genai import types
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)

def generate_reply(user_tone, tweet_text, num_replies=3):
    replies = []
    
    for _ in range(num_replies):
        prompt = f"Reply to this tweet in {user_tone} style:\nTweet: {tweet_text}\nReply:"
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[prompt]
        )
        
        replies.append(response.text if response else "Reply generation failed.")
    
    return replies
