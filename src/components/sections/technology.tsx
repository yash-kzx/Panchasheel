"use client";

import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { TECHNOLOGIES } from "@/lib/constants";

export function TechnologySection() {
  return (
    <section
      id="technology"
      className="py-20 lg:py-28 bg-brand-warm"
      aria-labelledby="technology-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <Reveal direction="up" delay={0.1}>
            <SectionLabel>Technology</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2
              id="technology-heading"
              className="mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-brand-charcoal"
            >
              Modern surveying
              <br />
              equipment and systems.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
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
              <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 lg:py-8 border-t border-border items-baseline pl-5">
                {/* Amber accent bar */}
                <div
                  className="absolute left-0 inset-y-0 w-0.5 bg-brand-accent origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
                  aria-hidden="true"
                />

                {/* Number */}
                <div className="md:col-span-1">
                  <span
                    className="text-xs font-mono text-brand-concrete tabular-nums transition-colors duration-200 group-hover:text-brand-accent"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Name & full name */}
                <div className="md:col-span-3">
                  <h3 className="text-base font-semibold text-brand-charcoal transition-colors duration-200 group-hover:text-brand-accent">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-brand-concrete mt-1">
                    {tech.fullName}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-8">
                  <p className="text-sm leading-relaxed text-brand-slate">
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
