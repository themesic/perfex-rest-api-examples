# Automation: Zapier, Make & n8n (Polling)

No-code automation for the
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

**v3.0** adds ready-made **polling triggers** under `/api/zapier/*`, designed for platforms that pull
for changes on a schedule — **Zapier, Make.com, n8n** and any polling-based tool. Ask "what's new or
updated since this timestamp?" and get back a clean list you can map to actions.

- **Base URL:** `https://yourdomain.com/api`
- **Auth:** `authtoken: YOUR_API_TOKEN` — header or `?authtoken=` query param (see
  [`authentication.md`](authentication.md))

## 1. Endpoints

| Endpoint | Purpose |
| --- | --- |
| `GET /api/zapier/resources` | Discover which resources support polling |
| `GET /api/zapier/poll/:resource?since=<unix>&limit=50` | New/updated records since a timestamp |
| `GET /api/zapier/test/:resource` | One sample record (for building/testing a Zap) |

Pollable resources include **customers, invoices, leads, tasks and tickets**.

## 2. Discover resources — `GET /api/zapier/resources`

```bash
curl -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/zapier/resources"
```

```json
{
  "status": true,
  "resources": ["customers", "invoices", "leads", "tasks", "tickets"]
}
```

## 3. Poll for changes — `GET /api/zapier/poll/:resource`

Pass `since` as a **Unix timestamp** to get records created or updated after that moment. Use `limit`
to cap the batch size (default 50). On each run, store the newest timestamp you saw and send it back
as `since` next time.

```bash
# Invoices changed since a Unix timestamp, max 50
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/zapier/poll/invoices?since=1753104000&limit=50"
```

| Parameter | Example | Meaning |
| --- | --- | --- |
| `since` | `1753104000` | Unix timestamp; return records changed after this |
| `limit` | `50` | Max records to return (default 50) |

```json
{
  "status": true,
  "resource": "invoices",
  "data": [
    { "id": "128", "number": "INV-000128", "total": "480.00", "datecreated": "2026-07-21 09:14:00" }
  ]
}
```

## 4. Sample record — `GET /api/zapier/test/:resource`

Returns a single representative record so a platform can map fields while you build the automation,
without waiting for real activity.

```bash
curl -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/zapier/test/leads"
```

## 5. Wire it up

The pattern is the same on every platform: a polling trigger that calls the `poll` endpoint on a
schedule, remembers the last timestamp, and emits one item per new/updated record.

**Zapier**
1. Trigger app: **Webhooks by Zapier → Retrieve Poll** (or a custom app action).
2. URL: `https://yourdomain.com/api/zapier/poll/invoices`.
3. Auth: add an `authtoken` **header**, or append `?authtoken=YOUR_API_TOKEN` to the URL.
4. Map the returned `data[]` records to your action steps.

**Make.com**
1. Add an **HTTP → Make a request** module (or a Watch module on a schedule).
2. Method `GET`, URL as above, add the `authtoken` header.
3. Parse the JSON response and iterate `data[]`.

**n8n**
1. Use the **HTTP Request** node on a **Schedule Trigger**.
2. Set the URL and add the `authtoken` header (or query param).
3. Feed `data` into a **Split Out** / **Item Lists** node to process each record.

> **Auth on platforms that can't set headers:** append `?authtoken=YOUR_API_TOKEN` to the URL.
> Prefer the header where possible so the token never appears in URLs or logs.

## Push alternative

Polling checks on a schedule; **webhooks push instantly** when an event happens. If your platform
can receive HTTP callbacks, webhooks are lower-latency and lighter on the server — see
[`webhooks.md`](webhooks.md). Runnable polling examples live in
[`snippets/curl/automation.sh`](../snippets/curl/automation.sh) and the matching `automation` file in
each snippet language.

---

📦 **Module:** [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) ·
📖 **Docs:** https://perfexcrm.themesic.com/apiguide/
