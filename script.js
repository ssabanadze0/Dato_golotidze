(() => {
  const page = document.body.dataset.page || "index";
  document.querySelector(`[data-nav="${page}"]`)?.classList.add("active");
  document.getElementById("year").textContent = new Date().getFullYear();
  const menu = document.getElementById("menuToggle");
  const nav = document.getElementById("main-nav");
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  nav?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menu?.setAttribute("aria-expanded", "false");
    }),
  );
  // Each language has a separate, fully translated, indexable URL.
  // The coin keeps its existing CSS flip and then opens the equivalent page.
  const check = document.getElementById("language-check");
  check?.addEventListener("change", () => {
    const nextLanguage = check.checked ? "ka" : "en";
    const target = new URL(
      `../${nextLanguage}/${page}.html`,
      window.location.href,
    );
    target.hash = window.location.hash;
    try {
      localStorage.setItem("dato-language", nextLanguage);
    } catch (_) {}
    window.setTimeout(() => {
      window.location.href = target.href;
    }, 380);
  });
  const filters = document.querySelectorAll(".filter-button");
  const tiles = document.querySelectorAll(".gallery-tile");
  filters.forEach((btn) =>
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.toggle("active", b === btn));
      tiles.forEach((t) => {
        t.hidden =
          btn.dataset.filter !== "all" &&
          t.dataset.category !== btn.dataset.filter;
      });
    }),
  );
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = lightbox?.querySelector(".lightbox-content");
  tiles.forEach((tile) =>
    tile.addEventListener("click", () => {
      // Once a real image is placed within a tile, open it at full size.
      const img = tile.querySelector("img");
      if (!img || !lightbox || !lightboxContent) return;
      const full = img.cloneNode(true);
      full.alt = img.alt || "Portfolio image";
      lightboxContent.replaceChildren(full);
      lightbox.showModal();
    }),
  );
  lightbox
    ?.querySelector(".lightbox-close")
    ?.addEventListener("click", () => lightbox.close());
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
})();
