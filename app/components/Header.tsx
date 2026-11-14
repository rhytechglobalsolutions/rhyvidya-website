
"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "../data";

const SUBJECT_LINKS = [
  { href: "/subjects/hindi", label: "Hindi", number: "01" },
  { href: "/subjects/tamil", label: "Tamil", number: "02" },
  { href: "/subjects/physics", label: "Physics", number: "03" },
  { href: "/subjects/mathematics", label: "Mathematics", number: "04" },
  { href: "/subjects/abacus", label: "Abacus", number: "05" },
  { href: "/subjects/coding", label: "Coding", number: "06" },
  { href: "/subjects/english", label: "English", number: "07" },
];

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/teachers", label: "Our teachers" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setSubjectsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Premium announcement strip */}
      <div className="hidden border-b border-white/10 bg-[#10152b] text-white md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            <p className="text-[10px] font-medium tracking-[0.16em] text-white/65">
              LIVE ONLINE LEARNING
              <span className="mx-2 text-white/25">/</span>
              PERSONAL ATTENTION. REAL PROGRESS.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SITE.email}`}
              className="text-[10px] tracking-[0.08em] text-white/60 transition hover:text-white"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.phoneHref}
              className="text-[10px] font-semibold tracking-[0.08em] text-white/80 transition hover:text-white"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-[#e9e7f0] bg-[#fffefa]/95 shadow-[0_8px_35px_rgba(24,24,50,0.045)] backdrop-blur-2xl">
        <nav
          className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-12"
          aria-label="Primary navigation"
        >
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="RhyVidya home"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="relative flex h-12 w-12 items-center justify-center sm:h-[54px] sm:w-[54px]">
              <div className="absolute inset-0 rounded-2xl bg-[#7562d9]/[0.07] transition duration-500 group-hover:rotate-6 group-hover:bg-[#7562d9]/[0.13]" />
              <img
                src={SITE.logoHeader}
                width={48}
                height={48}
                alt={SITE.logoAlt}
                className="relative h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-[25px] font-semibold leading-none tracking-[-0.055em] text-[#171b35] sm:text-[29px]">
                RhyVidya
                <span className="text-[#7864d9]">.</span>
              </span>
              <span className="mt-1.5 text-[8px] font-semibold tracking-[0.23em] text-[#85849a] sm:text-[9px]">
                LEARN · CREATE · EMPOWER
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 xl:flex">
            <Link
              href="/how-it-works"
              className="text-[12px] font-semibold tracking-[0.01em] text-[#62647a] transition-colors duration-200 hover:text-[#7562d9]"
            >
              How it works
            </Link>

            {/* Subjects dropdown */}
            <div className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex items-center gap-2 py-5 text-[12px] font-semibold text-[#62647a] transition-colors hover:text-[#7562d9]"
              >
                Subjects
                <svg
                  className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m4 6 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-[310px] -translate-x-1/2 translate-y-3 rounded-2xl border border-[#eceaf3] bg-white p-3 opacity-0 shadow-[0_25px_70px_rgba(26,24,58,0.13)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="px-3 pb-3 pt-2">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9b96b2]">
                    Explore learning
                  </p>
                  <p className="mt-1 font-serif text-lg text-[#171b35]">
                    Find your subject.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  {SUBJECT_LINKS.map((subject) => (
                    <Link
                      key={subject.href}
                      href={subject.href}
                      className="group/item flex items-center gap-2 rounded-xl px-3 py-3 transition-colors hover:bg-[#f5f3ff]"
                    >
                      <span className="text-[9px] font-semibold text-[#aaa5c0]">
                        {subject.number}
                      </span>
                      <span className="text-[11px] font-semibold text-[#45465d] transition-colors group-hover/item:text-[#7562d9]">
                        {subject.label}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-2 border-t border-[#f0eef5] px-3 pt-3">
                  <Link
                    href="/#subjects"
                    className="flex items-center justify-between text-[11px] font-bold text-[#7562d9] transition hover:text-[#5140b5]"
                  >
                    Explore all subjects
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-semibold text-[#62647a] transition-colors duration-200 hover:text-[#7562d9]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 xl:flex">
            <div className="h-8 w-px bg-[#e9e7f0]" />

            <Link
              href="/#book"
              className="group relative inline-flex h-[46px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#201d42] px-6 text-[11px] font-bold tracking-[0.025em] text-white shadow-[0_8px_24px_rgba(32,29,66,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7562d9] hover:shadow-[0_12px_28px_rgba(117,98,217,0.25)]"
            >
              <span className="relative z-10">Book a free month</span>
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M8 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e9e7f0] bg-white text-[#201d42] transition hover:border-[#7562d9] hover:text-[#7562d9] xl:hidden"
          >
            {open ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-[#eceaf3] bg-[#fffefa] transition-all duration-300 ease-in-out xl:hidden ${
            open ? "max-h-[85vh] opacity-100" : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="max-h-[85vh] overflow-y-auto px-5 pb-7 pt-5 sm:px-8">
            <div className="mb-5">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a09bb5]">
                Navigation
              </p>

              <div className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[13px] font-semibold text-[#34344f] transition hover:bg-[#f5f3ff] hover:text-[#7562d9]"
                  >
                    {link.label}
                    <span className="text-[#aaa5c0]">↗</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[#eceaf3] pt-5">
              <button
                type="button"
                onClick={() => setSubjectsOpen(!subjectsOpen)}
                aria-expanded={subjectsOpen}
                className="flex w-full items-center justify-between px-4 py-2 text-left text-[9px] font-bold uppercase tracking-[0.2em] text-[#a09bb5]"
              >
                Explore subjects
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    subjectsOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m4 6 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`grid grid-cols-2 gap-1 overflow-hidden transition-all duration-300 ${
                  subjectsOpen
                    ? "mt-3 max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {SUBJECT_LINKS.map((subject) => (
                  <Link
                    key={subject.href}
                    href={subject.href}
                    onClick={closeMenu}
                    className="rounded-xl bg-[#f7f6fb] px-4 py-3 text-[12px] font-semibold text-[#55546d] transition hover:bg-[#eeebff] hover:text-[#7562d9]"
                  >
                    {subject.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#171a35] p-5">
              <p className="font-serif text-xl text-white">
                Your learning journey starts here.
              </p>
              <p className="mt-2 text-[11px] leading-5 text-white/55">
                Experience personalised live online classes with RhyVidya.
              </p>

              <Link
                href="/#book"
                onClick={closeMenu}
                className="mt-5 flex h-12 items-center justify-center gap-3 rounded-full bg-[#8874ec] text-[11px] font-bold text-white transition hover:bg-[#7562d9]"
              >
                Book your free month
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-5 flex flex-col gap-2 px-2 text-[11px] text-[#89879c]">
              <a href={`mailto:${SITE.email}`} className="hover:text-[#7562d9]">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="hover:text-[#7562d9]">
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
