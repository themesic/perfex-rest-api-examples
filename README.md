# Perfex CRM REST API — Examples & Postman Collection

> Ready-to-use **Postman collection**, **code snippets** (cURL, PHP, Python, JavaScript) and a
> resource **catalogue** for the [REST API module for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

These examples target the **[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
by **Themesic Interactive** — the module that lets you connect your Perfex CRM with third‑party
applications (Zapier, Make, n8n, custom apps) over a clean RESTful HTTP/JSON API.

- 🧩 **Get the module:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **API guide / live docs:** https://perfexcrm.themesic.com/apiguide/

---

## Contents

| Folder | What's inside |
| --- | --- |
| [`postman/`](postman/) | Importable Postman **collection** + **environment** (`{{base_url}}`, `{{authtoken}}`) |
| [`snippets/curl/`](snippets/curl/) | Copy‑paste `curl` commands for the most common calls |
| [`snippets/php/`](snippets/php/) | PHP (Guzzle / cURL) examples |
| [`snippets/python/`](snippets/python/) | Python (`requests`) examples |
| [`snippets/javascript/`](snippets/javascript/) | JavaScript / Node (`fetch` + `axios`) examples |
| [`docs/`](docs/) | Authentication, pagination & filtering, errors & status codes |

---

## Quick start

Every request is authenticated with the **`Authtoken`** header. Create a token in your Perfex admin
under **API → API Management** (after activating the
[REST API module](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)),
then call the API at `https://yourdomain.com/api/...`:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

That returns the list of customers as JSON. See [`docs/authentication.md`](docs/authentication.md) for
header vs. query‑parameter auth, and [`snippets/`](snippets/) for the same call in PHP, Python and JavaScript.

### Use the Postman collection

1. Open Postman → **Import** → drop in [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Import the environment [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Set `base_url` to `https://yourdomain.com/api` and `authtoken` to your token.
4. Pick any request and hit **Send**.

---

## Endpoint catalogue

All endpoints follow a RESTful convention: `GET` list, `GET /:id` single, `POST` create,
`PUT /:id` update, `DELETE /:id` delete — under the base path `https://yourdomain.com/api`.

| Resource | Base path | Typical operations |
| --- | --- | --- |
| Customers | `/api/customers` | list, get, create, update, delete |
| Contacts | `/api/contacts` | list, get, create, update, delete |
| Leads | `/api/leads` | list, get, create, update, delete |
| Invoices | `/api/invoices` | list, get, create, update, delete |
| Estimates | `/api/estimates` | list, get, create, update, delete |
| Credit Notes | `/api/credit_notes` | list, get, create, update |
| Payments | `/api/payments` | list, get, create |
| Proposals | `/api/proposals` | list, get, create, update, delete |
| Contracts | `/api/contracts` | list, get, create, update, delete |
| Projects | `/api/projects` | list, get, create, update, delete |
| Tasks | `/api/tasks` | list, get, create, update, delete |
| Milestones | `/api/milestones` | list, get, create, update, delete |
| Timesheets | `/api/timesheets` | list, get, create, update, delete |
| Subscriptions | `/api/subscriptions` | list, get, create, update |
| Items | `/api/items` | list, get, create, update, delete |
| Expenses | `/api/expenses` | list, get, create, update, delete |
| Staff | `/api/staffs` | list, get, create, update, delete |
| Calendar | `/api/calendar` | list, get, create, update, delete |
| Custom Fields | `/api/custom_fields` | list per related type |
| Common (lookups) | `/api/common` | countries, taxes, currencies, statuses … |

> The exact request fields per resource are documented in the official
> **[API guide](https://perfexcrm.themesic.com/apiguide/)**. The snippets here cover the most common flows.

---

## Authentication (summary)

| Method | How |
| --- | --- |
| Header (recommended) | `Authtoken: YOUR_API_TOKEN` |
| Query parameter | `?authtoken=YOUR_API_TOKEN` (handy for quick tests / webhooks) |

Tokens are created and scoped (per‑resource permissions) in **API → API Management**. Full details in
[`docs/authentication.md`](docs/authentication.md).

---

## About / Support

This repository is an **examples companion** to the commercial module:

> **[REST API for Perfex CRM — connect your Perfex CRM with third‑party applications](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> by [Themesic Interactive](https://themesic.com).

- 🛒 **Buy / learn more:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Documentation:** https://perfexcrm.themesic.com/apiguide/
- 💬 **Support:** via the item's support channel on Themesic Interactive.

Contributions of additional examples are welcome — see [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

Example code in this repository is released under the [MIT License](LICENSE). "Perfex" is a trademark of
its respective owner; the REST API module is a commercial product by Themesic Interactive.
