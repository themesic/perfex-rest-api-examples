"""
Perfex CRM REST API — Automation / polling examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

Ready-made polling triggers for Zapier, Make.com and n8n under /zapier.
Pollable resources: customers, invoices, leads, tasks, tickets.

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def list_resources():
    # Discover which resources support polling.
    r = requests.get(f"{BASE}/zapier/resources", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


def poll(resource="customers"):
    # Fetch records changed since a Unix timestamp (seconds), newest first.
    params = {"since": 1705312200, "limit": 50}
    r = requests.get(f"{BASE}/zapier/poll/{resource}", headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def test(resource="customers"):
    # Sample payload used by Zapier/Make to build the trigger mapping.
    r = requests.get(f"{BASE}/zapier/test/{resource}", headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.json()


if __name__ == "__main__":
    print(list_resources())
    for res in ("customers", "invoices", "leads", "tasks", "tickets"):
        print(res, poll(res))
    print(test("customers"))
