
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: "How RhyVidya Works | Your Learning Journey",
  description:
    "Discover how RhyVidya makes online learning simple. Choose a subject, complete a free assessment, book your class and learn live with experienced teachers.",
  alternates: {
    canonical: `${SITE.url}/how-it-works`,
  },
  openGraph: {
    title: "How RhyVidya Works | Your Learning Journey",
    description:
      "From your first assessment to live online classes, discover a more personal way to learn with RhyVidya.",
    url: `${SITE.url}/how-it-works`,
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

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Find the right subject.",
    description:
      "Explore our learning programmes and choose the subject that matches your goals. Whether it is building language skills or strengthening academic understanding, your journey starts with the right choice.",
    detail: "Choose a subject",
    points: [
      "Explore available subjects",
      "Understand the learning stages",
      "Register interest in upcoming subjects",
    ],
  },
  {
    number: "02",
    label: "ASSESS",
    title: "Understand where you are.",
    description:
      "Every booking begins with a free assessment. It helps your teacher understand the student's current level, learning needs and the right starting point.",
    detail: "Free assessment",
    points: [
      "Understand the student's current level",
      "Identify learning priorities",
      "Find the appropriate learning stage",
    ],
  },
  {
    number: "03",
    label: "SCHEDULE",
    title: "Make learning fit your life.",
    description:
      "Choose an available appointment and receive your online class details. Your appointment time is displayed in your own timezone, making it easier to plan from wherever you are.",
    detail: "Flexible appointments",
    points: [
      "Choose an available appointment",
      "View time in your local timezone",
      "Receive your class joining details",
    ],
  },
  {
    number: "04",
    label: "LEARN",
    title: "Learn live. Grow with confidence.",
    description:
      "Join your teacher online for an interactive learning experience. Ask questions, participate in lessons and build understanding through guided teaching and practice.",
    detail: "Live online classes",
    points: [
      "Learn directly from experienced teachers",
      "Participate and ask questions",
      "Build understanding through practice",
    ],
  },
];

const platforms = [
  {
    name: "Google Meet",
    description: "Live video classes and interactive communication.",
    symbol: "G",
    color: "bg-[#e9f1ff] text-[#2867c7]",
  },
  {
    name: "Zoho Meeting",
    description: "A dedicated environment for online lessons.",
    symbol: "Z",
    color: "bg-[#fff0e9] text-[#d85c32]",
  },
  {
    name: "YouTube",
    description: "An additional channel for learning and lesson content.",
    symbol: "▶",
    color: "bg-[#fff0f0] text-[#d93636]",
  },
  {
    name: "WhatsApp",
    description: "Reminders, quick questions and backup communication.",
    symbol: "W",
    color: "bg-[#e8f8ef] text-[#169b59]",
  },
];

const supportItems = [
  {
    number: "01",
    title: "Weekly progress updates",
    description:
      "Parents receive a short weekly update to stay informed about the student's learning progress.",
    icon: "progress",
  },
  {
    number: "02",
    title: "Practice beyond the classroom",
    description:
      "Students can access teacher-uploaded practice videos to reinforce what they learn in class.",
    icon: "play",
  },
  {
    number: "03",
    title: "Stay connected",
    description:
      "Student chat and WhatsApp reminders help keep communication accessible between lessons.",
    icon: "chat",
  },
];

const faqs = [
  {
    question: "Do I need to pay for the assessment?",
    answer:
      "No. Every booking starts with a free assessment to help the teacher understand the student's current level and identify the right learning stage.",
  },
  {
    question: "Is the first month really free?",
    answer:
      "Yes. RhyVidya offers the first month of classes free at launch. If a student continues afterward, the paid plan begins with one month's fee as a deposit plus the selected subscription payment.",
  },
  {
    question: "How do online classes take place?",
    answer:
      "Classes are held online using platforms such as Google Meet, Zoho Meeting, YouTube or WhatsApp, depending on the learning arrangement.",
  },
  {
    question: "Can I choose a convenient class time?",
    answer:
      "You can select from available appointments. Appointment times are displayed in your own timezone.",
  },
  {
    question: "Will parents receive progress updates?",
    answer:
      "Yes. Parents receive short weekly progress updates to help them stay connected with the student's learning journey.",
  },
  {
    question: "What if the subject I want is not available yet?",
    answer:
      "You can register your interest in upcoming subjects. RhyVidya currently lists Hindi, Physics and Mathematics as live subjects, with other subjects opening progressively.",
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="m4.5 10.5 3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#7765d5]">
      <span className="h-px w-7 bg-[#9584ed]" />
      {children}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#191a32]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#11152e] text-white">
        <div className="absolute -left-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#6252c7]/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-[-10rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[#a18ae9]/15 blur-[130px]" />

        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 pb-24 pt-20 sm:px-10 sm:pb-28 sm:pt-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-16 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a99af6] shadow-[0_0_12px_#a99af6]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                Your journey with RhyVidya
              </span>
            </div>

            <h1 className="max-w-[760px] text-[3.3rem] font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[5.3rem]">
              A better way
              <br />
              to learn.
              <span className="mt-2 block italic text-[#b8a9ff]">
                A clearer way to grow.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
              Great learning begins with understanding the student. From a
              free assessment to live lessons with experienced teachers,
              RhyVidya makes every step feel simple, personal and purposeful.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-7 text-md font-bold text-white shadow-[0_12px_35px_rgba(117,98,217,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#a18ff4]"
              >
                Start your learning journey
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                href="/subjects"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-md font-semibold text-white/85 transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                Explore subjects
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-7">
              <div>
                <p className=" text-2xl text-white">Free</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">
                  Student assessment
                </p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className=" text-2xl text-white">1st month</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">
                  Free at launch
                </p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className=" text-2xl text-white">Live</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">
                  Teacher-led classes
                </p>
              </div>
            </div>
          </div>

          {/* Visual journey card */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[0.08]" />
            <div className="absolute -inset-10 rounded-[3rem] border border-white/[0.04]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#202442]/90 p-6 shadow-[0_35px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
                    The RhyVidya experience
                  </p>
                  <p className="mt-2  text-2xl text-white">
                    Your learning path
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#b8a9ff]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M4 19.5V6.8c0-.9.7-1.6 1.6-1.6H19v14.3H5.6c-.9 0-1.6.7-1.6 1.6Zm0 0c0-.9.7-1.6 1.6-1.6H19M8 9h7m-7 3h7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative mt-8 space-y-7">
                <div className="absolute bottom-7 left-[19px] top-7 w-px bg-gradient-to-b from-[#a99af6] via-[#8d7bdc] to-transparent" />

                {[
                  ["01", "Discover", "Choose your subject", "bg-[#8171df]"],
                  ["02", "Assess", "Find the right learning stage", "bg-[#7062c5]"],
                  ["03", "Schedule", "Choose an available class", "bg-[#5e55a6]"],
                  ["04", "Learn", "Meet your teacher online", "bg-[#a18fe9]"],
                ].map(([number, title, description, color]) => (
                  <div key={number} className="relative flex items-center gap-5">
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${color} text-[10px] font-bold text-white shadow-[0_0_25px_rgba(150,130,245,0.18)] ring-4 ring-[#202442]`}
                    >
                      {number}
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.045] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.08]">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-white">
                          {title}
                        </p>
                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#a99af6]">
                          Step {number}
                        </span>
                      </div>
                      <p className="mt-1 text-[15px] text-white/50">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl border border-[#a99af6]/20 bg-[#a99af6]/[0.09] px-5 py-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#b8a9ff]">
                    Your next chapter
                  </p>
                  <p className="mt-1 text-md font-semibold text-white">
                    Learn with confidence.
                  </p>
                </div>
                <span className="text-2xl text-[#b8a9ff]">✳</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/15 bg-[#f9f7f1] px-5 py-4 shadow-2xl sm:block">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8171c9]">
                A personal beginning
              </p>
              <p className="mt-1  text-lg text-[#191a32]">
                Start at your level.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#b8a9ff]/50 to-transparent" />
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-[#eae7e0] bg-[#f5f3ee]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-10 sm:px-10 md:grid-cols-3 lg:px-16">
          {[
            ["A thoughtful start", "Understand the student before classes begin."],
            ["Learning that connects", "Live lessons with experienced teachers."],
            ["Support that continues", "Stay connected with progress and practice."],
          ].map(([title, copy], index) => (
            <div
              key={title}
              className={`flex gap-4 ${
                index !== 0 ? "md:border-l md:border-[#dedbd3] md:pl-8" : ""
              }`}
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#8876dc]" />
              <div>
                <p className="text-sm font-semibold text-[#22223b]">{title}</p>
                <p className="mt-1 text-md leading-6 text-[#777587]">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUR STEPS */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>THE PROCESS</SectionLabel>
            <h2 className=" text-4xl font-medium leading-[1.1] tracking-[-0.045em] text-[#191a32] sm:text-5xl lg:text-6xl">
              Four thoughtful steps.
              <span className="block italic text-[#7765d5]">
                One meaningful journey.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#777587] sm:text-base sm:leading-8">
              We keep the process straightforward, so students and parents can
              focus on what matters most: learning, understanding and growth.
            </p>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative flex flex-col rounded-[1.7rem] border border-[#e9e6df] bg-white p-7 shadow-[0_8px_35px_rgba(30,28,55,0.025)] transition duration-500 hover:-translate-y-2 hover:border-[#cfc6f7] hover:shadow-[0_25px_65px_rgba(38,31,82,0.09)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className=" text-5xl italic tracking-[-0.06em] text-[#d8d1f3] transition-colors duration-300 group-hover:text-[#8978dc]">
                    {step.number}
                  </span>
                  <span className="rounded-full bg-[#f2effb] px-3 py-1.5 text-[8px] font-bold tracking-[0.17em] text-[#7969c7]">
                    {step.label}
                  </span>
                </div>

                <div className="my-7 h-px w-full bg-gradient-to-r from-[#dcd5f6] to-transparent" />

                <h3 className=" text-[1.7rem] font-bold leading-tight tracking-[-0.03em] text-[#1c1d35]">
                  {step.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#777587]">
                  {step.description}
                </p>

                <div className="mt-7 space-y-3 border-t border-[#eeecf1] pt-6">
                  {step.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-[#8170d6]">
                        <CheckIcon />
                      </span>
                      <span className="text-[15px] leading-5 text-[#55566b]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7765d5]">
                    {step.detail}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-3 top-12 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-[#e9e5f4] bg-[#fbfaf7] text-[#9b8bdf] lg:flex">
                    <ArrowIcon className="h-3 w-3" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT FEATURE */}
      <section className="relative isolate overflow-hidden bg-[#eeebf8] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="absolute -right-32 top-[-10rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-white/70 blur-[100px]" />

        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>START WITH UNDERSTANDING</SectionLabel>
            <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#1b1c36] sm:text-5xl lg:text-[3.7rem]">
              Before teaching,
              <span className="block italic text-[#7765d5]">
                we listen.
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-8 text-[#6f6d82] sm:text-base">
              Every student has a different starting point. The free assessment
              gives the teacher an opportunity to understand the student's
              current level and identify a suitable learning stage before
              classes begin.
            </p>
            
<Link
  href="/contact"
  className="group mt-9 inline-flex min-h-14 w-fit items-center justify-center gap-4 rounded-full bg-[#211e42] px-7 py-4 text-md font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7765d5] hover:shadow-xl"
>
  <span>Arrange your free assessment</span>
  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
</Link>

          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#d8d1ee]" />
            <div className="relative rounded-[1.7rem] bg-white p-7 shadow-[0_25px_70px_rgba(42,34,91,0.08)] sm:p-10">
              <div className="flex items-center justify-between border-b border-[#efedf3] pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9385d5]">
                    Student starting point
                  </p>
                  <h3 className="mt-2 font-bold text-2xl text-[#20203a]">
                    A clearer picture.
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0edfb] text-[#7968cf]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M12 3.5 14.5 9l6 .8-4.4 4.2 1.1 6-5.2-2.9-5.2 2.9 1-6-4.3-4.2 6-.8L12 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-7 space-y-6">
                {[
                  ["Current understanding", "Where is the student today?"],
                  ["Learning priorities", "What needs more attention?"],
                  ["Starting stage", "What is the right next step?"],
                ].map(([title, copy], index) => (
                  <div key={title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f2effb] text-[10px] font-bold text-[#7765d5]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#25253d]">
                        {title}
                      </p>
                      <p className="mt-1 text-md leading-6 text-[#858396]">
                        {copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#f6f4fb] p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8374ce]">
                  The outcome
                </p>
                <p className="mt-2  text-xl text-[#282541]">
                  A suitable place to begin.
                </p>
                <p className="mt-1 text-[15px] leading-6 text-[#777587]">
                  Learning starts from the student's level, not from a
                  one-size-fits-all assumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSROOM EXPERIENCE */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <SectionLabel>THE ONLINE CLASSROOM</SectionLabel>
              <h2 className=" text-4xl font-medium leading-[1.1] tracking-[-0.045em] text-[#1b1c36] sm:text-5xl lg:text-6xl">
                Real teachers.
                <span className="block italic text-[#7765d5]">
                  Real interaction.
                </span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-[#777587] sm:text-base">
              Learning happens through live online sessions, supported by
              communication tools that make it easier for students and
              families to stay connected.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="group rounded-[1.5rem] border border-[#e9e6df] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d2c9f3] hover:shadow-[0_20px_50px_rgba(38,31,82,0.07)]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold ${platform.color}`}
                >
                  {platform.symbol}
                </div>
                <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.18em] text-[#a29db1]">
                  PLATFORM 0{index + 1}
                </p>
                <h3 className="mt-2 font-bold text-xl text-[#20203a]">
                  {platform.name}
                </h3>
                <p className="mt-3 text-md leading-6 text-[#777587]">
                  {platform.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-[1.5rem] border border-[#e9e6df] bg-[#f3f0e9] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8272ce]">
                A connected learning experience
              </p>
              <p className="mt-2 max-w-2xl  text-xl leading-snug text-[#24243d] sm:text-2xl">
                One learning journey, with communication that stays accessible.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex shrink-0 items-center gap-3 text-md font-bold text-[#7765d5] transition hover:text-[#5140a9] sm:mt-0"
            >
              Talk to our team
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ONGOING SUPPORT */}
      <section className="relative isolate overflow-hidden bg-[#151832] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="absolute -left-40 top-[-10rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#6657c7]/20 blur-[120px]" />
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl">
            <SectionLabel>BEYOND THE LESSON</SectionLabel>
            <h2 className=" text-4xl font-medium leading-[1.1] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Progress doesn't
              <span className="block italic text-[#b7a9ff]">
                end at goodbye.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
              A meaningful learning experience is supported by what happens
              between classes, too. RhyVidya helps students and parents stay
              connected through regular updates, practice resources and
              communication.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {supportItems.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-8 transition duration-300 hover:border-[#a99af6]/35 hover:bg-white/[0.075] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className=" text-4xl italic text-[#a99af6]">
                    {item.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#a99af6]/10 text-[#b8a9ff]">
                    {item.icon === "progress" && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {item.icon === "play" && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <rect
                          x="3.5"
                          y="5"
                          width="17"
                          height="14"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="m10 9 5 3-5 3V9Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    {item.icon === "chat" && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-3A7.5 7.5 0 1 1 20 11.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 11.5h8M8 14.5h5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <h3 className="mt-9 font-bold text-2xl text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-md leading-7 text-white/55">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST MONTH OFFER */}
      <section className="bg-[#f3f0e9] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] bg-[#e8e2f8]">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7765d5]">
                A special beginning
              </p>
              <h2 className="mt-5 max-w-2xl  text-4xl leading-[1.08] tracking-[-0.04em] text-[#201e3d] sm:text-5xl">
                Make room for a month of discovery.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#6e6a83]">
                Begin with a free assessment and experience your first month
                of classes free at launch. Discover the right learning
                environment before deciding on the next chapter.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#211e42] px-7 py-4 text-md font-bold text-white transition hover:bg-[#7765d5]"
              >
                Book your free assessment
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#211e42] px-10 py-12 text-center text-white lg:min-h-[380px] lg:w-[350px]">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
              <div className="relative">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
                  Your first month
                </p>
                <p className="mt-5  text-7xl tracking-[-0.06em] text-white">
                  FREE
                </p>
                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white/50">
                  At launch
                </p>
                <div className="mx-auto mt-7 h-px w-14 bg-[#a99af6]" />
                <p className="mt-5 text-[15px] text-white/65">
                  Start with a free assessment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <SectionLabel>GOOD TO KNOW</SectionLabel>
            <h2 className=" text-4xl leading-[1.1] tracking-[-0.045em] text-[#1b1c36] sm:text-5xl">
              A few things
              <span className="block italic text-[#7765d5]">
                you may be wondering.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#777587]">
              Have another question? Our team will be happy to help you
              understand the learning process.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-7 inline-flex items-center gap-3 text-md font-bold text-[#7765d5] hover:text-[#5140a9]"
            >
              Contact our team
              <ArrowIcon />
            </a>
          </div>

          <div className="divide-y divide-[#e9e6df] border-y border-[#e9e6df]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left marker:hidden">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 text-[10px] font-bold tracking-[0.1em] text-[#a49bbf]">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#28283f] sm:text-base">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e8e4f0] text-[#7765d5] transition duration-300 group-open:rotate-45 group-open:bg-[#f0edfb]">
                    +
                  </span>
                </summary>
                <p className="ml-9 mt-4 max-w-2xl pr-10 text-md leading-7 text-[#777587] sm:text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#11152e] px-6 py-24 text-center text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="absolute -left-32 top-[-14rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#6657c7]/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-[-14rem] -z-10 h-[35rem] w-[35rem] rounded-full bg-[#a18ae9]/15 blur-[120px]" />

        <div className="mx-auto max-w-3xl">
          <SectionLabel>THE NEXT STEP IS YOURS</SectionLabel>
          <h2 className=" text-4xl leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Every great journey
            <span className="block italic text-[#b8a9ff]">
              begins with a first step.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
            Discover a learning experience built around the student. Start
            with a free assessment and take the first step with RhyVidya.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-8 text-md font-bold text-white transition hover:-translate-y-1 hover:bg-[#a18ff4]"
            >
              Book a free assessment
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/subjects"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-8 text-md font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
            >
              Explore our subjects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
