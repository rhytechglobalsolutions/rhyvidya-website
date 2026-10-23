import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import StageFinder from "../../components/StageFinder";
import { HINDI_LADDER, HINDI_STAGES, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Learn Hindi Online — Live Classes with Saraswathi",
  description:
    "Live online Hindi classes with Saraswathi, a teacher of 25+ years — from Parichaya to Praveen. Beginner to advanced stages, 1-to-1 and group classes, weekday and weekend by appointment. First month free.",
  alternates: { canonical: "/subjects/hindi" },
  openGraph: {
    title: "Learn Hindi Online — Live Classes with Saraswathi | RhyVidya",
    description:
      "Live online Hindi classes with Saraswathi, a teacher of 25+ years — from Parichaya to Praveen. First month free.",
    url: "/subjects/hindi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Hindi — Live Online Classes",
      description:
        "Live online Hindi classes with Saraswathi (25+ years of teaching experience), from Parichaya (Introductory) to Praveen (degree-level proficiency). 1-to-1 and group sessions, weekday and weekend, by appointment. First month free.",
      provider: { "@id": "https://www.rhyvidya.com/#organization" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: { "@type": "Person", name: "Saraswathi" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rhyvidya.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hindi",
          item: "https://www.rhyvidya.com/subjects/hindi",
        },
      ],
    },
  ],
};

export default function HindiPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="subject-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> · <Link href="/#subjects">Subjects</Link> · Hindi
          </div>
          <span className="status-pill">Launch subject · Live now</span>
          <h1>
            Learn Hindi live with <em>Saraswathi</em>.
          </h1>
          <p className="lede">
            Hindi is RhyVidya's launch subject — live online classes with Saraswathi, a teacher of
            25+ years, from your very first words (Parichaya) all the way to degree-level
            proficiency (Praveen). Your first month is free.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#bookingForm">
              Book your free first month
            </a>
            <a className="button secondary" href="#stage-finder">
              Find my Hindi stage
            </a>
          </div>
        </div>
      </section>

      <section className="stage-finder" id="stage-finder">
        <div className="wrap finder-grid">
          <div className="finder-copy">
            <h2>Where should you begin in Hindi?</h2>
            <p>
              Answer two quick questions for a starting-stage suggestion. Your teacher can
              confirm the best fit when registration opens.
            </p>
          </div>
          <StageFinder />
        </div>
      </section>

      <section className="curriculum" id="levels">
        <div className="wrap">
          <div className="section-head">
            <h2>Hindi, in three thoughtful stages.</h2>
            <p>
              Every stage balances speaking with Devanagari reading and writing, so progress
              feels useful — not abstract.
            </p>
          </div>
          <div className="level-grid">
            {HINDI_STAGES.map((s) => (
              <article className="level-card" key={s.tag}>
                <div className="level-tag">{s.tag}</div>
                <div className="script-glyph" lang="hi">
                  {s.glyph}
                </div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="ladder-head">
            <h3>The Hindi class ladder.</h3>
            <p>
              RhyVidya's stages follow the recognised Hindi class path — from your very first
              words all the way to degree-level proficiency. Saraswathi places every student on
              the right rung and prepares you for the next.
            </p>
          </div>
          <ol className="class-ladder">
            {HINDI_LADDER.map((rung, i) => (
              <li key={rung.name}>
                <span className="ladder-step">{i + 1}</span>
                <div>
                  <h4>
                    {rung.name} <span>{rung.level}</span>
                  </h4>
                  <p>{rung.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="teacher" id="teacher">
        <div className="wrap teacher-grid">
          <div className="board" aria-label="Chalkboard with Hindi lesson greeting">
            <div className="hindi" lang="hi">
              आप कैसे हैं?
            </div>
            <div className="chalk">How are you?</div>
            <div className="lesson">Today: speaking with confidence</div>
          </div>
          <div className="teacher-copy">
            <div className="teacher-label">Your Hindi teacher</div>
            <h2>Saraswathi — 25+ years of teaching.</h2>
            <p>
              Based in India and teaching students around the world, Saraswathi leads personal
              online Hindi lessons on Google Meet, Zoho Meeting, YouTube, or WhatsApp — using
              live video, screen sharing, and an interactive teaching board.
            </p>
            <div className="teacher-stat">
              <strong>25+ years</strong>
              <span>of Hindi teaching experience — from first words to degree-level fluency.</span>
            </div>
            <div className="teacher-points">
              <div className="teacher-point">
                <b>Personal guidance</b>Level-aware lessons shaped around each student's goal.
              </div>
              <div className="teacher-point">
                <b>Interactive classes</b>Ask questions, practise aloud, and learn from a shared
                board.
              </div>
              <div className="teacher-point">
                <b>Flexible appointments</b>Book 1:1 time around available teaching slots.
              </div>
              <div className="teacher-point">
                <b>Between-class support</b>Review videos and send questions through the platform.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="formats" id="formats">
        <div className="wrap">
          <div className="section-head">
            <h2>Learn the way that suits you.</h2>
            <p>
              Every Hindi class is a live online class with Saraswathi — on Google Meet, Zoho
              Meeting, YouTube, or WhatsApp — and every class is by appointment, so your time is
              reserved for you.
            </p>
          </div>
          <div className="format-grid">
            <article className="format-card">
              <b>1-to-1 classes</b>
              <p>
                Private lessons shaped entirely around your pace, your stage, and your goals —
                the fastest route to confident Hindi.
              </p>
            </article>
            <article className="format-card">
              <b>Group sessions</b>
              <p>
                Learn alongside a small group of students at your stage — practise conversation
                together and keep each other motivated.
              </p>
            </article>
            <article className="format-card">
              <b>Weekday sessions</b>
              <p>
                Weekday appointments that fit around school and work — mornings and evenings,
                Monday to Friday.
              </p>
            </article>
            <article className="format-card">
              <b>Weekend sessions</b>
              <p>
                Saturday and Sunday appointments for busy weeks — same live teaching, on the days
                you are free.
              </p>
            </article>
          </div>
          <p className="formats-note">
            All sessions — 1-to-1 and group, weekday and weekend — are available based on
            appointment. <a href="#bookingForm">Pick your date on the booking calendar</a> and we
            confirm your online class link by email.
          </p>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Book Hindi</p>
            <h2>Book your free first month of Hindi.</h2>
            <p>
              Choose your stage, format, date, and time — Saraswathi confirms your appointment
              and online class link by email from <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              Classes run on Google Meet, Zoho Meeting, YouTube, or WhatsApp — whichever suits
              you best.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="cd-label">Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="contact-detail">
                <span className="cd-label">WhatsApp</span>
                <a href={SITE.whatsappPlain} target="_blank" rel="noopener">
                  Chat with us
                </a>
              </div>
            </div>
            <p className="contact-alt">
              Prefer to chat first? You can also reach us on WhatsApp — the booking form is
              still the fastest way to reserve a class.
            </p>
            <a className="button whatsapp" href={SITE.whatsapp} target="_blank" rel="noopener">
              Chat on WhatsApp
            </a>
          </div>
          <BookingForm fixedSubject="Hindi — live now" showStage />
        </div>
      </section>
    </>
  );
}
