/* ===== LoginPage Component ===== */

import { store } from '../store.js';
import { router } from '../router.js';
import { showToast } from '../components/Toast.js';

let activeTab = 'login'; // 'login' | 'register'

/**
 * Render the Login & Register page.
 * @returns {string} HTML string
 */
export function LoginPage() {
  return `
    <div class="login-split-container">
      <!-- Left Side: Brand Banner -->
      <div class="login-split-left">
        <div class="login-split-left-glow"></div>
        <div class="login-split-left-content">
          <div class="login-split-logo-wrapper">
            <img src="/images/vk_logo.png" alt="VK Enterprises" />
          </div>
          
        </div>
        <div class="login-split-footer">
          © 2026 Sree VK Enterprises. All rights reserved.
        </div>
      </div>

      <!-- Right Side: Login Section -->
      <div class="login-split-right">
        <div class="login-split-right-content">
          <div class="login-mobile-brand">
            <img src="/images/vk_logo.png" alt="VK Enterprises" />
            <h2>VK Enterprises</h2>
          </div>

          <div class="login-tabs">
            <button class="login-tab ${activeTab === 'login' ? 'is-active' : ''}" id="tab-login" style="font-size:0.95rem;padding-block-end:var(--space-3); border-top:none; border-left:none; border-right:none; background:none;">Login</button>
            <button class="login-tab ${activeTab === 'register' ? 'is-active' : ''}" id="tab-register" style="font-size:0.95rem;padding-block-end:var(--space-3); border-top:none; border-left:none; border-right:none; background:none;">Register</button>
          </div>

          ${activeTab === 'login' ? renderLoginForm() : renderRegisterForm()}

          <div class="login-divider" style="margin-block:var(--space-5);">or quick login for B2B testing</div>

          <div class="quick-login-grid">
            <button class="btn btn-secondary" id="quick-login-user">
              <span class="material-symbols-outlined" style="color:var(--secondary);">local_hospital</span>
              Hospital User
            </button>
            <button class="btn btn-primary" id="quick-login-admin">
              <span class="material-symbols-outlined" style="color:#fff;">admin_panel_settings</span>
              VK Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderLoginForm() {
  return `
    <form class="login-form" id="login-form">
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="login-identifier" style="font-size:var(--body-sm-size);font-weight:500;">Email Address or Phone Number</label>
        <input type="text" id="login-identifier" class="input" placeholder="e.g. name@gmai.com or +91 9084756281" required value="rajesh@cityhospital.com" />
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="login-password" style="font-size:var(--body-sm-size);font-weight:500;">Password</label>
        <input type="password" id="login-password" class="input" placeholder="••••••••" required value="password123" />
      </div>
      <button type="submit" class="btn btn-primary" style="margin-block-start:var(--space-2); min-block-size: 2.75rem;">
        Sign In
      </button>
    </form>
  `;
}

function renderRegisterForm() {
  return `
    <form class="login-form" id="register-form" style="gap:var(--space-3.5);">
      <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
        <label for="reg-org" style="font-size:var(--body-sm-size);font-weight:500;">Hospital / Pharmacy Name</label>
        <input type="text" id="reg-org" class="input" placeholder="e.g. City General Hospital" required />
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
        <label for="reg-name" style="font-size:var(--body-sm-size);font-weight:500;">Contact Person Name</label>
        <input type="text" id="reg-name" class="input" placeholder="e.g. Dr. Rajesh Kumar" required />
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3);">
        <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
          <label for="reg-email" style="font-size:var(--body-sm-size);font-weight:500;">Email Address</label>
          <input type="email" id="reg-email" class="input" placeholder="name@hospital.com" required />
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
          <label for="reg-phone" style="font-size:var(--body-sm-size);font-weight:500;">Phone Number</label>
          <input type="tel" id="reg-phone" class="input" placeholder="+91 98765 43210" required />
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
        <label for="reg-address" style="font-size:var(--body-sm-size);font-weight:500;">Address</label>
        <input type="text" id="reg-address" class="input" placeholder="e.g. 123 Healthcare Lane" required />
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3);">
        <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
          <label for="reg-city" style="font-size:var(--body-sm-size);font-weight:500;">City</label>
          <input type="text" id="reg-city" class="input" placeholder="e.g. Hyderabad" required />
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
          <label for="reg-state" style="font-size:var(--body-sm-size);font-weight:500;">State</label>
          <input type="text" id="reg-state" class="input" placeholder="e.g. Telangana" required />
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3);">
        <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
          <label for="reg-country" style="font-size:var(--body-sm-size);font-weight:500;">Country</label>
          <input type="text" id="reg-country" class="input" placeholder="e.g. India" required />
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
          <label for="reg-pincode" style="font-size:var(--body-sm-size);font-weight:500;">Pincode</label>
          <input type="text" id="reg-pincode" class="input" placeholder="e.g. 500001" required pattern="[0-9]{5,6}" />
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1.5);">
        <label for="reg-pass" style="font-size:var(--body-sm-size);font-weight:500;">Password</label>
        <input type="password" id="reg-pass" class="input" placeholder="••••••••" required />
      </div>
      <button type="submit" class="btn btn-primary" style="margin-block-start:var(--space-2); min-block-size: 2.75rem;">
        Create Account
      </button>
    </form>
  `;
}

/**
 * Bind login page events.
 */
export function bindLoginEvents() {
  const container = document.querySelector('.login-split-container');
  if (!container) return;

  // Tab switching
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');

  if (tabLogin) {
    tabLogin.addEventListener('click', () => {
      if (activeTab !== 'login') {
        activeTab = 'login';
        router._resolve(); // Re-render current page
      }
    });
  }

  if (tabRegister) {
    tabRegister.addEventListener('click', () => {
      if (activeTab !== 'register') {
        activeTab = 'register';
        router._resolve();
      }
    });
  }

  // Quick Logins
  const qLoginUser = document.getElementById('quick-login-user');
  const qLoginAdmin = document.getElementById('quick-login-admin');

  if (qLoginUser) {
    qLoginUser.addEventListener('click', () => {
      store.setUser({
        uid: 'user-1',
        name: 'Dr. Rajesh Kumar',
        email: 'rajesh@cityhospital.com',
        phone: '+91 98765 43210',
        organization: 'City General Hospital',
        role: 'user',
      });
      showToast('Successfully logged in as Hospital User', 'success');
      router.navigate('#/products');
    });
  }

  if (qLoginAdmin) {
    qLoginAdmin.addEventListener('click', () => {
      store.setUser({
        uid: 'admin-1',
        name: 'Admin User',
        email: 'admin@vkenp.com',
        phone: '+91 11223 34455',
        organization: 'VK Enterprises',
        role: 'admin',
      });
      showToast('Successfully logged in as VK Enterprises Admin', 'success');
      router.navigate('#/admin/orders');
    });
  }

  // Form Submissions
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const identifier = document.getElementById('login-identifier').value.trim();

      // Check if user exists in Firestore
      const dbUser = await store.checkUserExists(identifier);
      if (dbUser) {
        store.setUser(dbUser);
        showToast(`Successfully logged in as ${dbUser.name}`, 'success');
        router.navigate(dbUser.role === 'admin' ? '#/admin/orders' : '#/products');
        return;
      }

      // Determine if logging in as admin or user based on identifier (for testing convenience)
      if (identifier.includes('admin')) {
        store.setUser({
          uid: 'admin-1',
          name: 'Admin User',
          email: identifier.includes('@') ? identifier : 'admin@vkenp.com',
          phone: !identifier.includes('@') ? identifier : '+91 11223 34455',
          organization: 'VK Enterprises',
          role: 'admin',
        });
        showToast('Successfully logged in as VK Enterprises Admin', 'success');
        router.navigate('#/admin/orders');
      } else {
        store.setUser({
          uid: 'user-1',
          name: 'Dr. Rajesh Kumar',
          email: identifier.includes('@') ? identifier : 'rajesh@cityhospital.com',
          phone: !identifier.includes('@') ? identifier : '+91 98765 43210',
          organization: 'City General Hospital',
          role: 'user',
        });
        showToast('Successfully logged in as Hospital User', 'success');
        router.navigate('#/products');
      }
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const org = document.getElementById('reg-org').value.trim();
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const phone = document.getElementById('reg-phone').value.trim();
      const address = document.getElementById('reg-address').value.trim();
      const city = document.getElementById('reg-city').value.trim();
      const state = document.getElementById('reg-state').value.trim();
      const country = document.getElementById('reg-country').value.trim();
      const pincode = document.getElementById('reg-pincode').value.trim();

      const userPayload = {
        uid: 'user-' + Date.now(),
        name,
        email,
        phone,
        organization: org,
        address,
        city,
        state,
        country,
        pincode,
        role: 'user',
      };

      await store.registerUser(userPayload);
      store.setUser(userPayload);

      showToast('Registration successful! Account created.', 'success');
      router.navigate('#/products');
    });
  }
}
