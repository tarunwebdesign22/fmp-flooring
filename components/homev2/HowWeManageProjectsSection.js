"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ProjectStepCard({ card, index, visible }) {
  const step = card.step || String(index + 1).padStart(2, "0");
  const rowLayoutClass = "md:flex-row";

  return (
    <li
      className={`group flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(34,30,83,0.14)] ${rowLayoutClass} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-greylight md:h-auto md:w-[42%] md:shrink-0 md:aspect-auto">
        <Image
          src={card.image}
          alt={card.imageAlt || card.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
        />
        <span className="absolute top-3 left-3 z-10 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-teal px-2.5 text-sm font-bold text-white shadow-md">
          {step}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
          Step {step}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-blue sm:text-lg">
          {card.title}
        </h3>
        <span
          className="mt-3 mb-3 block h-0.5 w-10 bg-teal transition-colors duration-300 group-hover:bg-[#fdbf3e]"
          aria-hidden="true"
        />
        {card.description ? (
          <p className="text-sm leading-6 text-blue/70">{card.description}</p>
        ) : null}
      </div>
    </li>
  );
}

export default function HowWeManageProjectsSection({ content }) {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!section?.steps?.length) return null;

  return (
    <section ref={sectionRef} className="bg-greylight py-14 sm:py-16 lg:py-20">
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
          {section.description ? (
            <p className="mt-5 text-[15px] leading-7 text-blue/70 sm:text-base">
              {section.description}
            </p>
          ) : null}
        </div>

        <ol className="mx-auto mt-10 grid w-full grid-cols-1 gap-6 sm:mt-12 lg:w-[70%] xl:w-[65%]">
          {section.steps.map((card, index) => (
            <ProjectStepCard
              key={card.title}
              card={card}
              index={index}
              visible={visible}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
