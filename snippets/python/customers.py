"""
Perfex CRM REST API — Customers examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def list_customers():
    r = requests.get(f"{BASE}/customers", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def create_customer():
    # POST/PUT send multipart/form-data — pass fields via `data=`
    payload = {
        "company": "Acme LTD",
        "vat": "123456789",
        "phonenumber": "+44 210 7298299",
        "website": "https://example.com",
        "city": "London",
        "country": "235",
    }
    r = requests.post(f"{BASE}/customers", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


if __name__ == "__main__":
    print(list_customers())
    print(create_customer())
