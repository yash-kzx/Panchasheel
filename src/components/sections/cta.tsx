"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import Loader2 from "lucide-react/dist/esm/icons/loader-2";
import AlertCircle from "lucide-react/dist/esm/icons/alert-circle";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EnquirySchema, SERVICE_OPTIONS, type EnquiryData } from "@/lib/enquiry-schema";
import { CONTACT } from "@/lib/constants";

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const INITIAL_FIELDS: EnquiryData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  projectLocation: "",
  message: "",
};

export function CTASection() {
  const [fields, setFields] = useState<EnquiryData>(INITIAL_FIELDS);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof EnquiryData, string>>>({});
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name as keyof EnquiryData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side validation before hitting the network
    const parsed = EnquirySchema.safeParse(fields);
    if (!parsed.success) {
      const errors: Partial<Record<keyof EnquiryData, string>> = {};
      for (const [key, msgs] of Object.entries(
        parsed.error.flatten().fieldErrors
      )) {
        if (msgs?.[0]) errors[key as keyof EnquiryData] = msgs[0];
      }
      setFieldErrors(errors);
      return;
    }

    setFormState({ status: "loading" });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const json = await res.json();

      if (json.success) {
        setFormState({ status: "success", message: json.message });
        setFields(INITIAL_FIELDS);
        setFieldErrors({});
      } else {
        // Server returned field-level errors
        if (json.fieldErrors) {
          const errors: Partial<Record<keyof EnquiryData, string>> = {};
          for (const [key, msgs] of Object.entries(
            json.fieldErrors as Record<string, string[]>
          )) {
            if (msgs?.[0]) errors[key as keyof EnquiryData] = msgs[0] as string;
          }
          setFieldErrors(errors);
        }
        setFormState({
          status: "error",
          message: json.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setFormState({
        status: "error",
        message:
          "Could not reach the server. Please check your connection and try again.",
      });
    }
  }

  const isLoading = formState.status === "loading";

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 bg-brand-warm overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — text & form */}
          <div>
            <Reveal direction="up">
              <SectionLabel>Get in Touch</SectionLabel>
            </Reveal>

            <Reveal direction="up">
              <h2
                id="cta-heading"
                className="mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-brand-charcoal"
              >
                Discuss your project
                <br />
                requirements.
              </h2>
            </Reveal>

            <Reveal direction="up">
              <p className="mt-6 text-base leading-relaxed text-brand-slate max-w-lg">
                Share your project scope, site location, and survey
                requirements. Our team will provide a detailed technical
                proposal and quotation within 48 hours.
              </p>
            </Reveal>

            {/* ── Success state ─────────────────────────────────────────── */}
            {formState.status === "success" ? (
              <Reveal direction="up">
                <div
                  role="alert"
                  aria-live="polite"
                  className="mt-10 flex items-start gap-4 rounded border border-brand-accent/30 bg-brand-accent-light px-6 py-5"
                >
                  <CheckCircle
                    className="h-5 w-5 text-brand-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-brand-charcoal">
                      Enquiry sent successfully
                    </p>
                    <p className="mt-1 text-sm text-brand-slate">
                      {formState.message}
                    </p>
                    <button
                      onClick={() => setFormState({ status: "idle" })}
                      className="mt-4 text-xs font-semibold text-brand-accent hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              </Reveal>
            ) : (
              /* ── Form ──────────────────────────────────────────────────── */
              <Reveal direction="up">
                <form
                  className="mt-10 space-y-5"
                  onSubmit={handleSubmit}
                  aria-label="Contact enquiry form"
                  noValidate
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                      >
                        Full Name <span className="text-brand-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        autoComplete="name"
                        disabled={isLoading}
                        value={fields.name}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? "error-name" : undefined}
                        className={`w-full rounded border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:ring-1 transition-colors disabled:opacity-50 ${
                          fieldErrors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-border focus:border-brand-accent focus:ring-brand-accent"
                        }`}
                        placeholder="Your name"
                      />
                      {fieldErrors.name && (
                        <p id="error-name" className="mt-1.5 text-xs text-red-600" role="alert">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                      >
                        Email <span className="text-brand-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        autoComplete="email"
                        disabled={isLoading}
                        value={fields.email}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "error-email" : undefined}
                        className={`w-full rounded border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:ring-1 transition-colors disabled:opacity-50 ${
                          fieldErrors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-border focus:border-brand-accent focus:ring-brand-accent"
                        }`}
                        placeholder="you@company.com"
                      />
                      {fieldErrors.email && (
                        <p id="error-email" className="mt-1.5 text-xs text-red-600" role="alert">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                    >
                      Phone Number <span className="text-brand-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      disabled={isLoading}
                      value={fields.phone}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.phone}
                      aria-describedby={fieldErrors.phone ? "error-phone" : undefined}
                      className={`w-full rounded border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:ring-1 transition-colors disabled:opacity-50 ${
                        fieldErrors.phone
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-brand-accent focus:ring-brand-accent"
                      }`}
                      placeholder="+91"
                    />
                    {fieldErrors.phone && (
                      <p id="error-phone" className="mt-1.5 text-xs text-red-600" role="alert">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service Required */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                    >
                      Service Required{" "}
                      <span className="text-brand-concrete font-normal normal-case tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      disabled={isLoading}
                      value={fields.service}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.service}
                      aria-describedby={fieldErrors.service ? "error-service" : undefined}
                      className={`w-full rounded border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal focus:ring-1 transition-colors disabled:opacity-50 ${
                        fieldErrors.service
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-brand-accent focus:ring-brand-accent"
                      }`}
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.service && (
                      <p id="error-service" className="mt-1.5 text-xs text-red-600" role="alert">
                        {fieldErrors.service}
                      </p>
                    )}
                  </div>

                  {/* Project Location */}
                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                    >
                      Project Location{" "}
                      <span className="text-brand-concrete font-normal normal-case tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="contact-location"
                      name="projectLocation"
                      autoComplete="off"
                      disabled={isLoading}
                      value={fields.projectLocation}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.projectLocation}
                      aria-describedby={fieldErrors.projectLocation ? "error-location" : undefined}
                      className={`w-full rounded border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:ring-1 transition-colors disabled:opacity-50 ${
                        fieldErrors.projectLocation
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-brand-accent focus:ring-brand-accent"
                      }`}
                      placeholder="e.g. Pune, Maharashtra"
                    />
                    {fieldErrors.projectLocation && (
                      <p id="error-location" className="mt-1.5 text-xs text-red-600" role="alert">
                        {fieldErrors.projectLocation}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate mb-2"
                    >
                      Project Details <span className="text-brand-accent" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      disabled={isLoading}
                      value={fields.message}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "error-message" : undefined}
                      className={`w-full rounded border bg-brand-warm px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-concrete focus:ring-1 transition-colors resize-none disabled:opacity-50 ${
                        fieldErrors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border focus:border-brand-accent focus:ring-brand-accent"
                      }`}
                      placeholder="Describe your project scope, location, and survey requirements"
                    />
                    {fieldErrors.message && (
                      <p id="error-message" className="mt-1.5 text-xs text-red-600" role="alert">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Server error banner */}
                  {formState.status === "error" && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="flex items-start gap-3 rounded border border-red-200 bg-red-50 px-4 py-3"
                    >
                      <AlertCircle
                        className="h-4 w-4 text-red-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-red-700">{formState.message}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center gap-2 rounded bg-brand-charcoal px-6 py-3.5 text-sm font-semibold text-brand-warm transition-colors hover:bg-brand-steel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-brand-concrete">
                      Or call us:{" "}
                      <a
                        href={`tel:${CONTACT.phone[0].replace(/\s/g, "")}`}
                        className="text-brand-slate hover:text-brand-charcoal font-medium transition-colors"
                      >
                        {CONTACT.phone[0]}
                      </a>
                    </p>
                  </div>
                </form>
              </Reveal>
            )}
          </div>

          {/* Right — image */}
          <Reveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-stone/20">
              <Image
                src="/images/cta-drone-operation.avif"
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
