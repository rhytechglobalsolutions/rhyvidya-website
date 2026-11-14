import type { Metadata } from "next";
import { SITE } from "../data";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact RhyVidya | We're Here to Help",
  description:
    "Contact RhyVidya for online class enquiries, free assessments, learning support and teaching opportunities.",
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  return (
  <div className="mx-auto max-w-[1440px] px-5 pt-20 pb-32 sm:px-10">
      <ContactForm email={SITE.email} />
      </div>
      
  
  );
}