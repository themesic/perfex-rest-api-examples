#!/usr/bin/env bash
# Perfex CRM REST API — Automation / Zapier examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# List the resources available for automation polling
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/zapier/resources"

# Poll a resource for new/updated records since a Unix timestamp
# Resources: customers, invoices, leads, tasks, tickets
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/zapier/poll/customers?since=1705312200&limit=50"

# Fetch a sample record for a resource (useful for mapping fields)
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/zapier/test/customers"
