import Image from "next/image";

export default function TestimonialsSection({ content }) {
  const section = content[0];

  if (!section) return null;

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      <Image
        src={section.backgroundImage || "/images/testimonial-bg.jpg"}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-12 text-center sm:mb-14">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {section.title}
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 bg-teal" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {section.items.map((item) => (
            <li
              key={item.author}
              className="flex flex-col items-center text-center"
            >
              <span
                className="mb-4 font-serif text-5xl leading-none text-teal"
                aria-hidden="true"
              >
                “
              </span>

              <blockquote className="max-w-sm text-[15px] leading-8 text-white/85 italic sm:text-base sm:leading-8">
                {item.quote}
              </blockquote>

              <div className="mt-6 flex flex-col items-center">
                <span className="mb-3 block h-px w-10 bg-teal" aria-hidden="true" />
                <cite className="not-italic text-sm font-bold tracking-wide text-white">
                  {item.author}
                </cite>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
