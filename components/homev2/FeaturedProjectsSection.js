"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LocationPinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous projects" : "Next projects"}
      className={`absolute top-[32%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue text-white shadow-md transition-colors hover:bg-teal hover:text-white ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        {direction === "prev" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col items-center text-center">
      <div className="relative w-full">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-greylight">
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#fdbf3e] shadow-sm backdrop-blur-[1px]">
          <LocationPinIcon />
        </span>
      </div>

      <h3 className="mt-8 text-lg font-bold text-blue">{project.title}</h3>
      {project.subtitle ? (
        <p className="mt-1 text-sm leading-6 text-blue/60">{project.subtitle}</p>
      ) : null}
    </article>
  );
}

function getFeaturedSlidesToShow(width) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 4;
}

export default function FeaturedProjectsSection({ content }) {
  const section = Array.isArray(content) ? content[0] : content;
  const projects = section?.projects || [];
  const filters = section?.filters || ["All"];

  const sliderRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState(filters[0] || "All");
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [ready, setReady] = useState(false);

  const filteredProjects = useMemo(() => {
    if (!activeFilter || activeFilter === "All") return projects;
    return projects.filter(
      (project) => project.category?.toLowerCase() === activeFilter.toLowerCase(),
    );
  }, [activeFilter, projects]);

  const needsSlider = filteredProjects.length > slidesToShow;

  useEffect(() => {
    const update = () => setSlidesToShow(getFeaturedSlidesToShow(window.innerWidth));
    update();
    setReady(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    sliderRef.current?.slickGoTo?.(0);
  }, [activeFilter]);

  if (!section || !projects.length) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      id="featured-projects"
      className="scroll-mt-28 overflow-x-clip bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 items-end gap-5 px-6 sm:mb-10 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="min-w-0">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold leading-tight text-blue sm:text-4xl">
            {section.title}
          </h2>
        </div>

        <div
          className="flex flex-wrap items-center gap-2 sm:gap-2.5 lg:justify-end"
          role="tablist"
          aria-label="Project filters"
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-blue text-white"
                    : "border border-grey bg-white text-blue hover:border-blue/40"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl pb-2">
        {needsSlider ? (
          <>
            <ArrowButton direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
            <ArrowButton direction="next" onClick={() => sliderRef.current?.slickNext()} />
          </>
        ) : null}

        <div className="px-6 sm:px-8 lg:px-10">
          {ready && filteredProjects.length ? (
            needsSlider ? (
              <div className="featured-projects-slider">
                <Slider
                  key={`${activeFilter}-${slidesToShow}`}
                  ref={sliderRef}
                  {...settings}
                >
                  {filteredProjects.map((project) => (
                    <div key={`${project.category}-${project.title}`} className="h-full px-2 pb-2">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProjects.map((project) => (
                  <div key={`${project.category}-${project.title}`} className="px-2">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="mx-auto max-w-sm">
              {filteredProjects[0] ? <ProjectCard project={filteredProjects[0]} /> : null}
            </div>
          )}
        </div>
      </div>

      {section.viewMoreHref ? (
        <div className="mx-auto mt-6 flex max-w-7xl justify-end px-6 sm:mt-8 sm:px-8 lg:px-10">
          <Link
            href={section.viewMoreHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-teal"
          >
            {section.viewMoreText || "View More Projects"}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}
    </section>
  );
}
