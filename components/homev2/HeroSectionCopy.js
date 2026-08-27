"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.3 6.6 19.8l1-6.1L3.2 9.4l6.1-.9L12 3z" />
    </svg>
  );
}

function parseStatValue(value) {
  const raw = String(value).trim();
  const suffixMatch = raw.match(/([^0-9.,]+)$/);
  const suffix = suffixMatch ? suffixMatch[1] : "";
  const numericPart = raw.replace(/[^0-9.]/g, "");
  const target = Number(numericPart) || 0;
  const hasComma = raw.includes(",");
  return { target, suffix, hasComma };
}

function formatStatValue(current, hasComma, suffix) {
  const rounded = Math.round(current);
  const numberText = hasComma ? rounded.toLocaleString("en-US") : String(rounded);
  return `${numberText}${suffix}`;
}

function useCountUp(target, enabled, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return undefined;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(target * eased);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [enabled, target, duration]);

  return value;
}

function HeroStatItem({ value, label, text, stars, animate, dividerClassName, className = "" }) {
  const hasTextOnly = Boolean(text);
  const { target, suffix, hasComma } = parseStatValue(value || "0");
  const current = useCountUp(target, animate);
  const display = animate ? formatStatValue(current, hasComma, suffix) : value;

  return (
    <li
      className={`grid h-full grid-rows-[1fr_auto] justify-items-center px-2 py-3.5 text-center sm:px-4 sm:py-7 ${dividerClassName} ${className}`}
    >
      {hasTextOnly ? (
        <p className="self-end text-sm font-bold leading-tight tracking-wide text-teal sm:text-lg lg:text-xl">
          {text}
        </p>
      ) : (
        <p className="self-end text-xl font-bold leading-none tracking-tight text-teal sm:text-3xl lg:text-[2.3rem]">
          {display}
        </p>
      )}
      <div className="mt-1 flex w-full flex-col items-center justify-start sm:mt-2 lg:min-h-[2.5em]">
        {label ? (
          <p className="text-[11px] font-bold leading-snug tracking-wide text-blue sm:text-sm">
            {label}
          </p>
        ) : null}
        {stars && !hasTextOnly ? (
          <span
            className="mt-1 inline-flex items-center gap-0.5 text-[#fdbf3e] sm:mt-1.5"
            aria-label={`${stars} out of 5 stars`}
          >
            {Array.from({ length: stars }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </span>
        ) : null}
      </div>
    </li>
  );
}

function HeroStatsStrip({ items }) {
  const stripRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!items?.length) return null;

  return (
    <div className="relative z-20 mt-4 mb-4 px-4 sm:-mt-16 sm:-mb-16 sm:px-6 lg:px-10">
      <div
        ref={stripRef}
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(34,30,83,0.18)]"
      >
        <ul className="grid grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => {
            const dividerClassName =
              index === 0
                ? ""
                : `border-grey/60 ${index % 2 === 1 ? "border-l" : ""} ${
                    index >= 2 ? "border-t" : ""
                  } lg:border-t-0 lg:border-l`;

            return (
              <HeroStatItem
                key={item.label || item.text || `${index}`}
                value={item.value}
                label={item.label}
                text={item.text}
                stars={item.stars}
                animate={inView}
                dividerClassName={dividerClassName}
                className={
                  index === items.length - 1 ? "col-span-2 lg:col-span-1" : ""
                }
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

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

function HighlightedCopy({ segments }) {
  if (!segments?.length) return null;

  return (
    <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/90 sm:text-base sm:leading-8">
      {segments.map((segment, index) =>
        segment.highlight ? (
          <strong key={index} className="font-semibold text-teal">
            {segment.text}
          </strong>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </p>
  );
}

function HeroCopy({ section }) {
  return (
    <div className="min-w-0 [text-shadow:0_1px_18px_rgba(0,0,0,0.35)]">
      {section.badge ? (
        <p className="inline-flex max-w-full items-center gap-2 rounded-md bg-white/12 px-2.5 py-1.5 ring-1 ring-inset ring-white/25 backdrop-blur-[6px]">
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-teal text-white"
            aria-hidden="true"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21h18" />
              <path d="M5 21V8l7-4 7 4v13" />
              <path d="M9 21v-6h6v6" />
            </svg>
          </span>
          <span className="text-xs font-semibold leading-snug text-white sm:text-[12px]">
            {section.badge}
          </span>
        </p>
      ) : null}

      <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
        {section.title}
        {section.titleHighlight ? (
          <>
            {" "}
            <span className="text-[#fdbf3e]">{section.titleHighlight}</span>
          </>
        ) : null}
      </h1>

      <HighlightedCopy segments={section.description} />

      {section.ctas?.length ? (
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {section.ctas.map((cta) => {
            const isPrimary = cta.variant !== "secondary";

            return (
              <Link
                key={cta.label}
                href={cta.href}
                className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition-colors ${
                  isPrimary ? "bg-teal hover:bg-blue" : "bg-blue hover:bg-teal"
                }`}
              >
                {cta.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function EstimateFormCard({ section, submitted, formData, onChange, onSubmit, className = "" }) {
  if (!section?.form) return null;

  return (
    <div className={`overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.35)] ${className}`}>
      {section.form.promoText ? (
        <p className="bg-[#fdbf3e] px-4 py-3 text-center text-lg font-bold uppercase tracking-wide text-blue">
          {section.form.promoText}
        </p>
      ) : (
        <div className="h-1.5 w-full bg-teal" aria-hidden="true" />
      )}
      <div className="p-6 sm:p-7">
        <h2 className="text-2xl font-bold text-blue">{section.form.title}</h2>
        <span className="mt-2 block h-0.5 w-12 bg-teal" aria-hidden="true" />
        <p className="mt-3 text-sm text-blue/65">{section.form.description}</p>

        {submitted ? (
          <p className="mt-8 rounded-lg bg-greylight px-4 py-6 text-center text-sm font-medium text-blue">
            Thank you! We&apos;ll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-3.5">
            <label className="relative block">
              <span className="absolute top-1/2 left-3 -translate-y-1/2 text-blue/45">
                {fieldIcons.name}
              </span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
                placeholder="Email Address"
                className="w-full rounded-lg border border-grey bg-white py-3 pr-3 pl-10 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
              />
            </label>

            <label className="relative block">
              <select
                name="service"
                required
                value={formData.service}
                onChange={onChange}
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
  );
}

export default function HeroSectionCopy({ content }) {
  const section = content?.[0];
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

  const formCard = (
    <EstimateFormCard
      section={section}
      submitted={submitted}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );

  return (
    <div className="relative">
      <section className="relative isolate overflow-hidden lg:hidden" aria-label="Welcome to FMP Flooring">
        <Image
          src={section.backgroundImage}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 pb-16">
          <HeroCopy section={section} />
        </div>
      </section>

      <div className="relative z-20 -mt-5 px-4 pb-6 lg:hidden">{formCard}</div>

      <section className="relative isolate hidden overflow-hidden lg:block" aria-label="Welcome to FMP Flooring">
        <Image
          src={section.backgroundImage}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 pb-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-10 lg:px-10 xl:py-20 xl:pb-28">
          <HeroCopy section={section} />
          <div className="w-full shrink-0 lg:w-[28rem] lg:justify-self-end">
            {formCard}
          </div>
        </div>
      </section>

      <HeroStatsStrip items={section.stats} />
    </div>
  );
}
