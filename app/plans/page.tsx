
import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PLANS, FAQS } from "../data";

export const metadata: Metadata = {
  title: "Plans & Pricing | Flexible Online Learning",
  description:
    "Explore RhyVidya's flexible monthly, quarterly, half-yearly and yearly online learning plans. Start with a free assessment and your first month free.",
  alternates: {
    canonical: `${SITE.url}/plans`,
  },
  openGraph: {
    title: "Plans & Pricing | RhyVidya",
    description:
      "A learning journey that fits your goals. Explore flexible subscription options at RhyVidya.",
    url: `${SITE.url}/plans`,
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
    title: "Plans & Pricing | RhyVidya",
    description:
      "Flexible online learning plans with a free assessment and first month free.",
    images: [SITE.logo],
  },
};

const planDetails = [
  {
    id: "01",
    name: "Monthly",
    duration: "1 month",
    headline: "Flexibility, month by month.",
    description:
      "A straightforward way to continue learning, with the flexibility of monthly billing.",
    saving: "Flexible commitment",
    featured: false,
    tone: "light",
    features: [
      "Monthly subscription",
      "Continue one month at a time",
      "One-month fee deposit when paid learning begins",
      "Ideal for flexible learning schedules",
    ],
  },
  {
    id: "02",
    name: "Quarterly",
    duration: "3 months",
    headline: "Build a consistent rhythm.",
    description:
      "A longer learning commitment with a planned subscription discount.",
    saving: "Discount planned",
    featured: true,
    tone: "dark",
    features: [
      "Three-month subscription",
      "A longer period of consistent learning",
      "Planned subscription discount",
      "One-month fee deposit at the start of paid learning",
    ],
  },
  {
    id: "03",
    name: "Half-yearly",
    duration: "6 months",
    headline: "Give progress more time.",
    description:
      "Six months of continued learning with a higher planned subscription discount.",
    saving: "Higher discount planned",
    featured: false,
    tone: "light",
    features: [
      "Six-month subscription",
      "Longer-term learning commitment",
      "Higher planned subscription discount",
      "One-month fee deposit at the start of paid learning",
    ],
  },
  {
    id: "04",
    name: "Yearly",
    duration: "12 months",
    headline: "Think beyond the classroom.",
    description:
      "A full-year subscription designed to offer the best overall subscription value.",
    saving: "Best discount planned",
    featured: false,
    tone: "light",
    features: [
      "Full-year subscription",
      "A year of continued learning",
      "Best planned subscription discount",
      "One-month fee deposit at the start of paid learning",
    ],
  },
];

const included = [
  {
    number: "01",
    title: "Free assessment",
    description:
      "Understand the student's current level before choosing the right learning stage.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Live teacher interaction",
    description:
      "Learn directly with an experienced teacher through live online classes.",
    icon: "◉",
  },
  {
    number: "03",
    title: "Flexible class formats",
    description:
      "Choose 1-to-1 or group classes, subject to appointment availability.",
    icon: "▤",
  },
  {
    number: "04",
    title: "Learning support",
    description:
      "Stay connected through progress updates, practice resources and communication.",
    icon: "↗",
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

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 ${light ? "text-[#b8a9ff]" : "text-[#7865d4]"}`}
    >
      <path
        d="m4.5 10.5 3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#8978dc]">
      <span className="h-px w-7 bg-[#8978dc]" />
      {children}
    </div>
  );
}

function PlanCard({
  plan,
}: {
  plan: (typeof planDetails)[number];
}) {
  const dark = plan.featured;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[1.7rem] border p-7 transition-all duration-500 hover:-translate-y-2 sm:p-8 ${
        dark
          ? "border-[#51477e] bg-[#171832] text-white shadow-[0_25px_75px_rgba(31,27,67,0.17)]"
          : "border-[#e9e5df] bg-white text-[#20203b] shadow-[0_8px_35px_rgba(30,28,55,0.025)] hover:border-[#d1c8ed] hover:shadow-[0_25px_65px_rgba(38,31,82,0.09)]"
      }`}
    >
      {dark && (
        <>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7765d5]/15 blur-[75px]" />
          <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/[0.06]" />
        </>
      )}

      <div className="relative flex items-center justify-between">
        <span
          className={`text-[9px] font-bold tracking-[0.2em] ${
            dark ? "text-[#b8a9ff]" : "text-[#9485d1]"
          }`}
        >
          PLAN {plan.id}
        </span>

        {dark && (
          <span className="rounded-full border border-[#b8a9ff]/30 bg-[#b8a9ff]/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#c7bcff]">
            Popular choice
          </span>
        )}
      </div>

      <div className="relative mt-8">
        <h3
          className={` text-3xl tracking-[-0.045em] ${
            dark ? "text-white" : "text-[#24233e]"
          }`}
        >
          {plan.name}
        </h3>

        <p
          className={`mt-2 text-[10px] font-bold uppercase tracking-[0.15em] ${
            dark ? "text-white/45" : "text-[#9b97a5]"
          }`}
        >
          {plan.duration} billing
        </p>
      </div>

      <div
        className={`mt-7 border-t pt-6 ${
          dark ? "border-white/10" : "border-[#eeebf0]"
        }`}
      >
        <p
          className={` text-xl leading-7 ${
            dark ? "text-[#e4dcff]" : "text-[#37334f]"
          }`}
        >
          {plan.headline}
        </p>

        <p
          className={`mt-3 min-h-[72px] text-xs leading-6 ${
            dark ? "text-white/50" : "text-[#858190]"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <div
        className={`mt-6 rounded-xl px-4 py-3 ${
          dark ? "bg-white/[0.07]" : "bg-[#f5f2fb]"
        }`}
      >
        <p
          className={`text-[10px] font-bold ${
            dark ? "text-[#c9bcff]" : "text-[#7564c6]"
          }`}
        >
          {plan.saving}
        </p>
      </div>

      <div className="mt-7">
        <p
          className={`text-[9px] font-bold uppercase tracking-[0.17em] ${
            dark ? "text-white/40" : "text-[#aaa5b0]"
          }`}
        >
          Plan highlights
        </p>

        <ul className="mt-5 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon light={dark} />
              <span
                className={`text-[11px] leading-5 ${
                  dark ? "text-white/70" : "text-[#6e6b7d]"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className={`group/link relative mt-9 flex min-h-13 items-center justify-between rounded-full px-5 text-[10px] font-bold transition ${
          dark
            ? "bg-[#9280e9] text-white hover:bg-[#a18ff4]"
            : "border border-[#e7e2ef] bg-white text-[#34314c] hover:border-[#7765d5] hover:bg-[#f6f3ff] hover:text-[#7765d5]"
        }`}
      >
        <span>Choose {plan.name}</span>
        <ArrowIcon className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </article>
  );
}

export default function PlansPage() {
  const faqs = FAQS.filter((faq) =>
    /plan|payment|launch offer|free|1-to-1|group class/i.test(faq.q)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Plans & Pricing | RhyVidya",
    description:
      "Explore monthly, quarterly, half-yearly and yearly learning subscriptions at RhyVidya.",
    url: `${SITE.url}/plans`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
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

        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 pb-24 pt-12 sm:px-10 sm:pb-28 lg:grid-cols-[1.05fr_.95fr] lg:px-16 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8a9ff] shadow-[0_0_12px_#b8a9ff]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                A better way to invest in learning
              </span>
            </div>

            <h1 className=" text-[3.5rem] font-medium leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-[5.8rem]">
              Choose a plan.
              <br />
              <span className="italic text-[#b8a9ff]">
                Open possibilities.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
              Great learning starts with the right guidance. Explore flexible
              subscription options designed to support a student's learning
              journey, one lesson at a time.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#plans"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#9381ec] px-7 text-xs font-bold text-white shadow-[0_12px_35px_rgba(117,98,217,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#a18ff4]"
              >
                Explore subscription plans
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:bg-white/[0.06]"
              >
                Book free assessment
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {["Free assessment", "First month free", "Flexible billing"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a99af6]" />
                    <span className="text-[10px] font-semibold text-white/55">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* OFFER CARD */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[0.08]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#202442]/90 p-8 shadow-[0_35px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#9481eb]/15 blur-[70px]" />

              <div className="relative flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8a9ff]">
                  A special beginning
                </p>
                <span className="text-3xl text-[#b8a9ff]">✳</span>
              </div>

              <div className="relative mt-9">
                <p className=" text-6xl tracking-[-0.07em] text-white sm:text-7xl">
                  Free
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Your first month of classes
                </p>
              </div>

              <div className="relative my-8 h-px bg-white/10" />

              <div className="relative space-y-6">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Start with a free assessment
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/45">
                    Your teacher understands the student's current level and
                    helps identify the right starting point.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Experience the first month free
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/45">
                    Begin your learning journey with the RhyVidya launch offer.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="group relative mt-9 flex min-h-13 items-center justify-between rounded-full bg-[#9381ec] px-5 text-[10px] font-bold text-white transition hover:bg-[#a18ff4]"
              >
                Get started for free
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="relative mt-5 text-center text-[9px] leading-5 text-white/35">
                Paid subscription details are shared before enrolment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION PLANS */}
      <section
        id="plans"
        className="scroll-mt-24 bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>SUBSCRIPTION OPTIONS</Eyebrow>
              <h2 className=" text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-[#191a32] sm:text-5xl lg:text-6xl">
                Your learning.
                <span className="block italic text-[#7765d5]">
                  Your timeline.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#777587]">
              Whether you prefer monthly flexibility or a longer learning
              commitment, choose the billing duration that suits your plans.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {planDetails.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#e8e3d9] bg-[#f3f0e9] p-6 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#7865d4]">
                ✳
              </span>
              <div>
                <p className="text-sm font-bold text-[#302d49]">
                  A note about tuition and discounts
                </p>
                <p className="mt-2 text-xs leading-6 text-[#777587]">
                  Exact tuition fees and discount percentages have not yet
                  been published. Longer subscription periods are planned to
                  receive larger discounts. The confirmed pricing will be
                  shared before enrolment opens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="border-y border-[#e9e5df] bg-[#f3f0e9] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>THE RHYVIDYA EXPERIENCE</Eyebrow>
            <h2 className=" text-4xl tracking-[-0.045em] text-[#191a32] sm:text-5xl">
              More than a subscription.
              <span className="block italic text-[#7765d5]">
                A learning experience.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#777587]">
              A clear path from your first assessment to live lessons and
              continued learning.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.5rem] border border-[#e7e2d9] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(38,31,82,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <span className=" text-3xl text-[#c1b7df]">
                    {item.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2effb] text-xl text-[#7865d4]">
                    {item.icon}
                  </span>
                </div>

                <h3 className="mt-9 text-sm font-bold text-[#282640]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#858190]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT PROCESS */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <Eyebrow>HOW PAYMENTS WORK</Eyebrow>

            <h2 className=" text-4xl leading-[1.08] tracking-[-0.05em] text-[#191a32] sm:text-5xl">
              Clear from
              <span className="block italic text-[#7765d5]">
                the very beginning.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#777587]">
              We want families to understand the process before committing to
              a paid subscription. Start with an assessment, experience the
              launch offer, and review your selected plan before paid learning
              begins.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold text-[#7765d5] transition hover:text-[#5140a9]"
            >
              Ask about enrolment
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-[#e9e5df] bg-white p-7 shadow-[0_20px_65px_rgba(38,31,82,0.045)] sm:p-10">
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Book your free assessment",
                  copy: "Tell us what you want to learn and arrange an assessment with the appropriate teacher.",
                  tag: "No-cost starting point",
                },
                {
                  number: "02",
                  title: "Experience your free first month",
                  copy: "Begin classes and experience the RhyVidya learning approach.",
                  tag: "Launch offer",
                },
                {
                  number: "03",
                  title: "Select your subscription",
                  copy: "Choose monthly, quarterly, half-yearly or yearly billing.",
                  tag: "Your preferred duration",
                },
                {
                  number: "04",
                  title: "Begin paid learning",
                  copy: "When the paid plan begins, the one-month fee deposit applies alongside the selected subscription payment.",
                  tag: "Payment details confirmed before enrolment",
                },
              ].map((step, index) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0edfa]  text-sm text-[#7765d5]">
                      {step.number}
                    </span>
                    {index !== 3 && (
                      <span className="mt-3 min-h-8 w-px flex-1 bg-[#e9e5ef]" />
                    )}
                  </div>

                  <div className="pb-3">
                    <h3 className="text-sm font-bold text-[#282640]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#858190]">
                      {step.copy}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-[#f7f5fa] px-3 py-1.5 text-[9px] font-semibold text-[#8173bb]">
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLASS FORMAT */}
      <section className="bg-[#171832] px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Eyebrow>LEARNING THAT FITS</Eyebrow>
            <h2 className=" text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
              One-to-one attention.
              <span className="block italic text-[#b8a9ff]">
                Or learning together.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              Choose between individual classes and group sessions. Classes
              are arranged by appointment on weekdays and weekends, subject to
              availability.
            </p>
          </div>

          <div className="grid shrink-0 gap-3 sm:grid-cols-2">
            <div className="min-w-[175px] rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <span className="text-2xl text-[#b8a9ff]">01</span>
              <p className="mt-5 text-sm font-semibold">1-to-1 classes</p>
              <p className="mt-2 text-[10px] leading-5 text-white/40">
                Individual learning attention
              </p>
            </div>

            <div className="min-w-[175px] rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <span className="text-2xl text-[#b8a9ff]">02</span>
              <p className="mt-5 text-sm font-semibold">Group classes</p>
              <p className="mt-2 text-[10px] leading-5 text-white/40">
                Learn alongside other students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <Eyebrow>GOOD TO KNOW</Eyebrow>
            <h2 className=" text-4xl tracking-[-0.045em] text-[#191a32] sm:text-5xl">
              Questions,
              <span className="block italic text-[#7765d5]">
                answered.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#777587]">
              A few details to help you make a confident decision before
              getting started.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 text-xs font-bold text-[#7765d5] transition hover:text-[#5140a9]"
            >
              Talk to our team
              <ArrowIcon />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[#e9e5df] bg-white p-6 transition open:border-[#d5ccef] open:shadow-[0_12px_35px_rgba(38,31,82,0.04)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#302d49] [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3f0fa] text-[#7765d5] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-2xl border-t border-[#efedf2] pt-5 text-xs leading-7 text-[#777587]">
                  {faq.a}
                </p>
              </details>
            ))}

            {faqs.length === 0 && (
              <p className="text-sm text-[#777587]">
                Contact our team for subscription and payment information.
              </p>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
