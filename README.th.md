<p>
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API for Perfex CRM — connect Perfex CRM with AI agents, Zapier, WooCommerce, n8n and third-party apps">
  </a>
</p>

# Perfex CRM REST API — ตัวอย่าง, Postman Collection และ Code Snippets

[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (BR)](README.pt-BR.md) · [Italiano](README.it.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md) · [Tiếng Việt](README.vi.md) · 🌐 **ไทย** · [العربية](README.ar.md)

> **Postman collection** ที่พร้อมใช้งาน, **code snippets** (cURL, PHP, Python, JavaScript) และ**แคตตาล็อก**
> ทรัพยากรสำหรับ [REST API module สำหรับ Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> วิธีที่เร็วที่สุดในการ**เชื่อมต่อ Perfex CRM กับ AI agents และแอปพลิเคชันของบุคคลที่สาม**

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![OpenAPI 3.0](https://img.shields.io/badge/OpenAPI-3.0-6ba539?logo=openapiinitiative&logoColor=white)](https://perfexcrm.themesic.com/apiguide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

**Perfex CRM REST API** ช่วยให้คุณอ่านและเขียนข้อมูล customers, leads, invoices, estimates, projects,
tasks และอื่น ๆ ผ่านอินเทอร์เฟซ HTTP/JSON ที่เรียบง่าย — เหมาะอย่างยิ่งสำหรับ **CRM integration**, ระบบอัตโนมัติ
และแอปที่กำหนดเอง **v3.0** เพิ่ม **MCP server สำหรับ AI agents**, **webhooks** ระดับใช้งานจริง, การ polling สำเร็จรูปสำหรับ
**Zapier / Make / n8n**, การทำงานแบบ **batch** และ list endpoints ที่ชาญฉลาดยิ่งขึ้น ที่เก็บนี้เป็นคู่มือประกอบการใช้งานจริงของโมดูล
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
โดย **Themesic Interactive** ได้แก่ ตัวอย่างแบบคัดลอกวาง, Postman collection ที่นำเข้าได้ และแคตตาล็อก endpoint
ฉบับสมบูรณ์

- 🧩 **รับโมดูล:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **API guide / เอกสารสด:** https://perfexcrm.themesic.com/apiguide/
- 🧾 **ข้อกำหนด OpenAPI 3.0:** `GET https://yourdomain.com/api/openapi`

---

## 🚀 มีอะไรใหม่ใน v3.0

| ฟีเจอร์ | Endpoint | รายละเอียด |
| --- | --- | --- |
| 🤖 **MCP server** | `POST /api/mcp` | Model Context Protocol (JSON-RPC 2.0) — เปิดให้ใช้ **เครื่องมือ CRM ที่กรองตามสิทธิ์ 148 รายการ** แก่ Claude Desktop, ChatGPT, Cursor, n8n AI Agent และ MCP client ใด ๆ |
| 🪝 **Webhooks 2.0** | `/api/webhooks` | **124 events**, การจัดการผ่าน REST, การส่งแบบ async พร้อม retry, การป้องกัน SSRF, คำขอที่ลงลายเซ็นแบบ **HMAC-signed** |
| 🔌 **ระบบอัตโนมัติ (polling)** | `/api/zapier/*` | ทริกเกอร์ polling สำเร็จรูปสำหรับ **Zapier, Make.com, n8n** และเครื่องมือที่ใช้ polling อื่น ๆ |
| ⚡ **Batch** | `POST /api/batch` | สูงสุด **50 operations** ในคำขอเดียว (ใช้ชื่อเครื่องมือเดียวกับ MCP) |
| 📚 **Knowledge Base** | `/api/knowledge_base` | CRUD สำหรับบทความและกลุ่ม |
| 🗒️ **Notes** | `/api/notes` | โน้ตแบบ polymorphic ครอบคลุม 12 ประเภทเอนทิตี |
| 📄 **List ที่ชาญฉลาดขึ้น** | list endpoint ใด ๆ | เลือกใช้ `?page=&per_page=`, `?fields=`, `?sort=`, `?created_after=&created_before=` |
| 🛡️ **การเขียนที่ปลอดภัย** | `POST` ใด ๆ | `Idempotency-Key` replay, การละเว้นฟิลด์ที่ไม่รู้จักบน `PUT`, `X-RateLimit-*` headers |

> ทุกอย่างเป็นแบบ **opt-in** และเข้ากันได้ย้อนหลัง: คำขอที่ไม่มีพารามิเตอร์ใหม่จะได้รับการตอบกลับแบบเดียวกับเดิมทุกประการ

---

## สารบัญ

| โฟลเดอร์ | เนื้อหาภายใน |
| --- | --- |
| [`postman/`](postman/) | Postman **collection** + **environment** ที่นำเข้าได้ (`{{base_url}}`, `{{authtoken}}`) — ตอนนี้มี MCP, Webhooks, Batch, Automation, Knowledge Base และ Notes แล้ว |
| [`snippets/curl/`](snippets/curl/) | คำสั่ง `curl` แบบคัดลอกวางสำหรับการเรียกใช้ที่พบบ่อยที่สุด |
| [`snippets/php/`](snippets/php/) | ตัวอย่าง PHP (cURL) |
| [`snippets/python/`](snippets/python/) | ตัวอย่าง Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | ตัวอย่าง JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | การยืนยันตัวตน, การแบ่งหน้าและการกรอง, webhooks, MCP, ระบบอัตโนมัติ, ข้อผิดพลาดและ status code |

snippet แต่ละภาษามีตัวอย่างสำหรับ **customers, invoices, leads** พร้อมด้วยฟีเจอร์ v3 อย่าง
**webhooks, mcp, batch, automation, knowledge_base และ notes** และไฟล์ **list_features** ที่แสดง
การแบ่งหน้า การเลือกฟิลด์ และการเรียงลำดับ

---

## เริ่มต้นใช้งานอย่างรวดเร็ว

ทุกคำขอไปยัง Perfex CRM REST API จะต้องยืนยันตัวตนด้วย header **`Authtoken`** สร้าง token
ในหน้าผู้ดูแลระบบ Perfex ของคุณที่ **API → API Management** (หลังจากเปิดใช้งาน
[REST API module](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/))
จากนั้นเรียก API ที่ `https://yourdomain.com/api/...`:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

คำสั่งนี้จะคืนค่ารายการ customers ในรูปแบบ JSON ดู [`docs/authentication.md`](docs/authentication.md) สำหรับ
การยืนยันตัวตนแบบ header เทียบกับแบบ query-parameter และ [`snippets/`](snippets/) สำหรับการเรียกใช้แบบเดียวกันใน PHP, Python และ JavaScript

### ใช้งาน Postman collection

1. เปิด Postman → **Import** → ลากไฟล์ [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json) ลงไป
2. นำเข้า environment [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json)
3. ตั้งค่า `base_url` เป็น `https://yourdomain.com/api` และ `authtoken` เป็น token ของคุณ
4. เลือกคำขอใดก็ได้แล้วกด **Send**

### เชื่อมต่อ AI agent (MCP)

ชี้ MCP client ใด ๆ (Claude Desktop, Cursor, ChatGPT, n8n AI Agent) ไปที่ `POST https://yourdomain.com/api/mcp`
และส่ง header `authtoken` ของคุณ เซิร์ฟเวอร์จะประกาศเครื่องมือที่กรองตามสิทธิ์สำหรับ CRM ของคุณ ดู
[`docs/mcp.md`](docs/mcp.md) และ [`snippets/curl/mcp.sh`](snippets/curl/mcp.sh)

---

## แคตตาล็อก Endpoint

endpoint แบบ CRUD ทั้งหมดเป็นไปตามหลักการ RESTful: `GET` แสดงรายการ, `GET /:id` รายการเดียว, `POST` สร้าง,
`PUT /:id` อัปเดต, `DELETE /:id` ลบ — ภายใต้ base path `https://yourdomain.com/api`

### ทรัพยากร CRM หลัก

| ทรัพยากร | Base path | การดำเนินการทั่วไป |
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
| Custom Fields | `/api/custom_fields` | list per related type |
| Common (ข้อมูลอ้างอิง) | `/api/common` | countries, taxes, currencies, statuses … |

### แพลตฟอร์มและทรัพยากรเพิ่มเติมของ v3

| ทรัพยากร | Base path | การดำเนินการทั่วไป |
| --- | --- | --- |
| **MCP server** | `/api/mcp` | `POST` JSON-RPC 2.0: `initialize`, `tools/list`, `tools/call` |
| **Batch** | `/api/batch` | `POST` สูงสุด 50 operations ในคำขอเดียว |
| **Webhooks** | `/api/webhooks` | list, get, create, update, delete, `POST /:id/toggle`, `GET /events`, `GET /:id/logs` |
| **ระบบอัตโนมัติ (polling)** | `/api/zapier` | `GET /resources`, `GET /poll/:resource`, `GET /test/:resource` |
| **Knowledge Base** | `/api/knowledge_base` | list, get, create, update, delete; `/groups` |
| **Notes** | `/api/notes` | แสดงรายการตาม `:rel_type/:rel_id`, get, create, update, delete |

> ฟิลด์คำขอที่แน่นอนของแต่ละทรัพยากรมีบันทึกไว้ใน
> **[API guide](https://perfexcrm.themesic.com/apiguide/)** อย่างเป็นทางการ ส่วน snippet ที่นี่ครอบคลุมโฟลว์ที่พบบ่อยที่สุด

---

## List endpoints ที่ชาญฉลาดขึ้น (v3)

list endpoint ทุกตัวรองรับ query parameter ที่เป็นทางเลือก เพิ่มเข้าไปแล้วคุณจะได้ envelope แบบ `{ data, meta }`;
หากไม่ใส่ก็จะได้ array แบบเดิมทุกประการ

```bash
# Page 2, 20 per page, only id + company, newest first, created this year
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

| พารามิเตอร์ | ตัวอย่าง | ผลลัพธ์ |
| --- | --- | --- |
| `page`, `per_page` | `?page=2&per_page=20` | การแบ่งหน้า → `{ data, meta }` |
| `fields` | `?fields=id,company` | คืนค่าเฉพาะคอลัมน์เหล่านี้ |
| `sort` | `?sort=-datecreated,company` | จัดเรียง (`-` = จากมากไปน้อย) |
| `created_after`, `created_before` | `?created_after=2026-01-01` | ตัวกรองช่วงวันที่ |

ดู [`docs/pagination-filtering.md`](docs/pagination-filtering.md) และ
[`snippets/curl/list_features.sh`](snippets/curl/list_features.sh)

---

## การผสานรวมและกรณีใช้งานยอดนิยม

Perfex CRM REST API มักถูกใช้เพื่อ **เชื่อมต่อ Perfex CRM กับ AI agents และแอปพลิเคชันของบุคคลที่สาม**:

- **ผู้ช่วย AI (MCP)** — ให้ Claude, ChatGPT หรือ Cursor อ่านและอัปเดต CRM ของคุณผ่าน `/api/mcp`
- **Zapier / Make / n8n** — ระบบอัตโนมัติแบบ no-code ผ่านทริกเกอร์ polling สำเร็จรูป (`/api/zapier/*`)
- **Webhooks** — ส่งเหตุการณ์ Perfex (invoice ใหม่, lead ใหม่, 124 events) ไปยัง Slack, Discord หรือ backend ของคุณเอง โดยลงลายเซ็นด้วย HMAC
- **Google Sheets / Power Automate** — ซิงค์ customers, invoices หรือ payments ไปยังสเปรดชีตและแดชบอร์ด
- **แอปและพอร์ทัลที่กำหนดเอง** — สร้างแอปมือถือหรือพอร์ทัลลูกค้าบนข้อมูล Perfex ของคุณ
- **บัญชีและอีคอมเมิร์ซ** — ซิงค์ invoices และ items กับแพลตฟอร์มการเรียกเก็บเงินหรือร้านค้าภายนอก

ทั้งหมดนี้ขับเคลื่อนด้วยโมดูล
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

---

## การยืนยันตัวตน (สรุป)

| วิธีการ | การใช้งาน |
| --- | --- |
| Header (แนะนำ) | `Authtoken: YOUR_API_TOKEN` |
| Query parameter | `?authtoken=YOUR_API_TOKEN` (สะดวกสำหรับการทดสอบอย่างรวดเร็ว / webhooks) |

Token ถูกสร้างและกำหนดขอบเขต (สิทธิ์แบบรายทรัพยากร) ที่ **API → API Management** รายละเอียดทั้งหมดใน
[`docs/authentication.md`](docs/authentication.md)

---

## คำถามที่พบบ่อย (FAQ)

**Perfex CRM มี REST API หรือไม่?**
มี โมดูล [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
เพิ่ม RESTful HTTP/JSON API ฉบับสมบูรณ์สำหรับ customers, leads, invoices, estimates, projects, tasks และอื่น ๆ
พร้อมด้วย **MCP server**, **webhooks**, **batch** และ endpoint **automation** ของ v3

**ฉันสามารถใช้ Perfex CRM กับ AI agents / ChatGPT / Claude ได้ไหม?**
ได้ — v3 มาพร้อม **MCP server** ที่ `POST /api/mcp` ซึ่งเปิดให้ใช้เครื่องมือ CRM ที่กรองตามสิทธิ์แก่
Model Context Protocol client ใด ๆ ดู [`docs/mcp.md`](docs/mcp.md)

**ฉันจะยืนยันตัวตนกับ Perfex CRM API ได้อย่างไร?**
ส่ง token ของคุณใน HTTP header `Authtoken` (หรือเป็น query parameter `?authtoken=`) ดู
[`docs/authentication.md`](docs/authentication.md)

**base URL ของ Perfex CRM API คืออะไร?**
`https://yourdomain.com/api` — ตัวอย่างเช่น `https://yourdomain.com/api/customers`

**ฉันสามารถเชื่อมต่อ Perfex CRM กับ Zapier, Make หรือ n8n ได้ไหม?**
ได้ — v3 มีทริกเกอร์ polling สำเร็จรูปภายใต้ `/api/zapier/*` พร้อมด้วย webhooks ดู
[การผสานรวมยอดนิยม](#popular-integrations--use-cases) และ [`docs/automation.md`](docs/automation.md)

**มี Postman collection สำหรับ Perfex CRM หรือไม่?**
มี — นำเข้า [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
และ environment ที่มาพร้อมกัน ตั้งค่า `base_url` และ `authtoken` ของคุณ แล้วเริ่มส่งคำขอได้เลย

**ฉันจะสร้าง invoice ผ่าน Perfex CRM API ได้อย่างไร?**
`POST https://yourdomain.com/api/invoices` พร้อมฟิลด์ของ invoice และ array `items[]` — v3 คำนวณ
`subtotal`/`total` ให้อัตโนมัติ ดู [`snippets/curl/invoices.sh`](snippets/curl/invoices.sh)

---

## เกี่ยวกับ / การสนับสนุน

<img src="assets/perfex-crm-rest-api-icon.png" width="64" alt="Perfex CRM REST API icon">

ที่เก็บนี้เป็น **ชุดตัวอย่างประกอบ** ของโมดูลเชิงพาณิชย์:

> **[REST API for Perfex CRM — เชื่อมต่อ Perfex CRM ของคุณกับแอปพลิเคชันของบุคคลที่สาม](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> โดย [Themesic Interactive](https://themesic.com)

- 🛒 **ซื้อ / เรียนรู้เพิ่มเติม:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **เอกสารประกอบ:** https://perfexcrm.themesic.com/apiguide/
- 💬 **การสนับสนุน:** https://themesic.com/support

ยินดีรับการสนับสนุนตัวอย่างเพิ่มเติม — ดู [`CONTRIBUTING.md`](CONTRIBUTING.md)

## สัญญาอนุญาต

โค้ดตัวอย่างในที่เก็บนี้เผยแพร่ภายใต้ [MIT License](LICENSE) "Perfex" เป็นเครื่องหมายการค้าของ
เจ้าของที่เกี่ยวข้อง; โมดูล REST API เป็นผลิตภัณฑ์เชิงพาณิชย์ของ Themesic Interactive
