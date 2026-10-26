import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Physics Classes Online — Live Classes with Mr Athi Siva Krishnan",
  description:
    "Live online Physics classes with Mr Athi Siva Krishnan — concepts explained clearly and patiently, 1-to-1 and group classes by appointment. First month free.",
  alternates: { canonical: "/subjects/physics" },
  openGraph: {
    title: "Physics Classes Online | RhyVidya",
    description:
      "Live online Physics classes with Mr Athi Siva Krishnan — concepts explained clearly and patiently. Book a class today.",
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
      name: "Physics — Live Online Classes",
      description:
        "Live online Physics classes taught by Mr Athi Siva Krishnan. 1-to-1 and group sessions, weekday and weekend, by appointment. First month free.",
      provider: { "@id": "https://www.rhyvidya.com/#organization" },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: [{ "@type": "Person", name: "Athi Siva Krishnan" }],
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
          <span className="status-pill">Live now · Teacher available</span>
          <h1>
            Learn Physics live with <em>Mr Athi Siva Krishnan</em>.
          </h1>
          <p className="lede">
            Physics classes are available now on RhyVidya — concepts explained clearly and
            patiently in live online classes with Mr Athi Siva Krishnan, so students build
            real understanding step by step. Your first month is free.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#bookingForm">
              Book your free first month
            </a>
            <Link className="button secondary" href="/teachers">
              Meet your teacher
            </Link>
          </div>
        </div>
      </section>

      <section className="route">
        <div className="wrap">
          <div className="section-head">
            <h2>What to expect.</h2>
            <p>
              Physics on RhyVidya follows the same simple, supported route as every subject
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
            <h2>Your Physics teacher.</h2>
            <p>An experienced teacher, one goal — Physics that actually makes sense.</p>
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
          </div>
          <p className="teachers-link">
            <Link href="/teachers">Meet all of RhyVidya's teachers →</Link>
          </p>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Book Physics</p>
            <h2>Book your free first month of Physics.</h2>
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
          <BookingForm fixedSubject="Physics — live now" />
        </div>
      </section>
    </>
  );
}
