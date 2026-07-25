"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import FederalMarquee from "@/components/FederalMarquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sectorIcons = {
  schools: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M2 9.5 12 4l10 5.5-10 5.5L2 9.5z" />
      <path d="M6 12v4.5c0 .5 2.5 2.5 6 2.5s6-2 6-2.5V12" />
      <path d="M20 10.5V16" />
    </svg>
  ),
  hospitals: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 21V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      <path d="M2 21h20" />
      <path d="M12 8v6M9 11h6" />
      <path d="M9 21v-4h6v4" />
    </svg>
  ),
  government: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M4 21V10l8-5 8 5v11" />
      <path d="M8 21v-6h3v6M13 21v-6h3v6" />
      <path d="M9 10h.01M12 10h.01M15 10h.01" />
    </svg>
  ),
  offices: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 21v-4h6v4" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    </svg>
  ),
};

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous sectors" : "Next sectors"}
      className={`absolute top-[42%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-grey bg-white text-teal shadow-md transition-colors hover:border-teal hover:bg-teal hover:text-white ${
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

function SectorCard({ sector }) {
  return (
    <article className="mx-1 rounded-2xl bg-blue shadow-[0_6px_24px_rgba(0,0,0,0.1)] sm:mx-2">
      <div className="relative aspect-[16/11] overflow-hidden rounded-t-2xl bg-greylight">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="relative rounded-b-2xl px-5 pb-7 pt-11 text-center sm:px-6">
        <span className="absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#fdbf3e] bg-white text-[#fdbf3e] shadow-sm">
          {sectorIcons[sector.icon] || sectorIcons.offices}
        </span>

        <h3 className="text-xl font-bold text-white">{sector.title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/85">{sector.description}</p>
      </div>
    </article>
  );
}

function getFederalSlidesToShow(width) {
  return width < 1024 ? 1 : 2;
}

export default function FederalContractorSection({ content }) {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => setSlidesToShow(getFederalSlidesToShow(window.innerWidth));
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
  };

  return (
    <>
      {content.map((section) => (
        <section key={section.headlineBlue} className="bg-white">
          <FederalMarquee items={section.marqueeItems} />

          <div className="py-14 sm:py-16 lg:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,35fr)_minmax(0,65fr)] lg:gap-12 lg:px-10">
              <div className="min-w-0">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  <span className="block text-blue">{section.headlineBlue}</span>
                  <span className="block text-teal">{section.headlineTeal}</span>
                </h2>
                <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

                <p className="mt-6 text-[15px] leading-7 text-blue/70">
                  {section.description}
                </p>

                <div className="mt-6 border-t border-grey" aria-hidden="true" />

                <Link
                  href={section.buttonHref}
                  className="mt-6 inline-flex items-center gap-2 rounded border border-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
                >
                  {section.buttonText}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="relative min-w-0 px-8 sm:px-10">
                <ArrowButton direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
                <ArrowButton direction="next" onClick={() => sliderRef.current?.slickNext()} />

                <div className="federal-slider w-full overflow-hidden">
                  {ready ? (
                    <Slider key={slidesToShow} ref={sliderRef} {...settings}>
                      {section.sectors.map((sector) => (
                        <div key={sector.title} className="h-auto">
                          <SectorCard sector={sector} />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="mx-auto max-w-md">
                      <SectorCard sector={section.sectors[0]} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
