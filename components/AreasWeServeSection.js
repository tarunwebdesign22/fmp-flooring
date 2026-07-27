const DEFAULT_AREAS = [
  "Ahwatukee",
  "Anthem",
  "Apache Junction",
  "Arizona City",
  "Arrowhead",
  "Avondale",
  "Black Canyon City",
  "Buckeye",
  "Casa Grande",
  "Cave Creek",
  "Chandler",
  "Coolidge",
  "Florence",
  "Fountain Hills",
  "Gilbert",
  "Glendale",
  "Gold Canyon",
  "Goodyear",
  "Litchfield Park",
  "Maricopa County",
  "Mesa",
  "New River",
  "Paradise Valley",
  "Peoria",
  "Phoenix",
  "Queen Creek",
  "Rio Verde",
  "San Tan Valley",
  "Scottsdale",
  "Sun City",
  "Sun Lakes",
  "Surprise",
  "Tempe",
  "Tolleson",
  "Tonopah",
  "Waddell",
];

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

export default function AreasWeServeSection({
  title = "Areas We Serve",
  areas = DEFAULT_AREAS,
}) {
  if (!areas?.length) return null;

  const perColumn = Math.ceil(areas.length / 4);
  const columnLists = [0, 1, 2, 3].map((col) =>
    areas.slice(col * perColumn, col * perColumn + perColumn)
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <h2 className="text-center text-3xl font-bold text-blue sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-2 sm:mt-14 sm:gap-x-12 md:grid-cols-4 lg:mt-16 lg:gap-x-16">
          {columnLists.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-3 sm:space-y-3.5">
              {column.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2 text-[15px] leading-relaxed text-blue sm:text-base"
                >
                  <LocationIcon />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export { DEFAULT_AREAS as areasWeServeItems };
