import Link from "next/link";
import BathroomGallery from "@/components/BathroomGallery";
import QuoteCtaSection from "@/components/homev2/QuoteCtaSection";

export const metadata = {
  title: "Bathroom Gallery | FMP Flooring",
  description:
    "Browse FMP Flooring bathroom remodeling gallery — custom showers, tub-to-shower conversions, tile work, and complete bathroom renovations.",
};

const quoteCtaContent = [
  {
    eyebrow: "Bathroom Remodeling",
    title: "Ready to Remodel Your Bathroom?",
    description:
      "From custom tile showers to complete bathroom renovations, our team delivers quality craftsmanship and a stress-free experience.",
    buttonText: "Request a Free Estimate",
    buttonHref: "/contact-us",
  },
];

export default function BathroomGalleryPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-[70px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,188,175,0.22),transparent_46%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#fdbf3e]">
            Bathroom Remodeling
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Bathroom Gallery
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Explore our completed bathroom remodeling projects and see the quality,
            detail, and craftsmanship we bring to every space.
          </p>
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link
              href="/custom-bathroom-remodel"
              className="transition-colors hover:text-[#fdbf3e]"
            >
              Custom Bathroom Remodel
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">Bathroom Gallery</span>
          </nav>
        </div>
      </section>

      <BathroomGallery />

      <div className="pb-10 sm:pb-14">
        <QuoteCtaSection content={quoteCtaContent} />
      </div>
    </main>
  );
}
