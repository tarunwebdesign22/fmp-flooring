"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { residentialProjects } from "@/data/residential-projects";

const PAGE_SIZE = 12;

function getVisiblePages(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set([1, total, current]);
  if (current - 1 > 1) pages.add(current - 1);
  if (current + 1 < total) pages.add(current + 1);
  if (current <= 3) {
    pages.add(2);
    pages.add(3);
  }
  if (current >= total - 2) {
    pages.add(total - 1);
    pages.add(total - 2);
  }

  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length; i += 1) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) result.push("ellipsis");
    result.push(sorted[i]);
  }
  return result;
}

export default function ResidentialProjectsGallery() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(residentialProjects.length / PAGE_SIZE));

  const pageProjects = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return residentialProjects.slice(start, start + PAGE_SIZE);
  }, [page]);

  const visiblePages = useMemo(() => getVisiblePages(page, totalPages), [page, totalPages]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const goToPage = (nextPage) => {
    const clamped = Math.min(Math.max(nextPage, 1), totalPages);
    setPage(clamped);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects" className="bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
            Project Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
            We are the experts in good taste!
          </h2>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          <p className="mt-5 text-[15px] leading-7 text-blue/70">
            Browse our residential flooring projects — beautiful floors installed in homes
            across the Carolinas with craftsmanship and care.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {pageProjects.map((project, index) => {
            const isGif = project.image.toLowerCase().endsWith(".gif");
            const card = (
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-grey/70 bg-white shadow-[0_6px_22px_rgba(34,30,83,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(34,30,83,0.12)]">
                <div className="relative aspect-[16/11] overflow-hidden bg-[#eef1f4]">
                  <Image
                    src={encodeURI(project.image)}
                    alt={project.title}
                    fill
                    unoptimized={isGif}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={page === 1 && index < 3}
                  />
                  <div
                    className="absolute inset-0 bg-blue/0 transition-colors duration-300 group-hover:bg-blue/10"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col border-t border-[#eeecff] bg-[#eeecff] px-5 py-5 sm:px-6 sm:py-6">
                  <span
                    className="mb-3 block h-0.5 w-10 bg-teal transition-all duration-300 group-hover:w-14"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold leading-snug text-blue sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-blue/50">
                    Residential Flooring Project
                  </p>
                </div>
              </article>
            );

            return (
              <li key={project.title}>
                {project.href ? (
                  <Link href={project.href} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ul>

        {totalPages > 1 ? (
          <nav
            className="mt-12 flex flex-col items-center gap-4 sm:mt-14"
            aria-label="Project gallery pagination"
          >
            <p className="text-sm font-medium text-blue/55">
              Page {page} of {totalPages} · {residentialProjects.length} projects
            </p>

            <div className="flex w-full flex-nowrap items-center justify-center gap-1 overflow-x-auto px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="inline-flex h-8 shrink-0 items-center gap-0.5 rounded-md border border-grey/80 bg-white px-2 text-[11px] font-bold text-blue transition-colors hover:border-teal hover:text-teal disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-grey/80 disabled:hover:text-blue"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
                Prev
              </button>

              {visiblePages.map((item, index) => {
                if (item === "ellipsis") {
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="inline-flex h-8 min-w-6 shrink-0 items-center justify-center text-xs font-bold text-blue/40"
                      aria-hidden="true"
                    >
                      …
                    </span>
                  );
                }

                const isActive = item === page;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToPage(item)}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex h-8 min-w-7 shrink-0 items-center justify-center rounded-md px-1.5 text-[11px] font-bold transition-colors ${
                      isActive
                        ? "bg-teal text-white"
                        : "border border-grey/80 bg-white text-blue hover:border-teal hover:text-teal"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="inline-flex h-8 shrink-0 items-center gap-0.5 rounded-md border border-grey/80 bg-white px-2 text-[11px] font-bold text-blue transition-colors hover:border-teal hover:text-teal disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-grey/80 disabled:hover:text-blue"
              >
                Next
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
