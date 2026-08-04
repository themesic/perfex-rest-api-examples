<p>
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API cho Perfex CRM — kết nối Perfex CRM với AI agent, Zapier, WooCommerce, n8n và các ứng dụng bên thứ ba">
  </a>
</p>

# Perfex CRM REST API — Ví dụ, bộ sưu tập Postman và đoạn mã

[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (BR)](README.pt-BR.md) · [Italiano](README.it.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md) · 🌐 **Tiếng Việt** · [ไทย](README.th.md) · [العربية](README.ar.md)

> **Bộ sưu tập Postman** sẵn dùng, **đoạn mã** (cURL, PHP, Python, JavaScript) và **danh mục**
> tài nguyên cho [mô-đun REST API cho Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> cách nhanh nhất để **kết nối Perfex CRM với AI agent và các ứng dụng bên thứ ba**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![OpenAPI 3.0](https://img.shields.io/badge/OpenAPI-3.0-6ba539?logo=openapiinitiative&logoColor=white)](https://perfexcrm.themesic.com/apiguide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

**Perfex CRM REST API** cho phép bạn đọc và ghi khách hàng, khách hàng tiềm năng (lead), hóa đơn, báo giá,
dự án, công việc và nhiều hơn nữa qua giao diện HTTP/JSON rõ ràng — lý tưởng cho **tích hợp CRM**, tự động
hóa và ứng dụng tùy chỉnh. **v3.0** bổ sung một **MCP server cho AI agent**, **webhooks** cấp production,
polling **Zapier / Make / n8n** sẵn dùng, thao tác **batch** và các endpoint danh sách thông minh hơn.
Kho lưu trữ này là phần bổ trợ thực hành cho mô-đun
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
của **Themesic Interactive**: ví dụ sao chép-dán, một bộ sưu tập Postman có thể nhập, và danh mục endpoint đầy đủ.

- 🧩 **Tải mô-đun:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Hướng dẫn API / tài liệu trực tuyến:** https://perfexcrm.themesic.com/apiguide/
- 🧾 **Đặc tả OpenAPI 3.0:** `GET https://yourdomain.com/api/openapi`

---

## 🚀 Có gì mới trong v3.0

| Tính năng | Endpoint | Chức năng |
| --- | --- | --- |
| 🤖 **MCP server** | `POST /api/mcp` | Model Context Protocol (JSON-RPC 2.0) — cung cấp **148 công cụ CRM được lọc theo quyền** cho Claude Desktop, ChatGPT, Cursor, n8n AI Agent và mọi MCP client |
| 🪝 **Webhooks 2.0** | `/api/webhooks` | **124 sự kiện**, quản lý qua REST, gửi bất đồng bộ có thử lại, bảo vệ SSRF, yêu cầu **ký HMAC** |
| 🔌 **Tự động hóa (polling)** | `/api/zapier/*` | Trigger polling sẵn dùng cho **Zapier, Make.com, n8n** và mọi công cụ dựa trên polling |
| ⚡ **Batch** | `POST /api/batch` | Tối đa **50 thao tác** trong một yêu cầu (cùng tên công cụ với MCP) |
| 📚 **Knowledge Base** | `/api/knowledge_base` | CRUD bài viết + nhóm |
| 🗒️ **Notes** | `/api/notes` | Ghi chú đa hình trên 12 loại thực thể |
| 📄 **Danh sách thông minh hơn** | mọi endpoint danh sách | Tùy chọn `?page=&per_page=`, `?fields=`, `?sort=`, `?created_after=&created_before=` |
| 🛡️ **Ghi an toàn** | mọi `POST` | Phát lại `Idempotency-Key`, bỏ qua trường lạ trên `PUT`, header `X-RateLimit-*` |

> Mọi thứ đều là **tùy chọn (opt-in)** và tương thích ngược: các yêu cầu không dùng tham số mới sẽ trả về
> đúng phản hồi giống hệt như trước.

---

## Nội dung

| Thư mục | Bên trong |
| --- | --- |
| [`postman/`](postman/) | **Bộ sưu tập** + **môi trường** Postman có thể nhập (`{{base_url}}`, `{{authtoken}}`) — nay có thêm MCP, Webhooks, Batch, Automation, Knowledge Base & Notes |
| [`snippets/curl/`](snippets/curl/) | Lệnh `curl` sao chép-dán cho các lời gọi phổ biến nhất |
| [`snippets/php/`](snippets/php/) | Ví dụ PHP (cURL) |
| [`snippets/python/`](snippets/python/) | Ví dụ Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | Ví dụ JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | Xác thực, phân trang & lọc, webhooks, MCP, tự động hóa, lỗi & mã trạng thái |

Mỗi ngôn ngữ đoạn mã đều có ví dụ cho **customers, invoices, leads** cùng các tính năng v3
**webhooks, mcp, batch, automation, knowledge_base và notes**, và một tệp **list_features** minh họa
phân trang, chọn trường và sắp xếp.

---

## Bắt đầu nhanh

Mọi yêu cầu đến Perfex CRM REST API đều được xác thực bằng header **`Authtoken`**. Tạo token trong trang
quản trị Perfex tại **API → API Management** (sau khi kích hoạt
[mô-đun REST API](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)),
rồi gọi API tại `https://yourdomain.com/api/...`:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Lệnh này trả về danh sách khách hàng dưới dạng JSON. Xem [`docs/authentication.md`](docs/authentication.md)
để biết cách xác thực bằng header hoặc tham số truy vấn, và [`snippets/`](snippets/) cho cùng lời gọi bằng
PHP, Python và JavaScript.

### Dùng bộ sưu tập Postman

1. Mở Postman → **Import** → kéo thả [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Nhập môi trường [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Đặt `base_url` là `https://yourdomain.com/api` và `authtoken` là token của bạn.
4. Chọn một yêu cầu bất kỳ và nhấn **Send**.

### Kết nối AI agent (MCP)

Trỏ bất kỳ MCP client nào (Claude Desktop, Cursor, ChatGPT, n8n AI Agent) tới `POST https://yourdomain.com/api/mcp`
và gửi header `authtoken` của bạn. Máy chủ sẽ cung cấp các công cụ được lọc theo quyền cho CRM của bạn. Xem
[`docs/mcp.md`](docs/mcp.md) và [`snippets/curl/mcp.sh`](snippets/curl/mcp.sh).

---

## Danh mục endpoint

Tất cả endpoint CRUD tuân theo quy ước RESTful: `GET` danh sách, `GET /:id` một mục, `POST` tạo,
`PUT /:id` cập nhật, `DELETE /:id` xóa — dưới đường dẫn gốc `https://yourdomain.com/api`.

### Tài nguyên CRM cốt lõi

| Tài nguyên | Đường dẫn gốc | Thao tác thường dùng |
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
| Custom Fields | `/api/custom_fields` | liệt kê theo loại liên quan |
| Common (tra cứu) | `/api/common` | countries, taxes, currencies, statuses … |

### Nền tảng v3 & tài nguyên bổ sung

| Tài nguyên | Đường dẫn gốc | Thao tác thường dùng |
| --- | --- | --- |
| **MCP server** | `/api/mcp` | `POST` JSON-RPC 2.0: `initialize`, `tools/list`, `tools/call` |
| **Batch** | `/api/batch` | `POST` tối đa 50 thao tác trong một yêu cầu |
| **Webhooks** | `/api/webhooks` | list, get, create, update, delete, `POST /:id/toggle`, `GET /events`, `GET /:id/logs` |
| **Tự động hóa (polling)** | `/api/zapier` | `GET /resources`, `GET /poll/:resource`, `GET /test/:resource` |
| **Knowledge Base** | `/api/knowledge_base` | list, get, create, update, delete; `/groups` |
| **Notes** | `/api/notes` | liệt kê theo `:rel_type/:rel_id`, get, create, update, delete |

> Các trường yêu cầu chính xác cho mỗi tài nguyên được ghi trong
> **[hướng dẫn API](https://perfexcrm.themesic.com/apiguide/)** chính thức. Các đoạn mã ở đây bao quát những luồng phổ biến nhất.

---

## Endpoint danh sách thông minh hơn (v3)

Mọi endpoint danh sách đều chấp nhận tham số truy vấn tùy chọn. Thêm chúng vào, bạn nhận được lớp bọc
`{ data, meta }`; bỏ qua chúng, bạn nhận đúng mảng như phiên bản cũ.

```bash
# Page 2, 20 per page, only id + company, newest first, created this year
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

| Tham số | Ví dụ | Tác dụng |
| --- | --- | --- |
| `page`, `per_page` | `?page=2&per_page=20` | Phân trang → `{ data, meta }` |
| `fields` | `?fields=id,company` | Chỉ trả về các cột này |
| `sort` | `?sort=-datecreated,company` | Sắp xếp (`-` = giảm dần) |
| `created_after`, `created_before` | `?created_after=2026-01-01` | Lọc theo khoảng ngày |

Xem [`docs/pagination-filtering.md`](docs/pagination-filtering.md) và
[`snippets/curl/list_features.sh`](snippets/curl/list_features.sh).

---

## Tích hợp và trường hợp sử dụng phổ biến

Perfex CRM REST API thường được dùng để **kết nối Perfex CRM với AI agent và các ứng dụng bên thứ ba**:

- **Trợ lý AI (MCP)** — cho phép Claude, ChatGPT hoặc Cursor đọc và cập nhật CRM của bạn qua `/api/mcp`.
- **Zapier / Make / n8n** — tự động hóa no-code qua các trigger polling sẵn dùng (`/api/zapier/*`).
- **Webhooks** — đẩy các sự kiện Perfex (hóa đơn mới, lead mới, 124 sự kiện) tới Slack, Discord hoặc backend của riêng bạn, được ký bằng HMAC.
- **Google Sheets / Power Automate** — đồng bộ khách hàng, hóa đơn hoặc thanh toán sang bảng tính và dashboard.
- **Ứng dụng & cổng tùy chỉnh** — xây dựng ứng dụng di động hoặc cổng khách hàng trên dữ liệu Perfex của bạn.
- **Kế toán & thương mại điện tử** — đồng bộ hóa đơn và mặt hàng với nền tảng thanh toán hoặc cửa hàng bên ngoài.

Tất cả đều được hỗ trợ bởi mô-đun
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Xác thực (tóm tắt)

| Phương thức | Cách dùng |
| --- | --- |
| Header (khuyến nghị) | `Authtoken: YOUR_API_TOKEN` |
| Tham số truy vấn | `?authtoken=YOUR_API_TOKEN` (tiện cho thử nhanh / webhooks) |

Token được tạo và giới hạn quyền (theo từng tài nguyên) tại **API → API Management**. Chi tiết đầy đủ trong
[`docs/authentication.md`](docs/authentication.md).

---

## Câu hỏi thường gặp

**Perfex CRM có REST API không?**
Có. Mô-đun [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
bổ sung một API RESTful HTTP/JSON đầy đủ cho khách hàng, lead, hóa đơn, báo giá, dự án, công việc và nhiều hơn nữa,
cùng các endpoint v3 **MCP server**, **webhooks**, **batch** và **automation**.

**Tôi có thể dùng Perfex CRM với AI agent / ChatGPT / Claude không?**
Có — v3 đi kèm một **MCP server** tại `POST /api/mcp`, cung cấp các công cụ CRM được lọc theo quyền cho mọi
Model Context Protocol client. Xem [`docs/mcp.md`](docs/mcp.md).

**Làm sao để xác thực với Perfex CRM API?**
Gửi token của bạn trong header HTTP `Authtoken` (hoặc dưới dạng tham số truy vấn `?authtoken=`). Xem
[`docs/authentication.md`](docs/authentication.md).

**URL gốc của Perfex CRM API là gì?**
`https://yourdomain.com/api` — ví dụ `https://yourdomain.com/api/customers`.

**Tôi có thể kết nối Perfex CRM với Zapier, Make hoặc n8n không?**
Có — v3 có các trigger polling sẵn dùng dưới `/api/zapier/*`, cùng với webhooks. Xem
[Tích hợp phổ biến](#popular-integrations--use-cases) và [`docs/automation.md`](docs/automation.md).

**Có bộ sưu tập Postman cho Perfex CRM không?**
Có — nhập [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
và môi trường đi kèm, đặt `base_url` và `authtoken`, rồi bắt đầu gửi yêu cầu.

**Làm sao để tạo hóa đơn qua Perfex CRM API?**
`POST https://yourdomain.com/api/invoices` với các trường hóa đơn và một mảng `items[]` — v3 tự động tính
`subtotal`/`total`. Xem [`snippets/curl/invoices.sh`](snippets/curl/invoices.sh).

---

## Giới thiệu / Hỗ trợ

<img src="assets/perfex-crm-rest-api-icon.png" width="64" alt="Biểu tượng Perfex CRM REST API">

Kho lưu trữ này là **bộ ví dụ đi kèm** cho mô-đun thương mại:

> **[REST API for Perfex CRM — kết nối Perfex CRM của bạn với các ứng dụng bên thứ ba](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> bởi [Themesic Interactive](https://themesic.com).

- 🛒 **Mua / tìm hiểu thêm:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Tài liệu:** https://perfexcrm.themesic.com/apiguide/
- 💬 **Hỗ trợ:** https://themesic.com/support

Hoan nghênh đóng góp thêm ví dụ — xem [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Giấy phép

Mã ví dụ trong kho lưu trữ này được phát hành theo [giấy phép MIT](LICENSE). "Perfex" là thương hiệu của
chủ sở hữu tương ứng; mô-đun REST API là sản phẩm thương mại của Themesic Interactive.
