# MCP Server for AI Agents

Connect Claude, ChatGPT, Cursor and other AI agents directly to your CRM with the
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

**v3.0** ships a built-in **MCP server**. The **Model Context Protocol (MCP)** is an open standard
that lets AI agents discover and call external tools over a uniform interface. Perfex exposes its CRM
as **148 permission-filtered tools** at a single JSON-RPC endpoint, so an agent can read and write
customers, invoices, leads, tasks and more on your behalf.

- **Endpoint:** `POST https://yourdomain.com/api/mcp`
- **Protocol:** JSON-RPC 2.0
- **Auth:** `authtoken: YOUR_API_TOKEN` (see [`authentication.md`](authentication.md))

## 1. Enable the MCP server

In your Perfex admin, go to **Setup → API → Settings** and enable the MCP server. Then create (or
reuse) an API token under **API → API Management** and assign it the per-resource permissions the
agent should have. The MCP endpoint only advertises tools the token is allowed to use.

> Tools are **permission-filtered per token**. A read-only token sees only read tools; a token with
> no access to invoices never sees invoice tools. Scope tokens tightly for each agent.

## 2. Connect a client

Point any MCP client at the endpoint and pass your token in the `authtoken` header. A typical client
config looks like this:

```json
{
  "mcpServers": {
    "perfex-crm": {
      "url": "https://yourdomain.com/api/mcp",
      "headers": {
        "authtoken": "YOUR_API_TOKEN"
      }
    }
  }
}
```

| Client | How to connect |
| --- | --- |
| **Claude Desktop** | Add the server to your MCP client config (URL + `authtoken` header) |
| **Cursor** | Add an MCP server pointing at the `/api/mcp` URL with the header |
| **ChatGPT** | Add as a custom connector / MCP tool with the URL and header |
| **n8n AI Agent** | Use the MCP Client node with the URL and `authtoken` header |

> Some clients only support command-based (stdio) MCP servers. For those, use an HTTP-to-stdio MCP
> bridge that forwards to `https://yourdomain.com/api/mcp` with the `authtoken` header.

## 3. JSON-RPC methods

The server speaks JSON-RPC 2.0 and implements the standard MCP methods.

| Method | Purpose |
| --- | --- |
| `initialize` | Handshake; negotiate protocol version and capabilities |
| `tools/list` | List the tools available to this token |
| `tools/call` | Invoke a named tool with arguments |

### `initialize`

```bash
curl -X POST "https://yourdomain.com/api/mcp" \
  -H "authtoken: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": { "protocolVersion": "2024-11-05", "capabilities": {} }
  }'
```

### `tools/list`

```bash
curl -X POST "https://yourdomain.com/api/mcp" \
  -H "authtoken: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "jsonrpc": "2.0", "id": 2, "method": "tools/list" }'
```

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "tools": [
      {
        "name": "list_customers",
        "description": "List customers with optional filters",
        "inputSchema": { "type": "object", "properties": {} }
      },
      {
        "name": "create_invoice",
        "description": "Create an invoice for a customer",
        "inputSchema": { "type": "object", "properties": {} }
      }
    ]
  }
}
```

### `tools/call`

```bash
curl -X POST "https://yourdomain.com/api/mcp" \
  -H "authtoken: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "tools/call",
    "params": {
      "name": "list_customers",
      "arguments": { "per_page": 5 }
    }
  }'
```

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "content": [
      { "type": "text", "text": "{ \"data\": [ ... ], \"meta\": { ... } }" }
    ]
  }
}
```

> The **same tool names** are reused by the [`/api/batch`](../snippets/curl/batch.sh) endpoint, so a
> flow you prototype with an agent can be scripted as a batch of up to 50 operations.

## 4. Notes

- Tool availability mirrors the token's permissions — there is no way for an agent to act beyond
  what the token allows.
- Because the endpoint is standard JSON-RPC 2.0 over HTTP, you can call it from any language, not
  only from an MCP client.

Runnable examples live in [`snippets/curl/mcp.sh`](../snippets/curl/mcp.sh) and the matching `mcp`
file in each snippet language.

---

📦 **Module:** [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) ·
📖 **Docs:** https://perfexcrm.themesic.com/apiguide/
