# QUIÉN ES BAMBÚ — Side-by-side page/component edit log
Audit date: 2026-11-13
Status: proposed, NOT approved for implementation or production publish
Sources: Webflow connected site `6799ccd170a8bb46165fbc41` (page text/metadata/CMS items), `executiveusa/animobambu` draft PR #2, source conversation decisions.
Scope: personal site, approved AI design portfolio, Bitácora; private Caelo/Instinct/Amentis remain backend only.

## Hard boundaries
- Preserve Webflow hero, NewTitle typography, original collage/torn-paper assets, color, spatial rhythm and recognizable animation unless owner specifically approves change.
- No made-up personal memories, projects, testimonials, metrics, screenshots or links. Do not publish placeholder articles, private Second Brain material or unapproved people/relationships.
- Public name **QUIÉN ES BAMBÚ** and journal **Bitácora** most recently approved; older Webflow/ICM files say Ánimo Bambu and Cuaderno. Do not silently change visible brand or URLs.
- Webflow site last published 2025-04-30 according to site metadata; later draft edits do not establish live publication. Netlify has recorded ready deploy `6ac0f0db82e9953475077f27` from `main` commit `f4bdc463532c561783beeb08839479a3edbca8b3`, but public root was observed HTTP 404. Next.js Home+Bitácora branch still draft PR #2, not production-proven.
- Current review was **content/CMS/metadata**, not a pixel-diff or interaction performance audit. Capture screens and test before any visual-change acceptance.

## Table: Current (read-only) vs intended (review proposed)
| ID | Page / component | Current verified source | Proposed edit | Gate / acceptance | Priority | Status |
|---|---|---|---|---|---|---|
| 01 | Global header | Webflow shared component; Home has huge hero; Next.js PR2 nav has Historia/Trabajo/Bitácora/Contacto | Spanish menu Inicio, Historia, Portafolio IA, Bitácora, Contacto; hidden secondary Ahora/Biblioteca until ready; mobile toggle & keyboard | Visual desktop parity, mobile menu keyboard tested; owner review | P1 | PROPOSED |
| 02 | Home hero | Values + `QUIEN / ES / BAMBU?`; decor SVGs; NewTitle in PR2 uses remote Webflow TTF | Correct accents only with approved visual review; retain same layering, proportions and imagery; audit font license | Comparison at 1440/768/390 widths, no overflow, motion-safe | P1 | PROPOSED |
| 03 | Values / O.W.P.I.L. | `LOYALTY, HONOR, TRUTH , RESPECT`; O.W.P.I.L. with original wording | Preserve authentic philosophy; correct punctuation only if approved; responsive text spacing | Exact copy owner signoff; WCAG contrast | P2 | PROPOSED |
| 04 | Historia intro | Webflow `Hello I'm Bambu, a nomadic volunteer...`; generic placeholder on About | Bambu-sourced Spanish biography, jungle/plants/volunteering/AI design experiences only if verified and approved; portraits real and permitted | Trace claims to authorized source; no invented work | P1 | PROPOSED |
| 05 | OUR-DEAS | Existing statement `Nothing Significant Can be Done Alone...`; seven-generations mission | Keep OUR-DEAS as visual concept, natural Spanish supporting prose without hype | Copy approval and original design parity | P2 | PROPOSED |
| 06 | Featured AI portfolio | `Work` / `Construyendo` says `CREATIVE WORK`, generic text, `No items found`; Projects CMS has 5 items | New `Portafolio IA` section. Curate 3 favorite real apps first; each card shows app, screenshot/video, short job-to-be-done, role, tech optional, status, verified working demo, outcome evidence | No unverified demo or claims; mobile+desktop card interaction; real links | P1 | PROPOSED |
| 07 | Portfolio detail | Existing Projects Template and categories; CMS items: THE CYCLE, PAULI, SANDS OF MIND, Paste up, Copy and paste | Classify each record KEEP/REWRITE/ARCHIVE after source check; one living case study: problem → design → working UI → proof → link; avoid template client fields | No fake client name/metrics; verify links and screenshot | P1 | PROPOSED |
| 08 | Work/disciplines | Home lists `Nomadic Forestry`, `Fogponics`, `Branding`; coded PR2 lists APP, AI, ECOMMERCE, CRYPTO, PRINT, WEBSITES, etc. | Group into authentic themes: real-world ecology/volunteering, design/software, creative practice. Keep distinct interests, not generic capability tags without evidence | Owner verifies scope; preserve collage treatment | P2 | PROPOSED |
| 09 | Bitácora index | Webflow `UNCRUMPLED` + generic text + `No items found`; CMS has 5 placeholder titles and old slugs; PR2 has `/bitacora` honest empty state | Keep name Bitácora; editorial entries from approved real sources with categories/date/excerpt, readable paper motif; no fake posts | One approved provenance-backed entry and mobile list | P1 | PROPOSED |
| 10 | Bitácora article | Existing Blog Posts Template with old SEO bindings | Individual article with title, dated sources, approved author voice, accessible images, related project; owner-only publication gate | Preview read-only, noindex for drafts, test auth/private leaks | P1 | PROPOSED |
| 11 | Ahora | Draft page reuses About content: `Fun Memories`, generic Product/Web/Brand Design copy | Small real-time-aware but not speculative 'Ahora' page: last verified, building / learning / thinking; no private location | Timestamp and verified evidence; manually update until agent proven | P2 | PROPOSED |
| 12 | Biblioteca | Draft page also reuses About copy and generic services | Idea → book/framework → application → observed result; source attribution from approved Amentis projection only | Citation/right-to-publish check and no private archives | P3 | PROPOSED |
| 13 | Contacto | `Contact me`, `Do you work for Exposure?`, generic AI FAQ, unverified form; staged Next.js mailto placeholder | Human-centered bilingual contact copy; one verified method (form/email); remove Exposure contamination and fake address | Form submission received in controlled test; privacy notice, spam mitigation | P1 | PROPOSED |
| 14 | Footer/metadata | Original template pages have `[PLACEHOLDER — SEO...]`; legal/template instructions still in page inventory | Consistent language/identity/footer/copyright; hide/deindex template utilities and draft pages after review; canonical titles, descriptions, social cards | Crawl/read SEO and noindex staging; no live deletion | P1 | PROPOSED |
| 15 | Global responsive/animation | Webflow interactions not audited visually; Next.js PR2 uses CSS transforms and hides nav on smaller screens | Preserve scroll/layering; make controls keyboard usable, motion-reduced, no horizontal overflow | Screenshot/diff at 1440, 768, 390 + keyboard/touch/reduced motion | P1 | PROPOSED |
| 16 | Data/hosting boundary | Webflow CMS records exist; Caelo private wrapper drafted; Netlify 404 despite deploy 'ready' | Choose canonical deployment after inspecting Netlify source/artifact, avoid duplicate CMS or production branch; public-only content projection | Verified 200 HTML, deployment commit match, no secrets, rollback test | P1 | PROPOSED |

## CMS inventory (confirmed via Webflow Data API)
- **Projects**: 5 records: THE CYCLE (`bioethics`), PAULI (`structure-of-organic-matter`), SANDS OF MIND (`artificial-general-intelligence`), Paste up (`paste-up`), Copy and paste (`et-dolor-iste`). Do not assume these are valid finished apps without independent links/evidence.
- **Blog Posts**: 5 records with placeholder titles, old demo slugs: remote-work-for-the-better; designers-who-changed-the-web; 20-myths-about-web-design; 14-common-misconceptions-about-web-design; the-worst-advice-weve-ever-heard-about-web-design. These should never serve as public real personal posts.
- **Project Categories**: My Recent, WANTED! (draft), BY FREDO 3D. Classify before editing.
- **Blog Categories**: Predictions, My feelings, The future. Classify before editing.
- Draft pages created Oct 2 2026: Ánimo Bambu, Ahora, Construyendo, Cuaderno, Biblioteca, Contacto.
- Legacy pages: Home, About, Work, Blog, Contact; project/blog CMS templates; Style Guide, Licensing, Instructions, Change Log, 401/404.
- Source content still has template language even where lorem ipsum was cleared: `Fun Memories`, `Let me help you in this directions`, `Brand Deisng`, `Do you work for Exposure?`, generic design paragraphs, empty CMS states.

## Execution order: one measurable slice at a time
1. **Freeze and compare**: screenshot current Webflow Home and all important pages; pull deployed Netlify artifacts and associate production commit; baseline PR #2 build. Do not touch visual identity or DNS.
2. **Navigation + Home structure**: repair nav/mobile and Home links, preserve hero pixel parity. PR preview + owner visual signoff.
3. **Portfolio IA**: verify and choose THREE favorite actual shipped apps; implement static evidence-backed portfolio cards and ONE case-study detail, preserving collage design. Do not add speculative CMS.
4. **Bitácora**: use existing honest empty state; implement article template & secure provenance-backed review data contract; publish no entries until approved.
5. **Historia/OUR-DEAS/Trabajo**: replace generic English copy one section at a time with owner-approved, source-backed Spanish; do not change brand art.
6. **Contacto**: replace template/placeholder FAQ, verify a real working contact mechanism.
7. **Ahora and Biblioteca**: launch only when sourced data exists, otherwise leave staged/unlisted; keep backend private.
8. **Global QA**: responsive + motion + accessibility + performance + SEO + anti-leak test; code review, screenshot diff, rollback rehearsal; only then request final visual approval and production release.

## Edit log protocol (append after EACH edit)
Use one row per changed component:
`edit_id | date | page | component | before text/screenshot ref | after text/screenshot ref | exact change | reason | evidence/test | commit/preview | reviewer | Bambu approved? | rollback SHA/status`.
Required states: AUDITED → PROPOSED → APPROVED → IMPLEMENTED → VERIFIED → RELEASED. Never label VERIFIED without browser/runtime proof. Never label RELEASED until owner-approved production deploy is independently observed.

## First batch proposed for approval
Batch 01 is Home navigation and portfolio entry point ONLY. Don't change the hero, font, logo, visual rhythm or desktop appearance. Add clear Portafolio IA navigation, functional mobile menu and valid anchors on coded preview. Record before/after at 1440/768/390 and obtain review. This makes the portfolio discoverable without prematurely choosing/advertising unverified apps.
