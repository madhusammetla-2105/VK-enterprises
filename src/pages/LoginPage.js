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
    <div class="login-container" style="animation:fadeIn var(--transition-base) both;">
      <div class="login-brand" style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-block-end: var(--space-6);">
        <div style="background: #03144f; padding: var(--space-3) var(--space-4); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: inline-flex; align-items: center; justify-content: center; margin-block-end: var(--space-3); max-inline-size: 240px;">
          <img src="/images/vk_logo.png" alt="VK Enterprises" style="max-inline-size: 100%; block-size: auto; max-block-size: 55px; object-fit: contain;" />
        </div>
        <div class="login-brand-subtitle" style="font-size:0.875rem;color:var(--color-text-muted);margin-block-start:var(--space-1);font-weight:500;">B2B Medical Supply & Equipment Portal</div>
      </div>

      <div class="login-card" style="box-shadow:0px 8px 32px rgba(0,0,0,0.03);border-color:var(--color-border);">
        <div class="login-tabs">
          <button class="login-tab ${activeTab === 'login' ? 'is-active' : ''}" id="tab-login" style="font-size:0.95rem;padding-block-end:var(--space-3);">Login</button>
          <button class="login-tab ${activeTab === 'register' ? 'is-active' : ''}" id="tab-register" style="font-size:0.95rem;padding-block-end:var(--space-3);">Register</button>
        </div>

        ${activeTab === 'login' ? renderLoginForm() : renderRegisterForm()}

        <div class="login-divider" style="margin-block:var(--space-5);">or quick login for B2B testing</div>

        <div style="display:flex;flex-direction:column;gap:var(--space-3);">
          <button class="btn btn-secondary" id="quick-login-user" style="inline-size:100%;display:flex;align-items:center;justify-content:center;gap:var(--space-2);min-block-size:2.75rem;border-color:var(--color-border);background:#fff;">
            <span class="material-symbols-outlined" style="color:var(--secondary);">local_hospital</span>
            Login as Hospital (User)
          </button>
          <button class="btn btn-primary" id="quick-login-admin" style="inline-size:100%;display:flex;align-items:center;justify-content:center;gap:var(--space-2);min-block-size:2.75rem;">
            <span class="material-symbols-outlined" style="color:#fff;">admin_panel_settings</span>
            Login as VK Staff (Admin)
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderLoginForm() {
  return `
    <form class="login-form" id="login-form">
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="login-email" style="font-size:var(--body-sm-size);font-weight:500;">Email Address</label>
        <input type="email" id="login-email" class="input" placeholder="name@hospital.com" required value="rajesh@cityhospital.com" />
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="login-password" style="font-size:var(--body-sm-size);font-weight:500;">Password</label>
        <input type="password" id="login-password" class="input" placeholder="••••••••" required value="password123" />
      </div>
      <button type="submit" class="btn btn-primary" style="margin-block-start:var(--space-2);">
        Sign In
      </button>
    </form>
  `;
}

function renderRegisterForm() {
  return `
    <form class="login-form" id="register-form">
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="reg-org" style="font-size:var(--body-sm-size);font-weight:500;">Hospital / Pharmacy Name</label>
        <input type="text" id="reg-org" class="input" placeholder="e.g. City General Hospital" required />
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="reg-name" style="font-size:var(--body-sm-size);font-weight:500;">Contact Person Name</label>
        <input type="text" id="reg-name" class="input" placeholder="e.g. Dr. Rajesh Kumar" required />
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="reg-email" style="font-size:var(--body-sm-size);font-weight:500;">Email Address</label>
        <input type="email" id="reg-email" class="input" placeholder="name@hospital.com" required />
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="reg-phone" style="font-size:var(--body-sm-size);font-weight:500;">Phone Number</label>
        <input type="tel" id="reg-phone" class="input" placeholder="+91 98765 43210" required />
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-2);">
        <label for="reg-pass" style="font-size:var(--body-sm-size);font-weight:500;">Password</label>
        <input type="password" id="reg-pass" class="input" placeholder="••••••••" required />
      </div>
      <button type="submit" class="btn btn-primary" style="margin-block-start:var(--space-2);">
        Create Account
      </button>
    </form>
  `;
}

/**
 * Bind login page events.
 */
export function bindLoginEvents() {
  const container = document.querySelector('.login-container');
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
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      
      // Determine if logging in as admin or user based on email (for testing convenience)
      if (email.includes('admin')) {
        store.setUser({
          uid: 'admin-1',
          name: 'Admin User',
          email,
          phone: '+91 11223 34455',
          organization: 'VK Enterprises',
          role: 'admin',
        });
        showToast('Successfully logged in as VK Enterprises Admin', 'success');
        router.navigate('#/admin/orders');
      } else {
        store.setUser({
          uid: 'user-1',
          name: 'Dr. Rajesh Kumar',
          email,
          phone: '+91 98765 43210',
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
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const org = document.getElementById('reg-org').value.trim();
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const phone = document.getElementById('reg-phone').value.trim();

      store.setUser({
        uid: 'user-' + Date.now(),
        name,
        email,
        phone,
        organization: org,
        role: 'user',
      });

      showToast('Registration successful! Account created.', 'success');
      router.navigate('#/products');
    });
  }
}
