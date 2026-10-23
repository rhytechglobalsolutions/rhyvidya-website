import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "./components/BookingForm";
import JsonLd from "./components/JsonLd";
import { FAQS, PLANS, OG_IMAGE, SITE, SUBJECTS } from "./data";

export const metadata: Metadata = {
  title: "RhyVidya — Learn Live with Expert Teachers",
  description:
    "Learn live online with experienced teachers across many subjects — starting with Hindi by Saraswathi; Tamil, Physics, and Mathematics coming next. First month free.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RhyVidya — Learn Live with Expert Teachers",
    description:
      "Learn live online with experienced teachers across many subjects — starting with Hindi by Saraswathi; Tamil, Physics, and Mathematics coming next. First month free.",
    url: "/",
    type: "website",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.rhyvidya.com/#organization",
      name: "RhyVidya",
      url: "https://www.rhyvidya.com/",
      logo: SITE.logo,
      description:
        "RhyVidya is an online learning platform where experienced teachers teach students live across many subjects, worldwide. Hindi is the launch subject — taught by Saraswathi from first words to degree-level proficiency — with Tamil, Physics, and Mathematics coming next.",
      email: SITE.email,
      telephone: "+1-437-870-7083",
      parentOrganization: {
        "@type": "Organization",
        name: "Rhytech Global Solutions",
        url: "https://rhytechglobalsolutions.ca",
      },
      sameAs: SITE.socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rhyvidya.com/#website",
      url: "https://www.rhyvidya.com/",
      name: "RhyVidya",
      publisher: { "@id": "https://www.rhyvidya.com/#organization" },
    },
    {
      "@type": "Product",
      "@id": "https://www.rhyvidya.com/#product",
      name: "RhyVidya — Live Online Classes with Expert Teachers",
      category: "Online learning platform",
      description:
        "Live online classes with experienced teachers across many subjects, starting with Hindi with Saraswathi on Google Meet, Zoho Meeting, YouTube, or WhatsApp — 1-to-1 and group sessions by appointment, from Parichaya to Praveen, with the first month free at launch. Tamil, Physics, and Mathematics are coming next.",
      brand: { "@id": "https://www.rhyvidya.com/#organization" },
    },
  ],
};

const TEACHERS = [
  {
    name: "Saraswathi",
    subjects: "Hindi · Tamil",
    copy: "RhyVidya's founding teacher, with 25+ years of teaching experience. She teaches our launch subject, Hindi, live from India — and will open Tamil next.",
  },
  {
    name: "Mr Athi Siva Krishnan",
    subjects: "Physics · Mathematics",
    copy: "Teaches Physics and Mathematics on RhyVidya — clear, patient, step-by-step teaching that builds real understanding.",
  },
  {
    name: "Mrs Mallika",
    subjects: "Physics",
    copy: "Teaches Physics alongside Mr Athi Siva Krishnan, explaining concepts carefully so students keep up and build confidence.",
  },
  {
    name: "Mrs Vijaya",
    subjects: "Mathematics",
    copy: "Teaches Mathematics alongside Mr Athi Siva Krishnan, working through problems step by step until the method clicks.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Knowledge is Power <span>· Live classes with experienced teachers, for students worldwide</span>
            </p>
            <h1>
              Learn live with <em>experienced teachers</em>, wherever home is.
            </h1>
            <p>
              RhyVidya is an online learning platform where experienced teachers teach students
              live across many subjects. We are starting with Hindi — live classes with
              Saraswathi — and Tamil, Physics, and Mathematics are coming next. Build confidence
              at your pace in a simple online classroom, and keep practising with videos shaped
              around your level.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#bookingForm">
                Book your free first month
              </a>
              <Link className="button secondary" href="/subjects/hindi#stage-finder">
                Find my Hindi stage
              </Link>
            </div>
            <p className="hero-yt">
              Watch the film, and find more on{" "}
              <a href={SITE.youtube} target="_blank" rel="noopener">
                Rhytech Global Solutions on YouTube
              </a>
              .
            </p>
          </div>
          <div className="hero-art" aria-label="RhyVidya video and Hindi greeting">
            <div className="logo-stage">
              <iframe
                className="yt-embed"
                src={SITE.youtubeEmbed}
                title="RhyVidya — watch on the Rhytech Global Solutions YouTube channel"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="floating-note">
              <b lang="hi">नमस्ते!</b>
              <span>Your first confident word starts here.</span>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="wrap trust-grid">
          <div className="trust-item">
            <b>Many subjects, expert teachers</b>
            <span>Starting with Hindi — Tamil, Physics, and Mathematics next</span>
          </div>
          <div className="trust-item">
            <b>WhatsApp support</b>
            <span>Reminders and quick communication stay familiar</span>
          </div>
          <div className="trust-item">
            <b>First month free</b>
            <span>Launch offer for new students</span>
          </div>
          <div className="trust-item">
            <b>Easy at every step</b>
            <span>Clear booking, joining, and learning flow</span>
          </div>
        </div>
      </div>

      <section className="film" id="launch-film">
        <div className="wrap film-grid">
          <div className="film-copy">
            <p className="eyebrow">
              The launch film <span>· RhyVidya is live</span>
            </p>
            <h2>Watch the launch film.</h2>
            <p>
              See the RhyVidya logo come to life — Knowledge is Power. RhyVidya is an online
              learning platform where experienced teachers teach students live across many
              subjects, starting with Hindi and growing from there.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#bookingForm">
                Book your free first month
              </a>
              <a
                className="button secondary"
                href={SITE.launchFilm.watch}
                target="_blank"
                rel="noopener"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
          <div className="film-frame">
            <iframe
              className="yt-short"
              src={SITE.launchFilm.embed}
              title={`RhyVidya launch film — ${SITE.launchFilm.title}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="subjects" id="subjects">
        <div className="wrap">
          <div className="section-head">
            <h2>One platform. Many subjects.</h2>
            <p>
              RhyVidya brings experienced teachers and students together for live online learning
              across subjects — Hindi is live now, and Tamil, Physics, and Mathematics are next.
            </p>
          </div>
          <div className="subject-grid">
            {SUBJECTS.map((s) => (
              <article className="level-card" key={s.slug}>
                <div className="level-tag">{s.statusLabel}</div>
                <div className={`script-glyph ${s.glyphClass ?? ""}`} lang={s.glyphLang}>
                  {s.glyph}
                </div>
                <h3>
                  <Link href={`/subjects/${s.slug}`}>{s.name}</Link>
                </h3>
                <p className="teacher-line">With {s.teachers}</p>
                <p>{s.blurb}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link className="card-cta" href={`/subjects/${s.slug}`}>
                  {s.status === "live" ? `Explore ${s.name} classes →` : `About ${s.name} →`}
                </Link>
              </article>
            ))}
          </div>
          <p className="subject-note">
            <b>Experienced teachers only.</b> Every subject on RhyVidya is taught live by an
            experienced teacher. As each new subject opens, its teacher joins the platform before
            classes begin — with personal guidance at every stage and support between classes.
          </p>
        </div>
      </section>

      <section className="route" id="how">
        <div className="wrap">
          <div className="section-head">
            <h2>A simple route from curious to confident.</h2>
            <p>
              No course maze. Pick your subject, find your stage, and learn live with an
              experienced teacher — the experience is designed to be clear for students and
              families, from registration to joining class.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-num">01</span>
              <h3>Choose your subject</h3>
              <p>
                Start with Hindi today — Tamil, Physics, and Mathematics are coming next. Tell us
                what you can already do, and we place you at the right stage with the right
                teacher.
              </p>
            </article>
            <article className="step">
              <span className="step-num">02</span>
              <h3>Book and join easily</h3>
              <p>
                Select an available appointment, receive your online class link, and join in one
                tap. Your time is shown in your own timezone.
              </p>
            </article>
            <article className="step">
              <span className="step-num">03</span>
              <h3>Stay supported</h3>
              <p>
                Review teacher-uploaded videos, send questions through the student chat, and use
                WhatsApp for reminders and quick support.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="platform" id="classroom">
        <div className="wrap platform-grid">
          <div className="platform-main">
            <div className="platform-label">How classes run</div>
            <h2>Online classes, on the platform that suits you.</h2>
            <p>
              RhyVidya classes are held online, so your teacher can teach on camera, share a
              screen or digital board, and speak with students in real time. Classes can run on
              Google Meet, Zoho Meeting, YouTube, or WhatsApp — whichever platform suits you
              best. WhatsApp stays the familiar channel for reminders and quick questions too.
            </p>
          </div>
          <div className="platform-stack">
            <article className="platform-card">
              <b>Live lesson</b>
              <p>
                Your class link comes with each booked appointment — on Google Meet, Zoho
                Meeting, YouTube, or WhatsApp — with camera, microphone, chat, screen sharing,
                and board support.
              </p>
            </article>
            <article className="platform-card">
              <b>Student communication</b>
              <p>
                In-platform messages for learning questions, plus WhatsApp for class reminders
                and urgent schedule updates.
              </p>
            </article>
            <article className="platform-card">
              <b>Simple by design</b>
              <p>
                Large actions, plain language, timezone-aware appointments, and a one-tap path
                from reminder to classroom.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="teacher" id="teacher">
        <div className="wrap">
          <div className="section-head">
            <h2>Meet our teachers.</h2>
            <p>
              Every RhyVidya subject is taught live by an experienced teacher — never a recording
              alone, never an anonymous tutor pool.
            </p>
          </div>
          <div className="teacher-grid">
            <div className="board" aria-label="Chalkboard with Hindi lesson greeting">
              <div className="hindi" lang="hi">
                आप कैसे हैं?
              </div>
              <div className="chalk">How are you?</div>
              <div className="lesson">Today: speaking with confidence</div>
            </div>
            <div className="teacher-copy">
              <div className="teacher-label">Our founding teacher</div>
              <h2>Learn live with Saraswathi.</h2>
              <p>
                Based in India and ready to teach students around the world, Saraswathi brings
                more than 25 years of teaching experience to every class. She leads personal
                online Hindi lessons — on Google Meet, Zoho Meeting, YouTube, or WhatsApp — using
                live video, screen sharing, and an interactive teaching board. She is the first
                of RhyVidya's teachers: as Tamil, Physics, and Mathematics start, more
                experienced teachers join her on the platform to teach them.
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
          <div className="teacher-list" style={{ marginTop: 56 }}>
            {TEACHERS.map((t) => (
              <article className="teacher-card" key={t.name}>
                <h3>{t.name}</h3>
                <div className="t-subjects">{t.subjects}</div>
                <p>{t.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="library" id="library">
        <div className="wrap library-shell">
          <div className="library-top">
            <div>
              <h2>Your free practice shelf.</h2>
              <p>Short, stage-based videos will help you review whenever it suits you.</p>
            </div>
            <div className="free-label">Free in Phase 1</div>
          </div>
          <div className="lesson-preview">
            <article className="lesson-card">
              <div className="lesson-visual">
                <span lang="hi">अ आ</span>
              </div>
              <div className="lesson-info">
                <small>Beginner · Script</small>
                <h3>Meet the first Devanagari sounds</h3>
              </div>
            </article>
            <article className="lesson-card">
              <div className="lesson-visual">
                <span lang="hi">मैं हूँ</span>
              </div>
              <div className="lesson-info">
                <small>Beginner · Speaking</small>
                <h3>Introduce yourself naturally</h3>
              </div>
            </article>
            <article className="lesson-card">
              <div className="lesson-visual">
                <span lang="hi">कहानी</span>
              </div>
              <div className="lesson-info">
                <small>Intermediate · Reading</small>
                <h3>Read and retell a short story</h3>
              </div>
            </article>
          </div>
          <p className="launch-note">
            The video library is being prepared for launch; these cards show the planned learning
            format. Phase 1 videos will remain free to watch.
          </p>
          <p className="launch-note">
            RhyVidya's videos live on our YouTube channel —{" "}
            <a href={SITE.youtube} target="_blank" rel="noopener">
              Rhytech Global Solutions on YouTube
            </a>
            .
          </p>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <h2>Begin freely. Continue with the plan that fits.</h2>
            <p>
              RhyVidya's launch model gives families time to experience the classes before
              choosing a paid subscription.
            </p>
          </div>
          <div className="pricing-grid">
            <article className="launch-offer">
              <div className="offer-kicker">Launch offer</div>
              <strong>1 month free</strong>
              <p>
                New students can experience RhyVidya for their first month at no tuition cost.
                Afterward, continued learning moves to a paid plan with a one-month fee deposit.
              </p>
            </article>
            <div>
              <div className="plans">
                {PLANS.map((p) => (
                  <article className="plan" key={p.name}>
                    <h3>{p.name}</h3>
                    <p>{p.copy}</p>
                    {p.saving && <span className="saving">{p.saving}</span>}
                  </article>
                ))}
              </div>
              <p className="pricing-note">
                Exact tuition, deposit terms, and discount percentages will be published before
                enrollment opens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="wrap faq-grid">
          <div>
            <h2>Good to know.</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="book">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="contact-label">Book or enquire</p>
            <h2>Start with the booking form.</h2>
            <p>
              Tell us who is learning and what they would like to learn — Hindi classes are live
              now, and Tamil, Physics, and Mathematics are coming next, so you can register your
              interest for them today. Choose a 1-to-1 class or a group session, on a weekday or
              a weekend — every class is by appointment. We reply from{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to confirm your time and the
              online class details for your free first month.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="cd-label">Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="contact-detail">
                <span className="cd-label">Phone</span>
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </div>
              <div className="contact-detail">
                <span className="cd-label">WhatsApp</span>
                <a href={SITE.whatsappPlain} target="_blank" rel="noopener">
                  Chat with us
                </a>
              </div>
              <div className="contact-detail">
                <span className="cd-label">YouTube</span>
                <a href={SITE.youtube} target="_blank" rel="noopener">
                  Rhytech Global Solutions
                </a>
              </div>
            </div>
            <p className="contact-alt">
              Prefer to chat first? You can also reach us on WhatsApp — the booking form is still
              the fastest way to reserve a class.
            </p>
            <a className="button whatsapp" href={SITE.whatsapp} target="_blank" rel="noopener">
              Chat on WhatsApp
            </a>
          </div>
          <BookingForm showStage />
        </div>
      </section>

      <section className="closing">
        <div className="wrap closing-card">
          <div>
            <h2>Your first month can begin freely.</h2>
            <p>
              Send a booking request and we will confirm your stage, your class time, and your
              online class link by email.
            </p>
          </div>
          <div className="closing-actions">
            <a className="button" href="#bookingForm">
              Book your free month
            </a>
            <a className="wa-link" href={SITE.whatsapp} target="_blank" rel="noopener">
              or chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
