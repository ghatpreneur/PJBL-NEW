<?php
// Script untuk menambahkan kolom 'category' ke tabel products
include 'config.php';

// 1. Cek apakah kolom category sudah ada
$checkCol = $koneksi->query("SHOW COLUMNS FROM products LIKE 'category'");

if ($checkCol && $checkCol->num_rows > 0) {
    echo "Kolom 'category' sudah ada di tabel products.\n";
} else {
    // 2. Tambahkan kolom category
    $sql = "ALTER TABLE products ADD COLUMN category VARCHAR(50) NOT NULL DEFAULT 'ready_to_use' AFTER status";
    
    if ($koneksi->query($sql) === TRUE) {
        echo "Kolom 'category' berhasil ditambahkan ke tabel products.\n";
        
        // 3. Update produk yang sudah ada:
        // - Produk dengan status 'sold' -> ready_to_use (karena sudah terjual/ready to use)
        // - Produk dengan status 'in stock' -> custom (anggap default custom)
        $updateSql = "UPDATE products SET category = 'ready_to_use' WHERE status = 'sold'";
        $koneksi->query($updateSql);
        
        echo "Data kategori produk berhasil diinisialisasi.\n";
    } else {
        echo "Error menambahkan kolom: " . $koneksi->error . "\n";
    }
}

$koneksi->close();
?>
