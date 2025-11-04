# Asyifa Koi Farm Landing Page

Landing page berbasis Next.js untuk menampilkan katalog-first dan CTA konsultasi WhatsApp Asyifa Koi Farm.

## Fitur Utama
- Hero dengan statistik utama dan CTA WhatsApp instan.
- Varietas unggulan dengan preset filter katalog.
- Keunggulan farm, alur pembelian, testimoni, dan galeri ringkas.
- CTA kunjungan farm dengan tautan Google Maps.

## Prasyarat
- Node.js 20 atau lebih baru.
- npm 10.

## Instalasi
```bash
npm install
```

## Menjalankan dalam mode pengembangan
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## Build produksi
```bash
npm run build
npm run start
```

## Linting
```bash
npm run lint
```

## Pengujian
```bash
npm test
```
Pengujian menggunakan runner bawaan Node (`node:test`) untuk memastikan konten hero, template WhatsApp, dan struktur utama tetap konsisten.

## Variabel Lingkungan
Tidak ada variabel khusus. Tambahkan file `.env.local` bila di masa depan diperlukan integrasi API.

## Struktur Direktori
```
app/
  layout.tsx      // metadata dan layout global
  page.tsx        // komposisi landing page
public/
  images/         // aset ilustrasi
```

## Lisensi
MIT.
