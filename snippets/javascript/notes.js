/**
 * Perfex CRM REST API — Notes examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Notes are polymorphic: attach them to a customer, lead, invoice, task or ticket.
 * Node 18+ has global fetch & FormData. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

// List notes for a related entity.
// rel_type is one of: customer, lead, invoice, task, ticket.
async function listNotes(relType = "customer", relId = 1) {
  const res = await fetch(`${BASE}/notes/${relType}/${relId}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getNote(id = 5) {
  const res = await fetch(`${BASE}/notes/${id}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function createNote() {
  // POST/PUT send multipart/form-data
  const form = new FormData();
  form.append("rel_type", "customer");
  form.append("rel_id", "1");
  form.append("description", "Called the client to confirm the renewal.");

  const res = await fetch(`${BASE}/notes`, {
    method: "POST",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function updateNote(id = 5) {
  const form = new FormData();
  form.append("description", "Client confirmed the renewal for 12 months.");

  const res = await fetch(`${BASE}/notes/${id}`, {
    method: "PUT",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function deleteNote(id = 5) {
  const res = await fetch(`${BASE}/notes/${id}`, {
    method: "DELETE",
    headers: { authtoken: TOKEN },
  });
  return { status: res.status, data: await res.json() };
}

(async () => {
  console.log(await listNotes("customer", 1));
  console.log(await getNote(5));
  console.log(await createNote());
  console.log(await updateNote(5));
  console.log(await deleteNote(5));
})();
