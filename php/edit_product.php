<?php
// 1. Masukin "kunci" database
include 'config.php';

// 2. Variabel buat nyimpen data
$product_name = "";
$price = "";
$status = "";
$image_url = "";
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
        $status = $row['status'];
        $image_url = $row['image_url'];
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

<html>
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%4B400%3B500%3B700%3B800&family=Noto+Sans%3Awght%4B400%3B500%3B700%3B900"
  />
  
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
        <form action="action_update.php" method="POST">
          
          <input type="hidden" name="id" value="<?php echo $product_id; ?>" />

          <div class="form-group">
            <label for="product_name">Product Name</label>
            <input 
              type="text" 
              name="product_name" 
              id="product_name" 
              value="<?php echo htmlspecialchars($product_name); ?>"
            />
          </div>

          <div class="form-group">
            <label for="price">Price</label>
            <input 
              type="text" 
              name="price" 
              id="price" 
              value="<?php echo htmlspecialchars($price); ?>"
            />
          </div>

          <div class="form-group">
            <label for="status">Status</label>
            <input 
              type="text" 
              name="status" 
              id="status" 
              value="<?php echo htmlspecialchars($status); ?>"
            />
          </div>

          <div class="form-group">
            <label for="image_url">Image URL</label>
            <input 
              type="text" 
              name="image_url" 
              id="image_url" 
              value="<?php echo htmlspecialchars($image_url); ?>"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Update Product
          </button>

        </form>
      </div>
    </div>
  </div>
</body>
</html>