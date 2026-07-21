/**
 * Perfex CRM REST API — Smarter list features (Node.js / fetch)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Every list endpoint accepts optional query parameters. Add them and you get a
 * { data, meta } envelope; omit them and you get the exact legacy array.
 * Demonstrated here on /customers, but they work on any list endpoint.
 *
 * Node 18+ has global fetch & FormData. No dependencies required.
 */

const BASE = "https://yourdomain.com/api";
const TOKEN = "YOUR_API_TOKEN";

// Pagination: page 2, 20 per page -> { data, meta }.
async function paginate() {
  const res = await fetch(`${BASE}/customers?page=2&per_page=20`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Field selection: return only id + company.
async function selectFields() {
  const res = await fetch(`${BASE}/customers?fields=id,company`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Sorting: newest first, then company ascending ("-" = descending).
async function sortResults() {
  const res = await fetch(`${BASE}/customers?sort=-datecreated,company`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Date-range filter: created within 2026.
async function filterByDate() {
  const res = await fetch(
    `${BASE}/customers?created_after=2026-01-01&created_before=2026-12-31`,
    { headers: { authtoken: TOKEN } }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Everything at once: page, fields, sort and date range combined.
async function combined() {
  const params = new URLSearchParams({
    page: "2",
    per_page: "20",
    fields: "id,company",
    sort: "-datecreated,company",
    created_after: "2026-01-01",
    created_before: "2026-12-31",
  });
  const res = await fetch(`${BASE}/customers?${params}`, {
    headers: { authtoken: TOKEN },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Safe writes: send an Idempotency-Key so a retried POST is not duplicated.
// Reuse the same key on retry and the server replays the original result.
async function createWithIdempotencyKey() {
  const form = new FormData();
  form.append("company", "Acme LTD");

  const res = await fetch(`${BASE}/customers`, {
    method: "POST",
    headers: {
      authtoken: TOKEN,
      "Idempotency-Key": "customer-acme-2026-01-15",
    },
    body: form,
  });

  // Rate-limit headers are returned on every response:
  //   X-RateLimit-Limit     - requests allowed per window
  //   X-RateLimit-Remaining - requests left in the current window
  //   X-RateLimit-Reset     - Unix timestamp when the window resets
  const rateLimit = {
    limit: res.headers.get("X-RateLimit-Limit"),
    remaining: res.headers.get("X-RateLimit-Remaining"),
    reset: res.headers.get("X-RateLimit-Reset"),
  };

  return { status: res.status, rateLimit, data: await res.json() };
}

(async () => {
  console.log(await paginate());
  console.log(await selectFields());
  console.log(await sortResults());
  console.log(await filterByDate());
  console.log(await combined());
  console.log(await createWithIdempotencyKey());
})();
