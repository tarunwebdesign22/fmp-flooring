"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonials" : "Next testimonials"}
      className="absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-white shadow-sm transition-colors hover:bg-blue hover:text-white"
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

function TestimonialCard({ item }) {
  return (
    <article className="mx-1 flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-left shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md sm:mx-2 sm:px-7 sm:py-6">
      <span
        className="mb-1 font-serif text-6xl leading-none text-[#fdbf3e] sm:text-7xl"
        aria-hidden="true"
      >
        “
      </span>

      <blockquote className="flex-1 text-[15px] leading-7 text-white/90 italic sm:text-base sm:leading-7">
        {item.quote}
      </blockquote>

      <div className="mt-4">
        <span className="mb-2 block h-px w-10 bg-[#fdbf3e]" aria-hidden="true" />
        <cite className="not-italic text-sm font-bold tracking-wide text-white">
          {item.author}
        </cite>
      </div>
    </article>
  );
}

function getTestimonialSlidesToShow(width) {
  if (width < 768) return 1;
  return 2;
}

export default function TestimonialsSection({ content }) {
  const section = content?.[0];
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => setSlidesToShow(getTestimonialSlidesToShow(window.innerWidth));
    update();
    setReady(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!section) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-[70px] lg:py-24">
      <Image
        src={section.backgroundImage || "/images/laminate-reviews.webp"}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-12 text-center sm:mb-14">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {section.title}
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 bg-teal" aria-hidden="true" />
        </div>

        <div className="relative px-10 sm:px-12">
          <ArrowButton direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
          <ArrowButton direction="next" onClick={() => sliderRef.current?.slickNext()} />

          <div className="testimonials-slider">
            {ready ? (
              <Slider key={slidesToShow} ref={sliderRef} {...settings}>
                {section.items.map((item) => (
                  <div key={item.author} className="h-full">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {section.items.slice(0, slidesToShow).map((item) => (
                  <TestimonialCard key={item.author} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
