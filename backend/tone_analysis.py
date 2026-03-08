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
    combined_text = "\n---\n".join(user_tweets[:100])
    prompt = (
        "You are an elite communication analyst building a voice-replication profile. Your analysis will be used "
        "by an AI to write replies that are indistinguishable from this person's actual writing.\n"
        "\n"
        "Analyze these tweets and produce a DETAILED voice profile covering ALL of the following:\n"
        "\n"
        "PERSONALITY & MINDSET:\n"
        "- Their core identity and how they see themselves (leader, rebel, hustler, intellectual, comedian, etc.)\n"
        "- Their emotional baseline (cynical, optimistic, aggressive, chill, intense, detached)\n"
        "- What they care about deeply vs. what they dismiss\n"
        "- Their relationship with their audience (mentor, peer, provocateur, entertainer)\n"
        "\n"
        "HUMOR & WIT STYLE:\n"
        "- Exactly how they use humor (dark, self-deprecating, dry, sarcastic, absurdist, none)\n"
        "- How they deliver punchlines (one-liners, build-up, deadpan, exaggeration)\n"
        "- What they find funny vs. what they take seriously\n"
        "\n"
        "LANGUAGE PATTERNS:\n"
        "- Sentence length and structure (fragments vs. full sentences, simple vs. complex)\n"
        "- Capitalization habits (all lowercase? Normal? Strategic caps for emphasis?)\n"
        "- Punctuation style (periods, ellipses, dashes, no punctuation, exclamation marks)\n"
        "- Vocabulary level (street slang, professional, academic, internet-native, mixed)\n"
        "- Favorite phrases, verbal tics, or recurring expressions they use\n"
        "- How they start tweets (declarations, questions, reactions, stories)\n"
        "\n"
        "ENGAGEMENT STYLE:\n"
        "- How they agree with people (enthusiastic, cool, minimal)\n"
        "- How they disagree or argue (aggressive, dismissive, logical, sarcastic)\n"
        "- How they respond to praise, criticism, or questions\n"
        "- Their typical reply length (one word, one sentence, paragraph)\n"
        "\n"
        "TOPICS & VALUES:\n"
        "- Main subjects they tweet about\n"
        "- Their stance and opinions on their core topics\n"
        "- What triggers them to be passionate, angry, or excited\n"
        "\n"
        "OUTPUT RULES:\n"
        "- Write 15-20 sentences of flowing analytical prose (NO bullet points, NO headers, NO numbered lists)\n"
        "- Write in third person\n"
        "- Include specific examples from their tweets woven naturally into the analysis\n"
        "- Make it so detailed that a ghostwriter could perfectly mimic this person after reading it\n"
        "- Focus on ACTIONABLE patterns, not vague descriptions\n"
        "\n"
        f"TWEETS TO ANALYZE:\n{combined_text}"
    )

    config = types.GenerateContentConfig(
        max_output_tokens=1200,
        temperature=0.7
    )

    # Retry up to 3 times on transient failures
    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model="gemini-3.1-flash-lite-preview",
                contents=[prompt],
                config=config
            )
            result = response.text.strip() if response else ""
            if result:
                return result
            print(f"[TONE ANALYSIS] Empty response on attempt {attempt + 1}, retrying...")
        except Exception as e:
            print(f"[TONE ANALYSIS FAIL] Attempt {attempt + 1}/3: {e}")
            if attempt < 2:
                import time
                time.sleep(2 * (attempt + 1))

    return "Analysis temporarily unavailable. Please try again later."
