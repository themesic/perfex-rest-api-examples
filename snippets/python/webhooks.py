"""
Perfex CRM REST API — Webhooks examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def list_webhooks():
    r = requests.get(f"{BASE}/webhooks", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def get_webhook(webhook_id=3):
    r = requests.get(f"{BASE}/webhooks/{webhook_id}", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def create_webhook():
    # POST/PUT send multipart/form-data — pass fields via `data=`.
    # events[] can be repeated for each event you want to subscribe to.
    payload = {
        "name": "My integration",
        "url": "https://hooks.example.com/perfex",
        "events[]": ["invoice_created", "lead_created"],
        "secret": "whsec_your_signing_secret",
    }
    r = requests.post(f"{BASE}/webhooks", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def update_webhook(webhook_id=3):
    payload = {"url": "https://hooks.example.com/perfex/v2"}
    r = requests.put(f"{BASE}/webhooks/{webhook_id}", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def delete_webhook(webhook_id=3):
    r = requests.delete(f"{BASE}/webhooks/{webhook_id}", headers=HEADERS, timeout=30)
    return r.status_code, r.json()


def toggle_webhook(webhook_id=3):
    # Enable/disable a webhook without deleting it.
    r = requests.post(f"{BASE}/webhooks/{webhook_id}/toggle", headers=HEADERS, timeout=30)
    return r.status_code, r.json()


def list_events():
    # The full catalogue of events you can subscribe to.
    r = requests.get(f"{BASE}/webhooks/events", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def webhook_logs(webhook_id=3):
    # Recent delivery attempts (status, response code, retries) for a webhook.
    r = requests.get(f"{BASE}/webhooks/{webhook_id}/logs", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


if __name__ == "__main__":
    print(list_webhooks())
    print(get_webhook(3))
    print(create_webhook())
    print(update_webhook(3))
    print(toggle_webhook(3))
    print(list_events())
    print(webhook_logs(3))
    print(delete_webhook(3))
