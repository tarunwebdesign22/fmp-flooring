"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function MobileDotArrow({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous brands" : "Next brands"}
      className="flex h-9 w-9 shrink-0 items-center justify-center text-teal transition-colors hover:text-blue"
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}

function getBrandSlidesToShow(width) {
  if (width < 640) return 2;
  if (width < 1024) return 3;
  return 5;
}

function BrandLogo({ brand }) {
  return (
    <div className="flex h-32 items-center justify-center border border-grey/70 px-5 py-5 sm:h-36 sm:px-6 sm:py-6 lg:h-40 lg:px-7 lg:py-7">
      <Image
        src={brand.logo}
        alt={brand.name}
        width={220}
        height={220}
        className="h-20 w-auto max-w-[160px] object-contain sm:h-24 sm:max-w-[190px] lg:h-28 lg:max-w-[210px]"
      />
    </div>
  );
}

function BrandsGrid({ logos }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white px-5 py-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:px-7 sm:py-8 lg:px-8 lg:py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {logos.map((brand) => (
          <BrandLogo key={brand.name} brand={brand} />
        ))}
      </div>
    </div>
  );
}

function BrandsSlider({ logos }) {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => {
      setSlidesToShow(getBrandSlidesToShow(window.innerWidth));
    };
    update();
    setReady(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className="brands-logos-dots">
        <div className="flex w-full max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-2">
          <MobileDotArrow
            direction="prev"
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <ul className="!m-0 !flex !max-w-[min(100%,14rem)] !flex-wrap !items-center !justify-center !gap-0 !p-0 sm:!max-w-[min(100%,20rem)]">
            {dots}
          </ul>
          <MobileDotArrow
            direction="next"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    ),
  };

  return (
    <div className="rounded-2xl bg-white px-4 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:px-7 sm:py-8">
      <div className="brands-logos-slider w-full">
        {ready ? (
          <Slider key={slidesToShow} ref={sliderRef} {...settings}>
            {logos.map((brand) => (
              <div key={brand.name} className="px-1 pb-1">
                <BrandLogo brand={brand} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-2 gap-0">
            {logos.slice(0, 2).map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BrandsSectionBlock({ section }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);
  const logos = section?.logos || [];

  useEffect(() => {
    const update = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    update();
    setReady(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!logos.length) return null;

  // Same pattern as Featured Projects: slider on mobile/tablet, grid on desktop
  const useSlider = ready && !isDesktop;

  return (
    <section className="relative isolate overflow-x-clip py-14 sm:py-16 lg:py-[70px]">
      <Image
        src="/images/clientbg003.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
            {section.eyebrow}
          </p>
          <span className="mx-auto mt-2 block h-0.5 w-12 bg-teal" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {section.headline}
            {section.headlineAccent ? (
              <span className="text-teal">{section.headlineAccent}</span>
            ) : null}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-white/80">{section.description}</p>
        </div>

        {useSlider ? <BrandsSlider logos={logos} /> : <BrandsGrid logos={logos} />}
      </div>
    </section>
  );
}

export default function BrandsSection({ content }) {
  const sections = Array.isArray(content) ? content : content ? [content] : [];

  return (
    <>
      {sections.map((section) => (
        <BrandsSectionBlock key={section.eyebrow || section.headline} section={section} />
      ))}
    </>
  );
}
