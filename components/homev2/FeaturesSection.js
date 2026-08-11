"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const featureIcons = {
  furniture: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 10h16v7H4z" />
      <path d="M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <path d="M6 17v2M18 17v2" />
      <path d="M4 13h16" />
    </svg>
  ),
  preparation: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M5 20V11l7-5 7 5v9" />
      <path d="M9 20v-5h6v5" />
      <path d="M10 8.5 12 7l2 1.5" />
    </svg>
  ),
  challenges: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.5-2.5 2.5-2.5z" />
    </svg>
  ),
  hassleFree: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
};

function FeatureCard({ card, index, visible }) {
  const icon = featureIcons[card.icon] || featureIcons.hassleFree;

  return (
    <li
      className={`group flex items-start gap-3 text-left transition-all duration-300 ease-out sm:gap-4 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#fdbf3e]">
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="text-[15px] font-medium leading-7 text-white lg:text-[16px]">
          {card.title}
        </h3>
      </div>
    </li>
  );
}

export default function FeaturesSection({ content }) {
  const section = content?.[0];
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!section?.cards?.length) return null;

  const backgroundImage =
    section.backgroundImage || "/images/comparision-bg.jpg";

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-[70px]"
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue/95 via-blue/90 to-blue/85"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-7">
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl sm:min-h-[340px]">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>

          <div className="rounded-2xl border border-white/15 bg-transparent px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            {section.eyebrow ? (
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
                {section.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {section.title}
            </h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            {section.subtitle ? (
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-base">
                {section.subtitle}
              </p>
            ) : null}

            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
              {section.cards.map((card, index) => (
                <FeatureCard
                  key={card.title}
                  card={card}
                  index={index}
                  visible={visible}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
