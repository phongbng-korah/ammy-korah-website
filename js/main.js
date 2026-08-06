/* ============================================================
   AMMY / KORAH — main.js
   ============================================================ */

// ── Brand logos (thay nhãn chữ bằng logo ảnh) ───────────────
const BRAND_LOGOS = {
  KORAH: 'assets/logo/korah.png',
  ROY: 'assets/logo/roy.png',
  USAMMY: 'assets/logo/usammy.png'
};

function brandBadgeHTML(brand) {
  const logo = BRAND_LOGOS[brand];
  return logo
    ? `<span class="badge badge--brand badge--brand-logo"><img src="${logo}" alt="${brand}" loading="lazy"></span>`
    : `<span class="badge badge--brand">${brand}</span>`;
}

function brandLabelHTML(brand) {
  const logo = BRAND_LOGOS[brand];
  return logo
    ? `<div class="product-detail__brand product-detail__brand--logo"><img src="${logo}" alt="${brand}" loading="lazy"></div>`
    : `<div class="product-detail__brand">${brand}</div>`;
}

// ── Navigation ─────────────────────────────────────────────
(function initNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (!hamburger || !mobileNav) return;

  function closeMobileAccordions() {
    mobileNav.querySelectorAll('.nav__mobile-toggle.open').forEach(btn => {
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.closest('.nav__mobile-group').querySelector('.nav__mobile-sub').classList.remove('open');
    });
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    if (!mobileNav.classList.contains('open')) closeMobileAccordions();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header') && !e.target.closest('.nav__mobile')) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
      closeMobileAccordions();
    }
  });

  // Accordion toggle for mobile submenu groups (Công nghệ / Sản phẩm / Hỗ trợ)
  mobileNav.querySelectorAll('.nav__mobile-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const group = btn.closest('.nav__mobile-group');
      const sub = group.querySelector('.nav__mobile-sub');
      const isOpen = btn.classList.contains('open');
      closeMobileAccordions();
      if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        sub.classList.add('open');
      }
    });
  });

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__dropdown-link, .nav__mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && path && path !== '/' && href.includes(path)) {
      link.classList.add('active');
    }
  });
})();

// ── Accordion ──────────────────────────────────────────────
function initAccordions() {
  document.querySelectorAll('.accordion__header').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');

      // Close all in same accordion
      const parent = btn.closest('.accordion');
      parent.querySelectorAll('.accordion__header.open').forEach(openBtn => {
        openBtn.classList.remove('open');
        openBtn.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        btn.classList.add('open');
        body.classList.add('open');
      }
    });
  });
}

// ── Tabs ───────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      const container = btn.closest('[data-tabs]') || btn.closest('.product-detail__tabs')?.parentElement;

      btn.closest('.product-detail__tabs, [role="tablist"]')
        .querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      (container || document).querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
      });
    });
  });
}

// ── Product Filter ─────────────────────────────────────────
function initProductFilter(products) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('product-grid');
  if (!filterBtns.length || !grid) return;

  let activeFilter = 'all';

  function render(filter) {
    const visible = products.filter(p => {
      if (!p.visible) return false;
      if (filter === 'all') return true;
      if (filter === 'discontinued') return p.status === 'discontinued';
      return p.brand === filter;
    });

    grid.innerHTML = visible.length
      ? visible.map(productCardHTML).join('')
      : '<div class="no-results"><p>Không có sản phẩm trong danh mục này.</p></div>';
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      render(activeFilter);
    });
  });

  render(activeFilter);
}

// ── Product Card HTML ───────────────────────────────────────
function productCardHTML(p) {
  const statusLabel = (typeof STATUS_LABELS !== 'undefined' && STATUS_LABELS[p.status])
    ? STATUS_LABELS[p.status] : { text: p.status, cls: '' };

  const techChips = (p.tech || []).map(t => {
    const label = (typeof TECH_TAGS !== 'undefined' && TECH_TAGS[t]) ? TECH_TAGS[t] : t;
    return `<span class="tech-chip">${label}</span>`;
  }).join('');

  const imgPlaceholder = `<div class="card__image-placeholder"><span>Ảnh sản phẩm đang cập nhật</span></div>`;
  const imgContent = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">`
    : imgPlaceholder;

  return `
  <a class="card product-card" href="product-detail.html?id=${p.id}">
    <div class="card__image">
      ${imgContent}
      <div class="product-card__badges">
        ${brandBadgeHTML(p.brand)}
        <span class="badge ${statusLabel.cls}">${statusLabel.text}</span>
      </div>
    </div>
    <div class="card__body">
      <div class="product-card__name">${p.name}</div>
      <div class="product-card__tagline">${p.tagline}</div>
      ${techChips ? `<div class="product-card__tech">${techChips}</div>` : ''}
    </div>
    <div class="card__footer">
      <span class="text-muted" style="font-size:0.8125rem">Xem chi tiết</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="#C8A96E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </a>`;
}

// ── Product Detail Page ─────────────────────────────────────
function initProductDetail() {
  const mainEl = document.getElementById('product-detail-main');
  if (!mainEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id || typeof PRODUCTS === 'undefined') {
    showNotFound(mainEl);
    return;
  }

  const product = PRODUCTS.find(p => p.id === id);
  if (!product || !product.visible) {
    showNotFound(mainEl);
    return;
  }

  document.title = `${product.name} — AMMY / KORAH`;

  const statusLabel = (typeof STATUS_LABELS !== 'undefined' && STATUS_LABELS[product.status])
    ? STATUS_LABELS[product.status] : { text: product.status, cls: '' };

  const specsHTML = Object.entries(product.specs || {})
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join('');

  const techChips = (product.tech || []).map(t => {
    const label = (typeof TECH_TAGS !== 'undefined' && TECH_TAGS[t]) ? TECH_TAGS[t] : t;
    return `<span class="tech-chip">${label}</span>`;
  }).join('');

  const manualsHTML = product.manuals && product.manuals.length
    ? product.manuals.map(mm => {
        const m = typeof mm === 'string' ? mm : mm.file;
        const name = typeof mm === 'string' ? mm.split('/').pop() : mm.title;
        return `<a class="btn btn--ghost btn--sm" href="${m}" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          ${name}
        </a>`;
      }).join('')
    : '<p class="text-muted" style="font-size:0.875rem">Tài liệu kỹ thuật sẽ được cập nhật sau.</p>';

  const detailImgPlaceholder = `<div class="card__image-placeholder"><span>Ảnh sản phẩm đang cập nhật</span></div>`;
  const datasheetImgs = product.datasheetImages ? Object.values(product.datasheetImages) : [];
  const galleryImgs = [product.image, ...(product.gallery || []), ...datasheetImgs].filter(Boolean);
  const imgContent = product.image
    ? `<img id="pd-main-img" class="pd-zoomable" src="${product.image}" alt="${product.name}" loading="lazy" title="Nhấn để phóng to" onerror="this.style.display='none'">`
    : detailImgPlaceholder;
  const galleryHTML = galleryImgs.length > 1
    ? `<div class="pd-gallery">${galleryImgs.map((g, i) =>
        `<img src="${g}" alt="${product.name} ${i+1}" loading="lazy" class="pd-gallery__thumb${i===0?' active':''}" onclick="document.getElementById('pd-main-img').src='${g}';document.querySelectorAll('.pd-gallery__thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">`
      ).join('')}</div>`
    : '';

  mainEl.innerHTML = `
    <a class="product-detail__back" href="products.html">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Quay lại danh sách sản phẩm
    </a>

    <div class="breadcrumb">
      <a href="index.html">Trang chủ</a>
      <span class="breadcrumb__sep">/</span>
      <a href="products.html">Sản phẩm</a>
      <span class="breadcrumb__sep">/</span>
      <span>${product.name}</span>
    </div>

    <div class="product-detail__layout">
      <div class="product-detail__media">
        <div class="product-detail__image-wrap">${imgContent}</div>
        ${galleryHTML}
      </div>

      <div class="product-detail__info">
        ${brandLabelHTML(product.brand)}
        <h1 class="product-detail__name">${product.name}</h1>
        <p class="product-detail__tagline">${product.tagline}</p>
        ${product.price ? `<div class="product-detail__price">Giá niêm yết: <strong>${product.price}</strong>${product.warranty ? ` <span class="product-detail__warranty">${product.warranty}</span>` : ''}</div>` : ''}

        <div class="product-detail__badges">
          ${brandBadgeHTML(product.brand)}
          <span class="badge ${statusLabel.cls}">${statusLabel.text}</span>
          ${techChips ? `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${techChips}</div>` : ''}
        </div>

        <div class="product-detail__tabs" role="tablist">
          <button class="tab-btn active" data-tab="tab-specs" role="tab">Thông số kỹ thuật</button>
          <button class="tab-btn" data-tab="tab-desc" role="tab">Mô tả</button>
          <button class="tab-btn" data-tab="tab-docs" role="tab">Tài liệu</button>
        </div>

        <div id="tab-specs" class="tab-pane active">
          ${specsHTML
            ? `<table class="spec-table"><tbody>${specsHTML}</tbody></table>`
            : '<p class="text-muted">Thông số kỹ thuật đang cập nhật.</p>'}
        </div>

        <div id="tab-desc" class="tab-pane">
          <p style="color:var(--ivory-dim);line-height:1.8">${product.description}</p>
          ${product.features && product.features.length
            ? `<div style="margin-top:20px"><div style="font-family:var(--font-head);font-weight:700;color:var(--gold);font-size:0.8125rem;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px">Điểm nổi bật</div>
               <ul style="padding-left:20px;color:var(--ivory-dim)">${product.features.map(x => `<li style="margin-bottom:8px">${x}</li>`).join('')}</ul></div>`
            : ''}
          ${product.applications && product.applications.length
            ? `<ul style="margin-top:16px;padding-left:20px;color:var(--ivory-dim)">
                ${product.applications.map(a => `<li style="margin-bottom:8px">${a}</li>`).join('')}
               </ul>`
            : ''}
        </div>

        <div id="tab-docs" class="tab-pane">
          <div style="display:flex;flex-direction:column;gap:12px">${manualsHTML}</div>
        </div>
      </div>
    </div>`;

  updateProductSEO(product);
  initTabs();
}

function updateProductSEO(product) {
  const BASE = 'https://ammy.com.vn';
  const url = `${BASE}/product-detail.html?id=${product.id}`;

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', url);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', url);

  const desc = product.description || product.tagline || '';
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', desc);
  ['og:title', 'og:description', 'twitter:title', 'twitter:description'].forEach(prop => {
    const el = document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`);
    if (!el) return;
    if (prop.endsWith('title')) el.setAttribute('content', `${product.name} — AMMY / KORAH`);
    else el.setAttribute('content', desc);
  });
  if (product.image) {
    const absImg = `${BASE}/${product.image}`;
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', absImg);
    const twImg = document.querySelector('meta[name="twitter:image"]');
    if (twImg) twImg.setAttribute('content', absImg);
  }

  document.getElementById('ld-product')?.remove();
  const productLd = document.createElement('script');
  productLd.type = 'application/ld+json';
  productLd.id = 'ld-product';
  productLd.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': desc,
    'image': product.image ? absUrl(BASE, product.image) : undefined,
    'brand': { '@type': 'Brand', 'name': product.brand || 'KORAH' },
    'manufacturer': {
      '@type': 'Organization',
      'name': 'CÔNG TY TNHH SX & TM ĐIỆN TỬ AMMY',
      'legalName': 'AMMY ELECTRONICS CO., LTD',
      'url': BASE
    },
    'url': url
  });
  document.head.appendChild(productLd);

  document.getElementById('ld-breadcrumb')?.remove();
  const breadcrumbLd = document.createElement('script');
  breadcrumbLd.type = 'application/ld+json';
  breadcrumbLd.id = 'ld-breadcrumb';
  breadcrumbLd.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Trang chủ', 'item': `${BASE}/` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Sản phẩm', 'item': `${BASE}/products.html` },
      { '@type': 'ListItem', 'position': 3, 'name': product.name, 'item': url }
    ]
  });
  document.head.appendChild(breadcrumbLd);
}

function absUrl(base, path) {
  return path.startsWith('http') ? path : `${base}/${path}`;
}

function showNotFound(el) {
  el.innerHTML = `
    <div class="not-found">
      <svg class="not-found__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        <line x1="11" y1="8" x2="11" y2="12"/><line x1="11" y1="16" x2="11.01" y2="16"/>
      </svg>
      <h2 style="margin-bottom:12px">Không tìm thấy sản phẩm</h2>
      <p class="text-muted">Sản phẩm bạn tìm không tồn tại hoặc đã bị ẩn.</p>
      <a class="btn btn--gold mt-24" href="products.html">Xem tất cả sản phẩm</a>
    </div>`;
}

// ── FAQ Accordion (render từ data/faq.js) ───────────────────
function renderFaqAccordion() {
  const container = document.getElementById('faqAccordionContainer');
  if (!container || typeof FAQ_DATA === 'undefined') return;
  container.innerHTML = FAQ_DATA.map(group => `
    <h3 style="font-size:1.1rem;color:var(--gold);margin:32px 0 12px;font-weight:700">${group.category}</h3>
    <div class="accordion">
      ${group.items.map(item => `
        <div class="accordion__item">
          <button class="accordion__header">
            ${item.q}
            <svg class="accordion__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="accordion__body">
            <div class="accordion__content">${item.a}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ── Init on DOMContentLoaded ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderFaqAccordion();
  initAccordions();
  initTabs();

  // Products list page
  if (document.getElementById('product-grid') && typeof PRODUCTS !== 'undefined') {
    initProductFilter(PRODUCTS);
  }

  // Product detail page
  initProductDetail();
});

// ── Hero Carousel (V2) ──────────────────────────────────────
(function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.hc__slide');
  const dotsWrap = carousel.querySelector('.hc__dots');
  const prevBtn = carousel.querySelector('.hc__arrow--prev');
  const nextBtn = carousel.querySelector('.hc__arrow--next');
  if (slides.length < 2) return;

  let current = 0;
  let timer = null;
  const AUTOPLAY_MS = 6000;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hc__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Banner ' + (i + 1));
    dot.addEventListener('click', () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.hc__dot');

  function goTo(index, manual) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    if (manual) restart();
  }

  function next() { goTo(current + 1); }

  function restart() {
    if (reduceMotion) return;
    clearInterval(timer);
    timer = setInterval(next, AUTOPLAY_MS);
  }

  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1, true));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1, true));

  // Vuốt trên mobile
  let touchX = null;
  carousel.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1), true);
    touchX = null;
  }, { passive: true });

  restart();
})();


// ── Nút liên hệ nổi: Zalo + Gọi điện (V2.6) ────────────────
(function initFloatingContact() {
  const wrap = document.createElement('div');
  wrap.className = 'float-contact';
  wrap.innerHTML = `
    <a class="float-contact__btn float-contact__btn--zalo" href="https://zalo.me/0932779386" target="_blank" rel="noopener" aria-label="Chat Zalo">
      <span class="float-contact__zalo-text">Zalo</span>
    </a>
    <a class="float-contact__btn float-contact__btn--call" href="tel:0932779386" aria-label="Gọi điện 0932 779 386">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    </a>`;
  document.body.appendChild(wrap);
})();

// ── Thông tin liên hệ đồng bộ trong footer (V2.6) ──────────
(function injectFooterContact() {
  const footer = document.querySelector('.site-footer .container, footer .container');
  if (!footer || footer.querySelector('.footer-contact-line')) return;
  const div = document.createElement('div');
  div.className = 'footer-contact-line';
  div.innerHTML = `VP: 131C Lâm Văn Bền, P. Tân Thuận Tây, Q.7, TP.HCM · Xưởng: 300/34/64 Nguyễn Văn Linh, Q.7 · ĐT: <a href="tel:0903851252">0903 851 252</a> / <a href="tel:0932779386">0932 779 386</a> · <a href="mailto:info@ammy.com.vn">info@ammy.com.vn</a> · MST: 0304493237`;
  footer.appendChild(div);
})();

// ── Lightbox phóng to + kéo di chuyển + zoom (V3.9) ──────────
(function initLightbox() {
  // Tạo lightbox 1 lần
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox__close" aria-label="Đóng">×</button>
    <div class="lightbox__hint">Cuộn để phóng to · Kéo để di chuyển · Nhấn đúp để đặt lại</div>
    <div class="lightbox__stage">
      <img class="lightbox__img" src="" alt="">
    </div>
    <div class="lightbox__controls">
      <button data-act="out" aria-label="Thu nhỏ">−</button>
      <button data-act="reset" aria-label="Đặt lại">↺</button>
      <button data-act="in" aria-label="Phóng to">+</button>
    </div>`;
  document.body.appendChild(lb);

  const img = lb.querySelector('.lightbox__img');
  const stage = lb.querySelector('.lightbox__stage');
  let scale = 1, tx = 0, ty = 0, dragging = false, sx = 0, sy = 0;

  function apply() {
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }
  function reset() { scale = 1; tx = 0; ty = 0; apply(); }

  function open(src) {
    img.src = src; reset();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Mở khi click ảnh chính (delegation vì ảnh render động)
  document.addEventListener('click', e => {
    const z = e.target.closest('.pd-zoomable');
    if (z && z.src) open(z.src);
  });

  lb.querySelector('.lightbox__close').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb || e.target === stage) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Zoom bằng cuộn
  stage.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1.15 : 1/1.15;
    scale = Math.min(3, Math.max(1, scale * delta));
    if (scale === 1) { tx = 0; ty = 0; }
    apply();
  }, { passive: false });

  // Kéo di chuyển
  stage.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    dragging = true; sx = e.clientX - tx; sy = e.clientY - ty;
    img.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    tx = e.clientX - sx; ty = e.clientY - sy; apply();
  });
  window.addEventListener('mouseup', () => { dragging = false; img.style.cursor = 'grab'; });

  // Nhấn đúp đặt lại
  img.addEventListener('dblclick', reset);

  // Nút điều khiển
  lb.querySelector('.lightbox__controls').addEventListener('click', e => {
    const act = e.target.dataset.act;
    if (act === "in") scale = Math.min(3, scale * 1.3);
    else if (act === 'out') { scale = Math.max(1, scale / 1.3); if (scale === 1){tx=0;ty=0;} }
    else if (act === 'reset') return reset();
    apply();
  });

  // Cảm ứng: pinch zoom + kéo (mobile)
  let pinchStart = 0, pinchScale = 1, touchTx = 0, touchTy = 0, tStartX = 0, tStartY = 0;
  stage.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      pinchStart = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      pinchScale = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      tStartX = e.touches[0].clientX - tx; tStartY = e.touches[0].clientY - ty;
    }
  }, { passive: true });
  stage.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      scale = Math.min(3, Math.max(1, pinchScale * d / pinchStart));
      apply();
    } else if (e.touches.length === 1 && scale > 1) {
      tx = e.touches[0].clientX - tStartX; ty = e.touches[0].clientY - tStartY; apply();
    }
  }, { passive: true });
})();
