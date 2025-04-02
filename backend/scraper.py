import requests
from bs4 import BeautifulSoup

def fetch_user_tweets(username):
    url = f"https://nitter.net/{username}"
    response = requests.get(url)
    
    if response.status_code != 200:
        raise Exception("Failed to fetch data from Nitter")

    soup = BeautifulSoup(response.text, "html.parser")
    tweets = []

    for tweet in soup.find_all("div", class_="tweet-content")[:500]:
        tweets.append(tweet.text.strip())

    return tweets
