#!/usr/bin/env bash
# Perfex CRM REST API — v3 list/query features (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Demonstrates v3 query params on /customers (they apply to all list endpoints).
# Every response carries rate-limit headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset.
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# Pagination
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/customers?page=2&per_page=20"

# Field selection (return only the fields you need)
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/customers?fields=id,company"

# Sorting (prefix a field with - for descending)
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/customers?sort=-datecreated,company"

# Date filtering
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/customers?created_after=2026-01-01&created_before=2026-12-31"

# Combined: paginate, select fields, sort, and filter in one call
curl -sS -H "authtoken: ${TOKEN}" \
  "${BASE}/customers?page=1&per_page=20&fields=id,company,datecreated&sort=-datecreated&created_after=2026-01-01"

# Idempotent create (retry-safe with an Idempotency-Key header)
curl -sS -X POST "${BASE}/customers" \
  -H "authtoken: ${TOKEN}" \
  -H "Idempotency-Key: 3b1e-uuid" \
  -F "company=Acme LTD"
