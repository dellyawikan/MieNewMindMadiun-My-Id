# 🚀 PANDUAN CEPAT - Mie Newmind

Panduan paling mudah untuk mengubah hal-hal yang sering diubah. Hanya 5 menit!

---

## ⚡ 5 TUGAS PALING SERING DILAKUKAN

### 1️⃣ GANTI WARNA WEBSITE (2 Menit)

**Ingin ganti warna pink menjadi biru? Gini caranya:**

#### Langkah 1: Buka File CSS
1. Buka folder project Mie Newmind di komputer
2. Masuk ke folder → `css` (folder bernama "css")
3. Buka file `styles.css` dengan text editor (VS Code, Notepad++, atau bahkan Notepad biasa)
   - Tips: Klik kanan file → Pilih "Open with" → Pilih editor favorit

#### Langkah 2: Cari Kode Warna
1. Tekan `Ctrl+F` (di Windows) atau `Cmd+F` (di Mac) untuk membuka search box
2. Cari teks: `#c7319c` (ini adalah kode heksadecimal warna pink brand Mie Newmind)
3. Search akan menunjukkan tempat kode warna digunakan di file

#### Langkah 3: Lihat Bagian Yang Perlu Diubah
Bagian paling atas file (sekitar baris 1-30) akan ada tulisan seperti ini:

```css
:root {
  --primary: #c7319c;       ← Ini warna PINK UTAMA (tombol, heading, highlight)
  --accent: #eccb30;        ← Ini warna KUNING (tombol khusus, call-to-action)
  --background: #ffffff;    ← Ini warna LATAR PUTIH
  --text-dark: #141116;     ← Ini warna TEKS GELAP
}
```

#### Langkah 4: Ganti Dengan Warna Baru
- **Untuk mengubah warna pink:** Ganti `#c7319c` dengan kode warna baru
- **Contoh perubahan:**
  - Dari pink `#c7319c` → Biru `#0066ff`
  - Dari pink `#c7319c` → Oranye `#ff6600`
  - Dari pink `#c7319c` → Ungu `#7c3aed`
  - Dari pink `#c7319c` → Merah `#dc2626`

#### Langkah 5: Simpan & Lihat Hasilnya
1. Tekan `Ctrl+S` (Windows) atau `Cmd+S` (Mac) untuk menyimpan file
2. Buka browser (Chrome, Firefox, Edge) dan refresh halaman website (tekan `F5`)
3. Tunggu 2-3 detik, website akan menampilkan warna baru! 🎨
4. Jika masih warna lama, clear cache browser (Ctrl+Shift+Del) kemudian refresh

#### 🎯 Tips Memilih Warna Baru
**Website untuk pilih warna:**
- https://www.color-hex.com (Cari nama warna, dapat kode heksadesimal)
- https://www.colorhexa.com (Lihat variasi warna)
- https://coolors.co (Palette generator, auto generate kombinasi warna bagus)

**Contoh warna populer untuk brand:**
| Warna | Kode | Kesan |
|-------|------|-------|
| Biru | `#0066ff` | Profesional, terpercaya |
| Oranye | `#ff6600` | Energik, appetizing |
| Ungu | `#7c3aed` | Premium, mewah |
| Hijau | `#10b981` | Fresh, natural |
| Merah | `#dc2626` | Bold, powerful |

---

### 2️⃣ GANTI TEKS MENU ATAU JUDUL (2 Menit)

**Ingin ganti "Menu Kami" jadi "Pilihan Favorit"?**

#### Langkah 1: Buka File Script
1. Buka folder project → masuk ke folder `js`
2. Buka file `script.js` dengan text editor favorit

#### Langkah 2: Cari Teks Yang Ingin Diubah
1. Tekan `Ctrl+F` untuk membuka search box
2. Cari teks: `Menu Kami` (atau teks lain yang ingin diubah)
3. Hasilnya akan menunjukkan beberapa tempat di file

#### Langkah 3: Lihat Struktur Text di File
Akan ketemu di bagian mirip ini (biasanya sekitar baris 50-200, cari section bernama `i18n`):

```javascript
const i18n = {
  id: {                         // Bagian untuk Bahasa INDONESIA
    nav: {
      menu: 'Menu Kami',        ← Ubah ini jadi 'Pilihan Favorit'
      about: 'Tentang Kami',    ← Atau ubah ini jadi 'Siapa Kami'
      contact: 'Kontak',        ← Atau ubah ini jadi 'Hubungi Kami'
    },
    hero: {
      title: 'Selamat Datang',  ← Ubah judul hero section
      subtitle: 'Mie terbaik...' ← Ubah subtitle
    },
  },
  en: {                         // Bagian untuk Bahasa INGGRIS (jangan lupa update!)
    nav: {
      menu: 'Our Menu',         ← Update ini juga ke 'Favorite Picks'
      about: 'About Us',        ← Update ini ke 'Who We Are'
      contact: 'Contact',       ← Update ini ke 'Contact Us'
    },
    hero: {
      title: 'Welcome',         ← Update judul inggris
      subtitle: 'Best noodles...' ← Update subtitle inggris
    },
  }
}
```

#### Langkah 4: Ganti Teks Sesuai Kebutuhan
**PENTING:** Update DULU di bagian `id` (Indonesia), kemudian update juga di bagian `en` (Inggris)

**Contoh perubahan:**
- Ubah: `menu: 'Menu Kami'` → `menu: 'Menu Spesial'`
- Ubah: `about: 'Tentang Kami'` → `about: 'Profil Kami'`
- Ubah: `contact: 'Kontak'` → `contact: 'Hubungi Kami Sekarang'`

#### Langkah 5: Simpan & Refresh
1. Tekan `Ctrl+S` untuk simpan
2. Refresh browser (tekan `F5`)
3. Teks di website akan berubah otomatis! ✨

#### 📝 Apa Itu i18n?
- **i18n** = Internationalization (dukung multiple bahasa)
- Sistem ini membuat website otomatis menampilkan teks sesuai bahasa yang dipilih user
- Saat user pilih English → tampil teks dari bagian `en`
- Saat user pilih Indonesian → tampil teks dari bagian `id`

---

### 3️⃣ HITUNG HARGA MENU (2 Menit)

**Ingin ganti harga Mie Bupati dari Rp11.500 menjadi Rp15.000?**

1. Buka folder → `js` → buka file `menu.js`
2. Tekan `Ctrl+F` untuk cari
3. Cari: `Mie Bupati` atau `11.500`
4. Akan ketemu bagian seperti ini (sekitar baris 1-100):

```javascript
const menuData = {
  mie: [
    {
      name: "Mie Bupati",
      desc: "Mie dengan topping special",
      price: "Rp11.500",    ← Ubah angkanya ke "Rp15.000"
      img: "..."
    },
    // Tambah menu baru di bawah dengan format sama
    {
      name: "Mie Baru Saya",
      desc: "Deskripsi di sini",
      price: "Rp12.000",
      img: "path/gambar.jpg"
    }
  ],
}
```

**Cara mengubah harga:**
- Ubah angka di dalam `price: "Rp11.500"` → `price: "Rp15.000"`
- Simpan, refresh halaman, harga berubah otomatis!

**Cara tambah menu baru:**
- Copy satu menu item (dari `{` sampai `}`)
- Paste di bawahnya
- Ubah `name`, `desc`, `price` sesuai menu baru
- Simpan!

---

### 4️⃣ GANTI NOMOR WHATSAPP & LOKASI (2 Menit)

**Ingin ganti nomor WhatsApp atau alamat?**

1. Buka file `index.html` (halaman utama)
2. Tekan `Ctrl+F` untuk cari
3. Cari: nomor WhatsApp lama, misalnya `6285604030473`

**Di file akan ada beberapa tempat:**

```html
<!-- Tempat 1: Link WhatsApp di tombol -->
<a href="https://wa.me/6285604030473">Chat WhatsApp</a>
             ↑ Ganti nomor ini

<!-- Tempat 2: Link reservasi -->
<a href="https://wa.me/6285604030473?text=Saya ingin reservasi">
             ↑ Ganti nomor ini juga

<!-- Tempat 3: Nomor telepon -->
<a href="tel:6285604030473">Hubungi kami</a>
             ↑ Ganti di sini
```

**Cara mengubah:**
- Ganti semua nomor `6285604030473` dengan nomor baru Anda
- Gunakan `Ctrl+H` (Find and Replace) buat cepat
  - Di kolom "Find": ketik nomor lama
  - Di kolom "Replace": ketik nomor baru
  - Klik "Replace All"
- Simpan, refresh halaman, selesai!

**Untuk alamat:**
- Cari teks alamat lama: misalnya `"Jalan Contoh No. 123, Jakarta"`
- Ganti dengan alamat baru
- Juga ganti Link Google Maps (cari `maps.google.com`)

---

### 5️⃣ UPLOAD PERUBAHAN KE WEBSITE (2 Menit)

**Perubahan sudah dibuat, sekarang upload ke website yang live:**

1. Buka Terminal (di VS Code, tekan `Ctrl+`` atau buka Terminal biasa)
2. Ketik perintah ini:

```bash
wrangler pages deploy . --project-name mienewmind
```

3. Tunggu sampai selesai, akan muncul:

```
✓ Uploading...
✓ Deployment complete!
✓ Website live at: https://mienewmind.pages.dev
```

4. Buka website di browser, refresh (tekan F5), perubahan akan terlihat!

**Tidak punya Wrangler?** Ikuti panduan di DEPLOYMENT-GUIDE.md

---

## 🔍 CARA CARI CEPAT DALAM FILE

### 👉 Cari sesuatu di file

Tekan `Ctrl+F` (atau `Cmd+F` di Mac) muncul kotak pencarian di pojok kanan atas.

**Contoh pencarian:**

| Ingin cari | Ketik ini | Di file mana |
|-----------|-----------|-------------|
| Warna pink | `#c7319c` | `css/styles.css` |
| Harga menu | `Rp11.500` | `js/menu.js` |
| Teks judul | `Menu Kami` | `js/script.js` |
| Nomor WhatsApp | `6285604030473` | `index.html` |
| Alamat toko | `Jalan Contoh` | `index.html` atau `location.html` |

### 👉 Cari dan ganti banyak sekaligus

Tekan `Ctrl+H` (atau `Cmd+H` di Mac) muncul kotak "Find and Replace".

**Contoh:**
- Cari: `6285604030473` (nomor lama)
- Ganti dengan: `6281234567890` (nomor baru)
- Klik "Replace All" (ganti semua sekaligus)

---

## ✅ CHECKLIST SEBELUM UPLOAD

Sebelum upload perubahan, pastikan:

- [ ] Website terlihat bagus (buka file HTML di browser)
- [ ] Responsive di HP (buka DevTools `F12`, tekan `Ctrl+Shift+M`)
- [ ] Dark mode masih jalan (klik tombol bulan di header)
- [ ] Semua link berfungsi (klik navigasi, form, tombol)
- [ ] Form bisa diiisi (isi form contact, jangan submit)
- [ ] Tidak ada error di Console (buka `F12 → Console`)
- [ ] Siap upload! 🚀

---

## 🚨 QUICK TROUBLESHOOTING

### Old content showing?
```
Cmd+Shift+R  (Hard refresh)
Wait 30 seconds
Refresh again
```

### Console shows errors?
```
F12 → Console tab
Read error message
Check TROUBLESHOOTING-GUIDE.md
```

### File won't save?
```
Ctrl+S → File menu should show no dot
Or: Visual indicator shows "saved"
```

### Deploy failed?
```bash
1. Check username: wrangler login
2. Check project: wrangler pages project list
3. Redeploy: wrangler pages deploy . --project-name mienewmind
```

---

## 📚 DETAILED GUIDES

| Task | Read This | Time |
|------|-----------|------|
| Change colors | DESIGN-SYSTEM.md | 10 min |
| Edit CSS | CSS-EDITING-GUIDE.md | 15 min |
| Edit JavaScript | JAVASCRIPT-EDITING-GUIDE.md | 15 min |
| Edit HTML | HTML-EDITING-GUIDE.md | 10 min |
| Deploy | DEPLOYMENT-GUIDE.md | 10 min |
| Fix issues | TROUBLESHOOTING-GUIDE.md | 20 min |
| Project overview | README.md | 20 min |
| All components | DESIGN-SYSTEM.md | 15 min |

---

## 🎯 COMMON EDITS

### Edit Homepage Text
```
1. Open: index.html
2. Find section you want to change
3. Edit text directly in HTML
4. Save: Cmd+S
5. Reload page in browser
6. Deploy when happy
```

### Edit Menu Items
```
1. Open: js/menu.js
2. Find menuData array
3. Add/edit items:
   { name: 'Mie Goreng', price: 25000, ... }
4. Save and reload page
5. New menu items should appear
```

### Edit Reservation Form
```
1. Open: js/script.js
2. Find handleReservationFormSubmit function
3. Modify logic (WhatsApp message, phone, etc.)
4. Test form in browser
5. Deploy when working
```

### Add New Page
```
1. Create new file: pages/newpage.html
2. Copy structure from another page (menu.html)
3. Update title & content
4. Add link in navbar (index.html)
5. Test link works
6. Deploy
```

---

## 💡 KEYBOARD SHORTCUTS

| Action | Mac | Windows |
|--------|-----|---------|
| Hard Refresh | Cmd+Shift+R | Ctrl+Shift+R |
| Open DevTools | Cmd+Option+I | F12 |
| Open Console | Cmd+Option+J | Ctrl+Shift+J |
| Find in Page | Cmd+F | Ctrl+F |
| Find & Replace | Cmd+H | Ctrl+H |
| Save File | Cmd+S | Ctrl+S |
| Undo | Cmd+Z | Ctrl+Z |
| Redo | Cmd+Shift+Z | Ctrl+Y |
| Mobile View | Cmd+Shift+M | Ctrl+Shift+M |
| Inspect Element | Cmd+Shift+C | Ctrl+Shift+C |

---

## 📋 FILE QUICK REFERENCE

```
index.html              → Homepage (update hero, about, contact)
pages/menu.html         → Menu page
pages/about.html        → About page
pages/location.html     → Location/Contact page
pages/reservation.html  → Reservation page
pages/franchise.html    → Franchise page
pages/karir.html        → Career page

css/styles.css          → All styling (3391 lines)
js/script.js            → Main logic, translations (844 lines)
js/menu.js              → Menu data & modal
assets/                 → Images, fonts (replace with yours)
```

---

## ✅ AFTER EACH CHANGE

```
1. Save file (Cmd+S)
2. Refresh browser
3. Check result
4. No console errors? (F12)
5. Mobile view OK? (Cmd+Shift+M)
6. Dark mode works? (Toggle theme)
7. Ready to deploy? → wrangler pages deploy . --project-name mienewmind
8. Verify live: https://mienewmind.pages.dev
```

---

## 🆘 STILL STUCK?

1. **Check README.md** - Project overview & structure
2. **Check TROUBLESHOOTING-GUIDE.md** - Common issues
3. **Check DESIGN-SYSTEM.md** - Colors & components
4. **Check CSS-EDITING-GUIDE.md** - CSS sections
5. **Check JAVASCRIPT-EDITING-GUIDE.md** - JS functions
6. **Check DEPLOYMENT-GUIDE.md** - Deployment help

---

## 🎉 YOU'RE READY!

Pick a task from "Most Common Tasks" above and start editing.

**Remember:**
- ✓ Save after edit (Cmd+S)
- ✓ Test in browser
- ✓ Deploy when happy
- ✓ Hard refresh if needed

**Questions? See the detailed guides listed above. 👆**
