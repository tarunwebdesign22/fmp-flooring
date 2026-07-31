"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  { label: "Contact", href: "/contact-us" },
];

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
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

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

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 8;
        setScrolled((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeight = () => setHeaderHeight(el.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [scrolled, menuOpen]);

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 w-full bg-white ${
        scrolled
          ? "shadow-[0_8px_28px_rgba(34,30,83,0.12)]"
          : "shadow-[0_2px_16px_rgba(34,30,83,0.06)]"
      }`}
    >
      {/* Main header */}
      <div className="border-b border-grey">
        <div
          className={`mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:gap-6 lg:px-10 ${
            scrolled ? "py-1.5" : "py-0"
          }`}
        >
          <Link href="/" className="shrink-0" aria-label="FMP Flooring home">
            <Image
              src="/images/FMP-Flooring-fiNAL-lOGO-scaled.png"
              alt="FMP Flooring"
              width={180}
              height={200}
              priority
              className={`w-auto object-contain object-left ${
                scrolled
                  ? "h-[64px] sm:h-[72px] lg:h-[80px]"
                  : "h-[88px] sm:h-[100px] lg:h-[112px]"
              }`}
            />
          </Link>

          {/* Desktop main menu */}
          <nav aria-label="Primary" className="hidden min-w-0 flex-1 xl:block">
            <ul className="flex flex-wrap items-center justify-center gap-x-[13px] gap-y-2 2xl:gap-x-[17px]">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold text-blue transition-colors hover:text-[#fdbf3e]"
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
              href="#"
              className="hidden rounded-sm border border-teal px-4 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white sm:inline-flex"
            >
              In Stock Specials
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
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-sm border border-teal px-4 py-3 text-center text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white sm:hidden"
          >
            In Stock Specials
          </Link>
        </div>
      </div>
    </header>
    <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
}
