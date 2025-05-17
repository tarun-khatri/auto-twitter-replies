import os
from dotenv import load_dotenv, find_dotenv

dotenv_path = find_dotenv()
if not dotenv_path:
    raise RuntimeError("⚠️  Could not find a .env file; make sure it’s in backend/.env")
load_dotenv(dotenv_path)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")
FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS")
PORT = int(os.getenv("PORT", 8000))

if not MONGO_URI:
    raise ValueError("❌ MONGO_URI is not set or is empty in your .env")

