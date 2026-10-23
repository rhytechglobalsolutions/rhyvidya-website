"use client";

import { useMemo, useState } from "react";
import { SITE, SLOT_OPTIONS, STAGE_OPTIONS, SUBJECTS } from "../data";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatLong(d: Date) {
  return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

type Props = {
  /** "book" shows the full booking flow (calendar); "enquire" is the interest form for coming-soon subjects. */
  mode?: "book" | "enquire";
  /** Fixed subject label (subject pages). Omit on the homepage to show the subject selector. */
  fixedSubject?: string;
  /** Show the Hindi stage selector (Hindi bookings). */
  showStage?: boolean;
  heading?: string;
  intro?: string;
};

export default function BookingForm({
  mode = "book",
  fixedSubject,
  showStage = false,
  heading,
  intro,
}: Props) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selected, setSelected] = useState<Date | null>(null);
  const [calError, setCalError] = useState(false);
  const [confirm, setConfirm] = useState<null | { mailto: string; text: string }>(null);
  const [copyStatus, setCopyStatus] = useState("");

  const needsDate = mode === "book";
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const minView = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxView = new Date(today.getFullYear(), today.getMonth() + 2, 1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (needsDate && !selected) {
      setCalError(true);
      document.getElementById("calGrid")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const data = new FormData(e.currentTarget);
    const subjectLabel =
      fixedSubject ?? String(data.get("subject") ?? "Hindi — live now");
    const lines = [
      mode === "book" ? "New RhyVidya booking request" : "New RhyVidya enquiry",
      "",
      `Name: ${data.get("name") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
    ];
    if (data.get("phone")) lines.push(`Phone: ${data.get("phone")}`);
    lines.push(`Subject: ${subjectLabel}`);
    if (showStage) lines.push(`Learning stage: ${data.get("stage") ?? "Not sure yet"}`);
    if (mode === "book") {
      lines.push(`Class format: ${data.get("format") ?? "1-to-1 class"}`);
      if (selected) lines.push(`Appointment date: ${formatLong(selected)}`);
      lines.push(`Preferred time: ${data.get("slot") ?? ""}`);
    }
    if (data.get("message")) lines.push("", "Notes:", String(data.get("message")));
    const text = lines.join("\n");
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `RhyVidya ${mode === "book" ? "booking" : "enquiry"} — ${data.get("name") ?? ""}`
    )}&body=${encodeURIComponent(text)}`;
    setConfirm({ mailto, text });
    setCopyStatus("");
    setTimeout(() => {
      document.getElementById("formConfirm")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  }

  async function copyDetails() {
    if (!confirm) return;
    try {
      await navigator.clipboard.writeText(confirm.text);
      setCopyStatus("Copied — paste it into any message or email.");
    } catch {
      setCopyStatus("Copy was blocked by the browser — use “Send by email” instead.");
    }
  }

  return (
    <form className="form-card" id="bookingForm" onSubmit={handleSubmit}>
      <h3>{heading ?? (mode === "book" ? "Booking request" : "Register your interest")}</h3>
      <p>
        {intro ??
          (mode === "book"
            ? "Your first month is free. Fields marked optional can be left blank — we will confirm the details by email."
            : "Tell us you are interested and we will email you first when enrolment opens. Fields marked optional can be left blank.")}
      </p>

      <div className="form-row">
        <div className="field">
          <label htmlFor="fieldName">Your name</label>
          <input id="fieldName" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="fieldEmail">Email</label>
          <input id="fieldEmail" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      {!fixedSubject && (
        <div className="field">
          <label htmlFor="subjectSelect">Subject</label>
          <select id="subjectSelect" name="subject" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            {SUBJECTS.map((s) => (
              <option key={s.slug} value={`${s.name} — ${s.status === "live" ? "live now" : "coming soon"}`}>
                {s.name} — {s.status === "live" ? "live now" : "coming soon"}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="form-row">
        <div className="field">
          <label htmlFor="fieldPhone">
            Phone <i>(optional)</i>
          </label>
          <input id="fieldPhone" name="phone" type="tel" autoComplete="tel" />
        </div>
        {showStage && (
          <div className="field">
            <label htmlFor="stageSelect">Hindi learning stage</label>
            <select id="stageSelect" name="stage" defaultValue="Not sure yet">
              {STAGE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {mode === "book" && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor="formatSelect">Class format</label>
              <select id="formatSelect" name="format" defaultValue="1-to-1 class">
                <option>1-to-1 class</option>
                <option>Group session</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="slotSelect">Preferred time</label>
              <select id="slotSelect" name="slot" defaultValue={SLOT_OPTIONS[0]}>
                {SLOT_OPTIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <p className="slot-note">
                Times shown in Toronto (Eastern) time. Your teacher confirms your final
                appointment by email.
              </p>
            </div>
          </div>

          <div className="field">
            <span className="field-label" id="calLabel">
              Choose your class date
            </span>
            <div className="calendar" role="group" aria-labelledby="calLabel">
              <div className="cal-head">
                <b>
                  {MONTHS[month]} {year}
                </b>
                <div className="cal-nav">
                  <button
                    type="button"
                    aria-label="Previous month"
                    disabled={viewDate <= minView}
                    onClick={() => setViewDate(new Date(year, month - 1, 1))}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    disabled={viewDate >= maxView}
                    onClick={() => setViewDate(new Date(year, month + 1, 1))}
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="cal-week" aria-hidden="true">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="cal-grid" id="calGrid">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <span key={`blank-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const d = new Date(year, month, i + 1);
                  const dow = d.getDay();
                  const weekend = dow === 0 || dow === 6;
                  const past = d < today;
                  const isSel = selected?.getTime() === d.getTime();
                  return (
                    <button
                      key={i}
                      type="button"
                      className={`cal-day${weekend ? " weekend" : ""}${isSel ? " selected" : ""}`}
                      disabled={past}
                      aria-label={`${formatLong(d)}${weekend ? " (weekend)" : ""}`}
                      onClick={() => {
                        setSelected(d);
                        setCalError(false);
                      }}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <p className="cal-selected">
                {selected ? (
                  <>
                    Selected: {formatLong(selected)}{" "}
                    <span>
                      — a {selected.getDay() === 0 || selected.getDay() === 6 ? "weekend" : "weekday"}{" "}
                      session, by appointment.
                    </span>
                  </>
                ) : (
                  <>
                    No date selected yet{" "}
                    <span>— weekday and weekend appointments are both available.</span>
                  </>
                )}
              </p>
              {calError && (
                <p className="cal-error">Please pick a date on the calendar so we can hold your appointment.</p>
              )}
            </div>
          </div>
        </>
      )}

      <div className="field">
        <label htmlFor="fieldMessage">
          Anything we should know? <i>(optional)</i>
        </label>
        <textarea
          id="fieldMessage"
          name="message"
          placeholder="Who is learning, their age range, and what they hope to achieve."
        />
      </div>

      <button className="button primary" type="submit">
        {mode === "book" ? "Submit booking request" : "Register my interest"}
      </button>

      {confirm && (
        <div className="form-confirm" id="formConfirm">
          <b>Your {mode === "book" ? "request" : "enquiry"} is ready to send.</b>
          <p>
            Tap “Send by email” to deliver it to {SITE.email} from your own mail app, or copy
            the details and reach us any way you like.
          </p>
          <a className="button primary" href={confirm.mailto}>
            Send by email
          </a>
          <button className="button secondary" type="button" onClick={copyDetails}>
            Copy request details
          </button>
          <span className="copy-status" role="status">
            {copyStatus}
          </span>
        </div>
      )}
    </form>
  );
}
