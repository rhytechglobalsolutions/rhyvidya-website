import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/booking — receives every RhyVidya website form (homepage booking,
 * Hindi booking, coming-soon subject enquiries) and emails it to the team
 * inbox via SMTP. Configuration comes from environment variables only:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM
 * No credentials live in the repo. If SMTP is not configured the route
 * answers 503 with a generic JSON error so the form can show its fallback
 * (WhatsApp / direct email) instead of failing silently.
 */

const CAPS = {
  name: 100,
  email: 254,
  phone: 30,
  subject: 120,
  stage: 80,
  format: 40,
  date: 60,
  slot: 60,
  message: 2000,
} as const;

type Field = keyof typeof CAPS;

function clean(value: unknown, cap: number): string {
  if (typeof value !== "string") return "";
  // Strip CR/LF and other control characters from single-line use, then cap.
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, cap);
}

function cleanMessage(value: unknown, cap: number): string {
  if (typeof value !== "string") return "";
  // Notes may span lines; keep newlines, drop other control characters.
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]+/g, " ")
    .trim()
    .slice(0, cap);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fail(status: number, error: string, message: string) {
  return NextResponse.json({ ok: false, error, message }, { status });
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return fail(400, "invalid_request", "Please check the form and try again.");
  }
  if (!raw || typeof raw !== "object") {
    return fail(400, "invalid_request", "Please check the form and try again.");
  }
  const body = raw as Record<string, unknown>;

  // Honeypot: real visitors never fill the hidden "website" field. Bots that
  // do get a silent success response and nothing is sent.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const mode = body.mode === "enquire" ? "enquire" : "book";
  const fields: Record<Field, string> = {
    name: clean(body.name, CAPS.name),
    email: clean(body.email, CAPS.email),
    phone: clean(body.phone, CAPS.phone),
    subject: clean(body.subject, CAPS.subject),
    stage: clean(body.stage, CAPS.stage),
    format: clean(body.format, CAPS.format),
    date: clean(body.date, CAPS.date),
    slot: clean(body.slot, CAPS.slot),
    message: cleanMessage(body.message, CAPS.message),
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email);
  if (!fields.name || !emailOk || !fields.subject) {
    return fail(400, "validation", "Please check the form and try again.");
  }
  if (mode === "book" && !fields.date) {
    return fail(400, "validation", "Please pick a class date and try again.");
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const MAIL_TO = (process.env.MAIL_TO || "info@rhyvidya.com").trim();
  const MAIL_FROM = (process.env.MAIL_FROM || SMTP_USER || "").trim();
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_FROM) {
    // Not a crash: the deployment simply has no mail transport yet.
    console.error("booking: SMTP environment is not configured");
    return fail(
      503,
      "mail_not_configured",
      "Email sending is not set up yet — please reach us on WhatsApp or at info@rhyvidya.com."
    );
  }
  const port = Number.parseInt(SMTP_PORT || "465", 10) || 465;

  const kind = mode === "book" ? "booking" : "enquiry";
  const rows: Array<[string, string]> = [
    ["Type", mode === "book" ? "Booking request" : "Enquiry"],
    ["Name", fields.name],
    ["Email", fields.email],
  ];
  if (fields.phone) rows.push(["Phone", fields.phone]);
  rows.push(["Subject", fields.subject]);
  if (fields.stage) rows.push(["Learning stage", fields.stage]);
  if (mode === "book") {
    if (fields.format) rows.push(["Class format", fields.format]);
    if (fields.date) rows.push(["Appointment date", fields.date]);
    if (fields.slot) rows.push(["Preferred time", fields.slot]);
  }
  if (fields.message) rows.push(["Notes", fields.message]);

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    "\n\n— Sent from the rhyvidya.com website form.";
  const htmlRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:700;vertical-align:top">${escapeHtml(
          k
        )}</td><td style="padding:6px 0">${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");
  const html = `<p>A new RhyVidya ${kind} was submitted on rhyvidya.com:</p><table cellpadding="0" cellspacing="0">${htmlRows}</table><p style="color:#666;font-size:13px">Reply to this email to answer the visitor directly.</p>`;

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    await transport.sendMail({
      from: `"RhyVidya Website" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: fields.email,
      subject: `RhyVidya ${kind} — ${fields.subject} — ${fields.name}`,
      text,
      html,
    });
  } catch (err) {
    // Log server-side only; the client gets a generic message, never SMTP details.
    console.error("booking: send failed", err instanceof Error ? err.message : "unknown error");
    return fail(
      502,
      "send_failed",
      "Sorry — your request didn't go through. Please try again, message us on WhatsApp, or email info@rhyvidya.com."
    );
  }

  return NextResponse.json({ ok: true });
}
