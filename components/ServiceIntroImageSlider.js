"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous image" : "Next image"}
      className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-white shadow-md transition-colors hover:bg-blue ${
        direction === "prev" ? "left-3" : "right-3"
      }`}
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

export default function ServiceIntroImageSlider({ images, children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [hasMultiple, images.length]);

  const goTo = (index) => {
    setActiveIndex((index + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(34,30,83,0.12)]">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={index === 0}
        />
      ))}

      {children}

      {hasMultiple ? (
        <>
          <ArrowButton direction="prev" onClick={() => goTo(activeIndex - 1)} />
          <ArrowButton direction="next" onClick={() => goTo(activeIndex + 1)} />

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.src}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all ${
                  index === activeIndex ? "h-2.5 w-8 bg-[#fdbf3e]" : "h-2.5 w-2.5 bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
