"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE_NAME, CONTACT } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-brand-warm/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo / brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={`${SITE_NAME} — Home`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded bg-brand-charcoal">
            <span className="text-sm font-bold text-brand-warm tracking-tight">
              PG
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-semibold leading-tight text-brand-charcoal">
              Panchsheel
            </span>
            <span className="block text-[11px] font-medium leading-tight text-brand-slate tracking-wide">
              Geo Infra Solution
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-brand-steel transition-colors hover:text-brand-charcoal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${CONTACT.phone[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-brand-steel hover:text-brand-charcoal transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{CONTACT.phone[0]}</span>
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded bg-brand-charcoal px-5 py-2.5 text-sm font-medium text-brand-warm transition-colors hover:bg-brand-steel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded text-brand-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-[72px] z-40 bg-brand-warm"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-6 py-8">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 text-lg font-medium text-brand-charcoal border-b border-border"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`tel:${CONTACT.phone[0].replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-brand-steel"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{CONTACT.phone[0]}</span>
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded bg-brand-charcoal px-5 py-3 text-sm font-medium text-brand-warm"
                onClick={() => setMobileOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
