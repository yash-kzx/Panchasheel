"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — left-aligned, editorial */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <Reveal direction="up" delay={0.1}>
            <SectionLabel>Services</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2
              id="services-heading"
              className="mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-brand-charcoal"
            >
              Surveying solutions for
              <br />
              complex infrastructure.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              From initial reconnaissance to final deliverables — our survey
              services cover every stage of infrastructure and engineering
              projects, using the right technology for each requirement.
            </p>
          </Reveal>
        </div>

        {/* Services grid — 2-column editorial list, not cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-14">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              direction="up"
              delay={0.1 + index * 0.06}
            >
              <article className="group border-t border-border pt-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-lg font-semibold text-brand-charcoal group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                  <span
                    className="text-xs font-mono text-brand-concrete tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-brand-slate">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
