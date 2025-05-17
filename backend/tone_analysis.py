from google import genai
from google.genai import types
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)

def analyze_tone(user_tweets):
    if not user_tweets or len(user_tweets) < 10:
        # Not enough tweets for meaningful analysis
        return (
            "Not enough tweet data to analyze your unique tone and style. "
            "Replies will use a general human-like tone. Please tweet more to personalize your experience."
        )
    unique_tweets = set(user_tweets)
    if len(unique_tweets) < max(5, len(user_tweets) // 3):
        # Too many repeated/bot-like tweets
        return (
            "Your tweets appear highly repetitive or bot-like. "
            "Replies will use a general human-like tone. Please tweet more original content to improve personalization."
        )
    combined_text = " ".join(user_tweets[:100])
    prompt = (
        "You are an expert in social media personality analysis. "
        "Given the following tweets, provide a nuanced, insightful, and concise summary of the user's overall writing style, tone, personality traits, and common themes. "
        "- Focus on subtle details, recurring patterns, and unique characteristics. "
        "- Avoid generic statements, introductions, or filler text. "
        "- Output should be a professional, multi-dimensional summary suitable for use as a user profile description.\n"
        f"Tweets:\n{combined_text}"
    )
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[prompt]
    )
    return response.text.strip() if response else "Analysis failed."
