import Image from "next/image";
import Link from "next/link";

export default function FinanceBannerSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-greylight py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-xl px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
          <Image
            src={section.backgroundImage || "/images/finance-banner.webp"}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <div className="relative max-w-lg">
            {section.eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                {section.eyebrow}
              </p>
            ) : null}

            <h2 className="mt-1.5 text-2xl font-bold leading-snug text-white sm:text-3xl">
              {section.title}
            </h2>

            {section.description ? (
              <p className="mt-2 text-sm leading-6 text-white/85 sm:text-base">
                {section.description}
              </p>
            ) : null}

            {section.buttonText && section.buttonHref ? (
              <div className="mt-4">
                <Link
                  href={section.buttonHref}
                  className="inline-flex items-center justify-center rounded bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-blue transition-colors hover:bg-[#fdbf3e] sm:text-sm"
                >
                  {section.buttonText}
                </Link>
              </div>
            ) : null}

            {section.footnote ? (
              <p className="mt-3 text-[11px] leading-4 text-white/55">
                {section.footnoteHref ? (
                  <>
                    {section.footnote}{" "}
                    <Link
                      href={section.footnoteHref}
                      className="underline underline-offset-2 transition-colors hover:text-[#fdbf3e]"
                    >
                      {section.footnoteLinkText || "Details"}
                    </Link>
                  </>
                ) : (
                  section.footnote
                )}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
