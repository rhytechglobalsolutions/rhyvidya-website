
import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SUBJECTS } from "../data";

export const metadata: Metadata = {
  title: "Explore Subjects | Live Online Classes",
  description:
    "Explore live online learning at RhyVidya. Discover Hindi, Physics and Mathematics classes available now, with Tamil, Abacus, Coding and English opening progressively.",
  alternates: {
    canonical: `${SITE.url}/subjects`,
  },
  openGraph: {
    title: "Explore Subjects | RhyVidya",
    description:
      "Discover a world of knowledge with live online classes and experienced teachers at RhyVidya.",
    url: `${SITE.url}/subjects`,
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

type Subject = (typeof SUBJECTS)[number];

const subjectStyles: Record<
  string,
  {
    background: string;
    accent: string;
    light: string;
    symbol: string;
    description: string;
  }
> = {
  hindi: {
    background: "from-[#32234d] to-[#17152f]",
    accent: "#d5a5ff",
    light: "#f2e9ff",
    symbol: "अ",
    description: "Discover the beauty of language and expression.",
  },
  tamil: {
    background: "from-[#264b50] to-[#152d38]",
    accent: "#9ce0cf",
    light: "#e6f5ef",
    symbol: "அ",
    description: "Explore language, culture and communication.",
  },
  physics: {
    background: "from-[#233d68] to-[#151d3c]",
    accent: "#a7c7ff",
    light: "#e9f0ff",
    symbol: "∑",
    description: "Understand the principles behind our universe.",
  },
  mathematics: {
    background: "from-[#4a315b] to-[#211c3c]",
    accent: "#e0b5ff",
    light: "#f3eaff",
    symbol: "π",
    description: "Build confidence through mathematical thinking.",
  },
  abacus: {
    background: "from-[#70502d] to-[#33271f]",
    accent: "#f4d49b",
    light: "#fbf0dc",
    symbol: "＋",
    description: "Develop numerical skills through structured practice.",
  },
  coding: {
    background: "from-[#234c53] to-[#172c3c]",
    accent: "#9ee3d6",
    light: "#e5f5f1",
    symbol: "</>",
    description: "Explore the foundations of programming and logic.",
  },
  english: {
    background: "from-[#59404c] to-[#282035]",
    accent: "#f1c0cf",
    light: "#f8eaf0",
    symbol: "Aa",
    description: "Build language skills and confident communication.",
  },
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

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
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
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#8270d7]">
      <span className="h-px w-7 bg-[#9584ed]" />
      {children}
    </div>
  );
}

function SubjectCard({
  subject,
  index,
}: {
  subject: Subject;
  index: number;
}) {
  const style = subjectStyles[subject.slug] ?? {
    background: "from-[#343451] to-[#191a32]",
    accent: "#b8a9ff",
    light: "#f0edfb",
    symbol: subject.glyph,
    description: "Discover a new way to learn with RhyVidya.",
  };

  const isLive = subject.status === "live";

  return (
    <article className="group flex min-h-[490px] flex-col overflow-hidden rounded-[1.7rem] border border-[#e9e6df] bg-white shadow-[0_8px_35px_rgba(30,28,55,0.025)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4cbf2] hover:shadow-[0_28px_70px_rgba(38,31,82,0.11)]">
      {/* Subject visual */}
      <div
        className={`relative isolate min-h-[205px] overflow-hidden bg-gradient-to-br ${style.background} p-7 sm:p-8`}
      >
        <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-16 -z-10 h-48 w-48 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 left-10 -z-10 h-48 w-48 rounded-full bg-white/[0.045] blur-2xl" />

        <div className="flex items-start justify-between gap-3">
          <span className="text-[9px] font-bold tracking-[0.2em] text-white/45">
            SUBJECT 0{index + 1}
          </span>

          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.13em] ${
              isLive
                ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200"
                : "border-white/15 bg-white/[0.07] text-white/75"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isLive ? "bg-emerald-300" : "bg-white/50"
              }`}
            />
            {subject.statusLabel}
          </span>
        </div>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
              RhyVidya learning
            </p>
            <h2 className="mt-2  text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
              {subject.name}
            </h2>
          </div>

          <div
            lang={subject.glyphLang}
            className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[1.4rem] border border-white/15 bg-white/[0.08]  text-4xl text-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] backdrop-blur"
            style={{ color: style.accent }}
          >
            {subject.glyph || style.symbol}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
          style={{ backgroundColor: style.accent }}
        />
      </div>

      {/* Subject information */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-sm leading-7 text-[#69697d]">
          {subject.blurb}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-y border-[#efedf2] py-5">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a19caf]">
              Teacher
            </span>
            <span className="text-right text-[11px] font-semibold text-[#39384f]">
              {subject.teachers}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a19caf]">
              Suitable for
            </span>
            <span className="text-right text-[11px] font-semibold text-[#39384f]">
              {subject.ageBand}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.17em] text-[#a19caf]">
            Learning highlights
          </p>

          <ul className="space-y-3">
            {subject.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: style.light, color: "#7765d5" }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                    <path
                      d="m3.5 8.2 2.8 2.7 6.2-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[11px] leading-5 text-[#777587]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8">
          <Link
            href={`/subjects/${subject.slug}`}
            className="group/link flex min-h-12 items-center justify-between rounded-xl border border-[#e9e6ef] px-4 text-[11px] font-bold text-[#393650] transition-all duration-300 hover:border-[#7765d5] hover:bg-[#f5f2ff] hover:text-[#7765d5]"
          >
            <span>
              {isLive
                ? `Explore ${subject.name} classes`
                : `Discover ${subject.name}`}
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1eef9] text-[#7765d5] transition-transform group-hover/link:translate-x-1">
              <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function SubjectsPage() {
  const liveSubjects = SUBJECTS.filter(
    (subject) => subject.status === "live"
  );

  const upcomingSubjects = SUBJECTS.filter(
    (subject) => subject.status !== "live"
  );

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#191a32]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#11152e] text-white">
        <div className="absolute -left-40 top-[-10rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#6657c7]/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-[-14rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[#a18ae9]/15 blur-[130px]" />

        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 pt-20 sm:px-10 sm:pb-28 sm:pt-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-16 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a99af6] shadow-[0_0_12px_#a99af6]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                Explore the world of RhyVidya
              </span>
            </div>

            <h1 className=" text-[3.4rem] font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Knowledge has
              <br />
              many languages.
              <span className="mt-2 block italic text-[#b8a9ff]">
                Find yours.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
              From languages to mathematics and science, discover live online
              learning experiences guided by experienced teachers. Choose a
              subject that inspires you and begin at your level.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-7 text-xs font-bold text-white shadow-[0_12px_35px_rgba(117,98,217,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#a18ff4]"
              >
                Find your learning path
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                How learning works
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div>
                <p className=" text-3xl text-white">
                  {SUBJECTS.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Subjects
                </p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className=" text-3xl text-white">
                  {liveSubjects.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Available now
                </p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className=" text-3xl text-white">Live</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Online teaching
                </p>
              </div>
            </div>
          </div>

          {/* Hero subject composition */}
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[0.08]" />
            <div className="absolute -inset-10 rounded-[3rem] border border-white/[0.04]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#202442]/90 p-7 shadow-[0_35px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
                    A world of discovery
                  </p>
                  <h2 className="mt-2  text-2xl text-white">
                    Learn what moves you.
                  </h2>
                </div>
                <span className="text-3xl text-[#b8a9ff]">✳</span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {SUBJECTS.map((subject) => {
                  const style = subjectStyles[subject.slug];
                  const isLive = subject.status === "live";

                  return (
                    <Link
                      key={subject.slug}
                      href={`/subjects/${subject.slug}`}
                      className="group/tile relative flex min-h-[112px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:border-white/25 hover:bg-white/[0.09]"
                    >
                      <span
                        className=" text-3xl"
                        style={{
                          color: style?.accent ?? "#b8a9ff",
                        }}
                      >
                        {subject.glyph || style?.symbol}
                      </span>
                      <div className="flex items-end justify-between gap-2">
                        <span className="text-[11px] font-semibold text-white">
                          {subject.name}
                        </span>
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            isLive ? "bg-emerald-300" : "bg-white/35"
                          }`}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-[#a99af6]/20 bg-[#a99af6]/[0.08] p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#b8a9ff]">
                  Learning, your way
                </p>
                <p className="mt-2  text-xl text-white">
                  One subject. A world of possibilities.
                </p>
                <p className="mt-2 text-[11px] leading-6 text-white/50">
                  Start with a free assessment and discover the right learning
                  stage.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#b8a9ff]/50 to-transparent" />
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-[#eae7e0] bg-[#f5f3ee]">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-6 py-9 sm:px-10 md:grid-cols-3 lg:px-16">
          {[
            ["Choose with confidence", "Explore subjects and their learning stages."],
            ["Start at your level", "Every booking begins with a free assessment."],
            ["Learn with guidance", "Live online classes with experienced teachers."],
          ].map(([title, description], index) => (
            <div
              key={title}
              className={`flex gap-4 ${
                index !== 0 ? "md:border-l md:border-[#dedbd3] md:pl-8" : ""
              }`}
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#8876dc]" />
              <div>
                <p className="text-sm font-semibold text-[#22223b]">{title}</p>
                <p className="mt-1 text-xs leading-6 text-[#777587]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AVAILABLE SUBJECTS */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionLabel>START LEARNING</SectionLabel>
              <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#191a32] sm:text-5xl lg:text-6xl">
                Open the door
                <span className="block italic text-[#7765d5]">
                  to new knowledge.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#777587]">
              Explore the subjects currently available on RhyVidya. Each
              learning experience is guided by an experienced teacher and
              begins with understanding the student's level.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#777587]">
              Available now
            </span>
            <span className="rounded-full bg-[#ece9f7] px-3 py-1 text-[9px] font-bold text-[#7765d5]">
              {liveSubjects.length} subjects
            </span>
          </div>

          {liveSubjects.length > 0 ? (
            <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {liveSubjects.map((subject) => (
                <SubjectCard
                  key={subject.slug}
                  subject={subject}
                  index={SUBJECTS.indexOf(subject)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-7 text-sm text-[#777587]">
              New subjects will be announced here.
            </p>
          )}
        </div>
      </section>

      {/* UPCOMING SUBJECTS */}
      {upcomingSubjects.length > 0 && (
        <section className="border-y border-[#e9e5df] bg-[#f3f0e9] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <SectionLabel>COMING INTO FOCUS</SectionLabel>
                <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#191a32] sm:text-5xl">
                  More to explore.
                  <span className="block italic text-[#7765d5]">
                    More to discover.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#777587]">
                Our learning catalogue is growing. Explore the upcoming
                subjects and register your interest to stay connected.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {upcomingSubjects.map((subject) => {
                const style = subjectStyles[subject.slug] ?? {
                  accent: "#b8a9ff",
                  light: "#f0edfb",
                  symbol: subject.glyph,
                };

                return (
                  <Link
                    key={subject.slug}
                    href={`/subjects/${subject.slug}`}
                    className="group flex min-h-[185px] items-center gap-6 rounded-[1.5rem] border border-[#e3dfd7] bg-[#fbfaf7] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d0c7ef] hover:bg-white hover:shadow-[0_20px_50px_rgba(38,31,82,0.07)] sm:p-7"
                  >
                    <div
                      className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[1.3rem]  text-4xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: style.light,
                        color: "#7765d5",
                      }}
                    >
                      {subject.glyph || style.symbol}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#9487d0]">
                        {subject.statusLabel}
                      </span>
                      <h3 className="mt-2  text-2xl text-[#25243d]">
                        {subject.name}
                      </h3>
                      <p className="mt-2 text-[11px] leading-5 text-[#777587]">
                        {subject.blurb}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-[#7765d5]">
                        Discover subject
                        <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* LEARNING PHILOSOPHY */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>THE RHYVIDYA APPROACH</SectionLabel>
            <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#191a32] sm:text-5xl lg:text-[3.7rem]">
              Not just another
              <span className="block italic text-[#7765d5]">
                online class.
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-8 text-[#777587] sm:text-base">
              We believe a student's learning journey should begin with
              understanding, continue with meaningful teacher interaction and
              stay connected beyond the classroom.
            </p>

            <Link
              href="/how-it-works"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold text-[#7765d5] transition hover:text-[#5140a9]"
            >
              Discover how it works
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#171a36] p-8 text-white shadow-[0_25px_70px_rgba(29,26,64,0.13)] sm:p-11">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <p className="relative text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
              A more personal way to learn
            </p>

            <div className="relative mt-9 space-y-8">
              {[
                ["01", "Understand the learner", "Begin with a free assessment."],
                ["02", "Learn with a teacher", "Join live online learning sessions."],
                ["03", "Keep moving forward", "Stay connected with updates and practice."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-5">
                  <span className=" text-3xl italic text-[#a99af6]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-white/50">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-10 border-t border-white/10 pt-7">
              <p className=" text-xl italic text-[#c4b8ff]">
                Knowledge is Power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#11152e] px-6 py-24 text-center text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="absolute -left-32 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#6657c7]/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-[-14rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#a18ae9]/15 blur-[120px]" />

        <div className="mx-auto max-w-3xl">
          <SectionLabel>YOUR LEARNING JOURNEY</SectionLabel>
          <h2 className=" text-4xl leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            The right subject
            <span className="block italic text-[#b8a9ff]">
              can open a new world.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
            Tell us what you would like to learn. Start with a free assessment
            and discover the right learning stage with RhyVidya.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-8 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#a18ff4]"
            >
              Book a free assessment
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-8 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
            >
              Learn how it works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
