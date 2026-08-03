"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/people/FMP-Flooring/100084480100386/";
const FACEBOOK_EMBED_PAGE_URL =
  "https://www.facebook.com/profile.php?id=100084480100386";

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
  const pageWrapRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(500);

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
  }, []);

  if (!section) return null;

  const pageUrl = section.pageUrl || FACEBOOK_PAGE_URL;
  const embedPageUrl = section.embedPageUrl || FACEBOOK_EMBED_PAGE_URL;
  const pageEmbedSrc = buildPageEmbedSrc(embedPageUrl, pageWidth);

  return (
    <section className="bg-greylight py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-center sm:mb-10">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
            {section.title}
          </h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          {section.description ? (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <div className="mx-auto max-w-[520px]">
          <div
            ref={pageWrapRef}
            className="overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-3"
          >
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
              className="mx-auto block min-h-[720px]"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
            >
              <FacebookIcon />
              {section.buttonText || "Visit Our Facebook Page"}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
