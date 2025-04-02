from pymongo import MongoClient
from config import MONGO_URI

client = MongoClient(MONGO_URI)
db = client.twitter_clone

def store_user_data(user_id, tweets, analysis):
    db.users.update_one(
        {"user_id": user_id},
        {"$set": {"tweets": tweets, "tone_analysis": analysis}},
        upsert=True
    )
