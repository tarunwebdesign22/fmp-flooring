"use client";

import { useState } from "react";

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`shrink-0 text-blue transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FaqSection({ content }) {
  const section = content[0];
  const [openIndex, setOpenIndex] = useState(0);

  if (!section) return null;

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="bg-[color-mix(in_srgb,#fdbf3e_22%,white)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
        </div>

        <ul className="flex flex-col gap-4">
          {section.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-xl border border-grey/70 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-[15px] font-semibold leading-snug text-blue sm:text-base">
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-grey/50 px-5 pt-0 pb-5 text-sm leading-7 text-blue/70 sm:px-6 sm:pb-6">
                      <span className="mt-4 block">{item.answer}</span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
