#!/usr/bin/env bash
# Perfex CRM REST API — Notes (polymorphic) examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Notes attach to any entity via rel_type (customer, lead, invoice, task, ticket).
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# List notes for an entity (rel_type: customer, lead, invoice, task, ticket)
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/notes/customer/1"

# Get a single note by ID
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/notes/5"

# Create a note (multipart/form-data)
curl -sS -X POST "${BASE}/notes" \
  -H "authtoken: ${TOKEN}" \
  -F "rel_type=customer" \
  -F "rel_id=1" \
  -F "description=Called the client to confirm the renewal date."

# Update a note
curl -sS -X PUT "${BASE}/notes/5" \
  -H "authtoken: ${TOKEN}" \
  -F "description=Client confirmed renewal for March."

# Delete a note
curl -sS -X DELETE "${BASE}/notes/5" -H "authtoken: ${TOKEN}"
