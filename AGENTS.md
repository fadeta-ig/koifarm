# Dokumen Teknis

## Pengembangan Landing Page + Katalog Produk

### Asyifa Koi Farm (Laravel Bagisto)

## 1. Ringkasan Proyek

Tujuan membangun situs katalog-first, inquiry-driven. Fokus pada foto koi, filter cepat, dan CTA WhatsApp. Desain modern, clean, responsive, dengan micro-interaction berbasis transform dan opacity.

## 2. Tujuan & KPI

-   Meningkatkan konversi klik WhatsApp dan kunjungan farm.
    
-   KPI utama
    
    -   CTR tombol WhatsApp minimal 3%.
        
    -   LCP maksimal 2,5 detik pada jaringan 4G.
        
    -   Skor Lighthouse: Performance minimal 85, SEO minimal 90.
        
    -   Rasio pencarian menuju klik produk minimal 25%.
        

## 3. Ruang Lingkup

-   Landing page modern dengan motion halus.
    
-   Katalog produk koi dengan filter multiatribut.
    
-   Halaman detail produk dengan galeri foto dan video.
    
-   CTA WhatsApp, formulir kunjungan farm, wishlist.
    
-   SEO on-page, schema, sitemap, analytics.
    
-   Fase awal tanpa pembayaran online.
    

## 4. Prinsip UX/UI & Motion

-   Visual utama adalah foto koi. Tipografi tegas. Ruang putih cukup.
    
-   Navigasi sederhana: Beranda, Katalog, Varietas, Cara Beli, Tentang, Kontak.
    
-   Responsif dari lebar 360 piksel sampai 1440 piksel ke atas.
    
-   Motion guideline
    
    -   Gunakan transform dan opacity. Hindari animasi layout langsung.
        
    -   Durasi interaksi 120–220 milidetik. Transisi section 300–500 milidetik.
        
    -   Sediakan preferensi reduced motion.
        

## 5. Arsitektur Solusi

-   Platform: Next JS + Bagisto
    
-   Frontend: Tailwind
    
-   Media: Penyimpanan public dengan varian ukuran gambar terstandar untuk thumbnail, kartu, dan detail.
    

## 6. Informasi Produk & Skema Atribut

-   Set atribut Koi
    
    -   variety, pattern, grade, size_cm, age_months, sex, bloodline, certificate, health_check_date, availability, price_idr, video_url, tank_location.
        
-   Kategori
    
    -   Varietas (Kohaku, Taisho Sanke, Showa, Shiro Utsuri, Tancho, dan lain-lain).
        
    -   Koleksi tematik (Show Quality, Nisai, Tosai, Jumbo).
        
-   Status produk
    
    -   Ready, Reserved, Sold.
        

## 7. Struktur Halaman

-   Beranda
    
    -   Hero dengan headline, subteks singkat, CTA Katalog dan CTA WhatsApp.
        
    -   Varietas unggulan dengan tautan preset filter.
        
    -   Keunggulan farm: kualitas air, karantina, health check, bloodline.
        
    -   Proses pembelian ringkas.
        
    -   Testimoni pembeli.
        
    -   Galeri foto atau video pendek.
        
    -   CTA kunjungan farm dan peta.
        
-   Katalog
    
    -   Pencarian teks.
        
    -   Filter atribut dan rentang harga.
        
    -   Urutkan: Terbaru, Harga, Ukuran, Popularitas.
        
    -   Pagination atau pemuatan bertahap.
        
-   Detail Produk
    
    -   Galeri media dengan badge status.
        
    -   Spesifikasi ringkas.
        
    -   Tombol WhatsApp dengan pesan template dinamis.
        
    -   Rekomendasi produk serupa.
        
-   Halaman Pendukung
    
    -   Varietas, Cara Beli, Tentang, Kontak.
        

## 8. User Flow (Pengunjung)

-   Jelajah cepat
    
    -   Masuk beranda. Lihat hero dan varietas unggulan.
        
    -   Klik varietas untuk membuka katalog dengan filter preset.
        
    -   Sesuaikan filter ukuran, harga, grade.
        
    -   Klik produk untuk membuka detail.
        
    -   Tekan CTA WhatsApp dengan pesan otomatis berisi nama produk dan tautan.
        
-   Pencarian terarah
    
    -   Gunakan bilah pencarian di katalog.
        
    -   Terapkan filter kombinasi. Ubah urutan hasil.
        
    -   Tambah ke wishlist tanpa wajib login jika diaktifkan.
        
-   Booking kunjungan farm
    
    -   Buka formulir jadwal. Isi nama, tanggal, jam, nomor WhatsApp.
        
    -   Kirim. Sistem mengirim notifikasi ke admin.
        

## 9. Admin Flow

-   Input Produk
    
    -   Pilih set atribut Koi.
        
    -   Isi atribut kunci: varietas, ukuran, grade, harga, ketersediaan.
        
    -   Unggah 3–6 foto. Pilih sampul. Tambahkan video bila ada.
        
-   Pengelolaan Status
    
    -   Perbarui menjadi Reserved atau Sold sesuai transaksi offline.
        
-   Kategori & Koleksi
    
    -   Kelompokkan per varietas.
        
    -   Buat koleksi tematik dari rule atribut.
        
-   Testimoni
    
    -   Unggah testimoni pembeli dengan foto asli. Atur urutan tampil.
        

## 10. Fitur Fungsional

-   Katalog & Filter
    
    -   Filter multiatribut. Pencarian teks. Urutkan fleksibel.
        
-   Detail Produk
    
    -   Galeri media. Spesifikasi ringkas. Rekomendasi serupa.
        
-   CTA WhatsApp
    
    -   Isi pesan otomatis: nama produk, SKU, tautan halaman.
        
-   Form Kunjungan Farm
    
    -   Validasi isian. Notifikasi ke admin melalui email atau API WhatsApp pihak ketiga.
        
-   Wishlist
    
    -   Simpan lokal di perangkat pada fase awal.
        
-   Galeri
    
    -   Grid responsif. Dukung foto dan video pendek.
        

## 11. SEO & Analitik

-   On-page
    
    -   Judul unik. Meta description 150–160 karakter.
        
    -   Heading terstruktur. Alt pada semua gambar.
        
    -   Internal linking dari varietas ke katalog terfilter.
        
-   Schema Markup
    
    -   Organization, Website dengan SearchAction, Product, BreadcrumbList.
        
-   Sitemap & Robots
    
    -   Sitemap untuk produk dan kategori. Robots.txt sesuai kebutuhan index.
        
-   URL
    
    -   Slug ramah SEO. Contoh struktur produk: domain/koi/varietas-nama-unik.
        
-   Analytics
    
    -   GA4. Lacak event klik CTA WhatsApp, pemakaian filter, scroll depth.
        

## 12. Aksesibilitas

-   Kontras warna sesuai standar.
    
-   Teks alternatif pada semua media.
    
-   Fokus jelas untuk navigasi keyboard.
    
-   Perhatikan preferensi reduced motion.
    

## 13. Kinerja & Optimasi

-   Gambar
    
    -   Standar ukuran: detail 2000 piksel, kartu 1200 piksel, thumbnail 600 piksel.
        
    -   Kompresi efisien. Gunakan varian ukuran dan lazy loading.
        
-   Asset
    
    -   Minimalkan blocking. Preload font penting. Preconnect sumber eksternal.
        
-   Cache
    
    -   Cache halaman dan fragmen bila memungkinkan. Manfaatkan Redis.
        
-   Interaksi
    
    -   Gunakan transform dan opacity untuk animasi agar tetap mulus.
        

## 14. Keamanan & Compliance

-   HTTPS dan HSTS.
    
-   Rate limit pada formulir. Proteksi antispam.
    
-   Sanitasi input. Header keamanan dasar.
    
-   Kebijakan privasi dan pemberitahuan cookie jika diperlukan.
    

## 15. Lingkungan & Deploy

-   Lingkungan pengembangan, staging, dan produksi terpisah.
    
-   Sinkronisasi media dengan proses terkontrol.
    
-   Konfigurasi cache untuk konfigurasi, rute, dan view di produksi.
    
-   Logging terpusat. Monitoring resource server.
    

## 16. QA Checklist

-   Responsif di rentang 360–1440 piksel.
    
-   LCP, CLS, dan TBT sesuai target.
    
-   Filter kombinasi bekerja akurat.
    
-   Gambar terkompresi. Alt terisi.
    
-   Schema tervalidasi di Rich Results Test.
    
-   Template pesan WhatsApp terisi benar.
    
-   Formulir kunjungan valid dan notifikasi terkirim.
    
-   Tidak ada tautan rusak dan 404 tidak terduga.
    

## 17. Observabilitas & Monitoring

-   Analitik klik CTA dan funnel filter ke klik produk.
    
-   Pengukuran performa lapangan dengan RUM.
    
-   Pelaporan error frontend dan backend. Notifikasi insiden.
    

## 18. Timeline Implementasi

-   Sprint 1
    
    -   Fondasi tema, header, footer, hero.
        
-   Sprint 2
    
    -   Katalog, kartu produk, filter, detail produk.
        
-   Sprint 3
    
    -   Landing penuh, testimoni, galeri, CTA WhatsApp, booking kunjungan.
        
-   Sprint 4
    
    -   SEO, schema, sitemap, optimasi performa, QA, hardening.
        
-   Go-Live
    
    -   Pemantauan metrik dan perbaikan cepat.
        

## 19. Risiko & Mitigasi

-   Gambar besar memperlambat LCP
    
    -   Terapkan kompresi, varian ukuran, dan lazy loading.
        
-   Filter kompleks membuat kueri lambat
    
    -   Optimalkan indeks database dan cache hasil.
        
-   Konten media tidak konsisten
    
    -   Standarisasi template unggah dan pedoman cropping.
        
-   Ketergantungan pihak ketiga untuk notifikasi
    
    -   Sediakan fallback ke email jika API WhatsApp gagal.
        

## 20. Definisi Taksonomi & Label

-   Varietas inti
    
    -   Kohaku, Taisho Sanke, Showa, Shiro Utsuri, Tancho, dan varietas populer lain.
        
-   Grade
    
    -   Show, High, Regular. Jelaskan kriteria internal singkat.
        
-   Status
    
    -   Ready: tersedia. Reserved: dipesan menunggu pelunasan. Sold: terjual.
 
Berikut phase dan checklist untuk setup dan coding website **Asyifa Koi Farm**, disusun berdasarkan dokumen teknis yang kamu upload:

----------

## **PHASES & CHECKLIST PENGEMBANGAN WEBSITE ASYIFA KOI FARM**

### **PHASE 1 — Setup & Fondasi**

**Tujuan:** Menyiapkan struktur awal dan sistem kerja

-   Setup server development (local/staging)
    
-   Instalasi Laravel + Bagisto 2.x
    
-   Konfigurasi `.env`, database, Redis
    
-   Setup Vite + Vue 3 + Tailwind CSS/utility CSS
    
-   Setup Git repo & branching (main/dev)
    
-   Setup tema dasar: header, footer, layout dasar
    

----------

### **PHASE 2 — Halaman & Komponen Inti**

**Tujuan:** Bangun struktur frontend & backend utama

-   Halaman Landing Page (Hero, varietas, keunggulan, galeri)
    
-   Halaman Katalog Produk (filter multi-atribut, pencarian, sorting)
    
-   Halaman Detail Produk (galeri media, spesifikasi, tombol WhatsApp)
    
-   Halaman Pendukung: Varietas, Cara Beli, Tentang, Kontak
    
-   Komponen Testimoni, Galeri, CTA kunjungan
    
-   Responsive design dari 360–1440 px
    
-   Setup Wishlist (localStorage)
    

----------

### **PHASE 3 — Fitur & Fungsi**

**Tujuan:** Implementasi logika dan integrasi

-   CRUD Produk dari admin
    
-   Sistem atribut produk koi (variety, grade, size, dll)
    
-   Filter multiatribut & urutan katalog
    
-   Template pesan dinamis tombol WhatsApp
    
-   Form kunjungan farm (validasi, notifikasi ke admin)
    
-   Manajemen kategori & koleksi
    
-   Input testimoni pembeli
    

----------

### **PHASE 4 — SEO, Analytics, QA**

**Tujuan:** Optimasi dan validasi kualitas

-   Setup meta SEO (title, meta desc, alt image, heading)
    
-   Setup schema markup (Product, Organization, BreadcrumbList)
    
-   Buat sitemap.xml dan robots.txt
    
-   Setup GA4 + tracking klik CTA WhatsApp, filter, scroll
    
-   QA test (responsiveness, filter logic, link check)
    
-   Validasi rich result di Google
    
-   Pastikan LCP < 2.5s, skor Lighthouse >85
    

----------

### **PHASE 5 — Deployment**

**Tujuan:** Publikasi ke server produksi

-   Siapkan server production (Nginx, SSL, Redis)
    
-   Deploy code ke production
    
-   Setup cache config, routes, view
    
-   Logging & monitoring resource server
    
-   Tes akhir + Go-Live
    
-   Pantau performa & konversi
    

----------

## **TOOLS & STACK**

-   **Backend:** Next JS + Bagisto 2.x
    
-   **Frontend:** Tailwind
    
-   **Cache:** Redis
    
-   **Integrasi:** WhatsApp API, Email notifikasi
    

----------