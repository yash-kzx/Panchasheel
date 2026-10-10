"use client";

import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { STATS } from "@/lib/constants";

/**
 * Responsive separator borders for the 4-stat grid.
 *
 * Layout:  1-col (base) → 2×2 (sm) → 4-col (lg)
 *
 * Mobile:  all items except first get border-top
 * Tablet:  right-column items get border-left,
 *          second-row items keep border-top
 * Desktop: all items except first get border-left,
 *          border-top removed
 */
const SEPARATOR = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

/* ================================================================
   ByTheNumbers
   ================================================================ */

export function ByTheNumbers() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: "clamp(4rem, 6vw, 5.5rem)", paddingBottom: "clamp(6rem, 8vw, 7rem)" }}
      aria-labelledby="stats-heading"
    >
      {/* ── Decorative background ────────────────────────── */}
      <ContourDecoration />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header: eyebrow + headline + supporting text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 lg:items-end">

          {/* Left — eyebrow + headline */}
          <div className="lg:col-span-7">
            <Reveal direction="up">
              <SectionLabel>By the Numbers</SectionLabel>
            </Reveal>

            <Reveal direction="up">
              <h2
                id="stats-heading"
                className="mt-4 font-bold leading-[1.08] tracking-tight text-brand-charcoal"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Survey data built for
                <br className="hidden sm:block" />{" "}
                <span className="text-brand-accent">real project</span>{" "}
                decisions.
              </h2>
            </Reveal>
          </div>

          {/* Right — supporting paragraph */}
          <div className="lg:col-span-5 lg:pb-1">
            <Reveal direction="up" delay={0.1}>
              <p
                className="text-[0.95rem] leading-[1.7] text-brand-slate"
                style={{ maxWidth: "42ch" }}
              >
                Trusted by infrastructure developers, engineering consultants
                and government projects across India, we deliver accurate,
                reliable and project-ready geospatial data.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Gold accent rule ───────────────────────────── */}
        <Reveal direction="up">
          <div
            className="h-px"
            style={{
              marginTop: "clamp(2rem, 3vw, 2.5rem)",
              background:
                "linear-gradient(to right, #9e7a20 0%, rgba(158,122,32,0.25) 40%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </Reveal>

        {/* ── Statistics grid ────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ marginTop: "clamp(2rem, 3vw, 2.5rem)" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`
                py-6 sm:px-6 sm:py-8 lg:px-7 lg:py-0
                ${SEPARATOR[i]}
              `}
              style={{ borderColor: "rgba(26, 36, 54, 0.08)" }}
            >
              <Reveal direction="up" delay={0.05 + i * 0.08}>
                {/* Index marker */}
                <span
                  className="block text-[0.6rem] font-semibold tracking-[0.25em] text-brand-concrete mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Stat value */}
                <p
                  className="font-bold leading-none tracking-tight text-brand-charcoal"
                  style={{
                    fontSize: "clamp(2.25rem, 3.5vw, 3rem)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    staticValue={stat.staticValue}
                  />
                </p>

                {/* Label */}
                <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mt-3 text-[0.875rem] leading-relaxed text-brand-slate">
                  {stat.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom terrain treatment ─────────────────────── */}
      <TerrainDecoration />
    </section>
  );
}


/* ================================================================
   ContourDecoration
   Extremely subtle topographic contour lines, survey crosshairs,
   and coordinate markers.  Hidden on mobile to keep things clean.
   ================================================================ */

function ContourDecoration() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none hidden sm:block"
      aria-hidden="true"
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Topographic contour lines */}
        <path
          d="M-100 280 Q200 240 450 260 Q700 280 950 250 Q1200 220 1540 240"
          stroke="#1a2436"
          strokeWidth="0.6"
          opacity="0.02"
        />
        <path
          d="M-100 310 Q250 275 500 295 Q750 315 1000 285 Q1250 255 1540 275"
          stroke="#1a2436"
          strokeWidth="0.5"
          opacity="0.015"
        />
        <path
          d="M-100 340 Q300 310 550 325 Q800 340 1050 315 Q1300 290 1540 305"
          stroke="#1a2436"
          strokeWidth="0.4"
          opacity="0.01"
        />

        {/* Survey crosshair — upper right */}
        <g opacity="0.03" transform="translate(1240, 110)">
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#1a2436" strokeWidth="0.5" />
          <line x1="0" y1="-10" x2="0" y2="10" stroke="#1a2436" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="4" stroke="#1a2436" strokeWidth="0.4" fill="none" />
        </g>

        {/* Small crosshair — lower left */}
        <g opacity="0.02" transform="translate(160, 640)">
          <line x1="-7" y1="0" x2="7" y2="0" stroke="#1a2436" strokeWidth="0.5" />
          <line x1="0" y1="-7" x2="0" y2="7" stroke="#1a2436" strokeWidth="0.5" />
        </g>

        {/* Coordinate labels */}
        <text
          x="1250"
          y="135"
          fontSize="6.5"
          fill="#1a2436"
          opacity="0.02"
          fontFamily="monospace"
        >
          E 77°24′
        </text>
        <text
          x="1250"
          y="145"
          fontSize="6.5"
          fill="#1a2436"
          opacity="0.02"
          fontFamily="monospace"
        >
          N 23°16′
        </text>

        {/* Benchmark triangle */}
        <polygon
          points="80,180 86,170 74,170"
          stroke="#1a2436"
          strokeWidth="0.5"
          fill="none"
          opacity="0.015"
        />

        {/* Faint alignment grid dots */}
        {[240, 480, 720, 960, 1200].map((x) =>
          [200, 400, 600].map((y) => (
            <circle
              key={`d-${x}-${y}`}
              cx={x}
              cy={y}
              r="0.6"
              fill="#1a2436"
              opacity="0.01"
            />
          ))
        )}
      </svg>
    </div>
  );
}


/* ================================================================
   TerrainDecoration
   Lightweight topographic cross-section / elevation profile along
   the bottom edge.  Extremely low contrast — acts as a subtle
   transition element rather than content.
   ================================================================ */

function TerrainDecoration() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-20 lg:h-28 pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Horizontal elevation reference lines */}
        <line x1="0" y1="40" x2="1440" y2="40" stroke="#1a2436" strokeWidth="0.5" opacity="0.015" />
        <line x1="0" y1="60" x2="1440" y2="60" stroke="#1a2436" strokeWidth="0.5" opacity="0.02" />
        <line x1="0" y1="80" x2="1440" y2="80" stroke="#1a2436" strokeWidth="0.5" opacity="0.015" />

        {/* Primary terrain profile */}
        <path
          d="M0 78 L80 74 L160 76 L260 66 L360 62 L440 58 L540 64 L640 56 L720 52 L820 48 L900 52 L1000 46 L1080 42 L1160 48 L1260 54 L1340 58 L1440 55"
          stroke="#1a2436"
          strokeWidth="0.8"
          opacity="0.035"
        />

        {/* Secondary contour (deeper layer) */}
        <path
          d="M0 88 L80 86 L160 87 L260 80 L360 77 L440 74 L540 79 L640 73 L720 70 L820 66 L900 70 L1000 64 L1080 60 L1160 66 L1260 72 L1340 76 L1440 73"
          stroke="#1a2436"
          strokeWidth="0.5"
          opacity="0.02"
        />

        {/* Vertical survey ticks */}
        {[180, 360, 540, 720, 900, 1080, 1260].map((x) => (
          <line
            key={`t-${x}`}
            x1={x}
            y1="56"
            x2={x}
            y2="64"
            stroke="#1a2436"
            strokeWidth="0.5"
            opacity="0.02"
          />
        ))}

        {/* Elevation labels */}
        <text x="1090" y="38" fontSize="5" fill="#1a2436" opacity="0.02" fontFamily="monospace">
          +420m
        </text>
        <text x="640" y="50" fontSize="5" fill="#1a2436" opacity="0.015" fontFamily="monospace">
          +380m
        </text>
      </svg>
    </div>
  );
}
