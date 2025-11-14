<?php
// --- Settingan Database ---
$db_host = 'localhost'; // Biasanya 'localhost' kalo pake XAMPP
$db_user = 'root';      // User default XAMPP
$db_pass = '';          // Password default XAMPP (kosong)
$db_name = 'db_adminpanel1'; // Nama database lu (nanti kita bikin)
// --- -------------------- ---

// Coba bikin koneksi
$koneksi = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Kalo koneksi gagal, kasih tau errornya
if ($koneksi->connect_error) {
    die("Koneksi database gagal: " . $koneksi->connect_error);
}

// Kalo berhasil, file ini siap di-include
?>