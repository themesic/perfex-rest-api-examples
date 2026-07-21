"""
Perfex CRM REST API — Invoices examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def list_invoices():
    r = requests.get(f"{BASE}/invoices", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def get_invoice(invoice_id=1):
    r = requests.get(f"{BASE}/invoices/{invoice_id}", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def create_invoice():
    # POST/PUT send multipart/form-data — pass fields via `data=`.
    # v3 auto-calculates subtotal/total from the items[] array.
    payload = {
        "clientid": 1,
        "number": 1001,
        "date": "2026-01-15",
        "duedate": "2026-02-15",
        "currency": 1,
        "items[0][description]": "Consulting services",
        "items[0][qty]": 10,
        "items[0][rate]": 150,
    }
    r = requests.post(f"{BASE}/invoices", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def update_invoice(invoice_id=1):
    payload = {"duedate": "2026-03-01"}
    r = requests.put(f"{BASE}/invoices/{invoice_id}", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def delete_invoice(invoice_id=1):
    r = requests.delete(f"{BASE}/invoices/{invoice_id}", headers=HEADERS, timeout=30)
    return r.status_code, r.json()


if __name__ == "__main__":
    print(list_invoices())
    print(get_invoice(1))
    print(create_invoice())
    print(update_invoice(1))
    print(delete_invoice(1))
