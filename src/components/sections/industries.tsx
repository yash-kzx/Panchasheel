"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { ChevronLeft, ChevronRight } from "lucide-react";

const INDUSTRIES = [
  {
    name: "Highways",
    image: "/images/industry-highways.jpg",
    imageAlt: "Aerial drone view of a national highway corridor cutting through Indian terrain",
  },
  {
    name: "Railways",
    image: "/images/industry-railways.jpg",
    imageAlt: "Aerial drone view of railway tracks disappearing to the horizon",
  },
  {
    name: "Mining",
    image: "/images/industry-mining.jpg",
    imageAlt: "Aerial photograph of an open-cast mining operation in India",
  },
  {
    name: "Solar Power",
    image: "/images/industry-solar.jpg",
    imageAlt: "Aerial view of a large solar power plant with geometric panel arrays in Rajasthan",
  },
  {
    name: "Construction",
    image: "/images/industry-construction.jpg",
    imageAlt: "Active highway construction site with earthmoving machinery and workers",
  },
  {
    name: "Smart Cities",
    image: "/images/industry-smart-cities.jpg",
    imageAlt: "Aerial view of a modern smart city at golden hour showing organized urban infrastructure",
  },
  {
    name: "Transmission Lines",
    image: "/images/industry-transmission-lines.jpg",
    imageAlt: "Aerial photography of high-voltage transmission towers stretching to the horizon",
  },
  {
    name: "Water Resources",
    image: "/images/industry-water-resources.jpg",
    imageAlt: "Aerial view of a large dam and reservoir at golden hour",
  },
  {
    name: "Irrigation Projects",
    image: "/images/industry-irrigation-projects.jpg",
    imageAlt: "Aerial drone view of large irrigation canals through agricultural farmland",
  },
  {
    name: "Government Infrastructure",
    image: "/images/industry-government-infrastructure.jpg",
    imageAlt: "Aerial view of major bridge infrastructure project under construction",
  },
] as const;

export function IndustriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  /* ── Scroll state sync ────────────────────────── */
  const syncScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncScrollState();
    el.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState);
    return () => {
      el.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
    };
  }, [syncScrollState]);

  /* ── Arrow navigation ─────────────────────────── */
  const scroll = useCallback((dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    // Snap by ~1 card width (first child width + gap)
    const card = el.querySelector("article") as HTMLElement | null;
    if (!card) return;
    const gap = 16; // gap-4
    const step = card.offsetWidth + gap;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  }, []);

  /* ── Horizontal wheel redirect ────────────────── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // native horizontal scroll
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 1.5, behavior: "auto" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  /* ── Click-and-drag (desktop) ─────────────────── */
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
          src="/images/industries-infrastructure.jpg"
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
            <Reveal direction="up" delay={0.1}>
              <SectionLabel className="text-brand-accent">Industries</SectionLabel>
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
      </div>

      {/* ── Gallery wrapper — full bleed ──────────── */}
      <Reveal direction="up" delay={0.2}>
        <div className="relative">

          {/* Left fade indicator */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to right, #1a2436 0%, transparent 100%)",
              opacity: canScrollLeft ? 1 : 0,
            }}
            aria-hidden="true"
          />

          {/* Right fade indicator */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to left, #1a2436 0%, transparent 100%)",
              opacity: canScrollRight ? 1 : 0,
            }}
            aria-hidden="true"
          />

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll industries left"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-brand-charcoal/80 border border-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            style={{
              opacity: canScrollLeft && showArrows ? 1 : 0,
              pointerEvents: canScrollLeft ? "auto" : "none",
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
              opacity: canScrollRight && showArrows ? 1 : 0,
              pointerEvents: canScrollRight ? "auto" : "none",
              transition: "opacity 200ms ease, background-color 200ms ease, border-color 200ms ease, color 200ms ease",
            }}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Scrollable track */}
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
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 32px))",
              paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 32px))",
              paddingTop: "8px",
              paddingBottom: "24px",
              cursor: isDragging ? "grabbing" : "grab",
              /* Hide scrollbar across browsers */
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            } as React.CSSProperties}
          >
            {INDUSTRIES.map((industry) => (
              <article
                key={industry.name}
                role="listitem"
                className="group flex-none relative overflow-hidden rounded-sm bg-brand-steel"
                style={{
                  /* Desktop: ~5 cards; Tablet: 3; Mobile: 1.15 */
                  width: "clamp(240px, calc((100vw - 160px) / 1.3), 320px)",
                  aspectRatio: "3 / 4",
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                }}
              >
                {/* Photography */}
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  draggable={false}
                  className="object-cover select-none transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 20vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Hover: subtle gold glow overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(to top, rgba(158,122,32,0.18) 0%, transparent 60%)",
                  }}
                />

                {/* Name — bottom-left */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-base font-semibold text-white leading-tight tracking-wide">
                    {industry.name}
                  </h3>
                </div>

                {/* Gold accent line — grows on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-500 ease-out group-hover:w-full" />

                {/* Subtle card lift shadow */}
                <div
                  className="absolute inset-0 rounded-sm ring-1 ring-transparent transition-all duration-300 group-hover:ring-brand-accent/30"
                />
              </article>
            ))}
          </div>

          {/* Hide webkit scrollbar via style tag */}
          <style>{`
            [role="list"][aria-label="Industries served"]::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </Reveal>

      {/* Scroll hint dots */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 mt-6 flex items-center gap-3" aria-hidden="true">
        <div className="h-px flex-1 bg-white/8" />
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-concrete/60">
          Scroll to explore
        </p>
        <div className="h-px flex-1 bg-white/8" />
      </div>
    </section>
  );
}
