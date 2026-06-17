/* ===== HomePage Component ===== */

import { router } from '../router.js';
import { CATEGORIES } from '../utils/constants.js';
import { ProductCard } from '../components/ProductCard.js';
import { store } from '../store.js';
import { showToast } from '../components/Toast.js';

/**
 * Render the HomePage.
 * @returns {string} HTML string
 */
export function HomePage() {
  // Filter out the 'all' category for the category grid showcase
  const displayCategories = CATEGORIES.filter(cat => cat.id !== 'all');
  
  // Showcase the first 4 products
  const featuredProducts = store.products.slice(0, 4);
  const featuredProductsHtml = featuredProducts.map(p => ProductCard(p)).join('');

  const categoryIcons = {
    surgical: 'chirurgy',
    diagnostics: 'clinical_suite',
    general: 'stethoscope',
    emergency: 'emergency',
    consumables: 'package_2',
    lab: 'science',
  };

  return `
    <div class="home-page-container">
      <!-- Hero Section -->
      <section class="home-hero">
        <h1 class="home-hero-title">Sree VK Enterprises (Surgicals)</h1>
        <p class="home-hero-subtitle" style="font-weight: 600; font-size: 1.25rem; color: var(--secondary); margin-block-end: var(--space-2);">
          All Surgical Items and Hospital Equipments
        </p>
        <p class="home-hero-subtitle">
          Sourcing and delivering premium, certified clinical tools, wheelchairs, diagnostics, walkers, and specialized surgical consumables directly to hospitals, clinics, and home-care clients.
        </p>
        <div style="display:flex;gap:var(--space-4);margin-block-start:var(--space-4);">
          <a href="#/products" class="btn btn-primary btn-lg" style="display:inline-flex;align-items:center;gap:8px;">
            Browse Inventory
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
          <a href="#/login" class="btn btn-secondary btn-lg">Partner Portal</a>
        </div>
      </section>

      <!-- Stats Grid -->
      <section class="home-stats">
        <div class="home-stat">
          <div class="home-stat-value">15+</div>
          <div class="home-stat-label">Years of Service</div>
        </div>
        <div class="home-stat">
          <div class="home-stat-value">500+</div>
          <div class="home-stat-label">Hospitals & Labs Served</div>
        </div>
        <div class="home-stat">
          <div class="home-stat-value">10,000+</div>
          <div class="home-stat-label">Products Supplied</div>
        </div>
        <div class="home-stat">
          <div class="home-stat-value">99.9%</div>
          <div class="home-stat-label">On-Time Medical Delivery</div>
        </div>
      </section>

      <!-- Category Showcase -->
      <section class="home-categories">
        <h2 class="home-section-title">Specialized Medical Categories</h2>
        <p style="text-align:center;color:var(--color-text-muted);margin-block-end:var(--space-8);margin-block-start:var(--space-2);">
          Select a category to view high-precision medical catalog.
        </p>
        <div class="home-categories-grid">
          ${displayCategories.map(cat => `
            <div class="home-category-card" data-category="${cat.id}">
              <span class="material-symbols-outlined home-category-icon">
                ${categoryIcons[cat.id] || 'medical_services'}
              </span>
              <div class="home-category-name">${cat.label}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Featured Products Showcase -->
      <section class="home-featured-products" style="margin-block: var(--space-12);">
        <h2 class="home-section-title">Featured Products</h2>
        <p style="text-align:center;color:var(--color-text-muted);margin-block-end:var(--space-8);margin-block-start:var(--space-2);">
          Explore our handpicked range of high-precision medical machinery and equipment.
        </p>
        <div class="products-grid">
          ${featuredProductsHtml}
        </div>
        <div style="display:flex;justify-content:center;margin-block-start:var(--space-8);">
          <a href="#/products" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;">
            See All Products
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>

      <!-- About Section -->
      <section style="margin-block:var(--space-16);padding:var(--space-8);background-color:var(--color-card);border:1px solid var(--color-border);border-radius:var(--radius-lg);">
        <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:var(--space-8);align-items:center;">
          <div>
            <h2 style="font-family:var(--font-heading);font-size:1.75rem;font-weight:700;margin-block-end:var(--space-4);">About Sree VK Enterprises (Surgicals)</h2>
            <p style="line-height:1.6;color:var(--color-text-muted);margin-block-end:var(--space-4);">
              Established in Kakinada, Sree VK Enterprises (Surgicals) is a premier supplier of **all surgical items and hospital equipments**. We serve hospitals, diagnostic labs, clinics, and home-care patients across Andhra Pradesh with clinical-grade equipment and critical care supplies.
            </p>
            <p style="line-height:1.6;color:var(--color-text-muted);margin-block-end:var(--space-4);">
              Our catalog includes a comprehensive selection of high-precision diagnostic BP operators, glucometers, wheelchairs, examination gloves, walkers, disposable surgicals, suture materials, rehabilitation belts, hospital beds, mobility aids, orthopedic support products, and clinical instruments.
            </p>
            <p style="line-height:1.6;color:var(--color-text-muted);">
              Procurement officers, pharmaceutical purchasers, and medical facility managers can use our B2B portal to request custom quote estimations, track critical supply pipelines, and schedule recurring distribution drop-offs.
            </p>
          </div>
          <div style="background:linear-gradient(135deg,#005EB8 0%,#002b54 100%);color:#fff;padding:var(--space-8);border-radius:var(--radius);display:flex;flex-direction:column;gap:var(--space-4);">
            <div style="font-family:var(--font-heading);font-size:1.25rem;font-weight:700;">Our Clinical Standards</div>
            <div style="display:flex;align-items:flex-start;gap:var(--space-3);">
              <span class="material-symbols-outlined" style="color:var(--tertiary);">verified</span>
              <div>Certified Surgical Grade Consumables</div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:var(--space-3);">
              <span class="material-symbols-outlined" style="color:var(--tertiary);">verified</span>
              <div>Autoclave & Sterile Grade Suture Kits</div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:var(--space-3);">
              <span class="material-symbols-outlined" style="color:var(--tertiary);">verified</span>
              <div>Hospital-Beds & Mobility Aids Distribution</div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:var(--space-3);">
              <span class="material-symbols-outlined" style="color:var(--tertiary);">verified</span>
              <div>Local Kakinada Support & Calibration</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Info Section -->
      <section style="text-align:center;padding:var(--space-8) 0;border-block-start:1px solid var(--color-border);margin-block-start:var(--space-12);">
        <h3 style="font-family:var(--font-heading);font-size:1.35rem;font-weight:700;margin-block-end:var(--space-3);">VK Enterprises Kakinada Branch</h3>
        <p style="color:var(--color-text-muted);font-size:var(--body-sm-size);margin-block-end:var(--space-6);max-width:540px;margin-inline:auto;line-height:1.5;">
          <strong>Address:</strong> #56-5-2, Munsib Junction, Jagannaickpur, Kakinada, Andhra Pradesh - 533002
        </p>
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:var(--space-8);font-family:var(--font-mono);font-size:var(--body-sm-size);margin-block-end:var(--space-4);">
          <div>
            <span style="color:var(--secondary);font-weight:700;">TEL:</span> +91 9550001791 / +91 7893945611
          </div>
          <div>
            <span style="color:var(--secondary);font-weight:700;">EMAIL:</span> sales@vkenterprises.com
          </div>
          <div>
            <span style="color:var(--secondary);font-weight:700;">HOURS:</span> Mon-Sat, 9AM-8PM IST
          </div>
        </div>
      </section>
    </div>
  `;
}

/**
 * Bind HomePage events.
 */
export function bindHomeEvents() {
  const container = document.querySelector('.home-page-container');
  if (!container) return;

  const categoriesGrid = container.querySelector('.home-categories-grid');
  if (categoriesGrid) {
    categoriesGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.home-category-card');
      if (card) {
        const cat = card.dataset.category;
        router.navigate(`#/products?category=${cat}`);
      }
    });
  }

  // Handle clicks on product cards in the featured section
  container.addEventListener('click', (e) => {
    // 1. Add to Cart button clicked
    const addBtn = e.target.closest('.add-to-quote-btn');
    if (addBtn) {
      e.preventDefault();
      
      // Guard: Only logged in users can add to cart
      if (!store.isLoggedIn) {
        showToast('Please log in.', 'info');
        router.navigate('#/login');
        return;
      }

      const productId = addBtn.dataset.productId;
      const product = store.products.find(p => p.id === productId);

      if (product) {
        if (product.stockStatus === 'out_of_stock') {
          showToast('This item is currently out of stock.', 'error');
          return;
        }

        store.addToCart(product, 1);
        showToast(`${product.name} added to cart`, 'success');
        
        // Re-render router/layout to update cart badges/UI
        router._resolve();
      }
      return;
    }

    // 2. Product Card body clicked (navigate to details page)
    const card = e.target.closest('.product-card');
    if (card) {
      const productId = card.dataset.productId;
      router.navigate(`#/products/${productId}`);
    }
  });
}
