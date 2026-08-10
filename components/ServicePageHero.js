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

const benefitIcons = {
  approvals: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 4v5h-5" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  noPayments: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14.5h3.5" />
      <path d="M4.5 4.5 19.5 19.5" />
    </svg>
  ),
  zeroPercent: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 15.5 15 8.5" />
      <circle cx="9.2" cy="9.2" r="1.35" />
      <circle cx="14.8" cy="14.8" r="1.35" />
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
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.25)]">
      {form.highlight ? (
        <div className="bg-[#fdbf3e] px-5 py-3 text-center">
          <p className="text-sm font-extrabold uppercase tracking-wide text-blue sm:text-[15px]">
            {form.highlight}
          </p>
        </div>
      ) : null}

      <div className="p-6 sm:p-7">
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
    </div>
  );
}

function FinancingContent({ financing }) {
  if (!financing) return null;

  return (
    <div className="min-w-0">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
        {financing.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {financing.titleHighlightValue ? (
          <>
            {financing.titleBefore}
            <span className="text-[#fdbf3e]">{financing.titleHighlightValue}</span>
            {financing.titleAfter}
          </>
        ) : (
          financing.title
        )}
      </h1>
      <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

      <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
        {financing.description}
      </p>

      {financing.benefits?.length ? (
        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {financing.benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="flex items-center gap-3 rounded-lg border border-white/20 bg-black/30 px-3 py-3 backdrop-blur-[2px]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#fdbf3e]/50 bg-[#fdbf3e]/15 text-[#fdbf3e]">
                {benefitIcons[benefit.icon] || benefitIcons.approvals}
              </span>
              <span className="text-[13px] font-bold leading-snug text-white">
                {benefit.title}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {financing.buttonText && financing.buttonHref ? (
        <div className="mt-7">
          <Link
            href={financing.buttonHref}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#fdbf3e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:bg-[#fdbf3e] hover:text-blue"
          >
            {financing.buttonText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}

      {financing.footnote ? (
        <p className="mt-5 text-xs leading-5 text-white/55">{financing.footnote}</p>
      ) : null}
    </div>
  );
}

function ServiceContent({ section }) {
  return (
    <div className="min-w-0">
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
          className="mt-8 inline-flex items-center gap-2 rounded border-2 border-[#fdbf3e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:bg-[#fdbf3e] hover:text-blue"
        >
          {section.buttonText}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}

function BreadcrumbStrip({ breadcrumbs }) {
  if (!breadcrumbs?.length) return null;

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-2.5 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-[#fdbf3e]"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#fdbf3e]">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

function SliderControls({ slides, activeSlide, setActiveSlide }) {
  if (!slides?.length || slides.length < 2) return null;

  return (
    <div className="mt-6 flex items-center gap-3">
      <button
        type="button"
        onClick={() =>
          setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white transition-colors hover:bg-black/60"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <div className="flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id || `slide-${index}`}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-8 bg-[#fdbf3e]" : "w-2.5 bg-white/55"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white transition-colors hover:bg-black/60"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}

export default function ServicePageHero({ content }) {
  const section = content?.[0];
  const slides = section?.slides || [];
  const hasSlides = slides.length > 0;
  const [activeSlide, setActiveSlide] = useState(0);
  if (!section) return null;

  const current = hasSlides ? slides[activeSlide] : section;
  const form = current.form || section.form;
  const hasForm = Boolean(form);
  const hasFinancing = Boolean(current.financing);
  const formOnLeft =
    current.formPosition === "left" || (hasFinancing && current.formPosition !== "right");
  const backgroundImage =
    current.backgroundImage ||
    current.financing?.backgroundImage ||
    section.backgroundImage ||
    section.financing?.backgroundImage ||
    "/images/01-1.jpg";

  return (
    <div>
      <BreadcrumbStrip breadcrumbs={section.breadcrumbs} />

      <section className="relative isolate overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/65"
          aria-hidden="true"
        />

        <div
          className={`relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[70px] ${
            hasForm
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12"
              : ""
          }`}
        >
          {hasForm && formOnLeft ? (
            <>
              <div className="order-2 min-w-0 lg:order-1 lg:w-full lg:max-w-md">
                <EstimateForm form={form} />
              </div>
              {hasFinancing ? (
                <div className="order-1 min-w-0 lg:order-2">
                  <FinancingContent financing={current.financing} />
                  <SliderControls
                    slides={slides}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                  />
                </div>
              ) : (
                <div className="order-1 min-w-0 lg:order-2">
                  <ServiceContent section={current} />
                  <SliderControls
                    slides={slides}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {hasFinancing ? (
                <div className="min-w-0">
                  <FinancingContent financing={current.financing} />
                  <SliderControls
                    slides={slides}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                  />
                </div>
              ) : (
                <div className="min-w-0">
                  <ServiceContent section={current} />
                  <SliderControls
                    slides={slides}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                  />
                </div>
              )}
              {hasForm ? (
                <div className="min-w-0 lg:w-full lg:max-w-md lg:justify-self-end">
                  <EstimateForm form={form} />
                </div>
              ) : null}
            </>
          )}
        </div>

      </section>
    </div>
  );
}
