/* ===== ManageProductsPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { CATEGORIES } from '../utils/constants.js';
import { showModal, closeModal } from '../components/Modal.js';
import { showToast } from '../components/Toast.js';

// Local pagination, category and search filter state
let currentPage = 1;
let currentSearch = '';
let currentCategory = 'all';
const ITEMS_PER_PAGE = 8; // high density

/**
 * Render the ManageProductsPage.
 * @returns {string} HTML string
 */
export function ManageProductsPage() {
  // Guard: Only admins allowed
  if (!store.isAdmin) {
    return `
      <div style="padding:var(--space-12) 0;text-align:center;">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--error);">security</span>
        <h1 class="page-title" style="margin-block-start:var(--space-4);">Access Denied</h1>
        <p style="color:var(--color-text-muted);margin-block-end:var(--space-6);">You must be logged in as an administrator to view this inventory manager.</p>
        <a href="#/login" class="btn btn-primary">Login as Admin</a>
      </div>
    `;
  }

  // Filter products based on search and category
  let filtered = [...store.products];

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch) {
    const query = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  // Stats calculation
  const totalProducts = store.products.length;
  const inStockCount = store.products.filter(p => p.stockStatus === 'in_stock').length;
  const lowStockCount = store.products.filter(p => p.stockStatus === 'low' || p.stockStatus === 'out_of_stock').length;

  // Pagination bounds
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // Categories helper mapping
  const categoryLabels = {};
  CATEGORIES.forEach(c => {
    categoryLabels[c.id] = c.label;
  });

  return `
    <div class="manage-products-container" style="padding-block-start: var(--space-2);">
      <!-- Breadcrumbs -->
      <div style="font-size:0.75rem;color:var(--color-text-muted);margin-block-end:var(--space-4);font-family:var(--font-mono);line-height:1;">
        <a href="#/admin/orders" style="color:inherit;text-decoration:none;">Inventory</a>
        <span style="margin: 0 4px;">/</span>
        <span style="color:var(--color-text);font-weight:600;">Manage Products</span>
      </div>

      <!-- Header Section -->
      <div class="page-header" style="display:flex;align-items:flex-end;justify-content:space-between;margin-block-end:var(--space-6);flex-wrap:wrap;gap:var(--space-4);">
        <div>
          <h1 class="page-title" style="margin:0;font-family:var(--font-heading);font-size:var(--headline-lg-size);font-weight:700;color:var(--primary);">Manage Products</h1>
          <p style="color:var(--color-text-muted);font-size:var(--body-sm-size);margin-block-start:2px;margin-block-end:0;">
            Update and monitor your surgical and diagnostic equipment catalog.
          </p>
        </div>
        <button class="btn" id="add-product-btn" style="background-color:var(--secondary);color:#fff;border:none;border-radius:var(--radius);font-weight:600;display:inline-flex;align-items:center;gap:6px;min-block-size:2.5rem;padding:0 var(--space-4);">
          <span class="material-symbols-outlined" style="font-size:1.2rem;">add</span>
          Add New Product
        </button>
      </div>

      <!-- Summary Stats Cards -->
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-6);margin-block-end:var(--space-6);flex-wrap:wrap;">
        <!-- Card 1: Total -->
        <div class="card" style="display:flex;align-items:center;gap:var(--space-4);padding:var(--space-4) var(--space-5);background-color:var(--surface-container-lowest);border:1px solid var(--color-border);border-radius:var(--radius-lg);">
          <div style="background-color:var(--primary-container);color:#fff;display:flex;align-items:center;justify-content:center;inline-size:44px;block-size:44px;border-radius:var(--radius-md);">
            <span class="material-symbols-outlined" style="font-size:1.35rem;">inventory_2</span>
          </div>
          <div>
            <div style="font-size:0.75rem;color:var(--color-text-muted);font-weight:500;">Total Products</div>
            <div style="font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:var(--color-text);margin-block-start:2px;line-height:1;">${totalProducts.toLocaleString()}</div>
          </div>
        </div>

        <!-- Card 2: In Stock -->
        <div class="card" style="display:flex;align-items:center;gap:var(--space-4);padding:var(--space-4) var(--space-5);background-color:var(--surface-container-lowest);border:1px solid var(--color-border);border-radius:var(--radius-lg);">
          <div style="background-color:var(--secondary-container);color:var(--on-secondary-container);display:flex;align-items:center;justify-content:center;inline-size:44px;block-size:44px;border-radius:var(--radius-md);">
            <span class="material-symbols-outlined" style="font-size:1.35rem;color:var(--secondary);">check_circle</span>
          </div>
          <div>
            <div style="font-size:0.75rem;color:var(--color-text-muted);font-weight:500;">In Stock</div>
            <div style="font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:var(--secondary);margin-block-start:2px;line-height:1;">${inStockCount.toLocaleString()}</div>
          </div>
        </div>

        <!-- Card 3: Low/Out of Stock -->
        <div class="card" style="display:flex;align-items:center;gap:var(--space-4);padding:var(--space-4) var(--space-5);background-color:var(--surface-container-lowest);border:1px solid var(--color-border);border-radius:var(--radius-lg);">
          <div style="background-color:var(--error-container);color:var(--on-error-container);display:flex;align-items:center;justify-content:center;inline-size:44px;block-size:44px;border-radius:var(--radius-md);">
            <span class="material-symbols-outlined" style="font-size:1.35rem;color:var(--error);">warning</span>
          </div>
          <div>
            <div style="font-size:0.75rem;color:var(--color-text-muted);font-weight:500;">Low Stock</div>
            <div style="font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:var(--error);margin-block-start:2px;line-height:1;">${lowStockCount.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <!-- Filters & Local Search Bar -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-block-end:var(--space-4);gap:var(--space-4);flex-wrap:wrap;">
        <div style="display:flex;gap:var(--space-2);overflow-x:auto;" id="admin-category-tabs">
          ${CATEGORIES.map(cat => `
            <button class="btn btn-secondary btn-sm ${currentCategory === cat.id ? 'is-active-btn' : ''}" data-category="${cat.id}" style="border-radius:var(--radius-full);padding:3px 12px;font-size:0.75rem;font-weight:500;min-block-size:auto;height:28px;${currentCategory === cat.id ? 'background-color:var(--primary);color:#fff;border-color:var(--primary);' : 'background:#fff;'}">
              ${cat.label}
            </button>
          `).join('')}
        </div>

        <div style="position:relative;max-inline-size:320px;width:100%;">
          <span class="material-symbols-outlined" style="position:absolute;inset-inline-start:var(--space-3);inset-block-start:50%;transform:translateY(-50%);color:var(--color-text-light);font-size:1.1rem;pointer-events:none;">search</span>
          <input
            type="search"
            class="input"
            id="admin-search-input"
            placeholder="Search SKU or name..."
            value="${currentSearch}"
            style="padding-inline-start:var(--space-9);inline-size:100%;min-block-size:2.1rem;height:34px;font-size:0.875rem;background:#fff;border:1px solid var(--color-border);"
          />
        </div>
      </div>

      <!-- Products Data Table -->
      <div style="border:1px solid var(--color-border);border-radius:var(--radius-lg);overflow:clip;background:var(--color-card);margin-block-end:var(--space-6);">
        <table class="data-table admin-table" style="inline-size:100%;border-collapse:collapse;border:none;">
          <thead>
            <tr style="background-color:var(--primary-container);border-block-end:1px solid var(--color-border);">
              <th style="color:#fff;font-family:var(--font-heading);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--space-3) var(--space-4);text-align:start;inline-size:60px;">Image</th>
              <th style="color:#fff;font-family:var(--font-heading);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--space-3) var(--space-4);text-align:start;">Product Name</th>
              <th style="color:#fff;font-family:var(--font-heading);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--space-3) var(--space-4);text-align:start;inline-size:150px;">Category</th>
              <th style="color:#fff;font-family:var(--font-heading);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--space-3) var(--space-4);text-align:start;inline-size:140px;">SKU</th>
              <th style="color:#fff;font-family:var(--font-heading);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--space-3) var(--space-4);text-align:start;inline-size:140px;">Status</th>
              <th style="color:#fff;font-family:var(--font-heading);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--space-3) var(--space-4);text-align:end;inline-size:110px;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${paginated.length > 0 ? paginated.map((p, idx) => `
              <tr style="background-color: ${idx % 2 === 1 ? 'var(--surface-container-low)' : 'var(--surface-container-lowest)'}; border-block-end: 1px solid var(--color-border); transition: background-color var(--transition-fast);">
                <!-- Image Thumbnail -->
                <td style="padding:var(--space-3) var(--space-4);vertical-align:middle;">
                  <div style="inline-size:42px;block-size:42px;border-radius:var(--radius);border:1px solid var(--color-border);overflow:clip;display:flex;align-items:center;justify-content:center;background:#fff;">
                    ${p.imageUrl 
                      ? `<img src="${p.imageUrl}" alt="${p.name}" style="inline-size:100%;block-size:100%;object-fit:cover;" />`
                      : `<span class="material-symbols-outlined" style="font-size:1.25rem;color:var(--color-text-light);">medical_services</span>`
                    }
                  </div>
                </td>
                
                <!-- Product Name & Subtitle -->
                <td style="padding:var(--space-3) var(--space-4);vertical-align:middle;">
                  <div style="font-family:var(--font-heading);font-weight:700;color:var(--primary);font-size:0.925rem;">${p.name}</div>
                  <div style="font-size:0.75rem;color:var(--color-text-muted);margin-block-start:1px;">${p.description ? p.description.slice(0, 50) + (p.description.length > 50 ? '…' : '') : 'No description provided.'}</div>
                </td>

                <!-- Category -->
                <td style="padding:var(--space-3) var(--space-4);vertical-align:middle;color:var(--color-text-muted);font-size:0.875rem;">
                  ${categoryLabels[p.category] || p.category}
                </td>

                <!-- SKU -->
                <td style="padding:var(--space-3) var(--space-4);vertical-align:middle;font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text);">
                  ${p.sku}
                </td>

                <!-- Status Badge -->
                <td style="padding:var(--space-3) var(--space-4);vertical-align:middle;">
                  ${getStatusHtml(p.stockStatus)}
                </td>

                <!-- Action Triggers -->
                <td style="padding:var(--space-3) var(--space-4);vertical-align:middle;text-align:end;">
                  <div style="display:inline-flex;gap:var(--space-2);">
                    <button class="btn btn-ghost edit-product-row-btn" data-id="${p.id}" aria-label="Edit product" style="inline-size:32px;block-size:32px;min-block-size:auto;padding:0;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-md);">
                      <span class="material-symbols-outlined" style="font-size:1.15rem;color:var(--color-text-muted);">edit</span>
                    </button>
                    <button class="btn btn-ghost delete-product-row-btn" data-id="${p.id}" aria-label="Delete product" style="inline-size:32px;block-size:32px;min-block-size:auto;padding:0;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-md);color:var(--error);">
                      <span class="material-symbols-outlined" style="font-size:1.15rem;">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('') : `
              <tr>
                <td colspan="6" style="padding:var(--space-12) 0;text-align:center;color:var(--color-text-muted);">
                  <div style="display:flex;flex-direction:column;align-items:center;gap:var(--space-3);">
                    <span class="material-symbols-outlined" style="font-size:3rem;color:var(--color-text-light);">search_off</span>
                    <div style="font-weight:600;font-size:1rem;">No matching products found</div>
                    <p style="font-size:0.825rem;margin:0;max-inline-size:260px;">Try refining your filters or search terms.</p>
                  </div>
                </td>
              </tr>
            `}
          </tbody>
        </table>

        <!-- Table Footer Pagination Bar -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3) var(--space-4);background:var(--surface-container-low);border-block-start:1px solid var(--color-border);font-size:0.825rem;color:var(--color-text-muted);">
          <div>
            Showing <strong style="color:var(--color-text);">${totalItems > 0 ? startIdx + 1 : 0}</strong> to <strong style="color:var(--color-text);">${Math.min(startIdx + ITEMS_PER_PAGE, totalItems)}</strong> of <strong style="color:var(--color-text);">${totalItems}</strong> products
          </div>
          
          <div style="display:flex;align-items:center;gap:2px;">
            <button class="btn btn-secondary pagination-arrow-btn" id="admin-pagination-prev" ${currentPage === 1 ? 'disabled' : ''} style="min-block-size:auto;height:28px;padding:0 var(--space-2);display:flex;align-items:center;justify-content:center;border:none;background:transparent;cursor:pointer;">
              <span class="material-symbols-outlined" style="font-size:1.25rem;">chevron_left</span>
            </button>
            
            ${renderPageNumbers(currentPage, totalPages)}

            <button class="btn btn-secondary pagination-arrow-btn" id="admin-pagination-next" ${currentPage === totalPages ? 'disabled' : ''} style="min-block-size:auto;height:28px;padding:0 var(--space-2);display:flex;align-items:center;justify-content:center;border:none;background:transparent;cursor:pointer;">
              <span class="material-symbols-outlined" style="font-size:1.25rem;">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Return status dots and labels.
 */
function getStatusHtml(stockStatus) {
  switch (stockStatus) {
    case 'in_stock':
      return `<span style="display:inline-flex;align-items:center;gap:6px;color:var(--secondary);font-weight:700;font-size:0.7rem;"><span style="display:inline-block;inline-size:6px;block-size:6px;border-radius:50%;background-color:var(--secondary);"></span>IN STOCK</span>`;
    case 'low':
      return `<span style="display:inline-flex;align-items:center;gap:6px;color:#d97706;font-weight:700;font-size:0.7rem;"><span style="display:inline-block;inline-size:6px;block-size:6px;border-radius:50%;background-color:#d97706;"></span>LOW STOCK</span>`;
    case 'backorder':
      return `<span style="display:inline-flex;align-items:center;gap:6px;color:#2563eb;font-weight:700;font-size:0.7rem;"><span style="display:inline-block;inline-size:6px;block-size:6px;border-radius:50%;background-color:#2563eb;"></span>ON ORDER</span>`;
    default:
      return `<span style="display:inline-flex;align-items:center;gap:6px;color:var(--error);font-weight:700;font-size:0.7rem;"><span style="display:inline-block;inline-size:6px;block-size:6px;border-radius:50%;background-color:var(--error);"></span>OUT OF STOCK</span>`;
  }
}

/**
 * Generates pagination page number nodes.
 */
function renderPageNumbers(current, total) {
  let html = '';
  // Simple slider pagination layout
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      html += `<button class="btn btn-secondary admin-page-num-btn ${current === i ? 'is-active-num' : ''}" data-page="${i}" style="min-block-size:auto;inline-size:26px;height:26px;display:flex;align-items:center;justify-content:center;padding:0;font-size:0.75rem;font-weight:600;border-radius:var(--radius-sm);border:none;${current === i ? 'background-color:var(--primary);color:#fff;' : 'background:transparent;color:var(--color-text-muted);'}">${i}</button>`;
    } else if (i === current - 2 || i === current + 2) {
      html += `<span style="color:var(--color-text-light);padding:0 2px;">…</span>`;
    }
  }
  return html;
}

/**
 * Bind page-level event listeners.
 */
export function bindManageProductsEvents() {
  const container = document.querySelector('.manage-products-container');
  if (!container) return;

  // Search input change debounced
  const searchInput = document.getElementById('admin-search-input');
  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        currentSearch = searchInput.value.trim();
        currentPage = 1;
        router._resolve();
      }, 250);
    });
    
    // Focus search input and retain selection cursor if search is active
    if (currentSearch) {
      searchInput.focus();
      searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    }
  }

  // Category selection click
  const tabs = document.getElementById('admin-category-tabs');
  if (tabs) {
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (btn) {
        currentCategory = btn.dataset.category;
        currentPage = 1;
        router._resolve();
      }
    });
  }

  // Pagination navigation clicks
  const prevBtn = document.getElementById('admin-pagination-prev');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        router._resolve();
      }
    });
  }

  const nextBtn = document.getElementById('admin-pagination-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentPage++;
      router._resolve();
    });
  }

  container.addEventListener('click', (e) => {
    // Page number clicks
    const pageNumBtn = e.target.closest('.admin-page-num-btn');
    if (pageNumBtn) {
      currentPage = parseInt(pageNumBtn.dataset.page, 10);
      router._resolve();
      return;
    }

    // Row Edit Click
    const editBtn = e.target.closest('.edit-product-row-btn');
    if (editBtn) {
      const id = editBtn.dataset.id;
      const product = store.products.find(p => p.id === id);
      if (product) {
        openAddEditModal(product);
      }
      return;
    }

    // Row Delete Click
    const deleteBtn = e.target.closest('.delete-product-row-btn');
    if (deleteBtn) {
      const id = deleteBtn.dataset.id;
      const product = store.products.find(p => p.id === id);
      if (product) {
        openDeleteModal(product);
      }
      return;
    }
  });

  // Top header "Add New Product" click
  const addBtn = document.getElementById('add-product-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      openAddEditModal();
    });
  }
}

/**
 * Open the Add/Edit Product Modal Dialog.
 * @param {object|null} product - Pass product to edit, or null to create new
 */
function openAddEditModal(product = null) {
  const isEdit = !!product;
  const title = isEdit ? 'Edit Equipment Details' : 'Add New Inventory Item';
  
  // Set up specifications list
  let specsHtml = '';
  if (product && product.specs) {
    Object.entries(product.specs).forEach(([key, val]) => {
      specsHtml += createSpecRowHtml(key, val);
    });
  } else {
    // Add one default empty row
    specsHtml += createSpecRowHtml('', '');
  }

  // Set up additional images list
  let imagesHtml = '';
  if (product && product.images) {
    product.images.forEach(imgUrl => {
      imagesHtml += createImageRowHtml(imgUrl);
    });
  }

  const content = `
    <form id="product-form" style="display:flex; flex-direction:column; gap:var(--space-4);">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4);">
        <div style="display:flex; flex-direction:column; gap:var(--space-2);">
          <label for="prod-name" style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">Product Name *</label>
          <input type="text" id="prod-name" class="input" placeholder="e.g. Micro-Surgical Forceps" required value="${product?.name || ''}" />
        </div>
        <div style="display:flex; flex-direction:column; gap:var(--space-2);">
          <label for="prod-sku" style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">SKU Code *</label>
          <input type="text" id="prod-sku" class="input" placeholder="e.g. VK-SUR-992" required value="${product?.sku || ''}" ${isEdit ? 'readonly style="background-color:var(--surface-container-low);color:var(--color-text-muted);"' : ''} />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4);">
        <div style="display:flex; flex-direction:column; gap:var(--space-2);">
          <label for="prod-category" style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">Category *</label>
          <input id="prod-category" class="input" required placeholder="Enter category" style="width:100%; padding-inline-end: var(--space-8);" value="${product?.category || ''}" />
        </div>
        <div style="display:flex; flex-direction:column; gap:var(--space-2);">
          <label for="prod-status" style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">Stock Status *</label>
          <select id="prod-status" class="input" required style="width:100%; padding-inline-end: var(--space-8);">
            <option value="in_stock" ${product?.stockStatus === 'in_stock' ? 'selected' : ''}>In Stock</option>
            <option value="low" ${product?.stockStatus === 'low' ? 'selected' : ''}>Low Stock</option>
            <option value="backorder" ${product?.stockStatus === 'backorder' ? 'selected' : ''}>On Order</option>
            <option value="out_of_stock" ${product?.stockStatus === 'out_of_stock' ? 'selected' : ''}>Out of Stock</option>
          </select>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr; gap:var(--space-4);">
        <div style="display:flex; flex-direction:column; gap:var(--space-2);">
          <label for="prod-image" style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">Image URL</label>
          <input type="text" id="prod-image" class="input" placeholder="e.g. /images/surgical_scalpel.png" value="${product?.imageUrl || ''}" />
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:var(--space-2);">
        <label for="prod-desc" style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">Description *</label>
        <textarea id="prod-desc" class="input" style="min-block-size:80px; resize:vertical;" placeholder="Enter product specifications, usage, material details..." required>${product?.description || ''}</textarea>
      </div>

      <div style="display:flex; flex-direction:column; gap:var(--space-2);">
        <label style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">Technical Specifications</label>
        <div id="specs-input-container" style="display:flex; flex-direction:column; gap:var(--space-2);">
          ${specsHtml}
        </div>
        <button type="button" class="btn btn-secondary btn-sm" id="add-modal-spec-btn" style="align-self:flex-start; margin-block-start:var(--space-1); border-color:var(--color-border); background:#fff; min-block-size:1.85rem; height:28px;">
          <span class="material-symbols-outlined" style="font-size:1rem;">add</span>
          Add Specification
        </button>
      </div>

      <div style="display:flex; flex-direction:column; gap:var(--space-2);">
        <label style="font-size:var(--body-sm-size); font-weight:600; color:var(--color-text);">Additional Product Images</label>
        <div id="images-input-container" style="display:flex; flex-direction:column; gap:var(--space-2);">
          ${imagesHtml}
        </div>
        <button type="button" class="btn btn-secondary btn-sm" id="add-modal-image-btn" style="align-self:flex-start; margin-block-start:var(--space-1); border-color:var(--color-border); background:#fff; min-block-size:1.85rem; height:28px;">
          <span class="material-symbols-outlined" style="font-size:1rem;">add</span>
          Add Image URL
        </button>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:var(--space-3); border-block-start:1px solid var(--color-border); padding-block-start:var(--space-4); margin-block-start:var(--space-2);">
        <button type="button" class="btn btn-secondary" id="modal-form-cancel" style="min-block-size:2.25rem;">Cancel</button>
        <button type="submit" class="btn btn-primary" style="min-block-size:2.25rem; background-color:var(--primary);">Save Product</button>
      </div>
    </form>
  `;

  showModal({
    title,
    content,
    actions: [] // We handle save and cancel buttons inside the form
  });

  // Modal spec manipulation
  const specsContainer = document.getElementById('specs-input-container');
  const addSpecBtn = document.getElementById('add-modal-spec-btn');
  if (addSpecBtn && specsContainer) {
    addSpecBtn.addEventListener('click', () => {
      specsContainer.insertAdjacentHTML('beforeend', createSpecRowHtml('', ''));
    });
  }

  // Delete spec row delegation
  specsContainer?.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-spec-row-btn');
    if (deleteBtn) {
      const row = deleteBtn.closest('.spec-row');
      row?.remove();
    }
  });

  // Modal images manipulation
  const imagesContainer = document.getElementById('images-input-container');
  const addImageBtn = document.getElementById('add-modal-image-btn');
  if (addImageBtn && imagesContainer) {
    addImageBtn.addEventListener('click', () => {
      imagesContainer.insertAdjacentHTML('beforeend', createImageRowHtml(''));
    });
  }

  // Delete image row delegation
  imagesContainer?.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-image-row-btn');
    if (deleteBtn) {
      const row = deleteBtn.closest('.image-row');
      row?.remove();
    }
  });

  // Cancel Button inside form
  document.getElementById('modal-form-cancel')?.addEventListener('click', () => {
    closeModal();
  });

  // Form Submit
  const form = document.getElementById('product-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Read form data
      const name = document.getElementById('prod-name').value.trim();
      const sku = document.getElementById('prod-sku').value.trim();
      const category = document.getElementById('prod-category').value;
      const stockStatus = document.getElementById('prod-status').value;
      const imageUrl = document.getElementById('prod-image').value.trim();
      const description = document.getElementById('prod-desc').value.trim();

      // Gather specs key-value pairs
      const specs = {};
      const rows = specsContainer?.querySelectorAll('.spec-row') || [];
      rows.forEach(row => {
        const key = row.querySelector('.spec-key').value.trim();
        const val = row.querySelector('.spec-value').value.trim();
        if (key && val) {
          specs[key] = val;
        }
      });

      // Gather additional image URLs
      const images = [];
      const imageRows = imagesContainer?.querySelectorAll('.additional-image-url') || [];
      imageRows.forEach(input => {
        const val = input.value.trim();
        if (val) {
          images.push(val);
        }
      });

      const productPayload = {
        name,
        sku,
        category,
        price: 0,
        stockStatus,
        imageUrl,
        description,
        specs: Object.keys(specs).length > 0 ? specs : null,
        images: images.length > 0 ? images : null
      };

      if (isEdit) {
        // Edit Mode
        store.updateProduct(product.id, productPayload);
        showToast(`Product "${name}" successfully updated`, 'success');
      } else {
        // Add Mode
        // Check uniqueness of SKU
        const exists = store.products.some(p => p.sku.toLowerCase() === sku.toLowerCase() || p.id.toLowerCase() === sku.toLowerCase());
        if (exists) {
          showToast(`A product with SKU "${sku}" already exists.`, 'error');
          return;
        }

        productPayload.id = sku; // Use SKU as ID for mock safety
        store.addProduct(productPayload);
        showToast(`Product "${name}" successfully added to inventory`, 'success');
      }

      closeModal();
      router._resolve(); // re-render layout list
    });
  }
}

/**
 * Open confirmation modal dialog for deleting a product.
 * @param {object} product
 */
function openDeleteModal(product) {
  const title = 'Delete Inventory Item';
  const content = `
    <div style="display:flex;flex-direction:column;gap:var(--space-3);padding-block-end:var(--space-2);">
      <p style="margin:0;font-size:var(--body-md-size);line-height:1.5;">Are you sure you want to delete <strong style="color:var(--primary);">${product.name}</strong> from the catalog?</p>
      <p style="margin:0;font-size:var(--body-sm-size);color:var(--error);font-weight:500;background:var(--color-error-bg);padding:var(--space-2) var(--space-3);border-radius:var(--radius);border:1px solid var(--error-container);">
        <span style="font-weight:700;">Warning:</span> This action is permanent and cannot be undone. Product data will be permanently cleared from the active database.
      </p>
    </div>
  `;

  showModal({
    title,
    content,
    actions: [
      {
        label: 'Cancel',
        className: 'btn btn-secondary',
        onClick: () => {} // Auto closes
      },
      {
        label: 'Permanently Delete',
        className: 'btn btn-danger',
        onClick: () => {
          store.deleteProduct(product.id);
          showToast(`Product "${product.name}" deleted successfully`, 'success');
          router._resolve();
        }
      }
    ]
  });
}

/**
 * Return key-value input fields HTML row.
 */
function createSpecRowHtml(key, val) {
  return `
    <div class="spec-row" style="display:flex; gap:var(--space-2); align-items:center;">
      <input type="text" class="input spec-key" placeholder="Key (e.g. Sterilization)" style="flex:1; min-block-size:2rem; height:32px; font-size:0.825rem; padding:0 8px; background:#fff;" value="${key}" />
      <input type="text" class="input spec-value" placeholder="Value (e.g. Autoclavable)" style="flex:1; min-block-size:2rem; height:32px; font-size:0.825rem; padding:0 8px; background:#fff;" value="${val}" />
      <button type="button" class="btn btn-ghost delete-spec-row-btn" style="min-block-size:2rem; height:32px; padding:0; inline-size:32px; color:var(--error); display:flex; align-items:center; justify-content:center;">
        <span class="material-symbols-outlined" style="font-size:1.15rem;">delete</span>
      </button>
    </div>
  `;
}

/**
 * Return key-value input fields HTML row for additional images.
 */
function createImageRowHtml(url) {
  return `
    <div class="image-row" style="display:flex; gap:var(--space-2); align-items:center;">
      <input type="text" class="input additional-image-url" placeholder="e.g. /images/surgical_scalpel_side.png" style="flex:1; min-block-size:2rem; height:32px; font-size:0.825rem; padding:0 8px; background:#fff;" value="${url}" />
      <button type="button" class="btn btn-ghost delete-image-row-btn" style="min-block-size:2rem; height:32px; padding:0; inline-size:32px; color:var(--error); display:flex; align-items:center; justify-content:center;">
        <span class="material-symbols-outlined" style="font-size:1.15rem;">delete</span>
      </button>
    </div>
  `;
}
