# Navigation / Blog — staged edit

- Request: stack changes, add Blog navigation tab, make former Future → UNCRUMPLED destination the Blog.
- Webflow evidence: existing Blog page ID `6799ccd270a8bb46165fc091`, slug `/blog`, heading `UNCRUMPLED`; existing Navbar is shared component `a87e94ed-6d5e-671f-65c7-f4854381a52c` whose child menu links are not exposed by current Designer API inspection. **Webflow navigation not modified.**
- Code change: `app/page.tsx` now has a separate Blog link (`/blog`) and the journal CTA uses `/blog`. Added `app/blog/page.tsx` redirect to existing `/bitacora` route, so the coded site has a valid Blog destination without duplicating content. Existing Bitácora navigation remains.
- Hero decor pending asset approvals: Bronze `CREATOR OF THE YAPPYVERSE`; Yellow `WILLING HUMAN BEING`; Turquoise `NOMADIC VOLUNTEER`. Visual concepts only; do not claim SVG replacements are complete.
- Not done: Webflow shared Navbar Future label/link edit, screenshot comparison, build/preview deployment, production publish. Do not change DNS or merge.
- Next: verify draft PR preview build and browser route `/blog` → `/bitacora`; update Webflow shared navbar via Designer-supported operation after exposing link elements, retaining Future as a separate link only if an actual destination is defined. Obtain owner visual approval.
