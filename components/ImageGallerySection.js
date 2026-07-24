"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ArrowIcon({ direction }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      {direction === "prev" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function GalleryLightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (index === null) return;

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
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;

  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
        aria-label="Close gallery"
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
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-teal sm:left-6"
            aria-label="Previous image"
          >
            <ArrowIcon direction="prev" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-teal sm:right-6"
            aria-label="Next image"
          >
            <ArrowIcon direction="next" />
          </button>
        </>
      ) : null}

      <div
        className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
          <Image
            src={encodeURI(image.src)}
            alt={image.alt || `Gallery image ${index + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <p className="px-4 py-3 text-center text-sm text-white/70">
          {index + 1} / {images.length}
          {image.alt ? ` — ${image.alt}` : ""}
        </p>
      </div>
    </div>
  );
}

export default function ImageGallerySection({ content }) {
  const section = content?.[0];
  const [activeIndex, setActiveIndex] = useState(null);

  if (!section?.images?.length) return null;

  const images = section.images;

  const openAt = (index) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  const next = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          {section.description ? (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {images.map((image, index) => (
            <li
              key={image.src}
              className={
                index === 0
                  ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                  : ""
              }
            >
              <button
                type="button"
                onClick={() => openAt(index)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-greylight shadow-[0_4px_18px_rgba(34,30,83,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(34,30,83,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                aria-label={`View ${image.alt || `image ${index + 1}`}`}
              >
                <Image
                  src={encodeURI(image.src)}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <span className="absolute inset-0 bg-blue/0 transition-colors group-hover:bg-blue/25" />
                <span className="absolute right-3 bottom-3 rounded bg-teal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
                  View
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <GalleryLightbox
        images={images}
        index={activeIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
