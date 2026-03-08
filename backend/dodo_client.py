import os
import requests
from typing import Any, Dict, List, Optional


class DodoClient:
    """Wrapper around Dodo Payments REST API using the recommended Checkout Sessions endpoint.

    Notes
    - Uses `POST /checkouts` (recommended) instead of deprecated `POST /subscriptions`.
    - Environment (test/live) is determined by `DODO_ENVIRONMENT` env var.
    - Reads API key from env `DODO_PAYMENTS_API_KEY`.
    """

    def __init__(self) -> None:
        api_key = os.getenv("DODO_PAYMENTS_API_KEY")
        if not api_key:
            raise RuntimeError("DODO_PAYMENTS_API_KEY is not set")
        self.api_key = api_key
        env_value = (os.getenv("DODO_ENVIRONMENT") or "test").strip().lower()
        if env_value in ("live", "production", "prod"):
            self.base_url = "https://live.dodopayments.com"
        else:
            self.base_url = "https://test.dodopayments.com"

    def _headers(self) -> Dict[str, str]:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def create_checkout_session(
        self,
        *,
        product_id: str,
        quantity: int = 1,
        customer: Optional[Dict[str, Any]] = None,
        billing_address: Optional[Dict[str, Any]] = None,
        return_url: Optional[str] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """Create a checkout session using the recommended POST /checkouts endpoint.

        Returns dict with `checkout_url` (redirect user here) and `session_id`.
        """
        payload: Dict[str, Any] = {
            "product_cart": [
                {"product_id": product_id, "quantity": quantity}
            ],
        }
        if customer:
            payload["customer"] = customer
        if billing_address:
            payload["billing_address"] = billing_address
        if return_url:
            payload["success_url"] = return_url
        if metadata:
            payload["metadata"] = metadata

        resp = requests.post(
            f"{self.base_url}/checkouts",
            headers=self._headers(),
            json=payload,
            timeout=30,
        )
        if not resp.ok:
            raise RuntimeError(f"Dodo create checkout failed: {resp.status_code} {resp.text}")
        return resp.json()

    def retrieve_subscription(self, subscription_id: str) -> Dict[str, Any]:
        resp = requests.get(
            f"{self.base_url}/subscriptions/{subscription_id}",
            headers=self._headers(),
            timeout=20,
        )
        if not resp.ok:
            raise RuntimeError(f"Dodo retrieve subscription failed: {resp.status_code} {resp.text}")
        return resp.json()
