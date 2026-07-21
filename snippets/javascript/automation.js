/**
 * Perfex CRM REST API — Automation / polling examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Ready-made polling endpoints for Zapier, Make.com and n8n.
 * Node 18+ has global fetch. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

// Which resources can be polled (customers, invoices, leads, tasks, tickets).
async function listResources() {
  const res = await fetch(`${BASE}/zapier/resources`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Poll a resource for records created/updated since a Unix timestamp.
async function pollResource(resource = "customers", since = 1705312200, limit = 50) {
  const url = `${BASE}/zapier/poll/${resource}?since=${since}&limit=${limit}`;
  const res = await fetch(url, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Sample payload for wiring up / verifying a trigger.
async function testResource(resource = "customers") {
  const res = await fetch(`${BASE}/zapier/test/${resource}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

(async () => {
  console.log(await listResources());
  console.log(await pollResource("customers", 1705312200, 50));
  console.log(await pollResource("invoices"));
  console.log(await pollResource("leads"));
  console.log(await pollResource("tasks"));
  console.log(await pollResource("tickets"));
  console.log(await testResource("customers"));
})();
