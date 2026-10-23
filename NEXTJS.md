# RhyVidya — Next.js rebuild (branch: nextjs-rebuild → main)

This is the Next.js (App Router) rebuild of rhyvidya.com, created 2026-10-23.
Preview verified on the `nextjs-rebuild` branch; production cutover to `main`
approved by the owner on 2026-10-23.

## Structure

- `/` — platform homepage (hero, launch film, subjects grid, teachers teaser,
  how it works, classroom, free library, pricing, FAQ, booking form for any
  subject)
- `/teachers` — Meet our teachers (Saraswathi spotlight + teacher cards,
  booking CTAs)
- `/subjects/hindi` — live subject page (Saraswathi, stages, class ladder,
  stage finder, formats, booking form set to Hindi)
- `/subjects/tamil` — coming soon + enquire form (Saraswathi)
- `/subjects/physics` — coming soon + enquire form (Mr Athi Siva Krishnan &
  Mrs Mallika)
- `/subjects/mathematics` — coming soon + enquire form (Mr Athi Siva Krishnan
  & Mrs Vijaya)
- `app/robots.ts` / `app/sitemap.ts` — serve /robots.txt and /sitemap.xml at
  the domain root.

## Brand assets (self-contained)

- The GitHub snapshot push used for this repo carries UTF-8 text only, so the
  binary brand assets are stored as base64 text modules under `/assets-data`
  and served byte-identical by route handlers with long immutable caching:
  - `/assets/rhyvidya-logo-rhytech-theme.webp` (OG / JSON-LD logo, 1600×1600)
  - `/assets/rhyvidya-logo-header.webp` (header logo, 256×256)
  - `/favicon.ico`, `/favicon.png`, `/favicon-512.png`, `/apple-touch-icon.png`
- The artwork is the official logo, byte-identical to the previous static
  site's files. If real binary commits become available, move the files into
  `public/` and delete the route handlers + `/assets-data`.
- The homepage carries a "Watch the launch film" section embedding the
  official launch video (YouTube Short IKSEqG4nMA8) via youtube-nocookie.

## Known shortcuts

- Forms keep the previous site's behaviour: submitting composes the request
  and offers "Send by email" (mailto to info@rhyvidya.com) or copy-details.
  A server-side mail endpoint (e.g. Zoho) can replace this later.
- The old static files (index.html, assets/, robots.txt, sitemap.xml) remain
  in the repo, inherited from the static era; the Next.js routes take
  precedence and the static files are not served by the app.
