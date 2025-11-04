// Menggunakan Vue 3 Global API dari CDN
const { createApp } = Vue;

// Membuat instance aplikasi Vue
createApp({
  data() {
    return {
      // (BARU) Variabel untuk melacak halaman
      currentPage: "home", // 'home' atau 'products'

      navLinks: [
        { name: "Home", href: "#", page: "home" }, // (MODIFIKASI)
        { name: "Products", href: "#", page: "products" }, // (MODIFIKASI)
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
      ],
      services: [
        {
          name: "Baju Dress",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAulH5J4k-O2YYV4mSRTufK_ruRe7HnLy_CBEpcsyvMzmAwc4SXvihjp74rMdCw0hWMPPwKfHfsBCW-0dcBYKvnmpz9J7MvOGjrE5AGqQEPqXNMlt-4PCttAPMMX_tDxDJZ9OKwUnCATlq3mNyryY16ybVPcm8p-spmKoZOkPxeosestp8vnrt9s8qDA6B8ylWeiz9SsBNd3nn0hb5KqJc0pN_Djtq-dPinUVkhM7Zv0ozU7C2VSoeaUmvUNJZrZ-HGTTffObl7qpIt",
          price: "$120", // (MODIFIKASI) Menambah harga untuk produk
        },
        {
          name: "Baju Anak",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgdrlGAZdoqyargYPj45RM4vlCcV5M8ea4Da-4Ty9I-bEwmZuLFIP3S3_OIhHw_PWoHlrVK-08ChjyzS0kd9mK7Ki2UjgqacxoVDcuf0BXb7r_J6AM64GK3uNa3-PnrnZ7iIE827sYvX11zDrinBMTnFXnPWjYHHXXkNMW8GYdMG0lvgNgEGq5xUSpsut2l-KO0JLmslJSsSPuaNWvyKt18owJSwazsv3jpcFET7vZZAngOCIRvgBpm2VD8w7aZs5q3hz-3C3-LQOJ",
          price: "$80", // (MODIFIKASI) Menambah harga untuk produk
        },
        {
          name: "Baju Pria",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuUPBoQAu5pXl1wyaZHFpjJChSJ-Rin_hgWtzAYF7LQO1eWbfnLy3pMlihr72lTODCLzwjvBdoZ1XZQ_CBhZLjTOScW9VRifqGi1neH9OSdi7HHK_e5R0zKxSI_GRFWoced9RGnlyiflasrL0s_U1wEDvGU_bwBM0YBrmlCC-iytxA9qIxgtTnVFoA-N6SOX_ipD83x4bzKtgOcdQjV2hWqGX-60u14BoFLlCO7Hp51qZI9hG4TBH7m90fNPdwDNcBY2F7i0D63AY3",
          price: "$150", // (MODIFIKASI) Menambah harga untuk produk
        },
        {
          name: "Custom",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnKiEx73VFM8QJpK4_5M-ZJkmSI1vWsBm7i79eS--w-u-BK0yrt7GS_RXNiVZeTLmVm8CKcGSdDC-kvxjo6vxjz3ojl5UWDUOrUb4Prkw8BPZtZHrFl5z1-qZNGJWAalqe4qsUWDH8pd-K40Y38GRLqA-kLAcL6_AeTPu3JSKWNJXckpylk0EQ7L5ltHhGrU9wEAOWtIa43GnInIgUjEsyYn5O9FrljA0PxjyuRkp8owOcuY_ArHduzO8UYj3YLus3PcVHa_3GXN8C",
          price: "$200", // (MODIFIKASI) Menambah harga untuk produk
        },
      ],
      featured: [
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
          img: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg", // (URL Diperbaiki)
        },
      ],
      testimonials: [
        // (Data testimoni tetap sama)
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
    };
  },
  
  // (BARU) Methods untuk mengontrol logika
  methods: {
    showPage(pageName) {
      if (pageName) {
        this.currentPage = pageName;
        window.scrollTo(0, 0); // Scroll ke atas saat ganti halaman
      }
    },
  },

}).mount("#app");