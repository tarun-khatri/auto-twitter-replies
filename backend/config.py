import os
from dotenv import load_dotenv

load_dotenv()

<<<<<<< HEAD
# Set your API keys and database URLs
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")
FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS")
=======
# Set your Gemini API key and desired port.
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
>>>>>>> 083b62acd7d35feb658e84bf523707acd348233a
PORT = int(os.getenv("PORT", 8000))
