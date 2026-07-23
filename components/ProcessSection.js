import Image from "next/image";
import Link from "next/link";

const stepIcons = {
  consultation: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
      <circle cx="8.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  measurement: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 8.5h13.5a2.5 2.5 0 0 1 0 5H14" />
      <path d="M4 8.5v7" />
      <path d="M7 8.5v2M10 8.5v2M13 8.5v2" />
      <circle cx="14" cy="13.5" r="1.2" />
      <path d="M14 14.7v3.3" />
    </svg>
  ),
  selection: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 4v16" />
      <path d="M5 4h3M5 8h2M5 12h3M5 16h2M5 20h3" />
      <path d="M10 8.5c1.5-2 3.5-3 5.5-3s3.5 1.5 4 3.5c.3 1.2-.2 2.5-1.5 3.2L12 16.5" />
      <path d="M10 8.5c1 1.5 1.5 3.2 1.5 5" />
      <path d="M14 7c1 1.2 1.5 2.5 1.5 4" />
    </svg>
  ),
  installation: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="6.5" r="2.2" />
      <path d="M8.5 21v-5.5L7 11.5c-.3-1 .4-2 1.4-2h7.2c1 0 1.7 1 1.4 2L15.5 15.5V21" />
      <path d="M9.5 4.2 11 3l1.5 1.5L14 3l1.5 1.5" />
      <path d="M15.5 13.5h3l1 2.5h-2" />
    </svg>
  ),
  inspection: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 3 5 6v5.5c0 4.5 3.2 7.8 7 9.5 3.8-1.7 7-5 7-9.5V6l-7-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
};

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export default function ProcessSection({ content }) {
  return (
    <>
      {content.map((item) => (
        <section
          key={item.title}
          className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
        >
          <Image
            src={item.backgroundImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{item.title}</h2>

              <div className="relative mx-auto mt-5 flex h-3 w-40 items-center justify-center" aria-hidden="true">
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/80" />
                <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-teal" />
              </div>

              <p className="mt-5 text-base text-white/90 sm:text-lg">{item.subtitle}</p>
            </div>

            <div className="relative mt-14 lg:mt-16">
              <div
                className="pointer-events-none absolute top-[4.75rem] right-[10%] left-[10%] hidden h-px bg-teal lg:block"
                aria-hidden="true"
              />

              <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {item.steps.map((step) => (
                  <li key={step.step} className="relative z-10 flex flex-col items-center text-center">
                    <span className="mb-3 text-lg font-bold text-teal">{step.step}</span>

                    <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border-[3px] border-teal bg-white text-teal shadow-[0_6px_0_rgba(42,188,175,0.35)] sm:h-24 sm:w-24">
                      {stepIcons[step.icon]}
                    </div>

                    <h3 className="mt-5 max-w-[11rem] text-sm font-bold uppercase tracking-wide text-white">
                      {step.title}
                    </h3>
                    <span className="mt-3 block h-0.5 w-10 bg-teal" aria-hidden="true" />
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14 flex justify-center lg:mt-16">
              <Link
                href={item.buttonHref}
                className="inline-flex items-center gap-3 rounded border border-teal px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal hover:text-blue"
              >
                <span className="text-teal">
                  <CalendarIcon />
                </span>
                {item.buttonText}
                <span className="text-teal" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
