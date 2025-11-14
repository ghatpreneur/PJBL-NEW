<?php
// 1. Masukin "kunci" database
include 'config.php';

// 2. Cek dulu, ini beneran data 'POST' dari form?
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 3. Ambil SEMUA data dari form
    $product_name = $koneksi->real_escape_string($_POST['product_name']);
    $price = $koneksi->real_escape_string($_POST['price']);
    $status = $koneksi->real_escape_string($_POST['status']);
    $image_url = $koneksi->real_escape_string($_POST['image_url']);

    // 4. Bikin query SQL 'INSERT'
    //    Ini kayak ngomong: "MASUKIN ke 'products',
    //    (di kolom product_name, price, status, image_url)
    //    NILAI-NILAI ('ini', 'itu', 'dst')"
    
    $sql = "INSERT INTO products (product_name, price, status, image_url) 
            VALUES ('$product_name', '$price', '$status', '$image_url')";

    // 5. Eksekusi query-nya
    if ($koneksi->query($sql) === TRUE) {
        // Kalo berhasil, tendang balik ke halaman list produk
        header("Location: produk.php");
        exit;
    } else {
        // Kalo gagal
        echo "Error: Gagal menyimpan data. " . $koneksi->error;
    }

} else {
    // Kalo ada yang iseng buka file ini langsung dari URL
    echo "Akses tidak diizinkan.";
}
?>