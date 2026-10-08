# Connect Perfex CRM to Claude, ChatGPT and other AI assistants

> **Requirement:** the [REST API for Perfex CRM module](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
> must be installed on your CRM, with a valid license for your CRM's domain. Without it the connector gives no access.
> **[Get the module](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**

One connector URL works in every assistant:

```
https://perfex-mcp.themesic.com/mcp
```

When you connect, a Themesic sign-in page asks for your CRM address and an API token. Your assistant then works with
your CRM's customers, leads, invoices, estimates, projects, tasks, tickets and more, limited to that token's permissions.

## Before you start (once, about 3 minutes)

1. In Perfex, open **Setup > API > Settings** and turn on **Enable MCP Server (AI agents)**. Save.
2. Open **Setup > API > API Management** and create a token for the assistant.
   - Give it only the permissions you want the assistant to have. A read-only token is the safest start.
3. Keep the token at hand. You paste it once, on the Themesic sign-in page.

## Claude (claude.ai, Claude Desktop, Claude mobile)

1. Open **Settings > Connectors**.
2. Choose **Add custom connector**.
3. Name: `Perfex CRM`. URL: `https://perfex-mcp.themesic.com/mcp`. Choose **Add**.
4. Choose **Connect**. On the Themesic page enter your CRM address (for example `https://crm.yourcompany.com`) and the token.
5. In a chat, open the tools menu and make sure **Perfex CRM** is on. Try: *"Show me my 5 newest customers."*

The connector syncs to Claude Desktop and the mobile apps on the same account.
On Team and Enterprise plans an Owner may need to allow custom connectors first.

## Claude Code

```bash
claude mcp add --transport http perfex-crm https://perfex-mcp.themesic.com/mcp
```

Then run `/mcp` inside Claude Code, select **perfex-crm** and sign in.

The Claude plugin in [`claude-plugin/`](../claude-plugin/) adds the same connector plus skills that teach Claude how to
use the CRM tools well.

## ChatGPT

1. Open **Settings > Apps & Connectors > Advanced settings** and turn on **Developer mode**.
   - Your plan and workspace must allow custom connectors. On Business and Enterprise an admin may have to enable them.
2. Back in **Apps & Connectors**, choose **Create**.
3. Name: `Perfex CRM`. MCP server URL: `https://perfex-mcp.themesic.com/mcp`. Authentication: **OAuth**.
   Leave client ID and secret empty, so ChatGPT registers itself.
4. Save. ChatGPT opens the Themesic sign-in page. Enter your CRM address and token.
5. In a new chat, pick **Perfex CRM** from the tools menu.

ChatGPT asks you to confirm write actions before it runs them.

## Cursor

Add to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "perfex-crm": { "url": "https://perfex-mcp.themesic.com/mcp" }
  }
}
```

Open **Cursor Settings > MCP**, then choose **Login** next to `perfex-crm`.

## VS Code (GitHub Copilot agent mode)

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "perfex-crm": { "type": "http", "url": "https://perfex-mcp.themesic.com/mcp" }
  }
}
```

Start the server from the file's **Start** link and sign in when VS Code asks.

## Any other MCP client

Use the URL above with the **Streamable HTTP** transport and **OAuth**. The server supports dynamic client
registration and client ID metadata documents, so no client ID or secret is needed.

## Troubleshooting

| Message on the sign-in page | What to do |
|---|---|
| The REST API module is not installed | Install and activate the module. [Get it here](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/). |
| A license for this domain is required | Activate your purchase code on this CRM's domain, or [buy a license](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/). |
| The MCP server is disabled | Turn on **Enable MCP Server** in **Setup > API > Settings**. |
| Your CRM did not accept this API token | Copy an active token from **Setup > API > API Management**. |
| The assistant cannot see a tool | The token lacks that permission. Edit the token's permissions and reconnect. |

## Privacy

The connector stores only your sign-in grant, with your CRM address and token encrypted. It does not store or log CRM
data. Full policy: [perfex-mcp.themesic.com/privacy](https://perfex-mcp.themesic.com/privacy).
