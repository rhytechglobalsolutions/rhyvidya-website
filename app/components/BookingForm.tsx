
"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  SITE,
  SLOT_OPTIONS,
  STAGE_OPTIONS,
  SUBJECTS,
} from "../data";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday",
];

type Props = {
  mode?: "book" | "enquire";
  fixedSubject?: string;
  showStage?: boolean;
  heading?: string;
  intro?: string;
};

type FormStatus = "idle" | "sending" | "sent" | "error";

function formatLong(date: Date) {
  return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const inputClass =
  "mt-2.5 w-full rounded-xl border border-[#e7e7ef] bg-[#fafafe] px-4 py-3.5 text-sm text-[#24243a] outline-none transition duration-200 placeholder:text-[#aaa9b8] hover:border-[#c9c5dc] focus:border-[#7770c8] focus:bg-white focus:ring-4 focus:ring-[#7770c8]/10";

const labelClass =
  "block text-[12px] font-semibold tracking-[0.01em] text-[#35344c]";

export default function BookingForm({
  mode = "book",
  fixedSubject,
  showStage = false,
  heading,
  intro,
}: Props) {
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const [viewDate, setViewDate] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selected, setSelected] = useState<Date | null>(null);
  const [calError, setCalError] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [sentTo, setSentTo] = useState("");

  const needsDate = mode === "book";
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const minView = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxView = new Date(today.getFullYear(), today.getMonth() + 2, 1);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    if (needsDate && !selected) {
      setCalError(true);
      document.getElementById("calGrid")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload: Record<string, string> = {
      mode,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      subject:
        fixedSubject ??
        String(data.get("subject") ?? "Not sure yet"),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    if (showStage) {
      payload.stage = String(data.get("stage") ?? "Not sure yet");
    }

    if (mode === "book") {
      payload.format = String(data.get("format") ?? "1-to-1 class");
      payload.slot = String(data.get("slot") ?? "");

      if (selected) {
        payload.date = formatLong(selected);
      }
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean }
        | null;

      if (response.ok && result?.ok) {
        setSentTo(payload.email);
        setStatus("sent");
        form.reset();
        setSelected(null);
        setCalError(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => {
      document.getElementById("formConfirm")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 50);
  }

  function sendAnother() {
    setStatus("idle");
    setSentTo("");
  }

  function changeMonth(direction: number) {
    setViewDate(new Date(year, month + direction, 1));
  }

  return (
    <form
      id="bookingForm"
      onSubmit={handleSubmit}
      className="relative space-y-7"
    >
      {/* BOT SPAM PROTECTION */}
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* FORM INTRODUCTION */}
      {/* <div className="border-b border-[#ecebf2] pb-6">
        <div className="flex items-center gap-2">
          {/* <span className="h-1.5 w-1.5 rounded-full bg-violet-600" /> */}
          {/* <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-violet-700">
            {mode === "book" ? "Your learning journey" : "Stay connected"}
          </span>
        </div>

        {/* <h3 className="mt-3  text-3xl font-medium tracking-[-0.045em] text-[#17172d] sm:text-[2.1rem]">
          {heading ??
            (mode === "book"
              ? "Booking request"
              : "Register your interest")}
        </h3> */}

        {/* <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#77768a]">
          {intro ??
            (mode === "book"
              ? "Your first month is free. Complete the details below and we will confirm your appointment by email."
              : "Tell us what interests you and we will email you when enrolment opens.")}
        </p> 
      </div> */}

      {/* PERSONAL DETAILS */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className=" text-lg text-violet-500">01</span>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#44435a]">
            Your details
          </h4>
          <span className="h-px flex-1 bg-[#eeedf3]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fieldName" className={labelClass}>
              Your name <span className="text-violet-600">*</span>
            </label>
            <input
              id="fieldName"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="fieldEmail" className={labelClass}>
              Email address <span className="text-violet-600">*</span>
            </label>
            <input
              id="fieldEmail"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>

        {!fixedSubject && (
          <div className="mt-5">
            <label htmlFor="subjectSelect" className={labelClass}>
              Subject
            </label>
            <select
              id="subjectSelect"
              name="subject"
              defaultValue="Not sure yet"
              className={inputClass}
            >
              <option value="Not sure yet">Not sure yet</option>
              {SUBJECTS.map((subject) => (
                <option
                  key={subject.slug}
                  value={`${subject.name} — ${
                    subject.status === "live"
                      ? "live now"
                      : "coming soon"
                  }`}
                >
                  {subject.name} —{" "}
                  {subject.status === "live"
                    ? "live now"
                    : "coming soon"}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fieldPhone" className={labelClass}>
              Phone <span className="font-normal italic text-[#9997a8]">(optional)</span>
            </label>
            <input
              id="fieldPhone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Your contact number"
              className={inputClass}
            />
          </div>

          {showStage && (
            <div>
              <label htmlFor="stageSelect" className={labelClass}>
                Hindi learning stage
              </label>
              <select
                id="stageSelect"
                name="stage"
                defaultValue="Not sure yet"
                className={inputClass}
              >
                {STAGE_OPTIONS.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* CLASS PREFERENCES */}
      {mode === "book" && (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className=" text-lg text-violet-500">02</span>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#44435a]">
              Class preferences
            </h4>
            <span className="h-px flex-1 bg-[#eeedf3]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="formatSelect" className={labelClass}>
                Class format
              </label>
              <select
                id="formatSelect"
                name="format"
                defaultValue="1-to-1 class"
                className={inputClass}
              >
                <option>1-to-1 class</option>
                <option>Group session</option>
              </select>
            </div>

            <div>
              <label htmlFor="slotSelect" className={labelClass}>
                Preferred time
              </label>
              <select
                id="slotSelect"
                name="slot"
                defaultValue={SLOT_OPTIONS[0]}
                className={inputClass}
              >
                {SLOT_OPTIONS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <p className="mt-2.5 text-[10px] leading-5 text-[#8c8a9c]">
                Times shown in Toronto (Eastern) time. Your teacher
                confirms the final appointment by email.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* DATE PICKER */}
      {mode === "book" && (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className=" text-lg text-violet-500">03</span>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#44435a]">
              Choose your class date
            </h4>
            <span className="h-px flex-1 bg-[#eeedf3]" />
          </div>

          <div className="rounded-2xl border border-[#e9e7f0] bg-[#fafafe] p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#9996a9]">
                  Available calendar
                </p>
                <p className="mt-1  text-xl font-medium text-[#24233b]">
                  {MONTHS[month]} {year}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous month"
                  disabled={viewDate <= minView}
                  onClick={() => changeMonth(-1)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#e5e3ed] bg-white text-[#57546e] transition hover:border-violet-300 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ‹
                </button>

                <button
                  type="button"
                  aria-label="Next month"
                  disabled={viewDate >= maxView}
                  onClick={() => changeMonth(1)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#e5e3ed] bg-white text-[#57546e] transition hover:border-violet-300 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                (day) => (
                  <span
                    key={day}
                    className="py-2 text-center text-[10px] font-bold uppercase tracking-wide text-[#9996a9]"
                  >
                    {day}
                  </span>
                )
              )}
            </div>

            <div
              id="calGrid"
              className="grid grid-cols-7 gap-1"
            >
              {Array.from({ length: firstDay }).map((_, index) => (
                <span key={`blank-${index}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, index) => {
                const date = new Date(year, month, index + 1);
                const dayNumber = index + 1;
                const weekend =
                  date.getDay() === 0 || date.getDay() === 6;
                const past = date < today;
                const isSelected =
                  selected?.getTime() === date.getTime();

                return (
                  <button
                    key={dayNumber}
                    type="button"
                    disabled={past}
                    aria-pressed={isSelected}
                    aria-label={formatLong(date)}
                    onClick={() => {
                      setSelected(date);
                      setCalError(false);
                    }}
                    className={`aspect-square min-w-0 rounded-xl text-xs font-semibold transition duration-200 ${
                      isSelected
                        ? "bg-[#29264e] text-white shadow-lg shadow-indigo-950/20"
                        : past
                          ? "cursor-not-allowed text-[#d0ced9]"
                          : weekend
                            ? "bg-violet-50/70 text-violet-700 hover:bg-violet-100"
                            : "text-[#45435c] hover:bg-white hover:text-violet-700 hover:shadow-sm"
                    }`}
                  >
                    {dayNumber}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-xl border border-[#eae8f1] bg-white px-4 py-3">
              {selected ? (
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-700">
                    ✓
                  </span>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-violet-600">
                      Selected date
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#343249]">
                      {formatLong(selected)}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-xs leading-6 text-[#777589]">
                  Select a date to request your appointment. Weekday and
                  weekend sessions are both available.
                </p>
              )}
            </div>

            {calError && (
              <p
                role="alert"
                className="mt-3 text-xs font-semibold text-red-600"
              >
                Please select a date before submitting your booking request.
              </p>
            )}
          </div>
        </div>
      )}

      {/* MESSAGE */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className=" text-lg text-violet-500">
            {mode === "book" ? "04" : "02"}
          </span>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#44435a]">
            Additional information
          </h4>
          <span className="h-px flex-1 bg-[#eeedf3]" />
        </div>

        <label htmlFor="fieldMessage" className={labelClass}>
          Anything we should know?{" "}
          <span className="font-normal italic text-[#9997a8]">
            (optional)
          </span>
        </label>
        <textarea
          id="fieldMessage"
          name="message"
          rows={3}
          placeholder="Who is learning, their age range, and what they hope to achieve..."
          className={`${inputClass} min-h-[100px] resize-y leading-6`}
        />
      </div>

      {/* SUBMIT */}
      <div className="border-t border-[#ecebf2] pt-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#191832] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(25,24,50,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-[0_14px_30px_rgba(76,55,145,0.22)] disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending"
            ? "Sending your request..."
            : mode === "book"
              ? "Submit booking request"
              : "Register my interest"}

          {status !== "sending" && (
            <span className="text-lg transition-transform group-hover:translate-x-1">
              →
            </span>
          )}
        </button>

        <p className="mt-4 text-center text-[10px] leading-5 text-[#9996a8]">
          Your information will only be used to respond to your enquiry.
          {mode === "book" && " Your first month is free."}
        </p>
      </div>

      {/* SUCCESS */}
      {status === "sent" && (
        <div
          id="formConfirm"
          role="status"
          className="scroll-mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              ✓
            </span>
            <div>
              <p className="text-sm font-bold text-emerald-900">
                Thank you — your request has been sent.
              </p>
              <p className="mt-1 text-xs text-emerald-800">
                We will reply to {sentTo || "your email"} to confirm
                the details.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={sendAnother}
            className="mt-4 text-xs font-bold text-emerald-800 underline underline-offset-4"
          >
            Send another request
          </button>
        </div>
      )}

      {/* ERROR */}
      {status === "error" && (
        <div
          id="formConfirm"
          role="alert"
          className="scroll-mt-8 rounded-2xl border border-red-200 bg-red-50 p-5"
        >
          <p className="text-sm font-bold text-red-900">
            Sorry, your request could not be submitted.
          </p>
          <p className="mt-2 text-xs leading-6 text-red-800">
            Please try again. If the problem continues, contact us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold underline"
            >
              {SITE.email}
            </a>
            .
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-bold text-red-900 underline underline-offset-4"
          >
            Contact us on WhatsApp
          </a>
        </div>
      )}
    </form>
  );
}
