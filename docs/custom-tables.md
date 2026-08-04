# Third-Party Custom Tables

Read and write tables created by *other* Perfex CRM modules, without writing a custom API
controller for each one.

- **Base URL:** `https://yourdomain.com/api`
- **Auth:** `authtoken: YOUR_API_TOKEN` (see [`authentication.md`](authentication.md))
- **Permission:** the token needs the `thirdparty` feature, with `get` / `post` / `put` / `delete`
  as appropriate.

## 1. The URL pattern

The `customtable` segment is **required**:

```
GET    /api/thirdparty/customtable/{table_name}
POST   /api/thirdparty/customtable/{table_name}
GET    /api/thirdparty/customtable/{table_name}/{id}
PUT    /api/thirdparty/customtable/{table_name}/{id}
DELETE /api/thirdparty/customtable/{table_name}/{id}
```

> Calling `/api/thirdparty` on its own answers **405 Method Not Allowed**, and other guesses
> answer **404**. Both mean the same thing: the path is missing `/customtable/{table_name}`.

## 2. Allowlist the table first

Since **v3.0.2** these endpoints reach only the tables you explicitly expose:

1. Go to **Setup > API > Settings**.
2. Add the table names you want reachable to the custom-tables allowlist.
3. Save.

The allowlist is **empty by default**, so a fresh install exposes nothing. A built-in denylist
additionally blocks core tables regardless of the allowlist: staff, options, roles, the API's own
token and permission tables, migrations, sessions and similar.

If you granted the `thirdparty` permission before 3.0.2, review those tokens now and add only the
tables each integration genuinely needs.

## 3. Examples

List every row:

```bash
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/thirdparty/customtable/tblmy_module_data"
```

Fetch one row:

```bash
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/thirdparty/customtable/tblmy_module_data/42"
```

Insert a row - the body is a plain column/value map, and every column is validated against the
table before the insert runs:

```bash
curl -X POST \
  -H "authtoken: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"reference":"INV-2026-001","amount":"250.00","status":"pending"}' \
  "https://yourdomain.com/api/thirdparty/customtable/tblmy_module_data"
```

Update a row - send only the columns you want changed:

```bash
curl -X PUT \
  -H "authtoken: YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"status":"paid"}' \
  "https://yourdomain.com/api/thirdparty/customtable/tblmy_module_data/42"
```

Delete a row:

```bash
curl -X DELETE -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/thirdparty/customtable/tblmy_module_data/42"
```

## 4. Common responses

| Status | Meaning |
| --- | --- |
| `200` | Success |
| `403` | Table is not allowlisted, is denylisted, or the token lacks the `thirdparty` permission |
| `404` | Table or row not found, or the URL is missing `/customtable/{table_name}` |
| `405` | You called `/api/thirdparty` without the `customtable` segment |
| `422` | A column in the body does not exist on the table |

See also [`errors.md`](errors.md) for the full status-code reference.
