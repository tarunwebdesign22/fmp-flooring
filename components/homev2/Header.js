"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const menu = [
  {
    label: "Flooring",
    children: [
      { label: "Luxury Vinyl Plank", href: "/lvp" },
      { label: "Broadloom Carpet", href: "/broadloom-carpet" },
      { label: "Carpet Tile", href: "/carpet-tile" },
      { label: "Ceramic Flooring", href: "/ceramic" },
      { label: "Rubber", href: "/rubber" },
      { label: "Hardwood", href: "/hardwood" },
      { label: "Laminate", href: "/laminate" },
      { label: "VCT", href: "/vct" },
    ],
  },
  {
    label: "Bathroom Remodeling",
    children: [
      {
        label: "Complete Bathroom Remodeling",
        href: "/bathroom-remodeling-tile-services",
      },
      {
        label: "Custom Tile Showers",
        href: "/bathroom-remodeling-tile-services#services",
      },
      {
        label: "Tub-to-Shower Conversions",
        href: "/bathroom-remodeling-tile-services#services",
      },
      {
        label: "Bathtub Replacement",
        href: "/bathroom-remodeling-tile-services#services",
      },
      {
        label: "Bathroom Tile & Flooring",
        href: "/bathroom-remodeling-tile-services#services",
      },
      {
        label: "Bathroom Gallery",
        href: "/bathroom-remodeling-tile-services",
      },
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "Commercial Projects", href: "/commercial" },
      { label: "Residential Projects", href: "/residential" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Blogs", href: "/blog" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  { label: "FAQ's", href: "/#faq" },
];

function MenuSquare({ color = "gold", onDark = false }) {
  const tone =
    color === "blue" ? (onDark ? "bg-white" : "bg-blue") : "bg-[#fdbf3e]";

  return <span className={`inline-block h-2 w-2 shrink-0 ${tone}`} aria-hidden="true" />;
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function pathOf(href) {
  return href.split("#")[0] || "/";
}

function itemIsActive(item, pathname) {
  if (!item.children) return false;
  const matches = item.children.some((child) => pathOf(child.href) === pathname);
  if (!matches) return false;
  const groups = menu.filter((entry) =>
    entry.children?.some((child) => pathOf(child.href) === pathname),
  );
  return groups.length === 1;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const hoverOpened = useRef(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
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

  useEffect(() => {
    setMenuOpen(false);
    setOpenMenu(null);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setOpenMenu(null);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenMenu(null);
    setOpenSection(null);
  };

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
        <div className="border-b border-grey">
          <div
            className={`mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:gap-8 lg:px-10 ${
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

            <nav ref={navRef} aria-label="Primary" className="hidden min-w-0 flex-1 lg:block">
              <ul className="mt-8 flex items-center justify-center gap-x-3 xl:gap-x-4">
                {menu.map((item, index) => {
                  const active = itemIsActive(item, pathname);
                  const expanded = openMenu === item.label;
                  const square = index % 2 === 0 ? "gold" : "blue";

                  if (!item.children) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={(event) => {
                            closeMenus();
                            if (pathname === "/" && item.href === "/#faq") {
                              event.preventDefault();
                              document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="group inline-flex items-center gap-1.5 px-3 py-2 text-[16px] font-semibold whitespace-nowrap text-blue transition-colors hover:text-[#fdbf3e] xl:text-[17px]"
                        >
                          <MenuSquare color={square} />
                          <span className="border-b border-transparent group-hover:border-[#fdbf3e]">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        hoverOpened.current = true;
                        setOpenMenu(item.label);
                      }}
                      onMouseLeave={() => {
                        hoverOpened.current = false;
                        setOpenMenu((current) => (current === item.label ? null : current));
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-haspopup="true"
                        onClick={() => {
                          if (hoverOpened.current) return;
                          setOpenMenu((current) => (current === item.label ? null : item.label));
                        }}
                        className={`group inline-flex items-center gap-1.5 px-3 py-2 text-[16px] font-semibold whitespace-nowrap transition-colors xl:text-[17px] ${
                          active || expanded ? "text-[#fdbf3e]" : "text-blue hover:text-[#fdbf3e]"
                        }`}
                      >
                        <MenuSquare color={square} />
                        <span
                          className={`border-b ${
                            active || expanded
                              ? "border-[#fdbf3e]"
                              : "border-transparent group-hover:border-[#fdbf3e]"
                          }`}
                        >
                          {item.label}
                        </span>
                        <ChevronIcon open={expanded} />
                      </button>

                      {expanded ? (
                      <div className="absolute top-full left-0 z-50 pt-2">
                        <ul className="min-w-[270px] overflow-hidden rounded-[6px] bg-blue py-2 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
                          {item.children.map((child, childIndex) => {
                            const childActive = pathOf(child.href) === pathname;
                            return (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  onClick={closeMenus}
                                  className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
                                    childActive
                                      ? "bg-white/10 text-[#fdbf3e]"
                                      : "text-white hover:bg-white/10 hover:text-[#fdbf3e]"
                                  }`}
                                >
                                  <MenuSquare color={childIndex % 2 === 0 ? "gold" : "blue"} onDark />
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <Link
                href="/in-stock-specials"
                className="hidden items-center justify-center rounded-lg bg-teal px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-teal/90 sm:inline-flex"
              >
                In Stock Specials
              </Link>

              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-greylight text-blue transition-colors hover:bg-teal hover:text-white lg:hidden"
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

        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full border-b border-grey bg-white shadow-lg lg:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="mx-auto max-h-[min(75vh,640px)] max-w-7xl overflow-y-auto px-4 py-2 sm:px-6">
            <ul>
              {menu.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.label} className="border-b border-grey/70">
                      <Link
                        href={item.href}
                        onClick={(event) => {
                          closeMenus();
                          if (pathname === "/" && item.href === "/#faq") {
                            event.preventDefault();
                            document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="block px-2 py-3.5 text-[17px] font-semibold text-blue"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const expanded = openSection === item.label;

                return (
                  <li key={item.label} className="border-b border-grey/70">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setOpenSection((current) => (current === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between gap-3 px-2 py-3.5 text-left text-[17px] font-semibold text-blue"
                    >
                      {item.label}
                      <ChevronIcon open={expanded} />
                    </button>
                    {expanded ? (
                      <ul className="pb-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={closeMenus}
                              className="block px-4 py-2.5 text-sm text-blue/80"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <Link
              href="/in-stock-specials"
              onClick={closeMenus}
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-teal px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-teal/90 sm:hidden"
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
