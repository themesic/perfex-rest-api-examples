/**
 * Perfex CRM REST API — Invoices examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Node 18+ has global fetch & FormData. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

async function listInvoices() {
  const res = await fetch(`${BASE}/invoices`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getInvoice(id = 1) {
  const res = await fetch(`${BASE}/invoices/${id}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function createInvoice() {
  // POST/PUT send multipart/form-data.
  // v3 auto-calculates subtotal/total from the line items below.
  const form = new FormData();
  form.append("clientid", "1");
  form.append("number", "INV-000123");
  form.append("date", "2026-01-15");
  form.append("duedate", "2026-02-15");
  form.append("currency", "1");
  form.append("items[0][description]", "Consulting");
  form.append("items[0][qty]", "2");
  form.append("items[0][rate]", "150");

  const res = await fetch(`${BASE}/invoices`, {
    method: "POST",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function updateInvoice(id = 1) {
  const form = new FormData();
  form.append("duedate", "2026-03-01");

  const res = await fetch(`${BASE}/invoices/${id}`, {
    method: "PUT",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function deleteInvoice(id = 1) {
  const res = await fetch(`${BASE}/invoices/${id}`, {
    method: "DELETE",
    headers: { authtoken: TOKEN },
  });
  return { status: res.status, data: await res.json() };
}

(async () => {
  console.log(await listInvoices());
  console.log(await getInvoice(1));
  console.log(await createInvoice());
  console.log(await updateInvoice(1));
  console.log(await deleteInvoice(1));
})();
