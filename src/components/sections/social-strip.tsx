"use client";

/* ─────────────────────────────────────────────────────────
   SocialStrip
   Visual bridge between the Contact / CTA section and
   the Footer. Deep slate background, three brand icons,
   gold accent on hover. Placeholder URLs can be swapped in
   constants.ts once live handles are confirmed.
───────────────────────────────────────────────────────── */

const SOCIAL_ITEMS = [
  {
    id: "whatsapp",
    label: "WhatsApp — opens in new tab",
    href: "https://wa.me/916261876968",
    /* WhatsApp mark — canonical SVG path */
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.122 1.533 5.853L.057 23.571a.5.5 0 0 0 .614.612l5.878-1.539A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.661-.52-5.172-1.424l-.371-.22-3.841 1.006 1.029-3.752-.24-.385A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram — opens in new tab",
    href: "https://www.instagram.com/panchasheel.gis",
    /* Instagram mark */
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn — opens in new tab",
    href: "https://www.linkedin.com/company/panchasheel-geo-infra-solution",
    /* LinkedIn mark */
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

export function SocialStrip() {
  return (
    <section
      aria-label="Follow Panchasheel Geo Infra on social media"
      style={{ background: "#1a2436" }}
    >
      {/* Subtle divider rule — thin amber-to-transparent */}
      <div
        aria-hidden="true"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent 0%, rgba(158,122,32,0.5) 30%, rgba(158,122,32,0.5) 70%, transparent 100%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "56px 24px",
          gap: "28px",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: "0.5875rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(184,181,176,0.45)",
          }}
        >
          Connect with us
        </p>

        {/* Icon row */}
        <div
          role="list"
          aria-label="Social media links"
          style={{ display: "flex", gap: "16px" }}
        >
          {SOCIAL_ITEMS.map(({ id, label, href, icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              role="listitem"
              id={`social-strip-${id}`}
              className="social-strip-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.72)",
                transition:
                  "border-color 0.2s ease, color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                flexShrink: 0,
                textDecoration: "none",
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
