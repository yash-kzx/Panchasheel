import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
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
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-brand-accent">
                <span className="text-sm font-bold text-white tracking-tight">
                  PG
                </span>
              </div>
              <div>
                <span className="block text-sm font-semibold leading-tight text-white">
                  Panchsheel
                </span>
                <span className="block text-[11px] font-medium leading-tight text-brand-stone tracking-wide">
                  Geo Infra Solution
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-brand-concrete max-w-xs">
              Professional geospatial and infrastructure surveying across India.
              Precision survey data for engineering, construction, and
              government projects.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-6">
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-6">
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-6">
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
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-concrete">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-brand-concrete">
            Headquartered in {CONTACT.address.city},{" "}
            {CONTACT.address.state}. Serving projects across India.
          </p>
        </div>
      </div>
    </footer>
  );
}
