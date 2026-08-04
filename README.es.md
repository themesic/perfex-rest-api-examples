<p>
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API for Perfex CRM — connect Perfex CRM with AI agents, Zapier, WooCommerce, n8n and third-party apps">
  </a>
</p>

# REST API de Perfex CRM — Ejemplos, colección de Postman y fragmentos de código

[English](README.md) · [简体中文](README.zh-CN.md) · 🌐 **Español** · [Português (BR)](README.pt-BR.md) · [Italiano](README.it.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [العربية](README.ar.md)

> **Colección de Postman** lista para usar, **fragmentos de código** (cURL, PHP, Python, JavaScript) y un
> **catálogo** de recursos para el [módulo REST API para Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> la forma más rápida de **conectar Perfex CRM con agentes de IA y aplicaciones de terceros**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![OpenAPI 3.0](https://img.shields.io/badge/OpenAPI-3.0-6ba539?logo=openapiinitiative&logoColor=white)](https://perfexcrm.themesic.com/apiguide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

La **REST API de Perfex CRM** te permite leer y escribir clientes, prospectos, facturas, presupuestos, proyectos,
tareas y mucho más a través de una interfaz HTTP/JSON limpia — perfecta para la **integración de CRM**, la automatización y
aplicaciones personalizadas. La **v3.0** añade un **servidor MCP para agentes de IA**, **webhooks** de nivel productivo,
sondeo listo para usar con **Zapier / Make / n8n**, operaciones por **lotes** y endpoints de listado más inteligentes. Este repositorio es el complemento
práctico del módulo
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
de **Themesic Interactive**: ejemplos para copiar y pegar, una colección de Postman importable y un
catálogo completo de endpoints.

- 🧩 **Obtén el módulo:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Guía de la API / documentación en vivo:** https://perfexcrm.themesic.com/apiguide/
- 🧾 **Especificación OpenAPI 3.0:** `GET https://yourdomain.com/api/openapi`

---

## 🚀 Novedades de la v3.0

| Función | Endpoint | Qué hace |
| --- | --- | --- |
| 🤖 **Servidor MCP** | `POST /api/mcp` | Model Context Protocol (JSON-RPC 2.0) — expone **148 herramientas de CRM filtradas por permisos** a Claude Desktop, ChatGPT, Cursor, n8n AI Agent y cualquier cliente MCP |
| 🪝 **Webhooks 2.0** | `/api/webhooks` | **124 eventos**, gestión REST, entrega asíncrona con reintentos, protección SSRF, solicitudes **firmadas con HMAC** |
| 🔌 **Automatización (sondeo)** | `/api/zapier/*` | Disparadores de sondeo listos para usar con **Zapier, Make.com, n8n** y cualquier herramienta basada en sondeo |
| ⚡ **Lotes** | `POST /api/batch` | Hasta **50 operaciones** en una sola solicitud (mismos nombres de herramienta que MCP) |
| 📚 **Base de conocimiento** | `/api/knowledge_base` | CRUD de artículos + grupos |
| 🗒️ **Notas** | `/api/notes` | Notas polimórficas en 12 tipos de entidad |
| 📄 **Listados más inteligentes** | cualquier endpoint de listado | `?page=&per_page=`, `?fields=`, `?sort=`, `?created_after=&created_before=` opcionales |
| 🛡️ **Escrituras seguras** | cualquier `POST` | Reintento con `Idempotency-Key`, campos desconocidos ignorados en `PUT`, cabeceras `X-RateLimit-*` |

> Todo es **opcional** y retrocompatible: las solicitudes sin los nuevos parámetros devuelven exactamente
> la misma respuesta que antes.

---

## Contenido

| Carpeta | Qué contiene |
| --- | --- |
| [`postman/`](postman/) | **Colección** + **entorno** de Postman importables (`{{base_url}}`, `{{authtoken}}`) — ahora con MCP, Webhooks, Batch, Automation, Knowledge Base y Notes |
| [`snippets/curl/`](snippets/curl/) | Comandos `curl` para copiar y pegar de las llamadas más comunes |
| [`snippets/php/`](snippets/php/) | Ejemplos en PHP (cURL) |
| [`snippets/python/`](snippets/python/) | Ejemplos en Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | Ejemplos en JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | Autenticación, paginación y filtrado, webhooks, MCP, automatización, errores y códigos de estado |

Cada lenguaje de fragmentos incluye ejemplos para **clientes, facturas y prospectos**, además de las funciones de la v3
**webhooks, mcp, batch, automation, knowledge_base y notes**, y un archivo **list_features** que muestra
paginación, selección de campos y ordenamiento.

---

## Inicio rápido

Cada solicitud a la REST API de Perfex CRM se autentica con la cabecera **`Authtoken`**. Crea un token
en tu panel de administración de Perfex en **API → API Management** (tras activar el
[módulo REST API](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)),
y luego llama a la API en `https://yourdomain.com/api/...`:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Eso devuelve la lista de clientes como JSON. Consulta [`docs/authentication.md`](docs/authentication.md) para conocer
la autenticación mediante cabecera frente a parámetro de consulta, y [`snippets/`](snippets/) para la misma llamada en PHP, Python y JavaScript.

### Usa la colección de Postman

1. Abre Postman → **Import** → arrastra [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Importa el entorno [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Configura `base_url` como `https://yourdomain.com/api` y `authtoken` con tu token.
4. Elige cualquier solicitud y pulsa **Send**.

### Conecta un agente de IA (MCP)

Apunta cualquier cliente MCP (Claude Desktop, Cursor, ChatGPT, n8n AI Agent) a `POST https://yourdomain.com/api/mcp`
y envía tu cabecera `authtoken`. El servidor anuncia herramientas filtradas por permisos para tu CRM. Consulta
[`docs/mcp.md`](docs/mcp.md) y [`snippets/curl/mcp.sh`](snippets/curl/mcp.sh).

---

## Catálogo de endpoints

Todos los endpoints CRUD siguen una convención RESTful: `GET` para listar, `GET /:id` para uno solo, `POST` para crear,
`PUT /:id` para actualizar, `DELETE /:id` para eliminar — bajo la ruta base `https://yourdomain.com/api`.

### Recursos principales del CRM

| Recurso | Ruta base | Operaciones típicas |
| --- | --- | --- |
| Clientes | `/api/customers` | listar, obtener, crear, actualizar, eliminar |
| Contactos | `/api/contacts` | listar, obtener, crear, actualizar, eliminar |
| Prospectos | `/api/leads` | listar, obtener, crear, actualizar, eliminar |
| Facturas | `/api/invoices` | listar, obtener, crear, actualizar, eliminar |
| Presupuestos | `/api/estimates` | listar, obtener, crear, actualizar, eliminar |
| Notas de crédito | `/api/credit_notes` | listar, obtener, crear, actualizar |
| Pagos | `/api/payments` | listar, obtener, crear |
| Propuestas | `/api/proposals` | listar, obtener, crear, actualizar, eliminar |
| Contratos | `/api/contracts` | listar, obtener, crear, actualizar, eliminar |
| Proyectos | `/api/projects` | listar, obtener, crear, actualizar, eliminar |
| Tareas | `/api/tasks` | listar, obtener, crear, actualizar, eliminar |
| Hitos | `/api/milestones` | listar, obtener, crear, actualizar, eliminar |
| Hojas de horas | `/api/timesheets` | listar, obtener, crear, actualizar, eliminar |
| Suscripciones | `/api/subscriptions` | listar, obtener, crear, actualizar |
| Artículos | `/api/items` | listar, obtener, crear, actualizar, eliminar |
| Gastos | `/api/expenses` | listar, obtener, crear, actualizar, eliminar |
| Personal | `/api/staffs` | listar, obtener, crear, actualizar, eliminar |
| Calendario | `/api/calendar` | listar, obtener, crear, actualizar, eliminar |
| Campos personalizados | `/api/custom_fields` | listar por tipo relacionado |
| Comunes (búsquedas) | `/api/common` | países, impuestos, monedas, estados … |

### Recursos de plataforma y extra de la v3

| Recurso | Ruta base | Operaciones típicas |
| --- | --- | --- |
| **Servidor MCP** | `/api/mcp` | `POST` JSON-RPC 2.0: `initialize`, `tools/list`, `tools/call` |
| **Lotes** | `/api/batch` | `POST` hasta 50 operaciones en una sola solicitud |
| **Webhooks** | `/api/webhooks` | listar, obtener, crear, actualizar, eliminar, `POST /:id/toggle`, `GET /events`, `GET /:id/logs` |
| **Automatización (sondeo)** | `/api/zapier` | `GET /resources`, `GET /poll/:resource`, `GET /test/:resource` |
| **Base de conocimiento** | `/api/knowledge_base` | listar, obtener, crear, actualizar, eliminar; `/groups` |
| **Notas** | `/api/notes` | listar por `:rel_type/:rel_id`, obtener, crear, actualizar, eliminar |

> Los campos exactos de solicitud para cada recurso están documentados en la
> **[guía de la API](https://perfexcrm.themesic.com/apiguide/)** oficial. Los fragmentos aquí cubren los flujos más comunes.

---

## Endpoints de listado más inteligentes (v3)

Cada endpoint de listado acepta parámetros de consulta opcionales. Si los añades, obtienes un envoltorio `{ data, meta }`;
si los omites, obtienes exactamente el arreglo heredado.

```bash
# Página 2, 20 por página, solo id + company, primero los más nuevos, creados este año
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

| Parámetro | Ejemplo | Efecto |
| --- | --- | --- |
| `page`, `per_page` | `?page=2&per_page=20` | Paginación → `{ data, meta }` |
| `fields` | `?fields=id,company` | Devolver solo estas columnas |
| `sort` | `?sort=-datecreated,company` | Ordenar (`-` = descendente) |
| `created_after`, `created_before` | `?created_after=2026-01-01` | Filtro por rango de fechas |

Consulta [`docs/pagination-filtering.md`](docs/pagination-filtering.md) y
[`snippets/curl/list_features.sh`](snippets/curl/list_features.sh).

---

## Integraciones y casos de uso populares

La REST API de Perfex CRM se usa habitualmente para **conectar Perfex CRM con agentes de IA y aplicaciones de terceros**:

- **Asistentes de IA (MCP)** — permite que Claude, ChatGPT o Cursor lean y actualicen tu CRM a través de `/api/mcp`.
- **Zapier / Make / n8n** — automatización sin código mediante disparadores de sondeo listos para usar (`/api/zapier/*`).
- **Webhooks** — envía eventos de Perfex (nueva factura, nuevo prospecto, 124 eventos) a Slack, Discord o tu propio backend, firmados con HMAC.
- **Google Sheets / Power Automate** — sincroniza clientes, facturas o pagos con hojas de cálculo y paneles.
- **Aplicaciones y portales personalizados** — crea una aplicación móvil o un portal de clientes sobre tus datos de Perfex.
- **Contabilidad y comercio electrónico** — sincroniza facturas y artículos con plataformas externas de facturación o tienda.

Todo esto se impulsa con el módulo
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Autenticación (resumen)

| Método | Cómo |
| --- | --- |
| Cabecera (recomendado) | `Authtoken: YOUR_API_TOKEN` |
| Parámetro de consulta | `?authtoken=YOUR_API_TOKEN` (práctico para pruebas rápidas / webhooks) |

Los tokens se crean y se limitan (permisos por recurso) en **API → API Management**. Todos los detalles en
[`docs/authentication.md`](docs/authentication.md).

---

## Preguntas frecuentes

**¿Tiene Perfex CRM una REST API?**
Sí. El módulo [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
añade una API HTTP/JSON RESTful completa para clientes, prospectos, facturas, presupuestos, proyectos, tareas y mucho más,
además de un **servidor MCP**, **webhooks**, **lotes** y endpoints de **automatización** de la v3.

**¿Puedo usar Perfex CRM con agentes de IA / ChatGPT / Claude?**
Sí — la v3 incluye un **servidor MCP** en `POST /api/mcp` que expone herramientas de CRM filtradas por permisos a cualquier
cliente de Model Context Protocol. Consulta [`docs/mcp.md`](docs/mcp.md).

**¿Cómo me autentico con la API de Perfex CRM?**
Envía tu token en la cabecera HTTP `Authtoken` (o como un parámetro de consulta `?authtoken=`). Consulta
[`docs/authentication.md`](docs/authentication.md).

**¿Cuál es la URL base de la API de Perfex CRM?**
`https://yourdomain.com/api` — por ejemplo `https://yourdomain.com/api/customers`.

**¿Puedo conectar Perfex CRM con Zapier, Make o n8n?**
Sí — la v3 tiene disparadores de sondeo listos para usar en `/api/zapier/*`, además de webhooks. Consulta
[Integraciones populares](#popular-integrations--use-cases) y [`docs/automation.md`](docs/automation.md).

**¿Hay una colección de Postman para Perfex CRM?**
Sí — importa [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
y el entorno incluido, configura tu `base_url` y `authtoken`, y empieza a enviar solicitudes.

**¿Cómo creo una factura mediante la API de Perfex CRM?**
`POST https://yourdomain.com/api/invoices` con los campos de la factura y un arreglo `items[]` — la v3 calcula automáticamente
`subtotal`/`total`. Consulta [`snippets/curl/invoices.sh`](snippets/curl/invoices.sh).

---

## Acerca de / Soporte

<img src="assets/perfex-crm-rest-api-icon.png" width="64" alt="Perfex CRM REST API icon">

Este repositorio es un **complemento de ejemplos** del módulo comercial:

> **[REST API for Perfex CRM — connect your Perfex CRM with third-party applications](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> de [Themesic Interactive](https://themesic.com).

- 🛒 **Comprar / más información:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Documentación:** https://perfexcrm.themesic.com/apiguide/
- 💬 **Soporte:** https://themesic.com/support

Se agradecen las contribuciones de ejemplos adicionales — consulta [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Licencia

El código de ejemplo de este repositorio se publica bajo la [Licencia MIT](LICENSE). "Perfex" es una marca comercial de
su respectivo propietario; el módulo REST API es un producto comercial de Themesic Interactive.
