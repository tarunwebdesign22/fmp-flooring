import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bathroom Remodeling & Tile Services | North & South Carolina | FMP Flooring",
  description:
    "Professional bathroom remodeling and tile installation across North Carolina and South Carolina. Shower tile, floor tile, waterproofing, and complete bathroom upgrades from FMP Flooring.",
};

const IMAGES = {
  hero: "/images/bathroom-hero-banner.webp",
  introMain: "/images/intro-main-01.webp",
  introAccent1: "/images/intro-accent-02.webp",
  introAccent2: "/images/intro-accent-03.webp",
  benefitsBg: "/images/Experience-bg.webp",
  designedForYou: "/images/designed-for-you-01.webp",
};

const STEPS = [
  {
    num: "01",
    title: "On-Site Consultation",
    description:
      "We start by understanding your space, style, and remodeling goals. Our team evaluates your bathroom, takes precise measurements, and discusses your preferred materials, tile designs, layout, and project requirements.",
    image: "/images/bathroom-remodeling/step-consultation.jpg",
    imageAlt: "Luxury bathroom interior for remodeling consultation",
  },
  {
    num: "02",
    title: "Design & Material Selection",
    description:
      "Bring your vision to life with the right combination of flooring, wall tile, shower tile, backsplashes, fixtures, and finishes. We help you select quality products that complement your bathroom while fitting your style and budget.",
    image: "/images/bathroom-remodeling/step-design.jpg",
    imageAlt: "Modern bathroom tile and fixture design selection",
  },
  {
    num: "03",
    title: "Professional Installation",
    description:
      "Once everything is planned and materials are ready, our experienced installation team gets to work. From tile preparation and waterproofing to precise tile placement and finishing touches, we focus on delivering a clean, professional result.",
    image: "/images/bathroom-remodeling/step-installation.jpg",
    imageAlt: "Professional shower and wall tile installation",
  },
  {
    num: "04",
    title: "Final Walkthrough",
    description:
      "Before we consider the project complete, we inspect the finished work and make sure every detail meets our quality standards. We clean up the work area and walk you through your newly remodeled bathroom so you can enjoy the finished space with confidence.",
    image: "/images/bathroom-remodeling/step-walkthrough.jpg",
    imageAlt: "Finished luxury bathroom remodel with tile details",
  },
];

const DIFFERENCE = [
  {
    title: "Quality Craftsmanship",
    description:
      "Our experienced professionals take pride in precise installation, clean finishes, and attention to detail. Whether you're updating a shower, replacing bathroom flooring, or remodeling the entire space, we treat every project with care.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.5-2.5 2.5-2.5z" />
      </svg>
    ),
  },
  {
    title: "Quality Tile & Flooring Materials",
    description:
      "Choose from a wide range of styles, colors, textures, and finishes to create a bathroom that fits your home. We offer quality tile and flooring options designed to provide both lasting beauty and everyday functionality.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Built for Everyday Life",
    description:
      "Bathrooms need materials that can handle moisture, humidity, and daily use. We focus on proper preparation and professional installation to help create a bathroom that looks beautiful and performs for years to come.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M12 3c-3.5 4.5-6 7.8-6 11a6 6 0 0 0 12 0c0-3.2-2.5-6.5-6-11z" />
      </svg>
    ),
  },
];

const SERVICE_ICONS = {
  floorTile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 18h16M6 18V8l4-3 4 3v10M14 18V8l4-3v13" />
      <path d="M8 11h2M8 14h2M14 11h2M14 14h2" />
    </svg>
  ),
  showerTile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 4h8l1 3H7l1-3z" />
      <path d="M12 7v2" />
      <path d="M9 11c0 0 1.5 2 3 2s3-2 3-2" />
      <path d="M7 15c1 2 3.5 3 5 3s4-1 5-3M6 19c1.5 1.5 3.8 2 6 2s4.5-.5 6-2" />
    </svg>
  ),
  wallTile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="1" />
      <path d="M5 10h14M5 16h14M11 4v16M17 4v16" />
    </svg>
  ),
  tubSurround: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 14h14a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2z" />
      <path d="M7 14V9a5 5 0 0 1 10 0v5" />
      <path d="M9 7h6" />
    </svg>
  ),
  backsplash: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="5" width="16" height="8" rx="1" />
      <path d="M8 5V3M12 5V3M16 5V3" />
      <path d="M4 17h16" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tileReplace: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
      <path d="m11 7 2 2M13 11l2 2M15 13l2 2" />
    </svg>
  ),
  flooring: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 18h16" />
      <path d="M5 18 7 6l2 12M11 6l2 12 2-12M17 6l2 12" />
    </svg>
  ),
  waterproof: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3c-3.5 4.5-6 7.8-6 11a6 6 0 0 0 12 0c0-3.2-2.5-6.5-6-11z" />
      <path d="M9.5 14.5 11 16l3.5-4" />
    </svg>
  ),
  customLayout: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      <path d="m16 6 2 2-3 3" />
    </svg>
  ),
  fullRemodel: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M9 14h6v5H9z" />
      <path d="M16 18l2-2 1 1-2 2h-1v1" />
    </svg>
  ),
};

const SERVICES = [
  { label: "Bathroom floor tile installation", icon: SERVICE_ICONS.floorTile },
  { label: "Shower tile installation", icon: SERVICE_ICONS.showerTile },
  { label: "Wall tile installation", icon: SERVICE_ICONS.wallTile },
  { label: "Shower and tub surrounds", icon: SERVICE_ICONS.tubSurround },
  { label: "Bathroom backsplashes", icon: SERVICE_ICONS.backsplash },
  { label: "Tile replacement", icon: SERVICE_ICONS.tileReplace },
  { label: "Bathroom flooring", icon: SERVICE_ICONS.flooring },
  { label: "Waterproofing and tile preparation", icon: SERVICE_ICONS.waterproof },
  { label: "Custom tile layouts and designs", icon: SERVICE_ICONS.customLayout },
  { label: "Complete bathroom remodeling", icon: SERVICE_ICONS.fullRemodel },
];

export default function BathroomRemodelingTileServicesPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      {/* Hero */}
      <section className="relative isolate min-h-[min(64vh,518px)] overflow-hidden bg-[#1c2430] text-white">
        <Image
          src={IMAGES.hero}
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
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white/90">Bathroom Remodeling & Tile Services</span>
          </nav>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fdbf3e] backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            North & South Carolina
          </p>

          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Bathroom Remodeling & Tile Services in North & South Carolina
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-teal sm:text-2xl">
            Your Bathroom. Your Style. Expertly Remodeled.
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

      {/* Intro */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              North & South Carolina
            </p>
            <h2 className="mt-3 text-2xl font-bold text-blue sm:text-3xl lg:text-[2rem] lg:leading-tight">
              Professional Bathroom Remodeling & Tile Installation
            </h2>
            <span className="mt-3 mb-6 block h-1 w-16 bg-[#fdbf3e]" aria-hidden="true" />

            <p className="text-[15px] leading-7 text-blue/75 sm:text-base sm:leading-8">
              Transform your bathroom with FMP Flooring&apos;s professional bathroom remodeling and tile installation services throughout North Carolina and South Carolina. From stunning new tile designs to complete bathroom upgrades, we bring quality materials, skilled craftsmanship, and attention to detail to every project.
            </p>
            <p className="mt-5 text-[15px] leading-7 text-blue/75 sm:text-base sm:leading-8">
              Whether you&apos;re updating a bathroom in the Charlotte area or planning a remodeling project elsewhere in North or South Carolina, our team is ready to help bring your vision to life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center rounded-md bg-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal/90"
              >
                Schedule Consultation
              </Link>
              <Link
                href="tel:+19802521648"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue transition-colors hover:text-teal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                </svg>
                (980) 252-1648
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(34,30,83,0.12)]">
              <Image
                src={IMAGES.introMain}
                alt="Luxury bathroom with large-format floor tile"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
              <Image
                src={IMAGES.introAccent1}
                alt="Elegant bathroom vanity and tile backsplash"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
              <Image
                src={IMAGES.introAccent2}
                alt="Modern bathroom shower and wall tile"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="bg-greylight py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-blue sm:text-4xl">
              Your Bathroom Remodel in 4 Simple Steps
            </h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          </div>

          <ol className="mt-12 space-y-8 lg:space-y-10">
            {STEPS.map((step, index) => {
              const imageRight = index % 2 === 1;
              return (
                <li
                  key={step.num}
                  className="grid items-center gap-8 overflow-hidden rounded-2xl border border-grey/50 bg-white shadow-[0_8px_30px_rgba(34,30,83,0.06)] lg:grid-cols-2 lg:gap-0"
                >
                  <div
                    className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] ${
                      imageRight ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <span className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-lg">
                      {step.num}
                    </span>
                  </div>
                  <div className={`px-6 py-8 sm:px-10 sm:py-10 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                    <h3 className="text-xl font-bold text-blue sm:text-2xl">
                      <span className="text-teal">{step.num}</span>
                      <span className="mx-2 font-normal text-blue/40" aria-hidden="true">—</span>
                      {step.title}
                    </h3>
                    <span className="mt-4 mb-4 block h-0.5 w-12 bg-[#fdbf3e]" aria-hidden="true" />
                    <p className="text-[15px] leading-7 text-blue/70">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Experience the difference */}
      <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-20">
        <Image
          src={IMAGES.benefitsBg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Experience the FMP Flooring Difference
            </h2>
            <span className="mx-auto mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENCE.map((item) => (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/95 p-7 shadow-xl backdrop-blur-sm"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-blue">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Designed around you */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-5 lg:gap-14 lg:px-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-2 shadow-[0_12px_40px_rgba(34,30,83,0.1)]">
            <Image
              src={IMAGES.designedForYou}
              alt="Custom bathroom design with premium tile finishes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue sm:text-4xl">A Bathroom Designed Around You</h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-6 text-[15px] leading-7 text-blue/75 sm:text-base sm:leading-8">
              Your bathroom should reflect your personal style. From modern and minimalist to classic and timeless, we help you create a space that feels right for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#eeecff] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-blue sm:text-4xl">
              Bathroom Remodeling & Tile Services Across North & South Carolina
            </h2>
            <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
            <p className="mt-6 text-[15px] leading-7 text-blue/75 sm:text-base sm:leading-8">
              FMP Flooring proudly serves homeowners throughout North Carolina and South Carolina, helping customers create beautiful, functional bathrooms with professional tile and flooring installation.
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-teal">Our services include:</p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
            {SERVICES.map((service) => (
              <li
                key={service.label}
                className="flex items-center gap-4 rounded-xl border border-grey/40 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal text-white shadow-sm"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
                <span className="text-sm font-semibold leading-snug text-blue">{service.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(42,188,175,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">Make Your Bathroom Feel Brand New</h2>
              <span className="mx-auto mt-3 block h-1 w-16 bg-teal lg:mx-0" aria-hidden="true" />
              <p className="mt-8 text-[15px] leading-7 text-white/90 sm:text-base sm:leading-8">
                Whether you&apos;re looking for a simple tile upgrade or a complete bathroom transformation, FMP Flooring is ready to help bring your vision to life.
              </p>
              <p className="mt-5 text-base font-semibold text-[#fdbf3e] sm:text-lg">
                Quality materials. Professional installation. Beautiful results.
              </p>
              <p className="mt-5 text-[15px] leading-7 text-white/85">
                Serving homeowners across North Carolina and South Carolina, including the Charlotte area.
              </p>
            </div>

            <div
              className="rounded-2xl border border-white/25 bg-white/10 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-10"
            >
              <p className="text-[15px] leading-7 text-white/95 sm:text-base sm:leading-8">
                Contact FMP Flooring today to discuss your bathroom remodeling project and get started on your new space.
              </p>
              <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
                <a
                  href="tel:+19802521648"
                  className="inline-flex items-center gap-2 text-[15px] text-white/90 underline underline-offset-2 transition-colors hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 opacity-80" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                  </svg>
                  (980) 252-1648
                </a>
                <span className="hidden text-white/40 sm:inline" aria-hidden="true">·</span>
                <a
                  href="mailto:flooring@furnishmyplace.com"
                  className="inline-flex items-center gap-2 text-[15px] text-white/90 underline underline-offset-2 transition-colors hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 opacity-80" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 7 9-7" />
                  </svg>
                  flooring@furnishmyplace.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
