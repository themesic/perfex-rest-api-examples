<p align="center">
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API für Perfex CRM — Perfex CRM mit Zapier, WooCommerce, n8n und Drittanbieter-Apps verbinden" width="100%">
  </a>
</p>

# Perfex CRM REST API — Beispiele, Postman-Sammlung & Code-Snippets

🌐 [English](README.md) · [简体中文](README.zh-CN.md) · [Português (BR)](README.pt-BR.md) · [Tiếng Việt](README.vi.md) · [Français](README.fr.md) · **Deutsch**

> Sofort einsatzbereite **Postman-Sammlung**, **Code-Snippets** (cURL, PHP, Python, JavaScript) und ein
> **Ressourcen-Katalog** für das [REST-API-Modul für Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> der schnellste Weg, **Perfex CRM mit Drittanbieter-Anwendungen zu verbinden**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

Die **Perfex CRM REST API** ermöglicht das Lesen und Schreiben von Kunden, Leads, Rechnungen, Angeboten,
Projekten, Aufgaben und mehr über eine saubere HTTP/JSON-Schnittstelle — ideal für **CRM-Integration**,
Automatisierung und eigene Anwendungen. Dieses Repository ist die praktische Ergänzung zum Modul
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
von **Themesic Interactive**: Copy-&-Paste-Beispiele, eine importierbare Postman-Sammlung und ein
vollständiger Endpunkt-Katalog.

- 🧩 **Modul herunterladen:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **API-Anleitung / Live-Doku:** https://perfexcrm.themesic.com/apiguide/

---

## Inhalt

| Ordner | Inhalt |
| --- | --- |
| [`postman/`](postman/) | Importierbare Postman-**Sammlung** + **Umgebung** (`{{base_url}}`, `{{authtoken}}`) |
| [`snippets/curl/`](snippets/curl/) | `curl`-Befehle zum Kopieren für die häufigsten Aufrufe |
| [`snippets/php/`](snippets/php/) | PHP-Beispiele (cURL) |
| [`snippets/python/`](snippets/python/) | Python-Beispiele (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | JavaScript-/Node-Beispiele (`fetch`) |
| [`docs/`](docs/) | Authentifizierung, Paginierung & Filterung, Fehler & Statuscodes |

---

## Schnellstart

Jede Anfrage an die Perfex CRM REST API wird mit dem Header **`Authtoken`** authentifiziert. Erstellen Sie
ein Token im Perfex-Adminbereich unter **API → API Management** (nach Aktivierung des
[REST-API-Moduls](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/))
und rufen Sie die API unter `https://yourdomain.com/api/...` auf:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Das liefert die Kundenliste als JSON. Siehe [`docs/authentication.md`](docs/authentication.md) für
Header- vs. Query-Parameter-Authentifizierung und [`snippets/`](snippets/) für denselben Aufruf in PHP,
Python und JavaScript.

### Postman-Sammlung verwenden

1. Postman öffnen → **Import** → [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json) hineinziehen.
2. Die Umgebung [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json) importieren.
3. `base_url` auf `https://yourdomain.com/api` und `authtoken` auf Ihr Token setzen.
4. Eine beliebige Anfrage auswählen und **Send** drücken.

---

## Endpunkt-Katalog

Alle Endpunkte folgen einer RESTful-Konvention: `GET` Liste, `GET /:id` einzeln, `POST` erstellen,
`PUT /:id` aktualisieren, `DELETE /:id` löschen — unter dem Basis-Pfad `https://yourdomain.com/api`.

| Ressource | Basis-Pfad | Operationen |
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
| Common (Lookups) | `/api/common` | countries, taxes, currencies, statuses … |

> Die genauen Felder pro Ressource sind in der offiziellen
> **[API-Anleitung](https://perfexcrm.themesic.com/apiguide/)** dokumentiert.

---

## Beliebte Integrationen & Anwendungsfälle

Die Perfex CRM REST API wird häufig verwendet, um **Perfex CRM mit Drittanbieter-Anwendungen zu verbinden**:

- **Zapier / Make / n8n** — No-Code-Automatisierung (z. B. einen Perfex-Lead aus einem Webformular erstellen).
- **Google Sheets / Power Automate** — Kunden, Rechnungen oder Zahlungen mit Tabellen und Dashboards synchronisieren.
- **Webhooks** — Perfex-Ereignisse (neue Rechnung, neuer Lead) an Slack, Discord oder Ihr Backend senden.
- **Eigene Apps & Portale** — eine mobile App oder ein Kundenportal auf Basis Ihrer Perfex-Daten erstellen.
- **Buchhaltung & E-Commerce** — Rechnungen und Artikel mit externen Abrechnungs- oder Shop-Plattformen abgleichen.

Möglich gemacht durch das
[REST-API-Modul für Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Authentifizierung (Zusammenfassung)

| Methode | Vorgehen |
| --- | --- |
| Header (empfohlen) | `Authtoken: YOUR_API_TOKEN` |
| Query-Parameter | `?authtoken=YOUR_API_TOKEN` (praktisch für schnelle Tests / Webhooks) |

Tokens werden unter **API → API Management** erstellt und mit Berechtigungen versehen. Details in
[`docs/authentication.md`](docs/authentication.md).

---

## FAQ

**Hat Perfex CRM eine REST API?**
Ja. Das [REST-API-Modul für Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
ergänzt eine vollständige RESTful-HTTP/JSON-API für Kunden, Leads, Rechnungen, Angebote, Projekte, Aufgaben und mehr.

**Wie authentifiziere ich mich bei der Perfex CRM API?**
Senden Sie Ihr Token im HTTP-Header `Authtoken` (oder als `?authtoken=`-Query-Parameter). Siehe
[`docs/authentication.md`](docs/authentication.md).

**Wie lautet die Basis-URL der Perfex CRM API?**
`https://yourdomain.com/api` — zum Beispiel `https://yourdomain.com/api/customers`.

**Kann ich Perfex CRM mit Zapier, Make oder n8n verbinden?**
Ja — die REST API funktioniert mit jeder Automatisierungsplattform, die authentifizierte HTTP-Anfragen senden kann.

**Gibt es eine Postman-Sammlung für Perfex CRM?**
Ja — importieren Sie [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
und die Umgebung, setzen Sie `base_url` und `authtoken` und senden Sie Anfragen.

---

## Über / Support

Dieses Repository ist eine **Beispielsammlung** zum kommerziellen Modul:

> **[REST API for Perfex CRM — Perfex CRM mit Drittanbieter-Anwendungen verbinden](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> von [Themesic Interactive](https://themesic.com).

- 🛒 **Kaufen / mehr erfahren:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Dokumentation:** https://perfexcrm.themesic.com/apiguide/

## Lizenz

Der Beispielcode in diesem Repository steht unter der [MIT-Lizenz](LICENSE). „Perfex" ist eine Marke des
jeweiligen Inhabers; das REST-API-Modul ist ein kommerzielles Produkt von Themesic Interactive.
