/**
 * Perfex CRM REST API — Knowledge Base examples (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Node 18+ has global fetch & FormData. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

async function listArticles() {
  const res = await fetch(`${BASE}/knowledge_base`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Filter articles by group.
async function listArticlesByGroup(groupId = 1) {
  const res = await fetch(`${BASE}/knowledge_base?group_id=${groupId}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getArticle(id = 12) {
  const res = await fetch(`${BASE}/knowledge_base/${id}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function createArticle() {
  // POST/PUT send multipart/form-data
  const form = new FormData();
  form.append("subject", "How to reset your password");
  form.append("description", "Open Settings > Security and click Reset password.");
  form.append("articlegroup", "1");
  form.append("active", "1");

  const res = await fetch(`${BASE}/knowledge_base`, {
    method: "POST",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function updateArticle(id = 12) {
  const form = new FormData();
  form.append("subject", "How to reset your password (updated)");

  const res = await fetch(`${BASE}/knowledge_base/${id}`, {
    method: "PUT",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

async function deleteArticle(id = 12) {
  const res = await fetch(`${BASE}/knowledge_base/${id}`, {
    method: "DELETE",
    headers: { authtoken: TOKEN },
  });
  return { status: res.status, data: await res.json() };
}

async function listGroups() {
  const res = await fetch(`${BASE}/knowledge_base/groups`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function createGroup() {
  const form = new FormData();
  form.append("name", "Billing");

  const res = await fetch(`${BASE}/knowledge_base/groups`, {
    method: "POST",
    headers: { authtoken: TOKEN },
    body: form,
  });
  return { status: res.status, data: await res.json() };
}

(async () => {
  console.log(await listArticles());
  console.log(await listArticlesByGroup(1));
  console.log(await getArticle(12));
  console.log(await createArticle());
  console.log(await updateArticle(12));
  console.log(await deleteArticle(12));
  console.log(await listGroups());
  console.log(await createGroup());
})();
