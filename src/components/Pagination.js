/* ===== Pagination Component ===== */

import { ITEMS_PER_PAGE } from '../utils/constants.js';

/**
 * Render pagination controls.
 * @param {number} currentPage - 1-indexed
 * @param {number} totalItems
 * @param {number} perPage
 * @returns {string} HTML string
 */
export function Pagination(currentPage, totalItems, perPage = ITEMS_PER_PAGE) {
  const totalPages = Math.ceil(totalItems / perPage);
  if (totalPages <= 1) return '';

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalItems);

  // Generate page buttons
  let pages = '';
  const maxVisible = 5;

  // Previous button
  pages += `
    <button class="pagination-btn" data-page="${currentPage - 1}" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Previous page">
      <span class="material-symbols-outlined" style="font-size:1rem;">chevron_left</span>
    </button>
  `;

  if (totalPages <= maxVisible + 2) {
    // Show all pages
    for (let i = 1; i <= totalPages; i++) {
      pages += `
        <button class="pagination-btn${i === currentPage ? ' is-active' : ''}" data-page="${i}">${i}</button>
      `;
    }
  } else {
    // Show with ellipsis
    pages += `<button class="pagination-btn${1 === currentPage ? ' is-active' : ''}" data-page="1">1</button>`;

    if (currentPage > 3) {
      pages += '<span class="pagination-ellipsis">…</span>';
    }

    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages += `
        <button class="pagination-btn${i === currentPage ? ' is-active' : ''}" data-page="${i}">${i}</button>
      `;
    }

    if (currentPage < totalPages - 2) {
      pages += '<span class="pagination-ellipsis">…</span>';
    }

    pages += `<button class="pagination-btn${totalPages === currentPage ? ' is-active' : ''}" data-page="${totalPages}">${totalPages}</button>`;
  }

  // Next button
  pages += `
    <button class="pagination-btn" data-page="${currentPage + 1}" ${currentPage >= totalPages ? 'disabled' : ''} aria-label="Next page">
      <span class="material-symbols-outlined" style="font-size:1rem;">chevron_right</span>
    </button>
  `;

  return `
    <div class="pagination" id="pagination">
      <div class="pagination-info">Showing ${start}-${end} of ${totalItems} products</div>
      <div class="pagination-pages">${pages}</div>
    </div>
  `;
}
