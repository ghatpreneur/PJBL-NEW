<?php
// 1. Masukin "kunci" database
include 'config.php';

// 2. Cek dulu, ini beneran data 'POST' dari form?
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 3. Ambil SEMUA data dari form
    
    // (int) buat maksa jadi angka
    $id = (int)$_POST['id']; 
    
    // mysqli_real_escape_string itu cara PHP ngamanin teks
    // biar gak bisa disisipin SQL Injection
    $product_name = $koneksi->real_escape_string($_POST['product_name']);
    $price = $koneksi->real_escape_string($_POST['price']);
    $status = $koneksi->real_escape_string($_POST['status']);
    $image_url = $koneksi->real_escape_string($_POST['image_url']);

    // 4. Bikin query SQL 'UPDATE'
    $sql = "UPDATE products SET 
                product_name = '$product_name', 
                price = '$price', 
                status = '$status', 
                image_url = '$image_url' 
            WHERE 
                id = $id";

    // 5. Eksekusi query-nya
    if ($koneksi->query($sql) === TRUE) {
        // Kalo berhasil, tendang balik ke halaman list produk
        header("Location: produk.php");
        exit;
    } else {
        // Kalo gagal
        echo "Error: Gagal meng-update data. " . $koneksi->error;
    }

} else {
    // Kalo ada yang iseng buka file ini langsung dari URL
    echo "Akses tidak diizinkan.";
}
?>