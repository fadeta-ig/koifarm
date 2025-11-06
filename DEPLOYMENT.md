# Deploy ke Vercel (Gratis)

Panduan lengkap untuk deploy aplikasi KoiFarm ke Vercel secara gratis.

## Prasyarat

1. Akun GitHub (sudah ada repositori ini)
2. Akun Vercel (daftar gratis di [vercel.com](https://vercel.com))

## Cara Deploy

### Metode 1: Deploy via Vercel Dashboard (Paling Mudah)

1. **Buka Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Klik tombol "Sign Up" atau "Login"
   - Pilih "Continue with GitHub" untuk login dengan akun GitHub Anda

2. **Import Project**
   - Setelah login, klik tombol "Add New..."
   - Pilih "Project"
   - Vercel akan menampilkan daftar repositori GitHub Anda
   - Cari dan pilih repositori `koifarm`
   - Klik "Import"

3. **Configure Project**
   - Vercel akan otomatis mendeteksi bahwa ini adalah proyek Next.js
   - **Framework Preset**: Next.js (terdeteksi otomatis)
   - **Build Command**: `npm run build` (sudah diset otomatis)
   - **Output Directory**: `.next` (sudah diset otomatis)
   - **Install Command**: `npm install` (sudah diset otomatis)

4. **Environment Variables (Opsional)**
   - Jika aplikasi Anda memerlukan environment variables (seperti API keys)
   - Tambahkan di bagian "Environment Variables"
   - Contoh: `NEXT_PUBLIC_API_URL`, `DATABASE_URL`, dll.

5. **Deploy**
   - Klik tombol "Deploy"
   - Tunggu proses build selesai (biasanya 2-5 menit)
   - Setelah selesai, Anda akan mendapat URL deployment (contoh: `koifarm.vercel.app`)

### Metode 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

   Untuk production deployment:
   ```bash
   vercel --prod
   ```

## Fitur Gratis Vercel

Dengan akun gratis, Anda mendapatkan:

- Unlimited deployments
- Automatic HTTPS/SSL
- Global CDN
- Preview deployments untuk setiap push
- Custom domains (bisa tambah domain sendiri)
- 100GB bandwidth per bulan
- Serverless functions

## Auto Deploy

Setelah setup awal, setiap kali Anda push ke branch `master` atau `main`, Vercel akan otomatis:
- Membuat preview deployment
- Men-deploy ke production (jika push ke main branch)
- Menjalankan build dan checks

## Custom Domain (Opsional)

Untuk menambah custom domain:
1. Buka project di Vercel Dashboard
2. Klik tab "Settings"
3. Pilih "Domains"
4. Masukkan domain Anda dan ikuti instruksi untuk setting DNS

## Environment Variables

Jika aplikasi memerlukan environment variables:

1. **Via Dashboard**:
   - Project Settings → Environment Variables
   - Tambahkan key dan value
   - Pilih environment (Production, Preview, Development)

2. **Via CLI**:
   ```bash
   vercel env add NAMA_VARIABLE
   ```

## Troubleshooting

### Build Error

Jika terjadi error saat build:
1. Cek error message di Vercel dashboard
2. Pastikan aplikasi bisa di-build di local: `npm run build`
3. Periksa dependencies di `package.json`

### Environment Variables

Jika aplikasi tidak berjalan dengan baik:
1. Pastikan semua environment variables sudah diset
2. Untuk public variables di Next.js, gunakan prefix `NEXT_PUBLIC_`

## Links Penting

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)

## Support

Jika ada masalah, cek:
- Vercel Dashboard untuk deployment logs
- [Vercel Status](https://www.vercel-status.com/)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
