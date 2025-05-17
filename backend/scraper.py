# backend/scraper.py
import feedparser
import requests
from typing import List

def fetch_user_tweets(username: str) -> List[str]:
    """
    Fetch up to 400 of the user's tweets (and replies if available) via public RSS.
    1) Try TwitRSS.me
    2) If that yields zero entries, try the xcancel.com “with_replies” feed
    """
    tweets: List[str] = []

    # 1) Primary: TwitRSS.me
    rss1 = f"https://twitrss.me/twitter_user_to_rss/?user={username}"
    feed = feedparser.parse(rss1)
    if getattr(feed, "bozo", False):
        print(f"[scraper] TwitRSS failed for {username}, bozo_exception={feed.bozo_exception}")
    else:
        for entry in feed.entries[:400]:
            text = getattr(entry, "title", "") or getattr(entry, "summary", "")
            if text:
                tweets.append(text.strip())
        print(f"[scraper] {username} → TwitRSS.me found {len(tweets)} tweets")

    # 2) Fallback: xcancel.com (includes replies, paginated)
    if not tweets:
        page = 1
        seen = set()
        while len(tweets) < 150:
            rss2 = f"https://rss.xcancel.com/{username}/with_replies/rss?page={page}"
            feed2 = feedparser.parse(rss2)
            if getattr(feed2, "bozo", False):
                print(f"[scraper] xcancel RSS failed for {username} page {page}, bozo_exception={feed2.bozo_exception}")
                break
            new_tweets = []
            for entry in feed2.entries:
                text = getattr(entry, "title", "") or getattr(entry, "summary", "")
                if text:
                    clean = text.strip()
                    if clean not in seen:
                        new_tweets.append(clean)
                        seen.add(clean)
            if not new_tweets:
                break  # No more new tweets, stop
            tweets.extend(new_tweets)
            print(f"[scraper] {username} → xcancel.com page {page} fetched {len(new_tweets)} new tweets (total: {len(tweets)})")
            page += 1
        print(f"[scraper] {username} → xcancel.com total fetched {len(tweets)} tweets")

    # 3) Final fallback: empty
    if not tweets:
        print(f"[scraper] {username} → no tweets found via RSS")

    return tweets
