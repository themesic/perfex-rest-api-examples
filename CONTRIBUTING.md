# Contributing

Thanks for helping improve the **Perfex CRM REST API examples**! These accompany the
[REST API for Perfex CRM](https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/) module.

## How to contribute

- Add a snippet under `snippets/<language>/`.
- Keep examples self-contained and runnable; use `YOUR_API_TOKEN` and `https://yourdomain.com/api`
  as placeholders.
- **Never commit a real `authtoken`** or any customer data.
- For new Postman requests, export and merge into `postman/perfex-rest-api.postman_collection.json`.

## Style

- One operation per snippet, with a short comment header describing the call.
- Prefer standard libraries (`curl`, `requests`, `fetch`) plus one popular client (Guzzle / axios).

By contributing you agree your contributions are licensed under the repository's [MIT License](LICENSE).
