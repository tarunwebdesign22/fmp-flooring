"use client";

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
      className={`group flex h-full flex-col items-center rounded-[18px] border border-[#fdbf3e]/35 bg-[#fdbf3e]/10 px-6 py-8 text-center shadow-[0_8px_28px_rgba(34,30,83,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_14px_36px_rgba(34,30,83,0.12)] sm:px-7 sm:py-9 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
        {icon}
      </span>
      <span
        className="mt-5 mb-4 block h-0.5 w-10 bg-teal transition-colors duration-300 group-hover:bg-[#fdbf3e]"
        aria-hidden="true"
      />
      <h3 className="text-base font-bold leading-snug text-blue sm:text-[17px] sm:leading-6">
        {card.title}
      </h3>
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

  return (
    <section ref={sectionRef} className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
            {section.title}
          </h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          {section.subtitle ? (
            <p className="mt-5 text-[15px] leading-7 text-blue/70 sm:text-base">
              {section.subtitle}
            </p>
          ) : null}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">
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
    </section>
  );
}
