from fastapi import APIRouter, Depends, HTTPException
from clerk_auth import verify_clerk_token
from database import db
from dodo_client import DodoClient
import os
import logging


router = APIRouter(prefix="/billing")


@router.get("/static-checkout-url")
async def get_static_checkout_url(clerk_uid: str = Depends(verify_clerk_token)):
    product_id = os.getenv("DODO_PRO_PRODUCT_ID")
    if not product_id:
        raise HTTPException(status_code=500, detail="PRO product not configured")
    return_url = os.getenv("DODO_RETURN_URL")
    if not return_url:
        raise HTTPException(status_code=500, detail="DODO_RETURN_URL not set")

    # Look up user email for checkout pre-fill
    user = db.users.find_one({"clerk_uid": clerk_uid})
    customer = None
    if user and user.get("email"):
        customer = {"email": user["email"]}

    # Try API checkout session first (recommended), fall back to static link
    try:
        client = DodoClient()
        result = client.create_checkout_session(
            product_id=product_id,
            return_url=return_url,
            customer=customer,
            metadata={"clerk_uid": clerk_uid},
        )
        checkout_url = result.get("checkout_url") or result.get("url")
        if checkout_url:
            return {"url": checkout_url}
    except Exception as e:
        logging.warning("[BILLING] API checkout failed, falling back to static link: %s", e)

    # Fallback: static checkout link
    from urllib.parse import quote
    env_value = (os.getenv("DODO_ENVIRONMENT") or "test").strip().lower()
    host = "checkout.dodopayments.com" if env_value in ("live", "production", "prod") else "test.checkout.dodopayments.com"
    q_return = quote(return_url, safe="")
    q_meta = quote(clerk_uid, safe="")
    base = f"https://{host}/buy/{product_id}"
    url = f"{base}?quantity=1&redirect_url={q_return}&metadata_clerk_uid={q_meta}"
    return {"url": url}


