<?php
/**
 * Perfex CRM REST API — Leads examples (PHP / cURL)
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

// List all leads
print_r(perfex_request('GET', '/leads'));

// Get a single lead
print_r(perfex_request('GET', '/leads/1'));

// Create a lead
print_r(perfex_request('POST', '/leads', [
    'name'        => 'Jane Doe',
    'email'       => 'jane@example.com',
    'source'      => 1,
    'status'      => 1,
    'assigned'    => 1,
    'phonenumber' => '+44 210 7298299',
    'company'     => 'Acme LTD',
    'title'       => 'Procurement Manager',
]));

// Update a lead (unknown fields are ignored)
print_r(perfex_request('PUT', '/leads/1', [
    'status' => 2,
]));

// Delete a lead
print_r(perfex_request('DELETE', '/leads/1'));
