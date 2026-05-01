# 🌐 CARA BUKA PORTAL DOKUMENTASI

Portal dokumentasi adalah website lokal berisi panduan lengkap Mie Newmind. Berikut 3 cara membukanya.

---

## ⭐ CARA 1: BUKA LANGSUNG DI BROWSER (Termudah!)

### Method 1A: Buka file langsung

**macOS:**
```bash
open dokumentasi/index.html
```

**Windows (PowerShell):**
```bash
Start dokumentasi/index.html
```

**Linux:**
```bash
xdg-open dokumentasi/index.html
```

### Method 1B: Drag & Drop (Tanpa ketik perintah)

1. Buka File Explorer (Windows) atau Finder (Mac)
2. Pergi ke folder project `MieNewMind-2`
3. Buka folder `dokumentasi`
4. Lihat file `index.html` (logo ikon HTML)
5. **Double-click** pada `index.html`
6. Browser otomatis membuka portal! ✅

---

## 💻 CARA 2: GUNAKAN LIVE SERVER (VS Code)

Cara ini cocok kalau mau debug atau check perubahan real-time.

**Step 1: Buka VS Code**

Pastikan VS Code sudah terbuka dengan folder `MieNewMind-2`

**Step 2: Install Live Server Extension**

Kalau belum:
1. Klik icon "Extensions" di sidebar (atau Ctrl+Shift+X)
2. Cari: `Live Server`
3. Install dari author "Ritwick Dey"

**Step 3: Buka portal dari Live Server**

1. Di file explorer VS Code (kiri), cari folder `dokumentasi`
2. Expand folder, lihat `index.html`
3. **Right-click** pada `index.html`
4. Pilih **"Open with Live Server"**
5. Browser otomatis buka portal di `http://localhost:5500`! ✅

**Keuntungan:**
- Auto-refresh saat edit file
- Bisa debug menggunakan browser DevTools
- Lebih cepat dari Cara 1

---

## 🐍 CARA 3: GUNAKAN PYTHON (Advanced)

Cocok untuk developer yang sudah familiar dengan command line.

**Step 1: Buka Terminal**

- **Mac:** Cmd + Space, ketik "Terminal", Enter
- **Windows:** PowerShell atau Command Prompt
- **VS Code:** Ctrl + `` (backtick)

**Step 2: Pergi ke folder dokumentasi**

```bash
cd dokumentasi
```

**Step 3: Jalankan Python HTTP Server**

```bash
python3 -m http.server 8000
```

Akan muncul output:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

**Step 3: Buka di browser**

Buka URL di browser:
```
http://localhost:8000
```

Atau langsung klik: http://localhost:8000

Portal akan muncul! ✅

**Cara stop server:**
- Tekan `Ctrl+C` di Terminal

---

## 🚀 AUTO-OPEN SCRIPTS (Super Cepat!)

Kami sudah siapkan script untuk auto-open portal dengan sekali klik!

### macOS / Linux

```bash
bash open-docs.sh
```

Script ini akan:
1. Cari lokasi `dokumentasi/index.html` secara otomatis
2. Buka di browser default Anda
3. Selesai! 🎉

### Windows

```cmd
open-docs.bat
```

Atau **double-click** file `open-docs.bat` di folder root!

Script ini akan:
1. Buka portal di browser default
2. Otomatis!  🎉

---

## 🎯 PORTAL FEATURES

Setelah membuka portal, Anda akan lihat:

### Navigation Tabs
- 📚 **Semua** - Tampilkan semua dokumentasi
- ⚡ **Starter** - Panduan cepat & quick start
- 🎨 **Design** - Design system & styling
- ✏️ **Editing** - Panduan editing (HTML, CSS, JS)
- 🐛 **Fixes** - Troubleshooting & solusi
- 🚀 **Deploy** - Panduan deployment

### Search Box
- Tekan `/` atau klik search box
- Ketik keyword: "warna", "menu", "WhatsApp", etc
- Portal akan filter hasil otomatis

### Documentation Cards
- Setiap panduan ada di card
- Klik card untuk open modal preview
- Modal punya tombol:
  - "Baca Lengkap" - Download file (.md)
  - "Buka Asli" - Lihat di VS Code
  - "X" - Tutup modal

### Statistics
- Total panduan
- Total baris dokumentasi
- Coverage percentage
- Supported languages

---

## ⌨️ KEYBOARD SHORTCUTS

| Shortcut | Fungsi |
|----------|--------|
| `/` | Focus search box |
| `Escape` | Tutup modal |
| `Enter` | Search / filter |

---

## 💡 TIPS MENGGUNAKAN PORTAL

✅ **Bookmark portal**
- Setelah buka portal, bookmark URL: `file://...index.html`
- Akses cepat di masa depan

✅ **Gunakan search**
- Keyboard: Tekan `/`
- Mouse: Klik search box
- Contoh: cari "color", "menu", "form"

✅ **Baca preview dulu**
- Modal preview muncul saat klik card
- Read preview dulu sebelum download full file

✅ **Buka dari portal vs direct**
- Portal: Bagus untuk overview & search
- Direct file: Bagus untuk edit & detail

---

## 📱 MOBILE / TABLET

Portal 100% responsive!

**Di HP/Tablet:**
1. Buka browser
2. Ketik: `file://...(path)/dokumentasi/index.html`
3. Atau pindahkan file ke server lokal & akses dari IP

**Catatan:** Untuk test di HP/tablet lokal, gunakan Cara 3 (Python HTTP Server) atau Cara 2 (Live Server) karena bisa akses dari device lain di network yang sama.

---

## 🔗 DIRECT FILE LINKS

Untuk membuka file dokumentasi langsung (tidak dari portal):

```bash
dokumentasi/QUICK-START.md              # Panduan 5 menit
dokumentasi/DESIGN-SYSTEM.md            # Design system
dokumentasi/CSS-EDITING-GUIDE.md        # Edit CSS
dokumentasi/JAVASCRIPT-EDITING-GUIDE.md # Edit JavaScript
dokumentasi/HTML-EDITING-GUIDE.md       # Edit HTML
dokumentasi/TROUBLESHOOTING-GUIDE.md    # Solusi masalah
dokumentasi/DEPLOYMENT-GUIDE.md         # Upload ke live
dokumentasi/TABLE-OF-CONTENTS.md        # Daftar lengkap
```

---

## 🆘 MASALAH AKSES

### Tidak bisa buka dengan Cara 1?

**Solusi:**
- Gunakan Cara 2 atau Cara 3
- Atau double-click file `index.html` di file explorer

### Live Server tidak ada?

**Solusi:**
- Install extension dulu: Search "Live Server" di VS Code Extensions
- Atau gunakan Cara 1 atau Cara 3

### Python tidak terinstall / Error?

**Solusi:**
- Download Python: https://www.python.org/downloads
- Install, check box "Add Python to PATH"
- Restart Terminal, coba lagi

### Port 8000 sudah digunakan?

**Solusi:**
- Gunakan port lain: `python3 -m http.server 9000`
- Buka: http://localhost:9000

---

## ✅ SELESAI!

Sekarang Anda bisa akses portal dokumentasi dengan super mudah!

👉 **Mulai dengan:** [QUICK-START.md](QUICK-START.md)

Semoga membantu! 🚀

---

## 🎨 CONTOH PENGGUNAAN

### Saya ingin mengubah warna website
1. Buka portal dokumentasi
2. Klik tombol **"🎨 Design System"** di Quick Access
3. Cari "Warna" di search box
4. Baca panduan & ikuti contoh
5. Selesai! ✅

### Saya mengalami error
1. Buka portal → Tab **"🐛 Troubleshooting"**
2. Cari error message kamu di search
3. Ikuti langkah-langkah solusi
4. Jika masih stuck, lihat "When all else fails" section

### Saya siap deploy
1. Buka portal → Tab **"🚀 Deploy"**
2. Baca pre-deployment checklist
3. Follow deployment steps
4. Verify di live website

---

## 🔗 LINK CEPAT

| Tujuan | Buka |
|--------|------|
| Portal Dokumentasi | `dokumentasi/index.html` |
| Panduan Cepat | `dokumentasi/QUICK-START.md` |
| Troubleshooting | `dokumentasi/TROUBLESHOOTING-GUIDE.md` |
| Design System | `dokumentasi/DESIGN-SYSTEM.md` |
| Daftar Lengkap | `dokumentasi/TABLE-OF-CONTENTS.md` |

---

## ✨ NEXT STEP

1. Buka portal: `dokumentasi/index.html`
2. Explore semua panduan
3. Bookmark untuk penggunaan berikutnya
4. Enjoy coding! 🚀

---

**Dibuat:** March 29, 2026  
**Update terakhir:** Hari ini  
**Status:** ✅ Siap Digunakan
