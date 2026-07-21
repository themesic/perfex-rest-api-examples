#!/usr/bin/env bash
# Perfex CRM REST API — Batch operations examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# POST /batch runs up to 50 operations in one request (Content-Type: application/json).
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# Run multiple operations in a single request
curl -sS -X POST "${BASE}/batch" \
  -H "authtoken: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"operations":[{"tool":"customers_create","args":{"company":"Acme LTD"}},{"tool":"invoices_get","args":{"id":1}}]}'
