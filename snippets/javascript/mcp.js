/**
 * Perfex CRM REST API — MCP server examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * The MCP endpoint speaks JSON-RPC 2.0 over POST /api/mcp.
 * Unlike the CRUD resources, MCP requests are JSON (application/json),
 * not multipart/form-data.
 *
 * Node 18+ has global fetch. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

async function mcpCall(body) {
  const res = await fetch(`${BASE}/mcp`, {
    method: "POST",
    headers: {
      authtoken: TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Handshake: negotiate protocol version & capabilities.
async function initialize() {
  return mcpCall({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {},
  });
}

// Discover the permission-filtered CRM tools available to your token.
async function listTools() {
  return mcpCall({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/list",
    params: {},
  });
}

// Invoke a tool by name (here: list customers).
async function callTool() {
  return mcpCall({
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: {
      name: "customers_list",
      arguments: {},
    },
  });
}

(async () => {
  console.log(await initialize());
  console.log(await listTools());
  console.log(await callTool());
})();
