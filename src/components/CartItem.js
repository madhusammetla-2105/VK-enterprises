/* ===== CartItem Component ===== */

import { formatCurrency } from '../utils/helpers.js';
import { QuantityCounter } from './QuantityCounter.js';

/**
 * Render a single cart item.
 * @param {object} item - { productId, productName, productSku, category, unitPrice, quantity, imageUrl }
 * @returns {string} HTML string
 */
export function CartItem(item) {
  // Generate a gradient placeholder based on category
  const gradients = {
    surgical:    'linear-gradient(135deg, #e8e8e8 0%, #c8c8c8 100%)',
    diagnostics: 'linear-gradient(135deg, #e0e8f0 0%, #b8c8d8 100%)',
    general:     'linear-gradient(135deg, #e8e8e0 0%, #c8c8b8 100%)',
    emergency:   'linear-gradient(135deg, #f0e0e0 0%, #d8b8b8 100%)',
    consumables: 'linear-gradient(135deg, #e0f0e8 0%, #b8d8c8 100%)',
    lab:         'linear-gradient(135deg, #e8e0f0 0%, #c8b8d8 100%)',
  };

  const bgGradient = gradients[item.category] || gradients.general;
  const itemTotal = item.unitPrice * item.quantity;

  return `
    <div class="cart-item" data-product-id="${item.productId}">
      <div class="cart-item-image" style="background: ${bgGradient};">
        ${item.imageUrl
          ? `<img src="${item.imageUrl}" alt="${item.productName}" loading="lazy" />`
          : `<div style="display:flex;align-items:center;justify-content:center;block-size:100%;color:var(--color-text-light);">
              <span class="material-symbols-outlined" style="font-size:2rem;">medical_services</span>
            </div>`
        }
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.productName}</div>
        <div class="cart-item-sku">${item.category} · #${item.productSku}</div>
        <div class="cart-item-actions">
          ${QuantityCounter(item.productId, item.quantity)}
          <button class="btn btn-ghost btn-sm remove-cart-item-btn" data-product-id="${item.productId}" aria-label="Remove item" style="color:var(--error);">
            <span class="material-symbols-outlined" style="font-size:1.25rem;">delete</span>
            Remove
          </button>
        </div>
      </div>
      <div class="cart-item-price">
        ${formatCurrency(itemTotal)}
        <div style="font-size:0.75rem;font-weight:400;color:var(--color-text-muted);margin-block-start:2px;text-align:end;">
          ${formatCurrency(item.unitPrice)} each
        </div>
      </div>
    </div>
  `;
}
