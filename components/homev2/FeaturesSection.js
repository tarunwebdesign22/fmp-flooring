import Link from "next/link";

const stepIcons = {
  furniture: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h16v7H4z" />
      <path d="M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <path d="M6 17v2M18 17v2" />
      <path d="M4 13h16" />
    </svg>
  ),
  floorPrep: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M5 20V11l7-5 7 5v9" />
      <path d="M9 20v-5h6v5" />
      <path d="M9 11h6" />
    </svg>
  ),
  challenges: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a5 5 0 0 0-6.6 6.6L3 18l3 3 5.1-5.1a5 5 0 0 0 6.6-6.6l-3.2 3.2-2.8-2.8 3-3.4z" />
    </svg>
  ),
  hassleFree: (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5" />
    </svg>
  ),
};

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export default function FeaturesSection({ content }) {
  return (
    <>
      {content.map((item) => (
        <section key={item.title} className="bg-greylight py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-blue sm:text-4xl">{item.title}</h2>
              <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
              {item.subtitle ? (
                <p className="mt-4 text-[15px] leading-7 text-blue/70">{item.subtitle}</p>
              ) : null}
            </div>

            <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">
              {item.steps.map((step) => (
                <li
                  key={step.step}
                  className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white px-6 pb-8 pt-14 text-center shadow-[0_6px_24px_rgba(34,30,83,0.07)] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <span
                    className="pointer-events-none absolute -top-3 right-3 text-[5rem] font-extrabold leading-none text-blue/[0.06] transition-colors duration-300 group-hover:text-[#fdbf3e]/25"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>

                  <span className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[color-mix(in_srgb,#2abcaf_12%,white)] text-teal ring-1 ring-teal/25 transition-colors duration-300 group-hover:bg-[#fdbf3e] group-hover:text-blue group-hover:ring-[#fdbf3e]">
                    {stepIcons[step.icon] || stepIcons.hassleFree}
                  </span>

                  <h3 className="mt-6 text-base font-bold uppercase tracking-wide text-blue">
                    {step.title}
                  </h3>

                  <span className="mt-3 mb-3 block h-0.5 w-10 bg-teal transition-colors duration-300 group-hover:bg-[#fdbf3e]" aria-hidden="true" />

                  {step.description ? (
                    <p className="text-sm leading-6 text-blue/70">{step.description}</p>
                  ) : null}
                </li>
              ))}
            </ol>

            {item.buttonText && item.buttonHref ? (
              <div className="mt-10 flex justify-center lg:mt-12">
                <Link
                  href={item.buttonHref}
                  className="inline-flex items-center gap-2.5 rounded border border-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
                >
                  <CalendarIcon />
                  {item.buttonText}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      ))}
    </>
  );
}
