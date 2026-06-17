/* ===== Loader Component ===== */

/**
 * Render skeleton loading cards.
 * @param {number} count
 * @returns {string} HTML string
 */
export function SkeletonGrid(count = 6) {
  let cards = '';
  for (let i = 0; i < count; i++) {
    cards += `
      <div class="card product-card" style="pointer-events:none;">
        <div class="product-card-image skeleton" style="aspect-ratio:4/3;"></div>
        <div class="card-body" style="display:flex;flex-direction:column;gap:var(--space-2);padding:var(--space-4);">
          <div class="skeleton skeleton-text" style="inline-size:50%;"></div>
          <div class="skeleton skeleton-text" style="inline-size:80%;block-size:1.25rem;"></div>
          <div class="skeleton skeleton-text" style="inline-size:100%;"></div>
          <div class="skeleton skeleton-text" style="inline-size:60%;"></div>
        </div>
      </div>
    `;
  }
  return cards;
}

/**
 * Render a centered spinner.
 * @param {string} message
 * @returns {string} HTML string
 */
export function Spinner(message = 'Loading...') {
  return `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--space-16);gap:var(--space-4);">
      <div class="spinner"></div>
      <span class="text-body-sm text-muted">${message}</span>
    </div>
  `;
}
