function showPage(pageId, element) {
  // 1. Sembunyikan semua halaman
  //    Cari semua elemen dengan kelas 'page-content'
  var pages = document.querySelectorAll('.page-content');
  pages.forEach(function (page) {
    // Tambahkan kelas 'page-hidden' untuk menyembunyikan
    page.classList.add('page-hidden');
  });

  // 2. Tampilkan halaman yang ditargetkan
  //    Cari elemen berdasarkan ID yang dikirim (misal: 'page-analytics')
  var targetPage = document.getElementById(pageId);
  if (targetPage) {
    // Hapus kelas 'page-hidden' untuk menampilkannya
    targetPage.classList.remove('page-hidden');
  }

  // 3. Perbarui status 'active' di sidebar
  //    Cari semua elemen '.nav-item'
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    // Hapus kelas 'active' dari semuanya
    item.classList.remove('active');
  });

  // 4. Tambahkan 'active' ke .nav-item dari link yang diklik
  //    'element' adalah tag <a> yang diklik
  if (element) {
    element.querySelector('.nav-item').classList.add('active');
  }
}