#!/usr/bin/env bash
# Perfex CRM REST API — Knowledge Base examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# List all knowledge base articles
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/knowledge_base"

# List articles filtered by group
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/knowledge_base?group_id=1"

# Get a single article by ID
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/knowledge_base/12"

# Create an article (multipart/form-data)
curl -sS -X POST "${BASE}/knowledge_base" \
  -H "authtoken: ${TOKEN}" \
  -F "subject=How to reset your password" \
  -F "description=<p>Open Settings &gt; Security and click Reset.</p>" \
  -F "articlegroup=1" \
  -F "active=1"

# Update an article
curl -sS -X PUT "${BASE}/knowledge_base/12" \
  -H "authtoken: ${TOKEN}" \
  -F "active=0"

# Delete an article
curl -sS -X DELETE "${BASE}/knowledge_base/12" -H "authtoken: ${TOKEN}"

# List article groups
curl -sS -H "authtoken: ${TOKEN}" "${BASE}/knowledge_base/groups"

# Create an article group
curl -sS -X POST "${BASE}/knowledge_base/groups" \
  -H "authtoken: ${TOKEN}" \
  -F "name=Billing"
