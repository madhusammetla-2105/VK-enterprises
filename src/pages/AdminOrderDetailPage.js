/* ===== AdminOrderDetailPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { OrderBadge } from '../components/StatusBadge.js';
import { formatCurrency, formatDate, formatDateTime } from '../utils/helpers.js';
import { ORDER_STATUS } from '../utils/constants.js';
import { showToast } from '../components/Toast.js';

/**
 * Render the AdminOrderDetailPage.
 * @param {object} params - { id }
 * @returns {string} HTML string
 */
export function AdminOrderDetailPage(params) {
  const orderId = params.id;
  const order = store.orders.find(o => o.id === orderId);

  // Guard: Only admins allowed
  if (!store.isAdmin) {
    return `
      <div style="padding:var(--space-12) 0;text-align:center;">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--error);">security</span>
        <h1 class="page-title" style="margin-block-start:var(--space-4);">Access Denied</h1>
        <p style="color:var(--color-text-muted);margin-block-end:var(--space-6);">You must be logged in as an administrator to manage order details.</p>
        <a href="#/login" class="btn btn-primary">Login as Admin</a>
      </div>
    `;
  }

  if (!order) {
    return `
      <div style="padding:var(--space-12) 0;text-align:center;">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--error);">error_outline</span>
        <h1 style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;margin-block-start:var(--space-4);">Order Not Found</h1>
        <p style="color:var(--color-text-muted);margin-block-end:var(--space-6);">The order ID you are trying to view does not exist.</p>
        <a href="#/admin/orders" class="btn btn-primary">Back to Orders Queue</a>
      </div>
    `;
  }

  // Generate a gradient placeholder based on category
  const gradients = {
    surgical:    'linear-gradient(135deg, #e8e8e8 0%, #c8c8c8 100%)',
    diagnostics: 'linear-gradient(135deg, #e0e8f0 0%, #b8c8d8 100%)',
    general:     'linear-gradient(135deg, #e8e8e0 0%, #c8c8b8 100%)',
    emergency:   'linear-gradient(135deg, #f0e0e0 0%, #d8b8b8 100%)',
    consumables: 'linear-gradient(135deg, #e0f0e8 0%, #b8d8c8 100%)',
    lab:         'linear-gradient(135deg, #e8e0f0 0%, #c8b8d8 100%)',
  };

  const statusSteps = [
    { id: ORDER_STATUS.PENDING, label: 'Pending', icon: 'hourglass_empty' },
    { id: ORDER_STATUS.ACCEPTED, label: 'Approved', icon: 'verified' },
    { id: ORDER_STATUS.DISPATCHED, label: 'Dispatched', icon: 'local_shipping' },
    { id: ORDER_STATUS.DELIVERED, label: 'Delivered', icon: 'done_all' }
  ];

  // Helper to determine status classes for timeline
  const getStepClass = (stepId, index) => {
    if (order.status === ORDER_STATUS.REJECTED) {
      if (stepId === ORDER_STATUS.PENDING) return 'is-completed';
      return '';
    }

    const currentStatusIdx = statusSteps.findIndex(s => s.id === order.status);
    if (index < currentStatusIdx) return 'is-completed';
    if (index === currentStatusIdx) return 'is-active';
    return '';
  };

  return `
    <div class="admin-order-detail-container">
      <div style="margin-block-end:var(--space-6);">
        <a href="#/admin/orders" class="btn btn-ghost btn-sm" style="display:inline-flex;align-items:center;gap:4px;">
          <span class="material-symbols-outlined">arrow_back</span>
          Back to Requisitions List
        </a>
      </div>

      <!-- Detail Header -->
      <div class="request-detail-header" style="background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);padding:var(--space-6);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--space-4);">
        <div>
          <div style="display:flex;align-items:center;gap:var(--space-3);flex-wrap:wrap;">
            <h1 class="page-title" style="font-family:var(--font-mono);font-size:1.5rem;font-weight:700;margin:0;">Manage: ${order.id}</h1>
            ${OrderBadge(order.status)}
          </div>
          <div style="font-size:var(--body-sm-size);color:var(--color-text-muted);margin-block-start:var(--space-2);">
            Submitted by ${order.userName} on ${formatDateTime(order.createdAt)} · Last updated on ${formatDateTime(order.updatedAt)}
          </div>
        </div>
        <div style="text-align:end;">
          <div style="font-size:var(--body-sm-size);color:var(--color-text-muted);">Requisition Value</div>
          <div style="font-family:var(--font-heading);font-size:1.75rem;font-weight:700;color:var(--primary);margin-block-start:var(--space-1);">${formatCurrency(order.totalAmount)}</div>
        </div>
      </div>

      <!-- Grid layout for Controls vs Products -->
      <div style="display:grid;grid-template-columns:1fr 400px;gap:var(--space-6);margin-block-start:var(--space-6);align-items:start;">
        
        <div>
          <!-- Customer Info -->
          <div class="admin-customer-info" style="margin-block-end:var(--space-6);">
            <div class="admin-customer-field">
              <span class="admin-customer-label">Hospital / Pharmacy</span>
              <span style="font-weight:600;font-size:0.95rem;">${order.userOrganization}</span>
            </div>
            <div class="admin-customer-field">
              <span class="admin-customer-label">Procurement Contact</span>
              <span style="font-weight:600;font-size:0.95rem;">${order.userName}</span>
            </div>
            <div class="admin-customer-field">
              <span class="admin-customer-label">Email Address</span>
              <span style="font-size:0.875rem;">${order.userEmail}</span>
            </div>
            <div class="admin-customer-field">
              <span class="admin-customer-label">Phone Number</span>
              <span style="font-size:0.875rem;">${order.userPhone}</span>
            </div>
          </div>

          <!-- Stepper Tracking -->
          <div style="background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);padding:var(--space-6);margin-block-end:var(--space-6);">
            <h3 style="font-family:var(--font-heading);font-size:1rem;font-weight:600;margin-block-end:var(--space-6);">Requisition Pipeline</h3>
            ${order.status === ORDER_STATUS.REJECTED ? `
              <div class="status-timeline" style="margin-block:var(--space-4);">
                <div class="status-step is-completed">
                  <div class="status-step-dot"><span class="material-symbols-outlined">hourglass_empty</span></div>
                  <div class="status-step-label">Submitted</div>
                </div>
                <div style="inline-size:calc(100% / 3);block-size:2px;background:var(--error);position:relative;top:-16px;z-index:0;"></div>
                <div class="status-step is-rejected">
                  <div class="status-step-dot" style="background:var(--error);border-color:var(--error);color:var(--on-error);"><span class="material-symbols-outlined">close</span></div>
                  <div class="status-step-label" style="color:var(--error);">Rejected by Admin</div>
                </div>
              </div>
            ` : `
              <div class="status-timeline">
                ${statusSteps.map((step, idx) => `
                  <div class="status-step ${getStepClass(step.id, idx)}">
                    <div class="status-step-dot">
                      <span class="material-symbols-outlined">${step.icon}</span>
                    </div>
                    <div class="status-step-label">${step.label}</div>
                    ${idx < statusSteps.length - 1 ? `<div class="status-step-connector"></div>` : ''}
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Items Table -->
          <div style="background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);overflow:hidden;">
            <div style="padding:var(--space-5) var(--space-6);border-block-end:1px solid var(--color-border);font-family:var(--font-heading);font-weight:600;">Requisition Items</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th style="inline-size:60px;">Item</th>
                  <th>Description</th>
                  <th style="text-align:center;">Quantity</th>
                  <th style="text-align:end;">Unit Price</th>
                  <th style="text-align:end;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${order.items.map(item => {
                  const bgGradient = gradients[item.category] || gradients.general;
                  return `
                    <tr>
                      <td>
                        <div style="inline-size:40px;block-size:40px;border-radius:var(--radius-sm);background:${bgGradient};display:flex;align-items:center;justify-content:center;overflow:hidden;">
                          ${item.imageUrl 
                            ? `<img src="${item.imageUrl}" alt="${item.productName}" style="inline-size:100%;block-size:100%;object-fit:cover;" />` 
                            : `<span class="material-symbols-outlined" style="font-size:1.1rem;color:var(--color-text-light);">medical_services</span>`
                          }
                        </div>
                      </td>
                      <td>
                        <div style="font-weight:600;font-size:0.875rem;">${item.productName}</div>
                        <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-text-muted);text-transform:uppercase;">
                          ${item.category} · #${item.productSku}
                        </div>
                      </td>
                      <td style="text-align:center;font-weight:500;">${item.quantity}</td>
                      <td style="text-align:end;font-size:0.875rem;">${formatCurrency(item.unitPrice)}</td>
                      <td style="text-align:end;font-weight:600;font-size:0.875rem;">${formatCurrency(item.unitPrice * item.quantity)}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Admin Management Panel -->
        <div style="background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);padding:var(--space-6);position:sticky;inset-block-start:calc(var(--topbar-height) + var(--space-8));display:flex;flex-direction:column;gap:var(--space-5);">
          <h2 style="font-family:var(--font-heading);font-size:1.125rem;font-weight:700;margin:0;">Agent Verification</h2>
          
          <div style="block-size:1px;background-color:var(--color-border);"></div>

          <!-- Status Transition Control -->
          <div>
            <div style="font-size:var(--body-sm-size);font-weight:500;color:var(--color-text-muted);margin-block-end:var(--space-2);">Update Supply Pipeline State</div>
            
            ${order.status === ORDER_STATUS.PENDING ? `
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3);">
                <button class="btn btn-success" id="admin-approve-btn" style="display:flex;align-items:center;justify-content:center;gap:4px;">
                  <span class="material-symbols-outlined">check_circle</span>
                  Approve
                </button>
                <button class="btn btn-danger" id="admin-reject-btn" style="display:flex;align-items:center;justify-content:center;gap:4px;">
                  <span class="material-symbols-outlined">cancel</span>
                  Reject
                </button>
              </div>
            ` : ''}

            ${order.status === ORDER_STATUS.ACCEPTED ? `
              <button class="btn btn-primary" id="admin-dispatch-btn" style="inline-size:100%;display:flex;align-items:center;justify-content:center;gap:8px;">
                <span class="material-symbols-outlined">local_shipping</span>
                Release for Dispatch
              </button>
            ` : ''}

            ${order.status === ORDER_STATUS.DISPATCHED ? `
              <button class="btn btn-success" id="admin-deliver-btn" style="inline-size:100%;display:flex;align-items:center;justify-content:center;gap:8px;">
                <span class="material-symbols-outlined">done_all</span>
                Mark as Delivered
              </button>
            ` : ''}

            ${order.status === ORDER_STATUS.DELIVERED || order.status === ORDER_STATUS.REJECTED ? `
              <div style="padding:var(--space-4);background:var(--surface-container-low);color:var(--color-text-muted);font-size:var(--body-sm-size);text-align:center;border-radius:var(--radius);font-weight:500;">
                Requisition is in terminal state. No further updates required.
              </div>
            ` : ''}
          </div>

          <!-- Admin Notes -->
          <div class="admin-notes">
            <label for="admin-notes-text" style="font-size:var(--body-sm-size);font-weight:500;color:var(--color-text-muted);display:block;margin-block-end:var(--space-2);">Agent Notes / Remarks</label>
            <textarea id="admin-notes-text" class="input" placeholder="e.g. BlueDart tracking number, rejection reason, invoice clearance details..." style="font-size:0.875rem;padding:var(--space-3);min-height:100px;">${order.adminNotes || ''}</textarea>
          </div>

          <!-- Save notes button -->
          <button class="btn btn-secondary" id="admin-save-notes-btn" style="inline-size:100%;display:flex;align-items:center;justify-content:center;gap:6px;">
            <span class="material-symbols-outlined" style="font-size:1.15rem;">save</span>
            Save Notes
          </button>
        </div>

      </div>
    </div>
  `;
}

/**
 * Bind AdminOrderDetailPage events.
 */
export function bindAdminOrderDetailEvents(params) {
  const orderId = params.id;
  const container = document.querySelector('.admin-order-detail-container');
  if (!container) return;

  const getNotes = () => {
    const el = document.getElementById('admin-notes-text');
    return el ? el.value.trim() : '';
  };

  // Helper to transition state
  const handleTransition = (newStatus, successMsg) => {
    const notes = getNotes();
    const success = store.updateOrderStatus(orderId, newStatus, notes);
    if (success) {
      showToast(successMsg, 'success');
      router._resolve();
    } else {
      showToast('Failed to update order status.', 'error');
    }
  };

  // Approve button click
  const approveBtn = document.getElementById('admin-approve-btn');
  if (approveBtn) {
    approveBtn.addEventListener('click', () => {
      handleTransition(ORDER_STATUS.ACCEPTED, `Requisition ${orderId} approved successfully!`);
    });
  }

  // Reject button click
  const rejectBtn = document.getElementById('admin-reject-btn');
  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      const notes = getNotes();
      if (!notes) {
        showToast('Please add a reason for rejection in Agent Notes before rejecting.', 'error');
        const notesEl = document.getElementById('admin-notes-text');
        if (notesEl) notesEl.focus();
        return;
      }
      handleTransition(ORDER_STATUS.REJECTED, `Requisition ${orderId} rejected.`);
    });
  }

  // Dispatch button click
  const dispatchBtn = document.getElementById('admin-dispatch-btn');
  if (dispatchBtn) {
    dispatchBtn.addEventListener('click', () => {
      const notes = getNotes();
      if (!notes) {
        showToast('Please add tracking information (e.g. Courier & Tracking No) in Agent Notes.', 'info');
      }
      handleTransition(ORDER_STATUS.DISPATCHED, `Requisition ${orderId} released for shipment!`);
    });
  }

  // Deliver button click
  const deliverBtn = document.getElementById('admin-deliver-btn');
  if (deliverBtn) {
    deliverBtn.addEventListener('click', () => {
      handleTransition(ORDER_STATUS.DELIVERED, `Requisition ${orderId} marked as completed and delivered.`);
    });
  }

  // Save notes only button click
  const saveNotesBtn = document.getElementById('admin-save-notes-btn');
  if (saveNotesBtn) {
    saveNotesBtn.addEventListener('click', () => {
      const notes = getNotes();
      const order = store.orders.find(o => o.id === orderId);
      if (order) {
        order.adminNotes = notes;
        order.updatedAt = new Date().toISOString();
        store._saveOrders();
        showToast('Agent notes saved successfully.', 'success');
        router._resolve();
      }
    });
  }
}
