# 🎨 PANDUAN EDIT CSS - Mie Newmind

CSS adalah file yang mengatur tampilan website (warna, ukuran, letak, dll). Panduan ini menjelaskan di mana mencari apa yang ingin diubah dengan contoh spesifik dan detail.

---

## 📍 LOKASI FILE & CARA MEMBUKA

### Dimana File CSS?
- **Path lengkap:** Folder project → `css` → `styles.css`
- **Total file:** Hanya 1 file CSS untuk seluruh website
- **Ukuran:** ~70KB

### Cara Membuka File CSS
1. Buka text editor (VS Code, Sublime Text, atau bahkan Notepad)
2. Tekan `Ctrl+O` → navigasi ke folder `css`
3. Pilih file `styles.css`
4. Tekan `Ctrl+F` untuk search kode yang ingin diubah

---

## 🎯 BAGIAN-BAGIAN DALAM styles.css (Structure)

File CSS dibagi menjadi beberapa section besar untuk memudahkan maintenance:

```
SECTION 1: Root Variables (Baris 1-50)
SECTION 2: Header & Navigation (Baris 100-300)
SECTION 3: Hero Section (Baris 350-500)
SECTION 4: Menu Items & Cards (Baris 550-800)
SECTION 5: Footer (Baris 850-950)
SECTION 6: Dark Mode (Baris 1000+)
```

---

## ✅ BAGIAN 1: ROOT VARIABLES - Warna Utama (Baris 1 sampai 50)

**Untuk apa:** Menyimpan warna-warna dan nilai utama yang digunakan di seluruh website. Mengubah di bagian ini akan otomatis mengubah seluruh website.

**Lokasi kode:**
```css
:root {
  /* Light Mode Colors */
  --primary: #c7319c;           /* Pink utama - tombol, heading highlight */
  --primary-dark: #c93898;      /* Pink gelap - hover effect */
  --accent: #eccb30;            /* Kuning - call-to-action, special buttons */
  --danger: #c7333e;            /* Merah - badges "BEST SELLER", alerts */
  --background: #ffffff;        /* Putih - background halaman */
  --foreground: #141116;        /* Hitam gelap - text body */
  --text-secondary: #5f5660;    /* Abu-abu - subtitle, caption */
  --border: #ecd6e5;            /* Abu-abu terang - border, divider */
  
  /* Dark Mode Colors (nanti direfresh saat dark mode aktif) */
  --bg-dark: #0f0b12;
  --text-light: #f8f1f7;
  /* ... dan lainnya */
}
```

### Contoh Perubahan 1: Ubah Warna Pink Utama Jadi Biru

**Cari ini:**
```css
--primary: #c7319c;  /* Pink utama */
```

**Ubah jadi:**
```css
--primary: #0066ff;  /* Biru utama */
```

**Hasil:** Semua tombol, heading, dan elemen pink otomatis jadi biru di seluruh website!

### Contoh Perubahan 2: Ubah Warna Kuning Jadi Oranye

**Cari ini:**
```css
--accent: #eccb30;  /* Kuning */
```

**Ubah jadi:**
```css
--accent: #ff6600;  /* Oranye */
```

**Hasil:** Semua tombol kuning dan accent elements jadi oranye!

### Contoh Perubahan 3: Ubah Warna Merah Jadi Hijau

**Cari ini:**
```css
--danger: #c7333e;  /* Merah untuk badge */
```

**Ubah jadi:**
```css
--danger: #10b981;  /* Hijau untuk badge */
```

**Hasil:** Badge "BEST SELLER" berubah warna jadi hijau!

---

## ✅ BAGIAN 2: HEADER & NAVBAR (Baris 100-300)

**Untuk apa:** Mengatur tampilan menu atas/header dengan logo, navigasi links, dan buttons

**Yang bisa diubah:**
- Warna background header
- Ukuran (height) header
- Warna text navigasi
- Padding/spacing dalam header
- Style tombol language/theme toggle

### Struktur CSS Header

```css
/* Container header */
.site-header {
  background: linear-gradient(135deg, #c7319c, #c93898);  /* Gradien pink */
  padding: 1rem 0;                                        /* Jarak dalam header */
  position: sticky;                                       /* Tetap di atas saat scroll */
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Logo area */
.brand-logo {
  height: 50px;  ← Ubah angka ini untuk mengubah ukuran logo
  width: auto;
}

/* Navigation menu links (Home, Menu, About, dll) */
.main-nav a {
  color: white;        ← Ubah warna text menu
  font-size: 1rem;     ← Ubah ukuran text menu
  text-decoration: none;
  padding: 8px 12px;   ← Jarak dalam menu link
}

/* Saat cursor di atas menu link */
.main-nav a:hover {
  color: #eccb30;      ← Ubah warna saat hover
  border-bottom: 2px solid #eccb30;
}
```

### Contoh Perubahan 1: Ubah Warna Background Header Jadi Solid (Bukan Gradien)

**Dari ini:**
```css
.site-header {
  background: linear-gradient(135deg, #c7319c, #c93898);
}
```

**Jadi ini:**
```css
.site-header {
  background: #c7319c;  /* Solid pink, bukan gradien */
}
```

### Contoh Perubahan 2: Ubah Ukuran Logo

**Dari ini:**
```css
.brand-logo {
  height: 50px;  /* Logo tinggi 50px */
}
```

**Jadi ini:**
```css
.brand-logo {
  height: 70px;  /* Logo lebih besar jadi 70px */
}
```

---

## ✅ BAGIAN 3: HERO SECTION (Baris 350-500)

**Untuk apa:** Mengatur tampilan bagian paling atas halaman (hero) - dengan gambar besar, judul, subtitle, dan tombol

**Yang bisa diubah:**
- Background color/image
- Ukuran text judul
- Warna dan ukuran tombol
- Jarak antar elemen
- Tinggi hero section

### Struktur CSS Hero

```css
/* Hero section container */
.page-title-wrap {
  min-height: 400px;  ← Ubah tinggi hero section
  background: linear-gradient(135deg, #c7319c, #c93898);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Judul besar di hero */
.page-title-card h1 {
  font-size: 3rem;      ← Ubah ukuran judul (3rem = 48px)
  color: white;
  font-weight: 900;
}

/* Subtitle di hero */
.page-title-card p {
  font-size: 1.2rem;    ← Ubah ukuran subtitle (1.2rem = 19px)
  color: rgba(255,255,255,0.9);
}

/* Tombol di hero */
.btn-primary {
  background-color: #eccb30;     ← Ubah warna tombol
  color: #141116;                ← Ubah warna text tombol
  padding: 12px 32px;            ← Ubah ukuran (padding) tombol
  font-size: 1.1rem;             ← Ubah ukuran text dalam tombol
  border-radius: 8px;            ← Ubah sudut tombol melengkung
  border: none;
  cursor: pointer;
}

/* Saat hover ke tombol */
.btn-primary:hover {
  background-color: #d4b620;     ← Ubah warna saat hover
  transform: translateY(-3px);   ← Tombol bergerak naik sedikit
}
```

### Contoh Perubahan: Ubah Tinggi Hero Section Jadi Lebih Tinggi

**Dari ini:**
```css
.page-title-wrap {
  min-height: 400px;  /* Hero tinggi 400px */
}
```

**Jadi ini:**
```css
.page-title-wrap {
  min-height: 600px;  /* Hero lebih tinggi jadi 600px */
}
```

---

## ✅ BAGIAN 4: MENU ITEMS & CARDS (Baris 550-800)

**Untuk apa:** Mengatur tampilan kartu-kartu menu, produk, dan item lainnya yang ditampilkan dalam grid

**Yang bisa diubah:**
- Ukuran card
- Spacing antar card
- Warna card
- Shadow/bayangan card
- Ukuran gambar dalam card

### Struktur CSS Menu Cards

```css
/* Grid container untuk card */
.menu-item, .product-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;         ← Jarak antar card
  padding: 20px;
}

/* Satu card */
.menu-item, .product__card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);  ← Bayangan card
  transition: all 0.3s ease;
}

/* Saat hover ke card */
.menu-item:hover, .product__card:hover {
  transform: translateY(-8px);              ← Card bergerak naik
  box-shadow: 0 12px 24px rgba(0,0,0,0.15); ← Bayangan lebih dalam
}

/* Image dalam card */
.menu-item img {
  width: 100%;
  height: 200px;     ← Ubah tinggi gambar dalam card
  object-fit: cover;
  border-radius: 8px;
}
```

### Contoh Perubahan: Ubah Jarak Antar Card

**Dari ini:**
```css
gap: 20px;  /* Jarak antar card 20px */
```

**Jadi ini:**
```css
gap: 30px;  /* Jarak antar card lebih lebar jadi 30px */
```

---

## ✅ BAGIAN 5: FOOTER (Baris 850-950)

**Untuk apa:** Mengatur tampilan bagian bawah halaman (footer) dengan copyright, link, informasi

**Yang bisa diubah:**
- Background color footer
- Text color
- Link color
- Padding footer
- Arrangement teks dalam footer

---

## ❌ BAGIAN 6: DARK MODE (Baris 1000+)

**Untuk apa:** Menyimpan warna alternatif yang digunakan saat user mengaktifkan dark mode

**Otomatis berubah?** YA! Saat user klik tombol 🌙, CSS otomatis switch ke dark mode colors.

**Jangan perlu diubah** kecuali mau customize dark mode appearance.

---

## 🔍 TIPS SEARCHING CSS

### Cara Cari Hal Yang Mau Diubah

**Gunakan Ctrl+F untuk search:**

| Ingin ubah | Cari kata kunci ini |
|-----------|-------------------|
| Warna pink | `--primary` atau `#c7319c` |
| Warna kuning | `--accent` atau `#eccb30` |
| Ukuran teks judul | `.page-title h1` atau `font-size` |
| Ukuran tombol | `.btn` atau `padding` |
| Warna header | `.site-header` atau `background` |
| Jarak card | `gap:` |
| Shadow/bayangan | `box-shadow` |

---

## ✨ TIPS PENTING

1. **Sebelum edit**: Backup file asli terlebih dahulu
2. **Comment useful**: Tambah `/* komentar di sini */` untuk penjelasan
3. **Refresh browser**: Selalu refresh dengan `Ctrl+Shift+R` (hard refresh) agar perubahan terlihat
4. **Test di mobile**: Pastikan perubahan bagus di smartphone juga
5. **Use variables**: Sebisa mungkin gunakan `var(--primary)` daripada `#c7319c` untuk konsistensi
```css
padding: 16px 32px;  /* Dari 12px 24px jadi 16px 32px */
```

Kalau mau tombol dengan sudut lebih tajam:
```css
border-radius: 0px;  /* Dari 8px jadi 0px (melengkung jadi tajam) */
```

---

### ✅ BAGIAN 4: MENU SECTION (Baris 800-1200)

**Untuk apa:** Mengatur tampilan menu produk (daftar Mie, Dimsum, Minuman)

**Yang bisa diubah:**
- Layout bagaimana menu ditampilkan (2 kolom? 3 kolom?)
- Warna kotak menu item
- Ukuran gambar produk
- Jarak antar item

**Contoh mengubah jumlah kolom menu:**

Cari `.menu-grid {`

```css
.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 kolom */
  gap: 20px;                           /* Jarak antar item */
}
```

Kalau mau 4 kolom (lebih banyak item per baris):
```css
grid-template-columns: 1fr 1fr 1fr 1fr;  /* Ubah 3 jadi 4 */
```

Kalau mau 2 kolom saja (item lebih lebar):
```css
grid-template-columns: 1fr 1fr;  /* Ubah 3 jadi 2 */
```

Kalau mau jarak antar item lebih jauh:
```css
gap: 30px;  /* Dari 20px jadi 30px */
```

---

### ✅ BAGIAN 5: LOCATION & RESERVATION (Baris 1250-1600)

**Untuk apa:** Mengatur tampilan section lokasi toko dan form reservasi

**Yang bisa diubah:**
- Warna kotak lokasi
- Ukuran form
- Warna input field
- Jarak form

**Contoh mengubah warna input field saat diklik (focus):**

Cari `.form-input:focus {`

```css
.form-input:focus {
  border-color: var(--primary);  /* Border menjadi pink saat diklik */
  box-shadow: 0 0 0 3px rgba(199, 49, 156, 0.1);
}
```

Kalau mau border jadi kuning saat diklik (highlight kuning):
```css
border-color: var(--accent);  /* Ubah dari --primary ke --accent */
```

---

### ✅ BAGIAN 6: FOOTER (Baris 1750-2000)

**Untuk apa:** Mengatur tampilan bagian bawah (footer) - copyright, social media, link

**Yang bisa diubah:**
- Background footer
- Warna link
- Ukuran social media icon
- Jarak dalam footer

**Contoh mengubah warna background footer:**

Cari `.site-footer {`

```css
.site-footer {
  background: #1a1a1a;  /* Warna gelap */
  color: white;         /* Text putih */
  padding: 40px 0;      /* Jarak dalam */
}
```

Kalau mau background footer lebih gelap:
```css
background: #000000;  /* Hitam pekat */
```

Kalau mau background footer terang (untuk light mode):
```css
background: #f5f5f5;  /* Abu-abu terang */
```

---

## 🔍 CARA CARI BAGIAN YANG INGIN DIUBAH

### Metode 1: Gunakan Ctrl+F

Tekan `Ctrl+F` (atau `Cmd+F` di Mac), ketik yang dicari:

| Ingin mengubah | Ketik ini untuk cari |
|----------------|-------------------|
| Warna tombol | `.btn-primary` |
| Judul besar | `h1` atau `h2` |
| Menu grid/kolom | `.menu-grid` |
| Input form | `.form-input` |
| Warna link | `a {` |
| Logo | `.logo` |
| Header/navbar | `.site-header` |
| Footer | `.site-footer` |

### Metode 2: Edit CSS Langsung di Browser

Ini cara super cepat untuk test sebelum save:

1. Buka website di browser
2. Tekan `F12` (Developer Tools)
3. Klik tombol "Select Element" (panah di kotak kiri atas)
4. Klik elemen yang ingin diubah di website
5. Di panel kanan, akan muncul CSS elemen itu
6. Ubah nilai di sana, lihat hasilnya langsung di website
7. Kalau sudah benar, copy nilai yang benar
8. Buka file `css/styles.css`, paste nilai yang benar
9. Simpan file

*(Ini hanya untuk testing, setiap refresh halaman perubahan hilang)*

---

## 💡 CONTOH PENGUBAHAN PRAKTIS

### CONTOH 1: Mau ubah warna hero section jadi biru

1. Buka `css/styles.css`
2. Cari: `--primary: #c7319c;` (baris 1-50)
3. Ubah menjadi: `--primary: #0066ff;` (biru)
4. Simpan, refresh halaman
5. Hero background dan tombol otomatis jadi biru! ✅

### CONTOH 2: Mau menu produk jadi 4 kolom (lebih banyak per baris)

1. Buka `css/styles.css`
2. Cari: `.menu-grid {`
3. Cari di dalamnya: `grid-template-columns: 1fr 1fr 1fr;`
4. Ubah menjadi: `grid-template-columns: 1fr 1fr 1fr 1fr;`
5. Simpan, refresh halaman
6. Menu produk sekarang tampil 4 kolom! ✅

### CONTOH 3: Mau form input lebih besar

1. Buka `css/styles.css`
2. Cari: `.form-input {`
3. Cari di dalamnya: `padding: ...;`
4. Ubah jadi: `padding: 14px 16px;` (dari 10px 12px)
5. Simpan, refresh halaman
6. Form input lebih besar! ✅

### CONTOH 4: Mau tombol lebih bulat (sudut lebih melengkung)

1. Buka `css/styles.css`
2. Cari: `.btn-primary {`
3. Cari: `border-radius: 8px;`
4. Ubah menjadi: `border-radius: 50px;` (sangat melengkung, seperti pil)
5. Simpan, refresh halaman
6. Tombol sekarang sangat bulat! ✅

---

## ⚠️ TIPS PENTING

### Jangan lupa simpan!
Setelah edit CSS, tekan `Ctrl+S` (atau `Cmd+S`) untuk simpan!

### Refresh browser!
Setelah simpan, tekan `F5` di browser untuk melihat perubahan

### Jika perubahan tidak terlihat:
- Tekan `Ctrl+Shift+R` (hard refresh), atau
- Clear cache browser: `Cmd+Shift+Delete` kemudian clear browsing data

### Jangan edit seluruh blok
Cukup ubah nilai yang perlu diubah saja (warna, ukuran, jarak), jangan hapus atau edit bagian lain

### Hati-hati sama semicolon (;)
Setiap baris CSS harus diakhiri dengan semicolon `;`

Salah:
```css
color: white   /* Tidak ada semicolon */
```

Benar:
```css
color: white;  /* Ada semicolon */
```

---

## 🎨 QUICK REFERENCE - CSS YANG SERING DIUBAH

```css
/* Ubah warna background */
background: #ffffff;          /* Ganti dengan kode warna lain */
background: var(--primary);   /* Atau pakai variable */

/* Ubah warna text */
color: #141116;               /* Text gelap */
color: white;                 /* Text putih */

/* Ubah ukuran text */
font-size: 16px;              /* Atau pakai rem: 1rem */
font-size: 24px;              /* Lebih besar */

/* Ubah padding (jarak dalam) */
padding: 10px 20px;           /* 10px atas-bawah, 20px kiri-kanan */
padding: 20px;                /* Sama di semua sisi */

/* Ubah margin (jarak luar) */
margin: 10px 0;               /* 10px kiri-kanan, 0 atas-bawah */

/* Ubah border (garis tepi) */
border: 1px solid #000;       /* 1px tebal, solid garis, warna hitam */
border-radius: 8px;           /* Sudut melengkung */

/* Ubah shadow (bayangan) */
box-shadow: 0 4px 12px rgba(0,0,0,0.1);  /* Bayangan */

/* Ubah cursor waktu hover */
cursor: pointer;              /* Jadi pointer saat hover */
```

### 9. DARK MODE STYLES (Lines 2400-2800)
**Purpose:** Alternative color scheme for dark theme
**Edit for:** Adjust colors in dark mode
**Note:** Mirror light mode changes here for consistency
**Example:**
```css
body.theme-dark .some-element {
  background: #dark-color;
  color: #light-text;
}
```

---

### 10. RESPONSIVE / MEDIA QUERIES (Lines 2900-3391)
**Breakpoints:**
- **980px**: Tablet/desktop
- **680px**: Tablet
- **640px**: Mobile

**Common changes:**
- Hide/show elements at different screen sizes
- Adjust font sizes
- Modify grid columns
- Change layout (flex/grid)

**Example:**
```css
@media (max-width: 640px) {
  .menu-grid {
    grid-template-columns: 1fr;  /* 1 column on mobile */
  }
}
```

---

## 🎨 QUICK EDITS

### Change Primary Brand Color
**Find:** Line ~8
```css
--primary: #c7319c;  /* Change this hex value */
```

### Change Accent/Highlight Color
**Find:** Line ~9
```css
--accent: #eccb30;   /* Change this hex value */
```

### Change Button Styles
**Find:** `.btn-primary`, `.btn-secondary` (~Line 500-520)
```css
.btn-primary {
  background: linear-gradient(135deg, #c7319c 0%, #c93898 52%, #c7333e 100%);
}
```

### Change Menu Item Card Colors
**Find:** `.menu-item` (~Line 1050)
```css
.menu-item {
  background: #ffffff;  /* Card background */
  border: 1px solid #border-color;
}
```

### Change Form Input Style
**Find:** `.form-input` (~Line 2100)
```css
.form-input {
  border: 1px solid var(--border);
  background: var(--background);
}
```

---

## ⚠️ IMPORTANT RULES

1. **Always use CSS Variables**
   - ✅ DO: `background: var(--primary);`
   - ❌ DON'T: `background: #c7319c;`

2. **Consistent Spacing**
   - Use `rem` units (1rem = 16px)
   - Use `clamp()` for responsive sizing

3. **Mobile-First**
   - Base styles are for mobile
   - Add more complex styles for desktop in media queries

4. **Dark Mode**
   - Always add `body.theme-dark` equivalent
   - Test in both light & dark modes

5. **Typography**
   - Main font: Poppins
   - Weights: 400, 500, 600, 700, 800, 900

---

## 🔍 FINDING THINGS IN CSS

**Find specific element styling:**
1. Use browser DevTools (F12)
2. Inspect element
3. Find class name in DevTools
4. CTRL+F in CSS to search for class name
5. Make your changes

**Example:**
- In browser: Right-click button → Inspect
- See: `class="btn btn-primary"`
- In CSS: Search for `.btn-primary`
- Edit the styling

---

## ✅ TESTING AFTER CSS CHANGES

1. Open browser DevTools (F12)
2. Hard refresh (CTRL+SHIFT+R)
3. Check all breakpoints:
   - Mobile (320px, 480px)
   - Tablet (768px)
   - Desktop (1024px+)
4. Test dark mode toggle
5. Test light mode
6. Check all pages

---

**For help, refer to README.md or reach out to the development team.**
