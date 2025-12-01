<?php
// 1. Masukin "kunci" database
include 'config.php';

// 2. Cek dulu, ini beneran data 'POST' dari form?
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 3. Ambil SEMUA data dari form
    // (int) buat maksa jadi angka
    $id = (int)$_POST['id']; 

    // Ambil dan escape teks
    $product_name = $koneksi->real_escape_string($_POST['product_name']);
    $raw_price = isset($_POST['price']) ? $_POST['price'] : '';
    $category = isset($_POST['category']) ? $koneksi->real_escape_string($_POST['category']) : 'custom';
    $status = $koneksi->real_escape_string($_POST['status']);
    
    // 3b. Handle file uploads (optional - gunakan yang lama jika tidak upload baru)
    $upload_dir = '../uploads/';
    
    // Get old image paths
    $image_url = $_POST['old_thumbnail'];
    $gallery_1 = $_POST['old_gallery_1'];
    $gallery_2 = $_POST['old_gallery_2'];
    $gallery_3 = $_POST['old_gallery_3'];
    $gallery_4 = $_POST['old_gallery_4'];
    
    // Process each file upload if new file provided
    $file_fields = [
        'thumbnail' => 'image_url',
        'gallery_1' => 'gallery_1',
        'gallery_2' => 'gallery_2',
        'gallery_3' => 'gallery_3',
        'gallery_4' => 'gallery_4'
    ];
    
    foreach ($file_fields as $field => $var_name) {
        if (isset($_FILES[$field]) && $_FILES[$field]['error'] === UPLOAD_ERR_OK) {
            $tmp_name = $_FILES[$field]['tmp_name'];
            $original_name = basename($_FILES[$field]['name']);
            $extension = strtolower(pathinfo($original_name, PATHINFO_EXTENSION));
            
            // Validate image type
            $allowed_types = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            if (!in_array($extension, $allowed_types)) {
                echo "Error: File type not allowed for $field. Only JPG, PNG, GIF, WEBP allowed.";
                exit;
            }
            
            // Generate unique filename
            $new_filename = uniqid() . '_' . time() . '.' . $extension;
            $destination = $upload_dir . $new_filename;
            
            // Move uploaded file
            if (move_uploaded_file($tmp_name, $destination)) {
                $$var_name = 'uploads/' . $new_filename;
                
                // Delete old file if exists
                $old_field_name = ($field === 'thumbnail') ? 'old_thumbnail' : 'old_' . $field;
                if (isset($_POST[$old_field_name])) {
                    $old_path = '../' . $_POST[$old_field_name];
                    if (file_exists($old_path) && strpos($old_path, 'uploads/') !== false) {
                        @unlink($old_path);
                    }
                }
            }
        }
    }

    // Sanitasi price (sama seperti pada save): hapus pemisah ribuan, ganti koma desimal
    $price_sanitized = str_replace(['.', ' '], ['', ''], $raw_price);
    $price_sanitized = str_replace(',', '.', $price_sanitized);
    if (!is_numeric($price_sanitized)) {
        $price_val = 0.0;
    } else {
        $price_val = (float)$price_sanitized;
    }

    // Periksa batas DECIMAL kolom 'price' di database (jika tersedia)
    $colInfo = $koneksi->query("SHOW COLUMNS FROM products LIKE 'price'");
    if ($colInfo && $colInfo->num_rows) {
        $col = $colInfo->fetch_assoc();
        if (preg_match('/decimal\((\d+),(\d+)\)/i', $col['Type'], $m)) {
            $M = (int)$m[1];
            $D = (int)$m[2];
            $max_allowed = pow(10, $M - $D) - pow(10, -$D);
            if (abs($price_val) > $max_allowed) {
                echo "Error: Nilai price terlalu besar untuk kolom database. Maksimum: " . number_format($max_allowed, $D, '.', ',') . ".\n";
                echo "Ubah tipe kolom 'price' (mis. DECIMAL(" . ($M+2) . ",$D)) atau masukkan nilai yang lebih kecil.";
                exit;
            }
        }
    }

    // 4. Gunakan prepared statement untuk UPDATE
    $stmt = $koneksi->prepare("UPDATE products SET product_name = ?, price = ?, category = ?, status = ?, image_url = ?, gallery_image_1 = ?, gallery_image_2 = ?, gallery_image_3 = ?, gallery_image_4 = ? WHERE id = ?");
    if ($stmt === false) {
        echo "Error: Gagal menyiapkan statement. " . $koneksi->error;
        exit;
    }

    // bind_param: s = string, d = double, i = integer
    $stmt->bind_param('sdsssssssi', $product_name, $price_val, $category, $status, $image_url, $gallery_1, $gallery_2, $gallery_3, $gallery_4, $id);

    if ($stmt->execute()) {
        $stmt->close();
        header("Location: produk.php");
        exit;
    } else {
        echo "Error: Gagal meng-update data. " . $stmt->error;
    }

} else {
    // Kalo ada yang iseng buka file ini langsung dari URL
    echo "Akses tidak diizinkan.";
}
?>