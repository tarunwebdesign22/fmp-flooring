"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function getBrandGrid(width) {
  if (width < 768) return { rows: 1, slidesPerRow: 2 };
  if (width < 1024) return { rows: 2, slidesPerRow: 3 };
  return { rows: 2, slidesPerRow: 4 };
}

export default function BrandsSection({ content }) {
  const [grid, setGrid] = useState({ rows: 1, slidesPerRow: 2 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => setGrid(getBrandGrid(window.innerWidth));
    update();
    setReady(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
    pauseOnHover: true,
    rows: grid.rows,
    slidesPerRow: grid.slidesPerRow,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {content.map((section) => (
        <section key={section.eyebrow} className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-[70px]">
          <Image
            src="/images/clientbg002.webp"
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

            <div className="overflow-hidden rounded-2xl bg-white px-3 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:px-5 sm:py-7 lg:px-6 lg:py-8">
              <div className="brands-slider">
                {ready ? (
                  <Slider key={`${grid.rows}-${grid.slidesPerRow}`} {...settings}>
                    {section.logos.map((brand) => (
                      <div key={brand.name}>
                        <div className="flex h-28 items-center justify-center border border-grey/70 px-3 py-3 sm:h-32 sm:px-4 sm:py-4 lg:h-36 lg:px-5">
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            width={220}
                            height={220}
                            className="h-20 w-auto max-w-[160px] object-contain sm:h-24 sm:max-w-[190px] lg:h-28 lg:max-w-[210px]"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="flex h-28 items-center justify-center">
                    <Image
                      src={section.logos[0].logo}
                      alt={section.logos[0].name}
                      width={220}
                      height={220}
                      className="h-20 w-auto max-w-[160px] object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
