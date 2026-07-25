"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const primaryLinks = [
  { label: "Luxury Vinyl Plank", href: "/luxury-vinyl-plank", square: "teal" },
  { label: "Broadloom Carpet", href: "/broadloom-carpet", square: "blue" },
  { label: "Carpet Tile", href: "/carpet-tile", square: "teal" },
  { label: "Ceramic Flooring", href: "/ceramic-flooring", square: "blue" },
  { label: "Rubber", href: "/rubber", square: "teal" },
  { label: "Hardwood", href: "/hardwood", square: "blue" },
  { label: "Laminate", href: "/laminate", square: "teal" },
  { label: "VCT", href: "/vct", square: "blue" },
];

const resourceLinks = [
  { label: "Product Care", href: "/product-care" },
  { label: "FAQ", href: "/faq" },
  { label: "Warranty", href: "/warranty" },
  { label: "Installation", href: "/installation" },
  { label: "Pricing", href: "/pricing" },
  { label: "Commercial", href: "/commercial" },
  { label: "Special Offers", href: "/special-offers" },
  { label: "Financing", href: "/financing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 12.2s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.5 5.2 12 5.2 12 5.2s-6.5 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8 2.3.5 8.8.5 8.8.5s6.5 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM9.8 15.5v-6.6l5.7 3.3-5.7 3.3z" />
      </svg>
    ),
  },
];

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MenuSquare({ color = "yellow" }) {
  return (
    <span
      className={`inline-block h-2 w-2 shrink-0 ${
        color === "blue" ? "bg-blue" : "bg-[#fdbf3e]"
      }`}
      aria-hidden="true"
    />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="relative z-50 w-full bg-white shadow-[0_2px_16px_rgba(34,30,83,0.06)]">
      {/* Top bar — email, phone, social only */}
      <div className="bg-blue">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2.5 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12px] text-white sm:text-[13px]">
            <a
              href="mailto:flooring@furnishmyplace.com"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <span className="text-teal">
                <MailIcon />
              </span>
              <span className="hidden sm:inline">
                flooring@furnishmyplace.com
              </span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <a
              href="tel:+19802521648"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <span className="text-teal">
                <PhoneIcon />
              </span>
              +1 9802521648
            </a>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-teal"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-grey">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:gap-6 lg:px-10 lg:py-4">
          <Link href="/" className="shrink-0" aria-label="FMP Flooring home">
            <Image
              src="/images/FMP-Flooring-fiNAL-lOGO-scaled.png"
              alt="FMP Flooring"
              width={180}
              height={200}
              priority
              className="h-[88px] w-auto object-contain object-left sm:h-[100px] lg:h-[112px]"
            />
          </Link>

          {/* Desktop main menu */}
          <nav aria-label="Primary" className="hidden min-w-0 flex-1 xl:block">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 2xl:gap-x-5">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[12px] font-semibold text-blue transition-colors hover:text-[#fdbf3e] 2xl:text-[13px]"
                  >
                    <MenuSquare color={link.square} />
                    <span className="border-b border-transparent group-hover:border-[#fdbf3e]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/estimate"
              className="hidden rounded-sm border border-teal px-4 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white sm:inline-flex"
            >
              Free Estimate
            </Link>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-grey text-blue transition-colors hover:border-[#fdbf3e] hover:text-[#fdbf3e] xl:hidden"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full border-b border-grey bg-white shadow-lg xl:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-h-[min(70vh,560px)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6 lg:px-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-blue/45">
            Products
          </p>
          <ul className="mb-6 space-y-1">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-sm px-2 py-2.5 text-[15px] font-semibold text-blue transition-colors hover:bg-greylight hover:text-[#fdbf3e]"
                >
                  <MenuSquare color={link.square} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-blue/45">
            Resources
          </p>
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-sm px-2 py-2 text-sm font-medium text-blue/80 transition-colors hover:bg-greylight hover:text-[#fdbf3e]"
                >
                  <span className="inline-block h-2 w-2 shrink-0 bg-grey" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/estimate"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-sm border border-teal px-4 py-3 text-center text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white sm:hidden"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
