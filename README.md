# FindTechBD — Full-Stack E-Commerce Storefront & Master Admin Portal

A complete multi-page e-commerce platform for **FindTechBD** featuring **102 pre-loaded products** (Solitine Speakers & Soundbars + Tenda Routers, Mesh Wi-Fi, Switches, IP Cameras, Extenders, ONUs + Mini UPS), a **12-page Customer Storefront**, a **Master Admin Portal**, **Real-Time Product & Order Sync**, and **Server-Side Phone SMS OTP Verification**.

---

## ✨ Key Features

1. **11 Dedicated Customer Storefront Pages:**
   - `index.html` — Homepage (Hero Banners, Quick Budget Finder, Featured Categories & Products)
   - `products.html` — All Products Catalog & Advanced Filter (Price, Category, Brand, Stock, Offers, Sort)
   - `product-details.html` — Single Product Showcase, Multi-Image Gallery, Specs & Customer Reviews
   - `cart.html` — Shopping Cart & Coupon System (`FTBD10`, `SAVE200`, `FREE`)
   - `shipping.html` — Delivery Address & Shipping Method Selection
   - `checkout.html` — Payment Method Selection (`COD`, `bKash`, `Nagad`, `Card/EMI`) & Order Placement
   - `login.html` — Mandatory Phone Number + 4-Digit Real SMS OTP Verification
   - `profile.html` — Customer Dashboard, Saved Addresses, Order History & Sent Emails
   - `wishlist.html` — Saved Wishlist Management
   - `order-tracking.html` — Live Courier & Order Status Stepper
   - `invoice.html` — Printable Official Order Invoice & Confirmation Email Viewer

2. **Master Admin Portal (`Admin.html`):**
   - **Default Login:** Username `admin` | Password `admin123` (changeable from Settings)
   - **Live Product Management:** Upload new products (with multiple photos), edit prices/stock (`In Stock`, `Out of Stock`, `Up Coming`), hide/show, or delete products — changes go live on the storefront immediately.
   - **Live Order Management:** Orders placed on the storefront appear in real time in the Admin Panel. Admins can update order statuses (`Ordered`, `Processing`, `Shipped`, `Out for Delivery`, `Delivered`, `Cancelled`) or delete orders, and customers see updates immediately on `order-tracking.html`, `profile.html`, and `invoice.html`.
   - **SMS Gateway Configuration:** Configure `BulkSMSBD`, `Alpha SMS BD`, `GreenWeb`, or Custom HTTP SMS API directly from the Admin UI or via environment variables.

3. **Backend API & Serverless Functions (`netlify/functions/` & `server.js`):**
   - `GET /api/store-data` (`/.netlify/functions/store-data`) — Serves live products, categories, settings, and orders.
   - `POST /api/sync-store` (`/.netlify/functions/sync-store`) — Persists Admin Panel product, category, banner, and setting updates.
   - `POST /api/place-order` (`/.netlify/functions/place-order`) — Saves customer orders and triggers confirmation emails.
   - `POST /api/update-order-status` (`/.netlify/functions/update-order-status`) — Updates/deletes orders from Admin Panel and notifies customers.
   - `POST /api/send-otp` (`/.netlify/functions/send-otp`) — Generates 4-digit OTP, stores HMAC-SHA256 hash, and sends SMS to the customer's phone.
   - `POST /api/verify-otp` (`/.netlify/functions/verify-otp`) — Verifies the 4-digit OTP code on the server and burns it after use.

---

## 🚀 Quick Start (Local Development)

```bash
npm start
```

- **Storefront:** http://localhost:8080/index.html
- **Admin Portal:** http://localhost:8080/Admin.html (`admin` / `admin123`)

---

## 🌐 Deploying from GitHub

### Option A: Deploy to Render / Railway / Node Hosting (Recommended for Persistent JSON DB)
1. Push this repository to GitHub.
2. Create a new **Web Service** on [Render](https://render.com) or [Railway](https://railway.app) connected to your GitHub repo.
3. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Optional environment variables (see `.env.example`): `BULKSMSBD_API_KEY`, `BULKSMSBD_SENDER_ID`, `OTP_SECRET`.

### Option B: Deploy to Netlify
1. Push this repository to GitHub.
2. Import the repository into [Netlify](https://app.netlify.com).
3. Netlify automatically detects `netlify.toml` (`publish = "public"`, `functions = "netlify/functions"`).
4. Add environment variables from `.env.example` in **Site configuration → Environment variables**.

