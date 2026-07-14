"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";

const INDUSTRIES = [
  {
    name: "Highways",
    image: "/images/industry-highways.avif",
    imageAlt: "Aerial drone view of a national highway corridor cutting through Indian terrain",
    capabilities: [
      "Route alignment surveys",
      "Corridor mapping",
      "Earthwork monitoring",
      "As-built documentation",
    ],
  },
  {
    name: "Railways",
    image: "/images/industry-railways.avif",
    imageAlt: "Aerial drone view of railway tracks disappearing to the horizon",
    capabilities: [
      "Track alignment surveys",
      "Corridor mapping",
      "Progress monitoring",
      "Asset documentation",
    ],
  },
  {
    name: "Mining",
    image: "/images/industry-mining.avif",
    imageAlt: "Aerial photograph of an open-cast mining operation in India",
    capabilities: [
      "Volumetric analysis",
      "Stockpile calculations",
      "Pit monitoring",
      "Terrain modelling",
    ],
  },
  {
    name: "Solar Power",
    image: "/images/industry-solar.avif",
    imageAlt: "Aerial view of a large solar power plant with geometric panel arrays in Rajasthan",
    capabilities: [
      "Site suitability surveys",
      "Panel layout mapping",
      "Thermal inspections",
      "Progress monitoring",
    ],
  },
  {
    name: "Construction",
    image: "/images/industry-construction.avif",
    imageAlt: "Active highway construction site with earthmoving machinery and workers",
    capabilities: [
      "Progress tracking",
      "Site mapping",
      "Quantity verification",
      "As-built surveys",
    ],
  },
  {
    name: "Smart Cities",
    image: "/images/industry-smart-cities.avif",
    imageAlt: "Aerial view of a modern smart city at golden hour showing organized urban infrastructure",
    capabilities: [
      "Urban GIS mapping",
      "Utility mapping",
      "Infrastructure planning",
      "Digital city models",
    ],
  },
  {
    name: "Transmission Lines",
    image: "/images/industry-transmission-lines.avif",
    imageAlt: "Aerial photography of high-voltage transmission towers stretching to the horizon",
    capabilities: [
      "Corridor surveys",
      "Tower positioning",
      "Clearance analysis",
      "Route optimisation",
    ],
  },
  {
    name: "Water Resources",
    image: "/images/industry-water-resources.avif",
    imageAlt: "Aerial view of a large dam and reservoir at golden hour",
    capabilities: [
      "Reservoir mapping",
      "Canal alignment",
      "Floodplain analysis",
      "Watershed surveys",
    ],
  },
  {
    name: "Irrigation Projects",
    image: "/images/industry-irrigation-projects.avif",
    imageAlt: "Aerial drone view of large irrigation canals through agricultural farmland",
    capabilities: [
      "Canal surveys",
      "Command area mapping",
      "Terrain analysis",
      "Earthwork calculations",
    ],
  },
  {
    name: "Government Infrastructure",
    image: "/images/industry-government-infrastructure.avif",
    imageAlt: "Aerial view of major bridge infrastructure project under construction",
    capabilities: [
      "Asset documentation",
      "Land surveys",
      "GIS integration",
      "Engineering deliverables",
    ],
  },
] as const;

// Render: [clone of ALL] [real items] [clone of ALL]
// On scroll, when user enters the clone zone we silently jump scrollLeft
// back into the real zone by exactly one full-set width. No animation,
// no visible jump — the content is pixel-identical at that position.
const ITEMS = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

// Utility: get card width + gap from the DOM
function getCardStep(track: HTMLDivElement): number {
  const card = track.querySelector("article") as HTMLElement | null;
  if (!card) return 280;
  return card.closest(".industry-card-wrapper")
    ? (card.closest(".industry-card-wrapper") as HTMLElement).offsetWidth + 16
    : card.offsetWidth + 16;
}

export function IndustriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  // ── Seed scroll to middle copy on mount ──────────────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Wait one frame so layout is complete and card widths are measurable
    const raf = requestAnimationFrame(() => {
      const step = getCardStep(el);
      // Middle copy starts at index N (INDUSTRIES.length cards into the track)
      // We scroll to that position so the user starts seeing the real set.
      el.scrollLeft = step * INDUSTRIES.length;
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // ── Infinite-loop: silent repositioning on scroll ─────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const step = getCardStep(el);
      const setWidth = step * INDUSTRIES.length;

      // If the user has scrolled into the leading clone (before the real set)
      if (el.scrollLeft < setWidth - el.clientWidth / 2) {
        // Jump forward by one full set — lands on the same visual position in the real set
        el.scrollLeft += setWidth;
      }
      // If the user has scrolled into the trailing clone (past the real set)
      else if (el.scrollLeft >= setWidth * 2) {
        // Jump backward by one full set
        el.scrollLeft -= setWidth;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // ── Arrow navigation ──────────────────────────────────────────────
  const scroll = useCallback((dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const step = getCardStep(el);
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  }, []);

  // ── Click-and-drag (desktop) ──────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    setDragStartX(e.pageX - el.offsetLeft);
    setDragScrollLeft(el.scrollLeft);
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const el = trackRef.current;
      if (!el) return;
      const x = e.pageX - el.offsetLeft;
      const walk = (x - dragStartX) * 1.2;
      el.scrollLeft = dragScrollLeft - walk;
    },
    [isDragging, dragStartX, dragScrollLeft]
  );

  const endDrag = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(false);
    el.style.cursor = "";
    el.style.userSelect = "";
  }, []);

  return (
    <section
      id="industries"
      className="relative py-28 lg:py-40 bg-brand-charcoal overflow-hidden"
      aria-labelledby="industries-heading"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Subtle textured background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src="/images/industries-infrastructure.avif"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80" />
      </div>

      {/* ── Header ────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-18">
          <div className="lg:col-span-5">
            <Reveal direction="up">
              <SectionLabel className="text-brand-accent">Industries</SectionLabel>
            </Reveal>
            <Reveal direction="up">
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
            <Reveal direction="up">
              <p className="text-base leading-relaxed text-brand-concrete">
                Our survey teams operate across India&apos;s most demanding
                infrastructure sectors — from highway corridors and railway
                tracks to active mining sites and renewable energy installations.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Gallery wrapper — full bleed ──────────── */}
      <Reveal direction="up">
        <div className="relative">

          {/* Left fade indicator — always shown since carousel is infinite */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to right, #1a2436 0%, transparent 100%)" }}
            aria-hidden="true"
          />

          {/* Right fade indicator */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to left, #1a2436 0%, transparent 100%)" }}
            aria-hidden="true"
          />

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll industries left"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-brand-charcoal/80 border border-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            style={{
              opacity: showArrows ? 1 : 0,
              transition: "opacity 200ms ease, background-color 200ms ease, border-color 200ms ease, color 200ms ease",
            }}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll industries right"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-brand-charcoal/80 border border-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            style={{
              opacity: showArrows ? 1 : 0,
              transition: "opacity 200ms ease, background-color 200ms ease, border-color 200ms ease, color 200ms ease",
            }}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Scrollable track — scroll-snap REMOVED for seamless infinite reset */}
          <div
            ref={trackRef}
            role="list"
            aria-label="Industries served"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            style={{
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              overflowY: "hidden",
              // scroll-snap intentionally omitted — it fights the silent scrollLeft reset
              scrollBehavior: "auto",
              WebkitOverflowScrolling: "touch",
              paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 32px))",
              paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 32px))",
              paddingTop: "16px",
              paddingBottom: "32px",
              cursor: isDragging ? "grabbing" : "grab",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            } as React.CSSProperties}
          >
            {ITEMS.map((industry, idx) => (
              <div
                key={`${industry.name}-${idx}`}
                className="industry-card-wrapper group flex-none"
                aria-hidden={idx < INDUSTRIES.length || idx >= INDUSTRIES.length * 2}
                style={{
                  width: "clamp(240px, calc((100vw - 160px) / 1.3), 320px)",
                  aspectRatio: "3 / 4",
                  flexShrink: 0,
                  transition: "transform 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 280ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-7px)";
                  el.style.filter = "drop-shadow(0 20px 40px rgba(0,0,0,0.55))";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0px)";
                  el.style.filter = "none";
                }}
              >
                <article
                  role="listitem"
                  className="relative w-full h-full overflow-hidden rounded-sm bg-brand-steel"
                >
                  {/* Photography — zooms on hover */}
                  <Image
                    src={industry.image}
                    alt={idx >= INDUSTRIES.length && idx < INDUSTRIES.length * 2 ? industry.imageAlt : ""}
                    fill
                    draggable={false}
                    className="object-cover select-none transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 20vw"
                  />

                  {/*
                   * Base gradient — darkens further on hover for readability
                   * Two layers: persistent base + hover-intensified overlay
                   */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-opacity duration-280" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-280" />

                  {/* Gold tint overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-280"
                    style={{
                      background: "linear-gradient(to top, rgba(158,122,32,0.20) 0%, transparent 55%)",
                    }}
                  />

                  {/*
                   * Bottom content panel.
                   *
                   * Default state: title sits at the bottom with standard padding.
                   * Hover state:   panel slides up ~40px, pulling the title up and
                   * revealing the capabilities list beneath it.
                   */}
                  <div
                    className="industry-panel absolute left-0 right-0 bottom-0 p-5 transition-transform duration-280 ease-out group-hover:-translate-y-10"
                    style={{ willChange: "transform" }}
                  >
                    {/* Industry title — always visible */}
                    <h3 className="text-[15px] font-semibold text-white leading-tight tracking-wide mb-3.5">
                      {industry.name}
                    </h3>

                    {/* Capabilities list — fades in on hover (always visible on mobile) */}
                    <ul
                      className="industry-caps space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75"
                      aria-label={`${industry.name} capabilities`}
                    >
                      {industry.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2 text-[11.5px] font-medium text-white/75 leading-snug"
                        >
                          {/* Gold tick */}
                          <span
                            className="mt-[3px] flex-shrink-0 w-[4px] h-[4px] rounded-full bg-brand-accent"
                            aria-hidden="true"
                          />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gold accent line — grows full width on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-500 ease-out group-hover:w-full" />

                  {/* Subtle gold ring on hover */}
                  <div className="absolute inset-0 rounded-sm ring-1 ring-transparent transition-all duration-280 group-hover:ring-brand-accent/25" />
                </article>
              </div>
            ))}
          </div>

          {/* Hide webkit scrollbar + always-visible mobile overlay */}
          <style>{`
            [role="list"][aria-label="Industries served"]::-webkit-scrollbar {
              display: none;
            }
            /* On touch/mobile devices (hover: none), permanently show the
               content panel and capabilities — no tap required.            */
            @media (hover: none) {
              .industry-panel {
                transform: translateY(-8px) !important;
              }
              .industry-caps {
                opacity: 1 !important;
              }
            }
          `}</style>
        </div>
      </Reveal>

      {/* Scroll hint */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 mt-6 flex items-center gap-3" aria-hidden="true">
        <div className="h-px flex-1 bg-white/8" />
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-concrete/60">
          Swipe to explore
        </p>
        <div className="h-px flex-1 bg-white/8" />
      </div>
    </section>
  );
}
