# 🐛 PANDUAN TROUBLESHOOTING - Mie Newmind

Panduan lengkap untuk mengatasi masalah-masalah yang sering terjadi saat edit website, dengan solusi step-by-step dan contoh praktis.

---

## ❌ MASALAH #1: WEBSITE TIDAK MUNCUL / HALAMAN KOSONG

### Gejala-Gejalanya:

- Halaman putih/blank saat dibuka
- Tidak ada teks atau gambar
- Atau loading terus-terusan (tidak selesai)
- Text "Cannot GET /" di halaman

---

### Penyebab Kemungkinan:

1. **Browser cache lama** (data tersimpan dari muat halaman sebelumnya)
2. **Local server tidak jalan** (web server tidak running)
3. **HTML file error/rusak** (syntax error di HTML)
4. **Path folder salah** (folder project tidak ketemu)

---

### Langkah-Langkah Solusi:

#### Langkah 1: Hard Refresh Halaman (Clear Cache)

**Ini solution paling umum untuk masalah ini!**

**Di Mac:**
- Tekan: **Cmd + Shift + R** (simultaneously)
- Atau: **Command + Shift + Delete** (clear cache)

**Di Windows/Linux:**
- Tekan: **Ctrl + Shift + R** (simultaneously)
- Atau: **Ctrl + Shift + Delete** (clear cache)

**Penjelasan:**
- Normal refresh (F5) hanya reload halaman dari cache
- Hard refresh (Ctrl+Shift+R) mengunduh ulang semua from server
- Browser cache lama bisa cause halaman tampil salah

**Hasil:** Jika halaman muncul setelah hard refresh → problem solved! ✅

---

#### Langkah 2: Pastikan Local Server Sedang Jalan

**Scenario:** Halaman masih kosong setelah hard refresh

**Cek server running:**

1. Buka VS Code
2. Cari panel "Terminal" (atau tekan Ctrl+`)
3. Lihat ada process yang jalan tidak?

**Jika tidak ada yang jalan, start server:**

```bash
# Di terminal folder project
cd /path/ke/MieNewMind-2

# Start local server
python -m http.server 8000

# Atau gunakan Live Server extension VS Code
# Klik "Go Live" di kanan bawah
```

**Expected output:**
```
Serving HTTP on port 8000...
```

**Terus buka di browser:**
- http://localhost:8000

Seharusnya website sudah muncul! ✅

---

#### Langkah 3: Bersihkan Sepenuhnya Cache Browser

**Jika Step 1 & 2 tidak berhasil:**

**Di Chrome:**
1. Tekan `Ctrl + Shift + Delete` (atau `Cmd + Shift + Delete` di Mac)
2. Tab "Cookies and other site data"
3. Dropdown "All time" (untuk clear semua)
4. Centang: "Cookies and other site data"
5. Klik tombol biru "Clear data"
6. Tutup tab "Settings"
7. Kembali ke http://localhost:8000
8. Refresh page

**Di Firefox:**
1. Tekan `Ctrl + Shift + Delete`
2. Klik "Clear Now"

**Jika masih tidak berhasil:**

3. **Coba browser lain** → Buka di Firefox, Safari, atau Edge
4. Jika di browser lain muncul → Problem pasti browser cache
5. Jika masih tidak muncul di browser lain → Problem di HTML file

---

#### Langkah 4: Cek HTML File Ada Error Atau Tidak

**Jika halaman masih kosong di semua browser:**

1. Buka `index.html` di VS Code
2. Lihat ada garis merah bertitik (squiggly red line)?

**Jika ada garis merah:**

- Ini menandakan syntax error di HTML
- Klik garis merah → VS Code biasanya kasih saran fix
- Atau klik `Ctrl+Shift+M` untuk buka "Problems" panel
- Lihat semua error dan fix satu-satu

**Perbaikan umum:**
- Setiap tag `<` harus ada `>` di akhir
- Setiap tag pembuka `<p>` harus ada penutup `</p>`
- String dalam attribute harus dalam kutip: `href="..."`

---

### Apa Jangan Lakukan:

❌ Jangan langsung ubah file HTML tanpa tahu errornya  
❌ Jangan hapus tag random berharap bisa fix  
❌ Jangan assume semua error gara-gara cache (cek juga code)

---

## ❌ MASALAH #2: WEBSITE TIDAK ADA WARNA / STYLING TIDAK MUNCUL

### Gejala-Gejalanya:

- Website tampil plain putih-hitam (no colors!)
- Tidak ada warna pink (#c7319c), kuning (#eccb30)
- Text carut marut, tidak rapi
- Layout berantakan (kolom lebar, spacing salah)
- Gambar tidak centered
- Tombol tidak styled

### Penyebab Kemungkinan:

1. **File CSS tidak ter-load** (path salah atau file missing)
2. **CSS file rusak/error** (syntax error dalam CSS)
3. **Index.html tidak link ke CSS** (missing `<link>` tag)
4. **Browser cache** (CSS lama yang simpan di cache)

---

### Langkah-Langkah Solusi:

#### Langkah 1: Hard Refresh & Clear Cache Browser

**Pertama, coba dulu:**
- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + Shift + R`
- Dan juga clear cache seperti Masalah #1, Langkah 3

**Sering kali masalah hanya browser cache!**

---

#### Langkah 2: Cek Console Error

**Jika Step 1 tidak berhasil:**

1. Buka website
2. Tekan `F12` (Developer Tools)
3. Click tab **"Console"** (tab di atas)
4. Lihat ada teks MERAH ada tidak?

**Jika ada error merah:**

```
Failed to load resource: css/styles.css (404)
```

Ini berarti:
- Status code 404 = File tidak ketemu!
- `/css/styles.css` = Path CSS yang JavaScript cari

**Solusi:** Path CSS salah atau file tidak di tempat yang benar (Langkah 3)

---

#### Langkah 3: Cek Path CSS di HTML

1. Buka `index.html` dengan text editor
2. Tekan `Ctrl+F` search: `<link`
3. Cari yang ada "stylesheet" dan "styles.css"

**Akan ketemu sesuatu seperti ini:**

```html
<head>
  <meta charset="UTF-8">
  <title>Mie Newmind</title>
  <link rel="stylesheet" href="css/styles.css">
  <!-- ↑ Ini yang penting! -->
</head>
```

**Cek attribute `href`:**
- Path harus: `css/styles.css` (relative path)
- BUKAN: `./css/styles.css` (dot di depan bisa problem)
- BUKAN: `/css/styles.css` (slash di depan mencari di root)
- BUKAN: `C:/Users/.../css/styles.css` (absolute path jangan!)

**Jika path salah, ubah jadi:**

```html
<link rel="stylesheet" href="css/styles.css">
```

Simpan file, hard refresh browser!

---

#### Langkah 4: Pastikan File CSS Benar-benar Ada

1. Di VS Code, buka folder `MieNewMind-2`
2. Di sidebar kiri, cari folder `css`
3. Di dalam folder `css`, cek ada file `styles.css` tidak?

**Jika tidak ada file:**
- Buka file dari backup
- Copy dari project template lain
- Atau buat file `styles.css` baru (tapi harus ada isi CSS-nya)

**Jika ada tapi mungkin corrupted:**
- Cek file size tidak aneh
- Buka file, lihat ada syntax error tidak (Langkah 2: cek console)

---

#### Langkah 5: Validasi CSS Syntax

1. Buka `css/styles.css`
2. Tekan `Ctrl+Shift+M` untuk buka "Problems" panel
3. Lihat ada error yang listed

**Common CSS errors:**

```css
/* ❌ WRONG - Missing semicolon */
body {
  color: #333
  background: white
}

/* ✅ CORRECT */
body {
  color: #333;
  background: white;
}

/* ❌ WRONG - Missing closing brace */
button {
  background: #eccb30;
  color: black

/* ✅ CORRECT */
button {
  background: #eccb30;
  color: black;
}

/* ❌ WRONG - Wrong property */
p {
  clor: blue;  /* typo: clor bukan color */
}

/* ✅ CORRECT */
p {
  color: blue;
}
```

---

## ❌ MASALAH #3: TOMBOL / LINK TIDAK BERFUNGSI

### Gejala-Gejalanya:

- Klik tombol "Pesan Sekarang" → tidak ada yang terjadi
- Klik menu "Menu Kami" → tidak buka halaman menu.html
- Jika klik WhatsApp button → WhatsApp tidak terbuka
- Form tidak bisa diisi atau submit tidak bekerja

---

### Penyebab Kemungkinan:

1. **JavaScript error** (kode JS rusak)
2. **HTML link path salah** (file tidak ketemu)
3. **HTML tag grammar salah** (tag tidak tutup, attribute kosong)
4. **Event listener JavaScript belum attach** (JS belum jalan)

---

### Langkah-Langkah Solusi:

#### Langkah 1: Cek Console untuk JavaScript Error

**JavaScript error biasanya di console:**

1. Tekan `F12`
2. Tab **"Console"**
3. Lihat ada error MERAH tidak?

**Contoh error merah:**

```
Uncaught SyntaxError: Unexpected token '}'
js/script.js:245:18
```

Ini berarti:
- Ada syntax error di `js/script.js`
- Baris 245, column 18
- Biasanya: missing/extra bracket, missing quote, dll

**Cara fix:**
- Pergi ke file & line yang disebutkan
- Cari error (missing `}`, `]`, `)`, atau `"`)
- Fix dan refresh

---

#### Langkah 2: Cek Link HTML Format

**Jika click menu tidak buka halaman:**

1. Buka HTML file yang punya link
2. Cari link yang tidak berfungsi

**Contoh - Menu link tidak bekerja:**

```html
<!-- ❌ WRONG -->
<a href="">Menu</a>                    <!-- href kosong! -->
<a href="menu">Menu</a>                <!-- missing .html -->
<a href=" menu.html ">Menu</a>        <!-- ada spasi! -->

<!-- ✅ CORRECT -->
<a href="menu.html">Menu</a>           <!-- Path benar -->
```

**Pastikan:**
- Attribute `href="..."` ada dan tidak kosong
- Path file benar: `menu.html`, `about.html`, dll
- File yang di-link benar-benar ada (bukan `muenu.html` typo)

---

#### Langkah 3: Cek File yang di-Link Ada Atau Tidak

**Jika link `href="menu.html"` tapi halaman tidak buka:**

1. Di VS Code, cek folder root
2. Ada file `menu.html` tidak?
3. Pastikan spelling/nama sama persis:
   - `menu.html` ≠ `menu-page.html`
   - `aboutus.html` ≠ `about-us.html`

**Jika file di subfolder:**

```html
<!-- Jika file di subfolder 'pages' -->
<a href="pages/menu.html">Menu</a>

<!-- BUKAN -->
<a href="menu.html">Menu</a>  <!-- Tidak ketemu! -->
```

---

#### Langkah 4: Cek WhatsApp Button Format

**Jika click WhatsApp button tidak buka WhatsApp:**

1. Buka HTML file, cari link WhatsApp
2. Cari `href="https://wa.me/..."`

**Format yang BENAR:**

```html
<!-- ✅ CORRECT -->
<a href="https://wa.me/6285604030473">
  Chat WhatsApp
</a>

<!-- ❌ WRONG -->
<a href="https://wa.me/+6285604030473">  <!-- Ada + jangan! -->
<a href="https://wa.me/0285604030473">   <!-- Mulai 0 jangan, pakai 62! -->
<a href="wa.me/6285604030473">           <!-- Missing https:// -->
```

**Nomor WhatsApp harus:**
- Start dengan `62` (kode Indonesia)
- Tanpa `+` di depan
- Tanpa spasi
- Contoh format: `6285604030473` (11-12 digit)

---

## ❌ MASALAH #4: PERUBAHAN TIDAK TERLIHAT MESKI SUDAH DI-SAVE

### Gejala-Gejalanya:

- Edit text, save file, tapi halaman tidak berubah
- Edit CSS (ubah warna), tapi warna tidak berubah di browser
- Edit JS (ubah nomor WhatsApp), nomor lama masih muncul
- Refresh halaman F5, masih tidak berubah

---

### Penyebab Kemungkinan:

1. **Lupa save file** (file masih unsaved dalam VS Code)
2. **Save file yang salah** (edit wrong file)
3. **Browser cache lama** (browser cache-in file yang lama)
4. **Lupa hard refresh** (normal refresh tidak bersihkan cache)

---

### Langkah-Langkah Solusi:

#### Langkah 1: Pastikan File Sudah Tersimpan

**Di VS Code, cek indicator save:**

1. Lihat tab file di atas
2. Jika ada **titik putih** ⚪ atau **cross X** di tab → file belum save!

```
Contoh tab jika belum save:
[index.html] ⚫  ← Dot putih = unsaved

Contoh tab jika sudah save:
[index.html]     ← Tidak ada dot = saved ✓
```

**Cara save file:**
- Tekan **Ctrl+S** (atau Cmd+S di Mac)
- Atau klik File → Save
- Titik putih akan hilang → File tersimpan! ✓

---

#### Langkah 2: Pastikan Edit Di File Yang Benar

**Scenario: Ubah warna pink, edit di file salah**

Sering terjadi:
- Edit di `test.css` (file salah)
- HTML link ke `styles.css` (file yang di-use)
- Jadi perubahan tidak terlihat

**Cara pastikan edit file benar:**

1. **Mau ubah CSS?** → Edit di `css/styles.css` (bukan file lain)
2. **Mau ubah teks?** → Edit 
di `js/script.js` (di bagian `const i18n = {...}`)
3. **Mau ubah menu?** → Edit di `js/menu.js` (di bagian `const menuData = {...}`)
4. **Mau ubah HTML?** → Edit `.html` file yang sesuai (index.html, menu.html, dll)

**Tips: Cek path file**

Di tab VS Code, path file muncul pada hover/tooltip:

```
Hovering tab menunjuk: 
"css/styles.css"  ← Ini file layout CSS? Check!
"css/custom.css"  ← Atau file ini? Check juga!
```

---

#### Langkah 3: Hard Refresh Halaman

**Kalau yakin edit di file yang benar dan sudah save:**

Hard refresh untuk clear browser cache:

- **Mac:** Cmd + Shift + R
- **Windows:** Ctrl + Shift + R

**Expected:** Perubahan muncul di browser! ✓

---

#### Langkah 4: Full Cache Clear Jika Step 3 Tidak Bekerja

1. Tekan `Ctrl+Shift+Delete` (atau `Cmd+Shift+Delete` di Mac)
2. Tab "Cookies and other site data"
3. Time range: "All time"
4. Klik "Clear data"
5. Close tab
6. Refresh browser
7. Cek perubahan ada tidak?

---

## ❌ MASALAH #5: GAMBAR TIDAK MUNCUL / BROKEN IMAGE

### Gejala-Gejalanya:

- Tempat gambar kosong / blank
- Ada icon ❌ atau tanda gambar rusak
- Console error: `Failed to load resource: image.jpg`
- Alt text muncul tapi gambar tidak

---

### Penyebab Kemungkinan:

1. **Path gambar salah** (file tidak di lokasi yang ditulis)
2. **Nama file typo** (selisih 1 karakter bisa error)
3. **File gambar tidak ada** (tidak ter-upload atau terhapus)
4. **Spasi di nama file** (nama: "my image.jpg" → tidak bisa di-load)

---

### Langkah-Langkah Solusi:

#### Langkah 1: Cek Path Gambar Di HTML

**Buka HTML file, search gambar yang tidak muncul:**

```html
<!-- Contoh gambar yang broken -->
<img src="assets/hero.jpg" alt="Hero Mie">
```

**Cek setiap part dari path:**
1. Folder `assets` ada di folder sama dengan HTML file?
2. Di dalam `assets`, ada file `hero.jpg` tidak?

**Path structure yang benar:**

```
MieNewMind-2/
├── index.html
├── menu.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── assets/             ← Folder assets di sini!
    ├── logo/
    │   └── logo.png
    ├── pages/
    │   └── hero.jpg
    └── products/
        ├── noodles/
        ├── appetizers/
        └── beverages/
```

---

#### Langkah 2: Cek Console Error untuk Gambar

1. Tekan `F12` → Console
2. Cari error yang mention gambar

**Contoh error:**

```
Failed to load resource: the server responded with a status of 404 (Not Found)
assets/img/hero.jpg
```

Ini berarti:
- Path `assets/img/hero.jpg` tidak ketemu
- File harus ada di folder `assets/img/`
- Atau path di HTML harus diubah

---

#### Langkah 3: Cek Nama File (Case Sensitive!)

**Penting: Nama file CASE SENSITIVE!**

Ini berarti:
- `Hero.jpg` ≠ `hero.jpg` (berbeda!)
- `Image.PNG` ≠ `image.png` (bedanya huruf besar kecil)

**Contoh:**

```html
<!-- ❌ WRONG - File aslinya "mie-bupati.jpg" lowercase -->
<img src="assets/products/noodles/Mie-Bupati.jpg">

<!-- ✅ CORRECT - Nama file sama persis! -->
<img src="assets/products/noodles/mie-bupati.jpg">
```

**Cara cek nama file yang benar:**

1. Di VS Code, open folder `assets`
2. Semua file yang ada, lihat nama/case-nya
3. Copy paste nama persis ke HTML `src="..."`

---

#### Langkah 4: Remove Spasi Dari Nama File

**Nama file dengan spasi biasanya tidak bisa di-load:**

❌ `my image.jpg` → Error!  
✅ `my-image.jpg` → OK!  
✅ `my_image.jpg` → OK!  
✅ `myimage.jpg` → OK!

**Jika file ada spasi:**

1. Rename file: ganti spasi dengan `-` atau `_`
   - `mie bupati.jpg` → `mie-bupati.jpg`
2. Update path di HTML ke nama baru
3. Refresh browser

---

## ❌ MASALAH #6: FORM TIDAK BISA DIKIRIM / WHATSAPP TIDAK BUKA

### Gejala-Gejalanya:

- Isi form (nama, tanggal, jumlah tamu), klik "Kirim Reservasi"
- Tidak ada yang terjadi
- WhatsApp tidak terbuka
- Atau browser redirect tapi salah nomor

---

### Penyebab Kemungkinan:

1. **Nomor WhatsApp salah atau kosong** (format salah, lupa ubah)
2. **Form belum lengkap** (input harus diisi semua)
3. **JavaScript error** (console ada error)
4. **Form input tidak punya attribute `name`** (JS tidak bisa baca)

---

### Langkah-Langkah Solusi:

#### Langkah 1: Cek Nomor WhatsApp Di JavaScript

1. Buka `js/script.js`
2. Tekan `Ctrl+F` search: `const phone = `
3. Akan ketemu sesuatu seperti:

```javascript
const phone = '6285604030473';  // Nomor WhatsApp untuk terima lead
```

**Cek nomor:**
- Ada tidak?
- Benar tidak?
- Format benar: `62...` (tanpa +, tanpa spasi)?

---

#### Langkah 2: Cek Form HTML Lengkap

1. Buka `reservation.html` (atau file form yang digunakan)
2. Cari tag `<form>`

**Form yang BENAR:**

```html
<form id="reservationForm">
  <label for="name">Nama:</label>
  <input 
    type="text" 
    id="name"
    name="name"           ← Penting! `name` attribute
    placeholder="Nama Anda"
    required
  >
  
  <label for="date">Tanggal:</label>
  <input 
    type="date" 
    id="date"
    name="date"           ← `name` attribute
    required
  >
  
  <button type="submit">Kirim Reservasi</button>
</form>
```

**Penting:**
- Setiap `<input>` harus punya `name="..."` attribute
- Jangan ada `<input>` tanpa `name`
- `<button>` harus punya `type="submit"`

---

#### Langkah 3: Cek Console Error

1. Buka form di browser
2. Tekan `F12` → Console
3. Klik tombol submit
4. Lihat ada error merah?

**Common error:**

```
Uncaught TypeError: Cannot read property 'value' of null
```

Ini berarti:
- Input field tidak ketemu
- Check `id="..."` di input sama dengan di JavaScript
- Atau check `name="..."` attribute missing

---

#### Langkah 4: Test Form Step-by-Step

1. **Isi form:**
   - Nama: "Test User"
   - Tanggal: "2024-01-20"
   - Jam: "19:00"
   - Tamu: "4"

2. **Klik Kirim Reservasi**

3. **Expected hasil:**
   - Browser buka halaman baru untuk WhatsApp
   - URL terlihat: `https://wa.me/[Nomor]?text=...`
   - Jika wa.me terbuka → Berhasil! ✓
   - Jika tidak terbuka → Check nomor (Langkah 1)

---

## 💡 GENERAL TROUBLESHOOTING TIPS

### Tip 1: Gunakan Browser Console (F12)

**Console adalah best friend saat debug!**

Apa yang bisa dilihat di Console:

```
1. ERROR (merah) - Critical errors yang perlu fix
2. WARNING (kuning) - Minor warnings, biasanya bisa ignore
3. INFO (biru) - Info messages dari website
```

**Saat ada masalah:**
1. Tekan `F12`
2. Tab "Console"
3. Cari error merah
4. Baca error message → usually kasih hint apa yang error

---

### Tip 2: Edit Satu File Dulu, Test, Terus Lanjut

**Jangan edit banyak file sekaligus!**

Alasan:
- Sulit tahu mana file yang error
- Kalau ada masalah, lebih mudah identify
- Aman kalo ada perubahan yang tidak sengaja

**Workflow yang benar:**

```
1. Edit css/styles.css
   - Test di browser
   - Jika bagus → commit / note down
   
2. Edit js/script.js
   - Test di browser
   - Jika bagus → commit
   
3. Edit index.html
   - Test di browser
   - Jika bagus → commit
   
Terus deploy ke live jika semua OK!
```

---

### Tip 3: Gunakan VS Code Error Indicator

**VS Code punya built-in error indicator:**

```
Red squiggly line    ❌ Error - harus fix!
Yellow squiggly line ⚠️ Warning - bisa fix, bisa abaikan
```

**Cara pakai:**

1. Klik red squiggly line
2. VS Code often kasih saran "Quick Fix"
3. Klik suggestion untuk auto-fix

---

### Tip 4: Test Lokal Dulu Sebelum Deploy

**Prinsip penting:**

```
✅ Edit lokal
✅ Test lokal sampai benar (http://localhost:8000)
✅ Deploy ke live (wrangler deploy)
✅ Test live (https://mienewmind.pages.dev)
```

**Jangan langsung deploy tanpa test lokal!**

Bisa crash di live atau error tidak terlihat lokal.

---

### Tip 5: Restart Browser / Clear Cache

**Saat stuck, solution sering:**

1. **Tutup browser sepenuhnya** (close all windows)
2. **Clear cache** (Ctrl+Shift+Delete)
3. **Buka browser baru**
4. **Load halaman lagi**
5. Sering kali masalah hilang! 🎉

---

## 📝 DEBUGGING CHECKLIST

Sebelum "saya tidak tahu apa masalahnya", cek ini:

### JavaScript Errors:
- [ ] Tekan F12 → Console
- [ ] Ada error merah?
- [ ] Baca error message carefully
- [ ] Fix error, refresh halaman

### CSS Not Loading:
- [ ] Cek CSS path di HTML file
- [ ] Cek file `styles.css` ada?
- [ ] Hard refresh: Ctrl+Shift+R
- [ ] Cek Console error (404?

### Link / Button Not Working:
- [ ] Target file ada? (menu.html, about.html, dll)
- [ ] Path benar per relative path rule?
- [ ] Cek console para errors?
- [ ] Test klik beberapa kali?

### Image Not Showing:
- [ ] File ada di path yang ditulis?
- [ ] Nama file case-nya cocok?
- [ ] Spasi di nama file? (ganti pakai `-`)
- [ ] Console ada error?

### Form Not Send:
- [ ] Nomor WhatsApp benar format?
- [ ] Setiap input punya `name="..."`?
- [ ] Test console saat click send?
- [ ] Try browser lain?

---

## 🆘 JIKA MASIH STUCK

1. **Re-read dokumentasi** - Cek QUICK-START.md atau guide relevant
2. **Copy error message** - Screenshot error, cari di Google
3. **Undo perubahan terakhir** - Batalkan, mulai dari awal
4. **Watch tutorial video** - YouTube ada tutorial fixing website
5. **Ask AI** - ChatGPT atau Copilot biasanya helpful!

**Remember:** Semua masalah punya solusi! 💪 Cek juga yang lain di github issues atau documentation.
<!-- Check in index.html -->
<!-- WRONG -->
<link rel="stylesheet" href="./css/styles.css">

<!-- CORRECT -->
<link rel="stylesheet" href="css/styles.css">
```

✅ **Solution 2: CSS syntax error**
```bash
# Look for broken CSS in styles.css

# Common errors:
# - Missing semicolons: color: red  (missing ;)
# - Unclosed braces: body { color: red (missing })
# - Invalid properties: colr: red (typo in "color")
# - Invalid values: color: #gggggg (invalid hex)
```

**To find CSS errors:**
```bash
1. Open styles.css in VS Code
2. Look for red squiggly lines
3. Ctrl+Shift+M to open Problems panel
4. Check all CSS errors listed
5. Fix each one
```

✅ **Solution 3: Hard refresh cache**
```
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
Wait 5 seconds for styles to load
```

---

### Issue: JavaScript errors (console shows red errors)

**Symptoms:**
- Console shows error messages (F12)
- Buttons/features not working
- Dark mode toggle doesn't work

**Diagnosis:**
```
1. Open DevTools: F12
2. Console tab
3. Look for RED error text
4. Read error message carefully
5. Note which file has error (script.js, menu.js, etc.)
```

**Common JavaScript Errors:**

❌ **Syntax Error: Unexpected token**
```javascript
// WRONG - missing closing brace
function toggleMenu() {
  console.log("hello")

// CORRECT
function toggleMenu() {
  console.log("hello");
}
```

❌ **ReferenceError: variable is not defined**
```javascript
// WRONG - variable doesn't exist
console.log(themeColor);  // undefined

// CORRECT - variable defined
const themeColor = '#c7319c';
console.log(themeColor);
```

❌ **Cannot read property of null**
```javascript
// WRONG - element doesn't exist
document.getElementById('navbar').style.color = 'red';
// If #navbar doesn't exist, this breaks

// CORRECT - check if exists
const navbar = document.getElementById('navbar');
if (navbar) {
  navbar.style.color = 'red';
}
```

**Solutions:**

✅ **Fix syntax errors:**
```javascript
// Look for:
// 1. Missing semicolons
// 2. Unclosed parentheses/braces/brackets
// 3. Typos in keywords: funtcion (instead of function)

// Check script.js lines 1-844 in editor
// Red squiggle = error
```

✅ **Fix reference errors:**
```javascript
// Check if HTML element exists with correct ID
// Example: if error says "themeToggle is not defined"
// Search HTML for id="themeToggle"
// If not found, add it or fix the ID in JS
```

✅ **Test after fix:**
```
1. Save file
2. Hard refresh (Cmd+Shift+R)
3. Open Console (F12)
4. Error gone? ✓
```

---

## 🟠 STYLING ISSUES

### Issue: Colors wrong/not matching

**Symptoms:**
- Pink looks orange
- Background color changed
- Text color invisible

**Diagnosis:**
```
1. Open Chrome DevTools: F12
2. Click "Element Inspector" (arrow icon)
3. Click on element with wrong color
4. "Styles" panel shows applied CSS
5. Look for color property
6. Check CSS variables used
```

**Solutions:**

✅ **Solution 1: Check CSS variables**
```css
/* Top of styles.css should have */
:root {
  --primary: #c7319c;    /* Main pink */
  --accent: #eccb30;     /* Yellow */
  --background: #ffffff; /* White/Light */
}

/* If color wrong, update here first */
/* Then deployed version will fix it */
```

✅ **Solution 2: Find color value**
```bash
# Search styles.css for exact color
# Ctrl+F on styles.css

# Example: searching for "#c7319c"
# Should find ~20 results
# Check which one needs fixing
```

✅ **Solution 3: Cascade/specificity issue**
```css
/* More specific selector overrides general one */

/* General */
.button { color: pink; }

/* More specific - wins */
.button.active { color: yellow; }

/* Check in DevTools - strikethrough = overridden */
```

---

### Issue: Mobile layout broken

**Symptoms:**
- Text too big on mobile
- Content overlaps
- Can't scroll
- Buttons unclickable

**Diagnosis:**
```
1. Open DevTools: F12
2. Click "Toggle device toolbar" (Cmd+Shift+M)
3. Select "iPhone 12" or preset
4. Scroll through site
5. Look for layout issues
```

**Solutions:**

✅ **Solution 1: Check media queries**
```css
/* Find in styles.css around line 2900 */
@media (max-width: 640px) {
  /* Mobile styles go here */
  .element { font-size: 1rem; }
}

/* If missing media query, add one */
```

✅ **Solution 2: Fix responsive image**
```css
/* WRONG - fixed width breaks mobile */
img { width: 800px; }

/* CORRECT - responsive */
img { width: 100%; max-width: 800px; }
```

✅ **Solution 3: Fix overflow**
```css
/* WRONG - causes scroll */
.container { width: 1200px; }

/* CORRECT - responsive */
.container { width: min(1120px, 92vw); }
```

---

### Issue: Dark mode colors wrong

**Symptoms:**
- Dark mode toggle doesn't work
- Colors wrong in dark mode
- Text invisible in dark mode

**Diagnosis:**
```
1. Click theme toggle (sun/moon icon)
2. Should see colors change
3. If not: open Console (F12) for errors
4. Check if body has class="theme-dark"
   (right-click → Inspect → check <body> tag)
```

**Solutions:**

✅ **Solution 1: Check dark mode CSS**
```css
/* In styles.css around line 2400 */
body.theme-dark {
  --background: #0f0b12;
  --foreground: #f8f1f7;
  --card: #1b151f;
}

/* If missing, add full dark mode section */
```

✅ **Solution 2: Fix toggle JavaScript**
```javascript
/* In script.js, look for applyTheme() function */
/* Should add class="theme-dark" to body */

// Check in Console:
document.body.classList.contains('theme-dark')
// Should return true/false correctly
```

✅ **Solution 3: Update from localStorage**
```javascript
// In browser Console:
localStorage.getItem('mie-theme')
// Should return 'light' or 'dark'

// If always returns null:
localStorage.setItem('mie-theme', 'light')
// Then toggle should work
```

---

## 🟡 FUNCTIONAL ISSUES

### Issue: Forms not submitting

**Symptoms:**
- Click submit button → nothing happens
- No WhatsApp link opens
- Form data lost

**Diagnosis:**
```
1. Open Console: F12
2. Fill out form
3. Click Submit
4. Watch Console for errors
5. Check Network tab for form submission
```

**Solutions:**

✅ **Solution 1: Check form handler**
```javascript
/* In script.js, search for handleFormSubmit */
/* Function should: 
   1. Get form data
   2. Build message
   3. Open WhatsApp link
*/

// Test in Console:
// Manually build WhatsApp URL to test:
const phone = "62123456789";
const message = encodeURIComponent("Hello");
window.open(`https://wa.me/${phone}?text=${message}`);
```

✅ **Solution 2: Check form HTML**
```html
<!-- WRONG - missing form handler -->
<form>
  <input name="email" />
  <button type="submit">Send</button>
</form>

<!-- CORRECT - has submit handler -->
<form onsubmit="handleFormSubmit(event)">
  <input name="email" />
  <button type="submit">Send</button>
</form>
```

✅ **Solution 3: Check phone number**
```javascript
/* In script.js, find WhatsApp phone number */
/* Should be 62-format like: 62812345678 */
/* NOT: +62812345678 or 0812345678 */

// Find this line (around line 500-600):
const phone = "62812123456";  // CORRECT format
```

---

### Issue: Navigation links not working

**Symptoms:**
- Click menu item → nothing happens
- Page doesn't navigate
- Active state wrong

**Diagnosis:**
```
1. Open Console: F12
2. Click navigation link
3. Check for errors
4. Check Network tab - see page load?
5. Check URL changed?
```

**Solutions:**

✅ **Solution 1: Check href attributes**
```html
<!-- WRONG - href empty -->
<a href="">Home</a>

<!-- CORRECT - href has path -->
<a href="index.html">Home</a>
<a href="/pages/menu.html">Menu</a>
```

✅ **Solution 2: Check file exists**
```bash
# If link goes to menu.html, file must exist:
ls -la pages/menu.html
# If file missing: ERROR

# If missing, check:
# 1. Correct folder (pages/ vs page/)?
# 2. Correct file name? (Menu.html vs menu.html)?
# 3. Create file if needed
```

✅ **Solution 3: Check active state**
```javascript
/* In script.js, find setActiveByCurrentPage() */
/* This function sets .active class on nav items */
/* Should match current URL path */

// Test in Console:
window.location.pathname
// Shows current page path
```

---

### Issue: Images not loading

**Symptoms:**
- Broken image icon (🖼️ with ✗)
- Images appear blank
- Console shows 404 errors

**Diagnosis:**
```
1. Open DevTools: F12
2. Network tab
3. Refresh page
4. Filter by "img"
5. Look for red 404 errors
6. Click image request → check full path
```

**Solutions:**

✅ **Solution 1: Check image path**
```html
<!-- WRONG - path incorrect -->
<img src="/assets/hero.jpg" alt="...">
<!-- Should be relative, not absolute -->

<!-- CORRECT -->
<img src="assets/hero.jpg" alt="...">
<img src="./assets/images/menu.jpg" alt="...">
```

✅ **Solution 2: Check file exists**
```bash
# If src="assets/hero.jpg"
# File must be at: assets/hero.jpg

ls -la assets/hero.jpg
# If not found - add it or fix path

# Check file name case:
# assets/Hero.jpg ≠ assets/hero.jpg (different!)
```

✅ **Solution 3: Check image format**
```bash
# Supported formats:
# ✓ .jpg, .jpeg
# ✓ .png
# ✓ .gif
# ✓ .webp
# ✗ .bmp (use png instead)
# ✗ .tiff (use jpg instead)

# To convert:
# Use ImageMagick: convert image.bmp image.png
# Or online tool: cloudconvert.com
```

---

## 🟢 PERFORMANCE ISSUES

### Issue: Site slow to load

**Symptoms:**
- Takes >3 seconds to load
- Images loading slowly
- Page freezes while scrolling

**Diagnosis:**
```
1. Open DevTools: F12
2. Network tab
3. Refresh page
4. Sort by "Size" (descending)
5. Look for large files
```

**Solutions:**

✅ **Solution 1: Optimize images**
```bash
# Images should be:
# - JPG: < 200KB each
# - PNG: < 150KB each
# - WebP: < 100KB each

# To optimize:
# 1. Use online tool: tinypng.com
# 2. Or command line: imagemin
# 3. Replace large images with compressed versions
```

✅ **Solution 2: Minify CSS/JavaScript**
```bash
# Install tools:
npm install -g cssnano uglify-js

# Minify CSS:
cssnano css/styles.css -o css/styles.min.css

# Minify JS:
uglifyjs js/script.js -o js/script.min.js

# Update HTML to use minified versions
```

✅ **Solution 3: Remove unused styles**
```bash
# Check for unused CSS:
npm install -g purgecss

purgecss --css css/styles.css --content '*.html' 
# Shows unused CSS rules
# Manually remove identified unused rules
```

---

### Issue: Form submission slow

**Symptoms:**
- Takes 5+ seconds to submit form
- No feedback while loading
- User unsure if submitted

**Solutions:**

✅ **Solution 1: Add loading state**
```javascript
function handleFormSubmit(e) {
  e.preventDefault();
  
  const button = e.target.querySelector('button[type="submit"]');
  button.disabled = true;  // Disable button
  button.textContent = 'Sending...';  // Show status
  
  // ... rest of submission code ...
  
  // After success:
  button.disabled = false;
  button.textContent = 'Send';  // Reset
}
```

✅ **Solution 2: Validate before submit**
```javascript
// Check all required fields before sending
function validateForm(formData) {
  if (!formData.name || formData.name.trim() === '') {
    alert('Name is required');
    return false;
  }
  if (!formData.email || !formData.email.includes('@')) {
    alert('Valid email required');
    return false;
  }
  return true;
}
```

---

## 🔵 LANGUAGE & LOCALIZATION ISSUES

### Issue: Language switch not working

**Symptoms:**
- Click language toggle → nothing changes
- Text doesn't translate
- Console shows errors

**Diagnosis:**
```
1. Open Console: F12
2. Click language toggle (EN/ID)
3. Watch for errors
4. Check localStorage for 'mie-lang' key
```

**Solutions:**

✅ **Solution 1: Check i18n object**
```javascript
/* In script.js, find translations object */
/* Should have structure: */
const translations = {
  id: {
    nav: { home: 'Beranda', menu: 'Menu', ... },
    hero: { title: 'Restoran Mie Newmind', ... },
    ...
  },
  en: {
    nav: { home: 'Home', menu: 'Menu', ... },
    hero: { title: 'Mie Newmind Restaurant', ...},
    ...
  }
}

/* If missing translations, add them */
```

✅ **Solution 2: Check toggle button**
```html
<!-- Language toggle button should call applyLanguage() -->
<button onclick="applyLanguage(event)" class="lang-btn">
  <span class="lang-flag">🇮🇩</span>
  EN
</button>
```

✅ **Solution 3: Test localStorage**
```javascript
// In Console, test:
localStorage.getItem('mie-lang')
// Should return 'id' or 'en'

// If not working, manually set:
localStorage.setItem('mie-lang', 'en')
// Then refresh page
```

---

## 🟣 DEPLOYMENT ISSUES

### Issue: Changes not showing after deploy

**Symptoms:**
- Deployed new version
- Old content still showing
- Changes not live

**Diagnosis:**
```
1. Check deployment completed:
   wrangler pages deployment list --project-name mienewmind
2. Check URL: https://mienewmind.pages.dev
3. Hard refresh: Cmd+Shift+R
4. Wait 1-2 minutes for CDN
5. Try different browser
```

**Solutions:**

✅ **Solution 1: Clear browser cache**
```
Chrome:
- Settings → Privacy → Clear browsing data
- Select "All time"
- Check "Cached images" 
- Click "Clear data"

Safari:
- Develop → Empty Web site Cache
- Cmd+Shift+Delete

Or: Hard refresh
- Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

✅ **Solution 2: Purge CloudFlare cache**
```bash
wrangler pages purge --project-name mienewmind

# Then wait 30-60 seconds
# Then refresh in browser
```

✅ **Solution 3: Check actual file updated**
```bash
# Verify changes in local files first:
grep "new text" index.html
# Should find your changes

# If found, redeploy:
wrangler pages deploy . --project-name mienewmind

# If NOT found, your file wasn't saved!
# Check file is actually edited and saved
```

---

### Issue: Deploy fails with error

**Common errors:**

❌ **"Project not found"**
```bash
# Solution: Check exact project name
wrangler pages project list
# Copy exact name from output

# Use correct name:
wrangler pages deploy . --project-name mienewmind
```

❌ **"No credentials found"**
```bash
# Solution: Login to CloudFlare
wrangler login
# Browser opens, complete authentication
# Then retry deploy
```

❌ **"403 Forbidden"**
```bash
# Solution: Token expired
wrangler logout
wrangler login
# Complete auth again

# Or: Check permissions on CloudFlare account
```

---

## 🆘 WHEN ALL ELSE FAILS

### Step 1: Create Backup
```bash
# Copy entire folder to safe location
cp -r MieNewMind-2 MieNewMind-2-backup-DATE
```

### Step 2: Check Error Details
```javascript
/* Open Console: F12 */
/* Copy full error message */
/* Search error online or in documentation */
```

### Step 3: Systematic Testing
```
1. Test each feature individually
2. Test on different browsers
3. Test on mobile vs desktop
4. Test with/without cache
5. Test hard refresh
6. Test clean browser session
```

### Step 4: Revert Changes
```bash
# If recent edit broke something:
# 1. Identify which file changed
# 2. Check git history:
   git log --oneline
3. Revert file:
   git checkout HEAD -- filename.html
4. Test again
```

### Step 5: Get Help
```
Check files:
1. README.md - Overview & setup
2. CSS-EDITING-GUIDE.md - Style debugging
3. JAVASCRIPT-EDITING-GUIDE.md - JS debugging
4. DESIGN-SYSTEM.md - Color/component reference

Or: Check browser DevTools:
- Console: Errors
- Network: Failed loads
- Elements: HTML structure
- Application: localStorage/cookies
```

---

## 📝 TROUBLESHOOTING CHECKLIST

When something breaks:

- [ ] Is site loading at all? (Check Console for 404s)
- [ ] Do styles look right? (Check Network tab for CSS)
- [ ] Are images showing? (Network tab → images)
- [ ] Can you click buttons? (Console for JS errors)
- [ ] Does dark mode work? (Should apply CSS variables)
- [ ] Did you deploy? (Check wrangler deployment list)
- [ ] Did you hard refresh? (Cmd+Shift+R)
- [ ] Is URL correct? (https://mienewmind.pages.dev)
- [ ] Check element in Inspector (F12 → Elements tab)
- [ ] Look for red errors in Console (F12 → Console)

**If still stuck:**
1. Revert latest change
2. Restart browser
3. Clear all caches
4. Try different browser
5. Backup → restore previous working version

---

**Remember: Most issues solve with a hard refresh or cache clear! 🔄**
