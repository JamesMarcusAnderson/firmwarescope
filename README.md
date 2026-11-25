# FirmwareScope — Sales Page

Renamed from fwtool on 2026-11-24.

Standalone static sales page for the FirmwareScope v1 product.
**This is a fully separate page. Nothing here goes on bareboard.org** — that
site is free education only and must never carry paid offers.

## Files

| File | What it is |
|---|---|
| `index.html` | The sales page: what the product is, who it's for, what v1 does and does not do, sample report, what the buyer gets, price ($129 one-time), Buy buttons. |
| `download.html` | The post-payment page. The Stripe Payment Link redirects here after a successful payment; it links the product download file. |
| `styles.css` | Shared stylesheet for both pages. |
| `shared.js` | Shared header and footer: the markup both pages use lives here once, so a change in one place updates both pages. Each page loads it and marks its navigation with a `data-page` value on its body element. |
| `firmwarescope-1.0.0-linux-x86_64.zip` | Linux product bundle. |
| `sample-report.html` | Sample scan report. |
| `README.md` | This file. |

No build step, no server code. Plain HTML + CSS plus one small shared
script (`shared.js`) that writes the header and footer both pages use.

## Values to wire — status (updated by the coordinator 2026-11-24)

Wired already (from `product/PACKAGING-REPORT.md`, verified by the coordinator):

| Value | Replaced with |
|---|---|
| `PRODUCT_VERSION` | `1.0.0` (all 5 places) |
| `DOWNLOAD_FILENAME` | `firmwarescope-1.0.0-linux-x86_64.zip` |
| `DOWNLOAD_URL` | `download.html` links the Linux zip on this site plus the macOS and Windows release assets |
| `SAMPLE_REPORT_URL` | `index.html` links `sample-report.html`, which is live |

Still open — wire before publishing:

| Value | Where | What replaces it |
|---|---|---|
| `STRIPE_PAYMENT_LINK_URL` | `index.html` (2 Buy buttons) | The live Stripe Payment Link URL, created inside James's own Stripe account (see below). Only James can create it. |

Until the Stripe Payment Link is wired, the Buy buttons in
`index.html` stay disabled — a buyer must never be able to click a
dead checkout link.

**Platforms:** the pages list all three platforms — Linux, Windows,
and macOS — and the v1.0.0 release ships a binary for each.

## Published site

The site is live at https://jamesmarcusanderson.github.io/firmwarescope/
via GitHub Pages (Deploy from a branch, `main`, `/ (root)`).
The download page is `.../firmwarescope/download.html` — that is the URL to
paste into Stripe as the after-payment redirect.

## What James must do himself (payment setup)

Only James can set up the payment side — it needs his SSN, his photo ID,
and his bank account. Nobody else can do it for him.

The steps below cover the full checklist — 10 steps, about 45–60
minutes of his time plus verification waiting.

The steps are: create a Stripe account as Individual / Sole
Proprietor → turn on two-factor authentication → activate the account with
his identity and bank details → upload photo ID if Stripe asks → create the
product and a Payment Link priced at **$129** → in the link's after-payment
settings, choose **redirect to a URL** and paste the download-page address
(`https://jamesmarcusanderson.github.io/firmwarescope/download.html`) → test in Stripe test mode → switch the link to live and
hand the live Payment Link URL to the crew to put on the sales page.

Notes worth knowing:

- Stripe keeps 2.9% + $0.30 per sale. On a $129 sale James keeps $124.96.
- First payout typically lands 7–14 days after the first sale; after that,
  about 2 business days per sale, automatically, with no minimum amount.
- Stripe does not host or deliver files — that is why the download page
  exists and why the Payment Link must redirect to it.
- With Stripe, James is the seller of record, so sales tax is his
  responsibility.
- Lemon Squeezy is closed to new sellers and Gumroad is the slower,
  more expensive fallback — Stripe Payment Links is the recommendation.

## Honesty rules for this page (do not break them)

- Every claim on the page is true of the scoped v1 product.
- No invented testimonials, sales numbers, reviews, customers, or revenue.
- No fake urgency, no "limited time", no invented discounts.
- The page states plainly what v1 does NOT do: no filesystem extraction
  yet, SBOM is component-fingerprint based, no emulation/dynamic analysis.
- If the packaging worker's final v1 differs from the scoped list (fewer
  features, different platforms), the page must be edited to match before
  publishing — never publish claims the product does not meet.
