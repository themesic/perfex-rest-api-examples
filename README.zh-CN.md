<p>
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API for Perfex CRM — connect Perfex CRM with AI agents, Zapier, WooCommerce, n8n and third-party apps">
  </a>
</p>

# Perfex CRM REST API — 示例、Postman 集合与代码片段

[English](README.md) · 🌐 **简体中文** · [Español](README.es.md) · [Português (BR)](README.pt-BR.md) · [Italiano](README.it.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [العربية](README.ar.md)

> 面向 [REST API module for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) 的
> 开箱即用 **Postman 集合**、**代码片段**（cURL、PHP、Python、JavaScript）以及资源
> **目录** —
> 是 **将 Perfex CRM 与 AI 智能体及第三方应用连接** 的最快方式。

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![OpenAPI 3.0](https://img.shields.io/badge/OpenAPI-3.0-6ba539?logo=openapiinitiative&logoColor=white)](https://perfexcrm.themesic.com/apiguide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

**Perfex CRM REST API** 让你能够通过简洁的 HTTP/JSON 接口读写客户、潜在客户、发票、报价、项目、
任务等数据 — 非常适合 **CRM 集成**、自动化和自定义应用。**v3.0** 新增了面向 **AI 智能体的 MCP 服务器**、
生产级 **webhooks**、开箱即用的 **Zapier /
Make / n8n** 轮询、**批量** 操作以及更智能的列表端点。本仓库是
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
模块（由 **Themesic Interactive** 出品）的实用配套资料：可复制粘贴的示例、可导入的 Postman 集合，以及完整的
端点目录。

- 🧩 **获取模块：** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **API 指南 / 在线文档：** https://perfexcrm.themesic.com/apiguide/
- 🧾 **OpenAPI 3.0 规范：** `GET https://yourdomain.com/api/openapi`

---

## 🚀 v3.0 新特性

| 特性 | 端点 | 功能说明 |
| --- | --- | --- |
| 🤖 **MCP 服务器** | `POST /api/mcp` | Model Context Protocol（JSON-RPC 2.0）— 向 Claude Desktop、ChatGPT、Cursor、n8n AI Agent 及任意 MCP 客户端暴露 **148 个按权限过滤的 CRM 工具** |
| 🪝 **Webhooks 2.0** | `/api/webhooks` | **124 个事件**、REST 管理、带重试的异步投递、SSRF 防护、**HMAC 签名** 请求 |
| 🔌 **自动化（轮询）** | `/api/zapier/*` | 为 **Zapier、Make.com、n8n** 及任意基于轮询的工具提供开箱即用的轮询触发器 |
| ⚡ **批量** | `POST /api/batch` | 单个请求最多 **50 个操作**（与 MCP 使用相同的工具名） |
| 📚 **知识库** | `/api/knowledge_base` | 文章 + 分组 CRUD |
| 🗒️ **备注** | `/api/notes` | 跨 12 种实体类型的多态备注 |
| 📄 **更智能的列表** | 任意列表端点 | 可选启用 `?page=&per_page=`、`?fields=`、`?sort=`、`?created_after=&created_before=` |
| 🛡️ **安全写入** | 任意 `POST` | `Idempotency-Key` 重放、`PUT` 时忽略未知字段、`X-RateLimit-*` 响应头 |

> 所有功能均为 **可选启用** 且向后兼容：不带新参数的请求会返回与之前
> 完全相同的响应。

---

## 目录

| 文件夹 | 内容 |
| --- | --- |
| [`postman/`](postman/) | 可导入的 Postman **集合** + **环境**（`{{base_url}}`、`{{authtoken}}`）— 现已包含 MCP、Webhooks、Batch、Automation、Knowledge Base 和 Notes |
| [`snippets/curl/`](snippets/curl/) | 面向最常见调用的可复制粘贴 `curl` 命令 |
| [`snippets/php/`](snippets/php/) | PHP（cURL）示例 |
| [`snippets/python/`](snippets/python/) | Python（`requests`）示例 |
| [`snippets/javascript/`](snippets/javascript/) | JavaScript / Node（`fetch`）示例 |
| [`docs/`](docs/) | 认证、分页与过滤、webhooks、MCP、自动化、错误与状态码 |

每种片段语言都提供了针对 **customers、invoices、leads** 以及 v3 特性
**webhooks、mcp、batch、automation、knowledge_base 和 notes** 的示例，还有一个 **list_features** 文件，演示
分页、字段选择与排序。

---

## 快速开始

对 Perfex CRM REST API 的每个请求都通过 **`Authtoken`** 请求头进行认证。请在 Perfex 管理后台的
**API → API Management** 中创建令牌（需先激活
[REST API 模块](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)），
然后在 `https://yourdomain.com/api/...` 调用 API：

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

这会以 JSON 形式返回客户列表。关于请求头认证与查询参数认证的区别，请参见 [`docs/authentication.md`](docs/authentication.md)；
在 [`snippets/`](snippets/) 中可查看用 PHP、Python 和 JavaScript 实现的同一调用。

### 使用 Postman 集合

1. 打开 Postman → **Import** → 拖入 [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)。
2. 导入环境 [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json)。
3. 将 `base_url` 设为 `https://yourdomain.com/api`，将 `authtoken` 设为你的令牌。
4. 选择任意请求并点击 **Send**。

### 连接 AI 智能体（MCP）

将任意 MCP 客户端（Claude Desktop、Cursor、ChatGPT、n8n AI Agent）指向 `POST https://yourdomain.com/api/mcp`，
并发送你的 `authtoken` 请求头。服务器会公布为你的 CRM 按权限过滤后的工具。请参见
[`docs/mcp.md`](docs/mcp.md) 和 [`snippets/curl/mcp.sh`](snippets/curl/mcp.sh)。

---

## 端点目录

所有 CRUD 端点都遵循 RESTful 约定：`GET` 列表、`GET /:id` 单条、`POST` 创建、
`PUT /:id` 更新、`DELETE /:id` 删除 — 均位于基础路径 `https://yourdomain.com/api` 之下。

### 核心 CRM 资源

| 资源 | 基础路径 | 常用操作 |
| --- | --- | --- |
| Customers | `/api/customers` | list、get、create、update、delete |
| Contacts | `/api/contacts` | list、get、create、update、delete |
| Leads | `/api/leads` | list、get、create、update、delete |
| Invoices | `/api/invoices` | list、get、create、update、delete |
| Estimates | `/api/estimates` | list、get、create、update、delete |
| Credit Notes | `/api/credit_notes` | list、get、create、update |
| Payments | `/api/payments` | list、get、create |
| Proposals | `/api/proposals` | list、get、create、update、delete |
| Contracts | `/api/contracts` | list、get、create、update、delete |
| Projects | `/api/projects` | list、get、create、update、delete |
| Tasks | `/api/tasks` | list、get、create、update、delete |
| Milestones | `/api/milestones` | list、get、create、update、delete |
| Timesheets | `/api/timesheets` | list、get、create、update、delete |
| Subscriptions | `/api/subscriptions` | list、get、create、update |
| Items | `/api/items` | list、get、create、update、delete |
| Expenses | `/api/expenses` | list、get、create、update、delete |
| Staff | `/api/staffs` | list、get、create、update、delete |
| Calendar | `/api/calendar` | list、get、create、update、delete |
| Custom Fields | `/api/custom_fields` | 按关联类型列出 |
| Common (lookups) | `/api/common` | countries、taxes、currencies、statuses … |

### v3 平台及额外资源

| 资源 | 基础路径 | 常用操作 |
| --- | --- | --- |
| **MCP server** | `/api/mcp` | `POST` JSON-RPC 2.0：`initialize`、`tools/list`、`tools/call` |
| **Batch** | `/api/batch` | `POST` 单个请求最多 50 个操作 |
| **Webhooks** | `/api/webhooks` | list、get、create、update、delete、`POST /:id/toggle`、`GET /events`、`GET /:id/logs` |
| **Automation (polling)** | `/api/zapier` | `GET /resources`、`GET /poll/:resource`、`GET /test/:resource` |
| **Knowledge Base** | `/api/knowledge_base` | list、get、create、update、delete；`/groups` |
| **Notes** | `/api/notes` | 按 `:rel_type/:rel_id` 列出、get、create、update、delete |

> 每种资源的确切请求字段都记录在官方
> **[API 指南](https://perfexcrm.themesic.com/apiguide/)** 中。此处的片段覆盖了最常见的流程。

---

## 更智能的列表端点（v3）

每个列表端点都接受可选的查询参数。加上这些参数，你会得到一个 `{ data, meta }` 信封；
省略它们，你会得到与旧版完全一致的数组。

```bash
# Page 2, 20 per page, only id + company, newest first, created this year
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

| 参数 | 示例 | 作用 |
| --- | --- | --- |
| `page`、`per_page` | `?page=2&per_page=20` | 分页 → `{ data, meta }` |
| `fields` | `?fields=id,company` | 仅返回这些列 |
| `sort` | `?sort=-datecreated,company` | 排序（`-` = 降序） |
| `created_after`、`created_before` | `?created_after=2026-01-01` | 日期范围过滤 |

请参见 [`docs/pagination-filtering.md`](docs/pagination-filtering.md) 和
[`snippets/curl/list_features.sh`](snippets/curl/list_features.sh)。

---

## 热门集成与使用场景

Perfex CRM REST API 常用于 **将 Perfex CRM 与 AI 智能体及第三方应用连接**：

- **AI 助手（MCP）** — 让 Claude、ChatGPT 或 Cursor 通过 `/api/mcp` 读取并更新你的 CRM。
- **Zapier / Make / n8n** — 通过开箱即用的轮询触发器（`/api/zapier/*`）实现无代码自动化。
- **Webhooks** — 将 Perfex 事件（新发票、新潜在客户，共 124 个事件）推送到 Slack、Discord 或你自己的后端，并使用 HMAC 签名。
- **Google Sheets / Power Automate** — 将客户、发票或付款同步到电子表格和仪表盘。
- **自定义应用与门户** — 基于你的 Perfex 数据构建移动应用或客户门户。
- **会计与电商** — 将发票和商品项与外部计费或商店平台同步。

以上全部由
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) 模块提供支持。

---

## 认证（概要）

| 方式 | 如何操作 |
| --- | --- |
| 请求头（推荐） | `Authtoken: YOUR_API_TOKEN` |
| 查询参数 | `?authtoken=YOUR_API_TOKEN`（便于快速测试 / webhooks） |

令牌在 **API → API Management** 中创建并设置作用域（按资源的权限）。完整细节见
[`docs/authentication.md`](docs/authentication.md)。

---

## 常见问题

**Perfex CRM 有 REST API 吗？**
有。[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
模块为客户、潜在客户、发票、报价、项目、任务等添加了一套完整的 RESTful HTTP/JSON API，
并新增了 v3 的 **MCP 服务器**、**webhooks**、**batch** 和 **automation** 端点。

**我可以将 Perfex CRM 与 AI 智能体 / ChatGPT / Claude 一起使用吗？**
可以 — v3 在 `POST /api/mcp` 提供了一个 **MCP 服务器**，向任意
Model Context Protocol 客户端暴露按权限过滤的 CRM 工具。请参见 [`docs/mcp.md`](docs/mcp.md)。

**我该如何对 Perfex CRM API 进行认证？**
在 `Authtoken` HTTP 请求头中发送你的令牌（或作为 `?authtoken=` 查询参数）。请参见
[`docs/authentication.md`](docs/authentication.md)。

**Perfex CRM API 的基础 URL 是什么？**
`https://yourdomain.com/api` — 例如 `https://yourdomain.com/api/customers`。

**我可以将 Perfex CRM 连接到 Zapier、Make 或 n8n 吗？**
可以 — v3 在 `/api/zapier/*` 下提供了开箱即用的轮询触发器，并支持 webhooks。请参见
[热门集成](#popular-integrations--use-cases) 和 [`docs/automation.md`](docs/automation.md)。

**Perfex CRM 有 Postman 集合吗？**
有 — 导入 [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
及随附的环境，设置你的 `base_url` 和 `authtoken`，即可开始发送请求。

**我该如何通过 Perfex CRM API 创建发票？**
`POST https://yourdomain.com/api/invoices`，附上发票字段和一个 `items[]` 数组 — v3 会自动计算
`subtotal`/`total`。请参见 [`snippets/curl/invoices.sh`](snippets/curl/invoices.sh)。

---

## 关于 / 支持

<img src="assets/perfex-crm-rest-api-icon.png" width="64" alt="Perfex CRM REST API icon">

本仓库是商业模块的 **示例配套资料**：

> **[REST API for Perfex CRM — connect your Perfex CRM with third-party applications](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> 由 [Themesic Interactive](https://themesic.com) 出品。

- 🛒 **购买 / 了解更多：** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **文档：** https://perfexcrm.themesic.com/apiguide/
- 💬 **支持：** https://themesic.com/support

欢迎贡献更多示例 — 请参见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

## 许可证

本仓库中的示例代码基于 [MIT License](LICENSE) 发布。"Perfex" 是其各自所有者的商标；
REST API 模块是 Themesic Interactive 的商业产品。
