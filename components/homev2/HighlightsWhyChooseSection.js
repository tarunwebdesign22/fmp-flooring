"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const pointIcons = {
  preparation: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M5 20V11l7-5 7 5v9" />
      <path d="M9 20v-5h6v5" />
      <path d="M10 8.5 12 7l2 1.5" />
    </svg>
  ),
  installation: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.5-2.5 2.5-2.5z" />
    </svg>
  ),
  options: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  ),
  pricing: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .6 2 1.8c0 2.2-4 1.8-4 4 0 1.2 1 2 2.2 2s2-.5 2.4-1.3" />
    </svg>
  ),
  expertise: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
};

const AUTO_ADVANCE_MS = 4500;

export default function HighlightsWhyChooseSection({ content }) {
  const section = Array.isArray(content) ? content[0] : content;
  const points = section?.points || [];
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [panelKey, setPanelKey] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || points.length < 2) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % points.length);
      setPanelKey((key) => key + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [visible, points.length, activeIndex]);

  if (!points.length) return null;

  const active = points[activeIndex];
  const activeStep = active.step || String(activeIndex + 1).padStart(2, "0");

  const selectPoint = (index) => {
    setActiveIndex(index);
    setPanelKey((key) => key + 1);
  };

  const trustItems = section.trustLine
    ? section.trustLine.split("•").map((item) => item.trim()).filter(Boolean)
    : [];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eeecff] py-14 sm:py-16 lg:py-[78px]"
      aria-labelledby="why-fmp-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div
          className={`grid items-start gap-6 transition-all duration-700 lg:grid-cols-2 lg:gap-12 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="text-left">
            {section.eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal sm:text-sm">
                {section.eyebrow}
              </p>
            ) : null}
            <h2
              id="why-fmp-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-blue sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              {section.title}
            </h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-teal" aria-hidden="true" />
          </div>
          {section.description ? (
            <p className="text-left text-[15px] leading-7 text-blue/65 sm:text-base sm:leading-8 lg:pt-8">
              {section.description}
            </p>
          ) : null}
        </div>

        <div
          className={`mt-10 grid items-stretch gap-5 transition-all duration-700 sm:mt-12 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)_minmax(220px,320px)] lg:gap-6 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* Selectable benefit tabs */}
          <div
            role="tablist"
            aria-label="Why FMP Flooring benefits"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:content-start"
          >
            {points.map((point, index) => {
              const selected = index === activeIndex;
              const step = point.step || String(index + 1).padStart(2, "0");

              return (
                <button
                  key={point.title}
                  type="button"
                  role="tab"
                  id={`why-fmp-tab-${index}`}
                  aria-selected={selected}
                  aria-controls="why-fmp-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectPoint(index)}
                  className={`group relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                    selected
                      ? "border-teal bg-white shadow-[0_8px_24px_rgba(42,188,175,0.15)]"
                      : "border-blue/8 bg-white/70 hover:-translate-y-0.5 hover:border-teal/35 hover:bg-white hover:shadow-[0_8px_22px_rgba(34,30,83,0.08)]"
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        selected
                          ? "bg-[#fdbf3e] text-blue"
                          : "bg-blue/5 text-blue/55 group-hover:bg-[#fdbf3e]/20 group-hover:text-blue"
                      }`}
                      aria-hidden="true"
                    >
                      {pointIcons[point.icon] || pointIcons.expertise}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-xs font-bold tracking-[0.14em] ${
                          selected ? "text-teal" : "text-blue/40"
                        }`}
                      >
                        {step}
                      </span>
                      <span
                        className={`mt-1.5 block text-sm font-bold leading-snug ${
                          selected ? "text-blue" : "text-blue/80"
                        }`}
                      >
                        {point.title}
                      </span>
                    </span>
                  </span>
                  {selected ? (
                    <span
                      key={`progress-${activeIndex}`}
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-teal why-fmp-tab-progress"
                      style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Spotlight feature */}
          <div
            id="why-fmp-panel"
            role="tabpanel"
            aria-labelledby={`why-fmp-tab-${activeIndex}`}
            className="relative min-h-full overflow-hidden rounded-[28px] bg-blue text-white shadow-[0_20px_50px_rgba(34,30,83,0.22)]"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-10 text-[9rem] font-black leading-none text-white/[0.06] sm:text-[12rem] lg:right-4 lg:text-[11rem]"
              aria-hidden="true"
            >
              {activeStep}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(42,188,175,0.22),transparent_45%)]" aria-hidden="true" />

            <div
              key={panelKey}
              className="relative flex h-full min-h-[280px] flex-col justify-between gap-8 p-7 why-fmp-panel-enter sm:min-h-[340px] sm:p-9 lg:p-10"
            >
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#fdbf3e]">
                  Benefit {activeStep}
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl lg:text-[2rem]">
                  {active.title}
                </h3>
                <span className="mt-4 block h-0.5 w-14 rounded-full bg-teal" aria-hidden="true" />
                <p className="mt-4 text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8">
                  {active.description}
                </p>
              </div>

              <div className="flex items-center gap-2" aria-hidden="true">
                {points.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-8 bg-[#fdbf3e]" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Benefit image */}
          {active.image ? (
            <div
              key={`image-${panelKey}`}
              className="relative min-h-[240px] overflow-hidden rounded-[28px] shadow-[0_16px_40px_rgba(34,30,83,0.14)] why-fmp-panel-enter sm:min-h-[300px] lg:min-h-full"
            >
              <Image
                src={active.image}
                alt={active.imageAlt || active.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          ) : null}
        </div>

        {/* Trust strip */}
        <div
          className={`mt-10 flex flex-col items-center gap-4 border-t border-blue/8 pt-8 transition-all duration-700 sm:mt-12 sm:pt-9 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {trustItems.length ? (
            <ul className="flex flex-wrap items-center justify-center gap-2.5">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-blue/10 bg-greylight px-4 py-2 text-xs font-bold tracking-wide text-blue sm:text-[13px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {section.trustNote ? (
            <p className="max-w-2xl text-center text-sm leading-6 text-blue/55">
              <span className="font-bold text-blue">{section.trustNote.eyebrow}</span>
              {section.trustNote.eyebrow && section.trustNote.text ? " — " : null}
              {section.trustNote.text}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
