<?php
/**
 * Perfex CRM REST API — Invoices examples (PHP / cURL)
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

// List all invoices
print_r(perfex_request('GET', '/invoices'));

// Get a single invoice
print_r(perfex_request('GET', '/invoices/1'));

// Create an invoice
// v3 auto-calculates subtotal/total from the items[] array — just send line items.
print_r(perfex_request('POST', '/invoices', [
    'clientid'              => 1,
    'number'               => 123,
    'date'                 => '2026-07-21',
    'duedate'              => '2026-08-20',
    'currency'             => 1,
    'items[0][description]' => 'Consulting services',
    'items[0][qty]'        => 2,
    'items[0][rate]'       => 150,
]));

// Update an invoice (unknown fields are ignored)
print_r(perfex_request('PUT', '/invoices/1', [
    'duedate' => '2026-09-01',
]));

// Delete an invoice
print_r(perfex_request('DELETE', '/invoices/1'));
