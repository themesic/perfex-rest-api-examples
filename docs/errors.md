# Errors, Status Codes, Rate Limits & Idempotency

Error handling reference for the
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

Always check the **HTTP status code** first, then read the `status` boolean and any `errors` object
in the JSON body. This page covers status codes, the v3 validation envelope, rate limiting and
idempotent retries.

- **Base URL:** `https://yourdomain.com/api`
- **Auth:** `authtoken: YOUR_API_TOKEN` (see [`authentication.md`](authentication.md))

## 1. HTTP status codes

| Code | Meaning | Typical cause |
| --- | --- | --- |
| `200 OK` | Success | List / get / update / delete succeeded |
| `201 Created` | Resource created | A `POST` created a new record |
| `400 Bad Request` | Malformed request | Missing required field, bad JSON |
| `401 Unauthorized` | Not authenticated | Missing or invalid `authtoken` |
| `403 Forbidden` | Not permitted | Token lacks permission for this resource/action |
| `404 Not Found` | Does not exist | Unknown resource, endpoint or `:id` |
| `409 Conflict` | Constraint conflict | Duplicate/ID clash or dependency conflict |
| `422 Unprocessable Entity` | Validation failed | One or more fields failed validation |
| `429 Too Many Requests` | Rate limited | You exceeded the rate limit — back off |
| `500 Internal Server Error` | Server error | Unexpected server-side failure |

## 2. Validation errors (422)

When one or more fields fail validation, the API responds with `422` and a structured envelope. The
`errors` object maps each offending **field** to a human-readable reason.

```json
{
  "status": false,
  "error": "validation_failed",
  "message": "The given data was invalid.",
  "errors": {
    "email": "The email field must be a valid email address.",
    "company": "The company field is required."
  }
}
```

| Field | Meaning |
| --- | --- |
| `status` | Always `false` on error |
| `error` | Machine-readable error code, e.g. `validation_failed` |
| `message` | Human-readable summary |
| `errors` | Per-field map of `field → reason` (present on `422`) |

> Simpler errors (auth, not-found) may return the compact envelope
> `{ "status": false, "message": "..." }` without an `errors` map. Code defensively for both shapes.

## 3. Rate limiting (429)

Every response carries rate-limit headers describing your current window. When you exceed the limit
you get `429 Too Many Requests` — pause and retry after the reset.

| Header | Meaning |
| --- | --- |
| `X-RateLimit-Limit` | Max requests allowed in the current window |
| `X-RateLimit-Remaining` | Requests left in the current window |
| `X-RateLimit-Reset` | When the window resets (Unix timestamp) |

```bash
curl -i -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/customers"
```

```
HTTP/1.1 200 OK
X-RateLimit-Limit: 120
X-RateLimit-Remaining: 118
X-RateLimit-Reset: 1753104060
```

> When you receive `429`, wait until `X-RateLimit-Reset` before retrying, and ideally add jitter so
> many clients don't retry at the same instant.

## 4. Idempotency (safe retries)

Network hiccups can leave you unsure whether a `POST` succeeded. Send an **`Idempotency-Key`** header
with a unique value per logical operation. If an identical request is retried with the same key, the
API **replays the stored response** instead of creating a duplicate record.

```bash
curl -X POST "https://yourdomain.com/api/invoices" \
  -H "authtoken: YOUR_API_TOKEN" \
  -H "Idempotency-Key: 5f0b2c1a-9d3e-4b7a-8c21-1e2f3a4b5c6d" \
  -F "clientid=12" \
  -F "items[0][description]=Consulting" \
  -F "items[0][qty]=1" \
  -F "items[0][rate]=480"
```

| Aspect | Behaviour |
| --- | --- |
| Header | `Idempotency-Key: <unique value>` |
| Scope | `POST` (create) requests |
| First call | Executes normally and stores the response against the key |
| Retry (same key) | Returns the stored response — no duplicate created |

> Generate a fresh key (e.g. a UUID) per operation. Reuse the **same** key only when retrying the
> **same** request after a failure or timeout.

## 5. Handling errors in code

A robust client:

1. Checks the HTTP status code first.
2. Treats `2xx` as success, then reads the `status` boolean for the app-level result.
3. On `422`, surfaces the per-field `errors` map to the user.
4. On `429`, backs off until `X-RateLimit-Reset`.
5. On network failure of a `POST`, retries with the **same** `Idempotency-Key`.

See the language snippets in [`snippets/`](../snippets/) for working request examples, and
[`authentication.md`](authentication.md) for the auth basics.

---

📦 **Module:** [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) ·
📖 **Docs:** https://perfexcrm.themesic.com/apiguide/
