# 🎨 SISTEM WARNA & DESAIN - Mie Newmind

Panduan lengkap tentang warna, font, dan jarak. Semua yang perlu diketahui untuk edit design website. Panduan ini untuk designer/developer yang ingin memastikan design tetap konsisten.

---

## 🎨 PALET WARNA (Pilihan Warna Website)

### Warna Utama Website

**Warna Brand Mie Newmind - Setiap warna punya fungsi spesifik:**

| Nama | Kode Hex | RGB | Kegunaan | Contoh Penggunaan |
|------|----------|-----|---------|------------------|
| **Pink Terang** | `#c7319c` | 199,49,156 | Tombol utama, heading, heading important | Tombol "PESAN", teks highlight heading |
| **Pink Gelap** | `#c93898` | 201,56,152 | Hover effect, border, variasi warna | Saat cursor hover di tombol pink |
| **Kuning** | `#eccb30` | 236,203,48 | Call-to-action, aksen, tombol sekunder | Tombol "LIHAT MENU", highlight special |
| **Merah** | `#c7333e` | 199,51,62 | Alert, special badge, urgent info | Badge "BEST SELLER", error message |
| **Putih** | `#ffffff` | 255,255,255 | Background utama, text background | Background halaman, kotak card |
| **Gelap/Black** | `#141116` | 20,17,22 | Text body, teks normal, paragraf | Teks paragraf, body text |
| **Abu2 Terang** | `#f8f1f7` | 248,241,247 | Background halus, section background | Background section, subtle background |
| **Abu2 Gelap** | `#5f5660` | 95,86,96 | Text sekunder, caption, small text | Subtitle, deskripsi kecil |

### Kode Heksadecimal Dijelaskan

**Apa itu kode hex `#c7319c`?**
- Kode ini adalah cara komputer menyimpan warna
- Format: `#RRGGBB` dimana:
  - `RR` = Red (merah) dari 00-FF
  - `GG` = Green (hijau) dari 00-FF
  - `BB` = Blue (biru) dari 00-FF
- Contoh `#c7319c`: Red=c7, Green=31, Blue=9c

**Penggunaan di CSS:**
```css
/* Bisa gunakan kode hex */
background-color: #c7319c;  ← Warna pink brand

/* Atau gunakan variable CSS (lebih recommended) */
background-color: var(--primary);  ← Otomatis pakai warna pink dari :root
```

### Mode Terang (Light Mode - Default/Normal)

Warna yang digunakan saat website dibuka normal (siang hari):

```
Background halaman:     Putih (#ffffff)
Teks / body text:       Hitam gelap (#141116)
Kotak / card:           Putih (#ffffff)
Border / garis:         Abu-abu terang (#ecd6e5)
Teks sekunder/caption:  Abu-abu (#5f5660)
Link/hyperlink:         Pink (#c7319c)
Button hover:           Pink gelap (#c93898)
```

### Mode Gelap (Dark Mode - Saat User Klik 🌙)

Warna otomatis berubah saat user klik tombol bulan di atas halaman:

```
Background halaman:     Hitam (#0f0b12)
Teks / body text:       Putih (#f8f1f7)
Kotak / card:           Hitam terang (#1b151f)
Border / garis:         Abu-abu gelap (#4f3a48)
Teks sekunder/caption:  Abu-abu terang (#c8b5c3)
Link/hyperlink:         Pink (#c7319c) - tetap sama
Button hover:           Pink gelap (#c93898) - tetap sama
```

### Contoh Penggunaan Warna di CSS

#### Contoh 1: Membuat Tombol Pink
```css
/* File: css/styles.css */

.tombol-aksi {
  background-color: var(--primary);    /* Gunakan warna pink dari variable */
  color: white;                        /* Teks putih agar kontras */
  padding: 10px 20px;                  /* Ruang dalam tombol */
  border-radius: 5px;                  /* Sudut lengkung */
  border: none;                        /* Hilangkan border default */
  cursor: pointer;                     /* Ubah cursor jadi pointer saat hover */
}

/* Saat user hover ke tombol */
.tombol-aksi:hover {
  background-color: var(--primary-dark);  /* Ganti ke pink gelap */
  transform: scale(1.05);              /* Perbesar tombol sedikit */
}
```

#### Contoh 2: Teks dengan Warna Berbeda
```css
.heading {
  color: var(--primary);        /* Teks pink untuk heading */
  font-size: 28px;              /* Ukuran teks */
}

.deskripsi {
  color: var(--text-secondary); /* Abu-abu untuk subtitle */
  font-size: 14px;              /* Lebih kecil dari heading */
}

.caption {
  color: var(--text-muted);     /* Abu-abu lebih terang untuk caption */
  font-size: 12px;              /* Sangat kecil */
}
```

#### Contoh 3: Card/Box
```css
.card {
  background-color: var(--background);  /* Pakai background dari variable */
  border: 1px solid var(--border);      /* Border warna abu2 terang */
  border-radius: 8px;                   /* Sudut melengkung */
  padding: 20px;                        /* Jarak dari tepi */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* Bayangan ringan */
}
```

---

## 📐 TYPOGRAPHY (FONT & UKURAN TEKS)

### Font Family (Jenis Font)

Website Mie Newmind menggunakan font: **Poppins**

**Dimana font di-download?**
- Font otomatis di-download dari Google Fonts melalui file CSS
- User tidak perlu install manual, font langsung muncul di browser

**Lihat di CSS:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

body {
  font-family: 'Poppins', sans-serif;  ← Semua teks website pakai Poppins
}
```

### Ukuran Font & Weight

| Jenis | Size | Weight | Kegunaan | Contoh |
|------|------|--------|---------|--------|
| **Heading 1** (H1) | 2.5rem (40px) | 900 | Judul halaman utama | "Menu Kami", "Tentang Kami" |
| **Heading 2** (H2) | 2rem (32px) | 800 | Heading section besar | Judul section, category |
| **Heading 3** (H3) | 1.5rem (24px) | 700 | Heading section sedang | Sub heading, sub-category |
| **Heading 4** (H4) | 1.2rem (19px) | 600 | Heading kecil | Judul card, title item |
| **Body Text** | 1rem (16px) | 400 | Paragraf normal | Teks deskripsi, isi |
| **Small Text** | 0.875rem (14px) | 400 | Teks kecil | Caption, footnote, meta |
| **Tiny Text** | 0.75rem (12px) | 400 | Teks sangat kecil | Copyright, small caption |

### Contoh di CSS

```css
h1 {
  font-size: 2.5rem;    /* 40px */
  font-weight: 900;     /* Sangat tebal */
  color: var(--primary); /* Warna pink */
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;      /* 32px */
  font-weight: 800;     /* Tebal */
}

p {
  font-size: 1rem;      /* 16px */
  font-weight: 400;     /* Normal */
  line-height: 1.6;     /* Tinggi baris untuk mudah dibaca */
}

.caption {
  font-size: 0.875rem;  /* 14px */
  font-weight: 400;
  color: var(--text-muted);
}
```

---

## 🔲 SPACING (JARAK/PADDING/MARGIN)

### Sistem Spacing

Website menggunakan sistem spacing berbasis **8px** untuk konsistensi:

| Ukuran | Pixel | Kegunaan |
|--------|-------|---------|
| **xs** | 4px | Spacing sangat kecil |
| **sm** | 8px | Spacing kecil (default) |
| **md** | 16px | Spacing medium |
| **lg** | 24px | Spacing besar |
| **xl** | 32px | Spacing sangat besar |
| **2xl** | 48px | Spacing ekstra besar |

### Contoh Penggunaan

```css
.card {
  padding: 24px;                /* Jarak dari edge card ke content (medium) */
  margin-bottom: 16px;          /* Jarak ke element berikutnya (medium) */
  gap: 8px;                     /* Jarak antar item dalam card (kecil) */
}

.button {
  padding: 10px 20px;           /* Vertikal 10px, horizontal 20px */
  margin-right: 8px;            /* Jarak ke button berikutnya */
}

.section {
  padding: 48px 24px;           /* Padding besar atas-bawah, medium samping */
  gap: 32px;                    /* Jarak antar item dalam section */
}
```

**Keuntungan menggunakan `var(--primary)`:**
- Tidak perlu menulis kode `#c7319c` di mana-mana
- Kalau mau ganti warna pink jadi biru, hanya perlu ubah 1 tempat (di :root)
- Semua elemen yang pakai `var(--primary)` otomatis berubah warna!

---

## 🔤 FONT / HURUF

### Font yang Digunakan

Website Mie Newmind menggunakan font **Poppins** (download dari Google Fonts otomatis).

```
Font: Poppins
Jenis huruf yang tersedia: Regular, Medium, Bold, Black
Cocok untuk: Modern, friendly, easy to read
```

### Ukuran Huruf (Font Size)

Ukuran huruf berbeda-beda tergantung jenis teksnya:

| Jenis | Ukuran | Contoh | Kegunaan |
|------|--------|--------|---------|
| **Heading 1 (H1)** | Paling besar | "Selamat datang di Mie Newmind" | Judul utama halaman |
| **Heading 2 (H2)** | Besar | "Menu Favorit" | Sub-judul section |
| **Heading 3 (H3)** | Sedang | "Mie Bupati" | Judul produk |
| **Body Text** | Normal | Paragraf isi | Teks penjelasan |
| **Small Text** | Kecil | "Label", "Caption" | Teks tambahan |

### Contoh di CSS

```css
/* Judul halaman (besar) */
h1 {
  font-size: 3rem;         /* 48px - Sangat besar */
  font-weight: 900;        /* Bold sekali */
  line-height: 1.2;        /* Jarak antar baris */
}

/* Paragraf isi (normal) */
p {
  font-size: 1.05rem;      /* 16.8px - Ukuran normal */
  font-weight: 500;        /* Semi-bold */
  line-height: 1.55;       /* Jarak antar baris lebih lebar = mudah dibaca */
}

/* Caption kecil */
.caption {
  font-size: 0.75rem;      /* 12px - Kecil */
  font-weight: 600;        /* Semi-bold */
}
```

**Kalau mau ubah ukuran heading menjadi lebih besar:**

1. Buka `css/styles.css`
2. Cari `h1 {` (baris sekitar 150-200)
3. Ubah `font-size: 3rem;` menjadi `font-size: 4rem;` (lebih besar)
4. Simpan, refresh halaman, lihat hasilnya!

---

## 📏 JARAK & SPACING (Ruang)

### Satuan Jarak (Unit)

Semua jarak di website menggunakan sistem **rem** (relative em):

```
1 rem = 16 pixel (px)
Jadi:
  0.5rem  = 8px   (jarak sangat kecil - antar item)
  1rem    = 16px  (jarak kecil - antar paragraf)
  1.5rem  = 24px  (jarak sedang - antar komponen)
  2rem    = 32px  (jarak besar - antar section)
  3rem    = 48px  (jarak sangat besar - section utama)
```

### Jarak dalam HTML

**Padding** = Jarak dalam (dari text ke border kotak)
**Margin** = Jarak luar (antar elemen)

```css
.kartu {
  padding: 20px;        /* Ruang dalam = 20px dari tepi ke teks */
  margin: 10px;         /* Ruang luar = 10px antar kartu lain */
}
```

### Contoh Responsive Spacing

Jarak yang berubah otomatis di HP, tablet, desktop:

```css
section {
  padding: 24px 0;     /* Di HP: jarak atas-bawah = 24px */
  /* Di tablet/desktop: bisa lebih besar otomatis */
}
```

---

## 🎯 BREAKPOINT (Titik Perubahan Ukuran)

Ukuran layar yang berbeda memerlukan layout berbeda:

| Perangkat | Lebar Layar | Nama |
|-----------|-----------|--------|
| iPhone SE | 375px | Mobile kecil |
| iPhone 12 | 428px | Mobile |
| iPad | 768px | Tablet |
| Laptop | 1024px+ | Desktop |
| Monitor Besar | 1440px+ | Desktop besar |

**Di CSS:**

```css
/* Default: Desktop */
.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 kolom */
}

/* Kalau HP (layar max 768px) */
@media (max-width: 768px) {
  .menu-grid {
    grid-template-columns: 1fr;  /* 1 kolom saja */
  }
}
```

**Kalau mau layout berbeda di HP:**
1. Buka `css/styles.css`
2. Cari `@media` (media query)
3. Ubah CSS di dalam blok `@media (max-width: 768px) { ... }`

---

## 💡 KALAU INGIN EDIT DESIGN

### Mau ubah warna tombol?

1. Buka `css/styles.css` (sekitar baris 1-30)
2. Ubah nilai di `:root { }` section
3. Contoh: ubah `--primary: #c7319c;` → `--primary: #0066ff;` (biru)
4. Semua tombol pink otomatis jadi biru!

### Mau ubah ukuran header/judul?

1. Buka `css/styles.css`
2. Cari `h1 {`
3. Ubah `font-size` ke nilai baru
4. Contoh: `font-size: 4rem;` (lebih besar dari 3rem)

### Mau ubah jarak antar section?

1. Buka `css/styles.css`
2. Cari `section {`
3. Ubah `padding` nilai
4. Contoh: `padding: 40px 0;` (lebih besar = lebih jauh)

### Mau ubah warna dark mode?

1. Buka `css/styles.css`
2. Cari `.theme-dark {` atau `:root.theme-dark {`
3. Ubah warna-warna di sana
4. Contoh: ubah `background: #0f0b12;` → `background: #1a1a1a;` (lebih terang)

---

## 📸 TIPS DESIGN

✅ **Warna konsisten** - Gunakan pink, kuning, merah yang sudah ditentukan  
✅ **Jarak rapi** - Gunakan `1rem`, `1.5rem`, `2rem` (konsisten)  
✅ **Font satu jenis** - Hanya pakai Poppins, jangan tambah font baru  
✅ **Responsive pertama** - Buat di HP dulu, baru desktop  
✅ **Cek dark mode** - Pastikan warna bagus di mode gelap juga  
✅ **Line height penting** - Jarak antar baris membuat text mudah dibaca  

---

## 🎨 QUICK REFERENCE - Warna & Nilai

**Kalau mau ganti warna pink ke warna lain, gunakan salah satu ini:**

```
Biru: #0066ff
Hijau: #00cc66
Oranye: #ff6600
Ungu: #9900ff
Merah Terang: #ff3333
Abu-abu: #666666
```

**Contoh: Ubah website jadi biru**

Buka `css/styles.css`, ubah baris pertama:

```css
:root {
  --primary: #0066ff;    ← Ubah dari #c7319c ke #0066ff (biru)
  --accent: #eccb30;     ← Atau ubah ini juga (tombol tetap kuning)
}
```

Semua warna pink otomatis jadi biru! 🎨

## 🧩 REUSABLE COMPONENTS

### 1. Button
**Classes:** `.btn`, `.btn-primary`, `.btn-secondary`

```html
<!-- Primary Button (Pink gradient) -->
<a class="btn btn-primary" href="#">Button Text →</a>

<!-- Secondary Button (Yellow) -->
<button class="btn btn-secondary">Button Text</button>
```

**CSS:**
```css
.btn {
  border-radius: 999px;
  font-weight: 700;
  padding: 0.8rem 1.4rem;
  display: inline-flex;
  transition: all 0.28s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #c7319c 0%, #c7333e 100%);
  color: #ffffff;
}

.btn-secondary {
  background: #eccb30;
  color: #000000;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(...);
}
```

---

### 2. Card
**Classes:** `.visit-card`, `.menu-item`, `.benefit-card`

```html
<!-- Location Card -->
<article class="visit-card location-card">
  <h3>Lokasi Kami</h3>
  <p>Tempatnya mudah dicari...</p>
  <button class="btn btn-primary">Button</button>
</article>

<!-- Menu Item Card -->
<div class="menu-item">
  <div class="menu-item-media">
    <img src="..." alt="...">
  </div>
  <h4>Item Name</h4>
  <p>Description</p>
</div>
```

**CSS:**
```css
/* Base card styling */
.visit-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(199, 49, 156, 0.12);
  transition: transform 0.3s ease;
}

.visit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(199, 49, 156, 0.15);
}
```

---

### 3. Form Elements
**Classes:** `.form-input`, `.form-textarea`, `.form-select`

```html
<div class="form-group">
  <input type="text" name="fullname" placeholder="Name" class="form-input">
</div>

<div class="form-group">
  <textarea name="message" placeholder="Message" class="form-textarea"></textarea>
</div>

<button type="submit" class="btn btn-primary btn-submit">Send</button>
```

**CSS:**
```css
.form-input {
  width: 100%;
  padding: 0.9rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: 0.7rem;
  font-family: inherit;
  background: var(--background);
  color: var(--foreground);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(199, 49, 156, 0.1);
}
```

---

### 4. Hero Section
**Classes:** `.hero`, `.hero-grid`, `.hero-copy`, `.hero-media`

```html
<section class="hero">
  <div class="hero-grid">
    <div class="hero-copy">
      <h1>Main Headline</h1>
      <p>Sub-heading text</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#">CTA 1</a>
        <a class="btn btn-secondary" href="#">CTA 2</a>
      </div>
    </div>
    <div class="hero-media">
      <img src="..." alt="...">
    </div>
  </div>
</section>
```

---

### 5. Title Card
**Classes:** `.page-title-card`

```html
<section class="page-title-wrap about-page-hero">
  <div class="container">
    <article class="page-title-card reveal">
      <p class="eyebrow">ABOUT US</p>
      <h1>About Us</h1>
      <p>Description text...</p>
    </article>
  </div>
</section>
```

**CSS:**
```css
.page-title-card {
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  border: 1px solid rgba(199, 49, 156, 0.22);
  background: linear-gradient(180deg, #faf8fa 0%, #f9f7fa 100%);
  padding: clamp(1.5rem, 3vw, 2.3rem);
  box-shadow: 0 16px 34px rgba(199, 49, 156, 0.12);
}

body.theme-dark .page-title-card {
  background: linear-gradient(180deg, #17141a 0%, #1e1822 100%);
}
```

---

### 6. Badge
**Classes:** `.badge`, `.badge-card`

```html
<span class="badge">
  <i class="bi bi-check-circle-fill"></i>
  Badge Text
</span>

<div class="badge-card">
  <span>🥗</span>
  <strong>Halal Verified</strong>
  <small>BPOM RI</small>
</div>
```

---

### 7. Eyebrow / Label
**Classes:** `.eyebrow`

```html
<p class="eyebrow">OUR MENU</p>
```

**CSS:**
```css
.eyebrow {
  display: inline-flex;
  background: linear-gradient(135deg, #d4449e, #c7319c);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}
```

---

## 🔘 INTERACTIVE STATES

### Button States
```css
/* Default */
.btn:not(:hover) {
  transform: translateY(0);
}

/* Hover */
.btn:hover {
  transform: translateY(-3px) scale(1.02);
  filter: saturate(1.05);
}

/* Active (for nav links) */
.main-nav a.active {
  color: #fbbf24;
  border-bottom: 3px solid #fbbf24;
  font-weight: 800;
}
```

### Form Focus
```css
.form-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(217, 70, 166, 0.1);
  background: var(--card-background);
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

### Mobile-First Approach
```css
/* Base: Mobile (320px - 640px) */
.element { font-size: 1rem; }

/* Tablet (641px - 979px) */
@media (max-width: 980px) {
  .element { font-size: 1.2rem; }
}

/* Desktop (980px+) */
@media (max-width: 640px) {
  /* Mobile overrides if not using min-width */
}
```

### Common Breakpoints
```
Mobile:  320px - 640px
Tablet:  641px - 979px
Desktop: 980px+
```

---

## 🌙 DARK MODE PATTERN

For every light mode style, add dark mode variant:

```css
/* Light mode (default) */
.element {
  background: #ffffff;
  color: #141116;
}

/* Dark mode */
body.theme-dark .element {
  background: #1b151f;
  color: #f8f1f7;
}
```

---

## 💾 CSS VARIABLES (for easy theming)

All color variables defined at top of `styles.css`:

```css
:root {
  --primary: #c7319c;
  --secondary: #c93898;
  --accent: #eccb30;
  --background: #ffffff;
  --foreground: #141116;
  --card: #ffffff;
  --border: #ecd6e5;
}

body.theme-dark {
  --background: #0f0b12;
  --foreground: #f8f1f7;
  --card: #1b151f;
  --border: #4f3a48;
}
```

**To change theme:** Just update CSS variables in `:root` section!

---

## ✅ COMPONENT CHECKLIST

Before creating new components:
- [ ] Define color (use existing or add to CSS variables)
- [ ] Set typography (weight, size from scale)
- [ ] Add spacing (use rem units)
- [ ] Set border-radius (consistency: 999px for pill, 18px for card, 12px for input)
- [ ] Add shadows (use existing patterns)
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test dark mode
- [ ] Test hover states
- [ ] Document class name and usage

---

**For questions about design system, refer to CSS-EDITING-GUIDE.md or README.md**
