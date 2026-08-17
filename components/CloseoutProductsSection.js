"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const STOCK_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1RlUhMkR4c4v0CxALcL2McMDJ0jS-ov1cOjfEc8_wX0w/export?format=csv&gid=1631855389";
const STOCK_REFRESH_MS = 30000;

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
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
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
    if (
      header[i].includes("total sf") ||
      header[i] === "total_sf" ||
      header[i] === "stock"
    ) {
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

function useStockMap() {
  const [stockMap, setStockMap] = useState({});
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

        if (!active) return;
        setStockMap(buildStockMap(parseStockCSV(text)));
      } catch {
        if (active) setStockMap({});
      } finally {
        if (active) setLoading(false);
      }
    };

    refresh();
    const intervalId = window.setInterval(refresh, STOCK_REFRESH_MS);
    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  return { stockMap, loading };
}

function getStockStatus(product, stockMap, loading) {
  const key = normStockKey(product.stockName || product.name);
  const quantity = stockMap[key];

  if (loading) {
    return { label: "Checking…", tone: "loading", visible: true };
  }

  if (quantity === undefined) {
    return { label: "", tone: "hidden", visible: false };
  }

  if (quantity <= 0) {
    return { label: "Out of Stock", tone: "out", visible: true };
  }

  const rounded = Math.round(quantity);
  return {
    label: `In Stock · ${rounded.toLocaleString()} SF`,
    tone: rounded <= 200 ? "low" : "in",
    visible: true,
  };
}

function StockBadge({ product, stockMap, loading }) {
  const status = getStockStatus(product, stockMap, loading);
  if (!status.visible) return null;

  const dotClass =
    status.tone === "out"
      ? "bg-red-500"
      : status.tone === "low"
        ? "bg-[#fdbf3e]"
        : "bg-teal";

  return (
    <span
      className={`absolute bottom-3 left-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-blue shadow-[0_2px_10px_rgba(34,30,83,0.12)] ${
        status.tone === "loading" ? "opacity-75" : ""
      } ${status.tone === "out" ? "bg-blue text-white" : ""}`}
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${dotClass}`} aria-hidden="true" />
      <span className="truncate">{status.label}</span>
    </span>
  );
}

function GiftIcon({ className = "", size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13M3 12h18" />
      <path d="M12 8c0-2.5-1.5-4-3.5-4S5 6.2 5 8h7zM12 8c0-2.5 1.5-4 3.5-4S19 6.2 19 8h-7z" />
    </svg>
  );
}

function formatPriceParts(priceLabel = "") {
  const [amount = priceLabel, unit = ""] = priceLabel.split("/");
  return { amount: amount.trim(), unit: unit ? `/${unit.trim()}` : "" };
}

function ProductPricingPanel({ product, size = "card" }) {
  const isLarge = size === "modal";
  const material = formatPriceParts(product.priceLabel);
  const installed = product.installPriceLabel
    ? formatPriceParts(product.installPriceLabel)
    : null;

  return (
    <div
      className={`overflow-hidden rounded-lg border border-grey/80 bg-white shadow-[0_2px_10px_rgba(34,30,83,0.05)] ${
        isLarge ? "mt-6" : "mt-3"
      }`}
    >
      <div className="grid grid-cols-2 divide-x divide-[#fdbf3e]/35 bg-greylight/60">
        <div className={isLarge ? "px-4 py-3" : "px-2.5 py-2"}>
          <p
            className={`font-bold uppercase tracking-[0.12em] text-blue/40 ${
              isLarge ? "text-[10px]" : "text-[8px]"
            }`}
          >
            Material
          </p>
          <p
            className={`mt-0.5 font-extrabold leading-none text-blue ${
              isLarge ? "text-2xl" : "text-lg"
            }`}
          >
            {material.amount}
            {material.unit ? (
              <span
                className={`ml-0.5 font-semibold italic text-blue/55 ${
                  isLarge ? "text-sm" : "text-[11px]"
                }`}
              >
                {material.unit}
              </span>
            ) : null}
          </p>
        </div>

        <div
          className={`flex items-center justify-center text-center ${
            isLarge ? "px-3 py-3" : "px-2 py-2"
          }`}
        >
          {installed ? (
            <div>
              <p
                className={`font-bold uppercase tracking-[0.1em] text-teal ${
                  isLarge ? "text-[10px]" : "text-[8px]"
                }`}
              >
                Material &amp; Install
              </p>
              <p
                className={`mt-0.5 font-extrabold leading-none text-blue ${
                  isLarge ? "text-xl" : "text-base"
                }`}
              >
                {installed.amount}
                {installed.unit ? (
                  <span
                    className={`ml-0.5 font-semibold italic text-blue/55 ${
                      isLarge ? "text-xs" : "text-[10px]"
                    }`}
                  >
                    {installed.unit}
                  </span>
                ) : null}
              </p>
            </div>
          ) : (
            <p
              className={`font-bold uppercase leading-tight text-teal ${
                isLarge ? "text-[11px] tracking-[0.08em]" : "text-[8px] tracking-[0.06em]"
              }`}
            >
              Installation
              <br />
              Services
              <br />
              Available
            </p>
          )}
        </div>
      </div>

      <div
        className={`flex items-center justify-center gap-2 bg-gradient-to-r from-[#fdbf3e] via-[#ffcc5c] to-[#fdbf3e] ${
          isLarge ? "px-4 py-2.5" : "px-2.5 py-1.5"
        }`}
      >
        <GiftIcon size={isLarge ? 14 : 11} className="shrink-0 text-blue" />
        <p
          className={`font-extrabold uppercase tracking-[0.08em] text-blue ${
            isLarge ? "text-xs" : "text-[9px]"
          }`}
        >
          FREE Quarter Round
        </p>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M7 17L17 7M17 7H9M17 7v8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ProductCard({ product, onQuickView, stockMap, stockLoading }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-grey/70 bg-white shadow-[0_6px_24px_rgba(34,30,83,0.06)] transition-shadow hover:shadow-[0_12px_36px_rgba(34,30,83,0.12)]">
      <div className="relative aspect-[4/3] bg-greylight">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.clearance ? (
            <span className="rounded-sm bg-[#e24b4b] px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white">
              Clearance
            </span>
          ) : null}
          {product.isNew ? (
            <span className="rounded-sm bg-teal px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white">
              New
            </span>
          ) : null}
        </div>
        <StockBadge product={product} stockMap={stockMap} loading={stockLoading} />
        {product.detailHref ? (
          <Link
            href={product.detailHref}
            aria-label={`View details for ${product.name}`}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal text-white shadow-sm transition-colors hover:bg-blue"
          >
            <ArrowIcon />
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            aria-label={`View details for ${product.name}`}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal text-white shadow-sm transition-colors hover:bg-blue"
          >
            <ArrowIcon />
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5">
        <h3 className="text-lg font-bold text-blue">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-blue/60">{product.specs}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-greylight px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <ProductPricingPanel product={product} />
      </div>
    </article>
  );
}

function CollectionHeader({ collection, count }) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      {collection.eyebrow ? (
        <p
          className={`text-sm font-bold uppercase tracking-[0.12em] ${
            collection.urgent ? "text-[#e24b4b]" : "text-teal"
          }`}
        >
          {collection.eyebrow}
        </p>
      ) : null}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <h2 className="text-3xl font-bold text-blue sm:text-4xl">{collection.title}</h2>
        {collection.badge ? (
          <span className="rounded-sm bg-teal px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
            {collection.badge}
          </span>
        ) : null}
      </div>
      <span
        className={`mx-auto mt-3 block h-1 w-16 ${collection.urgent ? "bg-[#e24b4b]" : "bg-teal"}`}
        aria-hidden="true"
      />
      {collection.description ? (
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-blue/70">
          {collection.description}
        </p>
      ) : null}
      <p className="mt-2 text-sm font-semibold text-blue/45">
        {count} {count === 1 ? "variant" : "variants"}
      </p>
    </div>
  );
}

function ProductGrid({ products, onQuickView, stockMap, stockLoading }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <li key={product.id} className="h-full">
          <ProductCard
            product={product}
            onQuickView={onQuickView}
            stockMap={stockMap}
            stockLoading={stockLoading}
          />
        </li>
      ))}
    </ul>
  );
}

function QuickViewModal({ product, onClose, stockMap, stockLoading }) {
  useEffect(() => {
    if (!product) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-blue/70 backdrop-blur-[2px]"
        aria-label="Close product details"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        className="relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-2xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-2"
      >
        <div className="relative min-h-[240px] bg-greylight lg:min-h-[420px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <StockBadge product={product} stockMap={stockMap} loading={stockLoading} />
        </div>
        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal">In Stock Special</p>
              <h3 id="quick-view-title" className="mt-2 text-2xl font-bold text-blue sm:text-3xl">
                {product.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-grey text-blue transition-colors hover:border-teal hover:text-teal"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          <span className="mt-3 block h-1 w-12 bg-teal" aria-hidden="true" />
          <p className="mt-4 text-sm leading-6 text-blue/70">{product.specs}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-greylight px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <ProductPricingPanel product={product} size="modal" />
          <p className="mt-3 text-sm text-blue/60">Installation services available</p>

          <Link
            href="/estimate"
            className="mt-6 inline-flex items-center justify-center rounded bg-teal px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CloseoutProductsSection({ collections, products }) {
  const [activeId, setActiveId] = useState("all");
  const [selected, setSelected] = useState(null);
  const { stockMap, loading: stockLoading } = useStockMap();

  const filters = useMemo(
    () => [{ id: "all", label: "All Specials" }, ...collections.map((c) => ({ id: c.id, label: c.filterLabel || c.title }))],
    [collections]
  );

  const productsByCollection = useMemo(() => {
    const map = {};
    collections.forEach((collection) => {
      map[collection.id] = products.filter((product) => product.collections.includes(collection.id));
    });
    return map;
  }, [collections, products]);

  const visibleCollections =
    activeId === "all" ? collections : collections.filter((collection) => collection.id === activeId);

  return (
    <section id="specials" className="scroll-mt-28 bg-white py-14 sm:py-16 lg:py-[70px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 overflow-x-auto pb-1">
          <div className="flex min-w-max items-center justify-center gap-2 sm:flex-wrap sm:min-w-0">
            {filters.map((filter) => {
              const isActive = filter.id === activeId;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveId(filter.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors sm:text-[13px] ${
                    isActive
                      ? "bg-teal text-white"
                      : "bg-greylight text-blue hover:bg-grey"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20">
          {visibleCollections.map((collection) => {
            const items = productsByCollection[collection.id] || [];
            if (!items.length) return null;
            return (
              <div
                key={collection.id}
                className={collection.urgent ? "rounded-2xl bg-[#fff6f6] px-4 py-10 sm:px-8 sm:py-12" : ""}
              >
                <CollectionHeader collection={collection} count={items.length} />
                <ProductGrid
                  products={items}
                  onQuickView={setSelected}
                  stockMap={stockMap}
                  stockLoading={stockLoading}
                />
              </div>
            );
          })}
        </div>
      </div>

      <QuickViewModal
        product={selected}
        onClose={() => setSelected(null)}
        stockMap={stockMap}
        stockLoading={stockLoading}
      />
    </section>
  );
}
