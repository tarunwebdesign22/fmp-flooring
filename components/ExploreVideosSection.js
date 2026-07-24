"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const tabIcons = {
  showroom: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
      <path d="M9 21v-7h6v7" />
      <path d="M7 10.5h10" />
    </svg>
  ),
  warehouse: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 10 12 4l9 6v11H3V10z" />
      <path d="M3 10h18" />
      <path d="M7 21v-6h4v6M13 21v-6h4v6" />
    </svg>
  ),
  installations: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.5-2.5 2.5-2.5z" />
      <path d="m16 3 5 5" />
    </svg>
  ),
  testimonials: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-4.5A8 8 0 1 1 21 12z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </svg>
  ),
};

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

const FALLBACK_POSTER = "/images/Hero-Image.jpg";

function VideoCard({ video, onPlay }) {
  const [posterSrc, setPosterSrc] = useState(video.poster);

  useEffect(() => {
    setPosterSrc(video.poster);
  }, [video.poster]);

  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="group relative aspect-video w-full overflow-hidden rounded-xl bg-blue/10 text-left shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
      aria-label={`Play video ${video.title || video.duration}`}
    >
      <Image
        src={posterSrc}
        alt={video.title || "Video thumbnail"}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => {
          if (posterSrc !== FALLBACK_POSTER) {
            setPosterSrc(FALLBACK_POSTER);
          }
        }}
      />

      <span className="absolute inset-0 flex items-center justify-center bg-blue/20 transition-colors group-hover:bg-blue/30">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/55 text-white shadow-md backdrop-blur-[1px]">
          <PlayIcon />
        </span>
      </span>

      <span className="absolute right-3 bottom-3 rounded bg-blue px-2 py-0.5 text-xs font-semibold text-white">
        {video.duration}
      </span>
    </button>
  );
}

function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return;

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
      aria-label="Video player"
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
        <video
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full"
        />
      </div>
    </div>
  );
}

export default function ExploreVideosSection({ content }) {
  const section = content[0];
  const [activeTab, setActiveTab] = useState(section?.tabs?.[0]?.id || "showroom");
  const [activeVideo, setActiveVideo] = useState(null);

  if (!section) return null;

  const currentTab = section.tabs.find((tab) => tab.id === activeTab) || section.tabs[0];

  return (
    <section className="bg-greylight py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Video categories"
          className="mx-auto grid max-w-4xl grid-cols-2 overflow-hidden rounded-lg border border-teal sm:flex"
        >
          {section.tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;
            const isRightCol = index % 2 === 1;
            const isBottomRow = index >= 2;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-3 py-3.5 text-xs font-bold uppercase tracking-wide transition-colors sm:flex-1 sm:gap-2.5 sm:px-4 sm:text-sm ${
                  isActive
                    ? "bg-teal text-white"
                    : "bg-white text-blue hover:bg-greylight"
                } ${isRightCol ? "border-l border-teal" : ""} ${
                  isBottomRow ? "border-t border-teal sm:border-t-0" : ""
                } ${index > 0 ? "sm:border-l sm:border-teal" : ""}`}
              >
                <span className={`shrink-0 ${isActive ? "text-white" : "text-blue"}`}>
                  {tabIcons[tab.icon] || tabIcons.showroom}
                </span>
                <span className="truncate text-[11px] sm:text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Videos */}
        <div
          role="tabpanel"
          className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {currentTab.videos.map((video, index) => (
            <VideoCard
              key={`${currentTab.id}-${index}`}
              video={video}
              onPlay={setActiveVideo}
            />
          ))}
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
