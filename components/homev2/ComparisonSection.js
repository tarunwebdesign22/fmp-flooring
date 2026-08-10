import Image from "next/image";

function CheckIcon({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function CrossIcon({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ComparisonCell({ value, highlight }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <CheckIcon className={highlight ? "text-[#fdbf3e]" : "text-blue"} />
        <span className="sr-only">Yes</span>
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <CrossIcon className="text-blue/35" />
        <span className="sr-only">No</span>
      </span>
    );
  }

  return (
    <span className={`text-sm leading-6 ${highlight ? "font-semibold text-blue" : "text-blue/70"}`}>
      {value}
    </span>
  );
}

export default function ComparisonSection({ content }) {
  const section = content?.[0];

  if (!section) return null;

  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-[70px]">
      <Image
        src="/images/buy-direct-image0.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/85" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
            {section.eyebrow}
          </p>
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

        {/* Desktop / tablet comparison table */}
        <div className="hidden overflow-hidden rounded-2xl border border-grey/70 bg-white/95 shadow-[0_8px_30px_rgba(34,30,83,0.06)] backdrop-blur-[2px] md:block">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-grey/70 bg-blue text-white">
            <div className="px-6 py-5 text-sm font-bold uppercase tracking-wide">
              {section.featureLabel}
            </div>
            <div className="border-l border-white/15 px-6 py-5 text-center text-sm font-bold uppercase tracking-wide text-white/80">
              {section.traditionalLabel}
            </div>
            <div className="border-l border-white/15 bg-[#fdbf3e] px-6 py-5 text-center text-sm font-bold uppercase tracking-wide text-blue">
              {section.directLabel}
            </div>
          </div>

          <ul>
            {section.rows.map((row, index) => (
              <li
                key={row.feature}
                className={`grid grid-cols-[1.2fr_1fr_1fr] ${
                  index < section.rows.length - 1 ? "border-b border-grey/60" : ""
                }`}
              >
                <div className="flex items-center px-6 py-4 text-sm font-semibold text-blue">
                  {row.feature}
                </div>
                <div className="flex items-center justify-center border-l border-grey/60 px-6 py-4 text-center">
                  <ComparisonCell value={row.traditional} />
                </div>
                <div className="flex items-center justify-center border-l border-grey/60 bg-[#fdbf3e]/10 px-6 py-4 text-center">
                  <ComparisonCell value={row.direct} highlight />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile stacked cards */}
        <ul className="flex flex-col gap-4 md:hidden">
          {section.rows.map((row) => (
            <li
              key={row.feature}
              className="overflow-hidden rounded-xl border border-grey/70 bg-white/95 shadow-[0_4px_18px_rgba(0,0,0,0.05)] backdrop-blur-[2px]"
            >
              <div className="border-b border-grey/60 bg-blue px-4 py-3 text-sm font-bold text-white">
                {row.feature}
              </div>
              <div className="grid grid-cols-2">
                <div className="border-r border-grey/60 px-4 py-4">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-blue/50">
                    {section.traditionalLabel}
                  </p>
                  <ComparisonCell value={row.traditional} />
                </div>
                <div className="bg-[#fdbf3e]/10 px-4 py-4">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-[#2abcaf]">
                    {section.directLabel}
                  </p>
                  <ComparisonCell value={row.direct} highlight />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {section.footnote ? (
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-blue/65">
            {section.footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
