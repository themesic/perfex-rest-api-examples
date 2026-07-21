/**
 * Perfex CRM REST API — Batch examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * POST /api/batch runs up to 50 operations in a single request.
 * Each operation names an MCP-style tool plus its arguments.
 * Batch requests are JSON (application/json), not multipart/form-data.
 *
 * Node 18+ has global fetch. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

async function runBatch() {
  const body = {
    operations: [
      { tool: "customers_create", args: { company: "Acme LTD" } },
      { tool: "invoices_get", args: { id: 1 } },
    ],
  };

  const res = await fetch(`${BASE}/batch`, {
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

(async () => {
  console.log(await runBatch());
})();
