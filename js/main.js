/* ============================================================
   AMMY / KORAH — main.js
   ============================================================ */

// ── Navigation ─────────────────────────────────────────────
(function initNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
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

  const imgContent = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="card__image-placeholder">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
           <rect x="3" y="3" width="18" height="18" rx="2"/>
           <circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
         <span>Ảnh đang cập nhật</span>
       </div>`;

  return `
  <a class="card product-card" href="product-detail.html?id=${p.id}">
    <div class="card__image">
      ${imgContent}
      <div class="product-card__badges">
        <span class="badge badge--brand">${p.brand}</span>
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
    ? product.manuals.map(m => {
        const name = m.split('/').pop();
        return `<a class="btn btn--ghost btn--sm" href="${m}" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          ${name}
        </a>`;
      }).join('')
    : '<p class="text-muted" style="font-size:0.875rem">Tài liệu kỹ thuật sẽ được cập nhật sau.</p>';

  const imgContent = product.image
    ? `<img src="${product.image}" alt="${product.name}">`
    : `<div class="card__image-placeholder" style="flex-direction:column;gap:16px;color:#555">
         <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
           <rect x="3" y="3" width="18" height="18" rx="2"/>
           <circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
         <span style="font-size:0.875rem;letter-spacing:0.05em">Ảnh đang cập nhật</span>
       </div>`;

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
      <div class="product-detail__image-wrap">${imgContent}</div>

      <div class="product-detail__info">
        <div class="product-detail__brand">${product.brand}</div>
        <h1 class="product-detail__name">${product.name}</h1>
        <p class="product-detail__tagline">${product.tagline}</p>

        <div class="product-detail__badges">
          <span class="badge badge--brand">${product.brand}</span>
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

  initTabs();
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

// ── Init on DOMContentLoaded ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initTabs();

  // Products list page
  if (document.getElementById('product-grid') && typeof PRODUCTS !== 'undefined') {
    initProductFilter(PRODUCTS);
  }

  // Product detail page
  initProductDetail();
});
