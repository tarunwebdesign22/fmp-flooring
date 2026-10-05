import Image from "next/image";

const DEFAULT_AREAS = [
  { name: "Mocksville", zips: ["27028"] },
  { name: "Lexington", zips: ["27292", "27295"] },
  { name: "Statesville", zips: ["28625", "28677"] },
  { name: "Yadkinville", zips: ["27055"] },
  { name: "Winston-Salem", zips: ["27101", "27103", "27104", "27105", "27106", "27107", "27127"] },
  { name: "Clemmons", zips: ["27012"] },
  { name: "Kernersville", zips: ["27284"] },
  { name: "High Point", zips: ["27260", "27262", "27263", "27265"] },
  { name: "Greensboro", zips: ["27401", "27403", "27405", "27406", "27407", "27408", "27409", "27410", "27455"] },
  { name: "Mooresville", zips: ["28115", "28117"] },
  { name: "Troutman", zips: ["28166"] },
  { name: "Denver", zips: ["28037"] },
  { name: "Lincolnton", zips: ["28092", "28093"] },
  { name: "Gastonia", zips: ["28052", "28054", "28056"] },
  { name: "Belmont", zips: ["28012"] },
  { name: "Mount Holly", zips: ["28120"] },
  { name: "Dallas", zips: ["28034"] },
  { name: "Concord", zips: ["28025", "28027"] },
  { name: "Harrisburg", zips: ["28075"] },
  {
    name: "Charlotte",
    zips: [
      "28202", "28203", "28204", "28205", "28206", "28207", "28208", "28209",
      "28210", "28211", "28212", "28213", "28214", "28215", "28216", "28217",
      "28226", "28227", "28262", "28269", "28270", "28273", "28277", "28278",
    ],
  },
  { name: "Matthews", zips: ["28104", "28105"] },
  { name: "Pineville", zips: ["28134"] },
  { name: "Indian Trail", zips: ["28079"] },
  { name: "Waxhaw", zips: ["28173"] },
  { name: "Fort Mill", zips: ["29707", "29708", "29715"] },
  { name: "Tega Cay", zips: ["29708"] },
  { name: "Rock Hill", zips: ["29730", "29732"] },
  { name: "Lancaster", zips: ["29720"] },
  { name: "Albemarle", zips: ["28001"] },
  { name: "Locust", zips: ["28097"] },
  { name: "Oakboro", zips: ["28129"] },
  { name: "Denton", zips: ["27239"] },
  { name: "Thomasville", zips: ["27360"] },
  { name: "Archdale", zips: ["27263"] },
  { name: "Trinity", zips: ["27370"] },
  { name: "Asheboro", zips: ["27203", "27205"] },
];

function normalizeArea(area) {
  if (typeof area === "string") return { name: area, zips: [] };
  return { name: area.name, zips: area.zips || [] };
}

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 shrink-0 text-teal"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function AreaItem({ area }) {
  const { name, zips } = normalizeArea(area);
  const zipLabel = zips.join(", ");
  const hasZips = zips.length > 0;

  return (
    <li className="group relative">
      <button
        type="button"
        className="flex w-full items-start gap-2 text-left text-[15px] leading-relaxed text-blue transition-colors hover:text-teal focus-visible:text-teal focus-visible:outline-none sm:text-base"
        aria-describedby={hasZips ? `zip-${name.replace(/\s+/g, "-").toLowerCase()}` : undefined}
      >
        <LocationIcon />
        <span className="border-b border-transparent group-hover:border-teal/40 group-focus-visible:border-teal/40">
          {name}
        </span>
      </button>

      {hasZips ? (
        <div
          id={`zip-${name.replace(/\s+/g, "-").toLowerCase()}`}
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-0 z-30 mb-2 w-max max-w-[220px] scale-95 rounded-lg bg-blue px-3 py-2.5 text-left opacity-0 shadow-[0_10px_28px_rgba(34,30,83,0.28)] transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 sm:max-w-[260px]"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-teal">
            ZIP Code{zips.length > 1 ? "s" : ""}
          </p>
          <p className="mt-1 text-[13px] font-semibold leading-5 text-white">
            {zipLabel}
          </p>
          <span
            className="absolute top-full left-4 h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-blue"
            aria-hidden="true"
          />
        </div>
      ) : null}
    </li>
  );
}

export default function AreasWeServeSection({
  eyebrow = "FLOORING CONTRACTOR SERVICE AREAS",
  title = "Serving North Carolina & South Carolina",
  description = "FMP Flooring provides residential, commercial, and professional flooring installation services across North Carolina and South Carolina. Our team works with homeowners, businesses, contractors, government facilities, and other organizations looking for dependable flooring solutions.",
  areas = DEFAULT_AREAS,
  backgroundImage = null,
}) {
  if (!areas?.length) return null;

  const normalized = areas.map(normalizeArea);
  const perColumn = Math.ceil(normalized.length / 4);
  const columnLists = [0, 1, 2, 3].map((col) =>
    normalized.slice(col * perColumn, col * perColumn + perColumn),
  );

  return (
    <section className="relative isolate bg-greylight">
      {backgroundImage ? (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
      ) : null}

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
            {title}
          </h2>
          <span
            className="mx-auto mt-3 block h-1 w-16 bg-teal"
            aria-hidden="true"
          />
          {description ? (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-blue/70 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 sm:mt-10 sm:gap-x-12 md:grid-cols-4 lg:mt-12 lg:gap-x-16">
          {columnLists.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-3 sm:space-y-3.5">
              {column.map((area) => (
                <AreaItem key={area.name} area={area} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export { DEFAULT_AREAS as areasWeServeItems };
