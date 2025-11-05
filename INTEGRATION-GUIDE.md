# 🎯 Panduan Integrasi Admin & Landing Page

## 📋 Ringkasan

Aplikasi **Asyifa Koi Farm** memiliki integrasi lengkap antara Admin Panel dan Landing Page dengan operasi CRUD yang berfungsi penuh untuk 3 jenis konten:

- ✅ **Varietas Koi** (Varieties)
- ✅ **Galeri** (Gallery) - Gambar & Video
- ✅ **Testimoni** (Testimonials)

---

## 🏗️ Arsitektur Integrasi

```
┌─────────────────────────────────────────────────────────┐
│              DATA SOURCE (Single Source of Truth)       │
│              app/admin/data/content.json                │
└─────────────────────────────────────────────────────────┘
                          ↑
                    ↙         ↘
        ┌──────────────┐    ┌──────────────┐
        │ Admin Panel  │    │ Landing Page │
        │  (CRUD Ops)  │    │  (Display)   │
        └──────────────┘    └──────────────┘
              ↓                     ↓
    POST/PUT/DELETE           GET /api/content
    /api/admin/*              (revalidate: 60s)
```

### Alur Data:

1. **Admin melakukan perubahan** → API endpoint menulis ke `content.json`
2. **Landing page membaca** → Fetch dari `/api/content` dengan ISR (60 detik)
3. **Perubahan terlihat** → Otomatis dalam 60 detik tanpa redeploy

---

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

File `.env.local` sudah dibuat dengan kredensial default:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=asyifakoi2024
```

**⚠️ PENTING:** Ganti password ini untuk production!

### 3. Jalankan Development Server

```bash
npm run dev
```

Server akan berjalan di: `http://localhost:3000`

### 4. Build untuk Production

```bash
npm run build
npm start
```

---

## 🔐 Login ke Admin Panel

### URL Admin Panel
```
http://localhost:3000/admin/login
```

### Kredensial Default
- **Username:** `admin`
- **Password:** `asyifakoi2024`

### Halaman Admin Tersedia:
- `/admin/login` - Halaman login
- `/admin/dashboard` - Dashboard utama dengan statistik
- `/admin/dashboard/varieties` - Kelola varietas koi
- `/admin/dashboard/gallery` - Kelola galeri (gambar/video)
- `/admin/dashboard/testimonials` - Kelola testimoni

---

## 📝 Operasi CRUD yang Tersedia

### 1. Varietas Koi (Varieties)

**Endpoint:** `/api/admin/varieties`

#### ✅ CREATE - Tambah Varietas Baru
```bash
POST /api/admin/varieties
Content-Type: application/json

{
  "name": "Kohaku",
  "description": "Kontras merah-putih dengan grade show.",
  "preset": "?variety=Kohaku&grade=Show",
  "media": "https://images.unsplash.com/photo-..."
}
```

#### ✅ READ - Lihat Semua Varietas
```bash
GET /api/admin/varieties
```

#### ✅ UPDATE - Update Varietas
```bash
PUT /api/admin/varieties
Content-Type: application/json

{
  "id": "1",
  "name": "Kohaku Updated",
  "description": "Deskripsi baru",
  "preset": "?variety=Kohaku&grade=Show",
  "media": "https://..."
}
```

#### ✅ DELETE - Hapus Varietas
```bash
DELETE /api/admin/varieties?id=1
```

---

### 2. Galeri (Gallery)

**Endpoint:** `/api/admin/gallery`

#### ✅ CREATE - Tambah Item Galeri
```bash
POST /api/admin/gallery
Content-Type: application/json

{
  "title": "Tosai Kohaku 32cm",
  "tag": "Ready",  // Ready | Reserved | Sold
  "accent": "from-orange-400 via-rose-400 to-sky-400",
  "mediaType": "image",  // image | video
  "mediaSrc": "https://...",
  "mediaPoster": "https://...",  // Untuk video saja
  "mediaAlt": "Deskripsi gambar"
}
```

#### ✅ READ - Lihat Semua Galeri
```bash
GET /api/admin/gallery
```

#### ✅ UPDATE - Update Item Galeri
```bash
PUT /api/admin/gallery
Content-Type: application/json

{
  "id": "1",
  "title": "Judul Baru",
  ...
}
```

#### ✅ DELETE - Hapus Item Galeri
```bash
DELETE /api/admin/gallery?id=1
```

---

### 3. Testimoni (Testimonials)

**Endpoint:** `/api/admin/testimonials`

#### ✅ CREATE - Tambah Testimoni
```bash
POST /api/admin/testimonials
Content-Type: application/json

{
  "name": "Hendra S.",
  "title": "Juara Koi Show Surabaya 2024",
  "message": "Testimoni yang sangat bagus..."
}
```

#### ✅ READ - Lihat Semua Testimoni
```bash
GET /api/admin/testimonials
```

#### ✅ UPDATE - Update Testimoni
```bash
PUT /api/admin/testimonials
Content-Type: application/json

{
  "id": "1",
  "name": "Hendra S.",
  "title": "Judul baru",
  "message": "Pesan baru"
}
```

#### ✅ DELETE - Hapus Testimoni
```bash
DELETE /api/admin/testimonials?id=1
```

---

## 🧪 Cara Testing CRUD

### Testing melalui UI (Recommended)

1. **Login ke Admin Panel**
   - Buka `http://localhost:3000/admin/login`
   - Login dengan kredensial default

2. **Test CREATE (Tambah Data)**
   - Pilih menu (Varietas/Galeri/Testimoni)
   - Klik tombol "Tambah [Jenis]"
   - Isi form dan klik "Simpan"
   - ✅ Data harus muncul dalam daftar

3. **Test READ (Lihat Data)**
   - Dashboard menampilkan statistik total
   - Setiap halaman menampilkan daftar item
   - ✅ Semua data terlihat dengan benar

4. **Test UPDATE (Edit Data)**
   - Klik tombol "Edit" pada item
   - Ubah data dan klik "Simpan"
   - ✅ Data harus terupdate

5. **Test DELETE (Hapus Data)**
   - Klik tombol "Hapus" pada item
   - Konfirmasi penghapusan
   - ✅ Data harus hilang dari daftar

6. **Verifikasi di Landing Page**
   - Buka `http://localhost:3000`
   - Tunggu hingga 60 detik (revalidation time)
   - ✅ Perubahan muncul di landing page

### Testing melalui API (Advanced)

Gunakan curl atau Postman untuk testing endpoint API:

```bash
# GET all varieties
curl http://localhost:3000/api/admin/varieties

# POST new variety
curl -X POST http://localhost:3000/api/admin/varieties \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Variety",
    "description": "Test description",
    "preset": "?test=true",
    "media": "https://example.com/image.jpg"
  }'

# DELETE variety
curl -X DELETE "http://localhost:3000/api/admin/varieties?id=1"
```

---

## 📁 Struktur File Penting

### Admin Panel
```
app/admin/
├── login/page.tsx              # Halaman login
├── dashboard/
│   ├── page.tsx                # Dashboard utama
│   ├── varieties/page.tsx      # CRUD Varietas
│   ├── gallery/page.tsx        # CRUD Galeri
│   └── testimonials/page.tsx   # CRUD Testimoni
├── components/
│   ├── auth-guard.tsx          # Proteksi route
│   └── sidebar.tsx             # Navigasi sidebar
├── lib/auth.ts                 # Utility autentikasi
└── data/content.json           # 📦 DATA SOURCE
```

### API Routes
```
app/api/
├── content/route.ts            # Public API (Landing Page)
└── admin/
    ├── auth/route.ts           # Login API
    ├── varieties/route.ts      # Varieties CRUD
    ├── gallery/route.ts        # Gallery CRUD
    └── testimonials/route.ts   # Testimonials CRUD
```

### Landing Page
```
app/(landing)/
├── landing-page.tsx            # Main landing page
├── sections/
│   ├── variety-section.tsx     # Fetch varieties
│   ├── gallery-section.tsx     # Fetch gallery
│   └── testimonials-section.tsx # Fetch testimonials
└── components/
    └── ...
```

---

## 🔄 Detail Integrasi Landing Page

Setiap section di landing page fetch data dari API:

### Variety Section
```typescript
// app/(landing)/sections/variety-section.tsx
async function getVarieties() {
  const res = await fetch('http://localhost:3000/api/content', {
    next: { revalidate: 60 } // ISR: Revalidate tiap 60 detik
  });
  const data = await res.json();
  return data.varieties;
}
```

### Gallery Section
```typescript
// app/(landing)/sections/gallery-section.tsx
async function getGallery() {
  const res = await fetch('http://localhost:3000/api/content', {
    next: { revalidate: 60 }
  });
  const data = await res.json();
  return data.gallery;
}
```

### Testimonials Section
```typescript
// app/(landing)/sections/testimonials-section.tsx
async function getTestimonials() {
  const res = await fetch('http://localhost:3000/api/content', {
    next: { revalidate: 60 }
  });
  const data = await res.json();
  return data.testimonials;
}
```

**Keuntungan ISR:**
- ✅ Perubahan otomatis terlihat dalam 60 detik
- ✅ Tidak perlu redeploy aplikasi
- ✅ Performance tetap optimal (static-first)
- ✅ SEO friendly

---

## 🎨 Fitur Admin UI

### 1. Dashboard
- **Statistik Cards:** Total varietas, galeri, testimoni
- **Quick Actions:** Link cepat ke setiap halaman manajemen
- **Glassmorphism Design:** Modern & elegant

### 2. Halaman CRUD
- **Modal Forms:** Popup untuk tambah/edit data
- **Image Preview:** Preview gambar sebelum save
- **Confirmation Dialogs:** Konfirmasi sebelum hapus
- **Loading States:** Indikator loading saat proses
- **Responsive Grid:** Layout adaptif untuk semua device

### 3. Form Validation
- Required field checking
- Real-time form state management
- Error handling & display

---

## 🔒 Keamanan

### Status Saat Ini (Development Only)

⚠️ **PERINGATAN:** Implementasi saat ini hanya untuk development!

**Limitasi Keamanan:**
- ❌ Password plaintext di environment variables
- ❌ Token menggunakan Base64 encoding sederhana
- ❌ Tidak ada rate limiting
- ❌ Tidak ada CSRF protection
- ❌ Tidak ada input validation yang ketat
- ❌ File-based storage (tidak scalable)

### Rekomendasi untuk Production

1. **Authentication:**
   ```bash
   npm install jsonwebtoken bcrypt
   ```
   - Gunakan JWT dengan secret key yang kuat
   - Hash password dengan bcrypt
   - Implement refresh token

2. **Database:**
   - Migrasi ke PostgreSQL atau MongoDB
   - Gunakan ORM (Prisma/TypeORM)
   - Implement proper transactions

3. **Security:**
   - Add rate limiting (express-rate-limit)
   - Add CSRF protection
   - Add input validation (Zod/Yup)
   - Add audit logging
   - Add file upload validation
   - Implement RBAC (Role-Based Access Control)

4. **Environment:**
   - Gunakan secret management service
   - Separate dev/staging/prod configs
   - Never commit .env files

---

## 📊 Data Schema

### content.json Structure

```json
{
  "varieties": [
    {
      "id": "string",           // Auto-generated timestamp
      "name": "string",          // Nama varietas
      "description": "string",   // Deskripsi singkat
      "preset": "string",        // Query string untuk filter
      "media": "string"          // URL gambar
    }
  ],
  "gallery": [
    {
      "id": "string",
      "title": "string",
      "tag": "Ready|Reserved|Sold",
      "accent": "string",        // Tailwind gradient classes
      "mediaType": "image|video",
      "mediaSrc": "string",      // URL media
      "mediaPoster": "string",   // Thumbnail untuk video
      "mediaAlt": "string"       // Alt text
    }
  ],
  "testimonials": [
    {
      "id": "string",
      "name": "string",          // Nama customer
      "title": "string",         // Jabatan/keterangan
      "message": "string"        // Isi testimoni
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Issue 1: Admin tidak bisa login
**Solusi:**
- Pastikan `.env.local` ada dan berisi kredensial yang benar
- Restart development server setelah membuat `.env.local`
- Cek browser console untuk error messages

### Issue 2: Perubahan tidak muncul di landing page
**Solusi:**
- Tunggu hingga 60 detik (revalidation time)
- Refresh halaman dengan hard reload (Ctrl+Shift+R)
- Cek `app/admin/data/content.json` untuk memastikan data tersimpan

### Issue 3: Build error "fetch failed"
**Solusi:**
- Error ini normal saat build time
- Build akan tetap succeed
- Pages akan fetch data saat runtime

### Issue 4: File permission error
**Solusi:**
```bash
chmod 666 app/admin/data/content.json
```

---

## ✅ Checklist Testing CRUD

### Varietas
- [ ] Tambah varietas baru
- [ ] Edit varietas existing
- [ ] Hapus varietas
- [ ] Lihat di landing page

### Galeri
- [ ] Tambah gambar
- [ ] Tambah video
- [ ] Edit item galeri
- [ ] Hapus item galeri
- [ ] Lihat di landing page

### Testimoni
- [ ] Tambah testimoni
- [ ] Edit testimoni
- [ ] Hapus testimoni
- [ ] Lihat di landing page

### Integration
- [ ] Login berhasil
- [ ] Dashboard menampilkan stats yang benar
- [ ] Semua menu navigasi berfungsi
- [ ] Logout berhasil
- [ ] Auth protection berfungsi (redirect ke login)

---

## 📞 Support

Jika ada pertanyaan atau issues:

1. Cek file `content.json` untuk debugging data
2. Lihat browser console untuk error messages
3. Cek terminal untuk server-side errors
4. Review dokumentasi API di atas

---

## 🎉 Status Integrasi

### ✅ Yang Sudah Berfungsi:
- ✅ Full CRUD untuk 3 jenis konten
- ✅ Authentication system
- ✅ Admin panel UI lengkap
- ✅ Landing page terintegrasi
- ✅ Auto-revalidation (ISR)
- ✅ File-based data persistence
- ✅ Build process berhasil

### 🚧 Yang Perlu Ditingkatkan untuk Production:
- 🚧 Database migration (PostgreSQL/MongoDB)
- 🚧 Proper JWT authentication
- 🚧 Input validation & sanitization
- 🚧 API rate limiting
- 🚧 Error handling yang lebih robust
- 🚧 Audit logging
- 🚧 Backup & recovery system
- 🚧 Image upload & optimization
- 🚧 Testing suite (unit & integration tests)

---

**Dibuat:** 2025-11-05
**Status:** ✅ Fully Integrated & Functional
**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
