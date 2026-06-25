<p align="center">
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="API REST pour Perfex CRM — connecter Perfex CRM à Zapier, WooCommerce, n8n et des applications tierces" width="100%">
  </a>
</p>

# API REST Perfex CRM — Exemples, collection Postman et extraits de code

🌐 [English](README.md) · [简体中文](README.zh-CN.md) · [Português (BR)](README.pt-BR.md) · [Tiếng Việt](README.vi.md) · **Français** · [Deutsch](README.de.md)

> **Collection Postman** prête à l'emploi, **extraits de code** (cURL, PHP, Python, JavaScript) et un
> **catalogue** des ressources pour le [module REST API pour Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> le moyen le plus rapide de **connecter Perfex CRM à des applications tierces**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

L'**API REST de Perfex CRM** permet de lire et d'écrire clients, prospects, factures, devis, projets,
tâches et bien plus via une interface HTTP/JSON claire — idéale pour l'**intégration CRM**, l'automatisation
et les applications sur mesure. Ce dépôt est le compagnon pratique du module
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
de **Themesic Interactive** : exemples prêts à copier-coller, collection Postman importable et catalogue
complet des points de terminaison.

- 🧩 **Obtenir le module :** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Guide API / doc en ligne :** https://perfexcrm.themesic.com/apiguide/

---

## Sommaire

| Dossier | Contenu |
| --- | --- |
| [`postman/`](postman/) | **Collection** + **environnement** Postman importables (`{{base_url}}`, `{{authtoken}}`) |
| [`snippets/curl/`](snippets/curl/) | Commandes `curl` à copier-coller pour les appels les plus courants |
| [`snippets/php/`](snippets/php/) | Exemples PHP (cURL) |
| [`snippets/python/`](snippets/python/) | Exemples Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | Exemples JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | Authentification, pagination & filtrage, erreurs & codes de statut |

---

## Démarrage rapide

Chaque requête vers l'API REST de Perfex CRM est authentifiée avec l'en-tête **`Authtoken`**. Créez un
jeton dans l'admin Perfex sous **API → API Management** (après avoir activé le
[module REST API](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)),
puis appelez l'API sur `https://yourdomain.com/api/...` :

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Cela renvoie la liste des clients au format JSON. Voir [`docs/authentication.md`](docs/authentication.md)
pour l'authentification par en-tête ou paramètre, et [`snippets/`](snippets/) pour le même appel en PHP,
Python et JavaScript.

### Utiliser la collection Postman

1. Ouvrez Postman → **Import** → déposez [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Importez l'environnement [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Définissez `base_url` sur `https://yourdomain.com/api` et `authtoken` sur votre jeton.
4. Choisissez une requête et cliquez sur **Send**.

---

## Catalogue des points de terminaison

Tous les points de terminaison suivent une convention RESTful : `GET` liste, `GET /:id` un élément,
`POST` créer, `PUT /:id` mettre à jour, `DELETE /:id` supprimer — sous le chemin de base `https://yourdomain.com/api`.

| Ressource | Chemin de base | Opérations |
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
| Common (recherches) | `/api/common` | countries, taxes, currencies, statuses … |

> Les champs exacts par ressource sont documentés dans le
> **[guide API officiel](https://perfexcrm.themesic.com/apiguide/)**.

---

## Intégrations et cas d'usage populaires

L'API REST de Perfex CRM est couramment utilisée pour **connecter Perfex CRM à des applications tierces** :

- **Zapier / Make / n8n** — automatisation no-code (ex. créer un prospect Perfex depuis un formulaire web).
- **Google Sheets / Power Automate** — synchroniser clients, factures ou paiements vers des feuilles et tableaux de bord.
- **Webhooks** — envoyer les événements Perfex (nouvelle facture, nouveau prospect) vers Slack, Discord ou votre backend.
- **Applications & portails sur mesure** — créer une app mobile ou un portail client basé sur vos données Perfex.
- **Comptabilité & e-commerce** — synchroniser factures et articles avec des plateformes externes.

Le tout propulsé par le
[module REST API pour Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Authentification (résumé)

| Méthode | Comment |
| --- | --- |
| En-tête (recommandé) | `Authtoken: YOUR_API_TOKEN` |
| Paramètre de requête | `?authtoken=YOUR_API_TOKEN` (pratique pour les tests rapides / webhooks) |

Les jetons sont créés et limités (permissions par ressource) sous **API → API Management**. Détails dans
[`docs/authentication.md`](docs/authentication.md).

---

## FAQ

**Perfex CRM dispose-t-il d'une API REST ?**
Oui. Le [module REST API pour Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
ajoute une API RESTful HTTP/JSON complète pour les clients, prospects, factures, devis, projets, tâches et plus.

**Comment m'authentifier auprès de l'API Perfex CRM ?**
Envoyez votre jeton dans l'en-tête HTTP `Authtoken` (ou en paramètre `?authtoken=`). Voir
[`docs/authentication.md`](docs/authentication.md).

**Quelle est l'URL de base de l'API Perfex CRM ?**
`https://yourdomain.com/api` — par exemple `https://yourdomain.com/api/customers`.

**Puis-je connecter Perfex CRM à Zapier, Make ou n8n ?**
Oui — l'API REST fonctionne avec toute plateforme d'automatisation capable d'envoyer des requêtes HTTP authentifiées.

**Existe-t-il une collection Postman pour Perfex CRM ?**
Oui — importez [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
et l'environnement, définissez `base_url` et `authtoken`, puis envoyez vos requêtes.

---

## À propos / Support

Ce dépôt est une **collection d'exemples** accompagnant le module commercial :

> **[REST API for Perfex CRM — connecter Perfex CRM à des applications tierces](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> par [Themesic Interactive](https://themesic.com).

- 🛒 **Acheter / en savoir plus :** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Documentation :** https://perfexcrm.themesic.com/apiguide/

## Licence

Le code d'exemple de ce dépôt est publié sous [licence MIT](LICENSE). « Perfex » est une marque de son
détenteur respectif ; le module REST API est un produit commercial de Themesic Interactive.
