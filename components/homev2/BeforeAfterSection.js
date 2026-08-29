"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous transformation" : "Next transformation"}
      className={`absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-grey bg-white text-teal shadow-md transition-colors hover:border-teal hover:bg-teal hover:text-white ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        {direction === "prev" ? (
          <path d="M15 6l-6 6 6 6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </button>
  );
}

function BeforeAfterSlider({ beforeImage, afterImage, active, label }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  useEffect(() => {
    if (active) {
      setPosition(50);
    }
  }, [active, beforeImage, afterImage]);

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
    <div className="px-1">
      <div
        ref={containerRef}
        className="relative aspect-[16/11] w-full touch-none overflow-hidden rounded-2xl select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="img"
        aria-label={label ? `${label} before and after flooring comparison` : "Before and after flooring comparison slider"}
      >
        <Image
          src={afterImage}
          alt={label ? `${label} after flooring transformation` : "After flooring transformation"}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          draggable={false}
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={label ? `${label} before flooring transformation` : "Before flooring transformation"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            draggable={false}
          />
        </div>

        <span className="absolute bottom-4 left-4 rounded bg-blue px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
          Before
        </span>
        <span className="absolute right-4 bottom-4 rounded bg-teal px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
          After
        </span>

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
    </div>
  );
}

export default function BeforeAfterSection({ content }) {
  const section = content[0];
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!section) return null;

  const projects =
    section.projects?.length > 0
      ? section.projects
      : section.beforeImage && section.afterImage
        ? [{ beforeImage: section.beforeImage, afterImage: section.afterImage }]
        : [];

  if (projects.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <section className="bg-[#eeecff] py-14 sm:py-16 lg:py-[70px]">
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

        <div className="relative min-w-0 px-8 sm:px-10">
          {projects.length > 1 ? (
            <>
              <ArrowButton direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
              <ArrowButton direction="next" onClick={() => sliderRef.current?.slickNext()} />
            </>
          ) : null}

          <div className="before-after-slider w-full overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
              {projects.map((project, index) => (
                <div key={project.label || `${project.beforeImage}-${index}`}>
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    label={project.label}
                    active={activeIndex === index}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
