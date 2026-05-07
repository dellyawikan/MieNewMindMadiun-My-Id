/* ============================================
   MENU DATA & MODAL HANDLER (menu.js)
   ============================================
   
   File Struktur:
   
   1. DOM Elements (Lines 1-10)
      - Menu tabs (.data-menu-tab)
      - Menu grid (#menu-grid)
      - Menu modal (#menu-modal)
      - Modal content elements (title, desc, price, image, cta)
   
   2. Menu Data Structure (Lines 12-150+)
      - menuDataByLang object
      - Contains Indonesian (id) & English (en) menus
      - Categories: mie, dimsum, minuman
      - Each item has: name, description, price, image, badge, featured
   
   3. Features:
      - Multi-language menu lookup
      - Tab-based category filtering (Mie, Dimsum, Minuman)
      - Modal popup for item details
      - Best seller highlighting
      - WhatsApp order button
      - Responsive menu grid
   
   Usage:
      - Menu data loaded into #menu-grid by script.js
      - Tab click switches between categories
      - Item click opens modal with details
      - Modal has WhatsApp order link
   
   ============================================ */

/* ============================================
   DOM Elements & Variables
   ============================================ */
const menuTabs = document.querySelectorAll('[data-menu-tab]');
const menuGrid = document.querySelector('#menu-grid');
const menuModal = document.querySelector('#menu-modal');
const menuModalTitle = document.querySelector('#menu-modal-title');
const menuModalDesc = document.querySelector('#menu-modal-desc');
const menuModalPrice = document.querySelector('#menu-modal-price');
const menuModalImage = document.querySelector('#menu-modal-image');
const menuModalCta = document.querySelector('#menu-modal-cta');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentLanguage = localStorage.getItem('mie-lang') || 'id';

/**
 * Resolve asset path based on current page location
 * If page is in pages/restaurant/, prepend ../../
 * Otherwise use assets/ directly
 */
function getAssetPath(path) {
  const pathname = window.location.pathname;
  if (pathname.includes('/pages/restaurant/')) {
    return '../../' + path;
  }
  return path;
}

/* ============================================
   MENU DATA STRUCTURE
   Lines 49+
   
   Object: menuDataByLang
   - Contains menu data for all languages
   - Keys: id (Indonesian), en (English)
   
   Menu Categories:
   1. Mie (Noodles)
      - Mie Presiden (mild)
      - Mie Gubernur (medium)
      - Mie Bupati (spicy - best seller)
   
   2. Dimsum (Appetizers)
      - Udang Rambutan
      - Pangsit Goreng
      - Lumpia Udang
      - Udang Keju
      - Dimsum
   
   3. Minuman (Drinks)
      - Es Menteri
      - Es Camat
      - Various bubble tea & cold drinks
   
   Item Structure:
   {
     name: 'Item Name',
     description: 'Item description',
     price: 'Rp X.XXX',
     image: 'assets/image.png',
     badge: 'Label',  // Optional
     featured: true   // Optional - for best sellers
   }
   
   Usage: menuDataByLang[language].category
   Example: menuDataByLang.id.mie
   ============================================ */

const menuDataByLang = {
  id: {
  mie: [
    {
      name: 'Mie Presiden',
      description:
        'Mie dengan rasa gurih dengan cita rasa nikmat di setiap suapan. Pilihan tepat untuk kamu yang ingin menikmati mie tanpa pedas.',
      price: 'Rp8.500',
      badge: 'Tanpa Pedas',
      image: 'assets/products/noodles/mie-presiden.png'
    },
    {
      name: 'Mie Gubernur',
      description:
        'Mie dengan perpaduan rasa gurih dan sensasi pedas yang bisa dipilih sesuai selera, tersedia pilihan level pedas 1-8.',
      price: 'Rp13.500 - 14.500',
      badge: 'Lv 1-8 🌶️',
      image: 'assets/products/noodles/mie-gubernur.png'
    },
    {
      name: 'Mie Bupati',
      description:
        'Mie dengan perpaduan rasa manis dan pedas yang lebih kuat, menghadirkan sensasi rasa yang khas, tersedia level pedas 1-8.',
      price: 'Rp13.500 - 14.500',
      badge: 'Best Seller ⭐',
      featured: true,
      image: 'assets/products/noodles/mie-bupati.png'
    }
  ],
  dimsum: [
    {
      name: 'Udang Rambutan',
      description: 'Camilan udang dengan balutan mie renyah di luar dan isian udang yang gurih di dalam.',
      price: 'Rp12.500',
      image: 'assets/products/beverages/udang-rambutan.png'
    },
    {
      name: 'Pangsit Goreng',
      description: 'Pangsit dengan kulit renyah dan isian daging ayam gurih yang cocok jadi camilan.',
      price: 'Rp13.500',
      image: 'assets/products/appetizers/pangsit-goreng.png'
    },
    {
      name: 'Lumpia Udang',
      description: 'Lumpia dengan isian udang yang lembut dan gurih.',
      price: 'Rp12.500',
      image: 'assets/products/appetizers/lumpia-udang.png'
    },
    {
      name: 'Udang Keju',
      description: 'Perpaduan udang dengan keju lumer dengan balutan kulit renyah.',
      price: 'Rp12.500',
      image: 'assets/products/beverages/udang-keju.png'
    },
    {
      name: 'Siomay Ayam',
      description: 'Dimsum yang lembut dan gurih yang nikmat, cocok menjadi pelengkap hidangan mie.',
      price: 'Rp12.500',
      image: 'assets/products/appetizers/dimsum.png'
    }
  ],
  minuman: [
    {
      name: 'Es Menteri',
      description:
        'Minuman dengan campuran nata de coco, jelly bubble, jelly mie, dan potongan buah segar. Segar, manis, dan cocok menemani hidangan pedas.',
      price: 'Rp12.500',
      badge: 'Favorit',
      image: 'assets/products/beverages/es-menteri.png'
    },
    {
      name: 'Es Lurah',
      description: 'Minuman segar dengan perpaduan nata de coco, jelly bubble, dan potongan buah. Ukuran standar dengan toping lebih sedikit dari Es Menteri.',
      price: 'Rp11.500',
      image: 'assets/products/beverages/es-menteri.png'
    },
    {
      name: 'Es Camat',
      description: 'Minuman segar dengan perpaduan jelly bubble, jelly mie, dan jeruk nipis yang menyegarkan.',
      price: 'Rp12.500',
      image: 'assets/products/beverages/es-camat.png'
    },
    {
      name: 'Es Milo',
      description: 'Minuman cokelat dingin favorit.',
      price: 'Rp11.500',
      image: 'assets/products/beverages/milo.png'
    },
    { name: 'Es Matcha', description: 'Minuman matcha creamy dan segar.', price: 'Rp11.500', image: 'assets/products/beverages/matcha.png' },
    { name: 'Es Red Velvet', description: 'Perpaduan red velvet manis lembut.', price: 'Rp11.500', image: 'assets/products/desserts/red-velvet-coklat.png' },
    { name: 'Es Taro', description: 'Rasa taro creamy favorit semua usia.', price: 'Rp11.500', image: 'assets/products/beverages/taro.png' },
    { name: 'Es Mangga', description: 'Minuman mangga segar dan manis.', price: 'Rp11.500', image: 'assets/products/beverages/mangga.png' },
    { name: 'Es Coklat', description: 'Coklat dingin dengan rasa pekat.', price: 'Rp11.500', image: 'assets/products/desserts/coklat.png' },
    { name: 'Es Strawberry', description: 'Rasa stroberi segar dan ringan.', price: 'Rp11.500', image: 'assets/products/beverages/strawberry.png' },
    { name: 'Es Teh Antek', description: 'Teh manis dingin peneman makan.', price: 'Rp8.500', image: 'assets/products/beverages/teh.png' },
    { name: 'Air Mineral', description: 'Air mineral dingin.', price: 'Rp7.500', image: 'assets/products/beverages/air.png' }
  ]
  },
  en: {
    mie: [
      {
        name: 'Mie Presiden',
        description:
          'Savory noodles with delicious flavor in every bite. A perfect choice for those who want noodles without spiciness.',
        price: 'Rp8.500',
        badge: 'Non-Spicy',
        image: 'assets/products/noodles/mie-presiden.png'
      },
      {
        name: 'Mie Gubernur',
        description:
          'Noodles with a savory taste and chili sensation you can choose, available in spice levels 1-8.',
        price: 'Rp13.500 - Rp14.500',
        badge: 'Lv 1-8 🌶️',
        image: 'assets/products/noodles/mie-gubernur.png'
      },
      {
        name: 'Mie Bupati',
        description:
          'Noodles with a stronger sweet and spicy blend, delivering a distinctive flavor with spice levels 1-8.',
        price: 'Rp13.500 - Rp14.500',
        badge: 'Best Seller ⭐',
        featured: true,
        image: 'assets/products/noodles/mie-bupati.png'
      }
    ],
    dimsum: [
      {
        name: 'Udang Rambutan',
        description: 'Shrimp snack with crispy noodle coating and savory shrimp filling.',
        price: 'Rp12.500',
        image: 'assets/products/beverages/udang-rambutan.png'
      },
      {
        name: 'Pangsit Goreng',
        description: 'Crispy wonton with savory chicken filling, perfect as a snack.',
        price: 'Rp13.500',
        image: 'assets/products/appetizers/pangsit-goreng.png'
      },
      {
        name: 'Lumpia Udang',
        description: 'Spring rolls with soft and savory shrimp filling.',
        price: 'Rp12.500',
        image: 'assets/products/appetizers/lumpia-udang.png'
      },
      {
        name: 'Udang Keju',
        description: 'A blend of shrimp and melted cheese in a crispy wrapper.',
        price: 'Rp12.500',
        image: 'assets/products/beverages/udang-keju.png'
      },
      {
        name: 'Chicken Dimsum',
        description: 'Soft and savory dimsum, perfect as a complement to noodle dishes.',
        price: 'Rp12.500',
        image: 'assets/products/appetizers/dimsum.png'
      }
    ],
    minuman: [
      {
        name: 'Es Menteri',
        description:
          'A drink mix with nata de coco, bubble jelly, noodle jelly, and fresh fruit pieces. Fresh, sweet, and perfect with spicy food.',
        price: 'Rp12.500',
        badge: 'Favorite',
        image: 'assets/products/beverages/es-menteri.png'
      },
      {
        name: 'Es Lurah',
        description: 'Refreshing drink with nata de coco, bubble jelly, and fresh fruit pieces. Standard size with less toppings than Es Menteri.',
        price: 'Rp11.500',
        image: 'assets/products/beverages/es-menteri.png'
      },
      {
        name: 'Es Camat',
        description: 'Refreshing drink with bubble jelly, noodle jelly, and fresh lime.',
        price: 'Rp12.500',
        image: 'assets/products/beverages/es-camat.png'
      },
      {
        name: 'Es Milo',
        description: 'Favorite iced chocolate drink.',
        price: 'Rp11.500',
        image: 'assets/products/beverages/milo.png'
      },
      { name: 'Es Matcha', description: 'Creamy and refreshing matcha drink.', price: 'Rp11.500', image: 'assets/products/beverages/matcha.png' },
      { name: 'Es Red Velvet', description: 'Soft and sweet red velvet blend.', price: 'Rp11.500', image: 'assets/products/desserts/red-velvet-coklat.png' },
      { name: 'Es Taro', description: 'Creamy taro favorite for all ages.', price: 'Rp11.500', image: 'assets/products/beverages/taro.png' },
      { name: 'Es Mangga', description: 'Fresh and sweet mango drink.', price: 'Rp11.500', image: 'assets/products/beverages/mangga.png' },
      { name: 'Es Coklat', description: 'Iced chocolate with rich flavor.', price: 'Rp11.500', image: 'assets/products/desserts/coklat.png' },
      { name: 'Es Strawberry', description: 'Light and refreshing strawberry flavor.', price: 'Rp11.500', image: 'assets/products/beverages/strawberry.png' },
      { name: 'Es Teh Antek', description: 'Sweet iced tea for your meal.', price: 'Rp8.500', image: 'assets/products/beverages/teh.png' },
      { name: 'Air Mineral', description: 'Chilled mineral water.', price: 'Rp7.500', image: 'assets/products/beverages/air.png' }
    ]
  }
};

let currentMenuCategory = 'mie';
let modalCategory = null;
let modalIndex = null;

/* ============================================
   MENU FUNCTIONS
   Lines 278+
   
   Main Functions:
   
   1. getMenuData()
      - Returns menu data for current language
      - Fallback to Indonesian if language not found
      - Used by all other functions
   
   2. renderMenuCards(category)
      - Renders menu items in grid for given category
      - Creates HTML cards for each menu item
      - Adds click handlers to cards
      - Categories: mie, dimsum, minuman
   
   3. switchCategory(category, triggerButton)
      - Switch between menu tabs
      - Update active state on buttons
      - Re-render menu grid with new category
      - Called by tab click events
   
   4. openMenuModal(category, index)
      - Open modal with item details
      - Populate modal with: name, description, price, image
      - Add WhatsApp order link
      - Store category and index for later use
   
   5. closeMenuModal()
      - Close modal wrapper
      - Hide modal panel
      - Remove event listeners
   
   6. setMenuLanguage(lang)
      - Update current language
      - Re-render menu with new language
      - Keep same category active
   
   ============================================ */

const getMenuData = () => menuDataByLang[currentLanguage] || menuDataByLang.id;

const renderMenuCards = (category) => {
  const menuData = getMenuData();
  if (!menuGrid || !menuData[category]) return;

  currentMenuCategory = category;
  menuGrid.innerHTML = menuData[category]
    .map(
      (item, index) => `
      <article class="menu-item ${item.featured ? 'is-featured' : ''}" data-menu-index="${index}" data-menu-category="${category}" style="--i:${index}">
        <div class="menu-item-media">
          <img class="menu-item-image" src="${getAssetPath(item.image)}" alt="${item.name}">
          ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
        </div>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <strong>${item.price}</strong>
      </article>
    `
    )
    .join('');
};

const switchCategory = (category, triggerButton) => {
  const menuData = getMenuData();
  if (!category || !menuData[category] || !menuGrid) return;

  menuTabs.forEach((btn) => {
    const active = btn === triggerButton;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });

  if (prefersReducedMotion) {
    renderMenuCards(category);
    return;
  }

  menuGrid.classList.add('is-switching');
  window.setTimeout(() => {
    renderMenuCards(category);
    window.requestAnimationFrame(() => {
      menuGrid.classList.remove('is-switching');
    });
  }, 170);
};

const openMenuModal = (category, index) => {
  const menuData = getMenuData();
  if (!menuModal || !menuModalTitle || !menuModalDesc || !menuModalPrice || !menuModalImage || !menuData[category]) return;

  const selectedItem = menuData[category][index];
  if (!selectedItem) return;

  menuModalTitle.textContent = selectedItem.name;
  menuModalDesc.textContent = selectedItem.description;
  menuModalPrice.innerHTML = `${selectedItem.price}<br><span style="font-size: 0.75rem; color: rgba(255, 255, 255, 0.6); font-style: italic;">*harga belum termasuk pajak</span>`;
  menuModalImage.src = getAssetPath(selectedItem.image);
  menuModalImage.alt = selectedItem.name;
  modalCategory = category;
  modalIndex = index;
  if (menuModalCta) {
    const text = currentLanguage === 'en'
      ? encodeURIComponent(`Hi, I want to order ${selectedItem.name}`)
      : encodeURIComponent(`Halo, saya mau pesan ${selectedItem.name}`);
    menuModalCta.textContent = currentLanguage === 'en' ? 'ORDER NOW →' : 'PESAN SEKARANG →';
    menuModalCta.href = `https://wa.me/6285604030473?text=${text}`;
  }

  menuModal.classList.add('is-open');
  menuModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeMenuModal = () => {
  if (!menuModal) return;
  if (prefersReducedMotion) {
    menuModal.classList.remove('is-open');
    menuModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    return;
  }

  menuModal.classList.remove('is-open');
  modalCategory = null;
  modalIndex = null;
  window.setTimeout(() => {
    menuModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }, 280);
};

const setMenuLanguage = (lang) => {
  currentLanguage = lang === 'en' ? 'en' : 'id';
  renderMenuCards(currentMenuCategory);
  if (menuModal && menuModal.classList.contains('is-open') && modalCategory !== null && modalIndex !== null) {
    openMenuModal(modalCategory, modalIndex);
  }
};

if (menuTabs.length) {
  menuTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-menu-tab');
      switchCategory(category, tab);
    });

    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();

      const nextIndex = event.key === 'ArrowRight'
        ? (index + 1) % menuTabs.length
        : (index - 1 + menuTabs.length) % menuTabs.length;

      const nextTab = menuTabs[nextIndex];
      const category = nextTab.getAttribute('data-menu-tab');
      nextTab.focus();
      switchCategory(category, nextTab);
    });
  });

  renderMenuCards(currentMenuCategory);
}

if (menuGrid) {
  menuGrid.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const card = target.closest('.menu-item');
    if (!card) return;

    const category = card.getAttribute('data-menu-category');
    const index = Number(card.getAttribute('data-menu-index'));
    if (!category || Number.isNaN(index)) return;

    openMenuModal(category, index);
  });
}

  /* ============================================
   MENU MODAL NAVIGATION FUNCTIONS
   ============================================ */

function navigateMenuModal(direction) {
  if (modalCategory === null || modalIndex === null) return;

  const menuData = getMenuData();
  const categoryItems = menuData[modalCategory];
  if (!categoryItems) return;

  let newIndex = modalIndex + (direction === 'next' ? 1 : -1);

  // Wrap around: go to last item if navigating backward from first, or first if forward from last
  if (newIndex < 0) {
    newIndex = categoryItems.length - 1;
  } else if (newIndex >= categoryItems.length) {
    newIndex = 0;
  }

  // Update modal with new item
  openMenuModal(modalCategory, newIndex);
}

function updateNavigationButtonState() {
  const prevBtn = document.querySelector('#menu-modal-nav-prev');
  const nextBtn = document.querySelector('#menu-modal-nav-next');

  if (!prevBtn || !nextBtn || modalCategory === null || modalIndex === null) return;

  const menuData = getMenuData();
  const categoryItems = menuData[modalCategory];
  if (!categoryItems) return;

  // Enable/disable buttons based on position (optional - users can wrap around)
  // Currently allowing wrap-around navigation, so buttons always enabled
  prevBtn.disabled = false;
  nextBtn.disabled = false;
};

if (menuModal) 
  menuModal.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.matches('[data-menu-close]')) closeMenuModal();

    // Handle navigation button clicks
    if (target.matches('#menu-modal-nav-prev')) {
    navigateMenuModal('prev');
    } else if (target.matches('#menu-modal-nav-next')) {
    navigateMenuModal('next');
   }
  });

window.addEventListener('mie:language-change', (event) => {
   if (event.key === 'Escape') {
    closeMenuModal();
    } else if (event.key === 'ArrowLeft' && menuModal.classList.contains('is-open')) {
    event.preventDefault();
    navigateMenuModal('prev');
    } else if (event.key === 'ArrowRight' && menuModal.classList.contains('is-open')) {
    event.preventDefault();
    navigateMenuModal('next');
    }
  });

   // Update button state when modal is opened
  const originalOpenMenuModal = openMenuModal;
  openMenuModal = function(category, index) {
    originalOpenMenuModal.call(this, category, index);
    window.requestAnimationFrame(() => {
      updateNavigationButtonState();
    });
  };