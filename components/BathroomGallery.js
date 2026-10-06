"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GALLERY_IMAGES = [
  { src: "/images/bathroom-gallery/5.jpg", alt: "Completed bathroom remodel" },
  { src: "/images/bathroom-gallery/8.jpg", alt: "Modern bathroom renovation" },
  { src: "/images/bathroom-gallery/15.jpg", alt: "Custom bathroom tile project" },
  { src: "/images/bathroom-gallery/42.jpg", alt: "Bathroom flooring and tile install" },
  { src: "/images/bathroom-gallery/06 Jul 2023-4.jpg", alt: "Bathroom remodel project July 2023" },
  { src: "/images/bathroom-gallery/31 Jul 2023-6.jpg", alt: "Bathroom renovation July 2023" },
  {
    src: "/images/bathroom-gallery/df5cb4_03a9c09315924acfbf47e649bca1ead2mv2.jpg",
    alt: "Bathroom remodel photo",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_04dc0fc27a5b4681bc96070b0e60c102mv2.jpg",
    alt: "Finished bathroom renovation",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_0c7639644a47449586459d2247dee44bmv2.jpg",
    alt: "Bathroom tile and vanity project",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_1aafeb0b06d84944a6ae69ae37a7ef9dmv2.jpg",
    alt: "Custom bathroom install",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_50d22b5790d14aadbca5aebacc9a9a3fmv2.jpg",
    alt: "Bathroom remodeling showcase",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_98f629a631da4330962eb92bfcc9cfcemv2.jpg",
    alt: "Updated bathroom space",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_bd7e2971fc30459d92a25d624480caeamv2.jpg",
    alt: "Bathroom remodel gallery image",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_c5ff7e461821446a8009f3480cdee8d0mv2.jpg",
    alt: "Luxury bathroom renovation",
  },
  {
    src: "/images/bathroom-gallery/df5cb4_d0c398467e9d4f32852ba0a542cdb78emv2.jpg",
    alt: "Completed bathroom remodeling project",
  },
];

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      {direction === "prev" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function GalleryLightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  const image = activeIndex != null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex == null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
        aria-label="Close image"
      >
        <CloseIcon />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute top-1/2 left-3 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-md transition-colors hover:bg-teal sm:left-6"
        aria-label="Previous image"
      >
        <ChevronIcon direction="prev" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute top-1/2 right-3 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-md transition-colors hover:bg-teal sm:right-6"
        aria-label="Next image"
      >
        <ChevronIcon direction="next" />
      </button>

      <div
        className="relative h-[min(80vh,720px)] w-full max-w-5xl overflow-hidden rounded-xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={encodeURI(image.src)}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
          {activeIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default function BathroomGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((current) =>
      current == null ? current : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current == null ? current : (current + 1) % GALLERY_IMAGES.length,
    );

  return (
    <section id="gallery" className="scroll-mt-28 bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
            Bathroom Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
            Real Bathroom Remodels. Real Results.
          </h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          <p className="mt-5 text-[15px] leading-7 text-blue/70">
            Browse completed bathroom remodeling projects from FMP Flooring — custom showers,
            tub conversions, tile work, and full renovations across the Carolinas.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#eef1f4] text-left shadow-[0_6px_22px_rgba(34,30,83,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(34,30,83,0.12)]"
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={encodeURI(image.src)}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div
                  className="absolute inset-0 bg-blue/0 transition-colors duration-300 group-hover:bg-blue/15"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <GalleryLightbox
        images={GALLERY_IMAGES}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}
