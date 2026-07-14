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

  /**
   * Close the mobile menu first, then defer the anchor scroll to the next
   * animation frame so the overlay is fully unmounted (and body overflow
   * restored) before the page begins scrolling.
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!mobileOpen) return; // desktop — do nothing special
    e.preventDefault();
    setMobileOpen(false);
    requestAnimationFrame(() => {
      const id = href.replace(/^\/?#/, "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (href.startsWith("#")) {
        // fallback for hash-only hrefs
        window.location.hash = href;
      }
    });
  };

  return (
    <>
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
        style={{ height: "104px" }}
        aria-label="Primary navigation"
      >
        {/* Logo — crossfade between white (hero) and color (scrolled) */}
        <Link
          href="/"
          aria-label={`${SITE_NAME} — Home`}
          className="flex-shrink-0 flex items-center pl-6"
        >
          {/*
           * Two logos stacked in the same box via absolute positioning.
           * On the transparent hero: white logo opacity 1, color logo opacity 0.
           * On scroll: color logo opacity 1, white logo opacity 0.
           * 300ms ease crossfade, zero layout shift.
           * Desktop height: 85px.
           * Responsive: clamp(56px, 6.5vw, 85px) scales gracefully across viewports.
           */}
          <div style={{
            position: "relative",
            height: "clamp(56px, 6.5vw, 85px)",
            width: "auto",
            display: "flex",
            alignItems: "center",
          }}>
            {/* Color logo — visible when scrolled */}
            <Image
              src="/images/navbar-logo.png"
              alt="Panchasheel Geo Infra Solutions — company logo"
              width={370}
              height={100}
              className="w-auto object-contain"
              style={{
                height: "clamp(56px, 6.5vw, 85px)",
                width: "auto",
                maxHeight: "85px",
                display: "block",
                opacity: scrolled ? 1 : 0,
                transition: "opacity 300ms ease",
              }}
              priority
              quality={95}
            />
            {/* White logo — visible over hero (transparent navbar) */}
            <Image
              src="/images/navbar-logo-white.png"
              alt=""
              aria-hidden="true"
              width={370}
              height={100}
              className="w-auto object-contain"
              style={{
                height: "clamp(56px, 6.5vw, 85px)",
                width: "auto",
                maxHeight: "85px",
                position: "absolute",
                top: 0,
                left: 0,
                display: "block",
                opacity: scrolled ? 0 : 1,
                transition: "opacity 300ms ease",
              }}
              priority
              quality={95}
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
    </header>

    {/* Mobile menu panel — rendered OUTSIDE <header> so it escapes the header's
        stacking context and can cover the full viewport without clipping. */}
    {mobileOpen && (
      <div
        id="mobile-menu"
        className="lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100dvh",
          zIndex: 9999,
          overflowY: "auto",
          backgroundColor: "var(--color-brand-warm, #fdf8f0)",
        }}
      >
        {/* Spacer that matches the navbar height so links sit below the bar */}
        <div style={{ height: "104px" }} aria-hidden="true" />

        <div className="flex flex-col px-6 py-8">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-lg font-medium text-brand-charcoal border-b border-border"
                  onClick={(e) => handleNavClick(e, link.href)}
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
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
