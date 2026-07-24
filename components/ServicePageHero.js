import Image from "next/image";
import Link from "next/link";

export default function ServicePageHero({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={section.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue/95 via-blue/85 to-blue/55" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {section.breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {section.breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-teal">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-teal">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {section.eyebrow ? (
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">
            {section.eyebrow}
          </p>
        ) : null}

        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {section.title}
        </h1>

        {section.description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {section.description}
          </p>
        ) : null}

        {section.buttonText && section.buttonHref ? (
          <Link
            href={section.buttonHref}
            className="mt-8 inline-flex items-center gap-2 rounded border-2 border-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-blue"
          >
            {section.buttonText}
            <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
