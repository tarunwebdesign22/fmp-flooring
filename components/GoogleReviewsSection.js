import Link from "next/link";

function GoogleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarIcon({ filled = true, className = "" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.3 6.6 19.8l1-6.1L3.2 9.4l6.1-.9L12 3z" />
    </svg>
  );
}

function Stars({ rating = 5 }) {
  const full = Math.floor(rating);
  return (
    <span className="inline-flex items-center gap-0.5 text-[#fdbf3e]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < full} />
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  const initial = review.author?.charAt(0)?.toUpperCase() || "G";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-grey/70 bg-white p-5 shadow-[0_6px_24px_rgba(34,30,83,0.06)] transition-shadow hover:shadow-[0_10px_32px_rgba(34,30,83,0.1)] sm:p-6">
      <div className="flex items-start gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: review.avatarColor || "#221e53" }}
          aria-hidden="true"
        >
          {initial}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="truncate text-sm font-bold text-blue">{review.author}</h3>
              {review.date ? (
                <p className="mt-0.5 text-xs text-blue/50">{review.date}</p>
              ) : null}
            </div>
            <GoogleIcon />
          </div>
          <div className="mt-2">
            <Stars rating={review.rating ?? 5} />
          </div>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-blue/75">{review.text}</p>
    </article>
  );
}

export default function GoogleReviewsSection({ content }) {
  const section = content?.[0];
  if (!section) return null;

  return (
    <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          {section.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {section.eyebrow}
            </p>
          ) : null}

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <GoogleIcon />
            <h2 className="text-3xl font-bold text-blue sm:text-4xl">{section.title}</h2>
          </div>
          <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <span className="text-3xl font-bold text-blue">{section.rating}</span>
            <Stars rating={Number(section.rating) || 5} />
            <span className="text-sm text-blue/60">
              Based on {section.reviewCount} Google reviews
            </span>
          </div>

          {section.description ? (
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-blue/70">
              {section.description}
            </p>
          ) : null}
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {section.reviews.map((review) => (
            <li key={`${review.author}-${review.date || review.text.slice(0, 20)}`} className="h-full">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
          {section.viewAllHref ? (
            <Link
              href={section.viewAllHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue hover:text-white"
            >
              View All Google Reviews
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
          {section.writeReviewHref ? (
            <Link
              href={section.writeReviewHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-blue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal hover:text-white"
            >
              Write a Google Review
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
