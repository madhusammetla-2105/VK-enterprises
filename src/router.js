/* ===== Hash-Based SPA Router ===== */

class Router {
  constructor() {
    this.routes = [];
    this.currentRoute = null;
    this.beforeEachGuard = null;
    window.addEventListener('hashchange', () => this._resolve());
  }

  /**
   * Register a route.
   * @param {string} path - e.g. '#/products', '#/products/:id'
   * @param {Function} handler - async (params) => void
   * @param {object} meta - { requiresAuth, adminOnly }
   */
  on(path, handler, meta = {}) {
    // Convert path pattern to regex
    const paramNames = [];
    const regexStr = path
      .replace(/:([^/]+)/g, (_, name) => {
        paramNames.push(name);
        return '([^/]+)';
      })
      .replace(/\//g, '\\/');

    this.routes.push({
      path,
      regex: new RegExp(`^${regexStr}$`),
      paramNames,
      handler,
      meta,
    });
    return this;
  }

  /**
   * Set a navigation guard that runs before each route change.
   * @param {Function} guard - (to, from) => boolean | string
   */
  beforeEach(guard) {
    this.beforeEachGuard = guard;
  }

  /**
   * Navigate to a hash path.
   * @param {string} path
   */
  navigate(path) {
    window.location.hash = path;
  }

  /**
   * Start the router — resolve the current hash.
   */
  start() {
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    }
    this._resolve();
  }

  /**
   * Resolve the current hash against registered routes.
   */
  async _resolve() {
    const hash = window.location.hash || '#/';
    const previousRoute = this.currentRoute;

    for (const route of this.routes) {
      const match = hash.match(route.regex);
      if (match) {
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(match[i + 1]);
        });

        const to = { path: route.path, hash, params, meta: route.meta };

        // Run navigation guard
        if (this.beforeEachGuard) {
          const result = this.beforeEachGuard(to, previousRoute);
          if (result === false) return;
          if (typeof result === 'string') {
            this.navigate(result);
            return;
          }
        }

        this.currentRoute = to;
        await route.handler(params);
        // Scroll to top on route change
        window.scrollTo(0, 0);
        return;
      }
    }

    // 404 — fallback to home
    this.navigate('#/');
  }

  /**
   * Get the current route hash.
   * @returns {string}
   */
  getCurrentHash() {
    return window.location.hash || '#/';
  }
}

// Singleton router instance
export const router = new Router();
