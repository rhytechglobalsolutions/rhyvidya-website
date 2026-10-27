import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "English Classes Online — Coming Soon",
  description:
    "English classes are coming to RhyVidya — reading comprehension, grammar, spelling, vocabulary, and writing, taught live online for all school grades. We are hiring experienced English teachers now. Register your interest today and be first in line when enrolment opens.",
  alternates: { canonical: "/subjects/english" },
  openGraph: {
    title: "English Classes Online — Coming Soon | RhyVidya",
    description:
      "English classes are coming to RhyVidya — live online classes covering reading comprehension, grammar, spelling, vocabulary, and writing. Teachers being hired now. Register your interest today.",
    url: "/subjects/english",
    type: "website",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "English — Live Online Classes (Coming Soon)",
      description:
        "English classes are coming to RhyVidya, taught live online — reading comprehension, grammar, spelling, vocabulary, and writing for all school grades. RhyVidya is hiring experienced English teachers now. Register your interest to be first in line when enrolment opens.",
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
          name: "English",
          item: "https://www.rhyvidya.com/subjects/english",
        },
      ],
    },
  ],
};

export default function EnglishPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="subject-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> · <Link href="/#subjects">Subjects</Link> · English
          </div>
          <span className="status-pill soon">Coming soon · Teachers being hired</span>
          <h1>
            English is <em>coming</em> to RhyVidya.
          </h1>
          <p className="lede">
            English classes are coming to RhyVidya — complete language-arts teaching for all
            school grades, covering reading comprehension, grammar, spelling, vocabulary, and
            writing, taught live online. We are hiring experienced English teachers now, and
            classes begin as soon as our teachers are onboard. Register your interest now and
            be first in line when enrolment opens.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#bookingForm">
              Register your interest
            </a>
            <Link className="button secondary" href="/subjects/mathematics">
              Start with Mathematics today
            </Link>
          </div>
        </div>
      </section>

      <section className="route">
        <div className="wrap">
          <div className="section-head">
            <h2>What to expect.</h2>
            <p>
              English on RhyVidya will follow the same simple, supported route as every subject
              on the platform — built on the five skills that make strong readers and writers.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>All five language skills</h3>
              <p>
                Reading comprehension, grammar, spelling, vocabulary, and writing — taught
                together, so students understand what they read and express themselves
                clearly.
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
                Register your interest today and we will email you as soon as English enrolment
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
              Like every RhyVidya subject, English will be taught live online by an experienced
              teacher — never a recording alone. We are hiring our English teachers now, and
              classes start as soon as they are onboard. Teaching English and interested in
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
            <p className="contact-label">Enquire — English</p>
            <h2>Be first in line for English.</h2>
            <p>
              Tell us who would like to learn English and we will email you from{" "}
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
          <BookingForm mode="enquire" fixedSubject="English — coming soon" />
        </div>
      </section>
    </>
  );
}
