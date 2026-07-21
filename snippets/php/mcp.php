<?php
/**
 * Perfex CRM REST API — MCP server examples (PHP / cURL)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * The MCP endpoint speaks JSON-RPC 2.0, so these calls POST a JSON body
 * (Content-Type: application/json) instead of multipart form-data.
 *
 * No external dependencies — uses the built-in cURL extension.
 */

const BASE  = 'https://yourdomain.com/api';
const TOKEN = 'YOUR_API_TOKEN';

/** JSON-RPC request helper (sends a JSON body). */
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

// initialize — handshake with the MCP server
print_r(perfex_request_json('POST', '/mcp', [
    'jsonrpc' => '2.0',
    'id'      => 1,
    'method'  => 'initialize',
    'params'  => (object) [],
]));

// tools/list — discover the permission-filtered CRM tools
print_r(perfex_request_json('POST', '/mcp', [
    'jsonrpc' => '2.0',
    'id'      => 2,
    'method'  => 'tools/list',
    'params'  => (object) [],
]));

// tools/call — invoke a tool (here: list customers)
print_r(perfex_request_json('POST', '/mcp', [
    'jsonrpc' => '2.0',
    'id'      => 3,
    'method'  => 'tools/call',
    'params'  => [
        'name'      => 'customers_list',
        'arguments' => (object) [],
    ],
]));
