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
    <section className="py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center sm:gap-8 sm:px-8 lg:px-10">
        <div className="min-w-0 max-w-2xl">
          {section.eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}

          <h2 className="mt-1.5 text-xl font-bold leading-snug text-blue sm:text-2xl">
            {section.title}
          </h2>

          {section.description ? (
            <p className="mt-2 max-w-xl text-sm leading-6 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <Link
          href={section.buttonHref || "/estimate"}
          className="inline-flex shrink-0 items-center gap-2 rounded bg-[#fdbf3e] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-blue transition-colors hover:bg-blue hover:text-white"
        >
          {section.buttonText || "Get a Quote"}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
