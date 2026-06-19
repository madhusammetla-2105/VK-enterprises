/* ===== RequestsPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { OrderRow } from '../components/OrderRow.js';
import { ORDER_STATUS, STATUS_LABELS } from '../utils/constants.js';

let activeFilter = 'all'; // 'all' | 'pending' | 'accepted' | 'dispatched' | 'delivered' | 'rejected'

/**
 * Render the RequestsPage (User's requisition orders list).
 * @returns {string} HTML string
 */
export function RequestsPage() {
  const user = store.user;

  if (!user) {
    return `
      <div style="padding:var(--space-12) 0;text-align:center;">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--color-text-muted);">lock</span>
        <h1 class="page-title" style="margin-block-start:var(--space-4);">Authentication Required</h1>
        <p style="color:var(--color-text-muted);margin-block-end:var(--space-6);">Please login to view your submitted quote requests.</p>
        <a href="#/login" class="btn btn-primary">Login Now</a>
      </div>
    `;
  }

  // Filter orders by current logged-in user and active status filter
  let userOrders = store.orders.filter(o => o.userId === user.uid);

  if (activeFilter !== 'all') {
    userOrders = userOrders.filter(o => o.status === activeFilter);
  }

  // Counts for badge filters
  const allUserOrders = store.orders.filter(o => o.userId === user.uid);
  const getCount = (status) => allUserOrders.filter(o => o.status === status).length;

  const filters = [
    { id: 'all', label: 'All' },
    { id: ORDER_STATUS.PENDING, label: `Pending (${getCount(ORDER_STATUS.PENDING)})` },
    { id: ORDER_STATUS.ACCEPTED, label: `Accepted (${getCount(ORDER_STATUS.ACCEPTED)})` },
    { id: ORDER_STATUS.DISPATCHED, label: `Dispatched (${getCount(ORDER_STATUS.DISPATCHED)})` },
    { id: ORDER_STATUS.DELIVERED, label: `Delivered (${getCount(ORDER_STATUS.DELIVERED)})` },
    { id: ORDER_STATUS.REJECTED, label: `Rejected (${getCount(ORDER_STATUS.REJECTED)})` },
  ];

  return `
    <div class="requests-page-container">
      <h1 class="page-title">My Requisition Requests</h1>
      <p style="color:var(--color-text-muted);font-size:var(--body-sm-size);margin-block-start:2px;margin-block-end:var(--space-6);">
        Track all your medical supply orders, quote clearances, and dispatch statuses.
      </p>

      <!-- Status Filters -->
      <div class="tabs requests-filters" id="requests-status-tabs" style="margin-block-end:var(--space-6);border-block-end:1px solid var(--color-border);display:flex;gap:var(--space-2);overflow-x:auto;">
        ${filters.map(f => `
          <button class="tab ${f.id === activeFilter ? 'is-active' : ''}" data-status="${f.id}">
            ${f.label}
          </button>
        `).join('')}
      </div>

      <!-- Requests Table -->
      ${userOrders.length > 0 ? `
        <div style="border:1px solid var(--color-border);border-radius:var(--radius);overflow:hidden;background:var(--color-card);">
          <table class="data-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Submission Date</th>
                <th>Items Count</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${userOrders.map(order => OrderRow(order, false)).join('')}
            </tbody>
          </table>
        </div>
      ` : `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--space-16) 0;gap:var(--space-4);text-align:center;background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);">
          <span class="material-symbols-outlined" style="font-size:4rem;color:var(--color-text-muted);">receipt_long</span>
          <div style="font-family:var(--font-heading);font-size:1.25rem;font-weight:600;">No Requests Found</div>
          <p style="color:var(--color-text-muted);max-width:320px;">
            ${activeFilter === 'all' 
              ? 'You have not submitted any quote requisitions yet.' 
              : `You have no requisitions with status "${STATUS_LABELS[activeFilter]}".`}
          </p>
          ${activeFilter === 'all' ? `
            <a href="#/products" class="btn btn-primary">Browse Catalog</a>
          ` : `
            <button class="btn btn-secondary" id="reset-requests-filter">Show All Requests</button>
          `}
        </div>
      `}
    </div>
  `;
}

/**
 * Bind RequestsPage events.
 */
export function bindRequestsEvents() {
  const container = document.querySelector('.requests-page-container');
  if (!container) return;

  // Filter Tabs click
  const tabs = document.getElementById('requests-status-tabs');
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
  const resetBtn = document.getElementById('reset-requests-filter');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilter = 'all';
      router._resolve();
    });
  }
}
