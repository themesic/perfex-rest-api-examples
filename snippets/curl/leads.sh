#!/usr/bin/env bash
# Perfex CRM REST API — Leads examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# List all leads
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/leads"

# Get a single lead by ID
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/leads/1"

# Create a lead (multipart/form-data)
curl -sS -X POST "${BASE}/leads" \
  -H "authtoken: ${TOKEN}" \
  -F "name=Jane Cooper" \
  -F "email=jane.cooper@example.com" \
  -F "source=1" \
  -F "status=1" \
  -F "assigned=1" \
  -F "phonenumber=+44 210 7298299" \
  -F "company=Acme LTD" \
  -F "title=Procurement Manager"

# Update a lead
curl -sS -X PUT "${BASE}/leads/1" \
  -H "authtoken: ${TOKEN}" \
  -F "status=2"

# Delete a lead
curl -sS -X DELETE "${BASE}/leads/1" -H "authtoken: ${TOKEN}"
