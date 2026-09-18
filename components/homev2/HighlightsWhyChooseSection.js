"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const featureIcons = {
  furniture: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 10h16v7H4z" />
      <path d="M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <path d="M6 17v2M18 17v2" />
      <path d="M4 13h16" />
    </svg>
  ),
  preparation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M5 20V11l7-5 7 5v9" />
      <path d="M9 20v-5h6v5" />
      <path d="M10 8.5 12 7l2 1.5" />
    </svg>
  ),
  challenges: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.5-2.5 2.5-2.5z" />
    </svg>
  ),
  removal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  ),
  hassleFree: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
};

const chooseIcons = {
  professionals: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19c1-3.5 3.5-5 5.5-5s4.5 1.5 5.5 5" />
      <path d="M14 14.5c1.5-.5 3-.2 4.5 1.5.5 1 .8 2 .8 3" />
    </svg>
  ),
  selection: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  ),
  pricing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .6 2 1.8c0 2.2-4 1.8-4 4 0 1.2 1 2 2.2 2s2-.5 2.4-1.3" />
    </svg>
  ),
  expertise: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  quality: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  satisfaction: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13.5c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </svg>
  ),
};

function HighlightRow({ card, index, visible }) {
  const icon = featureIcons[card.icon] || featureIcons.hassleFree;

  return (
    <li
      className={`flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${120 + index * 70}ms` : "0ms" }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fdbf3e]/20 text-[#fdbf3e]">
        {icon}
      </span>
      <p className="text-[14px] font-medium leading-6 text-white/95 sm:text-[15px]">{card.title}</p>
    </li>
  );
}

const TAB_AUTO_ADVANCE_MS = 8000;

function WhyChooseTabs({ items, visible, panelId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabListId = `${panelId}-tablist`;

  useEffect(() => {
    if (!visible || paused || items.length < 2) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, TAB_AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [visible, paused, items.length, activeIndex]);

  const active = items[activeIndex];
  if (!active) return null;

  const onTabKeyDown = (event, index) => {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % items.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`${panelId}-tab-${next}`)?.focus();
  };

  return (
    <div
      className={`grid grid-cols-1 gap-4 transition-all duration-700 lg:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        role="tablist"
        id={tabListId}
        aria-label="Why choose FMP topics"
        aria-orientation="vertical"
        className="flex flex-col gap-2"
      >
        {items.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              id={`${panelId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${panelId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all sm:gap-3 sm:px-3.5 sm:py-3 ${
                selected
                  ? "border border-blue bg-blue shadow-[0_4px_16px_rgba(34,30,83,0.12)]"
                  : "border border-transparent bg-transparent hover:bg-blue/[0.04]"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  selected ? "bg-[#fdbf3e] text-blue" : "bg-[#fdbf3e]/85 text-blue"
                }`}
              >
                {chooseIcons[item.icon] || chooseIcons.quality}
              </span>
              <span
                className={`min-w-0 text-xs font-bold leading-snug sm:text-[13px] ${
                  selected ? "text-white" : "text-blue"
                }`}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${panelId}-panel`}
        aria-labelledby={`${panelId}-tab-${activeIndex}`}
        className="min-h-[10rem] rounded-2xl border border-blue/8 bg-greylight/50 p-5 sm:p-6 lg:p-7"
      >
        <h3 className="text-lg font-bold text-blue sm:text-xl">{active.title}</h3>
        <span className="mt-2.5 mb-3 block h-0.5 w-10 rounded-full bg-teal" aria-hidden="true" />
        <p className="text-sm leading-7 text-blue/70 sm:text-[15px]">{active.description}</p>
      </div>
    </div>
  );
}

export default function HighlightsWhyChooseSection({ highlights, whyChoose }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  if (!highlights?.cards?.length && !whyChoose?.items?.length) return null;

  const backgroundImage = highlights?.backgroundImage || "/images/comparision-bg.jpg";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eeecff] py-14 sm:py-16 lg:py-[72px]"
      aria-labelledby="highlights-why-choose-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6 lg:items-stretch">
          {highlights?.cards?.length ? (
            <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl lg:col-span-5 lg:min-h-0 lg:self-stretch">
              <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue/95 via-blue/88 to-blue/75"
                aria-hidden="true"
              />
              <div className="relative flex flex-1 flex-col p-6 sm:p-8 lg:p-9">
                {highlights.eyebrow ? (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal sm:text-sm">
                    {highlights.eyebrow}
                  </p>
                ) : null}
                <h2
                  id="highlights-why-choose-heading"
                  className="mt-2 text-2xl font-bold text-white sm:text-3xl lg:text-[2rem]"
                >
                  {highlights.title}
                </h2>
                <span className="mt-3 block h-1 w-14 rounded-full bg-teal" aria-hidden="true" />

                <ul className="mt-6 flex flex-1 flex-col gap-2.5 sm:mt-8 sm:gap-3">
                  {highlights.cards.map((card, index) => (
                    <HighlightRow key={card.title} card={card} index={index} visible={visible} />
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {whyChoose?.items?.length ? (
            <div className="lg:col-span-7">
              <div
                className={`flex h-full flex-col rounded-3xl border border-blue/6 bg-white px-6 py-8 shadow-[0_4px_24px_rgba(34,30,83,0.05)] transition-all duration-700 sm:px-8 sm:py-9 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {whyChoose.eyebrow ? (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal sm:text-sm">
                    {whyChoose.eyebrow}
                  </p>
                ) : null}
                <h2 className="mt-2 text-2xl font-bold text-blue sm:text-3xl lg:text-[2rem]">
                  {whyChoose.title}
                </h2>
                <span className="mt-3 block h-1 w-14 rounded-full bg-teal" aria-hidden="true" />
                {whyChoose.description ? (
                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-blue/70">{whyChoose.description}</p>
                ) : null}

                <div className="mt-8 flex-1 sm:mt-9">
                  <WhyChooseTabs items={whyChoose.items} visible={visible} panelId="why-choose-fmp" />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
