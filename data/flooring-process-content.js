const FLOORING_PROCESS_STEPS = [
  {
    step: "01",
    title: "Furniture & Fixture Removal",
    description:
      "We carefully move and protect your furniture and remove toilets or other fixtures when needed to prepare the space for installation.",
    image: "/images/process-feature/01-furniture-moving.jpg",
    imageAlt: "Crew moving and protecting furniture before flooring work",
  },
  {
    step: "02",
    title: "Subfloor Preparation",
    description:
      "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your new flooring.",
    image: "/images/process-feature/02-floor-preparation.jpg",
    imageAlt: "Technician preparing and leveling the subfloor",
  },
  {
    step: "03",
    title: "Professional Flooring Installation",
    description:
      "Our experienced installers precisely lay your new flooring for a clean, seamless, and professional finish.",
    image: "/images/process-feature/03-installation.jpg",
    imageAlt: "Professional installing new flooring",
  },
  {
    step: "04",
    title: "Trim, Fixtures & Final Touches",
    description:
      "We complete the installation with trim and finishing details, then reinstall removed fixtures and ensure everything is clean, polished, and ready to enjoy.",
    image: "/images/process-feature/how-to-replace-bathroom-tiles.jpg",
    imageAlt: "Installer completing trim and final flooring touches",
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
