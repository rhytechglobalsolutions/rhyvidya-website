export const SITE = {
  name: "RhyVidya",
  tagline: "Knowledge is Power",
  url: "https://www.rhyvidya.com",
  email: "info@rhyvidya.com",
  phoneDisplay: "+1 (437) 870-7083",
  phoneHref: "tel:+14378707083",
  whatsapp:
    "https://wa.me/14378707083?text=Hi,%20I'm%20interested%20in%20RhyVidya%20classes",
  whatsappPlain: "https://wa.me/14378707083",
  youtube: "https://www.youtube.com/@rhytechglobalsolutionsinc",
  launchFilm: {
    embed: "https://www.youtube-nocookie.com/embed/IKSEqG4nMA8?rel=0",
    watch: "https://youtube.com/shorts/IKSEqG4nMA8",
    title: "RhyVidya — Knowledge is Power | Live Online Learning Platform",
  },
  logo: "https://www.rhyvidya.com/assets/rhyvidya-logo-rhytech-theme.webp",
  logoHeader: "/assets/rhyvidya-logo-header.webp",
  logoAlt: "RhyVidya logo — violet R rising from an open book",
  parent: { name: "Rhytech Global Solutions", url: "https://rhytechglobalsolutions.ca" },
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@rhytechglobalsolutionsinc" },
    { label: "Instagram", href: "https://www.instagram.com/rhytechglobalsolutions" },
    { label: "Threads", href: "https://www.threads.com/@rhytechglobalsolutions" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576907321425" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/rhytech-global-solutions/" },
  ],
};

export const OG_IMAGE = {
  url: SITE.logo,
  width: 1600,
  height: 1600,
  alt: SITE.logoAlt,
  type: "image/webp",
};

export type Subject = {
  slug: string;
  name: string;
  status: "live" | "next" | "soon";
  statusLabel: string;
  glyph: string;
  glyphLang?: string;
  glyphClass?: string;
  teachers: string;
  blurb: string;
  points: string[];
};

export const SUBJECTS: Subject[] = [
  {
    slug: "hindi",
    name: "Hindi",
    status: "live",
    statusLabel: "Live now",
    glyph: "हिन्दी",
    glyphLang: "hi",
    teachers: "Saraswathi",
    blurb:
      "Live online Hindi classes with Saraswathi, a teacher of 25+ years — from your first words (Parichaya) all the way to degree-level proficiency (Praveen).",
    points: ["1-to-1 and group classes", "Weekday and weekend appointments", "Free first month at launch"],
  },
  {
    slug: "tamil",
    name: "Tamil",
    status: "next",
    statusLabel: "Starting soon",
    glyph: "தமிழ்",
    glyphLang: "ta",
    glyphClass: "tamil-script",
    teachers: "Saraswathi",
    blurb:
      "Tamil is the next subject opening on RhyVidya, taught by Saraswathi — the same experienced teacher behind our Hindi classes. Register your interest now and be first in line when enrolment opens.",
    points: ["Live, interactive teaching", "Register your interest today", "Be first to know at launch"],
  },
  {
    slug: "physics",
    name: "Physics",
    status: "live",
    statusLabel: "Live now",
    glyph: "F = ma",
    teachers: "Mr Athi Siva Krishnan & Mrs Vijaya",
    blurb:
      "Live online Physics classes with Mr Athi Siva Krishnan and Mrs Vijaya — concepts explained clearly and patiently, so students build real understanding step by step.",
    points: ["1-to-1 and group classes", "Weekday and weekend appointments", "Free first month at launch"],
  },
  {
    slug: "mathematics",
    name: "Mathematics",
    status: "live",
    statusLabel: "Live now",
    glyph: "π ∑ √",
    teachers: "Mr Athi Siva Krishnan & Mrs Vijaya",
    blurb:
      "Live online Mathematics classes with Mr Athi Siva Krishnan and Mrs Vijaya — teaching that works through problems step by step, building confidence as well as correct answers.",
    points: ["1-to-1 and group classes", "Weekday and weekend appointments", "Free first month at launch"],
  },
  {
    slug: "abacus",
    name: "Abacus",
    status: "soon",
    statusLabel: "Coming soon",
    glyph: "🧮",
    teachers: "Teachers being hired",
    blurb:
      "Abacus classes are coming to RhyVidya — fast, fun mental-maths training that builds speed, focus, and confidence with numbers. We are hiring experienced Abacus teachers now, and classes begin as soon as our teachers are onboard.",
    points: ["Teachers being hired now", "Register your interest today", "Be first to know at launch"],
  },
  {
    slug: "coding",
    name: "Coding",
    status: "soon",
    statusLabel: "Coming soon",
    glyph: "</>",
    teachers: "Teachers being hired",
    blurb:
      "Coding classes are coming to RhyVidya — hands-on, project-based programming taught live online. We are hiring experienced Coding teachers now, and classes begin as soon as our teachers are onboard.",
    points: ["Teachers being hired now", "Register your interest today", "Be first to know at launch"],
  },
];

export const HINDI_STAGES = [
  {
    tag: "Beginner",
    glyph: "नमस्ते",
    title: "Build your foundation",
    copy: "Start speaking naturally while learning the alphabet and everyday sentence patterns.",
    points: ["Greetings and introductions", "Devanagari letter sounds", "Numbers, family, food"],
  },
  {
    tag: "Intermediate",
    glyph: "बातचीत",
    title: "Grow your range",
    copy: "Move from rehearsed phrases to richer conversations, stories, and confident reading.",
    points: ["Everyday conversations", "Reading short passages", "Grammar in real context"],
  },
  {
    tag: "Advanced",
    glyph: "अभिव्यक्ति",
    title: "Express with nuance",
    copy: "Refine accuracy, vocabulary, and cultural fluency for deeper communication.",
    points: ["Complex conversation", "Writing with confidence", "Literature and culture"],
  },
];

export const HINDI_LADDER = [
  { name: "Parichaya", level: "Introductory", copy: "The absolute foundational step — where every Hindi journey begins." },
  { name: "Prathamic", level: "Primary", copy: "Your first major structured exam, evaluating elementary reading and writing." },
  { name: "Madhyama", level: "Intermediate", copy: "The intermediate level — it tests intermediate grammar, short stories, and composition." },
  { name: "Rashtrabhasha", level: "Advanced", copy: "Translates roughly to high-school level proficiency in Hindi." },
  { name: "Praveshika", level: "Higher", copy: "Marks the transition into higher Hindi literature." },
  { name: "Visharad & Praveen", level: "Higher levels", copy: "The highest rungs — Visharad and Praveen sequentially align with university BA and MA degrees in Hindi language proficiency." },
];

export const STAGE_OPTIONS = [
  "Not sure yet",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Parichaya (Introductory)",
  "Prathamic (Primary)",
  "Madhyama (Intermediate)",
  "Rashtrabhasha",
  "Praveshika",
  "Visharad / Praveen (Higher)",
];

export const SLOT_OPTIONS = [
  "Morning · 9:00 AM ET",
  "Late morning · 11:00 AM ET",
  "Afternoon · 2:00 PM ET",
  "Evening · 5:00 PM ET",
  "Evening · 7:00 PM ET",
];

export const PLANS = [
  {
    name: "Monthly",
    copy: "Pay month by month after the free launch period, with a one-month fee deposit when the paid plan begins.",
  },
  {
    name: "Quarterly",
    copy: "Pay every three months for a longer commitment and a subscription discount.",
    saving: "Discount planned",
  },
  {
    name: "Half-yearly",
    copy: "Six months of continued learning with a larger subscription discount.",
    saving: "Higher discount planned",
  },
  {
    name: "Yearly",
    copy: "A full-year option designed to offer the best overall subscription value.",
    saving: "Best discount planned",
  },
];

export const FAQS = [
  {
    q: "Who can learn with RhyVidya?",
    a: "RhyVidya is for students worldwide who want to learn live online with experienced teachers. Hindi, Physics, and Mathematics classes are available now; Tamil is next, and Abacus and Coding classes are coming soon. The final supported age range will be confirmed before registration opens.",
  },
  {
    q: "Will RhyVidya be easy to use?",
    a: "Yes. The product is planned around a straightforward path: register, find the right stage, book a time, and join class in one tap. Large controls, plain language, mobile-friendly pages, and local-time appointments keep the experience clear.",
  },
  {
    q: "Which platform are classes held on?",
    a: "Classes are held online, on whichever platform suits you best — Google Meet, Zoho Meeting, YouTube, or WhatsApp. Each supports live video, student interaction, screen sharing, chat, and board teaching, and WhatsApp stays at hand for reminders, quick questions, and backup communication.",
  },
  {
    q: "What is included in the launch offer?",
    a: "The first month is free when RhyVidya launches. If a student continues afterward, the paid plan begins with one month's fee as a deposit plus the selected subscription payment.",
  },
  {
    q: "Which payment plans will be available?",
    a: "Families can choose monthly, quarterly, half-yearly, or yearly billing. Longer subscriptions will receive larger discounts; exact tuition and discount percentages will be published before enrollment opens.",
  },
  {
    q: "Can I choose 1-to-1 or group classes?",
    a: "Yes. RhyVidya offers 1-to-1 classes and group sessions, on weekdays and weekends — all by appointment. Pick your format, date, and time on the booking calendar, and your teacher confirms the appointment and online class link by email.",
  },
  {
    q: "Can I watch RhyVidya videos on YouTube?",
    a: "Yes. RhyVidya's practice videos are published on the Rhytech Global Solutions YouTube channel, and Phase 1 videos stay free to watch there.",
  },
  {
    q: "Which subjects are coming next?",
    a: "Hindi, Physics, and Mathematics are live now, each taught live online by an experienced teacher. Tamil is coming next, and Abacus and Coding classes are on the way — we are hiring teachers for them now. You can book the live subjects or register your interest for the upcoming ones in the booking form today.",
  },
];
