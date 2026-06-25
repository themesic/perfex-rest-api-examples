# Authentication, Errors & Pagination

Reference for using the [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

## 1. Get an API token

After activating the [REST API module](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
in your Perfex CRM admin, go to **API → API Management** and create a token. Assign the
per‑resource permissions (read / create / update / delete) that the token should be allowed to use.

> Keep tokens secret. Treat them like passwords — never commit them to a public repo or share them in URLs you don't control.

## 2. Authenticate requests

Every request must carry the token. Two equivalent options:

| Method | How | When |
| --- | --- | --- |
| **`Authtoken` header** (recommended) | `Authtoken: YOUR_API_TOKEN` | Server‑to‑server, scripts, Postman |
| **Query parameter** | `?authtoken=YOUR_API_TOKEN` | Quick tests, webhooks/automation platforms that can't set headers |

```bash
# Header (recommended)
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers

# Query parameter (equivalent)
curl "https://yourdomain.com/api/customers?authtoken=YOUR_API_TOKEN"
```

## 3. Base URL & conventions

- **Base URL:** `https://yourdomain.com/api`
- **Format:** JSON responses; `POST`/`PUT` send data as `multipart/form-data`.
- **RESTful pattern** per resource:

| Action | Method & path |
| --- | --- |
| List | `GET /api/{resource}` |
| Get one | `GET /api/{resource}/{id}` |
| Create | `POST /api/{resource}` |
| Update | `PUT /api/{resource}/{id}` |
| Delete | `DELETE /api/{resource}/{id}` |

## 4. Status codes & errors

| Code | Meaning |
| --- | --- |
| `200 OK` | Success (list/get/update/delete) |
| `201 Created` | Resource created |
| `400 Bad Request` | Validation failed / missing required field |
| `401 Unauthorized` | Missing or invalid `authtoken` |
| `403 Forbidden` | Token lacks permission for this resource/action |
| `404 Not Found` | Resource/endpoint does not exist |
| `409 Conflict` | Constraint conflict (e.g. ID already exists / dependency) |

Error responses use a consistent JSON envelope, for example:

```json
{ "status": false, "message": "The Name field is required." }
```

Successful create/update typically returns:

```json
{ "status": true, "message": "Customer added successfully." }
```

> Always check the HTTP status code first, then the `status` boolean in the body.

## 5. Pagination & filtering

Large collections support limiting and searching via query parameters, e.g.:

```bash
# Limit / offset
curl -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/customers/?limit=25&offset=0"

# Search (where supported by the resource)
curl -H "authtoken: YOUR_API_TOKEN" "https://yourdomain.com/api/customers/search/Acme"
```

The exact parameters available per resource are listed in the official
**[API guide](https://perfexcrm.themesic.com/apiguide/)**.

---

📦 **Module:** [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) ·
📖 **Docs:** https://perfexcrm.themesic.com/apiguide/
