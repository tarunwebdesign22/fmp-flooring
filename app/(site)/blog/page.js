import Link from "next/link";
import BlogListing from "@/components/BlogListing";
import CtaSection from "@/components/CtaSection";
import FederalMarquee from "@/components/FederalMarquee";
import MailingListSection from "@/components/MailingListSection";
import { blogCategories, blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Flooring Blog | Guides, Tips & Trends | FMP Flooring",
  description:
    "Explore flooring guides, LVP tips, design trends, and expert advice from FMP Flooring — helping you choose smarter for homes and commercial spaces.",
};

const mailingListContent = [
  {
    lineOne: "Join Our Mailing List Today &",
    highlight: "GET $99 OFF",
    lineTwo: "Your Next Install!",
    placeholder: "Email*",
    buttonText: "Subscribe",
    successMessage: "Thanks for subscribing! Check your inbox soon.",
  },
];

const ctaContent = [
  {
    headlineWhite: "Ready to Upgrade",
    headlineTeal: "Your Floors?",
    description:
      "From LVP and laminate to hardwood and tile — get expert guidance and a free estimate from FMP Flooring.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-[70px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,188,175,0.24),transparent_48%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">Blog</span>
          </nav>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-[#fdbf3e]">
            Latest Insights
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Flooring Guides, Tips &amp; Design Trends
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/88 sm:text-lg">
            Expert advice from FMP Flooring — compare materials, explore LVP trends, and learn
            how to care for floors that last.
          </p>
        </div>
      </section>

      <FederalMarquee />

      <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">Our Blog</p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
              Educational Resources
            </h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-blue/70">
              Browse articles sourced from our latest flooring insights — practical guides for
              homeowners, remodelers, and commercial decision-makers.
            </p>
          </div>

          <BlogListing posts={blogPosts} categories={blogCategories} />
        </div>
      </section>

      <MailingListSection content={mailingListContent} />
      <CtaSection content={ctaContent} />
    </main>
  );
}
