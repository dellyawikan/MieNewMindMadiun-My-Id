# 📝 PANDUAN EDIT HTML - Mie Newmind

HTML adalah "kerangka" website - menentukan isi halaman (text, gambar, tombol, form, dll). Panduan ini menjelaskan bagian-bagian HTML yang sering diubah dengan contoh lengkap dan step-by-step.

---

## 📂 FILE HTML YANG PENTING

Website terdiri dari 7 halaman HTML utama:

| File | Nama Halaman | Untuk apa | Jam Edit |
|------|-------------|----------|---------|
| `index.html` | Beranda | Halaman utama (hero, promo, featured) | Sering |
| `menu.html` | Menu | Tampilan menu produk semua kategori | Sering |
| `about.html` | Tentang Kami | Sejarah, visi, misi toko | Kadang |
| `location.html` | Lokasi Kami | Alamat, jam buka, Google Maps | Sering |
| `reservation.html` | Reservasi | Form reservasi meja | Sering |
| `karir.html` | Karir | Lowongan pekerjaan | Kadang |
| `franchise.html` | Franchise | Informasi kerjasama franchise | Kadang |

**Mana yang paling sering diubah?** 
- `index.html` (halaman utama dengan hero & promo)
- `reservation.html` (ubah jam, nomor WhatsApp)
- `location.html` (ubah alamat, jam buka)

---

## 🎯 BAGIAN-BAGIAN HTML YANG SERING DIUBAH

### ✅ BAGIAN 1: NAVBAR - MENU NAVIGASI ATAS (Baris ~50-80)

**Untuk apa:** Mengatur menu navigasi atas (menu bar yang ada di semua halaman) - Home, Menu, About, Location, dll

**Mengapa penting?** Menu navigasi ada di semua halaman browser, user gunakan buat navigate.

---

#### Langkah 1: Temukan Bagian Navbar

**Buka `index.html` dengan text editor:**
1. Tekan `Ctrl+F` (search)
2. Cari: `<nav class="main-nav">`
3. Akan ketemu di bagian header

**Struktur navbar:**

```html
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <img src="assets/logo/logo.png" alt="Logo Mie Newmind" class="brand-logo">
      
      <nav class="main-nav">
        <a href="index.html" class="nav-link">Beranda</a>
        <a href="menu.html" class="nav-link">Menu</a>
        <a href="about.html" class="nav-link">Tentang</a>
        <a href="location.html" class="nav-link">Lokasi</a>
        <a href="reservation.html" class="nav-link">Reservasi</a>
        <a href="karir.html" class="nav-link">Karir</a>
        <a href="franchise.html" class="nav-link">Franchise</a>
      </nav>
      
      <div class="header-actions">
        <button class="theme-toggle">🌙</button>
        <button class="lang-toggle">🌐</button>
      </div>
    </div>
  </div>
</header>
```

---

#### Langkah 2: Ubah Urutan Menu (Reorder)

**Scenario:** Ingin pindahkan "Karir" ke paling akhir sebelum "Franchise"

**Dari ini (urutan lama):**
```html
<nav class="main-nav">
  <a href="index.html">Beranda</a>
  <a href="menu.html">Menu</a>
  <a href="about.html">Tentang</a>
  <a href="location.html">Lokasi</a>
  <a href="reservation.html">Reservasi</a>
  <a href="karir.html">Karir</a>        ← Ada di posisi 6
  <a href="franchise.html">Franchise</a>
</nav>
```

**Jadi ini (urutan baru):**
```html
<nav class="main-nav">
  <a href="index.html">Beranda</a>
  <a href="menu.html">Menu</a>
  <a href="about.html">Tentang</a>
  <a href="location.html">Lokasi</a>
  <a href="reservation.html">Reservasi</a>
  <a href="franchise.html">Franchise</a>
  <a href="karir.html">Karir</a>        ← Pindah ke posisi 7
</nav>
```

**Cara:** Cukup cut & paste baris `<a href="karir.html">...` ke posisi baru.

---

#### Langkah 3: Ubah Text Menu

**Scenario:** Ubah "Tentang" jadi "Tentang Kami"

**Dari:**
```html
<a href="about.html">Tentang</a>
```

**Jadi:**
```html
<a href="about.html">Tentang Kami</a>
```

---

#### Langkah 4: Tambah Menu Baru

**Scenario:** Tambah menu "Promo" di antara "Menu Kami" dan "Tentang Kami"

**Dari:**
```html
<a href="menu.html">Menu</a>
<a href="about.html">Tentang</a>
```

**Jadi:**
```html
<a href="menu.html">Menu</a>
<a href="promo.html">Promo</a>          ← Menu baru ditambah
<a href="about.html">Tentang</a>
```

**PENTING:** 
1. File `promo.html` harus sudah ada di folder root
2. Kecuali kalau belum buat, lebih baik jangan tambah dulu

---

### ✅ BAGIAN 2: NOMOR WHATSAPP & TELEPON (Banyak tempat)

**Untuk apa:** Mengubah nomor WhatsApp dan telepon yang terima chat dari user

**Mengapa penting?** Saat user klik "Chat WhatsApp" atau "Hubungi Kami", nomor ini yang digunakan.

---

#### Langkah 1: Temukan Semua Tempat Nomor WhatsApp

**Metode Cepat - Pakai Find & Replace:**

1. Buka `index.html` dengan text editor
2. Tekan `Ctrl+H` (buka Find & Replace)
3. Di field "Find": ketik nomor WhatsApp yang sekarang → `6285604030473`
4. Klik "Replace All" untuk lihat ada berapa tempat
5. Total akan muncul: "XX matches found"

**Atau manual - Cari dengan Ctrl+F:**

1. Tekan `Ctrl+F`
2. Cari: `6285604030473`
3. Browser akan highlight semua lokasi nomor ini

Biasanya ada di tempat-tempat seperti:

```html
<!-- 1. Tombol Chat WhatsApp di hero -->
<a href="https://wa.me/6285604030473" class="btn-primary">
  Chat WhatsApp
</a>

<!-- 2. Tombol telepon -->
<a href="tel:6285604030473" class="btn-secondary">
  Hubungi Kami
</a>

<!-- 3. Form WhatsApp preset -->
<a href="https://wa.me/6285604030473?text=Halo, saya ingin informasi">
  Pesan Sekarang
</a>

<!-- 4. Footer contact info -->
<p>WhatsApp: <a href="https://wa.me/6285604030473">+62 856 0403 0473</a></p>
```

---

#### Langkah 2: Ubah Nomor (Pakai Find & Replace)

**Step 1:** Tekan `Ctrl+H` (Find & Replace)

**Step 2:** Di field "Find", ketik nomor lama:
```
6285604030473
```

**Step 3:** Di field "Replace", ketik nomor baru:
```
6281234567890
```

**Step 4:** Klik "Replace All" untuk ganti semua sekaligus

**Hasil:** Semua nomor di seluruh file otomatis berubah! ✅

---

#### Langkah 3: Format Nomor yang Benar

**PENTING - Tiga format:

| Untuk | Format | Contoh | Benar? |
|-------|--------|--------|--------|
| WhatsApp link | `62` + nomor | `6285604030473` | ✅ Benar |
| Telepon link | `0` + nomor | `085604030473` | ✅ Benar |
| Display text | `+62 8` format | `+62 856 0403 0473` | ✅ Hanya text |

**Contoh kode yang BENAR:**

```html
<!-- Format WhatsApp link (pakai 62, tanpa +, tanpa spasi) -->
<a href="https://wa.me/6285604030473">Chat WhatsApp</a>

<!-- Format telepon link (pakai 0) -->
<a href="tel:085604030473">Hubungi Kami</a>

<!-- Format display (bisa pakai + dan spasi, tapi hanya untuk tampilan) -->
<p>Atau hubungi: +62 856 0403 0473</p>
```

---

### ✅ BAGIAN 3: GAMBAR & FOTO (Tag <img>)

**Untuk apa:** Mengganti foto/gambar di website

**Dimana gambar tersimpan?** Di folder `assets/` dengan struktur:
```
assets/
  ├── logo/          (logo)
  ├── pages/         (gambar halaman)
  └── products/      (foto produk)
        ├── noodles/
        ├── appetizers/
        ├── beverages/
        └── desserts/
```

---

#### Langkah 1: Pahami Tag Gambar HTML

**Struktur tag `<img>`:**

```html
<img 
  src="assets/pages/hero.jpg"           ← Path file gambar
  alt="Hero Mie Newmind"                ← Text jika gambar error
  class="hero-image"                    ← CSS class untuk styling
  width="800"                           ← Lebar (optional)
  height="600"                          ← Tinggi (optional)
>
```

**Bagian-bagian penting:**
- `src="..."` = Letak/path file gambar (PENTING!)
- `alt="..."` = Text alternatif jika gambar tidak loading
- `width/height` = Ukuran gambar (optional)

---

#### Langkah 2: Cari Gambar yang Ingin Diubah

**Scenario:** Ganti gambar hero di halaman utama

**Step 1:** Buka `index.html`

**Step 2:** Tekan `Ctrl+F` cari: `<img` 

**Step 3:** Cari gambar yang ada di bagian hero:

```html
<!-- Bagian hero -->
<div class="hero-section">
  <img src="assets/pages/hero-image.jpg" alt="Hero Mie Newmind">
</div>
```

---

#### Langkah 3: Ganti Dengan Gambar Baru

**Scenario:** Ada gambar baru di `assets/pages/hero-baru.jpg` - ganti dengan itu

**Dari:**
```html
<img src="assets/pages/hero-image.jpg" alt="Hero Mie Newmind">
```

**Jadi:**
```html
<img src="assets/pages/hero-baru.jpg" alt="Hero Mie Newmind">
```

**Simpan, reload browser, gambar baru muncul!** ✅

---

#### Langkah 4: Upload Gambar Baru

**Jika belum ada file gambar baru:**

1. Persiapkan file gambar (JPEG, PNG, atau WebP)
2. Kompresi agar ukuran kecil (ideally < 500KB)
3. Beri nama yang jelas: `hero-baru.jpg` atau `hero-2024.jpg`
4. Upload ke folder yang sesuai:
   - Hero image → `assets/pages/`
   - Product image → `assets/products/noodles/` (sesuai kategori)
   - Logo → `assets/logo/`
5. Ubah path di HTML

---

#### Contoh: Ganti Semua Product Images

Saat update menu produk dengan foto baru:

**Sebelumnya:**
```html
<img src="assets/products/noodles/mie-bupati.png">
<img src="assets/products/appetizers/siomay.png">
<img src="assets/products/beverages/taro.png">
```

**Sesudahnya (dengan foto baru):**
```html
<img src="assets/products/noodles/mie-bupati-baru.jpg">
<img src="assets/products/appetizers/siomay-baru.jpg">
<img src="assets/products/beverages/taro-baru.jpg">
```

---

### ✅ BAGIAN 4: ALAMAT TOKO & JAM BUKA (Location Section)

**Untuk apa:** Mengubah informasi toko - alamat, jam operasional, nomor telepon

---

#### Langkah 1: Cari Bagian Lokasi

**Buka `location.html`:**

1. Tekan `Ctrl+F`
2. Cari: `<section class="location">`
3. Atau cari teks alamat lama

**Struktur section lokasi:**

```html
<section class="location">
  <div class="container">
    <h1>Lokasi Kami</h1>
    
    <div class="location-card">
      <h3>Cabang Utama</h3>
      <p>📍 <strong>Alamat:</strong> Jalan Merdeka No. 123, Jakarta Selatan</p>
      <p>🕐 <strong>Jam Buka:</strong> 11:00 - 23:00 (Setiap hari)</p>
      <p>📞 <strong>WhatsApp:</strong> <a href="https://wa.me/...">+62 856 0403 0473</a></p>
      <a href="https://maps.google.com/?q=...">Lihat di Google Maps</a>
    </div>
    
    <div class="location-card">
      <h3>Cabang Bandung</h3>
      <p>📍 <strong>Alamat:</strong> Jalan Dipati Ukur No. 456, Bandung</p>
      <p>🕐 <strong>Jam Buka:</strong> 12:00 - 22:00 (Tutup Senin)</p>
      <p>📞 <strong>Telepon:</strong> <a href="tel:0221234567">0221234567</a></p>
    </div>
  </div>
</section>
```

---

#### Langkah 2: Ubah Alamat Toko

**Scenario:** Alamat berubah dari Jalan Merdeka jadi Jalan Sudirman

**Dari:**
```html
<p>📍 <strong>Alamat:</strong> Jalan Merdeka No. 123, Jakarta Selatan</p>
```

**Jadi:**
```html
<p>📍 <strong>Alamat:</strong> Jalan Sudirman No. 789, Jakarta Selatan</p>
```

---

#### Langkah 3: Ubah Jam Buka

**Scenario:** Jam buka awalnya 11:00-23:00, sekarang 10:00-22:00

**Dari:**
```html
<p>🕐 <strong>Jam Buka:</strong> 11:00 - 23:00 (Setiap hari)</p>
```

**Jadi:**
```html
<p>🕐 <strong>Jam Buka:</strong> 10:00 - 22:00 (Setiap hari)</p>
```

---

#### Langkah 4: Update Google Maps Link

**Scenario:** Toko pindah lokasi, perlu update Google Maps

**Cara dapat koordinat:**

1. Buka https://maps.google.com/
2. Cari alamat toko baru
3. Klik di lokasi toko
4. Copy koordinatnya (format: `-6.1753, 106.8272`) 

**Contoh - Update lokasi ke Bandung:**

**Dari (Jakarta Selatan, -6.1753, 106.8272):**
```html
<a href="https://maps.google.com/?q=-6.1753,106.8272">
  Lihat di Google Maps
</a>
```

**Jadi (Bandung, -6.9271, 107.6411):**
```html
<a href="https://maps.google.com/?q=-6.9271,107.6411">
  Lihat di Google Maps
</a>
```

---

### ✅ BAGIAN 5: FORM - INPUT FIELDS

**Untuk apa:** Form untuk user input (reservasi, karir, franchise)

---

#### Langkah 1: Pahami Struktur Form

**Buka `reservation.html` dan cari:**

```html
<form id="reservationForm">
  <!-- Input nama -->
  <input 
    type="text" 
    id="name"                    ← ID untuk JavaScript
    name="name"
    placeholder="Masukkan nama" ← Text placeholder
    required                     ← Field harus diisi
  >
  
  <!-- Input tanggal -->
  <input 
    type="date" 
    id="date"
    name="date"
    required
  >
  
  <!-- Input jam -->
  <input 
    type="time" 
    id="time"
    name="time"
    required
  >
  
  <!-- Input jumlah tamu -->
  <input 
    type="number" 
    id="guests"
    name="guests"
    min="1"
    max="50"
    placeholder="Berapa tamu?"
    required
  >
  
  <!-- Tombol submit -->
  <button type="submit">Kirim Reservasi</button>
</form>
```

---

#### Langkah 2: Ubah Placeholder Text

**Scenario:** Ubah placeholder "Masukkan nama" jadi "Nama lengkap Anda"

**Dari:**
```html
<input type="text" placeholder="Masukkan nama">
```

**Jadi:**
```html
<input type="text" placeholder="Nama lengkap Anda">
```

---

#### Langkah 3: Tambah Field Baru

**Scenario:** Tambah field "Nomor Kontak" di form reservasi

**Cari tempat form, tambah input baru:**

```html
<form id="reservationForm">
  <input type="text" id="name" placeholder="Nama Anda">
  <input type="date" id="date">
  <input type="time" id="time">
  <input type="number" id="guests">
  
  <!-- ← Tambah field baru di sini -->
  <input 
    type="tel"                           ← Input untuk nomor telepon
    id="phone"                           ← ID untuk JavaScript
    name="phone"
    placeholder="Nomor WhatsApp Anda"
    required
  >
  
  <button type="submit">Kirim Reservasi</button>
</form>
```

**PENTING:** Juga perlu update JavaScript di `js/script.js` untuk handle field baru!

---

### ✅ BAGIAN 6: TAMBAH SECTION BARU

**Scenario:** Ingin tambah section "Testimonial Pelanggan" atau "Tim Kami"

---

#### Langkah 1: Pahami Struktur Section

**Struktur umum section HTML:**

```html
<!-- SECTION BARU -->
<section class="testimonials">  ← Class untuk CSS styling
  <div class="container">       ← Container untuk responsive
    <h2>Apa Kata Pelanggan Kami</h2>
    <p class="subtitle">Dengarkan dari mereka yang sudah mencoba</p>
    
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <p class="message">"Mie paling enak di kota!"</p>
        <p class="author">- Budi Santoso</p>
      </div>
      
      <div class="testimonial-card">
        <p class="message">"Pelayanannya ramah dan cepat."</p>
        <p class="author">- Siti Nurhaliza</p>
      </div>
    </div>
  </div>
</section>
```

---

#### Langkah 2: Tentukan Posisi Section Baru

**Buka `index.html` dan cari:**

1. `<main>` - Tempat dimulai content utama
2. Section-section yang sudah ada (hero, menu, promo)
3. `</main>` - Tempat berakhir content utama

**Tambah section baru di antara section-section yang ada atau sebelum `</main>`**

---

#### Langkah 3: Copy & Paste Structure

1. Copy struktur section di Langkah 1
2. Paste ke tempat yang ingin ditambah
3. Ubah class, heading, content sesuai kebutuhan
4. Tambah CSS di `styles.css` untuk styling

---

## 🔗 TAG-TAG HTML YANG PALING PENTING

### Elemen Struktur:
```html
<h1>Heading Paling Besar (1 per halaman)</h1>
<h2>Heading Tier 2</h2>
<h3>Heading Tier 3</h3>
<p>Paragraf text biasa</p>
<strong>Text tebal penting</strong>
<em>Text miring</em>
```

### Elemen Link & Tombol:
```html
<!-- Link ke halaman lain -->
<a href="halaman.html">Klik ke halaman lain</a>

<!-- Link external -->
<a href="https://google.com" target="_blank">Buka Google</a>

<!-- Link WhatsApp -->
<a href="https://wa.me/6285604030473">Chat WhatsApp</a>

<!-- Link telepon -->
<a href="tel:085604030473">Hubungi</a>

<!-- Tombol -->
<button>Klik Saya</button>
<button class="btn-primary">Tombol Primary</button>
```

### Elemen Media:
```html
<!-- Gambar -->
<img src="path/gambar.jpg" alt="Deskripsi gambar">

<!-- Video -->
<video controls width="640" height="480">
  <source src="video.mp4" type="video/mp4">
</video>

<!-- Iframe (embed external content) -->
<iframe src="https://maps.google.com/?q=..." width="600" height="400"></iframe>
```

### Elemen Form:
```html
<form>
  <label for="name">Nama:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <label for="message">Pesan:</label>
  <textarea id="message" name="message" rows="5"></textarea>
  
  <button type="submit">Kirim</button>
</form>
```

---

## ⚠️ HAL-HAL YANG HARUS DIINGAT

### ❌ KESALAHAN UMUM - JANGAN LAKUKAN:

1. **Hapus tag pembuka tanpa tag penutup:**
```html
<!-- SALAH ❌ -->
<div>
  <p>Isi
</div>  <!-- Tag p tidak ditutup! -->

<!-- BENAR ✅ -->
<div>
  <p>Isi</p>
</div>
```

2. **Tanda kutip tidak ditutup:**
```html
<!-- SALAH ❌ -->
<img src="gambar.jpg alt="Gambar">
                   ↑ kutip tidak ditutup

<!-- BENAR ✅ -->
<img src="gambar.jpg" alt="Gambar">
```

3. **Path gambar salah:**
```html
<!-- SALAH ❌ - File tidak ada atau path salah -->
<img src="assets/hero.jpg">

<!-- BENAR ✅ - Path lengkap ke file -->
<img src="assets/pages/hero.jpg">
```

4. **Spasi di path file:**
```html
<!-- SALAH ❌ -->
<img src="assets/mie bupati.jpg">  <!-- Ada spasi! -->

<!-- BENAR ✅ -->
<img src="assets/mie-bupati.jpg">  <!-- Gunakan dash - -->
```

---

## 💡 CHECKLIST SEBELUM SAVE

- [ ] All `<` have corresponding `>`
- [ ] All `{` have corresponding `}`
- [ ] All `"` are closed
- [ ] No spaces in file paths (use `-` instead)
- [ ] Image paths exist
- [ ] Link paths correct (`.html` file ada)
- [ ] No typo di text yang penting
- [ ] Nomor WhatsApp format benar (62, tanpa +, tanpa spasi)
- [ ] Refresh browser setelah edit

---

## 🔧 WORKFLOW EDIT HTML

1. **Buka file** → text editor, buka `index.html` atau file yang ingin edit
2. **Cari elemen** → `Ctrl+F` untuk search
3. **Buat perubahan** → edit text/nilai
4. **Validasi** → cek checklist di atas
5. **Simpan** → `Ctrl+S`
6. **Test** → buka browser, refresh `Ctrl+Shift+R`
7. **Cross-check** → pastikan perubahan muncul dengan benar

---

## 📱 TIPS TESTING RESPONSIVE

Setelah edit HTML, selalu test di berbagai ukuran:

1. **Desktop:** Browser normal
2. **Tablet:** Tekan `F12` → Device mode → Tablet
3. **Mobile:** Tekan `F12` → Device mode → Mobile

Pastikan layout tetap bagus di semua ukuran! ✅

---

## 🎯 BAGIAN-BAGIAN HTML YANG SERING DIUBAH

### ✅ BAGIAN 1: LINK DI NAVBAR (Menu Navigasi)

**Untuk apa:** Mengubah menu navigasi atas (Home, Menu, Tentang, Lokasi, dll)

**Di mana:** Di `index.html`, cari bagian seperti ini (sekitar baris 100-150):

```html
<nav class="main-nav">
  <a href="index.html">Beranda</a>        <!-- Link ke halaman home -->
  <a href="menu.html">Menu</a>            <!-- Link ke halaman menu -->
  <a href="about.html">Tentang Kami</a>   <!-- Link ke halaman about -->
  <a href="location.html">Lokasi</a>      <!-- Link ke halaman lokasi -->
  <a href="reservation.html">Reservasi</a> <!-- Link ke halaman reservasi -->
</nav>
```

**Ingin tambah link baru?**

Contoh: Tambah "Gallery" (Galeri foto)

Tambah baris baru di antara tags `<nav>...` dan `</nav>`:

```html
<nav class="main-nav">
  <a href="index.html">Beranda</a>
  <a href="menu.html">Menu</a>
  <a href="gallery.html">Gallery</a>     <!-- ← Baris baru ditambah di sini -->
  <a href="about.html">Tentang Kami</a>
  <a href="location.html">Lokasi</a>
  <a href="reservation.html">Reservasi</a>
</nav>
```

**Ingin ubah text "Menu" jadi "Makanan"?**

Dari ini:
```html
<a href="menu.html">Menu</a>
```

Jadi ini:
```html
<a href="menu.html">Makanan</a>
```

---

### ✅ BAGIAN 2: LINK WHATSAPP & TELEPON

**Untuk apa:** Mengubah nomor WhatsApp, telepon, dan social media links

**Di mana:** Di `index.html`, cari dengan `Ctrl+F` nomor WhatsApp yang sekarang (misalnya: `6285604030473`)

Akan ketemu beberapa tempat seperti ini:

```html
<!-- Tombol Chat WhatsApp -->
<a href="https://wa.me/6285604030473">Chat WhatsApp</a>

<!-- Link telepon -->
<a href="tel:6285604030473">Hubungi Kami</a>

<!-- Social media -->
<a href="https://wa.me/6285604030473?text=Hello">
```

**Cara mengubahnya:**

Pakai Find & Replace (`Ctrl+H`):

1. Tekan `Ctrl+H` (buka Find & Replace)
2. Di "Find": ketik nomor lama → `6285604030473`
3. Di "Replace": ketik nomor baru → `6281234567890`
4. Klik "Replace All" (ganti semua sekaligus)
5. Simpan file

Semua nomor WhatsApp & telepon otomatis berubah! ✅

**Ingat:** Nomor harus pakai format internasional tanpa tanda +
- Benar: `6285604030473` 
- Salah: `+62 856 0403 0473` ← Ada spasi, jangan pakai ini

---

### ✅ BAGIAN 3: GAMBAR & FOTO

**Untuk apa:** Mengganti foto/gambar di website

**Di mana:** Cari tag `<img>` di HTML bisa pakai `Ctrl+F`

Contoh yang ada:
```html
<img src="assets/img/hero-image.jpg" alt="Mie Newmind Hero">
```

**Bagian-bagian yang penting:**
- `src="..."` = Letak file gambar (path)
- `alt="..."` = Text yang muncul kalau gambar tidak loading

**Ingin ganti gambar hero?**

1. Upload gambar baru ke: `assets/img/` folder
2. Nama gambar baru misalnya: `hero-baru.jpg`
3. Di HTML, ubah dari:
```html
<img src="assets/img/hero-image.jpg" alt="Mie Newmind Hero">
```

Jadi:
```html
<img src="assets/img/hero-baru.jpg" alt="Mie Newmind Hero">
```

4. Simpan, refresh halaman, gambar berubah! ✅

**Tips:** Gunakan gambar dengan ukuran kurang dari 500KB agar halaman cepat loading

---

### ✅ BAGIAN 4: ALAMAT & JAM BUKA

**Untuk apa:** Mengubah alamat toko dan jam operasional

**Di mana:** Cari dengan `Ctrl+F` teks alamat yang ada (misalnya: "Jalan")

Akan ketemu di bagian location-card:

```html
<div class="location-card">
  <h3>Lokasi Utama</h3>
  <p>Jalan Contoh No. 123, Jakarta Selatan</p>
  <p>Jam Buka: 11:00 - 23:00 (Setiap hari)</p>
  <a href="https://maps.google.com/...">Lihat di Google Maps</a>
</div>
```

**Ingin ubah alamat?**

Ubah teks yang ada:

Dari:
```html
<p>Jalan Contoh No. 123, Jakarta Selatan</p>
```

Jadi:
```html
<p>Jalan Baru No. 456, Bandung</p>
```

**Ingin ubah jam buka?**

Dari:
```html
<p>Jam Buka: 11:00 - 23:00 (Setiap hari)</p>
```

Jadi:
```html
<p>Jam Buka: 10:00 - 22:00 (Senin-Minggu)</p>
```

Simpan, refresh halaman, alamat & jam berubah! ✅

---

### ✅ BAGIAN 5: LINK GOOGLE MAPS

**Untuk apa:** Menambahkan lokasi toko di Google Maps

**Di mana:** Cari `maps.google.com` dengan `Ctrl+F`

Akan ketemu seperti ini:

```html
<a href="https://maps.google.com/?q=-6.1753,106.8272">
  Lihat di Google Maps
</a>
```

**Bagian penting:**
- `q=-6.1753,106.8272` = Koordinat lokasi (latitude, longitude)

**Cara dapatkan koordinat Google Maps:**

1. Buka https://maps.google.com
2. Cari alamat toko Anda
3. Klik kanan lokasi, pilih koordinatnya
4. Copy koordinat (format: `-6.1753, 106.8272`)
5. Paste di `q=...` di HTML

Contoh: Lokasi baru di Bandung dengan koordinat `-6.9271, 107.6411`

```html
<a href="https://maps.google.com/?q=-6.9271,107.6411">
  Lihat di Google Maps
</a>
```

Simpan, klik link, akan buka Google Maps di lokasi baru! ✅

---

### ✅ BAGIAN 6: MENAMBAH SECTION / BAGIAN BARU

**Contoh: Ingin tambah section "Promo Hari Ini" di halaman utama?**

Struktur HTML untuk section baru:

```html
<!-- Section Promo -->
<section class="promo">
  <div class="container">
    <h2>Promo Hari Ini</h2>
    <p>Diskon 20% untuk semua menu dimsum!</p>
  </div>
</section>
```

**Cara tambah:**

1. Buka `index.html`
2. Cari bagian `</main>` (mendekati akhir halaman)
3. Tambah section baru tepat sebelum `</main>`
4. Copy struktur di atas, ubah isi sesuai promosi
5. Simpan, refresh halaman, section baru muncul! ✅

---

## 🔗 STRUKTUR HTML YANG PENTING

### Elemen dasar HTML yang sering diubah:

```html
<!-- Heading (Judul) - Ukuran besar sampai kecil -->
<h1>Judul Halaman - Paling Besar</h1>
<h2>Sub Judul - Lebih Kecil</h2>
<h3>Sub Sub Judul</h3>

<!-- Paragraf (Isi text) -->
<p>Ini adalah paragraf isi website.</p>

<!-- Link (Tombol klik) -->
<a href="halaman.html">Klik di sini</a>

<!-- Gambar -->
<img src="path/gambar.jpg" alt="Deskripsi gambar">

<!-- Tombol -->
<button>Klik Saya</button>

<!-- Form (Formulir) -->
<form>
  <input type="text" placeholder="Masukkan nama">
  <button type="submit">Kirim</button>
</form>
```

---

## ⚠️ TIPS PENTING HTML

### Jangan hapus tag pembuka/penutup

Salah:
```html
<!-- Tag tidak ditutup dengan benar -->
<div>
  <p>Isi</p>
<!-- Tag div tidak ditutup! -->
```

Benar:
```html
<!-- Semua tag harus ditutup -->
<div>
  <p>Isi</p>
</div>
```

### Hati-hati dengan tanda kutip `"` dan `'`

```html
<!-- Benar -->
<img src="path/gambar.jpg" alt="Mie Newmind">
<a href="halaman.html">Link</a>

<!-- Salah -->
<img src=path/gambar.jpg alt=Mie Newmind>  <!-- Tidak ada kutip -->
<a href='halaman.html>Link</a>               <!-- Kutip tidak ditutup -->
```

### Setiap file HTML harus yang di bawah

Jika ada tag pembuka harus ada tag penutup:

- `<div>` ... `</div>` ✅
- `<p>` ... `</p>` ✅
- `<img>` (tidak perlu, ini self-closing) ✅
- `<br>` (tidak perlu, ini self-closing) ✅

---

## 💡 CONTOH PENGUBAHAN PRAKTIS

### CONTOH 1: Ganti nomor WhatsApp

1. Buka `index.html`
2. Tekan `Ctrl+H` (Find & Replace)
3. Find: `6285604030473` (nomor lama)
4. Replace: `6281234567890` (nomor baru)
5. Replace All
6. Simpan ✅

### CONTOH 2: Tambah menu di navbar

1. Buka `index.html`
2. Cari `<nav class="main-nav">`
3. Tambah baris: `<a href="news.html">Berita</a>`
4. Simpan, refresh halaman ✅

### CONTOH 3: Ganti alamat toko

1. Buka `location.html`
2. Cari alamat lama pakai `Ctrl+F`
3. Ubah teks alamat ke alamat baru
4. Simpan ✅

---

## 🎯 CHECKLIST SAAT EDIT HTML

- [ ] Semua tag pembuka ada tag penutupnya
- [ ] Path gambar benar (file ada di folder yang ditunjuk)
- [ ] Link ke halaman lain benar (file .html ada)
- [ ] Tidak ada typo di text
- [ ] Nomor WhatsApp benar (tanpa + dan spasi)
- [ ] Refresh halaman setelah edit
- [ ] Cek di browser bagus atau tidak
