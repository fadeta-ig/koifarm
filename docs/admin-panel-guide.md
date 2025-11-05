# Admin Panel Guide - Asyifa Koi Farm

## Overview
Panel admin untuk mengelola konten dinamis website Asyifa Koi Farm. Panel ini memungkinkan admin untuk menambah, mengedit, dan menghapus data varietas koi, galeri, dan testimoni tanpa perlu rebuild aplikasi.

## Fitur Utama

### 1. **Dashboard**
- Statistik real-time jumlah varietas, galeri, dan testimoni
- Quick actions untuk navigasi cepat
- UI/UX modern dengan glassmorphism dan animasi smooth

### 2. **Manajemen Varietas**
- CRUD lengkap untuk varietas koi
- Upload URL gambar
- Pengaturan preset filter untuk katalog
- Preview gambar real-time

### 3. **Manajemen Galeri**
- Support image dan video
- Status tag (Ready, Reserved, Sold)
- Pilihan gradient accent untuk setiap item
- Preview media

### 4. **Manajemen Testimoni**
- Form untuk nama, jabatan, dan pesan
- Preview real-time testimoni
- Quote icon styling

## Akses Admin Panel

### URL
```
http://localhost:3000/admin
```

### Default Credentials
```
Username: admin
Password: asyifakoi2024
```

**PENTING**: Ganti kredensial default di file `.env.local` untuk production!

## Setup Environment

Buat file `.env.local` di root project dengan konfigurasi berikut:

```env
# Admin Panel Configuration
ADMIN_USERNAME=admin
ADMIN_PASSWORD=asyifakoi2024

# Public Environment Variables
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=asyifakoi2024
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## File Structure

```
app/
├── admin/
│   ├── components/
│   │   ├── auth-guard.tsx       # Komponen proteksi route
│   │   ├── sidebar.tsx          # Navigasi sidebar
│   │   └── stat-card.tsx        # Kartu statistik
│   ├── dashboard/
│   │   ├── page.tsx             # Halaman dashboard utama
│   │   ├── varieties/
│   │   │   └── page.tsx         # Manajemen varietas
│   │   ├── gallery/
│   │   │   └── page.tsx         # Manajemen galeri
│   │   └── testimonials/
│   │       └── page.tsx         # Manajemen testimoni
│   ├── data/
│   │   └── content.json         # Storage JSON untuk konten
│   ├── lib/
│   │   └── auth.ts              # Utility autentikasi
│   ├── login/
│   │   └── page.tsx             # Halaman login
│   ├── layout.tsx               # Layout admin
│   └── page.tsx                 # Redirect handler
└── api/
    ├── admin/
    │   ├── auth/
    │   │   └── route.ts         # API autentikasi
    │   ├── varieties/
    │   │   └── route.ts         # CRUD varieties API
    │   ├── gallery/
    │   │   └── route.ts         # CRUD gallery API
    │   └── testimonials/
    │       └── route.ts         # CRUD testimonials API
    └── content/
        └── route.ts             # Public API untuk landing page
```

## Data Storage

Data disimpan di `app/admin/data/content.json` dengan struktur:

```json
{
  "varieties": [...],
  "gallery": [...],
  "testimonials": [...]
}
```

## Integrasi dengan Landing Page

Landing page secara otomatis mengambil data dari API `/api/content` dengan:
- **Revalidation**: 60 detik (ISR - Incremental Static Regeneration)
- **Sections yang terintegrasi**:
  - Variety Section
  - Gallery Section
  - Testimonials Section

## Keamanan

### Saat Ini (Development)
- Simple password-based authentication
- LocalStorage untuk session management
- Basic token generation

### Rekomendasi untuk Production
1. Implementasi JWT dengan expiration
2. Gunakan database (PostgreSQL/MongoDB) untuk storage
3. Hash password dengan bcrypt
4. Implementasi rate limiting
5. HTTPS wajib
6. Environment variables yang aman
7. Implementasi RBAC (Role-Based Access Control)

## UI/UX Features

### Animations
- Fade-in transitions untuk page load
- Scale animations untuk hover states
- Smooth modal transitions
- Card hover effects dengan scale transform
- Loading spinners untuk async operations

### Responsiveness
- Mobile-first design
- Breakpoints: sm, md, lg, xl
- Grid layout yang adaptif
- Touch-friendly buttons dan forms

### Design System
- Glassmorphism effects
- Gradient accents
- Dark theme dengan slate colors
- Consistent spacing dengan Tailwind
- Backdrop blur effects

## API Endpoints

### Public Endpoints
- `GET /api/content` - Mendapatkan semua konten

### Admin Endpoints (Protected)
- `POST /api/admin/auth` - Login
- `GET /api/admin/varieties` - List varietas
- `POST /api/admin/varieties` - Tambah varietas
- `PUT /api/admin/varieties` - Update varietas
- `DELETE /api/admin/varieties?id={id}` - Hapus varietas
- (Similar endpoints untuk gallery dan testimonials)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Troubleshooting

### Issue: Data tidak muncul di landing page
- Pastikan `content.json` memiliki data yang valid
- Check console untuk error fetch
- Verify environment variables

### Issue: Tidak bisa login
- Verify credentials di `.env.local`
- Clear browser localStorage
- Check browser console untuk error

### Issue: Gambar tidak muncul
- Pastikan URL gambar valid dan accessible
- Check `next.config.ts` untuk remote patterns
- Verify CORS settings jika menggunakan custom image host

## Future Improvements

1. Image upload dengan cloud storage (Cloudinary/AWS S3)
2. Drag & drop untuk reordering items
3. Bulk operations (multi-select delete)
4. Export/import data (JSON/CSV)
5. Activity logs
6. Multi-language support
7. Advanced search dan filtering
8. Rich text editor untuk deskripsi
9. Image optimization tools
10. Analytics dashboard
