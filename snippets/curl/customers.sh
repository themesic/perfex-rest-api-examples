#!/usr/bin/env bash
# Perfex CRM REST API — Customers examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# List all customers
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/customers"

# Get a single customer by ID
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/customers/1"

# Create a customer (multipart/form-data)
curl -sS -X POST "${BASE}/customers" \
  -H "authtoken: ${TOKEN}" \
  -F "company=Acme LTD" \
  -F "vat=123456789" \
  -F "phonenumber=+44 210 7298299" \
  -F "website=https://example.com" \
  -F "city=London" \
  -F "country=235"

# Update a customer
curl -sS -X PUT "${BASE}/customers/1" \
  -H "authtoken: ${TOKEN}" \
  -F "company=Acme International LTD"

# Delete a customer
curl -sS -X DELETE "${BASE}/customers/1" -H "authtoken: ${TOKEN}"
