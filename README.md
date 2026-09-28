# JKKVC — Mock Ecommerce Website & Budget Proposal

Design + budget deliverable for **JK Krishi Vikas Cooperative Ltd (JKKVC)**, Srinagar.
Self-contained static mock (no build step). Unrelated to the NativePHP-Symfony bundles in this repo — kept here only as the working directory for the client engagement.

## Run

```bash
cd jkkvc && python3 -m http.server 8000 --bind 0.0.0.0
```

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, categories, featured machinery, AI band, testimonials |
| `shop.html` | Catalogue with live search / category / brand filters and sorting (`?cat=`, `?q=`) |
| `product.html` | Product detail (`?id=h125`), spec tables, related items, add-to-cart |
| `cart.html` | Cart + checkout mock: Razorpay UPI/cards/net-banking, COD, bank transfer, quotation mode |
| `branches.html` | 35+ showrooms / 10 districts + dealer programme |
| `about.html` · `contact.html` | Story (from real company history) + enquiry form |
| `proposal.html` | **The budget document** — Job A build (₹1.85L / ₹3.25L / ₹4.95L), Job B AMC (₹15k / ₹28k / ₹45k per month), theme & SEO plan. Print-friendly. |

The **KrishiMitra AI** chat widget (bottom-right) demos the planned AI assistant.

## Branding (as specified by client)

- Blue `#052B72`, white canvas, light `#F5F7FA` sections, text `#111827`, font **Montserrat** (800/700/600/400).
- "Sharpex-style" product presentation: pure-white product stage, crisp 1px borders, red reserved for offer badges.
- **Logo:** the header carries a typeset name lock-up as a *stand-in only*. In production, drop the **original supplied logo artwork** into `.logo-slot` unmodified (see comment in `css/style.css`).

## Imagery

- Product names/categories/prices: real catalogue from jkkrishivikas.com (names/categories), prices **indicative**.
- Product photos are hot-linked from JKKVC's own WordPress CDN (`i0.wp.com/...`) so the mock shows the real machines; an `onerror` swaps to the branded placeholder `img/ph.svg` if any URL is unreachable. In production all media lives in the site's own library, using licensed/owned photography (see `source-photos/` for reference pulls).

## Verification

Every page executed headlessly (jsdom): 24 assertions on rendered grids, filters, PDP, cart persistence and chat injection — all passing; image-fallback path proven offline.
