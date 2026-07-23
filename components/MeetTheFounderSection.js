"use client";

import Link from "next/link";
import { useRef, useState } from "react";

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

function FounderVideo({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-blue/10 shadow-lg">
      <video
        ref={videoRef}
        className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
        src={src}
        playsInline
        controls={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-blue/20 transition-colors hover:bg-blue/30"
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
  );
}

export default function MeetTheFounderSection({ content }) {
  return (
    <>
      {content.map((item) => (
        <section key={item.eyebrow} className="bg-greylight py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
            <div>
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

            <FounderVideo src={item.videoSrc} />
          </div>
        </section>
      ))}
    </>
  );
}
