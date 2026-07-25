import Image from "next/image";
import Link from "next/link";

const benefitIcons = {
  approvals: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 4v5h-5" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  noPayments: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14.5h3.5" />
      <path d="M4.5 4.5 19.5 19.5" />
    </svg>
  ),
  zeroPercent: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
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
    <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-20">
      <Image
        src={section.backgroundImage}
        alt=""
        fill
        className="scale-105 object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue/95 via-blue/90 to-blue/80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 left-1/4 h-56 w-56 rounded-full bg-teal/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
        {/* Left — 50% copy */}
        <div className="min-w-0 text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {section.title}
          </h2>
          <span
            className="mx-auto mt-4 block h-1 w-16 rounded-full bg-teal lg:mx-0"
            aria-hidden="true"
          />
          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 lg:mx-0 lg:max-w-md">
            {section.description}
          </p>

          {section.buttonText && section.buttonHref ? (
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href={section.buttonHref}
                className="inline-flex items-center gap-2 rounded border-2 border-[#fdbf3e] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-all hover:bg-[#fdbf3e] hover:text-blue"
              >
                {section.buttonText}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}

          {section.footnote ? (
            <p className="mt-5 text-xs leading-5 text-white/55">{section.footnote}</p>
          ) : null}
        </div>

        {/* Right — 50% benefits */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 lg:gap-4">
          {section.benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-black/35 px-5 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-teal/50 hover:bg-black/45 sm:flex-col sm:px-4 sm:py-6 sm:text-center lg:flex-row lg:px-5 lg:py-5 lg:text-left"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/70 to-transparent opacity-70"
                aria-hidden="true"
              />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#fdbf3e]/50 bg-[#fdbf3e]/15 text-[#fdbf3e] transition-colors group-hover:border-[#fdbf3e] group-hover:bg-[#fdbf3e]/25 sm:mx-auto lg:mx-0">
                {benefitIcons[benefit.icon] || benefitIcons.approvals}
              </span>
              <h3 className="text-base font-bold tracking-wide text-white sm:text-lg">
                {benefit.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
