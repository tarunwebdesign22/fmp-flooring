import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function QuoteCtaSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-xl bg-blue px-5 py-6 text-center shadow-[0_8px_24px_rgba(34,30,83,0.12)] sm:px-8 sm:py-7">
          <div
            className="pointer-events-none absolute inset-2.5 rounded-lg border border-dashed border-white/25"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-xl">
            {section.eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#fdbf3e] sm:text-sm">
                {section.eyebrow}
              </p>
            ) : null}

            <span className="mx-auto mt-2 block h-0.5 w-10 bg-teal" aria-hidden="true" />

            <h2 className="mt-2.5 text-xl font-bold leading-snug text-white sm:text-2xl">
              {section.title}
            </h2>

            {section.description ? (
              <p className="mx-auto mt-2 text-sm leading-6 text-white/85">
                {section.description}
              </p>
            ) : null}

            <div className="mt-4">
              <Link
                href={section.buttonHref || "/estimate"}
                className="inline-flex items-center gap-2 rounded bg-[#fdbf3e] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-blue transition-colors hover:bg-white sm:text-sm"
              >
                {section.buttonText || "Get a Quote"}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
