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
      { name: "Contact", href: "#", page: "contact" },
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
        name: "women's dresses",
        img: "photo/dres dewasa.png",
        price: "$120",
      },
      {
        name: "children's dresses",
        img: "photo/dres anak.jpg",
        price: "$80",
      },
      {
        name: "men's clothes",
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

    // Data Halaman Produk
    products: [
      {
        id: 1,
        name: "Elegant Kids' Attire",
        price: "$25",
        rating: "4.5 (120)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4rML4Bp-7YDP2-pWZ2xN30gUV9dV-mUbqmdngU9J1Hqcle-P06S9quSlQF9JDofs8phcQXSo8946MJO8YTZfm34Wh6RakDI5Q-TylAO3THtkDCcxbs1fKtXMnrOKhZnWwSkGVJBziFXXCwkCxgyBPdyDi406rAvlqlCW6ACCq14U2xJmGdN3F1JI7WhYHPfP89Bxrg1S-A0xZZ8mZZ13qtKwIxlGDJZUBxLioZTuLTYDaOQABv0PbZtDnvvLuzJbRZ8lTbIJQmB7s",
        type: "shopee",
        category: "Kids",
        description: "Beautiful attire for kids, perfect for parties.",
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuASCoe-Pfk7PtVTAlg-cPe-zm4nb3KxBJAy-q4T4xNeUcXf1MfdS_j8UMZTLHToEomAav0RxXrmYMBbG0IT7geXzKTjNaxXs3HuIrGC6KQ5GQa4jbPQQ-J8Fj01pQmtbEGw7X0Tnar5jloWQfBXYfKMUUOqPBHSwVCk06Fb87p2xQQiXaG0JLRKgrsWhC6uor5wsIQaEDkJq-9nb7on4JrUEpBOsgOflUUrhQhgz5J-J5MzAY7WTUvf22dg1__PtJvxHmZPwpFhPpyy",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB2lU3SZ9tuOa-p01r0QwG2awXZz91ao9bXo5OevXDHdZoOeSZrPEt-E-5Sp5BIguXouZ3Z-cdtpUXIPsR498Pi2-0jn-xiObX3UCOvO7bjnWE0zCcch91ECvnHzveUeLsjlKifGymTnLwnhCaypRpnpvS037PPp0AZreMc01bYvB2pqAo4lNLLU9NQZKpD0Zu8o9CMqjoml-GV5Z4QAMM6tSQlM-Q8VZRoqjlVsCydufE0qIlbt9j0YGcEF9vl-dj1VUNe9sOUW4-U",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD6MaeKujw7l-WKkWNn9huvmCKbgc1M217r48kPyhT7guEcvENNcdfWI27lUwP9Fnrp_L9aP5tuHNmvinHTKoncp7QoipqnHvPyR7aRwRUhccfGT1JLBBAwAz3mC7LrAA9eX__ah6MEvdwhZvVImik9AlHMRXzN-Q79rLAavzWY2TCVT5zgGGiJU0ClaVEvjP8tfMUtx3jOZDkpzgUhCK3lF8KLvScc1Hsrp1sNSpMWFl1HHo319UTCCzOOB7FHa8nDQ63syGaOL7Kh",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZGh_bIUT50bkYDajEGlYR_Rr-QF8s3ynomPTZ7YyLMfGXl94d-edgOyzy1DFNXqg94FUOPWugko5Uo4_nu50iHBjbYAOBXSzAZgOa4P_SZzr-eSOmCKklKiuaG_FCaYutyWPAc0NuhhYyFNCxVU1VRHQy_RaJMYNeTGc3Jp5OSbjOpxq4oIEHpreSOCqTLV6Q2umMja1LgwqhI4sIVCfbrk0C8lqxO9w7T-ffJACD90pBGuivHPjxrfIuBOdMiZ59oBj5t8OEzNu",
        ],
        sizes: ["S", "M", "L"],
        colors: [
          { hex: "rgb(58, 58, 58)", default: true },
          { hex: "rgb(212, 17, 49)", default: false },
        ],
      },
      {
        id: 2,
        name: "Men's Casual Shirt",
        price: "$40",
        rating: "4.2 (85)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzs-yd0p-wgslhkJZb_5RPmLhJGH88aQbstBKVzp6N9bZNGz5g0FT9HMgBIIJos4rR9AWwa6anhNw8eTpKlbWxC9S0cEhQZGNfMey4j5kiW8KMf_fLbAcYRwDp6kqewPeFFQ4yHnncIitgvWT28i5CgJNbiCx1iPDJ303RBlcFBxVX7fND83wiAVLL73b_h2DJcwpMdEgEb-N0fvQDH_hT5QyJLJugrdzfki2I6bJ49SH_AFduEXH6uNV_vAhZB3HDUqzY6nNSLMzL",
        type: "custom",
        category: "Men",
        description:
          "This elegant charcoal dress is perfect for any occasion. Made from high-quality fabric, it offers both comfort and style. Its versatile design allows for easy pairing with various accessories, making it a staple piece in your wardrobe.",
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuASCoe-Pfk7PtVTAlg-cPe-zm4nb3KxBJAy-q4T4xNeUcXf1MfdS_j8UMZTLHToEomAav0RxXrmYMBbG0IT7geXzKTjNaxXs3HuIrGC6KQ5GQa4jbPQQ-J8Fj01pQmtbEGw7X0Tnar5jloWQfBXYfKMUUOqPBHSwVCk06Fb87p2xQQiXaG0JLRKgrsWhC6uor5wsIQaEDkJq-9nb7on4JrUEpBOsgOflUUrhQhgz5J-J5MzAY7WTUvf22dg1__PtJvxHmZPwpFhPpyy",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB2lU3SZ9tuOa-p01r0QwG2awXZz91ao9bXo5OevXDHdZoOeSZrPEt-E-5Sp5BIguXouZ3Z-cdtpUXIPsR498Pi2-0jn-xiObX3UCOvO7bjnWE0zCcch91ECvnHzveUeLsjlKifGymTnLwnhCaypRpnpvS037PPp0AZreMc01bYvB2pqAo4lNLLU9NQZKpD0Zu8o9CMqjoml-GV5Z4QAMM6tSQlM-Q8VZRoqjlVsCydufE0qIlbt9j0YGcEF9vl-dj1VUNe9sOUW4-U",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD6MaeKujw7l-WKkWNn9huvmCKbgc1M217r48kPyhT7guEcvENNcdfWI27lUwP9Fnrp_L9aP5tuHNmvinHTKoncp7QoipqnHvPyR7aRwRUhccfGT1JLBBAwAz3mC7LrAA9eX__ah6MEvdwhZvVImik9AlHMRXzN-Q79rLAavzWY2TCVT5zgGGiJU0ClaVEvjP8tfMUtx3jOZDkpzgUhCK3lF8KLvScc1Hsrp1sNSpMWFl1HHo319UTCCzOOB7FHa8nDQ63syGaOL7Kh",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZGh_bIUT50bkYDajEGlYR_Rr-QF8s3ynomPTZ7YyLMfGXl94d-edgOyzy1DFNXqg94FUOPWugko5Uo4_nu50iHBjbYAOBXSzAZgOa4P_SZzr-eSOmCKklKiuaG_FCaYutyWPAc0NuhhYyFNCxVU1VRHQy_RaJMYNeTGc3Jp5OSbjOpxq4oIEHpreSOCqTLV6Q2umMja1LgwqhI4sIVCfbrk0C8lqxO9w7T-ffJACD90pBGuivHPjxrfIuBOdMiZ59oBj5t8OEzNu",
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: [{ hex: "rgb(58, 58, 58)", default: true }],
      },
      {
        id: 3,
        name: "Women's Summer Dress",
        price: "$60",
        rating: "4.8 (210)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrDkm4_hYnhaisi5Ydy6cvdvMJbRBBm2ExSbFwcQ9nwv3X6mdsim64i3NR91DqeEo3oiq_ZfFOGaup99ABaJzCYbFPSjgpShOXYZe6-dvjUhb4trimx1DRMnrT74LprqRRp_PmouEAAAMDQAhI5jwMMvc3icoBEHIrrnOOlEeocAWdkv3T74oughZNb-vO7zjFZzhx0jm7Dwul6iJ6XGD4K45G1ypjvxiqA16nFMLjXdidCqnc99_e9txgeR72uqw3mArPoV2w3Y0U",
        type: "shopee",
        category: "Dresses",
        description:
          "A light and breezy summer dress, perfect for warm weather. High-quality cotton.",
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuASCoe-Pfk7PtVTAlg-cPe-zm4nb3KxBJAy-q4T4xNeUcXf1MfdS_j8UMZTLHToEomAav0RxXrmYMBbG0IT7geXzKTjNaxXs3HuIrGC6KQ5GQa4jbPQQ-J8Fj01pQmtbEGw7X0Tnar5jloWQfBXYfKMUUOqPBHSwVCk06Fb87p2xQQiXaG0JLRKgrsWhC6uor5wsIQaEDkJq-9nb7on4JrUEpBOsgOflUUrhQhgz5J-J5MzAY7WTUvf22dg1__PtJvxHmZPwpFhPpyy",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB2lU3SZ9tuOa-p01r0QwG2awXZz91ao9bXo5OevXDHdZoOeSZrPEt-E-5Sp5BIguXouZ3Z-cdtpUXIPsR498Pi2-0jn-xiObX3UCOvO7bjnWE0zCcch91ECvnHzveUeLsjlKifGymTnLwnhCaypRpnpvS037PPp0AZreMc01bYvB2pqAo4lNLLU9NQZKpD0Zu8o9CMqjoml-GV5Z4QAMM6tSQlM-Q8VZRoqjlVsCydufE0qIlbt9j0YGcEF9vl-dj1VUNe9sOUW4-U",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD6MaeKujw7l-WKkWNn9huvmCKbgc1M217r48kPyhT7guEcvENNcdfWI27lUwP9Fnrp_L9aP5tuHNmvinHTKoncp7QoipqnHvPyR7aRwRUhccfGT1JLBBAwAz3mC7LrAA9eX__ah6MEvdwhZvVImik9AlHMRXzN-Q79rLAavzWY2TCVT5zgGGiJU0ClaVEvjP8tfMUtx3jOZDkpzgUhCK3lF8KLvScc1Hsrp1sNSpMWFl1HHo319UTCCzOOB7FHa8nDQ63syGaOL7Kh",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZGh_bIUT50bkYDajEGlYR_Rr-QF8s3ynomPTZ7YyLMfGXl94d-edgOyzy1DFNXqg94FUOPWugko5Uo4_nu50iHBjbYAOBXSzAZgOa4P_SZzr-eSOmCKklKiuaG_FCaYutyWPAc0NuhhYyFNCxVU1VRHQy_RaJMYNeTGc3Jp5OSbjOpxq4oIEHpreSOCqTLV6Q2umMja1LgwqhI4sIVCfbrk0C8lqxO9w7T-ffJACD90pBGuivHPjxrfIuBOdMiZ59oBj5t8OEzNu",
        ],
        sizes: ["XS", "S", "M"],
        colors: [
          { hex: "rgb(58, 58, 58)", default: true },
          { hex: "rgb(212, 17, 49)", default: false },
        ],
      },
      {
        id: 4,
        name: "Kids' Playful Outfit",
        price: "$30",
        rating: "4.6 (150)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYpNnAVkOhWckLCNwmbiiId2LZ8fJDgsNnCD_8CjfBmjKYNua1slYf-5Hgwwk8VixV0AHBfGYAmbjebNjquip_LuXKqANNvP-DmoZbCno9mBakMRzzpz_v_KrzKa10_28AQZXQRIWVcjT1NrqMK9cfK-myLgrD1U8-3MyG51Uzu228WtO2dxiwAQ5DM7Fvy2WVtZCzliHFXAAY3SgGAfOm7SbyEz_PU-deOyMwhFcuIpF5S3r5XTcV2y33zPfYsXw6hgmd3gq1ePqD",
        type: "shopee",
        category: "Kids",
        description: "Fun and playful outfit for active kids.",
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuASCoe-Pfk7PtVTAlg-cPe-zm4nb3KxBJAy-q4T4xNeUcXf1MfdS_j8UMZTLHToEomAav0RxXrmYMBbG0IT7geXzKTjNaxXs3HuIrGC6KQ5GQa4jbPQQ-J8Fj01pQmtbEGw7X0Tnar5jloWQfBXYfKMUUOqPBHSwVCk06Fb87p2xQQiXaG0JLRKgrsWhC6uor5wsIQaEDkJq-9nb7on4JrUEpBOsgOflUUrhQhgz5J-J5MzAY7WTUvf22dg1__PtJvxHmZPwpFhPpyy",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB2lU3SZ9tuOa-p01r0QwG2awXZz91ao9bXo5OevXDHdZoOeSZrPEt-E-5Sp5BIguXouZ3Z-cdtpUXIPsR498Pi2-0jn-xiObX3UCOvO7bjnWE0zCcch91ECvnHzveUeLsjlKifGymTnLwnhCaypRpnpvS037PPp0AZreMc01bYvB2pqAo4lNLLU9NQZKpD0Zu8o9CMqjoml-GV5Z4QAMM6tSQlM-Q8VZRoqjlVsCydufE0qIlbt9j0YGcEF9vl-dj1VUNe9sOUW4-U",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD6MaeKujw7l-WKkWNn9huvmCKbgc1M217r48kPyhT7guEcvENNcdfWI27lUwP9Fnrp_L9aP5tuHNmvinHTKoncp7QoipqnHvPyR7aRwRUhccfGT1JLBBAwAz3mC7LrAA9eX__ah6MEvdwhZvVImik9AlHMRXzN-Q79rLAavzWY2TCVT5zgGGiJU0ClaVEvjP8tfMUtx3jOZDkpzgUhCK3lF8KLvScc1Hsrp1sNSpMWFl1HHo319UTCCzOOB7FHa8nDQ63syGaOL7Kh",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZGh_bIUT50bkYDajEGlYR_Rr-QF8s3ynomPTZ7YyLMfGXl94d-edgOyzy1DFNXqg94FUOPWugko5Uo4_nu50iHBjbYAOBXSzAZgOa4P_SZzr-eSOmCKklKiuaG_FCaYutyWPAc0NuhhYyFNCxVU1VRHQy_RaJMYNeTGc3Jp5OSbjOpxq4oIEHpreSOCqTLV6Q2umMja1LgwqhI4sIVCfbrk0C8lqxO9w7T-ffJACD90pBGuivHPjxrfIuBOdMiZ59oBj5t8OEzNu",
        ],
        sizes: ["S", "M"],
        colors: [{ hex: "rgb(58, 58, 58)", default: true }],
      },
      {
        id: 5,
        name: "Men's Formal Wear",
        price: "$55",
        rating: "4.3 (95)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf7maFSwQFZ3Jxpqa4TpA8I7yWdyZQ37mhn9qyCK2MmEBuV_xWHj1fmStm5mN52jUcoDxBA678ytHYg5NcxPPC6sX-goA9WLdzbkKXQi48-QizlvfoaLVzR2X7cWhc5w81qfbX3FPPj-Brln71qzIw3qNDnSTh-GY6SnR0BQAx_ximSty-EgkLloHWJ4LYY3tsJ7BQr0yt9k54q2Axh68MTCtyiw_JLzc0QVp90sDDJoxmI1xm-lL6KXD2oZ_RkcKwKTYlnMVxpjRQ",
        type: "custom",
        category: "Men",
        description: "Sharp and stylish formal wear for men.",
        galleryImages: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuASCoe-Pfk7PtVTAlg-cPe-zm4nb3KxBJAy-q4T4xNeUcXf1MfdS_j8UMZTLHToEomAav0RxXrmYMBbG0IT7geXzKTjNaxXs3HuIrGC6KQ5GQa4jbPQQ-J8Fj01pQmtbEGw7X0Tnar5jloWQfBXYfKMUUOqPBHSwVCk06Fb87p2xQQiXaG0JLRKgrsWhC6uor5wsIQaEDkJq-9nb7on4JrUEpBOsgOflUUrhQhgz5J-J5MzAY7WTUvf22dg1__PtJvxHmZPwpFhPpyy",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB2lU3SZ9tuOa-p01r0QwG2awXZz91ao9bXo5OevXDHdZoOeSZrPEt-E-5Sp5BIguXouZ3Z-cdtpUXIPsR498Pi2-0jn-xiObX3UCOvO7bjnWE0zCcch91ECvnHzveUeLsjlKifGymTnLwnhCaypRpnpvS037PPp0AZreMc01bYvB2pqAo4lNLLU9NQZKpD0Zu8o9CMqjoml-GV5Z4QAMM6tSQlM-Q8VZRoqjlVsCydufE0qIlbt9j0YGcEF9vl-dj1VUNe9sOUW4-U",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD6MaeKujw7l-WKkWNn9huvmCKbgc1M217r48kPyhT7guEcvENNcdfWI27lUwP9Fnrp_L9aP5tuHNmvinHTKoncp7QoipqnHvPyR7aRwRUhccfGT1JLBBAwAz3mC7LrAA9eX__ah6MEvdwhZvVImik9AlHMRXzN-Q79rLAavzWY2TCVT5zgGGiJU0ClaVEvjP8tfMUtx3jOZDkpzgUhCK3lF8KLvScc1Hsrp1sNSpMWFl1HHo319UTCCzOOB7FHa8nDQ63syGaOL7Kh",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZGh_bIUT50bkYDajEGlYR_Rr-QF8s3ynomPTZ7YyLMfGXl94d-edgOyzy1DFNXqg94FUOPWugko5Uo4_nu50iHBjbYAOBXSzAZgOa4P_SZzr-eSOmCKklKiuaG_FCaYutyWPAc0NuhhYyFNCxVU1VRHQy_RaJMYNeTGc3Jp5OSbjOpxq4oIEHpreSOCqTLV6Q2umMja1LgwqhI4sIVCfbrk0C8lqxO9w7T-ffJACD90pBGuivHPjxrfIuBOdMiZ59oBj5t8OEzNu",
        ],
        sizes: ["M", "L", "XL"],
        colors: [{ hex: "rgb(58, 58, 58)", default: true }],
      },
      // ... (Sisa produk akan ditambahkan di sini)
    ],
  };

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
  const pageContact = document.getElementById("page-contact");
  
  // Kontainer halaman detail
  const pageDetail = document.getElementById("page-detail");
  
  // Kontainer untuk konten dinamis
  const servicesGridContainer = document.getElementById("services-grid-container");
  const portfolioScrollContainer = document.getElementById("portfolio-scroll-container");
  const testimonialsContainer = document.getElementById("testimonials-container");
  const productGridContainer = document.getElementById("product-grid-container");
  const portfolioGridContainer = document.getElementById("portfolio-grid-container");

  // ===================================
  // 3. FUNGSI RENDER (Membuat HTML)
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
            <p class="featured-card-price">${item.price}</p>
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
        (product) => `
        <div class="product-card clickable-card" data-product-id="${product.id}">
          <div class="product-card-image" style="background-image: url('${product.img}')"></div>
          <div>
            <p class="product-card-name">${product.name}</p>
            <p class="product-card-price">${product.price}</p>
            <p class="product-card-rating">${product.rating}</p>
          </div>
        </div>`
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
            <p class="featured-card-price">${item.price}</p>
          </div>
        </div>`
      )
      .join("");
  }

  // --- Render Halaman Detail (Memilih Custom atau Shopee) ---
  function renderDetail() {
    const p = state.selectedProduct;
    if (!p) return;

    if (p.type === "custom") {
      pageDetail.innerHTML = renderDetailCustom(p);
    } else {
      pageDetail.innerHTML = renderDetailShopee(p);
    }
  }
  
  // --- Template HTML untuk Detail Custom ---
  function renderDetailCustom(p) {
    // Helper untuk membuat HTML
    const sizesHTML = p.sizes.map(size => `
      <label class="size-option">
        ${size} <input type="radio" class="size-radio" name="product-size" />
      </label>`).join("");
      
    const colorsHTML = p.colors.map(color => `
      <label class="color-option" style="background-color: ${color.hex}">
        <input type="radio" class="color-radio" name="product-color" ${color.default ? 'checked' : ''} />
      </label>`).join("");

    return `
      <div class="relative flex h-auto min-h-screen w-full flex-col bg-stone-50 group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
          <header class="header-detail">
            <div class="header-detail-left">
              <a href="#" data-page="home" class="header-logo-link">
                <div class="header-logo"></div>
                <h2 class="header-brand-name">Sava Fashion</h2>
              </a>
              <nav class="header-nav-detail">${renderDetailNav('nav-active-detail')}</nav>
            </div>
            <div class="header-detail-right"></div>
          </header>
          <div class="detail-page-wrapper">
            <div class="detail-image-sidebar">
              <div class="detail-image-gallery-wrapper">
                <div class="detail-image-gallery-1">
                  <div class="gallery-image-main" style="background-image: url('${p.galleryImages[0]}')"></div>
                </div>
              </div>
              <div class="detail-image-gallery-wrapper">
                <div class="detail-image-gallery-2">
                  <div class="gallery-image-sub-1" style="background-image: url('${p.galleryImages[1]}')"></div>
                  <div class="gallery-image-sub-2" style="background-image: url('${p.galleryImages[2]}')"></div>
                  <div class="gallery-image-sub-3" style="background-image: url('${p.galleryImages[3]}')"></div>
                </div>
              </div>
            </div>
            <div class="detail-info-sidebar">
              <div class="breadcrumbs">
                <a href="#" data-page="home" class="breadcrumb-link">Home</a>
                <span class="breadcrumb-separator">/</span>
                <a href="#" data-page="products" class="breadcrumb-link">${p.category}</a>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-active">${p.name}</span>
              </div>
              <h1 class="detail-title">${p.name}</h1>
              <h2 class="detail-price">${p.price}</h2>
              <div class="rating-wrapper"></div>
              <h3 class="detail-subtitle">Description</h3>
              <p class="detail-description">${p.description}</p>
              <h3 class="detail-subtitle">Size</h3>
              <div class="size-picker">${sizesHTML}</div>
              <h3 class="detail-subtitle">Color</h3>
              <div class="color-picker">${colorsHTML}</div>
              <div class="detail-button-wrapper">
                <button class="btn-whatsapp">
                  <div class="btn-icon"></div>
                  <span class="truncate">Custom WhatsApp Now</span>
                </button>
              </div>
              <div class="view-all-button-wrapper">
                <button data-page="products" class="btn btn-secondary">
                  <span class="truncate">← Back to Products</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
  
  // --- Template HTML untuk Detail Shopee ---
  function renderDetailShopee(p) {
    // Helper untuk membuat HTML
    const sizesHTML = p.sizes.map(size => `
      <label class="size-option-shopee">
        ${size} <input type="radio" class="size-radio" name="product-size" />
      </label>`).join("");
      
    const colorsHTML = p.colors.map(color => `
      <label class="color-option-shopee" style="background-color: ${color.hex}">
        <input type="radio" class="color-radio" name="product-color" ${color.default ? 'checked' : ''} />
      </label>`).join("");

    return `
      <div class="relative flex h-auto min-h-screen w-full flex-col bg-[#fcf8f9] group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
          <header class="header-detail-shopee">
             <div class="header-detail-left">
              <a href="#" data-page="home" class="header-logo-link">
                <div class="header-logo"></div>
                <h2 class="header-brand-name">Sava Fashion</h2>
              </a>
              <nav class="header-nav-detail">${renderDetailNav('nav-active-detail-shopee')}</nav>
            </div>
            <div class="header-detail-right"></div>
          </header>
          <div class="detail-page-wrapper">
            <div class="detail-image-sidebar">
              <div class="detail-image-gallery-wrapper">
                <div class="detail-image-gallery-1">
                  <div class="gallery-image-main" style="background-image: url('${p.galleryImages[0]}')"></div>
                </div>
              </div>
              <div class="detail-image-gallery-wrapper">
                <div class="detail-image-gallery-2">
                  <div class="gallery-image-sub-1" style="background-image: url('${p.galleryImages[1]}')"></div>
                  <div class="gallery-image-sub-2" style="background-image: url('${p.galleryImages[2]}')"></div>
                  <div class="gallery-image-sub-3" style="background-image: url('${p.galleryImages[3]}')"></div>
                </div>
              </div>
            </div>
            <div class="detail-info-sidebar">
              <div class="breadcrumbs">
                <a href="#" data-page="home" class="breadcrumb-link-shopee">Home</a>
                <span class="breadcrumb-separator-shopee">/</span>
                <a href="#" data-page="products" class="breadcrumb-link-shopee">${p.category}</a>
                <span class="breadcrumb-separator-shopee">/</span>
                <span class="breadcrumb-active-shopee">${p.name}</span>
              </div>
              <h1 class="detail-title-shopee">${p.name}</h1>
              <h2 class="detail-price-shopee">${p.price}</h2>
              <div class="rating-wrapper"></div>
              <h3 class="detail-subtitle-shopee">Description</h3>
              <p class="detail-description-shopee">${p.description}</p>
              <h3 class="detail-subtitle-shopee">Size</h3>
              <div class="size-picker">${sizesHTML}</div>
              <h3 class="detail-subtitle-shopee">Color</h3>
              <div class="color-picker">${colorsHTML}</div>
              <div class="detail-button-wrapper">
                <button class="btn-shopee">
                  <div class="btn-icon"></div>
                  <span class="truncate">Checkout Shopee Now</span>
                </button>
              </div>
              <div class="view-all-button-wrapper">
                <button data-page="products" class="btn btn-secondary">
                  <span class="truncate">← Back to Products</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
  
  // ===================================
  // 4. FUNGSI UTAMA (Router & Controller)
  // ===================================

  function showPage(pageName) {
    // 1. Update State
    state.currentPage = pageName;
    
    // 2. Sembunyikan semua halaman
    document.querySelectorAll(".page-content").forEach((page) => {
      page.classList.add("page-hidden");
    });
    
    // 3. Tampilkan halaman yang benar
    if (pageName === "detail") {
      mainView.classList.add("page-hidden"); // Sembunyikan wrapper utama
      pageDetail.classList.remove("page-hidden"); // Tampilkan wrapper detail
      renderDetail(); // Render konten detail
    } else {
      mainView.classList.remove("page-hidden"); // Tampilkan wrapper utama
      pageDetail.classList.add("page-hidden"); // Sembunyikan wrapper detail

      const activePage = document.getElementById(`page-${pageName}`);
      if (activePage) {
        activePage.classList.remove("page-hidden");
      }
      
      // 4. Render konten dinamis untuk halaman yang aktif
      if (pageName === "home") {
        renderHome();
      } else if (pageName === "products") {
        renderProducts();
      } else if (pageName === "portfolio") {
        renderPortfolio();
      }
    }
    
    // 5. Selalu render ulang navigasi untuk status aktif
    renderNav();
    window.scrollTo(0, 0);
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
  }

  init(); // Jalankan aplikasi
});