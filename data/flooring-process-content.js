const FLOORING_PROCESS_STEPS = [
  {
    step: "01",
    title: "Old Flooring & Haul Away",
    description:
      "We remove your existing carpet, tile, or other flooring and haul it away so the space is clear and ready for installation.",
    image: "/images/process-feature/01-old-flooring-haul-away.jpg",
    imageAlt: "Crew removing old carpet and hauling flooring debris away",
  },
  {
    step: "02",
    title: "Subfloor Preparation",
    description:
      "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your new flooring.",
    image: "/images/process-feature/02-subfloor-preparation.jpg",
    imageAlt: "Technician leveling and preparing the subfloor",
  },
  {
    step: "03",
    title: "Professional Flooring Installation",
    description:
      "Our experienced installers precisely lay your new flooring for a clean, seamless, and professional finish.",
    image: "/images/process-feature/03-flooring-installation.jpg",
    imageAlt: "Professional installing new wood-look flooring planks",
  },
  {
    step: "04",
    title: "Trim, Fixtures & Final Touches",
    description:
      "We complete the installation with trim and finishing details, then reinstall removed fixtures and ensure everything is clean, polished, and ready to enjoy.",
    image: "/images/process-feature/04-trim-final-touches.jpg",
    imageAlt: "Installer fitting baseboard trim on newly installed flooring",
  },
];

export function createFlooringProcessContent(title, description) {
  return [
    {
      title,
      description,
      steps: FLOORING_PROCESS_STEPS,
    },
  ];
}
