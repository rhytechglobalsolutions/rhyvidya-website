# RhyVidya — Next.js rebuild (branch: nextjs-rebuild)

This branch holds the Next.js (App Router) rebuild of rhyvidya.com, created
2026-10-23 as a **preview only**. Production still serves the static site from
`main`. Do not merge or promote without the owner's approval.

## Structure

- `/` — platform homepage (hero, subjects grid, teachers, how it works,
  classroom, free library, pricing, FAQ, booking form)
- `/subjects/hindi` — live subject page (Saraswathi, stages, class ladder,
  stage finder, formats, booking form set to Hindi)
- `/subjects/tamil` — coming soon + enquire form (Saraswathi)
- `/subjects/physics` — coming soon + enquire form (Mr Athi Siva Krishnan &
  Mrs Mallika)
- `/subjects/mathematics` — coming soon + enquire form (Mr Athi Siva Krishnan
  & Mrs Vijaya)
- `app/robots.ts` / `app/sitemap.ts` — serve /robots.txt and /sitemap.xml at
  the domain root.

## Known preview shortcuts (fix at cutover)

- Brand images (logo, favicon/OG) are referenced from the current production
  URLs under `https://www.rhyvidya.com/assets/…` because the GitHub snapshot
  push used for this branch carries UTF-8 text only. At cutover, copy the real
  binary assets into `public/` (logo header + theme WebP, favicon set,
  apple-touch-icon) and switch `app/data.ts` / layout icon URLs to local
  paths.
- Forms keep the current site's behaviour: submitting composes the request
  and offers "Send by email" (mailto to info@rhyvidya.com) or copy-details.
  A server-side mail endpoint (e.g. Zoho) can replace this later.
- The old static files (index.html, assets/, robots.txt, sitemap.xml) remain
  in the branch, inherited from `main`; remove them at cutover so only the
  Next.js app ships.
