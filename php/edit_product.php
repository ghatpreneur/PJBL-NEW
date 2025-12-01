<?php
// 1. Masukin "kunci" database
include 'config.php';

// 2. Variabel buat nyimpen data
$product_name = "";
$price = "";
$category = "";
$status = "";
$image_url = "";
$gallery_1 = "";
$gallery_2 = "";
$gallery_3 = "";
$gallery_4 = "";
$product_id = 0; 

// 3. Cek: Beneran ada 'id' yang dilempar?
if (isset($_GET['id'])) {
    
    // 4. Ambil ID-nya
    $id = (int)$_GET['id'];

    // 5. Bikin query buat NGAMBIL SATU DATA
    $sql = "SELECT * FROM products WHERE id = $id";
    $result = $koneksi->query($sql);

    // 6. Cek kalo datanya ketemu
    if ($result->num_rows > 0) {
        
        // 7. Ambil datanya
        $row = $result->fetch_assoc();
        $product_name = $row['product_name'];
        $price = $row['price'];
        $category = isset($row['category']) ? $row['category'] : 'custom';
        $status = $row['status'];
        $image_url = $row['image_url'];
        $gallery_1 = $row['gallery_image_1'] ?? '';
        $gallery_2 = $row['gallery_image_2'] ?? '';
        $gallery_3 = $row['gallery_image_3'] ?? '';
        $gallery_4 = $row['gallery_image_4'] ?? '';
        $product_id = $row['id']; 

    } else {
        echo "Data produk tidak ditemukan.";
        exit; 
    }
} else {
    echo "ID produk tidak valid.";
    exit; 
}
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900" />
  <link rel="stylesheet" href="produk.css" />
  <title>Edit Product</title>
</head>

<body>
  <div class="main-container">
    <div class="sidebar">
      <div class="sidebar-top">
        <h1>Admin Panel</h1>
        <div class="menu-items">
          <div class="menu-item active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path></svg>
            <p>Product Management</p>
          </div>
          <div class="menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
            <p>Customer Analytics</p>
          </div>
        </div>
      </div>
      <a href="produk.php" class="btn btn-secondary">
        <span>Kembali ke Produk</span>
      </a>
    </div>

    <div class="content">
      <div class="content-header">
        <h1>Edit Product: <?php echo htmlspecialchars($product_name); ?></h1>
      </div>

      <div class="form-wrapper">
        <form action="action_update.php" method="POST" enctype="multipart/form-data">
          <input type="hidden" name="id" value="<?php echo $product_id; ?>" />
          <input type="hidden" name="old_thumbnail" value="<?php echo htmlspecialchars($image_url); ?>" />
          <input type="hidden" name="old_gallery_1" value="<?php echo htmlspecialchars($gallery_1); ?>" />
          <input type="hidden" name="old_gallery_2" value="<?php echo htmlspecialchars($gallery_2); ?>" />
          <input type="hidden" name="old_gallery_3" value="<?php echo htmlspecialchars($gallery_3); ?>" />
          <input type="hidden" name="old_gallery_4" value="<?php echo htmlspecialchars($gallery_4); ?>" />

          <div class="form-group">
            <label for="product_name">Product Name</label>
            <input type="text" name="product_name" id="product_name" value="<?php echo htmlspecialchars($product_name); ?>" required />
          </div>

          <div class="form-group">
            <label for="price">Price (Rp)</label>
            <input type="text" name="price" id="price" value="<?php echo number_format($price, 0, ',', '.'); ?>" placeholder="Contoh: 200.000" required />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <select name="category" id="category" required>
              <option value="custom" <?php echo ($category === 'custom') ? 'selected' : ''; ?>>Custom</option>
              <option value="ready_to_use" <?php echo ($category === 'ready_to_use') ? 'selected' : ''; ?>>Ready to Use</option>
            </select>
          </div>

          <div class="form-group">
            <label for="status">Status</label>
            <select name="status" id="status">
              <option value="in stock" <?php echo ($status === 'in stock') ? 'selected' : ''; ?>>In Stock</option>
              <option value="sold" <?php echo ($status === 'sold') ? 'selected' : ''; ?>>Sold</option>
            </select>
          </div>

          <div class="form-group">
            <label for="thumbnail">Thumbnail Image (Main)</label>
            <?php if ($image_url): ?>
              <div style="margin-bottom: 8px;">
                <img src="../<?php echo htmlspecialchars($image_url); ?>" alt="Current thumbnail" style="max-width: 150px; border-radius: 8px; border: 2px solid #e6d1d7;" />
                <p style="color: #7d6c68; font-size: 12px; margin: 4px 0;">Current image</p>
              </div>
            <?php endif; ?>
            <input type="file" name="thumbnail" id="thumbnail" accept="image/*" />
            <small style="color: #7d6c68;">Kosongkan jika tidak ingin mengubah gambar</small>
          </div>

          <div class="form-group">
            <label>Gallery Images (4 gambar preview)</label>
            
            <?php if ($gallery_1): ?>
              <div style="margin-bottom: 8px;">
                <img src="../<?php echo htmlspecialchars($gallery_1); ?>" alt="Gallery 1" style="max-width: 100px; border-radius: 8px; border: 2px solid #e6d1d7;" />
              </div>
            <?php endif; ?>
            <input type="file" name="gallery_1" accept="image/*" />
            <small style="color: #7d6c68; display: block; margin-bottom: 12px;">Preview gambar 1 (kosongkan jika tidak ingin ubah)</small>
            
            <?php if ($gallery_2): ?>
              <div style="margin-bottom: 8px;">
                <img src="../<?php echo htmlspecialchars($gallery_2); ?>" alt="Gallery 2" style="max-width: 100px; border-radius: 8px; border: 2px solid #e6d1d7;" />
              </div>
            <?php endif; ?>
            <input type="file" name="gallery_2" accept="image/*" />
            <small style="color: #7d6c68; display: block; margin-bottom: 12px;">Preview gambar 2 (kosongkan jika tidak ingin ubah)</small>
            
            <?php if ($gallery_3): ?>
              <div style="margin-bottom: 8px;">
                <img src="../<?php echo htmlspecialchars($gallery_3); ?>" alt="Gallery 3" style="max-width: 100px; border-radius: 8px; border: 2px solid #e6d1d7;" />
              </div>
            <?php endif; ?>
            <input type="file" name="gallery_3" accept="image/*" />
            <small style="color: #7d6c68; display: block; margin-bottom: 12px;">Preview gambar 3 (kosongkan jika tidak ingin ubah)</small>
            
            <?php if ($gallery_4): ?>
              <div style="margin-bottom: 8px;">
                <img src="../<?php echo htmlspecialchars($gallery_4); ?>" alt="Gallery 4" style="max-width: 100px; border-radius: 8px; border: 2px solid #e6d1d7;" />
              </div>
            <?php endif; ?>
            <input type="file" name="gallery_4" accept="image/*" />
            <small style="color: #7d6c68; display: block; margin-bottom: 12px;">Preview gambar 4 (kosongkan jika tidak ingin ubah)</small>
          </div>

          <button type="submit" class="btn btn-primary">Update Product</button>
        </form>
      </div>
    </div>
  </div>
</body>
</html>