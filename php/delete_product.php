<?php
// Hapus produk berdasarkan id (aman)
include 'config.php';

if (!isset($_GET['id'])) {
    header('Location: produk.php');
    exit;
}

$id = (int) $_GET['id'];
if ($id <= 0) {
    header('Location: produk.php');
    exit;
}

// Prepared statement untuk keamanan
$stmt = $koneksi->prepare("DELETE FROM products WHERE id = ?");
if ($stmt) {
    $stmt->bind_param('i', $id);
    if ($stmt->execute()) {
        $stmt->close();
        header('Location: produk.php');
        exit;
    } else {
        // Eksekusi gagal
        $stmt->close();
        echo "Error: gagal menghapus produk.";
        exit;
    }
} else {
    // Jika prepared statement gagal, fallback ke query biasa (caution)
    $sql = "DELETE FROM products WHERE id = " . $id;
    if ($koneksi->query($sql) === TRUE) {
        header('Location: produk.php');
        exit;
    } else {
        echo "Error: gagal menghapus produk.";
        exit;
    }
}

?>
