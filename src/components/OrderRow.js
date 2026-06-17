/* ===== OrderRow Component ===== */

import { formatCurrency, formatDate } from '../utils/helpers.js';
import { OrderBadge } from './StatusBadge.js';

/**
 * Render a table row for an order.
 * @param {object} order - The order object
 * @param {boolean} isAdmin - True if rendered in the admin panel
 * @returns {string} HTML string
 */
export function OrderRow(order, isAdmin = false) {
  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
  const detailUrl = isAdmin ? `#/admin/orders/${order.id}` : `#/requests/${order.id}`;

  if (isAdmin) {
    return `
      <tr data-order-id="${order.id}">
        <td>
          <a href="${detailUrl}" class="font-mono" style="font-weight:700;color:var(--primary);text-decoration:none;">
            ${order.id}
          </a>
        </td>
        <td>
          <div style="font-weight:600;">${order.userOrganization || 'N/A'}</div>
          <div style="font-size:0.75rem;color:var(--color-text-muted);">${order.userName || 'N/A'}</div>
        </td>
        <td>${formatDate(order.createdAt)}</td>
        <td>${itemCount} ${itemCount === 1 ? 'item' : 'items'}</td>
        <td style="font-weight:600;">${formatCurrency(order.totalAmount)}</td>
        <td>${OrderBadge(order.status)}</td>
        <td>
          <a href="${detailUrl}" class="btn btn-secondary btn-sm" style="padding:4px 8px;display:inline-flex;align-items:center;gap:4px;">
            <span class="material-symbols-outlined" style="font-size:1.125rem;">visibility</span>
            Manage
          </a>
        </td>
      </tr>
    `;
  }

  return `
    <tr data-order-id="${order.id}">
      <td>
        <a href="${detailUrl}" class="font-mono" style="font-weight:700;color:var(--primary);text-decoration:none;">
          ${order.id}
        </a>
      </td>
      <td>${formatDate(order.createdAt)}</td>
      <td>${itemCount} ${itemCount === 1 ? 'item' : 'items'}</td>
      <td style="font-weight:600;">${formatCurrency(order.totalAmount)}</td>
      <td>${OrderBadge(order.status)}</td>
      <td>
        <a href="${detailUrl}" class="btn btn-secondary btn-sm" style="padding:4px 8px;display:inline-flex;align-items:center;gap:4px;">
          <span class="material-symbols-outlined" style="font-size:1.125rem;">visibility</span>
          View
        </a>
      </td>
    </tr>
  `;
}
