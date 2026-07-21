<?php
/**
 * Perfex CRM REST API — Knowledge Base examples (PHP / cURL)
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

// List all articles
print_r(perfex_request('GET', '/knowledge_base'));

// List articles in a single group
print_r(perfex_request('GET', '/knowledge_base?group_id=1'));

// Get a single article
print_r(perfex_request('GET', '/knowledge_base/12'));

// Create an article
print_r(perfex_request('POST', '/knowledge_base', [
    'subject'      => 'How to reset your password',
    'description'  => '<p>Open Settings &gt; Security and click Reset.</p>',
    'articlegroup' => 1,
    'active'       => 1,
]));

// Update an article (unknown fields are ignored)
print_r(perfex_request('PUT', '/knowledge_base/12', [
    'active' => 0,
]));

// Delete an article
print_r(perfex_request('DELETE', '/knowledge_base/12'));

// List article groups
print_r(perfex_request('GET', '/knowledge_base/groups'));

// Create an article group
print_r(perfex_request('POST', '/knowledge_base/groups', [
    'name' => 'Billing',
]));
