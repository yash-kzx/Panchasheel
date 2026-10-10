"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";

/* ================================================================
   SERVICE CATEGORIES DATA
   ================================================================ */

const SERVICE_CATEGORIES = [
  {
    number: "01",
    title: "Survey Technologies",
    image: "/images/services-survey-technologies.jpg",
    imageAlt:
      "Professional survey drone flying over terrain with GNSS equipment visible on the ground",
    services: [
      {
        name: "Drone / UAV Survey",
        description:
          "High-resolution aerial data for accurate mapping and terrain analysis.",
        icon: "drone",
      },
      {
        name: "DGPS / GNSS Survey",
        description:
          "High-precision positioning and control for infrastructure projects.",
        icon: "satellite",
      },
      {
        name: "LiDAR Survey",
        description:
          "Detailed 3D data capture for complex and large-scale areas.",
        icon: "lidar",
      },
      {
        name: "Total Station Survey",
        description:
          "Precise ground surveying for engineering and construction requirements.",
        icon: "totalstation",
      },
      {
        name: "Thermal Survey",
        description:
          "Thermal data capture for infrastructure, energy and asset inspection.",
        icon: "thermal",
      },
    ],
  },
  {
    number: "02",
    title: "Mapping & Geospatial",
    image: "/images/services-mapping-geospatial.jpg",
    imageAlt:
      "Aerial topographic view of terrain with river drainage and natural features",
    services: [
      {
        name: "Topographic Survey",
        description:
          "Detailed mapping of natural and man-made features.",
        icon: "topo",
      },
      {
        name: "Photogrammetry",
        description:
          "Accurate 2D and 3D models from aerial imagery.",
        icon: "photogrammetry",
      },
      {
        name: "GIS Mapping",
        description:
          "Spatial data creation, analysis and custom mapping solutions.",
        icon: "gis",
      },
      {
        name: "Terrain Modelling",
        description: "DTM, DSM and high-accuracy terrain models.",
        icon: "terrain",
      },
      {
        name: "Contour Mapping",
        description:
          "Contour generation for planning, design and analysis.",
        icon: "contour",
      },
    ],
  },
  {
    number: "03",
    title: "Infrastructure Applications",
    image: "/images/services-infrastructure-applications.jpg",
    imageAlt:
      "Aerial view of a major highway expressway interchange under construction",
    services: [
      {
        name: "Solar & Renewable Energy",
        description:
          "Survey and mapping for solar parks and renewable-energy projects.",
        icon: "solar",
      },
      {
        name: "Highway / Road Survey",
        description:
          "Corridor surveying for highways, expressways and road infrastructure.",
        icon: "highway",
      },
      {
        name: "Railway Survey",
        description:
          "High-precision surveys for railway alignment and infrastructure.",
        icon: "railway",
      },
      {
        name: "Mining Survey",
        description:
          "Terrain and volume surveys for mining and resource management.",
        icon: "mining",
      },
      {
        name: "Transmission Line Survey",
        description:
          "Route survey, tower locations and corridor mapping.",
        icon: "transmission",
      },
      {
        name: "Land Acquisition Survey",
        description:
          "Survey and documentation support for land acquisition and development.",
        icon: "land",
      },
    ],
  },
] as const;

/* ================================================================
   INLINE SVG ICONS
   Lightweight technical line icons matching the Panchasheel aesthetic.
   ================================================================ */

function ServiceIcon({ icon }: { icon: string }) {
  const stroke = "currentColor";
  const sw = 1.5;
  const size = 22;
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "flex-shrink-0 text-brand-accent",
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "drone":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2" />
          <path d="M5 5l3 3M19 5l-3 3M5 19l3-3M19 19l-3-3" />
          <circle cx="5" cy="5" r="1.5" />
          <circle cx="19" cy="5" r="1.5" />
          <circle cx="5" cy="19" r="1.5" />
          <circle cx="19" cy="19" r="1.5" />
        </svg>
      );
    case "satellite":
      return (
        <svg {...props}>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "lidar":
      return (
        <svg {...props}>
          <path d="M12 2l10 18H2L12 2z" />
          <path d="M12 8v4M10 16h4" />
        </svg>
      );
    case "totalstation":
      return (
        <svg {...props}>
          <path d="M12 2v6M8 22h8M10 22v-4h4v4" />
          <circle cx="12" cy="11" r="3" />
          <path d="M6 11h2M16 11h2" />
        </svg>
      );
    case "thermal":
      return (
        <svg {...props}>
          <path d="M12 2a5 5 0 015 5c0 2.76-5 9-5 9S7 9.76 7 7a5 5 0 015-5z" />
          <circle cx="12" cy="7" r="1.5" />
          <path d="M8 19h8M9 22h6" />
        </svg>
      );
    case "topo":
      return (
        <svg {...props}>
          <path d="M3 20Q8 10 12 14T21 4" />
          <path d="M3 16Q8 6 12 10T21 2" strokeDasharray="3 3" />
          <circle cx="4" cy="18" r="1" />
        </svg>
      );
    case "photogrammetry":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="14" rx="1" />
          <path d="M3 17l5-5 4 4 3-3 6 6" />
          <circle cx="8.5" cy="8.5" r="1.5" />
        </svg>
      );
    case "gis":
      return (
        <svg {...props}>
          <rect x="2" y="2" width="20" height="20" rx="1" />
          <path d="M2 8h20M2 14h20M8 2v20M14 2v20" />
        </svg>
      );
    case "terrain":
      return (
        <svg {...props}>
          <path d="M2 20l7-12 5 8 4-6 4 10" />
          <path d="M2 16l7-8 5 6 4-4 4 6" strokeDasharray="3 3" />
        </svg>
      );
    case "contour":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="14" rx="9" ry="5" />
          <ellipse cx="12" cy="12" rx="6" ry="3.5" />
          <ellipse cx="12" cy="10" rx="3" ry="2" />
        </svg>
      );
    case "solar":
      return (
        <svg {...props}>
          <rect x="3" y="10" width="18" height="10" rx="1" />
          <path d="M7 10v10M11 10v10M15 10v10M3 15h18" />
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v4" />
        </svg>
      );
    case "highway":
      return (
        <svg {...props}>
          <path d="M4 20L8 4h8l4 16" />
          <path d="M12 6v12" strokeDasharray="2 2" />
          <path d="M6.5 14h11" />
        </svg>
      );
    case "railway":
      return (
        <svg {...props}>
          <path d="M6 4v16M18 4v16" />
          <path d="M6 8h12M6 12h12M6 16h12" />
          <circle cx="6" cy="21" r="1" />
          <circle cx="18" cy="21" r="1" />
        </svg>
      );
    case "mining":
      return (
        <svg {...props}>
          <path d="M2 20L12 4l10 16H2z" />
          <path d="M7 14h10M9 17h6" />
        </svg>
      );
    case "transmission":
      return (
        <svg {...props}>
          <path d="M12 2v20M8 6l4-4 4 4M6 10h12M7 14h10" />
          <path d="M9 22h6" />
        </svg>
      );
    case "land":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 12h18M12 3v18" />
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="16" cy="16" r="1.5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2 2" />
        </svg>
      );
  }
}

/* ================================================================
   SERVICES PAGE CONTENT
   ================================================================ */

export function ServicesPageContent() {
  return (
    <div className="bg-brand-warm">
      {/* ── HERO HEADER ──────────────────────────────────────── */}
      <section
        className="relative pt-36 lg:pt-44 pb-14 lg:pb-16 overflow-hidden"
        aria-labelledby="services-page-heading"
      >
        {/* Faint topographic SVG background */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M-100 180 Q200 140 450 160 Q700 180 950 150 Q1200 120 1540 140"
              stroke="#1a2436"
              strokeWidth="0.5"
              opacity="0.025"
            />
            <path
              d="M-100 220 Q250 185 500 205 Q750 225 1000 195 Q1250 165 1540 185"
              stroke="#1a2436"
              strokeWidth="0.4"
              opacity="0.018"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left — Heading */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <SectionLabel>Surveying Services</SectionLabel>
              </Reveal>

              <Reveal direction="up">
                <h1
                  id="services-page-heading"
                  className="mt-4 text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.06] tracking-tight text-brand-charcoal"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Surveying solutions for
                  <br />
                  <span className="text-brand-accent">
                    complex infrastructure.
                  </span>
                </h1>
              </Reveal>
            </div>

            {/* Right — Supporting copy */}
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
              <Reveal direction="up">
                <p className="text-[0.95rem] lg:text-[1rem] leading-[1.65] text-brand-slate">
                  We provide end-to-end surveying and geospatial solutions using
                  advanced technologies and field expertise, supporting
                  infrastructure, energy, industrial and development projects
                  across India.
                </p>
              </Reveal>

              {/* Technical vertical label */}
              <Reveal direction="up">
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-brand-charcoal/10" />
                  <div className="flex gap-3 text-[0.6rem] font-mono uppercase tracking-[0.2em] text-brand-concrete">
                    <span>Survey</span>
                    <span className="text-brand-accent">·</span>
                    <span>Map</span>
                    <span className="text-brand-accent">·</span>
                    <span>Analyse</span>
                    <span className="text-brand-accent">·</span>
                    <span>Deliver</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE SERVICE CATEGORIES ─────────────────────────── */}
      <section className="relative pb-20 lg:pb-28" aria-label="Service categories">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {SERVICE_CATEGORIES.map((category, catIdx) => (
              <Reveal
                key={category.number}
                direction="up"
                delay={catIdx * 0.1}
              >
                <div className="flex flex-col">
                  {/* Category Hero Image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-stone/20">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Bottom gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent" />

                    {/* Category number + title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span
                        className="block text-[0.65rem] font-mono text-brand-accent tracking-[0.2em] mb-2"
                        aria-hidden="true"
                      >
                        {category.number}
                      </span>
                      <h2
                        className="text-[1.35rem] lg:text-[1.5rem] font-bold text-white tracking-tight leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  {/* Service list */}
                  <div className="border-x border-b border-brand-charcoal/8 bg-white">
                    {category.services.map((service, svcIdx) => (
                      <div
                        key={service.name}
                        className={`group flex items-start gap-4 px-6 py-5 transition-colors duration-200 hover:bg-brand-warm/60 ${
                          svcIdx < category.services.length - 1
                            ? "border-b border-brand-charcoal/6"
                            : ""
                        }`}
                      >
                        {/* Icon */}
                        <div className="mt-0.5">
                          <ServiceIcon icon={service.icon} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[0.92rem] font-bold text-brand-charcoal leading-snug mb-1 group-hover:text-brand-steel transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-[0.82rem] leading-[1.5] text-brand-slate">
                            {service.description}
                          </p>
                        </div>

                        {/* Gold arrow */}
                        <div className="mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1">
                          <ArrowRight
                            className="h-4 w-4 text-brand-accent"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM TERRAIN TREATMENT ────────────────────────── */}
      <section
        className="relative py-16 lg:py-20 overflow-hidden"
        aria-label="From the ground to a stronger tomorrow"
      >
        {/* Topographic terrain SVG */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 300"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Contour lines */}
            <path
              d="M0 180 L80 174 L160 176 L260 166 L360 162 L440 158 L540 164 L640 156 L720 152 L820 148 L900 152 L1000 146 L1080 142 L1160 148 L1260 154 L1340 158 L1440 155"
              stroke="#1a2436"
              strokeWidth="0.6"
              opacity="0.04"
            />
            <path
              d="M0 200 L80 196 L160 198 L260 190 L360 186 L440 182 L540 188 L640 180 L720 176 L820 172 L900 176 L1000 170 L1080 166 L1160 172 L1260 178 L1340 182 L1440 179"
              stroke="#1a2436"
              strokeWidth="0.5"
              opacity="0.03"
            />
            <path
              d="M0 220 L80 218 L160 219 L260 214 L360 211 L440 208 L540 212 L640 207 L720 204 L820 201 L900 204 L1000 199 L1080 196 L1160 201 L1260 206 L1340 209 L1440 207"
              stroke="#1a2436"
              strokeWidth="0.4"
              opacity="0.02"
            />

            {/* Horizontal reference lines */}
            <line
              x1="0"
              y1="140"
              x2="1440"
              y2="140"
              stroke="#1a2436"
              strokeWidth="0.3"
              opacity="0.015"
            />
            <line
              x1="0"
              y1="240"
              x2="1440"
              y2="240"
              stroke="#1a2436"
              strokeWidth="0.3"
              opacity="0.015"
            />

            {/* Vertical survey ticks */}
            {[240, 480, 720, 960, 1200].map((x) => (
              <line
                key={`t-${x}`}
                x1={x}
                y1="155"
                x2={x}
                y2="165"
                stroke="#1a2436"
                strokeWidth="0.4"
                opacity="0.025"
              />
            ))}

            {/* Single subtle coordinate label */}
            <text
              x="1260"
              y="130"
              fontSize="5"
              fill="#1a2436"
              opacity="0.025"
              fontFamily="monospace"
            >
              E 77°24′
            </text>
          </svg>
        </div>

        {/* Footer statement */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal direction="up">
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-brand-charcoal/8" />
              <p
                className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-concrete/70 whitespace-nowrap"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                From the ground to a stronger tomorrow
              </p>
              <div className="h-px flex-1 bg-brand-charcoal/8" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
