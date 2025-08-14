from fastapi import APIRouter, Request, HTTPException
from database import db
import os
import hmac
import hashlib
import base64
import logging
import string
try:
    from standardwebhooks import Webhook as StdWebhook  # optional verification lib
except Exception:
    StdWebhook = None


router = APIRouter()


def _decode_secret_candidates(secret_str: str):
    """Return possible HMAC keys derived from the configured secret.

    - Supports Svix/Standard Webhooks style secrets that start with 'whsec_'
      where the actual key is base64/base64url encoded.
    - Also tries raw UTF-8 bytes, base64/base64url of the whole string, and hex.
    """
    candidates = []
    # Raw bytes as-is
    try:
        candidates.append(secret_str.encode("utf-8"))
    except Exception:
        pass

    # If prefixed with whsec_, try decoding the remainder
    val = secret_str
    if secret_str.startswith("whsec_"):
        val = secret_str[len("whsec_"):]

    def _try_decode(decoder, s: str):
        try:
            padded = s + ("=" * ((4 - len(s) % 4) % 4))
            decoded = decoder(padded.encode("ascii"))
            if decoded:
                candidates.append(decoded)
        except Exception:
            pass

    # Try decoding the remainder and the full string with both base64 variants
    _try_decode(base64.b64decode, val)
    _try_decode(base64.urlsafe_b64decode, val)
    _try_decode(base64.b64decode, secret_str)
    _try_decode(base64.urlsafe_b64decode, secret_str)

    # Try hex
    try:
        if all(c in string.hexdigits for c in secret_str) and len(secret_str) % 2 == 0:
            candidates.append(bytes.fromhex(secret_str))
    except Exception:
        pass

    # Deduplicate
    unique = []
    seen = set()
    for c in candidates:
        if c not in seen:
            unique.append(c)
            seen.add(c)
    return unique


def _extract_signature_values(signature_header: str):
    """Extract one or more possible signature values from the header.

    Handles formats:
    - "v1,<base64>" (Svix standard used by Dodo)
    - "v1=<base64>,t=<ts>" style (key=value list)
    - Raw base64 string
    """
    if not signature_header:
        return []
    s = signature_header.strip()
    values = []
    if s.startswith("v1,") or s.startswith("v0,") or s.startswith("sha256,"):
        values.append(s.split(",", 1)[1])
    elif "," in s and "=" in s:
        for part in s.split(","):
            part = part.strip()
            if "=" in part:
                k, v = part.split("=", 1)
                if k in ("v1", "v0", "sha256") and v:
                    values.append(v)
    else:
        values.append(s)
    # Clean empties
    return [v for v in values if v]


def _verify_signature(raw_body: bytes, headers: dict) -> None:
    # Dev bypass (DO NOT USE IN PROD)
    if (os.getenv("DODO_WEBHOOK_DISABLE_VERIFY") or "").lower() == "true":
        return
    """Verify webhook signature per Dodo docs (standard-webhooks compatible).

    Expected headers:
      - webhook-id
      - webhook-timestamp
      - webhook-signature
    Signature is computed over "{id}.{timestamp}.{raw}" with HMAC-SHA256 using secret.
    """
    # Support multiple env names to avoid misconfiguration
    secret = (
        os.getenv("DODO_WEBHOOK_SECRET")
        or os.getenv("DODO_PAYMENTS_WEBHOOK_SECRET")
        or os.getenv("DODO_PAYMENTS_WEBHOOK_KEY")
    )
    if not secret:
        raise HTTPException(status_code=500, detail="Webhook secret not configured")

    # Normalize header names
    lower_headers = {k.lower(): v for k, v in headers.items()}
    event_id = lower_headers.get("webhook-id")
    timestamp = lower_headers.get("webhook-timestamp")
    signature = (
        lower_headers.get("webhook-signature")
        or lower_headers.get("dodo-signature")
    )
    debug_enabled = (os.getenv("DODO_WEBHOOK_DEBUG") or "").lower() == "true"

    # Optional legacy mode: allow verifying only the raw body against dodo-signature
    # when Standard Webhooks headers are not present
    legacy_mode = (os.getenv("DODO_WEBHOOK_LEGACY_MODE") or "").lower() == "true"
    if legacy_mode and signature and not (event_id and timestamp):
        # Legacy calculation: HMAC over raw payload only
        legacy_digest = hmac.new(secret.encode("utf-8"), raw_body, hashlib.sha256).digest()
        legacy_b64 = base64.b64encode(legacy_digest).decode()
        legacy_hex = hmac.new(secret.encode("utf-8"), raw_body, hashlib.sha256).hexdigest()
        sig_values = _extract_signature_values(signature or "")
        def _match_legacy(val: str) -> bool:
            return hmac.compare_digest(val, legacy_b64) or hmac.compare_digest(val, legacy_hex)
        if any(_match_legacy(v) for v in sig_values) if sig_values else False:
            if debug_enabled:
                logging.error("[DODO WEBHOOK][LEGACY] Verified using legacy mode (raw payload only)")
                print("[DODO WEBHOOK][LEGACY] Verified using legacy mode (raw payload only)")
            return
        if debug_enabled:
            logging.error("[DODO WEBHOOK][LEGACY] Signature mismatch. provided=%s expected_b64=%s expected_hex=%s", signature, legacy_b64, legacy_hex)
            print(f"[DODO WEBHOOK][LEGACY] Signature mismatch. provided={signature} expected_b64={legacy_b64} expected_hex={legacy_hex}")
        raise HTTPException(status_code=401, detail="Invalid webhook signature (legacy mode)")

    if not (event_id and timestamp and signature):
        if debug_enabled:
            missing = []
            if not event_id:
                missing.append("webhook-id")
            if not timestamp:
                missing.append("webhook-timestamp")
            if not signature:
                missing.append("webhook-signature/dodo-signature")
            logging.error("[DODO WEBHOOK] Missing webhook headers: %s", ", ".join(missing) or "<none>")
            logging.error("[DODO WEBHOOK] Received headers: %s", lower_headers)
            print(f"[DODO WEBHOOK] Missing webhook headers: {', '.join(missing) or '<none>'}")
            print(f"[DODO WEBHOOK] Received headers: {lower_headers}")
        raise HTTPException(status_code=401, detail="Missing webhook headers")

    # Standard Webhooks: signature is base64(HMAC_SHA256(id.timestamp.raw))
    # IMPORTANT: Use raw bytes exactly as received; do not reserialize JSON
    message = b".".join([
        (event_id or "").encode("utf-8"),
        (timestamp or "").encode("utf-8"),
        raw_body,
    ])
    key_candidates = _decode_secret_candidates(secret)
    if debug_enabled:
        try:
            fp = hashlib.sha256(secret.encode("utf-8")).hexdigest()[:12]
            print(f"[DODO WEBHOOK] Using secret fingerprint={fp} key_variants={len(key_candidates)}")
        except Exception:
            pass
    computed_pairs = []  # list[(b64, hex)]
    for key_bytes in key_candidates:
        try:
            dig = hmac.new(key_bytes, message, hashlib.sha256).digest()
            computed_pairs.append((base64.b64encode(dig).decode(), hmac.new(key_bytes, message, hashlib.sha256).hexdigest()))
        except Exception:
            continue

    # Signature header may contain multiple parts (e.g., v1,<base64>)
    sig_values = _extract_signature_values(signature or "")
    def any_match(val: str) -> bool:
        for b64_val, hex_val in computed_pairs:
            if hmac.compare_digest(val, b64_val) or hmac.compare_digest(val, hex_val):
                return True
        return False

    ok = any(any_match(v) for v in sig_values) if sig_values else False
    if not ok:
        if debug_enabled and computed_pairs:
            b64_show, hex_show = computed_pairs[0]
            tried = len(key_candidates)
            print(f"[DODO WEBHOOK] (tried {tried} key variants) Signature mismatch. provided={signature} expected_b64={b64_show} expected_hex={hex_show}")
        raise HTTPException(status_code=401, detail="Invalid webhook signature")


@router.get("/webhooks/dodo")
async def dodo_webhook_probe():
    # Some dashboards validate the endpoint with a GET/HEAD request
    return {"ok": True}


@router.post("/webhooks/dodo")
async def handle_dodo_webhook(request: Request):
    raw = await request.body()
    debug_enabled = (os.getenv("DODO_WEBHOOK_DEBUG") or "").lower() == "true"
    if debug_enabled:
        try:
            lower_headers = {k.lower(): v for k, v in request.headers.items()}
            logging.error("[DODO WEBHOOK] Incoming request from %s headers=%s", getattr(request.client, "host", "<unknown>"), lower_headers)
            logging.error("[DODO WEBHOOK] Raw body (%d bytes): %s", len(raw), raw[:512].decode("utf-8", errors="replace"))
            print(f"[DODO WEBHOOK] Incoming request headers: {lower_headers}")
            print(f"[DODO WEBHOOK] Raw body (first 512 bytes): {raw[:512].decode('utf-8', errors='replace')}")
        except Exception:
            pass
    # Optionally use the official Standard Webhooks library if enabled
    use_lib = (os.getenv("DODO_WEBHOOK_USE_STANDARD_LIB") or "").lower() == "true" and StdWebhook is not None
    if use_lib:
        secret = (
            os.getenv("DODO_WEBHOOK_SECRET")
            or os.getenv("DODO_PAYMENTS_WEBHOOK_SECRET")
            or os.getenv("DODO_PAYMENTS_WEBHOOK_KEY")
        )
        if not secret:
            raise HTTPException(status_code=500, detail="Webhook secret not configured")
        try:
            verifier = StdWebhook(secret)
            headers_dict = {
                "webhook-id": request.headers.get("webhook-id", ""),
                "webhook-timestamp": request.headers.get("webhook-timestamp", ""),
                "webhook-signature": request.headers.get("webhook-signature", request.headers.get("dodo-signature", "")),
            }
            verifier.verify(raw.decode("utf-8"), headers_dict)
            if debug_enabled:
                print("[DODO WEBHOOK] Verified via standardwebhooks library")
        except Exception as e:
            if debug_enabled:
                print(f"[DODO WEBHOOK] Library verification failed: {e}")
            raise HTTPException(status_code=401, detail="Invalid webhook signature (library)")
    else:
        try:
            _verify_signature(raw, request.headers)
        except HTTPException as e:
            if debug_enabled:
                # Log diagnostic details (safe; does not print secret)
                lower_headers = {k.lower(): v for k, v in request.headers.items()}
                logging.error("[DODO WEBHOOK] Signature verification failed: %s", e.detail)
                logging.error("[DODO WEBHOOK] headers: id=%s ts=%s sig=%s",
                              lower_headers.get("webhook-id"),
                              lower_headers.get("webhook-timestamp"),
                              lower_headers.get("webhook-signature") or lower_headers.get("dodo-signature"))
                # Compute and print expected candidates to compare
                event_id = lower_headers.get("webhook-id") or ""
                timestamp = lower_headers.get("webhook-timestamp") or ""
                message = b".".join([
                    (event_id or "").encode("utf-8"),
                    (timestamp or "").encode("utf-8"),
                    raw,
                ])
                key = (os.getenv("DODO_WEBHOOK_SECRET") or os.getenv("DODO_PAYMENTS_WEBHOOK_SECRET") or os.getenv("DODO_PAYMENTS_WEBHOOK_KEY") or "").encode("utf-8")
                digest = hmac.new(key, message, hashlib.sha256).digest()
                expected_b64 = base64.b64encode(digest).decode()
                expected_hex = hmac.new(key, message, hashlib.sha256).hexdigest()
                logging.error("[DODO WEBHOOK] expected_b64=%s expected_hex=%s", expected_b64, expected_hex)
                print(f"[DODO WEBHOOK] Signature verification failed: {e.detail}")
                print(f"[DODO WEBHOOK] headers: id={lower_headers.get('webhook-id')} ts={lower_headers.get('webhook-timestamp')} sig={lower_headers.get('webhook-signature') or lower_headers.get('dodo-signature')}")
                print(f"[DODO WEBHOOK] expected_b64={expected_b64} expected_hex={expected_hex}")
            raise

    payload = await request.json()
    event_type = payload.get("event_type") or payload.get("type")
    data = payload.get("data") or {}

    # Idempotency: skip if processed
    event_id = request.headers.get("webhook-id") or payload.get("id")
    if event_id and db.webhook_events.find_one({"_id": event_id}):
        return {"ok": True}
    if event_id:
        db.webhook_events.insert_one({"_id": event_id, "received": payload})

    try:
        if event_type and event_type.startswith("subscription"):
            _handle_subscription_event(data)
        elif event_type and event_type.startswith("payment"):
            _handle_payment_event(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {"ok": True}


def _handle_subscription_event(s: dict) -> None:
    meta = s.get("metadata", {}) or {}
    clerk_uid = meta.get("clerk_uid") or meta.get("metadata_clerk_uid")
    customer = s.get("customer") or {}
    dodo_customer_id = customer.get("customer_id")
    status = s.get("status") or s.get("subscription_status")
    subscription_id = s.get("subscription_id")
    next_billing = s.get("next_billing_date") or s.get("current_period_end")

    # Find user by mapping; prefer explicit clerk_uid metadata, else by stored dodo_customer_id
    user = None
    if clerk_uid:
        user = db.users.find_one({"clerk_uid": clerk_uid})
    if not user and dodo_customer_id:
        user = db.users.find_one({"dodo_customer_id": dodo_customer_id})

    if not user:
        # No mapping; store a dangling record for later reconciliation
        db.unmapped_subscriptions.insert_one({"data": s})
        return

    plan = "PRO" if status in ("active", "trialing", "on_hold", "paused", "past_due") else "FREE"
    db.users.update_one(
        {"_id": user["_id"]},
        {
            "$set": {
                "plan": plan,
                "subscription_status": status,
                "dodo_customer_id": dodo_customer_id,
                "dodo_subscription_id": subscription_id,
                "plan_renews_at": next_billing,
            }
        },
    )

    # snapshot
    db.subscriptions.update_one(
        {"subscription_id": subscription_id},
        {"$set": s, "$setOnInsert": {"clerk_uid": user.get("clerk_uid")}},
        upsert=True,
    )


def _handle_payment_event(p: dict) -> None:
    customer = p.get("customer") or {}
    dodo_customer_id = customer.get("customer_id")
    user = db.users.find_one({"dodo_customer_id": dodo_customer_id}) if dodo_customer_id else None

    db.payments.insert_one({
        "clerk_uid": user.get("clerk_uid") if user else None,
        "dodo_payment_id": p.get("payment_id"),
        "status": p.get("status"),
        "amount": p.get("total_amount") or p.get("amount"),
        "currency": p.get("currency"),
        "raw": p,
    })


