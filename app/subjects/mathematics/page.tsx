import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Mathematics Classes Online — Coming Soon",
  description:
    "Mathematics is coming to RhyVidya — live online classes with Mr Athi Siva Krishnan and Mrs Vijaya, working through problems step by step. Register your interest today and be first in line when enrolment opens.",
  alternates: { canonical: "/subjects/mathematics" },
  openGraph: {
    title: "Mathematics Classes Online — Coming Soon | RhyVidya",
    description:
      "Mathematics is coming to RhyVidya — live online classes with Mr Athi Siva Krishnan and Mrs Vijaya. Register your interest today.",
    url: "/subjects/mathematics",
    type: "website",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Mathematics — Live Online Classes (Coming Soon)",
      description:
        "Mathematics is coming to RhyVidya, taught live online by Mr Athi Siva Krishnan and Mrs Vijaya. Register your interest to be first in line when enrolment opens.",
      provider: { "@id": "https://www.rhyvidya.com/#organization" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: [
          { "@type": "Person", name: "Athi Siva Krishnan" },
          { "@type": "Person", name: "Vijaya" },
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
          name: "Mathematics",
          item: "https://www.rhyvidya.com/subjects/mathematics",
        },
      ],
    },
  ],
};

export default function MathematicsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="subject-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> · <Link href="/#subjects">Subjects</Link> · Mathematics
          </div>
          <span className="status-pill soon">Coming soon</span>
          <h1>
            Mathematics is <em>coming</em> to RhyVidya.
          </h1>
          <p className="lede">
            Mathematics is coming to RhyVidya — live teaching with Mr Athi Siva Krishnan and
            Mrs Vijaya that works through problems step by step, building confidence as well as
            correct answers. Register your interest now and be first in line when enrolment
            opens.
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
              Mathematics on RhyVidya will follow the same simple, supported route as every
              subject on the platform.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>Step-by-step problem solving</h3>
              <p>
                Live teaching that works through problems method by method — students see how
                each answer is built, not just what it is.
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
                Register your interest today and we will email you as soon as Mathematics
                enrolment opens — registered students are placed first.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="teacher">
        <div className="wrap">
          <div className="section-head">
            <h2>Your Mathematics teachers.</h2>
            <p>Two experienced teachers, one goal — Mathematics that builds confidence.</p>
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
              <h3>Mrs Vijaya</h3>
              <div className="t-subjects">Mathematics</div>
              <p>
                Teaches Mathematics alongside Mr Athi Siva Krishnan, working through problems
                step by step until the method clicks and confidence grows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Enquire — Mathematics</p>
            <h2>Be first in line for Mathematics.</h2>
            <p>
              Tell us who would like to learn Mathematics and we will email you from{" "}
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
            <a className="button whatsapp" href={SITE.whatsapp} target="_blank" rel="noopener">
              Chat on WhatsApp
            </a>
          </div>
          <BookingForm mode="enquire" fixedSubject="Mathematics — coming soon" />
        </div>
      </section>
    </>
  );
}
