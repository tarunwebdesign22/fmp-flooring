"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategoryCard({ item }) {
  return (
    <Link href={item.href} className="group flex flex-col items-center text-center">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-greylight">
        <Image
          src={item.image}
          alt={item.imageAlt || item.title}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        />
      </div>
      <h3 className="mt-3 text-[15px] font-bold leading-snug text-blue sm:text-base">
        {item.title}
      </h3>
      {item.subtitle ? (
        <p className="mt-1 text-xs leading-5 text-blue/55 sm:text-[13px]">{item.subtitle}</p>
      ) : null}
    </Link>
  );
}

function ArrowIcon({ direction, size = 28 }) {
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

function SliderArrow({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous items" : "Next items"}
      className={`absolute top-[38%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center text-teal transition-colors hover:text-blue sm:flex ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}

function MobileDotArrow({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous items" : "Next items"}
      className="flex h-9 w-9 shrink-0 items-center justify-center text-teal transition-colors hover:text-blue"
    >
      <ArrowIcon direction={direction} size={22} />
    </button>
  );
}

function getCategorySlidesToShow(width) {
  if (width < 640) return 2;
  if (width < 1024) return 3;
  return 6;
}

function CategoryBlock({ block }) {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);

  const mobileOnlySlider = Boolean(block.sliderMobileOnly);
  const alwaysSlider = Boolean(block.slider) || block.items.length > 6;
  const useSlider =
    ready && (alwaysSlider || (mobileOnlySlider && !isDesktop));

  useEffect(() => {
    if (!alwaysSlider && !mobileOnlySlider) return undefined;
    const update = () => {
      const width = window.innerWidth;
      setSlidesToShow(getCategorySlidesToShow(width));
      setIsDesktop(width >= 1024);
    };
    update();
    setReady(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [alwaysSlider, mobileOnlySlider]);

  if (!block?.items?.length) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className="category-cards-dots">
        <div
          className={`flex items-center justify-center gap-2 ${
            mobileOnlySlider ? "" : "sm:block"
          }`}
        >
          <div className={mobileOnlySlider ? "" : "sm:hidden"}>
            <MobileDotArrow
              direction="prev"
              onClick={() => sliderRef.current?.slickPrev()}
            />
          </div>
          <ul className="!m-0 !flex !items-center !justify-center !p-0">{dots}</ul>
          <div className={mobileOnlySlider ? "" : "sm:hidden"}>
            <MobileDotArrow
              direction="next"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div>
      <div
        className={`relative mx-auto mb-8 flex max-w-7xl items-center justify-center px-6 sm:mb-10 sm:px-8 lg:px-10 ${
          !useSlider && block.viewAllHref ? "sm:pr-40" : ""
        }`}
      >
        <h2 className="text-center text-2xl font-bold leading-tight text-blue sm:text-3xl lg:text-[2rem]">
          {block.title.map((part, index) =>
            part.highlight ? (
              <span
                key={`${part.text}-${index}`}
                className={part.tone === "gold" ? "text-[#fdbf3e]" : "text-teal"}
              >
                {part.text}
              </span>
            ) : (
              <span key={`${part.text}-${index}`}>{part.text}</span>
            ),
          )}
        </h2>

        {!useSlider && block.viewAllHref ? (
          <Link
            href={block.viewAllHref}
            className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-blue sm:right-8 sm:inline-flex lg:right-10"
          >
            {block.viewAllText || "View All"}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        ) : null}
      </div>

      {useSlider ? (
        <div className="relative mx-auto max-w-7xl pb-8">
          {!mobileOnlySlider ? (
            <>
              <SliderArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
              <SliderArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
            </>
          ) : null}

          <div className="category-cards-slider w-full px-6 sm:px-8 lg:px-10">
            {ready ? (
              <Slider key={`${slidesToShow}-${mobileOnlySlider}`} ref={sliderRef} {...settings}>
                {block.items.map((item) => (
                  <div key={item.title} className="px-1.5 pb-2 sm:px-2">
                    <CategoryCard item={item} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {block.items.slice(0, slidesToShow).map((item) => (
                  <CategoryCard key={item.title} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6 lg:gap-x-5">
            {block.items.map((item) => (
              <CategoryCard key={item.title} item={item} />
            ))}
          </div>

          {block.viewAllHref ? (
            <div className="mt-6 text-center sm:hidden">
              <Link
                href={block.viewAllHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
              >
                {block.viewAllText || "View All"}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default function CategoryCardsSection({ content }) {
  const section = Array.isArray(content) ? content[0] : content;
  const blocks = section?.blocks || [];
  if (!blocks.length) return null;

  return (
    <section
      id={section.id || "category-cards"}
      className="scroll-mt-28 overflow-x-clip bg-white pt-0 pb-12 sm:pb-14 lg:pb-16"
    >
      <div>
        {blocks.map((block, index) => (
          <div
            key={block.viewAllText || block.items[0]?.title}
            className={index > 0 ? "pt-[30px]" : undefined}
          >
            <CategoryBlock block={block} />
          </div>
        ))}
      </div>
    </section>
  );
}
