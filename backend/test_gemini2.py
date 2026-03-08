from google import genai
from google.genai import types
from config import GEMINI_API_KEY
client = genai.Client(api_key=GEMINI_API_KEY)
config = types.GenerateContentConfig()
prompt = "Write a 3 sentence reply to a tweet saying: 'JUST IN: X launches made with AI labels'. Adopt a cynical but witty tone."
try:
    response = client.models.generate_content(
        model="gemini-1.5-pro",
        contents=[prompt],
        config=config
    )
    print("1.5 PRO SUCCESS:", response.text)
except Exception as e:
    print("1.5 PRO FAIL:", e)

try:
    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents=[prompt],
        config=config
    )
    print("1.5 FLASH SUCCESS:", response.text)
except Exception as e:
    print("1.5 FLASH FAIL:", e)
