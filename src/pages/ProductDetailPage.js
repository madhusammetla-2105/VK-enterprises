/* ===== ProductDetailPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { formatCurrency } from '../utils/helpers.js';
import { StockBadge } from '../components/StatusBadge.js';
import { QuantityCounter, bindQuantityCounterEvents } from '../components/QuantityCounter.js';
import { showToast } from '../components/Toast.js';

let selectedQty = 1;

/**
 * Render the ProductDetailPage.
 * @param {object} params - Route params, e.g. { id }
 * @returns {string} HTML string
 */
export function ProductDetailPage(params) {
  const productId = params.id;
  const product = store.products.find(p => p.id === productId);

  if (!product) {
    return `
      <div style="padding:var(--space-12) 0;text-align:center;">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--error);">error_outline</span>
        <h1 style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;margin-block-start:var(--space-4);">Product Not Found</h1>
        <p style="color:var(--color-text-muted);margin-block-end:var(--space-6);">The product ID you are looking for does not exist in our catalog.</p>
        <a href="#/products" class="btn btn-primary">Return to Catalog</a>
      </div>
    `;
  }

  // Generate a gradient placeholder based on category
  const gradients = {
    surgical:    'linear-gradient(135deg, #e8e8e8 0%, #c8c8c8 100%)',
    diagnostics: 'linear-gradient(135deg, #e0e8f0 0%, #b8c8d8 100%)',
    general:     'linear-gradient(135deg, #e8e8e0 0%, #c8c8b8 100%)',
    emergency:   'linear-gradient(135deg, #f0e0e0 0%, #d8b8b8 100%)',
    consumables: 'linear-gradient(135deg, #e0f0e8 0%, #b8d8c8 100%)',
    lab:         'linear-gradient(135deg, #e8e0f0 0%, #c8b8d8 100%)',
  };

  const bgGradient = gradients[product.category] || gradients.general;
  const allImages = [product.imageUrl, ...(product.images || [])].filter(Boolean);

  return `
    <div class="product-detail-container">
      <div style="margin-block-end:var(--space-6);">
        <a href="#/products" class="btn btn-ghost btn-sm" style="display:inline-flex;align-items:center;gap:4px;">
          <span class="material-symbols-outlined">arrow_back</span>
          Back to Catalog
        </a>
      </div>

      <div class="product-detail">
        <!-- Product Image Gallery -->
        <div class="product-detail-gallery">
          <div class="product-detail-image" style="background: ${bgGradient};display:flex;align-items:center;justify-content:center;">
            ${allImages.length > 0
              ? `<img id="main-product-image" src="${allImages[0]}" alt="${product.name}" />`
              : `<span class="material-symbols-outlined" style="font-size:8rem;color:var(--color-text-light);">medical_services</span>`
            }
          </div>
          ${allImages.length > 1 ? `
            <div class="product-detail-thumbnails">
              ${allImages.map((imgUrl, idx) => `
                <button class="product-thumbnail ${idx === 0 ? 'is-active' : ''}" data-image-url="${imgUrl}" aria-label="View product image ${idx + 1}">
                  <img src="${imgUrl}" alt="${product.name} preview" />
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Product Details -->
        <div class="product-detail-info">
          <div style="display:flex;align-items:center;gap:var(--space-3);">
            <span style="font-family:var(--font-mono);font-size:var(--label-caps-size);color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.05em;">
              ${product.category} · #${product.sku}
            </span>
            ${StockBadge(product.stockStatus)}
          </div>

          <h1 class="product-detail-name">${product.name}</h1>
          <div class="product-detail-price">${formatCurrency(product.price)}</div>
          
          <div style="block-size:1px;background-color:var(--color-border);margin-block:var(--space-2);"></div>

          <p class="product-detail-desc">${product.description}</p>

          <div class="product-detail-actions">
            <div>
              <div style="font-size:var(--body-sm-size);color:var(--color-text-muted);margin-block-end:var(--space-2);">Select Quantity</div>
              ${QuantityCounter(product.id, selectedQty)}
            </div>

            <div style="flex-grow:1;align-self:flex-end;">
              <button class="btn btn-primary add-detail-quote-btn" data-product-id="${product.id}" style="inline-size:100%;height:44px;display:flex;align-items:center;justify-content:center;gap:8px;">
                <span class="material-symbols-outlined">shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>

          <!-- Specs Table -->
          ${product.specs ? `
            <div class="product-detail-specs">
              <h3 style="font-family:var(--font-heading);font-size:1rem;font-weight:600;margin-block-end:var(--space-3);">Technical Specifications</h3>
              <table style="border-collapse:collapse;border:1px solid var(--color-border);border-radius:var(--radius);overflow:clip;">
                <tbody>
                  ${Object.entries(product.specs).map(([key, val]) => `
                    <tr>
                      <th>${key}</th>
                      <td>${val}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

/**
 * Bind ProductDetailPage events.
 */
export function bindProductDetailEvents() {
  const container = document.querySelector('.product-detail-container');
  if (!container) return;

  // Bind Quantity Counter Events
  bindQuantityCounterEvents(container, (productId, newQty) => {
    selectedQty = newQty;
  });

  // Handle thumbnail clicks to switch main image
  const gallery = container.querySelector('.product-detail-gallery');
  if (gallery) {
    gallery.addEventListener('click', (e) => {
      const thumb = e.target.closest('.product-thumbnail');
      if (thumb) {
        const imageUrl = thumb.dataset.imageUrl;
        const mainImg = gallery.querySelector('#main-product-image');
        if (mainImg) {
          mainImg.src = imageUrl;
        }
        // Update active class
        gallery.querySelectorAll('.product-thumbnail').forEach(t => {
          t.classList.remove('is-active');
        });
        thumb.classList.add('is-active');
      }
    });
  }

  // Add to Quote request click
  const addToQuoteBtn = container.querySelector('.add-detail-quote-btn');
  if (addToQuoteBtn) {
    addToQuoteBtn.addEventListener('click', () => {
      // Guard: Only logged in users can add to cart
      if (!store.isLoggedIn) {
        showToast('Please log in.', 'info');
        router.navigate('#/login');
        return;
      }

      const productId = addToQuoteBtn.dataset.productId;
      const product = store.products.find(p => p.id === productId);

      if (product) {
        if (product.stockStatus === 'out_of_stock') {
          showToast('This item is currently out of stock.', 'error');
          return;
        }

        store.addToCart(product, selectedQty);
        showToast(`${selectedQty} × ${product.name} added to cart`, 'success');
        
        // Reset local qty
        selectedQty = 1;
        router.navigate('#/products');
      }
    });
  }
}
