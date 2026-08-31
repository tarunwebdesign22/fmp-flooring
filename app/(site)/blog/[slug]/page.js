import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaSection from "@/components/CtaSection";
import FederalMarquee from "@/components/FederalMarquee";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Blog | FMP Flooring" };
  }

  return {
    title: `${post.title} | FMP Flooring Blog`,
    description: post.excerpt || post.title,
  };
}

const ctaContent = [
  {
    headlineWhite: "Get a Free",
    headlineTeal: "Flooring Estimate",
    description:
      "Talk with a flooring expert about LVP, laminate, hardwood, tile, and more. Free in-home consultations available.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.category === post.category)
    .slice(0, 3);

  const relatedFallback =
    related.length > 0
      ? related
      : blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue text-white">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue/85 via-blue/90 to-blue"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[70px]">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href="/blog" className="transition-colors hover:text-[#fdbf3e]">
              Blog
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">Article</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {post.category ? (
              <span className="bg-teal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {post.category}
              </span>
            ) : null}
            <time
              className="text-xs font-semibold uppercase tracking-[0.1em] text-white/75"
              dateTime={post.date}
            >
              {post.dateLabel || post.date}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
        </div>
      </section>

      <FederalMarquee />

      <article className="py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <div className="relative aspect-[16/9] overflow-hidden border border-grey/60 bg-greylight">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>

          <div className="mt-8 space-y-5 text-[15px] leading-8 text-blue/80 sm:mt-10 sm:text-base">
            {post.excerpt ? <p>{post.excerpt}</p> : null}
            <p>
              Looking for flooring that fits your space, budget, and lifestyle? FMP Flooring
              helps homeowners and commercial clients choose the right products — from luxury
              vinyl plank and SPC to hardwood, laminate, carpet tile, and more — with
              professional installation and clear, competitive pricing.
            </p>
            <p>
              Schedule a free consultation to review samples, get an all-inclusive estimate, and
              plan an installation timeline that works for you.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-grey/70 pt-8">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 bg-teal px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
            >
              Get a Free Estimate
              <ArrowIcon />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded bg-blue px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal hover:text-white"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-grey/60 bg-greylight py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">Keep Reading</p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Related Articles</h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          </div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {relatedFallback.map((item) => (
              <li key={item.slug}>
                <article className="group flex h-full flex-col overflow-hidden border border-grey/60 bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(34,30,83,0.12)]">
                  <Link
                    href={item.href}
                    className="relative block aspect-[16/10] overflow-hidden bg-greylight"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <time
                      className="text-xs font-semibold uppercase tracking-[0.1em] text-teal"
                      dateTime={item.date}
                    >
                      {item.dateLabel || item.date}
                    </time>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-blue">
                      <Link href={item.href} className="hover:text-teal">
                        {item.title}
                      </Link>
                    </h3>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal hover:text-blue"
                    >
                      Read Article
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection content={ctaContent} />
    </main>
  );
}
