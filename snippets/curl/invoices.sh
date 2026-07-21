#!/usr/bin/env bash
# Perfex CRM REST API — Invoices examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# List all invoices
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/invoices"

# Get a single invoice by ID
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/invoices/1"

# Create an invoice (multipart/form-data)
# v3 auto-calculates subtotal/total from the line items below.
curl -sS -X POST "${BASE}/invoices" \
  -H "authtoken: ${TOKEN}" \
  -F "clientid=1" \
  -F "number=INV-000123" \
  -F "date=2026-01-15" \
  -F "duedate=2026-02-15" \
  -F "currency=1" \
  -F "items[0][description]=Consulting" \
  -F "items[0][qty]=2" \
  -F "items[0][rate]=150"

# Update an invoice
curl -sS -X PUT "${BASE}/invoices/1" \
  -H "authtoken: ${TOKEN}" \
  -F "duedate=2026-03-01"

# Delete an invoice
curl -sS -X DELETE "${BASE}/invoices/1" -H "authtoken: ${TOKEN}"
