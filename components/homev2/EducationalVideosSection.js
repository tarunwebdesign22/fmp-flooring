"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function VideoCard({ video, onPlay }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-[0_6px_24px_rgba(34,30,83,0.08)]">
      <button
        type="button"
        onClick={() => onPlay(video)}
        className="relative block aspect-video w-full overflow-hidden bg-blue/10 text-left"
        aria-label={`Play ${video.title}`}
      >
        <Image
          src={video.poster}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-blue/25 transition-colors group-hover:bg-blue/35">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fdbf3e] text-blue shadow-md">
            <PlayIcon />
          </span>
        </span>
        {video.duration ? (
          <span className="absolute right-2 bottom-2 rounded bg-black/75 px-2 py-0.5 text-[11px] font-semibold text-white">
            {video.duration}
          </span>
        ) : null}
      </button>

      <div className="px-4 py-3.5">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-blue">
          {video.title}
        </h3>
      </div>
    </article>
  );
}

function YouTubeModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          aria-label="Close video"
        >
          <CloseIcon />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default function EducationalVideosSection({ content }) {
  const section = content?.[0];
  const [activeVideo, setActiveVideo] = useState(null);

  if (!section) return null;

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-center sm:mb-10">
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

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {section.videos.map((video) => (
            <li key={`${video.title}-${video.youtubeId}`}>
              <VideoCard video={video} onPlay={setActiveVideo} />
            </li>
          ))}
        </ul>
      </div>

      <YouTubeModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
