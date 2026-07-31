"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const valueIcons = {
  quality: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2 15.5 8.5 22.5 9.5 17.5 14.5 18.8 21.5 12 18.2 5.2 21.5 6.5 14.5 1.5 9.5 8.5 8.5 12 2z" />
    </svg>
  ),
  integrity: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M8 14c-2.5 0-4.5-1.5-5.5-3.5 1.5-1.5 3.5-2.5 5.5-2.5" />
      <path d="M16 14c2.5 0 4.5-1.5 5.5-3.5-1.5-1.5-3.5-2.5-5.5-2.5" />
      <path d="M8 8.5c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" />
      <path d="M7 17c1.5 1.5 3.5 2.5 5 2.5s3.5-1 5-2.5" />
      <path d="M9 11.5h6" />
    </svg>
  ),
  commitment: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19c1-3.5 3.5-5 5.5-5s4.5 1.5 5.5 5" />
      <path d="M14 14.5c1.5-.5 3-.2 4.5 1.5.5 1 .8 2 .8 3" />
    </svg>
  ),
};

const DEFAULT_VIDEO_ASPECT_RATIO = "576 / 1024";

function FounderVideo({ src, poster, aspectRatio: fixedAspectRatio }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [measuredAspectRatio, setMeasuredAspectRatio] = useState(null);
  const START_TIME = 2;

  const aspectRatio =
    fixedAspectRatio || measuredAspectRatio || DEFAULT_VIDEO_ASPECT_RATIO;

  const seekToStart = () => {
    const video = videoRef.current;
    if (!video) return;
    if (Number.isFinite(video.duration) && video.duration > START_TIME) {
      video.currentTime = START_TIME;
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!fixedAspectRatio && video.videoWidth && video.videoHeight) {
      setMeasuredAspectRatio(`${video.videoWidth} / ${video.videoHeight}`);
    }

    if (!playing) {
      seekToStart();
    }
  };

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      if (video.currentTime < START_TIME) {
        seekToStart();
      }
      try {
        await video.play();
        setPlaying(true);
      } catch {
        // Ignore browser autoplay/playback policy rejections.
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return undefined;

    const playWhenVisible = async () => {
      if (video.currentTime < START_TIME) {
        seekToStart();
      }
      video.muted = true;
      try {
        await video.play();
        setPlaying(true);
      } catch {
        // If autoplay is blocked, keep the manual play button visible.
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playWhenVisible();
        } else if (!video.paused) {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <div
        className="relative overflow-hidden rounded-xl bg-blue/10 shadow-lg"
        style={{ aspectRatio }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain bg-black"
          src={encodeURI(src)}
          poster={poster ? encodeURI(poster) : undefined}
          playsInline
          muted
          preload="metadata"
          controls={playing}
          onLoadedMetadata={handleLoadedMetadata}
          onLoadedData={() => {
            if (!playing) seekToStart();
          }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setPlaying(false);
            seekToStart();
          }}
        />

        {!playing && poster ? (
          <Image
            src={encodeURI(poster)}
            alt="Meet the Founder video thumbnail"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        ) : null}

        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play video"
            className="absolute inset-0 z-10 flex items-center justify-center bg-blue/25 transition-colors hover:bg-blue/35"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md sm:h-20 sm:w-20">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 text-teal"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l11-6.5L8 5.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function MeetTheFounderSection({ content }) {
  return (
    <>
      {content.map((item) => (
        <section key={item.eyebrow} className="bg-greylight py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12 lg:px-10">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
                {item.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-blue sm:text-4xl">
                {item.headline}
                {item.headlineAccent ? (
                  <span className="text-teal">{item.headlineAccent}</span>
                ) : null}
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-blue/75">
                {item.description}
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {item.values.map((value) => (
                  <li key={value.title} className="flex flex-col items-start">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-teal/15 text-teal">
                      {valueIcons[value.icon]}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-blue">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-blue/70">
                      {value.description}
                    </p>
                  </li>
                ))}
              </ul>

              <Link
                href={item.buttonHref}
                className="mt-8 inline-flex items-center gap-2 rounded border border-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
              >
                {item.buttonText}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <FounderVideo
              src={item.videoSrc}
              poster={item.videoPoster}
              aspectRatio={item.videoAspectRatio}
            />
          </div>
        </section>
      ))}
    </>
  );
}
