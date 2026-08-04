<p>
  <a href="https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/">
    <img src="assets/perfex-crm-rest-api.jpg" alt="REST API for Perfex CRM — connect Perfex CRM with AI agents, Zapier, WooCommerce, n8n and third-party apps">
  </a>
</p>

# Perfex CRM REST API — Exemplos, Coleção Postman e Trechos de Código

[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · 🌐 **Português (BR)** · [Italiano](README.it.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Türkçe](README.tr.md) · [Tiếng Việt](README.vi.md) · [ไทย](README.th.md) · [العربية](README.ar.md)

> **Coleção Postman** pronta para uso, **trechos de código** (cURL, PHP, Python, JavaScript) e um
> **catálogo** de recursos para o [módulo REST API para Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) —
> a forma mais rápida de **conectar o Perfex CRM com agentes de IA e aplicações de terceiros**.

[![Postman](https://img.shields.io/badge/Postman-Collection-orange?logo=postman&logoColor=white)](postman/perfex-rest-api.postman_collection.json)
[![OpenAPI 3.0](https://img.shields.io/badge/OpenAPI-3.0-6ba539?logo=openapiinitiative&logoColor=white)](https://perfexcrm.themesic.com/apiguide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Perfex CRM](https://img.shields.io/badge/Perfex%20CRM-REST%20API-2c7be5)](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)

A **REST API do Perfex CRM** permite ler e gravar clientes, leads, faturas, orçamentos, projetos,
tarefas e muito mais por meio de uma interface HTTP/JSON limpa — ideal para **integração de CRM**, automação e aplicações
personalizadas. A **v3.0** adiciona um **servidor MCP para agentes de IA**, **webhooks** de nível de produção, polling pronto para
**Zapier / Make / n8n**, operações em **lote (batch)** e endpoints de listagem mais inteligentes. Este repositório é o companheiro
prático do módulo
**[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
da **Themesic Interactive**: exemplos para copiar e colar, uma coleção Postman importável e um catálogo
completo de endpoints.

- 🧩 **Obtenha o módulo:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Guia da API / documentação ao vivo:** https://perfexcrm.themesic.com/apiguide/
- 🧾 **Especificação OpenAPI 3.0:** `GET https://yourdomain.com/api/openapi`

---

## 🚀 O que há de novo na v3.0

| Recurso | Endpoint | O que faz |
| --- | --- | --- |
| 🤖 **Servidor MCP** | `POST /api/mcp` | Model Context Protocol (JSON-RPC 2.0) — expõe **148 ferramentas de CRM filtradas por permissão** para Claude Desktop, ChatGPT, Cursor, n8n AI Agent e qualquer cliente MCP |
| 🪝 **Webhooks 2.0** | `/api/webhooks` | **124 eventos**, gerenciamento REST, entrega assíncrona com novas tentativas, proteção contra SSRF, requisições **assinadas com HMAC** |
| 🔌 **Automação (polling)** | `/api/zapier/*` | Gatilhos de polling prontos para **Zapier, Make.com, n8n** e qualquer ferramenta baseada em polling |
| ⚡ **Lote (Batch)** | `POST /api/batch` | Até **50 operações** em uma única requisição (mesmos nomes de ferramentas do MCP) |
| 📚 **Base de Conhecimento** | `/api/knowledge_base` | CRUD de artigos + grupos |
| 🗒️ **Notas** | `/api/notes` | Notas polimórficas em 12 tipos de entidade |
| 📄 **Listas mais inteligentes** | qualquer endpoint de listagem | `?page=&per_page=`, `?fields=`, `?sort=`, `?created_after=&created_before=` opcionais |
| 🛡️ **Gravações seguras** | qualquer `POST` | Replay via `Idempotency-Key`, campos desconhecidos ignorados em `PUT`, cabeçalhos `X-RateLimit-*` |

> Tudo é **opcional (opt-in)** e retrocompatível: requisições sem os novos parâmetros retornam exatamente
> a mesma resposta de antes.

---

## Conteúdo

| Pasta | O que contém |
| --- | --- |
| [`postman/`](postman/) | **Coleção** + **ambiente** Postman importáveis (`{{base_url}}`, `{{authtoken}}`) — agora com MCP, Webhooks, Batch, Automação, Base de Conhecimento e Notas |
| [`snippets/curl/`](snippets/curl/) | Comandos `curl` para copiar e colar nas chamadas mais comuns |
| [`snippets/php/`](snippets/php/) | Exemplos em PHP (cURL) |
| [`snippets/python/`](snippets/python/) | Exemplos em Python (`requests`) |
| [`snippets/javascript/`](snippets/javascript/) | Exemplos em JavaScript / Node (`fetch`) |
| [`docs/`](docs/) | Autenticação, paginação e filtragem, webhooks, MCP, automação, erros e códigos de status |

Cada linguagem de trecho tem exemplos para **clientes, faturas, leads** além dos recursos da v3
**webhooks, mcp, batch, automation, knowledge_base e notes**, e um arquivo **list_features** demonstrando
paginação, seleção de campos e ordenação.

---

## Início rápido

Toda requisição à REST API do Perfex CRM é autenticada com o cabeçalho **`Authtoken`**. Crie um token
no seu admin do Perfex em **API → API Management** (após ativar o
[módulo REST API](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/))
e então chame a API em `https://yourdomain.com/api/...`:

```bash
curl -H "authtoken: YOUR_API_TOKEN" https://yourdomain.com/api/customers
```

Isso retorna a lista de clientes em JSON. Veja [`docs/authentication.md`](docs/authentication.md) para
autenticação por cabeçalho vs. parâmetro de consulta, e [`snippets/`](snippets/) para a mesma chamada em PHP, Python e JavaScript.

### Use a coleção Postman

1. Abra o Postman → **Import** → arraste [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json).
2. Importe o ambiente [`postman/perfex-rest-api.postman_environment.json`](postman/perfex-rest-api.postman_environment.json).
3. Defina `base_url` como `https://yourdomain.com/api` e `authtoken` como o seu token.
4. Escolha qualquer requisição e clique em **Send**.

### Conecte um agente de IA (MCP)

Aponte qualquer cliente MCP (Claude Desktop, Cursor, ChatGPT, n8n AI Agent) para `POST https://yourdomain.com/api/mcp`
e envie o seu cabeçalho `authtoken`. O servidor anuncia ferramentas filtradas por permissão para o seu CRM. Veja
[`docs/mcp.md`](docs/mcp.md) e [`snippets/curl/mcp.sh`](snippets/curl/mcp.sh).

---

## Catálogo de endpoints

Todos os endpoints CRUD seguem uma convenção RESTful: `GET` lista, `GET /:id` item único, `POST` cria,
`PUT /:id` atualiza, `DELETE /:id` exclui — sob o caminho base `https://yourdomain.com/api`.

### Recursos principais do CRM

| Recurso | Caminho base | Operações típicas |
| --- | --- | --- |
| Clientes | `/api/customers` | listar, obter, criar, atualizar, excluir |
| Contatos | `/api/contacts` | listar, obter, criar, atualizar, excluir |
| Leads | `/api/leads` | listar, obter, criar, atualizar, excluir |
| Faturas | `/api/invoices` | listar, obter, criar, atualizar, excluir |
| Orçamentos | `/api/estimates` | listar, obter, criar, atualizar, excluir |
| Notas de Crédito | `/api/credit_notes` | listar, obter, criar, atualizar |
| Pagamentos | `/api/payments` | listar, obter, criar |
| Propostas | `/api/proposals` | listar, obter, criar, atualizar, excluir |
| Contratos | `/api/contracts` | listar, obter, criar, atualizar, excluir |
| Projetos | `/api/projects` | listar, obter, criar, atualizar, excluir |
| Tarefas | `/api/tasks` | listar, obter, criar, atualizar, excluir |
| Marcos (Milestones) | `/api/milestones` | listar, obter, criar, atualizar, excluir |
| Planilhas de Horas | `/api/timesheets` | listar, obter, criar, atualizar, excluir |
| Assinaturas | `/api/subscriptions` | listar, obter, criar, atualizar |
| Itens | `/api/items` | listar, obter, criar, atualizar, excluir |
| Despesas | `/api/expenses` | listar, obter, criar, atualizar, excluir |
| Equipe | `/api/staffs` | listar, obter, criar, atualizar, excluir |
| Calendário | `/api/calendar` | listar, obter, criar, atualizar, excluir |
| Campos Personalizados | `/api/custom_fields` | listar por tipo relacionado |
| Comuns (lookups) | `/api/common` | países, impostos, moedas, status … |

### Recursos de plataforma e extras da v3

| Recurso | Caminho base | Operações típicas |
| --- | --- | --- |
| **Servidor MCP** | `/api/mcp` | `POST` JSON-RPC 2.0: `initialize`, `tools/list`, `tools/call` |
| **Lote (Batch)** | `/api/batch` | `POST` até 50 operações em uma única requisição |
| **Webhooks** | `/api/webhooks` | listar, obter, criar, atualizar, excluir, `POST /:id/toggle`, `GET /events`, `GET /:id/logs` |
| **Automação (polling)** | `/api/zapier` | `GET /resources`, `GET /poll/:resource`, `GET /test/:resource` |
| **Base de Conhecimento** | `/api/knowledge_base` | listar, obter, criar, atualizar, excluir; `/groups` |
| **Notas** | `/api/notes` | listar por `:rel_type/:rel_id`, obter, criar, atualizar, excluir |

> Os campos exatos de requisição por recurso estão documentados no
> **[guia oficial da API](https://perfexcrm.themesic.com/apiguide/)**. Os trechos aqui cobrem os fluxos mais comuns.

---

## Endpoints de listagem mais inteligentes (v3)

Todo endpoint de listagem aceita parâmetros de consulta opcionais. Adicione-os e você recebe um envelope `{ data, meta }`;
omita-os e você recebe exatamente o array legado.

```bash
# Página 2, 20 por página, apenas id + company, mais recentes primeiro, criados este ano
curl -H "authtoken: YOUR_API_TOKEN" \
  "https://yourdomain.com/api/customers?page=2&per_page=20&fields=id,company&sort=-datecreated&created_after=2026-01-01"
```

| Parâmetro | Exemplo | Efeito |
| --- | --- | --- |
| `page`, `per_page` | `?page=2&per_page=20` | Paginação → `{ data, meta }` |
| `fields` | `?fields=id,company` | Retorna apenas estas colunas |
| `sort` | `?sort=-datecreated,company` | Ordenação (`-` = decrescente) |
| `created_after`, `created_before` | `?created_after=2026-01-01` | Filtro por intervalo de datas |

Veja [`docs/pagination-filtering.md`](docs/pagination-filtering.md) e
[`snippets/curl/list_features.sh`](snippets/curl/list_features.sh).

---

## Integrações populares e casos de uso

A REST API do Perfex CRM é comumente usada para **conectar o Perfex CRM com agentes de IA e aplicações de terceiros**:

- **Assistentes de IA (MCP)** — permita que o Claude, o ChatGPT ou o Cursor leiam e atualizem o seu CRM via `/api/mcp`.
- **Zapier / Make / n8n** — automação no-code por meio de gatilhos de polling prontos (`/api/zapier/*`).
- **Webhooks** — envie eventos do Perfex (nova fatura, novo lead, 124 eventos) para o Slack, Discord ou o seu próprio backend, assinados com HMAC.
- **Google Sheets / Power Automate** — sincronize clientes, faturas ou pagamentos com planilhas e dashboards.
- **Aplicações e portais personalizados** — construa um app mobile ou portal do cliente sobre os seus dados do Perfex.
- **Contabilidade e e-commerce** — sincronize faturas e itens com plataformas externas de faturamento ou de loja.

Todos esses casos são viabilizados pelo módulo
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/).

---

## Autenticação (resumo)

| Método | Como |
| --- | --- |
| Cabeçalho (recomendado) | `Authtoken: YOUR_API_TOKEN` |
| Parâmetro de consulta | `?authtoken=YOUR_API_TOKEN` (prático para testes rápidos / webhooks) |

Os tokens são criados e delimitados (permissões por recurso) em **API → API Management**. Detalhes completos em
[`docs/authentication.md`](docs/authentication.md).

---

## FAQ

**O Perfex CRM tem uma REST API?**
Sim. O módulo [REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)
adiciona uma API HTTP/JSON RESTful completa para clientes, leads, faturas, orçamentos, projetos, tarefas e muito mais,
além de um **servidor MCP**, **webhooks**, **batch** e endpoints de **automação** na v3.

**Posso usar o Perfex CRM com agentes de IA / ChatGPT / Claude?**
Sim — a v3 traz um **servidor MCP** em `POST /api/mcp` que expõe ferramentas de CRM filtradas por permissão para qualquer
cliente Model Context Protocol. Veja [`docs/mcp.md`](docs/mcp.md).

**Como faço a autenticação com a API do Perfex CRM?**
Envie o seu token no cabeçalho HTTP `Authtoken` (ou como um parâmetro de consulta `?authtoken=`). Veja
[`docs/authentication.md`](docs/authentication.md).

**Qual é a URL base da API do Perfex CRM?**
`https://yourdomain.com/api` — por exemplo `https://yourdomain.com/api/customers`.

**Posso conectar o Perfex CRM ao Zapier, Make ou n8n?**
Sim — a v3 tem gatilhos de polling prontos sob `/api/zapier/*`, além de webhooks. Veja
[Integrações populares](#popular-integrations--use-cases) e [`docs/automation.md`](docs/automation.md).

**Existe uma coleção Postman para o Perfex CRM?**
Sim — importe [`postman/perfex-rest-api.postman_collection.json`](postman/perfex-rest-api.postman_collection.json)
e o ambiente incluído, defina o seu `base_url` e `authtoken` e comece a enviar requisições.

**Como crio uma fatura via API do Perfex CRM?**
`POST https://yourdomain.com/api/invoices` com os campos da fatura e um array `items[]` — a v3 calcula automaticamente
`subtotal`/`total`. Veja [`snippets/curl/invoices.sh`](snippets/curl/invoices.sh).

---

## Sobre / Suporte

<img src="assets/perfex-crm-rest-api-icon.png" width="64" alt="Perfex CRM REST API icon">

Este repositório é um **companheiro de exemplos** do módulo comercial:

> **[REST API for Perfex CRM — connect your Perfex CRM with third-party applications](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/)**
> pela [Themesic Interactive](https://themesic.com).

- 🛒 **Comprar / saber mais:** https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
- 📖 **Documentação:** https://perfexcrm.themesic.com/apiguide/
- 💬 **Suporte:** https://themesic.com/support

Contribuições com exemplos adicionais são bem-vindas — veja [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Licença

O código de exemplo neste repositório é distribuído sob a [Licença MIT](LICENSE). "Perfex" é uma marca registrada de
seu respectivo proprietário; o módulo REST API é um produto comercial da Themesic Interactive.
