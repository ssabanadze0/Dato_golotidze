# Dato Golotidze — bilingual SEO-ready static website

## Layout

- `/en/` — five English pages, with indexable HTML text
- `/ka/` — five Georgian pages, with indexable HTML text
- `/styles/` — original modular stylesheets, shared by both locales
- `/media/` — shared portfolio assets
- `/script.js` — navigation, gallery filtering/lightbox, and language coin URL switching
- `/sitemap.xml`, `/robots.txt` — crawler files
- `/index.html` — entry page redirecting to English

## IMPORTANT: configure your website URL BEFORE publishing

All canonical URLs, hreflang URLs, Open Graph URLs, structured-data URLs, robots.txt and sitemap.xml currently use `https://YOUR-DOMAIN.example` as a clearly marked placeholder. Search and replace **every occurrence** with the real public site URL, without a trailing slash. Examples: `https://mydomain.ge` or `https://username.github.io/repository` (the latter needs special handling as detailed below).

**GitHub Pages project site** under `/repository/`: replace the domain placeholder with `https://username.github.io/repository` in all SEO metadata, but also upload under that repository path, then ensure the coin and asset paths work with relative links (they do). The `robots.txt` is only honored when served from the host root; for a GitHub project site, configure robots at the user site root if you control it. The sitemap can still be submitted via Search Console.

## How to edit the wording

The HTML text is now pre-rendered in each language. Edit `/en/*.html` and `/ka/*.html` directly. The original `translations.js` is intentionally not required for runtime switching. For future large content updates, consider a small build script with a translation dictionary to avoid maintaining two copies manually.

## Features preserved

- Same design with modular shared CSS, mobile navigation, gallery filters, image lightbox, and matching footer.
- Language coin navigates to the corresponding EN/KA page after its flip animation.
- Responsive behavior remains unchanged; both languages have a dedicated HTML page.

## Important content checks

Replace placeholder photos, contact details, biography claims and certificates with verified information. No fictitious production credits, certifications, awards or location were added. Update the English or Georgian SEO descriptions if the underlying business scope changes. Provide proper alt text for real photos.

## Local preview

Open the **project root** in VS Code, start Live Server on `index.html`, and test `/en/`, `/ka/` and all five pages. Do not open individual HTML pages via the file:// protocol.
