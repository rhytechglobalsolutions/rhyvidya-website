import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Learn Tamil Online — Coming Soon, with Saraswathi",
  description:
    "Tamil is the next subject opening on RhyVidya — live online classes with Saraswathi, the experienced teacher behind our Hindi classes. Register your interest today and be first in line when enrolment opens.",
  alternates: { canonical: "/subjects/tamil" },
  openGraph: {
    title: "Learn Tamil Online — Coming Soon | RhyVidya",
    description:
      "Tamil is coming next to RhyVidya — live online classes with Saraswathi. Register your interest today.",
    url: "/subjects/tamil",
    type: "website",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Tamil — Live Online Classes (Coming Soon)",
      description:
        "Tamil is the next subject opening on RhyVidya, taught live online by Saraswathi. Register your interest to be first in line when enrolment opens.",
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
          name: "Tamil",
          item: "https://www.rhyvidya.com/subjects/tamil",
        },
      ],
    },
  ],
};

export default function TamilPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="subject-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> · <Link href="/#subjects">Subjects</Link> · Tamil
          </div>
          <span className="status-pill soon">Next subject · Starting soon</span>
          <h1>
            Tamil is <em>coming next</em> to RhyVidya.
          </h1>
          <p className="lede">
            Tamil is the next subject opening on RhyVidya, taught by Saraswathi — the same
            experienced teacher behind our Hindi classes, with 25+ years of teaching experience.
            Register your interest now and be first in line when enrolment opens.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#bookingForm">
              Register your interest
            </a>
            <Link className="button secondary" href="/subjects/hindi">
              Start with Hindi today
            </Link>
          </div>
        </div>
      </section>

      <section className="route">
        <div className="wrap">
          <div className="section-head">
            <h2>What to expect.</h2>
            <p>
              Tamil on RhyVidya will follow the same simple, supported route as every subject on
              the platform.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>Live, interactive teaching</h3>
              <p>
                Real classes with a real teacher — speak, listen, read, and write Tamil live,
                with personal guidance at every stage.
              </p>
            </article>
            <article className="step">
              <span className="step-num">02</span>
              <h3>1-to-1 and group options</h3>
              <p>
                Private lessons or small group sessions, on weekdays and weekends — every class
                by appointment, on the platform that suits you.
              </p>
            </article>
            <article className="step">
              <span className="step-num">03</span>
              <h3>First to know at launch</h3>
              <p>
                Register your interest today and we will email you as soon as Tamil enrolment
                opens — registered students are placed first.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="teacher">
        <div className="wrap teacher-grid">
          <div className="board" aria-label="Chalkboard with Tamil greeting">
            <div className="hindi tamil-script" lang="ta">
              வணக்கம்!
            </div>
            <div className="chalk">Vanakkam — welcome.</div>
            <div className="lesson">Tamil classes start soon</div>
          </div>
          <div className="teacher-copy">
            <div className="teacher-label">Your Tamil teacher</div>
            <h2>Saraswathi.</h2>
            <p>
              The founding teacher of RhyVidya, Saraswathi brings more than 25 years of teaching
              experience to her classes. She already teaches our launch subject, Hindi, live
              online to students worldwide — and she will open Tamil next, with the same personal,
              level-aware teaching.
            </p>
            <div className="teacher-stat">
              <strong>25+ years</strong>
              <span>of teaching experience, live online to students worldwide.</span>
            </div>
          </div>
        </div>
        <div className="wrap">
          <p className="teachers-link">
            <Link href="/teachers">Meet all of RhyVidya's teachers →</Link>
          </p>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Enquire — Tamil</p>
            <h2>Be first in line for Tamil.</h2>
            <p>
              Tell us who would like to learn Tamil and we will email you from{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> the moment enrolment opens. No
              payment now — just your place in the queue.
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
              Prefer to chat first? You can also reach us on WhatsApp — the enquiry form is
              still the fastest way to hold your place.
            </p>
            <a className="wa-text-link" href={SITE.whatsapp} target="_blank" rel="noopener">
              Chat on WhatsApp →
            </a>
          </div>
          <BookingForm mode="enquire" fixedSubject="Tamil — coming soon" />
        </div>
      </section>
    </>
  );
}
