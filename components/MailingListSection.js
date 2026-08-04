"use client";

import { useState } from "react";

function MailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 8l9 7 9-7" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M2 10h2M1 13h3" strokeLinecap="round" />
    </svg>
  );
}

export default function MailingListSection({ content }) {
  const section = content?.[0];
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!section) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-blue py-10 sm:py-12 lg:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">
        <div className="flex w-full max-w-xl items-center gap-4 sm:gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal sm:h-16 sm:w-16">
            <MailIcon />
          </span>
          <div>
            <p className="text-base leading-snug text-white sm:text-lg">
              {section.lineOne || "Join Our Mailing List Today &"}
            </p>
            <p className="mt-0.5 text-2xl font-bold leading-tight text-[#fdbf3e] sm:text-3xl">
              {section.highlight || "Get $150 Off"}
            </p>
            <p className="mt-0.5 text-base leading-snug text-white sm:text-lg">
              {section.lineTwo || "Your Next Install!"}
            </p>
          </div>
        </div>

        <div className="w-full max-w-xl lg:max-w-md xl:max-w-lg">
          {submitted ? (
            <p className="rounded-lg bg-white/10 px-5 py-4 text-center text-sm font-medium text-white">
              {section.successMessage || "Thanks for subscribing! Check your inbox soon."}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0"
            >
              <label className="sr-only" htmlFor="mailing-list-email">
                Email
              </label>
              <input
                id="mailing-list-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={section.placeholder || "Email*"}
                className="w-full rounded-lg border-0 bg-white px-4 py-3.5 text-sm text-blue outline-none placeholder:text-blue/45 sm:rounded-r-none sm:rounded-l-lg"
              />
              <button
                type="submit"
                className="rounded-lg bg-teal px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#fdbf3e] hover:text-blue sm:rounded-l-none sm:rounded-r-lg"
              >
                {section.buttonText || "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
