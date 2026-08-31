"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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
    <article className="group flex h-full flex-col overflow-hidden border border-grey/60 bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(34,30,83,0.12)]">
      <Link href={post.href} className="relative block aspect-[16/10] overflow-hidden bg-greylight">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-blue/35 via-transparent to-transparent opacity-80" />
        {post.category ? (
          <span className="absolute top-3 left-3 bg-teal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {post.category}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <time
          className="text-xs font-semibold uppercase tracking-[0.1em] text-teal"
          dateTime={post.date}
        >
          {post.dateLabel || post.date}
        </time>

        <h3 className="mt-2 text-lg font-bold leading-snug text-blue">
          <Link href={post.href} className="transition-colors hover:text-teal">
            {post.title}
          </Link>
        </h3>

        {post.excerpt ? (
          <p className="mt-3 flex-1 text-sm leading-6 text-blue/70 line-clamp-3">{post.excerpt}</p>
        ) : null}

        <Link
          href={post.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:text-blue"
        >
          Read Article
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export default function BlogListing({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const featured = filteredPosts[0];
  const remaining = filteredPosts.slice(1);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2 sm:mb-10">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                isActive
                  ? "bg-teal text-white"
                  : "bg-greylight text-blue hover:bg-teal hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {featured ? (
        <article className="group relative mb-10 overflow-hidden border border-grey/60 bg-white lg:mb-12">
          <div className="grid lg:grid-cols-2">
            <Link
              href={featured.href}
              className="relative block min-h-[260px] overflow-hidden bg-greylight sm:min-h-[320px] lg:min-h-full"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-blue/20 to-transparent" />
            </Link>

            <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-teal px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Featured
                </span>
                {featured.category ? (
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-teal">
                    {featured.category}
                  </span>
                ) : null}
              </div>

              <time
                className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-blue/55"
                dateTime={featured.date}
              >
                {featured.dateLabel || featured.date}
              </time>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-blue sm:text-3xl lg:text-[2rem]">
                <Link href={featured.href} className="transition-colors hover:text-teal">
                  {featured.title}
                </Link>
              </h2>

              {featured.excerpt ? (
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-blue/75">{featured.excerpt}</p>
              ) : null}

              <Link
                href={featured.href}
                className="mt-7 inline-flex w-fit items-center gap-2 bg-blue px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal"
              >
                Read Featured Article
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </article>
      ) : null}

      {remaining.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {remaining.map((post) => (
            <li key={post.slug} className="h-full">
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="border border-grey/70 bg-greylight px-6 py-10 text-center text-blue/70">
          No articles in this category yet.
        </p>
      )}
    </div>
  );
}
