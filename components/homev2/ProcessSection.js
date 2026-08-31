"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stepIcons = {
  consultation: (
    <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
      <circle cx="8.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  measurement: (
    <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 8.5h13.5a2.5 2.5 0 0 1 0 5H14" />
      <path d="M4 8.5v7" />
      <path d="M7 8.5v2M10 8.5v2M13 8.5v2" />
      <circle cx="14" cy="13.5" r="1.2" />
      <path d="M14 14.7v3.3" />
    </svg>
  ),
  selection: (
    <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 4v16" />
      <path d="M5 4h3M5 8h2M5 12h3M5 16h2M5 20h3" />
      <path d="M10 8.5c1.5-2 3.5-3 5.5-3s3.5 1.5 4 3.5c.3 1.2-.2 2.5-1.5 3.2L12 16.5" />
      <path d="M10 8.5c1 1.5 1.5 3.2 1.5 5" />
      <path d="M14 7c1 1.2 1.5 2.5 1.5 4" />
    </svg>
  ),
  installation: (
    <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="6.5" r="2.2" />
      <path d="M8.5 21v-5.5L7 11.5c-.3-1 .4-2 1.4-2h7.2c1 0 1.7 1 1.4 2L15.5 15.5V21" />
      <path d="M9.5 4.2 11 3l1.5 1.5L14 3l1.5 1.5" />
      <path d="M15.5 13.5h3l1 2.5h-2" />
    </svg>
  ),
  inspection: (
    <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 3 5 6v5.5c0 4.5 3.2 7.8 7 9.5 3.8-1.7 7-5 7-9.5V6l-7-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
};

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function ProcessSteps({ steps }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!steps?.length) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2200);

    return () => window.clearInterval(id);
  }, [steps?.length]);

  const progressPercent =
    steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 0;

  return (
    <div className="relative mt-8 lg:mt-10">
      <div
        className="pointer-events-none absolute top-[3.75rem] right-[8%] left-[8%] hidden h-px bg-white/25 lg:block"
        aria-hidden="true"
      >
        <span
          className="absolute inset-y-0 left-0 bg-[#fdbf3e] transition-[width] duration-700 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;

          return (
            <li
              key={step.step}
              className={`relative z-10 flex flex-col items-center text-center transition-all duration-500 ${
                isActive ? "scale-105" : "scale-100"
              }`}
            >
              <span
                className={`mb-2 text-[15px] font-bold transition-colors duration-500 sm:text-base ${
                  isActive || isComplete ? "text-[#fdbf3e]" : "text-teal"
                }`}
              >
                {step.step}
              </span>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 sm:h-[4.25rem] sm:w-[4.25rem] ${
                  isActive
                    ? "border-[#fdbf3e] bg-[#fdbf3e] text-blue shadow-[0_4px_0_rgba(253,191,62,0.45)] ring-4 ring-[#fdbf3e]/30"
                    : isComplete
                      ? "border-[#fdbf3e] bg-white text-[#fdbf3e] shadow-[0_4px_0_rgba(253,191,62,0.25)]"
                      : "border-teal bg-white text-teal shadow-[0_4px_0_rgba(42,188,175,0.35)]"
                }`}
              >
                {stepIcons[step.icon]}
              </div>

              <h3
                className={`mt-3 max-w-[10rem] text-xs font-bold uppercase tracking-wide transition-colors duration-500 sm:text-[13px] ${
                  isActive ? "text-[#fdbf3e]" : "text-white"
                }`}
              >
                {step.title}
              </h3>
              <span
                className={`mt-2 block h-0.5 w-8 transition-colors duration-500 ${
                  isActive || isComplete ? "bg-[#fdbf3e]" : "bg-teal"
                }`}
                aria-hidden="true"
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function ProcessSection({ content }) {
  return (
    <>
      {content.map((item) => (
        <section
          key={item.title}
          className="relative isolate overflow-hidden py-10 sm:py-12 lg:py-14"
        >
          <Image
            src={item.backgroundImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{item.title}</h2>

              <div className="relative mx-auto mt-3 flex h-3 w-28 items-center justify-center" aria-hidden="true">
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/80" />
                <span className="relative z-10 h-2 w-2 rounded-full bg-teal" />
              </div>

              <p className="mt-3 text-sm text-white/90 sm:text-base">{item.subtitle}</p>
            </div>

            <ProcessSteps steps={item.steps} />

            <div className="mt-8 flex justify-center lg:mt-10">
              <Link
                href={item.buttonHref}
                className="inline-flex items-center gap-2.5 rounded bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue hover:text-white"
              >
                <span className="text-teal">
                  <CalendarIcon />
                </span>
                {item.buttonText}
                <span className="text-teal" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
