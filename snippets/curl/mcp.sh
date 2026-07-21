#!/usr/bin/env bash
# Perfex CRM REST API — MCP (JSON-RPC 2.0) examples (cURL)
# Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
#
# The MCP endpoint speaks JSON-RPC 2.0 over POST /mcp (Content-Type: application/json).
# Set TOKEN and BASE, then run the calls you need.
set -euo pipefail

BASE="${BASE:-https://yourdomain.com/api}"
TOKEN="${TOKEN:-YOUR_API_TOKEN}"

# Initialize the MCP session
curl -sS -X POST "${BASE}/mcp" \
  -H "authtoken: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{}}'

# List available tools
curl -sS -X POST "${BASE}/mcp" \
  -H "authtoken: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}'

# Call a tool (e.g. customers_list)
curl -sS -X POST "${BASE}/mcp" \
  -H "authtoken: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"customers_list","arguments":{}}}'
