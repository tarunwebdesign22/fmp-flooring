"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fieldIcons = {
  name: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  ),
};

function EstimateForm({ form }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: form.defaultService || "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] sm:p-7">
      <h2 className="text-2xl font-bold text-blue">{form.title}</h2>
      <span className="mt-2 block h-0.5 w-12 bg-teal" aria-hidden="true" />
      <p className="mt-3 text-sm text-blue/65">{form.description}</p>

      {submitted ? (
        <p className="mt-8 rounded-lg bg-greylight px-4 py-6 text-center text-sm font-medium text-blue">
          Thank you! We&apos;ll get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
          <label className="relative block">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-blue/45">
              {fieldIcons.name}
            </span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-lg border border-grey bg-white py-3 pr-3 pl-10 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
            />
          </label>

          <label className="relative block">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-blue/45">
              {fieldIcons.phone}
            </span>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full rounded-lg border border-grey bg-white py-3 pr-3 pl-10 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
            />
          </label>

          <label className="relative block">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-blue/45">
              {fieldIcons.email}
            </span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-lg border border-grey bg-white py-3 pr-3 pl-10 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
            />
          </label>

          <label className="relative block">
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-grey bg-white py-3 pr-10 pl-3 text-sm text-blue outline-none transition-colors focus:border-teal"
            >
              <option value="" disabled>
                Service Interested In
              </option>
              {form.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <span
              className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-blue/45"
              aria-hidden="true"
            >
              ▾
            </span>
          </label>

          <button
            type="submit"
            className="mt-1 flex w-full items-center justify-center gap-2 rounded bg-teal px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
          >
            {form.buttonText}
            <span aria-hidden="true">→</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default function ServicePageHero({ content }) {
  const section = content?.[0];
  if (!section) return null;

  const hasForm = Boolean(section.form);

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={section.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue/95 via-blue/85 to-blue/55"
        aria-hidden="true"
      />

      <div
        className={`relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 ${
          hasForm
            ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12"
            : ""
        }`}
      >
        <div className="min-w-0">
          {section.breadcrumbs?.length ? (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                {section.breadcrumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-teal">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-teal">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}

          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {section.title}
          </h1>

          {section.description ? (
            <p className="mt-5 max-w-2xl text-sm leading-5 text-white/85 sm:text-[15px] sm:leading-6 lg:text-base lg:leading-6">
              {section.description}
            </p>
          ) : null}

          {section.buttonText && section.buttonHref ? (
            <Link
              href={section.buttonHref}
              className="mt-8 inline-flex items-center gap-2 rounded border-2 border-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-blue"
            >
              {section.buttonText}
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>

        {hasForm ? (
          <div className="min-w-0 lg:w-full lg:max-w-md lg:justify-self-end">
            <EstimateForm form={section.form} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
