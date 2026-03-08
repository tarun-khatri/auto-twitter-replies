from google import genai
from google.genai import types
import re
import emoji
import io

# Try to import PIL, but don't fail if it's not available
try:
    from PIL import Image
    PIL_AVAILABLE = True
    print("[PIL] PIL/Pillow is available")
except ImportError:
    PIL_AVAILABLE = False
    print("[PIL] PIL/Pillow not available - image processing will be limited")

from config import GEMINI_API_KEY

# Initialize the Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)

# Utility to strip hashtags and emojis
def _filter_text(text: str) -> str:
    if not text:
        return ""
    # Normalize excessive newlines and whitespace
    text = re.sub(r'\s+', ' ', text)
    # Remove hashtags
    text = re.sub(r"#\S+", "", text)
    # Remove emojis
    text = emoji.replace_emoji(text, replace='')
    return text.strip()


def _build_prompt(user_tone: str, tweet_text: str, tweet_author: str | None = None, has_images: bool = False) -> str:
    """Build the prompt based on user tone availability."""
    image_instruction = ""
    if has_images:
        image_instruction = "IMPORTANT: The tweet contains image(s) attached below. Look at them carefully and reference what you see when relevant.\n\n"

    # Fallback prompt when tone data is insufficient
    if user_tone and (
        user_tone.startswith("Not enough tweet data") or
        user_tone.startswith("Your tweets appear highly repetitive")
    ):
        return (
            f"{image_instruction}"
            "Write a Twitter reply to this tweet. Rules:\n"
            "- 1 sentence max, short and punchy\n"
            "- Must directly relate to what the tweet is actually about\n"
            "- Sound like a real person, not a motivational poster\n"
            "- No hashtags, no emojis, no quotes, no markdown\n"
            "- Just the reply text, nothing else\n\n"
            f"Tweet by @{tweet_author or 'user'}:\n{tweet_text}"
        )

    if not user_tone or user_tone.lower().startswith("please provide the tweets"):
        return (
            f"{image_instruction}"
            "Write a Twitter reply to this tweet. Rules:\n"
            "- 1 sentence, conversational and natural\n"
            "- Must directly respond to the specific content of the tweet\n"
            "- Sound like a real person scrolling their feed, not an AI\n"
            "- No hashtags, no emojis, no quotes, no markdown\n"
            "- Just the reply text, nothing else\n\n"
            f"Tweet by @{tweet_author or 'user'}:\n{tweet_text}"
        )

    # Main prompt with full tone analysis
    return (
        f"{image_instruction}"
        f"You are replying to a tweet AS this person. Here is their analyzed personality:\n"
        f"\n{user_tone}\n\n"
        "YOUR JOB: Write a reply that this person would actually type. Not inspired by them — AS them.\n\n"
        "HARD RULES:\n"
        "1. READ THE TWEET FIRST. Your reply must respond to what the tweet actually says. If it's about crypto, reply about crypto. If it's a joke, react to the joke. NEVER write a generic motivational reply.\n"
        "2. Keep it SHORT. 1 sentence is ideal. 2 max if truly needed. Real people don't write essays in replies.\n"
        "3. Match their exact vibe — if they're sarcastic, be sarcastic. If they're analytical, be analytical. If they're casual, be casual. Don't default to 'witty' if that's not who they are.\n"
        "4. Use their vocabulary level and sentence structure, NOT fancy AI language.\n"
        "5. No hashtags. No emojis. No quotes. No markdown. No asterisks. No 'Reply:' prefix.\n"
        "6. Don't parrot words from the tweet back at them.\n"
        "7. Output ONLY the reply text. Nothing else.\n\n"
        f"Tweet by @{tweet_author or 'user'}:\n{tweet_text}"
    )


def generate_reply(user_tone: str, tweet_text: str, num_replies: int = 1, tweet_author: str | None = None) -> list[str]:
    """
    Generate human-like replies using Gemini.
    Always returns exactly num_replies filtered replies.
    """
    prompt = _build_prompt(user_tone, tweet_text, tweet_author, has_images=False)

    replies = []
    config = types.GenerateContentConfig(
        max_output_tokens=150,
        temperature=0.9
    )
    models_to_try = ["gemini-3.1-flash-lite-preview", "gemini-2.0-flash"]
    for _ in range(max(1, num_replies)):
        raw = ""
        for model_name in models_to_try:
            got_response = False
            for attempt in range(2):
                try:
                    print(f"[GEMINI] Trying model={model_name}, attempt {attempt + 1}/2...")
                    response = client.models.generate_content(
                        model=model_name,
                        contents=[prompt],
                        config=config
                    )
                    raw = response.text if response and hasattr(response, "text") else ""
                    print(f"\n============= RAW GEMINI OUTPUT [{_}] (model={model_name}) =============\n{raw}\n==================================================\n")
                    if raw.strip():
                        got_response = True
                        break
                    print(f"[GEMINI WARN] Empty response on attempt {attempt + 1}, retrying...")
                except Exception as e:
                    print(f"[GEMINI FAIL] model={model_name} attempt {attempt + 1}/2: {e}")
                    if attempt < 1:
                        import time
                        time.sleep(1)
                    continue
            if got_response:
                break
            print(f"[GEMINI] model={model_name} failed, trying next model...")
        # Filter out hashtags and emojis
        filtered = _filter_text(raw)
        replies.append(filtered or raw)

    return replies


def generate_reply_with_images(user_tone: str, tweet_text: str, image_paths: list[str], num_replies: int = 1, tweet_author: str | None = None) -> list[str]:
    """
    Generate human-like replies using Gemini with image context.
    Uses multimodal AI to analyze both text and images in the tweet.
    """
    print(f"[MULTIMODAL] Starting multimodal reply generation with {len(image_paths)} images")
    print(f"[MULTIMODAL] Tweet text: {tweet_text[:100]}...")
    print(f"[MULTIMODAL] User tone: {user_tone[:100]}...")

    # Load images
    images = []
    for i, image_path in enumerate(image_paths):
        try:
            print(f"[IMAGE PROCESSING] Processing image {i+1}/{len(image_paths)}: {image_path}")
            with open(image_path, 'rb') as f:
                image_data = f.read()
                print(f"[IMAGE PROCESSING] Read {len(image_data)} bytes from file")

                if PIL_AVAILABLE:
                    pil_image = Image.open(io.BytesIO(image_data))
                    print(f"[IMAGE PROCESSING] PIL Image loaded: {pil_image.size} {pil_image.mode}")

                    if pil_image.mode != 'RGB':
                        pil_image = pil_image.convert('RGB')

                    max_size = 1024
                    if max(pil_image.size) > max_size:
                        ratio = max_size / max(pil_image.size)
                        new_size = (int(pil_image.size[0] * ratio), int(pil_image.size[1] * ratio))
                        pil_image = pil_image.resize(new_size, Image.Resampling.LANCZOS)
                        print(f"[IMAGE PROCESSING] Resized to {new_size}")

                    img_byte_arr = io.BytesIO()
                    pil_image.save(img_byte_arr, format='JPEG', quality=85)
                    img_byte_arr = img_byte_arr.getvalue()
                    images.append(img_byte_arr)
                    print(f"[IMAGE PROCESSING] Successfully processed image {i+1}: {len(img_byte_arr)} bytes")
                else:
                    print(f"[IMAGE PROCESSING] PIL not available, using raw image data")
                    images.append(image_data)
        except Exception as e:
            print(f"[IMAGE PROCESSING ERROR] Failed to load {image_path}: {e}")
            continue

    if not images:
        print("[IMAGE WARNING] No valid images loaded, falling back to text-only generation")
        return generate_reply(user_tone, tweet_text, num_replies, tweet_author)

    print(f"[MULTIMODAL] Successfully loaded {len(images)} images for AI processing")

    prompt = _build_prompt(user_tone, tweet_text, tweet_author, has_images=True)

    replies = []
    config = types.GenerateContentConfig(
        max_output_tokens=150,
        temperature=0.9
    )

    # Prepare content with images using proper Gemini types
    content_parts = []
    content_parts.append(types.Part(text=prompt))

    for i, img_bytes in enumerate(images):
        image_part = types.Part(inline_data=types.Blob(mime_type="image/jpeg", data=img_bytes))
        content_parts.append(image_part)
        print(f"[MULTIMODAL] Added image part {i+1}: {len(img_bytes)} bytes")

    print(f"[MULTIMODAL] Content structure: {len(content_parts)} parts (1 text + {len(images)} images)")

    models_to_try = ["gemini-3.1-flash-lite-preview", "gemini-2.0-flash"]
    for i in range(max(1, num_replies)):
        raw = ""
        for model_name in models_to_try:
            got_response = False
            for attempt in range(2):
                try:
                    print(f"[MULTIMODAL] Generating reply {i+1}/{num_replies} with model={model_name} (attempt {attempt+1}/2)...")
                    response = client.models.generate_content(
                        model=model_name,
                        contents=content_parts,
                        config=config
                    )
                    raw = response.text if response and hasattr(response, "text") else ""
                    print(f"[MULTIMODAL] Gemini multimodal response received: {raw[:100]}...")
                    if raw.strip():
                        got_response = True
                        break
                    print(f"[MULTIMODAL WARN] Empty response on attempt {attempt + 1}, retrying...")
                except Exception as e:
                    print(f"[MULTIMODAL FAIL] model={model_name} attempt {attempt + 1}/2: {e}")
                    if attempt < 1:
                        import time
                        time.sleep(1)
                    continue
            if got_response:
                break
            print(f"[MULTIMODAL] model={model_name} failed, trying next model...")

        # If multimodal completely failed, fall back to text-only
        if not raw.strip():
            print(f"[MULTIMODAL] All attempts failed, falling back to text-only...")
            fallback = generate_reply(user_tone, tweet_text, 1, tweet_author)
            raw = fallback[0] if fallback else ""

        filtered = _filter_text(raw)
        final_reply = filtered or raw
        replies.append(final_reply)
        print(f"[MULTIMODAL] Final reply {i+1}: {final_reply[:100]}...")

    return replies
