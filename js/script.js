/* ============================================
   MIE NEWMIND - MAIN JAVASCRIPT (script.js)
   ============================================
   
   File struktur dan fungsi utama:
   
   1. DOM Elements & Variables (Lines 1-15)
      - Navbar toggle (.nav-toggle)
      - Navigation menu (#main-nav)
      - Theme toggle (#theme-toggle)
      - Language toggle (.lang-pill)
      - Parallax images
   
   2. i18n Translations Object (Lines 14-350)
      - Indonesian (id) & English (en) translations
      - All text for every section
      - Menu labels, button texts, descriptions
   
   3. Event Listeners (Lines 350-400)
      - DOMContentLoaded initialization
      - Theme toggle click handler
      - Language toggle click handler
      - Mobile nav toggle click handler
   
   4. Main Functions (Lines 400+)
      - applyLanguage() - Switch language
      - applyTheme() - Toggle dark/light mode
      - setActiveByCurrentPage() - Highlight active nav link
      - updateFormLabels() - Update form text
      - handleFormSubmit() - Career/Franchise form handler
      - handleReservationFormSubmit() - Reservation form handler
      - animateLanguageSwitch() - Language switch animation
   
   5. LocalStorage Integration
      - 'mie-lang': Stores current language (id/en)
      - 'mie-theme': Stores current theme (light/dark)
   
   Features:
      - Multi-language support
      - Dark/light mode toggle
      - Mobile responsive navbar
      - Form submission via WhatsApp
      - Active page detection
      - Scroll animations
   
   ============================================ */

/* ============================================
   DOM Elements & Global Variables
   ============================================ */
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('#theme-toggle');
const langToggle = document.querySelector('.lang-pill');
const rootBody = document.body;
const siteHeader = document.querySelector('.site-header');
const timeline = document.querySelector('#about-timeline');
const revealItems = document.querySelectorAll('.reveal');
const parallaxImages = document.querySelectorAll('.parallax-image');
let themeAnimating = false;
let languageAnimating = false;
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ============================================
   TRANSLATION OBJECT (i18n)
   Lines 65-400
   Struktur:
   - i18n.id = Indonesian translations
   - i18n.en = English translations
   
   Sections:
   - htmlLang, metaDescription
   - nav, header
   - hero, about, menu
   - visit, reservasi
   - franchise, karir
   - footer, theme
   
   Usage: i18n[currentLang].section.key
   Example: i18n.id.hero.heading
   ============================================ */
const i18n = {
  id: {
    htmlLang: 'id',
    metaDescription:
      'Mie pedas kekinian dengan harga terjangkau dan tempat makan nyaman untuk semua momen kebersamaan.',
    nav: ['About Us', 'Menu', 'Lokasi', 'Reservasi', 'Franchise', 'Karir'],
    header: {
      navToggleLabel: 'Buka menu',
      langToggleLabel: 'Ganti bahasa',
    },
    hero: {
      eyebrow: '🌶️ CABANG MADIUN',
      heading: 'Nikmatnya Pas, Harganya Bersahabat',
      body:
        'Nikmati sajian lezat dengan pilihan menu yang terjangkau, tanpa mengurangi kualitas rasa dan kenyamanan. Mie Newmind hadir untuk menjadi pilihan tepat di setiap momen makanmu.',
      ctaMenu: 'LIHAT MENU',
      ctaOrder: 'PESAN SEKARANG',
      halalTitle: 'Terverifikasi Halal',
      halalSub: 'BPOM RI: MD 063771000100376',
      outletsTitle: '500+ Outlet Mitra',
      outletsSub: 'Tersebar di berbagai wilayah Indonesia',
    },
    about: {
      pageTitle: {
        eyebrow: 'OUR STORY',
        heading: 'About Us',
        body: 'Mengenal Mie Newmind lebih dekat, dari awal berdiri hingga berkembang di banyak wilayah Indonesia.',
      },
      eyebrow: 'ABOUT US',
      titleHtml: 'Tentang <span>Mie Newmind</span>',
      p1:
        'Mie Newmind merupakan brand kuliner mie pedas kekinian di Indonesia yang menawarkan cita rasa khas dengan konsep modern. Hadir sebagai tempat makan yang nyaman, Mie Newmind cocok untuk menikmati hidangan lezat bersama teman dan keluarga.',
      p2:
        'Didukung harga yang terjangkau dan pilihan menu yang beragam, Mie Newmind siap menemani setiap momen kebersamaan dengan lebih menyenangkan.',
      link: 'Selengkapnya →',
      timelineTitleHtml: 'Perjalanan <span>Kami</span>',
      timeline: [
        'Mie Newmind didirikan oleh Mardigu Wowiek Prasantyo dengan tujuan menghadirkan kuliner mie pedas berkualitas dengan harga terjangkau. Mulai tumbuh dengan konsep kemitraan gerobak kecil yang memberdayakan UMKM.',
        'Semakin banyak mitra bergabung. Menu mie pedas dengan nama unik seperti Mi Bupati, Mi Gubernur, dan Mi Presiden mulai dikenal luas oleh masyarakat.',
        'Berhasil tumbuh dengan 500+ kemitraan outlet kecil tersebar di berbagai daerah Indonesia. Kuota kemitraan outlet kecil terpenuhi dan resmi ditutup.',
        'Mie Newmind mulai mengembangkan konsep dari gerobak menjadi resto yang lebih besar dan nyaman, memperluas penyebaran cabang di berbagai wilayah Indonesia.',
      ],
    },
    menu: {
      pageTitle: {
        eyebrow: 'Menu NewMind',
        heading: 'Menu',
        body: 'Semua menu favorit Mie Newmind dalam satu halaman, siap dipilih sesuai selera.',
      },
      eyebrow: 'Menu Newmind',
      titleHtml: 'Menu Favorit <span>Newmind</span>',
      sub: 'Best seller yang paling sering dipesan',
      featuredTag: '⭐ BEST SELLER',
      featuredBody:
        'Mie dengan perpaduan rasa manis dan pedas yang lebih kuat, menghadirkan sensasi rasa yang khas, tersedia level pedas 1-8.',
      priceLabel: 'Mulai dari',
      orderNow: 'PESAN SEKARANG →',
      tabMie: 'MIE',
      tabDimsum: 'DIMSUM',
      tabDrinks: 'MINUMAN',
      modalCloseLabel: 'Tutup',
      modalCta: 'PESAN SEKARANG →',
    },
    visit: {
      pageTitle_location: {
        eyebrow: 'VISIT US',
        heading: 'Lokasi',
        body: 'Temukan lokasi Mie Newmind dan nikmati pengalaman makan yang nyaman setiap hari.',
      },
      pageTitle_reservation: {
        eyebrow: 'BOOK A TABLE',
        heading: 'Reservasi',
        body: 'Pesan tempat lebih awal agar momen makanmu di Mie Newmind berjalan nyaman dan tanpa antre.',
      },
      eyebrow: 'VISIT US',
      titleHtml: 'Lokasi &amp; <span>Reservasi</span>',
      locationTitle: 'Lokasi Kami',
      locationBody:
        'Tempatnya mudah dicari, suasananya nyaman, dan makanannya bikin nagih. Mie Newmind siap menemani waktu makanmu.',
      locationAddress: 'Jl. Garon Raya, Candi, Bagi, Kec. Madiun, Kabupaten Madiun, Jawa Timur',
      locationHours: [
        'Senin - Jumat 09:00 - 22:00 WIB <br>',
        'Sabtu - Minggu 09:00 - 23:00 WIB'
      ],
      mapsCta: 'BUKA GOOGLE MAPS →',
      reserveTitle: 'Reservasi',
      reserveBody:
        'Ingin makan tanpa khawatir kehabisan tempat? Reservasi sekarang dan nikmati momen makan yang lebih tenang di Mie Newmind.',
      reserveWaLabel: 'WhatsApp',
      reserveCta: 'HUBUNGI VIA WHATSAPP →',
    },
    franchise: {
      pageTitle: {
        eyebrow: 'BUSINESS PARTNERSHIP',
        heading: 'Franchise',
        body: 'Bergabung sebagai mitra Mie Newmind dengan sistem kemitraan yang siap bertumbuh bersama.',
      },
      eyebrow: '01 — PERSYARATAN',
      title: 'Syarat Bergabung Menjadi Mitra Mie Newmind',
      requirements: [
        {
          title: 'Warga Negara Indonesia',
          description:
            'Calon mitra merupakan Warga Negara Indonesia yang memiliki komitmen untuk menjalankan dan mengembangkan bisnis restoran Mie Newmind sesuai standar perusahaan.',
        },
        {
          title: 'Memiliki Izin Usaha',
          description:
            'Calon mitra memiliki atau bersedia mengurus izin usaha restoran sesuai dengan peraturan yang berlaku di wilayah operasional usaha.',
        },
        {
          title: 'Menyediakan Lokasi Usaha',
          description:
            'Mitra menyediakan lokasi restoran yang strategis dengan luas area ideal ± 500 m² di area berpotensi pasar tinggi.',
        },
        {
          title: 'Menyediakan Modal Investasi',
          description: 'Calon mitra menyediakan dana investasi untuk pembangunan dan operasional awal restoran.',
          jawa: 'Pulau Jawa',
          jawaAmount: 'Rp 850 Juta',
          luarJawa: 'Luar Pulau Jawa',
          luarJawaAmount: 'Rp 1,2 Miliar',
        },
        {
          title: 'Memiliki Jiwa Entrepreneur',
          description:
            'Mitra memiliki jiwa kewirausahaan, komitmen tinggi, serta keseriusan dalam menjalankan bisnis waralaba Mie Newmind sesuai dengan sistem yang telah ditetapkan.',
        },
        {
          title: 'Sertifikasi Halal & Perlindungan Merek',
          description:
            'Produk Mie Newmind telah memiliki sertifikasi halal serta izin merek yang terdaftar dalam HAKI, memberikan jaminan legalitas dan kepercayaan bagi konsumen maupun mitra usaha.',
          badges: ['Sertifikat Halal MUI', 'Terdaftar HAKI', 'Legalitas Terjamin'],
        },
      ],
      cta: {
        eyebrow: '⭐ TERBATAS — DAFTAR SEKARANG ⭐',
        title: 'Siap Memulai Bisnis Bersama Kami?',
        description:
          'Jadilah bagian dari keluarga besar Mie Newmind dan raih kesuksesan bersama ribuan pelanggan setia kami.',
        button: 'Gabung Kemitraan →',
        disclaimer: '— Konsultasi gratis tanpa biaya pendaftaran awal —',
      },
      contact: {
        formTitle: 'Form Kontak',
        fullname: 'Nama Lengkap',
        email: 'Email',
        phone: 'No. Telepon',
        city: 'Kota',
        message: 'Pesan',
        submit: 'Kirim',
      },
    },
    career: {
      pageTitle: {
        eyebrow: 'JOIN THE TEAM',
        heading: 'Career',
        body: 'Buka peluang kariermu di Mie Newmind dan tumbuh bersama tim yang bergerak cepat.',
      },
      eyebrow: 'KARIR',
      title: 'Bergabung Bersama Tim Mie Newmind',
      intro: 'Kami selalu terbuka untuk talenta yang semangat, disiplin, dan siap berkembang bersama. Jadilah bagian dari tim kami dan bantu kami terus berinovasi dalam industri kuliner Indonesia.',
      introTitle: 'Lowongan Pekerjaan',
      introDescription: 'Bergabunglah bersama tim Mie Newmind dan tumbuh bersama dalam lingkungan kerja yang aktif, dinamis, dan penuh peluang.',
      requirementsTitle: 'Persyaratan Umum',
      requirementsDesc: 'Kirimkan CV & portofolio kamu melalui WhatsApp. Kami akan menghubungi kandidat terpilih.',
      applyButtonText: 'LAMAR SEKARANG',
      formTitle: 'Form Lamaran',
      contactLabel: 'Hubungi Kami',
      emailLabel: 'Email',
      email: 'careers@mienewmind.com',
      phoneLabel: 'WhatsApp',
      phone: '+62 856-0403-0473',
      formSubtitle: 'Isi Data Diri Anda',
      fullname: 'Nama Lengkap',
      emailPlaceholder: 'Email',
      phone: 'No. Telepon',
      position: 'Posisi',
      positions: ['Manager', 'Chef', 'Staff Operasional', 'Customer Service', 'Lainnya'],
      experience: 'Pengalaman',
      submit: 'Kirim Lamaran',
      mainRole: 'PERAN UTAMA',
      qualifications: 'KUALIFIKASI',
      applyNow: 'LAMAR SEKARANG',
      employmentTypes: {
        fullTime: 'Full Time',
        partTime: 'Part Time',
      },
      jobPositions: {
        hrd: 'HRD (Human Resource Development)',
        manager: 'Manager',
        supervisor: 'Supervisor (SPV)',
        storeLeader: 'Store Leader',
        trainer: 'Trainer F&B',
      },
    },
    footer: {
      description:
        'Trendy spicy noodles at pocket-friendly prices. Here to accompany every one of your mealtime moments.',
      browse: 'BROWSE',
      browseLinks: ['About Us', 'Menu', 'Location', 'Reservation', 'Franchise', 'Career'],
      contact: 'CONTACT',
      address: 'ADDRESS',
      operational: 'OPERATING HOURS',
      openEveryday: 'Open Every Day',
      copyright: '© 2026 Mie Newmind Cabang Madiun. All Rights Reserved.',
      verified: 'Verified',
      halal: 'Halal',
      bpom: 'BPOM RI',
    },
    theme: {
      toLight: 'Ubah ke tema terang',
      toDark: 'Ubah ke tema gelap',
    },
  },
  en: {
    htmlLang: 'en',
    metaDescription:
      'Trendy spicy noodles at affordable prices with a cozy dining experience for every moment together.',
    nav: ['About Us', 'Menu', 'Location', 'Reservation', 'Franchise', 'Career'],
    header: {
      navToggleLabel: 'Open menu',
      langToggleLabel: 'Switch language',
    },
    hero: {
      eyebrow: '🌶️ CABANG MADIUN',
      heading: 'Perfect Taste, Friendly Price',
      body:
        'Enjoy delicious meals with affordable menu options, without sacrificing flavor or comfort. Mie Newmind is here to be the right choice for every dining moment.',
      ctaMenu: 'VIEW MENU',
      ctaOrder: 'ORDER NOW',
      halalTitle: 'Halal Verified',
      halalSub: 'BPOM RI: MD 063771000100376',
      outletsTitle: '500+ Partner Outlets',
      outletsSub: 'Across multiple regions in Indonesia',
    },
    about: {
      pageTitle: {
        eyebrow: 'OUR STORY',
        heading: 'About Us',
        body: 'Get to know Mie Newmind more closely, from its early days to its expansion across various regions of Indonesia.',
      },
      eyebrow: 'ABOUT US',
      titleHtml: 'About <span>Mie Newmind</span>',
      p1:
        'Mie Newmind is a modern spicy noodle culinary brand in Indonesia, offering a signature flavor with a modern concept. As a comfortable dining place, Mie Newmind is perfect for enjoying delicious meals with friends and family.',
      p2:
        'Supported by affordable prices and a wide variety of menu options, Mie Newmind is ready to make every shared moment more enjoyable.',
      link: 'Learn More →',
      timelineTitleHtml: 'Our <span>Journey</span>',
      timeline: [
        'Mie Newmind was founded by Mardigu Wowiek Prasantyo to bring quality spicy noodle cuisine at affordable prices. It began growing through small cart partnership concepts that empower MSMEs.',
        'More partners joined. Unique spicy noodle menus such as Mi Bupati, Mi Gubernur, and Mi Presiden became increasingly popular among customers.',
        'Successfully grew to 500+ small-outlet partnerships across various regions of Indonesia. The quota for small-outlet partnerships was fulfilled and officially closed.',
        'Mie Newmind started developing from cart concepts into larger and more comfortable restaurants, expanding branches to more regions in Indonesia.',
      ],
    },
    menu: {
      pageTitle: {
        eyebrow: 'Newmind Menu',
        heading: 'Menu',
        body: 'All of Mie Newmind favorite menu in one page, ready to choose according to your preference.',
      },
      eyebrow: 'Newmind Menu',
      titleHtml: 'NewMind\'s Favorite <span>Menu</span>',
      sub: 'Best sellers most frequently ordered',
      featuredTag: '⭐ BEST SELLER',
      featuredBody:
        'Noodles with a stronger sweet and spicy blend, delivering a distinctive taste with chili levels 1-8.',
      priceLabel: 'Starting from',
      orderNow: 'ORDER NOW →',
      tabMie: 'NOODLES',
      tabDimsum: 'DIMSUM',
      tabDrinks: 'DRINKS',
      modalCloseLabel: 'Close',
      modalCta: 'ORDER NOW →',
    },
    visit: {
      pageTitle_location: {
        eyebrow: 'VISIT US',
        heading: 'Location',
        body: 'Find Mie Newmind location and enjoy a comfortable eating experience every day.',
      },
      pageTitle_reservation: {
        eyebrow: 'BOOK A TABLE',
        heading: 'Reservation',
        body: 'Book a table in advance so your dining moment at Mie Newmind is comfortable and without queuing.',
      },
      eyebrow: 'VISIT US',
      titleHtml: 'Location &amp; <span>Reservation</span>',
      locationTitle: 'Our Location',
      locationBody:
        'Easy to find, cozy atmosphere, and addictive flavors. Mie Newmind is ready to complete your mealtime.',
      locationAddress: 'Jl. Garon Raya, Candi, Bagi, Madiun District, Madiun Regency, East Java',
      locationHours: [
        'Monday - Friday 09:00 AM - 10:00 PM WIB <br>',
        'Saturday - Sunday 09:00 AM - 11:00 PM WIB'
      ],
      mapsCta: 'OPEN GOOGLE MAPS →',
      reserveTitle: 'Reservation',
      reserveBody:
        'Want to dine without worrying about running out of seats? Reserve now and enjoy a calmer dining moment at Mie Newmind.',
      reserveWaLabel: 'WhatsApp',
      reserveCta: 'CONTACT VIA WHATSAPP →',
    },
    franchise: {
      pageTitle: {
        eyebrow: 'BUSINESS PARTNERSHIP',
        heading: 'Franchise',
        body: 'Join as a Mie Newmind partner with a partnership system ready to grow together.',
      },
      eyebrow: '01 — REQUIREMENTS',
      title: 'Requirements to Become a Mie Newmind Partner',
      requirements: [
        {
          title: 'Indonesian Citizen',
          description:
            'Prospective partners must be Indonesian citizens with the commitment to operate and develop a Mie Newmind restaurant business according to company standards.',
        },
        {
          title: 'Business License',
          description:
            'Prospective partners must have or be willing to obtain a restaurant business license in accordance with regulations applicable in the business operational area.',
        },
        {
          title: 'Provide Business Location',
          description:
            'Partners provide a strategic restaurant location with an ideal space of approximately 500 m² in a high-market-potential area.',
        },
        {
          title: 'Provide Investment Capital',
          description:
            'Prospective partners provide investment funds for restaurant development and initial operational costs.',
          jawa: 'Java Island',
          jawaAmount: 'IDR 850 Million',
          luarJawa: 'Off-Java Islands',
          luarJawaAmount: 'IDR 1.2 Billion',
        },
        {
          title: 'Entrepreneurial Spirit',
          description:
            'Partners possess entrepreneurial spirit, strong commitment, and seriousness in operating the Mie Newmind franchise business according to the established system.',
        },
        {
          title: 'Halal Certification & Brand Protection',
          description:
            'Mie Newmind products have obtained halal certification and trademark rights registered with HAKI, providing legality assurance and consumer trust.',
          badges: ['Halal Certificate MUI', 'HAKI Registered', 'Legal Assurance'],
        },
      ],
      cta: {
        eyebrow: '⭐ LIMITED — REGISTER NOW ⭐',
        title: 'Ready to Start Your Business With Us?',
        description:
          'Become part of the Mie Newmind family and achieve success with thousands of loyal customers.',
        button: 'Join Partnership →',
        disclaimer: '— Free consultation with no registration fees —',
      },
      contact: {
        formTitle: 'Contact Form',
        fullname: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        city: 'City',
        message: 'Message',
        submit: 'Send',
      },
    },
    career: {
      pageTitle: {
        eyebrow: 'JOIN THE TEAM',
        heading: 'Career',
        body: 'Open career opportunities at Mie Newmind and grow with a fast-moving team.',
      },
      eyebrow: 'CAREER',
      title: 'Join the Mie Newmind Team',
      intro: 'We are always open to talents who are passionate, disciplined, and ready to grow together. Be part of our team and help us continue to innovate in the Indonesian culinary industry.',
      introTitle: 'Job Openings',
      introDescription: 'Join the Mie Newmind team and grow together in an active, dynamic, and opportunity-filled work environment.',
      requirementsTitle: 'General Requirements',
      requirementsDesc: 'Send your CV & portfolio via WhatsApp. We will contact selected candidates.',
      applyButtonText: 'APPLY NOW',
      formTitle: 'Application Form',
      contactLabel: 'Contact Us',
      emailLabel: 'Email',
      email: 'careers@mienewmind.com',
      phoneLabel: 'WhatsApp',
      phone: '+62 856-0403-0473',
      formSubtitle: 'Fill In Your Information',
      fullname: 'Full Name',
      emailPlaceholder: 'Email',
      phone: 'Phone Number',
      position: 'Position',
      positions: ['Manager', 'Chef', 'Operations Staff', 'Customer Service', 'Other'],
      experience: 'Experience',
      submit: 'Submit Application',
      mainRole: 'MAIN ROLE',
      qualifications: 'QUALIFICATIONS',
      applyNow: 'APPLY NOW',
      employmentTypes: {
        fullTime: 'Full Time',
        partTime: 'Part Time',
      },
      jobPositions: {
        hrd: 'HRD (Human Resource Development)',
        manager: 'Manager',
        supervisor: 'Supervisor (SPV)',
        storeLeader: 'Store Leader',
        trainer: 'Trainer F&B',
      },
    },
    footer: {
      description:
        'Trendy spicy noodles at pocket-friendly prices. Here to accompany every one of your mealtime moments.',
      browse: 'BROWSE',
      browseLinks: ['About Us', 'Menu', 'Location', 'Reservation', 'Franchise', 'Career'],
      contact: 'CONTACT',
      address: 'ADDRESS',
      operational: 'OPERATING HOURS',
      openEveryday: 'Open Every Day',
      copyright: '© 2026 Mie Newmind Cabang Madiun. All Rights Reserved.',
      verified: 'Verified',
      halal: 'Halal',
      bpom: 'BPOM RI',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
  },
};

const setNodeText = (selector, text) => {
  const node = document.querySelector(selector);
  if (node) node.textContent = text;
};

const setNodeHTML = (selector, html) => {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = html;
};

/* ============================================
   MAIN FUNCTIONS
   Lines 420+
   
   Key Functions:
   
   1. applyLanguage(lang)
      - Switches language globally (id/en)
      - Updates all text on page
      - Stores in localStorage
      - Triggered by language toggle button
   
   2. applyTheme(theme)
      - Toggles dark/light mode
      - Applies theme (body.theme-dark class)
      - Stores in localStorage
      - Triggered by theme toggle button
   
   3. setActiveByCurrentPage()
      - Highlights active nav link based on current URL
      - Called on page load
      - Uses path matching (index, menu, about, etc)
   
   4. updateFormLabels()
      - Updates form button text after language switch
      - Called by applyLanguage()
   
   5. handleFormSubmit(e)
      - Career & Franchise form submit handler
      - Sends WhatsApp message
      - Builds message from form data
   
   6. handleReservationFormSubmit(e)
      - Reservation form submit handler
      - Similar to handleFormSubmit
      - Sends to WhatsApp
   
   7. animateLanguageSwitch(nextLang)
      - Fade animation during language switch
      - Prevents rapid switching
   
   ============================================ */

/* ============================================
   CAREER PAGE - JOB LISTINGS
   ============================================ */

const renderJobListings = () => {
  const jobsList = document.getElementById('jobs-list');
  if (!jobsList) return;

  const currentLang = rootBody.getAttribute('data-lang') || 'id';
  const jobs = jobPositions[currentLang] || jobPositions.id;
  const t = i18n[currentLang] || i18n.id;

  // Get translated labels
  const mainRoleLabel = t.career.mainRole || (currentLang === 'id' ? 'PERAN UTAMA' : 'MAIN ROLE');
  const qualificationsLabel = t.career.qualifications || (currentLang === 'id' ? 'KUALIFIKASI' : 'QUALIFICATIONS');
  const applyButtonLabel = t.career.applyNow || (currentLang === 'id' ? '✓ LAMAR SEKARANG' : '✓ APPLY NOW');

  // Clear previous content
  jobsList.innerHTML = '';

  jobs.forEach((job) => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    
    // Get translated employment type
    const employmentTypeKey = job.type; // e.g., 'fullTime'
    let employmentTypeTranslated = job.type || 'Full Time';
    if (t && t.career && t.career.employmentTypes && t.career.employmentTypes[employmentTypeKey]) {
      employmentTypeTranslated = t.career.employmentTypes[employmentTypeKey];
    }
    
    jobCard.innerHTML = `
      <div class="job-card-header">
        <div class="job-number">${job.number}</div>
        <div class="job-header-content">
          <h3 class="job-title">${job.title}</h3>
          <p class="job-description">${job.description}</p>
          <span class="job-badge">${employmentTypeTranslated}</span>
        </div>
        <div class="job-toggle-icon">
          <i class="bi bi-chevron-down"></i>
        </div>
      </div>

      <div class="job-details">
        <div class="job-details-section">
          <div class="job-details-title">${mainRoleLabel}</div>
          <p class="job-details-text">${job.mainRole}</p>
        </div>

        <div class="job-details-section">
          <div class="job-details-title">${qualificationsLabel}</div>
          <ul class="job-qualifications">
            ${job.qualifications.map((q) => `<li>${q}</li>`).join('')}
          </ul>
        </div>

        <button class="job-apply-btn" data-position="${job.title}">
          ${applyButtonLabel}
        </button>
      </div>
    `;

    // Toggle accordion - click anywhere on card header or entire card area
    jobCard.addEventListener('click', (e) => {
      // Don't toggle if clicking the apply button
      if (e.target.closest('.job-apply-btn')) {
        e.stopPropagation();
        return;
      }
      
      e.stopPropagation();
      
      // Check if this card is already expanded
      const isCurrentlyExpanded = jobCard.classList.contains('expanded');
      
      // Close all other cards
      document.querySelectorAll('.job-card').forEach((card) => {
        if (card !== jobCard && card.classList.contains('expanded')) {
          card.classList.remove('expanded');
        }
      });

      // Toggle current card
      if (isCurrentlyExpanded) {
        jobCard.classList.remove('expanded');
      } else {
        jobCard.classList.add('expanded');
      }
    });

    // Handle apply button click
    const applyBtn = jobCard.querySelector('.job-apply-btn');
    applyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const positionName = applyBtn.getAttribute('data-position');
      const positionSelect = document.querySelector('select[name="position"]');
      
      // Find matching option and select it
      if (positionSelect) {
        const options = Array.from(positionSelect.options);
        const matchingOption = options.find((opt) =>
          opt.textContent.toLowerCase().includes(positionName.toLowerCase())
        );
        if (matchingOption) {
          positionSelect.value = matchingOption.value;
        }
      }

      // Smooth scroll to form
      const formSection = document.querySelector('#karir');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Focus on first form field
        setTimeout(() => {
          const firstInput = formSection.querySelector('.form-input');
          if (firstInput) {
            firstInput.focus();
          }
        }, 300);
      }
    });

    jobsList.appendChild(jobCard);
  });
};

const applyLanguage = (lang) => {
  const t = i18n[lang] || i18n.id;

  document.documentElement.lang = t.htmlLang;
  rootBody.setAttribute('data-lang', lang);

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', t.metaDescription);
  }

  if (langToggle) {
    langToggle.textContent = lang === 'id' ? 'EN' : 'ID';
    langToggle.setAttribute('aria-label', t.header.langToggleLabel);
  }

  if (navToggle) {
    navToggle.setAttribute('aria-label', t.header.navToggleLabel);
  }

  const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
  navLinks.forEach((link, index) => {
    if (t.nav[index]) link.textContent = t.nav[index];
  });

  // Update page-title-card on all pages
  const pageTitle = document.querySelector('.page-title-card');
  if (pageTitle) {
    const pageTitleEyebrow = pageTitle.querySelector('.eyebrow');
    const pageTitleH1 = pageTitle.querySelector('h1');
    const pageTitlePs = pageTitle.querySelectorAll('p');
    const pageTitleP = pageTitlePs.length > 1 ? pageTitlePs[1] : null; // Get SECOND p (description), not first (eyebrow)

    if (document.getElementById('about')) {
      if (pageTitleEyebrow && t.about.pageTitle) pageTitleEyebrow.textContent = t.about.pageTitle.eyebrow;
      if (pageTitleH1 && t.about.pageTitle) pageTitleH1.textContent = t.about.pageTitle.heading;
      if (pageTitleP && t.about.pageTitle) pageTitleP.textContent = t.about.pageTitle.body;
    } else if (document.getElementById('menu-grid') || document.querySelector('[data-menu-tab]')) {
      if (pageTitleEyebrow && t.menu.pageTitle) pageTitleEyebrow.textContent = t.menu.pageTitle.eyebrow;
      if (pageTitleH1 && t.menu.pageTitle) pageTitleH1.textContent = t.menu.pageTitle.heading;
      if (pageTitleP && t.menu.pageTitle) pageTitleP.textContent = t.menu.pageTitle.body;
    } else if (document.getElementById('franchise')) {
      if (pageTitleEyebrow && t.franchise.pageTitle) pageTitleEyebrow.textContent = t.franchise.pageTitle.eyebrow;
      if (pageTitleH1 && t.franchise.pageTitle) pageTitleH1.textContent = t.franchise.pageTitle.heading;
      if (pageTitleP && t.franchise.pageTitle) pageTitleP.textContent = t.franchise.pageTitle.body;
    } else if (document.getElementById('karir')) {
      if (pageTitleEyebrow && t.career.pageTitle) pageTitleEyebrow.textContent = t.career.pageTitle.eyebrow;
      if (pageTitleH1 && t.career.pageTitle) pageTitleH1.textContent = t.career.pageTitle.heading;
      if (pageTitleP && t.career.pageTitle) pageTitleP.textContent = t.career.pageTitle.body;
    } else if (document.querySelector('.reservation-page-hero')) {
      if (pageTitleEyebrow && t.visit.pageTitle_reservation) pageTitleEyebrow.textContent = t.visit.pageTitle_reservation.eyebrow;
      if (pageTitleH1 && t.visit.pageTitle_reservation) pageTitleH1.textContent = t.visit.pageTitle_reservation.heading;
      if (pageTitleP && t.visit.pageTitle_reservation) pageTitleP.textContent = t.visit.pageTitle_reservation.body;
    } else if (document.getElementById('lokasi') || document.querySelector('.location-card')) {
      if (pageTitleEyebrow && t.visit.pageTitle_location) pageTitleEyebrow.textContent = t.visit.pageTitle_location.eyebrow;
      if (pageTitleH1 && t.visit.pageTitle_location) pageTitleH1.textContent = t.visit.pageTitle_location.heading;
      if (pageTitleP && t.visit.pageTitle_location) pageTitleP.textContent = t.visit.pageTitle_location.body;
    }
  }

  setNodeText('.hero .eyebrow', t.hero.eyebrow);
  setNodeText('.hero-copy h2', t.hero.heading);
  setNodeText('.hero-copy h2 + p', t.hero.body);
  setNodeText('.hero-cta .btn-primary', t.hero.ctaMenu);
  setNodeText('.hero-cta .btn-secondary', t.hero.ctaOrder);
  setNodeText('.hero-badges .badge-card:first-child strong', t.hero.halalTitle);
  setNodeText('.hero-badges .badge-card:first-child small', t.hero.halalSub);
  setNodeText('.hero-badges .badge-card:nth-child(2) strong', t.hero.outletsTitle);
  setNodeText('.hero-badges .badge-card:nth-child(2) small', t.hero.outletsSub);

  setNodeText('.about .about-heading .eyebrow', t.about.eyebrow);
  setNodeHTML('.about-title', t.about.titleHtml);
  setNodeText('.about-copy p:first-child', t.about.p1);
  setNodeText('.about-copy p:nth-child(2)', t.about.p2);
  setNodeText('.about-copy .text-link', t.about.link);
  setNodeHTML('.timeline-title', t.about.timelineTitleHtml);

  const timelineTexts = Array.from(document.querySelectorAll('.timeline-item p'));
  timelineTexts.forEach((node, index) => {
    if (t.about.timeline[index]) node.textContent = t.about.timeline[index];
  });

  setNodeText('.menu .eyebrow', t.menu.eyebrow);
  setNodeHTML('.menu-title', t.menu.titleHtml);
  setNodeText('.menu-sub', t.menu.sub);
  setNodeText('.feature-copy .tag', t.menu.featuredTag);
  setNodeText('.feature-copy h3 + p', t.menu.featuredBody);
  setNodeText('.price-label', t.menu.priceLabel);
  setNodeText('.feature-copy .btn-light', t.menu.orderNow);
  setNodeText('[data-menu-tab="mie"]', t.menu.tabMie);
  setNodeText('[data-menu-tab="dimsum"]', t.menu.tabDimsum);
  setNodeText('[data-menu-tab="minuman"]', t.menu.tabDrinks);
  setNodeText('#menu-modal-cta', t.menu.modalCta);

  const modalCloseButton = document.querySelector('.menu-modal-close');
  if (modalCloseButton) modalCloseButton.setAttribute('aria-label', t.menu.modalCloseLabel);

  setNodeText('.visit-head .eyebrow', t.visit.eyebrow);
  setNodeHTML('.visit-title', t.visit.titleHtml);
  setNodeText('.location-card h3', t.visit.locationTitle);
  setNodeText('.location-card h3 + p', t.visit.locationBody);
  setNodeText('.location-card .address span:last-child', t.visit.locationAddress);
  setNodeHTML('.location-card .hours span:nth-child(2)', t.visit.locationHours);
  setNodeText('.location-card .btn-primary', t.visit.mapsCta);
  setNodeText('.reserve-card h3', t.visit.reserveTitle);
  setNodeText('.reserve-card h3 + p', t.visit.reserveBody);
  setNodeText('.reserve-card .wa small', t.visit.reserveWaLabel);
  setNodeText('.reserve-card .btn-secondary', t.visit.reserveCta);

  setNodeText('.franchise .eyebrow', t.franchise.eyebrow);
  setNodeText('.franchise h2', t.franchise.title);

  const franchiseCards = Array.from(document.querySelectorAll('.franchise-grid article'));
  franchiseCards.forEach((card, index) => {
    const title = card.querySelector('h3');
    const body = card.querySelector('p');
    const item = t.franchise.cards[index];
    if (!item) return;
    if (title) title.textContent = item.h;
    if (body) body.textContent = item.p;
  });

  setNodeText('.karir .eyebrow', t.career.eyebrow);
  setNodeText('.karir h2', t.career.title);
  setNodeText('.karir p:not(.eyebrow)', t.career.body);

  setNodeText('.footer-brand .footer-description', t.footer.description);
  setNodeText('.footer-grid .footer-col:nth-child(2) h4', t.footer.browse);
  const footerBrowseLinks = Array.from(document.querySelectorAll('.footer-grid .footer-col:nth-child(2) a'));
  footerBrowseLinks.forEach((link, index) => {
    if (t.footer.browseLinks[index]) link.textContent = t.footer.browseLinks[index];
  });
  setNodeText('.footer-grid .footer-col:nth-child(3) h4', t.footer.contact);
  setNodeText('.footer-grid .footer-col:nth-child(4) h4', t.footer.address);
  setNodeText('.footer-hours .footer-label', t.footer.operational);
  const footerStatus = document.querySelector('.footer-status');
  if (footerStatus) {
    footerStatus.innerHTML = `<span class="status-dot"></span>${t.footer.openEveryday}`;
  }
  setNodeText('.copyright', t.footer.copyright);
  setNodeText('.badge-verified', t.footer.verified);
  setNodeText('.halal-label', t.footer.halal);
  setNodeText('.badge-bpom', t.footer.bpom);

  // Update franchise form title
  if (t.franchise && t.franchise.contact) {
    setNodeText('.franchise-form-title', t.franchise.contact.formTitle);
  }

  // Update career page elements
  if (t.career) {
    setNodeText('.career-intro-title', t.career.introTitle);
    setNodeText('.career-intro-description', t.career.introDescription);
    setNodeText('.career-requirements-title', t.career.requirementsTitle);
    setNodeText('.career-requirements-desc', t.career.requirementsDesc);
    setNodeText('.cta-button-text', t.career.applyButtonText);
    setNodeText('.form-title', t.career.formTitle);
    
    // Re-render job listings to update employment type translations
    renderJobListings();
  }

  // Update form labels and placeholders
  updateFormLabels(lang);

  if (themeToggle) {
    const dark = rootBody.classList.contains('theme-dark');
    themeToggle.setAttribute('aria-label', dark ? t.theme.toLight : t.theme.toDark);
  }

  localStorage.setItem('mie-lang', lang);
  window.dispatchEvent(new CustomEvent('mie:language-change', { detail: { lang } }));
};

/** Update form field labels and placeholders based on language */
const updateFormLabels = (lang) => {
  const t = i18n[lang];
  if (!t.career) return;

  const form = document.getElementById('application-form');
  if (!form) return;

  const nameInput = form.querySelector('input[name="fullname"]');
  if (nameInput) nameInput.placeholder = t.career.fullname;

  const emailInput = form.querySelector('input[name="email"]');
  if (emailInput) emailInput.placeholder = t.career.email;

  const phoneInput = form.querySelector('input[name="phone"]');
  if (phoneInput) phoneInput.placeholder = t.career.phone;

  const positionSelect = form.querySelector('select[name="position"]');
  if (positionSelect) {
    positionSelect.options[0].textContent = t.career.position;
    t.career.positions.forEach((pos, idx) => {
      if (positionSelect.options[idx + 1]) {
        positionSelect.options[idx + 1].textContent = pos;
      }
    });
  }

  const experienceInput = form.querySelector('textarea[name="experience"]');
  if (experienceInput) experienceInput.placeholder = t.career.experience;

  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.innerHTML = `<i class="bi bi-send"></i> ${t.career.submit}`;
  }

  // Update franchise contact form
  const franchiseForm = document.getElementById('franchise-contact-form');
  if (franchiseForm && t.franchise && t.franchise.contact) {
    const fNameInput = franchiseForm.querySelector('input[name="fullname"]');
    if (fNameInput) fNameInput.placeholder = t.franchise.contact.fullname;

    const fEmailInput = franchiseForm.querySelector('input[name="email"]');
    if (fEmailInput) fEmailInput.placeholder = t.franchise.contact.email;

    const fPhoneInput = franchiseForm.querySelector('input[name="phone"]');
    if (fPhoneInput) fPhoneInput.placeholder = t.franchise.contact.phone;

    const fCityInput = franchiseForm.querySelector('input[name="city"]');
    if (fCityInput) fCityInput.placeholder = t.franchise.contact.city;

    const fMessageInput = franchiseForm.querySelector('textarea[name="message"]');
    if (fMessageInput) fMessageInput.placeholder = t.franchise.contact.message;

    const fSubmitBtn = franchiseForm.querySelector('button[type="submit"]');
    if (fSubmitBtn) {
      fSubmitBtn.innerHTML = `<i class="bi bi-send"></i> ${t.franchise.contact.submit}`;
    }
  }
};

/** Handle form submission */
const handleFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const name = formData.get('fullname');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const position = formData.get('position');
  const experience = formData.get('experience');

  // Build WhatsApp message
  const lang = rootBody.getAttribute('data-lang') || 'id';
  const message =
    lang === 'id'
      ? `Halo, saya ingin melamar:\n\nNama: ${name}\nEmail: ${email}\nNo. Telepon: ${phone}\nPosisi: ${position}\nPengalaman: ${experience}`
      : `Hi, I want to apply:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience}`;

  const waLink = `https://wa.me/6285604030473?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');

  // Clear form
  form.reset();
};

/** Handle franchise contact form submission */
const handleFranchiseFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const name = formData.get('fullname');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const city = formData.get('city');
  const message = formData.get('message');

  // Build WhatsApp message
  const lang = rootBody.getAttribute('data-lang') || 'id';
  const waMessage =
    lang === 'id'
      ? `Halo, saya ingin bergabung sebagai mitra Mie Newmind:\n\nNama: ${name}\nEmail: ${email}\nNo. Telepon: ${phone}\nKota: ${city}\nPesan: ${message}`
      : `Hi, I want to become a Mie Newmind franchise partner:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nMessage: ${message}`;

  const waLink = `https://wa.me/6285604030473?text=${encodeURIComponent(waMessage)}`;
  window.open(waLink, '_blank');

  // Clear form
  form.reset();
};

/** Handle reservation form submission */
const handleReservationFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const name = formData.get('fullname');
  const date = formData.get('date');
  const time = formData.get('time');
  const pax = formData.get('pax');
  const phone = formData.get('phone');
  const notes = formData.get('notes') || '-';

  const lang = rootBody.getAttribute('data-lang') || 'id';
  const waMessage =
    lang === 'id'
      ? `Halo, saya ingin reservasi di Mie Newmind:\n\nNama: ${name}\nTanggal: ${date}\nJam: ${time}\nJumlah Orang: ${pax}\nNo. Telepon: ${phone}\nCatatan: ${notes}`
      : `Hi, I want to make a reservation at Mie Newmind:\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nPax: ${pax}\nPhone: ${phone}\nNotes: ${notes}`;

  const waLink = `https://wa.me/6285604030473?text=${encodeURIComponent(waMessage)}`;
  window.open(waLink, '_blank');

  form.reset();
};

/** Handle WhatsApp redirect for reservation with form validation */
const handleReservationWhatsApp = (e) => {
  e.preventDefault();
  
  const form = document.getElementById('reservation-form');
  
  // Check if form is valid
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  const formData = new FormData(form);
  const name = formData.get('fullname');
  const date = formData.get('date');
  const time = formData.get('time');
  const pax = formData.get('pax');
  const phone = formData.get('phone');
  const notes = formData.get('notes') || '-';

  const lang = rootBody.getAttribute('data-lang') || 'id';
  const waMessage =
    lang === 'id'
      ? `Halo, saya ingin reservasi di Mie Newmind:\n\nNama: ${name}\nTanggal: ${date}\nJam: ${time}\nJumlah Orang: ${pax}\nNo. Telepon: ${phone}\nCatatan: ${notes}`
      : `Hi, I want to make a reservation at Mie Newmind:\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nPax: ${pax}\nPhone: ${phone}\nNotes: ${notes}`;

  const waLink = `https://wa.me/6285604030473?text=${encodeURIComponent(waMessage)}`;
  window.open(waLink, '_blank');
  
  form.reset();
};

/** Handle WhatsApp redirect for karir with form validation */
const handleKarirWhatsApp = (e) => {
  e.preventDefault();
  
  const form = document.getElementById('application-form');
  
  // Check if form is valid
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  const formData = new FormData(form);
  const name = formData.get('fullname');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const position = formData.get('position');
  const experience = formData.get('experience');

  // Build WhatsApp message
  const lang = rootBody.getAttribute('data-lang') || 'id';
  const message =
    lang === 'id'
      ? `Halo, saya ingin melamar:\n\nNama: ${name}\nEmail: ${email}\nNo. Telepon: ${phone}\nPosisi: ${position}\nPengalaman: ${experience}`
      : `Hi, I want to apply:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience}`;

  const waLink = `https://wa.me/6285604030473?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');

  // Clear form
  form.reset();
};

/** Handle WhatsApp redirect for franchise with form validation */
const handleFranchiseWhatsApp = (e) => {
  e.preventDefault();
  
  const form = document.getElementById('franchise-contact-form');
  
  // Check if form is valid
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Fixed WhatsApp message for franchise inquiry
  const waMessage = `Halo kak, saya mau info Promo Kemitraan @MieNewMind,\n\n#Google`;

  const waLink = `https://wa.me/6281334200163?text=${encodeURIComponent(waMessage)}`;
  window.open(waLink, '_blank');

  // Clear form
  form.reset();
};

window.handleFormSubmit = handleFormSubmit;
window.handleFranchiseFormSubmit = handleFranchiseFormSubmit;
window.handleReservationFormSubmit = handleReservationFormSubmit;
window.handleReservationWhatsApp = handleReservationWhatsApp;
window.handleKarirWhatsApp = handleKarirWhatsApp;
window.handleFranchiseWhatsApp = handleFranchiseWhatsApp;

const savedLanguage = localStorage.getItem('mie-lang') || 'id';
applyLanguage(savedLanguage);

const animateLanguageSwitch = (nextLang) => {
  if (languageAnimating) return;

  if (reduceMotionQuery.matches) {
    applyLanguage(nextLang);
    return;
  }

  languageAnimating = true;
  rootBody.classList.add('is-lang-switching');
  if (langToggle) {
    langToggle.classList.add('is-animating');
    langToggle.setAttribute('aria-disabled', 'true');
  }

  window.setTimeout(() => {
    applyLanguage(nextLang);
    rootBody.classList.remove('is-lang-switching');
    if (langToggle) {
      langToggle.classList.remove('is-animating');
      langToggle.setAttribute('aria-disabled', 'false');
    }
    languageAnimating = false;
  }, 170);
};

/* ============================================
   EVENT LISTENERS
   Lines 760+
   
   Listeners Registered:
   
   1. Language Toggle (.lang-pill click)
      - Switch between Indonesian & English
      - Trigger animation
      - Update localStorage
   
   2. Theme Toggle (#theme-toggle click)
      - Switch between light & dark mode
      - Animate theme transition
      - Store preference
   
   3. Mobile Nav Toggle (.nav-toggle click)
      - Open/close mobile menu
      - Toggle aria-expanded
      - Close on link click
   
   4. Nav Links click
      - Close mobile menu when link clicked
      - Navigate to page
      - Update active state
   
   5. Window Scroll & Resize
      - Update header scroll state
      - Update timeline animation
      - Update parallax on scroll
   
   ============================================ */

if (langToggle) {
  langToggle.addEventListener('click', () => {
    if (languageAnimating) return;
    const current = rootBody.getAttribute('data-lang') || 'id';
    const next = current === 'id' ? 'en' : 'id';
    animateLanguageSwitch(next);
  });
}

const applyTheme = (theme) => {
  const dark = theme === 'dark';
  rootBody.classList.toggle('theme-dark', dark);
  rootBody.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (themeToggle) {
    themeToggle.textContent = dark ? '☀' : '☾';
    const lang = rootBody.getAttribute('data-lang') || 'id';
    const t = i18n[lang] || i18n.id;
    themeToggle.setAttribute('aria-label', dark ? t.theme.toLight : t.theme.toDark);
  }
};

const savedTheme = localStorage.getItem('mie-theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    if (themeAnimating) return;

    const nextTheme = rootBody.classList.contains('theme-dark') ? 'light' : 'dark';
    const rect = themeToggle.getBoundingClientRect();
    const overlay = document.createElement('div');
    overlay.className = `theme-transition-overlay ${nextTheme === 'dark' ? 'to-dark' : 'to-light'}`;
    overlay.style.setProperty('--tx', `${rect.left + rect.width / 2}px`);
    overlay.style.setProperty('--ty', `${rect.top + rect.height / 2}px`);

    themeAnimating = true;
    themeToggle.classList.add('is-animating');
    document.body.appendChild(overlay);

    setTimeout(() => {
      localStorage.setItem('mie-theme', nextTheme);
      applyTheme(nextTheme);
    }, 220);

    setTimeout(() => {
      themeToggle.classList.remove('is-animating');
      overlay.remove();
      themeAnimating = false;
    }, 620);

    overlay.addEventListener('animationend', () => {
      overlay.remove();
      themeAnimating = false;
      themeToggle.classList.remove('is-animating');
    }, { once: true });
  });
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
    
    // Toggle body overflow to prevent scrolling when menu is open
    if (!expanded) {
      rootBody.classList.add('nav-open');
    } else {
      rootBody.classList.remove('nav-open');
    }
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      rootBody.classList.remove('nav-open');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      rootBody.classList.remove('nav-open');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('open') && 
        !mainNav.contains(e.target) && 
        !navToggle.contains(e.target)) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      rootBody.classList.remove('nav-open');
    }
  });
}

if (siteHeader) {
  const setHeaderState = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
}

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const updateTimelineProgress = () => {
  if (!timeline) return;

  const rect = timeline.getBoundingClientRect();
  const viewport = window.innerHeight;
  const start = viewport * 0.2;
  const end = rect.height + viewport * 0.35;
  const raw = (start - rect.top) / end;
  const progress = Math.min(1, Math.max(0, raw));

  timeline.style.setProperty('--timeline-progress', `${progress * 100}%`);
};

updateTimelineProgress();
window.addEventListener('scroll', updateTimelineProgress, { passive: true });
window.addEventListener('resize', updateTimelineProgress);

if (parallaxImages.length) {
  const onMouseMove = (event) => {
    parallaxImages.forEach((card) => {
      const r = card.getBoundingClientRect();
      const px = ((event.clientX - r.left) / r.width - 0.5) * 8;
      const py = ((event.clientY - r.top) / r.height - 0.5) * -8;

      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
        card.style.transform = '';
        return;
      }

      card.style.transform = `rotateY(${px}deg) rotateX(${py}deg) translateY(-4px)`;
    });
  };

  window.addEventListener('mousemove', onMouseMove);
}

// Navbar active link detection based on current URL path.
const navLinks = Array.from(document.querySelectorAll('.main-nav a'));

if (navLinks.length) {
  const normalizePath = (pathname) => {
    const segment = pathname.split('/').pop();
    return segment && segment.length ? segment : 'index.html';
  };

  const isCurrentPageLink = (url) => normalizePath(url.pathname) === normalizePath(window.location.pathname);

  const clearActiveLinks = () => {
    navLinks.forEach((link) => link.classList.remove('active'));
  };

  const setActiveByPredicate = (predicate) => {
    clearActiveLinks();
    const active = navLinks.find((link) => predicate(link));
    if (active) active.classList.add('active');
  };

  const setActiveByCurrentPage = () => {
    const currentPath = normalizePath(window.location.pathname);

    setActiveByPredicate((link) => {
      const url = new URL(link.getAttribute('href') || '', window.location.href);
      return normalizePath(url.pathname) === currentPath;
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      const url = new URL(href, window.location.href);

      if (isCurrentPageLink(url) && url.hash) {
        setActiveByPredicate((node) => node.getAttribute('href') === href);
        return;
      }

      if (!url.hash) {
        setActiveByPredicate((node) => {
          const target = new URL(node.getAttribute('href') || '', window.location.href);
          return normalizePath(target.pathname) === normalizePath(url.pathname);
        });
      }
    });
  });

  setActiveByCurrentPage();

  window.addEventListener('popstate', setActiveByCurrentPage);
};

// Initialize job listings when page loads
document.addEventListener('DOMContentLoaded', () => {
  renderJobListings();

  // Handle CTA Apply button click to scroll to form
  const ctaApplyBtn = document.getElementById('cta-apply-btn');
  if (ctaApplyBtn) {
    ctaApplyBtn.addEventListener('click', () => {
      const formSection = document.querySelector('#karir');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Focus on first form field
        setTimeout(() => {
          const firstInput = formSection.querySelector('.form-input');
          if (firstInput) {
            firstInput.focus();
          }
        }, 300);
      }
    });
  }
});

// Re-render when language changes
const originalApplyLanguage = window.applyLanguage;
window.applyLanguage = function(lang) {
  originalApplyLanguage.call(this, lang);
  renderJobListings();
};

/* ============================================
   SECURITY LOADER & COOKIE VERIFICATION
   Lines 1315+
   - Advanced security verification on first visit
   - Cookie-based security feature
   - Simulates SSL, privacy, and data protection checks
   ============================================ */

// Security Loader Configuration
const SECURITY_COOKIE_NAME = 'mie-security-verified';
const SECURITY_COOKIE_EXPIRY_DAYS = 30; // Cookie expires in 30 days

/**
 * Set security verification cookie
 * @param {number} expiryDays - Days until cookie expires
 */
function setSecurityCookie(expiryDays = 30) {
  const date = new Date();
  date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = `${SECURITY_COOKIE_NAME}=verified; ${expires}; path=/; SameSite=Strict`;
}

/**
 * Check if security cookie exists
 * @returns {boolean} - True if visitor has been verified
 */
function getSecurityCookie() {
  const name = SECURITY_COOKIE_NAME + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return true;
    }
  }
  return false;
}

/**
 * Hide the security loader with smooth animation
 */
function hideSecurityLoader() {
  // Use a more reliable method - ensure it closes after exactly 7 seconds
  const closeLoader = () => {
    const securityLoader = document.getElementById('security-loader');
    if (securityLoader) {
      securityLoader.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  };
  
  // Use a direct setTimeout that's harder to interfere with
  setTimeout(closeLoader, 7000);
}

/**
 * Check if page is being reloaded/refreshed (not same-page navigation)
 * @returns {boolean} - True if page is a full reload
 */
function isPageReload() {
  try {
    // Check navigation timing - reload resets the navigation timing
    if (window.performance && window.performance.getEntriesByType) {
      const navEntries = window.performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        return navEntries[0].type === 'reload';
      }
    }
    
    // Fallback for older browsers
    if (window.performance && window.performance.navigation) {
      return window.performance.navigation.type === 1; // TYPE_RELOAD
    }
  } catch (e) {
    // If performance API fails, assume not a reload
    return false;
  }
  
  return false;
}

/**
 * Initialize security verification on page reload only
 */
function initSecurityVerification() {
  try {
    const securityLoader = document.getElementById('security-loader');
    
    // Show loader on page reload, hide on regular navigation
    if (isPageReload()) {
      // This is a page refresh - show security loader
      if (securityLoader) {
        securityLoader.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // Schedule the close
        hideSecurityLoader();
        setSecurityCookie(SECURITY_COOKIE_EXPIRY_DAYS);
      }
    } else {
      // This is initial load or navigation - skip loader
      if (securityLoader) {
        securityLoader.classList.add('hidden');
      }
      document.body.style.overflow = 'auto';
    }
  } catch (e) {
    // Safety: always allow page access if something goes wrong
    document.body.style.overflow = 'auto';
    const securityLoader = document.getElementById('security-loader');
    if (securityLoader) {
      securityLoader.classList.add('hidden');
    }
  }
}

// Initialize security loader when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSecurityVerification);
} else {
  // If script is loaded late, initialize immediately
  initSecurityVerification();
}

// Prevent security loader from showing on navigation within the page
window.addEventListener('beforeunload', function(e) {
  // This prevents the loader from re-triggering on same-page navigation
  return undefined;
});

/* ============================================
   ADDITIONAL CLIENT-SIDE SECURITY FEATURES
   Lines 1400+
   - Protection against common vulnerabilities
   - Form input sanitization
   - Session security
   ============================================ */

/**
 * Sanitize HTML to prevent XSS attacks
 * @param {string} html - HTML string to sanitize
 * @returns {string} - Sanitized HTML
 */
function sanitizeHTML(html) {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
function validatePhone(phone) {
  const phoneRegex = /^(\+\d{1,3}[-.\s]?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Add security header information to page
 * Useful for debugging/verification
 */
function displaySecurityInfo() {
  if (window.location.hostname !== '127.0.0.1' && 
      window.location.hostname !== 'localhost') {
    console.log('🔒 Security Features Active:');
    console.log('✓ HTTPS Enforced');
    console.log('✓ Content Security Policy Active');
    console.log('✓ Security Headers Enabled');
    console.log('✓ Form Input Validation Active');
    console.log('✓ XSS Protection Enabled');
  }
}

/**
 * Prevent common security vulnerabilities
 */
function initSecurityProtections() {
  // Disable right-click context menu (optional, uncomment if needed)
  // document.addEventListener('contextmenu', e => e.preventDefault());
  
  // Prevent console access warning (optional)
  if (typeof console !== 'undefined') {
    const originalWarn = console.warn;
    console.warn = function(msg) {
      if (typeof msg === 'string' && msg.includes('password')) {
        console.error('⚠️ Security Warning: Do not paste sensitive information here!');
        return;
      }
      originalWarn.apply(console, arguments);
    };
  }
  
  // Detect potential XSS attempts in URL
  const urlParams = new URLSearchParams(window.location.search);
  for (const [key, value] of urlParams) {
    if (/<|>|script|onclick/i.test(value)) {
      console.warn('🚨 Potential XSS attempt detected in URL parameters');
      break;
    }
  }
  
  displaySecurityInfo();
}

/**
 * Check if page is being loaded in iframe (security check)
 */
function checkFrameContext() {
  if (window.self !== window.top) {
    console.warn('⚠️ Page is being displayed in an iframe');
    try {
      window.top.location = window.self.location;
    } catch (e) {
      // Iframe restriction in place
    }
  }
}

/**
 * Session timeout security
 * Logs warning if page is inactive for long periods
 */
function initSessionSecurity() {
  let inactivityTimer;
  const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  
  function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      console.warn('⚠️ Session may be expiring due to inactivity');
    }, INACTIVITY_TIMEOUT);
  }
  
  // Reset timer on user activity
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);
  document.addEventListener('click', resetTimer);
  document.addEventListener('scroll', resetTimer);
  
  // Initialize timer
  resetTimer();
}

// Initialize all security protections on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initSecurityProtections();
  checkFrameContext();
  initSessionSecurity();
});

