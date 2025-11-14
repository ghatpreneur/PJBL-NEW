<?php
// 1. Masukin file koneksi
include 'config.php';

// 2. Bikin query SQL buat ngambil semua produk
$sql = "SELECT * FROM products ORDER BY id DESC";

// 3. Eksekusi query-nya dan simpen hasilnya di variabel $result
$result = $koneksi->query($sql);
?>

<html>
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%40400%3B500%3B700%3B800&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
  />

  <link rel="stylesheet" href="produk.css" />

  <title>Stitch Design - Product Management</title>
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
      
      <a href="new_product.php" class="btn btn-primary">
        <span>New Product</span>
      </a>
      
    </div> 
    <div class="content">
      <div class="content-header">
        <h1>Product Management</h1>
      </div>

      <div class="table-wrapper">
        <div class="table-container">
          <table class="product-table">
            <thead>
              <tr>
                <th class="th-checkbox"></th>
                <th class="th-image">Image</th>
                <th class="th-name">Product Name</th>
                <th class="th-price">Price</th>
                <th class="th-status">Status</th>
                <th class="th-actions"></th>
              </tr>
            </thead>
            
            <tbody>
              <?php
              // 4. Cek dulu, datanya ada apa enggak?
              if ($result->num_rows > 0) {
                
                // 5. Kalo ada, kita looping datanya satu per satu
                while ($row = $result->fetch_assoc()) {
              ?>

              <tr class="product-row">
                <td class="td-checkbox">
                  <input type="checkbox" name="product_id[]" value="<?php echo $row['id']; ?>" />
                </td>
                
                <td class="td-image">
                  <div class="image-circle" style="background-image: url('<?php echo htmlspecialchars($row['image_url']); ?>');"></div>
                </td>
                
                <td class="td-name">
                  <?php echo htmlspecialchars($row['product_name']); ?>
                </td>
                
                <td class="td-price">
                  $<?php echo number_format($row['price'], 2, '.', ','); ?>
                </td>
                
                <td class="td-status">
                  <button class="btn btn-status">
                    <span><?php echo htmlspecialchars($row['status']); ?></span>
                  </button>
                </td>
                
                <td class="td-actions">
                  <a href="edit_product.php?id=<?php echo $row['id']; ?>">Edit</a>,
                  <a href="delete_product.php?id=<?php echo $row['id']; ?>" onclick="return confirm('Yakin mau hapus produk ini?');">Delete</a>
                </td>
              </tr>

              <?php
                  } // Tutup while
                } else {
                  // Kalo datanya ternyata kosong
              ?>
              
              <tr>
                <td colspan="6" style="text-align: center; padding: 20px;">
                  Belum ada data produk.
                </td>
              </tr>
              
              <?php
                } // Tutup if
              ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</body>
</html>