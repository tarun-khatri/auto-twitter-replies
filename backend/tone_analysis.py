from google import genai
from google.genai import types
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)

def analyze_tone(user_tweets):
    combined_text = " ".join(user_tweets[:100])  # Sample 100 tweets
    prompt = f"Analyze the tone, style, and personality based on the following tweets:\n{combined_text}\nProvide a summary."
    
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[prompt]
    )
    
    return response.text if response else "Analysis failed."
