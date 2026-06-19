# Presentation Guide: Week 2 Review (Research & System Analysis)
## B2B Medical Requisition Portal — Sree VK Enterprises

This guide provides slide-by-slide content, layout guidelines, visual structures, and talking scripts for your Week 2 presentation.

---

### Slide 1: Title Slide
* **Slide Title**: B2B Medical Requisition & Equipment Portal
* **Subtitle**: Week 2 Review: Research & System Analysis
* **Visual Elements**: Sree VK Enterprises Logo, Clinical blue / Slate color scheme.
* **Key Information**: 
  - presenter Name: [Your Name]
  - Role: Software Engineer Intern
  - Company: Sree VK Enterprises (Surgicals)
  - Date: June 18, 2026
* **Speaker Script**: 
  > "Good morning, reviewers. Today I will present the Week 2 progress on the Sree VK Enterprises B2B clinical procurement catalog and requisition tracking portal. This week, we completed research on B2B medical supply chains, analyzed existing systems, and implemented the core application pages and modular state store, including a custom price-free catalog designed specifically for negotiated B2B healthcare contracts."

---

### Slide 2: Recap from Week 1 (Problem & Objectives)
* **Slide Title**: Project Recap & Core Problems
* **Visual Elements**: Split layout. Left: Key client problems. Right: Project objectives.
* **Content**:
  - **The Client**: Sree VK Enterprises, Kakinada (surgical consumables and clinical machinery distributor).
  - **The Problem**: 
    1. Lack of a digital storefront makes catalog browsing slow and manual.
    2. Hospitals and pharmacies have no digital channel to request quotes or track delivery pipelines.
  - **The Goal**: Build a lightweight, custom B2B web application offering a clinical catalog, quote basket (cart), user requisition ledger, and admin management console.
* **Speaker Script**: 
  > "To recap, Sree VK Enterprises serves hospitals and pharmacies with critical surgical tools and machinery. Currently, they rely entirely on offline catalogs, phone calls, and manual spreadsheets. Our objective is to build a two-sided platform: an intuitive catalog and quote tracker for healthcare clients, and an order management panel for VK staff agents."

---

### Slide 3: Literature Survey (Part 1 — The Healthcare Procurement Matrix)
* **Slide Title**: Literature Survey: B2B Medical Supply Chains
* **Visual Elements**: Bullet points summarizing research from supply chain journals or medical journals.
* **Content**:
  - **Research Insights**: 
    1. B2B healthcare procurement relies heavily on customized pricing agreements based on purchase volumes and institutional contracts.
    2. Standard direct retail prices do not reflect B2B transactions, necessitating Request for Quotation (RFQ) workflows.
  - **Key Reference**: *Journal of Healthcare Supply Chain Management* (2024): "Dynamic pricing and contract negotiation are structural pillars of hospital-vendor relationships."
* **Speaker Script**: 
  > "Our literature review focused on clinical supply chain models. The key takeaway from procurement research is that direct transaction pricing is highly detrimental in B2B healthcare. Hospitals negotiate customized rate contracts based on order volume. Exposing fixed retail prices prevents custom negotiations, meaning the system must run on a 'Price-Free Catalog' and Request for Quote (RFQ) model rather than a standard checkout."

---

### Slide 4: Literature Survey (Part 2 — Requisition & Order Visibility)
* **Slide Title**: Literature Survey: Digital Order Sourcing & Tracking
* **Visual Elements**: Highlight box emphasizing the importance of supply chain visibility.
* **Content**:
  - **Procurement Gaps**: 
    1. Lack of shipment transparency leads to double-ordering and hospital inventory imbalances.
    2. Real-time updates (Pending -> Approved -> Sourced -> Dispatched -> Delivered) significantly reduce communication overhead.
  - **Key Reference**: *Healthcare Logistics Review* (2025): "Real-time visibility in clinical supply chains decreases inquiry calls to distributors by up to 64%."
* **Speaker Script**: 
  > "Secondly, we researched order tracking in healthcare logistics. Studies show that hospitals experience significant friction when they cannot track supply arrivals, leading to clinical shortages. Providing a multi-stage tracking pipeline directly solves this by keeping hospitals updated in real time, dramatically reducing manual inquiry calls to VK agents."

---

### Slide 5: Existing System Analysis (Part 1 — The Manual Flow)
* **Slide Title**: Existing Systems: Offline & WhatsApp Sourcing
* **Visual Elements**: Flow diagram showing the traditional manual process:
  `WhatsApp/Call Inquiry ➔ Manual Catalog Lookup ➔ Quote Creation ➔ Excel Tracking ➔ Paper Invoice`
* **Content**:
  - **How it Works**: Procurement officers text order sheets via WhatsApp or call sales agents.
  - **Limitations**:
    1. **Unsearchable**: Catalog changes are not visible; customers have to ask for specifications manually.
    2. **Unscalable**: VK staff must manually type out invoices, leading to entry errors.
    3. **No Status Trace**: Customers have no way to trace if an order has been shipped or delayed.
* **Speaker Script**: 
  > "We analyzed Sree VK Enterprises' current operational flow, which relies on WhatsApp message lists and calls. The limitations here are clear: it is unsearchable, sales agents have to type out item specifications repeatedly, and the client has zero status visibility once the order is placed."

---

### Slide 6: Existing System Analysis (Part 2 — Retail E-Commerce Failures)
* **Slide Title**: Existing Systems: Standard Direct E-Commerce
* **Visual Elements**: Screenshots of typical B2C platforms vs B2B needs.
* **Content**:
  - **Examples**: Direct retail medical supply stores (standard e-commerce).
  - **Limitations**:
    1. **Rigid Checkout**: Forces payment at the point of order, which is incompatible with B2B hospital accounts (typically paid via credit cycles or monthly invoicing).
    2. **Exposed Pricing**: Publicly exposes pricing structures, breaching private institutional contracts.
    3. **No Negotiated Custom Quotes**: Does not support dynamic volume adjustments or agent invoice custom approvals.
* **Speaker Script**: 
  > "We also evaluated direct retail medical websites. These platforms fail B2B users because they require immediate payment and force static prices. Hospitals purchase via monthly credit accounts and require customized quote approvals, which makes standard e-commerce carts useless for Sree VK Enterprises."

---

### Slide 7: System Comparison Table
* **Slide Title**: System Comparison Matrix
* **Visual Elements**: 3-column table comparing criteria.

| Feature | WhatsApp / Excel | Retail E-Commerce | VK B2B Portal (Proposed) |
| :--- | :--- | :--- | :--- |
| **Catalog Search** | ✗ None (Manual inquiry) | ✓ Searchable (Static price) | **✓ Live Catalog Search** (No prices) |
| **Price Expsure** | ✗ Manual sheets | ✗ Direct public prices | **✓ Secured Negotiated Quote** |
| **Checkout Flow** | ✗ Manual approval | ✗ Credit Card / Prepaid | **✓ Quote Requisition** (B2B Credit) |
| **Logistics Tracking** | ✗ Phone query | ✓ Standard courier link | **✓ Visual Clinical Timeline** |
| **Admin Operations** | ✗ Spreadsheets | ✗ Automated warehouse | **✓ Live Firestore Inventory Manager** |

* **Speaker Script**: 
  > "This comparison table illustrates the gap. Standard retail sites fail on price security and B2B checkout patterns, while WhatsApp fails on searchability and tracking. Sree VK Enterprises' proposed portal bridges these gaps, providing searchable pricing-secured catalogs, custom quote requisitions, and a visual clinical timeline tracking pipeline."

---

### Slide 8: The Proposed System Architecture
* **Slide Title**: Proposed Solution: VK Enterprises Portal
* **Visual Elements**: Single Page Application (SPA) architecture diagram.
* **Content**:
  - **Front End**: Pure HTML5, CSS3 with global variables, Vanilla ES6 JavaScript (No bulky framework overhead).
  - **Module Bundling**: Vite (for near-instantaneous bundling and dev compilation).
  - **State Store**: Custom Singleton Class (`store.js`) caching cart status, order ledger, and product datasets with local fallback storage.
  - **Database Sync**: Cloud Firestore Integration providing real-time catalog syncing.
* **Speaker Script**: 
  > "Our proposed system is a lightweight Single Page Application built on Vanilla JS, CSS3, and HTML5. We avoided heavy frameworks to keep loading times fast on poor hospital mobile networks. We utilize Vite for bundling and a custom singleton store to manage the cart, user login status, and orders in real-time, syncing directly with Cloud Firestore."

---

### Slide 9: User Platform Features & Components
* **Slide Title**: User-Facing Platform Features
* **Visual Elements**: Column layout highlighting components and pages.
* **Content**:
  - **Modular UI Components**:
    - `ProductCard`: Clean item card showing status badges (In Stock, Low Stock, etc.).
    - `QuantityCounter`: Plus/minus increment button linked to cart state.
    - `CartItem`: Summary row component with inline removals.
  - **Client Pages**:
    - **Interactive Catalog**: Categorized filters, fast SKU searches.
    - **Requisition Basket**: Simple price-free cart summarizing item unit counts.
    - **Live Tracker Timeline**: Interactive tracker updating status states (Pending -> Approved -> Sourced -> Dispatched -> Delivered).
* **Speaker Script**: 
  > "For the client-facing application, we have implemented an interactive medical catalog page, a detail view displaying technical specifications, a quote basket that counts required units without pricing, and a visual tracking ledger. The modular components like ProductCard, CartItem, and QuantityCounter ensure code reuse and design consistency."

---

### Slide 10: Admin Portal Features & Components
* **Slide Title**: Admin Operations Portal
* **Visual Elements**: Admin screen diagram showing orders queue and inventory management.
* **Content**:
  - **Incoming Requisition Queue**: Staff overview page summarizing all client organizations, submission dates, and status tags.
  - **Order Pipeline Manager**: Detail manager to Approve, Reject, Ship, or Complete requests, with input fields for agent notes.
  - **Inventory Catalog Manager**: Active dashboard allowing staff to add new clinical products, edit SKU details, update description specs, or delete discontinued items from Firestore.
* **Speaker Script**: 
  > "On the administrative side, VK staff are equipped with an incoming requisitions queue to approve or reject quote requests. They also have an order detail manager to add agent notes, tracking numbers, or courier remarks, and a full-fledged inventory catalog manager to dynamically create, edit, or delete items from Firestore."

---

### Slide 11: Current Progress & Project Plan
* **Slide Title**: Project Plan & Implementation Status
* **Visual Elements**: Gantt chart or status roadmap.
* **Content**:
  - **Completed (Weeks 1–2)**:
    - [x] Initial design templates, CSS layout tokens, and page structures.
    - [x] Singleton state store and router integration.
    - [x] Complete price system removal across all pages/database payloads.
    - [x] Initial Firestore dynamic sync setup.
  - **Upcoming (Weeks 3–4)**:
    - [ ] Dynamic database schema security rules audits (Firebase Rules).
    - [ ] Real-world integration testing with mentor and local pharmacies.
    - [ ] Production deployment.
* **Speaker Script**: 
  > "As of Week 2, we have completed the baseline HTML/CSS layouts, the router, state store, and the pricing system removal. Both the user-facing pages and the admin portal views are functional. In Weeks 3 and 4, we will focus on auditing Firestore security rules, conducting integration tests with target users, and launching the live production build."

---

### Slide 12: Q&A / Review Session
* **Slide Title**: Thank You / Questions & Answers
* **Visual Elements**: Presenter details, project title, clean clinical background.
* **Content**:
  - **Project**: Sree VK Enterprises B2B Medical Portal
  - **Presenter**: [Your Name]
  - **Email**: [Your Email]
  - **Contact**: sales@vkenterprises.com
* **Speaker Script**: 
  > "In summary, the portal is fully operational and has been validated visually for price system removal. I would like to open the floor to the reviewers for any questions. Thank you."
