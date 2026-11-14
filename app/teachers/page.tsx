
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: "Meet Our Teachers | Experienced Online Educators",
  description:
    "Meet the teachers behind RhyVidya. Learn Hindi with Saraswathi, and Physics and Mathematics with Mr Athi Siva Krishnan and Mrs Vijaya through live online classes.",
  alternates: {
    canonical: `${SITE.url}/teachers`,
  },
  openGraph: {
    title: "Meet Our Teachers | RhyVidya",
    description:
      "Great learning begins with a great teacher. Meet the educators behind RhyVidya's live online classes.",
    url: `${SITE.url}/teachers`,
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
    title: "Meet Our Teachers | RhyVidya",
    description:
      "Meet the educators behind RhyVidya's live online classes.",
    images: [SITE.logo],
  },
};

const teachers = [
  {
    id: "01",
    name: "Saraswathi",
    title: "Hindi Educator",
    initial: "स",
    language: "hi",
    experience: "25+ years",
    experienceLabel: "Teaching experience",
    subjects: ["Hindi", "Tamil"],
    description:
      "Saraswathi brings over 25 years of teaching experience to RhyVidya. Her Hindi teaching journey supports learners from their first words at Parichaya through to degree-level proficiency at Praveen.",
    quote: "Every new word is a step towards confident expression.",
    featured: true,
    available: true,
    theme: "from-[#49305e] via-[#302343] to-[#19172f]",
    accent: "#dfbdff",
    soft: "#f2eaff",
  },
  {
    id: "02",
    name: "Mr Athi Siva Krishnan",
    title: "Physics & Mathematics Educator",
    initial: "∑",
    language: "en",
    experience: null,
    experienceLabel: "Subject educator",
    subjects: ["Physics", "Mathematics"],
    description:
      "Mr Athi Siva Krishnan teaches Physics and Mathematics at RhyVidya. His teaching approach works through concepts and problems step by step, helping students build understanding alongside confidence.",
    quote: "Understanding the concept is as important as finding the answer.",
    featured: false,
    available: true,
    theme: "from-[#294b70] via-[#203653] to-[#151c35]",
    accent: "#b1d2ff",
    soft: "#eaf2ff",
  },
  {
    id: "03",
    name: "Mrs Vijaya",
    title: "Physics & Mathematics Educator",
    initial: "π",
    language: "en",
    experience: null,
    experienceLabel: "Subject educator",
    subjects: ["Physics", "Mathematics"],
    description:
      "Mrs Vijaya teaches Physics and Mathematics at RhyVidya, helping students work through concepts and problems with clear, patient, step-by-step explanations.",
    quote: "A little clarity can make a big difference in learning.",
    featured: false,
    available: true,
    theme: "from-[#31504e] via-[#203c3e] to-[#172b34]",
    accent: "#a9e4d4",
    soft: "#e8f6f0",
  },
];

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

function ArrowUpRight() {
  return (
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
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#8270d7]">
      <span className="h-px w-7 bg-[#9584ed]" />
      {children}
    </div>
  );
}

function TeacherPortrait({
  teacher,
}: {
  teacher: (typeof teachers)[number];
}) {
  return (
    <div
      className={`relative isolate flex min-h-[310px] items-center justify-center overflow-hidden rounded-t-[1.7rem] bg-gradient-to-br ${teacher.theme}`}
    >
      <div className="absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute -right-7 -top-11 -z-10 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute -bottom-20 -left-10 -z-10 h-52 w-52 rounded-full bg-white/[0.05] blur-2xl" />

      <div className="absolute left-7 top-7 text-[9px] font-bold tracking-[0.2em] text-white/40">
        EDUCATOR · {teacher.id}
      </div>

      <div className="absolute right-7 top-7 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-white/65">
        {teacher.available ? "Teaching at RhyVidya" : "Coming soon"}
      </div>

      <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm">
        <div className="absolute inset-3 rounded-full border border-white/10" />
        <span
          lang={teacher.language}
          className=" text-[6rem] leading-none"
          style={{ color: teacher.accent }}
        >
          {teacher.initial}
        </span>
      </div>

      <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
          RHYVIDYA · KNOWLEDGE IS POWER
        </span>
        <span className="text-xl text-white/50">✳</span>
      </div>
    </div>
  );
}

function TeacherCard({
  teacher,
}: {
  teacher: (typeof teachers)[number];
}) {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-[#e8e4dc] bg-white shadow-[0_8px_35px_rgba(30,28,55,0.025)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d5ccef] hover:shadow-[0_28px_70px_rgba(38,31,82,0.1)]">
      <TeacherPortrait teacher={teacher} />

      <div className="p-7 sm:p-8">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8876d5]">
          {teacher.title}
        </p>

        <h3 className="mt-3  text-3xl tracking-[-0.04em] text-[#22213b]">
          {teacher.name}
        </h3>

        {teacher.experience && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: teacher.soft }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#8876d5]" />
            <span className="text-[10px] font-bold text-[#51477c]">
              {teacher.experience} {teacher.experienceLabel.toLowerCase()}
            </span>
          </div>
        )}

        <p className="mt-6 text-sm leading-7 text-[#777587]">
          {teacher.description}
        </p>

        <div className="mt-7 border-t border-[#efedf2] pt-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#a19caf]">
            Subjects
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {teacher.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-[#e9e5ef] bg-[#fbfafc] px-3 py-2 text-[10px] font-semibold text-[#514e68]"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <blockquote className="mt-7 border-l-2 pl-4" style={{ borderColor: teacher.accent }}>
          <p className=" text-lg italic leading-7 text-[#514e68]">
            “{teacher.quote}”
          </p>
        </blockquote>

        <Link
          href="/#book"
          className="group/link mt-8 flex min-h-12 items-center justify-between rounded-xl border border-[#e9e6ef] px-4 text-[11px] font-bold text-[#393650] transition-all hover:border-[#7765d5] hover:bg-[#f5f2ff] hover:text-[#7765d5]"
        >
          <span>Learn with {teacher.name}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1eef9] text-[#7765d5] transition-transform group-hover/link:translate-x-1">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function TeachersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: `${SITE.url}/teachers`,
    description:
      "Meet the educators teaching live online classes at RhyVidya.",
    employee: teachers.map((teacher) => ({
      "@type": "Person",
      name: teacher.name,
      jobTitle: teacher.title,
      worksFor: {
        "@type": "Organization",
        name: SITE.name,
      },
      knowsAbout: teacher.subjects,
    })),
  };

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#191a32]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#11152e] text-white">
        <div className="absolute -left-40 -top-40 -z-10 h-[35rem] w-[35rem] rounded-full bg-[#6657c7]/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-[-15rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[#a18ae9]/15 blur-[130px]" />

        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 pb-24 pt-12 sm:px-10 sm:pb-28 lg:grid-cols-[1.1fr_.9fr] lg:px-16 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a99af6] shadow-[0_0_12px_#a99af6]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                The people behind every lesson
              </span>
            </div>

            <h1 className=" text-[3.5rem] font-medium leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-[5.8rem]">
              Great learning
              <br />
              begins with
              <span className="mt-2 block italic text-[#b8a9ff]">
                great teachers.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
              Behind every meaningful learning experience is a teacher who
              takes the time to explain, guide and encourage. Meet the educators
              bringing live online learning to RhyVidya.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#book"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-7 text-xs font-bold text-white shadow-[0_12px_35px_rgba(117,98,217,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#a18ff4]"
              >
                Find your teacher
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/subjects"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                Explore subjects
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/10 pt-7">
              <div>
                <p className=" text-3xl text-white">03</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Named educators
                </p>
              </div>
              <div className="border-l border-white/10 pl-5">
                <p className=" text-3xl text-white">Live</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Online teaching
                </p>
              </div>
              <div className="border-l border-white/10 pl-5">
                <p className=" text-3xl text-white">01</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Personal journey
                </p>
              </div>
            </div>
          </div>

          {/* Hero composition */}
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[0.08]" />
            <div className="absolute -inset-10 rounded-[3rem] border border-white/[0.04]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#202442]/90 p-7 shadow-[0_35px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
                    THE RHYVIDYA FACULTY
                  </p>
                  <h2 className="mt-2  text-2xl text-white">
                    People who make learning matter.
                  </h2>
                </div>
                <span className="text-3xl text-[#b8a9ff]">✳</span>
              </div>

              <div className="mt-7 space-y-3">
                {teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div
                      lang={teacher.language}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl  text-2xl"
                      style={{
                        backgroundColor: `${teacher.accent}18`,
                        color: teacher.accent,
                      }}
                    >
                      {teacher.initial}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">
                        {teacher.name}
                      </p>
                      <p className="mt-1 text-[10px] text-white/45">
                        {teacher.title}
                      </p>
                    </div>

                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#a99af6]/20 bg-[#a99af6]/[0.08] p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#b8a9ff]">
                  Our philosophy
                </p>
                <p className="mt-2  text-xl text-white">
                  Never an anonymous tutor pool.
                </p>
                <p className="mt-2 text-[11px] leading-6 text-white/50">
                  Real educators. Live lessons. Personal guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#b8a9ff]/50 to-transparent" />
      </section>

      {/* INTRO */}
      <section className="border-b border-[#eae7e0] bg-[#f5f3ee] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-7 md:grid-cols-3">
          {[
            {
              title: "Real educators",
              description:
                "Meet the named teachers behind the subjects you can learn.",
            },
            {
              title: "Live interaction",
              description:
                "Classes are taught live online, not delivered as recordings alone.",
            },
            {
              title: "Personal attention",
              description:
                "A free assessment helps identify an appropriate starting level.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-4 ${
                index !== 0 ? "md:border-l md:border-[#dedbd3] md:pl-8" : ""
              }`}
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#8876dc]" />
              <div>
                <p className="text-sm font-semibold text-[#22223b]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-6 text-[#777587]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHER PROFILES */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionLabel>MEET THE EDUCATORS</SectionLabel>
              <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#191a32] sm:text-5xl lg:text-6xl">
                The faces behind
                <span className="block italic text-[#7765d5]">
                  every lesson.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#777587]">
              Get to know the educators currently teaching at RhyVidya and the
              subjects they guide students through.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[1.5rem] border border-[#e9e5df] bg-[#f5f2ec] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#7765d5]">
                ✳
              </span>
              <div>
                <p className="text-sm font-bold text-[#282640]">
                  Every subject has a teacher behind it.
                </p>
                <p className="mt-1 text-xs leading-6 text-[#777587]">
                  New subject teachers will be introduced as those classes
                  prepare to launch.
                </p>
              </div>
            </div>

            <Link
              href="/subjects"
              className="inline-flex shrink-0 items-center gap-3 text-xs font-bold text-[#7765d5] transition hover:text-[#5140a9]"
            >
              Explore subjects
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* TEACHING APPROACH */}
      <section className="border-y border-[#e9e5df] bg-[#f3f0e9] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>THE WAY WE TEACH</SectionLabel>

            <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#191a32] sm:text-5xl">
              More than a lesson.
              <span className="block italic text-[#7765d5]">
                A connection.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#777587] sm:text-base">
              RhyVidya is built around live teacher-led learning. Students can
              interact with their teachers, ask questions and work through
              concepts together in an online classroom.
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
              The RhyVidya experience
            </p>

            <div className="relative mt-9 space-y-8">
              {[
                {
                  number: "01",
                  title: "Understand the student",
                  copy: "Begin with a free assessment to understand the learner's current level.",
                },
                {
                  number: "02",
                  title: "Learn together",
                  copy: "Join live online lessons with an experienced subject teacher.",
                },
                {
                  number: "03",
                  title: "Keep progressing",
                  copy: "Stay connected through learning updates and practice resources.",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-5">
                  <span className=" text-3xl italic text-[#a99af6]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-white/50">
                      {step.copy}
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

      {/* SUBJECT CONNECTIONS */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <SectionLabel>LEARN WITH THE RIGHT EDUCATOR</SectionLabel>
            <h2 className=" text-4xl tracking-[-0.045em] text-[#191a32] sm:text-5xl">
              Find your subject.
              <span className="block italic text-[#7765d5]">
                Meet your teacher.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                subject: "Hindi",
                teacher: "Saraswathi",
                slug: "hindi",
                symbol: "हिन्दी",
                bg: "#f2eaff",
              },
              {
                subject: "Physics",
                teacher: "Mr Athi Siva Krishnan & Mrs Vijaya",
                slug: "physics",
                symbol: "F = ma",
                bg: "#eaf1ff",
              },
              {
                subject: "Mathematics",
                teacher: "Mr Athi Siva Krishnan & Mrs Vijaya",
                slug: "mathematics",
                symbol: "π ∑ √",
                bg: "#f3eaff",
              },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/subjects/${item.slug}`}
                className="group rounded-[1.5rem] border border-[#e9e5df] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d1c8ed] hover:shadow-[0_20px_50px_rgba(38,31,82,0.07)]"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl  text-xl text-[#7765d5]"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.symbol}
                </div>

                <h3 className="mt-7  text-2xl text-[#282640]">
                  {item.subject}
                </h3>

                <p className="mt-2 text-[11px] leading-6 text-[#777587]">
                  With {item.teacher}
                </p>

                <span className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold text-[#7765d5]">
                  Explore subject
                  <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="relative isolate overflow-hidden bg-[#11152e] px-6 py-24 text-center text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="absolute -left-40 -top-40 -z-10 h-[35rem] w-[35rem] rounded-full bg-[#6657c7]/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-[-15rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#a18ae9]/15 blur-[120px]" />

        <div className="mx-auto max-w-3xl">
          <SectionLabel>BEGIN YOUR JOURNEY</SectionLabel>

          <h2 className=" text-4xl leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            The right teacher
            <span className="block italic text-[#b8a9ff]">
              makes a difference.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
            Tell us what you would like to learn. Start with a free assessment
            and discover the right learning journey with RhyVidya.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#book"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-8 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#a18ff4]"
            >
              Arrange your free assessment
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/subjects"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-8 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
            >
              Explore all subjects
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
