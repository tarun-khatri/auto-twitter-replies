from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jwt import PyJWKClient, decode
from config import CLERK_JWKS_URL, CLERK_ALLOWED_ORIGINS

# Lazily initialise JWKS client using the public JWKS url provided by Clerk.
if not CLERK_JWKS_URL:
    raise RuntimeError("CLERK_JWKS_URL env variable is required for Clerk auth")

_allowed_origins = {
    origin.strip(): True
    for origin in CLERK_ALLOWED_ORIGINS
    if origin.strip()
}

_jwks_client = PyJWKClient(CLERK_JWKS_URL)
_http_bearer = HTTPBearer()


def verify_clerk_token(
    creds: HTTPAuthorizationCredentials = Depends(_http_bearer),
) -> str:
    """FastAPI dependency that verifies the incoming Clerk session JWT.

    Returns the Clerk user id (token `sub` claim) on success, otherwise raises 401.
    """
    token = creds.credentials
    try:
        signing_key = _jwks_client.get_signing_key_from_jwt(token)
        payload = decode(
            token,
            signing_key.key,
            algorithms=["RS256"],
            options={"verify_exp": True, "verify_aud": False},
            leeway=3600,  # allow 1-hour clock skew / token-rotation window
        )

        # Clerk issues tokens with an `azp` (authorized party) claim instead of `aud`.
        # Manually ensure the azp value is one of the allowed origins.
        azp = payload.get("azp")
        if _allowed_origins and azp not in _allowed_origins:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid Clerk token audience",
            )

        return payload["sub"]
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired Clerk token",
        ) 