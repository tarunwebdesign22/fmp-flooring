import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function BlogCard({ post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-grey/70 bg-white shadow-[0_6px_24px_rgba(34,30,83,0.06)] transition-shadow hover:shadow-[0_10px_32px_rgba(34,30,83,0.12)]">
      <Link href={post.href} className="relative block aspect-[16/10] overflow-hidden bg-greylight">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {post.category ? (
          <span className="absolute top-3 left-3 rounded bg-teal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {post.category}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        {post.date ? (
          <time className="text-xs font-semibold uppercase tracking-wide text-teal" dateTime={post.date}>
            {post.dateLabel || post.date}
          </time>
        ) : null}

        <h3 className="mt-2 text-lg font-bold leading-snug text-blue">
          <Link href={post.href} className="transition-colors hover:text-teal">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-blue/70">{post.excerpt}</p>

        <Link
          href={post.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:text-blue"
        >
          Read More
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export default function EducationalResourcesSection({ content }) {
  const section = content?.[0];

  if (!section) return null;

  return (
    <section className="bg-[#eeecff] py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-center sm:mb-10">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          {section.description ? (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {section.posts.map((post) => (
            <li key={post.href} className="h-full">
              <BlogCard post={post} />
            </li>
          ))}
        </ul>

        {section.buttonText && section.buttonHref ? (
          <div className="mt-10 text-center">
            <Link
              href={section.buttonHref}
              className="inline-flex items-center gap-2 rounded border border-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
            >
              {section.buttonText}
              <ArrowIcon />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
