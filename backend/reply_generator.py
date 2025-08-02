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
    # Remove hashtags
    text = re.sub(r"#\S+", "", text)
    # Remove emojis
    text = emoji.replace_emoji(text, replace='')
    return text.strip()


def generate_reply(user_tone: str, tweet_text: str, num_replies: int = 1, tweet_author: str | None = None) -> list[str]:
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
            "You are an expert at writing authentic, human-like Twitter replies with a naturally sarcastic edge.\n"
            "The user does not have enough original tweet data for accurate personalization.\n"
            "Write a reply to the following tweet in a natural, friendly, and slightly sarcastic tone.\n"
            "- Add subtle wit or dry humor naturally\n"
            "- Do not include any hashtags, emojis, or filler/introductory phrases\n"
            "- Do not repeat words or phrases from the original tweet\n"
            "- Keep it under one sentence only\n"
            "- Output ONLY the reply text - no quotes, no markdown, no explanations\n"
            "- Do not use asterisks, backticks, or any formatting\n"
            "- Just write the reply as plain text\n\n"
            f"Tweet:\n{tweet_text}"
        )
    elif not user_tone or user_tone.lower().startswith("please provide the tweets"):
        prompt = (
            "You are an expert at writing authentic, human-like Twitter replies with a naturally sarcastic edge.\n"
            "Write a reply to the following tweet.\n"
            "- The reply must sound natural and human, as if written by a real person\n"
            "- Add subtle wit or dry humor naturally\n"
            "- Do not include any hashtags, emojis, or filler/introductory phrases\n"
            "- Do not repeat words or phrases from the original tweet\n"
            "- Keep it under one sentence only\n"
            "- Output ONLY the reply text - no quotes, no markdown, no explanations\n"
            "- Do not use asterisks, backticks, or any formatting\n"
            "- Just write the reply as plain text\n\n"
            f"Tweet:\n{tweet_text}"
        )
    else:
        prompt = (
            "You're ghostwriting Twitter replies for someone with a specific communication style. Study their tone and personality, "
            "then write replies that capture their essence without copying their exact words.\n"
            "\n"
            f"THEIR PERSONALITY & TONE:\n{user_tone}\n"
            "\n"
            "CRITICAL RULES:\n"
            "• DO NOT copy specific words, phrases, or sentences from their tone analysis\n"
            "• DO NOT repeat words or phrases from the original tweet\n"
            "• DO NOT use the same sentence structure as their analysis\n"
            "• Instead, understand their communication patterns and recreate them naturally\n"
            "\n"
            "UNDERSTAND THEIR STYLE:\n"
            "• Communication approach (formal/casual, direct/evasive, etc.)\n"
            "• Emotional tendencies (sarcastic, enthusiastic, analytical, etc.)\n"
            "• Typical sentence structure and length\n"
            "• Common topics they discuss\n"
            "• Overall personality traits\n"
            "\n"
            "REPLY REQUIREMENTS:\n"
            "1. Be SARCASTIC by default - add witty, dry humor to every reply\n"
            "2. Match their communication style but use completely different words\n"
            "3. Keep it under one sentence only\n"
            "4. Sound natural and spontaneous, like a real person\n"
            "5. Vary sentence structure - avoid repetitive patterns\n"
            "6. Use contractions and casual language\n"
            "7. Show personality without being overly formal\n"
            "8. Never repeat words from the tweet or tone analysis\n"
            "\n"
            "TONE GUIDELINES:\n"
            "• Always include subtle sarcasm or witty commentary\n"
            "• If they're analytical: be smart but add a sarcastic twist\n"
            "• If they're enthusiastic: be excited but with a hint of irony\n"
            "• If they're blunt: be direct but cleverly so\n"
            "• If they use jargon: reference it naturally with humor\n"
            "• Make it feel like a real person having a casual, slightly sarcastic conversation\n"
            "• Use your own vocabulary, not theirs\n"
            "\n"
            "OUTPUT FORMAT:\n"
            "• Output ONLY the reply text - nothing else\n"
            "• No quotes, no markdown formatting, no explanations\n"
            "• Do not use asterisks (*), backticks (`), or any formatting\n"
            "• Just write the reply as plain text\n"
            "• No \"Reply:\" or any prefix\n"
            "• No additional commentary or context\n"
            "\n"
            "Write ONE reply that captures their personality with your own words, always with a sarcastic edge:\n"
            "\n"
            f"Tweet to reply to:\n@{tweet_author or 'user'}\n"
            f"Content/Tweet text: {tweet_text}"
        )

    replies = []
    config = types.GenerateContentConfig(
        max_output_tokens=40,
        temperature=0.9
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
                    # Convert to PIL Image for processing
                    pil_image = Image.open(io.BytesIO(image_data))
                    print(f"[IMAGE PROCESSING] PIL Image loaded: {pil_image.size} {pil_image.mode}")
                    
                    # Convert to RGB if necessary
                    if pil_image.mode != 'RGB':
                        pil_image = pil_image.convert('RGB')
                        print(f"[IMAGE PROCESSING] Converted to RGB mode")
                    
                    # Resize if too large (Gemini has size limits)
                    max_size = 1024
                    if max(pil_image.size) > max_size:
                        ratio = max_size / max(pil_image.size)
                        new_size = (int(pil_image.size[0] * ratio), int(pil_image.size[1] * ratio))
                        pil_image = pil_image.resize(new_size, Image.Resampling.LANCZOS)
                        print(f"[IMAGE PROCESSING] Resized to {new_size}")
                    
                    # Convert back to bytes
                    img_byte_arr = io.BytesIO()
                    pil_image.save(img_byte_arr, format='JPEG', quality=85)
                    img_byte_arr = img_byte_arr.getvalue()
                    images.append(img_byte_arr)
                    print(f"[IMAGE PROCESSING] Successfully processed image {i+1}: {len(img_byte_arr)} bytes")
                else:
                    # Fallback: use raw image data without processing
                    print(f"[IMAGE PROCESSING] PIL not available, using raw image data")
                    images.append(image_data)
                    print(f"[IMAGE PROCESSING] Using raw image data: {len(image_data)} bytes")
        except Exception as e:
            print(f"[IMAGE PROCESSING ERROR] Failed to load {image_path}: {e}")
            continue

    if not images:
        print("[IMAGE WARNING] No valid images loaded, falling back to text-only generation")
        return generate_reply(user_tone, tweet_text, num_replies, tweet_author)
    
    print(f"[MULTIMODAL] Successfully loaded {len(images)} images for AI processing")

    # Check for insufficient or bot-like tone analysis
    if user_tone and (
        user_tone.startswith("Not enough tweet data") or
        user_tone.startswith("Your tweets appear highly repetitive")
    ):
        prompt = (
            "You are an expert at writing authentic, human-like Twitter replies with a naturally sarcastic edge.\n"
            "The user does not have enough original tweet data for accurate personalization.\n"
            "Write a reply to the following tweet and image(s) in a natural, friendly, and slightly sarcastic tone.\n"
            "- Analyze the image(s) for context and visual elements that might be relevant to the tweet\n"
            "- Add subtle wit or dry humor naturally\n"
            "- Do not include any hashtags, emojis, or filler/introductory phrases\n"
            "- Do not repeat words or phrases from the original tweet\n"
            "- Keep it under one sentence only\n"
            "- Output ONLY the reply text - no quotes, no markdown, no explanations\n"
            "- Do not use asterisks, backticks, or any formatting\n"
            "- Just write the reply as plain text\n\n"
            f"Tweet:\n{tweet_text}"
        )
    elif not user_tone or user_tone.lower().startswith("please provide the tweets"):
        prompt = (
            "You are an expert at writing authentic, human-like Twitter replies with a naturally sarcastic edge.\n"
            "Write a reply to the following tweet and image(s).\n"
            "- Analyze the image(s) for context and visual elements that might be relevant to the tweet\n"
            "- The reply must sound natural and human, as if written by a real person\n"
            "- Add subtle wit or dry humor naturally\n"
            "- Do not include any hashtags, emojis, or filler/introductory phrases\n"
            "- Do not repeat words or phrases from the original tweet\n"
            "- Keep it under one sentence only\n"
            "- Output ONLY the reply text - no quotes, no markdown, no explanations\n"
            "- Do not use asterisks, backticks, or any formatting\n"
            "- Just write the reply as plain text\n\n"
            f"Tweet:\n{tweet_text}"
        )
    else:
        prompt = (
            "You're ghostwriting Twitter replies for someone with a specific communication style. Study their tone and personality, "
            "then write replies that capture their essence without copying their exact words.\n"
            "\n"
            f"THEIR PERSONALITY & TONE:\n{user_tone}\n"
            "\n"
            "CRITICAL RULES:\n"
            "• DO NOT copy specific words, phrases, or sentences from their tone analysis\n"
            "• DO NOT repeat words or phrases from the original tweet\n"
            "• DO NOT use the same sentence structure as their analysis\n"
            "• Instead, understand their communication patterns and recreate them naturally\n"
            "\n"
            "UNDERSTAND THEIR STYLE:\n"
            "• Communication approach (formal/casual, direct/evasive, etc.)\n"
            "• Emotional tendencies (sarcastic, enthusiastic, analytical, etc.)\n"
            "• Typical sentence structure and length\n"
            "• Common topics they discuss\n"
            "• Overall personality traits\n"
            "\n"
            "REPLY REQUIREMENTS:\n"
            "1. Be SARCASTIC by default - add witty, dry humor to every reply\n"
            "2. Match their communication style but use completely different words\n"
            "3. Keep it under one sentence only\n"
            "4. Sound natural and spontaneous, like a real person\n"
            "5. Vary sentence structure - avoid repetitive patterns\n"
            "6. Use contractions and casual language\n"
            "7. Show personality without being overly formal\n"
            "8. Never repeat words from the tweet or tone analysis\n"
            "9. Analyze the image(s) for context and visual elements relevant to the tweet\n"
            "\n"
            "TONE GUIDELINES:\n"
            "• Always include subtle sarcasm or witty commentary\n"
            "• If they're analytical: be smart but add a sarcastic twist\n"
            "• If they're enthusiastic: be excited but with a hint of irony\n"
            "• If they're blunt: be direct but cleverly so\n"
            "• If they use jargon: reference it naturally with humor\n"
            "• Make it feel like a real person having a casual, slightly sarcastic conversation\n"
            "• Use your own vocabulary, not theirs\n"
            "• Reference visual elements from the image(s) when relevant\n"
            "\n"
            "OUTPUT FORMAT:\n"
            "• Output ONLY the reply text - nothing else\n"
            "• No quotes, no markdown formatting, no explanations\n"
            "• Do not use asterisks (*), backticks (`), or any formatting\n"
            "• Just write the reply as plain text\n"
            "• No \"Reply:\" or any prefix\n"
            "• No additional commentary or context\n"
            "\n"
            "Write ONE reply that captures their personality with your own words, always with a sarcastic edge:\n"
            "\n"
            f"Tweet to reply to:\n@{tweet_author or 'user'}\n"
            f"Content/Tweet text: {tweet_text}"
        )

    replies = []
    config = types.GenerateContentConfig(
        max_output_tokens=40,
        temperature=0.9
    )
    
    # Prepare content with images using proper Gemini types
    content_parts = []
    
    # Add text prompt
    content_parts.append(types.Part(text=prompt))
    
    # Add images as parts
    for i, img_bytes in enumerate(images):
        image_part = types.Part(inline_data=types.Blob(mime_type="image/jpeg", data=img_bytes))
        content_parts.append(image_part)
        print(f"[MULTIMODAL] Added image part {i+1}: {len(img_bytes)} bytes")
    
    print(f"[MULTIMODAL] Content structure: {len(content_parts)} parts (1 text + {len(images)} images)")

    for i in range(max(1, num_replies)):
        try:
            print(f"[MULTIMODAL] Generating reply {i+1}/{num_replies} with Gemini...")
            # Try multimodal model first
            try:
                response = client.models.generate_content(
                    model="gemini-2.0-flash-exp",
                    contents=content_parts,
                    config=config
                )
                raw = response.text if response and hasattr(response, "text") else ""
                print(f"[MULTIMODAL] Gemini multimodal response received: {raw[:100]}...")
            except Exception as multimodal_error:
                print(f"[MULTIMODAL] Multimodal model failed: {multimodal_error}")
                # Try with regular model
                print(f"[MULTIMODAL] Trying with regular Gemini model...")
                response = client.models.generate_content(
                    model="gemini-2.0-flash",
                    contents=[types.Part(text=prompt)],  # Only send text prompt
                    config=config
                )
                raw = response.text if response and hasattr(response, "text") else ""
                print(f"[MULTIMODAL] Gemini text-only response received: {raw[:100]}...")
        except Exception as e:
            print(f"[MULTIMODAL ERROR] Failed to generate reply with images: {e}")
            # Fallback to text-only
            print(f"[MULTIMODAL] Falling back to text-only generation...")
            raw = generate_reply(user_tone, tweet_text, 1, tweet_author)[0]
        
        # Filter out hashtags and emojis
        filtered = _filter_text(raw)
        # If filtering results in empty, keep raw as fallback
        final_reply = filtered or raw
        replies.append(final_reply)
        print(f"[MULTIMODAL] Final reply {i+1}: {final_reply[:100]}...")

    return replies
