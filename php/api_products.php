<?php
header('Content-Type: application/json');

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'error' => 'Method Not Allowed'
    ]);
    exit;
}

$sql = "SELECT id, product_name, price, category, status, image_url, gallery_image_1, gallery_image_2, gallery_image_3, gallery_image_4 FROM products ORDER BY id DESC";
$result = $koneksi->query($sql);

if (!$result) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Gagal mengambil data produk.'
    ]);
    exit;
}

$products = [];

while ($row = $result->fetch_assoc()) {
    $products[] = [
        'id' => (int)$row['id'],
        'product_name' => $row['product_name'],
        'price' => $row['price'] !== null ? (float)$row['price'] : 0,
        'category' => isset($row['category']) ? $row['category'] : 'custom',
        'status' => $row['status'],
        'image_url' => $row['image_url'],
        'gallery_image_1' => $row['gallery_image_1'] ?? $row['image_url'],
        'gallery_image_2' => $row['gallery_image_2'] ?? $row['image_url'],
        'gallery_image_3' => $row['gallery_image_3'] ?? $row['image_url'],
        'gallery_image_4' => $row['gallery_image_4'] ?? $row['image_url'],
    ];
}

echo json_encode($products);
