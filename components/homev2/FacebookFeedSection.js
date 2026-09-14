"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/people/FMP-Flooring/100084480100386/";
const FACEBOOK_EMBED_PAGE_URL =
  "https://www.facebook.com/profile.php?id=100084480100386";
const FACEBOOK_FEED_IMAGE = "/images/facebook-feed-image.webp";

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function buildPageEmbedSrc(pageUrl, width) {
  const params = new URLSearchParams({
    href: pageUrl,
    show_posts: "true",
    width: String(width),
    height: "720",
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  });
  return `https://www.facebook.com/plugins/page.php?${params.toString()}`;
}

export default function FacebookFeedSection({ content }) {
  const section = content?.[0];
  const sectionRef = useRef(null);
  const pageWrapRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(500);
  const [shouldLoadEmbed, setShouldLoadEmbed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = pageWrapRef.current;
    if (!el) return undefined;

    const update = () => {
      const next = Math.min(Math.max(Math.floor(el.clientWidth - 16), 280), 500);
      setPageWidth(next);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoadEmbed]);

  if (!section) return null;

  const pageUrl = section.pageUrl || FACEBOOK_PAGE_URL;
  const embedPageUrl = section.embedPageUrl || FACEBOOK_EMBED_PAGE_URL;
  const image = section.image || FACEBOOK_FEED_IMAGE;
  const pageEmbedSrc = buildPageEmbedSrc(embedPageUrl, pageWidth);

  return (
    <section
      ref={sectionRef}
      className="bg-greylight py-14 sm:py-16 lg:py-[70px]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — copy + image */}
          <div className="min-w-0 text-center lg:text-left">
            {section.eyebrow ? (
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
                {section.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
              {section.title}
            </h2>
            <span
              className="mx-auto mt-3 block h-1 w-16 bg-teal lg:mx-0"
              aria-hidden="true"
            />
            {section.description ? (
              <p className="mt-5 text-[15px] leading-7 text-blue/70 lg:max-w-xl">
                {section.description}
              </p>
            ) : null}

            <div className="mt-7 flex justify-center lg:justify-start">
              <Link
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue hover:text-white"
              >
                <FacebookIcon />
                {section.buttonText || "Visit Our Facebook Page"}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Image
                src={image}
                alt={section.imageAlt || "FMP Flooring installation work"}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Right — Facebook feed */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-3">
              <div ref={pageWrapRef}>
                {shouldLoadEmbed ? (
                  <iframe
                    key={pageEmbedSrc}
                    title="FMP Flooring Facebook timeline"
                    src={pageEmbedSrc}
                    width={pageWidth}
                    height={720}
                    style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                    className="mx-auto block min-h-[720px]"
                  />
                ) : (
                  <div
                    className="mx-auto flex min-h-[720px] items-center justify-center bg-greylight text-sm text-blue/60"
                    aria-hidden="true"
                  >
                    Loading Facebook feed…
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
