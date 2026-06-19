/* ===== ProductCard Component ===== */

import { STOCK_LABELS } from '../utils/constants.js';

/**
 * Render a product card.
 * @param {object} product
 * @returns {string} HTML string
 */
export function ProductCard(product) {
  const badgeClass = `badge badge--${product.stockStatus.replace('_', '-')}`;
  const stockLabel = STOCK_LABELS[product.stockStatus] || product.stockStatus;

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

  return `
    <div class="card product-card" data-product-id="${product.id}">
      <div class="product-card-image" style="background: ${bgGradient};">
        ${product.imageUrl
          ? `<img src="${product.imageUrl}" alt="${product.name}" loading="lazy" />`
          : `<div style="display:flex;align-items:center;justify-content:center;block-size:100%;color:var(--color-text-light);">
              <span class="material-symbols-outlined" style="font-size:3rem;">medical_services</span>
            </div>`
        }
        <div class="product-card-badge">
          <span class="${badgeClass}">${stockLabel}</span>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-meta">${product.category} · #${product.sku}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-desc">${product.description}</div>
      </div>
      <div class="product-card-footer" style="justify-content: flex-end;">
        <button class="btn btn-accent btn-sm add-to-quote-btn" style="inline-size: 100%;" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}
