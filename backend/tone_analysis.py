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
    "You are a senior brand-voice strategist with 15 years of experience analyzing high-profile social media accounts "
    "and distilling communication patterns for Fortune 500 companies. Your expertise lies in identifying the subtle "
    "linguistic DNA that makes each voice distinctive and memorable.\n"
    "\n"
    "Your mission: Extract and articulate this author's complete writing fingerprint from the provided tweets, "
    "creating a comprehensive profile that could enable accurate voice replication.\n"
    "\n"
    "Deliver a 6-7 sentence analysis covering these critical dimensions:\n"
    "\n"
    "EMOTIONAL SIGNATURE: Identify the dominant emotional register and tonal consistency. Does the author lean "
    "toward analytical detachment, warm enthusiasm, skeptical wit, or motivational energy? Note any emotional "
    "range or recurring mood patterns.\n"
    "\n"
    "LINGUISTIC FINGERPRINTS: Catalog specific language habits that repeat across tweets. This includes preferred "
    "sentence structures (short punchy statements vs. flowing narratives), punctuation quirks (excessive periods, "
    "strategic caps, emoji placement), recurring phrases or verbal tics, and vocabulary sophistication level.\n"
    "\n"
    "CONTENT GRAVITATIONAL PULL: Map the author's intellectual territory and ideological leanings. What topics "
    "consistently draw their attention? Do they approach subjects as a critic, evangelist, educator, or provocateur? "
    "Identify any clear biases or perspectives that color their commentary.\n"
    "\n"
    "AUDIENCE ENGAGEMENT ARCHITECTURE: Decode their social media strategy. How do they hook attention in opening "
    "lines? What rhetorical devices do they employ (questions, bold claims, storytelling, data points)? Do they "
    "favor controversy, humor, inspiration, or information as their primary engagement driver?\n"
    "\n"
    "SYNTHESIS REQUIREMENTS:\n"
    "• Write exclusively in third person with analytical objectivity\n"
    "• Construct flowing prose without bullet points or section headers in the final output\n"
    "• Prioritize specific, observable patterns over generic descriptors\n"
    "• Avoid meta-commentary about the analysis process or dataset size\n"
    "• Focus on distinctive elements that separate this voice from typical social media communication\n"
    "• Ensure each sentence adds unique insight rather than restating previous points\n"
    "\n"
    f"Source Material:\n{combined_text}"
)
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[prompt]
    )
    return response.text.strip() if response else "Analysis failed."
