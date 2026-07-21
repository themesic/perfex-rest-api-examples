"""
Perfex CRM REST API — MCP server examples (Python / requests)
Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

The MCP endpoint speaks JSON-RPC 2.0 over HTTP — send `json=` (application/json),
not multipart form data.

Install dependency:  pip install requests
"""
import requests

BASE = "https://yourdomain.com/api"
TOKEN = "YOUR_API_TOKEN"
HEADERS = {"authtoken": TOKEN}


def mcp_initialize():
    # Handshake: negotiate protocol version and capabilities.
    body = {"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {}}
    r = requests.post(f"{BASE}/mcp", headers=HEADERS, json=body, timeout=30)
    return r.status_code, r.json()


def mcp_tools_list():
    # Discover the permission-filtered CRM tools available to your token.
    body = {"jsonrpc": "2.0", "id": 2, "method": "tools/list", "params": {}}
    r = requests.post(f"{BASE}/mcp", headers=HEADERS, json=body, timeout=30)
    return r.status_code, r.json()


def mcp_tools_call():
    # Invoke a tool by name with its arguments.
    body = {
        "jsonrpc": "2.0",
        "id": 3,
        "method": "tools/call",
        "params": {"name": "customers_list", "arguments": {}},
    }
    r = requests.post(f"{BASE}/mcp", headers=HEADERS, json=body, timeout=30)
    return r.status_code, r.json()


if __name__ == "__main__":
    print(mcp_initialize())
    print(mcp_tools_list())
    print(mcp_tools_call())
