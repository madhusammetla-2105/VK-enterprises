import { store } from '../store.js';
import { router } from '../router.js';
import { CartItem } from '../components/CartItem.js';
import { generateOrderId } from '../utils/helpers.js';
import { showToast } from '../components/Toast.js';
import { bindQuantityCounterEvents } from '../components/QuantityCounter.js';

/**
 * Render the CartPage.
 * @returns {string} HTML string
 */
export function CartPage() {
  const cartItems = store.cart;
  const count = store.cartCount;

  if (cartItems.length === 0) {
    return `
      <div style="padding:var(--space-16) 0;text-align:center;display:flex;flex-direction:column;align-items:center;gap:var(--space-4);">
        <span class="material-symbols-outlined" style="font-size:4rem;color:var(--color-text-muted);">shopping_basket</span>
        <h1 class="page-title">Your Quote Basket is Empty</h1>
        <p style="color:var(--color-text-muted);max-width:320px;">You haven't added any surgical items or equipment to your quote list yet.</p>
        <a href="#/products" class="btn btn-primary">Browse Medical Catalog</a>
      </div>
    `;
  }

  return `
    <div class="cart-page-container">
      <h1 class="page-title">Quote Request Basket</h1>
      <p style="color:var(--color-text-muted);font-size:var(--body-sm-size);margin-block-start:2px;margin-block-end:var(--space-6);">
        Review your requisition requests before submitting for VK Enterprises approval.
      </p>

      <div class="cart-layout">
        <!-- Cart Items List -->
        <div class="cart-items" id="cart-items-container">
          ${cartItems.map(item => CartItem(item)).join('')}
        </div>

        <!-- Cart Summary Sidebar -->
        <div class="cart-summary">
          <h2 class="cart-summary-title">Request Summary</h2>
          
          <div class="cart-summary-row">
            <span>Total Categories</span>
            <span style="font-weight:500;">${cartItems.length}</span>
          </div>
          <div class="cart-summary-row" style="margin-block-end:var(--space-4);">
            <span>Total Item Units</span>
            <span style="font-weight:500;">${count} units</span>
          </div>

          <button class="btn btn-primary btn-lg" id="submit-quote-btn" style="inline-size:100%;margin-block-start:var(--space-6);display:flex;align-items:center;justify-content:center;gap:8px;">
            <span class="material-symbols-outlined">send</span>
            Submit Quote Requisition
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Bind CartPage events.
 */
export function bindCartEvents() {
  const container = document.querySelector('.cart-page-container');
  if (!container) return;

  // Bind Quantity Counter Events
  bindQuantityCounterEvents(container, (productId, newQty) => {
    store.updateCartQuantity(productId, newQty);

    // Update Cart Summary card values inline
    const summaryCard = container.querySelector('.cart-summary');
    if (summaryCard) {
      // Find the second row (Total Item Units)
      const countLabel = summaryCard.querySelector('.cart-summary-row:nth-of-type(2) span:last-child');
      if (countLabel) {
        countLabel.textContent = `${store.cartCount} units`;
      }
    }
  });

  // Remove Item Handler
  container.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-cart-item-btn');
    if (removeBtn) {
      const productId = removeBtn.dataset.productId;
      const item = store.cart.find(i => i.productId === productId);
      if (item) {
        store.removeFromCart(productId);
        showToast(`${item.productName} removed from basket`, 'info');
        router._resolve();
      }
    }
  });

  // Submit Requisition
  const submitBtn = document.getElementById('submit-quote-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      // Guard: User must be signed in
      if (!store.isLoggedIn) {
        showToast('Please sign in to submit a quote requisition.', 'error');
        router.navigate('#/login');
        return;
      }

      const orderId = generateOrderId();
      const newOrder = {
        id: orderId,
        userId: store.user.uid,
        userName: store.user.name,
        userOrganization: store.user.organization,
        userEmail: store.user.email,
        userPhone: store.user.phone,
        status: 'pending',
        totalAmount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        items: [...store.cart],
        adminNotes: '',
      };

      // Add to store orders and clear cart
      store.addOrder(newOrder);
      store.clearCart();

      showToast(`Quote request ${orderId} submitted successfully!`, 'success');
      router.navigate(`#/requests/${orderId}`);
    });
  }
}
