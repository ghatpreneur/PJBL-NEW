// Menunggu hingga seluruh dokumen HTML dimuat
document.addEventListener("DOMContentLoaded", () => {
  // ===================================
  // 1. STATE & DATA APLIKASI
  // ===================================

  // State untuk melacak halaman & data
  const state = {
    currentPage: "home", // Halaman awal
    selectedProduct: null, // Untuk menyimpan produk yang diklik
    productFilter: "all", // Status filter: 'all', 'shopee', 'custom'

    // Navigasi untuk halaman utama
    navLinks: [
      { name: "Home", href: "#", page: "home" },
      { name: "Products", href: "#", page: "products" },
      { name: "Portfolio", href: "#", page: "portfolio" },
      { name: "About Us", href: "#", page: "about" },
    ],

    // Navigasi untuk halaman detail
    detailNavLinks: [
      { name: "New Arrivals" },
      { name: "Best Sellers" },
      { name: "Dresses" },
      { name: "Tops" },
      { name: "Bottoms" },
      { name: "Accessories" },
    ],

    // Data "Our Services" (Halaman Home)
    services: [
      {
        name: "Women's Dresses",
        img: "photo/dres dewasa.png",
        price: "$120",
      },
      {
        name: "Children's Dresses",
        img: "photo/dres anak.jpg",
        price: "$80",
      },
      {
        name: "Men's Clothes",
        img: "photo/pria.png",
        price: "$150",
      },
      {
        name: "Custom",
        img: "photo/custom.png",
        price: "$200",
      },
    ],

    // Data "My Portfolio" (Halaman Home & Portfolio)
    portfolio: [
      {
        name: "Elegant Dresses",
        price: "$120",
        img: "photo/elegant dres.jpg",
      },
      {
        name: "Kids Fashion",
        price: "$80",
        img: "photo/dres anak.jpg",
      },
      {
        name: "Men's Style",
        price: "$150",
        img: "photo/pria1.png",
      },
      {
        name: "Casual Scarf",
        price: "$45",
        img: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
      },
      {
        name: "Summer Vibes",
        price: "$75",
        img: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg",
      },
      {
        name: "Formal Suit",
        price: "$250",
        img: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
      },
    ],

    // Data Testimonials (Halaman Home)
    testimonials: [
      {
        name: "Sophia",
        quote:
          '"I absolutely love the dress I ordered from Sava Fashion. The quality is amazing, and it fits perfectly!"',
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPfM2M1SrxbN7wOoJJDE8qH7BjMUIlkhHAWTL1XYzfHIb_ONXAHb5ETHyC4HjQh4rmohx_s1Nr-_Q3_EYBGY75VhrZc33jhW7FrB-vJxpDPzw5h5Ns3KyjJu3xNVhvd202zjMZZ19-zwURx3E9Qa1SQbeiqK3OlzU14exxfrnTWCzH1FwaBie8hQgrBQ2vyzEJIFKfPbfe33nJgfGLpCNgatw-FXHDwZ30EXOpBHY9td2rm9iHsT_idyxWEz00xvrLCYOyOQfvhME-",
      },
      {
        name: "Ethan",
        quote:
          '"The kids\' clothes are so stylish and comfortable. My son loves them!"',
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqfX42LRfSn8YtYENs_3FKzgJgJjPrfSrhBi6w4JAGPaBBMbohRkCy6ZxF-LkUsDp-6psm2kBwFiLenqwdS88bQ0TcySE1tobwXrN9JM4q_lO9gO6XiZBTgdBwpica0osx8jUNFLhSzaS4e6zTfxtFA4dumorCj55rUqz7pbG7W9ZxbC-NwnnR9D1lcH92g2G_HskM7tZljGk22Trjmw2NwsSG1fJOgDPag70wg5bl1xuqPMVTQvh-PsSboyLRELpz1Z5fYeeNa4E",
      },
      {
        name: "Olivia",
        quote:
          '"The custom design service is fantastic. I got exactly what I wanted, and it looks stunning!"',
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDac6gGPkga4DW-2dUB-H6MXhRPY9OE5kME8MUV0vwM6f64xj2vCjSfeVRyD9UUDtA2HJWgJrHP54d_oSD2LA8t9Vuem52H1cxe6OOxx9uhVvEfqLqp5U6aEV75I8Zku8c8SXiXRpKR2BtiqbQnXeY1EuDHq0LoNGWKJXT86mBkAye1zWK4IzQegaH8q-t6Qw32vcCyXYFI4tiMHNGVUpnriCJKEtugviw5MoF8tFoGkdPERsNNykQNmFIgZHqZO57-NRoba5rjbpdL",
      },
    ],

    // Data Halaman Produk akan diisi secara dinamis dari database
    products: [],
  };

  const PRODUCT_API_ENDPOINT = "php/api_products.php";
  const PRODUCT_PLACEHOLDER_IMAGE = "https://via.placeholder.com/600x600.png?text=Product";

  // ===================================
  // 2. DOM SELECTORS (Menyimpan elemen)
  // ===================================
  const app = document.getElementById("app");
  const mainView = document.getElementById("main-view");
  const mainHeader = document.getElementById("main-header");
  const navLinksContainer = document.getElementById("nav-links-container");
  
  // Kontainer halaman utama
  const pageHome = document.getElementById("page-home");
  const pageProducts = document.getElementById("page-products");
  const pagePortfolio = document.getElementById("page-portfolio");
  const pageAbout = document.getElementById("page-about");
  
  // Kontainer halaman detail
  const pageDetail = document.getElementById("page-detail");
  
  // Kontainer untuk konten dinamis
  const servicesGridContainer = document.getElementById("services-grid-container");
  const portfolioScrollContainer = document.getElementById("portfolio-scroll-container");
  const testimonialsContainer = document.getElementById("testimonials-container");
  const productGridContainer = document.getElementById("product-grid-container");
  const portfolioGridContainer = document.getElementById("portfolio-grid-container");

  // ===================================
  // 3. DATA & API HELPERS
  // ===================================

  async function loadProducts() {
    try {
      const response = await fetch(PRODUCT_API_ENDPOINT, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      state.products = Array.isArray(data) ? data.map(mapProductFromApi) : [];
      if (state.currentPage === "products") {
        renderProducts();
      }
    } catch (error) {
      console.error("Gagal memuat data produk:", error);
      productGridContainer.innerHTML = `
        <div class="empty-state">
          <p>Gagal memuat data produk. Coba lagi nanti.</p>
        </div>`;
    }
  }

  function mapProductFromApi(item = {}) {
    const imageUrl =
      item.image_url && item.image_url.trim() !== ""
        ? item.image_url
        : PRODUCT_PLACEHOLDER_IMAGE;
    const statusText = (item.status ?? "in stock").toString();
    const normalizedStatus = statusText.toLowerCase();
    const priceValue =
      typeof item.price === "number" ? item.price : parseFloat(item.price);
    
    // Ambil kategori dari database, default 'custom'
    const categoryFromDb = item.category ?? "custom";
    
    // Tentukan type untuk filter: 'custom' atau 'shopee' (ready to use)
    const productType = categoryFromDb === "ready_to_use" ? "shopee" : "custom";
    
    // Ambil gallery images dari database
    const galleryImages = [
      item.gallery_image_1 || imageUrl,
      item.gallery_image_2 || imageUrl,
      item.gallery_image_3 || imageUrl,
      item.gallery_image_4 || imageUrl
    ];

    return {
      id: item.id ?? Date.now(),
      name: item.product_name ?? "Produk Tanpa Nama",
      price: formatPrice(priceValue),
      rating: `Status: ${capitalize(statusText)}`,
      status: normalizedStatus,
      img: imageUrl,
      type: productType,
      category: "Collection",
      description: `${item.product_name ?? "Produk"} dari koleksi terbaik kami.`,
      galleryImages: galleryImages,
      sizes: ["S", "M", "L", "XL"],
    };
  }

  function formatPrice(value) {
    if (typeof value === "string") {
      const cleaned = value.replace(/[^0-9.,-]/g, "").replace(",", ".");
      value = parseFloat(cleaned);
    }
    const number = Number.isFinite(value) ? value : 0;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  }

  function createGalleryImages(imageUrl) {
    const safeUrl =
      imageUrl && imageUrl.trim() !== ""
        ? imageUrl
        : PRODUCT_PLACEHOLDER_IMAGE;
    return [safeUrl, safeUrl, safeUrl, safeUrl];
  }

  function capitalize(value = "") {
    if (!value) return "";
    const str = value.toString();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ===================================
  // 4. FUNGSI RENDER (Membuat HTML)
  // ===================================

  // Render Navigasi Utama
  function renderNav() {
    const navHTML = state.navLinks
      .map((link) => {
        const isActive = state.currentPage === link.page;
        return `<a href="#" data-page="${link.page}" class="nav-link ${isActive ? 'nav-active' : ''}">
                  ${link.name}
                </a>`;
      })
      .join("");
    navLinksContainer.innerHTML = navHTML;
  }
  
  // Render Navigasi Halaman Detail (dengan style berbeda)
  function renderDetailNav(activeColorClass) {
    return state.navLinks
      .map((link) => {
        const isActive = state.currentPage === link.page;
        // Gunakan style navigasi halaman detail
        return `<a href="#" data-page="${link.page}" class="nav-link-detail ${isActive ? activeColorClass : ''}">
                  ${link.name}
                </a>`;
      })
      .join("");
  }

  // --- Render Konten Halaman Home ---
  function renderHome() {
    // 1. Render Services
    servicesGridContainer.innerHTML = state.services
      .map(
        (service) => `
        <div class="service-card">
          <div class="service-card-image" style="background-image: url('${service.img}')"></div>
          <p class="service-card-name">${service.name}</p>
        </div>`
      )
      .join("");

    // 2. Render Portfolio (4 item)
    portfolioScrollContainer.innerHTML = state.portfolio
      .slice(0, 4)
      .map(
        (item) => `
        <div class="featured-card">
          <div class="featured-card-image" style="background-image: url('${item.img}')"></div>
          <div>
            <p class="featured-card-name">${item.name}</p>
          </div>
        </div>`
      )
      .join("");

    // 3. Render Testimonials
    testimonialsContainer.innerHTML = state.testimonials
      .map(
        (item) => `
        <div class="testimonial-card">
          <div class="testimonial-image" style="background-image: url('${item.img}')"></div>
          <div>
            <p class="testimonial-name">${item.name}</p>
            <p class="testimonial-quote">${item.quote}</p>
          </div>
        </div>`
      )
      .join("");
  }

  // --- Render Halaman Products ---
  function renderProducts() {
    // 1. Filter produk berdasarkan state.productFilter
    const filteredProducts = state.products.filter(
      (product) =>
        state.productFilter === "all" || product.type === state.productFilter
    );

    // 2. Buat HTML untuk grid produk
    productGridContainer.innerHTML = filteredProducts
      .map(
        (product) => {
          const statusClass = product.status === 'sold' ? 'status-sold' : 'status-in-stock';
          const statusText = product.status === 'sold' ? 'Sold' : 'In Stock';
          return `
        <div class="product-card clickable-card" data-product-id="${product.id}">
          <div class="product-card-image" style="background-image: url('${product.img}')"></div>
          <div>
            <p class="product-card-name">${product.name}</p>
            <p class="product-card-price">${product.price}</p>
            <p class="product-card-rating">Status: <span class="${statusClass}">${statusText}</span></p>
          </div>
        </div>`;
        }
      )
      .join("");
  }

  // --- Render Halaman Portfolio ---
  function renderPortfolio() {
    portfolioGridContainer.innerHTML = state.portfolio
      .map(
        (item) => `
        <div class="featured-card">
          <div class="featured-card-image" style="background-image: url('${item.img}')"></div>
          <div>
            <p class="featured-card-name">${item.name}</p>
          </div>
        </div>`
      )
      .join("");
  }

  // --- Render Halaman Detail (Memilih Custom atau Shopee) ---
  // ==========================================
  // FUNGSI RENDER DETAIL (Sesuai home.css)
  // ==========================================
  function renderDetail() {
    const p = state.selectedProduct;
    if (!p) return;

    console.log("Render detail untuk:", p.name);

    // Kita menyusun HTML string yang MENGGUNAKAN CLASS dari home.css kamu
    // Perhatikan class seperti 'detail-page-wrapper', 'detail-title', dll.
    
    // 1. Siapkan Gallery Images (HTML)
    // Gambar utama index 0, gambar kecil index 1,2,3
    const mainImg = p.galleryImages[0];
    const subImg1 = p.galleryImages[1];
    const subImg2 = p.galleryImages[2];
    const subImg3 = p.galleryImages[3];

    const sizesHTML = p.sizes.map(size => `
      <label class="size-option">
        ${size} <input type="radio" class="size-radio" name="product-size" />
      </label>`).join("");

    const detailHTML = `
      <div style="padding: 10px 2.5rem; max-width: 1200px; margin: 0 auto;">
         <button data-page="products" class="btn btn-secondary" style="width: auto; padding: 0 20px;">
            Back to Products
         </button>
      </div>

      <div class="detail-page-wrapper">
        <div class="detail-image-sidebar">
          <div class="detail-image-gallery-wrapper">
            <div class="detail-image-gallery-1">
              <div class="gallery-image-main" style="background-image: url('${mainImg}')"></div>
            </div>
          </div>
          <div class="detail-image-gallery-wrapper">
            <div class="detail-image-gallery-2">
               <div class="gallery-image-sub-1" style="background-image: url('${subImg1}')"></div>
               <div class="gallery-image-sub-2" style="background-image: url('${subImg2}')"></div>
               <div class="gallery-image-sub-3" style="background-image: url('${subImg3}')"></div>
            </div>
          </div>
        </div>

        <div class="detail-info-sidebar">
           <div class="breadcrumbs">
              <span class="breadcrumb-link" onclick="showPage('home')">Home</span>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-link" onclick="showPage('products')">Products</span>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-active">${p.name}</span>
           </div>

           <h1 class="detail-title">${p.name}</h1>
           <h2 class="detail-price">${p.price}</h2>
           
           <div class="rating-wrapper">
              <p class="product-card-rating" style="padding:0;">${p.rating}</p>
           </div>

           <h3 class="detail-subtitle">Description</h3>
           <p class="detail-description">${p.description}</p>

           <h3 class="detail-subtitle">Size</h3>
           <div class="size-picker">${sizesHTML}</div>

           <div class="detail-button-wrapper">
              <a href="https://wa.me/6281252887815?text=Halo%20Sava%20Fashion,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}" 
                 target="_blank" class="btn-whatsapp" style="text-decoration:none; display:flex;">
                 <span class="truncate">Order via WhatsApp</span>
              </a>
           </div>
        </div>
      </div>
    `;

    // Masukkan HTML ke dalam container
    const pageDetail = document.getElementById("page-detail");
    pageDetail.innerHTML = detailHTML;
  }

  // ==========================================
  // FUNGSI SHOW PAGE (Logika Navigasi Stabil)
  // ==========================================
  function showPage(pageName) {
    state.currentPage = pageName;
    console.log("Navigasi ke:", pageName);

    const mainView = document.getElementById("main-view");
    const pageDetail = document.getElementById("page-detail");

    // Scroll ke atas setiap ganti halaman
    window.scrollTo(0, 0);

    if (pageName === "detail") {
        // --- MODE DETAIL ---
        // 1. Sembunyikan Main View (Home/List Produk)
        if (mainView) {
            mainView.style.display = "none"; 
        }
        
        // 2. Tampilkan Page Detail
        if (pageDetail) {
            pageDetail.style.display = "block"; // Paksa tampil
            pageDetail.classList.remove("page-hidden");
            renderDetail(); // Generate kontennya
        }

    } else {
        // --- MODE NORMAL (Home, Products, dll) ---
        
        // 1. Sembunyikan Page Detail
        if (pageDetail) {
            pageDetail.style.display = "none";
        }

        // 2. Tampilkan Main View
        if (mainView) {
            mainView.style.display = "block";
        }

        // 3. Atur Sub-halaman di dalam Main View
        document.querySelectorAll("#main-view .page-content").forEach(el => {
            el.classList.add("page-hidden"); // Sembunyikan semua sub-page
        });

        // 4. Munculkan sub-halaman yang diminta
        const activePage = document.getElementById(`page-${pageName}`);
        if (activePage) {
            activePage.classList.remove("page-hidden");
            
            // Trigger render ulang jika perlu
            if (pageName === "home") renderHome();
            if (pageName === "products") renderProducts();
            if (pageName === "portfolio") renderPortfolio();
        }
    }
    
    renderNav();
  }

  // ===================================
  // 5. EVENT LISTENERS (Pengendali)
  // ===================================

  // Gunakan Event Delegation pada elemen 'app'
  app.addEventListener("click", (e) => {
    
    // 1. Cek klik pada link navigasi atau tombol
    const pageLink = e.target.closest("[data-page]");
    if (pageLink) {
      e.preventDefault();
      const pageName = pageLink.dataset.page;
      showPage(pageName);
    }
    
    // 2. Cek klik pada kartu produk
    const productCard = e.target.closest("[data-product-id]");
    if (productCard) {
      e.preventDefault();
      const productId = productCard.dataset.productId;
      state.selectedProduct = state.products.find(
        (p) => p.id == productId
      );
      showPage("detail");
    }
  });
  
  // Listener terpisah untuk filter (karena 'change' bukan 'click')
  app.addEventListener("change", (e) => {
    // 1. Cek perubahan pada filter produk
    if (e.target.name === "product-filter") {
      state.productFilter = e.target.value;
      renderProducts(); // Hanya render ulang grid produk
    }
  });

  // ===================================
  // 6. INISIALISASI (Memulai Aplikasi)
  // ===================================
  function init() {
    // Set 'checked' default untuk filter 'all'
    const defaultFilter = document.querySelector('input[name="product-filter"][value="all"]');
    if (defaultFilter) {
      defaultFilter.checked = true;
    }
    // Tampilkan halaman awal (home)
    showPage("home");
    loadProducts();
  }

  init(); // Jalankan aplikasi
});