---
name: Ricardo Cruz-Correia
description: An academic profile set as a patent front page — research filed, companies as titulares.
colors:
  paper: "#ffffff"
  ink: "#12151b"
  ink-2: "#414857"
  rule: "#c4cad6"
  rule-2: "#e3e7ee"
  ink-blue: "#1b2f8f"
  ink-blue-on: "#ffffff"
  blue-soft: "#eef1fb"
  stamp: "#6a2bb0"
  stamp-soft: "#f3ecfb"
  focus: "#1b2f8f"
  selection: "#d6defa"
  area-1-interop: "#1b2f8f"
  area-2-quality: "#0d6b77"
  area-3-security: "#4a5568"
  area-4-ai: "#8a5a00"
  area-5-education: "#2f6b2a"
  area-6-devices: "#a3203a"
  area-7-other: "#8f96a3"
  cyanotype-paper: "#0b1a42"
  cyanotype-ink: "#eef2ff"
  cyanotype-ink-2: "#bcc6e8"
  cyanotype-rule: "#3d5296"
  cyanotype-rule-2: "#22356f"
  cyanotype-band: "#08133a"
  cyanotype-blue-soft: "#132a66"
  cyanotype-stamp: "#d9bcff"
  cyanotype-stamp-soft: "#2a2366"
  cyanotype-focus: "#9fb6ff"
  cyanotype-selection: "#2b4596"
  cyanotype-area-1: "#7f9cff"
  cyanotype-area-2: "#3fc1cf"
  cyanotype-area-3: "#8c99ad"
  cyanotype-area-4: "#f0c46a"
  cyanotype-area-5: "#9fdb8f"
  cyanotype-area-6: "#ff9fb1"
  cyanotype-area-7: "#a9b2c8"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6.4vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 78"
  figure-stat:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 80"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)"
    fontWeight: 750
    lineHeight: 1.2
  subtitle:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.6vw, 1.2rem)"
    fontWeight: 500
    lineHeight: 1.4
  field-heading:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'lnum' 1"
  abstract:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "1.18rem"
    fontWeight: 400
    lineHeight: 1.62
  field-code:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0"
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
  xs: "4px"
  sm: "8px"
  md: "12px"
  gutter: "16px"
  lg: "24px"
  section: "28px"
  column: "32px"
components:
  masthead-band:
    backgroundColor: "{colors.ink-blue}"
    textColor: "{colors.ink-blue-on}"
    height: "56px"
    padding: "0 16px"
  band-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink-blue-on}"
    rounded: "{rounded.control}"
    height: "44px"
    width: "44px"
    padding: "0 10px"
  filter-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 16px"
  filter-button-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 16px"
  stamp-ongoing:
    textColor: "{colors.stamp}"
    typography: "{typography.stamp}"
    rounded: "{rounded.hairline}"
    padding: "4px 6px 3px"
  role-tag:
    textColor: "{colors.ink}"
    typography: "{typography.field-code}"
    rounded: "{rounded.hairline}"
    padding: "4px 6px 3px"
  numeral-reference:
    textColor: "{colors.ink}"
    rounded: "{rounded.numeral}"
    size: "26px"
  more-link:
    textColor: "{colors.ink}"
    height: "44px"
  more-link-hover:
    textColor: "{colors.ink-blue}"
---

# Design System: Ricardo Cruz-Correia

## Overview

**Creative North Star: "The Technology-Transfer Dossier"**

The site is set as the front page of a patent document. A white sheet sits under an ink-blue bibliographic band; the sheet is divided by hairline rules into fields, and each field is numbered with a bracketed INID-style code in mono: (11) the name, (72) the researcher, (73) the companies as titulares, (57) the abstract, (74) the profiles. The codes are wayfinding, not a claim to patents. Below the fields, Fig. 1 is a line drawing of the 2005–2026 trajectory with numeral circles on leader lines that hand the reader into the period register, exactly as a patent figure's reference numerals lead into the description.

The density is that of a printed document: compact rows, tight ruled lists, a reading column that never exceeds about 62–80ch. Nothing floats or lifts. Hierarchy comes from type width and weight (condensed heavy Archivo for names and titles), from rule weight (2px ink rules open a sheet or a period; 1px rules divide fields; lighter 1px rules divide rows), and from the one reserved colour, the violet date-stamp, which marks only what is ongoing. The dark theme is a cyanotype: the same sheet printed in blue, not an inverted UI.

The world refuses the academic template of photo plus bio plus cards. The photo exists, but as an 88×110 greyscale plate inside field (72), framed by a 1px ink line like an inventor's mark.

**Key Characteristics:**
- Ink-blue band masthead carrying (19) institution and the PT/EN and theme controls.
- Bracketed mono field codes inline at the start of headings, never as separate eyebrows.
- Hairline-ruled fields and registers; no cards, no drop shadows.
- Condensed Archivo display, Source Serif reading text, JetBrains Mono for codes, refs, years and data.
- Violet stamp reserved for live / ongoing state.
- Line-drawn figures with numeral circles and leader lines into registers; partial data dashed and labelled.

## Colors

A near-monochrome ink-on-white sheet with one structural blue, one reserved violet and a muted seven-colour area key for data.

### Primary
- **Bibliographic Ink Blue** (#1b2f8f): the masthead band background, the focus ring, the base hue of the Fig. 2 heat cells (mixed into the sheet at 6–40%), and the hover colour of the "more" link. It is the colour of the printed document's header, not an accent sprinkled on controls.

### Secondary
- **Date-Stamp Violet** (#6a2bb0; cyanotype #d9bcff): the ongoing stamp on register rows and the project-start ticks in Fig. 1 that are still running. Its soft tint (#f3ecfb) is defined for the same state.

### Tertiary (data key)
- **Area colours** (area-1 … area-7): Interoperability, Quality, Security, AI, Education, Devices, Other — in that order, matching `TL_AREAS`. They appear only as the stroke of a small hollow square marker beside an area name (interest list, heat-table row headers). Other (area-7) is a grey and its row is set in secondary ink.

### Neutral
- **Sheet White** (#ffffff): page and sheet background (`--paper`, `--sheet`).
- **Press Ink** (#12151b): body text, 2px opening rules, pressed filter buttons, the line and axes of figures.
- **Secondary Ink** (#414857): field codes, captions, meta lines, descriptions under list items.
- **Field Rule** (#c4cad6): 1px rules between fields and sections, link underlines at rest, control borders.
- **Row Rule** (#e3e7ee): 1px rules between rows in lists, registers and table cells.
- **Blue Wash** (#eef1fb): the hover/focus fill of Fig. 1 numerals and the highlight behind a targeted period heading.
- **Selection** (#d6defa): text selection.

### Cyanotype (dark theme)
Activated by `prefers-color-scheme: dark` unless `data-theme="light"`, or by `data-theme="dark"`. Paper becomes deep cyanotype blue (#0b1a42), the band darkens further (#08133a), ink becomes a pale blue-white (#eef2ff), rules become blue (#3d5296 / #22356f), and area colours lighten. Every token is redefined; no component carries its own dark-mode colours except the "more" link hover.

### Named Rules
**The Live Stamp Rule.** Violet means "ongoing" and nothing else. It is never used for links, hover, emphasis, headings or decoration; if a thing is not currently running, it is not violet.

**The One Band Rule.** Ink blue as a filled surface appears only in the masthead band. Elsewhere blue is a line, a wash or a data tint.

**The Key Square Rule.** Area colours are applied only as the 2px stroke of a hollow square marker (11–14px) next to the area's name; they never fill text, rows or backgrounds.

## Typography

**Display Font:** Archivo (variable, weight 100–900, width 62–125%), fallback system-ui, sans-serif
**Body Font:** Source Serif 4 (roman and italic, variable weight), fallback Georgia, serif
**Label/Mono Font:** JetBrains Mono (variable weight), fallback ui-monospace, monospace

All three are OFL-1.1 and self-hosted from `/fonts`; Archivo and Source Serif roman are preloaded.

**Character:** A condensed, heavy grotesque does the job of a patent office's set name and title; a calm book serif carries the abstract and descriptions; a mono sets everything that is a code or a number to be checked.

### Hierarchy
- **Display** (800, clamp(2.4rem, 6.4vw, 4.6rem), 0.98, width 78%, −0.02em, balanced wrap): the (11) name on the profile and the (54) title on the trajectory page. One per page.
- **Figure stat** (800, 2rem, 1, width 80%): the bibliographic figures (21)–(24) on the trajectory page.
- **Headline** (750, clamp(1.15rem, 2.2vw, 1.45rem), 1.2): period headings in the register, preceded by the period in mono.
- **Subtitle** (500, clamp(1rem, 1.6vw, 1.2rem), 1.4, max 60ch, secondary ink): the role / claim line under the display.
- **Field heading** (700, 0.95rem, 1.3, 0.06em, uppercase): every h2; the code inside it stays mono, not uppercase, no tracking.
- **Title** (600–700, ~1rem, 1.3): names in lists (companies, affiliations, projects, references, related documents).
- **Body** (400, 1.0625rem, 1.6, lining numerals): reading text, descriptions, captions (0.9–0.95rem).
- **Abstract** (400, 1.18rem, 1.62, max 62ch): the (57) abstract only.
- **Field code** (mono 500, 0.78rem, 1): INID codes, Fig. labels, references, years, periods, counts in filter buttons, role tags.
- **Stamp** (700, 0.68rem, 0.12em, uppercase): the ongoing stamp only.

### Named Rules
**The Inline Code Rule.** A field code sits inside its heading, on the same baseline, before the heading text: `(73) Titulares — empresas co-fundadas`, `Fig. 1 Trajetória 2005–2026`. It is never a standalone line above a heading.

**The Mono Is Data Rule.** JetBrains Mono is used only for codes, references, years, periods, counts and figure values. Prose, names and headings are never set in mono.

**The Condensed Name Rule.** The narrow width axis (78–80%) is reserved for the display name/title and the bibliographic figures; everything else is set at normal width.

## Layout

A single sheet, max 1120px wide, centred, with a 16px side gutter at every width; the band and footer share the same measure. The sheet opens with a meta line closed by a 2px ink rule, then the title block (display + subtitle, with the ORCID document number right-aligned as a mono "doc no." on the profile), then the fields.

On the profile the fields are a two-column grid at 5fr : 7fr, separated by a 1px vertical rule with 32px padding either side: bibliographic fields (72)(73)(71) on the left, abstract and areas (57)(51)(74) on the right. Below, Fig. 1 runs full width, followed by its numeral reference register in auto-fit columns (min 300px, 32px column gap), then related documents (62).

The trajectory page uses a four-up bibliographic figure strip with 1px vertical rules, then Fig. 1, Fig. 2 (the heat table in a horizontal scroll region with a sticky first column, min-width 760px), then the (56) project register: each period opens with a 2px ink rule and a numeral; each project row is a three-column grid (description / year / state) divided by row rules.

Rhythm: sections pad 24–28px top; field blocks are 26px apart; list rows are 7–14px tall in padding. Steps used: 4, 8, 12, 16, 24, 28, 32px.

Responsive:
- **≤820px:** fields stack into one column with a horizontal rule between groups; the title block stacks and the doc number left-aligns; the band drops the "· FMUP / MEDCIDS" suffix.
- **≤760px:** Fig. 1 redraws vertically — one row per period: numeral, period label, publication bar, project-start ticks (width 360 viewBox). Above 760px it is horizontal: a publication line with points, numerals on leader lines above, ticks on the baseline.
- **≤720px (trajectory):** figure strip goes two-up; register rows reflow so the description spans the full width with year and stamps beneath; heat-table row headers switch to short area names.

## Elevation & Depth

Flat. There are no drop shadows, no elevated surfaces and no layered panels. Depth is conveyed by rule weight (2px ink to open, 1px field rule to divide, 1px row rule within) and by the single filled band. `box-shadow` appears only in two flat, zero-blur uses: a 1px hairline on the sticky heat-table column (`1px 0 0 var(--rule-2)`) and a 6px side bleed of the blue wash behind a targeted period heading.

### Named Rules
**The Printed Sheet Rule.** Nothing lifts off the sheet. If something needs separation, give it a rule; if it needs emphasis, give it weight or the band; never a shadow or a card.

## Shapes

Square by default. Corners are 2px on hairline objects (stamp, role tag, heat cells, focus outline) and 3px on 44px controls (band buttons, filter buttons). The only round shape is the numeral circle (Fig. 1 r=14 in the SVG; 26px in the reference register; 30px in period headings), drawn as a 1.25px ink outline. Area markers are hollow squares with a 2px stroke. The portrait plate is a hard-edged rectangle with a 1px ink frame. Figures are line drawings: 2px round-joined publication line, 1.25px axes, 1px dashed vertical gridlines, 4.5px hollow points.

## Components

### Masthead band
- **Character:** the bibliographic header of the document.
- **Style:** ink-blue fill, white text, min-height 56px, content on the 1120px measure. A (19) code in mono at 80% opacity, the institution / owner in Archivo 600 0.9rem, then the controls.
- **Controls:** PT/EN and theme buttons, 44×44 minimum, transparent with a 1px white-35% border, 3px corners; hover adds a white-12% fill; focus ring turns white. Theme icon is an inline 18px stroked SVG (moon / sun).

### Field headings and field lists
- **Heading:** uppercase Archivo 700 with the mono code inline before it.
- **List rows:** name in Archivo 600 left, description in serif secondary ink right, divided by row rules; the whole row is the link, the name carries the underline (rule colour at rest, current colour on hover).

### Buttons (filter)
- **Shape:** 3px corners, 44px min-height, 0 16px padding, 1px field-rule border.
- **Default:** transparent, ink text, count in mono after the label.
- **Pressed:** ink fill, sheet-colour text (`aria-pressed="true"`).
- **Hover:** border darkens to ink.

### Stamp (ongoing)
- **Style:** Archivo 700 0.68rem uppercase, 0.12em tracking, violet text and 1.5px violet border, 2px corners, 4px 6px 3px padding. The only filled-meaning violet object on the page.

### Role tag
- **Style:** mono 600 0.72rem, 1px field-rule border, 2px corners, ink text. Marks IR / Co-IR (PI / Co-PI) on register rows. Neutral, never violet.

### Numeral references
- **Fig. 1 numerals:** circles on leader lines above each period; links into the trajectory register (`#p0…#p6`). Hover / focus fills the circle with the blue wash (0.25s, `cubic-bezier(.16,1,.3,1)`, only without reduced motion).
- **Reference register:** each entry is a 26px outlined numeral, period in mono, period title in Archivo 650, key projects in secondary ink; the row is the link.
- **Period headings:** a 30px outlined numeral repeats the same number so the figure and the register read as one system.

### Fig. 1 trajectory drawing
- **Horizontal (≥761px):** viewBox 1000×300; publication totals as a line with hollow points and mono values; the last (partial) period's segment dashed (5 4) and its value labelled "· parcial / partial"; project starts as ticks on the baseline, violet if ongoing, ink at 55% if closed.
- **Vertical (≤760px):** viewBox 360 wide, 74px per period; publications as a 6px bar, the partial period dashed (4 3) and labelled in the period text.

### Fig. 2 heat table
- Cells are tinted `color-mix(in srgb, area-1 N%, sheet)` with N from 6 to 40 by publication count; zero cells transparent with secondary ink. Mono column heads over a 2px ink rule; 2px ink rule above the totals row. The scroll region is focusable and labelled.

### "More" link
- Archivo 700 1rem, 44px min-height, 2px ink bottom rule instead of an underline; hover turns text and rule ink blue.

### Navigation
- There is no nav bar. Wayfinding is the band (back to the profile on the trajectory page), the (62) related documents, the "back" link in the meta line (44px), the numerals and the footer links (44px min-height). Footer: owner line left, "Contacto: LinkedIn · ORCID" right.

## Do's and Don'ts

### Do:
- **Do** number every top-level field with a bracketed mono code placed inline at the start of its heading.
- **Do** separate with rules: 2px ink to open a sheet or period, 1px field rule between fields, 1px row rule between rows.
- **Do** reserve the stamp violet for ongoing / live state only (stamp and ongoing ticks).
- **Do** set names and titles in condensed heavy Archivo, reading text in Source Serif 4, and codes, refs, years and data in JetBrains Mono.
- **Do** link a figure to its register with outlined numeral circles on leader lines, repeating the same numeral at the register entry.
- **Do** draw partial or incomplete data dashed and label it in words ("parcial" / "partial").
- **Do** give every interactive target at least 44px in its smallest dimension.
- **Do** redefine every colour token for the cyanotype theme rather than styling components per theme.

### Don't:
- **Don't** place a field code or label as a standalone eyebrow line above a heading.
- **Don't** use cards, boxed panels or drop shadows; `box-shadow` is allowed only as a zero-blur hairline or flat highlight bleed.
- **Don't** use violet for links, hover, emphasis or decoration.
- **Don't** fill surfaces with ink blue outside the masthead band.
- **Don't** set prose, names or headings in mono.
- **Don't** fill text or rows with area colours; use them only as hollow-square key markers.
