<?php
/**
 * Perfex CRM REST API — Smarter list endpoints (PHP / cURL)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Every list endpoint accepts optional query parameters. Add them and you get a
 * { data, meta } envelope; omit them and you get the exact legacy array.
 * Demonstrated here on /customers, but the same applies to any list endpoint.
 *
 * No external dependencies — uses the built-in cURL extension.
 */

const BASE  = 'https://yourdomain.com/api';
const TOKEN = 'YOUR_API_TOKEN';

/**
 * Minimal request helper.
 *
 * @param array $headers Extra request headers (e.g. an Idempotency-Key).
 */
function perfex_request(string $method, string $path, array $form = [], array $headers = []): array
{
    $ch = curl_init(BASE . $path);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST  => $method,
        CURLOPT_HTTPHEADER     => array_merge(['authtoken: ' . TOKEN], $headers),
    ]);
    if ($form) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $form); // multipart/form-data
    }
    $body   = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Rate-limit budget is reported on every response via the headers:
    //   X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
    return ['status' => $status, 'data' => json_decode((string) $body, true)];
}

// Pagination — page 2, 20 per page (returns a { data, meta } envelope)
print_r(perfex_request('GET', '/customers?page=2&per_page=20'));

// Field selection — return only id + company
print_r(perfex_request('GET', '/customers?fields=id,company'));

// Sorting — newest first, then company A->Z ( - = descending)
print_r(perfex_request('GET', '/customers?sort=-datecreated,company'));

// Date-range filter — created within 2026
print_r(perfex_request('GET', '/customers?created_after=2026-01-01&created_before=2026-12-31'));

// Everything combined in one request
print_r(perfex_request(
    'GET',
    '/customers?page=2&per_page=20&fields=id,company&sort=-datecreated,company&created_after=2026-01-01&created_before=2026-12-31'
));

// Safe writes — send an Idempotency-Key so a retried create is not duplicated
print_r(perfex_request('POST', '/customers', [
    'company' => 'Acme LTD',
    'city'    => 'London',
    'country' => 235,
], [
    'Idempotency-Key: 5f3e9c1a-2b7d-4e6f-9a1c-8d2f0b4e6a1c',
]));
