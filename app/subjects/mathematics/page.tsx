import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Mathematics Classes Online — Live Classes",
  description:
    "Live online Mathematics classes with Mr Athi Siva Krishnan and Mrs Vijaya — problems worked through step by step, 1-to-1 and group classes by appointment. First month free.",
  alternates: { canonical: "/subjects/mathematics" },
  openGraph: {
    title: "Mathematics Classes Online | RhyVidya",
    description:
      "Live online Mathematics classes with Mr Athi Siva Krishnan and Mrs Vijaya. Book a class today.",
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
      name: "Mathematics — Live Online Classes",
      description:
        "Live online Mathematics classes taught by Mr Athi Siva Krishnan and Mrs Vijaya. 1-to-1 and group sessions, weekday and weekend, by appointment. First month free.",
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
          <span className="status-pill">Live now · Teachers available</span>
          <h1>
            Learn Mathematics live, <em>step by step</em>.
          </h1>
          <p className="lede">
            Mathematics classes are available now on RhyVidya — live online teaching with
            Mr Athi Siva Krishnan and Mrs Vijaya that works through problems step by step,
            building confidence as well as correct answers. Your first month is free.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#bookingForm">
              Book your free first month
            </a>
            <Link className="button secondary" href="/teachers">
              Meet your teachers
            </Link>
          </div>
        </div>
      </section>

      <section className="route">
        <div className="wrap">
          <div className="section-head">
            <h2>What to expect.</h2>
            <p>
              Mathematics on RhyVidya follows the same simple, supported route as every
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
              <h3>Book by appointment</h3>
              <p>
                Pick your date and time on the booking calendar and we confirm your
                appointment and online class link by email.
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
          <p className="teachers-link">
            <Link href="/teachers">Meet all of RhyVidya's teachers →</Link>
          </p>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Book Mathematics</p>
            <h2>Book your free first month of Mathematics.</h2>
            <p>
              Choose your format, date, and time — we confirm your appointment and online
              class link by email from <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              Classes run on Google Meet, Zoho Meeting, YouTube, or WhatsApp — whichever
              suits you best.
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
            <a className="wa-text-link" href={SITE.whatsapp} target="_blank" rel="noopener">
              Chat on WhatsApp →
            </a>
          </div>
          <BookingForm fixedSubject="Mathematics — live now" />
        </div>
      </section>
    </>
  );
}
