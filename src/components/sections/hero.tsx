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
      {/* Background image — placeholder path for original photography */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-survey-field.jpg"
          alt="Survey team conducting DGPS measurement on an infrastructure project site"
          fill
          className="object-cover object-center opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-6 pb-20 pt-40 lg:px-8 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left — headline */}
          <div className="lg:col-span-8">
            <Reveal direction="up" delay={0.1}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6">
                Geospatial & Infrastructure Surveying
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                Precise survey data
                <br className="hidden sm:block" />
                <span className="text-brand-stone"> for India&apos;s</span>
                <br className="hidden sm:block" />
                infrastructure.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-brand-concrete">
                DGPS, Drone, LiDAR, and Total Station surveys for highways,
                railways, mining, solar energy, and government infrastructure
                projects — delivered with engineering precision.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Request a Quote
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — key facts (not meaningless stats — real, specific) */}
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.5}>
              <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-concrete mb-1">
                    Headquartered
                  </p>
                  <p className="text-sm font-medium text-white">
                    Bhopal, Madhya Pradesh
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-concrete mb-1">
                    Operations
                  </p>
                  <p className="text-sm font-medium text-white">PAN India</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-concrete mb-1">
                    Core Expertise
                  </p>
                  <p className="text-sm font-medium text-white">
                    DGPS · Drone · LiDAR
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
