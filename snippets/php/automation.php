<?php
/**
 * Perfex CRM REST API — Automation / polling examples (PHP / cURL)
 * Module: https://themesic.com/product/rest-api-module-for-perfex-crm-connect-your-perfex-crm-with-third-party-applications/
 *
 * Ready-made polling triggers for Zapier, Make.com, n8n and any polling tool.
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

// Discover which resources can be polled
print_r(perfex_request('GET', '/zapier/resources'));

// Poll a resource for records created/updated since a Unix timestamp.
// Available resources: customers, invoices, leads, tasks, tickets.
print_r(perfex_request('GET', '/zapier/poll/customers?since=1705312200&limit=50'));

// Test hook — returns a small sample payload for building a Zap/scenario
print_r(perfex_request('GET', '/zapier/test/customers'));
