"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function FeatureCard({ card, index, visible, total }) {
  const step = card.step || String(index + 1).padStart(2, "0");

  return (
    <li
      className={`group relative flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(34,30,83,0.14)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
    >
      {index < total - 1 ? (
        <span
          className="pointer-events-none absolute top-[4.75rem] right-[-1rem] z-20 hidden h-0.5 w-8 bg-teal/35 lg:block"
          aria-hidden="true"
        />
      ) : null}

      <div className="relative aspect-video overflow-hidden bg-greylight">
        <Image
          src={card.image}
          alt={card.imageAlt || card.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute top-3 left-3 z-10 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-teal px-2.5 text-sm font-bold text-white shadow-md">
          {step}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
          Step {step}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-blue sm:text-xl">
          {card.title}
        </h3>
        <span
          className="mt-3 mb-3 block h-0.5 w-10 bg-teal transition-colors duration-300 group-hover:bg-[#fdbf3e]"
          aria-hidden="true"
        />
        <p className="text-sm leading-6 text-blue/70 sm:text-[15px] sm:leading-7">
          {card.description}
        </p>
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

        <ol className="mt-10 grid grid-cols-1 gap-7 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {section.cards.map((card, index) => (
            <FeatureCard
              key={card.title}
              card={card}
              index={index}
              total={section.cards.length}
              visible={visible}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
