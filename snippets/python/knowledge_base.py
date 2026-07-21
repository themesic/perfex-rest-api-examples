"""
Perfex CRM REST API — Knowledge Base examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def list_articles():
    r = requests.get(f"{BASE}/knowledge_base", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def list_articles_in_group(group_id=1):
    # Filter articles by their group.
    params = {"group_id": group_id}
    r = requests.get(f"{BASE}/knowledge_base", headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def get_article(article_id=12):
    r = requests.get(f"{BASE}/knowledge_base/{article_id}", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def create_article():
    # POST/PUT send multipart/form-data — pass fields via `data=`
    payload = {
        "subject": "How to reset your password",
        "description": "<p>Open Settings &gt; Security and click Reset.</p>",
        "articlegroup": 1,
        "active": 1,
    }
    r = requests.post(f"{BASE}/knowledge_base", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def update_article(article_id=12):
    payload = {"active": 0}
    r = requests.put(f"{BASE}/knowledge_base/{article_id}", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


def delete_article(article_id=12):
    r = requests.delete(f"{BASE}/knowledge_base/{article_id}", headers=HEADERS, timeout=30)
    return r.status_code, r.json()


def list_groups():
    r = requests.get(f"{BASE}/knowledge_base/groups", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def create_group():
    payload = {"name": "Billing"}
    r = requests.post(f"{BASE}/knowledge_base/groups", headers=HEADERS, data=payload, timeout=30)
    return r.status_code, r.json()


if __name__ == "__main__":
    print(list_articles())
    print(list_articles_in_group(1))
    print(get_article(12))
    print(create_article())
    print(update_article(12))
    print(list_groups())
    print(create_group())
    print(delete_article(12))
