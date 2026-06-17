/* ===== Helpers ===== */

/**
 * Format a number as currency.
 * @param {number} amount
 * @param {string} currency - 'USD' | 'INR'
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format a date string or timestamp to a human-readable format.
 * @param {string|number|Date} date
 * @returns {string}
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

/**
 * Format date with time.
 * @param {string|number|Date} date
 * @returns {string}
 */
export function formatDateTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}

/**
 * Truncate text to a max length.
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncateText(text, maxLength = 80) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Debounce a function.
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Generate a readable order ID.
 * @returns {string}
 */
export function generateOrderId() {
  const now = new Date();
  const year = now.getFullYear();
  const seq = String(Math.floor(Math.random() * 9000) + 1000);
  return `ORD-${year}-${seq}`;
}

/**
 * Safely set innerHTML and return the container.
 * @param {HTMLElement} el
 * @param {string} html
 * @returns {HTMLElement}
 */
export function render(el, html) {
  el.innerHTML = html;
  return el;
}

/**
 * Create an element from an HTML string.
 * @param {string} html
 * @returns {HTMLElement}
 */
export function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

/**
 * Simple event delegation helper.
 * @param {HTMLElement} parent
 * @param {string} eventType
 * @param {string} selector
 * @param {Function} handler
 */
export function delegate(parent, eventType, selector, handler) {
  parent.addEventListener(eventType, (e) => {
    const target = e.target.closest(selector);
    if (target && parent.contains(target)) {
      handler(e, target);
    }
  });
}
