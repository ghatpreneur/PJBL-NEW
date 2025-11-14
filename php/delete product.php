<?php
// 1. Masukin "kunci" database kita
include 'config.php';

// 2. Cek dulu, beneran ada 'id' yang dilempar gak?
//    Ini penting biar gak error kalo file ini dibuka paksa
if (isset($_GET['id'])) {
    
    // 3. Ambil ID-nya. 
    //    (int) itu buat maksa biar jadi angka. Biar aman dari hacker.
    $id = (int)$_GET['id'];

    // 4. Bikin query SQL buat ngehapus
    $sql = "DELETE FROM products WHERE id = $id";

    // 5. Eksekusi query-nya
    if ($koneksi->query($sql) === TRUE) {
        // Kalo berhasil, gak usah ngomong apa-apa
        // Langsung "tendang" user-nya balik ke halaman produk
        header("Location: produk.php");
        exit; // Wajib ada exit() abis header()
        
    } else {
        // Kalo gagal (misal query-nya salah tulis)
        echo "Error: Gagal menghapus data. " . $koneksi->error;
    }

} else {
    // Kalo ada yang buka file ini tanpa ngasih ID
    // Tendang aja balik
    header("Location: produk.php");
    exit;
}
?>