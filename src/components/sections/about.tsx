"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, Layers, Navigation } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 lg:py-16 bg-brand-warm overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mobile order: text then image. Desktop: Image left, text right. */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* LEFT — SURVEY FIELD IMAGE */}
          <div className="w-full lg:w-[54%] order-2 lg:order-1">
            <Reveal direction="up">
              <div className="relative aspect-[16/10] lg:aspect-[4/3.2] w-full bg-brand-stone/20 overflow-hidden group">
                <Image
                  src="/images/about-survey-equipment.avif"
                  alt="Professional surveying equipment set up at an infrastructure project site"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                
                {/* Optional Image Label */}
                <div className="absolute top-6 left-6 bg-brand-charcoal/90 backdrop-blur-sm px-4 py-2 border border-white/10">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-warm">
                    Field Data Acquisition
                  </p>
                </div>

                {/* Subtle Technical Overlays */}
                <div className="absolute inset-0 pointer-events-none border border-brand-charcoal/10" aria-hidden="true">
                  {/* Crosshair top right */}
                  <div className="absolute top-8 right-8 w-4 h-4 opacity-40">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-charcoal/60 -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-brand-charcoal/60 -translate-x-1/2" />
                  </div>
                  
                  {/* Coordinate marker bottom right */}
                  <div className="absolute bottom-6 right-6 text-[0.6rem] font-mono text-brand-charcoal/60 text-right opacity-70">
                    <p>N 23° 16' 21"</p>
                    <p>E 77° 24' 38"</p>
                  </div>
                  
                  {/* Subtle Grid / Ruler left edge */}
                  <div className="absolute top-1/4 bottom-1/4 left-4 w-[1px] bg-brand-charcoal/20 flex flex-col justify-between opacity-50">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-[1px] bg-brand-charcoal/40" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — ABOUT CONTENT */}
          <div className="w-full lg:w-[46%] relative order-1 lg:order-2">
            {/* Background Graphics */}
            <div className="absolute -inset-x-12 -inset-y-12 pointer-events-none select-none opacity-[0.03] z-0 hidden lg:block" aria-hidden="true">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                <path d="M0,50 Q100,70 200,40 T400,60" stroke="#1a2436" strokeWidth="1" />
                <path d="M0,100 Q150,130 250,90 T400,120" stroke="#1a2436" strokeWidth="1" />
                <path d="M0,150 Q120,180 220,140 T400,160" stroke="#1a2436" strokeWidth="1" />
                <circle cx="300" cy="80" r="2" fill="#1a2436" />
                <circle cx="300" cy="80" r="10" stroke="#1a2436" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>

            <div className="relative z-10">
              <Reveal direction="up">
                <SectionLabel>About the Company</SectionLabel>
              </Reveal>

              <Reveal direction="up" delay={0.05}>
                <h2
                  id="about-heading"
                  className="mt-3 text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-[1.1] tracking-tight text-brand-charcoal"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Engineering <span className="text-brand-accent">precision.</span>
                  <br />
                  Infrastructure expertise.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-brand-slate max-w-[42ch]">
                  Panchasheel Geo Infra Solution is a geospatial surveying and infrastructure support company providing accurate, reliable and project-ready spatial data for infrastructure, energy, industrial and development projects across India.
                </p>
                <p className="mt-2 text-[0.95rem] leading-[1.7] text-brand-slate max-w-[42ch]">
                  We combine field surveying, modern survey technologies, data processing and QA/QC to produce engineering-ready outputs for planning, design and execution.
                </p>
              </Reveal>

              {/* THREE CAPABILITY BLOCKS */}
              <Reveal direction="up" delay={0.15}>
                <div className="mt-6 pt-5 border-t border-brand-charcoal/10 flex flex-col sm:flex-row gap-5 lg:gap-6">
                  {/* Block 01 */}
                  <div className="flex-1 relative">
                    <Crosshair className="w-5 h-5 text-brand-accent mb-1.5" strokeWidth={1.5} />
                    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-brand-charcoal mb-1">
                      Field-to-Deliverable
                    </h3>
                    <p className="text-[0.8rem] leading-relaxed text-brand-slate pr-2">
                      Survey acquisition through processing and QA/QC.
                    </p>
                  </div>
                  
                  {/* Divider */}
                  <div className="hidden sm:block w-px bg-brand-charcoal/10" />
                  
                  {/* Block 02 */}
                  <div className="flex-1 relative">
                    <Layers className="w-5 h-5 text-brand-accent mb-1.5" strokeWidth={1.5} />
                    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-brand-charcoal mb-1">
                      Project-Ready Outputs
                    </h3>
                    <p className="text-[0.8rem] leading-relaxed text-brand-slate pr-2">
                      Maps, terrain models, CAD/GIS and technical documentation.
                    </p>
                  </div>
                  
                  {/* Divider */}
                  <div className="hidden sm:block w-px bg-brand-charcoal/10" />

                  {/* Block 03 */}
                  <div className="flex-1 relative">
                    <Navigation className="w-5 h-5 text-brand-accent mb-1.5" strokeWidth={1.5} />
                    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-brand-charcoal mb-1">
                      Technology-Led
                    </h3>
                    <p className="text-[0.8rem] leading-relaxed text-brand-slate">
                      Drone, GNSS, LiDAR and modern geospatial workflows.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* CTA */}
              <Reveal direction="up" delay={0.2}>
                <div className="mt-6">
                  <Link
                    href="#founder"
                    className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-brand-charcoal hover:text-brand-accent transition-colors duration-200 group"
                  >
                    Learn About Panchasheel
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
