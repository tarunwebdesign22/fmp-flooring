"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous offer" : "Next offer"}
      className="absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-white shadow-sm transition-colors hover:bg-blue hover:text-white"
      style={{ [direction === "prev" ? "left" : "right"]: -4 }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        {direction === "prev" ? (
          <path d="M15 6l-6 6 6 6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </button>
  );
}

function OfferSlide({ offer }) {
  const theme = offer.theme || "blue";
  const isYellow = theme === "yellow";
  const isTeal = theme === "teal";

  const panelClass = isYellow
    ? "bg-[#fdbf3e]"
    : isTeal
      ? "bg-teal"
      : "bg-blue";

  const dashedBorderClass = isYellow
    ? "border-blue/40"
    : isTeal
      ? "border-white/45"
      : "border-white/35";

  const highlightClass = isYellow ? "text-blue" : "text-[#fdbf3e]";
  const titleClass = isYellow ? "text-blue" : "text-white";
  const descriptionClass = isYellow ? "text-blue/85" : "text-white/90";
  const buttonClass = isYellow
    ? "bg-blue text-white hover:bg-blue/90"
    : "bg-[#fdbf3e] text-blue hover:bg-white";

  return (
    <div className="grid overflow-hidden rounded-xl shadow-[0_12px_40px_rgba(34,30,83,0.12)] lg:grid-cols-2">
      <div
        className={`relative flex flex-col items-center justify-center px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-12 ${panelClass}`}
      >
        <div
          className={`pointer-events-none absolute inset-3 rounded-lg border border-dashed sm:inset-4 ${dashedBorderClass}`}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-md">
          {offer.highlight ? (
            <p
              className={`text-2xl font-extrabold uppercase tracking-wide sm:text-3xl ${highlightClass}`}
            >
              {offer.highlight}
            </p>
          ) : null}

          <h2
            className={`mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-[2.65rem] ${titleClass}`}
          >
            {offer.title}
          </h2>

          {offer.description ? (
            <p className={`mt-3 text-base sm:text-lg ${descriptionClass}`}>
              {offer.description}
            </p>
          ) : null}

          {offer.buttonText && offer.buttonHref ? (
            <div className="mt-7">
              <Link
                href={offer.buttonHref}
                className={`inline-flex items-center justify-center rounded px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${buttonClass}`}
              >
                {offer.buttonText}
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-full">
        <Image
          src={offer.image || "/images/103.webp"}
          alt={offer.imageAlt || offer.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function OffersSliderSection({ content }) {
  const section = content?.[0];
  const sliderRef = useRef(null);

  if (!section?.offers?.length) return null;

  const settings = {
    dots: section.offers.length > 1,
    infinite: section.offers.length > 1,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {section.eyebrow || section.title ? (
          <div className="mb-8 text-center sm:mb-10">
            {section.eyebrow ? (
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
                {section.eyebrow}
              </p>
            ) : null}
            {section.title ? (
              <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
                {section.title}
              </h2>
            ) : null}
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          </div>
        ) : null}

        <div className="relative px-8 sm:px-10">
          {section.offers.length > 1 ? (
            <>
              <ArrowButton
                direction="prev"
                onClick={() => sliderRef.current?.slickPrev()}
              />
              <ArrowButton
                direction="next"
                onClick={() => sliderRef.current?.slickNext()}
              />
            </>
          ) : null}

          <div className="offers-slider pb-8">
            <Slider ref={sliderRef} {...settings}>
              {section.offers.map((offer) => (
                <div key={offer.title}>
                  <OfferSlide offer={offer} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
