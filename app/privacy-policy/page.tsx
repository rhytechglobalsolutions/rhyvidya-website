
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: "Privacy Policy | RhyVidya",
  description:
    "Read the RhyVidya Privacy Policy to understand how personal information submitted through our website, booking forms and online learning services is handled.",
  alternates: {
    canonical: `${SITE.url}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | RhyVidya",
    description:
      "Learn how RhyVidya handles personal information, booking enquiries and online learning communications.",
    url: `${SITE.url}/privacy-policy`,
    siteName: SITE.name,
    type: "website",
  },
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information", title: "Information we collect" },
  { id: "children", title: "Children's information" },
  { id: "collection", title: "How we collect information" },
  { id: "purposes", title: "How we use information" },
  { id: "legal-basis", title: "Legal basis for processing" },
  { id: "sharing", title: "When information is shared" },
  { id: "platforms", title: "Third-party platforms" },
  { id: "international", title: "International data transfers" },
  { id: "retention", title: "Data retention" },
  { id: "security", title: "Data security" },
  { id: "cookies", title: "Cookies and website technologies" },
  { id: "rights", title: "Your privacy rights" },
  { id: "marketing", title: "Marketing communications" },
  { id: "external-links", title: "External links" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[#ece9e4] py-9 sm:py-11"
    >
      <div className="flex gap-5 sm:gap-7">
        <span className="pt-1  text-lg text-violet-400">
          {number}
        </span>

        <div className="min-w-0 flex-1">
          <h2 className=" text-2xl font-medium tracking-[-0.035em] text-[#19182e] sm:text-[1.75rem]">
            {title}
          </h2>

          <div className="mt-5 space-y-4 text-[14px] leading-[1.95] text-[#686779]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2.5 pl-5 marker:text-violet-500">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#19182e]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101027]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-48 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[130px]" />
          <div className="absolute -bottom-64 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:70px_70px]" />
        </div>

        <div className="mx-auto max-w-360 px-6 pb-20 pt-20 sm:px-10 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
                Privacy & transparency
              </span>
            </div>

            <h1 className="mt-8  text-5xl font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl lg:text-[76px]">
              Your privacy.
              <br />
              <span className="italic text-violet-300">
                Our responsibility.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Trust is an important part of every learning journey.
              This policy explains what personal information may be
              collected when you interact with RhyVidya and how it
              may be used to support your learning experience.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-xs text-white/45">
              <span>Website: {SITE.url}</span>
              <span>Last updated: 14 November 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="mx-auto max-w-360 px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#eae6df] bg-white p-6 shadow-[0_12px_40px_rgba(30,25,55,0.035)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700">
                On this page
              </p>

              <nav aria-label="Privacy policy sections" className="mt-5">
                <ol className="space-y-3">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex gap-3 text-[11px] leading-5 text-[#777487] transition hover:text-violet-700"
                      >
                        <span className="shrink-0 font-semibold text-[#b1adc0] transition group-hover:text-violet-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-7 border-t border-[#eeeaf0] pt-5">
                <p className="text-xs leading-6 text-[#898697]">
                  Have a privacy-related question?
                </p>

                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 inline-flex text-xs font-semibold text-violet-700 underline decoration-violet-300 underline-offset-4"
                >
                  Contact our team
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN POLICY */}
          <article className="min-w-0">
            <div className="border-b border-[#ece9e4] pb-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700">
                Your information matters
              </p>

              <h2 className="mt-4  text-3xl font-medium tracking-[-0.04em] text-[#19182e] sm:text-4xl">
                A thoughtful approach to privacy.
              </h2>

              <p className="mt-5 text-[14px] leading-[1.95] text-[#686779]">
                This Privacy Policy describes how RhyVidya may collect,
                use, store and share personal information when you
                visit our website, submit a booking request, register
                your interest or communicate with our team.
              </p>

              <p className="mt-4 text-[14px] leading-[1.95] text-[#686779]">
                It should be read together with our{" "}
                <Link
                  href="/terms-and-conditions"
                  className="font-semibold text-violet-700 underline decoration-violet-300 underline-offset-4"
                >
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>

            <Section
              id="introduction"
              number="01"
              title="Introduction"
            >
              <p>
                Welcome to <strong className="text-[#302e46]">RhyVidya</strong>.
                We recognise that personal information deserves
                careful handling, particularly when our services
                involve children, parents, guardians and educators.
              </p>

              <p>
                This policy applies to personal information collected
                through the RhyVidya website, booking and enquiry
                forms, and communications relating to our services.
              </p>

              <p>
                References to &quot;RhyVidya&quot;, &quot;we&quot;,
                &quot;our&quot; and &quot;us&quot; mean the RhyVidya
                service. References to &quot;you&quot; and
                &quot;your&quot; mean a website visitor, prospective
                learner, parent, guardian or other individual
                interacting with us.
              </p>
            </Section>

            <Section
              id="information"
              number="02"
              title="Information we collect"
            >
              <p>
                The information we collect depends on how you interact
                with RhyVidya. When you submit a booking or enquiry,
                the information may include:
              </p>

              <BulletList
                items={[
                  "Name and contact details, including email address and phone number.",
                  "Subject or programme of interest.",
                  "Hindi learning stage, where relevant.",
                  "Preferred class format, such as 1-to-1 or group sessions.",
                  "Preferred appointment time and requested class date.",
                  "Messages, questions and additional information you choose to provide.",
                ]}
              />

              <p>
                We may also receive information you provide when
                communicating with our team by email, phone or
                WhatsApp.
              </p>

              <p>
                Depending on how the website is configured, technical
                information may also be processed when you visit,
                such as browser type, device information, IP address,
                pages accessed and basic diagnostic information.
              </p>

              <p>
                Please avoid including passwords, payment card details
                or unnecessary sensitive personal information in
                general enquiry forms or messages.
              </p>
            </Section>

            <Section
              id="children"
              number="03"
              title="Children's information"
            >
              <p>
                RhyVidya provides educational services that may be
                used by children and young learners. We take the
                handling of information relating to children
                seriously.
              </p>

              <p>
                Where a learner is under the age of legal majority
                in their place of residence, a parent or legal
                guardian should submit the booking or enquiry and
                provide any consent required by applicable law.
              </p>

              <p>
                We may process limited learner-related information
                that a parent, guardian or learner provides, such
                as an age range, subject preference, learning stage
                or educational goals, where needed to respond to
                an enquiry or arrange suitable classes.
              </p>

              <p>
                Parents and guardians should avoid sharing more
                information about a child than is reasonably
                necessary for the educational enquiry or service.
              </p>

              <p>
                If you believe a child has provided personal
                information without appropriate parental or
                guardian involvement, please contact us so the
                matter can be reviewed.
              </p>
            </Section>

            <Section
              id="collection"
              number="04"
              title="How we collect information"
            >
              <p>
                We may collect personal information through the
                following channels:
              </p>

              <BulletList
                items={[
                  "Booking forms submitted through the RhyVidya website.",
                  "Enquiry and interest-registration forms.",
                  "Direct emails, telephone calls and WhatsApp conversations.",
                  "Information supplied by a parent or legal guardian on behalf of a learner.",
                  "Technical information generated when interacting with the website, where applicable.",
                ]}
              />

              <p>
                We may also receive information when you respond
                to communications from our team or provide further
                details during the booking process.
              </p>
            </Section>

            <Section
              id="purposes"
              number="05"
              title="How we use information"
            >
              <p>
                Personal information may be used for legitimate
                educational and operational purposes, including:
              </p>

              <BulletList
                items={[
                  "Responding to questions and course enquiries.",
                  "Reviewing booking requests and coordinating assessments.",
                  "Understanding subject preferences and learning requirements.",
                  "Arranging class appointments and communicating scheduling details.",
                  "Sending relevant online class access information.",
                  "Managing communications with parents, guardians and learners.",
                  "Responding to support requests and resolving service issues.",
                  "Protecting website forms and services against spam, misuse and unauthorised activity.",
                  "Meeting applicable legal and regulatory obligations.",
                ]}
              />

              <p>
                We aim to use personal information only for purposes
                that are relevant to the interaction or service
                for which it was provided, subject to applicable law.
              </p>
            </Section>

            <Section
              id="legal-basis"
              number="06"
              title="Legal basis for processing"
            >
              <p>
                Depending on the applicable privacy laws and the
                circumstances of the interaction, we may process
                personal information on the basis of:
              </p>

              <BulletList
                items={[
                  "Consent provided by you or, where required, a parent or legal guardian.",
                  "Steps taken at your request before entering into an educational service arrangement.",
                  "Performance of an agreement or provision of a requested service.",
                  "Compliance with legal obligations.",
                  "Legitimate operational interests, where permitted by applicable law and balanced against individual privacy rights.",
                ]}
              />

              <p>
                The legal basis applicable to a particular activity
                will depend on the nature of the information,
                the purpose of processing and the laws that apply.
              </p>
            </Section>

            <Section
              id="sharing"
              number="07"
              title="When information is shared"
            >
              <p>
                We do not treat the personal information you provide
                as public information. It may be shared where
                reasonably necessary to provide our services or
                meet legal obligations.
              </p>

              <p>Depending on the circumstances, this may include:</p>

              <BulletList
                items={[
                  "Teachers and educators involved in arranging or delivering the requested classes.",
                  "People authorised to manage enquiries, bookings and learner communications.",
                  "Technology, website hosting, email and service providers supporting our operations.",
                  "Third-party platforms used to facilitate online classes or communications.",
                  "Regulatory authorities, law enforcement or other parties where disclosure is required or permitted by law.",
                ]}
              />

              <p>
                We aim to limit shared information to what is
                reasonably necessary for the relevant purpose.
              </p>

              <p>
                The specific service providers, contractual
                arrangements and data-sharing practices should
                be confirmed against RhyVidya&apos;s actual
                operational setup.
              </p>
            </Section>

            <Section
              id="platforms"
              number="08"
              title="Third-party platforms"
            >
              <p>
                RhyVidya classes and communications may use
                third-party services. Depending on the arrangement,
                these may include:
              </p>

              <BulletList
                items={[
                  "Google Meet for online meetings.",
                  "Zoho Meeting for online sessions.",
                  "YouTube for relevant video content.",
                  "WhatsApp for communication.",
                ]}
              />

              <p>
                When you use these platforms, the relevant provider
                may process information under its own privacy
                policy and terms of service.
              </p>

              <p>
                RhyVidya does not control the independent privacy
                practices of third-party providers. We encourage
                parents, guardians and adult learners to review
                the privacy information of any platform used
                for their classes.
              </p>

              <p>
                The actual platforms used for a particular class
                will depend on the arrangements communicated
                by the teacher or RhyVidya team.
              </p>
            </Section>

            <Section
              id="international"
              number="09"
              title="International data transfers"
            >
              <p>
                RhyVidya may interact with learners, parents,
                educators and service providers in different
                countries.
              </p>

              <p>
                Depending on where our website, email systems,
                hosting infrastructure and third-party platforms
                are operated, personal information may be
                processed or stored in a country other than
                the country where you live.
              </p>

              <p>
                Where international transfers occur, we will
                take steps required by applicable privacy laws
                to provide appropriate protection for the
                information transferred.
              </p>

              <p>
                The countries involved and the safeguards used
                should be confirmed against the actual hosting
                and service-provider arrangements.
              </p>
            </Section>

            <Section
              id="retention"
              number="10"
              title="Data retention"
            >
              <p>
                We retain personal information only for as long
                as reasonably necessary for the purpose for
                which it was collected, subject to applicable
                legal, regulatory and operational requirements.
              </p>

              <p>
                For example, enquiry and booking information
                may need to be retained while we respond to
                your request, coordinate classes, manage an
                ongoing learning arrangement or address a
                related issue.
              </p>

              <p>
                Certain records may need to be retained for
                longer where required by law or necessary
                to establish, exercise or defend legal claims.
              </p>

              <p>
                Information that is no longer required should
                be securely deleted, anonymised or otherwise
                disposed of in accordance with the applicable
                retention process.
              </p>
            </Section>

            <Section
              id="security"
              number="11"
              title="Data security"
            >
              <p>
                We recognise the importance of protecting
                personal information against unauthorised
                access, loss, misuse, alteration and disclosure.
              </p>

              <p>
                Appropriate security measures should be
                implemented according to the nature of
                the information and the systems used to
                process it.
              </p>

              <p>
                However, no website, online platform,
                electronic transmission or storage system
                can be guaranteed to be completely secure.
              </p>

              <p>
                You should use appropriate precautions when
                sharing information online and avoid sending
                confidential account credentials or payment
                details through general enquiry forms.
              </p>
            </Section>

            <Section
              id="cookies"
              number="12"
              title="Cookies and website technologies"
            >
              <p>
                Websites may use cookies and similar
                technologies to support functionality,
                remember preferences, understand website
                performance or improve the browsing
                experience.
              </p>

              <p>
                Whether RhyVidya uses these technologies,
                and which categories are active, depends
                on the website&apos;s actual configuration.
              </p>

              <p>
                If analytics, advertising or other tracking
                technologies are enabled, this policy and
                any required cookie notice should identify
                the relevant categories, purposes and
                available user controls.
              </p>

              <p>
                You may also be able to manage cookies
                through your browser settings. Blocking
                certain cookies may affect some website
                functions.
              </p>
            </Section>

            <Section
              id="rights"
              number="13"
              title="Your privacy rights"
            >
              <p>
                Depending on the privacy laws that apply
                to you, you may have rights concerning
                your personal information.
              </p>

              <p>These may include the right to:</p>

              <BulletList
                items={[
                  "Request access to personal information held about you.",
                  "Ask for inaccurate or incomplete information to be corrected.",
                  "Request deletion of information where legally applicable.",
                  "Withdraw consent where processing relies on consent.",
                  "Object to or request restrictions on certain processing activities.",
                  "Request a copy of information in a portable format where applicable.",
                  "Raise a complaint with the relevant privacy regulator.",
                ]}
              />

              <p>
                A parent or legal guardian may exercise
                appropriate rights on behalf of a child
                where permitted by applicable law.
              </p>

              <p>
                To make a privacy request, contact us using
                the details below. We may need to verify
                your identity or authority before responding.
              </p>

              <p>
                Some requests may be subject to legal
                exceptions or limitations. We will handle
                requests in accordance with applicable law.
              </p>
            </Section>

            <Section
              id="marketing"
              number="14"
              title="Marketing communications"
            >
              <p>
                We may communicate with you about an enquiry,
                requested assessment, booking or existing
                learning arrangement.
              </p>

              <p>
                Promotional or marketing communications
                should only be sent where an appropriate
                legal basis or consent exists under the
                applicable laws.
              </p>

              <p>
                Where marketing emails are sent, you should
                be provided with an appropriate way to
                unsubscribe or withdraw consent, as required
                by law.
              </p>
            </Section>

            <Section
              id="external-links"
              number="15"
              title="External links"
            >
              <p>
                Our website may contain links to other
                websites, educational resources and
                third-party platforms.
              </p>

              <p>
                These external websites operate independently
                and may have their own privacy practices.
                We encourage you to review their privacy
                policies before submitting personal
                information.
              </p>

              <p>
                This Privacy Policy applies to RhyVidya&apos;s
                website and the information-handling
                activities described in this document,
                not to independent third-party websites.
              </p>
            </Section>

            <Section
              id="changes"
              number="16"
              title="Changes to this policy"
            >
              <p>
                We may update this Privacy Policy to reflect
                changes in our services, website technology,
                information-handling practices or legal
                requirements.
              </p>

              <p>
                The latest version will be published on
                this page with a revised update date.
              </p>

              <p>
                Where changes materially affect how
                personal information is handled, we will
                take appropriate steps to communicate
                those changes where required by law.
              </p>
            </Section>

            <Section
              id="contact"
              number="17"
              title="Contact us"
            >
              <p>
                If you have questions about this Privacy
                Policy, want to make a privacy request
                or have concerns about how your information
                is handled, please contact RhyVidya.
              </p>

              <div className="mt-5 rounded-2xl border border-[#e9e5ef] bg-white p-6">
                <p className=" text-xl font-medium text-[#24223b]">
                  RhyVidya
                </p>

                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a96a7]">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 inline-block font-semibold text-violet-700 hover:text-violet-900"
                    >
                      {SITE.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a96a7]">
                      Phone
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-1 inline-block font-semibold text-[#343149]"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a96a7]">
                      Website
                    </p>
                    <a
                      href={SITE.url}
                      className="mt-1 inline-block font-semibold text-violet-700"
                    >
                      {SITE.url}
                    </a>
                  </div>
                </div>
              </div>
            </Section>

            {/* CLOSING CARD */}
            <div className="mt-10 overflow-hidden rounded-2xl bg-[#11112b] p-7 text-white sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3 19 6v5c0 4.7-3 8-7 10-4-2-7-5.3-7-10V6l7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.22em] text-violet-300">
                Privacy matters
              </p>

              <h2 className="mt-4  text-3xl leading-tight">
                A better learning experience begins with trust.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-white/55">
                Thank you for choosing RhyVidya. We appreciate
                the trust you place in us when sharing information
                about your learning journey.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#17172d] transition hover:bg-violet-100"
                >
                  Contact us
                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="rounded-full border border-white/20 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: `${SITE.url}/privacy-policy`,
            description:
              "RhyVidya Privacy Policy explaining the handling of personal information submitted through its website and online learning services.",
            isPartOf: {
              "@type": "WebSite",
              name: SITE.name,
              url: SITE.url,
            },
          }),
        }}
      />
    </main>
  );
}
