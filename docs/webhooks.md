# Webhooks 2.0

Push Perfex CRM events to your own backend, Slack, Discord or any HTTPS endpoint using the
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

**v3.0** ships production-grade webhooks: full REST management, a **124-event** catalogue, async
delivery with retries and exponential backoff, SSRF protection, TLS verification and **HMAC-signed**
requests so you can verify every payload came from your CRM.

- **Base URL:** `https://yourdomain.com/api`
- **Auth:** `authtoken: YOUR_API_TOKEN` (see [`authentication.md`](authentication.md))

## 1. Manage webhooks — `/api/webhooks`

Webhooks are CRUD resources. Create one with a name, a target `url`, the `events[]` it should fire
on, and a `secret` used to sign deliveries.

| Action | Method & path |
| --- | --- |
| List | `GET /api/webhooks` |
| Get one | `GET /api/webhooks/:id` |
| Create | `POST /api/webhooks` |
| Update | `PUT /api/webhooks/:id` |
| Delete | `DELETE /api/webhooks/:id` |
| Enable / disable | `POST /api/webhooks/:id/toggle` |
| Event catalogue | `GET /api/webhooks/events` |
| Delivery logs | `GET /api/webhooks/:id/logs` |

```bash
# Create a webhook that fires on new & updated invoices
curl -X POST "https://yourdomain.com/api/webhooks" \
  -H "authtoken: YOUR_API_TOKEN" \
  -F "name=Billing sync" \
  -F "url=https://example.com/hooks/perfex" \
  -F "events[]=invoice.created" \
  -F "events[]=invoice.updated" \
  -F "secret=whsec_your_signing_secret"
```

```json
{ "status": true, "message": "Webhook created successfully.", "id": 7 }
```

## 2. Event catalogue — `GET /api/webhooks/events`

The API exposes **124 events across 22 groups** (customers, contacts, leads, invoices, estimates,
payments, proposals, contracts, projects, tasks, tickets, and more). Fetch the live list to see the
exact event names your installation supports.

```bash
curl -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/webhooks/events"
```

Event names follow a `group.action` convention, for example:

| Event | Fires when |
| --- | --- |
| `customer.created` | A customer is added |
| `invoice.created` | An invoice is created |
| `invoice.paid` | An invoice is fully paid |
| `lead.status_changed` | A lead moves to another status |
| `task.completed` | A task is marked complete |

Subscribe to an entire group or everything with the **wildcard** `*`:

| Value | Subscribes to |
| --- | --- |
| `invoice.*` | Every invoice event |
| `*` | Every event in the catalogue |

## 3. Delivery: async, retried, backed off

Deliveries are **queued and sent asynchronously by cron**, so your CRM stays responsive even if the
receiver is slow. A delivery is considered successful on a `2xx` response. Failures are retried with
**exponential backoff** (increasing gaps between attempts) up to the configured maximum before the
delivery is marked failed.

| Behaviour | Detail |
| --- | --- |
| Transport | Async queue drained by the Perfex cron job |
| Success | HTTP `2xx` from your endpoint |
| Retries | Automatic, with exponential backoff between attempts |
| SSRF protection | Internal/private/loopback targets are blocked |
| TLS | Certificate verification enabled for `https://` targets |

> Make sure Perfex CRM cron is configured — deliveries drain from the queue on each cron run.

## 4. HMAC-signed requests

Every delivery carries an `X-Perfex-Signature` header so you can confirm the request is authentic
and untampered. The signature is computed from the webhook `secret` over the timestamp and the raw
request body:

```
X-Perfex-Signature: t=<unix>,v1=<hmac_sha256(t + "." + rawBody)>
```

- `t` — the Unix timestamp when the request was signed.
- `v1` — a hex `HMAC-SHA256`, keyed with the webhook's `secret`, over the string
  `t + "." + rawBody` (the timestamp, a literal dot, then the exact raw body bytes).

To verify: recompute `v1` yourself and compare using a constant-time comparison. Optionally reject
requests whose `t` is too old to blunt replay attacks.

### Verify in PHP

```php
<?php
function verify_perfex_signature(string $rawBody, string $header, string $secret): bool {
    // header: "t=1753104000,v1=abc123..."
    $parts = [];
    foreach (explode(',', $header) as $piece) {
        [$k, $v] = array_pad(explode('=', $piece, 2), 2, '');
        $parts[$k] = $v;
    }
    if (empty($parts['t']) || empty($parts['v1'])) {
        return false;
    }
    $expected = hash_hmac('sha256', $parts['t'] . '.' . $rawBody, $secret);
    return hash_equals($expected, $parts['v1']);
}

$rawBody = file_get_contents('php://input');
$header  = $_SERVER['HTTP_X_PERFEX_SIGNATURE'] ?? '';
if (!verify_perfex_signature($rawBody, $header, 'whsec_your_signing_secret')) {
    http_response_code(401);
    exit('invalid signature');
}
```

### Verify in Node.js

```js
const crypto = require("crypto");

function verifyPerfexSignature(rawBody, header, secret) {
  const parts = Object.fromEntries(
    header.split(",").map((p) => p.split("="))
  );
  if (!parts.t || !parts.v1) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${parts.t}.${rawBody}`)
    .digest("hex");
  // constant-time compare
  const a = Buffer.from(expected);
  const b = Buffer.from(parts.v1);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
```

> Verify against the **raw** request body, before any JSON parsing or reformatting — re-serialising
> the body will change the bytes and break the signature.

## 5. Delivery logs — `GET /api/webhooks/:id/logs`

Inspect what was sent, the response received and each retry attempt for a webhook.

```bash
curl -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/webhooks/7/logs"
```

Each log entry typically includes the event, the response status, the attempt number and a
timestamp — handy for debugging a receiver that is rejecting or timing out.

## 6. Toggle a webhook — `POST /api/webhooks/:id/toggle`

Temporarily disable (or re-enable) a webhook without deleting it. Disabled webhooks stop queuing new
deliveries.

```bash
curl -X POST -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/webhooks/7/toggle"
```

## Push vs. poll

Webhooks are the **push** model: Perfex calls you when something happens. If your platform can only
**poll** (Zapier, Make, n8n), use the ready-made polling triggers in
[`automation.md`](automation.md) instead. Runnable webhook examples live in
[`snippets/curl/webhooks.sh`](../snippets/curl/webhooks.sh) and the matching `webhooks` file in each
snippet language.

---

📦 **Module:** [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) ·
📖 **Docs:** https://perfexcrm.themesic.com/apiguide/
