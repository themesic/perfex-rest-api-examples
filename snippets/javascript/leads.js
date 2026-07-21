/**
 * Perfex CRM REST API — Leads examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Node 18+ has global fetch & FormData. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

async function listLeads() {
  const res = await fetch(`${BASE}/leads`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getLead(id = 1) {
  const res = await fetch(`${BASE}/leads/${id}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function createLead() {
  // POST/PUT send multipart/form-data
  const form = new FormData();
  form.append("name", "Jane Doe");
  form.append("email", "jane@example.com");
  form.append("source", "1");
  form.append("status", "1");
  form.append("assigned", "1");
  form.append("phonenumber", "+44 210 7298299");
  form.append("company", "Acme LTD");
  form.append("title", "Procurement Manager");

  const res = await fetch(`${BASE}/leads`, {
    method: "POST",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function updateLead(id = 1) {
  const form = new FormData();
  form.append("status", "2");

  const res = await fetch(`${BASE}/leads/${id}`, {
    method: "PUT",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function deleteLead(id = 1) {
  const res = await fetch(`${BASE}/leads/${id}`, {
    method: "DELETE",
    headers: { authtoken: TOKEN },
  });
  return { status: res.status, data: await res.json() };
}

(async () => {
  console.log(await listLeads());
  console.log(await getLead(1));
  console.log(await createLead());
  console.log(await updateLead(1));
  console.log(await deleteLead(1));
})();
