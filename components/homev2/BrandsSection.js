import Image from "next/image";

export default function BrandsSection({ content }) {
  return (
    <>
      {content.map((section) => (
        <section key={section.eyebrow} className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-[70px]">
          <Image
            src="/images/clientbg003.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
                {section.eyebrow}
              </p>
              <span className="mx-auto mt-2 block h-0.5 w-12 bg-teal" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {section.headline}
                {section.headlineAccent ? (
                  <span className="text-teal">{section.headlineAccent}</span>
                ) : null}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-white/80">{section.description}</p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white px-5 py-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:px-7 sm:py-8 lg:px-8 lg:py-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {section.logos.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex h-32 items-center justify-center border border-grey/70 px-5 py-5 sm:h-36 sm:px-6 sm:py-6 lg:h-40 lg:px-7 lg:py-7"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={220}
                      height={220}
                      className="h-20 w-auto max-w-[160px] object-contain sm:h-24 sm:max-w-[190px] lg:h-28 lg:max-w-[210px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
