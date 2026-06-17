/* ===== Simple Store (Cart + User State) ===== */

import { MOCK_ORDERS, MOCK_PRODUCTS } from './utils/constants.js';
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase.js';

const CART_STORAGE_KEY = 'vk_cart';
const ORDERS_STORAGE_KEY = 'vk_orders';
const PRODUCTS_STORAGE_KEY = 'vk_products';

class Store {
  constructor() {
    this._listeners = {};
    this._state = {
      user: null,       // { uid, name, email, phone, organization, role }
      cart: this._loadCart(),
      orders: this._loadOrders(),
      products: this._loadProducts(),
      sidebarOpen: false,
    };
  }


  /* ── State Access ── */

  get state() {
    return this._state;
  }

  get user() {
    return this._state.user;
  }

  get cart() {
    return this._state.cart;
  }

  get isLoggedIn() {
    return this._state.user !== null;
  }

  get isAdmin() {
    return this._state.user?.role === 'admin';
  }

  get cartCount() {
    return this._state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  get cartTotal() {
    return this._state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  }

  /* ── User ── */

  setUser(user) {
    this._state.user = user;
    this._emit('user');
    this._emit('auth');
  }

  clearUser() {
    this._state.user = null;
    this._emit('user');
    this._emit('auth');
  }

  /* ── Cart ── */

  addToCart(product, quantity = 1) {
    const existing = this._state.cart.find(item => item.productId === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this._state.cart.push({
        productId: product.id,
        productName: product.name,
        productSku: product.sku,
        category: product.category,
        unitPrice: product.price,
        imageUrl: product.imageUrl || '',
        quantity,
      });
    }
    this._saveCart();
    this._emit('cart');
  }

  updateCartQuantity(productId, quantity) {
    const item = this._state.cart.find(i => i.productId === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this._saveCart();
      this._emit('cart');
    }
  }

  removeFromCart(productId) {
    this._state.cart = this._state.cart.filter(i => i.productId !== productId);
    this._saveCart();
    this._emit('cart');
  }

  clearCart() {
    this._state.cart = [];
    this._saveCart();
    this._emit('cart');
  }

  isInCart(productId) {
    return this._state.cart.some(i => i.productId === productId);
  }

  /* ── Sidebar ── */

  toggleSidebar() {
    this._state.sidebarOpen = !this._state.sidebarOpen;
    this._emit('sidebar');
  }

  closeSidebar() {
    this._state.sidebarOpen = false;
    this._emit('sidebar');
  }

  get orders() {
    return this._state.orders;
  }

  /* ── Orders ── */

  addOrder(order) {
    this._state.orders.unshift(order);
    this._saveOrders();
    this._emit('orders');
  }

  updateOrderStatus(orderId, status, adminNotes = '') {
    const order = this._state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      order.updatedAt = new Date().toISOString();
      if (adminNotes !== undefined) {
        order.adminNotes = adminNotes;
      }
      this._saveOrders();
      this._emit('orders');
      return true;
    }
    return false;
  }

  /* ── Events ── */

  on(event, callback) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(callback);
    return () => {
      this._listeners[event] = this._listeners[event].filter(cb => cb !== callback);
    };
  }

  _emit(event) {
    (this._listeners[event] || []).forEach(cb => cb(this._state));
  }

  /* ── Persistence ── */

  _loadCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  _saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this._state.cart));
    } catch {
      // Storage full or unavailable — silent fail
    }
  }

  _loadOrders() {
    try {
      const data = localStorage.getItem(ORDERS_STORAGE_KEY);
      return data ? JSON.parse(data) : MOCK_ORDERS;
    } catch {
      return MOCK_ORDERS;
    }
  }

  _saveOrders() {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(this._state.orders));
    } catch {
      // Storage full or unavailable
    }
  }

  /* ── Products ── */

  get products() {
    return this._state.products;
  }

  async initProducts() {
    if (!isFirebaseConfigured) {
      console.log("Firebase config not loaded. Using local storage fallback.");
      return;
    }
    try {
      const colRef = collection(db, 'products');
      const snapshot = await getDocs(colRef);
      const items = [];
      snapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
      });
      this._state.products = items;
      this._saveProducts();
      this._emit('products');
      console.log(`Loaded ${items.length} products dynamically from Firebase Firestore.`);
    } catch (error) {
      console.error("Firestore initProducts failed:", error);
    }
  }

  async addProduct(product) {
    this._state.products.unshift(product);
    this._saveProducts();
    this._emit('products');

    if (isFirebaseConfigured) {
      try {
        const docRef = doc(db, 'products', product.id);
        await setDoc(docRef, product);
      } catch (error) {
        console.error("Firestore addProduct failed:", error);
      }
    }
  }

  async updateProduct(id, updatedFields) {
    const idx = this._state.products.findIndex(p => p.id === id);
    if (idx !== -1) {
      this._state.products[idx] = { ...this._state.products[idx], ...updatedFields };
      this._saveProducts();
      this._emit('products');

      if (isFirebaseConfigured) {
        try {
          const docRef = doc(db, 'products', id);
          await updateDoc(docRef, updatedFields);
        } catch (error) {
          console.error("Firestore updateProduct failed:", error);
        }
      }
      return true;
    }
    return false;
  }

  async deleteProduct(id) {
    this._state.products = this._state.products.filter(p => p.id !== id);
    this._saveProducts();
    this._emit('products');

    if (isFirebaseConfigured) {
      try {
        const docRef = doc(db, 'products', id);
        await deleteDoc(docRef);
      } catch (error) {
        console.error("Firestore deleteProduct failed:", error);
      }
    }
  }

  _loadProducts() {
    try {
      const data = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      return data ? JSON.parse(data) : MOCK_PRODUCTS;
    } catch {
      return MOCK_PRODUCTS;
    }
  }

  _saveProducts() {
    try {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(this._state.products));
    } catch {
      // Storage full or unavailable
    }
  }
}

// Singleton store instance
export const store = new Store();
