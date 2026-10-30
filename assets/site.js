/* ============================================================================
   Comportamento comum: idioma (partilhado com /GenAI/ via "site_lang"),
   tema claro/escuro e o desenho da Fig. 1 a partir de data/trajetoria.js.
   ========================================================================== */

const Site = (() => {
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  const q = new URLSearchParams(location.search).get("lang");
  let lang = (q === "pt" || q === "en") ? q
    : (store.get("site_lang") || ((navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en"));
  if (lang !== "pt" && lang !== "en") lang = "pt";

  const savedTheme = store.get("theme");
  if (savedTheme === "dark" || savedTheme === "light") document.documentElement.dataset.theme = savedTheme;

  const ICON = {
    dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    light: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };
  const isDark = () => (document.documentElement.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";

  function controls(onLang) {
    const lb = document.getElementById("lang"), tb = document.getElementById("theme");
    const paint = () => {
      lb.textContent = lang === "pt" ? "EN" : "PT";
      lb.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para português");
      lb.setAttribute("lang", lang === "pt" ? "en" : "pt");
      const dark = isDark();
      tb.innerHTML = dark ? ICON.light : ICON.dark;
      const label = lang === "pt" ? (dark ? "Tema claro" : "Tema escuro") : (dark ? "Light theme" : "Dark theme");
      tb.setAttribute("aria-label", label); tb.title = label;
    };
    lb.addEventListener("click", () => {
      lang = lang === "pt" ? "en" : "pt"; store.set("site_lang", lang);
      const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u);
      paint(); onLang(lang);
    });
    tb.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      document.documentElement.dataset.theme = next; store.set("theme", next); paint();
    });
    paint();
  }

  /* Fig. 1 — publicações por período (linha) e início de projetos (marcas).
     Em ecrãs estreitos desenha-se na vertical: um período por linha. */
  const narrow = matchMedia("(max-width: 760px)");
  const figs = [];
  narrow.addEventListener("change", () => figs.forEach(f => draw(...f)));

  function figure(svg, L, opts = {}) {
    const i = figs.findIndex(f => f[0] === svg);
    if (i >= 0) figs[i] = [svg, L, opts]; else figs.push([svg, L, opts]);
    draw(svg, L, opts);
  }

  function ticks(cb) {
    const byYear = {};
    TL_PROJECTS.forEach(p => { const y = +p.start.slice(0, 4); (byYear[y] = byYear[y] || []).push(p); });
    let k = 0;
    Object.keys(byYear).sort().forEach(y => byYear[y].forEach((p, j, list) => cb(p, +y, j, list.length, k++)));
  }
  const tick = (p, x1, y1, x2, y2, k) =>
    `<line class="tk${p.state === "ongoing" ? "" : " done"}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" style="--d:${(k * 0.02).toFixed(2)}s"><title>${p.start.slice(0, 4)} · ${p.short}</title></line>`;

  function draw(svg, L, opts) {
    const n = TL_PERIODS.length, last = n - 1;
    const start = i => i === 0 ? 2005 : 2009 + 3 * (i - 1), span = i => i === 0 ? 4 : 3;
    const href = i => (opts.local ? "" : "trajetoria.html") + `?lang=${L}#p${i}`;
    const partial = L === "en" ? "partial" : "parcial";
    const num = (i, x, y) => `<a href="${href(i)}" class="nm" aria-label="${TL_PERIODS[i]} — ${TL_TITLE[L][i]}"><circle cx="${x}" cy="${y}" r="14"/><text x="${x}" y="${y + 5}" text-anchor="middle">${i + 1}</text></a>`;
    const maxP = Math.max(...TL_PUB_TOTAL) * 1.08;
    let s = "", W, H, len = 0, d = "", dl = "";

    if (narrow.matches) {
      /* Vertical: numeral · período · barra de publicações · marcas de projetos */
      W = 360; const row = 74, top = 6; H = top + row * n;
      const bx = 58, bw = W - bx - 34;
      for (let i = 0; i < n; i++) {
        const y = top + row * i;
        if (i) s += `<line class="gr" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
        s += num(i, 20, y + 30);
        s += `<text class="yl" x="${bx}" y="${y + 20}">${TL_PERIODS[i]}${i === last ? " · " + partial : ""}</text>`;
        const w = TL_PUB_TOTAL[i] / maxP * bw;
        s += `<line class="ax" x1="${bx}" y1="${y + 34}" x2="${bx + w}" y2="${y + 34}" style="stroke-width:6${i === last ? ";stroke-dasharray:4 3" : ""}"/>`;
        s += `<text class="vl" x="${bx + w + 6}" y="${y + 38}">${TL_PUB_TOTAL[i]}</text>`;
        s += `<line class="ax" x1="${bx}" y1="${y + 62}" x2="${bx + bw}" y2="${y + 62}" style="opacity:.35"/>`;
      }
      ticks((p, yr, j, m, k) => {
        const i = tlPeriodOf(yr), y = top + row * i;
        const x = bx + ((yr - start(i)) + .5) / span(i) * bw + (j - (m - 1) / 2) * 5;
        s += tick(p, x, y + 48, x, y + 61, k);
      });
    } else {
      W = 1000; H = 300; const left = 30, right = 20, top = 62, plotB = 196, base = 250;
      const cw = (W - left - right) / n, cx = i => left + cw * i + cw / 2;
      const py = v => plotB - (v / maxP) * (plotB - top - 34);
      for (let i = 1; i < n; i++) s += `<line class="gr" x1="${left + cw * i}" y1="${top - 6}" x2="${left + cw * i}" y2="${base}" stroke-dasharray="2 4"/>`;
      s += `<line class="ax" x1="${left}" y1="${base}" x2="${W - right}" y2="${base}"/>`;
      const pts = TL_PUB_TOTAL.map((v, i) => [cx(i), py(v)]);
      d = pts.slice(0, last).map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
      for (let i = 1; i < last; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
      s += `<path class="pl" d="${d}" style="--len:${Math.ceil(len)}"/>`;
      s += `<path class="pl part" d="M${pts[last - 1].join(" ")} L${pts[last].join(" ")}"/>`;
      pts.forEach(([x, y], i) => {
        s += `<line class="ld" x1="${x}" y1="${top - 26}" x2="${x}" y2="${y - 7}"/>`;
        s += `<circle class="pt" cx="${x}" cy="${y}" r="4.5"/>`;
        s += i === last ? `<text class="vl" x="${x - 9}" y="${y + 18}" text-anchor="end">${TL_PUB_TOTAL[i]} · ${partial}</text>`
                       : `<text class="vl" x="${x + 9}" y="${y - 8}">${TL_PUB_TOTAL[i]}</text>`;
        s += num(i, x, top - 40);
        s += `<text class="yl" x="${x}" y="${base + 24}" text-anchor="middle">${TL_PERIODS[i]}</text>`;
      });
      const yearX = y => { const i = tlPeriodOf(y); return left + cw * i + ((y - start(i)) + .5) / span(i) * cw; };
      ticks((p, yr, j, m, k) => { const x = yearX(yr) + (j - (m - 1) / 2) * 5; s += tick(p, x, base - 24, x, base - 2, k); });
    }

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = s;
  }

  // Indica que a tabela continua para a direita até ser deslizada até ao fim
  document.querySelectorAll(".tbl").forEach(w => {
    const upd = () => w.classList.toggle("end", w.scrollLeft + w.clientWidth >= w.scrollWidth - 4);
    w.addEventListener("scroll", upd, {passive: true}); addEventListener("resize", upd); setTimeout(upd, 0);
  });

  return { get lang() { return lang; }, controls, figure };
})();
