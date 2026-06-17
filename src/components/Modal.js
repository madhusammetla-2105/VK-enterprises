/* ===== Modal Component ===== */

/**
 * Show a modal dialog.
 * @param {object} opts - { title, content, actions: [{ label, className, onClick }], onClose }
 */
export function showModal({ title, content, actions = [], onClose }) {
  // Remove existing modal
  closeModal();

  const modalHtml = `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
        <div class="modal-header">
          <h2 class="modal-title" id="modal-title">${title}</h2>
          <button class="btn-ghost" id="modal-close-btn" aria-label="Close">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="modal-body">${content}</div>
        ${actions.length > 0 ? `
          <div class="modal-footer">
            ${actions.map((action, i) => `
              <button class="${action.className || 'btn btn-secondary'}" id="modal-action-${i}">
                ${action.label}
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Close button
  document.getElementById('modal-close-btn').addEventListener('click', () => {
    closeModal();
    onClose?.();
  });

  // Overlay click
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
      onClose?.();
    }
  });

  // Action buttons
  actions.forEach((action, i) => {
    const btn = document.getElementById(`modal-action-${i}`);
    if (btn && action.onClick) {
      btn.addEventListener('click', () => {
        action.onClick();
        closeModal();
      });
    }
  });

  // Escape key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      onClose?.();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/**
 * Close the current modal.
 */
export function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.remove();
    document.body.style.overflow = '';
  }
}
