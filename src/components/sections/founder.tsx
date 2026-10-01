"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { FOUNDER } from "@/lib/constants";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="py-12 lg:py-14 bg-white overflow-hidden relative"
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT — FOUNDER PORTRAIT */}
          <div className="w-full lg:w-[52%] relative">
            <Reveal direction="right" className="h-full">
              <div className="relative w-full h-[450px] lg:h-[500px] bg-brand-stone/10 group">
                <Image
                  src="/images/founder-portrait.png"
                  alt={`Portrait of ${FOUNDER.name}, Founder & Director`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Subtle Technical Overlays */}
                <div className="absolute inset-0 pointer-events-none border border-brand-charcoal/10" aria-hidden="true">
                  {/* Crosshair top left */}
                  <div className="absolute top-6 left-6 w-4 h-4 opacity-40">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-charcoal/60 -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-brand-charcoal/60 -translate-x-1/2" />
                  </div>
                  
                  {/* Coordinate marker top right */}
                  <div className="absolute top-5 right-5 text-[0.55rem] font-mono text-brand-charcoal/60 text-right opacity-70">
                    <p>N 23° 16' 21"</p>
                    <p>E 77° 24' 38"</p>
                  </div>
                  
                  {/* Subtle Grid / Ruler bottom edge */}
                  <div className="absolute bottom-4 left-1/4 right-1/4 h-[1px] bg-brand-charcoal/20 flex justify-between opacity-50">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-[1px] h-1.5 bg-brand-charcoal/40" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — LEADERSHIP CONTENT */}
          <div className="w-full lg:w-[44%] flex flex-col justify-center py-4 lg:py-0">
            <Reveal direction="up">
              <SectionLabel>Leadership</SectionLabel>
            </Reveal>

            <Reveal direction="up" delay={0.05}>
              <h2
                id="leadership-heading"
                className="mt-4 text-[1.85rem] sm:text-[2.25rem] lg:text-[2.35rem] font-bold leading-[1.1] tracking-tight text-brand-charcoal"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Building Panchasheel
                <br />
                from the <span className="text-brand-accent">ground up.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <div className="mt-6 space-y-4 text-[0.92rem] leading-[1.6] text-brand-slate max-w-[42ch]">
                <p>
                  Infrastructure development requires absolute technical integrity. Every major engineering decision depends entirely on the precision of the initial ground truth.
                </p>
                <p>
                  We founded Panchasheel Geo Infra Solution to bring modern surveying technology to India’s critical infrastructure projects. We don't just supply maps; we take engineering responsibility for our geospatial data, delivering reliable outputs you can build upon with absolute confidence.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <div className="mt-8 pt-6 border-t border-brand-charcoal/10">
                <p className="text-[1.05rem] font-bold text-brand-charcoal mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {FOUNDER.name}
                </p>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-brand-slate">
                  Founder & Director
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="mt-6">
                <a
                  href={FOUNDER.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-brand-charcoal hover:text-brand-accent transition-colors duration-200 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-brand-accent transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* FAR RIGHT — OPTIONAL TECHNICAL STRIP */}
          <div className="hidden xl:flex xl:w-[4%] border-l border-brand-charcoal/10 flex-col items-center justify-between py-6 relative opacity-60">
            {/* Topographic line background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" aria-hidden="true">
              <svg className="w-full h-full" viewBox="0 0 50 400" fill="none" preserveAspectRatio="none">
                <path d="M25,0 Q0,100 25,200 T25,400" stroke="#1a2436" strokeWidth="0.5" />
                <path d="M10,0 Q30,100 10,200 T10,400" stroke="#1a2436" strokeWidth="0.5" strokeDasharray="2 4" />
              </svg>
            </div>
            
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-brand-concrete rotate-90 whitespace-nowrap mt-16">
              People
            </p>
            <div className="w-[1px] h-12 bg-brand-charcoal/20" />
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-brand-concrete rotate-90 whitespace-nowrap">
              Technology
            </p>
            <div className="w-[1px] h-12 bg-brand-charcoal/20" />
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-brand-concrete rotate-90 whitespace-nowrap mb-16">
              Infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
