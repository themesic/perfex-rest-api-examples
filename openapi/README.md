# OpenAPI 3.0 specification

The REST API module describes its **entire surface - 74 paths, 144 operations -**
as a machine-readable OpenAPI 3.0 document, generated live by the module itself
so it always matches the installed version.

## Get it from your own installation

```bash
curl -H "authtoken: YOUR_API_TOKEN" \
  https://your-perfex-url/api/openapi \
  -o perfex-rest-api.openapi.json
```

The document reports the module version it was generated from, so you can tell
at a glance whether a spec file is current.

## What to do with it

- **Postman / Insomnia** - import the file and every endpoint, parameter and
  response shape appears ready to call. (A hand-maintained Postman collection
  also lives in [`../postman/`](../postman/).)
- **Stoplight / Redoc / Swagger UI** - render browsable reference docs.
- **Code generation** - feed it to `openapi-generator` for typed clients in
  PHP, Python, TypeScript and more.
- **AI agents** - pair it with the module's MCP server (`POST /api/mcp`,
  148 permission-filtered tools) or hand the spec to any tool-calling model.

## Reference copy

[`perfex-rest-api.openapi.json`](perfex-rest-api.openapi.json) in this folder
was exported from module **v3.0.3** with the command above. The `servers` URL
is a placeholder - point it at your own installation. Always prefer
regenerating from your own install after updating the module, so the spec
matches your version exactly.
