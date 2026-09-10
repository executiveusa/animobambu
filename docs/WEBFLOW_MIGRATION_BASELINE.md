# QUIÉN ES BAMBÚ → Animo Bambu Migration Baseline

Date: 2026-09-10
Status: source-of-truth snapshot before implementation. This file does not authorize a domain cutover or deletion of the Webflow site.

## Outcome

Rebuild the existing `quien-es-bambu.design.webflow.com` experience in this owner-controlled repository, preserve its recognizable collage/torn-paper personality, replace template contamination with Bambu's real story/work or explicit plain-language placeholders, add the **Bitácora** publishing layer, and create a direct path to paid work.

## Source

- Webflow site ID: `6799ccd170a8bb46165fbc41`
- Current public source: `https://quien-es-bambu.design.webflow.com/`
- Keep Webflow available as rollback until production parity is verified.

### Pages inventoried

| Page | Webflow page ID | Migration intent |
|---|---|---|
| Home | `6799ccd270a8bb46165fc06d` | Preserve core hero/values and rebuild as the public front door |
| About | `6799ccd270a8bb46165fc08f` | Replace contaminated template biography with Bambu story/timeline |
| Work | `6799ccd270a8bb46165fc090` | Replace empty CMS with verified case studies/projects |
| Blog | `6799ccd270a8bb46165fc091` | Rename/reframe as **Bitácora** |
| Contact | `6799ccd270a8bb46165fc092` | Replace placeholder FAQ/form copy and connect to owner-controlled lead flow |

## Source copy to preserve or intentionally evolve

- `QUIÉN / ES / BAMBÚ?`
- `LOYALTY, HONOR, TRUTH, RESPECT`
- `ONE WITHOUT PURPOSE IS LOST — O.W.P.I.L.`
- `Hello I'm Bambu, a nomadic volunteer sworn to make the world look and work just a bit better than it was before me.`
- `OUR-DEAS`
- the collaborative idea: meaningful work is not done alone; remove the `I` from ideas and turn them into `OUR-DEAS`
- the long-horizon / next-seven-generations framing
- Work as a collage of disciplines rather than a narrow job title
- Bitácora as the place where approved thoughts, lessons, stories, observations, projects, people, places, and discoveries are kept

## Template contamination that must not survive migration

- `HELLO I'M ANTHONY`
- all lorem ipsum on About/Contact or anywhere else
- generic template service copy presented as biography or proof
- `No items found` CMS placeholders
- `example@comapny.com`
- stale template marketplace/buy-template UI
- any fake project, client, testimonial, metric, or completion state

### Placeholder copy rule

Never replace missing real content with invented biography, fake proof, generic marketing copy, or more filler. When verified content is not ready, use short, obvious Spanish-first placeholder text that states what belongs there.

Approved placeholder patterns:

- `[Historia de Bambú — pendiente]`
- `[Foto o recuerdo personal — pendiente]`
- `[Proyecto real — contenido pendiente]`
- `[Resultado o evidencia del proyecto — pendiente]`
- `[Persona / colaborador — pendiente de aprobación]`
- `[Entrada de Bitácora — pendiente]`
- `[Información de contacto — pendiente]`
- `[Llamado a la acción — pendiente]`

Placeholders must be visibly temporary, truthful, concise, and easy to search-and-replace later. They must never look like finished public copy.

## Visual system captured from Webflow

The existing site is not a generic SaaS theme. Preserve the **editorial collage / torn paper / oversized type / physical-object** quality while simplifying interaction and making the implementation mobile-first.

### Core type/layout behavior

- Body: black background, light text, `Newtitle` display family, line-height ~1.2.
- Paragraph/body copy: `Lato`, ~18px desktop / 16px tiny breakpoint.
- H1: ~130px desktop, 100px medium, 80px small, 60px tiny.
- Hero display type: ~300px desktop, 240px medium, 130px small, 73px tiny.
- H2: ~80px desktop, 60px medium, 40px tiny.
- Main container: max-width ~1230px; ~2.5em padding desktop; ~1em horizontal padding tiny.
- Navbar: sticky, ~70px high, black.
- Project grid: 2 columns desktop; collapses to a vertical stack on small screens.
- Blog grid: 3 columns desktop; becomes a vertical layout by medium breakpoint.
- Existing animation hooks include fade/blur/move/scale-on-scroll classes and hover-lift blog cards.

### Core palette observed

- Black: `#000000`
- Near-black section: `#171717`
- Light grey/paper: `#eceaea`
- Green accent: `#458f71`
- Blue accent: `#3f51d7`
- Red/pin accent: `#e7341e`
- White/paper: `#ffffff` / near-white
- A Webflow-managed yellow swatch is also used; preserve from source asset/token rather than guessing a replacement.

### Character-defining source assets inventoried

- Hero Background image
- Hero Decor 01–04
- Eye Emoji Left / Right
- Eye / World / Smile icons
- White Paper Cut Decor 01–03
- Project Rip Image 01–04
- Footer Paper Cut
- Blog Grid Rip / Blog Details Rip / Recent Blogs Rip
- Paper.png / Basket Emoji
- About Image 01–04
- Fun Memories background/rips
- Contact Rip Top / Bottom
- Blue/Green/Yellow rip assets
- later project/logo/media assets added in 2025

Do not move custom font files into public sharing artifacts. The implementation may use properly licensed web-delivery mechanisms or a suitable fallback while ownership/licensing is verified.

## Target public information architecture

- `/` — Quién es Bambú + strongest proof + current paid offer
- `/historia` — autobiography/timeline, image-led
- `/trabajo` — verified case studies/outcomes
- `/proyectos` — active and historical projects with truthful status/proof
- `/bitacora` — canonical long-form journal/essays/field notes
- `/personas` — only public-safe collaborators/influences
- `/ahora` — current focus
- `/archivo` — durable public legacy
- `/trabajemos` — entry point to the Vibe Audit → Rescue → Launch → Operations path

## Structured content model

Create typed/structured records for:

- Posts
- Projects
- CaseStudies
- People
- TimelineEvents
- Media/Galleries
- Quotes/Principles
- Offers/CallsToAction

Every project/case study needs a truthful status and evidence/provenance field. The website must not derive operational truth from optimistic copy.

## Private/public trust boundary

The public site is a **projection**, not the Second Brain.

```text
Google Drive / Gmail / Calendar / private archives
        ↓
Pi / Jeremy + Second Brain
        ↓
owner-approved public projection
        ↓
QUIÉN ES BAMBÚ / Bitácora / social channels
```

Never let browser code on the public site directly read:

- private Drive roots
- Gmail
- Calendar
- medical/private personal records
- raw Second Brain data
- Command Center private APIs
- agent/API/OAuth secrets

## Revenue-first content loop

Start with one real, source-backed story/case study and derive:

1. one Bitácora long-form post
2. one public project/case-study page
3. three to five short social posts
4. three to five vertical-video hooks/scripts
5. one optional direct CTA to the current revenue offer

Primary measurement at zero audience: qualified replies, conversations, proposals, and paid work. Ad-platform monetization is secondary until audience exists.

## First verifiable build slice

Do not build the entire life archive first.

`Webflow visual shell → Home → one real case study → one Bitácora post → /trabajemos CTA`

Acceptance for that slice:

- mobile + desktop render correctly
- no lorem ipsum anywhere
- no template placeholder contamination
- any not-yet-verified section uses only explicit temporary placeholder labels from this document
- one real case study has evidence/provenance
- one Bitácora post renders from structured content
- Trabajemos CTA reaches a verifiable owner-controlled destination
- no private data or credentials appear in browser payloads
- Webflow remains rollback until parity/owner approval

## Rollback

Before any production/domain promotion, record the current Webflow URL, DNS state, deployment commit, and rollback deployment. Do not remove the Webflow source until the replacement has passed mobile owner walk-through and production smoke checks.
