import Image from "next/image";
import Link from "next/link";

export default function FinanceBannerSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-greylight py-3 sm:py-4 pb-10 sm:pb-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-xl px-5 pt-5 pb-5 sm:px-8 sm:pt-6 sm:pb-6 lg:px-10 lg:pt-7 lg:pb-7">
          <Image
            src={section.backgroundImage || "/images/finance-banner.webp"}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="max-w-lg">
              {section.eyebrow ? (
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                  {section.eyebrow}
                </p>
              ) : null}

              <h2
                className={`text-2xl font-bold leading-snug text-white sm:text-3xl ${
                  section.eyebrow ? "mt-1.5" : ""
                }`}
              >
                {section.title}
              </h2>

              {section.description ? (
                <p className="mt-2 text-sm leading-6 text-white/85 sm:text-base">
                  {section.description}
                </p>
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

            {section.buttonText && section.buttonHref ? (
              <div className="shrink-0">
                <Link
                  href={section.buttonHref}
                  className="inline-flex items-center justify-center rounded border-2 border-[#fdbf3e] bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#fdbf3e] transition-colors hover:bg-[#fdbf3e] hover:text-blue sm:px-8 sm:py-4 sm:text-base"
                >
                  {section.buttonText}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
