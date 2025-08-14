import os
import requests
from typing import Any, Dict, Optional


class DodoClient:
    """Small wrapper around Dodo Payments REST API.

    Notes
    - Uses Dodo's public base URL (https://api.dodopayments.com). Environment (test/live)
      is determined by your API key as per Dodo docs. We still read `DODO_ENVIRONMENT`
      for application behavior (e.g., selecting return URLs), but it isn't required to
      call the API.
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
            # default to test
            self.base_url = "https://test.dodopayments.com"

    def _headers(self) -> Dict[str, str]:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def create_subscription_payment_link(
        self,
        *,
        product_id: str,
        customer: Optional[Dict[str, Any]] = None,
        billing: Optional[Dict[str, Any]] = None,
        quantity: int = 1,
        return_url: Optional[str] = None,
        allowed_payment_method_types: Optional[list[str]] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        payload: Dict[str, Any] = {
            "product_id": product_id,
            "quantity": quantity,
            "payment_link": True,
        }
        if customer:
            payload["customer"] = customer
        if billing:
            payload["billing"] = billing
        if return_url:
            payload["return_url"] = return_url
        # Intentionally omit allowed_payment_method_types to allow all methods by default
        if allowed_payment_method_types:
            payload["allowed_payment_method_types"] = allowed_payment_method_types
        if metadata:
            payload["metadata"] = metadata

        resp = requests.post(
            f"{self.base_url}/subscriptions",
            headers=self._headers(),
            json=payload,
            timeout=30,
        )
        if not resp.ok:
            raise RuntimeError(f"Dodo create subscription failed: {resp.status_code} {resp.text}")
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


