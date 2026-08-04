import Image from "next/image";
import Link from "next/link";

export default function SeniorDiscountSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  const theme = section.theme || "blue";
  const isYellow = theme === "yellow";
  const isTeal = theme === "teal";

  const panelClass = isYellow
    ? "bg-[#fdbf3e]"
    : isTeal
      ? "bg-teal"
      : "bg-blue";

  const dashedBorderClass = isYellow
    ? "border-blue/40"
    : isTeal
      ? "border-white/45"
      : "border-white/35";

  const highlightClass = isYellow ? "text-blue" : "text-[#fdbf3e]";
  const titleClass = isYellow ? "text-blue" : "text-white";
  const descriptionClass = isYellow ? "text-blue/85" : "text-white/90";
  const buttonClass = isYellow
    ? "bg-blue text-white hover:bg-blue/90"
    : "bg-[#fdbf3e] text-blue hover:bg-white";

  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-xl shadow-[0_12px_40px_rgba(34,30,83,0.12)] lg:grid-cols-2">
          <div
            className={`relative flex flex-col items-center justify-center px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-12 ${panelClass}`}
          >
            <div
              className={`pointer-events-none absolute inset-3 rounded-lg border border-dashed sm:inset-4 ${dashedBorderClass}`}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-md">
              {section.highlight ? (
                <p
                  className={`text-2xl font-extrabold uppercase tracking-wide sm:text-3xl ${highlightClass}`}
                >
                  {section.highlight}
                </p>
              ) : null}

              <h2
                className={`mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-[2.65rem] ${titleClass}`}
              >
                {section.title}
              </h2>

              {section.description ? (
                <p className={`mt-3 text-base sm:text-lg ${descriptionClass}`}>
                  {section.description}
                </p>
              ) : null}

              {section.buttonText && section.buttonHref ? (
                <div className="mt-7">
                  <Link
                    href={section.buttonHref}
                    className={`inline-flex items-center justify-center rounded px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${buttonClass}`}
                  >
                    {section.buttonText}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>

          <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-full">
            <Image
              src={section.image || "/images/103.webp"}
              alt={section.imageAlt || section.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
