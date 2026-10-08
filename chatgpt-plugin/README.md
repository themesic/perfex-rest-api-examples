# REST API for Perfex CRM - ChatGPT plugin

![REST API for Perfex CRM](assets/icon.png)

This folder is the OpenAI plugin package (Agent Plugins 1.0.0 format) that
lists the hosted connector in the ChatGPT and Codex plugin directory. It
connects ChatGPT to the user's own self-hosted Perfex CRM through the MCP
server of the REST API for Perfex CRM module, via the OAuth gateway at
`https://perfex-mcp.themesic.com/mcp`.

| File | Purpose |
| --- | --- |
| `plugin.json` | Package identity, listing text, links, starter prompts, icons, review test cases, release notes (`extensions["com.openai"]`) |
| `mcp.json` | The single remote MCP server (`streamable-http`, `https://perfex-mcp.themesic.com/mcp`) |
| `assets/icon.png`, `assets/logo.png` | Composer icon and directory logo (square PNG) |

The package has no skills, hooks or `.app.json`, so it is eligible for public
submission. It contains no credentials: reviewer access is entered in the
dashboard only.

ChatGPT rules followed by the connector: no prices, purchase buttons or
checkout links anywhere in ChatGPT. The gateway detects ChatGPT at sign-in and
shows neutral "Requirements" links instead of buy links (other clients keep
them).

## Before you start

1. **Gateway deployed** with the ChatGPT changes: `/terms`, `/support`,
   `/privacy` and `/.well-known/openai-apps-challenge` must answer on
   `https://perfex-mcp.themesic.com`. Check:

   ```sh
   curl -I https://perfex-mcp.themesic.com/terms
   curl -I https://perfex-mcp.themesic.com/support
   ```

2. **Reviewer CRM ready**: `https://zapier.themesic.com` with the module
   licensed for that domain, the MCP server enabled (Setup > API > Settings)
   and a dedicated API token for reviewers (Setup > API > API Management) with
   the permissions the test cases need (customers, invoices, leads, tickets,
   tasks: read; leads and tasks: create). No MFA, email codes or IP
   restrictions on it. Keep the token out of this repository.
3. **Sample data that matches the test cases** in `plugin.json`: a customer
   named "Acme" with phone, VAT number and website; at least one invoice with
   line items; at least one support ticket with replies; a task named
   "Website redesign kickoff"; a lead source "Website"; and no existing lead
   for Maria Lopez (delete it again after each review run). Run all eight test
   cases yourself in ChatGPT before submitting.
4. **Demo video**: record the eight test cases in ChatGPT, upload the video
   where reviewers can open it without signing in, and replace
   `REPLACE_WITH_VIDEO_URL` in `plugin.json` (`review.demo_recording_url`).

## Build the upload ZIP

The files must be at the root of the ZIP (not inside a `chatgpt-plugin/`
folder). Leave this README out.

```sh
cd chatgpt-plugin
zip -r ../chatgpt-plugin-upload.zip plugin.json mcp.json assets
```

PowerShell:

```powershell
cd chatgpt-plugin
Compress-Archive -Path plugin.json, mcp.json, assets -DestinationPath ..\chatgpt-plugin-upload.zip -Force
```

## Submission walkthrough

### 1. Verify the business

In the [OpenAI Platform organization settings](https://platform.openai.com/settings/organization/general)
complete **business verification** for **Themesic Interactive**. The directory
shows the verified name as the developer; publishing under an unverified name
is rejected. Only organization owners (or members with Apps Management Write)
can submit.

### 2. Use a project with global data residency

Projects with EU data residency cannot submit plugins with MCP servers. Select
(or create, in the same organization) a project with **global** data
residency before uploading.

### 3. Upload the ZIP

1. Open [platform.openai.com/plugins](https://platform.openai.com/plugins) and
   select **Upload new or existing plugin**.
2. Choose the verified **Developer identity** (Themesic Interactive).
3. Select **Upload plugin** and choose `chatgpt-plugin-upload.zip`.
4. Open **Metadata & Skills**, wait for the checks and fix any **Issues** in
   the package, then use **Upload plugin to fix issues** with a corrected ZIP.

### 4. Connect the MCP server

1. Open **MCPs**, select the `perfex` server and select **Connect**.
2. MCP Server URL: `https://perfex-mcp.themesic.com/mcp`. Authentication:
   **OAuth**. No client ID or secret is needed: the gateway supports dynamic
   client registration and client ID metadata documents.
3. Complete the **domain verification** challenge (next step).
4. Connect and sign in on the gateway page with
   `https://zapier.themesic.com` and the reviewer API token.
5. Wait for the tool scan and open **Issues**. Fix server-side findings in the
   module or gateway, deploy, then **Rescan**.

### 5. Domain verification

The portal shows a token and the URL
`https://perfex-mcp.themesic.com/.well-known/openai-apps-challenge`.

1. Put the exact token in `mcp-gateway/wrangler.jsonc`:
   `"OPENAI_APPS_CHALLENGE": "<token>"` (it is public by design). Or delete
   that var and run `npx wrangler secret put OPENAI_APPS_CHALLENGE`.
2. Deploy the gateway (`npx wrangler deploy`).
3. Check that only the token comes back, as plain text:

   ```sh
   curl -i https://perfex-mcp.themesic.com/.well-known/openai-apps-challenge
   ```

4. Select verify in the portal.

### 6. Review details

In **Metadata & Skills > Review information > Review details**:

- The five positive and three negative test cases, the demo video URL, the
  commerce declaration and the release notes are imported from `plugin.json`
  (read-only; change them in the package and upload again).
- Enter the reviewer access **in the dashboard only**:
  - Login URL / CRM address: `https://zapier.themesic.com`
  - Credential: the reviewer API token
  - Sign-in instructions: "When ChatGPT opens the Perfex CRM sign-in page,
    enter https://zapier.themesic.com as the CRM address and paste the API
    token, then select Connect."
- Select **Save details**.

### 7. Submit for review

Select the draft, choose **Submit for review**, and accept the policy
attestations. Track progress under **Review status**; feedback arrives by
email. Only one review can be active at a time.

### 8. Publish

After approval, open the approved package version and select **Publish
plugin**. Later MCP tool changes are picked up by daily scans (or **Rescan**);
metadata or asset changes need a new ZIP with a higher `version`.

## Listing links

| Field | URL |
| --- | --- |
| Website | https://perfex-mcp.themesic.com/requirements |
| Support | https://perfex-mcp.themesic.com/support |
| Privacy policy | https://perfex-mcp.themesic.com/privacy |
| Terms of service | https://perfex-mcp.themesic.com/terms |

Perfex CRM is a trademark of its owner. This plugin is published by Themesic
Interactive and is not affiliated with the makers of Perfex CRM.
