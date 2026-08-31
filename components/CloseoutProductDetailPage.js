"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const STOCK_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1RlUhMkR4c4v0CxALcL2McMDJ0jS-ov1cOjfEc8_wX0w/export?format=csv&gid=1631855389";

function normStockKey(value = "") {
  return value.toString().trim().toLowerCase().replace(/\s+/g, " ");
}

function parseStockCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(field);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    if (row.some((cell) => cell.trim())) rows.push(row);
  }

  return rows;
}

function buildStockMap(rows) {
  const map = {};
  if (!rows.length) return map;

  const header = rows[0].map(normStockKey);
  let productIndex = header.indexOf("product");
  if (productIndex === -1) productIndex = 0;

  let quantityIndex = -1;
  for (let i = 0; i < header.length; i += 1) {
    if (header[i].includes("total sf") || header[i] === "total_sf" || header[i] === "stock") {
      quantityIndex = i;
      break;
    }
  }
  if (quantityIndex === -1) quantityIndex = header.length - 1;

  for (let i = 1; i < rows.length; i += 1) {
    const currentRow = rows[i];
    if (!currentRow?.[productIndex]) continue;

    const name = normStockKey(currentRow[productIndex]);
    if (!name) continue;

    const raw = (currentRow[quantityIndex] || "").toString().trim().replace(/,/g, "");
    if (!raw) continue;

    const quantity = parseFloat(raw);
    if (Number.isNaN(quantity)) continue;

    map[name] = quantity;
  }

  return map;
}

function useStockQuantity(stockName) {
  const [quantity, setQuantity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const refresh = async () => {
      try {
        const response = await fetch(`${STOCK_SHEET_URL}&t=${Date.now()}`, {
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Stock fetch failed");

        const text = await response.text();
        if (/<html/i.test(text)) throw new Error("Invalid stock response");

        const map = buildStockMap(parseStockCSV(text));
        if (!active) return;
        setQuantity(map[normStockKey(stockName)] ?? null);
      } catch {
        if (active) setQuantity(null);
      } finally {
        if (active) setLoading(false);
      }
    };

    refresh();
    return () => {
      active = false;
    };
  }, [stockName]);

  return { quantity, loading };
}

function GiftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 12v8H4v-8h16zm-2-6H6a2 2 0 0 0-2 2v2h16V8a2 2 0 0 0-2-2zm-8 0V4h2v2h-2zm4 0V4h2v2h-2z" />
    </svg>
  );
}

function ProductEstimateForm({ productName }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: "",
    email: "",
    address: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(34,30,83,0.12)]">
      <div className="h-1.5 w-full bg-teal" aria-hidden="true" />

      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-blue sm:text-3xl">Start Your Flooring Journey Here!</h2>
        <span className="mt-2 block h-0.5 w-12 bg-teal" aria-hidden="true" />
        <p className="mt-3 text-sm text-blue/65">
          Let us know your preferences for {productName} and we&apos;ll get back to you.
        </p>

        {submitted ? (
          <p className="mt-8 rounded-lg bg-greylight px-4 py-6 text-center text-sm font-medium text-blue">
            Thank you! We&apos;ll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 grid gap-3.5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1 block text-xs font-semibold text-blue/70">Name *</span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-grey bg-white px-3 py-3 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
              />
            </label>

            <label className="block sm:col-span-1">
              <span className="mb-1 block text-xs font-semibold text-blue/70">Phone Number *</span>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-grey bg-white px-3 py-3 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
              />
            </label>

            <label className="block sm:col-span-1">
              <span className="mb-1 block text-xs font-semibold text-blue/70">Quantity (Per Sqft.) *</span>
              <input
                type="text"
                name="quantity"
                required
                value={formData.quantity}
                onChange={handleChange}
                className="w-full rounded-lg border border-grey bg-white px-3 py-3 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
              />
            </label>

            <label className="block sm:col-span-1">
              <span className="mb-1 block text-xs font-semibold text-blue/70">Email *</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-grey bg-white px-3 py-3 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-blue/70">Address *</span>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-lg border border-grey bg-white px-3 py-3 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-blue/70">Comment or Message</span>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-y rounded-lg border border-grey bg-white px-3 py-3 text-sm text-blue outline-none transition-colors placeholder:text-blue/40 focus:border-teal"
              />
            </label>

            <label className="flex items-start gap-2 sm:col-span-2">
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 shrink-0 accent-teal"
              />
              <span className="text-xs leading-5 text-blue/65">
                I agree to receive communications by text message regarding order updates, shipping
                notifications, promotional offers, and account notifications from FMP Flooring. You may opt
                out by replying STOP or ask for more information by replying HELP.
              </span>
            </label>

            <button
              type="submit"
              className="sm:col-span-2 mt-1 flex w-full items-center justify-center gap-2 rounded bg-teal px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
            >
              Submit
              <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function CloseoutProductDetailPage({ product, testimonialsContent, ctaContent }) {
  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);
  const { quantity, loading: stockLoading } = useStockQuantity(product.stockName || product.name);

  const stockLabel = stockLoading
    ? "Checking stock…"
    : quantity === null
      ? null
      : quantity <= 0
        ? "Out of Stock"
        : `In Stock · ${Math.round(quantity).toLocaleString()} SF`;

  return (
    <>
      <section className="bg-greylight py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-teal">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/in-stock-specials" className="transition-colors hover:text-teal">
                  In Stock Specials
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-blue">{product.name}</li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-grey/70 bg-white shadow-[0_8px_32px_rgba(34,30,83,0.08)]">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                {stockLabel ? (
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue shadow-sm">
                    <span
                      className={`mr-1.5 inline-block h-2 w-2 rounded-full ${
                        stockLoading
                          ? "bg-blue/30"
                          : quantity <= 0
                            ? "bg-[#e24b4b]"
                            : quantity <= 200
                              ? "bg-[#fdbf3e]"
                              : "bg-teal"
                      }`}
                      aria-hidden="true"
                    />
                    {stockLabel}
                  </div>
                ) : null}
              </div>

              {product.gallery?.length > 1 ? (
                <div className="mt-3 flex gap-2">
                  {product.gallery.map((src) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(src)}
                      className={`relative h-16 w-20 overflow-hidden rounded-lg border-2 transition-colors sm:h-20 sm:w-24 ${
                        activeImage === src ? "border-teal" : "border-grey/70 hover:border-teal/50"
                      }`}
                      aria-label={`View ${product.name} image`}
                    >
                      <Image src={src} alt="" fill className="object-cover" sizes="96px" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">In Stock Special</p>
              <h1 className="mt-2 text-4xl font-bold text-blue sm:text-5xl">{product.name}</h1>

              <div className="mt-6 overflow-hidden rounded-xl border border-grey/70 bg-white shadow-sm">
                <div className="grid grid-cols-2 divide-x divide-grey/60">
                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-teal">Material</p>
                    <p className="mt-1 text-2xl font-extrabold text-blue">{product.priceLabel}</p>
                  </div>
                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-teal">
                      Installation Services Available
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#fdbf3e] via-[#ffcc5c] to-[#fdbf3e] px-4 py-2.5">
                  <GiftIcon />
                  <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-blue">
                    FREE Quarter Round
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-grey/70 bg-white p-5 sm:p-6">
                <h2 className="text-lg font-bold text-blue">Product info</h2>
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.productInfo.map((item) => (
                    <div key={item.label} className="rounded-lg bg-greylight px-4 py-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wide text-blue/50">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-blue">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#estimate"
                  className="inline-flex items-center justify-center rounded bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
                >
                  Get a Quote
                </a>
                <Link
                  href="/in-stock-specials"
                  className="inline-flex items-center justify-center rounded bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal hover:text-white"
                >
                  Back to Specials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {testimonialsContent ? <TestimonialsSection content={testimonialsContent} /> : null}

      <section id="estimate" className="bg-white py-14 sm:py-16 lg:py-[70px]">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
          <ProductEstimateForm productName={product.name} />
        </div>
      </section>

      <FaqSection content={[{ title: "FAQS", items: product.faq }]} />

      {ctaContent ? (
        <section className="relative isolate overflow-hidden">
          <Image
            src={ctaContent[0].backgroundImage}
            alt=""
            fill
            quality={90}
            className="object-cover object-bottom"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-10">
            <div>
              <h2 className="text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                {ctaContent[0].headlineWhite}{" "}
                <span className="text-teal">{ctaContent[0].headlineTeal}</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/90 sm:text-[15px]">
                {ctaContent[0].description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={ctaContent[0].phoneHref}
                className="inline-flex items-center justify-center rounded bg-teal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue"
              >
                {ctaContent[0].phone}
              </a>
              <Link
                href={ctaContent[0].buttonHref}
                className="inline-flex items-center justify-center rounded bg-[#fdbf3e] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-blue transition-colors hover:bg-white"
              >
                {ctaContent[0].buttonText}
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
