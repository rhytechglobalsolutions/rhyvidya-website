import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Coding Classes Online — Coming Soon",
  description:
    "Coding classes for Grades 1–8 are coming to RhyVidya — hands-on, project-based programming taught live online. We are hiring experienced Coding teachers now. Register your interest today and be first in line when enrolment opens.",
  alternates: { canonical: "/subjects/coding" },
  openGraph: {
    title: "Coding Classes Online — Coming Soon | RhyVidya",
    description:
      "Coding classes are coming to RhyVidya — live online, project-based programming classes. Teachers being hired now. Register your interest today.",
    url: "/subjects/coding",
    type: "website",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Coding — Live Online Classes (Coming Soon)",
      description:
        "Coding classes are coming to RhyVidya, taught live online. RhyVidya is hiring experienced Coding teachers now. Register your interest to be first in line when enrolment opens.",
      provider: { "@id": "https://www.rhyvidya.com/#organization" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rhyvidya.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Coding",
          item: "https://www.rhyvidya.com/subjects/coding",
        },
      ],
    },
  ],
};

export default function CodingPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="subject-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> · <Link href="/#subjects">Subjects</Link> · Coding
          </div>
          <span className="status-pill soon">Coming soon · Teachers being hired</span>
          <h1>
            Coding is <em>coming</em> to RhyVidya.
          </h1>
          <p className="lede">
            Coding classes are coming to RhyVidya — hands-on, project-based programming for
            Grades 1–8, taught live online, where students learn by building real things. We are
            hiring experienced Coding teachers now, and classes begin as soon as our teachers are
            onboard. Register your interest now and be first in line when enrolment opens.
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
              Coding on RhyVidya will follow the same simple, supported route as every subject
              on the platform.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>Learn by building</h3>
              <p>
                Live teaching built around real projects — students write code from the first
                class and see their ideas run, with a teacher guiding every step.
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
                Register your interest today and we will email you as soon as Coding enrolment
                opens — registered students are placed first.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="teacher">
        <div className="wrap">
          <div className="section-head">
            <h2>Teachers being hired.</h2>
            <p>
              Like every RhyVidya subject, Coding will be taught live online by an experienced
              teacher — never a recording alone. We are hiring our Coding teachers now, and
              classes start as soon as they are onboard. Teaching Coding and interested in
              joining RhyVidya? Email us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
          <p className="teachers-link">
            <Link href="/teachers">Meet RhyVidya's current teachers →</Link>
          </p>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Enquire — Coding</p>
            <h2>Be first in line for Coding.</h2>
            <p>
              Tell us who would like to learn Coding and we will email you from{" "}
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
          <BookingForm mode="enquire" fixedSubject="Coding — coming soon" />
        </div>
      </section>
    </>
  );
}
