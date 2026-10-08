# REST API for Perfex CRM - Claude plugin

> **Requirement: this plugin only works if your Perfex CRM has the paid [REST API for Perfex CRM module](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) by Themesic Interactive installed, with a valid license for your CRM's domain and its MCP server enabled. Without the module the connector gives no access to anything.**
>
> Buy the module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/

![REST API for Perfex CRM](assets/icon.png)

This plugin connects Claude to **your own** Perfex CRM. Claude can search, read, create and update customers, contacts, leads, invoices, estimates, proposals, credit notes, payments, projects, tasks, milestones, tickets, contracts, expenses, items, staff, notes, knowledge base articles and more, using the MCP server that ships with the REST API module.

The plugin contains:

- **The Perfex CRM connector**: a remote MCP server at `https://perfex-mcp.themesic.com/mcp` (OAuth sign-in) that forwards Claude's tool calls to the MCP endpoint of your CRM.
- **Two skills** that teach Claude to use the tools well: `perfex-crm` (finding records, avoiding duplicates, paging, confirming deletes, handling errors) and `perfex-sales-documents` (invoices, estimates, proposals, credit notes, payments and their line items).

The plugin has no hooks, scripts or local programs. It does not run anything on your computer.

## Setup

1. **Buy and install the module.** Purchase the [REST API for Perfex CRM module](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/), install it in Perfex under Setup > Modules, and activate your license for the CRM's domain.
2. **Enable the MCP server.** In your Perfex admin, go to Setup > API > Settings and turn on the MCP server.
3. **Create an API token.** Go to Setup > API > API Management, create a token for Claude, and give it only the permissions Claude should have (see [Permissions](#permissions-and-safety)).
4. **Install the plugin** in Claude from the directory.
5. **Connect.** Open the plugin's **Connectors** tab (claude.ai and Cowork) or run `/mcp` (Claude Code) and connect **perfex-crm**. You are sent to the Themesic sign-in page.
6. **Sign in.** Enter your Perfex CRM URL (for example `https://crm.yourcompany.com`) and the API token from step 3, then approve access. Claude can now use the tools your token allows.

On Team and Enterprise plans, an Owner adds the connector for the organization, and each member then connects with their own CRM URL and token.

## What you can ask

- "Find the customer Acme Ltd and show their open invoices."
- "Add a lead for Maria Lopez from Northwind, email maria@example.com, source Website."
- "Create an invoice for Acme Ltd: 10 hours consulting at 120 EUR, due in 30 days."
- "Which invoices are overdue this quarter? Give me the total per currency."
- "List my open tasks on the Website Redesign project and mark the logo task as done."
- "Summarize the tickets opened this week and who they are assigned to."
- "Draft an estimate for Globex based on last month's invoice, but with a 10% discount on each line."

Claude searches before it creates records, asks you to pick when several records match, and asks for your explicit confirmation before deleting anything or doing anything that may email a customer.

## Permissions and safety

- **The API token decides what Claude can do.** The MCP server only offers the tools that the token's permissions allow. A token without invoice permissions never sees invoice tools; a token with read permissions only cannot create, change or delete anything.
- **Start with a read-only token.** For reporting and look-ups, create a token with only read (view) permissions. Add create, edit or delete permissions later, only for the areas you want Claude to change.
- **Deletes are permanent** in Perfex. Claude is instructed to confirm every delete with you, but a read-only token is the strongest protection.
- You can revoke Claude's access at any time by deleting the token in Setup > API > API Management or by disconnecting the connector in Claude.

## Privacy Policy

Full policy: https://perfex-mcp.themesic.com/privacy

**Data flow.** Claude sends each tool call (the tool name and its arguments, for example a search keyword or the fields of a new invoice) to the Themesic MCP gateway at `perfex-mcp.themesic.com`. The gateway forwards the call to the MCP endpoint of **your** Perfex CRM (`https://your-crm-domain/api/mcp`) using your API token, and returns your CRM's response to Claude. Your CRM data stays in your CRM.

**What the gateway stores.** Only the OAuth grant created when you connect: your Perfex CRM URL and your API token, stored encrypted. The gateway does not store or log CRM records, tool arguments or tool responses.

**Retention.** The grant is kept while the connection is active and is deleted when you disconnect the connector or the grant is revoked. Deleting the API token in Perfex makes the stored grant unusable immediately. You can ask for deletion at any time by emailing support@themesic.com.

**Sharing.** Themesic does not sell or share your data with third parties. Data passes only between Claude, the gateway and your own CRM.

**The plugin itself** contains only Markdown skills and the connector address. It does not collect, store or send any other data.

**Contact.** Privacy questions: support@themesic.com.

## Support

- Email: support@themesic.com
- Support portal: https://themesic.com/support
- Module documentation: https://perfexcrm.themesic.com/apiguide/
- MCP server reference: [docs/mcp.md](https://github.com/themesic/perfex-rest-api-examples/blob/main/docs/mcp.md)

## License

The plugin files are released under the MIT License (see [LICENSE](LICENSE)). The REST API for Perfex CRM module is a separate commercial product by Themesic Interactive. "Perfex" is a trademark of its respective owner.
