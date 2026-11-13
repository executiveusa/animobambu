# QUIÉN ES BAMBÚ — shared-chat consolidation and Bitácora handoff
Date: 2026-11-12
Source: https://chatgpt.com/share/6af66d67-eb50-83e8-8223-820a6bd75939
Status: extracted via Firecrawl; source-derived decisions plus current-repo verification. Not a publication approval.

## Source decisions recovered
- Bambu's site is a living record of experiences, projects, people, ideas, observations, successes and failures; **not** an SEO content farm or conventional SaaS portfolio.
- Editorial inputs should eventually include voice notes, conversations, field work, real project records, photographs and verified Amentis knowledge.
- Instinct/StarNet is intended as the editorial/operator layer: derive a draft, retrieve only relevant context, preserve sources, send it to review, then produce public output after Bambu's approval.
- Amentis is an independent governed knowledge library (source → knowledge → skill → application), not a dump of private library files into a public site.
- Caelo was selected as a free/open-source AI-first CMS and has an existing private deployment-wrapper repository `executiveusa/animo-bambu-caelo`. Existing docs describe `Cuaderno`, `Construyendo`, `Ahora`, `Biblioteca`, provenance, snapshots and MCP permissions.
- The shared chat explicitly deferred choosing real blog topics until reviewing Bambu's actual voice notes and Second Brain sources. No invented articles, project outcomes or client claims.
- The older shared-chat branding used Ánimo Bambu for the umbrella and Cuaderno for the journal. Later project decisions in this conversation lock public site name **QUIÉN ES BAMBÚ** and blog name **Bitácora**. Keep the legacy Caelo collection key `Cuaderno` as an internal adapter only if necessary; public route `/bitacora`. A domain/umbrella rename to Ánimo Bambu is a separate, unapproved decision.
- The shared chat reported a Netlify deployment at https://animobambu.netlify.app and earlier Webflow design edits. A fresh Firecrawl HTTP request on 2026-11-12 returned **404** at Netlify root; do not state it is operational. Webflow remains the retained visual reference and rollback.

## Verified repository inventory (2026-11-12)
- `executiveusa/animobambu` main contains ICM governance documents, but **no frontend app**. The draft branch `feat/webflow-migration-slice-2026-09-10` contains a Next.js Home reconstruction and is in draft PR #2, not merged or visually verified.
- `executiveusa/animo-bambu-caelo` is private, main branch, contains `docs/EDITORIAL_MODEL.md`, `docs/MCP_CONTRACT.md`, `caelo.version`, scripts and package manifest. This is an integration wrapper, **not proof that a running Caelo backend exists**.
- `executiveusa/amentislibrary` is a private ICM knowledge repository with distinct source, knowledge, book-to-skill, agent bridge and index areas. Do not import its copyrighted or private sources into this public repository.
- Upstream Caelo describes pre-1.0 software. The wrapper pins 0.10.26; verify actual upstream/current version, compatibility and security before deployment, do not automatically upgrade.

## Locked public product contract
- Spanish-first Mexican Spanish, English later; public site **QUIÉN ES BAMBÚ**, site owner name **Bambu**, journal **Bitácora**.
- Preserve the exact recognizable Webflow hero, font, paper/collage visual assets and responsive feel; do not redesign without approval.
- Top-level: Inicio; Historia; Proyectos/Trabajo; Bitácora; Ahora; Biblioteca (later); Contacto. Avoid cluttering navigation.
- Bitácora must have a clean public empty state until **approved, real** entries exist. Drafts stay private and never enter a public build.
- Record types: `bitacora_post`, `project`, `now_update`, `public_knowledge`. Posts need title, slug, Spanish summary/body, source kind/reference/date, related project IDs, authoring actor, fact-check status, editorial state, approval and publication timestamps. Never expose raw private source references or personal secrets on public output.
- Public state machine: idea → draft → review → approved → published → archived. Agents can submit drafts/reviews; only explicit owner approval can authorize release.
- Human visitors experience designed stories and projects; machines may later access approved JSON/RSS/structured metadata. No direct browser access to private Drive, mail, calendars, Amentis sources, private agent endpoints or Caelo credentials.

## Architecture boundaries
```text
private voice / projects / approved notes
      → Instinct (future editorial operator)
      → optional Amentis retrieval (governed; source provenance)
      → Caelo draft + review + owner approval (future verified runtime)
      → PUBLIC CONTENT PROJECTION (only approved, redacted records)
      → animobambu Next.js frontend
      → chosen verified hosting (Netlify reported but currently 404; Vercel not yet configured)
```

## Delivery sequence, one slice at a time
1. Keep Webflow unchanged. Establish the actual deployment source/branch; resolve Netlify 404 or choose a new staging target without changing DNS.
2. Render a functional `/bitacora` index with **no fabricated posts**, consistent design, and a typed content contract. Verify build, links and mobile behavior.
3. Deploy preview and compare Home and Bitácora visually against the Webflow style. Review P1 discrepancies and obtain independent code/design review.
4. Inspect the Caelo deployment wrapper, version, required resources and token scopes. Provision only after a bounded security/rollback plan and owner-controlled infrastructure are ready.
5. Prove one end-to-end editorial story: one real source → a provenance-backed private draft → human review/approval → redacted published record → visible Bitácora page → rollback test.
6. Only after verified repeatability connect Instinct / WhatsApp/voice and other project/knowledge entities.

## Definition of done for current slice
- `/bitacora` loads with an honest empty state, Spanish copy, accessible navigation and original design tokens.
- No mock posts, fabricated proof, disabled controls presented as functional, private URLs or credentials.
- Build and typecheck pass; preview exists and its URL is verified; independent review plus owner visual approval before merge/publish.
- Webflow remains available as rollback. No DNS changes.

## Outstanding questions (do not guess)
- Which Netlify site is actually connected to which repo/branch, and why root 404?
- Is Caelo running anywhere, with authenticated MCP access and backups? Not established.
- Which source notes may become the first real public post? Requires owner selection/approval.
- Whether Ánimo Bambu becomes the umbrella brand/domain later; most recent public site directive remains QUIÉN ES BAMBÚ.

## Immediate implementation reference
- Draft PR: https://github.com/executiveusa/animobambu/pull/2
- Caelo wrapper: https://github.com/executiveusa/animo-bambu-caelo (private)
- Knowledge library: https://github.com/executiveusa/amentislibrary (private)
- Webflow reference: https://quien-es-bambu.design.webflow.com/
