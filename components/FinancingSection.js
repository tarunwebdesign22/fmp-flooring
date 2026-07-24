import Image from "next/image";
import Link from "next/link";

const benefitIcons = {
  approvals: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 4v5h-5" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  noPayments: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14.5h3.5" />
      <path d="M4.5 4.5 19.5 19.5" />
    </svg>
  ),
  zeroPercent: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 15.5 15 8.5" />
      <circle cx="9.2" cy="9.2" r="1.35" />
      <circle cx="14.8" cy="14.8" r="1.35" />
    </svg>
  ),
};

export default function FinancingSection({ content }) {
  const section = content?.[0];

  if (!section) return null;

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      <Image
        src={section.backgroundImage}
        alt=""
        fill
        className="object-cover object-center scale-105"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue/95 via-blue/90 to-blue/95"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-teal/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {section.title}
          </h2>
          <span
            className="mx-auto mt-4 block h-1 w-16 rounded-full bg-teal"
            aria-hidden="true"
          />
          <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {section.description}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {section.benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 px-6 py-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-black/45 hover:shadow-[0_16px_48px_rgba(42,188,175,0.18)] sm:px-5 sm:py-9"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/70 to-transparent opacity-70"
                aria-hidden="true"
              />
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-white transition-colors group-hover:border-teal group-hover:bg-teal/20">
                {benefitIcons[benefit.icon] || benefitIcons.approvals}
              </span>
              <h3 className="text-lg font-bold tracking-wide text-white sm:text-xl">
                {benefit.title}
              </h3>
            </li>
          ))}
        </ul>

        {section.buttonText && section.buttonHref ? (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href={section.buttonHref}
              className="inline-flex items-center gap-2 rounded border-2 border-teal px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-teal transition-all hover:bg-teal hover:text-blue"
            >
              {section.buttonText}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}

        {section.footnote ? (
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-white/55">
            {section.footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
