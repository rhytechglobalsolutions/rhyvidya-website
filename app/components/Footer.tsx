
import Link from "next/link";
import { SITE } from "../data";

const footerLinks = {
  explore: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Our teachers", href: "/teachers" },
    { label: "All subjects", href: "/subjects" },
    { label: "Learning plans", href: "/plans" },
  ],
  subjects: [
    { label: "Hindi", href: "/subjects/hindi" },
    { label: "Tamil", href: "/subjects/tamil" },
    { label: "Physics", href: "/subjects/physics" },
    { label: "Mathematics", href: "/subjects/mathematics" },
    { label: "Abacus", href: "/subjects/abacus" },
    { label: "Coding", href: "/subjects/coding" },
    { label: "English", href: "/subjects/english" },
  ],
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 ${className}`}
    >
      <path
        d="M3.5 10h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (normalized === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
      </svg>
    );
  }

  if (normalized === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5C17.2 1.3 16.1 1.2 15 1.2c-3.2 0-5 1.9-5 5.4V9H7v4h3v8h4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (normalized === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M5 8.5V19M5 5.5v.1M10 19v-6c0-2 1.2-3.2 3-3.2s3 1.2 3 3.2v6M10 10v9M3 3h18v18H3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M18 6 6 18M7 6h11v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#11152e] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#6657c7]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[35rem] w-[35rem] rounded-full bg-[#8974db]/10 blur-[130px]" />

      {/* Top CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.23em] text-[#b8a9ff]">
              <span className="h-px w-7 bg-[#9b89ed]" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h2 className="text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.8rem]">
              Give learning a more
              <span className="block italic text-[#b8a9ff]">
                meaningful beginning.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
              Discover personalised live online learning with experienced
              teachers. Take the first step with RhyVidya.
            </p>
          </div>

          <Link
            href="/#book"
            className="group inline-flex min-h-14 w-fit shrink-0 items-center justify-center gap-5 rounded-full bg-[#9381ec] px-7 text-xs font-bold text-white shadow-[0_12px_35px_rgba(117,98,217,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a18ff4] hover:shadow-[0_16px_40px_rgba(117,98,217,0.3)]"
          >
            Book your free assessment
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_.75fr_.85fr_1.1fr] lg:gap-12 lg:px-16 lg:py-20">
        {/* Brand */}
        <div className="max-w-sm">
          <Link
            href="/"
            aria-label="RhyVidya home"
            className="inline-flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] p-2">
              <img
                src={SITE.logoHeader}
                alt={SITE.logoAlt}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <span className="font-serif text-[30px] font-semibold tracking-[-0.055em] text-white">
                RhyVidya<span className="text-[#a18ff4]">.</span>
              </span>
              <span className="mt-1 block text-[8px] font-semibold tracking-[0.22em] text-white/45">
                LEARN · CREATE · EMPOWER
              </span>
            </div>
          </Link>

          <p className="mt-7 text-sm leading-7 text-white/50">
            Knowledge is Power. We believe meaningful learning begins with
            the right guidance, personal attention and a passion for discovery.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60">
              Live online learning
            </span>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
            Explore
          </h3>

          <ul className="mt-7 space-y-4">
            {footerLinks.explore.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-[12px] text-white/55 transition-colors duration-200 hover:text-white"
                >
                  <span>{link.label}</span>
                  <ArrowIcon className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subjects */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
            Our subjects
          </h3>

          <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 lg:grid-cols-1">
            {footerLinks.subjects.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-[12px] text-white/55 transition-colors duration-200 hover:text-white"
                >
                  <span>{link.label}</span>
                  <ArrowIcon className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
            Let's connect
          </h3>

          <p className="mt-7 max-w-xs text-xs leading-6 text-white/45">
            Have a question about classes, subjects or enrolment? We would
            love to hear from you.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-start gap-3 text-xs text-white/70 transition hover:text-[#b8a9ff]"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#b8a9ff]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="break-all pt-2">{SITE.email}</span>
            </a>

            <a
              href={SITE.phoneHref}
              className="group flex items-start gap-3 text-xs text-white/70 transition hover:text-[#b8a9ff]"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#b8a9ff]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M7 3.5h10a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 17.5h4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="pt-2">{SITE.phoneDisplay}</span>
            </a>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#8fdbaf]/20 bg-[#8fdbaf]/[0.07] px-4 py-2.5 text-[10px] font-semibold text-[#a9e5c0] transition hover:border-[#8fdbaf]/50 hover:bg-[#8fdbaf]/[0.12]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#65d696]" />
              Chat with us on WhatsApp
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Social media strip */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
              Stay connected
            </p>
            <p className="mt-1 text-xs text-white/65">
              Follow the RhyVidya learning journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {SITE.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`RhyVidya on ${social.label}`}
                className="group flex h-10 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-4 text-[10px] font-semibold text-white/60 transition-all duration-300 hover:border-[#a99af6]/40 hover:bg-[#a99af6]/10 hover:text-white"
              >
                <SocialIcon label={social.label} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom legal and credit bar */}
      <div className="border-t border-white/[0.08] bg-black/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-7 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <p className="text-[10px] tracking-wide text-white/40">
            © {currentYear} RhyVidya. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] text-white/40">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-white/80"
            >
              Terms & Conditions
            </Link>
          </div>

          <a
            href={SITE.parent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[10px] text-white/40 transition hover:text-white/80"
          >
            A product of
            <span className="font-semibold text-white/65 transition group-hover:text-[#b8a9ff]">
              Rhytech Global Solutions
            </span>
            <ArrowIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
