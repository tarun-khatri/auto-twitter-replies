# backend/database.py
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from config import MONGO_URI

# 1) Create the client with Server API version 1
client = MongoClient(
    MONGO_URI,
    server_api=ServerApi("1"),
    serverSelectionTimeoutMS=5000
)

# 2) Pick your database explicitly (the name you created in Atlas)
DB_NAME = "automate_twitter_reply"
db = client[DB_NAME]

# 3) On import, verify the connection immediately
try:
    client.admin.command("ping")
    print(f"✅ MongoDB connected to database: {DB_NAME}")
except Exception as e:
    print("❌ MongoDB connection error:", e)

def store_user_data(user_id, tweets, analysis):
    """Upsert a user's tweets + analysis into the users collection."""
    db.users.update_one(
        {"user_id": user_id},
        {"$set": {"tweets": tweets, "tone_analysis": analysis}},
        upsert=True
    )
