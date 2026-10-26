"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FederalMarquee from "@/components/homev3/FederalMarquee";
import LeadConnectorForm from "@/components/LeadConnectorForm";

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

function HeroStatItem({
  value,
  label,
  text,
  stars,
  animate,
  dividerClassName,
  className = "",
  variant,
}) {
  const isHighlight = variant === "highlight";
  const hasTextOnly = Boolean(text);
  const { target, suffix, hasComma } = parseStatValue(value || "0");
  const current = useCountUp(target, animate);
  const display = animate ? formatStatValue(current, hasComma, suffix) : value;

  return (
    <li
      className={`grid h-full grid-rows-[1fr_auto] justify-items-center bg-transparent px-1.5 py-3 text-center sm:px-4 sm:py-7 ${dividerClassName} ${className}`}
    >
      {hasTextOnly ? (
        <p
          className={`self-end text-sm font-bold leading-tight tracking-wide sm:text-lg lg:text-xl ${
            isHighlight ? "text-blue" : "text-teal"
          }`}
        >
          {text}
        </p>
      ) : (
        <p className="self-end text-lg font-bold leading-none tracking-tight text-teal sm:text-3xl lg:text-[2.3rem]">
          {display}
        </p>
      )}
      <div className="mt-1 flex w-full flex-col items-center justify-start sm:mt-2 lg:min-h-[2.5em]">
        {label ? (
          <p
            className={`text-[10px] font-bold leading-snug tracking-wide sm:text-sm ${
              isHighlight ? "text-teal" : "text-blue"
            }`}
          >
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

  const metrics = items.filter((item) => item.variant !== "highlight");
  const highlights = items.filter((item) => item.variant === "highlight");

  return (
    <div ref={stripRef} className="relative z-20 w-full bg-greylight">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-stretch">
        <ul className="grid flex-[3] grid-cols-3">
          {metrics.map((item, index) => (
            <HeroStatItem
              key={item.label || item.text || `metric-${index}`}
              value={item.value}
              label={item.label}
              text={item.text}
              stars={item.stars}
              animate={inView}
              variant={item.variant}
              dividerClassName={index === 0 ? "" : "border-grey/70 border-l"}
            />
          ))}
        </ul>
        {highlights.length > 0 ? (
          <>
            <div
              className="h-px w-full shrink-0 bg-grey/70 lg:h-auto lg:w-px"
              aria-hidden="true"
            />
            <ul className="grid flex-[2] grid-cols-2 bg-[#e8e6f5]/70">
              {highlights.map((item, index) => (
                <HeroStatItem
                  key={item.label || item.text || `highlight-${index}`}
                  value={item.value}
                  label={item.label}
                  text={item.text}
                  stars={item.stars}
                  animate={inView}
                  variant="highlight"
                  dividerClassName={index === 0 ? "" : "border-grey/70 border-l"}
                />
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
}

function HighlightedCopy({ segments, variant }) {
  if (!segments?.length) return null;

  const isHeroLead = variant === "heroLead";

  if (isHeroLead) {
    return (
      <p className="mt-6 max-w-2xl text-[15px] font-semibold leading-snug tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.55)] sm:mt-7 sm:text-base">
        {segments.map((segment, index) =>
          segment.highlight ? (
            <span
              key={index}
              className="mx-0.5 inline box-decoration-clone rounded-[4px] bg-[#fdbf3e] px-1.5 py-0.5 font-bold text-blue shadow-[0_2px_12px_rgba(0,0,0,0.35)] [text-shadow:none]"
            >
              {segment.text}
            </span>
          ) : (
            <span key={index}>{segment.text}</span>
          ),
        )}
      </p>
    );
  }

  return (
    <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/90 sm:text-base sm:leading-8">
      {segments.map((segment, index) =>
        segment.highlight ? (
          <strong key={index} className="font-semibold text-[#fdbf3e]">
            {segment.text}
          </strong>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </p>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z"
        className="fill-teal/25 stroke-teal"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        className="stroke-[#fdbf3e]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroTagline({ segments }) {
  if (!segments?.length) return null;

  return (
    <div
      className="relative mt-5 max-w-2xl overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/14 via-white/8 to-teal/15 px-4 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-md sm:mt-6 sm:px-5 sm:py-[1.15rem] lg:max-w-xl"
      role="doc-subtitle"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal via-teal to-[#fdbf3e]"
        aria-hidden="true"
      />
      <div className="flex items-start gap-3 pl-2">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/12 ring-1 ring-white/25">
          <ShieldCheckIcon />
        </span>
        <p className="text-[1.05rem] font-semibold leading-snug tracking-tight text-white sm:text-lg lg:text-xl lg:leading-snug">
          {segments.map((segment, index) =>
            segment.highlight ? (
              <span key={index} className="relative mx-0.5 inline-block font-bold">
                <span className="relative z-10 bg-gradient-to-r from-[#ffe08a] via-[#fdbf3e] to-[#f5a623] bg-clip-text text-transparent">
                  {segment.text}
                </span>
                <span
                  className="absolute -bottom-0.5 left-0 right-0 z-0 h-2 rounded-sm bg-teal/35"
                  aria-hidden="true"
                />
              </span>
            ) : (
              <span key={index}>{segment.text}</span>
            )
          )}
        </p>
      </div>
    </div>
  );
}

function HeroCopy({ section }) {
  return (
    <div className="min-w-0 lg:pt-2 [text-shadow:0_1px_18px_rgba(0,0,0,0.35)]">
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

      {section.tagline?.length ? <HeroTagline segments={section.tagline} /> : null}

      <h1 className="mt-6 max-w-2xl text-2xl font-bold leading-[1.3] tracking-tight text-white sm:mt-7 sm:text-3xl lg:text-[2.1rem]">
        {section.title}
        {section.titleHighlight ? (
          <>
            {" "}
            <span className="text-[#fdbf3e]">{section.titleHighlight}</span>
          </>
        ) : null}
      </h1>

      <HighlightedCopy segments={section.description} variant="heroLead" />

      {section.ctas?.length ? (
        <div className="mt-8 flex flex-col items-start gap-4 sm:mt-9 sm:gap-5">
          {section.ctas
            .filter((cta) => cta.variant !== "highlight")
            .map((cta) => {
              const variant = cta.variant ?? "primary";
              const className =
                variant === "secondary"
                  ? "bg-blue shadow-[0_8px_20px_rgba(0,0,0,0.22)] hover:bg-teal"
                  : "bg-teal shadow-[0_8px_20px_rgba(0,0,0,0.22)] hover:bg-blue";

              return (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors ${className}`}
                >
                  {cta.label}
                </Link>
              );
            })}
          {section.ctas
            .filter((cta) => cta.variant === "highlight")
            .map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="inline-flex items-center justify-center rounded-md bg-[#e24b4b] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_8px_24px_rgba(226,75,75,0.45)] ring-2 ring-white/30 transition-colors hover:bg-[#c93d3d]"
              >
                {cta.label}
              </Link>
            ))}
        </div>
      ) : null}
    </div>
  );
}

function EstimateFormCard({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/40 bg-white/55 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-md ${className}`}
    >
      <div className="h-1.5 w-full bg-teal" aria-hidden="true" />
      <div className="p-1.5 sm:p-2">
        <LeadConnectorForm
          iframeId="inline-qvI3LVdUNkwaVf8kgsKE-home"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default function HeroSectionCopy({ content, marqueeItems }) {
  const section = content?.[0];
  const backgroundImages = section?.backgroundImages?.length
    ? section.backgroundImages
    : section?.backgroundImage
      ? [section.backgroundImage]
      : [];
  const backgroundKey = backgroundImages.join("|");
  const [activeBackground, setActiveBackground] = useState(0);
  const readyRef = useRef(new Set());
  const failedRef = useRef(new Set());

  // Preload background images only — text/form stay fixed and are not part of the slideshow.
  useEffect(() => {
    if (!backgroundImages.length) return undefined;

    readyRef.current = new Set();
    failedRef.current = new Set();
    setActiveBackground(0);

    backgroundImages.forEach((src, index) => {
      const img = new window.Image();
      img.onload = () => {
        readyRef.current.add(index);
      };
      img.onerror = () => {
        failedRef.current.add(index);
        readyRef.current.delete(index);
        setActiveBackground((prev) => {
          if (prev !== index) return prev;
          const total = backgroundImages.length;
          for (let step = 1; step <= total; step += 1) {
            const candidate = (prev + step) % total;
            if (!failedRef.current.has(candidate)) return candidate;
          }
          return prev;
        });
      };
      img.src = src;
    });

    return undefined;
  }, [backgroundKey]);

  useEffect(() => {
    if (backgroundImages.length < 2) return undefined;

    const id = window.setInterval(() => {
      setActiveBackground((prev) => {
        const total = backgroundImages.length;
        for (let step = 1; step <= total; step += 1) {
          const next = (prev + step) % total;
          if (failedRef.current.has(next)) continue;
          if (readyRef.current.has(next) || next === 0) return next;
        }
        return prev;
      });
    }, 3000);

    return () => window.clearInterval(id);
  }, [backgroundKey]);

  if (!section) return null;

  return (
    <>
      <div className="relative isolate overflow-hidden">
        {/* Background-only slider (does not affect headline or form) */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#1c2430]" aria-hidden="true">
          {backgroundImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === activeBackground ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        {/* Fixed content — single form instance for mobile + desktop */}
        <section className="relative z-10" aria-label="Welcome to FMP Flooring">
          <div className="relative mx-auto grid max-w-7xl items-start gap-6 px-4 py-8 pb-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-8 lg:px-10 lg:py-10 lg:pb-14 xl:py-12 xl:pb-16">
            <HeroCopy section={section} />
            <div className="w-full max-w-[26rem] justify-self-center lg:w-[26rem] lg:max-w-none lg:justify-self-end">
              <EstimateFormCard />
            </div>
          </div>
        </section>
      </div>

      {marqueeItems?.length ? <FederalMarquee items={marqueeItems} /> : null}
      <HeroStatsStrip items={section.stats} />
    </>
  );
}

