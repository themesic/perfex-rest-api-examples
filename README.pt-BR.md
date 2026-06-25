<p align="center">
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="API REST para Perfex CRM — conectar o Perfex CRM com Zapier, WooCommerce, n8n e apps de terceiros" width="100%">
  </a>
</p>

# API REST do Perfex CRM — Exemplos, coleção Postman e snippets de código

🌐 [English](README.md) · [简体中文](README.zh-CN.md) · **Português (BR)** · [Tiếng Việt](README.vi.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

> **Coleção Postman** pronta para usar, **snippets de código** (cURL, PHP, Python, JavaScript) e um
> **catálogo** de recursos para o [módulo REST API para Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> a forma mais rápida de **conectar o Perfex CRM a aplicações de terceiros**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

A **API REST do Perfex CRM** permite ler e gravar clientes, leads, faturas, orçamentos, projetos, tarefas
e muito mais por meio de uma interface HTTP/JSON limpa — ideal para **integração de CRM**, automação e
aplicações personalizadas. Este repositório é o complemento prático do módulo
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
da **Themesic Interactive**: exemplos prontos para copiar e colar, uma coleção Postman importável e um
catálogo completo de endpoints.

- 🧩 **Obter o módulo:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Guia da API / documentação online:** https://perfexcrm.themesic.com/apiguide/

---

## Conteúdo

| Pasta | O que contém |
| --- | --- |
| [`postman/`](postman/) | **Coleção** + **ambiente** Postman importáveis (`{{base_url}}`, `{{authtoken}}`) |
| [`snippets/curl/`](snippets/curl/) | Comandos `curl` para copiar e colar nas chamadas mais comuns |
| [`snippets/php/`](snippets/php/) | Exemplos em PHP (cURL) |
| [`snippets/python/`](snippets/python/) | Exemplos em Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | Exemplos em JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | Autenticação, paginação e filtros, erros e códigos de status |

---

## Início rápido

Toda requisição à API REST do Perfex CRM é autenticada com o cabeçalho **`Authtoken`**. Crie um token no
admin do Perfex em **API → API Management** (após ativar o
[módulo REST API](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/))
e chame a API em `https://yourdomain.com/api/...`:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Isso retorna a lista de clientes em JSON. Veja [`docs/authentication.md`](docs/authentication.md) para
autenticação por cabeçalho ou parâmetro, e [`snippets/`](snippets/) para a mesma chamada em PHP, Python e
JavaScript.

### Usar a coleção Postman

1. Abra o Postman → **Import** → solte [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Importe o ambiente [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Defina `base_url` como `https://yourdomain.com/api` e `authtoken` com seu token.
4. Escolha qualquer requisição e clique em **Send**.

---

## Catálogo de endpoints

Todos os endpoints seguem a convenção RESTful: `GET` listar, `GET /:id` obter, `POST` criar,
`PUT /:id` atualizar, `DELETE /:id` excluir — sob o caminho base `https://yourdomain.com/api`.

| Recurso | Caminho base | Operações |
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
| Common (consultas) | `/api/common` | countries, taxes, currencies, statuses … |

> Os campos exatos de cada recurso estão documentados no
> **[guia oficial da API](https://perfexcrm.themesic.com/apiguide/)**.

---

## Integrações e casos de uso populares

A API REST do Perfex CRM é comumente usada para **conectar o Perfex CRM a aplicações de terceiros**:

- **Zapier / Make / n8n** — automação no-code (ex.: criar um lead no Perfex a partir de um formulário web).
- **Google Sheets / Power Automate** — sincronizar clientes, faturas ou pagamentos com planilhas e dashboards.
- **Webhooks** — enviar eventos do Perfex (nova fatura, novo lead) para Slack, Discord ou seu backend.
- **Apps e portais personalizados** — criar um app mobile ou portal do cliente sobre seus dados do Perfex.
- **Contabilidade e e-commerce** — sincronizar faturas e itens com plataformas externas de cobrança ou loja.

Tudo isso com o
[módulo REST API para Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Autenticação (resumo)

| Método | Como |
| --- | --- |
| Cabeçalho (recomendado) | `Authtoken: YOUR_API_TOKEN` |
| Parâmetro de consulta | `?authtoken=YOUR_API_TOKEN` (útil para testes rápidos / webhooks) |

Os tokens são criados e limitados (permissões por recurso) em **API → API Management**. Detalhes em
[`docs/authentication.md`](docs/authentication.md).

---

## FAQ

**O Perfex CRM tem uma API REST?**
Sim. O [módulo REST API para Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
adiciona uma API RESTful HTTP/JSON completa para clientes, leads, faturas, orçamentos, projetos, tarefas e mais.

**Como faço a autenticação na API do Perfex CRM?**
Envie seu token no cabeçalho HTTP `Authtoken` (ou como parâmetro `?authtoken=`). Veja
[`docs/authentication.md`](docs/authentication.md).

**Qual é a URL base da API do Perfex CRM?**
`https://yourdomain.com/api` — por exemplo `https://yourdomain.com/api/customers`.

**Posso conectar o Perfex CRM ao Zapier, Make ou n8n?**
Sim — a API REST funciona com qualquer plataforma de automação capaz de enviar requisições HTTP autenticadas.

**Existe uma coleção Postman para o Perfex CRM?**
Sim — importe [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
e o ambiente, defina `base_url` e `authtoken`, e envie as requisições.

---

## Sobre / Suporte

Este repositório é uma **coleção de exemplos** que acompanha o módulo comercial:

> **[REST API for Perfex CRM — conecte o Perfex CRM a aplicações de terceiros](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> da [Themesic Interactive](https://themesic.com).

- 🛒 **Comprar / saber mais:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Documentação:** https://perfexcrm.themesic.com/apiguide/

## Licença

O código de exemplo deste repositório é distribuído sob a [licença MIT](LICENSE). "Perfex" é uma marca de
seu respectivo proprietário; o módulo REST API é um produto comercial da Themesic Interactive.
