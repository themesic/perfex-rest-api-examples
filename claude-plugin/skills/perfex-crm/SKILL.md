---
name: perfex-crm
description: Work with the user's Perfex CRM through the Perfex CRM connector. Use when the user asks to look up, list, find, add, change or delete customers, contacts, leads, projects, tasks, tickets, contracts, expenses, staff, notes or other records in Perfex, or asks for a summary or report of their CRM data.
---

# Working with Perfex CRM

The Perfex CRM connector exposes the user's own CRM through the REST API for Perfex CRM module by Themesic Interactive. Every call runs against the user's CRM with the permissions of the API token they connected.

## Tool naming

Resource tools follow the pattern `{resource}_{action}`, for example `customers_list`, `customers_search`, `customers_get`, `leads_create`, `tasks_update`, `tickets_delete`.

- `_list`: `limit` (default 25, max 100), `offset`, optional `created_after` / `created_before` (ISO dates) and resource-specific filters (for example `tasks_list` accepts `rel_type` + `rel_id`, `status`, `milestone`)
- `_search`: keyword `q` plus `limit`
- `_get`: one record by `id`
- `_create`: fields in a `data` object, using the REST API field names
- `_update`: `id` plus a `data` object with only the fields to change
- `_delete`: `id`

There are also read-only lookups such as `list_currencies`, `list_taxes`, `list_payment_modes`, `list_countries`, `list_lead_statuses`, `list_lead_sources`, `list_departments` and `list_expense_categories`, plus `get_current_datetime` and `get_server_info`.

Only the tools the token is allowed to use are offered. If the tool you need is missing, do not improvise with another tool: tell the user their API token lacks that permission and that an admin can grant it in Perfex under Setup > API > API Management.

## Workflow

1. **Orient once.** At the start of a CRM task, call `get_server_info` to confirm the connection and see the module version and tool count. For anything date-relative ("this quarter", "last month", "overdue"), call `get_current_datetime` instead of guessing today's date.
2. **Resolve names to ids.** Users speak in names; tools take ids. Find the record first with `{resource}_search` (for example `customers_search` with the company name), then use its id. If several records match, show the candidates (name, id, one distinguishing field) and ask which one. Never guess an id.
3. **Search before you create.** Before `customers_create`, `leads_create` or `contacts_create`, search by name, email or VAT number to avoid duplicates. If a likely match exists, show it and ask whether to update it or create a new record.
4. **Use lookups for reference values.** Currency, tax, payment mode, country, lead status and lead source fields take ids. Get them from the matching `list_*` tool rather than inventing values.
5. **Paginate deliberately.** `_list` returns at most 100 rows per call. Page with `offset` only as far as the question needs, and say so when results were truncated. Prefer `_search` or date and relation filters over pulling whole tables.
6. **Update minimally.** Send only the fields that change in `data`. Read the record with `_get` first when you need its current values.

## Confirm before risky actions

- **Deletes are permanent.** Before any `_delete` call, show exactly what will be deleted (type, id, name or number) and get an explicit yes in the conversation. Never delete in bulk from a single approval.
- **Actions that notify people.** If a create or update could email a customer or contact (for example creating a ticket or a customer-facing document), or if the user asks you to send something, confirm the recipient and content first.
- **Bulk writes.** For changes to more than a few records, list what will change and confirm before starting.

## Present results

- Summarize; do not paste raw JSON. Use a short table or bullet list with the fields that answer the question (name, id, status, dates, amounts with currency).
- Give totals and counts when the user asks "how many" or "how much", and state the date range and filters you used.
- After a write, confirm what changed and include the record id (and number, for documents).

## Handle errors

Tool failures come back as results with `isError: true` and a message starting with `Error:`. Read the message and act on it:

- **Permission errors** (for example "This token has no permission for invoices"): explain that the API token cannot do this and point to Setup > API > API Management.
- **Module, license or connection errors** (the module is missing, disabled, unlicensed for this domain, or the MCP server is turned off): tell the user plainly that the connector only works with an installed and licensed REST API for Perfex CRM module with the MCP server enabled under Setup > API > Settings, and give the purchase link: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- **Validation errors** (missing or invalid fields): fix the input, using lookups or `_get` to find valid values, and retry once. If it still fails, show the user the message.
- Never retry a failed write in a loop, and never report success unless the tool result confirms it.

For invoices, estimates, proposals, credit notes and payments, also follow the `perfex-sales-documents` skill.
