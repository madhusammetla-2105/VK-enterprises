/* ===== Toast Component ===== */

/**
 * Show a toast notification.
 * @param {string} message
 * @param {'success'|'error'|'info'} type
 * @param {number} duration - ms
 */
export function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info',
  };

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size:1.25rem;">${icons[type] || 'info'}</span>
    <span>${message}</span>
    <span class="material-symbols-outlined toast-dismiss">close</span>
  `;

  container.appendChild(toast);

  // Dismiss on click
  toast.querySelector('.toast-dismiss').addEventListener('click', () => {
    toast.remove();
  });

  // Auto dismiss
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, duration);
}
