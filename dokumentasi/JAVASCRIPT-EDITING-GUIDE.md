# ⚙️ PANDUAN EDIT JAVASCRIPT - Mie Newmind

JavaScript (JS) adalah "otak" website - mengatur interaksi, animasi, fungsi form, dan fitur-fitur interaktif. Panduan ini menjelaskan file JS dan bagian yang sering diubah dengan contoh lengkap.

---

## 📂 FILE JAVASCRIPT YANG PENTING

Ada 2 file JavaScript utama yang perlu diketahui:

| File | Lokasi | Ukuran | Untuk apa |
|------|--------|--------|----------|
| `script.js` | Folder `js` | ~25KB | Main script - navbar, bahasa, dark mode, form, interaksi |
| `menu.js` | Folder `js` | ~10KB | Data menu - daftar semua produk Mie, Dimsum, Minuman |

**Cara membuka:**
1. Buka text editor (VS Code, Sublime Text, Notepad)
2. Tekan `Ctrl+O` → navigasi ke folder `js`
3. Pilih `script.js` atau `menu.js`
4. Tekan `Ctrl+F` untuk cari kode yang ingin diubah

---

## 📍 BAGIAN-BAGIAN DI script.js (File Utama)

### ✅ BAGIAN 1: TEKS WEBSITE - BAHASA INDONESIA & ENGLISH (Baris 1-350)

**Untuk apa:** Semua teks di website tersimpan di sini dengan dukungan 2 bahasa (Indonesian & English)

**Mengapa perlu tahu ini?** Saat user klik tombol untuk ganti bahasa, teks website berubah otomatis pakai data dari sini.

---

#### Langkah 1: Cari Bagian i18n (Internationalization)

**Buka `js/script.js` dan lihat baris paling atas:**

```javascript
const i18n = {
  id: {
    // Semua text Bahasa Indonesia di sini
  },
  en: {
    // Semua text Bahasa Inggris di sini
  }
};
```

**Struktur teks:**

```javascript
const i18n = {
  id: {                           // Object untuk Bahasa Indonesia
    nav: {                        // Bagian navbar/menu
      home: 'Beranda',
      menu: 'Menu Kami',
      about: 'Tentang Kami',
      location: 'Lokasi Kami',
      reservation: 'Reservasi',
      karir: 'Karir',
      franchise: 'Franchise'
    },
    hero: {                       // Bagian hero (atas halaman)
      heading: 'Selamat datang di Mie Newmind',
      subheading: 'Mie pedas terbaik di kota',
      button: 'Pesan Sekarang'
    },
    about: {                      // Bagian tentang kami
      title: 'Tentang Mie Newmind',
      description: 'Kami adalah...'
    },
    // ... bagian lain
  },
  en: {                           // Object untuk Bahasa Inggris (English)
    nav: {
      home: 'Home',
      menu: 'Our Menu',
      about: 'About Us',
      location: 'Our Location',
      reservation: 'Reservations',
      karir: 'Careers',
      franchise: 'Franchise'
    },
    hero: {
      heading: 'Welcome to Mie Newmind',
      subheading: 'The best spicy noodles in the city',
      button: 'Order Now'
    },
    about: {
      title: 'About Mie Newmind',
      description: 'We are...'
    },
    // ... bagian lain
  }
};
```

---

#### Langkah 2: Cari Teks Yang Ingin Diubah

**Contoh 1: Ubah Judul Hero (Selamat datang di Mie Newmind)**

1. Tekan `Ctrl+F` → Cari: `"Selamat datang di Mie Newmind"`
2. Akan menemukan di bagian `id: { hero: { heading: ...`

**Kode SEBELUM:**
```javascript
id: {
  hero: {
    heading: 'Selamat datang di Mie Newmind',
    // ... lain
  }
},
en: {
  hero: {
    heading: 'Welcome to Mie Newmind',
    // ... lain
  }
}
```

**Kode SESUDAH (ubah jadi "Nikmati Mie Terbaik"):**
```javascript
id: {
  hero: {
    heading: 'Nikmati Mie Terbaik',  ← UBAH INI
    // ... lain
  }
},
en: {
  hero: {
    heading: 'Enjoy The Best Noodles',  ← JUGA UBAH INI
    // ... lain
  }
}
```

**PENTING:** Jika ubah hanya bagian Indonesia (`id:`), jangan lupa ubah juga bagian English (`en:`). Jika tidak, halaman English akan menampilkan teks lama atau kosong!

---

#### Langkah 3: Simpan dan Test

1. Setelah edit, tekan `Ctrl+S` untuk simpan file
2. Buka browser → tekan `Ctrl+Shift+R` (hard refresh - refresh cache)
3. Lihat perubahan di halaman
4. Jika ganti bahasa ke English → lihat juga berubah di sana

---

#### Contoh Kasus Praktis: Ubah Nama Menu Navigasi

**Scenario:** Ingin ubah "Menu Kami" jadi "Daftar Menu" dan "Our Menu" jadi "Menu List"

**Cari bagian:**
```javascript
nav: {
  menu: 'Menu Kami',  // ← Ini yang mau diubah
}
```

**Ubah jadi:**
```javascript
nav: {
  menu: 'Daftar Menu',  // ← Ubah di Indonesia
}
```

**JANGAN LUPA ubah di bagian English juga:**
```javascript
en: {
  nav: {
    menu: 'Menu List',  // ← Ubah di English
  }
}
```

---

### ✅ BAGIAN 2: FORM - PENGIRIMAN KE WHATSAPP (Baris 400-600)

**Untuk apa:** Menangani form (reservasi, karir, franchise) dan mengirim data ke WhatsApp

**Mengapa penting?** Saat user isi form dan tekan "Kirim", data langsung dikirim ke nomor WhatsApp Anda melalui WhatsApp Web.

---

#### Langkah 1: Cari Fungsi Form Handler

**Buka `js/script.js` dan cari fungsi dengan nama:**

- `handleReservationFormSubmit` (untuk form reservasi)
- `handleCareersFormSubmit` (untuk form karir)
- `handleFranchiseFormSubmit` (untuk form franchise)

Biasanya ada di sekitar baris 400-600.

---

#### Langkah 2: Pahami Struktur Form Handler

**Contoh: Form Reservasi**

```javascript
const handleReservationFormSubmit = (e) => {
  e.preventDefault();  // Jangan submit ke server (normal behavior)
  
  // STEP 1: Ambil data dari form (dari HTML input)
  const name = document.querySelector('#name').value;          // Nama dari input #name
  const date = document.querySelector('#date').value;          // Tanggal dari input #date
  const time = document.querySelector('#time').value;          // Jam dari input #time
  const guests = document.querySelector('#guests').value;      // Jumlah tamu
  const notes = document.querySelector('#notes').value;        // Catatan khusus
  
  // STEP 2: Validasi (cek apakah semua field sudah diisi)
  if (!name || !date || !time || !guests) {
    alert('Mohon isi semua field yang wajib!');
    return;  // Berhenti di sini jika ada yang kosong
  }
  
  // STEP 3: Buat pesan untuk WhatsApp
  const message = `
    🍜 *RESERVASI MIE NEWMIND*
    
    Nama: ${name}
    Tanggal: ${date}
    Jam: ${time}
    Jumlah Tamu: ${guests}
    Catatan: ${notes || 'Tidak ada'}
  `;
  
  // STEP 4: Ambil nomor WhatsApp (jangan lupa ubah nomor ini!)
  const phone = '6285604030473';  // ← NOMOR WHATSAPP - UBAH INI!
  
  // STEP 5: Buat link WhatsApp dengan pesan yang sudah dibuat
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  // STEP 6: Buka WhatsApp (akan buka halaman WhatsApp Web atau app)
  window.open(waLink, '_blank');
  
  // STEP 7: Kosongkan form (reset semua input)
  document.querySelector('form').reset();
  
  // STEP 8: Tampilkan pesan sukses ke user
  alert('Pesan terkirim ke WhatsApp kami!');
};
```

---

#### Langkah 3: Ubah Nomor WhatsApp

**Cari baris yang ada nomor:**
```javascript
const phone = '6285604030473';  // Nomor WhatsApp saat ini
```

**Ubah jadi nomor baru:**
```javascript
const phone = '6281234567890';  // Nomor WhatsApp baru Anda
```

**Catatan penting tentang nomor:**
- Gunakan format `62` di awal (bukan `+62` atau `0`)
- Contoh: If nomor Anda `0815-123-4567` → ubah jadi `62815123456`

**Cara cek nomor benar:**
1. Simpan file
2. Buka halaman reservasi
3. Isi form → klik "Kirim"
4. Browser akan buka WhatsApp
5. Jika berhasil terbuka, nomor benar! ✅

---

#### Langkah 4: Ubah Format Pesan WhatsApp

**Saat ini pesan tampil seperti:**
```
🍜 *RESERVASI MIE NEWMIND*

Nama: Budi
Tanggal: 2024-01-15
Jam: 19:00
Jumlah Tamu: 4
Catatan: Tidak ada
```

**Ingin ubah format?** Cari bagian:

```javascript
const message = `
  🍜 *RESERVASI MIE NEWMIND*
  
  Nama: ${name}
  Tanggal: ${date}
  Jam: ${time}
  Jumlah Tamu: ${guests}
  Catatan: ${notes || 'Tidak ada'}
`;
```

**Ubah jadi format baru:**

```javascript
const message = `
  📝 PESANAN BARU!
  
  👤 Nama: ${name}
  📅 Tanggal: ${date}
  ⏱️ Jam: ${time}
  👥 Tamu: ${guests} orang
  
  Catatan: ${notes || '-'}
  
  Silakan konfirmasi!
`;
```

---

### ✅ BAGIAN 3: DARK MODE / LIGHT MODE (Baris 700-800)

**Untuk apa:** Mengatur tema gelap (dark) dan terang (light) website

**Mengapa penting?** User bisa pilih dark mode untuk mata yang nyaman di malam hari.

---

#### Langkah 1: Cari Fungsi applyTheme

**Di `js/script.js` cari fungsi:**
```javascript
const applyTheme = (theme) => {
  // Kode di sini
};
```

**Cara kerjanya:**

```javascript
const applyTheme = (theme) => {
  const html = document.documentElement;  // Ambil element <html>
  
  if (theme === 'dark') {
    html.classList.add('theme-dark');     // Tambah class "theme-dark"
    document.body.style.backgroundColor = '#0f0b12';  // Background gelap
  } else {
    html.classList.remove('theme-dark');  // Hapus class "theme-dark"
    document.body.style.backgroundColor = '#ffffff';  // Background putih
  }
  
  // Simpan pilihan user di browser (localStorage)
  localStorage.setItem('mie-theme', theme);
};
```

---

#### Langkah 2: Mengubah Warna Dark Mode

**PENTING:** Warna dark mode BUKAN diatur di JavaScript!

Warna dark mode diatur di **CSS file** (`css/styles.css`). Begini caranya:

1. Buka `css/styles.css`
2. Cari bagian `.theme-dark` atau `html.theme-dark`

```css
.theme-dark {
  --bg-primary: #0f0b12;      /* Background utama gelap */
  --bg-secondary: #1a161f;    /* Background secondary gelap */
  --text-primary: #f8f1f7;    /* Text putih/terang */
  --text-secondary: #c9a8d1;  /* Text secondary terang */
  --border-color: #3a333a;    /* Border warna gelap */
}
```

3. Ubah warna sesuai keinginan:

**Dari:**
```css
.theme-dark {
  --bg-primary: #0f0b12;  /* Sangat gelap */
}
```

**Jadi:**
```css
.theme-dark {
  --bg-primary: #1a1a1a;  /* Sedikit lebih terang */
}
```

4. Simpan, refresh halaman, lihat dark mode berubah! ✅

---

### ✅ BAGIAN 4: NAVBAR HIGHLIGHT - HALAMAN AKTIF (Baris 800-900)

**Untuk apa:** Menandai halaman mana yang sedang dibuka di navbar

**Cara kerjanya:**
- Saat buka halaman `index.html` (Beranda) → Menu "Beranda" di-highlight
- Saat buka halaman `menu.html` (Menu Kami) → Menu "Menu Kami" di-highlight
- dll untuk halaman lain

---

#### Langkah 1: Cari Fungsi setActiveByCurrentPage

**Di `js/script.js` cari:**
```javascript
const setActiveByCurrentPage = () => {
  // Kode di sini
};
```

**Cara kerjanya:**

```javascript
const setActiveByCurrentPage = () => {
  const currentPage = window.location.pathname;  // Ambil path halaman saat ini
  const navLinks = document.querySelectorAll('.main-nav a');  // Ambil semua link navbar
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');  // Ambil href setiap link
    
    // Jika href cocok dengan halaman saat ini
    if (currentPage.includes(href)) {
      link.classList.add('active');  // Tambah class 'active' untuk highlight
    } else {
      link.classList.remove('active');  // Hapus class 'active' dari link lain
    }
  });
};
```

---

#### Langkah 2: Paham Highlight Styling

**Styling highlight diatur di CSS:**

Buka `css/styles.css` dan cari:

```css
.main-nav a.active {
  color: #eccb30;              /* Warna kuning */
  border-bottom: 2px solid #eccb30;  /* Garis bawah kuning */
  font-weight: bold;           /* Text tebal */
}
```

Ingin ubah warna highlight? Ubah di CSS, jangan di JS!

---

## 📍 BAGIAN-BAGIAN DI menu.js (File Data Menu)

### ✅ DATA MENU PRODUK - MIE, DIMSUM, MINUMAN (Baris 1-400)

**Untuk apa:** Menyimpan daftar semua produk yang ditampilkan di halaman Menu

**Mengapa penting?** Semua produk, harga, deskripsi, dan gambar disimpan di sini. Ingin ubah menu? Edit di file ini!

---

#### Langkah 1: Pahami Struktur Data Menu

**Buka `js/menu.js` dan lihat dari baris awal:**

```javascript
const menuData = {
  id: {                    // Bahasa Indonesia
    mie: [                 // Kategori Mie
      {
        name: "Mie Bupati",                                    // Nama produk
        desc: "Topping: telur, sayuran, daging ayam pedas",   // Deskripsi
        price: "Rp11.500",                                     // Harga
        img: "assets/products/noodles/mie-bupati.png"         // Path gambar
      },
      {
        name: "Mie Gubernur",
        desc: "Topping: gorengan, telur, seafood",
        price: "Rp13.000",
        img: "assets/products/noodles/mie-gubernur.png"
      },
      // ... produk mie lain
    ],
    dimsum: [              // Kategori Dimsum
      {
        name: "Siomay",
        desc: "Siomay resep tradisional",
        price: "Rp8.000",
        img: "assets/products/appetizers/siomay.png"
      },
      // ... produk dimsum lain
    ],
    minuman: [             // Kategori Minuman
      {
        name: "Es Jeruk",
        desc: "Fresh jeruk asli tanpa pengawet",
        price: "Rp3.500",
        img: "assets/products/beverages/es-jeruk.png"
      },
      // ... produk minuman lain
    ]
  },
  en: {                    // Bahasa Inggris (sama struktur, hanya text berbeda)
    mie: [
      {
        name: "Bupati Noodles",
        desc: "Toppings: egg, vegetables, spicy chicken",
        price: "Rp11.500",
        img: "assets/products/noodles/mie-bupati.png"
      },
      // ... dll
    ],
    // ... kategori lain
  }
};
```

---

#### Langkah 2: Ubah Harga Produk

**Scenario:** Harga "Mie Bupati" naik dari Rp11.500 jadi Rp12.500

**Step 1:** Cari produk menggunakan `Ctrl+F`:
```
Cari: "Mie Bupati"
```

**Step 2:** Temukan baris price:
```javascript
// SEBELUM:
{
  name: "Mie Bupati",
  price: "Rp11.500",  // ← Harga sekarang
  // ...
}

// SESUDAH:
{
  name: "Mie Bupati",
  price: "Rp12.500",  // ← Harga baru
  // ...
}
```

**Step 3:** PENTING! Jika ada di bagian `id:` (Indonesia), JUGA ubah di bagian `en:` (English):

```javascript
// JANGAN LUPA ubah di English juga!
en: {
  mie: [
    {
      name: "Bupati Noodles",
      price: "Rp12.500",  // ← Update harga di sini juga!
      // ...
    }
  ]
}
```

**Step 4:** Simpan file, refresh halaman, harga berubah! ✅

---

#### Langkah 3: Ubah Deskripsi Produk

**Scenario:** Ubah deskripsi "Mie Bupati"

**Dari:**
```javascript
{
  name: "Mie Bupati",
  desc: "Topping: telur, sayuran, daging ayam pedas",
}
```

**Jadi:**
```javascript
{
  name: "Mie Bupati",
  desc: "Mie berkuah empuk dengan topping telur, sayuran segar, dan daging ayam pedas pilihan. Cocok untuk yang suka makan banyak!",
}
```

**JANGAN LUPA ubah di English juga!**

---

#### Langkah 4: Tambah Produk Baru

**Scenario:** Tambah produk "Mie Goreng Spesial" di kategori Mie

**Buka `js/menu.js` dan cari kategori `mie: [`**

**Struktur:**
```javascript
const menuData = {
  id: {
    mie: [
      { name: "Mie Bupati", ... },
      { name: "Mie Gubernur", ... },
      // ← Tambah produk baru di sini!
      {
        name: "Mie Goreng Spesial",                    // Nama baru
        desc: "Mie digoreng dengan bumbu khusus",      // Deskripsi
        price: "Rp13.500",                            // Harga
        img: "assets/products/noodles/mie-goreng-spesial.png"  // Path gambar
      }  // ← JANGAN LUPA KOMA kecuali ini produk terakhir
    ]
  }
};
```

**PENTING - Aturan penulisan:**
- Setiap property harus punya koma `,` di belakangnya (kecuali yang terakhir)
- Nama, deskripsi harus dalam tanda petik `"..."`
- Jangan lupa kurung kurawal `{ }` dan kurung siku `[ ]`

**Contoh SALAH (akan error):**
```javascript
{
  name: "Mie Goreng",     // ← Lupa kutip untuk desc
  desc: Mie digoreng,     // ← String tanpa kutip = ERROR!
  price: 13500,           // ← Harga tanpa Rp = tidak standard
}
```

**Contoh BENAR:**
```javascript
{
  name: "Mie Goreng",
  desc: "Mie digoreng dengan bumbu khusus",
  price: "Rp13.500",
}
```

---

#### Langkah 5: Tambah Kategori Baru (Advanced)

**Scenario:** Tambah kategori "Lauk Pauk" di menu

1. Buka `js/menu.js`
2. Di dalam `id: { ... }` dan `en: { ... }`, tambah category baru:

```javascript
const menuData = {
  id: {
    mie: [ ... ],
    dimsum: [ ... ],
    minuman: [ ... ],
    lauk_pauk: [        // ← Kategori baru
      {
        name: "Telur Goreng",
        desc: "Telur goreng dengan sambal pedas",
        price: "Rp2.500",
        img: "assets/products/sidedishes/telur-goreng.png"
      },
      // ... produk lauk pauk lain
    ]
  },
  en: {
    mie: [ ... ],
    dimsum: [ ... ],
    minuman: [ ... ],
    lauk_pauk: [        // ← Juga tambah di English!
      {
        name: "Fried Egg",
        desc: "Fried egg with spicy sambal",
        price: "Rp2.500",
        img: "assets/products/sidedishes/telur-goreng.png"
      },
      // ... lainnya
    ]
  }
};
```

3. **PENTING:** Juga perlu update HTML untuk tombol kategori baru!
   - Buka `menu.html` dan tambah `<button data-category="lauk_pauk">Lauk Pauk</button>`

---

## 🔍 TIPS & TRIK JAVASCRIPT

### Tanda-Tanda Penting yang Harus Diingat:

| Tanda | Nama | Untuk apa | Contoh |
|------|------|----------|---------|
| `// ` | Single Line Comment | Komentar single line | `// Ini komentar` |
| `/* */` | Multi Line Comment | Komentar multi line | `/* Komentar panjang */` |
| `" "` | String Quotes | Text/string | `name: "Mie Bupati"` |
| `{ }` | Curly Braces | Object/block | `{ name: "abc" }` |
| `[ ]` | Square Brackets | Array/list | `[item1, item2]` |
| `,` | Comma | Pemisah data | `a: 1, b: 2` |
| `:` | Colon | Key-value separator | `name: "Budi"` |
| `;` | Semicolon | End of statement | `const x = 5;` |
| `${}` | Template literal | Placeholder | `` `Hello ${name}` `` |

### Aturan Penulisan String:

```javascript
// BENAR:
const nama = "Mie Bupati";        // String dalam kutip
const harga = "Rp12.000";         // Harga dengan Rp

// SALAH (akan error):
const nama = Mie Bupati;          // Tanpa kutip = tidak dikenali
const harga = 12000;              // Harga tanpa Rp
```

### Aturan Penulisan Object:

```javascript
// BENAR - setiap property dipisah koma:
const produk = {
  name: "Mie",
  price: "Rp10.000",
  available: true
}

// SALAH - tidak ada koma:
const produk = {
  name: "Mie"
  price: "Rp10.000"  // ERROR - lupa koma sebelumnya!
}
```

---

## ✨ HAL PENTING - JANGAN LAKUKAN INI:

❌ **Jangan menghapus kurung kurawal `{ }` atau kurung siku `[ ]` tanpa tahu**
- Bisa membuat website error total

❌ **Jangan mengubah nama variable** (seperti `const i18n`, `const menuData`)
- Website tidak akan bisa membaca data

❌ **Jangan ubah yang bukan string tanpa kutip** (seperti `true`, `false`, angka)
- Contoh: `price: 12000` ❌ → `price: "Rp12.000"` ✅

❌ **Jika ubah teks di `id:` jangan lupa ubah juga di `en:`**
- User English akan melihat teks lama atau kosong

---

## 🆘 TIPS DEBUGGING - Jika Ada Error:

**1. Lihat Console Error:**
- Buka browser → tekan `F12` (Developer Tools)
- Klik tab "Console"
- Lihat error message (biasanya ada di sini)

**2. Cek Kuota:**
- Pastikan semua `{` punya closing `}`
- Pastikan semua `[` punya closing `]`
- Pastikan string dalam kutip `" "`

**3. Cek Koma:**
- Setiap property dalam object harus punya koma `,` (kecuali terakhir)
- Contoh: `name: "x", price: "Rp10"`

**4. Clear Cache:**
- Tekan `Ctrl+Shift+Delete` untuk clear browser cache
- Atau tekan `Ctrl+Shift+R` untuk hard refresh

---

## 💾 WORKFLOW EDIT JAVASCRIPT:

1. **Buka file** → `js/script.js` atau `js/menu.js`
2. **Cari text/kode** → gunakan `Ctrl+F`
3. **Buat perubahan** → ubah value yang target
4. **Simpan file** → `Ctrl+S`
5. **Refresh halaman** → `Ctrl+Shift+R` (hard refresh)
6. **Test perubahan** → lihat hasil di halaman
7. **Jika error** → buka Console (F12) dan cek error message
  
  // 4. Buka WhatsApp
  window.open(waLink, '_blank');
  
  // 5. Bersihkan form
  form.reset();
};
```

**Ingin ganti nomor WhatsApp yang terima form?**

Cari di file `js/script.js`:
```javascript
const phone = '6285604030473';  // ← Ubah nomor ini
```

Ubah nomor jadi:
```javascript
const phone = '6281234567890';  // ← Nomor WhatsApp baru
```

Simpan, refresh halaman, saat user kirim form akan ke nomor WhatsApp baru! ✅

---

### ✅ BAGIAN 3: DARK MODE / LIGHT MODE

**Untuk apa:** Mengatur tema gelap/terang website

**Di mana:** Cari fungsi `applyTheme` (sekitar baris 700-800)

```javascript
const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('theme-dark');  // Tambah class dark mode
  } else {
    document.body.classList.remove('theme-dark'); // Hapus class dark mode
  }
  localStorage.setItem('mie-theme', theme);  // Simpan pilihan user
};
```

**Cara mengubah warna dark mode:**

Warna dark mode ditentukan di CSS, bukan di JS!

1. Buka `css/styles.css`
2. Cari `.theme-dark {` atau `:root.theme-dark {`
3. Ubah warna di sana
4. Contoh: `background: #0f0b12;` ubah jadi `background: #1a1a1a;` (lebih terang)
5. Simpan, refresh, lihat hasilnya ✅

---

### ✅ BAGIAN 4: NAVBAR HIGHLIGHT (Active Page)

**Untuk apa:** Menandai halaman mana yang sedang dibuka di navbar

**Di mana:** Cari fungsi `setActiveByCurrentPage` (sekitar baris 800-850)

Cara kerjanya:
- Saat halaman `index.html` dibuka → Menu "Beranda" akan di-highlight
- Saat halaman `menu.html` dibuka → Menu "Menu" akan di-highlight
- dll.

**Biasanya tidak perlu diubah**, tapi kalau mau cek:

```javascript
const setActiveByCurrentPage = () => {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPage.includes(href)) {
      link.classList.add('active');  // Tandai sebagai active
    }
  });
};
```

---

## 📍 BAGIAN-BAGIAN DI menu.js

### ✅ DATA MENU PRODUK

**Untuk apa:** Menyimpan daftar produk (Mie, Dimsum, Minuman)

**Di mana:** Buka `js/menu.js`, lihat bagian awal ada:

```javascript
const menuData = {
  mie: [
    {
      name: "Mie Bupati",           // Nama produk
      desc: "Topping: telur, sayuran, daging ayam",  // Deskripsi
      price: "Rp11.500",            // Harga
      img: "assets/img/mie-bupati.jpg"  // Path gambar
    },
    {
      name: "Mie Spicy Level 1",
      desc: "Level kepedasan: MILD",
      price: "Rp12.000",
      img: "assets/img/mie-level1.jpg"
    },
    // ... produk lain
  ],
  dimsum: [
    { name: "Siomay", desc: "Siomay hakimi", price: "Rp8.000", img: "..." },
    // ... produk dimsum lain
  ],
  minuman: [
    { name: "Es Jeruk", desc: "Fresh jeruk asli", price: "Rp3.500", img: "..." },
    // ... produk minuman lain
  ]
};
```

**Ingin tambah menu baru?**

Contoh: Tambah "Mie Goreng Spesial" ke kategori mie

1. Buka `js/menu.js`
2. Cari kategori `mie: [` 
3. Tambah object baru sebelum closing bracket `]`:

```javascript
mie: [
  { name: "Mie Bupati", ... },
  { name: "Mie Spicy Level 1", ... },
  {  
    name: "Mie Goreng Spesial",      // ← Produk baru
    desc: "Mie digoreng dengan bumbu khusus",
    price: "Rp13.500",
    img: "assets/img/mie-goreng.jpg"
  },  // ← Jangan lupa koma
]
```

4. Simpan, refresh halaman, menu baru muncul! ✅

**Ingin ubah harga menu?**

Cari produk yang ingin diubah, ubah nilai `price`:

Dari:
```javascript
{ name: "Mie Bupati", price: "Rp11.500", ... }
```

Jadi:
```javascript
{ name: "Mie Bupati", price: "Rp14.000", ... }
```

Simpan, refresh, harga berubah! ✅

**Ingin ubah nama menu?**

Cari produk, ubah nilai `name`:

Dari:
```javascript
{ name: "Mie Bupati", ... }
```

Jadi:
```javascript
{ name: "Mie Khas Bandung", ... }
```

Simpan, refresh, nama berubah! ✅

---

## 🔍 STANDAR PENULISAN JAVASCRIPT

### Tanda yang penting:

```javascript
// Komentar - baris ini akan diabaikan saat kode dijalankan

// String (text) harus dalam kutip
const nama = "Mie Bupati";        // Benar
const nama = Mie Bupati;          // Salah - tidak ada kutip

// Object harus punya kurung kurawal { }
const produk = {
  name: "Mie",
  price: "Rp10.000"
}

// Array harus punya kurung siku [ ]
const menu = [
  { name: "Mie" },
  { name: "Dimsum" }
]

// Setiap baris harus diakhiri koma (,) atau semicolon (;)
const x = 5;     // Benar - ada semicolon
const y = 10;    // Benar

// Di dalam object, gunakan koma
{
  name: "Mie",
  price: 10000,   // Ada koma
  desc: "Makanan"  // Di akhir tidak perlu koma
}
```

---

## ⚠️ TIPS PENTING JAVASCRIPT

### Jangan hapus fungsi yang sudah ada

Misalnya jangan hapus:
```javascript
const applyLanguage = (lang) => { ... }  // Jangan dihapus!
const applyTheme = (theme) => { ... }     // Jangan dihapus!
```

Karena kode lain bergantung pada fungsi ini!

### Hati-hati dengan tanda kurung dan kurawal

Salah:
```javascript
const x = { a: 1, b: 2;  // Kurung tidak ditutup dengan }
```

Benar:
```javascript
const x = { a: 1, b: 2 };  // Ada }
```

### String dan kutip harus cocok

Salah:
```javascript
const text = "Halo;  // Kutip tidak ditutup
```

Benar:
```javascript
const text = "Halo";  // Kutip ditutup dengan "
```

### Koma di akhir item (tidak perlu di akhir saja)

```javascript
const menu = [
  { name: "Mie" },
  { name: "Dimsum" },     // Koma di akhir boleh ditambah
  { name: "Minuman" }      // Di akhir array, koma tidak wajib
];
```

---

## 💡 CONTOH PENGUBAHAN PRAKTIS

### CONTOH 1: Ganti nomor WhatsApp form

1. Buka `js/script.js`
2. Cari: `const phone = '6285604030473';`
3. Ubah jadi: `const phone = '6281234567890';`
4. Simpan ✅

### CONTOH 2: Ubah judul website (heading hero)

1. Buka `js/script.js`
2. Cari: `heading: 'Selamat datang di Mie Newmind',`
3. Ubah jadi: `heading: 'Halo! Mie Terbaik di Sini',`
4. PENTING: Juga ubah di bagian English
5. Simpan ✅

### CONTOH 3: Tambah menu produk baru

1. Buka `js/menu.js`
2. Cari kategori mie `mie: [`
3. Tambah sebelum `]`:
```javascript
{
  name: "Mie Baru",
  desc: "Deskripsi di sini",
  price: "Rp12.000",
  img: "assets/img/mie-baru.jpg"
},
```
4. Simpan ✅

### CONTOH 4: Ubah harga produk

1. Buka `js/menu.js`
2. Cari produk: `name: "Mie Bupati"`
3. Ubah `price: "Rp11.500"` jadi `price: "Rp15.000"`
4. Simpan ✅

---

## 🎯 CHECKLIST SAAT EDIT JAVASCRIPT

- [ ] Semua string (text) ada dalam kutip `" "` atau `' '`
- [ ] Semua `{` ada `}`
- [ ] Semua `[` ada `]`
- [ ] Semua `(` ada `)`
- [ ] Setiap item di object/array ada koma (kecuali yang terakhir)
- [ ] Tidak menghapus fungsi yang sudah ada
- [ ] Refresh halaman setelah edit
- [ ] Cek di browser console tidak ada error (F12 → Console)
- [ ] Fitur berfungsi dengan baik

---

## 🆘 APA JIKA ADA ERROR?

Jika halaman tidak berfungsi atau ada error:

1. Buka Browser DevTools: Tekan `F12`
2. Klik tab "Console"
3. Lihat error message - akan ada petunjuk kesalahan
4. Contoh error: "Unexpected token '}'" berarti ada kurung yang salah
5. Periksa baris terakhir yang diubah
6. Perbaiki, simpan, refresh halaman

**Kalau masih stuck**, baca ulang bagian "Standar Penulisan JavaScript" di atas ↑
  id: {
    nav: ['About Us', 'Menu', 'Lokasi', ...],  // ← Change here
    hero: {
      heading: 'Nikmatnya Pas, Harganya Bersahabat',  // ← Or here
    }
  }
};
```

**Steps:**
1. Open js/script.js
2. CTRL+F search for the text you want to change
3. Update in BOTH `id` and `en` sections
4. Refresh browser
5. Done! No HTML needs to change

### 2. Add Menu Item

**In js/menu.js:**
```javascript
const menuData = {
  mie: [
    { 
      name: "Mi Bupati",
      desc: "Mie dengan rasa manis pedas yang kuat",
      price: "Rp11.500",
      img: "assets/img/mie-bupati.png"
    },
    // ADD NEW ITEM HERE:
    {
      name: "Mi Gubernur",
      desc: "Deskripsi menu baru",
      price: "Rp12.000",
      img: "assets/img/mi-gubernur.png"
    }
  ]
};
```

### 3. Change WhatsApp Phone Number

**Find all WhatsApp links:**
```bash
Search for: "6285604030473"
Replace with: "your-phone-number"
```

**In script.js:**
```javascript
const waLink = `https://wa.me/6285604030473?text=...`;
                              ^^^^^^^^^^^^^^^^
                              ↑ Change here
```

### 4. Change Color in Console/Test

**Open browser DevTools (F12):**
```javascript
// Paste in console to test color change:
document.documentElement.style.setProperty('--primary', '#ff0000');

// Paste to revert:
document.documentElement.style.setProperty('--primary', '#c7319c');
```

---

## 🔍 HOW TO DEBUG

### Browser DevTools (F12)

1. **Check Console Tab**
   - See any JavaScript errors (red text)
   - Copy error message
   - Search in code for that function

2. **Check Network Tab**
   - See all files loading
   - Look for red X (failed loads)
   - Check if images/CSS loaded properly

3. **Check Elements Tab**
   - Right-click element → Inspect
   - See actual HTML & CSS being applied
   - Test live changes in DevTools

### Common Issues

**Issue:** Link not working
- Check href path is correct
- Make sure file exists
- Test path in address bar

**Issue:** Language not changing
- Check localStorage in DevTools → Application tab
- Clear cache (CTRL+SHIFT+DEL)
- Hard refresh (CTRL+SHIFT+R)

**Issue:** Form not submitting
- Check browser console for errors
- Verify WhatsApp number is correct
- Test manually: https://wa.me/[phone]

---

## 📝 KEY VARIABLE NAMES

**Remember these for quick editing:**

| Variable | Purpose | Line |
|----------|---------|------|
| `i18n` | All text content (ID & EN) | ~15 |
| `menuData` (in menu.js) | All menu items | ~ 1 |
| `waLink` | WhatsApp URL generator | ~591 |
| `savedLanguage` | Current language from localStorage | ~615 |
| `localStorage.getItem('mie-lang')` | Get saved language | ~615 |
| `localStorage.getItem('mie-theme')` | Get saved theme | ~620 |

---

## ⚠️ IMPORTANT RULES

1. **Always use `const`/`let`, never `var`**
   - ✅ `const name = "value";`
   - ❌ `var name = "value";`

2. **Strings with template literals for readability**
   - ✅ `const msg = \`Hello ${name}\`;`
   - ❌ `const msg = "Hello " + name;`

3. **Arrow functions for new code**
   - ✅ `const myFunc = () => { ... };`
   - ❌ `function myFunc() { ... }`

4. **Comments for logic**
   ```javascript
   // Explain WHY, not WHAT
   // Good:
   // Calculate discount after loading price from API
   
   // Bad:
   // Set price * 0.9
   ```

5. **Test after changes**
   - Refresh browser (CTRL+R)
   - Check console for errors (F12)
   - Test on mobile view
   - Test language toggle
   - Test dark mode

---

## 🚀 QUICK START FOR EDITS

**Most common edits:**

1. **Change heading text**
   - Edit i18n.id.hero.heading
   - Edit i18n.en.hero.heading
   - Refresh browser

2. **Add menu item**
   - Add object to menuData array in menu.js
   - Add image to assets/img/
   - Refresh browser

3. **Change WhatsApp number**
   - CTRL+H (Find & Replace)
   - Find: 6285604030473
   - Replace: your-number
   - Save & refresh

4. **Update navigation link**
   - Edit href in i18n.nav array
   - Or edit HTML anchor tags
   - Test link works

---

**For advanced edits, always backup files first!**
**Use browser DevTools to test before committing changes.**

---

**Questions? Check README.md or ask development team!**
