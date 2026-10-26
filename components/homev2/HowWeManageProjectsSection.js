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

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 4.5 6.2v5.3c0 4.5 3.1 7.7 7.5 9.1 4.4-1.4 7.5-4.6 7.5-9.1V6.2L12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2.1 2.1L15.2 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ direction, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "prev" ? (
        <path d="M19 12H5M11 6l-6 6 6 6" />
      ) : (
        <path d="M5 12h14M13 6l6 6-6 6" />
      )}
    </svg>
  );
}

function StepsPager({ count, activeIndex, onPrev, onNext, onSelect }) {
  if (count < 2) return null;

  return (
    <div className="mt-5 flex items-center justify-center gap-3 lg:hidden" role="navigation" aria-label="Process steps">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous step"
        className="flex h-9 w-9 shrink-0 items-center justify-center text-teal transition-colors hover:text-blue"
      >
        <ArrowIcon direction="prev" />
      </button>

      <div className="flex items-center gap-2.5">
        {Array.from({ length: count }, (_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to step ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                isActive ? "bg-teal" : "bg-grey hover:bg-blue/30"
              }`}
            />
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next step"
        className="flex h-9 w-9 shrink-0 items-center justify-center text-teal transition-colors hover:text-blue"
      >
        <ArrowIcon direction="next" />
      </button>
    </div>
  );
}

function GuaranteeCallout({ guarantee }) {
  if (!guarantee?.title) return null;

  return (
    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-teal/25 bg-greylight px-4 py-4 shadow-[0_10px_28px_rgba(34,30,83,0.08)] sm:mt-10 sm:gap-4 sm:px-6 sm:py-6">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-[0_8px_24px_rgba(42,188,175,0.35)] sm:h-12 sm:w-12">
        <ShieldCheckIcon />
      </span>
      <div className="min-w-0 pt-0.5">
        <h3 className="text-base font-bold leading-snug text-blue sm:text-lg lg:text-xl">{guarantee.title}</h3>
        <span className="mt-2 mb-2 block h-0.5 w-10 bg-teal sm:mt-2.5 sm:mb-2.5" aria-hidden="true" />
        {guarantee.description ? (
          <p className="text-sm leading-6 text-blue/70 sm:text-[15px] sm:leading-7">{guarantee.description}</p>
        ) : null}
      </div>
    </div>
  );
}

function TimelineStep({ card, index, visible, reduceMotion, stepRef, status }) {
  const step = card.step || String(index + 1).padStart(2, "0");
  const isActive = status === "active";
  const isCrossed = status === "crossed";

  const nodeClass =
    isCrossed || isActive
      ? "bg-teal text-white shadow-[0_8px_24px_rgba(42,188,175,0.45)] ring-white scale-110"
      : "bg-white text-blue/35 shadow-none ring-grey scale-100";

  const labelClass = isCrossed || isActive ? "text-teal" : "text-blue/40";
  const barClass = isCrossed || isActive ? "bg-teal" : "bg-grey";

  return (
    <li
      ref={stepRef}
      className={`relative grid w-[calc(100vw-2.5rem)] max-w-[22rem] shrink-0 snap-center grid-cols-1 items-start gap-3 transition-all duration-700 ease-out lg:w-auto lg:max-w-none lg:snap-none lg:grid-cols-[auto_1fr] lg:gap-6 lg:pb-12 lg:last:pb-0 ${
        visible || reduceMotion ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: visible && !reduceMotion ? `${index * 100}ms` : "0ms",
      }}
    >
      <div className="relative z-10 flex flex-col items-start pt-0.5">
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4 transition-all duration-500 sm:h-11 sm:w-11 ${nodeClass}`}
        >
          {step}
        </span>
      </div>

      <div
        className={`min-w-0 pt-0.5 text-left transition-opacity duration-500 sm:pt-1 ${
          status === "upcoming" && !reduceMotion ? "opacity-55" : "opacity-100"
        }`}
      >
        <p
          className={`text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-500 sm:text-xs ${labelClass}`}
        >
          Step {step}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-blue sm:mt-2.5 sm:text-lg lg:text-xl">
          {card.title}
        </h3>
        <span
          className={`mt-2.5 mb-2.5 block h-0.5 w-10 transition-colors duration-500 sm:mt-3.5 sm:mb-3.5 ${barClass}`}
          aria-hidden="true"
        />
        {card.description ? (
          <p className="text-sm leading-6 text-blue/70 sm:text-[15px] sm:leading-7 lg:max-w-xl">
            {card.description}
          </p>
        ) : null}
      </div>
    </li>
  );
}

const AUTO_SCROLL_MS = 4000;
const AUTO_SCROLL_RESUME_MS = 6000;

export default function HowWeManageProjectsSection({ content }) {
  const section = content?.[0];
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const autoIndexRef = useRef(0);
  const pauseUntilRef = useRef(0);
  const reduceMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const [visibleSteps, setVisibleSteps] = useState(() => new Set());
  const [lineProgress, setLineProgress] = useState(0);
  const [reachedIndex, setReachedIndex] = useState(-1);

  const activeStepIndex = Math.max(0, reachedIndex);
  const stepImages = (section?.steps || []).filter((step) => step.image);

  const scrollToStep = (index, behavior = "smooth") => {
    const track = trackRef.current;
    const el = itemRefs.current[index];
    if (!track || !el) return;

    const trackRect = track.getBoundingClientRect();
    const stepRect = el.getBoundingClientRect();
    const nextLeft =
      track.scrollLeft +
      (stepRect.left - trackRect.left) -
      (trackRect.width - stepRect.width) / 2;

    track.scrollTo({ left: Math.max(0, nextLeft), behavior });
    setReachedIndex(index);
    autoIndexRef.current = index;
  };

  const pauseAutoScroll = () => {
    pauseUntilRef.current = Date.now() + AUTO_SCROLL_RESUME_MS;
  };

  const goToStep = (index) => {
    if (!section?.steps?.length) return;
    const next = ((index % section.steps.length) + section.steps.length) % section.steps.length;
    pauseAutoScroll();
    scrollToStep(next, "smooth");
  };

  useEffect(() => {
    if (!section?.steps?.length) return undefined;

    if (reduceMotion) {
      setVisibleSteps(new Set(section.steps.map((_, i) => i)));
      setLineProgress(1);
      setReachedIndex(section.steps.length - 1);
      return undefined;
    }

    // On mobile horizontal scroll, reveal all steps once the section enters view
    if (!isDesktop) {
      setVisibleSteps(new Set(section.steps.map((_, i) => i)));
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
        { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [section?.steps?.length, reduceMotion, isDesktop]);

  useEffect(() => {
    if (reduceMotion || !section?.steps?.length) return undefined;

    const updateFromVerticalScroll = () => {
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

    const updateFromHorizontalScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      setLineProgress(Math.min(1, Math.max(0, progress)));

      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const stepRect = el.getBoundingClientRect();
        const stepCenter = stepRect.left + stepRect.width / 2;
        const distance = Math.abs(stepCenter - centerX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setReachedIndex(closestIndex);
      autoIndexRef.current = closestIndex;
    };

    const onScroll = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        updateFromVerticalScroll();
      } else {
        updateFromHorizontalScroll();
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const track = trackRef.current;
    track?.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      track?.removeEventListener("scroll", onScroll);
    };
  }, [section?.steps?.length, reduceMotion]);

  // Mobile auto-scroll through steps
  useEffect(() => {
    if (reduceMotion || isDesktop || !section?.steps?.length) return undefined;

    const stepsCount = section.steps.length;
    autoIndexRef.current = Math.max(0, reachedIndex);

    const timer = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return;

      const track = trackRef.current;
      if (!track) return;

      // Only auto-advance when the section is roughly in view
      const rect = track.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.15;
      if (!inView) return;

      const nextIndex = (autoIndexRef.current + 1) % stepsCount;
      scrollToStep(nextIndex, "smooth");
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [section?.steps?.length, reduceMotion, isDesktop]);

  if (!section?.steps?.length) return null;

  const getStatus = (index) => {
    if (reachedIndex < 0) return "upcoming";
    if (index < reachedIndex) return "crossed";
    if (index === reachedIndex) return "active";
    return "upcoming";
  };

  return (
    <section className="overflow-x-clip bg-white py-12 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid min-w-0 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left: title, subtitle, one image */}
          <div className="min-w-0 lg:sticky lg:top-28">
            {section.eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal sm:text-sm">
                {section.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-2.5 text-2xl font-bold leading-tight text-blue sm:mt-3 sm:text-3xl lg:text-4xl">
              {section.title}
            </h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            {section.description ? (
              <p className="mt-4 max-w-xl text-sm leading-6 text-blue/70 sm:mt-5 sm:text-[15px] sm:leading-7 md:text-base">
                {section.description}
              </p>
            ) : null}

            {stepImages.length ? (
              <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-[0_12px_36px_rgba(34,30,83,0.1)] sm:mt-8 sm:rounded-[18px] lg:mt-10">
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

          {/* Right: steps — horizontal scroll on mobile, vertical timeline on desktop */}
          <div className="min-w-0">
            <div
              ref={trackRef}
              onPointerDown={pauseAutoScroll}
              onTouchStart={pauseAutoScroll}
              onWheel={pauseAutoScroll}
              className="relative -mx-4 touch-pan-x overflow-x-auto overscroll-x-contain px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none lg:touch-auto [&::-webkit-scrollbar]:hidden"
            >
              {/* Desktop vertical progress line */}
              <div
                className="pointer-events-none absolute top-2 bottom-2 left-5 hidden w-px bg-grey sm:left-[1.35rem] lg:block"
                aria-hidden="true"
              >
                <div
                  className="absolute top-0 left-0 w-full origin-top bg-teal transition-[height] duration-150 ease-out"
                  style={{ height: `${lineProgress * 100}%` }}
                />
              </div>

              <ol className="relative flex w-max flex-row gap-4 pr-4 sm:pr-6 lg:w-auto lg:flex-col lg:gap-0 lg:pr-0">
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

            <StepsPager
              count={section.steps.length}
              activeIndex={activeStepIndex}
              onPrev={() => goToStep(activeStepIndex - 1)}
              onNext={() => goToStep(activeStepIndex + 1)}
              onSelect={goToStep}
            />

            <GuaranteeCallout guarantee={section.guarantee} />
          </div>
        </div>
      </div>
    </section>
  );
}
