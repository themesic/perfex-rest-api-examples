---
name: perfex-sales-documents
description: Create, read and edit Perfex CRM invoices, estimates, proposals, credit notes and payments, including their line items. Use when the user asks to bill a customer, draft or change an invoice, estimate or proposal, add or remove line items, record or review payments, or report on revenue, unpaid or overdue invoices in Perfex.
---

# Perfex CRM sales documents

Invoices, estimates, proposals and credit notes carry line items. These tools follow the `{resource}_{action}` pattern (for example `invoices_create`, `estimates_get`, `proposals_update`, `credit_notes_list`, `payments_list`). Follow the general `perfex-crm` skill for lookups, confirmations and error handling; this skill adds the document-specific rules.

## Before creating a document

1. Resolve the customer with `customers_search` and use its id (`clientid`). Ask if the match is ambiguous.
2. Get the currency id from `list_currencies` and, if the user mentions tax, the tax names or ids from `list_taxes`. Do not invent ids.
3. Use `get_current_datetime` for today's date and for due dates expressed relatively ("net 30").
4. For catalog products or services, look them up with `items_search` and reuse their description and rate.
5. Show the user a draft (customer, date, due date, currency, each line with quantity, rate and line total, and the expected subtotal) and confirm before calling `_create`.

## Line items

- Pass line items in `data.items` as an array of objects with `description`, optional `long_description`, `qty`, `rate`, and optional `unit`. Subtotal and total are calculated by the CRM from the items.
- `{resource}_get` returns the current line items in an `items` array, each with its `itemid`.
- On `{resource}_update`, include `itemid` to edit an existing line, omit `itemid` to add a new line, and list the `itemid`s to remove in a `removed_items` array. Fields you leave out of `data` are not changed.
- Always read the document with `_get` before editing its lines so you work from the current items.

## Payments

- Find payments with `payments_list` or `payments_search`; read the related invoice with `invoices_get` when you need the balance or status.
- Recording or changing a payment only updates the CRM's records. It never moves money. Confirm amount, date, payment mode (from `list_payment_modes`) and invoice before writing.

## Reporting

- For "unpaid", "overdue" or "this quarter" questions, combine `get_current_datetime` with `_list` and its `created_after` / `created_before` filters, then page with `offset` as needed.
- Report amounts with their currency and say which date range and statuses you included. Do not add up amounts in different currencies into one total.

## Confirm before

- Deleting any invoice, estimate, proposal, credit note or payment.
- Any action the user describes as sending the document to the customer, or that may email the customer.
- Changing a document that is already paid or partially paid.
