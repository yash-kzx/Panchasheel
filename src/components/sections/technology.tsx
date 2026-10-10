"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { TECHNOLOGIES } from "@/lib/constants";

export function TechnologySection() {
  return (
    <section
      id="technology"
      className="py-16 lg:py-20 bg-brand-warm"
      aria-labelledby="technology-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 lg:mb-12">
          <Reveal direction="up">
            <SectionLabel>Technology</SectionLabel>
          </Reveal>
          <Reveal direction="up">
            <h2
              id="technology-heading"
              className="mt-3 text-3xl sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-tight tracking-tight text-brand-charcoal"
            >
              Modern surveying
              <br />
              equipment and systems.
            </h2>
          </Reveal>
          <Reveal direction="up">
            <p className="mt-4 text-[0.95rem] lg:text-[1.05rem] leading-[1.6] text-brand-slate">
              Every project is executed with the right instrument for the task.
              Our equipment inventory covers precision ground surveys through to
              high-altitude aerial data capture.
            </p>
          </Reveal>
        </div>

        {/* Technology entries — editorial stacked list, not cards */}
        <div className="space-y-0">
          {TECHNOLOGIES.map((tech, index) => (
            <Reveal
              key={tech.name}
              direction="up"
              delay={0.05 + index * 0.06}
            >
              <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-border items-baseline pl-5">
                {/* Amber accent bar */}
                <div
                  className="absolute left-0 inset-y-0 w-0.5 bg-brand-accent origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
                  aria-hidden="true"
                />

                {/* Number */}
                <div className="md:col-span-1">
                  <span
                    className="text-[0.65rem] font-mono text-brand-concrete tabular-nums transition-colors duration-200 group-hover:text-brand-accent"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Name & full name */}
                <div className="md:col-span-3">
                  <h3 className="text-[1.05rem] font-bold text-brand-charcoal transition-colors duration-200 group-hover:text-brand-accent">
                    {tech.name}
                  </h3>
                  <p className="text-[0.8rem] text-brand-concrete mt-1">
                    {tech.fullName}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-8">
                  <p className="text-[0.92rem] leading-[1.6] text-brand-slate">
                    {tech.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
