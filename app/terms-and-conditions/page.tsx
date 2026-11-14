
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: "Terms & Conditions | RhyVidya",
  description:
    "Read the RhyVidya Terms and Conditions covering online classes, bookings, assessments, payments, learner responsibilities and use of our website.",
  alternates: {
    canonical: `${SITE.url}/terms-and-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | RhyVidya",
    description:
      "Understand the terms that apply when using RhyVidya's website and online learning services.",
    url: `${SITE.url}/terms-and-conditions`,
    siteName: SITE.name,
    type: "website",
  },
};

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "eligibility", title: "2. Eligibility and guardians" },
  { id: "services", title: "3. Our learning services" },
  { id: "booking", title: "4. Assessments and bookings" },
  { id: "free-month", title: "5. Free first month offer" },
  { id: "fees", title: "6. Fees and payments" },
  { id: "scheduling", title: "7. Scheduling and cancellations" },
  { id: "responsibilities", title: "8. Learner responsibilities" },
  { id: "technology", title: "9. Technology and online classes" },
  { id: "intellectual-property", title: "10. Intellectual property" },
  { id: "privacy", title: "11. Privacy and communications" },
  { id: "third-party", title: "12. Third-party services" },
  { id: "disclaimer", title: "13. Disclaimers" },
  { id: "liability", title: "14. Limitation of liability" },
  { id: "termination", title: "15. Suspension and termination" },
  { id: "changes", title: "16. Changes to these terms" },
  { id: "law", title: "17. Governing law" },
  { id: "contact", title: "18. Contact us" },
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
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-[#ece9e4] py-9 sm:py-11">
      <div className="flex gap-5 sm:gap-7">
        <span className="pt-1  text-lg text-violet-400">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className=" text-2xl font-medium tracking-[-0.035em] text-[#19182e] sm:text-[1.75rem]">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-[14px] leading-[1.9] text-[#686779]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#19182e]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101027]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-48 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[130px]" />
          <div className="absolute -bottom-64 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:70px_70px]" />
        </div>

        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
                Legal information
              </span>
            </div>

            <h1 className="mt-8  text-5xl font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl lg:text-[76px]">
              Terms &
              <br />
              <span className="italic text-violet-300">
                Conditions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Clear expectations create better learning experiences.
              Please read these terms carefully before using RhyVidya
              or booking an online class.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-xs text-white/45">
              <span>Website: {SITE.url}</span>
              <span>Last updated: 14 November 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#eae6df] bg-white p-6 shadow-[0_12px_40px_rgba(30,25,55,0.035)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700">
                On this page
              </p>

              <nav aria-label="Terms and conditions sections" className="mt-5">
                <ol className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex gap-3 text-[11px] leading-5 text-[#777487] transition hover:text-violet-700"
                      >
                        <span className="shrink-0 font-semibold text-[#b1adc0] transition group-hover:text-violet-500">
                          {section.id === "introduction"
                            ? "01"
                            : String(sections.indexOf(section) + 1).padStart(2, "0")}
                        </span>
                        <span>{section.title.replace(/^\d+\.\s/, "")}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-7 border-t border-[#eeeaf0] pt-5">
                <p className="text-xs leading-6 text-[#898697]">
                  Have a question about these term?
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

          {/* LEGAL CONTENT */}
          <article className="min-w-0">
            <div className="border-b border-[#ece9e4] pb-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-700">
                Please read carefully
              </p>
              <h2 className="mt-4  text-3xl font-medium tracking-[-0.04em] text-[#19182e] sm:text-4xl">
                Your relationship with RhyVidya
              </h2>
              <p className="mt-5 text-[14px] leading-[1.95] text-[#686779]">
                These Terms and Conditions explain the rules and
                responsibilities that apply when you visit our website,
                enquire about our programmes, register your interest or
                participate in our online learning services.
              </p>
            </div>

            <Section id="introduction" number="01" title="Introduction">
              <p>
                Welcome to <strong className="text-[#302e46]">RhyVidya</strong>.
                RhyVidya provides online educational services intended to
                support learners through structured classes and teacher-led
                learning experiences.
              </p>
              <p>
                In these terms, &quot;RhyVidya&quot;, &quot;we&quot;,
                &quot;our&quot; and &quot;us&quot; refer to the RhyVidya
                service. &quot;You&quot; and &quot;your&quot; refer to
                anyone visiting our website, making an enquiry, booking
                a class or using our services.
              </p>
              <p>
                By accessing our website or requesting our services, you
                acknowledge that you have read these terms. Where a separate
                written agreement or confirmed booking arrangement applies,
                that agreement should be read together with these terms.
              </p>
            </Section>

            <Section id="eligibility" number="02" title="Eligibility and guardians">
              <p>
                Our programmes may be suitable for children, teenagers and
                adult learners, depending on the subject and programme.
              </p>
              <p>
                If a learner is under the age of legal majority in their
                place of residence, a parent or legal guardian must make
                the booking, provide the necessary consent and take
                responsibility for the learner&apos;s participation.
              </p>
              <p>
                Parents and guardians should provide accurate contact
                information and remain available for communications
                relating to the learner&apos;s classes, scheduling and
                educational arrangements.
              </p>
            </Section>

            <Section id="services" number="03" title="Our learning services">
              <p>
                RhyVidya offers live online learning and related educational
                services. Subject availability may change as programmes,
                educators and schedules develop.
              </p>
              <p>
                At the time of publication, Hindi, Physics and Mathematics
                are listed as available subjects. Tamil, Abacus, Coding
                and English may be listed as upcoming or coming-soon
                programmes.
              </p>
              <p>
                A subject being displayed on the website does not guarantee
                immediate enrolment or a particular teacher, class time
                or start date. We will confirm availability before
                accepting a booking.
              </p>
              <p>
                Classes may be offered in 1-to-1 or group formats.
                The format, teacher, schedule and delivery arrangements
                will be confirmed as part of the booking process.
              </p>
            </Section>

            <Section id="booking" number="04" title="Assessments and bookings">
              <p>
                Website forms allow prospective learners or their
                parents and guardians to submit an enquiry or booking
                request. Submitting a form is a request for contact
                or an appointment; it does not by itself guarantee
                a confirmed class.
              </p>
              <p>
                A booking becomes confirmed when RhyVidya communicates
                acceptance and the agreed appointment details to the
                contact email provided.
              </p>
              <p>
                You are responsible for ensuring that the name, email
                address, phone number, subject, preferred time and
                other information submitted are accurate.
              </p>
              <p>
                RhyVidya may contact you to clarify information or
                suggest an alternative appointment if the requested
                teacher or time is unavailable.
              </p>
            </Section>

            <Section id="free-month" number="05" title="Free first month offer">
              <p>
                RhyVidya currently advertises a free assessment and a
                free first month of classes as part of its introductory
                learning offer.
              </p>
              <p>
                The offer is subject to assessment, programme availability,
                scheduling and confirmation by RhyVidya. The details
                applicable to a learner will be communicated before
                the booking is finalised.
              </p>
              <p>
                The free introductory period should not be interpreted
                as a promise of unlimited classes, unlimited access
                or a particular number of sessions unless those details
                have been confirmed in writing.
              </p>
              <p>
                Any paid subscription, deposit, renewal or continuation
                arrangement must be explained to the parent, guardian
                or adult learner before the paid arrangement begins.
              </p>
            </Section>

            <Section id="fees" number="06" title="Fees and payments">
              <p>
                Applicable tuition fees, subscription options, payment
                schedules and any discounts will be communicated before
                a learner enters a paid programme.
              </p>
              <p>
                RhyVidya may offer monthly, quarterly, half-yearly or
                yearly subscription arrangements. The fees and any
                applicable savings will depend on the plan offered
                and confirmed at the time of enrolment.
              </p>
              <p>
                Where a deposit or advance payment applies, the amount,
                due date and how it will be treated must be disclosed
                before payment is requested.
              </p>
              <p>
                You should review the payment information supplied
                during enrolment and retain receipts or payment
                confirmations for your records.
              </p>
              <p>
                Do not assume that a discount, payment term, deposit
                adjustment or renewal applies unless it has been
                confirmed in writing by RhyVidya.
              </p>
            </Section>

            <Section id="scheduling" number="07" title="Scheduling and cancellations">
              <p>
                Classes are arranged by appointment. Weekday and
                weekend appointments may be available, depending on
                teacher availability and the programme selected.
              </p>
              <p>
                Preferred times submitted through the booking form
                are requests. The teacher or RhyVidya team will confirm
                the final appointment by email.
              </p>
              <p>
                If you need to change or cancel an appointment, contact
                RhyVidya as early as reasonably possible using the
                contact details on this website.
              </p>
              <p>
                Rescheduling is subject to teacher availability and
                confirmation. Any applicable cancellation deadlines,
                missed-class rules, make-up arrangements or fees should
                be communicated to you before enrolment.
              </p>
              <p>
                If RhyVidya needs to change an appointment, we will
                contact the registered email address to discuss an
                alternative arrangement.
              </p>
            </Section>

            <Section id="responsibilities" number="08" title="Learner responsibilities">
              <p>
                Learners are expected to participate respectfully,
                follow reasonable teacher instructions and use the
                online learning environment for its intended educational
                purpose.
              </p>
              <p>
                Parents and guardians are responsible for helping
                younger learners attend scheduled sessions, access
                the required technology and follow appropriate online
                safety practices.
              </p>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-violet-500">
                <li>Disrupt classes or intentionally interfere with another learner&apos;s participation.</li>
                <li>Harass, threaten, bully or discriminate against teachers, learners or staff.</li>
                <li>Share class access links with unauthorised individuals.</li>
                <li>Attempt to access systems, accounts or materials without permission.</li>
                <li>Copy, distribute or misuse RhyVidya learning materials without authorisation.</li>
              </ul>
            </Section>

            <Section id="technology" number="09" title="Technology and online classes">
              <p>
                Online classes may be delivered using third-party
                communication and learning platforms. Depending on
                the arrangement, these may include Google Meet,
                Zoho Meeting, YouTube or WhatsApp.
              </p>
              <p>
                The teacher or RhyVidya team will communicate the
                relevant platform and access details for the confirmed
                appointment.
              </p>
              <p>
                You are responsible for having a suitable device,
                a reasonably reliable internet connection and any
                necessary software or browser access.
              </p>
              <p>
                RhyVidya is not responsible for interruptions caused
                by your internet provider, device, power supply or
                third-party platform. If a technical issue affects
                a scheduled class, contact the team so that an
                appropriate next step can be discussed.
              </p>
            </Section>

            <Section id="intellectual-property" number="10" title="Intellectual property">
              <p>
                Unless otherwise stated, the RhyVidya name, branding,
                website design, written content, graphics and original
                learning materials are owned by or licensed to the
                relevant rights holder.
              </p>
              <p>
                Learners may use class materials supplied to them
                for their own personal educational purposes.
              </p>
              <p>
                You must not reproduce, publish, sell, distribute,
                commercially exploit or publicly share RhyVidya
                materials without prior written permission from
                the relevant rights holder.
              </p>
              <p>
                These terms do not transfer ownership of any
                intellectual property to you.
              </p>
            </Section>

            <Section id="privacy" number="11" title="Privacy and communications">
              <p>
                Information submitted through our website may be used
                to respond to enquiries, arrange assessments, manage
                bookings, coordinate classes and communicate relevant
                service information.
              </p>
              <p>
                Please do not submit unnecessary sensitive personal
                information through general enquiry or booking forms.
              </p>
              <p>
                Personal information should be handled in accordance
                with the RhyVidya Privacy Policy. If a separate Privacy
                Policy is published on our website, it should be read
                together with these terms.
              </p>
              <p>
                By providing your contact details, you agree that
                RhyVidya may use them to respond to your enquiry
                and communicate about the requested service.
              </p>
            </Section>

            <Section id="third-party" number="12" title="Third-party services">
              <p>
                Our website or classes may link to or use services
                operated by third parties. These services may have
                their own terms, privacy policies and technical
                requirements.
              </p>
              <p>
                RhyVidya does not control third-party websites or
                platforms and is not responsible for their independent
                content, policies or availability.
              </p>
              <p>
                Your use of a third-party service may be subject
                to the terms and conditions of that provider.
              </p>
            </Section>

            <Section id="disclaimer" number="13" title="Disclaimers">
              <p>
                RhyVidya aims to provide a supportive and structured
                learning experience. However, individual educational
                progress varies according to factors such as prior
                knowledge, attendance, practice, learning needs and
                participation.
              </p>
              <p>
                We do not guarantee a particular grade, examination
                result, qualification, admission outcome or rate
                of academic improvement.
              </p>
              <p>
                Website information about subjects, teachers, schedules
                and programmes is provided for general information
                and may be updated as our services develop.
              </p>
              <p>
                Nothing in these terms excludes any consumer rights
                or legal protections that cannot lawfully be excluded.
              </p>
            </Section>

            <Section id="liability" number="14" title="Limitation of liability">
              <p>
                To the extent permitted by applicable law, RhyVidya
                will not be responsible for indirect or consequential
                losses arising from your use of the website or
                participation in online learning services.
              </p>
              <p>
                Nothing in these terms limits liability where doing
                so would be unlawful, including liability that cannot
                legally be excluded or restricted under applicable
                consumer protection law.
              </p>
              <p>
                Any limitation of liability will apply only to the
                extent permitted by the laws governing the relevant
                service arrangement.
              </p>
            </Section>

            <Section id="termination" number="15" title="Suspension and termination">
              <p>
                RhyVidya may restrict or suspend access to a class
                or service where reasonably necessary to address
                misuse, serious misconduct, safety concerns, unauthorised
                access or a material breach of these terms.
              </p>
              <p>
                Where appropriate, we will communicate the reason
                for the action and any available next steps.
              </p>
              <p>
                Ending access to a service does not remove payment
                obligations that have already lawfully arisen.
                Any outstanding refund or payment issue will be
                handled according to the applicable written
                enrolment terms and law.
              </p>
            </Section>

            <Section id="changes" number="16" title="Changes to these terms">
              <p>
                We may update these Terms and Conditions to reflect
                changes to our services, website, operational practices
                or legal requirements.
              </p>
              <p>
                The latest version will be published on this page
                with an updated revision date. Where a change
                materially affects an existing booking or paid
                arrangement, we will take reasonable steps to
                communicate the relevant change.
              </p>
              <p>
                We encourage you to review this page periodically.
              </p>
            </Section>

            <Section id="law" number="17" title="Governing law">
              <p>
                These terms are intended to operate subject to the
                mandatory laws and consumer protections applicable
                to the service and the parties.
              </p>
              <p>
                The governing jurisdiction and courts must be
                identified by the legal entity operating RhyVidya
                before these terms are published as a final legal
                agreement.
              </p>
            </Section>

            <Section id="contact" number="18" title="Contact us">
              <p>
                If you have questions about these Terms and Conditions
                or need help with a booking, please contact the
                RhyVidya team.
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

            {/* CLOSING */}
            <div className="mt-10 rounded-2xl bg-[#11112b] p-7 text-white sm:p-9">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-violet-300">
                RhyVidya
              </p>
              <h2 className="mt-4  text-3xl leading-tight">
                Knowledge is Power.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/55">
                Thank you for taking the time to understand the terms
                that support a positive learning experience.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#17172d] transition hover:bg-violet-100"
                >
                  Contact us
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-white/20 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  Back to home
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
            name: "Terms and Conditions",
            url: `${SITE.url}/terms-and-conditions`,
            description:
              "Terms and Conditions governing use of the RhyVidya website and online learning services.",
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
