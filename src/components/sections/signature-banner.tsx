"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function SignatureBanner() {
  return (
    <section
      className="relative overflow-hidden bg-brand-charcoal"
      aria-label="Company approach statement"
    >
      {/* LiDAR visual — right-side dominant */}
      <div className="absolute inset-0">
        <Image
          src="/images/signature-lidar.avif"
          alt="LiDAR point cloud visualisation of a highway corridor terrain survey"
          fill
          className="object-cover object-right opacity-70"
          sizes="100vw"
        />
        {/* Left-side dark gradient so text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-brand-charcoal/10" />
        {/* Bottom fade for clean section transition */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-charcoal to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-36 lg:py-52">
        <div className="max-w-3xl">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2.5 text-xs sm:text-[0.85rem] font-bold uppercase tracking-[0.28em] text-brand-accent mb-8">
              <span className="block h-px w-5 bg-current" aria-hidden="true" />
              Our Approach
            </span>
          </Reveal>

          <Reveal direction="up">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.06] tracking-tight text-white text-balance">
              Engineering decisions start with accurate survey data.
            </h2>
          </Reveal>

          <Reveal direction="up">
            <p className="mt-8 text-base lg:text-lg leading-relaxed text-brand-concrete max-w-md">
              From highways and railways to mining, utilities, and renewable
              energy projects, we capture precise field data and deliver
              reliable engineering outputs that consultants, contractors, EPC
              companies, and infrastructure developers can confidently build upon.
            </p>
          </Reveal>

          {/* Editorial key claims — NOT a stat block. Specific, verifiable, meaningful. */}
          <Reveal direction="up">
            <div className="mt-12 flex flex-col sm:flex-row gap-8 border-t border-white/10 pt-10">
              <div className="border-l-2 border-brand-accent pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-concrete mb-2">
                  Positioning Accuracy
                </p>
                <p className="text-sm font-medium text-white">
                  Sub-centimetre DGPS — suitable for geodetic control networks
                  and precise boundary surveys.
                </p>
              </div>
              <div className="border-l-2 border-brand-accent pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-concrete mb-2">
                  Data Deliverables
                </p>
                <p className="text-sm font-medium text-white">
                  Point clouds, orthomosaics, DEM files, contour maps, and
                  georeferenced CAD drawings.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
