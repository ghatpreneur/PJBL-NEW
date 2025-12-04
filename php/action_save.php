<?php
// 1. Masukin "kunci" database
include 'config.php';

// 2. Cek dulu, ini beneran data 'POST' dari form?
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 3. Ambil SEMUA data dari form
    $product_name = $koneksi->real_escape_string($_POST['product_name']);
    $raw_price = isset($_POST['price']) ? $_POST['price'] : '';
    $category = isset($_POST['category']) ? $koneksi->real_escape_string($_POST['category']) : 'custom';
    $status = $koneksi->real_escape_string($_POST['status']);
    
   $upload_dir = __DIR__ . '/../uploads/';

    // Cek apakah folder uploads di dalam PJBL_NEW sudah ada?
    if (!file_exists($upload_dir)) {
        // Jika belum ada, paksa buat (tapi lebih baik buat manual di langkah 1)
        mkdir($upload_dir, 0777, true);
    }

    $uploaded_files = [];
    $file_fields = ['thumbnail', 'gallery_1', 'gallery_2', 'gallery_3', 'gallery_4'];
    // ... lanjut ke kode foreach ...
    
    foreach ($file_fields as $field) {
        if (isset($_FILES[$field]) && $_FILES[$field]['error'] === UPLOAD_ERR_OK) {
            $tmp_name = $_FILES[$field]['tmp_name'];
            $original_name = basename($_FILES[$field]['name']);
            $extension = strtolower(pathinfo($original_name, PATHINFO_EXTENSION));
            
            // Generate unique filename
            $new_filename = uniqid() . '_' . time() . '.' . $extension;
            $destination = $upload_dir . $new_filename;
            
            // Validate image type
            $allowed_types = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            if (!in_array($extension, $allowed_types)) {
                echo "Error: File type not allowed for $field. Only JPG, PNG, GIF, WEBP allowed.";
                exit;
            }
            
            // Move uploaded file
            if (move_uploaded_file($tmp_name, $destination)) {
                $uploaded_files[$field] = 'uploads/' . $new_filename;
            } else {
                echo "Error: Failed to upload $field.";
                exit;
            }
        } else {
            echo "Error: $field is required.";
            exit;
        }
    }
    
    $image_url = $uploaded_files['thumbnail'];
    $gallery_1 = $uploaded_files['gallery_1'];
    $gallery_2 = $uploaded_files['gallery_2'];
    $gallery_3 = $uploaded_files['gallery_3'];
    $gallery_4 = $uploaded_files['gallery_4'];

    // 3a. Sanitasi price:
    // - Hapus pemisah ribuan seperti titik or spasi
    // - Ganti koma desimal menjadi titik
    // - Pastikan nilai numeric
    $price_sanitized = str_replace(['.', ' '], ['', ''], $raw_price);
    $price_sanitized = str_replace(',', '.', $price_sanitized);
    if (!is_numeric($price_sanitized)) {
        $price_val = 0.0;
    } else {
        $price_val = (float)$price_sanitized;
    }

    // 3b. Periksa batas DECIMAL kolom 'price' di database (jika tersedia)
    $colInfo = $koneksi->query("SHOW COLUMNS FROM products LIKE 'price'");
    if ($colInfo && $colInfo->num_rows) {
        $col = $colInfo->fetch_assoc();
        if (preg_match('/decimal\((\d+),(\d+)\)/i', $col['Type'], $m)) {
            $M = (int)$m[1];
            $D = (int)$m[2];
            $max_allowed = pow(10, $M - $D) - pow(10, -$D);
            if (abs($price_val) > $max_allowed) {
                echo "Error: Nilai price terlalu besar untuk kolom database. Maksimum: " . number_format($max_allowed, $D, '.', ',') . ".\n";
                echo "Ubah tipe kolom 'price' (mis. DECIMAL($M+2,$D)) atau masukkan nilai yang lebih kecil.";
                exit;
            }
        }
    }

    // 4. Gunakan prepared statement untuk INSERT (lebih aman)
    $stmt = $koneksi->prepare("INSERT INTO products (product_name, price, category, status, image_url, gallery_image_1, gallery_image_2, gallery_image_3, gallery_image_4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        echo "Error: Gagal menyiapkan statement. " . $koneksi->error;
        exit;
    }

    // bind_param: s = string, d = double
    $stmt->bind_param('sdsssssss', $product_name, $price_val, $category, $status, $image_url, $gallery_1, $gallery_2, $gallery_3, $gallery_4);

    if ($stmt->execute()) {
        $stmt->close();
        header("Location: produk.php");
        exit;
    } else {
        echo "Error: Gagal menyimpan data. " . $stmt->error;
    }

} else {
    // Kalo ada yang iseng buka file ini langsung dari URL
    echo "Akses tidak diizinkan.";
}
?>