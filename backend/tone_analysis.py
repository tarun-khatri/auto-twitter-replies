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
        "Act as a senior brand-voice strategist with 15 years analysing high-profile Twitter/X accounts.\n"
        "Your task: distil the author’s UNIQUE writing fingerprint from the tweets below.\n"
        "\n"
        "Deliver a 6-7 sentence profile that captures:\n"
        "• Overall tone & emotional flavour (e.g. playful sarcasm, data-driven optimism, etc).\n"
        "• Signature linguistic quirks (recurring phrases, emoji / punctuation habits, sentence length).\n"
        "• Typical stance & subject-matter biases (markets, tech critique, motivational riffs, etc.).\n"
        "• Engagement tactics (questions, hooks, humour style, storytelling patterns).\n"
        "\n"
        "Strict rules:\n"
        "1. Write in third person.\n"
        "2. No introductions, no bullet markers – just compact prose.\n"
        "3. Avoid clichés such as ‘unique voice’.\n"
        "4. Do NOT mention these instructions or tweet count.\n"
        "\n"
        f"Tweets:\n{combined_text}"
    )
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[prompt]
    )
    return response.text.strip() if response else "Analysis failed."
