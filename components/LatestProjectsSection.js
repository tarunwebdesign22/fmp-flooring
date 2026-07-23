import Image from "next/image";

export default function LatestProjectsSection({ content }) {
  const section = content[0];

  if (!section) return null;

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-grey shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <Image
            src={section.image}
            alt={section.title}
            width={1600}
            height={900}
            className="h-auto w-full object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
