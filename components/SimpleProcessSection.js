import Image from "next/image";
import Link from "next/link";

export default function SimpleProcessSection({ content }) {
  const section = content?.[0];
  if (!section?.steps?.length) return null;

  return (
    <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
            {section.title}
          </h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {section.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col">
              <div className="relative">
                <div className="relative aspect-[16/11] overflow-hidden rounded-t-2xl bg-white">
                  <Image
                    src={step.image}
                    alt={step.imageAlt || step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <span className="absolute bottom-0 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[#fdbf3e] text-lg font-bold text-blue shadow-[0_6px_18px_rgba(34,30,83,0.22)]">
                  {step.number || index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col rounded-b-2xl bg-white px-6 pt-10 pb-7 text-center shadow-[0_8px_28px_rgba(34,30,83,0.08)]">
                <h3 className="text-lg font-bold leading-snug text-blue">
                  {step.title}
                </h3>

                {step.description ? (
                  <p className="mt-3 text-sm leading-6 text-blue/70">
                    {step.description}
                  </p>
                ) : null}

                {step.buttonText && step.buttonHref ? (
                  <div className="mt-6">
                    <Link
                      href={step.buttonHref}
                      className="inline-flex items-center justify-center rounded bg-blue px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal"
                    >
                      {step.buttonText}
                    </Link>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
