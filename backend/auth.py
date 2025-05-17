import firebase_admin
from firebase_admin import credentials, auth
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Load Firebase credentials
firebase_creds = os.getenv("FIREBASE_CREDENTIALS")
if not firebase_creds:
    raise ValueError("FIREBASE_CREDENTIALS environment variable is not set")

try:
    firebase_cred = json.loads(firebase_creds)
    cred = credentials.Certificate(firebase_cred)
    firebase_admin.initialize_app(cred)
except json.JSONDecodeError:
    raise ValueError("Invalid JSON in FIREBASE_CREDENTIALS")
except Exception as e:
    raise ValueError(f"Error initializing Firebase: {str(e)}")

def verify_firebase_token(token: str):
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token["uid"]
    except Exception as e:
        raise ValueError("Invalid authentication token")
