"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.5H3.5V20.5H6.5V9.5ZM5 3.5C4 3.5 3.2 4.3 3.2 5.3C3.2 6.3 4 7.1 5 7.1C6 7.1 6.8 6.3 6.8 5.3C6.8 4.3 6 3.5 5 3.5ZM20.5 20.5H17.5V14.8C17.5 13.4 17.5 11.6 15.5 11.6C13.5 11.6 13.2 13.1 13.2 14.7V20.5H10.2V9.5H13.1V11C13.5 10.2 14.5 9.3 16.1 9.3C19.4 9.3 20.5 11.5 20.5 14.3V20.5Z" />
    </svg>
  );
}

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous team members" : "Next team members"}
      className="absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-grey bg-white text-teal shadow-sm transition-colors hover:border-teal hover:bg-teal hover:text-white"
      style={{ [direction === "prev" ? "left" : "right"]: 0 }}
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

function TeamCard({ member }) {
  return (
    <article className="mx-1 overflow-hidden rounded-2xl bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:mx-2">
      <div className="relative aspect-[4/3] bg-greylight">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-col items-center px-5 py-6 text-center">
        <h3 className="text-lg font-bold text-blue">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-teal">{member.role}</p>
        <span className="mt-3 mb-3 block h-px w-10 bg-teal" aria-hidden="true" />
      </div>
    </article>
  );
}

function getTeamSlidesToShow(width) {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  if (width < 1280) return 3;
  return 4;
}

export default function MeetOurTeamSection({ content }) {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => setSlidesToShow(getTeamSlidesToShow(window.innerWidth));
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
        <section key={section.eyebrow} className="bg-white py-14 sm:py-16 lg:py-20">
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

            <div className="relative px-10 sm:px-12">
              <ArrowButton direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
              <ArrowButton direction="next" onClick={() => sliderRef.current?.slickNext()} />

              <div className="team-slider">
                {ready ? (
                  <Slider key={slidesToShow} ref={sliderRef} {...settings}>
                    {section.members.map((member) => (
                      <div key={member.name}>
                        <TeamCard member={member} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="mx-auto max-w-sm">
                    <TeamCard member={section.members[0]} />
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
