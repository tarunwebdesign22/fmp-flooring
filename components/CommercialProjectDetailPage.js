import Image from "next/image";
import Link from "next/link";
import ImageGallerySection from "@/components/ImageGallerySection";
import QuoteCtaSection from "@/components/homev2/QuoteCtaSection";

export default function CommercialProjectDetailPage({ project }) {
  if (!project) return null;

  const sectionHref = project.sectionHref || "/commercial";
  const sectionLabel = project.sectionLabel || "Commercial Projects";
  const eyebrow = project.eyebrow || (sectionHref.includes("residential") ? "Residential Project" : "Commercial Project");
  const projectKind = sectionHref.includes("residential") ? "residential" : "commercial";

  const galleryImages = (project.images || []).map((src, index) => ({
    src,
    alt: `${project.title} ${projectKind} flooring project photo ${index + 1}`,
  }));

  const galleryContent = galleryImages.length
    ? [
        {
          eyebrow: "Project Gallery",
          title: `${project.title} Installation Photos`,
          description: `Photos from the ${project.title} ${projectKind} flooring project.`,
          images: galleryImages,
        },
      ]
    : [];

  const featuredImage = project.image || galleryImages[0]?.src;

  const quoteCta = [
    {
      eyebrow: "Start Your Project",
      title: "Start Your Flooring Journey Here!",
      description:
        projectKind === "residential"
          ? "Planning a home flooring project? Tell us about your space and we’ll follow up with next steps."
          : "Planning a commercial flooring project? Tell us about your space and we’ll follow up with next steps.",
      buttonText: "Request a Quote",
      buttonHref: "/contact-us",
    },
  ];

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-[70px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,188,175,0.22),transparent_46%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#fdbf3e]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          {project.description ? (
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
              {project.description}
            </p>
          ) : null}
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href={sectionHref} className="transition-colors hover:text-[#fdbf3e]">
              {sectionLabel}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">{project.title}</span>
          </nav>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Project Info
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
              Project details at a glance
            </h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

            {project.details?.length ? (
              <dl className="mt-8 divide-y divide-grey/70 overflow-hidden rounded-2xl border border-grey/70 bg-[#eeecff]/50">
                {project.details.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:gap-4 sm:px-6"
                  >
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-teal">
                      {item.label}
                    </dt>
                    <dd className="text-base font-bold text-blue sm:text-lg">{item.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-8 text-[15px] leading-7 text-blue/70">
                {projectKind === "residential" ? "Residential" : "Commercial"} flooring
                project completed by FMP Flooring.
              </p>
            )}

            <div className="mt-8">
              <Link
                href={sectionHref}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:text-blue"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
                Back to {sectionLabel}
              </Link>
            </div>
          </div>

          {featuredImage ? (
            <div className="relative overflow-hidden rounded-2xl border border-grey/70 shadow-[0_16px_42px_rgba(34,30,83,0.12)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={featuredImage}
                  alt={`${project.title} ${projectKind} flooring project`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {galleryContent.length ? (
        <div className="border-t border-grey/60 bg-greylight/40">
          <ImageGallerySection content={galleryContent} />
        </div>
      ) : null}

      <div className="pb-10 sm:pb-14">
        <QuoteCtaSection content={quoteCta} />
      </div>
    </main>
  );
}
