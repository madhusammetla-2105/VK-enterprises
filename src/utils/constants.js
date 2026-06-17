/* ===== Constants ===== */

export const ROUTES = {
  HOME:               '#/',
  PRODUCTS:           '#/products',
  PRODUCT_DETAIL:     '#/products/',        // + :id
  CART:               '#/cart',
  REQUESTS:           '#/requests',
  REQUEST_DETAIL:     '#/requests/',         // + :id
  LOGIN:              '#/login',
  ADMIN_ORDERS:       '#/admin/orders',
  ADMIN_ORDER_DETAIL: '#/admin/orders/',     // + :id
  ADMIN_PRODUCTS:     '#/admin/products',
};

export const CATEGORIES = [
  { id: 'all',          label: 'All Products' },
  { id: 'surgical',     label: 'Surgical Tools' },
  { id: 'diagnostics',  label: 'Diagnostics' },
  { id: 'emergency',    label: 'Emergency Care' },
  { id: 'consumables',  label: 'Consumables' },
  { id: 'lab',          label: 'Lab' },
  { id: 'general',      label: 'General' },
];

export const ORDER_STATUS = {
  PENDING:    'pending',
  ACCEPTED:   'accepted',
  DISPATCHED: 'dispatched',
  DELIVERED:  'delivered',
  REJECTED:   'rejected',
};

export const ORDER_STATUS_FLOW = [
  ORDER_STATUS.PENDING,
  ORDER_STATUS.ACCEPTED,
  ORDER_STATUS.DISPATCHED,
  ORDER_STATUS.DELIVERED,
];

export const STATUS_LABELS = {
  [ORDER_STATUS.PENDING]:    'Pending',
  [ORDER_STATUS.ACCEPTED]:   'Accepted',
  [ORDER_STATUS.DISPATCHED]: 'Dispatched',
  [ORDER_STATUS.DELIVERED]:  'Delivered',
  [ORDER_STATUS.REJECTED]:   'Rejected',
};

export const STOCK_STATUS = {
  IN_STOCK:     'in_stock',
  LOW:          'low',
  BACKORDER:    'backorder',
  OUT_OF_STOCK: 'out_of_stock',
};

export const STOCK_LABELS = {
  [STOCK_STATUS.IN_STOCK]:     'IN STOCK',
  [STOCK_STATUS.LOW]:          'LOW',
  [STOCK_STATUS.BACKORDER]:    'BACKORD',
  [STOCK_STATUS.OUT_OF_STOCK]: 'OUT OF STOCK',
};

export const ITEMS_PER_PAGE = 12;

/* ── Mock Product Data ── */
export const MOCK_PRODUCTS = [];

export const MOCK_ORDERS = [];
