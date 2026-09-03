import Link from "next/link";
import ResidentialProjectsGallery from "@/components/ResidentialProjectsGallery";
import QuoteCtaSection from "@/components/homev2/QuoteCtaSection";

export const metadata = {
  title: "Residential Projects | FMP Flooring",
  description:
    "Explore FMP Flooring residential projects across the Carolinas — beautiful flooring installed with craftsmanship and care.",
};

const quoteCtaContent = [
  {
    eyebrow: "Residential Flooring",
    title: "Planning a Home Flooring Project?",
    description:
      "From LVP to hardwood and carpet, we bring samples, expert guidance, and professional installation to your home.",
    buttonText: "Request a Residential Quote",
    buttonHref: "/contact-us",
  },
];

export default function ResidentialProjectsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-[70px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,188,175,0.22),transparent_46%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#fdbf3e]">
            Residential Projects
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Residential Work
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            We are the experts in good taste — see how homeowners across the Carolinas
            transformed their spaces with FMP Flooring.
          </p>
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">Residential Projects</span>
          </nav>
        </div>
      </section>

      <ResidentialProjectsGallery />

      <div className="pb-10 sm:pb-14">
        <QuoteCtaSection content={quoteCtaContent} />
      </div>
    </main>
  );
}
