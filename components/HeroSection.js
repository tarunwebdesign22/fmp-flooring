"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const trustIcons = {
  experience: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </svg>
  ),
  family: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19c1-3.5 3.5-5 5.5-5s4.5 1.5 5.5 5" />
      <path d="M14 14.5c1.5-.5 3-.2 4.5 1.5.5 1 .8 2 .8 3" />
    </svg>
  ),
  quality: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 5 6v5.5c0 4.5 3.2 7.8 7 9.5 3.8-1.7 7-5 7-9.5V6l-7-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
};

const serviceIcons = {
  plank: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="4" y="4" width="16" height="4" rx="0.5" />
      <rect x="4" y="10" width="16" height="4" rx="0.5" />
      <rect x="4" y="16" width="16" height="4" rx="0.5" />
    </svg>
  ),
  carpet: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 8c0-2 2-3.5 6-3.5s6 1.5 6 3.5v2c0 2-2 3.5-6 3.5S6 12 6 10V8z" />
      <path d="M6 10v7c0 1.5 2 2.5 6 2.5s6-1 6-2.5v-7" />
    </svg>
  ),
  tile: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="6" height="6" />
      <rect x="9" y="3" width="6" height="6" />
      <rect x="15" y="3" width="6" height="6" />
      <rect x="3" y="9" width="6" height="6" />
      <rect x="9" y="9" width="6" height="6" />
      <rect x="15" y="9" width="6" height="6" />
      <rect x="3" y="15" width="6" height="6" />
      <rect x="9" y="15" width="6" height="6" />
      <rect x="15" y="15" width="6" height="6" />
    </svg>
  ),
  ceramic: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 3 7 8l5 5 5-5-5-5z" />
      <path d="M7 8 2 13l5 5 5-5-5-5z" />
      <path d="M17 8 12 13l5 5 5-5-5-5z" />
      <path d="M12 13 7 18l5 5 5-5-5-5z" />
    </svg>
  ),
  rubber: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 8h12a4 4 0 0 1 0 8H8" />
      <path d="M4 8v10a2 2 0 0 0 2 2h10" />
    </svg>
  ),
  hardwood: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="7" width="18" height="10" rx="1" />
      <path d="M7 7v10M12 7v10M17 7v10" />
    </svg>
  ),
  vct: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" />
      <rect x="13" y="3" width="8" height="8" />
      <rect x="3" y="13" width="8" height="8" />
      <rect x="13" y="13" width="8" height="8" />
    </svg>
  ),
};

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

export default function HeroSection({ content }) {
  const section = content[0];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!section) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative">
      {/* Top bar */}
      {/* <div className="bg-black py-2.5 text-center">
        <p className="px-4 text-xs font-semibold tracking-[0.14em] text-white uppercase sm:text-sm">
          {section.topBar}
        </p>
      </div> */}

      {/* Hero */}
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
          className="absolute inset-0 bg-black/75"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:px-10 lg:py-16 xl:py-20">
          {/* Left content */}
          <div className="min-w-0 pb-0">
            <p className="text-base font-medium text-teal sm:text-lg">{section.welcome}</p>
            <h1 className="mt-1 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {section.headline}
            </h1>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {section.trustBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-[2px]"
                >
                  <span className="shrink-0 text-teal">
                    {trustIcons[badge.icon]}
                  </span>
                  <span className="text-xs font-semibold leading-snug text-white sm:text-[13px]">
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base text-white/90 sm:text-lg">
              {section.tagline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {section.ctas.map((cta, index) =>
                index === 0 ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-blue"
                  >
                    {cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/75 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-teal hover:bg-teal hover:text-white"
                  >
                    {cta.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Estimate form */}
          <div className="min-w-0 lg:w-full lg:max-w-md lg:justify-self-end">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
              <div className="h-1.5 w-full bg-teal" aria-hidden="true" />
              <div className="p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-blue">
                {section.form.title}
              </h2>
              <span className="mt-2 block h-0.5 w-12 bg-teal" aria-hidden="true" />
              <p className="mt-3 text-sm text-blue/65">{section.form.description}</p>

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
                      {section.form.services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-blue/45" aria-hidden="true">
                      ▾
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
                  >
                    {section.form.buttonText}
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
              </div>
            </div>
          </div>
        </div>

        {/* Product strip — inside banner */}
        <div className="relative z-10 px-4 pb-8 sm:px-6 sm:pb-10 lg:px-10 lg:pb-12">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(34,30,83,0.18)]">
            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
              {section.products.map((product, index) => (
                <li
                  key={product.label}
                  className={`flex flex-col items-center justify-center gap-2 px-3 py-5 text-center ${
                    index > 0 ? "border-l border-grey/60" : ""
                  }`}
                >
                  <span className="text-blue">{serviceIcons[product.icon]}</span>
                  <span className="text-[11px] font-bold uppercase leading-tight tracking-wide text-blue">
                    {product.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
