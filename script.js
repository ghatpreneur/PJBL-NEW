// Menggunakan Vue 3 Global API dari CDN
const { createApp } = Vue;

// Membuat instance aplikasi Vue
createApp({
  data() {
    return {
      currentPage: "home",

      navLinks: [
        { name: "Home", href: "#", page: "home" },
        { name: "Products", href: "#", page: "products" },
        { name: "About Us", href: "#" },
      ],

      services: [
        {
          name: "Baju Dress",
          img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg",
          price: "$120",
        },
        {
          name: "Baju Anak",
          img: "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg",
          price: "$80",
        },
        {
          name: "Baju Pria",
          img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
          price: "$150",
        },
        {
          name: "Custom",
          img: "https://images.pexels.com/photos/42408/fabric-texture-fabric-texture-42408.jpeg",
          price: "$200",
        },
      ],

      // (MODIFIKASI) Mengganti nama 'featured' menjadi 'portfolio'
      portfolio: [
        {
          name: "Elegant Dresses",
          price: "$120",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9NYY6NeqNtTUSGWlvBru_O05UrHTXhLGQ_DjyM3O8ps8Guhk2w3zqXE_m840aKu_ujY0yo6ko9LggAVAlewWy_LYj-fiOJX-pb0tL9K6CJJOPu0NaImQmLk629X2NF4TWIXhL5gMzpQs8Qc9AuJRRXaSUEl5h1MNy1Fgx_7_v63GFUGY8nEMznQNd7SkNPavLX0EGkjPlkjLDMJp6Tu_VD5rwTBQIQC7ojTTpbIyMJvivq9vmk_JluHyTx_qkeg2iGEg_pVQp3eim",
        },
        {
          name: "Kids Fashion",
          price: "$80",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpyaKjX3R7UpFK_hvdgM4SP37qKH7LZFDF2TB5txbR6Qe2va4j5axATYYO57xy3m1k3_qfsDw9y1xOdkJobZP5SgfVN25qL6zLvAhwrZLT0c14pg7KMyuyaIqXxlR-jI5znBqMKOZ3IrtwRAdxpe6XnQg4wrxZTnoIaAZucGUSxUHpRS0zb9eoLSmZwowmmMjrh5387PIPn48FAJ5l7Mf8I2UlfWKHJcN9psO-vtTYzHWI5iASfQ7Y96kru0hx75FHhhs6tEk3AsY7",
        },
        {
          name: "Men's Style",
          price: "$150",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCstBGonQ2ntdJFxXqljMBjlEgNeC8lMbVs_x6e8okv6cl75jbnOto2nnoLwWrNa-H5XvkmfT5QjOIfqLgxllP7em4_RyGLJQ1_DUmB0vyKXInO1OJJBn_LjerhF5DFZkEEPC0WjWegnsNgOfYs-VeUNxeruZ8MKWH5jSkEU0E6X1o8aaVWvgt1RDmGAbyE0t4wj0_VPC2IlZG8UK0czeKbfQeqcaTst-3_wOGJgrggOndj_jPW03rM5sG5l6e09EoWHdgIGK-H9Qlk",
        },
        {
          name: "Casual Scarf",
          price: "$45",
          img: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
        },
        // (BARU) Menambahkan lebih banyak item portofolio
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
      // (Akhir Modifikasi)

      testimonials: [
        // (Data testimoni tetap sama)
      ],

      products: [
        // (Data produk tetap sama)
      ],
    };
  },

  methods: {
    showPage(pageName) {
      if (pageName) {
        this.currentPage = pageName;
        window.scrollTo(0, 0); // Scroll ke atas saat ganti halaman
      }
    },
  },
}).mount("#app");