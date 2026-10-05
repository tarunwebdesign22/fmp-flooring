const DEFAULT_ITEMS = [
  "Federal & State Flooring Contractor",
  "Direct Importer & Distributor – No Middlemen",
  "Financing Available",
  "In-Home Free Estimate",
];

function MarqueeSeparator() {
  return (
    <span className="mx-6 inline-flex h-2 w-2 shrink-0 rounded-full bg-blue sm:mx-8" aria-hidden="true" />
  );
}

function MarqueeTrack({ items, hidden = false }) {
  return (
    <div
      className="federal-marquee-track flex w-max items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="whitespace-nowrap text-[13px] font-extrabold uppercase tracking-[0.08em] text-blue sm:text-[14px] md:text-[15px]">
            {item}
          </span>
          <MarqueeSeparator />
        </span>
      ))}
    </div>
  );
}

export default function FederalMarquee({ items = DEFAULT_ITEMS }) {
  if (!items?.length) return null;

  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden bg-[#fdbf3e] py-2 sm:py-2.5"
      aria-label={items.join(". ")}
    >
      <div className="federal-marquee flex w-max">
        <MarqueeTrack items={loopItems} />
        <MarqueeTrack items={loopItems} hidden />
      </div>
    </div>
  );
}

export { DEFAULT_ITEMS as federalMarqueeItems };
