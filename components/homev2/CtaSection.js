import Image from "next/image";
import Link from "next/link";

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export default function CtaSection({ content }) {
  return (
    <>
      {content.map((item) => (
        <section
          key={item.headlineWhite}
          className="relative isolate overflow-hidden"
        >
          <Image
            src={item.backgroundImage}
            alt=""
            fill
            quality={90}
            className="object-cover object-bottom"
            sizes="100vw"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30 sm:via-black/80 sm:to-black/20"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:px-10 lg:py-[60px]">
            <div className="min-w-0 max-w-xl lg:max-w-2xl">
              <h2 className="text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:text-3xl lg:text-[2.2rem] lg:leading-[1.2]">
                {item.headlineWhite}{" "}
                <span className="text-teal">{item.headlineTeal}</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/90 sm:text-[15px] sm:leading-7">
                {item.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch lg:justify-end">
              <a
                href={item.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded bg-teal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue hover:text-white lg:min-w-[220px]"
              >
                <span className="text-white">
                  <PhoneIcon />
                </span>
                {item.phone}
              </a>

              <Link
                href={item.buttonHref}
                className="inline-flex items-center justify-center rounded bg-[#fdbf3e] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-blue transition-colors hover:bg-white lg:min-w-[220px] lg:px-8 lg:py-4 lg:text-[15px]"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
