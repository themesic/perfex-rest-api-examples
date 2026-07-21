#!/usr/bin/env bash
# Perfex CRM REST API — Webhooks examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# List all webhooks
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/webhooks"

# Get a single webhook by ID
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/webhooks/3"

# Create a webhook (multipart/form-data)
curl -sS -X POST "${BASE}/webhooks" \
  -H "authtoken: ${TOKEN}" \
  -F "name=Order sync" \
  -F "url=https://hooks.example.com/perfex" \
  -F 'events[]=invoice_created' \
  -F 'events[]=lead_created' \
  -F "secret=whsec_xxx"

# Update a webhook
curl -sS -X PUT "${BASE}/webhooks/3" \
  -H "authtoken: ${TOKEN}" \
  -F "name=Order sync (prod)"

# Delete a webhook
curl -sS -X DELETE "${BASE}/webhooks/3" -H "authtoken: ${TOKEN}"

# Toggle a webhook active/inactive
curl -sS -X POST "${BASE}/webhooks/3/toggle" -H "authtoken: ${TOKEN}"

# List the event catalog (all subscribable events)
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/webhooks/events"

# List delivery logs for a webhook
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/webhooks/3/logs"
