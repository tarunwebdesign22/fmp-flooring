"use client";

import { useEffect, useState } from "react";

const FORM_ID = "qvI3LVdUNkwaVf8kgsKE";
const DEFAULT_IFRAME_ID = `inline-${FORM_ID}`;
/** Initial iframe height hint — LeadConnector resizes to actual content */
const FORM_CONTENT_HEIGHT = 890;

function waitForFormEmbedScript() {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    const script = document.querySelector('script[src*="form_embed.js"]');
    if (!script) {
      resolve();
      return;
    }

    if (script.dataset.fmpEmbedReady === "true") {
      resolve();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      script.dataset.fmpEmbedReady = "true";
      resolve();
    };

    script.addEventListener("load", finish, { once: true });

    // Cached / beforeInteractive: load may not fire again.
    window.setTimeout(finish, 120);
  });
}

export default function LeadConnectorForm({
  className = "",
  /**
   * Optional fixed visible height. When set shorter than the form, the
   * container scrolls. Omit (default) so the embed sizes to its content
   * with no inner scroll and no empty gap under Submit.
   */
  height,
  contentHeight = FORM_CONTENT_HEIGHT,
  iframeId = DEFAULT_IFRAME_ID,
  asSection = false,
}) {
  const constrained = typeof height === "number";
  const needsScroll = constrained && height < contentHeight;

  const [mountIframe, setMountIframe] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    waitForFormEmbedScript().then(() => {
      if (!cancelled) setMountIframe(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const embed = (
    <div
      className={`relative w-full rounded-lg ${
        needsScroll
          ? "overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
          : "overflow-hidden"
      } ${className}`}
      style={
        constrained
          ? { height }
          : iframeReady
            ? undefined
            : { minHeight: contentHeight }
      }
    >
      {!iframeReady ? (
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#1a2744] to-[#152038] animate-pulse"
          aria-hidden="true"
        />
      ) : null}

      {mountIframe ? (
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
          onLoad={() => setIframeReady(true)}
          style={{
            width: "100%",
            height: contentHeight,
            border: "none",
            borderRadius: "8px",
            display: "block",
            opacity: iframeReady ? 1 : 0,
            transition: "opacity 0.25s ease-out",
          }}
          id={iframeId}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Website Form"
          data-height={String(contentHeight)}
          data-layout-iframe-id={iframeId}
          data-form-id={FORM_ID}
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Website Form"
        />
      ) : null}
    </div>
  );

  if (!asSection) return embed;

  return (
    <section
      id="website-form"
      className="scroll-mt-28 bg-white py-10 sm:py-12 lg:py-14"
      aria-label="Website Form"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">{embed}</div>
    </section>
  );
}
