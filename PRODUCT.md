# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: academic peers evaluating Ricardo Cruz-Correia: jury members, reviewers, people extending invitations (talks, committees, projects) and evaluators of his CV. They arrive from a CV, ORCID, a paper or a talk and need to judge, quickly and with evidence, the scope, continuity and impact of his research and its transfer to practice.

Secondary (unconfirmed priority): students looking for supervision topics, R&D partners and funders, health organisations.

## Product Purpose

Personal academic site of Ricardo Cruz-Correia (Ricardo João Cruz Correia), Associate Professor of Medical Informatics at FMUP / MEDCIDS, University of Porto. It presents affiliations, research interests and the evolution of R&D projects and publications over 20+ years, and links to in-depth topic sub-pages (e.g. `/GenAI/`). Success: a peer leaves with an accurate, verifiable picture of the trajectory and knows how to make contact.

## Positioning

The bridge between academia and the market: research in health information systems that became companies and products. He co-founded several U.Porto spin-offs and digital-health companies (HealthySystems, VirtualCare, PharmaDataHub, Ciência e Letras, Opvance, Nexalyse, Salut.ia) and many R&D projects were run with companies (e.g. HS.Helios, ObsCare WCR, MedGPT, VIGIA). Few peers can show the same research-to-product path.

## Operating Context

- Visitors read on desktop (evaluation work) and on phones (after a talk or link).
- The site sits at the root of `ricardojccorreia.github.io`. Other GitHub Pages projects live under sub-paths and must keep working: `/GenAI/` (talks and training, with a request form), `/efmi-wg-edu/`, `/efmi-wg-edu-dev/`.
- The profile photo is loaded from `GenAI/ricardo.jpg`.

## Capabilities and Constraints

- Static HTML/CSS/JS on GitHub Pages, no build step (existing codebase).
- Bilingual PT/EN with a toggle; language preference shared with `/GenAI/` via `localStorage` key `site_lang` and `?lang=`.
- Light and dark themes.
- R&D data lives in `data/trajetoria.js` (single source for homepage timeline and `trajetoria.html`).
- Public contact: the owner agreed to publish a contact; the exact address is **undecided** — do not invent one.
- `/GenAI/` will later adopt the new identity (not part of this round).

## Brand Commitments

- Scholarly name: Ricardo Cruz-Correia; full name Ricardo João Cruz Correia.
- No binding visual identity for this site; the current navy/cyan look is inherited from `/GenAI/` and may be replaced.

## Evidence on Hand

- Trajectory data from the presentation "Pesquisa e Colaboração UFG–U.Porto" (Sept. 2026): 283 works on ORCID, 33 R&D projects (36 entries listed incl. institutional funding), 5 U.Porto spin-offs co-founded, 20 years in the MSc in Medical Informatics; publications per area × period; 36 projects with references.
- Academic profiles: ORCID 0000-0002-3764-5158, Ciência Vitae 7F17-9F23-61E9, Authenticus R-000-FBK, ResearchGate, ResearcherID A-2756-2009, Lattes, LinkedIn.
- Affiliations: FMUP / MEDCIDS, RISE-Health (Entrepreneurship for Innovative Health Solutions), e-MAIS (president), HL7 Portugal, EFMI WG EDU.
- Absent, do not fabricate: publication list, testimonials, project funding values, company descriptions for Opvance / Nexalyse / Salut.ia, which project became which company (ask before claiming links).

## Product Principles

1. Evidence over adjectives: every claim traceable to data or a profile.
2. Show the arc: continuity from hospital data integration to generative AI is the story.
3. Research and product side by side: projects and companies are one trajectory, not separate lists.
4. Equal in PT and EN: no half-translated content.

## Accessibility & Inclusion

WCAG 2.2 AA (contrast, keyboard, touch targets) — gaps found in the first critique must be closed.
