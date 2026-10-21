"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LeadConnectorForm from "@/components/LeadConnectorForm";

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

function EstimateForm() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/55 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="h-1.5 w-full bg-teal" aria-hidden="true" />
      <div className="p-2 sm:p-3">
        <LeadConnectorForm
          iframeId="inline-qvI3LVdUNkwaVf8kgsKE-service"
          height={560}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

function HeroEyebrow({ children, asBadge }) {
  if (!children) return null;

  if (asBadge) {
    return (
      <p className="inline-flex max-w-full items-center rounded-md bg-white/12 px-2.5 py-1.5 ring-1 ring-inset ring-white/25 backdrop-blur-[6px]">
        <span className="text-xs font-semibold leading-snug text-white sm:text-[13px]">
          {children}
        </span>
      </p>
    );
  }

  return (
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
      {children}
    </p>
  );
}

function FinancingContent({ financing }) {
  if (!financing) return null;

  return (
    <div className="min-w-0 [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_2px_10px_rgba(0,0,0,0.55),0_0_28px_rgba(0,0,0,0.35)]">
      <HeroEyebrow asBadge={financing.eyebrowAsBadge}>
        {financing.eyebrow}
      </HeroEyebrow>
      <h1 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
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

      <p className="mt-5 max-w-xl text-base leading-7 text-white">
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
            className="inline-flex items-center gap-2 rounded-lg bg-[#fdbf3e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-blue [text-shadow:none] transition-colors hover:bg-white hover:text-blue"
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
    <div className="min-w-0 [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_2px_10px_rgba(0,0,0,0.55),0_0_28px_rgba(0,0,0,0.35)]">
      {section.eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">
          {section.eyebrow}
        </p>
      ) : null}

      <h1 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
        {section.title}
      </h1>

      {section.description ? (
        <p className="mt-5 max-w-2xl text-sm leading-5 text-white sm:text-[15px] sm:leading-6 lg:text-base lg:leading-6">
          {section.description}
        </p>
      ) : null}

      {section.buttonText && section.buttonHref ? (
        <Link
          href={section.buttonHref}
          className="mt-8 inline-flex items-center gap-2 rounded bg-[#fdbf3e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-blue [text-shadow:none] transition-colors hover:bg-white hover:text-blue"
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
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white transition-colors hover:bg-blue"
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
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white transition-colors hover:bg-blue"
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
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        <div
          className={`relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[70px] ${
            hasForm
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12"
              : ""
          }`}
        >
          {hasForm && formOnLeft ? (
            <>
              <div className="order-2 min-w-0 lg:order-1 lg:w-full lg:max-w-[22rem]">
                <EstimateForm />
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
                <div className="min-w-0 lg:w-full lg:max-w-[22rem] lg:justify-self-end">
                  <EstimateForm />
                </div>
              ) : null}
            </>
          )}
        </div>

      </section>
    </div>
  );
}
