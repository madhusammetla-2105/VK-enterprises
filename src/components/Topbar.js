/* ===== Topbar Component ===== */

import { store } from '../store.js';

/**
 * Render the top navigation bar.
 * @param {object} opts - { onSearch }
 * @returns {string} HTML string
 */
export function Topbar() {
  const user = store.user;

  return `
    <div class="topbar" id="topbar">
      <button class="btn-ghost topbar-menu-btn" id="topbar-menu-btn" aria-label="Open menu">
        <span class="material-symbols-outlined">menu</span>
      </button>

      <div class="topbar-search">
        <span class="material-symbols-outlined topbar-search-icon">search</span>
        <input
          type="search"
          class="input"
          id="topbar-search-input"
          placeholder="Search catalog, SKU or category..."
          autocomplete="off"
        />
      </div>

      <div class="topbar-actions">
        <!-- Red dot indicator next to search and help as in screenshot -->
        <button class="btn-ghost notification-dot" aria-label="Notifications" style="padding:var(--space-1);margin-inline-end:var(--space-1);">
          <span class="material-symbols-outlined" style="color:var(--color-text-muted);font-size:1.35rem;">notifications</span>
        </button>
        
        <button class="btn-ghost" aria-label="Help" style="padding:var(--space-1);margin-inline-end:var(--space-2);">
          <span class="material-symbols-outlined" style="color:var(--color-text-muted);font-size:1.35rem;">help_outline</span>
        </button>

        ${store.isLoggedIn ? `
          <div class="topbar-user">
            <div class="topbar-user-info">
              <div class="topbar-user-name" style="font-family:var(--font-heading);font-weight:700;">${user.name || 'User'}</div>
              <div class="topbar-user-role" style="font-family:var(--font-mono);font-size:0.6rem;font-weight:700;color:var(--color-text-muted);margin-block-start:2px;letter-spacing:0.05em;">${user.role === 'admin' ? 'FACILITY MANAGER' : (user.organization || 'Hospital').toUpperCase()}</div>
            </div>
            <div class="topbar-avatar" style="border-radius:var(--radius-md);background-color:#c4d3df;">
              <span class="material-symbols-outlined" style="color:#2f4656;font-size:1.5rem;font-weight:bold;">person</span>
            </div>
          </div>
        ` : `
          <a href="#/login" class="btn btn-primary btn-sm">Login</a>
        `}
      </div>
    </div>
  `;
}

/**
 * Bind topbar events after rendering.
 */
export function bindTopbarEvents() {
  // Mobile menu button toggle
  const menuBtn = document.getElementById('topbar-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      store.toggleSidebar();
      const sidebar = document.querySelector('.app-sidebar');
      if (sidebar) {
        sidebar.classList.toggle('is-open', store.state.sidebarOpen);
      }
    });
  }

  // Topbar search event
  const searchInput = document.getElementById('topbar-search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          router.navigate(`#/products?q=${encodeURIComponent(query)}`);
        } else {
          router.navigate('#/products');
        }
      }
    });

    // Populate search field if query is present in url
    const hash = window.location.hash;
    if (hash.startsWith('#/products') && hash.includes('q=')) {
      try {
        const queryStr = hash.split('?')[1];
        const params = new URLSearchParams(queryStr);
        if (params.has('q')) {
          searchInput.value = params.get('q');
        }
      } catch (err) {
        // Ignore parsing errors
      }
    }
  }
}
