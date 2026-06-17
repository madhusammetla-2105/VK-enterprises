/* ===== ProductsPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { CATEGORIES, ITEMS_PER_PAGE } from '../utils/constants.js';
import { ProductCard } from '../components/ProductCard.js';
import { CategoryTabs } from '../components/CategoryTabs.js';
import { Pagination } from '../components/Pagination.js';
import { showToast } from '../components/Toast.js';

// Local state for filters to keep rendering lightning-fast and responsive
let currentCategory = 'all';
let currentSearch = '';
let currentPage = 1;

/**
 * Render the ProductsPage (catalog).
 * @returns {string} HTML string
 */
export function ProductsPage() {
  // Read category from hash if specified, e.g. #/products?category=surgical
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const queryStr = hash.split('?')[1];
    const params = new URLSearchParams(queryStr);
    if (params.has('category')) {
      currentCategory = params.get('category');
    }
    if (params.has('q')) {
      currentSearch = params.get('q');
    }
  }

  // Filter products based on category and search query
  let filtered = store.products;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch) {
    const query = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }

  // Compute category counts
  const categoryCounts = { all: store.products.length };
  CATEGORIES.forEach(cat => {
    if (cat.id !== 'all') {
      categoryCounts[cat.id] = store.products.filter(p => p.category === cat.id).length;
    }
  });

  // Paginate products
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return `
    <div class="products-page-container" style="padding-block-start:var(--space-2);">
      <!-- Breadcrumb indicator as shown in screenshot -->
      <div style="font-size:0.75rem;color:var(--color-text-muted);margin-block-end:var(--space-2);font-family:var(--font-mono);line-height:1;margin-inline-start:2px;">
        ›
      </div>

      <div class="page-header" style="align-items: flex-end; margin-block-end: var(--space-4);">
        <div>
          <h1 class="page-title">Products</h1>
        </div>
        
        <div style="display:flex;align-items:center;gap:var(--space-4);">
          ${currentSearch ? `
            <div style="font-size:var(--body-sm-size);color:var(--color-text-muted);">
              Search results for "<strong style="color:var(--color-text);">${currentSearch}</strong>"
              <button class="btn btn-ghost btn-sm" id="clear-search-btn" style="color:var(--error);padding:0 var(--space-2);min-block-size:auto;">Clear</button>
            </div>
          ` : ''}

          <button class="btn btn-secondary" style="display:inline-flex;align-items:center;gap:6px;min-block-size:2.25rem;padding:0 var(--space-4);border-radius:var(--radius-sm);font-size:0.875rem;font-weight:500;border:1px solid var(--color-border);background:#fff;">
            <span class="material-symbols-outlined" style="font-size:1.15rem;">filter_list</span>
            Filter
          </button>
        </div>
      </div>

      <!-- Local search input displayed only on Products page -->
      <div class="products-search-wrapper" style="margin-block-end: var(--space-6); max-inline-size: 600px; position: relative;">
        <span class="material-symbols-outlined" style="position: absolute; inset-inline-start: var(--space-3); inset-block-start: 50%; transform: translateY(-50%); color: var(--color-text-light); font-size: 1.25rem; pointer-events: none;">search</span>
        <input
          type="search"
          class="input"
          id="products-search-input"
          placeholder="Search medical equipment, SKUs, or categories..."
          autocomplete="off"
          value="${currentSearch}"
          style="padding-inline-start: var(--space-10); inline-size: 100%; background-color: var(--surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius);"
        />
      </div>

      <!-- Category Filter Tabs -->
      ${CategoryTabs(currentCategory, categoryCounts)}

      <!-- Products Grid -->
      ${paginated.length > 0 ? `
        <div class="products-grid">
          ${paginated.map(product => ProductCard(product)).join('')}
        </div>
      ` : `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--space-16) 0;gap:var(--space-4);text-align:center;">
          <span class="material-symbols-outlined" style="font-size:4rem;color:var(--color-text-muted);">inventory</span>
          <div style="font-family:var(--font-heading);font-size:1.25rem;font-weight:600;">No Products Found</div>
          <p style="color:var(--color-text-muted);max-width:320px;">We couldn't find any products matching your selection. Try clearing filters or searching for something else.</p>
          <button class="btn btn-primary" id="reset-catalog-btn">Reset Catalog</button>
        </div>
      `}

      <!-- Pagination -->
      ${Pagination(currentPage, totalItems)}
    </div>
  `;
}

/**
 * Handle external search trigger from topbar.
 * @param {string} query
 */
export function handleExternalSearch(query) {
  currentSearch = query;
  currentPage = 1;
  // Re-resolve route to update grid
  router._resolve();
}

/**
 * Bind ProductsPage events.
 */
export function bindProductsEvents() {
  const container = document.querySelector('.products-page-container');
  if (!container) return;

  // Category Tab Selection
  const tabs = document.getElementById('category-tabs');
  if (tabs) {
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab');
      if (btn) {
        currentCategory = btn.dataset.category;
        currentPage = 1;
        
        // Update URL hash without fully breaking router
        const currentHash = window.location.hash.split('?')[0];
        window.history.pushState(null, null, `${currentHash}?category=${currentCategory}${currentSearch ? `&q=${currentSearch}` : ''}`);
        
        router._resolve();
      }
    });
  }

  // Pagination Clicks
  const pagination = document.getElementById('pagination');
  if (pagination) {
    pagination.addEventListener('click', (e) => {
      const btn = e.target.closest('.pagination-btn');
      if (btn && !btn.disabled) {
        currentPage = parseInt(btn.dataset.page, 10);
        router._resolve();
      }
    });
  }

  // Local Search Input
  const localSearchInput = document.getElementById('products-search-input');
  if (localSearchInput) {
    let timer;
    localSearchInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        currentSearch = localSearchInput.value.trim();
        currentPage = 1;
        
        // Update URL hash without fully breaking router
        const currentHash = window.location.hash.split('?')[0];
        window.history.pushState(null, null, `${currentHash}?category=${currentCategory}${currentSearch ? `&q=${encodeURIComponent(currentSearch)}` : ''}`);
        
        router._resolve();
      }, 300);
    });

    // If there is an active search, restore cursor to end of input on render
    if (currentSearch) {
      localSearchInput.focus();
      localSearchInput.setSelectionRange(localSearchInput.value.length, localSearchInput.value.length);
    }
  }

  // Clear Search
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentSearch = '';
      if (localSearchInput) localSearchInput.value = '';
      
      const currentHash = window.location.hash.split('?')[0];
      window.history.pushState(null, null, `${currentHash}?category=${currentCategory}`);
      router._resolve();
    });
  }

  // Reset Catalog
  const resetBtn = document.getElementById('reset-catalog-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSearch = '';
      currentPage = 1;
      if (localSearchInput) localSearchInput.value = '';
      
      router.navigate('#/products');
    });
  }

  // Handle clicks on products (Add to Cart vs. Card details navigation)
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-quote-btn');
    if (btn) {
      e.preventDefault();
      
      // Guard: Only logged in users can add to cart
      if (!store.isLoggedIn) {
        showToast('Please log in.', 'info');
        router.navigate('#/login');
        return;
      }

      const productId = btn.dataset.productId;
      const product = store.products.find(p => p.id === productId);

      if (product) {
        if (product.stockStatus === 'out_of_stock') {
          showToast('This item is currently out of stock.', 'error');
          return;
        }

        store.addToCart(product, 1);
        showToast(`${product.name} added to cart`, 'success');
        
        // Re-render sidebar/topbar to update item count badge
        router._resolve();
      }
      return;
    }

    // Navigating to detail page when clicking the card itself (not the Add to Cart button)
    const card = e.target.closest('.product-card');
    if (card) {
      const productId = card.dataset.productId;
      router.navigate(`#/products/${productId}`);
    }
  });
}
