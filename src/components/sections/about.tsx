"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-brand-warm"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — image */}
          <Reveal direction="left" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-stone/20">
              <Image
                src="/images/about-survey-equipment.jpg"
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
            <Reveal direction="up" delay={0.15}>
              <SectionLabel>About the Company</SectionLabel>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <h2
                id="about-heading"
                className="mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-brand-charcoal"
              >
                Engineering precision.
                <br />
                Infrastructure expertise.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <p className="mt-6 text-base leading-relaxed text-brand-slate">
                Panchsheel Geo Infra Solution is a geospatial and infrastructure
                surveying company headquartered in Bhopal, Madhya Pradesh. We
                provide professional surveying services across India using DGPS,
                Drone, Total Station, LiDAR, and GIS technologies.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="mt-4 text-base leading-relaxed text-brand-slate">
                Our work supports infrastructure development, engineering
                projects, transportation, mining, renewable energy, and
                government initiatives. We deliver precise, reliable survey data
                on schedule — because every engineering decision depends on
                accurate ground truth.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.45}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { label: "Precision", value: "Sub-centimetre accuracy" },
                  { label: "Reach", value: "PAN India operations" },
                  { label: "Approach", value: "Technology-driven" },
                  { label: "Delivery", value: "On-schedule execution" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-brand-accent pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-concrete mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-brand-charcoal">
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
