/* ===== AdminOrdersPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { OrderRow } from '../components/OrderRow.js';
import { ORDER_STATUS, STATUS_LABELS } from '../utils/constants.js';

let activeFilter = 'all';

/**
 * Render the AdminOrdersPage.
 * @returns {string} HTML string
 */
export function AdminOrdersPage() {
  const user = store.user;

  // Guard: Only admins allowed
  if (!store.isAdmin) {
    return `
      <div style="padding:var(--space-12) 0;text-align:center;">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--error);">security</span>
        <h1 class="page-title" style="margin-block-start:var(--space-4);">Access Denied</h1>
        <p style="color:var(--color-text-muted);margin-block-end:var(--space-6);">You must be logged in as a VK Enterprises administrator to view this portal.</p>
        <a href="#/login" class="btn btn-primary">Login as Admin</a>
      </div>
    `;
  }

  // Get all orders and filter by status
  let allOrders = [...store.orders];

  if (activeFilter !== 'all') {
    allOrders = allOrders.filter(o => o.status === activeFilter);
  }

  const getCount = (status) => store.orders.filter(o => o.status === status).length;

  const filters = [
    { id: 'all', label: 'All Requests' },
    { id: ORDER_STATUS.PENDING, label: `Pending (${getCount(ORDER_STATUS.PENDING)})` },
    { id: ORDER_STATUS.ACCEPTED, label: `Accepted (${getCount(ORDER_STATUS.ACCEPTED)})` },
    { id: ORDER_STATUS.DISPATCHED, label: `Dispatched (${getCount(ORDER_STATUS.DISPATCHED)})` },
    { id: ORDER_STATUS.DELIVERED, label: `Delivered (${getCount(ORDER_STATUS.DELIVERED)})` },
    { id: ORDER_STATUS.REJECTED, label: `Rejected (${getCount(ORDER_STATUS.REJECTED)})` },
  ];

  return `
    <div class="admin-orders-container">
      <div class="page-header" style="margin-block-end:var(--space-6);">
        <div>
          <h1 class="page-title">Incoming Order Requisitions</h1>
          <p style="color:var(--color-text-muted);font-size:var(--body-sm-size);margin-block-start:2px;">
            Verify medical supply requests, clear invoices, and release order logistics.
          </p>
        </div>
      </div>

      <!-- Status Filters Tabs -->
      <div class="tabs requests-filters" id="admin-status-tabs" style="margin-block-end:var(--space-6);border-block-end:1px solid var(--color-border);display:flex;gap:var(--space-2);overflow-x:auto;">
        ${filters.map(f => `
          <button class="tab ${f.id === activeFilter ? 'is-active' : ''}" data-status="${f.id}">
            ${f.label}
          </button>
        `).join('')}
      </div>

      <!-- Orders Data Table -->
      ${allOrders.length > 0 ? `
        <div style="border:1px solid var(--color-border);border-radius:var(--radius);overflow:hidden;background:var(--color-card);">
          <table class="data-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Client / Organization</th>
                <th>Submission Date</th>
                <th>Item Units</th>
                <th>Requisition Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${allOrders.map(order => OrderRow(order, true)).join('')}
            </tbody>
          </table>
        </div>
      ` : `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--space-16) 0;gap:var(--space-4);text-align:center;background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);">
          <span class="material-symbols-outlined" style="font-size:4rem;color:var(--color-text-muted);">assignment</span>
          <div style="font-family:var(--font-heading);font-size:1.25rem;font-weight:600;">No Requisitions Found</div>
          <p style="color:var(--color-text-muted);max-width:320px;">
            ${activeFilter === 'all' 
              ? 'There are currently no requisition requests in the database.' 
              : `There are no requests matching status "${STATUS_LABELS[activeFilter]}".`}
          </p>
          ${activeFilter !== 'all' ? `
            <button class="btn btn-secondary" id="admin-reset-filter">Show All Requests</button>
          ` : ''}
        </div>
      `}
    </div>
  `;
}

/**
 * Bind AdminOrdersPage events.
 */
export function bindAdminOrdersEvents() {
  const container = document.querySelector('.admin-orders-container');
  if (!container) return;

  // Filter Tabs click
  const tabs = document.getElementById('admin-status-tabs');
  if (tabs) {
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab');
      if (btn) {
        activeFilter = btn.dataset.status;
        router._resolve();
      }
    });
  }

  // Reset Filter Button click
  const resetBtn = document.getElementById('admin-reset-filter');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilter = 'all';
      router._resolve();
    });
  }
}
