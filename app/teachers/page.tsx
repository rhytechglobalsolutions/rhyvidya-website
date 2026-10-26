import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { OG_IMAGE, SITE } from "../data";

export const metadata: Metadata = {
  title: "Meet Our Teachers",
  description:
    "Meet RhyVidya's teachers — Saraswathi (Hindi & Tamil, 25+ years of teaching experience), Mr Athi Siva Krishnan (Physics & Mathematics), and Mrs Vijaya (Physics & Mathematics). Live online classes, 1-to-1 and group, by appointment.",
  alternates: { canonical: "/teachers" },
  openGraph: {
    title: "Meet Our Teachers | RhyVidya",
    description:
      "Experienced teachers, teaching live online — Saraswathi, Mr Athi Siva Krishnan, and Mrs Vijaya across Hindi, Tamil, Physics, and Mathematics.",
    url: "/teachers",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Teachers | RhyVidya",
    description:
      "Experienced teachers, teaching live online — Saraswathi, Mr Athi Siva Krishnan, and Mrs Vijaya across Hindi, Tamil, Physics, and Mathematics.",
    images: [SITE.logo],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "RhyVidya teachers",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        name: "Saraswathi",
        jobTitle: "Teacher",
        description:
          "RhyVidya's founding teacher, with 25+ years of teaching experience. She teaches Hindi and Tamil live online to students worldwide.",
        knowsAbout: ["Hindi", "Tamil"],
        worksFor: { "@id": "https://www.rhyvidya.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Person",
        name: "Mr Athi Siva Krishnan",
        jobTitle: "Teacher",
        description:
          "Teaches Physics and Mathematics on RhyVidya in live online classes, 1-to-1 and group, by appointment.",
        knowsAbout: ["Physics", "Mathematics"],
        worksFor: { "@id": "https://www.rhyvidya.com/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Person",
        name: "Mrs Vijaya",
        jobTitle: "Teacher",
        description:
          "Teaches Physics and Mathematics on RhyVidya in live online classes, 1-to-1 and group, by appointment.",
        knowsAbout: ["Physics", "Mathematics"],
        worksFor: { "@id": "https://www.rhyvidya.com/#organization" },
      },
    },
  ],
};

export default function TeachersPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="subject-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> · Teachers
          </div>
          <h1>
            Meet our <em>teachers</em>.
          </h1>
          <p className="lede">
            Every RhyVidya class is taught live by an experienced teacher — never a recording
            alone, never an anonymous tutor pool. Meet the teachers behind Hindi, Tamil,
            Physics, and Mathematics.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/#bookingForm">
              Book a class
            </Link>
            <Link className="button secondary" href="/#subjects">
              Explore subjects
            </Link>
          </div>
        </div>
      </section>

      <section className="teacher">
        <div className="wrap teacher-grid">
          <div className="board" aria-label="Chalkboard with greetings in Hindi and Tamil">
            <div className="hindi" lang="hi">
              नमस्ते!
            </div>
            <div className="hindi tamil-script" lang="ta">
              வணக்கம்!
            </div>
            <div className="chalk">Hello — in every language we teach.</div>
            <div className="lesson">Live classes, worldwide</div>
          </div>
          <div className="teacher-copy">
            <div className="teacher-label">Our founding teacher · Hindi · Tamil</div>
            <h2>Saraswathi.</h2>
            <p>
              Teaching students around the world online, Saraswathi brings more
              than 25 years of teaching experience to every class. She teaches RhyVidya's
              Hindi classes — from first words to degree-level proficiency — and she will
              open Tamil next, with the same personal, level-aware teaching. Her lessons run
              live on Google Meet, Zoho Meeting, YouTube, or WhatsApp, using live video,
              screen sharing, and an interactive teaching board.
            </p>
            <div className="teacher-stat">
              <strong>25+ years</strong>
              <span>of teaching experience — from a student's first words to advanced study.</span>
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
                <b>Flexible appointments</b>1-to-1 and group classes, on weekdays and weekends.
              </div>
              <div className="teacher-point">
                <b>Between-class support</b>Review videos and send questions through the platform.
              </div>
            </div>
            <div className="hero-actions" style={{ marginTop: 30 }}>
              <Link className="button primary" href="/#bookingForm">
                Book a class
              </Link>
              <Link className="button secondary" href="/subjects/hindi">
                Explore Hindi
              </Link>
            </div>
            <p style={{ marginTop: 16 }}>
              <Link className="card-cta" href="/subjects/tamil">
                Tamil is coming next with Saraswathi →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="subjects">
        <div className="wrap">
          <div className="section-head">
            <h2>Physics and Mathematics.</h2>
            <p>
              Two more experienced teachers bring RhyVidya's science and maths subjects to
              life — live online, in 1-to-1 and group classes, all by appointment.
            </p>
          </div>
          <div className="teacher-list">
            <article className="teacher-card">
              <h3>Mr Athi Siva Krishnan</h3>
              <div className="t-subjects">Physics · Mathematics</div>
              <p>
                Teaches Physics and Mathematics on RhyVidya — clear, patient, step-by-step
                teaching that builds real understanding, in live online classes by
                appointment.
              </p>
              <Link className="card-cta" href="/#bookingForm">
                Book a class →
              </Link>
            </article>
            <article className="teacher-card">
              <h3>Mrs Vijaya</h3>
              <div className="t-subjects">Physics · Mathematics</div>
              <p>
                Teaches Physics and Mathematics alongside Mr Athi Siva Krishnan, working
                through problems step by step in live online classes until the method clicks.
              </p>
              <Link className="card-cta" href="/subjects/mathematics">
                Explore Mathematics →
              </Link>
            </article>
          </div>
          <p className="teachers-link">
            Ready to start?{" "}
            <Link href="/#bookingForm">Book your free first month →</Link>
          </p>
        </div>
      </section>

      <section className="closing">
        <div className="wrap closing-card">
          <div>
            <h2>Learn live with a teacher who knows your name.</h2>
            <p>
              Send a booking request for any subject and we will confirm your stage, your
              class time, and your online class link by email.
            </p>
          </div>
          <div className="closing-actions">
            <Link className="button" href="/#bookingForm">
              Book your free month
            </Link>
            <a className="wa-link" href={SITE.whatsapp} target="_blank" rel="noopener">
              or chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
