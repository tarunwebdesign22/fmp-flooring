const FORM_ID = "qvI3LVdUNkwaVf8kgsKE";
const DEFAULT_IFRAME_ID = `inline-${FORM_ID}`;
const FORM_CONTENT_HEIGHT = 1021;

export default function LeadConnectorForm({
  className = "",
  /** Visible container height — form scrolls inside when smaller than content */
  height = 580,
  contentHeight = FORM_CONTENT_HEIGHT,
  iframeId = DEFAULT_IFRAME_ID,
  asSection = false,
}) {
  const embed = (
    <div
      className={`w-full overflow-y-auto overscroll-contain rounded-lg [-webkit-overflow-scrolling:touch] ${className}`}
      style={{ height }}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        style={{
          width: "100%",
          height: contentHeight,
          border: "none",
          borderRadius: "8px",
          display: "block",
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
