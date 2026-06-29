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
  PACKING:    'packing',
  DISPATCHED: 'dispatched',
  DELIVERED:  'delivered',
  REJECTED:   'rejected',
};

export const ORDER_STATUS_FLOW = [
  ORDER_STATUS.PENDING,
  ORDER_STATUS.ACCEPTED,
  ORDER_STATUS.PACKING,
  ORDER_STATUS.DISPATCHED,
  ORDER_STATUS.DELIVERED,
];

export const STATUS_LABELS = {
  [ORDER_STATUS.PENDING]:    'Pending',
  [ORDER_STATUS.ACCEPTED]:   'Accepted',
  [ORDER_STATUS.PACKING]:    'Packing',
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208866/WT01_Thumb_Spica_Splint-1_zdssfb.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208866/WT01_Thumb_Spica_Splint-1_zdssfb.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208887/WT01_Thumb_Spica_Splint-2_aosubz.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208911/WT02_Wrist_Band_Drytex_-1_okd0bc.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208911/WT02_Wrist_Band_Drytex_-1_okd0bc.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208927/WT02_Wrist_Band_Drytex_-2_mk4sre.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208949/WT03_Forearm_Splint-1_kikqwv.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208949/WT03_Forearm_Splint-1_kikqwv.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780208979/WT03_Forearm_Splint-2_v25oj5.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209016/WT04_Wrist_Brace_with_Thumb_Support_Elastic_-1_xl3abp.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209016/WT04_Wrist_Brace_with_Thumb_Support_Elastic_-1_xl3abp.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209038/WT04_Wrist_Brace_with_Thumb_Support_Elastic_-2_hubdei.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209066/WT05_Wrist_Splint-1_c6t1x7.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209066/WT05_Wrist_Splint-1_c6t1x7.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209084/WT05_Wrist_Splint-2_m5gflw.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209120/WT06_Wrist_Band_Elastic_-1_xhh4au.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209120/WT06_Wrist_Band_Elastic_-1_xhh4au.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209140/WT06_Wrist_Band_Elastic_-2_obmq7t.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209163/WT07_Wrist_Brace_with_Thumb_Support_Drytex_-1_fhasgb.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209163/WT07_Wrist_Brace_with_Thumb_Support_Drytex_-1_fhasgb.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209239/WT07_Wrist_Brace_with_Thumb_Support_Drytex_-2_umtrgx.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209271/WT08_Arm_Immobilizer_Adjustable_-1_gwirfz.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209271/WT08_Arm_Immobilizer_Adjustable_-1_gwirfz.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209291/WT08_Arm_Immobilizer_Adjustable_-2_zlmlkx.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209328/WT09_Tourniquet-1_uq7kep.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209328/WT09_Tourniquet-1_uq7kep.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209328/WT09_Tourniquet-1_uq7kep.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209399/AB01_Pelvic_Binder-1_yie6mn.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209399/AB01_Pelvic_Binder-1_yie6mn.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209418/AB01_Pelvic_Binder-2_opiklc.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209441/AB02_Abdominal_Belt_Drytex_-1_i17zcw.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209441/AB02_Abdominal_Belt_Drytex_-1_i17zcw.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209459/AB02_Abdominal_Belt_Drytex_-2_zw5tmb.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209481/AB03_Abdominal_Belt_Elastic_-1_zdrwp8.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209481/AB03_Abdominal_Belt_Elastic_-1_zdrwp8.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209481/AB03_Abdominal_Belt_Elastic_-1_zdrwp8.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209518/AB04_Hernia_Belt-1_laz7a6.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209518/AB04_Hernia_Belt-1_laz7a6.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209540/AB04_Hernia_Belt-2_vgcbjj.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209568/AB05_Scrotal_Support-1_oed1mq.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209568/AB05_Scrotal_Support-1_oed1mq.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209588/AB05_Scrotal_Support-2_kuwevb.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209695/LS01_Lumbar_Sacral_Belt-1_rcsr5g.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209695/LS01_Lumbar_Sacral_Belt-1_rcsr5g.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209714/LS01_Lumbar_Sacral_Belt-2_a390dp.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209756/LS02_Lumbar_Sacral_Belt_Double_Support_-1_t6xhr3.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209756/LS02_Lumbar_Sacral_Belt_Double_Support_-1_t6xhr3.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209778/LS02_Lumbar_Sacral_Belt_Double_Support_-2_up5obd.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209990/LS03_Lumbar_Sacral_Belt_Corset_Double_Support_-1_t7tvqz.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780209990/LS03_Lumbar_Sacral_Belt_Corset_Double_Support_-1_t7tvqz.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210009/LS03_Lumbar_Sacral_Belt_Corset_Double_Support_-2_ydd5lr.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210040/LS03_Lumbar_Sacral_Belt_Corset_Double_Support_-1_bmzfsl.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210040/LS03_Lumbar_Sacral_Belt_Corset_Double_Support_-1_bmzfsl.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210057/LS03_Lumbar_Sacral_Belt_Corset_Double_Support_-2_etlos2.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210114/LS05_Lumbar_Sacral_Belt_Contoured_Double_Pull_-1_rqpmxw.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210114/LS05_Lumbar_Sacral_Belt_Contoured_Double_Pull_-1_rqpmxw.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210130/LS05_Lumbar_Sacral_Belt_Contoured_Double_Pull_-2_b9jyag.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210159/LS06_Lumbar_Sacral_Belt_Contoured_Double_Support_Deluxe_-1_nk47hp.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210159/LS06_Lumbar_Sacral_Belt_Contoured_Double_Support_Deluxe_-1_nk47hp.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210185/LS06_Lumbar_Sacral_Belt_Contoured_Double_Support_Deluxe_-2_ekomxn.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210219/LS07_Taylor_Brace_Short_-1_httjiz.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210219/LS07_Taylor_Brace_Short_-1_httjiz.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210237/LS07_Taylor_Brace_Short_-2_wfsb1m.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210263/LS08_Taylor_Brace_Long_-1_z037by.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210263/LS08_Taylor_Brace_Long_-1_z037by.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210294/LS08_Taylor_Brace_Long_-2_dkfkzi.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210322/LS09_Taylor_Brace_Long_-1_amcemq.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210322/LS09_Taylor_Brace_Long_-1_amcemq.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210343/LS09_Taylor_Brace_Long_-2_tteuxn.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210368/LS10_Posture_Corrector-1_eu5pxo.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210368/LS10_Posture_Corrector-1_eu5pxo.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210387/LS10_Posture_Corrector-2_wxhkv2.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210448/VC01_Varicose_Vein_Stockings_Above_Knee_Pair_-1_y9j8r3.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210448/VC01_Varicose_Vein_Stockings_Above_Knee_Pair_-1_y9j8r3.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210468/VC01_Varicose_Vein_Stockings_Above_Knee_Pair_-2_o5qw4x.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210468/VC01_Varicose_Vein_Stockings_Above_Knee_Pair_-2_o5qw4x.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210468/VC01_Varicose_Vein_Stockings_Above_Knee_Pair_-2_o5qw4x.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210620/VC02_Varicose_Vein_Stockings_Below_Knee_Pair_-2_adgosl.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210647/VC05_Calf_Supports_Pair_-1_wo9p3y.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210647/VC05_Calf_Supports_Pair_-1_wo9p3y.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210664/VC05_Calf_Supports_Pair_-2_ni01cj.webp"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210692/VC06_Thigh_Support_Pair_-1_pgc7wk.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210692/VC06_Thigh_Support_Pair_-1_pgc7wk.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210712/VC06_Thigh_Support_Pair_-2_auey3t.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210735/SL12_Thigh_High_Stocking_Silicon_-1_yf7obu.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210735/SL12_Thigh_High_Stocking_Silicon_-1_yf7obu.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210759/SL12_Thigh_High_Stocking_Silicon_-2_ql1wxb.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210839/KC01_Knee_Cap_Open_Patella_4_Way-1_hppiww.png",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210839/KC01_Knee_Cap_Open_Patella_4_Way-1_hppiww.png", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210861/KC01_Knee_Cap_Open_Patella_4_Way-2_qmpmbc.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210942/KC02_Knee_Cap_Soft_4_Way-1_uagmth.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210942/KC02_Knee_Cap_Soft_4_Way-1_uagmth.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210962/KC02_Knee_Cap_Soft_4_Way-2_l5eyn0.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210962/KC02_Knee_Cap_Soft_4_Way-2_l5eyn0.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780210962/KC02_Knee_Cap_Soft_4_Way-2_l5eyn0.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211076/KC03_Knee_Support_with_Hinge_Drytex_-2_ww4v9b.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211098/KC04_Knee_Support_without_Hinge_Drytex_-1_b4v3s0.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211098/KC04_Knee_Support_without_Hinge_Drytex_-1_b4v3s0.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211116/KC04_Knee_Support_without_Hinge_Drytex_-2_y0tmu1.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211160/KC05_Knee_Brace_Long-1_mxorsv.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211160/KC05_Knee_Brace_Long-1_mxorsv.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211185/KC05_Knee_Brace_Long-2_npb2j6.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211240/KC06_Knee_Brace_Short-1_g8b4rt.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211240/KC06_Knee_Brace_Short-1_g8b4rt.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211268/KC06_Knee_Brace_Short-2_rhmanc.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211291/KC07_Patella_Strap-1_xyzgku.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211291/KC07_Patella_Strap-1_xyzgku.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211310/KC07_Patella_Strap-2_agud4o.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211332/KC09_ROM_Knee_Brace-1_p3wnz8.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211332/KC09_ROM_Knee_Brace-1_p3wnz8.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211350/KC09_ROM_Knee_Brace-2_nrmfwn.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211373/AK01_Anklet_4_Way-1_lywm1b.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211373/AK01_Anklet_4_Way-1_lywm1b.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211393/AK01_Anklet_4_Way-2_gzqkfh.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211419/AK02_Ankle_Binder-1_ycpdbo.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211419/AK02_Ankle_Binder-1_ycpdbo.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211438/AK02_Ankle_Binder-2_uwtgep.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211464/AK03_Ankle_Binder_with_Grip-1_auygkd.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211464/AK03_Ankle_Binder_with_Grip-1_auygkd.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211484/AK03_Ankle_Binder_with_Grip-2_tepzue.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211534/AK04_Cast_Shoe-1_owhkay.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211534/AK04_Cast_Shoe-1_owhkay.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211556/AK04_Cast_Shoe-2_kzyai4.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211577/AK05_Ankle_Brace-1_effbpy.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211577/AK05_Ankle_Brace-1_effbpy.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211577/AK05_Ankle_Brace-1_effbpy.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211632/TA01_Pelvic_Traction_Belt-1_cyvfxz.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211632/TA01_Pelvic_Traction_Belt-1_cyvfxz.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211653/TA01_Pelvic_Traction_Belt-2_unzzxi.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211678/TA02_Leg_Traction-1_pwhwuz.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211678/TA02_Leg_Traction-1_pwhwuz.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211758/TA02_Leg_Traction-2_bdgjs8.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211785/TA03_Cervical_Traction-1_xfn1ko.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211785/TA03_Cervical_Traction-1_xfn1ko.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211803/TA03_Cervical_Traction-2_wn4udm.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211830/TA04_Skin_Traction_Set_Puf_Liner_-1_rjmngw.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211830/TA04_Skin_Traction_Set_Puf_Liner_-1_rjmngw.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211851/TA04_Skin_Traction_Set_Puf_Liner_-2_n0gulh.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211889/TA05_Ankle_Traction-1_kln8eg.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211889/TA05_Ankle_Traction-1_kln8eg.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211910/TA05_Ankle_Traction-2_tudw0y.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211939/SP01-1_k8h3h0.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211939/SP01-1_k8h3h0.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780211988/SP01-2_ezj8va.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212010/SP02_Mallet_Finger_Splint-1_knk5fu.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212010/SP02_Mallet_Finger_Splint-1_knk5fu.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212030/SP02_Mallet_Finger_Splint-2_fj5obs.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212052/SP03_Cot_Splint-1_y3ldqv.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212052/SP03_Cot_Splint-1_y3ldqv.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212173/SP03_Cot_Splint-2_xeb6nb.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212215/SP04_Finger_Extension_Splint-1_twnguy.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212215/SP04_Finger_Extension_Splint-1_twnguy.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212237/SP04_Finger_Extension_Splint-2_yghvfo.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212263/SP05_Frog_Splint-1_ncjaj9.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212263/SP05_Frog_Splint-1_ncjaj9.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212263/SP05_Frog_Splint-1_ncjaj9.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212310/SP06_Metacarpal_Splint-1_vnvrqi.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212310/SP06_Metacarpal_Splint-1_vnvrqi.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212329/SP06_Metacarpal_Splint-2_vxocpp.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212354/SP07_Hallux_Valgus_Splint-1_e8awrs.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212354/SP07_Hallux_Valgus_Splint-1_e8awrs.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212375/SP07_Hallux_Valgus_Splint-2_qkjbfg.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212418/SL01_Silicone_Insole-1_btsecj.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212418/SL01_Silicone_Insole-1_btsecj.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212440/SL01_Silicone_Insole-2_zctjxy.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212467/SL02_Silicone_Gel_Insole-1_tll2xo.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212467/SL02_Silicone_Gel_Insole-1_tll2xo.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212488/SL02_Silicone_Gel_Insole-2_big6ub.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212511/SL03_Silicone_Insole_with_Medial_Arch-1_wlugcg.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212511/SL03_Silicone_Insole_with_Medial_Arch-1_wlugcg.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212536/SL03_Silicone_Insole_with_Medial_Arch-2_wlmoon.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212639/SL04_Silicone_Heel_Cushions-1_thviey.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212639/SL04_Silicone_Heel_Cushions-1_thviey.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212661/SL04_Silicone_Heel_Cushions-2_usyepc.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212687/SL06_Silicone_Gel_Heel_Cushion-1_twqyav.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212687/SL06_Silicone_Gel_Heel_Cushion-1_twqyav.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212706/SL06_Silicone_Gel_Heel_Cushion-2_zdycnh.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212731/SL07_Metatarsal_Pad_Single_-1_ijwaze.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212731/SL07_Metatarsal_Pad_Single_-1_ijwaze.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212750/SL07_Metatarsal_Pad_Single_-2_zxzqvi.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212774/SL08_Bunion_Splint-1_kdasax.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212774/SL08_Bunion_Splint-1_kdasax.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212796/SL08_Bunion_Splint-2_ruuuko.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212829/SL09-1_kngucm.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212829/SL09-1_kngucm.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212857/SL09-2_xb8ohl.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212888/SL10-1_fbsu1l.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212888/SL10-1_fbsu1l.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212915/SL10-2_max2rr.jpg"],
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
    "imageUrl": "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212945/SL11-1_i76j1m.jpg",
    "images": ["https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212945/SL11-1_i76j1m.jpg", "https://res.cloudinary.com/dmgf7eqkl/image/upload/v1780212971/SL11-2_c4iz08.jpg"],
    "specs": {
      "Sizes Available": "Regular",
      "Sterility": "Non-Sterile"
    }
  }
];

export const MOCK_ORDERS = [];

export const MOCK_AGENTS = [];


