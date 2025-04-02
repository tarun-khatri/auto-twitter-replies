import os
from dotenv import load_dotenv

load_dotenv()

# Set your API keys and database URLs
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")
FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS")
PORT = int(os.getenv("PORT", 8000))
