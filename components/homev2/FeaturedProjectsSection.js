import Image from "next/image";
import Link from "next/link";

function LocationPinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col items-center text-center">
      <div className="relative w-full">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-greylight">
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#fdbf3e] shadow-sm backdrop-blur-[1px]">
          <LocationPinIcon />
        </span>
      </div>

      <h3 className="mt-8 text-lg font-bold text-blue">{project.title}</h3>
      {project.subtitle ? (
        <p className="mt-1 text-sm leading-6 text-blue/60">{project.subtitle}</p>
      ) : null}
    </article>
  );
}

export default function FeaturedProjectsSection({ content }) {
  const section = Array.isArray(content) ? content[0] : content;
  const projects = section?.projects || [];

  if (!section || !projects.length) return null;

  return (
    <section
      id="featured-projects"
      className="scroll-mt-28 overflow-x-clip bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 items-end gap-5 px-6 sm:mb-10 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="min-w-0">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold leading-tight text-blue sm:text-4xl">
            {section.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <Link
            href={section.commercialHref || "/commercial"}
            className="inline-flex items-center justify-center rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal"
          >
            {section.commercialButtonText || "View Commercial Projects"}
          </Link>
          <Link
            href={section.residentialHref || "/residential"}
            className="inline-flex items-center justify-center rounded-md border border-blue bg-white px-5 py-2.5 text-sm font-semibold text-blue transition-colors hover:bg-blue hover:text-white"
          >
            {section.residentialButtonText || "View Residential Projects"}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={`${project.category}-${project.title}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
