"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-end overflow-hidden bg-brand-charcoal"
      aria-label="Introduction"
    >
      {/* ── Background image ─────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-survey-field.jpg"
          alt="Survey team conducting DGPS measurement on an infrastructure project site"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.5 }}
          priority
          sizes="100vw"
        />
        {/*
          Three-stop gradient:
          1. Dense charcoal at base  — anchors the text zone
          2. Semi-transparent mid    — preserves photographic midground
          3. Near-transparent top    — lets the sky breathe
          Left-side vignette adds compositional depth on wide viewports.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #1a2436 0%, #1a2436cc 22%, #1a243655 55%, #1a243608 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #1a2436bb 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Thin amber rule — engineering registration mark ───── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, #9e7a20 0%, #9e7a2000 60%)" }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl w-full px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 items-end">

          {/* Left — headline block */}
          <div className="lg:col-span-8">

            {/* Eyebrow */}
            <Reveal direction="up" delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="block h-px w-8 flex-shrink-0"
                  style={{ backgroundColor: "#9e7a20" }}
                  aria-hidden="true"
                />
                <span
                  className="text-[0.625rem] font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "#9e7a20", letterSpacing: "0.28em" }}
                >
                  Geospatial &amp; Infrastructure Surveying
                </span>
              </div>
            </Reveal>

            {/* H1 — three-line rhythm */}
            <Reveal direction="up" delay={0.18}>
              <h1
                className="font-bold leading-[1.04] tracking-tight text-white"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
                  fontFamily: "var(--font-heading)",
                  textShadow: "0 2px 24px rgba(26,36,54,0.45)",
                }}
              >
                Precise ground data
                <br />
                <span style={{ color: "#b8b5b0" }}>for India&apos;s</span>{" "}
                infrastructure.
              </h1>
            </Reveal>

            {/* Body */}
            <Reveal direction="up" delay={0.3}>
              <p
                className="mt-7 leading-[1.75]"
                style={{
                  maxWidth: "44ch",
                  fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
                  color: "rgba(184,181,176,0.80)",
                  fontFamily: "var(--font-inter, sans-serif)",
                }}
              >
                DGPS, Drone, LiDAR, and Total Station surveys for highways,
                railways, mining, solar energy, and government infrastructure
                projects — delivered with engineering precision.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.42}>
              <div className="mt-11 flex flex-wrap gap-4">

                {/* Primary — solid amber-to-dark */}
                <Link
                  href="#contact"
                  id="hero-cta-primary"
                  className="hero-cta-primary inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #9e7a20 0%, #7a5e18 100%)",
                    letterSpacing: "0.02em",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                </Link>

                {/* Secondary — ghost with ruled border */}
                <Link
                  href="#services"
                  id="hero-cta-secondary"
                  className="hero-cta-secondary inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.28)",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Our Services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — metadata panel */}
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.54}>
              <div
                className="border-t pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <dl className="flex flex-row lg:flex-col gap-6 lg:gap-0">

                  <div className="lg:pb-6 lg:border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <dt
                      className="text-[0.5875rem] font-semibold uppercase mb-1.5"
                      style={{ letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)" }}
                    >
                      Headquartered
                    </dt>
                    <dd
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      Bhopal, Madhya Pradesh
                    </dd>
                  </div>

                  <div className="lg:py-6 lg:border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <dt
                      className="text-[0.5875rem] font-semibold uppercase mb-1.5"
                      style={{ letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)" }}
                    >
                      Operations
                    </dt>
                    <dd
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      PAN India
                    </dd>
                  </div>

                  <div className="lg:pt-6">
                    <dt
                      className="text-[0.5875rem] font-semibold uppercase mb-1.5"
                      style={{ letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)" }}
                    >
                      Instruments
                    </dt>
                    <dd
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.82)", lineHeight: "1.6" }}
                    >
                      DGPS &middot; UAV &middot; LiDAR &middot; Total Station
                    </dd>
                  </div>

                </dl>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

    </section>
  );
}
