# Setup Category Filter - Instruksi

## Perubahan yang Sudah Dilakukan

Saya telah memperbaiki sistem katalog produk dengan fitur-fitur berikut:

### 1. **Database Schema**
- Menambahkan kolom `category` di tabel `products` 
- Nilai: `'custom'` atau `'ready_to_use'`
- Default: `'ready_to_use'`

### 2. **Admin Panel (PHP)**
- ✅ Form tambah produk (`new_product.php`) - ada dropdown pilih kategori
- ✅ Form edit produk (`edit_product.php`) - bisa edit kategori
- ✅ Halaman daftar produk (`produk.php`) - tampilkan kolom kategori
- ✅ API produk (`api_products.php`) - return data kategori
- ✅ Action save & update - simpan kategori ke database

### 3. **Frontend (JavaScript)**
- ✅ Filter produk di halaman web sesuai kategori
- ✅ UI tetap konsisten dengan design default
- ✅ Mapping kategori dari database ke tampilan web

---

## Langkah Setup (Jalankan Ini!)

### **STEP 0: Cek Setup XAMPP Document Root**

Pastikan folder `test` ada di document root XAMPP. Ada 2 cara:

**Cara 1: Pindah folder ke htdocs (Recommended)**
```
C:\xampp\htdocs\test\
```
Lalu akses via: `http://localhost/test/`

**Cara 2: Setup Virtual Host (Advanced)**
- Edit `C:\xampp\apache\conf\extra\httpd-vhosts.conf`
- Tambahkan virtual host untuk `D:\test`

### **STEP 1: Nyalakan XAMPP/MySQL Server**
1. Buka XAMPP Control Panel
2. Start **Apache** dan **MySQL**
3. Pastikan keduanya menyala (hijau)

### **STEP 2: Jalankan Script untuk Update Database**

Buka browser dan akses URL berikut (sesuaikan dengan setup Anda):

**Jika di htdocs:**
```
http://localhost/test/php/add_category_column.php
```

**Jika pakai Virtual Host:**
```
http://localhost/php/add_category_column.php
```

**Atau via command line:**
```bash
php D:\test\php\add_category_column.php
```

Script ini akan:
- Menambahkan kolom `category` ke tabel `products`
- Inisialisasi data kategori produk yang sudah ada

### **STEP 3: Test Fitur Baru**

#### A. Test Admin Panel

**Jika di htdocs:**
1. Buka: `http://localhost/test/php/produk.php`
2. Klik **"Create Product"**
3. Pilih kategori: **Custom** atau **Ready to Use**
4. Simpan produk
5. Lihat di daftar produk - sekarang ada kolom **Category**

**Jika pakai Virtual Host:**
1. Buka: `http://localhost/php/produk.php`
2. (Langkah sama seperti di atas)

#### B. Test Filter di Website

**Jika di htdocs:**
1. Buka website Anda: `http://localhost/test/home.html`
2. Klik menu **"Products"**
3. Gunakan filter radio button:
   - **All Products** - tampilkan semua
   - **Ready to Use** - tampilkan produk ready to use saja
   - **Custom** - tampilkan produk custom saja

**Jika pakai Virtual Host:**
1. Buka: `http://localhost/home.html`
2. (Langkah sama seperti di atas)

---

## Mapping Kategori

| Database Value  | Label Admin  | Filter Type Web | Style Detail Page |
|----------------|--------------|-----------------|-------------------|
| `custom`       | Custom       | custom          | Custom (Stone)    |
| `ready_to_use` | Ready to Use | shopee          | Shopee (Pink)     |

---

## Struktur File yang Diubah

```
D:\test\
├── php/
│   ├── produk.php              ✅ Tampilan admin ditambah kolom Category
│   ├── new_product.php         ✅ Form tambah kategori
│   ├── edit_product.php        ✅ Form edit kategori
│   ├── action_save.php         ✅ Simpan kategori
│   ├── action_update.php       ✅ Update kategori
│   ├── api_products.php        ✅ Return kategori ke frontend
│   └── add_category_column.php ✨ NEW - Script setup database
├── home.js                     ✅ Filter produk by kategori
└── SETUP_CATEGORY.md           ✨ NEW - Dokumentasi ini
```

---

## Troubleshooting

### Error: "404 Not Found" saat buka admin panel
**Penyebab**: Folder tidak ada di document root XAMPP

**Solusi**: 
1. Pindahkan folder `test` ke `C:\xampp\htdocs\`
2. Akses via: `http://localhost/test/php/produk.php`

**Atau** setup Virtual Host (lihat dokumentasi XAMPP)

### Error: "No connection could be made"
**Penyebab**: MySQL belum running

**Solusi**: 
1. Buka XAMPP Control Panel
2. Start MySQL
3. Tunggu sampai status hijau

### CSS tidak muncul / tampilan berantakan
**Penyebab**: Path CSS salah

**Solusi**: Sudah diperbaiki! File `produk.php`, `new_product.php`, dan `edit_product.php` sekarang menggunakan relative path.

### Kolom category tidak muncul di admin panel
**Penyebab**: Script database belum dijalankan

**Solusi**: Jalankan `add_category_column.php` dulu (lihat STEP 2)

### Filter tidak bekerja
**Penyebab**: Cache browser

**Solusi**: 
1. Clear cache browser (Ctrl+Shift+R)
2. Hard reload (Ctrl+F5)
3. Atau buka di Incognito/Private mode

### Produk lama tidak punya kategori
**Penyebab**: Produk dibuat sebelum ada fitur kategori

**Solusi**: Edit produk lama via admin panel, pilih kategorinya

---

## Selesai! 🎉

Sekarang sistem Anda sudah punya:
- ✅ Filter kategori Custom / Ready to Use
- ✅ UI konsisten dengan design default
- ✅ Admin panel untuk manage kategori produk
