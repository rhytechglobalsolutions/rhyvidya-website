import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import JsonLd from "../../components/JsonLd";
import { OG_IMAGE, SITE } from "../../data";

export const metadata: Metadata = {
  title: "Physics Classes Online — Live Classes",
  description:
    "Live online Physics classes for Grades 9–12 with Mr Athi Siva Krishnan and Mrs Vijaya — concepts explained clearly and patiently, 1-to-1 and group classes by appointment. Free assessment and first month free.",
  alternates: { canonical: "/subjects/physics" },
  openGraph: {
    title: "Physics Classes Online | RhyVidya",
    description:
      "Live online Physics classes with Mr Athi Siva Krishnan and Mrs Vijaya — concepts explained clearly and patiently. Book a class today.",
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
        "Live online Physics classes for Grades 9–12, taught by Mr Athi Siva Krishnan and Mrs Vijaya. 1-to-1 and group sessions, weekday and weekend, by appointment. Free assessment and first month free.",
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
            Physics classes are available now on RhyVidya, for students in Grades 9–12 —
            concepts explained clearly and patiently in live online classes with Mr Athi Siva
            Krishnan and Mrs Vijaya, so students build real understanding step by step. Every
            booking starts with a free assessment, and your first month is free.
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

      <section className="route" id="assessment">
        <div className="wrap">
          <div className="section-head">
            <h2>Start with a free assessment.</h2>
            <p>
              Before your first class, your teacher checks where you are — so you start at
              exactly the right level, with a clear plan for what comes next.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>Tell us where you are</h3>
              <p>
                Book below and mention your grade and the topics you find easy or hard — your
                teacher prepares a short assessment pitched at your level.
              </p>
            </article>
            <article className="step">
              <span className="step-num">02</span>
              <h3>Get your level and plan</h3>
              <p>
                Your teacher works through the assessment with you, confirms your starting
                level, and sets out the topics your free first month will cover.
              </p>
            </article>
            <article className="step">
              <span className="step-num">03</span>
              <h3>Begin your free month</h3>
              <p>
                Start classes at the right level from day one — no guessing, no repeating what
                you already know.
              </p>
            </article>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#bookingForm">
              Book your free assessment
            </a>
          </div>
        </div>
      </section>

      <section className="route">
        <div className="wrap">
          <div className="section-head">
            <h2>Support that continues between classes.</h2>
            <p>
              Learning does not stop when the class ends — students and parents stay supported
              every week.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>Weekly progress updates for parents</h3>
              <p>
                After each week of classes, parents receive a short update on WhatsApp or
                email — what was covered, what comes next, and one thing to practise.
              </p>
            </article>
            <article className="step">
              <span className="step-num">02</span>
              <h3>Weekly practice</h3>
              <p>
                A short practice worksheet from your teacher each week, paired with free
                practice videos from the RhyVidya library to review at home.
              </p>
            </article>
            <article className="step">
              <span className="step-num">03</span>
              <h3>Questions, answered</h3>
              <p>
                Send questions any time on WhatsApp — reminders, quick questions, and support
                stay on the channel families already use.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="formats" id="exam-prep">
        <div className="wrap">
          <div className="section-head">
            <h2>Built for school success — and exams.</h2>
            <p>
              Physics on RhyVidya follows the Ontario curriculum, so class work reinforces
              school work — and exam practice is built in from the start.
            </p>
          </div>
          <div className="format-grid">
            <article className="format-card">
              <b>Ontario curriculum aligned</b>
              <p>
                Lessons follow the Ontario curriculum from Grade 9 and 10 science through
                Grade 11 and 12 Physics — kinematics, forces, energy, waves, and fields,
                covered in step with school.
              </p>
            </article>
            <article className="format-card">
              <b>Senior exam preparation</b>
              <p>
                Grade 11 and 12 students (SPH3U and SPH4U) prepare for school exams with
                exam-style problems, structured revision, and practice under timed
                conditions.
              </p>
            </article>
            <article className="format-card">
              <b>Problems, worked step by step</b>
              <p>
                Physics rewards method. Students learn to set up, solve, and check problems
                systematically — the habit that turns understanding into marks.
              </p>
            </article>
            <article className="format-card">
              <b>Ready for what comes next</b>
              <p>
                A strong Physics foundation for students aiming at engineering, health
                sciences, and other university programs that build on senior Physics.
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
              <h3>Mrs Vijaya</h3>
              <div className="t-subjects">Physics · Mathematics</div>
              <p>
                Teaches Physics and Mathematics alongside Mr Athi Siva Krishnan, explaining
                concepts carefully in live online classes so students keep up, ask questions
                freely, and build confidence.
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
