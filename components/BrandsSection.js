"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandsSection({ content }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
    pauseOnHover: true,
    rows: 2,
    slidesPerRow: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          rows: 2,
          slidesPerRow: 4,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 3,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {content.map((section) => (
        <section key={section.eyebrow} className="bg-greylight py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
                {section.eyebrow}
              </p>
              <span className="mx-auto mt-2 block h-0.5 w-12 bg-teal" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold leading-tight text-blue sm:text-4xl">
                {section.headline}
                {section.headlineAccent ? (
                  <span className="text-teal">{section.headlineAccent}</span>
                ) : null}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-blue/70">{section.description}</p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white px-3 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:px-5 sm:py-7 lg:px-6 lg:py-8">
              <div className="brands-slider">
                <Slider {...settings}>
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
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
