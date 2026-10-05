"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function TimelineStep({ card, index, visible, reduceMotion, stepRef, status }) {
  const step = card.step || String(index + 1).padStart(2, "0");
  const isActive = status === "active";
  const isCrossed = status === "crossed";

  const nodeClass = isCrossed || isActive
    ? "bg-teal text-white shadow-[0_8px_24px_rgba(42,188,175,0.45)] ring-white scale-110"
    : "bg-white text-blue/35 shadow-none ring-grey scale-100";

  const labelClass = isCrossed || isActive ? "text-teal" : "text-blue/40";
  const barClass = isCrossed || isActive ? "bg-teal" : "bg-grey";

  return (
    <li
      ref={stepRef}
      className={`relative grid grid-cols-[auto_1fr] items-start gap-5 pb-10 transition-all duration-700 ease-out last:pb-0 sm:gap-6 sm:pb-12 ${
        visible || reduceMotion ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: visible && !reduceMotion ? `${index * 100}ms` : "0ms",
      }}
    >
      <div className="relative z-10 flex flex-col items-center pt-0.5">
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4 transition-all duration-500 ${nodeClass}`}
        >
          {step}
        </span>
      </div>

      <div
        className={`min-w-0 pt-1 transition-opacity duration-500 ${
          status === "upcoming" && !reduceMotion ? "opacity-55" : "opacity-100"
        }`}
      >
        <p
          className={`text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-500 ${labelClass}`}
        >
          Step {step}
        </p>
        <h3 className="mt-2.5 text-lg font-bold leading-snug text-blue sm:mt-3 sm:text-xl">
          {card.title}
        </h3>
        <span
          className={`mt-3 mb-3 block h-0.5 w-10 transition-colors duration-500 sm:mt-3.5 sm:mb-3.5 ${barClass}`}
          aria-hidden="true"
        />
        {card.description ? (
          <p className="max-w-xl text-[15px] leading-7 text-blue/70">{card.description}</p>
        ) : null}
      </div>
    </li>
  );
}

export default function HowWeManageProjectsSection({ content }) {
  const section = content?.[0];
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const reduceMotion = usePrefersReducedMotion();
  const [visibleSteps, setVisibleSteps] = useState(() => new Set());
  const [lineProgress, setLineProgress] = useState(0);
  const [reachedIndex, setReachedIndex] = useState(-1);

  const activeStepIndex = Math.max(0, reachedIndex);
  const stepImages = (section?.steps || []).filter((step) => step.image);

  useEffect(() => {
    if (!section?.steps?.length) return undefined;

    if (reduceMotion) {
      setVisibleSteps(new Set(section.steps.map((_, i) => i)));
      setLineProgress(1);
      setReachedIndex(section.steps.length - 1);
      return undefined;
    }

    const observers = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              if (prev.has(index)) return prev;
              const next = new Set(prev);
              next.add(index);
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [section?.steps?.length, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !section?.steps?.length) return undefined;

    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewportMid = window.innerHeight * 0.55;
      const raw = (viewportMid - rect.top) / Math.max(rect.height, 1);
      setLineProgress(Math.min(1, Math.max(0, raw)));

      let nextReached = -1;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const stepRect = el.getBoundingClientRect();
        const stepMid = stepRect.top + stepRect.height * 0.25;
        if (stepMid <= viewportMid) nextReached = index;
      });
      setReachedIndex(nextReached);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [section?.steps?.length, reduceMotion]);

  if (!section?.steps?.length) return null;

  const getStatus = (index) => {
    if (reachedIndex < 0) return "upcoming";
    if (index < reachedIndex) return "crossed";
    if (index === reachedIndex) return "active";
    return "upcoming";
  };

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left: title, subtitle, one image */}
          <div className="lg:sticky lg:top-28">
            {section.eyebrow ? (
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
                {section.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
              {section.title}
            </h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            {section.description ? (
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-blue/70 sm:text-base">
                {section.description}
              </p>
            ) : null}

            {stepImages.length ? (
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[18px] bg-white shadow-[0_12px_36px_rgba(34,30,83,0.1)] sm:mt-10">
                {section.steps.map((step, index) => {
                  if (!step.image) return null;
                  const isShown = index === activeStepIndex;
                  return (
                    <Image
                      key={step.image}
                      src={step.image}
                      alt={step.imageAlt || step.title}
                      fill
                      className={`object-cover transition-opacity duration-500 ease-out ${
                        isShown ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>

          {/* Right: animated text-only steps */}
          <div ref={trackRef} className="relative">
            <div
              className="pointer-events-none absolute top-2 bottom-2 left-[1.35rem] w-px bg-grey"
              aria-hidden="true"
            >
              <div
                className="absolute top-0 left-0 w-full origin-top bg-teal transition-[height] duration-150 ease-out"
                style={{ height: `${lineProgress * 100}%` }}
              />
            </div>

            <ol className="relative">
              {section.steps.map((card, index) => (
                <TimelineStep
                  key={card.title}
                  card={card}
                  index={index}
                  visible={visibleSteps.has(index)}
                  reduceMotion={reduceMotion}
                  status={getStatus(index)}
                  stepRef={(el) => {
                    itemRefs.current[index] = el;
                  }}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
