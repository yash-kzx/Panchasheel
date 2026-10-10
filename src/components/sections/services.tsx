"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 lg:py-20 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — left-aligned, editorial */}
        <div className="max-w-2xl mb-10 lg:mb-12">
          <Reveal direction="up">
            <SectionLabel>Services</SectionLabel>
          </Reveal>
          <Reveal direction="up">
            <h2
              id="services-heading"
              className="mt-3 text-3xl sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-tight tracking-tight text-brand-charcoal"
            >
              Surveying solutions for
              <br />
              complex infrastructure.
            </h2>
          </Reveal>
          <Reveal direction="up">
            <p className="mt-4 text-[0.95rem] lg:text-[1.05rem] leading-[1.6] text-brand-slate">
              From initial reconnaissance to final deliverables — our survey
              services cover every stage of infrastructure and engineering
              projects, using the right technology for each requirement.
            </p>
          </Reveal>
        </div>

        {/* Services grid — 2-column editorial list, not cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-b border-border">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              direction="up"
              delay={0.1 + index * 0.06}
            >
              <article className="group relative border-t border-border pt-6 pb-8 pl-6">
                {/* Amber accent bar — draws down on hover */}
                <div
                  className="absolute left-0 inset-y-0 w-0.5 bg-brand-accent origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <span
                  className="block text-[0.65rem] font-mono text-brand-concrete tabular-nums mb-3"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.05rem] font-bold text-brand-charcoal mb-3 leading-snug group-hover:text-brand-steel transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.6] text-brand-slate">
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
