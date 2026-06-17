/* ===== Sidebar Component ===== */

import { router } from '../router.js';
import { store } from '../store.js';

/**
 * Render the sidebar navigation.
 * @returns {string} HTML string
 */
export function Sidebar() {
  const currentHash = router.getCurrentHash();
  const isAdmin = store.isAdmin;

  const isActive = (hash) => {
    if (hash === '#/') return currentHash === '#/';
    return currentHash.startsWith(hash);
  };

  const navClass = (hash) =>
    `sidebar-link${isActive(hash) ? ' is-active' : ''}`;

  return `
    <aside class="sidebar" id="sidebar">
      <a href="#/" class="sidebar-brand" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
        <img src="/images/vk_logo.png" alt="VK Enterprises" style="max-inline-size: 100%; block-size: auto; max-block-size: 165px; object-fit: contain; margin-inline-start: 8px;" />
      </a>

      <nav class="sidebar-nav">
        ${isAdmin ? `
          <a href="#/admin/products" class="${navClass('#/admin/products')}" data-nav>
            <span class="material-symbols-outlined">package_2</span>
            Manage Products
          </a>
          <a href="#/admin/orders" class="${navClass('#/admin/orders')}" data-nav>
            <span class="material-symbols-outlined">local_shipping</span>
            Orders
          </a>
        ` : `
          <a href="#/" class="${navClass('#/')}" data-nav>
            <span class="material-symbols-outlined">home</span>
            Home
          </a>
          <a href="#/products" class="${navClass('#/products')}" data-nav>
            <span class="material-symbols-outlined">inventory_2</span>
            Products
          </a>
          ${(store.isLoggedIn && !isAdmin) ? `
            <a href="#/cart" class="${navClass('#/cart')}" data-nav>
              <span class="material-symbols-outlined">shopping_cart</span>
              Cart
              ${store.cartCount > 0 ? `<span style="margin-inline-start:auto;font-size:0.725rem;background:var(--secondary);color:#fff;padding:1px 6px;border-radius:var(--radius-full);">${store.cartCount}</span>` : ''}
            </a>
            <a href="#/requests" class="${navClass('#/requests')}" data-nav>
              <span class="material-symbols-outlined">receipt_long</span>
              My Orders
            </a>
          ` : ''}
        `}
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-divider"></div>
        ${store.isLoggedIn ? `
          <a href="#/settings" class="${navClass('#/settings')}" data-nav>
            <span class="material-symbols-outlined">settings</span>
            Settings
          </a>
          <button class="sidebar-link" id="sidebar-logout-btn" style="background:none;border:none;inline-size:100%;text-align:start;">
            <span class="material-symbols-outlined">logout</span>
            Logout
          </button>
        ` : `
          <a href="#/login" class="${navClass('#/login')}" data-nav>
            <span class="material-symbols-outlined">login</span>
            Login
          </a>
        `}
      </div>
    </aside>
  `;
}

/**
 * Bind sidebar events after rendering.
 */
export function bindSidebarEvents() {
  const logoutBtn = document.getElementById('sidebar-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      store.clearUser();
      store.clearCart();
      router.navigate('#/login');
    });
  }
}
