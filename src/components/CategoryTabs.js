/* ===== CategoryTabs Component ===== */

import { CATEGORIES } from '../utils/constants.js';

/**
 * Render category filter tabs.
 * @param {string} activeCategory - currently selected category id
 * @param {object} counts - { all: 12, surgical: 3, ... }
 * @returns {string} HTML string
 */
export function CategoryTabs(activeCategory = 'all', counts = {}) {
  const tabs = CATEGORIES.map(cat => {
    const isActive = cat.id === activeCategory;
    const count = counts[cat.id];
    const countStr = count !== undefined ? ` (${count})` : '';
    return `
      <button
        class="tab${isActive ? ' is-active' : ''}"
        data-category="${cat.id}"
      >
        ${cat.label}${countStr}
      </button>
    `;
  }).join('');

  return `<div class="tabs category-tabs" id="category-tabs">${tabs}</div>`;
}
