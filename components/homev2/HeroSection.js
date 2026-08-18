"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

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

const AUTOPLAY_MS = 6500;

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

function SlideArrow({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-[2px] transition-colors hover:border-teal hover:bg-teal"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        {direction === "prev" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

function MainSlide({ slide }) {
  return (
    <>
      <p className="text-base font-medium text-teal sm:text-lg">{slide.welcome}</p>
      <h1 className="mt-1 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
        {slide.headline}
      </h1>
      <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

      <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {slide.trustBadges.map((badge) => (
          <li
            key={badge.label}
            className="flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-[2px]"
          >
            <span className="shrink-0 text-teal">{trustIcons[badge.icon]}</span>
            <span className="text-xs font-semibold leading-snug text-white sm:text-[13px]">
              {badge.label}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-base text-white/90 sm:text-lg">{slide.tagline}</p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {slide.ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#fdbf3e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:bg-[#fdbf3e] hover:text-blue"
          >
            {cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </>
  );
}

function FinancingSlide({ slide }) {
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
        {slide.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
        {slide.title}
      </h1>
      <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

      <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
        {slide.description}
      </p>

      <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {slide.benefits.map((benefit) => (
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

      {slide.buttonText && slide.buttonHref ? (
        <div className="mt-7">
          <Link
            href={slide.buttonHref}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#fdbf3e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:bg-[#fdbf3e] hover:text-blue"
          >
            {slide.buttonText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}

      {slide.footnote ? (
        <p className="mt-5 text-xs leading-5 text-white/55">{slide.footnote}</p>
      ) : null}
    </>
  );
}

function ServiceSlide({ slide }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fdbf3e] text-blue">
          {serviceIcons[slide.icon] || serviceIcons.plank}
        </span>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
          {slide.eyebrow}
        </p>
      </div>

      <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
        {slide.title}
      </h1>
      <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

      <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
        {slide.description}
      </p>

      {slide.bullets?.length ? (
        <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {slide.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/90">
              <span className="mt-1.5 inline-block h-2 w-2 shrink-0 bg-teal" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}

      {slide.buttonText && slide.buttonHref ? (
        <div className="mt-7">
          <Link
            href={slide.buttonHref}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#fdbf3e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:bg-[#fdbf3e] hover:text-blue"
          >
            {slide.buttonText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}
    </>
  );
}

function SlideContent({ slide }) {
  if (slide.type === "financing") return <FinancingSlide slide={slide} />;
  if (slide.type === "service") return <ServiceSlide slide={slide} />;
  return <MainSlide slide={slide} />;
}

function MobileSlideContent({ slide }) {
  const title =
    slide.title ||
    `${slide.titleBefore || ""}${slide.titleHighlightValue || ""}${slide.titleAfter || ""}`.trim();
  const ctas =
    slide.ctas?.length
      ? slide.ctas
      : slide.buttonText && slide.buttonHref
        ? [{ label: slide.buttonText, href: slide.buttonHref }]
        : [];

  return (
    <div className="w-full max-w-sm text-center">
      <h1 className="text-4xl font-bold leading-tight text-white">{title}</h1>
      {ctas.length ? (
        <div className="mt-5 flex flex-col gap-2.5">
          {ctas.map((cta) => (
            <Link
              key={`${cta.label}-${cta.href}`}
              href={cta.href}
              className="mx-auto inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-lg border-2 border-[#fdbf3e] bg-black/15 px-3.5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:bg-[#fdbf3e] hover:text-blue"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function EstimateFormCard({ section, submitted, formData, onChange, onSubmit, className = "" }) {
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

export default function HeroSection({ content }) {
  const section = content?.[0];
  const slides = section?.slides || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (!slides.length) return;
      setActiveIndex((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [slides.length, activeIndex]);

  if (!section || !slides.length) return null;

  const activeSlide = slides[activeIndex];

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
      <section
        className="relative isolate overflow-hidden lg:hidden"
        aria-roledescription="carousel"
        aria-label="Featured offers"
      >
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.backgroundImage}
            alt=""
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative mx-auto flex aspect-square max-w-7xl items-end justify-center px-4 pb-8 pt-8">
          <div key={`mobile-${activeSlide.id}`} className="hero-slide-content w-full" aria-live="polite">
            <MobileSlideContent slide={activeSlide} />
          </div>
        </div>

        {slides.length > 1 ? (
          <div className="relative z-10 -mt-1 flex justify-center pb-6">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`mobile-dot-${slide.id}`}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-7 bg-teal" : "w-2 bg-white/55 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <div className="relative z-20 -mt-5 px-4 pb-6 lg:hidden">
        <EstimateFormCard
          section={section}
          submitted={submitted}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>

      <section
        className="relative isolate hidden overflow-hidden lg:block"
        aria-roledescription="carousel"
        aria-label="Featured offers"
      >
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.backgroundImage}
            alt=""
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:px-10 lg:py-16 lg:pb-24 xl:py-20 xl:pb-24">
          {/* Left content — changes per slide */}
          <div className="min-w-0 lg:min-h-[27rem]">
            <div key={activeSlide.id} className="hero-slide-content" aria-live="polite">
              <SlideContent slide={activeSlide} />
            </div>

            {slides.length > 1 ? (
              <div className="mt-8 flex items-center gap-4">
                <SlideArrow direction="prev" onClick={() => goTo(activeIndex - 1)} />
                <SlideArrow direction="next" onClick={() => goTo(activeIndex + 1)} />

                <div className="flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={index === activeIndex}
                      className={`h-2 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-7 bg-teal"
                          : "w-2 bg-white/45 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Estimate form — fixed across slides */}
          <div className="min-w-0 lg:w-full lg:max-w-md lg:justify-self-end">
            <EstimateFormCard
              section={section}
              submitted={submitted}
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>

      {/* Stats strip — half over hero, half over next section */}
      <HeroStatsStrip items={section.stats} />
    </div>
  );
}
