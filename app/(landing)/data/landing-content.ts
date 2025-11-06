export const WHATSAPP_NUMBER = "6281934301918";

export const WHATSAPP_TEMPLATE =
  "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.";

export const navigationLinks = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/products" },
  { label: "Tentang", href: "/about" },
  { label: "Galeri", href: "/gallery" },
  { label: "Testimoni", href: "/testimonials" },
  { label: "Kontak", href: "/contact" },
] as const;

export const heroStats = [
  { label: "Koi Siap Kirim", value: "120+" },
  { label: "Bloodline Juara", value: "18" },
  { label: "Tingkat Survival", value: "99%" },
] as const;

export const heroMedia = {
  src: "/uploads/placeholder.jpg",
  alt: "Foto close-up koi berwarna oranye putih berenang",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z/C/HwAF/gL+Lp+gfQAAAABJRU5ErkJggg==",
} as const;

// Removed dummy data - use admin panel to add varieties
export const varietyHighlights = [] as const;

export const farmAdvantages = [
  {
    title: "Water Quality Monitoring",
    description:
      "Parameter kolam dipantau IoT, pH stabil 7.2–7.4 dengan pergantian air harian 5%.",
  },
  {
    title: "Karantina & Health Check",
    description:
      "Setiap koi melewati 21 hari karantina, dilengkapi laporan kesehatan dan scraping mikroskopis.",
  },
  {
    title: "Bloodline Tersertifikasi",
    description:
      "Kemitraan breeder Jepang ternama memastikan kualitas genetik dan sertifikat resmi.",
  },
  {
    title: "Pendampingan After Sales",
    description:
      "Tim ahli siap memandu adaptasi kolam dan nutrisi pakan untuk menjaga performa warna.",
  },
] as const;

export const purchaseSteps = [
  {
    title: "Jelajahi & Filter",
    detail: "Gunakan filter varietas, grade, dan ukuran untuk menemukan kandidat terbaik.",
  },
  {
    title: "Konsultasi Cepat",
    detail:
      "Klik WhatsApp dengan template otomatis, sertakan minat Anda dan dapatkan kurasi personal.",
  },
  {
    title: "Reservasi Aman",
    detail:
      "Kami tandai koi sebagai Reserved setelah DP diterima. Update status realtime di katalog.",
  },
  {
    title: "Pengiriman Terkontrol",
    detail:
      "Packing oksigen 3 lapis, suhu dijaga 24 °C, update lokasi hingga tiba di kolam Anda.",
  },
] as const;

export const testimonials = [
  {
    name: "Hendra S.",
    title: "Juara Koi Show Surabaya 2024",
    message:
      "Varietas Showa dari Asyifa Koi Farm tampil maksimal di kontes. Tim memberi panduan grooming yang detail.",
  },
  {
    name: "Maya & Riko",
    title: "Collector Jakarta",
    message:
      "Suka sekali dengan transparansi data kesehatan dan update video rutin sebelum pengiriman.",
  },
] as const;

// Removed dummy data - use admin panel to add gallery items
export const galleryItems = [] as const;

export const visitInfo = {
  address: "Butun, Kec. Gandusari, Kabupaten Blitar, Jawa Timur",
  schedule: "Kunjungan by appointment, Senin–Sabtu 09.00–16.00 WIB",
  mapUrl: "https://www.google.com/maps?q=-8.059619,112.313774",
} as const;

export const sectionCopies = {
  varieties: {
    eyebrow: "Varietas",
    title: "Varietas Unggulan",
    description: "Pilih varietas favorit dengan preset filter siap pakai dan lihat status stok terbaru.",
  },
  advantages: {
    eyebrow: "Keunggulan",
    title: "Keunggulan Farm",
    description:
      "Dipercaya kolektor karena kualitas air terjaga, protokol kesehatan ketat, dan bloodline tersertifikasi.",
  },
  process: {
    eyebrow: "Proses",
    title: "Cara Beli",
    description:
      "Proses sederhana dari memilih koi sampai tiba di kolam Anda, lengkap dengan update real-time.",
  },
  testimonials: {
    eyebrow: "Review",
    title: "Testimoni",
    description: "Cerita singkat pelanggan yang puas dengan pendampingan Asyifa Koi Farm.",
  },
  gallery: {
    eyebrow: "Media",
    title: "Galeri Kolam",
    description:
      "Foto dan video dummy menampilkan suasana kolam dan koi pilihan untuk ilustrasi katalog.",
  },
  visit: {
    eyebrow: "Kunjungan",
    title: "Kunjungi Farm",
    description: "Atur janji temu untuk melihat langsung koleksi koi dan fasilitas karantina kami.",
  },
} as const;
