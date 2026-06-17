/* ===== StatusBadge Component ===== */

import { STOCK_LABELS, STATUS_LABELS } from '../utils/constants.js';

/**
 * Render a stock status badge.
 * @param {string} status - e.g. 'in_stock', 'low', 'backorder', 'out_of_stock'
 * @returns {string} HTML string
 */
export function StockBadge(status) {
  const cssClass = status.replace('_', '-');
  const label = STOCK_LABELS[status] || status;
  return `<span class="badge badge--${cssClass}">${label}</span>`;
}

/**
 * Render an order status badge.
 * @param {string} status - e.g. 'pending', 'accepted', 'dispatched', 'delivered', 'rejected'
 * @returns {string} HTML string
 */
export function OrderBadge(status) {
  const label = STATUS_LABELS[status] || status;
  return `<span class="badge badge--${status}">${label}</span>`;
}
