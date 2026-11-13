# Navigation correction — 2026-11-13

Owner clarified the exact order: **Past | Present | Future | Blog | Contact Me**. Previous proposed Historia/Trabajo/Blog/Bitácora/Contacto order was incorrect.

| Nav | Previous staged code | Current staged code | Destination |
|---|---|---|---|
| Past | Historia | Past | `/#historia` (existing history section) |
| Present | Trabajo | Present | `/#trabajo` (temporary existing work section) |
| Future | No dedicated tab | Future | `/future` (new honest holding page) |
| Blog | Blog + duplicate Bitácora tab | Blog | `/blog` redirects to existing `/bitacora` journal; Webflow original `/blog` is UNCRUMPLED |
| Contact Me | Contacto | Contact Me | `/#contacto`, far right |

Changed `app/page.tsx`, `app/bitacora/page.tsx`, and added `app/future/page.tsx`. Original hero, logo, typography, imagery and Webflow site unchanged. No preview build or runtime verification yet. The Webflow shared Navbar is not updated; do not imply these edits appear on the published Webflow URL. Pending: proper standalone Present and Future content, independent QA, preview, approval before merge/publish.

Hero badge backlog: bronze CREATOR OF THE YAPPYVERSE, yellow WILLING HUMAN BEING, turquoise NOMADIC VOLUNTEER. Only concepts, not production-ready SVGs.
