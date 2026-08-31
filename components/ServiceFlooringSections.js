import Image from "next/image";
import Link from "next/link";

export function OfferBadge({ offer }) {
  if (!offer) return null;

  const {
    topLabel = "Huge Savings",
    value = "65",
    suffix = "%",
    offLabel = "Off",
    rightLines,
    bottomLabel = "Special Offer!",
  } = offer;

  const isFinance = Array.isArray(rightLines) && rightLines.length > 0;

  return (
    <div
      className={`absolute top-3 left-3 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.28)] sm:top-4 sm:left-4 ${
        isFinance ? "w-[9.5rem] sm:w-[11rem]" : "w-[7.25rem] sm:w-[8.5rem]"
      }`}
    >
      <div className="relative z-20 rounded-t-md bg-teal px-2 py-1.5 text-center text-[10px] font-extrabold uppercase tracking-[0.08em] text-white sm:text-[11px]">
        {topLabel}
      </div>
      <div className="relative z-10 -my-1 rounded-md bg-[#fdbf3e] px-2 py-2 text-center sm:py-2.5">
        <div className="flex items-center justify-center gap-1 leading-none text-blue">
          <span
            className={`font-black tracking-tight ${
              isFinance
                ? "text-[2.5rem] sm:text-[3rem]"
                : "text-[2.35rem] sm:text-[2.75rem]"
            }`}
          >
            {value}
          </span>
          {isFinance ? (
            <span className="flex flex-col items-start text-left text-[9px] font-extrabold uppercase leading-[1.15] tracking-wide sm:text-[10px]">
              {rightLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          ) : (
            <span className="mt-1 flex flex-col items-start text-left">
              <span className="text-base font-black leading-none sm:text-lg">{suffix}</span>
              <span className="text-[11px] font-extrabold uppercase leading-tight tracking-wide sm:text-xs">
                {offLabel}
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="relative z-20 rounded-b-md bg-blue px-2 py-1.5 text-center text-[10px] font-extrabold uppercase tracking-[0.06em] text-white sm:text-[11px]">
        {bottomLabel}
      </div>
    </div>
  );
}

export function ServiceIntroSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <div>
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold leading-tight text-blue sm:text-4xl">
            {section.title}
          </h2>
          <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-[15px] leading-7 text-blue/75">
              {paragraph}
            </p>
          ))}
          {section.buttonText && section.buttonHref ? (
            <Link
              href={section.buttonHref}
              className="mt-8 inline-flex items-center gap-2 rounded bg-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue hover:text-white"
            >
              {section.buttonText}
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>

        {section.image ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(34,30,83,0.12)]">
            <Image
              src={section.image}
              alt={section.imageAlt || section.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <OfferBadge offer={section.offer} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

const benefitIcons = {
  durable: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  affordable: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .6 2 1.8c0 2.2-4 1.8-4 4 0 1.2 1 2 2.2 2s2-.5 2.4-1.3" />
    </svg>
  ),
  maintenance: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.5-2.5 2.5-2.5z" />
    </svg>
  ),
  moisture: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3c-3.5 4.5-6 7.8-6 11a6 6 0 0 0 12 0c0-3.2-2.5-6.5-6-11z" />
    </svg>
  ),
  styles: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  ),
};

export function ServiceBenefitsSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  const backgroundImage = section.backgroundImage || "/images/comparision-bg.jpg";

  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-[70px]">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {section.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-xl border border-grey/60 bg-white px-6 py-7 shadow-[0_4px_18px_rgba(34,30,83,0.05)] transition-shadow hover:shadow-[0_8px_28px_rgba(34,30,83,0.1)]"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fdbf3e] text-blue">
                {benefitIcons[item.icon] || benefitIcons.durable}
              </span>
              <h3 className="text-base font-bold text-blue">{item.title}</h3>
              <span className="mt-3 mb-3 block h-px w-10 bg-teal" aria-hidden="true" />
              <p className="text-sm leading-6 text-blue/70">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const highlightIcons = {
  installation: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17h18" />
      <path d="M3 13h18" />
      <path d="M3 9h18" />
      <path d="M12 3v3" />
      <path d="M9 5l3 3 3-3" />
    </svg>
  ),
  consultation: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  ),
  support: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3v-4Z" />
      <path d="M21 11h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-4Z" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  selection: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
};

export function ServiceHighlightsStrip({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-blue py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {section.items.map((item) => (
            <li key={item.lines?.join("-") || item.title} className="flex items-center gap-4 text-white">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#fdbf3e] bg-[#fdbf3e] text-blue shadow-[0_4px_14px_rgba(253,191,62,0.45)] ring-4 ring-[#fdbf3e]/25">
                {highlightIcons[item.icon] || highlightIcons.installation}
              </span>
              <span className="flex flex-col justify-center text-sm font-bold uppercase leading-snug tracking-wide sm:text-[0.9375rem]">
                {item.lines ? (
                  item.lines.map((line, index) => <span key={index}>{line}</span>)
                ) : (
                  <span>{item.title}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
