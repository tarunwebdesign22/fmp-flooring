"use client";

import { useEffect, useRef, useState } from "react";

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
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

function StatItem({ value, label, stars, animate }) {
  const { target, suffix, hasComma } = parseStatValue(value);
  const current = useCountUp(target, animate);
  const display = animate
    ? formatStatValue(current, hasComma, suffix)
    : value;

  return (
    <li className="flex flex-col items-center text-center">
      <p className="text-4xl font-bold tracking-tight text-teal sm:text-5xl lg:text-[3.25rem]">
        {display}
      </p>
      <p className="mt-2 text-sm font-bold tracking-wide text-blue sm:text-base">
        {label}
      </p>
      {stars ? (
        <span
          className="mt-2 inline-flex items-center gap-1 text-[#fdbf3e]"
          aria-label={`${stars} out of 5 stars`}
        >
          {Array.from({ length: stars }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </span>
      ) : null}
    </li>
  );
}

export default function StatsSection({ content }) {
  const section = content?.[0];
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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

  if (!section?.items?.length) return null;

  return (
    <section ref={sectionRef} className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {section.items.map((item) => (
            <StatItem
              key={item.label}
              value={item.value}
              label={item.label}
              stars={item.stars}
              animate={inView}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
