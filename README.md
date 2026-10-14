# Dato Golotidze — Hair Artist Portfolio

A static bilingual (English / Georgian) site with five pages. No backend, accounts or subscription needed. Publish with GitHub Pages or Cloudflare Pages.

## Pages
- `index.html` — Homepage
- `gallery.html` — Filterable portfolio; mobile horizontal gallery
- `about.html` — Biography
- `certificates.html` — Certificates
- `contact.html` — Contact information

## Edit
- Change texts in `translations.js` (both languages).
- Add actual photos to `media/` and replace placeholder blocks in corresponding HTML. For gallery tiles, put `<img src="media/photo-name.jpg" alt="Description" loading="lazy">` inside `.gallery-tile-visual` instead of `.tile-mark`; the existing lightbox opens images when clicked. Add this CSS to `gallery.css`: `.gallery-tile-visual img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}`.
- Replace fictitious `+995 XXX XX XX XX`, `hello@example.com` and `@your_instagram` in `contact.html` with correct information; these are non-clickable placeholders.
- Replace certificate placeholders with real credentials, dates, and images.
- Add verified film/TV credits to `about.html`, and licensed production images to the gallery.
- Update name spelling where necessary; this draft uses David/Dato Golotidze and დავით (დათო) გოლოთიძე.

## Files
`styles/styles.css` imports separate sections, including shared `header.css` / `footer.css` and responsive rules in `responsive.css`.

## Local preview
Open `index.html` through VS Code Live Server. You can open other pages using navigation links.

## Deployment
For GitHub Pages, upload contents of this folder to the branch root and configure Settings > Pages > Deploy from branch > main / (root). No build step needed.

IMPORTANT: All photos, credits and certificate thumbnails are intentionally marked as placeholders; the current site makes no claim of specific awards, employers or productions. The stylist's described film/TV experience is based on the project brief, not independently verified.
