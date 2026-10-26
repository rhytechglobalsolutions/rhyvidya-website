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
- `/subjects/physics` — LIVE + booking form (Mr Athi Siva Krishnan &
  Mrs Vijaya — Vijaya added to Physics by Sree on 2026-10-26) —
  updated 2026-10-26: teachers available, bookable; Mrs Mallika removed
  (available only from April 2027)
- `/subjects/mathematics` — LIVE + booking form (Mr Athi Siva Krishnan
  & Mrs Vijaya) — updated 2026-10-26: teachers available, bookable
- `/subjects/abacus` — coming soon + enquire form (teachers being hired,
  added 2026-10-26)
- `/subjects/coding` — coming soon + enquire form (teachers being hired,
  added 2026-10-26)
- Copy rule (2026-10-26): never highlight that teachers are based in India —
  promote live online classes with teachers available only.
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

## Booking / enquiry forms (server-side mail)

- All forms (homepage booking, Hindi booking, coming-soon enquiries) POST to
  `app/api/booking/route.ts`, which validates the submission server-side
  (required fields per form type, email format, length caps, hidden honeypot
  field) and emails it via SMTP (nodemailer) with Reply-To set to the
  visitor, so replies go straight back to them. Subject line:
  "RhyVidya booking/enquiry — <Subject> — <Name>".
- Mail settings come from environment variables ONLY — never from the repo:
  `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`
  (default info@rhyvidya.com), `MAIL_FROM` (default SMTP_USER). See
  `.env.example` for the list. Set them in Vercel → Settings → Environment
  Variables and redeploy.
- Until SMTP is configured the endpoint returns a graceful
  "mail not configured" JSON error (503, no stack traces) and the form shows
  its fallback: retry, WhatsApp, or email info@rhyvidya.com directly. No mail
  app opens on the visitor's device any more.

## Known shortcuts
- The old static files (index.html, assets/, robots.txt, sitemap.xml) remain
  in the repo, inherited from the static era; the Next.js routes take
  precedence and the static files are not served by the app.
