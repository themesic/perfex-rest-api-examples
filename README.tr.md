<p>
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API for Perfex CRM — connect Perfex CRM with AI agents, Zapier, WooCommerce, n8n and third-party apps">
  </a>
</p>

# Perfex CRM REST API — Örnekler, Postman Koleksiyonu ve Kod Parçacıkları

[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (BR)](README.pt-BR.md) · [Italiano](README.it.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · 🌐 **Türkçe** · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [العربية](README.ar.md)

> [Perfex CRM için REST API modülü](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) için kullanıma hazır **Postman koleksiyonu**, **kod parçacıkları** (cURL, PHP, Python, JavaScript) ve bir kaynak
> **kataloğu** —
> **Perfex CRM'i yapay zeka ajanları ve üçüncü taraf uygulamalarla bağlamanın** en hızlı yolu.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![OpenAPI 3.0](https://img.shields.io/badge/OpenAPI-3.0-6ba539?logo=openapiinitiative&logoColor=white)](https://perfexcrm.themesic.com/apiguide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

**Perfex CRM REST API**, temiz bir HTTP/JSON arayüzü üzerinden müşterileri, potansiyel müşterileri, faturaları, teklifleri, projeleri,
görevleri ve daha fazlasını okumanıza ve yazmanıza olanak tanır — **CRM entegrasyonu**, otomasyon ve özel
uygulamalar için mükemmeldir. **v3.0**, **yapay zeka ajanları için bir MCP sunucusu**, üretim düzeyinde **webhook'lar**, hazır **Zapier /
Make / n8n** yoklaması (polling), **toplu (batch)** işlemler ve daha akıllı liste uç noktaları ekler. Bu depo,
**Themesic Interactive** tarafından geliştirilen
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
modülünün pratik yol arkadaşıdır: kopyala-yapıştır örnekler, içe aktarılabilir bir Postman koleksiyonu ve tam bir
uç nokta kataloğu.

- 🧩 **Modülü edinin:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **API kılavuzu / canlı dokümantasyon:** https://perfexcrm.themesic.com/apiguide/
- 🧾 **OpenAPI 3.0 şeması:** `GET https://yourdomain.com/api/openapi`

---

## 🚀 v3.0'da yenilikler

| Özellik | Uç nokta | Ne işe yarar |
| --- | --- | --- |
| 🤖 **MCP sunucusu** | `POST /api/mcp` | Model Context Protocol (JSON-RPC 2.0) — Claude Desktop, ChatGPT, Cursor, n8n AI Agent ve herhangi bir MCP istemcisine **izin filtreli 148 CRM aracı** sunar |
| 🪝 **Webhooks 2.0** | `/api/webhooks` | **124 olay**, REST yönetimi, yeniden denemelerle eşzamansız teslimat, SSRF koruması, **HMAC ile imzalanmış** istekler |
| 🔌 **Otomasyon (yoklama)** | `/api/zapier/*` | **Zapier, Make.com, n8n** ve yoklama tabanlı herhangi bir araç için hazır yoklama tetikleyicileri |
| ⚡ **Batch** | `POST /api/batch` | Tek istekte en fazla **50 işlem** (MCP ile aynı araç adları) |
| 📚 **Bilgi Bankası** | `/api/knowledge_base` | Makaleler + gruplar için CRUD |
| 🗒️ **Notlar** | `/api/notes` | 12 varlık türü genelinde çok biçimli (polymorphic) notlar |
| 📄 **Daha akıllı listeler** | herhangi bir liste uç noktası | İsteğe bağlı `?page=&per_page=`, `?fields=`, `?sort=`, `?created_after=&created_before=` |
| 🛡️ **Güvenli yazma işlemleri** | herhangi bir `POST` | `Idempotency-Key` ile yeniden oynatma, `PUT` üzerinde bilinmeyen alanların yok sayılması, `X-RateLimit-*` başlıkları |

> Her şey **isteğe bağlıdır** ve geriye dönük uyumludur: yeni parametreler içermeyen istekler, önceki ile
> tam olarak aynı yanıtı döndürür.

---

## İçindekiler

| Klasör | İçeriği |
| --- | --- |
| [`postman/`](postman/) | İçe aktarılabilir Postman **koleksiyonu** + **ortamı** (`{{base_url}}`, `{{authtoken}}`) — artık MCP, Webhooks, Batch, Automation, Knowledge Base ve Notes ile |
| [`snippets/curl/`](snippets/curl/) | En yaygın çağrılar için kopyala-yapıştır `curl` komutları |
| [`snippets/php/`](snippets/php/) | PHP (cURL) örnekleri |
| [`snippets/python/`](snippets/python/) | Python (`requests`) örnekleri |
| [`snippets/javascript/`](snippets/javascript/) | JavaScript / Node (`fetch`) örnekleri |
| [`docs/`](docs/) | Kimlik doğrulama, sayfalama ve filtreleme, webhook'lar, MCP, otomasyon, hatalar ve durum kodları |

Her parçacık dili için **müşteriler, faturalar, potansiyel müşteriler** örneklerinin yanı sıra v3 özellikleri olan
**webhooks, mcp, batch, automation, knowledge_base ve notes** için örnekler ve sayfalama, alan seçimi ile
sıralamayı gösteren bir **list_features** dosyası bulunur.

---

## Hızlı başlangıç

Perfex CRM REST API'sine yapılan her istek **`Authtoken`** başlığı ile kimlik doğrulaması yapar. Perfex yönetici panelinizde
[REST API modülünü](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
etkinleştirdikten sonra **API → API Management** altında bir token oluşturun,
ardından API'yi `https://yourdomain.com/api/...` adresinden çağırın:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Bu, müşteri listesini JSON olarak döndürür. Başlık ile sorgu parametresi kimlik doğrulaması karşılaştırması için
[`docs/authentication.md`](docs/authentication.md), aynı çağrının PHP, Python ve JavaScript'teki hali için ise [`snippets/`](snippets/) bölümüne bakın.

### Postman koleksiyonunu kullanın

1. Postman'i açın → **Import** → [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json) dosyasını bırakın.
2. [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json) ortamını içe aktarın.
3. `base_url` değerini `https://yourdomain.com/api` ve `authtoken` değerini kendi token'ınıza ayarlayın.
4. Herhangi bir isteği seçin ve **Send** düğmesine basın.

### Bir yapay zeka ajanı bağlayın (MCP)

Herhangi bir MCP istemcisini (Claude Desktop, Cursor, ChatGPT, n8n AI Agent) `POST https://yourdomain.com/api/mcp` adresine yönlendirin
ve `authtoken` başlığınızı gönderin. Sunucu, CRM'iniz için izin filtreli araçları sunar. Bkz.
[`docs/mcp.md`](docs/mcp.md) ve [`snippets/curl/mcp.sh`](snippets/curl/mcp.sh).

---

## Uç nokta kataloğu

Tüm CRUD uç noktaları RESTful bir kurala uyar: `GET` liste, `GET /:id` tekil, `POST` oluştur,
`PUT /:id` güncelle, `DELETE /:id` sil — `https://yourdomain.com/api` temel yolu altında.

### Temel CRM kaynakları

| Kaynak | Temel yol | Tipik işlemler |
| --- | --- | --- |
| Müşteriler | `/api/customers` | liste, getir, oluştur, güncelle, sil |
| Kişiler | `/api/contacts` | liste, getir, oluştur, güncelle, sil |
| Potansiyel müşteriler | `/api/leads` | liste, getir, oluştur, güncelle, sil |
| Faturalar | `/api/invoices` | liste, getir, oluştur, güncelle, sil |
| Teklifler | `/api/estimates` | liste, getir, oluştur, güncelle, sil |
| Alacak Dekontları | `/api/credit_notes` | liste, getir, oluştur, güncelle |
| Ödemeler | `/api/payments` | liste, getir, oluştur |
| Teklif Belgeleri | `/api/proposals` | liste, getir, oluştur, güncelle, sil |
| Sözleşmeler | `/api/contracts` | liste, getir, oluştur, güncelle, sil |
| Projeler | `/api/projects` | liste, getir, oluştur, güncelle, sil |
| Görevler | `/api/tasks` | liste, getir, oluştur, güncelle, sil |
| Kilometre Taşları | `/api/milestones` | liste, getir, oluştur, güncelle, sil |
| Zaman Çizelgeleri | `/api/timesheets` | liste, getir, oluştur, güncelle, sil |
| Abonelikler | `/api/subscriptions` | liste, getir, oluştur, güncelle |
| Kalemler | `/api/items` | liste, getir, oluştur, güncelle, sil |
| Giderler | `/api/expenses` | liste, getir, oluştur, güncelle, sil |
| Personel | `/api/staffs` | liste, getir, oluştur, güncelle, sil |
| Takvim | `/api/calendar` | liste, getir, oluştur, güncelle, sil |
| Özel Alanlar | `/api/custom_fields` | ilgili türe göre liste |
| Ortak (arama tabloları) | `/api/common` | ülkeler, vergiler, para birimleri, durumlar … |

### v3 platformu ve ek kaynaklar

| Kaynak | Temel yol | Tipik işlemler |
| --- | --- | --- |
| **MCP sunucusu** | `/api/mcp` | `POST` JSON-RPC 2.0: `initialize`, `tools/list`, `tools/call` |
| **Batch** | `/api/batch` | `POST` tek istekte en fazla 50 işlem |
| **Webhooks** | `/api/webhooks` | liste, getir, oluştur, güncelle, sil, `POST /:id/toggle`, `GET /events`, `GET /:id/logs` |
| **Otomasyon (yoklama)** | `/api/zapier` | `GET /resources`, `GET /poll/:resource`, `GET /test/:resource` |
| **Bilgi Bankası** | `/api/knowledge_base` | liste, getir, oluştur, güncelle, sil; `/groups` |
| **Notlar** | `/api/notes` | `:rel_type/:rel_id` ile listele, getir, oluştur, güncelle, sil |

> Her kaynak için tam istek alanları resmi
> **[API kılavuzunda](https://perfexcrm.themesic.com/apiguide/)** belgelenmiştir. Buradaki parçacıklar en yaygın akışları kapsar.

---

## Daha akıllı liste uç noktaları (v3)

Her liste uç noktası isteğe bağlı sorgu parametrelerini kabul eder. Bunları eklerseniz bir `{ data, meta }` zarfı alırsınız;
atlarsanız tam olarak eski dizinin (array) aynısını alırsınız.

```bash
# Page 2, 20 per page, only id + company, newest first, created this year
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

| Parametre | Örnek | Etkisi |
| --- | --- | --- |
| `page`, `per_page` | `?page=2&per_page=20` | Sayfalama → `{ data, meta }` |
| `fields` | `?fields=id,company` | Yalnızca bu sütunları döndür |
| `sort` | `?sort=-datecreated,company` | Sırala (`-` = azalan) |
| `created_after`, `created_before` | `?created_after=2026-01-01` | Tarih aralığı filtresi |

Bkz. [`docs/pagination-filtering.md`](docs/pagination-filtering.md) ve
[`snippets/curl/list_features.sh`](snippets/curl/list_features.sh).

---

## Popüler entegrasyonlar ve kullanım senaryoları

Perfex CRM REST API'si yaygın olarak **Perfex CRM'i yapay zeka ajanları ve üçüncü taraf uygulamalarla bağlamak** için kullanılır:

- **Yapay zeka asistanları (MCP)** — Claude, ChatGPT veya Cursor'ın `/api/mcp` üzerinden CRM'inizi okuyup güncellemesini sağlayın.
- **Zapier / Make / n8n** — hazır yoklama tetikleyicileri (`/api/zapier/*`) aracılığıyla kod gerektirmeyen otomasyon.
- **Webhook'lar** — Perfex olaylarını (yeni fatura, yeni potansiyel müşteri, 124 olay) HMAC ile imzalanmış olarak Slack, Discord veya kendi arka ucunuza iletin.
- **Google Sheets / Power Automate** — müşterileri, faturaları veya ödemeleri elektronik tablolar ve panolarla senkronize edin.
- **Özel uygulamalar ve portallar** — Perfex verilerinizin üzerine bir mobil uygulama veya müşteri portalı oluşturun.
- **Muhasebe ve e-ticaret** — faturaları ve kalemleri harici faturalama veya mağaza platformlarıyla senkronize edin.

Bunların tümü
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) modülü tarafından desteklenir.

---

## Kimlik doğrulama (özet)

| Yöntem | Nasıl |
| --- | --- |
| Başlık (önerilen) | `Authtoken: YOUR_API_TOKEN` |
| Sorgu parametresi | `?authtoken=YOUR_API_TOKEN` (hızlı testler / webhook'lar için kullanışlı) |

Token'lar **API → API Management** bölümünde oluşturulur ve kapsamlandırılır (kaynak bazlı izinler). Tüm ayrıntılar için bkz.
[`docs/authentication.md`](docs/authentication.md).

---

## SSS

**Perfex CRM'in bir REST API'si var mı?**
Evet. [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
modülü; müşteriler, potansiyel müşteriler, faturalar, teklifler, projeler, görevler ve daha fazlası için tam RESTful bir HTTP/JSON API'sinin yanı sıra
bir v3 **MCP sunucusu**, **webhook'lar**, **batch** ve **otomasyon** uç noktaları ekler.

**Perfex CRM'i yapay zeka ajanları / ChatGPT / Claude ile kullanabilir miyim?**
Evet — v3, herhangi bir Model Context Protocol istemcisine izin filtreli CRM araçları sunan bir **MCP sunucusu** ile
`POST /api/mcp` adresinde gelir. Bkz. [`docs/mcp.md`](docs/mcp.md).

**Perfex CRM API'si ile nasıl kimlik doğrulaması yaparım?**
Token'ınızı `Authtoken` HTTP başlığında (veya bir `?authtoken=` sorgu parametresi olarak) gönderin. Bkz.
[`docs/authentication.md`](docs/authentication.md).

**Perfex CRM API'sinin temel URL'si nedir?**
`https://yourdomain.com/api` — örneğin `https://yourdomain.com/api/customers`.

**Perfex CRM'i Zapier, Make veya n8n'e bağlayabilir miyim?**
Evet — v3'te `/api/zapier/*` altında hazır yoklama tetikleyicileri ve ayrıca webhook'lar bulunur. Bkz.
[Popüler entegrasyonlar](#popular-integrations--use-cases) ve [`docs/automation.md`](docs/automation.md).

**Perfex CRM için bir Postman koleksiyonu var mı?**
Evet — [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
dosyasını ve birlikte gelen ortamı içe aktarın, `base_url` ve `authtoken` değerlerinizi ayarlayın ve istek göndermeye başlayın.

**Perfex CRM API'si aracılığıyla nasıl fatura oluştururum?**
Fatura alanları ve bir `items[]` dizisi ile `POST https://yourdomain.com/api/invoices` yapın — v3,
`subtotal`/`total` değerlerini otomatik hesaplar. Bkz. [`snippets/curl/invoices.sh`](snippets/curl/invoices.sh).

---

## Hakkında / Destek

<img src="assets/perfex-crm-rest-api-icon.png" width="64" alt="Perfex CRM REST API icon">

Bu depo, ticari modülün bir **örnekler yol arkadaşıdır**:

> **[REST API for Perfex CRM — connect your Perfex CRM with third-party applications](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> [Themesic Interactive](https://themesic.com) tarafından.

- 🛒 **Satın alın / daha fazla bilgi:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Dokümantasyon:** https://perfexcrm.themesic.com/apiguide/
- 💬 **Destek:** https://themesic.com/support

Ek örnek katkıları memnuniyetle karşılanır — bkz. [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Lisans

Bu depodaki örnek kodlar [MIT Lisansı](LICENSE) altında yayımlanmıştır. "Perfex", ilgili sahibinin bir ticari markasıdır;
REST API modülü Themesic Interactive'in ticari bir ürünüdür.
