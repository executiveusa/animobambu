# Ánimo Bambu — ICM Context

## Mission

Build and maintain Bambu's personal Webflow site/publication as a truthful public projection of his life, work, projects, field notes, and selected knowledge.

## Current architecture

```text
real life / projects / voice notes
              ↓
     private context systems
              ↓
       Amentis knowledge
              ↓
    owner-approved content
              ↓
executiveusa/animobambu
  governance + contracts
              ↓
           Webflow
  design + CMS + publishing
              ↓
       public Ánimo Bambu
```

## Canonical identifiers

- Repository: `executiveusa/animobambu`
- Repository default branch: `main`
- Webflow site name: `QUIEN ES BAMBU?`
- Webflow short name: `quien-es-bambu`
- Webflow site ID: `6799ccd170a8bb46165fbc41`
- Webflow workspace ID: `6758686fb2aeae8890fbe13d`
- Current custom domains: none
- Existing source baseline: `docs/WEBFLOW_MIGRATION_BASELINE.md`

## Current product decision

The September migration baseline proposed rebuilding the public site outside Webflow.

That deployment assumption is superseded.

**Current decision:** Webflow remains the visual/CMS implementation surface. This repository is the owner-controlled ICM/control plane for the Webflow site.

The older baseline remains valuable for inventory, visual observations, contamination warnings, content truth rules, and rollback history.

## Identity

- **Ánimo Bambu** — site/publication
- **¿Quién es Bambu?** — core human/editorial entry
- **Bambu** — Spanish personal identity

## Workstream state

Active:
- Ánimo Bambu

Parked:
- KUPRI Media
- MACS Digital Media

Amentis:
- platform foundation synced separately in `executiveusa/amentislibrary`

## Webflow rules

- Inspect before change.
- Preserve existing material until classified.
- Remove template contamination deliberately, not through bulk deletion.
- Draft before publish.
- Spanish-first editorial design.
- Do not publish fake placeholder articles.
- CMS provenance should identify where publishable stories originated.
- No private Second Brain, mail, calendar, medical, credential, or raw agent data may leak into the public site.

## Approval gates

Bambu approval required before:

- publishing a redesigned homepage
- deleting substantial existing content
- changing custom domains/DNS
- changing the core public identity
- exposing new personal information
- irreversible CMS restructuring

## Next slice

Inspect the connected Webflow site's current pages, CMS, styles, assets, and draft state together with Bambu.

Do not redesign ahead of that review.
