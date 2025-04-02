import firebase_admin
from firebase_admin import credentials, auth
import json
import os

# Load Firebase credentials
firebase_cred = json.loads(os.getenv("FIREBASE_CREDENTIALS"))
cred = credentials.Certificate(firebase_cred)
firebase_admin.initialize_app(cred)

def verify_firebase_token(token: str):
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token["uid"]
    except Exception as e:
        raise ValueError("Invalid authentication token")
