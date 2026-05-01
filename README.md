# Mie Newmind - Website Documentation

## 📋 Panduan Lengkap Proyek Website Mie Newmind

Selamat datang! Dokumen ini berisi panduan lengkap untuk memahami, mengedit, dan memelihara website Mie Newmind.

---
## 🌟 PORTAL DOKUMENTASI (NEW!)

### 📚 Dokumentasi Visual & Interaktif

Kami telah membuat **Portal Dokumentasi Web** yang lebih mudah dibaca dan diakses. Buka portal dengan salah satu cara berikut:

#### **Cara Tercepat:**

**macOS / Linux:**
```bash
bash open-docs.sh
```

**Windows:**
```cmd
open-docs.bat
```

**Atau buka langsung:**
```
Buka folder dokumentasi → Double-click index.html
```

**Atau di browser:**
```
http://localhost:8000/dokumentasi/index.html
```

### ✨ Portal Fitur

✅ **Responsive Design** - Desktop, Tablet, Mobile  
✅ **Search & Filter** - Cari dokumentasi dengan mudah  
✅ **Quick Access** - Tombol cepat untuk panduan favorit  
✅ **Preview Modal** - Baca preview tanpa download  
✅ **Organized Categories** - Filter by topic (Starter, Design, Editing, etc.)  
✅ **Statistics** - Lihat coverage & content information  
✅ **Keyboard Shortcuts** - Press `/` untuk search, `Esc` untuk close  

**👉 [Buka Portal Dokumentasi Sekarang!](dokumentasi/index.html)**

---
## � Daftar Dokumentasi Lengkap

Semua panduan terperinci tersedia dalam folder `dokumentasi/`:

| # | Panduan | Deskripsi | Waktu Baca |
|---|---------|-----------|-----------|
| 1 | [📖 Panduan Cepat](dokumentasi/QUICK-START.md) | Panduan 5 menit untuk tugas-tugas umum | 5 min |
| 2 | [🎨 Sistem Design](dokumentasi/DESIGN-SYSTEM.md) | Palet warna, tipografi, dan komponen reusable | 15 min |
| 3 | [🎯 Panduan CSS](dokumentasi/CSS-EDITING-GUIDE.md) | Referensi CSS dengan nomor baris dan quick edit | 15 min |
| 4 | [⚙️ Panduan JavaScript](dokumentasi/JAVASCRIPT-EDITING-GUIDE.md) | Fungsi JS, i18n system, form handling | 20 min |
| 5 | [📝 Panduan HTML](dokumentasi/HTML-EDITING-GUIDE.md) | Panduan editing HTML dan struktur halaman | 10 min |
| 6 | [🚀 Panduan Deploy](dokumentasi/DEPLOYMENT-GUIDE.md) | Cara deploy ke Cloudflare Pages | 15 min |
| 7 | [🐛 Panduan Troubleshooting](dokumentasi/TROUBLESHOOTING-GUIDE.md) | Solusi untuk masalah umum | 20 min |
| 8 | [📑 Daftar Isi Lengkap](dokumentasi/TABLE-OF-CONTENTS.md) | Index dan reading path untuk semua topik | 10 min |

### ⚡ Tugas Cepat?
👉 Mulai dari [📖 Panduan Cepat](dokumentasi/QUICK-START.md) untuk tugas-tugas 5 menit!

### 🎨 Ingin Mengubah Design?
👉 Baca [🎨 Sistem Design](dokumentasi/DESIGN-SYSTEM.md) untuk palet warna & komponen!

### 🐛 Ada Masalah?
👉 Cek [🐛 Panduan Troubleshooting](dokumentasi/TROUBLESHOOTING-GUIDE.md) untuk solusi!

---

## �📌 Ringkasan Proyek

**Mie Newmind** adalah website untuk brand kuliner mie pedas kekinian di Indonesia. Website ini menampilkan:
- Informasi tentang brand dan sejarah perusahaan
- Menu lengkap dengan harga
- Lokasi restoran dan fitur reservasi
- Program kemitraan/franchise
- Lowongan kerja
- Multi-bahasa (Indonesia & English)
- Dark mode support

**Live URL:** https://mienewmind.pages.dev

---

## 📁 Struktur Folder

```
MieNewMind-2/
├── index.html              # Halaman utama (homepage)
├── menu.html               # Halaman menu dedicated
├── about.html              # Halaman tentang kami
├── location.html           # Halaman lokasi
├── reservation.html        # Halaman reservasi
├── franchise.html          # Halaman franchise
├── karir.html              # Halaman karir/lowongan
├── css/
│   └── styles.css          # Semua styling (warna, layout, responsive)
├── js/
│   ├── script.js           # Script utama (navbar, theme, language)
│   └── menu.js             # Script untuk menu interaktif
├── assets/
│   ├── img/                # Folder gambar
│   ├── Logo Mie Newmind.png # Logo
│   └── ...                 # File asset lainnya
└── README.md               # File dokumentasi ini
```

---

## 🚀 Cara Menjalankan Proyek Lokal

### Prasyarat
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, dll)
- Optional: Wrangler CLI untuk deployment ke Cloudflare Pages

### Langkah-langkah

1. **Buka di Browser Lokal:**
   - Cukup buka `index.html` di browser dengan double-click, atau
   - Gunakan VS Code Live Server extension:
     ```
     Right-click index.html → Open with Live Server
     ```

2. **Struktur File Tetap:**
   - Pastikan folder `css/`, `js/`, dan `assets/` berada di direktori yang sama dengan file HTML
   - Semua file HTML referensikan CSS dan JS dengan path relatif

---

## 🎨 Cara Mengedit

### 1. Mengubah Warna (Design System)

**Lokasi:** `css/styles.css` → Baris 1-30 (CSS Variables)

```css
:root {
  --primary: #c7319c;        /* Warna utama (pink) */
  --secondary: #c93898;      /* Warna sekunder */
  --accent: #eccb30;         /* Warna aksen (kuning) */
  --brick: #c7333e;          /* Warna brick red */
  --background: #ffffff;     /* Warna background light */
  --foreground: #141116;     /* Warna text light */
}

body.theme-dark {
  --primary: #d64bb0;        /* Warna utama dark mode */
  /* ... warna dark lainnya */
}
```

**Cara Mengubah:**
- Ubah kode hex color di variabel CSS root
- Semua elemen yang menggunakan `var(--primary)` akan otomatis berubah
- Jangan ubah warna langsung di elemen individual (gunakan variables)

---

### 2. Mengubah Text/Content

**Untuk Bahasa Indonesia & English:**

**Lokasi:** `js/script.js` → Baris ~15-350 (Object `i18n`)

```javascript
const i18n = {
  id: {
    // Bahasa Indonesia
    nav: ['About Us', 'Menu', 'Lokasi', 'Reservasi', 'Franchise', 'Karir'],
    hero: {
      heading: 'Nikmatnya Pas, Harganya Bersahabat',
      body: 'Nikmati sajian lezat ...',
    },
    // ... lebih banyak content
  },
  en: {
    // Bahasa English
    nav: ['About Us', 'Menu', 'Location', 'Reservation', 'Franchise', 'Career'],
    // ... content English
  }
};
```

**Cara Mengubah:**
1. Cari text yang ingin diubah di object `i18n`
2. Ubah value untuk `id` (Indonesia) dan `en` (English)
3. Text akan otomatis terupdate di halaman saat page load

**Untuk Content yang Tidak Multi-Bahasa:**
- Langsung edit di file HTML (teks yang hanya ada di satu halaman)
- Contoh: deskripsi menu di `menu.html`

---

### 3. Mengubah Gambar

**Lokasi:** File HTML yang berisi gambar, atau folder `assets/img/`

**Cara Mengubah:**
1. Ganti file gambar di folder `assets/` dengan nama yang sama
2. Atau, ubah `src` di tag `<img>`:
   ```html
   <img src="assets/img/nama-gambar-baru.jpg" alt="Deskripsi" />
   ```

**Tips:**
- Gunakan format JPG/WebP untuk foto besar
- Gunakan PNG untuk logo dan icon
- Pastikan nama file tidak ada spasi (gunakan hyphen: `mie-bupati.png`)

---

### 4. Mengubah Navigasi/Menu

**Lokasi:** `index.html` atau semua file HTML di section `<header>`

**Struktur Navbar:**
```html
<nav class="main-nav">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="menu.html">Menu</a>
  <!-- Tambah link baru di sini -->
</nav>
```

**Cara Menambah Menu Baru:**
1. Tambah link di `<nav class="main-nav">`
2. Update di `i18n` object di `js/script.js` (untuk label multi-bahasa)
3. Pastikan href mengarah ke halaman yang benar

---

## 📖 Penjelasan Setiap Halaman Utama

### 1. **index.html** - Homepage
- **Hero Section:** Intro dan CTA utama
- **About Section:** Informasi brand dan sejarah
- **Menu Section:** Showcase menu best-seller
- **Lokasi & Reservasi:** Google Maps dan form reservasi
- **Navbar & Footer:** Navigasi dan info kontak

### 2. **menu.html** - Menu Lengkap
- **Title Card:** Header halaman
- **Menu Grid:** Semua item menu dalam tab (Mie, Dimsum, Minuman)
- **Menu Modal:** Detail dan harga saat item diklik
- Data menu diambil dari `js/menu.js`

### 3. **about.html** - Tentang Kami
- **Title Card:** Judul halaman
- **Company Info:** Deskripsi perusahaan
- **Timeline:** Sejarah perkembangan brand

### 4. **location.html** - Lokasi Restoran
- **Title Card:** Judul halaman
- **Location Card:** Alamat, jam operasional, Google Maps button

### 5. **reservation.html** - Reservasi
- **Title Card:** Judul halaman
- **Reservation Form:** Form untuk reservasi (chat WhatsApp)

### 6. **franchise.html** - Program Franchise
- **Benefits Grid:** Syarat-syarat bergabung
- **Contact Form:** Form kontak untuk calon mitra

### 7. **karir.html** - Lowongan Kerja
- **Contact Info:** Informasi kontak HR
- **Application Form:** Form lamaran (chat WhatsApp)

---

## ➕ Cara Menambah Halaman Baru

### Langkah-langkah:

1. **Buat File HTML Baru:**
   - Copy dari `menu.html` atau halaman existing
   - Ganti content sesuai halaman baru
   - Pastikan nama file lowercase tanpa spasi: `nama-halaman.html`

2. **Update Navbar:**
   - Tambah link di semua file HTML di section `<header>`
   - Contoh: `<a href="nama-halaman.html">Label Menu</a>`

3. **Update i18n (Multi-Bahasa):**
   - Tambah entry baru di `const i18n` di `js/script.js`

4. **Add CSS Styling (jika butuh):**
   - Tambah di `css/styles.css` dengan comment yang jelas
   - Gunakan naming convention: `.halaman-nama-section` atau `.nama-halaman-hero`

5. **Test:**
   - Buka halaman di browser
   - Cek responsive (mobile, tablet, desktop)
   - Cek dark mode dan language toggle

---

## 🎯 Pedoman Konsistensi Design

### Color Palette
```
Primary (Pink):     #c7319c
Secondary (Pink):   #c93898
Accent (Yellow):    #eccb30
Red (Brick):        #c7333e
Background:         #ffffff (light), #0f0b12 (dark)
Text:               #141116 (light), #f8f1f7 (dark)
Muted:              #5f5660 (light), #c8b5c3 (dark)
Border:             #ecd6e5 (light), #4f3a48 (dark)
```

### Typography
- **Font:** Poppins (Google Fonts)
- **Heading:** font-weight 800-900
- **Body:** font-weight 500
- **Small:** font-size 0.75rem-0.95rem

### Spacing
- Mobile: `clamp()` untuk responsive
- Desktop: rem-based (1rem = 16px)
- Padding sections: `--section-space-md: 92px` (diubah untuk screen size)

### Components (Reusable Classes)
- `.btn` - Button base (dengan modifier: `.btn-primary`, `.btn-secondary`)
- `.page-title-card` - Title card di halaman
- `.visit-card` - Card untuk lokasi/reservasi
- `.menu-item` - Card untuk menu item
- `.feature-card` - Featured card (best seller)

---

## 🔧 Tips Maintenance & Development

### Checklist Sebelum Deploy:
- [ ] Cek semua link bekerja (internal & external)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark mode di semua halaman
- [ ] Test language toggle (Indonesia & English)
- [ ] Cek form submission (buka WhatsApp)
- [ ] Optimasi gambar (tidak terlalu besar)
- [ ] Browser compatibility (Chrome, Firefox, Safari)

### Deployment ke Live (Cloudflare Pages):
```bash
# Install Wrangler (jika belum)
npm install -g wrangler

# Deploy
wrangler pages deploy . --project-name mienewmind

# Atau jika sudah ada wrangler.toml
wrangler pages deploy .
```

### Git & Version Control (Optional):
```bash
git add .
git commit -m "Deskripsi perubahan"
git push origin main
```

---

## 📱 Responsive Design Breakpoints

Website menggunakan mobile-first approach:
- **Mobile:** Max 640px
- **Tablet:** 641px - 980px
- **Desktop:** 980px+

Semua media queries berada di akhir `css/styles.css` (~line 2900+)

---

## 🌙 Dark Mode & Multi-Language

### Dark Mode
- Trigger: Button "☾/☀" di header
- State disimpan di `localStorage` dengan key `mie-theme`
- CSS: Menggunakan `body.theme-dark` selector

### Multi-Language
- Trigger: Button "EN/ID" di header
- Bahasa disimpan di `localStorage` dengan key `mie-lang`
- System: Object `i18n` di `js/script.js`

---

## ⚙️ JavaScript Logic Explanation

### File: `js/script.js`

**Key Functions:**
- `applyLanguage(lang)` - Update semua text sesuai bahasa
- `setActiveByCurrentPage()` - Set active navbar link sesuai halaman
- `animateLanguageSwitch(nextLang)` - Animasi saat switch bahasa
- `applyTheme(theme)` - Apply dark/light theme

**Key Events:**
- Language toggle di header
- Theme toggle di header
- Mobile menu toggle
- Form submissions (career, franchise, reservation)

### File: `js/menu.js`

**Key Functions:**
- `loadMenuData()` - Fetch menu dari data
- `renderMenuItems(category)` - Render menu sesuai kategori
- `openMenuModal(item)` - Buka detail menu di modal

---

## 📞 Support & Contact

Untuk pertanyaan atau bantuan:
- Email: careers@mienewmind.com
- WhatsApp: +62 856-0403-0473
- Instagram: @mienewmind

---

## 📝 Changelog & Version History

### v1.0.0 (March 29, 2026)
- ✅ Homepage dengan hero, about, menu, location
- ✅ Dedicated pages (menu, about, location, reservation, franchise, career)
- ✅ Multi-language support (ID/EN)
- ✅ Dark mode support
- ✅ Mobile responsive
- ✅ Form submissions (WhatsApp integration)
- ✅ Deployment ke Cloudflare Pages

---

## 📚 Referensi Coding

### HTML Best Practices
- Gunakan semantic tags: `<header>`, `<section>`, `<article>`, `<footer>`
- Selalu tambah `alt` text untuk gambar
- Gunakan label untuk form inputs

### CSS Best Practices
- Gunakan CSS variables untuk warna dan spacing
- Organize styles by component
- Mobile-first approach
- Avoid inline styles

### JavaScript Best Practices
- Gunakan `const` & `let` (jangan `var`)
- Tambah comments untuk logic kompleks
- Gunakan event delegation untuk dynamic elements
- Modular code (pisah logic ke functions)

---

**Selamat mengembangkan! Happy coding! 🚀**
