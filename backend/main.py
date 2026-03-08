# backend/main.py
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi import Depends
from clerk_auth import verify_clerk_token
from database import db
from reply_generator import generate_reply, generate_reply_with_images
from users import router as users_router
from profiles import router as profiles_router
from billing import router as billing_router
from webhooks_dodo import router as dodo_webhooks_router
from config import PORT, CLERK_ALLOWED_ORIGINS
from scraper import fetch_user_tweets
from datetime import date, datetime, timezone
import tempfile
import requests
import os

app = FastAPI(title="Twitter Reply Generator")

# CORS for local dev
allowed_origins = CLERK_ALLOWED_ORIGINS or [
    "http://localhost:5173",
    "https://getverve.xyz",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)
app.include_router(profiles_router)
app.include_router(billing_router)
app.include_router(dodo_webhooks_router)

@app.on_event("startup")
def startup_db_check():
    try:
        db.command("ping")
        print(f"✅ MongoDB connected to database: {db.name}")
    except Exception as e:
        print(f"❌ MongoDB connection error: {e}")

class ReplyRequest(BaseModel):
    tweet_text: str
    image_urls: list[str] = []
    tweet_id: str | None = None
    page_url: str | None = None

FREE_DAILY_LIMIT = 15

@app.post("/generate_reply")
def generate_reply_endpoint(
    req: ReplyRequest,
    clerk_uid: str = Depends(verify_clerk_token)
):
    print(f"[GENERATE_REPLY] Request received from clerk_uid: {clerk_uid}")
    print(f"[GENERATE_REPLY] Tweet text: {req.tweet_text[:100]}...")
    print(f"[GENERATE_REPLY] Image URLs count: {len(req.image_urls)}")
    print(f"[GENERATE_REPLY] Tweet ID from extension: {req.tweet_id}")
    print(f"[GENERATE_REPLY] Page URL: {req.page_url}")

    # --- SERVER-SIDE TWEET ID & IMAGE EXTRACTION ---
    import re as _re

    # Strategy 1: Extract tweet_id from page_url (works when on tweet detail page)
    if not req.tweet_id and req.page_url:
        url_match = _re.search(r'/status/(\d+)', req.page_url)
        if url_match:
            req.tweet_id = url_match.group(1)
            print(f"[GENERATE_REPLY] Extracted tweet_id from page_url: {req.tweet_id}")

    # Strategy 2: Extract tweet_id from tweet text (sometimes contains x.com/user/status/ID links)
    if not req.tweet_id:
        text_match = _re.search(r'(?:twitter\.com|x\.com)/\w+/status/(\d+)', req.tweet_text)
        if text_match:
            req.tweet_id = text_match.group(1)
            print(f"[GENERATE_REPLY] Extracted tweet_id from tweet text: {req.tweet_id}")

    # Strategy 3: Resolve pic.x.com / pic.twitter.com URLs to get tweet_id
    # These URLs redirect to x.com/user/status/TWEET_ID/photo/1
    pic_url_match = _re.search(r'(?:https?://)?pic\.(x\.com|twitter\.com)/(\S+)', req.tweet_text)
    has_pic_url = bool(pic_url_match)
    if has_pic_url:
        print(f"[GENERATE_REPLY] Tweet text contains pic URL - images likely present")

    if not req.tweet_id and pic_url_match:
        pic_short_url = f"https://pic.{pic_url_match.group(1)}/{pic_url_match.group(2)}"
        print(f"[GENERATE_REPLY] Resolving pic URL to get tweet_id: {pic_short_url}")
        try:
            # Follow redirects to get the final URL which contains the tweet_id
            pic_response = requests.head(pic_short_url, allow_redirects=True, timeout=5, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            })
            final_url = pic_response.url
            print(f"[GENERATE_REPLY] Pic URL resolved to: {final_url}")
            id_match = _re.search(r'/status/(\d+)', final_url)
            if id_match:
                req.tweet_id = id_match.group(1)
                print(f"[GENERATE_REPLY] Extracted tweet_id from pic URL redirect: {req.tweet_id}")
        except Exception as e:
            print(f"[GENERATE_REPLY] Failed to resolve pic URL: {e}")

    # Strategy 4: Try resolving any t.co or https:// short links in tweet text
    if not req.tweet_id:
        tco_match = _re.search(r'https?://t\.co/(\S+)', req.tweet_text)
        if tco_match:
            tco_url = tco_match.group(0)
            print(f"[GENERATE_REPLY] Resolving t.co URL: {tco_url}")
            try:
                tco_response = requests.head(tco_url, allow_redirects=True, timeout=5, headers={
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                })
                final_url = tco_response.url
                print(f"[GENERATE_REPLY] t.co URL resolved to: {final_url}")
                id_match = _re.search(r'/status/(\d+)', final_url)
                if id_match:
                    req.tweet_id = id_match.group(1)
                    print(f"[GENERATE_REPLY] Extracted tweet_id from t.co redirect: {req.tweet_id}")
            except Exception as e:
                print(f"[GENERATE_REPLY] Failed to resolve t.co URL: {e}")

    # Now use tweet_id (from any source) to fetch tweet details via Rettiwt
    if req.tweet_id:
        print(f"[GENERATE_REPLY] Using tweet_id: {req.tweet_id}. Fetching exact details via Rettiwt...")
        from scraper import fetch_tweet_details
        tweet_data = fetch_tweet_details(req.tweet_id)
        if tweet_data:
            print(f"[GENERATE_REPLY] Found exact tweet data via Rettiwt. Overriding payload...")
            req.tweet_text = f"@{tweet_data.get('author', 'Unknown')} | {tweet_data.get('text', req.tweet_text)}"
            rettiwt_images = tweet_data.get("image_urls", [])
            if rettiwt_images:
                print(f"[GENERATE_REPLY] Using Rettiwt images: {rettiwt_images}")
                req.image_urls = rettiwt_images
            else:
                print(f"[GENERATE_REPLY] Rettiwt returned no images, keeping extension-provided URLs: {req.image_urls}")
            print(f"[GENERATE_REPLY] Overridden text: {req.tweet_text[:100]}")
            print(f"[GENERATE_REPLY] Final images: {req.image_urls}")
        else:
            print(f"[GENERATE_REPLY] Rettiwt fetch failed for tweet_id: {req.tweet_id}")

    # Clean up pic/t.co URLs from tweet text (they're just noise for the AI)
    if has_pic_url:
        req.tweet_text = _re.sub(r'\s*(?:https?://)?pic\.(x\.com|twitter\.com)/\S+', '', req.tweet_text).strip()
    req.tweet_text = _re.sub(r'\s*https?://t\.co/\S+', '', req.tweet_text).strip()
    # Also clean up orphaned "https://" fragments (Twitter text sometimes has these on separate lines)
    req.tweet_text = _re.sub(r'\s*https?://\s*$', '', req.tweet_text, flags=_re.MULTILINE).strip()

    if req.image_urls:
        print(f"[GENERATE_REPLY] Image URLs: {req.image_urls}")
    
    # 1. get user and enforce daily quota
    user_doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not user_doc:
        print(f"[GENERATE_REPLY] User not found for clerk_uid: {clerk_uid}")
        raise HTTPException(status_code=404, detail="User not found")
    
    print(f"[GENERATE_REPLY] User found: {user_doc.get('username', 'unknown')}")

    # Get current UTC date
    today_utc = datetime.now(timezone.utc).date().isoformat()
    last_quota_date = user_doc.get("last_quota_date")
    current_used = user_doc.get("quota_used_today", 0)
    
    print(f"[QUOTA DEBUG] Today UTC: {today_utc}, Last quota date: {last_quota_date}, Current used: {current_used}")
    
    # Reset quota if it's a new UTC day (midnight UTC)
    if last_quota_date != today_utc:
        print(f"[QUOTA RESET] New UTC day - resetting quota to 0")
        db.users.update_one({"_id": user_doc["_id"]}, {"$set": {"last_quota_date": today_utc, "quota_used_today": 0}})
        user_doc["quota_used_today"] = 0
        current_used = 0

    if user_doc.get("plan", "FREE") == "FREE" and current_used >= FREE_DAILY_LIMIT:
        raise HTTPException(status_code=429, detail="Daily quota exceeded")

    # 2. fetch active profile
    profile_id = user_doc.get("active_profile_id")
    if not profile_id:
        raise HTTPException(status_code=400, detail="No active profile")

    profile_doc = db.profiles.find_one({"_id": profile_id})
    if not profile_doc:
        raise HTTPException(status_code=404, detail="Active profile not found")

    tone = profile_doc.get("tone_summary")
    if tone is None:
        raise HTTPException(status_code=400, detail="Tone analysis not ready")
    if tone == "":
        tone = "neutral and friendly"

    # 3. generate reply (with images if available)
    print(f"[GENERATE_REPLY] Starting reply generation...")
    temp_images = []
    try:
        if req.image_urls:
            print(f"[GENERATE_REPLY] Processing {len(req.image_urls)} images...")
            # Download images to temporary files
            for i, url in enumerate(req.image_urls):
                try:
                    print(f"[IMAGE DOWNLOAD] Attempting to download image {i+1}/{len(req.image_urls)}: {url}")
                    response = requests.get(url, headers={
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                    }, timeout=10)
                    response.raise_for_status()
                    
                    # Create temporary file
                    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.jpg')
                    temp_file.write(response.content)
                    temp_file.close()
                    temp_images.append(temp_file.name)
                    
                    print(f"[IMAGE SUCCESS] Downloaded image {i+1}/{len(req.image_urls)}: {url} -> {temp_file.name} ({len(response.content)} bytes)")
                except Exception as e:
                    print(f"[IMAGE ERROR] Failed to download image {url}: {e}")
                    continue
            
            if temp_images:
                print(f"[GENERATE_REPLY] Successfully downloaded {len(temp_images)} images, using multimodal AI")
                # Generate reply with images using multimodal AI
                reply = generate_reply_with_images(
                    user_tone=tone, 
                    tweet_text=req.tweet_text, 
                    image_paths=temp_images,
                    num_replies=1
                )[0]
                print(f"[GENERATE_REPLY] Multimodal reply generated: {reply[:100]} {'...' if len(reply) > 100 else ''}")
            else:
                print(f"[GENERATE_REPLY] No images downloaded successfully, falling back to text-only")
                # Fallback to text-only if image download failed
                reply = generate_reply(user_tone=tone, tweet_text=req.tweet_text, num_replies=1)[0]
                print(f"[GENERATE_REPLY] Text-only reply generated: {reply[:100]} {'...' if len(reply) > 100 else ''}")
        else:
            print(f"[GENERATE_REPLY] No images provided, using text-only generation")
            # No images, use text-only generation
            reply = generate_reply(user_tone=tone, tweet_text=req.tweet_text, num_replies=1)[0]
            print(f"[GENERATE_REPLY] Text-only reply generated: {reply[:100]} {'...' if len(reply) > 100 else ''}")
    except Exception as e:
        print(f"[GENERATE_REPLY ERROR] Exception during reply generation: {e}")
        # Fallback to text-only generation
        reply = generate_reply(user_tone=tone, tweet_text=req.tweet_text, num_replies=1)[0]
        print(f"[GENERATE_REPLY] Fallback reply generated: {reply[:100]} {'...' if len(reply) > 100 else ''}")
    finally:
        # Clean up temporary image files
        print(f"[IMAGE CLEANUP] Cleaning up {len(temp_images)} temporary files...")
        for temp_file in temp_images:
            try:
                if os.path.exists(temp_file):
                    os.unlink(temp_file)
                    print(f"[IMAGE CLEANUP] Deleted: {temp_file}")
            except Exception as e:
                print(f"[IMAGE CLEANUP ERROR] Failed to delete {temp_file}: {e}")

    # If reply is empty after all retries, return error without consuming quota
    if not reply or not reply.strip():
        print(f"[GENERATE_REPLY] Empty reply after all attempts - returning error without consuming quota")
        raise HTTPException(
            status_code=503,
            detail="AI model is temporarily unavailable. Please try again in a few seconds."
        )

    # 4. increment quota and calculate remaining (PRO users unlimited)
    current_used = user_doc.get("quota_used_today", 0)
    new_used = current_used + 1
    plan = user_doc.get("plan", "FREE")
    calculated_remaining = max(0, FREE_DAILY_LIMIT - new_used)
    print(f"[QUOTA DEBUG] Clerk: {clerk_uid}, Plan: {plan}, Current used: {current_used}, New used: {new_used}, Remaining (FREE only): {calculated_remaining}")
    db.users.update_one({"_id": user_doc["_id"]}, {"$inc": {"quota_used_today": 1}})

    remaining = None if plan == "PRO" else calculated_remaining

    return {"reply": reply, "remaining_quota": remaining}

@app.get("/users/{clerk_uid}/profile")
def get_user_profile(clerk_uid: str):
    user_doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not user_doc:
        raise HTTPException(status_code=404, detail="User not found")
    # Return tone summary, tweet count, last scraped, and recent replies (if any)
    return {
        "tone_summary": user_doc.get("tone_summary", ""),
        "tweet_count": user_doc.get("tweet_count", 0),
        "last_scraped_at": user_doc.get("last_scraped_at", ""),
        "recent_replies": user_doc.get("recent_replies", [])
    }

@app.post("/users/{clerk_uid}/history")
def add_reply_history(clerk_uid: str, data: dict):
    # data = {"tweet": ..., "reply": ...}
    if not data.get("tweet") or not data.get("reply"):
        raise HTTPException(status_code=400, detail="Missing tweet or reply")

    user_doc = db.users.find_one({"clerk_uid": clerk_uid})
    if not user_doc or not user_doc.get("active_profile_id"):
        raise HTTPException(status_code=404, detail="Active profile not found")

    db.profiles.update_one(
        {"_id": user_doc["active_profile_id"]},
        {"$push": {"recent_replies": {"tweet": data["tweet"], "reply": data["reply"]}}}
    )
    return {"status": "ok"}

@app.websocket("/ws/scrape/{username}")
async def websocket_scrape(websocket: WebSocket, username: str):
    await websocket.accept()
    try:
        tweets = fetch_user_tweets(username)
        await websocket.send_json({
            "status": "completed",
            "tweets_found": len(tweets),
            "tweets": tweets
        })
    except WebSocketDisconnect:
        # client disconnected, nothing to do
        pass
    except Exception as e:
        await websocket.send_json({
            "status": "error",
            "message": str(e),
            "tweets_found": 0,
            "tweets": []
        })
    finally:
        await websocket.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT, reload=True)
    
#   uvicorn main:app --host 0.0.0.0 --port 8000 --reload