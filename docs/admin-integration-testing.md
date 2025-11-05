# Testing Guide - Admin Panel Integration

Panduan lengkap untuk testing integrasi antara Admin Panel dan Landing Page.

## ✅ Pre-requisites

```bash
# 1. Install dependencies
npm install

# 2. Pastikan .env.local sudah di-setup
# File sudah tersedia dengan default credentials
```

## 🚀 Cara Menjalankan

### Development Mode

```bash
# Start development server
npm run dev
```

Aplikasi akan berjalan di:
- **Landing Page**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

### Production Mode

```bash
# Build untuk production
npm run build

# Start production server
npm start
```

## 🧪 Testing Integrasi Step-by-Step

### Test 1: Login ke Admin Panel

1. Buka browser dan akses: http://localhost:3000/admin
2. Anda akan diarahkan ke halaman login
3. Masukkan credentials:
   - Username: `admin`
   - Password: `asyifakoi2024`
4. Klik tombol "Login"
5. ✅ **Expected**: Redirect ke dashboard admin

### Test 2: Create Varietas Baru

1. Di dashboard, klik "Varietas" di sidebar atau "Tambah Varietas" di quick actions
2. Klik tombol "Tambah Varietas" (biru)
3. Isi form:
   ```
   Nama Varietas: Asagi
   Deskripsi: Warna biru-abu dengan sisik merah di perut
   Preset Filter: ?variety=Asagi&grade=High
   URL Media: https://images.unsplash.com/photo-1544551763-46a013bb82ce?auto=format&fit=crop&w=900&q=80
   ```
4. Klik "Tambah Varietas"
5. ✅ **Expected**: Modal tertutup, varietas baru muncul di grid
6. **Verify Integration**:
   - Buka tab baru: http://localhost:3000
   - Scroll ke section "Varietas Unggulan"
   - ✅ **Expected**: Varietas "Asagi" muncul di landing page

### Test 3: Update Varietas

1. Di halaman admin varietas, klik tombol "Edit" pada salah satu varietas
2. Ubah deskripsi menjadi: "Updated description for testing"
3. Klik "Simpan Perubahan"
4. ✅ **Expected**: Perubahan tersimpan
5. **Verify Integration**:
   - Refresh landing page (http://localhost:3000)
   - ✅ **Expected**: Deskripsi yang diupdate muncul di landing page

### Test 4: Delete Varietas

1. Di halaman admin varietas, klik tombol "Hapus" pada varietas yang baru dibuat
2. Confirm dialog muncul
3. Klik "OK"
4. ✅ **Expected**: Varietas hilang dari list
5. **Verify Integration**:
   - Refresh landing page
   - ✅ **Expected**: Varietas tidak lagi muncul di landing page

### Test 5: Create Gallery Item

1. Klik "Galeri" di sidebar
2. Klik tombol "Tambah Item" (purple)
3. Isi form:
   ```
   Judul: Nisai Kohaku 40cm
   Status: Ready
   Tipe Media: image
   Warna Accent: Orange
   URL Media: https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80
   Deskripsi Alt: Foto koi Kohaku merah putih
   ```
4. Klik "Tambah Item"
5. ✅ **Expected**: Item baru muncul di grid
6. **Verify Integration**:
   - Refresh landing page
   - Scroll ke section "Galeri Kolam"
   - ✅ **Expected**: Item baru muncul di galeri

### Test 6: Create Testimoni

1. Klik "Testimoni" di sidebar
2. Klik tombol "Tambah Testimoni" (pink)
3. Isi form:
   ```
   Nama: Testing User
   Jabatan/Keterangan: Koi Enthusiast
   Pesan/Testimoni: Sangat puas dengan kualitas koi dan pelayanan yang diberikan. Highly recommended!
   ```
4. Klik "Tambah Testimoni"
5. ✅ **Expected**: Testimoni baru muncul di grid
6. **Verify Integration**:
   - Refresh landing page
   - Scroll ke section "Testimoni"
   - ✅ **Expected**: Testimoni baru muncul di landing page

### Test 7: Revalidation Time Test

Test untuk memastikan perubahan muncul setelah revalidation period:

1. Tambah varietas baru di admin panel
2. Buka landing page di tab lain (JANGAN refresh)
3. Tunggu 60 detik (revalidation period)
4. Refresh landing page
5. ✅ **Expected**: Data baru muncul

### Test 8: Responsive Design Test

Test responsiveness di berbagai device:

#### Mobile (375px)
1. Buka Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Pilih iPhone 12 Pro atau custom 375px
4. Navigate ke admin panel
5. ✅ **Expected**:
   - Sidebar tetap accessible
   - Forms mudah digunakan
   - Buttons tidak overlap

#### Tablet (768px)
1. Set viewport ke 768px
2. Test semua CRUD operations
3. ✅ **Expected**: Layout adaptif, grid menyesuaikan

#### Desktop (1920px)
1. Full screen browser
2. ✅ **Expected**: Grid menampilkan lebih banyak kolom

### Test 9: Performance Test

1. Tambah 10 varietas baru
2. Refresh landing page
3. Open DevTools > Network tab
4. ✅ **Expected**:
   - Page load < 3 detik
   - Images lazy loaded
   - No excessive re-renders

### Test 10: Error Handling Test

#### Invalid Media URL
1. Coba tambah varietas dengan URL gambar invalid
2. ✅ **Expected**: Gambar tidak muncul tapi form tetap bisa disubmit

#### Empty Form Submission
1. Coba submit form tanpa isi
2. ✅ **Expected**: Browser validation mencegah submit

#### Duplicate Data
1. Tambah data yang sama dua kali
2. ✅ **Expected**: Kedua data muncul (sistem tidak prevent duplicates)

## 📊 Data Flow Architecture

```
Admin Panel (Create/Update/Delete)
          ↓
API Routes (/api/admin/*)
          ↓
Write to content.json + revalidatePath("/")
          ↓
Landing Page Sections (Server Components)
          ↓
Read from content.json (with 60s revalidate)
          ↓
Display on Landing Page
```

## 🔧 Troubleshooting

### Issue: Perubahan tidak muncul di landing page

**Solution**:
1. Hard refresh landing page (Ctrl+Shift+R)
2. Clear browser cache
3. Restart dev server

### Issue: Build error saat production

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Issue: Admin tidak bisa login

**Solution**:
1. Check .env.local file exists
2. Verify credentials
3. Clear localStorage: `localStorage.clear()` di console

### Issue: Images tidak muncul

**Solution**:
1. Verify URL valid dan accessible
2. Check next.config.ts untuk remote patterns
3. Pastikan domain image di-whitelist

## ✨ Expected Behavior Summary

| Action | Admin Panel | Landing Page |
|--------|-------------|--------------|
| Create Varietas | ✅ Muncul langsung | ✅ Muncul setelah refresh |
| Update Varietas | ✅ Update langsung | ✅ Update setelah refresh |
| Delete Varietas | ✅ Hilang langsung | ✅ Hilang setelah refresh |
| Create Gallery | ✅ Muncul langsung | ✅ Muncul setelah refresh |
| Update Gallery | ✅ Update langsung | ✅ Update setelah refresh |
| Delete Gallery | ✅ Hilang langsung | ✅ Hilang setelah refresh |
| Create Testimoni | ✅ Muncul langsung | ✅ Muncul setelah refresh |
| Update Testimoni | ✅ Update langsung | ✅ Update setelah refresh |
| Delete Testimoni | ✅ Hilang langsung | ✅ Hilang setelah refresh |

## 📝 Notes

- **Revalidation**: Landing page menggunakan ISR dengan 60 detik revalidation
- **Auto Revalidation**: Setiap kali admin create/update/delete, `revalidatePath("/")` otomatis dipanggil
- **Data Storage**: Data disimpan di `app/admin/data/content.json`
- **Immediate Updates**: Perubahan akan langsung terlihat setelah hard refresh landing page
- **No Database Required**: Sistem menggunakan file-based storage untuk simplicity

## 🎯 Success Criteria

Integrasi dianggap berhasil jika:

1. ✅ Admin bisa login ke panel
2. ✅ Semua CRUD operations bekerja di admin panel
3. ✅ Perubahan dari admin panel muncul di landing page setelah refresh
4. ✅ Build production berhasil tanpa error
5. ✅ Responsive di mobile, tablet, dan desktop
6. ✅ Animations berjalan smooth
7. ✅ No console errors
8. ✅ Data persisten setelah server restart

## 🚀 Production Checklist

Sebelum deploy ke production:

- [ ] Ganti admin credentials di .env.local
- [ ] Setup database yang proper (PostgreSQL/MongoDB)
- [ ] Implementasi JWT authentication
- [ ] Enable HTTPS
- [ ] Setup rate limiting
- [ ] Configure proper CORS
- [ ] Add monitoring/logging
- [ ] Setup backup strategy untuk content.json
- [ ] Test di production-like environment
- [ ] Performance audit dengan Lighthouse
