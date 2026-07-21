/**
 * Perfex CRM REST API — Webhooks examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Node 18+ has global fetch & FormData. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

async function listWebhooks() {
  const res = await fetch(`${BASE}/webhooks`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getWebhook(id = 3) {
  const res = await fetch(`${BASE}/webhooks/${id}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function createWebhook() {
  // POST/PUT send multipart/form-data.
  // events[] may be repeated once per event you want to subscribe to.
  const form = new FormData();
  form.append("name", "Ops notifier");
  form.append("url", "https://hooks.example.com/perfex");
  form.append("events[]", "invoice_created");
  form.append("events[]", "lead_created");
  form.append("secret", "whsec_example_secret");

  const res = await fetch(`${BASE}/webhooks`, {
    method: "POST",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function updateWebhook(id = 3) {
  const form = new FormData();
  form.append("url", "https://hooks.example.com/perfex-v2");

  const res = await fetch(`${BASE}/webhooks/${id}`, {
    method: "PUT",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function deleteWebhook(id = 3) {
  const res = await fetch(`${BASE}/webhooks/${id}`, {
    method: "DELETE",
    headers: { authtoken: TOKEN },
  });
  return { status: res.status, data: await res.json() };
}

async function toggleWebhook(id = 3) {
  // Enable/disable a webhook without deleting it.
  const res = await fetch(`${BASE}/webhooks/${id}/toggle`, {
    method: "POST",
    headers: { authtoken: TOKEN },
  });
  return { status: res.status, data: await res.json() };
}

async function listWebhookEvents() {
  // The full catalogue of events you can subscribe to.
  const res = await fetch(`${BASE}/webhooks/events`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getWebhookLogs(id = 3) {
  // Recent delivery attempts (status, response code, retries).
  const res = await fetch(`${BASE}/webhooks/${id}/logs`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

(async () => {
  console.log(await listWebhooks());
  console.log(await getWebhook(3));
  console.log(await createWebhook());
  console.log(await updateWebhook(3));
  console.log(await toggleWebhook(3));
  console.log(await listWebhookEvents());
  console.log(await getWebhookLogs(3));
  console.log(await deleteWebhook(3));
})();
