import Link from "next/link";
import CommercialProjectsGallery from "@/components/CommercialProjectsGallery";
import QuoteCtaSection from "@/components/homev2/QuoteCtaSection";

export const metadata = {
  title: "Commercial Projects | FMP Flooring",
  description:
    "Explore FMP Flooring commercial projects across schools, hospitals, courthouses, military bases, and businesses throughout North and South Carolina.",
};

const quoteCtaContent = [
  {
    eyebrow: "Commercial Flooring",
    title: "Planning a Commercial Project?",
    description:
      "From schools to military bases, we deliver competitive pricing, reliable schedules, and floors built for heavy use.",
    buttonText: "Request a Commercial Quote",
    buttonHref: "/contact-us",
  },
];

export default function CommercialProjectsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-[70px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,188,175,0.22),transparent_46%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#fdbf3e]">
            Commercial Projects
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Recent Commercial Flooring Projects
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Proven commercial flooring for high-traffic facilities across the Carolinas —
            installed with the precision large projects demand.
          </p>
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">Commercial Projects</span>
          </nav>
        </div>
      </section>

      <CommercialProjectsGallery />

      <div className="pb-10 sm:pb-14">
        <QuoteCtaSection content={quoteCtaContent} />
      </div>
    </main>
  );
}
