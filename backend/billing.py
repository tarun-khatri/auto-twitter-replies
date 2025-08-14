from fastapi import APIRouter, Depends, HTTPException
from clerk_auth import verify_clerk_token
import os


router = APIRouter(prefix="/billing")


@router.get("/static-checkout-url")
def get_static_checkout_url(clerk_uid: str = Depends(verify_clerk_token)):
    product_id = os.getenv("DODO_PRO_PRODUCT_ID")
    if not product_id:
        raise HTTPException(status_code=500, detail="PRO product not configured")
    return_url = os.getenv("DODO_RETURN_URL")
    if not return_url:
        raise HTTPException(status_code=500, detail="DODO_RETURN_URL not set")

    # Pick correct checkout host by environment
    env_value = (os.getenv("DODO_ENVIRONMENT") or "test").strip().lower()
    host = "checkout.dodopayments.com" if env_value in ("live", "production", "prod") else "test.checkout.dodopayments.com"

    # Encode query params safely
    from urllib.parse import quote
    q_return = quote(return_url, safe="")
    q_meta = quote(clerk_uid, safe="")

    base = f"https://{host}/buy/" + product_id
    # Static links accept redirect_url per docs; quantity supported; metadata_* prefills metadata
    url = f"{base}?quantity=1&redirect_url={q_return}&metadata_clerk_uid={q_meta}"
    return {"url": url}


