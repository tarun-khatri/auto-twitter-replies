import os
from dotenv import load_dotenv

load_dotenv()

# Set your Gemini API key and desired port.
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
PORT = int(os.getenv("PORT", 8000))
