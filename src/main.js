/* ===== Main Application Entry Point ===== */

// Import Styles in correct cascading order
import './styles/reset.css';
import './styles/tokens.css';
import './styles/globals.css';
import './styles/components.css';
import './styles/pages.css';

// Import Router and Store
import { router } from './router.js';
import { store } from './store.js';

// Import Components
import { Sidebar, bindSidebarEvents } from './components/Sidebar.js';
import { Topbar, bindTopbarEvents } from './components/Topbar.js';

// Import Pages
import { HomePage, bindHomeEvents } from './pages/HomePage.js';
import { ProductsPage, bindProductsEvents, handleExternalSearch } from './pages/ProductsPage.js';
import { ProductDetailPage, bindProductDetailEvents } from './pages/ProductDetailPage.js';
import { CartPage, bindCartEvents } from './pages/CartPage.js';
import { RequestsPage, bindRequestsEvents } from './pages/RequestsPage.js';
import { RequestDetailPage, bindRequestDetailEvents } from './pages/RequestDetailPage.js';
import { LoginPage, bindLoginEvents } from './pages/LoginPage.js';
import { AdminOrdersPage, bindAdminOrdersEvents } from './pages/AdminOrdersPage.js';
import { AdminOrderDetailPage, bindAdminOrderDetailEvents } from './pages/AdminOrderDetailPage.js';
import { ManageProductsPage, bindManageProductsEvents } from './pages/ManageProductsPage.js';
import { seedProducts } from './utils/seed.js';

window.seedProducts = seedProducts;

import { showToast } from './components/Toast.js';

// Initialize the reactive DOM app shell
const appContainer = document.getElementById('app');

/**
 * Render the proper layout structure based on route meta.
 * @param {string} pageHtml - HTML content of the page
 * @param {object} meta - Route metadata
 */
function renderLayout(pageHtml, meta = {}) {
  // If it's a full-page layout (like LoginPage)
  if (meta.fullPage) {
    appContainer.className = '';
    appContainer.innerHTML = `<div class="app-fullpage animate-fade-in">${pageHtml}</div>`;
    return appContainer.querySelector('.app-fullpage');
  }

  // App Shell Layout (Sidebar + Topbar + Content)
  appContainer.className = '';
  appContainer.innerHTML = `
    <div class="app-sidebar">
      ${Sidebar()}
    </div>
    <main class="app-main">
      <div class="app-topbar">
        ${Topbar()}
      </div>
      <div class="app-content animate-fade-in-up">
        ${pageHtml}
      </div>
    </main>
  `;

  // Bind Shared Layout Events
  bindSidebarEvents();
  bindTopbarEvents();

  return appContainer.querySelector('.app-content');
}

/* ── Navigation Guards ── */
router.beforeEach((to, from) => {
  const isLoggedIn = store.isLoggedIn;
  const isAdmin = store.isAdmin;

  // 1. Guard for Authentication
  if (to.meta.requiresAuth && !isLoggedIn) {
    showToast('Please log in.', 'info');
    return '#/login';
  }

  // 2. Guard for Admin Only
  if (to.meta.adminOnly && !isAdmin) {
    showToast('Unauthorized access. Admin privileges required.', 'error');
    return '#/products';
  }

  // 3. Redirect away from Login if already logged in
  if (to.path === '#/login' && isLoggedIn) {
    return isAdmin ? '#/admin/orders' : '#/products';
  }

  return true;
});

/* ── Route Registrations ── */
router
  // Home Showcase Page
  .on('#/', async () => {
    const pageEl = renderLayout(HomePage());
    bindHomeEvents();
  })
  
  // Product Catalog
  .on('#/products', async () => {
    const pageEl = renderLayout(ProductsPage());
    bindProductsEvents();
  })
  
  // Product Details
  .on('#/products/:id', async (params) => {
    const pageEl = renderLayout(ProductDetailPage(params));
    bindProductDetailEvents();
  })
  
  // User Cart / Quote Basket
  .on('#/cart', async () => {
    const pageEl = renderLayout(CartPage());
    bindCartEvents();
  }, { requiresAuth: true })
  
  // User Request History
  .on('#/requests', async () => {
    const pageEl = renderLayout(RequestsPage());
    bindRequestsEvents();
  }, { requiresAuth: true })
  
  // User Request Detail
  .on('#/requests/:id', async (params) => {
    const pageEl = renderLayout(RequestDetailPage(params));
    bindRequestDetailEvents();
  }, { requiresAuth: true })
  
  // Login / Register (Full-page layout)
  .on('#/login', async () => {
    renderLayout(LoginPage(), { fullPage: true });
    bindLoginEvents();
  })
  
  // Admin Portal: Orders Queue
  .on('#/admin/orders', async () => {
    const pageEl = renderLayout(AdminOrdersPage());
    bindAdminOrdersEvents();
  }, { requiresAuth: true, adminOnly: true })
  
  // Admin Portal: Order Detail Verification
  .on('#/admin/orders/:id', async (params) => {
    const pageEl = renderLayout(AdminOrderDetailPage(params));
    bindAdminOrderDetailEvents(params);
  }, { requiresAuth: true, adminOnly: true })
  
  // Admin Portal: Manage Products Catalog
  .on('#/admin/products', async () => {
    const pageEl = renderLayout(ManageProductsPage());
    bindManageProductsEvents();
  }, { requiresAuth: true, adminOnly: true });

/* ── State Change Global Listeners ── */
// Automatically sync badges/UI when cart updates reactive state
store.on('cart', () => {
  // Only update sidebar & topbar if we are currently using the app shell layout
  const sidebarContainer = document.querySelector('.app-sidebar');
  const topbarContainer = document.querySelector('.app-topbar');
  
  if (sidebarContainer && topbarContainer) {
    sidebarContainer.innerHTML = Sidebar();
    topbarContainer.innerHTML = Topbar();
    bindSidebarEvents();
    bindTopbarEvents();
  }
});

// Automatically sync UI when orders update in Firestore background
store.on('orders', () => {
  const path = window.location.hash || '#/';
  if (path.startsWith('#/requests') || path.startsWith('#/admin/orders')) {
    router._resolve();
  }
});

// Automatically sync UI when products update in Firestore background
store.on('products', () => {
  const path = window.location.hash || '#/';
  if (path.startsWith('#/products') || path.startsWith('#/admin/products')) {
    router._resolve();
  }
});

// Kick off routing after loading dynamic database products
(async () => {
  try {
    await store.initProducts();
  } catch (error) {
    console.error("Error initializing product catalog:", error);
  }
  router.start();
})();
