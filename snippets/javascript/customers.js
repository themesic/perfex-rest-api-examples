/**
 * Perfex CRM REST API — Customers examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Node 18+ has global fetch & FormData. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

async function listCustomers() {
  const res = await fetch(`${BASE}/customers`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function createCustomer() {
  // POST/PUT send multipart/form-data
  const form = new FormData();
  form.append("company", "Acme LTD");
  form.append("vat", "123456789");
  form.append("phonenumber", "+44 210 7298299");
  form.append("website", "https://example.com");
  form.append("city", "London");
  form.append("country", "235");

  const res = await fetch(`${BASE}/customers`, {
    method: "POST",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

(async () => {
  console.log(await listCustomers());
  console.log(await createCustomer());
})();
