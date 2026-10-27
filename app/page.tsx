import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "./components/BookingForm";
import JsonLd from "./components/JsonLd";
import { FAQS, PLANS, OG_IMAGE, SITE, SUBJECTS } from "./data";

export const metadata: Metadata = {
  title: "RhyVidya — Learn Live with Expert Teachers",
  description:
    "Learn live online with experienced teachers — Hindi, Physics, and Mathematics available now, with Tamil, Abacus, Coding, and English coming soon. Free assessment and first month free.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RhyVidya — Learn Live with Expert Teachers",
    description:
      "Learn live online with experienced teachers — Hindi, Physics, and Mathematics available now, with Tamil, Abacus, Coding, and English coming soon. Free assessment and first month free.",
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
        "RhyVidya is an online learning platform where experienced teachers teach students live online across many subjects — Hindi, Physics, and Mathematics available now, with Tamil, Abacus, Coding, and English coming soon — for students worldwide.",
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
        "Live online classes with experienced teachers across Hindi, Physics, and Mathematics — on Google Meet, Zoho Meeting, YouTube, or WhatsApp — 1-to-1 and group sessions by appointment, with a free assessment and the first month free at launch. Tamil, Abacus, Coding, and English classes are coming soon.",
      brand: { "@id": "https://www.rhyvidya.com/#organization" },
    },
  ],
};

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
              live online — across Hindi, Physics, and Mathematics, with teachers available now.
              Build confidence at your
              own pace in a simple online classroom, with personal guidance from your teacher
              and practice videos shaped around your level. Every booking starts with a free
              assessment, so your teacher places you at exactly the right level — and your
              first month is free.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#bookingForm">
                Book your free first month
              </a>
              <Link className="button secondary" href="/#subjects">
                Explore subjects
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
        </div>
      </section>

      <div className="trust-strip">
        <div className="wrap trust-grid">
          <div className="trust-item">
            <b>Many subjects, expert teachers</b>
            <span>Hindi · Physics · Mathematics — teachers available now</span>
          </div>
          <div className="trust-item">
            <b>WhatsApp support</b>
            <span>Reminders and quick communication stay familiar</span>
          </div>
          <div className="trust-item">
            <b>First month free</b>
            <span>Free assessment included for every new student</span>
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
              The official launch film <span>· RhyVidya is live</span>
            </p>
            <h2>Watch the launch film.</h2>
            <p>
              See the RhyVidya logo come to life — Knowledge is Power. In under a minute, the
              film introduces the platform: live online learning with experienced teachers
              across Hindi, Physics, and Mathematics, for students wherever home is.
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
          <div>
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
            <p className="film-note">
              The RhyVidya launch film — also on{" "}
              <a href={SITE.launchFilm.watch} target="_blank" rel="noopener">
                YouTube
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="subjects" id="subjects">
        <div className="wrap">
          <div className="section-head">
            <h2>Explore subjects.</h2>
            <p>
              One platform, many subjects — every class taught live online by an experienced
              teacher. Hindi, Physics, and Mathematics are available now, Tamil is opening
              next, and Abacus, Coding, and English classes are coming soon. Pick a subject to
              see its classes and meet its teacher.
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
                <p className="teacher-line">{s.ageBand}</p>
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
                Choose from Hindi, Physics, and Mathematics — available now — or register
                your interest in Tamil, Abacus, Coding, and English. Tell us what you can
                already do, and a free assessment places you at the right stage with the
                right teacher.
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
                Parents receive a short weekly progress update — what was covered, what comes
                next, and one thing to practise — alongside teacher-uploaded practice videos,
                student chat, and WhatsApp for reminders and quick support.
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
              Every RhyVidya class is taught live online by an experienced teacher —
              Saraswathi, Mr Athi Siva Krishnan, and Mrs Vijaya — never a recording alone,
              never an anonymous tutor pool.
            </p>
          </div>
          <Link className="button primary" href="/teachers">
            Meet our teachers →
          </Link>
        </div>
      </section>

      <section className="library" id="library">
        <div className="wrap library-shell">
          <div className="library-top">
            <div>
              <h2>Your free practice shelf.</h2>
              <p>Short videos from our teachers help you review every subject whenever it suits you.</p>
            </div>
            <div className="free-label">Free in Phase 1</div>
          </div>
          <div className="lesson-preview">
            <article className="lesson-card">
              <div className="lesson-visual">
                <span>Aa</span>
              </div>
              <div className="lesson-info">
                <small>Languages · Foundations</small>
                <h3>Sounds, script, and first words</h3>
              </div>
            </article>
            <article className="lesson-card">
              <div className="lesson-visual">
                <span>F = ma</span>
              </div>
              <div className="lesson-info">
                <small>Physics · Concepts</small>
                <h3>See how forces work, step by step</h3>
              </div>
            </article>
            <article className="lesson-card">
              <div className="lesson-visual">
                <span>π</span>
              </div>
              <div className="lesson-info">
                <small>Mathematics · Practice</small>
                <h3>Work through problems with your teacher</h3>
              </div>
            </article>
          </div>
          <p className="launch-note">
            The video library is being prepared for launch; these cards show the planned learning
            format. Phase 1 videos will remain free to watch. Between classes, students keep
            learning with weekly practice — a short worksheet set by their teacher each week,
            paired with free-library videos to review at home.
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
              Tell us who is learning and what they would like to learn — Hindi, Physics, and
              Mathematics classes are available now, and Tamil, Abacus, Coding, and English are
              coming next, so you can register your interest for them today. Choose a 1-to-1 class or a group session, on a weekday or
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
            <a className="wa-text-link" href={SITE.whatsapp} target="_blank" rel="noopener">
              Chat on WhatsApp →
            </a>
          </div>
          <BookingForm />
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
