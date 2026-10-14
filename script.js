(() => {
  const page = document.body.dataset.page || 'index';
  document.querySelector(`[data-nav="${page}"]`)?.classList.add('active');
  document.getElementById('year').textContent = new Date().getFullYear();
  const menu = document.getElementById('menuToggle');
  const nav = document.getElementById('main-nav');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }));
  const check = document.getElementById('language-check');
  const language = (localStorage.getItem('dato-language') === 'ka') ? 'ka' : 'en';
  function setLanguage(lang) {
    const data = window.siteTranslations?.[lang] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const translation = data[node.dataset.i18n];
      if (translation !== undefined) {
        // Preserve decorative inline markup on headings with an emphasized span.
        const em = node.querySelector('em');
        if (em && node.children.length === 1) {
          const parts = translation.match(/^(.*?)([^. ]+\.)$/);
          if (parts) { node.replaceChildren(document.createTextNode(parts[1]), em); em.textContent = parts[2]; }
          else node.textContent = translation;
        } else if (!node.querySelector('em')) node.textContent = translation;
        else {
          // Make the final word visually accented for translated headings.
          const words = translation.trim().split(' ');
          em.textContent = words.pop();
          node.replaceChildren(document.createTextNode(words.join(' ') + ' '), em);
        }
      }
    });
    document.title = (lang === 'ka' ? {'index':'მთავარი','gallery':'გალერეა','about':'ბიოგრაფია','certificates':'სერტიფიკატები','contact':'კონტაქტი'}[page] : {'index':'Home','gallery':'Gallery','about':'Biography','certificates':'Certificates','contact':'Contact'}[page]) + ' | Dato Golotidze';
    check.checked = lang === 'ka';
    localStorage.setItem('dato-language', lang);
  }
  if(check) { setLanguage(language); check.addEventListener('change', () => setLanguage(check.checked ? 'ka' : 'en')); }
  const filters = document.querySelectorAll('.filter-button');
  const tiles = document.querySelectorAll('.gallery-tile');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.toggle('active', b === btn));
    tiles.forEach(t => { t.hidden = btn.dataset.filter !== 'all' && t.dataset.category !== btn.dataset.filter; });
  }));
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = lightbox?.querySelector('.lightbox-content');
  tiles.forEach(tile => tile.addEventListener('click', () => {
    // Once a real image is placed within a tile, open it at full size.
    const img = tile.querySelector('img');
    if (!img || !lightbox || !lightboxContent) return;
    const full = img.cloneNode(true);
    full.alt = img.alt || 'Portfolio image';
    lightboxContent.replaceChildren(full);
    lightbox.showModal();
  }));
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
  lightbox?.addEventListener('click', event => { if(event.target === lightbox) lightbox.close(); });
})();
