"""
Perfex CRM REST API — Notes examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Notes are polymorphic: attach them to any related entity via rel_type + rel_id.
Common rel_type values: customer, lead, invoice, task, ticket.

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def list_notes(rel_type="customer", rel_id=1):
    # List all notes attached to a given entity, e.g. /notes/customer/1
    r = requests.get(f"{BASE}/notes/{rel_type}/{rel_id}", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def get_note(note_id=5):
    r = requests.get(f"{BASE}/notes/{note_id}", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def create_note():
    # POST/PUT send multipart/form-data — pass fields via `data=`
    payload = {
        "rel_type": "customer",
        "rel_id": 1,
        "description": "Called the client to confirm the renewal.",
    }
    r = requests.post(f"{BASE}/notes", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def update_note(note_id=5):
    payload = {"description": "Renewal confirmed for next quarter."}
    r = requests.put(f"{BASE}/notes/{note_id}", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def delete_note(note_id=5):
    r = requests.delete(f"{BASE}/notes/{note_id}", headers=HEADERS, timeout=30)
    return r.status_code, r.json()


if __name__ == "__main__":
    print(list_notes("customer", 1))
    print(get_note(5))
    print(create_note())
    print(update_note(5))
    print(delete_note(5))
