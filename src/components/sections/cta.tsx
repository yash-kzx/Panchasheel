"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — text & form CTA */}
          <div>
            <Reveal direction="up" delay={0.1}>
              <SectionLabel>Get in Touch</SectionLabel>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h2
                id="cta-heading"
                className="mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-brand-charcoal"
              >
                Discuss your project
                <br />
                requirements.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-brand-slate max-w-lg">
                Share your project scope, site location, and survey
                requirements. Our team will provide a detailed technical
                proposal and quotation within 48 hours.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <form
                className="mt-10 space-y-5"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Contact enquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full rounded border border-border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full rounded border border-border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    className="w-full rounded border border-border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="+91"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded border border-border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none"
                    placeholder="Describe your project scope, location, and survey requirements"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded bg-brand-charcoal px-6 py-3.5 text-sm font-semibold text-brand-warm transition-colors hover:bg-brand-steel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                >
                  Submit Enquiry
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </Reveal>
          </div>

          {/* Right — image */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-stone/20">
              <Image
                src="/images/cta-drone-operation.jpg"
                alt="Drone survey operation in progress on a large infrastructure site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
