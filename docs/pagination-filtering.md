# Pagination, Fields, Sorting & Date Filters

Smarter list endpoints for the [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

**v3.0** upgrades every list endpoint with opt-in pagination, column selection, sorting and
date-range filtering. Everything is **backwards-compatible**: a request *without* any of these
parameters returns the exact same legacy array it always did. Add one or more parameters and the
list endpoint responds instead with a `{ data, meta }` envelope.

- **Base URL:** `https://yourdomain.com/api`
- **Auth:** `authtoken: YOUR_API_TOKEN` (see [`authentication.md`](authentication.md))

## 1. Backwards compatibility

| Request | Response shape |
| --- | --- |
| `GET /api/customers` | Legacy JSON **array** (unchanged) |
| `GET /api/customers?page=1` | `{ "data": [...], "meta": {...} }` envelope |
| `GET /api/customers?fields=id,company` | Filtered array (or envelope if paginated) |

> If your existing integration does not send the new parameters, nothing changes. You can adopt
> them one endpoint at a time.

## 2. Pagination — `?page=` & `?per_page=`

Opt in to pagination by sending `page` and/or `per_page`. The response becomes an envelope with a
`meta` object describing the current slice.

```bash
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20"
```

The `meta` object contains:

| Key | Meaning |
| --- | --- |
| `page` | The page you requested |
| `per_page` | Items per page |
| `total` | Total matching records |
| `total_pages` | Total number of pages |
| `has_more` | `true` if another page follows |
| `current_page` | Alias of `page` |
| `last_page` | Alias of `total_pages` |

`per_page` accepts 1 to 100 and defaults to 25.

### A note on `?limit=`

`limit` is **not** the parameter that sizes a page. It is accepted as an alias for
`per_page` only when `page` is sent as well:

| Request | Result |
| --- | --- |
| `?page=1&per_page=5` | 5 rows, `{ data, meta }` envelope |
| `?page=1&limit=5` | 5 rows (alias accepted, because `page` is present) |
| `?limit=5` | **Not paginated.** Legacy array; `limit` keeps its older meaning |

This is deliberate: integrations written against 2.x already sent `?limit=` for a different
purpose, and treating a bare `limit` as a page size would silently change their results. Use
`?page=1&per_page=5` whenever you want a fixed number of rows back.

## 3. Field selection — `?fields=`

Return only the columns you need with a comma-separated `fields` list. This shrinks payloads and
speeds up transfers.

```bash
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?fields=id,company"
```

## 4. Sorting — `?sort=`

Sort by one or more columns with a comma-separated `sort` list. Prefix a column with `-` for
**descending** order; no prefix means ascending.

```bash
# Newest first, then company name A→Z
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?sort=-datecreated,company"
```

| Value | Meaning |
| --- | --- |
| `sort=company` | `company` ascending |
| `sort=-datecreated` | `datecreated` descending |
| `sort=-datecreated,company` | `datecreated` desc, then `company` asc |

## 5. Date filters — `?created_after=` & `?created_before=`

Restrict a list to records created within a date range. Both bounds are optional and can be used
together or on their own.

```bash
# Everything created during 2026
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?created_after=2026-01-01&created_before=2026-12-31"
```

| Parameter | Example | Effect |
| --- | --- | --- |
| `created_after` | `2026-01-01` | Only records created on/after this date |
| `created_before` | `2026-12-31` | Only records created on/before this date |

## 6. Combine everything

All parameters compose. The example below pages through customers, returns only two columns, sorts
newest-first and limits the range to the current year.

```bash
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

### Sample envelope response

```json
{
  "data": [
    { "id": "41", "company": "Acme Ltd" },
    { "id": "40", "company": "Globex Corp" }
  ],
  "meta": {
    "page": 2,
    "per_page": 20,
    "total": 137,
    "total_pages": 7,
    "has_more": true,
    "current_page": 2,
    "last_page": 7
  }
}
```

> Paginate through the whole collection by looping while `meta.has_more` is `true`, incrementing
> `page` each time. Runnable examples live in
> [`snippets/curl/list_features.sh`](../snippets/curl/list_features.sh) and the matching
> `list_features` file in each snippet language.

---

📦 **Module:** [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) ·
📖 **Docs:** https://perfexcrm.themesic.com/apiguide/
