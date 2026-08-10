import Image from "next/image";
import { OfferBadge } from "@/components/ServiceFlooringSections";

export function ServiceTypesSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {section.items.map((item) => (
            <li
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-grey/60 bg-greylight shadow-[0_6px_24px_rgba(34,30,83,0.06)] transition-shadow hover:shadow-[0_10px_32px_rgba(34,30,83,0.12)]"
            >
              {item.image ? (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={encodeURI(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="px-6 py-6">
                <h3 className="text-lg font-bold text-blue">{item.title}</h3>
                <span className="mt-3 mb-3 block h-px w-10 bg-teal" aria-hidden="true" />
                <p className="text-sm leading-6 text-blue/70">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceTipsSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-[70px]">
      {section.backgroundImage ? (
        <>
          <Image
            src={section.backgroundImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue/90" aria-hidden="true" />
        </>
      ) : (
        <div className="absolute inset-0 bg-blue" aria-hidden="true" />
      )}

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <div>
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{section.title}</h2>
          <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          <p className="mt-5 text-[15px] leading-7 text-white/85">{section.description}</p>
        </div>

        <ul className="space-y-4">
          {section.tips?.map((tip, index) => (
            <li
              key={tip}
              className="flex gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdbf3e] text-sm font-bold text-blue">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-white/90">{tip}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceApplicationsSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-[#fff1d5] py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          {section.description ? (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-grey/60 bg-white px-5 py-4 shadow-[0_4px_16px_rgba(34,30,83,0.04)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdbf3e]/20 text-[#fdbf3e]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-blue">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CellValue({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex text-[#fdbf3e]" aria-label="Yes">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="m5 12 5 5L20 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex text-blue/35" aria-label="No">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </span>
    );
  }
  return <span>{value}</span>;
}

export function ServiceCompareSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-grey/70 shadow-[0_8px_30px_rgba(34,30,83,0.06)] md:block">
          <div
            className="grid border-b border-grey/70 bg-blue text-white"
            style={{ gridTemplateColumns: `1.2fr repeat(${section.columns.length}, 1fr)` }}
          >
            <div className="px-6 py-5 text-sm font-bold uppercase tracking-wide">
              {section.featureLabel}
            </div>
            {section.columns.map((column, index) => (
              <div
                key={column}
                className={`border-l border-white/15 px-6 py-5 text-center text-sm font-bold uppercase tracking-wide ${
                  index === 0 ? "bg-[#fdbf3e] text-blue" : "text-white/85"
                }`}
              >
                {column}
              </div>
            ))}
          </div>

          <ul>
            {section.rows.map((row, index) => (
              <li
                key={row.feature}
                className={`grid ${index < section.rows.length - 1 ? "border-b border-grey/60" : ""}`}
                style={{ gridTemplateColumns: `1.2fr repeat(${section.columns.length}, 1fr)` }}
              >
                <div className="flex items-center px-6 py-4 text-sm font-semibold text-blue">
                  {row.feature}
                </div>
                {row.values.map((value, valueIndex) => (
                  <div
                    key={`${row.feature}-${valueIndex}`}
                    className={`flex items-center justify-center border-l border-grey/60 px-6 py-4 text-center text-sm ${
                      valueIndex === 0
                        ? "bg-[#fff1d5] font-semibold text-blue"
                        : "text-blue/70"
                    }`}
                  >
                    <CellValue value={value} />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-col gap-4 md:hidden">
          {section.rows.map((row) => (
            <li
              key={row.feature}
              className="overflow-hidden rounded-xl border border-grey/70 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
            >
              <div className="bg-blue px-4 py-3 text-sm font-bold text-white">{row.feature}</div>
              <div className="divide-y divide-grey/50">
                {section.columns.map((column, index) => (
                  <div key={column} className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-blue/50">
                      {column}
                    </span>
                    <span className={`text-sm ${index === 0 ? "font-semibold text-blue" : "text-blue/70"}`}>
                      <CellValue value={row.values[index]} />
                    </span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceInstallSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
        {section.image ? (
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(34,30,83,0.12)] lg:order-1">
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

        <div className="order-1 lg:order-2">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          <p className="mt-5 text-[15px] leading-7 text-blue/75">{section.description}</p>

          {section.servicesTitle ? (
            <h3 className="mt-8 text-base font-bold text-blue">{section.servicesTitle}</h3>
          ) : null}

          <ul className="mt-4 space-y-3">
            {section.services?.map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm leading-6 text-blue/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fdbf3e] text-blue">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
