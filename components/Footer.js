import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "Carpet Broadloom", href: "/broadloom-carpet" },
  { label: "Carpet Tile Services", href: "/carpet-tile" },
  { label: "Ceramic Flooring", href: "/ceramic" },
  { label: "Rubber Flooring", href: "/rubber" },
  { label: "Hardwood Flooring", href: "/hardwood" },
  { label: "Laminate Services", href: "/laminate" },
  { label: "Luxury Vinyl Plank", href: "/lvp" },
  { label: "Vinyl Composition Tile", href: "/vct" },
];

const usefulLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Commercial Projects", href: "/commercial" },
  { label: "Residential Projects", href: "/residential" },
  { label: "Contact us", href: "/contact-us" },
  { label: "In Stock Specials", href: "/in-stock-specials" },
  { label: "Blogs", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const proSolutionsLinks = [
  { label: "Residential Home Builders", href: "#" },
  { label: "Property Management", href: "#" },
  { label: "Real Estate Agents", href: "#" },
  { label: "Contractors & Trade Pros", href: "#" },
  { label: "Commercial Managers", href: "#" },
  { label: "Flooring & Carpet Outlets", href: "#" },
];

const certifications = [
  {
    src: "/images/certifications/Made-USA-150x150.webp",
    alt: "Made in USA",
  },
  {
    src: "/images/certifications/Licensed-Bonded-Insured-150x150.webp",
    alt: "Licensed, Bonded & Insured",
  },
  {
    src: "/images/certifications/Limited-Lifetime-Warranty-150x150.webp",
    alt: "Limited Lifetime Warranty",
  },
  {
    src: "/images/certifications/Locally-Owned-150x150.webp",
    alt: "Locally Owned",
  },
  {
    src: "/images/certifications/2-1-150x150.webp",
    alt: "Certification badge",
  },
];

function SectionHeading({ children }) {
  return (
    <h2 className="mb-5 text-lg font-semibold text-[#fdbf3e]">
      {children}
      <span className="mt-2 block h-0.5 w-10 bg-[#fdbf3e]" aria-hidden="true" />
    </h2>
  );
}

function FacebookIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.5 12.5h2.5l.5-2.5H13.5V9c0-.8.2-1.3 1.3-1.3h1.7V5.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V10H8v2.5h2.4V19h3.1v-6.5z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="footer-instagram-gradient-alt" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD5949" />
          <stop offset="50%" stopColor="#D6249F" />
          <stop offset="100%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#footer-instagram-gradient-alt)" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="#fff" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#FF0000" />
      <path fill="#fff" d="M10 8.2l6.2 3.8L10 15.8V8.2z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-4 lg:gap-7 lg:px-10 lg:py-16">
        <div>
          <Link href="/" aria-label="FMP Flooring home" className="inline-block">
            <Image
              src="/images/FMP-Flooring-fiNAL-lOGO-White-1-227x300.png"
              alt="FMP Flooring"
              width={120}
              height={158}
              className="h-auto w-[100px] object-contain"
            />
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-7 text-white/90">
            Arizona&apos;s preferred choice for tile, carpet, laminate, wood,
            and vinyl plank flooring installation.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.facebook.com/people/FMP-Flooring/100084480100386/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full transition-opacity hover:opacity-80"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/fmpflooring/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full transition-opacity hover:opacity-80"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@furnishmyplace4954"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full transition-opacity hover:opacity-80"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <div>
          <SectionHeading>Pro Solutions</SectionHeading>
          <ul className="space-y-3">
            {proSolutionsLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/90 transition-colors hover:text-[#fdbf3e]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-6">
            <div>
              <SectionHeading>Our Services</SectionHeading>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/90 transition-colors hover:text-[#fdbf3e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading>Useful Links</SectionHeading>
              <ul className="space-y-2.5">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/90 transition-colors hover:text-[#fdbf3e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading>Contact us</SectionHeading>
              <ul className="space-y-3.5">
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[#fdbf3e]">
                    <MapPinIcon />
                  </span>
                  <span className="text-[15px] leading-6 text-white/90">
                    4013 Dearborn Pl, Concord, NC 28027, United States
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[#fdbf3e]">
                    <PhoneIcon />
                  </span>
                  <a
                    href="tel:+19802521648"
                    className="text-[15px] text-white/90 transition-colors hover:text-[#fdbf3e]"
                  >
                    +1 9802521648
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[#fdbf3e]">
                    <MailIcon />
                  </span>
                  <a
                    href="mailto:flooring@furnishmyplace.com"
                    className="break-all text-[15px] text-white/90 transition-colors hover:text-[#fdbf3e]"
                  >
                    flooring@furnishmyplace.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.src}
                className="flex h-16 w-16 items-center justify-center rounded-md bg-white p-1.5 shadow-sm sm:h-[72px] sm:w-[72px]"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#fdbf3e]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/85 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            Copyright © {year} FMP Flooring LLC, All rights reserved.{" "}
            <span className="text-white/50" aria-hidden="true">
              |
            </span>{" "}
            Developed by{" "}
            <a
              href="https://tech2globe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#fdbf3e]"
            >
              Tech2Globe
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/terms-and-conditions" className="transition-colors hover:text-[#fdbf3e]">
              Terms & Conditions
            </Link>
            <span className="text-[#fdbf3e]" aria-hidden="true">
              |
            </span>
            <Link href="/privacy-policy" className="transition-colors hover:text-[#fdbf3e]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
