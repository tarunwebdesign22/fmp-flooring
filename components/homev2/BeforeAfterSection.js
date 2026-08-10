"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function BeforeAfterSlider({ beforeImage, afterImage }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, x)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/11] w-full touch-none overflow-hidden rounded-2xl select-none shadow-[0_12px_40px_rgba(34,30,83,0.12)]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label="Before and after flooring comparison slider"
    >
      {/* After (full base) */}
      <Image
        src={afterImage}
        alt="After flooring transformation"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
        draggable={false}
      />

      {/* Before (clipped from left) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before flooring transformation"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute bottom-4 left-4 rounded bg-blue px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
        Before
      </span>
      <span className="absolute right-4 bottom-4 rounded bg-teal px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-md">
          <span className="flex items-center gap-0.5 text-blue" aria-hidden="true">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Accessible range input */}
      <input
        type="range"
        min="5"
        max="95"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 z-20 cursor-ew-resize opacity-0"
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}

export default function BeforeAfterSection({ content }) {
  const section = content[0];

  if (!section) return null;

  return (
    <section className="bg-[color-mix(in_srgb,#fdbf3e_22%,white)] py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12 lg:px-10">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue">
            {section.eyebrow}
          </p>
          <span className="mt-2 block h-1 w-14 bg-teal" aria-hidden="true" />

          <h2 className="mt-4 text-3xl font-bold leading-tight text-blue sm:text-4xl">
            {section.title}
          </h2>

          <p className="mt-4 text-lg font-medium text-blue/80">{section.tagline}</p>

          {section.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="mt-4 text-[15px] leading-7 text-blue/70">
              {text}
            </p>
          ))}

          <Link
            href={section.buttonHref}
            className="mt-8 inline-flex items-center gap-2.5 rounded bg-[#fdbf3e] px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-blue transition-colors hover:bg-blue hover:text-white"
          >
            <PhoneIcon />
            {section.buttonText}
          </Link>
        </div>

        <div className="min-w-0">
          <BeforeAfterSlider
            beforeImage={section.beforeImage}
            afterImage={section.afterImage}
          />
        </div>
      </div>
    </section>
  );
}
