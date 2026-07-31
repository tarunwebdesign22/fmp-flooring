const chooseIcons = {
  professionals: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19c1-3.5 3.5-5 5.5-5s4.5 1.5 5.5 5" />
      <path d="M14 14.5c1.5-.5 3-.2 4.5 1.5.5 1 .8 2 .8 3" />
    </svg>
  ),
  selection: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  ),
  pricing: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .6 2 1.8c0 2.2-4 1.8-4 4 0 1.2 1 2 2.2 2s2-.5 2.4-1.3" />
    </svg>
  ),
  expertise: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  quality: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  satisfaction: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13.5c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </svg>
  ),
};

export default function WhyChooseSection({ content }) {
  const section = content?.[0];

  if (!section) return null;

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
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

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {section.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-xl border border-grey/60 bg-greylight px-6 py-7 transition-shadow hover:shadow-[0_8px_28px_rgba(34,30,83,0.08)]"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fdbf3e] text-blue">
                {chooseIcons[item.icon] || chooseIcons.quality}
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
