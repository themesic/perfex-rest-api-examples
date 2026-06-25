# Perfex CRM REST API — 示例、Postman 集合与代码片段

🌐 [English](README.md) · **简体中文** · [Português (BR)](README.pt-BR.md) · [Tiếng Việt](README.vi.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

> 开箱即用的 **Postman 集合**、**代码片段**（cURL、PHP、Python、JavaScript）以及资源**目录**，
> 适用于 [Perfex CRM REST API 模块](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)——
> 将 **Perfex CRM 与第三方应用连接** 的最快方式。

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

**Perfex CRM REST API** 通过简洁的 HTTP/JSON 接口读写客户、线索、发票、报价、项目、任务等数据——
非常适合 **CRM 集成**、自动化和定制应用。本仓库是 **Themesic Interactive** 的
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
模块的实用配套：可复制粘贴的示例、可导入的 Postman 集合，以及完整的端点目录。

- 🧩 **获取模块：** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **API 指南 / 在线文档：** https://perfexcrm.themesic.com/apiguide/

---

## 目录

| 文件夹 | 内容 |
| --- | --- |
| [`postman/`](postman/) | 可导入的 Postman **集合** + **环境**（`{{base_url}}`、`{{authtoken}}`） |
| [`snippets/curl/`](snippets/curl/) | 最常用调用的 `curl` 命令，可直接复制 |
| [`snippets/php/`](snippets/php/) | PHP 示例（cURL） |
| [`snippets/python/`](snippets/python/) | Python 示例（`requests`） |
| [`snippets/javascript/`](snippets/javascript/) | JavaScript / Node 示例（`fetch`） |
| [`docs/`](docs/) | 认证、分页与筛选、错误与状态码 |

---

## 快速开始

每个对 Perfex CRM REST API 的请求都使用 **`Authtoken`** 请求头进行认证。在 Perfex 后台的
**API → API Management** 中创建令牌（需先激活
[REST API 模块](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)），
然后调用 `https://yourdomain.com/api/...`：

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

这将以 JSON 形式返回客户列表。请参阅 [`docs/authentication.md`](docs/authentication.md) 了解请求头与
查询参数两种认证方式，并查看 [`snippets/`](snippets/) 获取 PHP、Python 和 JavaScript 的相同调用。

### 使用 Postman 集合

1. 打开 Postman → **Import** → 拖入 [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)。
2. 导入环境 [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json)。
3. 将 `base_url` 设为 `https://yourdomain.com/api`，将 `authtoken` 设为你的令牌。
4. 选择任意请求并点击 **Send**。

---

## 端点目录

所有端点遵循 RESTful 约定：`GET` 列表、`GET /:id` 单个、`POST` 创建、`PUT /:id` 更新、
`DELETE /:id` 删除——基础路径为 `https://yourdomain.com/api`。

| 资源 | 基础路径 | 操作 |
| --- | --- | --- |
| Customers | `/api/customers` | list, get, create, update, delete |
| Contacts | `/api/contacts` | list, get, create, update, delete |
| Leads | `/api/leads` | list, get, create, update, delete |
| Invoices | `/api/invoices` | list, get, create, update, delete |
| Estimates | `/api/estimates` | list, get, create, update, delete |
| Payments | `/api/payments` | list, get, create |
| Proposals | `/api/proposals` | list, get, create, update, delete |
| Projects | `/api/projects` | list, get, create, update, delete |
| Tasks | `/api/tasks` | list, get, create, update, delete |
| Items | `/api/items` | list, get, create, update, delete |
| Common（查询） | `/api/common` | countries, taxes, currencies, statuses … |

> 每个资源的具体字段请参阅官方
> **[API 指南](https://perfexcrm.themesic.com/apiguide/)**。

---

## 常见集成与使用场景

Perfex CRM REST API 常用于 **将 Perfex CRM 与第三方应用连接**：

- **Zapier / Make / n8n** —— 无代码自动化（例如：从网页表单创建 Perfex 线索）。
- **Google Sheets / Power Automate** —— 将客户、发票或付款同步到表格和仪表盘。
- **Webhooks** —— 将 Perfex 事件（新发票、新线索）推送到 Slack、Discord 或你自己的后端。
- **定制应用与门户** —— 基于你的 Perfex 数据构建移动应用或客户门户。
- **财务与电商** —— 将发票和商品与外部计费或商店平台同步。

以上均由
[Perfex CRM REST API 模块](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) 提供支持。

---

## 认证（摘要）

| 方式 | 如何使用 |
| --- | --- |
| 请求头（推荐） | `Authtoken: YOUR_API_TOKEN` |
| 查询参数 | `?authtoken=YOUR_API_TOKEN`（便于快速测试 / webhooks） |

令牌在 **API → API Management** 中创建并按资源授予权限。详情见
[`docs/authentication.md`](docs/authentication.md)。

---

## 常见问题

**Perfex CRM 有 REST API 吗？**
有。[Perfex CRM REST API 模块](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
为客户、线索、发票、报价、项目、任务等提供完整的 RESTful HTTP/JSON API。

**如何对 Perfex CRM API 进行认证？**
在 HTTP 请求头 `Authtoken` 中发送你的令牌（或作为 `?authtoken=` 查询参数）。见
[`docs/authentication.md`](docs/authentication.md)。

**Perfex CRM API 的基础 URL 是什么？**
`https://yourdomain.com/api` —— 例如 `https://yourdomain.com/api/customers`。

**可以把 Perfex CRM 连接到 Zapier、Make 或 n8n 吗？**
可以——该 REST API 适用于任何能够发送已认证 HTTP 请求的自动化平台。

**有没有 Perfex CRM 的 Postman 集合？**
有——导入 [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
和环境文件，设置 `base_url` 和 `authtoken`，即可开始发送请求。

---

## 关于 / 支持

本仓库是商业模块的**示例配套**：

> **[REST API for Perfex CRM —— 将 Perfex CRM 与第三方应用连接](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> 由 [Themesic Interactive](https://themesic.com) 开发。

- 🛒 **购买 / 了解更多：** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **文档：** https://perfexcrm.themesic.com/apiguide/

## 许可证

本仓库中的示例代码以 [MIT 许可证](LICENSE) 发布。“Perfex” 为其各自所有者的商标；REST API 模块是
Themesic Interactive 的商业产品。
