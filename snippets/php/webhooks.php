<?php
/**
 * Perfex CRM REST API — Webhooks examples (PHP / cURL)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * No external dependencies — uses the built-in cURL extension.
 */

const BASE  = 'https://yourdomain.com/api';
const TOKEN = 'YOUR_API_TOKEN';

/** Minimal request helper. */
function perfex_request(string $method, string $path, array $form = []): array
{
    $ch = curl_init(BASE . $path);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST  => $method,
        CURLOPT_HTTPHEADER     => ['authtoken: ' . TOKEN],
    ]);
    if ($form) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $form); // multipart/form-data
    }
    $body   = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return ['status' => $status, 'data' => json_decode((string) $body, true)];
}

// List all webhooks
print_r(perfex_request('GET', '/webhooks'));

// Get a single webhook
print_r(perfex_request('GET', '/webhooks/3'));

// Create a webhook
// Subscribe to one or more of the 124 available events (see /webhooks/events).
// Requests are delivered async with retries and signed with an HMAC secret.
print_r(perfex_request('POST', '/webhooks', [
    'name'      => 'My integration endpoint',
    'url'       => 'https://hooks.example.com/perfex',
    'events[0]' => 'invoice_created',
    'events[1]' => 'lead_created',
    'secret'    => 'whsec_your_signing_secret',
]));

// Update a webhook (unknown fields are ignored)
print_r(perfex_request('PUT', '/webhooks/3', [
    'url' => 'https://hooks.example.com/perfex/v2',
]));

// Delete a webhook
print_r(perfex_request('DELETE', '/webhooks/3'));

// Toggle a webhook active/inactive
print_r(perfex_request('POST', '/webhooks/3/toggle'));

// Event catalogue — every event you can subscribe to
print_r(perfex_request('GET', '/webhooks/events'));

// Delivery logs for a webhook (attempts, status codes, retries)
print_r(perfex_request('GET', '/webhooks/3/logs'));
