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
  { id: 'all', label: 'All Products' }
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
export const MOCK_PRODUCTS = [
  {
    "id": "wt01",
    "name": "Thumb Spica Splint",
    "category": "general",
    "sku": "WT01",
    "description": "High-quality clinical thumb spica splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "wt02",
    "name": "Wrist Band (Drytex)",
    "category": "general",
    "sku": "WT02",
    "description": "High-quality clinical wrist band (drytex) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "wt03",
    "name": "Forearm Splint",
    "category": "general",
    "sku": "WT03",
    "description": "High-quality clinical forearm splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "wt04",
    "name": "Wrist Brace with Thumb Support (Elastic)",
    "category": "general",
    "sku": "WT04",
    "description": "High-quality clinical wrist brace with thumb support (elastic) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "wt05",
    "name": "Wrist Splint",
    "category": "general",
    "sku": "WT05",
    "description": "High-quality clinical wrist splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "wt06",
    "name": "Wrist Band (Elastic)",
    "category": "general",
    "sku": "WT06",
    "description": "High-quality clinical wrist band (elastic) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "wt07",
    "name": "Wrist Brace with Thumb Support (Drytex)",
    "category": "general",
    "sku": "WT07",
    "description": "High-quality clinical wrist brace with thumb support (drytex) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "wt08",
    "name": "Arm Immobilizer (Adjustable)",
    "category": "general",
    "sku": "WT08",
    "description": "High-quality clinical arm immobilizer (adjustable) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "wt09",
    "name": "Tourniquet",
    "category": "consumables",
    "sku": "WT09",
    "description": "High-quality clinical tourniquet orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ab01",
    "name": "Pelvic Binder",
    "category": "general",
    "sku": "AB01",
    "description": "High-quality clinical pelvic binder orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ab02",
    "name": "Abdominal Belt (Drytex)",
    "category": "general",
    "sku": "AB02",
    "description": "High-quality clinical abdominal belt (drytex) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ab03",
    "name": "Abdominal Belt (Elastic)",
    "category": "general",
    "sku": "AB03",
    "description": "High-quality clinical abdominal belt (elastic) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ab04",
    "name": "Hernia Belt",
    "category": "general",
    "sku": "AB04",
    "description": "High-quality clinical hernia belt orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ab05",
    "name": "Scrotal Support",
    "category": "general",
    "sku": "AB05",
    "description": "High-quality clinical scrotal support orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls01",
    "name": "Lumbar Sacral Belt",
    "category": "general",
    "sku": "LS01",
    "description": "High-quality clinical lumbar sacral belt orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls02",
    "name": "Lumbar Sacral Belt (Double Support)",
    "category": "general",
    "sku": "LS02",
    "description": "High-quality clinical lumbar sacral belt (double support) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls03",
    "name": "Lumbar Sacral Belt Corset (Double Support)",
    "category": "general",
    "sku": "LS03",
    "description": "High-quality clinical lumbar sacral belt corset (double support) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls04",
    "name": "Lumbar Sacral Belt Contoured (Single Pull)",
    "category": "general",
    "sku": "LS04",
    "description": "High-quality clinical lumbar sacral belt contoured (single pull) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls05",
    "name": "Lumbar Sacral Belt Contoured (Double Pull)",
    "category": "general",
    "sku": "LS05",
    "description": "High-quality clinical lumbar sacral belt contoured (double pull) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls06",
    "name": "Lumbar Sacral Belt Contoured (Double Support Deluxe)",
    "category": "general",
    "sku": "LS06",
    "description": "High-quality clinical lumbar sacral belt contoured (double support deluxe) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls07",
    "name": "Taylor Brace (Short)",
    "category": "general",
    "sku": "LS07",
    "description": "High-quality clinical taylor brace (short) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls08",
    "name": "Taylor Brace (Long)",
    "category": "general",
    "sku": "LS08",
    "description": "High-quality clinical taylor brace (long) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls09",
    "name": "Taylor Brace (Long)",
    "category": "general",
    "sku": "LS09",
    "description": "High-quality clinical taylor brace (long) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Special",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ls10",
    "name": "Posture Corrector",
    "category": "general",
    "sku": "LS10",
    "description": "High-quality clinical posture corrector orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "C, S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "vc01",
    "name": "Varicose Vein Stockings Above Knee (Pair)",
    "category": "consumables",
    "sku": "VC01",
    "description": "High-quality clinical varicose vein stockings above knee (pair) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "vc02",
    "name": "Varicose Vein Stockings Below Knee (Pair)",
    "category": "consumables",
    "sku": "VC02",
    "description": "High-quality clinical varicose vein stockings below knee (pair) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "vc05",
    "name": "Calf Supports (Pair)",
    "category": "consumables",
    "sku": "VC05",
    "description": "High-quality clinical calf supports (pair) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Regular",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "vc06",
    "name": "Thigh Support (Pair)",
    "category": "consumables",
    "sku": "VC06",
    "description": "High-quality clinical thigh support (pair) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl12",
    "name": "Thigh High Stocking (Silicon)",
    "category": "consumables",
    "sku": "SL12",
    "description": "High-quality clinical thigh high stocking (silicon) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Regular",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc01",
    "name": "Knee Cap Open Patella 4 Way",
    "category": "general",
    "sku": "KC01",
    "description": "High-quality clinical knee cap open patella 4 way orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc02",
    "name": "Knee Cap Soft 4 Way",
    "category": "general",
    "sku": "KC02",
    "description": "High-quality clinical knee cap soft 4 way orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc03",
    "name": "Knee Support with Hinge (Drytex)",
    "category": "general",
    "sku": "KC03",
    "description": "High-quality clinical knee support with hinge (drytex) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL, U",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc04",
    "name": "Knee Support without Hinge (Drytex)",
    "category": "general",
    "sku": "KC04",
    "description": "High-quality clinical knee support without hinge (drytex) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL, U",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc05",
    "name": "Knee Brace Long",
    "category": "general",
    "sku": "KC05",
    "description": "High-quality clinical knee brace long orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc06",
    "name": "Knee Brace Short",
    "category": "general",
    "sku": "KC06",
    "description": "High-quality clinical knee brace short orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc07",
    "name": "Patella Strap",
    "category": "general",
    "sku": "KC07",
    "description": "High-quality clinical patella strap orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "kc09",
    "name": "ROM Knee Brace",
    "category": "general",
    "sku": "KC09",
    "description": "High-quality clinical rom knee brace orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Regular",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ak01",
    "name": "Anklet 4 Way",
    "category": "general",
    "sku": "AK01",
    "description": "High-quality clinical anklet 4 way orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL, XXL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ak02",
    "name": "Ankle Binder",
    "category": "general",
    "sku": "AK02",
    "description": "High-quality clinical ankle binder orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ak03",
    "name": "Ankle Binder with Grip",
    "category": "general",
    "sku": "AK03",
    "description": "High-quality clinical ankle binder with grip orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ak04",
    "name": "Cast Shoe",
    "category": "general",
    "sku": "AK04",
    "description": "High-quality clinical cast shoe orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ak05",
    "name": "Ankle Brace",
    "category": "general",
    "sku": "AK05",
    "description": "High-quality clinical ankle brace orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ta01",
    "name": "Pelvic Traction Belt",
    "category": "surgical",
    "sku": "TA01",
    "description": "High-quality clinical pelvic traction belt orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ta02",
    "name": "Leg Traction",
    "category": "surgical",
    "sku": "TA02",
    "description": "High-quality clinical leg traction orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ta03",
    "name": "Cervical Traction",
    "category": "surgical",
    "sku": "TA03",
    "description": "High-quality clinical cervical traction orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Regular",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ta04",
    "name": "Skin Traction Set (Puf Liner)",
    "category": "surgical",
    "sku": "TA04",
    "description": "High-quality clinical skin traction set (puf liner) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "ta05",
    "name": "Ankle Traction",
    "category": "surgical",
    "sku": "TA05",
    "description": "High-quality clinical ankle traction orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sp01",
    "name": "Foot Drop Splint (Right/Left)",
    "category": "surgical",
    "sku": "SP01",
    "description": "High-quality clinical foot drop splint (right/left) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "C, S, M, L, XL",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sp02",
    "name": "Mallet Finger Splint",
    "category": "surgical",
    "sku": "SP02",
    "description": "High-quality clinical mallet finger splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sp03",
    "name": "Cot Splint",
    "category": "surgical",
    "sku": "SP03",
    "description": "High-quality clinical cot splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sp04",
    "name": "Finger Extension Splint",
    "category": "surgical",
    "sku": "SP04",
    "description": "High-quality clinical finger extension splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sp05",
    "name": "Frog Splint",
    "category": "surgical",
    "sku": "SP05",
    "description": "High-quality clinical frog splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sp06",
    "name": "Metacarpal Splint",
    "category": "surgical",
    "sku": "SP06",
    "description": "High-quality clinical metacarpal splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sp07",
    "name": "Hallux Valgus Splint",
    "category": "surgical",
    "sku": "SP07",
    "description": "High-quality clinical hallux valgus splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sl01",
    "name": "Silicone Insole",
    "category": "consumables",
    "sku": "SL01",
    "description": "High-quality clinical silicone insole orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl02",
    "name": "Silicone Gel Insole",
    "category": "consumables",
    "sku": "SL02",
    "description": "High-quality clinical silicone gel insole orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl03",
    "name": "Silicone Insole with Medial Arch",
    "category": "consumables",
    "sku": "SL03",
    "description": "High-quality clinical silicone insole with medial arch orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl04",
    "name": "Silicone Heel Cushions",
    "category": "consumables",
    "sku": "SL04",
    "description": "High-quality clinical silicone heel cushions orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L, XL",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl06",
    "name": "Silicone Gel Heel Cushion",
    "category": "consumables",
    "sku": "SL06",
    "description": "High-quality clinical silicone gel heel cushion orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl07",
    "name": "Metatarsal Pad (Single)",
    "category": "consumables",
    "sku": "SL07",
    "description": "High-quality clinical metatarsal pad (single) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl08",
    "name": "Bunion Splint",
    "category": "consumables",
    "sku": "SL08",
    "description": "High-quality clinical bunion splint orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Universal",
      "Sterility": "Sterile / Single Use"
    }
  },
  {
    "id": "sl09",
    "name": "Heel Cushion Indian (Soft)",
    "category": "consumables",
    "sku": "SL09",
    "description": "High-quality clinical heel cushion indian (soft) orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "S, M, L",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl10",
    "name": "Gel Ball",
    "category": "consumables",
    "sku": "SL10",
    "description": "High-quality clinical gel ball orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Regular",
      "Sterility": "Non-Sterile"
    }
  },
  {
    "id": "sl11",
    "name": "Silicone Hand Exercise Ball",
    "category": "consumables",
    "sku": "SL11",
    "description": "High-quality clinical silicone hand exercise ball orthopedic support offering patient stabilization and comfort.",
    "price": 0,
    "stockStatus": "in_stock",
    "imageUrl": "",
    "specs": {
      "Sizes Available": "Regular",
      "Sterility": "Non-Sterile"
    }
  }
];

export const MOCK_ORDERS = [];
