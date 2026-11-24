# Firmware Security Toolkit — Sales Page

Standalone static sales page for the firmware-security-toolkit v1 product.
**This is a fully separate page. Nothing here goes on bareboard.org** — that
site is free education only and must never carry paid offers.

## Files

| File | What it is |
|---|---|
| `index.html` | The sales page: what the product is, who it's for, what v1 does and does not do, sample report, what the buyer gets, price ($129 one-time), Buy buttons. |
| `download.html` | The post-payment page. The Stripe Payment Link redirects here after a successful payment; it links the product download file. |
| `styles.css` | Shared stylesheet for both pages. |
| `shared.js` | Shared header and footer: the markup both pages use lives here once, so a change in one place updates both pages. Each page loads it and marks its navigation with a `data-page` value on its body element. |
| `SALES-PAGE-REPORT.md` | Price justification, wiring list, and remaining steps. |
| `README.md` | This file. |

No build step, no server code. Plain HTML + CSS plus one small shared
script (`shared.js`) that writes the header and footer both pages use.

## Values to wire — status (updated by the coordinator 2026-11-17)

Wired already (from `product/PACKAGING-REPORT.md`, verified by the coordinator):

| Value | Replaced with |
|---|---|
| `PRODUCT_VERSION` | `1.0.0` (all 5 places) |
| `DOWNLOAD_FILENAME` | `fwtool-1.0.0-linux-x86_64.zip` |

Still open — wire before publishing:

| Value | Where | What replaces it |
|---|---|---|
| `STRIPE_PAYMENT_LINK_URL` | `index.html` (2 Buy buttons) | The live Stripe Payment Link URL, created inside James's own Stripe account (see below). Only James can create it. |
| `DOWNLOAD_URL` | `download.html` (download button) | The URL of the hosted product file — the published site's own URL for `fwtool-1.0.0-linux-x86_64.zip`, once the file is placed alongside the pages (e.g. `https://jamesmarcusanderson.github.io/<repo-name>/fwtool-1.0.0-linux-x86_64.zip`). |
| `SAMPLE_REPORT_URL` | `index.html` (sample report button) | The URL of the sample HTML report (`product/docs/demo/openwrt-x86-64-23.05.5-report.html`), once it is published alongside the pages. |

Do not publish with any value still unwired — a buyer clicking
`STRIPE_PAYMENT_LINK_URL` or `DOWNLOAD_URL` would hit a dead link.

**Platform honesty (coordinator edit, 2026-11-17):** the pages originally
claimed Windows and macOS binaries. The packaged v1 ships a Linux binary
only — Windows/macOS binaries are produced by the CI workflow after the
product repo is pushed, and have never been built. The pages now say
"Linux today; Windows and macOS coming" and that Windows/macOS binaries
are included free for every buyer when they ship. Once CI has built and
smoke-tested them, update the pages to list all three platforms.

## How to publish (GitHub Pages, for the parent/coordinator)

1. Create a **new, separate** repository under James's GitHub account for
   this sales site (do not reuse the bareboard.org repo). Suggested name:
   `firmware-security-toolkit-sales` — any name works; the Pages URL is
   `https://jamesmarcusanderson.github.io/<repo-name>/`.
2. Push `index.html`, `download.html`, `styles.css`, `shared.js`, the product download
   file, and the sample HTML report into the repo root.
3. In the repo: Settings → Pages → Source: **Deploy from a branch**,
   Branch: `main`, Folder: `/ (root)`. Save.
4. Wait for the Pages build (usually under a minute), then open
   `https://jamesmarcusanderson.github.io/<repo-name>/` and check:
   the page renders, the Buy button points at the real Stripe link,
   and `download.html` loads.
5. The download-page URL to paste into Stripe is
   `https://jamesmarcusanderson.github.io/<repo-name>/download.html`.

## What James must do himself (payment setup)

Only James can set up the payment side — it needs his SSN, his photo ID,
and his bank account. Nobody else can do it for him. **Do not rewrite the
checklist from memory: use the one in the checkout research.**

Full checklist: `~/workspace/income-product-2026-11-17/checkout-research.md`,
section **"CHECKLIST — James's steps from nothing to first payment
(Stripe Payment Links)"** — 10 steps, about 45–60 minutes of his time plus
verification waiting.

In short, the steps are: create a Stripe account as Individual / Sole
Proprietor → turn on two-factor authentication → activate the account with
his identity and bank details → upload photo ID if Stripe asks → create the
product and a Payment Link priced at **$129** → in the link's after-payment
settings, choose **redirect to a URL** and paste the download-page address
from step 5 above → test in Stripe test mode → switch the link to live and
hand the live Payment Link URL to the crew to put on the sales page.

Notes from the checkout research worth knowing:

- Stripe keeps 2.9% + $0.30 per sale. On a $129 sale James keeps $124.96.
- First payout typically lands 7–14 days after the first sale; after that,
  about 2 business days per sale, automatically, with no minimum amount.
- Stripe does not host or deliver files — that is why the download page
  exists and why the Payment Link must redirect to it.
- With Stripe, James is the seller of record, so sales tax is his
  responsibility (see the "Gotchas" section of `checkout-research.md`).
- Lemon Squeezy is closed to new sellers and Gumroad is the slower,
  more expensive fallback — Stripe Payment Links is the recommendation.
  Details in `checkout-research.md`.

## Honesty rules for this page (do not break them)

- Every claim on the page is true of the scoped v1 product in
  `~/workspace/income-product-2026-11-17/audit.md`.
- No invented testimonials, sales numbers, reviews, customers, or revenue.
- No fake urgency, no "limited time", no invented discounts.
- The page states plainly what v1 does NOT do: no filesystem extraction
  yet, SBOM is component-fingerprint based, no emulation/dynamic analysis.
- If the packaging worker's final v1 differs from the scoped list (fewer
  features, different platforms), the page must be edited to match before
  publishing — never publish claims the product does not meet.
