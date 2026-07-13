"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const PRIMARY_INDUSTRIES = [
  {
    name: "Highways",
    description:
      "Corridor surveys, alignment planning, and cross-section mapping for national and state highway projects.",
    image: "/images/industry-highways.jpg",
    imageAlt:
      "Aerial drone view of a national highway corridor cutting through Indian terrain",
  },
  {
    name: "Mining",
    description:
      "Pit surveys, volumetric estimation, lease boundary demarcation, and compliance mapping.",
    image: "/images/industry-mining.jpg",
    imageAlt: "Aerial photograph of an open-cast mining operation in India",
  },
  {
    name: "Solar Power",
    description:
      "Site assessment, terrain analysis, and land surveys for solar plant installation.",
    image: "/images/industry-solar.jpg",
    imageAlt:
      "Aerial view of a large solar power plant with geometric panel arrays in Rajasthan",
  },
  {
    name: "Railways",
    description:
      "Track alignment surveys, station area mapping, and corridor topographical documentation.",
    image: "/images/industry-railways.jpg",
    imageAlt: "Aerial drone view of railway tracks disappearing to the horizon",
  },
  {
    name: "Construction",
    description:
      "Pre-construction surveys, earthwork volume calculations, site layout, and as-built documentation.",
    image: "/images/industry-construction.jpg",
    imageAlt: "Active highway construction site with earthmoving machinery and workers",
  },
] as const;

const SECONDARY_INDUSTRIES = [
  "Smart Cities",
  "Transmission Lines",
  "Water Resources",
  "Construction",
  "Irrigation Projects",
  "Government Infrastructure",
] as const;

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative py-28 lg:py-40 bg-brand-charcoal overflow-hidden"
      aria-labelledby="industries-heading"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-8">
        <Image
          src="/images/industries-infrastructure.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — split layout, asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.1}>
              <SectionLabel className="text-brand-accent">
                Industries
              </SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2
                id="industries-heading"
                className="mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white"
              >
                Surveying across
                <br />
                India&apos;s core sectors.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal direction="up" delay={0.3}>
              <p className="text-base leading-relaxed text-brand-concrete">
                Our survey teams operate across India&apos;s most demanding
                infrastructure sectors — from highway corridors and railway
                tracks to active mining sites and renewable energy installations.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Primary industries — photography grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRIMARY_INDUSTRIES.map((industry, index) => (
            <Reveal
              key={industry.name}
              direction="up"
              delay={0.1 + index * 0.07}
            >
              <article className="group relative aspect-[4/3] sm:aspect-[2/3] overflow-hidden rounded-sm bg-brand-steel">
                {/* Photography */}
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text overlay — bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-base font-semibold text-white mb-1.5 leading-tight">
                    {industry.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/70 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {industry.description}
                  </p>
                </div>

                {/* Accent bottom border */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Secondary industries — compact text row */}
        <Reveal direction="up" delay={0.5}>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-concrete mb-5">
              Also serving
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {SECONDARY_INDUSTRIES.map((name) => (
                <span
                  key={name}
                  className="text-sm font-medium text-brand-stone hover:text-white transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
