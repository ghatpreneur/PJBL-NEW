<?php
// Script untuk menambahkan kolom gambar baru ke tabel products
include 'config.php';

echo "<h2>Update Database - Tambah Kolom Gambar</h2>";

// 1. Cek apakah kolom gallery_image_1 sudah ada
$checkCol = $koneksi->query("SHOW COLUMNS FROM products LIKE 'gallery_image_1'");

if ($checkCol && $checkCol->num_rows > 0) {
    echo "<p style='color: orange;'>Kolom gambar gallery sudah ada di tabel products.</p>";
} else {
    // 2. Tambahkan 4 kolom untuk gallery images
    $alterQueries = [
        "ALTER TABLE products ADD COLUMN gallery_image_1 VARCHAR(500) NULL AFTER image_url",
        "ALTER TABLE products ADD COLUMN gallery_image_2 VARCHAR(500) NULL AFTER gallery_image_1",
        "ALTER TABLE products ADD COLUMN gallery_image_3 VARCHAR(500) NULL AFTER gallery_image_2",
        "ALTER TABLE products ADD COLUMN gallery_image_4 VARCHAR(500) NULL AFTER gallery_image_3"
    ];
    
    $success = true;
    foreach ($alterQueries as $sql) {
        if (!$koneksi->query($sql)) {
            echo "<p style='color: red;'>Error: " . $koneksi->error . "</p>";
            $success = false;
            break;
        }
    }
    
    if ($success) {
        echo "<p style='color: green;'>✓ 4 kolom gallery_image berhasil ditambahkan ke tabel products.</p>";
        
        // 3. Copy image_url ke gallery_image_1 untuk produk existing
        $updateSql = "UPDATE products SET gallery_image_1 = image_url, gallery_image_2 = image_url, gallery_image_3 = image_url, gallery_image_4 = image_url WHERE image_url IS NOT NULL";
        if ($koneksi->query($updateSql)) {
            echo "<p style='color: green;'>✓ Gambar existing berhasil di-copy ke gallery images.</p>";
        }
    }
}

echo "<hr>";
echo "<p><strong>Struktur tabel products sekarang:</strong></p>";
echo "<ul>";
echo "<li><strong>image_url</strong> - Thumbnail utama (untuk catalog)</li>";
echo "<li><strong>gallery_image_1</strong> - Preview gambar 1</li>";
echo "<li><strong>gallery_image_2</strong> - Preview gambar 2</li>";
echo "<li><strong>gallery_image_3</strong> - Preview gambar 3</li>";
echo "<li><strong>gallery_image_4</strong> - Preview gambar 4</li>";
echo "</ul>";

echo "<p><a href='produk.php'>← Kembali ke Product Management</a></p>";

$koneksi->close();
?>
