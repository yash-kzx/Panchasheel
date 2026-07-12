"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function SignatureBanner() {
  return (
    <section
      className="relative overflow-hidden bg-brand-charcoal"
      aria-label="Survey data precision statement"
    >
      {/* LiDAR visual — right-side dominant */}
      <div className="absolute inset-0">
        <Image
          src="/images/signature-lidar.jpg"
          alt="LiDAR point cloud visualisation of a highway corridor terrain survey"
          fill
          className="object-cover object-right opacity-50"
          sizes="100vw"
        />
        {/* Left-side dark gradient so text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-brand-charcoal/10" />
        {/* Bottom fade for clean section transition */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-charcoal to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 lg:py-40">
        <div className="max-w-2xl">
          <Reveal direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent mb-8">
              Survey Precision
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              Ground truth for
              <br />
              India&apos;s infrastructure.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <p className="mt-8 text-base leading-relaxed text-brand-concrete max-w-lg">
              Every deliverable we produce — whether a DGPS control network, a
              LiDAR point cloud, or a drone orthomosaic — is anchored to
              verified ground truth. Engineering decisions are only as reliable
              as the data beneath them.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.45}>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {[
                { label: "Positioning Accuracy", value: "Sub-cm", unit: "" },
                { label: "Technologies Deployed", value: "6+", unit: "" },
                { label: "Sectors Served", value: "12+", unit: "" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {stat.value}
                    <span className="text-brand-accent">{stat.unit}</span>
                  </p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-concrete">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
