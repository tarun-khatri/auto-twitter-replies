# backend/scraper.py
import json
import subprocess
import os
import sys
from typing import List
from config import RETTIWT_API_KEYS

def fetch_user_tweets(username: str) -> List[str]:
    """
    Fetch up to ~100 of the user's tweets using Rettiwt-API via a Node.js script.
    Implements key rotation/fallback across RETTIWT_API_KEYS to avoid rate limits.
    """
    tweets: List[str] = []
    
    print(f"[scraper][INFO] Starting Rettiwt fetch process for username: {username}")

    if not RETTIWT_API_KEYS:
        print("[scraper][ERROR] No RETTIWT_API_KEYS found in configuration. Please define them in .env!")
        return tweets

    # Determine script path accurately
    script_path = os.path.join(os.path.dirname(__file__), "rettiwt_scraper.js")
    if not os.path.exists(script_path):
        print(f"[scraper][ERROR] Cannot find {script_path}. Ensure it exists.")
        return tweets

    # Loop through the available API keys
    for attempt, api_key in enumerate(RETTIWT_API_KEYS, start=1):
        print(f"[scraper][INFO] Attempt {attempt}/{len(RETTIWT_API_KEYS)} using API Key starting with: {api_key[:10]}...")
        
        try:
            # Call the Node.js script
            print(f"[scraper][DEBUG] Executing: node {script_path} <API_KEY> {username}")
            
            # Use subprocess run. We capture stdout for the JSON payload and stderr for the Node logs.
            result = subprocess.run(
                ["node", script_path, api_key, username],
                capture_output=True,
                text=True,
                encoding='utf-8',
                check=False # We handle non-zero exit codes manually below
            )
            
            # Print Node.js logs directly to our python console so we can monitor them
            if result.stderr:
                print(f"--- [Node.js Logs Start] ---")
                print(result.stderr.strip())
                print(f"--- [Node.js Logs End] ---")

            if result.returncode == 0:
                print(f"[scraper][INFO] Node script exited successfully (code 0).")
                
                # The node script outputs a JSON string of the array on STDOUT
                raw_output = result.stdout.strip() if result.stdout else ""
                
                if raw_output:
                    try:
                        parsed_tweets = json.loads(raw_output)
                        if isinstance(parsed_tweets, list):
                            tweets = parsed_tweets
                            print(f"[scraper][INFO] Successfully parsed {len(tweets)} tweets for {username}.")
                            # If we get tweets successfully, we break out of the retry loop!
                            break
                        else:
                            print(f"[scraper][ERROR] JSON parsed but was not a list: {type(parsed_tweets)}")
                    except json.JSONDecodeError as e:
                        print(f"[scraper][ERROR] Failed to decode STDOUT as JSON: {e}")
                        print(f"[scraper][DEBUG] Raw STDOUT was: {raw_output}")
                else:
                    print(f"[scraper][WARNING] Node script exited successfully but returned empty STDOUT.")
                    
            else:
                print(f"[scraper][WARNING] Node script failed with return code {result.returncode}.")
                print(f"[scraper][WARNING] Falling back to the next API key if available...")

        except Exception as e:
            print(f"[scraper][ERROR] Exception occurred while calling subprocess: {e}")
            print(f"[scraper][WARNING] Falling back to the next API key if available...")

    if not tweets:
        print(f"[scraper][WARNING] Exhausted all {len(RETTIWT_API_KEYS)} keys and could not fetch tweets for {username}.")

    return tweets

def fetch_tweet_details(tweet_id: str) -> dict | None:
    """
    Fetch exact tweet text and image URLs using Rettiwt-API via a Node.js script.
    """
    print(f"[scraper][INFO] Starting Rettiwt fetch process for tweet_id: {tweet_id}")

    if not RETTIWT_API_KEYS:
        print("[scraper][ERROR] No RETTIWT_API_KEYS found in configuration.")
        return None

    script_path = os.path.join(os.path.dirname(__file__), "rettiwt_tweet_details.js")
    if not os.path.exists(script_path):
        print(f"[scraper][ERROR] Cannot find {script_path}. Ensure it exists.")
        return None

    for attempt, api_key in enumerate(RETTIWT_API_KEYS, start=1):
        print(f"[scraper][INFO] [Tweet Detail] Attempt {attempt}/{len(RETTIWT_API_KEYS)} using API Key...")
        
        try:
            result = subprocess.run(
                ["node", script_path, api_key, tweet_id],
                capture_output=True,
                text=True,
                encoding='utf-8',
                check=False
            )
            
            if result.stderr:
                print(f"--- [Node.js Logs Start] ---")
                print(result.stderr.strip())
                print(f"--- [Node.js Logs End] ---")

            if result.returncode == 0:
                raw_output = result.stdout.strip() if result.stdout else ""
                if raw_output:
                    try:
                        return json.loads(raw_output)
                    except json.JSONDecodeError as e:
                        print(f"[scraper][ERROR] Failed to decode STDOUT as JSON: {e}")
            else:
                print(f"[scraper][WARNING] Node script failed with return code {result.returncode}.")

        except Exception as e:
            print(f"[scraper][ERROR] Exception occurred while calling subprocess: {e}")

    return None
