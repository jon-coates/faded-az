# Faded AZ — Technical + SEO Audit

**Site:** fadedaz.com.au
**Repo audited:** `jon-coates/faded-az` @ `9c90263` (branch state as of 2026-07-23)
**Method:** Static code review + local production build (`npm run build`) served and crawled with headless Chromium, plus raw `curl` of the built HTML before JS executes.

---

## TL;DR

The site is a **client-side-only React SPA** (Vite + React Router). The production HTML for every route is functionally empty (`<div id="root"></div>`) until JavaScript runs — that's the single biggest issue and the root cause of several downstream SEO problems (duplicate titles for non-JS crawlers, no per-route social preview cards, etc.). On top of that there's a **fake placeholder phone number** baked into your live structured data, a **booking script that loads on every page but isn't wired to anything**, and a handful of stale/broken preload links left over from a previous optimisation pass. None of these are hard to fix. The bigger, structural item is rendering — everything else is a same-day fix.

---

## 1. Rendering & Crawlability (highest priority)

### Stack
- **Vite 6 + React 18**, client-rendered only. No Next.js/Remix/Astro, no SSR, no SSG.
- Routing: `react-router-dom` v7 `BrowserRouter` (`src/main.jsx`), 5 client-side routes defined in `src/App.jsx`: `/`, `/book`, `/services`, `/find-us`, `/reviews`.
- Per-page `<title>`/meta handled by `react-helmet` (v6, last released ~2020, effectively unmaintained — worth knowing if you ever do the SSR migration below, since `react-helmet-async` is the maintained successor and the one SSR frameworks expect).
- Deployed as a static SPA behind a catch-all rewrite (`public/_redirects` → `/* /index.html 200`, Netlify/Cloudflare Pages syntax), which is *why* refreshing `/services` doesn't 404 for users — but it does mean every route serves the identical `index.html`.

### What a crawler actually sees, before JS runs

I built the site (`npm run build`) and requested the raw HTML directly:

**Homepage (`/`):**
```html
<body>
  <!-- GTM noscript iframe -->
  <div id="root"></div>
  <script type="module" crossorigin src="/assets/index-oo-LxZLk.js"></script>
</body>
```
`<title>` and meta tags *are* present (from `index.html`'s static `<head>`), but the entire `<body>` is one empty div. No H1, no address, no hours, no services, no reviews — nothing.

**`/services` (identical file is served for every route):**
```html
<title>Faded Az - Brisbane's Premier Barber West End Haircuts & Beard Trimming</title>
...
<div id="root"></div>
```
This is the critical finding: **the raw HTML for `/services` has the homepage's generic title, not "Services | Faded Az – Fades, Haircuts & Beard Trims..."**. The correct per-page title only appears after React mounts and `react-helmet` rewrites `document.title` client-side. Any crawler, bot, or preview generator that doesn't execute JavaScript sees the same generic title/description on every single page, plus zero body content.

Who this actually hurts:
- Google itself generally renders JS fine these days, so Google-indexed content is *probably* okay (can't fully confirm without Search Console access — check "URL Inspection" → "View Crawled Page" there to be sure). But this is not guaranteed and is a much thinner signal than real HTML.
- **Bing, and most non-Google crawlers, are far less reliable at JS rendering.**
- **Social/link previews and AI answer engines** (Slack/iMessage/Facebook link unfurls, ChatGPT/Perplexity browsing, etc.) typically only read raw HTML — they will show the homepage's title/description no matter which page is shared.
- **Lighthouse/SEO audit tools** that don't render JS will flag every page as duplicate-title/duplicate-description.

### Is this fixable, and how much work?

Yes. Given this is a small, mostly-static 5-page brochure site with no per-request dynamic data, a full SSR framework migration (Next.js/Remix) is more machinery than you need. Two realistic paths, in order of effort:

**Option A — Prerender the 5 known routes at build time (recommended first step, ~0.5–1 day).**
Add a post-build step that spins up the built app in a headless browser (or uses a purpose-built tool like `vite-react-ssg` or a small Playwright script), visits each of the 5 fixed routes, waits for `react-helmet` to update the head, and writes the fully-rendered HTML to `dist/services/index.html`, `dist/book/index.html`, etc. The existing JS bundle still loads and hydrates for interactivity — you just also ship real HTML upfront. Because your routes are fixed and known in advance (no dynamic `/blog/:slug` type routes), this is a very contained change: no component rewrites, just a new build script and a tweak to `_redirects`/hosting to serve the static per-route files instead of always falling back to root `index.html`.

**Option B — Migrate to Astro (bigger but "does it properly," ~3–5 days).**
Astro is built for exactly this shape of site (mostly-static marketing pages, islands of interactivity) and supports dropping in your existing React components as islands (`@astrojs/react`) with minimal rewrites. You'd get real SSG per route, per-page `<head>` handled natively (no `react-helmet` workaround needed), and it removes the react-helmet unmaintained-dependency question entirely. This is the "right" long-term answer if you plan to keep adding content (blog, more service pages, etc.) but is a real migration, not a patch.

I'd do A now and consider B if/when you're ready to invest in a content section (see §3).

---

## 2. SEO Fundamentals

| Check | Status | Notes |
|---|---|---|
| Unique `<title>`/meta per page | ✅ **Good, in the rendered DOM** | Each page (`HomePage`, `ServicesPage`, `BookPage`, `FindUsPage`, `ReviewsPage`) has its own `<Helmet>` with distinct title/description/OG tags. ⚠️ But per §1, these only apply *after* JS runs — the pre-JS HTML is identical (homepage's) for every route. |
| `robots.txt` | ✅ Present (`public/robots.txt`) | `Allow: /`, points to sitemap. Fine. |
| `sitemap.xml` | ✅ Present (`public/sitemap.xml`) | Lists all 5 real routes with correct URLs. `lastmod` dates (2026-04-29) are hand-written and static — they won't update automatically when you change a page, so they'll quietly go stale. Low priority, but worth knowing. |
| Headings are real text | ✅ Good | All H1/H2/H3s checked (Hero, Services, FAQ, Reviews, Map, About) are real text nodes, not baked into images. |
| Structured data (schema.org) | ⚠️ Present but inconsistent/duplicated | See below — three separate schema blocks, two different `@type`s, and a **fake phone number**. |
| Missing alt tags | ✅ None found | Every `<img>` in the codebase (`About.jsx`, `Footer.jsx`, `Navbar.jsx`) has descriptive `alt` text. Genuinely clean here. |

### Structured data problems (worth fixing before your next Google reindex)

You have **three separate JSON-LD blocks** rendered simultaneously, with overlapping and conflicting data:
1. `src/components/LocalBusinessSchema.jsx` — `@type: "BarberShop"`, rendered on **every page** (mounted in `App.jsx`).
2. `src/components/Metatags.jsx` — `@type: "HairSalon"`, rendered **only on the homepage**, with near-identical address/hours/services data.
3. `src/components/Reviews.jsx` — `@type: "LocalBusiness"` with `aggregateRating`, rendered wherever the `Reviews` component is used (home + `/reviews`).

Two different `@type`s (`BarberShop` vs `HairSalon`) describing the same business is likely to confuse Google's entity resolution — pick one (`BarberShop` and/or the newer `HairSalon` combined type; `BarberShop` is the more precise/correct type here) and delete the other.

**The bigger issue: both `LocalBusinessSchema.jsx:10` and `Metatags.jsx:10` hard-code**
```json
"telephone": "+61-7-1234-5678"
```
That is a placeholder number, not a real one — it's shipped to production in your structured data right now. This is exactly the kind of thing Google's Rich Results / Merchant validation flags, and if a user manages to call it (e.g., from a Google Business Profile pull or a rich snippet), it goes nowhere. There is also **no `tel:` link anywhere on the site** — for a walk-by/local search business, a tappable phone number is a basic conversion path you're currently missing entirely (grepped the whole `src/` tree, zero `tel:` hrefs).

Minor: the `hasOfferCatalog.itemListElement` services in `LocalBusinessSchema.jsx` have no `price`/`priceCurrency` on any `Offer` — fine today since you don't display prices anywhere (see §3), but worth revisiting together with the pricing gap.

---

## 3. Content & Conversion Gaps

**Services page has no pricing (`src/pages/ServicesPage.jsx:6-13`).** The `SERVICES` array is just `{ name, desc }` — six services listed with a one-line description each, no price field, no pricing table/UI component built for it at all. Adding pricing means: (1) add a `price` field to the array, (2) add a price line to the card markup (`ServicesPage.jsx:61-63`) — this is a trivial change once you decide what to display (fixed price / "from $X" / price range), maybe 15–30 minutes of work. There's no existing pricing component to repurpose, but the existing card grid is a perfectly good place to drop it in.

**No embedded booking widget — everything link-outs to Timely.** Every "Book Now" button (`Bookingbutton.jsx`, used everywhere) is a plain `<a href="https://bookings.gettimely.com/fadedaz/book" target="_blank">`. That's a full context-switch/new-tab for the user, not an inline widget.

Here's the more interesting finding: **`TimelyScript.jsx` loads Timely's actual widget script (`book-button-v1.5.js`) on every single page load** (mounted in `App.jsx:20`), but nothing in the codebase uses the markup that script expects (a specific class/data-attribute Timely hydrates into an inline popup/embedded widget — grepped for it, found nothing). So right now you're paying the network/JS cost of that third-party script (this is literally the ~930ms render-blocking script your own `PERFORMANCE_OPTIMISATIONS.md` flagged and "fixed" by deferring it) on every page load, for zero functional benefit — it's dead weight. Either:
- wire up Timely's actual embed/popup widget properly (real conversion improvement — no tab-switch to book), or
- delete `TimelyScript.jsx` and its mount in `App.jsx` entirely and keep the simple external links.

**No team/barber bio section exists.** Reviews repeatedly name-check "Storm" as the barber, but there's no `Team`/`Barber`/`Staff` component anywhere in `src/components` or `src/pages`. This is a genuinely missing content type, not a hidden/unused one — for a personal-brand-driven barbershop (5 years of "ask for Storm" reviews), a short bio + photo is a well-known conversion lever that's currently just absent. Would slot naturally next to `About.jsx` on the homepage or as its own section on `/services` or `/find-us`.

**"Story"/About content: built and in active use** — `About.jsx` is a solid, reasonably substantial section (shop description, craftsmanship copy, interior photo) already rendered on both the homepage and `/services`. This one's fine, not a gap.

**Testimonials: built and in active use** — `Reviews.jsx` has 9 real testimonials (one flagged `display: false` and filtered out, so 8 show), star ratings, and proper `Review`/`AggregateRating` schema. Good.

**Address & hours: real text in the markup, not an image.** Confirmed in the *rendered* DOM — `Map.jsx:27` ("314 Montague Rd, West End"), `Map.jsx:39` ("Wed – Fri 8:00 am – 8:00 pm"), and `Hero.jsx:105`. This is real, crawlable text (once JS runs — see §1 for the caveat that it's not there pre-JS).

---

## 4. Performance

**Stale/broken preload links in `PerformanceOptimizer.jsx`.** This component (mounted on every page via `App.jsx`) preloads:
- `/assets/index-C2X69vea.css` — this file **does not exist** in the current build (Vite content-hashes filenames on every build; the actual CSS file today is `style-D7zA4UVt.css`). This hash is left over from whenever `PERFORMANCE_OPTIMISATIONS.md` was written and will silently rot again on every future build. Confirmed in headless Chrome: *"resource preloaded using link preload but not used within a few seconds."*
- `/herobg.jpg` — this image isn't used anywhere anymore; the hero background is now pulled from Cloudinary URLs (`Hero.jsx`). Same "unused preload" warning in the browser console.
- A `<meta httpEquiv="X-Frame-Options" content="DENY">` — **this does nothing.** `X-Frame-Options` can only take effect as a real HTTP response header, not a `<meta>` tag; Chrome logs an explicit console error about it on every page load (confirmed). If you want clickjacking protection you need it set at the hosting/CDN layer (Netlify/Cloudflare Pages headers config), not in React.

All three of these are quick deletes/fixes — the preloads should either point at real, currently-used assets or be removed; the security-header meta tags should move to actual host-level headers or be dropped.

**No image lazy-loading anywhere.** Every `<img>` in the codebase (checked all four: `About.jsx` ×2, `Footer.jsx`, `Navbar.jsx`) loads eagerly — none has `loading="lazy"`. The Google Maps iframe (`Map.jsx:55`) does correctly use `loading="lazy"`, so the pattern is known, just not applied to images below the fold (e.g., the About section's interior photo, which is off-screen on load).

**Inconsistent Cloudinary usage — some images optimised, some not.** `Hero.jsx` and `Instagram.jsx` correctly request resized/optimised variants (`w_1080,h_720,c_fill,g_auto,q_auto,f_auto`). But `About.jsx:8`, `About.jsx:29`, `Map.jsx:6`, and `FAQ.jsx:78` all reference raw, untransformed Cloudinary URLs — full original resolution, no `q_auto`/`f_auto`/width constraint. These are large full-bleed background images, so this is a meaningful chunk of unnecessary bytes on every page load. Fix is mechanical: apply the same `w_/h_/c_fill/q_auto/f_auto` pattern already used elsewhere in the same codebase.

**`bg-fixed` used unconditionally in a couple of places.** `Map.jsx:6` and `Instagram.jsx:29` use `bg-fixed` without the `md:` prefix that `About.jsx`/`FAQ.jsx` correctly use to restrict it to desktop. Fixed-attachment backgrounds are a known source of scroll jank/repaint cost on mobile Safari/Chrome — worth aligning to the `md:bg-fixed` pattern already established elsewhere in the codebase.

**Console errors on page load (confirmed via headless Chrome on the production build):**
- `X-Frame-Options may only be set via an HTTP header... It may not be set inside <meta>` — from `PerformanceOptimizer.jsx`, as above.
- Repeated "resource preloaded but not used" warnings for the three stale preloads above.

**Bundle size:** ~268 KB JS (app) + ~140 KB JS (vendor: react/react-dom) + ~20 KB CSS, gzip roughly a third of that. Not alarming for a 5-page site, but there's no route-level code splitting — every page ships the full bundle (including `motion`/framer-motion, FontAwesome, react-helmet) even though a given visitor usually only needs 1–2 pages' worth. Low priority relative to everything above; only worth revisiting if Lighthouse flags it after fixing the bigger items.

**Dead code, while I was in there:** `src/components/GoogleAnalytics.jsx` and `src/components/Hero copy.jsx` are both fully unused (not imported anywhere) — harmless but worth deleting during a cleanup pass so nobody mistakes them for the live implementation.

**Broken links:** No broken *internal* links found — all nav routes resolve, and the SPA fallback rewrite (`public/_redirects`) means deep links work correctly for real users (assuming host is Netlify/Cloudflare Pages, which the `_redirects` syntax implies). I could not verify external links (Google Maps embed, Instagram embed, Timely booking URL, Google Fonts) live from this sandbox — outbound network to those domains was blocked in this environment — but nothing in the code itself looked malformed. Worth a quick manual click-through on the live site as a sanity check, particularly the Timely booking URL, since that's your only conversion path.

---

## 5. Quick Wins vs. Structural Changes

### Quick wins (fixable today, no architecture change)
1. **Fix the fake phone number** — replace `+61-7-1234-5678` in both `LocalBusinessSchema.jsx:10` and `Metatags.jsx:10` with your real number, and add a `tel:` link somewhere visible (footer/find-us page).
2. **Delete or fix the three stale preload links** in `PerformanceOptimizer.jsx` (dead CSS hash, unused `herobg.jpg`, no-op `X-Frame-Options` meta tag).
3. **Decide on one LocalBusiness schema type** and delete the duplicate — keep `BarberShop` (or merge into one canonical block), remove the conflicting `HairSalon` block in `Metatags.jsx`.
4. **Resolve the dead Timely script** — either wire up the real embedded widget or delete `TimelyScript.jsx` and its mount in `App.jsx` to stop loading an unused ~900ms third-party script on every page.
5. **Add `loading="lazy"` to below-the-fold `<img>` tags** (About section photo, Footer logo).
6. **Apply the existing Cloudinary optimisation pattern** (`w_/h_/q_auto/f_auto`) to the four background images in `About.jsx`, `Map.jsx`, and `FAQ.jsx` that are currently unoptimised.
7. **Add prices to the Services page** — one field + one line of JSX in the existing card component.
8. **Delete dead files**: `GoogleAnalytics.jsx`, `Hero copy.jsx`.
9. **Restrict `bg-fixed` to desktop** (`md:bg-fixed`) in `Map.jsx` and `Instagram.jsx` to match the rest of the codebase.

### Structural changes (need planning/a chunk of dedicated time)
1. **Fix pre-JS rendering** (§1) — either add a build-time prerender step for the 5 known routes (recommended first, ~0.5–1 day), or migrate to Astro for proper SSG + native per-page `<head>` (bigger lift, ~3–5 days, but the right foundation if you're going to add a blog/more content later).
2. **Add a team/barber bio section** — genuinely missing content type, needs a small new component plus copy/photos, not just a config change.
3. **Consider replacing `react-helmet`** (unmaintained since ~2020) with `react-helmet-async` — low urgency on its own, but becomes a prerequisite if you go the Astro/SSR route, since `react-helmet` doesn't play well server-side.
