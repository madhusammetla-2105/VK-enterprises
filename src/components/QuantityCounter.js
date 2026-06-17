/* ===== QuantityCounter Component ===== */

import { showToast } from './Toast.js';

/**
 * Render a quantity counter (+/- buttons with numeric display).
 * @param {string} productId
 * @param {number} currentQty
 * @param {number} max
 * @returns {string} HTML string
 */
export function QuantityCounter(productId, currentQty = 1, max = 20) {
  return `
    <div class="qty-counter" data-product-id="${productId}">
      <button class="qty-counter-btn minus-btn" aria-label="Decrease quantity" ${currentQty <= 1 ? 'disabled' : ''}>
        <span class="material-symbols-outlined">remove</span>
      </button>
      <span class="qty-counter-value">${currentQty}</span>
      <button class="qty-counter-btn plus-btn" aria-label="Increase quantity">
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>
  `;
}

/**
 * Bind quantity change events to a container.
 * @param {HTMLElement} parent
 * @param {Function} onChange - Callback (productId, newQuantity)
 */
export function bindQuantityCounterEvents(parent, onChange) {
  parent.addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-counter-btn');
    if (!btn || btn.disabled) return;

    const counter = btn.closest('.qty-counter');
    if (!counter) return;

    const productId = counter.dataset.productId;
    const valueEl = counter.querySelector('.qty-counter-value');
    let currentQty = parseInt(valueEl.textContent, 10) || 1;
    const max = 20; // Default max B2B quantity

    if (btn.classList.contains('minus-btn')) {
      if (currentQty > 1) {
        currentQty--;
      }
    } else if (btn.classList.contains('plus-btn')) {
      if (currentQty < max) {
        currentQty++;
        if (currentQty === max) {
          showToast('Reached max quantity', 'info');
        }
      } else {
        showToast('Reached max quantity', 'info');
      }
    }

    // Update DOM element values locally to avoid page reloads/flickering
    valueEl.textContent = currentQty;

    const minusBtn = counter.querySelector('.minus-btn');
    if (minusBtn) {
      minusBtn.disabled = (currentQty <= 1);
    }

    // Trigger parent page callback
    if (onChange) {
      onChange(productId, currentQty);
    }
  });
}
