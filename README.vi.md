<p align="center">
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API cho Perfex CRM — kết nối Perfex CRM với Zapier, WooCommerce, n8n và ứng dụng bên thứ ba" width="100%">
  </a>
</p>

# Perfex CRM REST API — Ví dụ, bộ sưu tập Postman và đoạn mã

🌐 [English](README.md) · [简体中文](README.zh-CN.md) · [Português (BR)](README.pt-BR.md) · **Tiếng Việt** · [Français](README.fr.md) · [Deutsch](README.de.md)

> **Bộ sưu tập Postman** sẵn dùng, **đoạn mã** (cURL, PHP, Python, JavaScript) và **danh mục** tài nguyên
> cho [mô-đun REST API cho Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> cách nhanh nhất để **kết nối Perfex CRM với các ứng dụng bên thứ ba**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

**Perfex CRM REST API** cho phép đọc và ghi khách hàng, khách hàng tiềm năng (lead), hóa đơn, báo giá,
dự án, công việc và nhiều hơn nữa qua giao diện HTTP/JSON rõ ràng — lý tưởng cho **tích hợp CRM**, tự động
hóa và ứng dụng tùy chỉnh. Kho lưu trữ này là phần bổ trợ thực hành cho mô-đun
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
của **Themesic Interactive**: ví dụ sao chép-dán, bộ sưu tập Postman có thể nhập, và danh mục endpoint đầy đủ.

- 🧩 **Tải mô-đun:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Hướng dẫn API / tài liệu trực tuyến:** https://perfexcrm.themesic.com/apiguide/

---

## Nội dung

| Thư mục | Bên trong |
| --- | --- |
| [`postman/`](postman/) | **Bộ sưu tập** + **môi trường** Postman có thể nhập (`{{base_url}}`, `{{authtoken}}`) |
| [`snippets/curl/`](snippets/curl/) | Lệnh `curl` sao chép-dán cho các lời gọi phổ biến nhất |
| [`snippets/php/`](snippets/php/) | Ví dụ PHP (cURL) |
| [`snippets/python/`](snippets/python/) | Ví dụ Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | Ví dụ JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | Xác thực, phân trang & lọc, lỗi & mã trạng thái |

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
để biết cách xác thực bằng header hoặc tham số, và [`snippets/`](snippets/) cho cùng lời gọi bằng PHP,
Python và JavaScript.

### Dùng bộ sưu tập Postman

1. Mở Postman → **Import** → kéo thả [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Nhập môi trường [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Đặt `base_url` là `https://yourdomain.com/api` và `authtoken` là token của bạn.
4. Chọn một yêu cầu bất kỳ và nhấn **Send**.

---

## Danh mục endpoint

Tất cả endpoint tuân theo quy ước RESTful: `GET` danh sách, `GET /:id` một mục, `POST` tạo,
`PUT /:id` cập nhật, `DELETE /:id` xóa — dưới đường dẫn gốc `https://yourdomain.com/api`.

| Tài nguyên | Đường dẫn gốc | Thao tác |
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
| Common (tra cứu) | `/api/common` | countries, taxes, currencies, statuses … |

> Các trường chính xác cho mỗi tài nguyên được ghi trong
> **[hướng dẫn API chính thức](https://perfexcrm.themesic.com/apiguide/)**.

---

## Tích hợp và trường hợp sử dụng phổ biến

Perfex CRM REST API thường được dùng để **kết nối Perfex CRM với các ứng dụng bên thứ ba**:

- **Zapier / Make / n8n** — tự động hóa no-code (ví dụ: tạo lead Perfex từ biểu mẫu web).
- **Google Sheets / Power Automate** — đồng bộ khách hàng, hóa đơn hoặc thanh toán sang bảng tính và dashboard.
- **Webhooks** — gửi sự kiện Perfex (hóa đơn mới, lead mới) tới Slack, Discord hoặc backend của bạn.
- **Ứng dụng & cổng tùy chỉnh** — xây dựng ứng dụng di động hoặc cổng khách hàng trên dữ liệu Perfex của bạn.
- **Kế toán & thương mại điện tử** — đồng bộ hóa đơn và mặt hàng với nền tảng thanh toán hoặc cửa hàng bên ngoài.

Tất cả được hỗ trợ bởi
[mô-đun REST API cho Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Xác thực (tóm tắt)

| Phương thức | Cách dùng |
| --- | --- |
| Header (khuyến nghị) | `Authtoken: YOUR_API_TOKEN` |
| Tham số truy vấn | `?authtoken=YOUR_API_TOKEN` (tiện cho thử nhanh / webhooks) |

Token được tạo và giới hạn quyền (theo từng tài nguyên) tại **API → API Management**. Chi tiết trong
[`docs/authentication.md`](docs/authentication.md).

---

## Câu hỏi thường gặp

**Perfex CRM có REST API không?**
Có. [Mô-đun REST API cho Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
bổ sung một API RESTful HTTP/JSON đầy đủ cho khách hàng, lead, hóa đơn, báo giá, dự án, công việc và hơn thế.

**Làm sao để xác thực với Perfex CRM API?**
Gửi token của bạn trong header HTTP `Authtoken` (hoặc dưới dạng tham số `?authtoken=`). Xem
[`docs/authentication.md`](docs/authentication.md).

**URL gốc của Perfex CRM API là gì?**
`https://yourdomain.com/api` — ví dụ `https://yourdomain.com/api/customers`.

**Tôi có thể kết nối Perfex CRM với Zapier, Make hoặc n8n không?**
Có — REST API hoạt động với mọi nền tảng tự động hóa có thể gửi yêu cầu HTTP đã xác thực.

**Có bộ sưu tập Postman cho Perfex CRM không?**
Có — nhập [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
và môi trường, đặt `base_url` và `authtoken`, rồi gửi yêu cầu.

---

## Giới thiệu / Hỗ trợ

Kho lưu trữ này là **bộ ví dụ** đi kèm mô-đun thương mại:

> **[REST API for Perfex CRM — kết nối Perfex CRM với các ứng dụng bên thứ ba](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> bởi [Themesic Interactive](https://themesic.com).

- 🛒 **Mua / tìm hiểu thêm:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Tài liệu:** https://perfexcrm.themesic.com/apiguide/

## Giấy phép

Mã ví dụ trong kho lưu trữ này được phát hành theo [giấy phép MIT](LICENSE). "Perfex" là thương hiệu của
chủ sở hữu tương ứng; mô-đun REST API là sản phẩm thương mại của Themesic Interactive.
