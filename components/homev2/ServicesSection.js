"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous services" : "Next services"}
      className="absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-grey bg-white text-teal shadow-sm transition-colors hover:border-teal hover:bg-teal hover:text-white sm:flex"
      style={{ [direction === "prev" ? "left" : "right"]: 0 }}
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

function ServiceCard({ service }) {
  return (
    <article className="mx-0 flex h-full flex-col overflow-hidden rounded-2xl border border-grey/70 bg-white sm:mx-2">
      <div className="relative aspect-[4/3] bg-greylight">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {service.badge ? (
          <span className="absolute top-0 right-0 bg-teal px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {service.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col items-center px-5 py-6 text-center sm:px-6">
        <h3 className="text-lg font-bold text-blue">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-blue/70">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="mt-5 inline-flex items-center justify-center rounded border border-teal px-5 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}

function getServiceSlidesToShow(width) {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
}

export default function ServicesSection({ content }) {
  const section = content?.[0];
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => setSlidesToShow(getServiceSlidesToShow(window.innerWidth));
    update();
    setReady(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!section?.services?.length) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-[#eeecff] py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
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
            <p className="mx-auto mt-5 text-[15px] leading-7 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <div className="relative px-[15px] pb-8 sm:px-12">
          <ArrowButton
            direction="prev"
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <ArrowButton
            direction="next"
            onClick={() => sliderRef.current?.slickNext()}
          />

          <div className="services-slider">
            {ready ? (
              <Slider key={slidesToShow} ref={sliderRef} {...settings}>
                {section.services.map((service) => (
                  <div key={service.title} className="h-full pb-2">
                    <ServiceCard service={service} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="mx-auto max-w-sm">
                <ServiceCard service={section.services[0]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
