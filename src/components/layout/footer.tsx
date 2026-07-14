import Link from "next/link";
import Image from "next/image";
import Mail from "lucide-react/dist/esm/icons/mail";
import Phone from "lucide-react/dist/esm/icons/phone";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import { SITE_NAME, CONTACT, NAV_LINKS } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "DGPS Survey", href: "#services" },
  { label: "Drone Survey", href: "#services" },
  { label: "LiDAR Survey", href: "#services" },
  { label: "Topographical Survey", href: "#services" },
  { label: "GIS Mapping", href: "#services" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-stone" role="contentinfo">
      {/* Amber threshold — anchors the footer to the brand */}
      <div className="h-px bg-brand-accent/40" />
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company — logo + description */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label={`${SITE_NAME} — Home`}
              className="inline-block mb-6"
            >
              <Image
                src="/images/footer-logo.png"
                alt="Panchasheel Geo Infra Solutions — company logo"
                width={370}
                height={100}
                className="h-20 w-auto object-contain"
                quality={95}
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed text-brand-concrete max-w-xs">
              Professional geospatial and infrastructure surveying across India.
              Precision survey data for engineering, construction, and
              government projects.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-brand-stone/60 mb-6">
              <span className="block h-px w-3 bg-brand-accent/50" aria-hidden="true" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-concrete transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-brand-stone/60 mb-6">
              <span className="block h-px w-3 bg-brand-accent/50" aria-hidden="true" />
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-concrete transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-brand-stone/60 mb-6">
              <span className="block h-px w-3 bg-brand-accent/50" aria-hidden="true" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT.phone[0].replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-brand-concrete transition-colors hover:text-white"
                >
                  <Phone
                    className="h-4 w-4 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT.phone[0]}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-sm text-brand-concrete transition-colors hover:text-white"
                >
                  <Mail
                    className="h-4 w-4 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-concrete">
                <MapPin
                  className="h-4 w-4 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <address className="not-italic">
                  {CONTACT.address.line1}
                  <br />
                  {CONTACT.address.line2}
                  <br />
                  {CONTACT.address.city}, {CONTACT.address.state}
                  <br />
                  {CONTACT.address.pin}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.65rem] text-brand-concrete tracking-wide">
            © {currentYear} Panchasheel Geo Infra Solution. All rights reserved.
          </p>
          <p className="text-[0.65rem] text-brand-concrete/60 tracking-wide">
            Bhopal, Madhya Pradesh &nbsp;·&nbsp; PAN India operations
          </p>
        </div>
      </div>
    </footer>
  );
}
