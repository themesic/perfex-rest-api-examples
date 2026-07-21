<?php
/**
 * Perfex CRM REST API — Batch examples (PHP / cURL)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Batch runs up to 50 operations in one request using the same tool names
 * as MCP. It POSTs a JSON body (Content-Type: application/json).
 *
 * No external dependencies — uses the built-in cURL extension.
 */

const BASE  = 'https://yourdomain.com/api';
const TOKEN = 'YOUR_API_TOKEN';

/** JSON request helper (sends a JSON body). */
function perfex_request_json(string $method, string $path, array $payload = []): array
{
    $ch = curl_init(BASE . $path);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST  => $method,
        CURLOPT_HTTPHEADER     => [
            'authtoken: ' . TOKEN,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS     => json_encode($payload),
    ]);
    $body   = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return ['status' => $status, 'data' => json_decode((string) $body, true)];
}

// Run several operations in a single round-trip
print_r(perfex_request_json('POST', '/batch', [
    'operations' => [
        ['tool' => 'customers_create', 'args' => ['company' => 'Acme LTD']],
        ['tool' => 'invoices_get',     'args' => ['id' => 1]],
    ],
]));
