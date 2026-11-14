import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import BookingForm from "./components/BookingForm";
import JsonLd from "./components/JsonLd";

import { FAQS, PLANS, SITE, SUBJECTS } from "./data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: "RhyVidya — Knowledge is Power | Live Online Classes with Expert Teachers",

  description:
    "Learn live online with experienced teachers — Hindi, Physics, and Mathematics available now, with Tamil, Abacus, Coding, and English coming soon. Free assessment and first month free.",

  alternates: { canonical: SITE.url },

  openGraph: {
    title:
      "RhyVidya — Knowledge is Power | Live Online Classes with Expert Teachers",

    description:
      "Learn live online with experienced teachers — Hindi, Physics, and Mathematics available now, with Tamil, Abacus, Coding, and English coming soon. Free assessment and first month free.",

    url: SITE.url,
    type: "website",

    images: [
      {
        url: SITE.logo,
        width: 1600,
        height: 1600,
        alt: SITE.logoAlt,
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "RhyVidya",
      url: SITE.url,
      logo: SITE.logo,

      description:
        "RhyVidya is an online learning platform where experienced teachers teach students live online across many subjects — Hindi, Physics, and Mathematics available now, with Tamil, Abacus, Coding, and English coming soon — for students worldwide.",

      email: SITE.email,
      telephone: SITE.phoneDisplay,

      parentOrganization: {
        "@type": "Organization",
        name: SITE.parent.name,
        url: SITE.parent.url,
      },

      sameAs: (SITE.socials ?? []).map((social) => social.href),
    },

    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "RhyVidya",
      publisher: {
        "@id": `${SITE.url}/#organization`,
      },
    },

    {
      "@type": "Product",
      "@id": `${SITE.url}/#product`,

      name: "RhyVidya — Knowledge is Power | Live Online Classes with Expert Teachers",

      category: "Online learning platform",

      description:
        "Live online classes with experienced teachers across Hindi, Physics, and Mathematics — on Google Meet, Zoho Meeting, YouTube, or WhatsApp — 1-to-1 and group sessions by appointment, with a free assessment and the first month free at launch. Tamil, Abacus, Coding, and English classes are coming soon.",

      brand: {
        "@id": `${SITE.url}/#organization`,
      },
    },
  ],
};

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="h-4 w-4"
  >
    <path
      d="M4.5 15.5 15 5M6 5h9v9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="h-4 w-4"
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

const SectionEyebrow = ({
  children,
}: {
  children: ReactNode;
}) => (
  <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-indigo-700">
    <span className="h-px w-7 bg-indigo-500" />
    {children}
  </p>
);

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) => (
  <div className="max-w-2xl">
    <SectionEyebrow>{eyebrow}</SectionEyebrow>

    <h2
      className={`text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[3.35rem] ${
        light ? "text-white" : "text-slate-950"
      }`}
    >
      {title}
    </h2>

    {description && (
      <p
        className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <main className="overflow-hidden bg-[#fbfaf8] text-slate-900">

        {/* ================= HERO ================= */}

        <section className="relative isolate bg-[#0b1024] text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-40 -top-48 h-[36rem] w-[36rem] rounded-full bg-indigo-600/25 blur-[110px]" />

            <div className="absolute -bottom-64 left-[18%] h-[32rem] w-[32rem] rounded-full bg-violet-500/15 blur-[110px]" />
          </div>

          <div className="mx-auto grid min-h-[690px] max-w-[1440px] items-center gap-14 px-6 pb-20 pt-24 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:pb-28 lg:pt-28">

            <div className="relative z-10 max-w-3xl">

              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-100 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                Knowledge is Power

                <span className="h-3 w-px bg-white/20" />

                Live online learning
              </div>

              <h1 className="max-w-4xl text-[3.25rem] font-semibold leading-[0.99] tracking-[-0.065em] sm:text-6xl lg:text-[5.35rem]">
                A brighter way
                <br />
                to{" "}
                <span className=" font-normal italic text-indigo-300">
                  learn,
                </span>
                <br />
                wherever you are.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Learn live with experienced teachers who make every lesson
                personal. Build confidence in Hindi, Physics and Mathematics
                — with a free assessment and your first month on us.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-7 text-sm font-bold text-[#111831] shadow-[0_14px_40px_rgba(0,0,0,.22)] transition duration-300 hover:-translate-y-1 hover:bg-indigo-100"
                >
                  Book your free first month

                  <span className="grid h-8 w-8 place-items-center rounded-full bg-indigo-700 text-white transition group-hover:translate-x-1">
                    <ArrowUpRight />
                  </span>
                </Link>

                <Link
                  href="/subjects"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                >
                  Explore subjects <ArrowRight />
                </Link>
              </div>

              <p className="mt-8 text-xs leading-6 text-slate-400">
                Watch the film and discover more on{" "}
                <a
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-200 underline decoration-indigo-300/40 underline-offset-4 hover:text-white"
                >
                  Rhytech Global Solutions on YouTube
                </a>.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    1:1
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    Personal attention
                  </p>
                </div>

                <div className="h-9 w-px bg-white/15" />

                <div>
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    Live
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    Teacher-led classes
                  </p>
                </div>

                <div className="h-9 w-px bg-white/15" />

                <div>
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    Free
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    First-month offer
                  </p>
                </div>
              </div>
            </div>

            {/* Hero visual */}

            <div className="relative mx-auto w-full max-w-[530px] lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2.5rem] border border-white/10" />
              <div className="absolute -inset-10 rounded-[3rem] border border-white/[0.06]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#252d55] via-[#171f42] to-[#11172f] p-5 shadow-[0_35px_100px_rgba(0,0,0,.4)] sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-200">
                      The RhyVidya experience
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      A classroom without boundaries.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-emerald-200">
                    Live learning
                  </span>
                </div>

                <div className="relative mt-6 min-h-[300px] overflow-hidden rounded-2xl bg-[#e9e8f4] p-6 text-[#111831] sm:min-h-[350px] sm:p-8">
                  <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-indigo-200/80 blur-2xl" />
                  <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-violet-200/80 blur-2xl" />

                  <div className="relative flex items-start justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-indigo-700">
                        Learn with clarity
                      </p>

                      <p className="mt-3 max-w-[250px] text-3xl font-semibold leading-tight tracking-[-0.06em] sm:text-4xl">
                        Curiosity is the beginning of everything.
                      </p>
                    </div>

                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white/80 text-indigo-700 shadow-sm">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                      >
                        <path
                          d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M18.36 5.64 5.64 18.36"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="relative mt-10 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/80 bg-white/70 p-4 backdrop-blur">
                      <span className="text-2xl  text-indigo-700">
                        अ
                      </span>
                      <p className="mt-3 text-xs font-bold">Hindi</p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Language & expression
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/80 bg-white/70 p-4 backdrop-blur">
                      <span className="text-2xl  text-indigo-700">
                        F = ma
                      </span>
                      <p className="mt-3 text-xs font-bold">Physics</p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Understand the why
                      </p>
                    </div>

                    <div className="col-span-2 flex items-center justify-between rounded-xl bg-[#111831] p-4 text-white">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-indigo-200">
                          Your learning journey
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          One lesson at a time.
                        </p>
                      </div>

                      <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-500">
                        <ArrowUpRight />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-5">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Personal guidance. Real progress.
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      Designed around each learner.
                    </p>
                  </div>

                  <div className="flex -space-x-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#1a2143] bg-indigo-200 text-[10px] font-bold text-indigo-900">
                      H
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#1a2143] bg-amber-100 text-[10px] font-bold text-amber-900">
                      P
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#1a2143] bg-emerald-100 text-[10px] font-bold text-emerald-900">
                      M
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-white/70 bg-white px-5 py-4 text-[#111831] shadow-[0_18px_50px_rgba(0,0,0,.2)] sm:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-700">
                  A little more confidence
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Every class moves you forward.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent" />
        </section>

        {/* ================= TRUST STRIP ================= */}

        <section className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-7 px-6 py-9 sm:px-10 lg:grid-cols-4 lg:px-12">
            {[
              ["01", "Experienced teachers", "Live guidance, never just recordings"],
              ["02", "Flexible learning", "1-to-1 and group appointments"],
              ["03", "WhatsApp support", "Familiar reminders and quick help"],
              ["04", "First month free", "A free assessment to get started"],
            ].map(([number, title, copy]) => (
              <div key={number} className="flex gap-4">
                <span className="pt-1 text-[10px] font-bold tracking-widest text-indigo-600">
                  {number}
                </span>
                <div>
                  <p className="text-sm font-bold tracking-tight text-slate-900">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= LAUNCH FILM ================= */}

        <section id="launch-film" className="bg-[#f4f3f0] py-24 sm:py-28">
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[.82fr_1.18fr] lg:px-12">
            <div>
              <SectionEyebrow>
                The official launch film · RhyVidya is live
              </SectionEyebrow>

              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[3.7rem]">
                A new chapter in the way we learn.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                See the RhyVidya identity come to life. Discover a learning
                platform built around live teaching, thoughtful guidance and
                the belief that knowledge opens doors.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#111831] px-6 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-indigo-800"
                >
                  Start learning <ArrowUpRight />
                </Link>

                <Link
                  href={SITE.launchFilm.watch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-slate-300 px-6 text-xs font-bold text-slate-800 transition hover:border-slate-900 hover:bg-white"
                >
                  Watch on YouTube <ArrowUpRight />
                </Link>
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#10162d] p-2 shadow-[0_30px_80px_rgba(15,23,42,.18)] sm:p-3">
                <div className="overflow-hidden rounded-[1.2rem] bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={SITE.launchFilm.embed}
                    title={`RhyVidya launch film — ${SITE.launchFilm.title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.16em] text-slate-500">
                The RhyVidya launch film ·{" "}
                <a
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-700 hover:text-indigo-900"
                >
                  Explore our channel
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= SUBJECTS ================= */}

        <section id="subjects" className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Find your subject"
                title="A world of knowledge. One class at a time."
              />

              <p className="max-w-md pb-1 text-sm leading-7 text-slate-600">
                Explore subjects taught live by experienced teachers. Choose
                what inspires you today, or register your interest in what is
                coming next.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {SUBJECTS.map((subject, index) => (
                <article
                  key={subject.slug}
                  className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#fbfaf8] p-7 transition duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:bg-white hover:shadow-[0_24px_65px_rgba(30,41,59,.10)] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400">
                      0{index + 1}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] ${
                        subject.status === "live"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {subject.statusLabel}
                    </span>
                  </div>

                  <div className="mt-8 flex h-24 items-center">
                    <div
                      className={`flex h-[88px] w-[88px] items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-indigo-100 to-violet-100 text-2xl text-indigo-800 shadow-inner ${
                        subject.glyphClass ?? ""
                      }`}
                      lang={subject.glyphLang}
                    >
                      {subject.glyph}
                    </div>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      <Link
                        href={`/subjects/${subject.slug}`}
                        className="after:absolute after:inset-0"
                      >
                        {subject.name}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs font-semibold text-indigo-700">
                      With {subject.teachers}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {subject.ageBand}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {subject.blurb}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2 border-t border-slate-200 pt-5">
                    {subject.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between pt-7 text-xs font-bold text-slate-900">
                    <span>
                      {subject.status === "live"
                        ? `Explore ${subject.name} classes`
                        : `About ${subject.name}`}
                    </span>

                    <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition group-hover:border-indigo-700 group-hover:bg-indigo-700 group-hover:text-white">
                      <ArrowUpRight />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-[#f4f3f0] p-6 sm:flex-row sm:items-center sm:p-7">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-indigo-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <p className="text-sm leading-6 text-slate-600">
                <strong className="text-slate-900">
                  Experienced teachers only.
                </strong>{" "}
                Every subject is taught live by an experienced teacher. As new
                subjects open, their teachers join the platform before classes
                begin.
              </p>
            </div>
          </div>
        </section>

        {/* ================= LEARNING JOURNEY ================= */}

        <section id="how" className="bg-[#f4f3f0] py-24 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
            <SectionHeading
              eyebrow="How it works"
              title="A simple route from curious to confident."
              description="No complicated course maze. Choose your subject, find your stage and learn live with an experienced teacher — with a clear journey for students and families."
            />

            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              {[
                [
                  "01",
                  "Choose your subject",
                  "Choose from Hindi, Physics and Mathematics — available now — or register your interest in Tamil, Abacus, Coding and English. A free assessment helps place you at the right stage.",
                ],
                [
                  "02",
                  "Book and join easily",
                  "Select an available appointment, receive your online class link and join in one tap. Your appointment time is shown in your own timezone.",
                ],
                [
                  "03",
                  "Stay supported",
                  "Parents receive a short weekly progress update, while students get teacher-uploaded practice videos, student chat and WhatsApp reminders.",
                ],
              ].map(([number, title, copy]) => (
                <article
                  key={number}
                  className="group rounded-[1.5rem] border border-slate-200/80 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,.07)] sm:p-9"
                >
                  <span className=" text-5xl italic tracking-tight text-indigo-200 transition group-hover:text-indigo-600">
                    {number}
                  </span>

                  <div className="my-7 h-px w-full bg-slate-200" />

                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CLASSROOM ================= */}

        <section
          id="classroom"
          className="relative isolate overflow-hidden bg-[#0b1024] py-24 text-white sm:py-28"
        >
          <div className="absolute -right-40 top-0 -z-10 h-[35rem] w-[35rem] rounded-full bg-indigo-600/20 blur-[110px]" />

          <div className="mx-auto grid max-w-[1440px] gap-14 px-6 sm:px-10 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-12">
            <div>
              <SectionEyebrow>
                Thoughtfully connected learning
              </SectionEyebrow>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[3.65rem]">
                Your classroom can be wherever you are.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                RhyVidya classes are held online, so your teacher can teach on
                camera, share a screen or digital board, and speak with students
                in real time. Classes can run on Google Meet, Zoho Meeting,
                YouTube or WhatsApp — whichever platform suits you best.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  "Google Meet",
                  "Zoho Meeting",
                  "YouTube",
                  "WhatsApp",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-[10px] font-semibold tracking-wide text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Live lessons",
                  "Camera, microphone, chat, screen sharing and board support.",
                ],
                [
                  "02",
                  "Student communication",
                  "In-platform messages for learning questions and WhatsApp for reminders.",
                ],
                [
                  "03",
                  "Simple by design",
                  "Clear actions, plain language and timezone-aware appointments.",
                ],
                [
                  "04",
                  "Personal support",
                  "A familiar channel for quick questions and schedule updates.",
                ],
              ].map(([number, title, copy]) => (
                <article
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 transition hover:border-indigo-300/40 hover:bg-white/[0.09]"
                >
                  <p className="text-[10px] font-bold tracking-[0.2em] text-indigo-300">
                    {number}
                  </p>

                  <h3 className="mt-7 text-lg font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TEACHERS ================= */}

        <section id="teacher" className="bg-white py-24 sm:py-28">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
            <div>
              <SectionEyebrow>
                The people behind every lesson
              </SectionEyebrow>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
                Great learning begins with a great teacher.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Every RhyVidya class is taught live online by an experienced
                teacher — Saraswathi, Mr Athi Siva Krishnan and Mrs Vijaya.
                Never a recording alone, never an anonymous tutor pool.
              </p>
            </div>

            <Link
              href="/teachers"
              className="inline-flex min-h-13 shrink-0 items-center justify-center gap-4 rounded-full bg-[#111831] px-7 py-4 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-800"
            >
              Meet our teachers <ArrowUpRight />
            </Link>
          </div>
        </section>

        {/* ================= PRACTICE LIBRARY ================= */}

        <section id="library" className="bg-[#f4f3f0] py-24 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Learn beyond the lesson"
                title="A little practice. A lot of progress."
                description="Short videos from our teachers help students review every subject whenever it suits them."
              />

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-800">
                Free in Phase 1
              </span>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                [
                  "Aa",
                  "Languages · Foundations",
                  "Sounds, script, and first words",
                  "from-indigo-100 to-violet-200",
                  "text-indigo-800",
                ],
                [
                  "F = ma",
                  "Physics · Concepts",
                  "See how forces work, step by step",
                  "from-amber-100 to-orange-200",
                  "text-orange-900",
                ],
                [
                  "π",
                  "Mathematics · Practice",
                  "Work through problems with your teacher",
                  "from-emerald-100 to-teal-200",
                  "text-emerald-900",
                ],
              ].map(([symbol, category, title, gradient, color]) => (
                <article
                  key={title}
                  className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`relative grid h-52 place-items-center overflow-hidden bg-gradient-to-br ${gradient}`}
                  >
                    <div className="absolute h-40 w-40 rounded-full border border-white/60" />
                    <div className="absolute h-28 w-28 rounded-full border border-white/60" />

                    <span
                      className={`relative  text-6xl font-semibold tracking-tight ${color}`}
                    >
                      {symbol}
                    </span>
                  </div>

                  <div className="p-7">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-700">
                      {category}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                      {title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-xs leading-6 text-slate-600 sm:p-7">
              The video library is being prepared for launch; these cards show
              the planned learning format. Phase 1 videos will remain free to
              watch. Between classes, students keep learning with a short
              weekly worksheet set by their teacher, paired with free-library
              videos to review at home. Videos will be available on our{" "}
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-700 underline underline-offset-4 hover:text-indigo-900"
              >
                YouTube channel
              </a>.
            </div>
          </div>
        </section>

        {/* ================= PRICING ================= */}

        <section id="pricing" className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
            <SectionHeading
              eyebrow="A thoughtful start"
              title="Begin freely. Continue your way."
              description="Our launch model gives families time to experience live classes before choosing a paid subscription."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#111831] p-8 text-white sm:p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />

                <div className="relative">
                  <span className="inline-flex rounded-full border border-indigo-200/25 bg-indigo-200/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-200">
                    Launch offer
                  </span>

                  <p className="mt-12 text-sm font-medium text-slate-300">
                    A confident first step
                  </p>

                  <h3 className="mt-3 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
                    1 month{" "}
                    <span className=" italic text-indigo-300">
                      free.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
                    New students can experience RhyVidya for their first month
                    at no tuition cost. Afterward, continued learning moves to
                    a paid plan with a one-month fee deposit.
                  </p>

                  <a
                    href="/contact"
                    className="mt-9 inline-flex min-h-12 items-center gap-4 rounded-full bg-white px-6 text-xs font-bold text-[#111831] transition hover:bg-indigo-100"
                  >
                    Claim your free month <ArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-[#fbfaf8] p-7 sm:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700">
                  Learning plans
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {PLANS.map((plan) => (
                    <article
                      key={plan.name}
                      className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:shadow-lg"
                    >
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                        {plan.name}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-slate-600">
                        {plan.copy}
                      </p>

                      {plan.saving && (
                        <span className="mt-5 inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-800">
                          {plan.saving}
                        </span>
                      )}
                    </article>
                  ))}
                </div>

                <p className="mt-6 text-[11px] leading-6 text-slate-500">
                  Exact tuition, deposit terms and discount percentages will
                  be published before enrollment opens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section id="faq" className="bg-[#f4f3f0] py-24 sm:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-12">
            <div>
              <SectionEyebrow>Questions, answered</SectionEyebrow>

              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl">
                Good to know.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
                A few helpful details before you begin your learning journey
                with RhyVidya.
              </p>
            </div>

            <div className="divide-y divide-slate-300 border-y border-slate-300">
              {FAQS.map((faq, index) => (
                <details key={faq.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start gap-4">
                      <span className="pt-0.5 text-[9px] font-bold tracking-widest text-indigo-600">
                        0{index + 1}
                      </span>

                      {faq.q}
                    </span>

                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-300 text-slate-700 transition group-open:rotate-45 group-open:border-indigo-700 group-open:bg-indigo-700 group-open:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        className="h-4 w-4"
                        fill="none"
                      >
                        <path
                          d="M10 4v12M4 10h12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="ml-8 mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT & BOOKING ================= */}

        <section
          id="book"
          className="relative isolate overflow-hidden bg-[#0b1024] py-24 text-white sm:py-28"
        >
          <div className="absolute -left-48 top-20 -z-10 h-[35rem] w-[35rem] rounded-full bg-indigo-600/20 blur-[120px]" />

          <div className="mx-auto grid max-w-[1440px] gap-14 px-6 sm:px-10 lg:grid-cols-[.85fr_1.15fr] lg:px-12">
            <div>
              <SectionEyebrow>Book or enquire</SectionEyebrow>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[3.7rem]">
                Your next chapter starts here.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300">
                Tell us who is learning and what they would like to learn.
                Hindi, Physics and Mathematics are available now; register
                your interest in Tamil, Abacus, Coding and English. Choose a
                1-to-1 class or group session, on a weekday or weekend. Every
                class is by appointment.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                We reply from{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-white underline decoration-indigo-300 underline-offset-4"
                >
                  {SITE.email}
                </a>{" "}
                to confirm your time and online class details for your free
                first month.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  ["Email", SITE.email, `mailto:${SITE.email}`],
                  ["Phone", SITE.phoneDisplay, SITE.phoneHref],
                  ["WhatsApp", "Chat with our team", SITE.whatsappPlain],
                  ["YouTube", "Rhytech Global Solutions", SITE.youtube],
                ].map(([label, value, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      label === "Email" || label === "Phone"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      label === "Email" || label === "Phone"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="rounded-xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-indigo-300/40 hover:bg-white/[0.08]"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                      {label}
                    </p>

                    <p className="mt-2 break-words text-xs font-semibold text-white">
                      {value}
                    </p>
                  </a>
                ))}
              </div>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 text-xs font-bold text-emerald-300 transition hover:text-emerald-200"
              >
                Prefer to chat first? Message us on WhatsApp <ArrowUpRight />
              </a>
            </div>

            {/* Booking form */}

            <div
              id="bookingForm"
              className="scroll-mt-8 rounded-[1.75rem] bg-white p-5 text-slate-900 shadow-[0_30px_100px_rgba(0,0,0,.28)] sm:p-8 lg:p-9"
            >
              <div className="mb-7 flex items-start justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-700">
                    Take the first step
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    Book your free assessment.
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Share a few details and our team will be in touch.
                  </p>
                </div>

                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-indigo-50 text-indigo-700">
                  <ArrowUpRight />
                </span>
              </div>

              <BookingForm />
            </div>
          </div>
        </section>

        {/* ================= CLOSING CTA ================= */}

        <section className="bg-[#f4f3f0] px-6 py-6 sm:px-10 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-7 rounded-[1.5rem] bg-[#e9e7f4] px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-2xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-700">
                Knowledge is Power
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Make room for what you can become.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Send a booking request and we will confirm your stage, class
                time and online class link by email.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#111831] px-6 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-indigo-800"
              >
                Book your free month <ArrowUpRight />
              </a>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-slate-300 px-6 text-xs font-bold text-slate-800 transition hover:border-slate-900 hover:bg-white"
              >
                Chat on WhatsApp <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}