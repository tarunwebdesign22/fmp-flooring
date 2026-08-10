import Image from "next/image";
import Link from "next/link";

export default function CommercialProjectsSection({ content }) {
  const section = content?.[0];
  if (!section?.items?.length) return null;

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
          {section.description ? (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => {
            const href = item.href || "#";
            const isExternal = href.startsWith("http");

            return (
              <li key={item.title} className="group relative overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(34,30,83,0.12)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={encodeURI(item.image)}
                    alt={item.imageAlt || item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
                    aria-hidden="true"
                  />

                  {item.badge ? (
                    <span className="absolute top-4 right-0 bg-[#fdbf3e] px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue shadow-sm">
                      {item.badge}
                    </span>
                  ) : null}

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                    <Link
                      href={href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:text-white"
                    >
                      {item.buttonText || "Explore More"}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
