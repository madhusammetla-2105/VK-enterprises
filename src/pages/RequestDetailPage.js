/* ===== RequestDetailPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { OrderBadge } from '../components/StatusBadge.js';
import { formatDate, formatDateTime } from '../utils/helpers.js';
import { ORDER_STATUS } from '../utils/constants.js';

/**
 * Render the RequestDetailPage.
 * @param {object} params - { id }
 * @returns {string} HTML string
 */
export function RequestDetailPage(params) {
  const orderId = params.id;
  const order = store.orders.find(o => o.id === orderId);

  if (!order) {
    return `
      <div style="padding:var(--space-12) 0;text-align:center;">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--error);">error_outline</span>
        <h1 style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;margin-block-start:var(--space-4);">Request Not Found</h1>
        <p style="color:var(--color-text-muted);margin-block-end:var(--space-6);">The request ID you are looking for does not exist.</p>
        <a href="#/requests" class="btn btn-primary">My Requests</a>
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
    { id: ORDER_STATUS.PENDING, label: 'Pending Approval', icon: 'hourglass_empty' },
    { id: ORDER_STATUS.ACCEPTED, label: 'Approved & Sourced', icon: 'verified' },
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
    <div class="request-detail-container">
      <div style="margin-block-end:var(--space-6);display:flex;justify-content:space-between;align-items:center;">
        <a href="#/requests" class="btn btn-ghost btn-sm" style="display:inline-flex;align-items:center;gap:4px;">
          <span class="material-symbols-outlined">arrow_back</span>
          Back to Requests
        </a>
      </div>

      <!-- Request Header -->
      <div class="request-detail-header" style="background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);padding:var(--space-6);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--space-4);">
        <div>
          <div style="display:flex;align-items:center;gap:var(--space-3);flex-wrap:wrap;">
            <h1 class="page-title" style="font-family:var(--font-mono);font-size:1.5rem;font-weight:700;margin:0;">${order.id}</h1>
            ${OrderBadge(order.status)}
          </div>
          <div style="font-size:var(--body-sm-size);color:var(--color-text-muted);margin-block-start:var(--space-2);">
            Submitted on ${formatDateTime(order.createdAt)} · Last updated on ${formatDateTime(order.updatedAt)}
          </div>
        </div>
      </div>

      <!-- Status Timeline Stepper -->
      <div style="background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);padding:var(--space-6);margin-block:var(--space-6);">
        <h3 style="font-family:var(--font-heading);font-size:1rem;font-weight:600;margin-block-end:var(--space-6);">Requisition Tracking</h3>
        
        ${order.status === ORDER_STATUS.REJECTED ? `
          <!-- Rejected Special Stepper View -->
          <div class="status-timeline" style="margin-block:var(--space-4);">
            <div class="status-step is-completed">
              <div class="status-step-dot">
                <span class="material-symbols-outlined">hourglass_empty</span>
              </div>
              <div class="status-step-label">Submitted</div>
            </div>
            <div style="inline-size:calc(100% / 3);block-size:2px;background:var(--error);position:relative;top:-16px;z-index:0;"></div>
            <div class="status-step is-rejected">
              <div class="status-step-dot" style="background:var(--error);border-color:var(--error);color:var(--on-error);">
                <span class="material-symbols-outlined">close</span>
              </div>
              <div class="status-step-label" style="color:var(--error);">Rejected by Admin</div>
            </div>
          </div>
        ` : `
          <!-- Standard Stepper -->
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

      <!-- Admin Notes Box -->
      ${order.adminNotes ? `
        <div style="padding:var(--space-6);border-inline-start:4px solid var(--secondary);background:var(--surface-container-low);border-radius:0 var(--radius) var(--radius) 0;margin-block-end:var(--space-6);">
          <div style="font-family:var(--font-heading);font-weight:700;font-size:0.875rem;text-transform:uppercase;color:var(--secondary);margin-block-end:var(--space-2);letter-spacing:0.05em;display:flex;align-items:center;gap:4px;">
            <span class="material-symbols-outlined" style="font-size:1.125rem;">info</span>
            VK Enterprises Agent Notes
          </div>
          <p style="font-size:var(--body-sm-size);line-height:1.5;color:var(--color-text-muted);margin:0;">${order.adminNotes}</p>
        </div>
      ` : ''}

      <!-- Order Items Detail Table -->
      <div style="background:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius);overflow:hidden;">
        <div style="padding:var(--space-5) var(--space-6);border-block-end:1px solid var(--color-border);font-family:var(--font-heading);font-weight:600;">Requisition Items</div>
        <table class="data-table">
          <thead>
            <tr>
              <th style="inline-size:80px;">Item</th>
              <th>Description</th>
              <th style="text-align:center;">Quantity</th>
            </tr>
          </thead>
          <tbody>
            ${order.items.map(item => {
              const bgGradient = gradients[item.category] || gradients.general;
              return `
                <tr>
                  <td>
                    <div style="inline-size:48px;block-size:48px;border-radius:var(--radius-sm);background:${bgGradient};display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;">
                      ${item.imageUrl 
                        ? `<img src="${item.imageUrl}" alt="${item.productName}" style="inline-size:100%;block-size:100%;object-fit:cover;" />` 
                        : `<span class="material-symbols-outlined" style="font-size:1.25rem;color:var(--color-text-light);">medical_services</span>`
                      }
                    </div>
                  </td>
                  <td>
                    <div style="font-weight:600;">${item.productName}</div>
                    <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-muted);text-transform:uppercase;margin-block-start:2px;">
                      ${item.category} · #${item.productSku}
                    </div>
                  </td>
                  <td style="text-align:center;font-weight:500;">${item.quantity}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/**
 * Bind RequestDetailPage events.
 */
export function bindRequestDetailEvents() {
  // Mostly read-only, no special events to bind
}
