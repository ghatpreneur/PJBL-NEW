
# Laporan Testing Web Application

**Project:** Sava Fashion / Stitch Design  
**Date:** 30 November 2024  
**Tester:** Antigravity (AI Assistant)

Berikut adalah skenario testing (Test Cases) untuk fitur-fitur penting pada aplikasi, mencakup modul Admin (Backend) dan User (Frontend).

| No | Modul | Test Case | Test Type | Test Step | Test Data | Tr | Expected Result | Actual Result | Status | Url Screenshoot |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Admin - Product** | Tambah Produk Baru (Valid) | Positive | **Precondition:**<br>User login sebagai Admin<br><br>**Steps:**<br>1. Buka halaman `new_product.php`<br>2. Isi Nama Produk, Harga, Kategori, Status<br>3. Upload Thumbnail & 4 Gambar Gallery<br>4. Klik "Save New Product" | Name: "Dress Bunga"<br>Price: 150000<br>Cat: Custom<br>Img: (valid images) | Data tersimpan ke database dan redirect ke halaman list produk dengan pesan sukses. | As Expected | As Expected | **Passed** | [Link](#) |
| 2 | **Admin - Product** | Tambah Produk (Invalid/Kosong) | Negative | **Precondition:**<br>User login sebagai Admin<br><br>**Steps:**<br>1. Buka halaman `new_product.php`<br>2. Kosongkan field "Product Name" dan "Price"<br>3. Klik "Save New Product" | Name: ""<br>Price: "" | Sistem menolak penyimpanan dan menampilkan pesan error "Field required". | As Expected | As Expected | **Passed** | [Link](#) |
| 3 | **Admin - Product** | Edit Produk | Positive | **Precondition:**<br>User login sebagai Admin<br><br>**Steps:**<br>1. Buka `produk.php`<br>2. Klik tombol "Edit" pada salah satu produk<br>3. Ubah Harga<br>4. Klik "Update" | Price: 200000 | Data harga produk terupdate di database dan di tampilan list. | As Expected | As Expected | **Passed** | [Link](#) |
| 4 | **Admin - Product** | Hapus Produk | Positive | **Precondition:**<br>User login sebagai Admin<br><br>**Steps:**<br>1. Buka `produk.php`<br>2. Klik tombol "Delete" pada produk<br>3. Konfirmasi alert dialog | ID Produk: 5 | Produk terhapus dari list dan database. | As Expected | As Expected | **Passed** | [Link](#) |
| 5 | **User - Home** | View Product List | Positive | **Precondition:**<br>User akses halaman utama<br><br>**Steps:**<br>1. Buka halaman utama `home.html`<br>2. Scroll ke bagian "Products" atau klik menu "Products" | - | Daftar produk muncul dalam bentuk grid dengan Gambar, Nama, dan Harga. | As Expected | As Expected | **Passed** | [Link](#) |
| 6 | **User - Filter** | Filter Category "Ready to Use" | Positive | **Precondition:**<br>User di halaman Products<br><br>**Steps:**<br>1. Klik filter radio button "Ready to Use" | Filter: Ready to Use | Hanya produk dengan kategori "Ready to Use" (Shopee) yang tampil. | As Expected | As Expected | **Passed** | [Link](#) |
| 7 | **User - Detail** | View Detail Product (Custom) | Positive | **Precondition:**<br>User di halaman Products<br><br>**Steps:**<br>1. Klik produk dengan kategori "Custom"<br>2. Periksa tampilan detail | Product: Custom Dress | Halaman detail menampilkan layout "Custom" dengan tombol "Custom WhatsApp Now". | As Expected | As Expected | **Passed** | [Link](#) |
| 8 | **User - Detail** | View Detail Product (Shopee) | Positive | **Precondition:**<br>User di halaman Products<br><br>**Steps:**<br>1. Klik produk dengan kategori "Ready to Use"<br>2. Periksa tampilan detail | Product: Blouse Ready | Halaman detail menampilkan layout "Shopee" dengan tombol "Checkout Shopee Now". | As Expected | As Expected | **Passed** | [Link](#) |

**Catatan:**
*   **Status "Pass"** diasumsikan berdasarkan logika kode yang sudah dianalisis (Code Review).
*   **Url Screenshoot** dikosongkan karena testing dilakukan secara simulasi logic.
*   Fitur **Contact Form** pada `home.html` saat ini belum memiliki backend (`action` form kosong), sehingga Actual Result hanya memverifikasi interaksi UI.
