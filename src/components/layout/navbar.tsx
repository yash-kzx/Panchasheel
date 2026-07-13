"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-warm/97 backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid rgba(26,36,54,0.12)", boxShadow: "0 1px 0 rgba(158,122,32,0.25)" } : {}}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        style={{ height: "64px" }}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${SITE_NAME} — Home`}
          className="flex-shrink-0"
        >
          {/*
           * The logo has a white background.
           * We wrap it in a white rounded container so it renders cleanly
           * on both the transparent (dark hero) and scrolled (light) navbar states.
           * The container is subtle on light bg, essential on dark bg.
           */}
          <div
            className="flex items-center justify-center bg-white px-2.5 py-1"
            style={{
              boxShadow: scrolled
                ? "0 0 0 1px rgba(0,0,0,0.06)"
                : "0 1px 4px rgba(0,0,0,0.35)",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Panchasheel Geo Infra Solutions — company logo"
              width={120}
              height={120}
              className="h-9 w-auto object-contain"
              priority
              quality={90}
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[0.8125rem] font-medium transition-colors ${
                  scrolled
                    ? "text-brand-steel hover:text-brand-charcoal"
                    : "text-white/75 hover:text-white"
                }`}
                style={{ letterSpacing: "0.01em" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${CONTACT.phone[0].replace(/\s/g, "")}`}
            className={`flex items-center gap-1.5 text-[0.8125rem] font-medium transition-colors ${
              scrolled
                ? "text-brand-steel hover:text-brand-charcoal"
                : "text-white/70 hover:text-white"
            }`}
            style={{ letterSpacing: "0.01em" }}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{CONTACT.phone[0]}</span>
          </a>
          <Link
            href="#contact"
            className="navbar-cta inline-flex items-center justify-center px-5 py-2.5 text-[0.8125rem] font-semibold text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            style={{
              background: scrolled
                ? "linear-gradient(135deg, #1a2436 0%, #344455 100%)"
                : "linear-gradient(135deg, #9e7a20 0%, #7a5e18 100%)",
              letterSpacing: "0.02em",
              boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`lg:hidden flex items-center justify-center h-10 w-10 rounded transition-colors ${
            scrolled ? "text-brand-charcoal" : "text-white"
          }`}
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
          className="lg:hidden fixed inset-0 top-[64px] z-40 bg-brand-warm"
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
