"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { FOUNDER } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 lg:py-40 bg-brand-warm"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — image */}
          <Reveal direction="left">
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-brand-stone/20">
              <Image
                src="/images/about-survey-equipment.avif"
                alt="Professional DGPS equipment set up at an infrastructure project site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent corner detail */}
              <div className="absolute bottom-0 left-0 bg-brand-accent px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                  Est. 2026
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — text content */}
          <div>
            <Reveal direction="up">
              <SectionLabel>About the Company</SectionLabel>
            </Reveal>

            <Reveal direction="up">
              <h2
                id="about-heading"
                className="mt-4 text-3xl sm:text-[2.25rem] lg:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-brand-charcoal"
              >
                Engineering precision.
                <br />
                Infrastructure expertise.
              </h2>
            </Reveal>

            <Reveal direction="up">
              <p className="mt-6 text-base leading-relaxed text-brand-slate">
                Panchsheel Geo Infra Solution is a geospatial and infrastructure
                surveying company headquartered in Bhopal, Madhya Pradesh. We
                provide professional surveying services across India using DGPS,
                Drone, Total Station, LiDAR, and GIS technologies.
              </p>
            </Reveal>

            <Reveal direction="up">
              <p className="mt-4 text-base leading-relaxed text-brand-slate">
                Our work supports infrastructure development, engineering
                projects, transportation, mining, renewable energy, and
                government initiatives. We deliver precise, reliable survey data
                on schedule — because every engineering decision depends on
                accurate ground truth.
              </p>
            </Reveal>

            {/* Founder signature */}
            <Reveal direction="up">
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-brand-concrete mb-1">Led by</p>
                  <p className="text-sm font-semibold text-brand-charcoal leading-tight">{FOUNDER.name}</p>
                  <p className="text-[0.75rem] text-brand-slate mt-0.5">{FOUNDER.title}</p>
                  <a
                    href={FOUNDER.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-[0.7rem] font-medium text-brand-accent hover:text-brand-charcoal transition-colors duration-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up">
              <div className="mt-8 border-t border-border">
                {[
                  { label: "Positioning Accuracy", value: "Sub-centimetre DGPS" },
                  { label: "Operations", value: "PAN India" },
                  { label: "Survey Method", value: "Technology-driven field methodology" },
                  { label: "Project Delivery", value: "On-schedule execution" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between py-4 border-b border-border gap-8"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-concrete shrink-0">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-brand-charcoal text-right">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
