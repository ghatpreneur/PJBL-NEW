<?php
// Gak perlu logic PHP di atas sini.
// File ini murni buat nampilin form HTML.
?>

<html>
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%4B400%3B500%3B700%3B800&family=Noto+Sans%3Awght%4B400%3B500%3B700%3B900"
  />
  <link rel="stylesheet" href="produk.css" />
  <title>New Product</title>
</head>

<body>
  <div class="main-container">
    ssssssssssssssss
    <div class="sidebar">
      <div class="sidebar-top">
        <h1>Admin Panel</h1>
        <div class="menu-items">
          <div class="menu-item active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M223.68... (path SVG)"></path></svg>
            <p>Product Management</p>
          </div>
          <div class="menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25... (path SVG)"></path></svg>
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
        <form action="action_save.php" method="POST">
          
          <div class="form-group">
            <label for="product_name">Product Name</label>
            <input type="text" name="product_name" id="product_name" value="" />
          </div>

          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" name="price" id="price" value="" />
          </div>

          <div class="form-group">
            <label for="status">Status</label>
            <input type="text" name="status" id="status" value="" />
          </div>

          <div class="form-group">
            <label for="image_url">Image URL</label>
            <input type="text" name="image_url" id="image_url" value="" />
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