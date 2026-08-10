import Image from "next/image";
import Link from "next/link";
import BrandsSection from "@/components/BrandsSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";

export const metadata = {
  title: "About us | FMP Flooring",
  description:
    "Learn about FMP Flooring, our experience, service quality, and customer-first approach.",
};

const highlights = [
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured contractor for residential, commercial, and federal projects.",
  },
  {
    title: "Direct Flooring Wholesaler",
    description:
      "We remove middlemen and pass competitive pricing directly to homeowners and businesses.",
  },
  {
    title: "Wide Product Expertise",
    description:
      "Specialized in LVP/LVT, hardwood, carpet tile, broadloom carpet, rubber flooring, sheet vinyl, laminate, and VCT.",
  },
];

const teamContent = [
  {
    eyebrow: "Meet Our Team",
    headline: "Dedicated Experts. Exceptional Results",
    headlineAccent: ".",
    description:
      "Our experienced team is committed to delivering top-quality flooring solutions with integrity, expertise, and care.",
    members: [
      {
        name: "Mike Thompson",
        role: "Founder & CEO",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Sarah Johnson",
        role: "Operations Manager",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Chris Martinez",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Jessica Davis",
        role: "Design Consultant",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces",
      },
    ],
  },
];

const brandsContent = [
  {
    eyebrow: "Manufacturer / Brand Logos",
    headline: "Quality Brands. Trusted by Us",
    headlineAccent: ".",
    description:
      "We partner with leading manufacturers to bring stylish, durable, and high-performance flooring you can trust.",
    logos: [
      { name: "American Olean", logo: "/images/manufacturer/AMERICAN-OLEAN-150x150.png" },
      { name: "Crossville", logo: "/images/manufacturer/CROSSVILLE-150x150.png" },
      { name: "Daltile", logo: "/images/manufacturer/DALTILE--150x150.png" },
      { name: "EF Contract", logo: "/images/manufacturer/EF-Contract-150x150.png" },
      { name: "Johnsonite", logo: "/images/manufacturer/JOHNSONITE-150x150.png" },
      { name: "Louisville Tile", logo: "/images/manufacturer/Louisville-Tile-150x150.png" },
      { name: "Milliken", logo: "/images/manufacturer/Milliken-150x150.png" },
      { name: "Portobello", logo: "/images/manufacturer/Portobello-1-150x150.png" },
      { name: "Schluter", logo: "/images/manufacturer/SCHLUTER-150x150.png" },
    ],
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
    </svg>
  );
}

export default function AboutUsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-[70px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,188,175,0.22),transparent_46%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#fdbf3e]">
            About Us
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trusted Flooring Partner for Homes, Business, and Large-Scale Projects
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            We bring quality products, expert workmanship, and dependable service to every
            flooring project across the region.
          </p>
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">About us</span>
          </nav>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">Who We Are</p>
              <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Inspire your space through decor</h2>
              <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-blue/80">
                <p>
                  We are a fully licensed, bonded, and insured flooring contractor trusted
                  for a wide range of federal and state projects. Our experience includes
                  successful installations for airports, schools, hospitals, courthouses,
                  colleges, and military bases, as well as commercial offices, apartment
                  complexes, hotels, and other large-scale facilities. With extensive
                  expertise across diverse environments, we deliver exceptional craftsmanship,
                  reliability, and long-lasting results.
                </p>
                <p>
                  As a direct flooring wholesaler, we eliminate the middleman to offer the
                  most competitive pricing on high-quality materials-saving you money by
                  providing products directly from the manufacturer. We specialize in
                  LVP/LVT, hardwood, carpet tile, broadloom carpet, rubber flooring, sheet
                  vinyl, laminate, and VCT.
                </p>
                <p>
                  Choose FurnishMyPlace Flooring LLC for a trusted, experienced, and
                  value-driven partner dedicated to your satisfaction.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-grey/60 shadow-[0_16px_42px_rgba(34,30,83,0.14)]">
              <Image
                src="/images/about-image.webp"
                alt="Modern office flooring showcase"
                width={1200}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-grey/70 bg-greylight p-6 shadow-[0_10px_30px_rgba(34,30,83,0.08)] sm:p-8 lg:p-10">
            <ul className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-6">
              <li>
                <p className="text-5xl font-bold tracking-tight text-teal sm:text-6xl">1,000+</p>
                <p className="mt-1 text-sm font-bold text-blue">Happy Customer</p>
              </li>
              <li>
                <p className="text-5xl font-bold tracking-tight text-teal sm:text-6xl">5</p>
                <p className="mt-1 text-sm font-bold text-blue">Company Rating</p>
                <span className="mt-2 inline-flex items-center gap-1 text-[#fdbf3e]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </span>
              </li>
              <li>
                <p className="text-5xl font-bold tracking-tight text-teal sm:text-6xl">10+</p>
                <p className="mt-1 text-sm font-bold text-blue">Years Experience</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Why Clients Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Built on Quality and Trust</h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          </div>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-grey/70 bg-white px-6 py-7 shadow-[0_8px_24px_rgba(34,30,83,0.08)]"
              >
                <h3 className="text-lg font-bold text-blue">{item.title}</h3>
                <span className="mt-3 block h-1 w-12 bg-[#fdbf3e]" aria-hidden="true" />
                <p className="mt-4 text-[15px] leading-7 text-blue/75">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BrandsSection content={brandsContent} />
      <MeetOurTeamSection content={teamContent} />

      <section className="py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-blue sm:text-4xl">
            Ready to Upgrade Your Flooring?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-blue/75 sm:text-base">
            Talk to our team for guidance on products, budget, and installation planning.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
            >
              Contact Us
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center rounded border border-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
            >
              Free In-Home Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
