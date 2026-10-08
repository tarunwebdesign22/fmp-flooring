import Image from "next/image";
import Link from "next/link";
import QuoteCtaSection from "@/components/homev2/QuoteCtaSection";

export const metadata = {
  title: "One-Day Shower Remodel | FMP Flooring",
  description:
    "Bath Envy acrylic wall panels installed by FMP Flooring — the beauty of tile and stone without the maintenance. Fast install, mold resistant, and low maintenance.",
};

const BENEFITS = [
  {
    title: "Beauty of Tile & Stone",
    description:
      "Stone-inspired, marble-look, and tile-style designs that complement any bathroom aesthetic — without traditional tile maintenance.",
  },
  {
    title: "Fast Installation",
    description:
      "Engineered for quick installs so contractors can complete stunning bathroom transformations in as little as 1–2 days.",
  },
  {
    title: "No Grout Required",
    description:
      "Unlike traditional tile, acrylic systems require no grout, resist mold and mildew, and stay easy to clean for years.",
  },
  {
    title: "Made in the USA",
    description:
      "Durable, high-performance acrylic wall panels manufactured in the USA for lasting quality homeowners can trust.",
  },
];

const TOPSAIL_IMAGES = [
  {
    src: "/images/bathroom-acrylic/topsail/topsail-1.png",
    alt: "Topsail Granite acrylic shower surround",
  },
  {
    src: "/images/bathroom-acrylic/topsail/topsail-2.jpg",
    alt: "Topsail Granite bathroom remodel project",
  },
  {
    src: "/images/bathroom-acrylic/topsail/topsail-3.png",
    alt: "Topsail Granite acrylic wall panel installation",
  },
  {
    src: "/images/bathroom-acrylic/topsail/topsail-4.png",
    alt: "Topsail Granite acrylic wall pattern detail",
  },
];

const TANGLEWOOD_IMAGES = [
  {
    src: "/images/bathroom-acrylic/tanglewood/tanglewood-1.jpeg",
    alt: "Tanglewood acrylic shower surround",
  },
  {
    src: "/images/bathroom-acrylic/tanglewood/tanglewood-2.jpeg",
    alt: "Tanglewood bathroom remodel project",
  },
  {
    src: "/images/bathroom-acrylic/tanglewood/tanglewood-3.jpeg",
    alt: "Tanglewood acrylic wall panel installation",
  },
  {
    src: "/images/bathroom-acrylic/tanglewood/tanglewood-4.jpg",
    alt: "Tanglewood acrylic wall pattern detail",
  },
];

const CAROLINA_DUNES_IMAGES = [
  {
    src: "/images/bathroom-acrylic/carolina-dunes/carolina-dunes-1.jpg",
    alt: "Carolina Dunes acrylic shower surround",
  },
  {
    src: "/images/bathroom-acrylic/carolina-dunes/carolina-dunes-2.jpg",
    alt: "Carolina Dunes bathroom remodel project",
  },
  {
    src: "/images/bathroom-acrylic/carolina-dunes/carolina-dunes-3.jpeg",
    alt: "Carolina Dunes acrylic wall panel installation",
  },
  {
    src: "/images/bathroom-acrylic/carolina-dunes/carolina-dunes-4.jpg",
    alt: "Carolina Dunes acrylic wall pattern detail",
  },
];

const VISION_IMAGES = [
  {
    src: "/images/bathroom-acrylic/vision/vision-1.jpg",
    alt: "Vision Sim-Tile acrylic shower surround",
  },
  {
    src: "/images/bathroom-acrylic/vision/vision-2.jpg",
    alt: "Vision Sim-Tile bathroom remodel project",
  },
  {
    src: "/images/bathroom-acrylic/vision/vision-3.jpg",
    alt: "Vision Sim-Tile acrylic wall panel installation",
  },
  {
    src: "/images/bathroom-acrylic/vision/vision-4.jpg",
    alt: "Vision Sim-Tile acrylic wall pattern detail",
  },
];

const SUBWAY_IMAGES = [
  {
    src: "/images/bathroom-acrylic/subway/subway-1.jpg",
    alt: "Subway acrylic shower surround",
  },
  {
    src: "/images/bathroom-acrylic/subway/subway-2.jpg",
    alt: "Subway bathroom remodel project",
  },
  {
    src: "/images/bathroom-acrylic/subway/subway-3.jpg",
    alt: "Subway acrylic wall panel installation",
  },
  {
    src: "/images/bathroom-acrylic/subway/subway-4.jpg",
    alt: "Subway acrylic wall pattern detail",
  },
];

const quoteCtaContent = [
  {
    eyebrow: "One-Day Shower Remodel",
    title: "Ready for a Beautiful, Low-Maintenance Bathroom?",
    description:
      "Ask us about Bath Envy acrylic wall panels — premium looks, fast installation, and lasting performance for your next remodel.",
    buttonText: "Request a Free Estimate",
    buttonHref: "/contact-us",
  },
];

export default function BathroomAcrylicPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate min-h-[min(64vh,518px)] overflow-hidden bg-[#1c2430] text-white">
        <Image
          src="/images/bathroom-gallery/bathroom-acrylic-banner.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 lg:hidden" aria-hidden="true" />
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-black/55 via-black/40 to-transparent lg:block"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[min(64vh,518px)] max-w-7xl flex-col justify-center px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
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
            <span className="text-white/90">One-Day Shower Remodel</span>
          </nav>

          <p className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fdbf3e] backdrop-blur-sm">
            One-Day Shower Remodel
          </p>

          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Grout-Free. Hassle-Free.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Transform your shower with durable acrylic wall panels designed for a clean, modern look
            without the maintenance of traditional tile.
          </p>
          <p className="mt-4 max-w-2xl text-base font-semibold text-teal sm:text-lg">
            Fast Installation • Easy to Clean • Low Maintenance
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center rounded-md bg-[#fdbf3e] px-6 py-3.5 text-sm font-bold text-blue transition-colors hover:bg-[#e5ad38]"
            >
              Get My Free Estimate
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Our Acrylic Wall Panels
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
              Premium Looks. Easy Care.
            </h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-blue/70">
              Bath Envy Products acrylic wall panels are designed to give homeowners the beauty
              of tile and stone without the maintenance. Manufactured in the USA, our panels are
              durable, easy to clean, and engineered for fast installation, helping complete
              stunning bathroom transformations in as little as 1–2 days.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-blue/70">
              Choose from exclusive patterns and finishes — including stone-inspired, marble-look,
              and tile-style designs. Unlike traditional tile, acrylic systems require no grout,
              resist mold and mildew, and provide a long-lasting, low-maintenance solution
              homeowners love.
            </p>
            <Link
              href="/contact-us"
              className="mt-7 inline-flex items-center justify-center rounded-md bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
            >
              Get a Free Estimate
            </Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-greylight shadow-[0_12px_36px_rgba(34,30,83,0.12)]">
            <Image
              src="/images/bathroom-gallery/df5cb4_1aafeb0b06d84944a6ae69ae37a7ef9dmv2.jpg"
              alt="Bathroom remodel with acrylic wall panels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Why Acrylic Panels
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
              Built for Beautiful Bathrooms
            </h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {BENEFITS.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl bg-white px-5 py-6 shadow-[0_6px_22px_rgba(34,30,83,0.06)]"
              >
                <span className="mb-3 block h-0.5 w-10 bg-teal" aria-hidden="true" />
                <h3 className="text-lg font-bold text-blue">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-blue/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Pattern Spotlight
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Topsail Granite</h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-blue/70">
              Topsail Granite features warm sandy tones accented by soft grays and natural stone
              movement for a look inspired by weathered coastal rock. Its rich variation adds warmth
              and depth, creating a timeless design that feels both inviting and distinctive.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {TOPSAIL_IMAGES.map((image) => (
              <li key={image.src}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-greylight shadow-[0_6px_18px_rgba(34,30,83,0.08)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Pattern Spotlight
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Tanglewood</h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-blue/70">
              Tanglewood blends soft creams, warm beige, cool blue-gray, and subtle stone-inspired
              movement to create a naturally balanced look. Its mix of warm and cool tones makes it
              easy to pair with a wide range of bathroom styles, bringing character without
              overpowering the space.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {TANGLEWOOD_IMAGES.map((image) => (
              <li key={image.src}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-[0_6px_18px_rgba(34,30,83,0.08)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Pattern Spotlight
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Carolina Dunes</h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-blue/70">
              Carolina Dunes is inspired by the soft, sun-washed colors of coastal sand. Gentle
              beige tones and flowing marble movement create a warm, natural look that brings
              comfort and character to any bathroom.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {CAROLINA_DUNES_IMAGES.map((image) => (
              <li key={image.src}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-greylight shadow-[0_6px_18px_rgba(34,30,83,0.08)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-greylight py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Pattern Spotlight
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Vision</h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-blue/70">
              Vision combines the look of textured tile with the durability of seamless acrylic. Its
              subtle linear texture adds depth and dimension, while the grout-free surface resists
              mold, cracking, and chipping, giving you the beauty of tile with the easy maintenance
              of acrylic.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {VISION_IMAGES.map((image) => (
              <li key={image.src}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-[0_6px_18px_rgba(34,30,83,0.08)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              Pattern Spotlight
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">Subway</h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-blue/70">
              Subway delivers the timeless look of classic tile without the upkeep. With no grout
              lines to scrub or repair, it resists cracking, chipping, and mold while providing a
              clean, low-maintenance finish that stays beautiful for years.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {SUBWAY_IMAGES.map((image) => (
              <li key={image.src}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-greylight shadow-[0_6px_18px_rgba(34,30,83,0.08)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pb-10 sm:pb-14">
        <QuoteCtaSection content={quoteCtaContent} />
      </div>
    </main>
  );
}
