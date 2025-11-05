# Dokumentasi Landing Page Asyifa Koi Farm

## Ringkasan
Landing page menampilkan katalog awal Asyifa Koi Farm yang fokus pada pengenalan brand, highlight koleksi koi unggulan, dan konversi menuju konsultasi WhatsApp. Struktur utamanya disusun dalam beberapa section tematik berurutan dengan dukungan navigasi anchor dan elemen CTA yang konsisten.

## Informasi Konten Per Section

### Navigasi Utama
- Tautan anchor: Beranda, Varietas, Keunggulan, Proses, Testimoni, Galeri, Kunjungan.
- Tombol cepat ke WhatsApp tersedia melalui komponen `WhatsAppButton` yang menggunakan nomor `6281934301918` dan template pesan otomatis.

### Hero (`#beranda`)
- Identitas: label "Asyifa Koi Farm" dengan headline "Koi premium siap kirim dengan pendampingan ahli end-to-end".
- Deskripsi: menekankan koleksi bloodline juara, data kesehatan, dan video.
- CTA primer: tombol WhatsApp dengan template konsultasi.
- CTA sekunder: tautan "Jelajah katalog" menuju `/katalog`.
- Statistik singkat: 120+ koi siap kirim, 18 bloodline juara, tingkat survival 99%.
- Media: foto koi close-up dengan placeholder blur untuk performa.

### Varietas Unggulan (`#varietas`)
- Highlight empat varietas: Kohaku, Taisho Sanke, Showa Sanshoku, Tancho.
- Setiap kartu menyediakan preset filter katalog (misal `?variety=Kohaku&grade=Show`).
- Media menggunakan sumber Unsplash dengan gradien aksen.

### Keunggulan Farm (`#keunggulan`)
- Empat poin value proposition: monitoring kualitas air IoT, karantina 21 hari, bloodline tersertifikasi, pendampingan after sales.
- Format daftar dengan judul dan deskripsi singkat.

### Proses Pembelian (`#proses`)
- Empat langkah: Jelajahi & Filter, Konsultasi Cepat, Reservasi Aman, Pengiriman Terkontrol.
- Menjelaskan funnel dari eksplorasi katalog hingga pengiriman.

### Testimoni (`#testimoni`)
- Dua testimoni utama: Hendra S. (Juara Koi Show Surabaya 2024) dan pasangan Maya & Riko.
- Narasi menyorot hasil kontes dan transparansi data kesehatan.

### Galeri (`#galeri`)
- Empat item media dengan tag status (Ready, Reserved, Sold) dan gradien warna.
- Mendukung image dan video (contoh video Showa 58cm dengan poster fallback).

### Kunjungan Farm (`#kunjungan`)
- Informasi alamat: Jl. Raya Parung KM 24, Bogor.
- Jadwal kunjungan: by appointment, Senin–Sabtu 09.00–16.00 WIB.
- Tautan peta menuju Google Maps.
- CTA WhatsApp tambahan untuk menjadwalkan kunjungan.

### Footer
- Memuat hak cipta, navigasi ulang, dan CTA WhatsApp bersama social proof singkat.

## Struktur Layout
1. **Wrapper Halaman**: elemen `<div>` dengan latar radial/conic gradient ringan dan spacing responsif (`px-4` hingga `px-8`).
2. **Navigation**: sticky top-level navigation dengan glassmorphism.
3. **Main Content**: `max-w-6xl` dengan gap antar section `gap-16`, menampilkan section hero hingga visit secara linear.
4. **Section Styling**: banyak memakai komponen `GlassPanel` untuk panel semi transparan, grid responsif, dan gradient background halus.
5. **CTA Konsisten**: komponen `WhatsAppButton` dipakai di hero dan visit section dengan pesan terstandardisasi.

## Saran Pengembangan Lanjutan
1. **Integrasi Data Dinamis**
   - Sambungkan data varietas, galeri, dan testimoni ke API Bagisto agar konten mudah diperbarui tanpa rebuild.
   - Pastikan caching ISR/SSR untuk menjaga performa saat data sering berubah.

2. **Halaman Katalog & Detail**
   - Implementasikan halaman `/katalog` sesuai preset filter untuk konsistensi CTA.
   - Tambahkan halaman detail produk dengan galeri multi-media dan template pesan WhatsApp yang menyertakan ID produk.

3. **Optimasi Aksesibilitas & i18n**
   - Tambahkan dukungan preferensi `prefers-reduced-motion` pada animasi dan transisi.
   - Siapkan kerangka lokalisasi (misal `next-intl`) untuk menghadirkan versi bahasa Inggris bagi kolektor internasional.

4. **Pelacakan Analitik**
   - Integrasikan GA4 dan event tracking untuk CTA WhatsApp, klik preset filter, serta interaksi galeri.
   - Sediakan dashboard internal guna memonitor funnel konversi.

5. **SEO & Perf**
   - Tambah metadata terstruktur (schema Product, Organization) dan `next-sitemap` untuk sitemap otomatis.
   - Evaluasi penggunaan `next/image` CDN dan implementasi `priority` hanya untuk media kritikal guna menjaga LCP di bawah 2,5 detik.

6. **Keamanan & Formulir**
   - Ketika menambahkan formulir kunjungan, gunakan validasi sisi klien dan server, rate limiting, serta proteksi spam (reCAPTCHA atau hCaptcha).

7. **Testing & QA**
   - Siapkan test Storybook/Playwright untuk memastikan konsistensi UI.
   - Tambah unit test untuk utilitas (contoh generator template WhatsApp) dan snapshot test untuk komponen utama.

## Referensi Kode
- `app/(landing)/data/landing-content.ts`
- `app/(landing)/landing-page.tsx`
- Seluruh section di `app/(landing)/sections/*`
- Komponen pendukung di `app/(landing)/components/*`
