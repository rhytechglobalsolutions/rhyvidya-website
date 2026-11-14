
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, SUBJECTS } from "../../data";

type Subject = (typeof SUBJECTS)[number];

type PageProps = {
  params: Promise<{ slug: string }>;
};

const themes: Record<
  string,
  {
    gradient: string;
    accent: string;
    soft: string;
    symbol: string;
    descriptor: string;
  }
> = {
  hindi: {
    gradient: "from-[#35244e] via-[#25203f] to-[#15152f]",
    accent: "#d5b2ff",
    soft: "#f2eaff",
    symbol: "अ",
    descriptor: "Language · Expression · Culture",
  },
  tamil: {
    gradient: "from-[#24514e] via-[#1d3d43] to-[#142d37]",
    accent: "#a5e5d3",
    soft: "#e8f6f0",
    symbol: "அ",
    descriptor: "Language · Expression · Culture",
  },
  physics: {
    gradient: "from-[#253f70] via-[#202c52] to-[#151a35]",
    accent: "#a9caff",
    soft: "#eaf1ff",
    symbol: "∑",
    descriptor: "Science · Discovery · Understanding",
  },
  mathematics: {
    gradient: "from-[#4b315f] via-[#302447] to-[#1b1935]",
    accent: "#dfb7ff",
    soft: "#f3eaff",
    symbol: "π",
    descriptor: "Numbers · Logic · Problem solving",
  },
  abacus: {
    gradient: "from-[#75502d] via-[#4c3829] to-[#29231f]",
    accent: "#f1d29c",
    soft: "#fbf0df",
    symbol: "＋",
    descriptor: "Numbers · Focus · Mental arithmetic",
  },
  coding: {
    gradient: "from-[#24505a] via-[#203c4b] to-[#152b3b]",
    accent: "#a0e4d7",
    soft: "#e6f5f1",
    symbol: "</>",
    descriptor: "Logic · Creativity · Technology",
  },
  english: {
    gradient: "from-[#67404f] via-[#412d42] to-[#211d35]",
    accent: "#f0bfd0",
    soft: "#f8eaf0",
    symbol: "Aa",
    descriptor: "Language · Communication · Confidence",
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="m4 10 4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#8270d7]">
      <span className="h-px w-7 bg-[#9584ed]" />
      {children}
    </div>
  );
}

function getTheme(slug: string) {
  return (
    themes[slug] ?? {
      gradient: "from-[#343451] to-[#191a32]",
      accent: "#b8a9ff",
      soft: "#f0edfb",
      symbol: "✳",
      descriptor: "Discover · Learn · Grow",
    }
  );
}

function getSubject(slug: string) {
  return SUBJECTS.find((subject) => subject.slug === slug);
}

export function generateStaticParams() {
  return SUBJECTS.map((subject) => ({
    slug: subject.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubject(slug);

  if (!subject) {
    return {
      title: "Subject Not Found | RhyVidya",
    };
  }

  const title = `${subject.name} Online Classes`;
  const description =
    `${subject.blurb} Learn live online with experienced teachers at RhyVidya.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/subjects/${subject.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/subjects/${subject.slug}`,
      siteName: SITE.name,
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.logo],
    },
  };
}

export default async function SubjectPage({ params }: PageProps) {
  const { slug } = await params;
  const subject = getSubject(slug);

  if (!subject) {
    notFound();
  }

  const theme = getTheme(subject.slug);
  const isLive = subject.status === "live";

  const otherSubjects = SUBJECTS.filter(
    (item) => item.slug !== subject.slug
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${subject.name} Online Classes`,
    description: subject.blurb,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    url: `${SITE.url}/subjects/${subject.slug}`,
    educationalLevel: subject.ageBand,
    inLanguage: ["English"],
  };

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#191a32]">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className={`relative isolate overflow-hidden bg-gradient-to-br ${theme.gradient} text-white`}
      >
        <div className="absolute -left-40 -top-40 -z-10 h-[35rem] w-[35rem] rounded-full bg-white/[0.06] blur-[110px]" />
        <div className="absolute -right-40 bottom-[-15rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[#a18ae9]/15 blur-[130px]" />

        <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-10 sm:px-10 sm:pb-28 lg:px-16 lg:pb-32">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-16 flex flex-wrap items-center gap-2 text-[10px] font-medium text-white/45"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/subjects"
              className="transition hover:text-white"
            >
              Subjects
            </Link>
            <span>/</span>
            <span className="text-white/85">{subject.name}</span>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <div className="max-w-3xl">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                  RHYVIDYA SUBJECT COLLECTION
                </span>

                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] ${
                    isLive
                      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
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

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {theme.descriptor}
              </p>

              <h1 className=" text-[3.8rem] font-medium leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
                {subject.name}
                <span
                  className="block italic"
                  style={{ color: theme.accent }}
                >
                  starts here.
                </span>
              </h1>

              <p className="mt-9 max-w-xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
                {subject.blurb}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {isLive ? (
                  <Link
                    href="/contact"
                    className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-7 text-xs font-bold text-[#211e42] transition duration-300 hover:-translate-y-1 hover:bg-[#eee9ff]"
                  >
                    Arrange your free assessment
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#211e42] text-white">
                      <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-white px-7 text-xs font-bold text-[#211e42] transition duration-300 hover:-translate-y-1 hover:bg-[#eee9ff]"
                  >
                    Register your interest
                    <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                  </Link>
                )}

                <Link
                  href="/subjects"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
                >
                  Explore all subjects
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-9 gap-y-5 border-t border-white/10 pt-7">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/40">
                    Learning stage
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {subject.ageBand}
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-white/15 sm:block" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/40">
                    Teaching format
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Live online
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-white/15 sm:block" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/40">
                    Guidance
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Experienced teachers
                  </p>
                </div>
              </div>
            </div>

            {/* Subject identity artwork */}
            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -inset-5 rounded-[2.5rem] border border-white/10" />
              <div className="absolute -inset-10 rounded-[3rem] border border-white/[0.05]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 shadow-[0_35px_100px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                    THE SUBJECT
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.18em] text-white/35">
                    RHYVIDYA
                  </span>
                </div>

                <div className="relative flex min-h-[270px] items-center justify-center">
                  <div className="absolute h-56 w-56 rounded-full border border-white/10" />
                  <div className="absolute h-44 w-44 rounded-full border border-white/10" />
                  <div
                    className="absolute h-32 w-32 rounded-full blur-3xl"
                    style={{ backgroundColor: theme.accent, opacity: 0.16 }}
                  />

                  <div
                    lang={subject.glyphLang}
                    className="relative flex h-44 w-44 items-center justify-center rounded-[2.8rem] border border-white/20 bg-white/[0.09]  text-[7rem] shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
                    style={{ color: theme.accent }}
                  >
                    {subject.glyph || theme.symbol}
                  </div>

                  <span className="absolute right-3 top-12 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.13em] text-white/65">
                    Discover
                  </span>

                  <span className="absolute bottom-9 left-1 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.13em] text-white/65">
                    Learn
                  </span>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Knowledge is Power
                  </p>
                  <p className="mt-2  text-2xl italic text-white">
                    Every lesson moves you forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <SectionLabel>THE LEARNING EXPERIENCE</SectionLabel>

            <h2 className=" text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl">
              Learning should feel
              <span className="block italic text-[#7765d5]">
                personal.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[#69697d]">
              At RhyVidya, every subject is approached with an understanding
              of the learner's current level. Our experienced teachers guide
              students through live online learning, with an emphasis on
              personal attention and meaningful progress.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Live online classes",
                "Experienced teachers",
                "Free assessment",
                "Personal guidance",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e8e4dc] bg-white px-4 py-2.5 text-[10px] font-semibold text-[#5f5c72]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING HIGHLIGHTS */}
      <section className="border-y border-[#e9e5df] bg-[#f3f0e9] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel>WHAT YOU CAN EXPLORE</SectionLabel>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl  text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              The details that make
              <span className="block italic text-[#7765d5]">
                the difference.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#777587]">
              Explore the learning highlights available for {subject.name}.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subject.points.map((point, index) => (
              <article
                key={point}
                className="group min-h-[190px] rounded-[1.5rem] border border-[#e5e0d8] bg-[#fbfaf7] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d1c8ed] hover:bg-white hover:shadow-[0_20px_50px_rgba(38,31,82,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <span className=" text-3xl text-[#a69ad9]">
                    0{index + 1}
                  </span>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: theme.soft,
                      color: "#7765d5",
                    }}
                  >
                    <CheckIcon />
                  </span>
                </div>

                <p className="mt-8 text-sm font-semibold leading-7 text-[#34334c]">
                  {point}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW LEARNING WORKS */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl">
            <SectionLabel>YOUR JOURNEY WITH RHYVIDYA</SectionLabel>
            <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              A clear path from
              <span className="block italic text-[#7765d5]">
                first step to progress.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#777587]">
              Getting started is straightforward. Your learning journey begins
              with understanding your level and finding the right next step.
            </p>
          </div>

          <div className="relative mt-16 grid gap-5 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Start with an assessment",
                description:
                  "Arrange a free assessment so your teacher can understand your current learning level.",
              },
              {
                number: "02",
                title: "Meet your teacher online",
                description:
                  "Book an available appointment, receive your class link and join your live online session.",
              },
              {
                number: "03",
                title: "Continue your learning",
                description:
                  "Stay connected through teacher guidance, practice resources and learning updates.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[1.6rem] border border-[#e9e5df] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,31,82,0.06)] sm:p-9"
              >
                <span className=" text-5xl italic text-[#b2a5e9]">
                  {step.number}
                </span>

                <h3 className="mt-9  text-2xl text-[#22213b]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#777587]">
                  {step.description}
                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#b8a9ff]/60 to-transparent" />
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-[10px] leading-6 text-[#92909e]">
            Appointment availability and class arrangements are confirmed
            during booking.
          </p>
        </div>
      </section>

      {/* TEACHER / AGE INFORMATION */}
      <section className="bg-[#f3f0e9] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-2">
          <div className="rounded-[1.7rem] border border-[#e4dfd7] bg-[#fbfaf7] p-8 sm:p-10">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8876d5]">
              YOUR TEACHER
            </span>

            <h2 className="mt-5  text-3xl tracking-[-0.035em] text-[#25243d]">
              Guidance that matters.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#777587]">
              Learn {subject.name} with experienced teachers who guide
              students through live online classes.
            </p>

            <div className="mt-8 border-t border-[#e9e5df] pt-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#aaa5b2]">
                Teacher information
              </p>
              <p className="mt-2 text-sm font-semibold text-[#393650]">
                {subject.teachers}
              </p>
            </div>

            <Link
              href="/teachers"
              className="group mt-7 inline-flex items-center gap-3 text-xs font-bold text-[#7765d5] hover:text-[#5140a9]"
            >
              Meet our teachers
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="rounded-[1.7rem] bg-[#191a36] p-8 text-white sm:p-10">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
              LEARNING STAGE
            </span>

            <h2 className="mt-5  text-3xl tracking-[-0.035em]">
              Begin at the right level.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              The learning experience starts by understanding the student's
              current stage rather than assuming everyone begins at the same
              point.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Suitable learners
              </p>
              <p className="mt-3  text-2xl text-white">
                {subject.ageBand}
              </p>
            </div>

            <p className="mt-6 text-xs leading-6 text-white/45">
              A free assessment helps identify an appropriate starting point.
            </p>
          </div>
        </div>
      </section>

      {/* OTHER SUBJECTS */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>KEEP EXPLORING</SectionLabel>
              <h2 className=" text-4xl tracking-[-0.045em] text-[#191a32] sm:text-5xl">
                There's more to discover.
              </h2>
            </div>

            <Link
              href="/subjects"
              className="group inline-flex items-center gap-3 text-xs font-bold text-[#7765d5] transition hover:text-[#5140a9]"
            >
              View all subjects
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {otherSubjects.map((item) => {
              const itemTheme = getTheme(item.slug);

              return (
                <Link
                  key={item.slug}
                  href={`/subjects/${item.slug}`}
                  className="group flex min-h-[145px] items-center gap-5 rounded-[1.4rem] border border-[#e9e5df] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d1c8ed] hover:shadow-[0_18px_45px_rgba(38,31,82,0.07)]"
                >
                  <span
                    lang={item.glyphLang}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl  text-3xl"
                    style={{
                      backgroundColor: itemTheme.soft,
                      color: "#7765d5",
                    }}
                  >
                    {item.glyph || itemTheme.symbol}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block  text-xl text-[#282640]">
                      {item.name}
                    </span>
                    <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.12em] text-[#9189a8]">
                      {item.statusLabel}
                    </span>
                  </span>

                  <ArrowIcon className="text-[#8978d5] transition-transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="relative isolate overflow-hidden bg-[#11152e] px-6 py-24 text-center text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="absolute -left-40 -top-40 -z-10 h-[35rem] w-[35rem] rounded-full bg-[#6657c7]/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-[-15rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#a18ae9]/15 blur-[120px]" />

        <div className="mx-auto max-w-3xl">
          <SectionLabel>YOUR NEXT STEP</SectionLabel>

          <h2 className=" text-4xl leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Make room for
            <span className="block italic text-[#b8a9ff]">
              something remarkable.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
            Discover a more personal way to learn {subject.name}. Begin with
            a free assessment and find the right learning stage with RhyVidya.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-8 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#a18ff4]"
            >
              {isLive ? "Arrange your free assessment" : "Register your interest"}
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/subjects"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-8 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
            >
              Explore more subjects
            </Link>
          </div>

          <p className="mt-8 text-[9px] font-medium uppercase tracking-[0.18em] text-white/30">
            RHYVIDYA · KNOWLEDGE IS POWER
          </p>
        </div>
      </section> */}
    </main>
  );
}
