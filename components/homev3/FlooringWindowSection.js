import Image from "next/image";
import Link from "next/link";

function WindowCard({ card }) {
  const badgeClass =
    card.badgeTone === "gold"
      ? "bg-[#fdbf3e] text-white"
      : "bg-blue text-white";
  const buttonClass =
    card.buttonTone === "teal"
      ? "bg-teal hover:bg-blue"
      : "bg-blue hover:bg-teal";

  return (
    <article className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(34,30,83,0.1)] sm:min-h-[360px] lg:min-h-[400px]">
      <Image
        src={card.image}
        alt={card.imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full min-h-[320px] flex-col p-6 sm:min-h-[360px] sm:p-8 lg:min-h-[400px] lg:p-9">
        <span
          className={`inline-flex w-fit rounded px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] ${badgeClass}`}
        >
          {card.badge}
        </span>

        <h3 className="mt-5 max-w-md text-3xl font-bold leading-tight text-blue sm:text-4xl">
          {card.title.map((part, index) =>
            part.highlight ? (
              <span key={`${part.text}-${index}`} className="text-teal">
                {part.text}
              </span>
            ) : (
              <span key={`${part.text}-${index}`}>{part.text}</span>
            ),
          )}
        </h3>

        <div className="mt-5 inline-flex w-fit max-w-full items-center rounded-md bg-white/95 px-3 py-2 text-[12px] font-medium leading-5 text-blue/80 shadow-sm sm:text-[13px]">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {card.tags.map((tag, index) => (
              <span key={tag} className="inline-flex items-center gap-x-2">
                {index > 0 ? (
                  <span className="text-blue/30" aria-hidden="true">
                    |
                  </span>
                ) : null}
                <span>{tag}</span>
              </span>
            ))}
          </p>
        </div>

        <div className="mt-auto pt-8">
          <Link
            href={card.buttonHref}
            className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-white transition-colors ${buttonClass}`}
          >
            {card.buttonText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function FlooringWindowSection({ content }) {
  const section = Array.isArray(content) ? content[0] : content;
  if (!section?.cards?.length) return null;

  return (
    <section
      id="flooring-window"
      className="scroll-mt-28 bg-white pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {section.cards.map((card) => (
            <WindowCard key={card.badge} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
