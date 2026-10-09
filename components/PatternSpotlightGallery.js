"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
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

      {images.length > 1 ? (
        <>
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
        </>
      ) : null}

      <div
        className="relative h-[min(80vh,720px)] w-full max-w-5xl overflow-hidden rounded-xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
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

export default function PatternSpotlightGallery({ images, thumbnailBg = "bg-greylight" }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!images?.length) return null;

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((current) =>
      current == null ? current : (current - 1 + images.length) % images.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current == null ? current : (current + 1) % images.length,
    );

  return (
    <>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative aspect-[4/3] w-full overflow-hidden rounded-xl text-left shadow-[0_6px_18px_rgba(34,30,83,0.08)] ${thumbnailBg}`}
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 bg-blue/0 transition-colors duration-300 group-hover:bg-blue/15"
                aria-hidden="true"
              />
            </button>
          </li>
        ))}
      </ul>

      <GalleryLightbox
        images={images}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </>
  );
}
