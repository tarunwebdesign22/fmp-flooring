"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandsSection({ content }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
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

            <div className="overflow-hidden rounded-2xl bg-white px-2 py-4 shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:px-4 sm:py-6">
              <div className="brands-slider">
                <Slider {...settings}>
                  {section.logos.map((brand) => (
                    <div key={brand.name}>
                      <div className="flex h-24 items-center justify-center border-r border-grey px-4 last:border-r-0 sm:h-28">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={150}
                          height={150}
                          className="h-16 w-auto max-w-[120px] object-contain sm:h-20 sm:max-w-[140px]"
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
