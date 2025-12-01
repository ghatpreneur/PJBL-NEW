<?php
// Gak perlu logic PHP di atas sini.
// File ini murni buat nampilin form HTML.
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900" />
  <link rel="stylesheet" href="produk.css" />
  <title>New Product</title>
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
        <h1>Add New Product</h1>
      </div>

      <div class="form-wrapper">
        <form action="action_save.php" method="POST" enctype="multipart/form-data">
          
          <div class="form-group">
            <label for="product_name">Product Name</label>
            <input type="text" name="product_name" id="product_name" value="" required />
          </div>

          <div class="form-group">
            <label for="price">Price (Rp)</label>
            <input type="text" name="price" id="price" value="" placeholder="Contoh: 200.000" required />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <select name="category" id="category" required>
              <option value="custom" selected>Custom</option>
              <option value="ready_to_use">Ready to Use</option>
            </select>
          </div>

          <div class="form-group">
            <label for="status">Status</label>
            <select name="status" id="status">
              <option value="in stock" selected>In Stock</option>
              <option value="sold">Sold</option>
            </select>
          </div>

          <div class="form-group">
            <label for="thumbnail">Thumbnail Image (Main)</label>
            <input type="file" name="thumbnail" id="thumbnail" accept="image/*" required />
            <small style="color: #7d6c68;">Gambar utama untuk catalog</small>
          </div>

          <div class="form-group">
            <label>Gallery Images (4 gambar preview)</label>
            <input type="file" name="gallery_1" accept="image/*" required />
            <small style="color: #7d6c68; display: block; margin-bottom: 8px;">Preview gambar 1</small>
            
            <input type="file" name="gallery_2" accept="image/*" required />
            <small style="color: #7d6c68; display: block; margin-bottom: 8px;">Preview gambar 2</small>
            
            <input type="file" name="gallery_3" accept="image/*" required />
            <small style="color: #7d6c68; display: block; margin-bottom: 8px;">Preview gambar 3</small>
            
            <input type="file" name="gallery_4" accept="image/*" required />
            <small style="color: #7d6c68; display: block; margin-bottom: 8px;">Preview gambar 4</small>
          </div>

          <button type="submit" class="btn btn-primary">
            Save New Product
          </button>

        </form>
      </div>
    </div>
  </div>
</body>
</html>
