
"use client";

import type { FormEvent } from "react";
import { FAQS, PLANS, SITE, SUBJECTS } from "../data";
import BookingForm from "../components/BookingForm";

const timeSlots = [
  "Morning · 9:00 AM ET",
  "Morning · 10:00 AM ET",
  "Morning · 11:00 AM ET",
  "Afternoon · 12:00 PM ET",
  "Afternoon · 1:00 PM ET",
  "Afternoon · 2:00 PM ET",
  "Afternoon · 3:00 PM ET",
  "Evening · 4:00 PM ET",
  "Evening · 5:00 PM ET",
  "Evening · 6:00 PM ET",
  "Flexible",
];

export default function ContactForm({ email }: { email: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot spam protection
    if (String(formData.get("website") || "").trim()) {
      return;
    }

    const fields = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      classFormat: String(formData.get("classFormat") || "").trim(),
      preferredTime: String(formData.get("preferredTime") || "").trim(),
      classDate: String(formData.get("classDate") || "").trim(),
      learnerDetails: String(formData.get("learnerDetails") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const subject = encodeURIComponent(
      `RhyVidya Booking Request - ${fields.name}`
    );

    const body = encodeURIComponent(
      `NEW RHYVIDYA BOOKING REQUEST

STUDENT / PARENT DETAILS
Name: ${fields.name}
Email: ${fields.email}
Phone: ${fields.phone || "Not provided"}

CLASS REQUIREMENTS
Subject: ${fields.subject}
Class format: ${fields.classFormat}
Preferred time: ${fields.preferredTime}
Preferred class date: ${fields.classDate || "Not selected"}

LEARNER INFORMATION
${fields.learnerDetails || "Not provided"}

ADDITIONAL INFORMATION
${fields.message || "None"}

--------------------------------
Submitted through the RhyVidya website.
All times are in Toronto (Eastern) time.
The teacher will confirm the final appointment by email.`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-[#e8e4ed] bg-[#fcfbfd] px-4 py-4 text-sm text-[#25233a] outline-none transition placeholder:text-[#aaa6b1] focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100/70";

  const labelClass =
    "mb-2 block text-xs font-semibold text-[#403c50]";

  return (
    
<section
  id="book"
  className="relative isolate overflow-hidden text-white"
>
  {/* BACKGROUND ATMOSPHERE */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-64 top-[-8rem] h-[650px] w-[650px] rounded-full bg-indigo-600/20 blur-[130px]" />
    <div className="absolute -right-48 bottom-[-12rem] h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[140px]" />
    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px]" />
  </div>

  <div className="mx-auto grid max-w-[1440px] items-start gap-14 px-6 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">

    {/* LEFT: INTRODUCTION */}
    <div className="relative pt-2 lg:sticky lg:top-24">
    Book or enquire

      <h2 className="mt-7 max-w-xl  text-5xl font-medium leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.35rem]">
        Make room for
        <br />
        <span className="italic text-violet-300">something</span>
        <br />
        extraordinary.
      </h2>

      <p className="mt-8 max-w-lg text-[15px] leading-[1.95] text-slate-300/90">
        Every learning journey begins with a conversation. Tell us who is
        learning and what they would like to achieve.

        Hindi, Physics and Mathematics are available now. You can also
        register your interest in Tamil, Abacus, Coding and English.

        Choose a 1-to-1 class or group session, on a weekday or weekend.
        Every class is arranged by appointment.
      </p>

      <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
        Our team will reply from{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="font-semibold text-violet-300 underline decoration-violet-400/50 underline-offset-4 transition hover:text-white"
        >
          {SITE.email}
        </a>{" "}
        to confirm your preferred time and online class details.
      </p>

      {/* CONTACT INFORMATION */}
      <div className="mt-11 grid gap-3 sm:grid-cols-2">
        {[
          {
            label: "Email",
            value: SITE.email,
            href: `mailto:${SITE.email}`,
            icon: "✉",
          },
          {
            label: "Phone",
            value: SITE.phoneDisplay,
            href: SITE.phoneHref,
            icon: "↗",
          },
          {
            label: "WhatsApp",
            value: "Chat with our team",
            href: SITE.whatsappPlain,
            icon: "◉",
          },
          {
            label: "YouTube",
            value: "Rhytech Global Solutions",
            href: SITE.youtube,
            icon: "▷",
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={
              item.label === "Email" || item.label === "Phone"
                ? undefined
                : "_blank"
            }
            rel={
              item.label === "Email" || item.label === "Phone"
                ? undefined
                : "noopener noreferrer"
            }
            className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.075]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-violet-300/15 bg-violet-400/10 text-lg text-violet-200 transition group-hover:bg-violet-400/20">
              {item.icon}
            </span>

            <span className="min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </span>

              <span className="mt-1.5 block break-words text-xs font-semibold text-white transition group-hover:text-violet-200">
                {item.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      {/* WHATSAPP CTA */}
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 transition group-hover:bg-emerald-300/20">
          ↗
        </span>
        Prefer to chat first? Message us on WhatsApp
        {/* <ArrowUpRight /> */}
      </a>

      {/* TRUST NOTE */}
      <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
        <div className="flex -space-x-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0b1020] bg-indigo-500 text-xs font-bold text-white">
            R
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0b1020] bg-violet-500 text-xs font-bold text-white">
            V
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0b1020] bg-slate-600 text-xs font-bold text-white">
            +
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold text-white">
            A thoughtful start to learning
          </p>
          <p className="mt-1 text-[11px] text-slate-400">
            Personalised guidance for every learner.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT: BOOKING PANEL */}
    <div
      id="bookingForm"
      className="relative scroll-mt-24"
    >
      {/* DECORATIVE FRAME */}
      <div className="absolute -inset-3 rounded-[2.2rem] border border-white/[0.07] sm:-inset-4" />

      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-[#fff] p-5 text-slate-900 shadow-[0_35px_110px_rgba(0,0,0,0.32)] sm:rounded-[2rem] sm:p-8 lg:p-10">

        {/* TOP ACCENT */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-400" />

        <div className="mb-8 flex items-start justify-between gap-4 border-b border-slate-200 pb-7">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.17em] text-indigo-700">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Start your journey
            </div>

            <h3 className="mt-4  text-3xl font-medium tracking-[-0.045em] text-slate-950 sm:text-4xl">
              Book your free assessment.
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Share a few details about your learning goals. We'll help
              you find the right class and arrange the next step.
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 sm:grid">
            {/* <ArrowUpRight /> */}
          </div>
        </div>

        <BookingForm />

        {/* BOTTOM REASSURANCE */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              ✓
            </span>
            Your first month is free
          </div>

          <p className="text-[10px] text-slate-400">
            Appointment confirmation by email
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
