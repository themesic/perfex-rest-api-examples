"""
Perfex CRM REST API — Smarter list endpoints (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Every list endpoint accepts optional query parameters. Add them and you get a
{ data, meta } envelope; omit them and you get the exact legacy array.
Demonstrated here on /customers — the same params work on any list endpoint.

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def paginate():
    # Page 2, 20 records per page → response is wrapped as { data, meta }.
    params = {"page": 2, "per_page": 20}
    r = requests.get(f"{BASE}/customers", headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def select_fields():
    # Return only the columns you need.
    params = {"fields": "id,company"}
    r = requests.get(f"{BASE}/customers", headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def sort_results():
    # `-` prefix = descending. Multiple keys are comma-separated.
    params = {"sort": "-datecreated,company"}
    r = requests.get(f"{BASE}/customers", headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def filter_by_date():
    # Date-range filter on the creation date.
    params = {"created_after": "2026-01-01", "created_before": "2026-12-31"}
    r = requests.get(f"{BASE}/customers", headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def combined():
    # Pagination + field selection + sorting + date range in one call.
    params = {
        "page": 2,
        "per_page": 20,
        "fields": "id,company",
        "sort": "-datecreated,company",
        "created_after": "2026-01-01",
    }
    r = requests.get(f"{BASE}/customers", headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    # Rate-limit info is exposed on every response via the headers:
    #   X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
    print(dict(r.headers).get("X-RateLimit-Remaining"))
    return r.json()


def create_idempotent():
    # Send an Idempotency-Key so a retried POST is not applied twice.
    headers = {**HEADERS, "Idempotency-Key": "customer-acme-2026-0001"}
    payload = {"company": "Acme LTD"}
    r = requests.post(f"{BASE}/customers", headers=headers, data=payload, timeout=30)
    return r.status_code, r.json()


if __name__ == "__main__":
    print(paginate())
    print(select_fields())
    print(sort_results())
    print(filter_by_date())
    print(combined())
    print(create_idempotent())
