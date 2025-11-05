export const WHATSAPP_NUMBER = "6281298765432";

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

const UNSPLASH_PARAMS = "?auto=format&fit=crop&w=900&q=80" as const;

export const heroMedia = {
  src: `https://images.unsplash.com/photo-1506345282097-5b614c0371a4${UNSPLASH_PARAMS}`,
  alt: "Foto close-up koi berwarna oranye putih berenang",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z/C/HwAF/gL+Lp+gfQAAAABJRU5ErkJggg==",
} as const;

export const varietyHighlights = [
  {
    name: "Kohaku",
    description: "Kontras merah-putih dengan grade show.",
    preset: "?variety=Kohaku&grade=Show",
    media: `https://images.unsplash.com/photo-1544551763-46a013bb82ce${UNSPLASH_PARAMS}`,
  },
  {
    name: "Taisho Sanke",
    description: "Motif tiga warna dengan sumi teratur.",
    preset: "?variety=Taisho%20Sanke&size_cm=45-60",
    media: `https://images.unsplash.com/photo-1517130038641-a774d04afb3c${UNSPLASH_PARAMS}`,
  },
  {
    name: "Showa Sanshoku",
    description: "Pattern dinamis untuk kontes.",
    preset: "?variety=Showa&grade=High",
    media: `https://images.unsplash.com/photo-1520880867055-1e30d1cb001c${UNSPLASH_PARAMS}`,
  },
  {
    name: "Tancho",
    description: "Mahkota merah solid, simbol keberuntungan.",
    preset: "?variety=Tancho&availability=Ready",
    media: `https://images.unsplash.com/photo-1504593811423-6dd665756598${UNSPLASH_PARAMS}`,
  },
] as const;

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

export const galleryItems = [
  {
    title: "Tosai Kohaku 32cm",
    tag: "Ready",
    accent: "from-orange-400 via-rose-400 to-sky-400",
    media: {
      type: "image" as const,
      src: `https://images.unsplash.com/photo-1504608524841-42fe6f032b4b${UNSPLASH_PARAMS}`,
      alt: "Foto koi Kohaku berwarna merah dan putih",
    },
  },
  {
    title: "Nisai Showa 58cm",
    tag: "Reserved",
    accent: "from-sky-500 via-indigo-500 to-purple-500",
    media: {
      type: "video" as const,
      src: "https://cdn.coverr.co/videos/coverr-koi-fish-swimming-5181/1080p.mp4",
      poster: `https://images.unsplash.com/photo-1520880867055-1e30d1cb001c${UNSPLASH_PARAMS}`,
      alt: "Video koi Showa berenang di kolam",
    },
  },
  {
    title: "Tancho 45cm",
    tag: "Ready",
    accent: "from-rose-400 via-orange-300 to-amber-400",
    media: {
      type: "image" as const,
      src: `https://images.unsplash.com/photo-1518837695005-2083093ee35b${UNSPLASH_PARAMS}`,
      alt: "Foto koi Tancho dengan pola merah bulat di kepala",
    },
  },
  {
    title: "Shiro Utsuri 63cm",
    tag: "Sold",
    accent: "from-slate-500 via-slate-700 to-slate-900",
    media: {
      type: "image" as const,
      src: `https://images.unsplash.com/photo-1478694206463-91f014d63e19${UNSPLASH_PARAMS}`,
      alt: "Foto koi Shiro Utsuri hitam putih di kolam",
    },
  },
] as const;

export const visitInfo = {
  address: "Jl. Raya Parung KM 24, Bogor, Jawa Barat",
  schedule: "Kunjungan by appointment, Senin–Sabtu 09.00–16.00 WIB",
  mapUrl: "https://maps.google.com/?q=Asyifa+Koi+Farm",
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
