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
        "Deliver a detailed 8-10 sentence analysis covering these critical dimensions:\n"
        "\n"
        "EMOTIONAL SIGNATURE & PERSONALITY:\n"
        "• Primary emotional register (sarcastic, enthusiastic, analytical, contemplative, etc.)\n"
        "• Secondary emotional tones that appear frequently\n"
        "• Overall personality traits (confident, humble, opinionated, diplomatic, etc.)\n"
        "• Emotional consistency vs. range across different topics\n"
        "\n"
        "COMMUNICATION STYLE & PATTERNS:\n"
        "• Sentence structure preferences (short/punchy vs. flowing/narrative)\n"
        "• Punctuation habits and quirks (excessive periods, strategic caps, emoji usage)\n"
        "• Vocabulary sophistication level and word choice patterns\n"
        "• Recurring phrases, verbal tics, or signature expressions\n"
        "• Contraction usage and formality level\n"
        "\n"
        "CONTENT FOCUS & PERSPECTIVE:\n"
        "• Primary topics and areas of expertise\n"
        "• Approach to subjects (critic, evangelist, educator, provocateur, observer)\n"
        "• Ideological leanings or clear biases\n"
        "• How they handle controversial topics\n"
        "• Knowledge depth and confidence in different areas\n"
        "\n"
        "ENGAGEMENT STRATEGY & RHETORICAL DEVICES:\n"
        "• Attention-grabbing techniques in opening lines\n"
        "• Preferred rhetorical devices (questions, bold claims, storytelling, data points)\n"
        "• Primary engagement drivers (controversy, humor, inspiration, information)\n"
        "• How they respond to others and build conversations\n"
        "• Call-to-action patterns or lack thereof\n"
        "\n"
        "UNIQUE VOICE CHARACTERISTICS:\n"
        "• What makes this voice distinct from typical social media communication\n"
        "• Signature elements that would be recognizable to followers\n"
        "• Memorable patterns or habits\n"
        "• How they stand out in their niche or topic area\n"
        "\n"
        "SYNTHESIS REQUIREMENTS:\n"
        "• Write in third person with analytical objectivity\n"
        "• Construct flowing prose without bullet points or section headers\n"
        "• Prioritize specific, observable patterns over generic descriptors\n"
        "• Avoid meta-commentary about the analysis process\n"
        "• Focus on distinctive elements that separate this voice from others\n"
        "• Ensure each sentence adds unique insight\n"
        "• Include specific examples of their communication patterns\n"
        "• Highlight both strengths and unique quirks\n"
        "• Make it actionable for voice replication\n"
        "\n"
        "TONE ANALYSIS OUTPUT FORMAT:\n"
        "Write a comprehensive, flowing analysis that captures the essence of this person's communication style. "
        "Focus on what makes them unique and how they naturally express themselves. This analysis will be used "
        "to generate replies that sound exactly like them, so be thorough and specific.\n"
        "\n"
        f"Source Material:\n{combined_text}"
    )
    
    config = types.GenerateContentConfig(
        max_output_tokens=400,
        temperature=0.3
    )
    
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[prompt],
        config=config
    )
    return response.text.strip() if response else "Analysis failed."
