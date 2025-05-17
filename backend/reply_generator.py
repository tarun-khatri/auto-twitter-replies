from google import genai
from google.genai import types
import re
import emoji

from config import GEMINI_API_KEY

# Initialize the Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)

# Utility to strip hashtags and emojis
def _filter_text(text: str) -> str:
    # Remove hashtags
    text = re.sub(r"#\S+", "", text)
    # Remove emojis
    text = emoji.replace_emoji(text, replace='')
    return text.strip()


def generate_reply(user_tone: str, tweet_text: str, num_replies: int = 1) -> list[str]:
    """
    Generate human-like replies using Gemini. If user_tone is empty or contains a placeholder
    asking for tweets, fall back to a generic reply prompt.
    Always returns exactly num_replies filtered replies.
    """
    # Check for insufficient or bot-like tone analysis
    if user_tone and (
        user_tone.startswith("Not enough tweet data") or
        user_tone.startswith("Your tweets appear highly repetitive")
    ):
        prompt = (
            "You are an expert at writing authentic, human-like Twitter replies.\n"
            "The user does not have enough original tweet data for accurate personalization.\n"
            "Write a reply to the following tweet in a natural, friendly, and human-like tone.\n"
            "- Do not include any hashtags, emojis, or filler/introductory phrases.\n"
            "- Only output the reply text, nothing else.\n\n"
            f"Tweet:\n{tweet_text}"
        )
    elif not user_tone or user_tone.lower().startswith("please provide the tweets"):
        prompt = (
            "You are an expert at writing authentic, human-like Twitter replies.\n"
            "Write a reply to the following tweet.\n"
            "- The reply must sound natural and human, as if written by a real person.\n"
            "- Do not include any hashtags, emojis, or filler/introductory phrases.\n"
            "- Only output the reply text, nothing else.\n\n"
            f"Tweet:\n{tweet_text}"
        )
    else:
        prompt = (
            "You are an expert at writing authentic, human-like Twitter replies.\n"
            "The user's typical tone, style, and personality are as follows:\n"
            f"{user_tone}\n\n"
            "Write a reply to the following tweet, strictly matching the user's tone, style, and behavior.\n"
            "- The reply must sound natural and human, as if written by the user.\n"
            "- Do not include any hashtags, emojis, or filler/introductory phrases.\n"
            "- Only output the reply text, nothing else.\n\n"
            f"Tweet:\n{tweet_text}"
        )

    replies = []
    config = types.GenerateContentConfig(
        max_output_tokens=60,
        temperature=0.7
    )
    for _ in range(max(1, num_replies)):
        try:
            response = client.models.generate_content(
                model="gemini-2.0-flash",
                contents=[prompt],
                config=config
            )
            raw = response.text if response and hasattr(response, "text") else ""
        except Exception:
            raw = ""
        # Filter out hashtags and emojis
        filtered = _filter_text(raw)
        # If filtering results in empty, keep raw as fallback
        replies.append(filtered or raw)

    return replies
