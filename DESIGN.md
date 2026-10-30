---
name: Ricardo Cruz-Correia
description: An academic profile set as the first page of a scientific article; the sub-pages are its supplementary material.
colors:
  desk: "#e9eaeb"
  paper: "#ffffff"
  ink: "#16181c"
  ink-2: "#454b55"
  rule: "#c9ccd2"
  rule-2: "#e6e7ea"
  journal-teal: "#0b5e5e"
  journal-teal-soft: "#e6f1f0"
  selection: "#cfe6e4"
  stamp: "#6a2bb0"
  stamp-soft: "#f3ecfb"
  area-1-interop: "#1b2f8f"
  area-2-quality: "#0d6b77"
  area-3-security: "#4a5568"
  area-4-ai: "#8a5a00"
  area-5-education: "#2f6b2a"
  area-6-devices: "#a3203a"
  area-7-other: "#8f96a3"
  night-desk: "#0d0f12"
  night-paper: "#16191e"
  night-ink: "#e8eaee"
  night-ink-2: "#aab1bd"
  night-rule: "#3d444f"
  night-rule-2: "#272c34"
  night-journal-teal: "#5cc8c4"
  night-journal-teal-soft: "#14302f"
  night-selection: "#1f4a48"
  night-stamp: "#d9bcff"
  night-stamp-soft: "#2a2366"
  night-area-1: "#8ea8ff"
  night-area-2: "#3fc1cf"
  night-area-3: "#9aa6b8"
  night-area-4: "#f0c46a"
  night-area-5: "#9fdb8f"
  night-area-6: "#ff9fb1"
  night-area-7: "#a9b2c8"
typography:
  article-title:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "clamp(1.9rem, 4.3vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  supplement-title:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "clamp(2rem, 4.6vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  author:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.55rem)"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)"
    fontWeight: 750
    lineHeight: 1.2
  section-head:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1.2
  section-label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
  supplement-head:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
  body:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.62
  caption:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.45
  table:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.35
  running-head:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.3
  label-mono:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1
  reference-number:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 600
    lineHeight: 1.6
  stamp:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  hairline: "2px"
  control: "3px"
  numeral: "50%"
spacing:
  gutter: "16px"
  page-top: "30px"
  page-side: "clamp(16px, 5vw, 64px)"
  page-bottom: "44px"
  column-gap: "44px"
  abstract: "18px 22px 16px"
  tap: "44px"
components:
  journal-page:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "30px clamp(16px, 5vw, 64px) 44px"
    width: "1040px"
  running-head:
    textColor: "{colors.ink-2}"
    typography: "{typography.running-head}"
  abstract-panel:
    backgroundColor: "{colors.journal-teal-soft}"
    textColor: "{colors.ink}"
    padding: "{spacing.abstract}"
  control-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 10px"
  filter-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 16px"
  filter-button-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
  stamp-ongoing:
    textColor: "{colors.stamp}"
    typography: "{typography.stamp}"
    rounded: "{rounded.hairline}"
    padding: "4px 6px 3px"
  role-tag:
    textColor: "{colors.ink}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.hairline}"
    padding: "4px 6px 3px"
  conflict-box:
    backgroundColor: "{colors.rule-2}"
    textColor: "{colors.ink}"
    padding: "10px 12px"
  reference-numeral:
    textColor: "{colors.ink}"
    rounded: "{rounded.numeral}"
    size: "26px"
---

# Design System: Ricardo Cruz-Correia

## Overview

**Creative North Star: "The First Page of the Article"**

The profile is typeset as the opening page of a scientific paper: running head, serif title, author line with affiliation superscripts, a structured abstract, a two-column body with one figure and one table, a conflict-of-interest box, and numbered references. The sub-pages are the paper's supplementary material, labelled S1 (trajectory register), S2 (talks) and S3 (story), and every table inside them is numbered as a supplementary table ("Tabela S1" / "Table S1"). The reader is an academic peer; the page wins their trust by behaving exactly like the documents they already judge for a living.

The homepage sits as a white journal page on a grey desk, the only object with a shadow. Ink is near-black; one journal teal marks the apparatus (running head, labels, superscripts, the abstract panel, reference numbers and links in the references); violet appears only for something still live. Density is that of a printed page: serif reading text in two columns at 320px minimum, Archivo for every heading, label and table, mono only where a printer would set figures (reference numbers, codes, years). Rules, not boxes, separate content; tables are booktabs. The dark theme is the same page read at night: every token is redefined and nothing else changes.

S1 and S2 drop the desk and are set as full-width sheets under a ruled running head carrying their S-label. S3 (historia.html) is a sanctioned exception: a dark, full-screen, continuous-background presentation with its own palette, still labelled S3 and still using the site's three faces.

**Key Characteristics:**
- Grey desk, one white journal page; the page sheet is the only shadow.
- One teal for the article apparatus; black ink for everything read.
- Serif title and two-column serif body; Archivo for heads, labels and tables; mono for numbers that a typesetter would set apart.
- Booktabs tables (1.5px ink above and below, 1px ink under the header, hairline rows).
- Supplementary labels S1/S2/S3 and "Tabela/Table S1, S2"; figures as "Figura/Figure 1".
- Violet only for live state; partial data drawn dashed and labelled.
- Every control and link row at least 44px tall; PT and EN carry identical content.

## Colors

A cool grey-and-ink print palette with a single journal teal for apparatus, a violet reserved for live state, and seven area colours that exist only inside data.

### Primary
- **Journal Teal** (journal-teal): the running-head kind ("PERFIL DE INVESTIGAÇÃO"), the S-labels and figure/table codes, affiliation superscripts, the abstract heading and its 3px top rule, keyword label, numbered section prefixes ("1."), bracketed reference numbers, links inside the reference list and the contact line, and the focus ring.
- **Abstract Wash** (journal-teal-soft): the ground of the abstract panel only; it is also the hover fill of Fig. 1 numerals and the flat wash behind a targeted period heading on S1.
- **Selection Teal** (selection): text selection.

### Secondary
- **Live Violet** (stamp): ongoing projects (stamp in the S1 register, ticks in Fig. 1) and the next upcoming talk in the homepage references. Nothing else.
- **Violet Tint** (stamp-soft): reserved tint paired with the stamp.

### Tertiary (data only)
- **Area colours** (area-1-interop through area-7-other): research-area swatches in the Fig. 2 publications table on S1. The heat ramp is area-1 mixed into paper at 6–40% (`color-mix(in srgb, var(--a1) n%, var(--sheet))`). Area 7 ("other") also greys the row text.

### Neutral
- **Desk Grey** (desk): the homepage ground around the journal page.
- **Page White** (paper): the journal page and the S1/S2 sheets (`--sheet` is an alias).
- **Press Ink** (ink): all reading text, rules that open or close (running head underline, booktabs, period openers), pressed filter fill.
- **Secondary Ink** (ink-2): captions, affiliations, metadata, descriptions.
- **Section Rule** (rule): link underline colour at rest, control borders, section dividers.
- **Row Rule** (rule-2): hairlines between rows; ground of the conflict-of-interest box.

### Night (dark theme)
The night-* tokens redefine the same roles under `@media (prefers-color-scheme: dark)` (guarded by `:root:not([data-theme="light"])`) and `:root[data-theme="dark"]`: near-black desk, charcoal page, light teal apparatus, lilac stamp, lightened area colours.

### Named Rules
**The Apparatus Teal Rule.** Teal marks the article's apparatus (running head, labels, superscripts, abstract panel, reference numbers, reference and contact links) and never the reading text, body links, headings' words or decoration.

**The Live Violet Rule.** Violet means "still happening": an ongoing project or the next talk. A closed item is ink; if nothing is live, no violet appears.

**The Data-Only Area Rule.** Area colours appear only on data marks (swatches and the heat ramp). They never colour headings, links or chrome.

## Typography

**Display / Body Font:** Source Serif 4 (with Georgia, serif), roman and italic, variable 200–900
**Label / Table Font:** Archivo (with system-ui, sans-serif), variable weight 100–900, width 62–125
**Mono Font:** JetBrains Mono (with ui-monospace, monospace), variable 100–800

All three are OFL-1.1 and self-hosted from `/fonts` as woff2 with `font-display: swap`. Body numerals are lining (`font-variant-numeric: lining-nums`); tables of counts use tabular figures.

**Character:** A journal's own pairing: a sturdy text serif for the title and the argument, a neutral grotesque for the apparatus a reader scans (authors, heads, tables), and a typewriter mono only for the numbers a typesetter would set apart.

### Hierarchy
- **Article title** (600, clamp(1.9rem, 4.3vw, 2.9rem), 1.12, max 26ch, balanced): the homepage h1 only.
- **Supplement title** (600, clamp(2rem, 4.6vw, 3.1rem), 1.1): S1/S2 h1, preceded inline by its teal mono S-label.
- **Author** (Archivo 700, clamp(1.25rem, 2.4vw, 1.55rem)): the author line, with teal superscripts at .62em.
- **Headline** (Archivo 750, clamp(1.15rem, 2.2vw, 1.45rem)): S1 period headings, period years in mono before the words. S2 year heads use Archivo 800 at 1.4rem, width 80%.
- **Section head** (Archivo 700, 1.02rem, sentence case): numbered body sections ("1. Introdução"), number in teal.
- **Section label** (Archivo 700, .82rem, .12em, uppercase, teal): the abstract heading.
- **Supplement head** (Archivo 700, .95rem, .06em, uppercase): S1/S2 section heads, with the mono figure/table code inline on the same baseline ("Fig. 1", "Tabela S1").
- **Body** (Source Serif 400, 1.02rem, 1.62): article body in two columns; the global base is 1.0625rem / 1.6.
- **Caption** (Source Serif 400, .92rem, 1.45, ink-2): figure and table captions, led by a bold Archivo "Figura 1." / "Tabela 1.".
- **Table** (Archivo 400, .92rem, 1.35): booktabs table cells; first column 600.
- **Running head** (Archivo 500, .8rem): page header; its kind in 700 uppercase teal at .06em.
- **Label mono** (JetBrains Mono 600, .78rem): S-labels, figure/table codes, years, counts in filters, role tags.
- **Reference number** (JetBrains Mono 600, .82rem, teal): bracketed "[n]" in the reference list.
- **Stamp** (Archivo 700, .68rem, .1–.12em, uppercase): the live stamp only.

### Named Rules
**The Typesetter's Mono Rule.** Mono is for reference numbers, codes (S1, Fig. 1, Tabela S1, ORCID iDs) and years or counts. It never sets prose, names or headings.

**The Serif Argument Rule.** The title, the abstract and the body are serif; anything the reader scans rather than reads (authors, heads, tables, controls) is Archivo.

## Layout

The homepage is a single journal page (max 1040px) centred on the desk, 20px from the top, padded 30px / clamp(16px, 5vw, 64px) / 44px. Under 640px the page meets the screen edge and loses its shadow; the running head shrinks to .75rem.

First viewport: running head (kind · university, date, PT/EN, theme) on a 1px ink rule; the serif title; author line; affiliation list with superscripts; contact links; then the abstract panel begins on screen. The body below runs in CSS columns (`columns: 2 320px`, 44px gap), so it falls to one column on its own; headings avoid breaking after themselves, and tables, the CoI box, the bio and the supplementary list avoid breaking inside. Figure 1 spans both columns.

S1 and S2 use the sheet layout: a ruled running head (min-height 56px) with the S-label, short name and controls, then a 1120px sheet with a 16px gutter; a meta line (back link, date) closed by a 2px ink rule; the title block; sections padded 22–28px. Registers open each group with a 2px ink rule. At 720px register rows restack to one column and S1's area table shows short names.

Fig. 1 is drawn by `assets/site.js`: horizontal (1000×300 viewBox, line plus project ticks) at 761px and wider, vertical (360-wide, one 74px row per period, bar plus ticks) at 760px and narrower, redrawn on breakpoint change. Wide tables scroll inside their region and fade at the right edge until scrolled to the end (760px and below).

Every link row, control and filter is at least 44px tall.

## Elevation & Depth

Flat print. Depth exists exactly once: the journal page lifts off the desk. Everything else is separated by rules and, in one case (the abstract), a tinted ground.

### Shadow Vocabulary
- **Page on desk** (`box-shadow: 0 2px 14px rgba(0,0,0,.08)`): the homepage journal page only; removed at 640px and below.
- Two zero-blur offsets that are not elevation: a 1px row-rule hairline on the sticky first column of the S1 table, and a ±6px abstract-wash bleed behind a targeted period heading.

### Named Rules
**The One Sheet Rule.** Only the page on the desk casts a shadow. Panels, figures, tables and lists stay flat.

## Shapes

Square print geometry. Corners are 2px on stamps, tags and the focus ring, 3px on buttons; the photo and the abstract panel are square. The only round forms are the outlined reference numerals (26–30px circles, 1.25px stroke) in Fig. 1's legend and S1's period heads, and the Fig. 1 numerals themselves. Rules come in three weights: 2px ink to open a sheet or group (and the 3px teal abstract rule), 1.5px/1px ink for booktabs and the running head, 1px rule/rule-2 hairlines between sections and rows.

## Components

### Running head
- **Style:** Archivo .8rem ink-2 above a 1px ink rule; the kind in bold uppercase teal, then "· Universidade do Porto"; date and controls at the right. On S1/S2 it becomes a 56px band with the teal mono S-label first.
- **Controls:** 44×44px minimum, transparent, 1px rule border, 3px corners; border turns ink on hover. Language toggle shows the other language ("EN"/"PT"); theme toggle is an inline 18px stroke icon.

### Abstract panel
- **Style:** abstract wash ground, 3px teal top rule, 18px 22px 16px padding. Heading as the teal section label; four structured paragraphs led by bold Archivo run-in heads ("Contexto.", "Abordagem.", "Resultados.", "Conclusão."); keywords last, label in teal uppercase.

### Tables (booktabs)
- **Style:** full width, Archivo .92rem; 1.5px ink rule above the header and below the last row, 1px ink rule under the header, rule-2 hairlines between rows; no vertical rules, no fills. Caption above, serif, led by bold "Tabela 1." / "Tabela S1".
- **Pending cells:** an em dash in ink-2 italic with an accessible label ("sem descrição").

### References
- **Style:** grid of a 34px mono teal "[n]" column and serif text at .95rem; links teal. The next talk carries the violet stamp ("Próxima"/"Upcoming") before its entry.
- **Figure legend references:** a ruled grid of outlined numerals (1–7) with period in mono and title in Archivo; each opens that period in S1.

### Figure 1
- **Style:** ink line (2px, round joins) on a 1.25px axis, dashed 1px rule grid, hollow points; teal-wash fill on numeral hover/focus (.25s, only without reduced motion). Project ticks: ongoing in 2px violet, closed in ink at 55%.
- **Partial data:** the last period (2024–26) is drawn dashed and labelled "parcial"/"partial" in both orientations.

### Supplementary material list
- **Style:** ruled rows, 44px label column with the teal mono S-label, underlined Archivo name, one-line serif description in ink-2.

### Filter buttons (S1, S2)
- **Style:** 44px tall, 0 14–16px, transparent, 1px rule border, 3px corners, Archivo 600; mono count after the label. Pressed: solid ink with paper text. Hover (unpressed): ink border.

### Live stamp and role tag
- **Stamp:** violet text and 1.5px border, 2px corners, Archivo .68rem uppercase. Only for ongoing/upcoming.
- **Role tag:** mono .72rem, 1px rule border, 2px corners, ink text (IR / Co-IR).

### Conflict-of-interest box
- **Style:** row-rule ground, 10px 12px padding, serif .96rem; the only tinted box besides the abstract.

### Links
- **Style:** inherit ink; 1px underline in the rule colour at .2em offset, turning to currentColor on hover. Reference and contact links are teal. Focus: 2px teal outline, 3px offset, 2px corners.

### S3 Story (sanctioned exception)
historia.html keeps its own world: a fixed full-screen background that interpolates two deep blues and a glow per period (`@property` colour transitions, 1.1–1.4s, off under reduced motion), light ink (#eef2ff / #bcc6e8), condensed heavy Archivo period titles (800, width 74%), white bars, fixed dot navigation and a full-screen index. It still uses the three faces, the S3 label, the violet (night-stamp) for ongoing projects, dashed "parcial" marks, and 44px controls. Do not port its palette or motion to the article pages.

## Do's and Don'ts

### Do:
- **Do** set new top-level pages as supplementary material: teal mono S-label in the running head and before the title, tables numbered "Tabela S<n>" / "Table S<n>".
- **Do** keep teal to the apparatus: running head kind, labels, superscripts, the abstract panel (teal-soft ground, 3px teal top rule), reference numbers and reference/contact links.
- **Do** set titles and running text in Source Serif 4, heads, labels and tables in Archivo, and only reference numbers, codes and years in JetBrains Mono.
- **Do** draw tables as booktabs: 1.5px ink above and below, 1px ink under the header, rule-2 row hairlines, caption above.
- **Do** draw partial data dashed and label it "parcial" / "partial".
- **Do** give every link row, button and filter a 44px minimum tap target.
- **Do** ship every string in PT and EN with the same content, and redefine every colour token for the night theme.

### Don't:
- **Don't** use cards, rounded panels or drop shadows; the journal page on the desk is the only shadow.
- **Don't** use violet for anything but live state (ongoing project, next talk).
- **Don't** colour headings, links or chrome with the area colours; they are for data marks only.
- **Don't** put eyebrow labels or kickers above headings; codes sit inline on the heading's baseline.
- **Don't** put Unicode arrow glyphs in links or buttons; arrows appear only as keyboard hints inside kbd (S3).
- **Don't** set prose or names in mono, or headings in the serif below the title.
- **Don't** bring S3's dark gradient world, glow or scroll motion onto the article pages.
