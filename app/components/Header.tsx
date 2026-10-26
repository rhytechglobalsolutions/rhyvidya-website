"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "../data";

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#subjects", label: "Subjects" },
  { href: "/teachers", label: "Teachers" },
  { href: "/subjects/hindi", label: "Hindi" },
  { href: "/subjects/tamil", label: "Tamil" },
  { href: "/subjects/physics", label: "Physics" },
  { href: "/subjects/mathematics", label: "Mathematics" },
  { href: "/subjects/abacus", label: "Abacus" },
  { href: "/subjects/coding", label: "Coding" },
  { href: "/#pricing", label: "Plans" },
  { href: "/#book", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell" id="top">
      <nav className="wrap main-nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="RhyVidya — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logoHeader} width={48} height={48} alt={SITE.logoAlt} />
          <span className="brand-text">
            <strong>RhyVidya</strong>
            <small>LEARN • CREATE • EMPOWER</small>
          </span>
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="navLinks"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
        <div className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {LINKS.map((l) => (
            <Link key={l.href + l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/#bookingForm" onClick={() => setOpen(false)}>
            Book a free month
          </Link>
        </div>
      </nav>
    </header>
  );
}
