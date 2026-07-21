<?php
/**
 * Perfex CRM REST API — Notes examples (PHP / cURL)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Notes are polymorphic: attach them to a related entity via rel_type + rel_id.
 * Valid rel_type values include: customer, lead, invoice, task, ticket.
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

// List notes for a related entity — /notes/{rel_type}/{rel_id}
// rel_type: customer, lead, invoice, task, ticket
print_r(perfex_request('GET', '/notes/customer/1'));

// Get a single note
print_r(perfex_request('GET', '/notes/5'));

// Create a note attached to customer #1
print_r(perfex_request('POST', '/notes', [
    'rel_type'    => 'customer',
    'rel_id'      => 1,
    'description' => 'Called the client to confirm the renewal.',
]));

// Update a note (unknown fields are ignored)
print_r(perfex_request('PUT', '/notes/5', [
    'description' => 'Client confirmed renewal for 12 months.',
]));

// Delete a note
print_r(perfex_request('DELETE', '/notes/5'));
