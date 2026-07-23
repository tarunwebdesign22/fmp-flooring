import Image from "next/image";
import Link from "next/link";

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
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
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-blue via-blue/90 to-blue/25 sm:via-blue/80 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-xl lg:max-w-2xl">
              <h2 className="text-3xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {item.headlineWhite}{" "}
                <span className="text-teal">{item.headlineTeal}</span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-[17px] sm:leading-8">
                {item.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={item.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded border border-teal px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-teal hover:text-blue"
                >
                  <span className="text-teal">
                    <PhoneIcon />
                  </span>
                  {item.phone}
                </a>

                <Link
                  href={item.buttonHref}
                  className="inline-flex items-center justify-center rounded bg-teal px-5 py-3 text-[15px] font-bold uppercase tracking-wide text-blue transition-colors hover:bg-white"
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
