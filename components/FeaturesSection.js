import Image from "next/image";

const iconMap = {
  wind: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 8h10a3 3 0 1 0-3-3" />
      <path d="M3 12h14a3 3 0 1 1-3 3" />
      <path d="M3 16h8a3 3 0 1 0-3 3" />
    </svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14.7 6.3a5 5 0 0 0-6.6 6.6L3 18l3 3 5.1-5.1a5 5 0 0 0 6.6-6.6l-3.2 3.2-2.8-2.8 3-3.4z" />
    </svg>
  ),
  paintbrush: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18.4 2.6a2.1 2.1 0 0 1 3 3L10.5 16.5 7 17.5l1-3.5L18.4 2.6z" />
      <path d="M7 17.5c-2 1.5-3.5 3-3.5 4.5a2 2 0 0 0 4 0c0-1.5-1.5-3-3.5-4.5z" />
    </svg>
  ),
  layers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  ),
  user: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
    </svg>
  ),
  search: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

export default function FeaturesSection({ title, features }) {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-blue sm:text-3xl">{title}</h2>
          <span className="mx-auto mt-3 block h-0.5 w-16 bg-teal" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="relative flex min-h-[280px] flex-col items-center overflow-hidden rounded-lg px-5 py-8 text-center shadow-[0_6px_24px_rgba(0,0,0,0.1)]"
            >
              {feature.image ? (
                <>
                  <Image
                    src={encodeURI(feature.image)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-black/75"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-greylight" aria-hidden="true" />
              )}

              <div className="relative z-10 flex h-full flex-col items-center">
                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#fdbf3e] text-blue">
                  {iconMap[feature.icon]}
                </span>

                <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-white">
                  {feature.title}
                </h3>

                <span className="mt-3 mb-3 block h-px w-10 bg-teal" aria-hidden="true" />

                <p className="text-sm leading-6 text-white/90">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
