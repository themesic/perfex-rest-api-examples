"""
Perfex CRM REST API — Leads examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def list_leads():
    r = requests.get(f"{BASE}/leads", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def get_lead(lead_id=1):
    r = requests.get(f"{BASE}/leads/{lead_id}", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def create_lead():
    # POST/PUT send multipart/form-data — pass fields via `data=`
    payload = {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "source": 1,
        "status": 1,
        "assigned": 1,
        "phonenumber": "+44 210 7298299",
        "company": "Acme LTD",
        "title": "Procurement Manager",
    }
    r = requests.post(f"{BASE}/leads", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def update_lead(lead_id=1):
    payload = {"status": 2}
    r = requests.put(f"{BASE}/leads/{lead_id}", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def delete_lead(lead_id=1):
    r = requests.delete(f"{BASE}/leads/{lead_id}", headers=HEADERS, timeout=30)
    return r.status_code, r.json()


if __name__ == "__main__":
    print(list_leads())
    print(get_lead(1))
    print(create_lead())
    print(update_lead(1))
    print(delete_lead(1))
