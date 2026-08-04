<p>
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API for Perfex CRM — connect Perfex CRM with AI agents, Zapier, WooCommerce, n8n and third-party apps">
  </a>
</p>

# API REST Perfex CRM — Exemples, collection Postman et extraits de code

[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (BR)](README.pt-BR.md) · [Italiano](README.it.md) · 🌐 **Français** · [Deutsch](README.de.md) · [Türkçe](README.tr.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [العربية](README.ar.md)

> **Collection Postman** prête à l'emploi, **extraits de code** (cURL, PHP, Python, JavaScript) et un
> **catalogue** de ressources pour le [module REST API pour Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> le moyen le plus rapide de **connecter Perfex CRM à des agents IA et à des applications tierces**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![OpenAPI 3.0](https://img.shields.io/badge/OpenAPI-3.0-6ba539?logo=openapiinitiative&logoColor=white)](https://perfexcrm.themesic.com/apiguide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

L'**API REST Perfex CRM** vous permet de lire et d'écrire clients, prospects, factures, devis, projets,
tâches et bien plus via une interface HTTP/JSON claire — idéale pour l'**intégration CRM**, l'automatisation et les
applications sur mesure. La **v3.0** ajoute un **serveur MCP pour les agents IA**, des **webhooks** de niveau production,
un polling prêt à l'emploi pour **Zapier / Make / n8n**, des opérations **batch** et des points d'accès de liste plus intelligents.
Ce dépôt est le compagnon pratique du module
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
de **Themesic Interactive** : exemples à copier-coller, une collection Postman importable et un catalogue complet
des points d'accès.

- 🧩 **Obtenir le module :** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Guide API / documentation en direct :** https://perfexcrm.themesic.com/apiguide/
- 🧾 **Spécification OpenAPI 3.0 :** `GET https://yourdomain.com/api/openapi`

---

## 🚀 Nouveautés de la v3.0

| Fonctionnalité | Point d'accès | Rôle |
| --- | --- | --- |
| 🤖 **Serveur MCP** | `POST /api/mcp` | Model Context Protocol (JSON-RPC 2.0) — expose **148 outils CRM filtrés par permissions** à Claude Desktop, ChatGPT, Cursor, l'agent IA n8n et tout client MCP |
| 🪝 **Webhooks 2.0** | `/api/webhooks` | **124 événements**, gestion REST, livraison asynchrone avec relances, protection SSRF, requêtes **signées HMAC** |
| 🔌 **Automatisation (polling)** | `/api/zapier/*` | Déclencheurs de polling prêts à l'emploi pour **Zapier, Make.com, n8n** et tout outil basé sur le polling |
| ⚡ **Batch** | `POST /api/batch` | Jusqu'à **50 opérations** en une seule requête (mêmes noms d'outils que MCP) |
| 📚 **Base de connaissances** | `/api/knowledge_base` | CRUD des articles + groupes |
| 🗒️ **Notes** | `/api/notes` | Notes polymorphes sur 12 types d'entités |
| 📄 **Listes plus intelligentes** | tout point d'accès de liste | Options `?page=&per_page=`, `?fields=`, `?sort=`, `?created_after=&created_before=` |
| 🛡️ **Écritures sûres** | tout `POST` | Rejeu par `Idempotency-Key`, champs inconnus ignorés sur `PUT`, en-têtes `X-RateLimit-*` |

> Tout est **optionnel** et rétrocompatible : les requêtes sans les nouveaux paramètres renvoient exactement
> la même réponse qu'auparavant.

---

## Sommaire

| Dossier | Contenu |
| --- | --- |
| [`postman/`](postman/) | **Collection** + **environnement** Postman importables (`{{base_url}}`, `{{authtoken}}`) — désormais avec MCP, Webhooks, Batch, Automation, Knowledge Base et Notes |
| [`snippets/curl/`](snippets/curl/) | Commandes `curl` à copier-coller pour les appels les plus courants |
| [`snippets/php/`](snippets/php/) | Exemples PHP (cURL) |
| [`snippets/python/`](snippets/python/) | Exemples Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | Exemples JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | Authentification, pagination et filtrage, webhooks, MCP, automatisation, erreurs et codes de statut |

Chaque langage d'extrait propose des exemples pour les **clients, factures, prospects** ainsi que les fonctionnalités v3
**webhooks, mcp, batch, automation, knowledge_base et notes**, et un fichier **list_features** illustrant
la pagination, la sélection de champs et le tri.

---

## Démarrage rapide

Chaque requête vers l'API REST Perfex CRM est authentifiée avec l'en-tête **`Authtoken`**. Créez un jeton
dans votre administration Perfex sous **API → API Management** (après avoir activé le
[module REST API](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)),
puis appelez l'API à l'adresse `https://yourdomain.com/api/...` :

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Cela renvoie la liste des clients au format JSON. Voir [`docs/authentication.md`](docs/authentication.md) pour
l'authentification par en-tête ou par paramètre de requête, et [`snippets/`](snippets/) pour le même appel en PHP, Python et JavaScript.

### Utiliser la collection Postman

1. Ouvrez Postman → **Import** → déposez [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Importez l'environnement [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Définissez `base_url` sur `https://yourdomain.com/api` et `authtoken` sur votre jeton.
4. Choisissez une requête et cliquez sur **Send**.

### Connecter un agent IA (MCP)

Pointez n'importe quel client MCP (Claude Desktop, Cursor, ChatGPT, agent IA n8n) vers `POST https://yourdomain.com/api/mcp`
et envoyez votre en-tête `authtoken`. Le serveur annonce les outils filtrés par permissions pour votre CRM. Voir
[`docs/mcp.md`](docs/mcp.md) et [`snippets/curl/mcp.sh`](snippets/curl/mcp.sh).

---

## Catalogue des points d'accès

Tous les points d'accès CRUD suivent une convention RESTful : `GET` liste, `GET /:id` élément unique, `POST` création,
`PUT /:id` mise à jour, `DELETE /:id` suppression — sous le chemin de base `https://yourdomain.com/api`.

### Ressources CRM principales

| Ressource | Chemin de base | Opérations typiques |
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
| Custom Fields | `/api/custom_fields` | liste par type associé |
| Common (référentiels) | `/api/common` | countries, taxes, currencies, statuses … |

### Ressources plateforme et supplémentaires v3

| Ressource | Chemin de base | Opérations typiques |
| --- | --- | --- |
| **MCP server** | `/api/mcp` | `POST` JSON-RPC 2.0 : `initialize`, `tools/list`, `tools/call` |
| **Batch** | `/api/batch` | `POST` jusqu'à 50 opérations en une seule requête |
| **Webhooks** | `/api/webhooks` | list, get, create, update, delete, `POST /:id/toggle`, `GET /events`, `GET /:id/logs` |
| **Automation (polling)** | `/api/zapier` | `GET /resources`, `GET /poll/:resource`, `GET /test/:resource` |
| **Knowledge Base** | `/api/knowledge_base` | list, get, create, update, delete ; `/groups` |
| **Notes** | `/api/notes` | liste par `:rel_type/:rel_id`, get, create, update, delete |

> Les champs exacts des requêtes pour chaque ressource sont documentés dans le
> **[guide API](https://perfexcrm.themesic.com/apiguide/)** officiel. Les extraits présentés ici couvrent les flux les plus courants.

---

## Points d'accès de liste plus intelligents (v3)

Chaque point d'accès de liste accepte des paramètres de requête optionnels. Ajoutez-les et vous obtenez une enveloppe `{ data, meta }` ;
omettez-les et vous obtenez exactement le tableau existant.

```bash
# Page 2, 20 per page, only id + company, newest first, created this year
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

| Paramètre | Exemple | Effet |
| --- | --- | --- |
| `page`, `per_page` | `?page=2&per_page=20` | Pagination → `{ data, meta }` |
| `fields` | `?fields=id,company` | Ne renvoyer que ces colonnes |
| `sort` | `?sort=-datecreated,company` | Tri (`-` = décroissant) |
| `created_after`, `created_before` | `?created_after=2026-01-01` | Filtre par plage de dates |

Voir [`docs/pagination-filtering.md`](docs/pagination-filtering.md) et
[`snippets/curl/list_features.sh`](snippets/curl/list_features.sh).

---

## Intégrations et cas d'usage populaires

L'API REST Perfex CRM est couramment utilisée pour **connecter Perfex CRM à des agents IA et à des applications tierces** :

- **Assistants IA (MCP)** — laissez Claude, ChatGPT ou Cursor lire et mettre à jour votre CRM via `/api/mcp`.
- **Zapier / Make / n8n** — automatisation no-code grâce aux déclencheurs de polling prêts à l'emploi (`/api/zapier/*`).
- **Webhooks** — poussez les événements Perfex (nouvelle facture, nouveau prospect, 124 événements) vers Slack, Discord ou votre propre backend, signés avec HMAC.
- **Google Sheets / Power Automate** — synchronisez clients, factures ou paiements vers des feuilles de calcul et des tableaux de bord.
- **Applications et portails sur mesure** — créez une application mobile ou un portail client par-dessus vos données Perfex.
- **Comptabilité et e-commerce** — synchronisez factures et articles avec des plateformes de facturation ou de boutique externes.

Tout cela est propulsé par le module
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Authentification (résumé)

| Méthode | Comment |
| --- | --- |
| En-tête (recommandé) | `Authtoken: YOUR_API_TOKEN` |
| Paramètre de requête | `?authtoken=YOUR_API_TOKEN` (pratique pour les tests rapides / webhooks) |

Les jetons sont créés et cadrés (permissions par ressource) sous **API → API Management**. Tous les détails dans
[`docs/authentication.md`](docs/authentication.md).

---

## FAQ

**Perfex CRM dispose-t-il d'une API REST ?**
Oui. Le module [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
ajoute une API HTTP/JSON RESTful complète pour les clients, prospects, factures, devis, projets, tâches et bien plus,
ainsi qu'un **serveur MCP**, des **webhooks**, des points d'accès **batch** et **automation** v3.

**Puis-je utiliser Perfex CRM avec des agents IA / ChatGPT / Claude ?**
Oui — la v3 embarque un **serveur MCP** à `POST /api/mcp` qui expose des outils CRM filtrés par permissions à tout
client Model Context Protocol. Voir [`docs/mcp.md`](docs/mcp.md).

**Comment m'authentifier auprès de l'API Perfex CRM ?**
Envoyez votre jeton dans l'en-tête HTTP `Authtoken` (ou en paramètre de requête `?authtoken=`). Voir
[`docs/authentication.md`](docs/authentication.md).

**Quelle est l'URL de base de l'API Perfex CRM ?**
`https://yourdomain.com/api` — par exemple `https://yourdomain.com/api/customers`.

**Puis-je connecter Perfex CRM à Zapier, Make ou n8n ?**
Oui — la v3 propose des déclencheurs de polling prêts à l'emploi sous `/api/zapier/*`, ainsi que des webhooks. Voir
[Intégrations populaires](#popular-integrations--use-cases) et [`docs/automation.md`](docs/automation.md).

**Existe-t-il une collection Postman pour Perfex CRM ?**
Oui — importez [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
et l'environnement fourni, définissez vos `base_url` et `authtoken`, puis commencez à envoyer des requêtes.

**Comment créer une facture via l'API Perfex CRM ?**
`POST https://yourdomain.com/api/invoices` avec les champs de la facture et un tableau `items[]` — la v3 calcule automatiquement
`subtotal`/`total`. Voir [`snippets/curl/invoices.sh`](snippets/curl/invoices.sh).

---

## À propos / Support

<img src="assets/perfex-crm-rest-api-icon.png" width="64" alt="Perfex CRM REST API icon">

Ce dépôt est un **compagnon d'exemples** du module commercial :

> **[REST API for Perfex CRM — connect your Perfex CRM with third-party applications](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> par [Themesic Interactive](https://themesic.com).

- 🛒 **Acheter / en savoir plus :** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Documentation :** https://perfexcrm.themesic.com/apiguide/
- 💬 **Support :** https://themesic.com/support

Les contributions d'exemples supplémentaires sont les bienvenues — voir [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Licence

Le code d'exemple de ce dépôt est publié sous la [licence MIT](LICENSE). « Perfex » est une marque de
son détenteur respectif ; le module REST API est un produit commercial de Themesic Interactive.
