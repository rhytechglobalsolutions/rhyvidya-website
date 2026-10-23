import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Physics Classes Online — Coming Soon",
  description:
    "Physics is coming to RhyVidya — live online classes with Mr Athi Siva Krishnan and Mrs Mallika, explaining concepts clearly and patiently. Register your interest today and be first in line when enrolment opens.",
  alternates: { canonical: "/subjects/physics" },
  openGraph: {
    title: "Physics Classes Online — Coming Soon | RhyVidya",
    description:
      "Physics is coming to RhyVidya — live online classes with Mr Athi Siva Krishnan and Mrs Mallika. Register your interest today.",
    url: "/subjects/physics",
    type: "website",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Physics — Live Online Classes (Coming Soon)",
      description:
        "Physics is coming to RhyVidya, taught live online by Mr Athi Siva Krishnan and Mrs Mallika. Register your interest to be first in line when enrolment opens.",
      provider: { "@id": "https://www.rhyvidya.com/#organization" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: [
          { "@type": "Person", name: "Athi Siva Krishnan" },
          { "@type": "Person", name: "Mallika" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rhyvidya.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Physics",
          item: "https://www.rhyvidya.com/subjects/physics",
        },
      ],
    },
  ],
};

export default function PhysicsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="subject-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> · <Link href="/#subjects">Subjects</Link> · Physics
          </div>
          <span className="status-pill soon">Coming soon</span>
          <h1>
            Physics is <em>coming</em> to RhyVidya.
          </h1>
          <p className="lede">
            Physics is coming to RhyVidya — concepts explained clearly and patiently in live
            classes with Mr Athi Siva Krishnan and Mrs Mallika, so students build real
            understanding step by step. Register your interest now and be first in line when
            enrolment opens.
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
              Physics on RhyVidya will follow the same simple, supported route as every subject
              on the platform.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>Concepts, clearly explained</h3>
              <p>
                Live teaching that works through ideas patiently — diagrams, examples, and
                questions answered in real time, not just formulas to memorise.
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
                Register your interest today and we will email you as soon as Physics enrolment
                opens — registered students are placed first.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="teacher">
        <div className="wrap">
          <div className="section-head">
            <h2>Your Physics teachers.</h2>
            <p>Two experienced teachers, one goal — Physics that actually makes sense.</p>
          </div>
          <div className="teacher-list">
            <article className="teacher-card">
              <h3>Mr Athi Siva Krishnan</h3>
              <div className="t-subjects">Physics · Mathematics</div>
              <p>
                Teaches Physics and Mathematics on RhyVidya — clear, patient, step-by-step
                teaching that builds real understanding and exam confidence.
              </p>
            </article>
            <article className="teacher-card">
              <h3>Mrs Mallika</h3>
              <div className="t-subjects">Physics</div>
              <p>
                Teaches Physics alongside Mr Athi Siva Krishnan, explaining concepts carefully
                so students keep up, ask questions freely, and build confidence.
              </p>
            </article>
          </div>
          <p className="teachers-link">
            <Link href="/teachers">Meet all of RhyVidya's teachers →</Link>
          </p>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Enquire — Physics</p>
            <h2>Be first in line for Physics.</h2>
            <p>
              Tell us who would like to learn Physics and we will email you from{" "}
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
          <BookingForm mode="enquire" fixedSubject="Physics — coming soon" />
        </div>
      </section>
    </>
  );
}
