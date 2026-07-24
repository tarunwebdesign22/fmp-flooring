import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import {
  ServiceBenefitsSection,
  ServiceHighlightsStrip,
  ServiceIntroSection,
} from "@/components/ServiceFlooringSections";
import ServicePageHero from "@/components/ServicePageHero";
import {
  ServiceApplicationsSection,
  ServiceCompareSection,
  ServiceInstallSection,
  ServiceTipsSection,
  ServiceTypesSection,
} from "@/components/ServicePageSections";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Laminate Flooring | Durable & Affordable Laminate Floors | FMP Flooring",
  description:
    "Stylish, durable, and cost-effective laminate flooring installation from FMP Flooring. Wood-look finishes, waterproof options, and professional installation for homes and commercial spaces.",
};

const heroContent = [
  {
    eyebrow: "Flooring Services",
    title: "Laminate Flooring",
    description:
      "Durable & affordable laminate floors with the look of natural hardwood or tile — installed by FMP Flooring professionals.",
    backgroundImage: "/images/01-1.jpg",
    buttonText: "Get a Free Quote",
    buttonHref: "/estimate",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Laminate Services" },
    ],
  },
];

const introContent = [
  {
    eyebrow: "Laminate Services",
    title: "Stylish, Durable & Cost-Effective Flooring",
    paragraphs: [
      "Laminate flooring is a popular and affordable flooring option that delivers the look of natural hardwood or tile with enhanced durability and easy maintenance. Designed for modern living, laminate floors are ideal for residential and light commercial spaces where style, performance, and value matter.",
      "At FMP Flooring, we offer high-quality laminate flooring installation with a wide range of colors, textures, and wood-look finishes to suit every space and budget.",
    ],
    image: "/images/features/Renwick Oak01.jpg",
    imageAlt: "Wood-look laminate flooring in a modern living space",
    buttonText: "Schedule Consultation",
    buttonHref: "/estimate",
  },
];

const benefitsContent = [
  {
    eyebrow: "Why Choose Us",
    title: "Why Choose Laminate Flooring?",
    items: [
      {
        icon: "durable",
        title: "Durable & Scratch-Resistant",
        description:
          "Engineered with a strong wear layer that resists scratches, dents, and everyday wear — ideal for high-traffic areas, pets, and active households.",
      },
      {
        icon: "affordable",
        title: "Affordable Flooring Option",
        description:
          "Get the appearance of hardwood or tile at a fraction of the cost, without sacrificing style or long-term performance.",
      },
      {
        icon: "maintenance",
        title: "Easy Maintenance",
        description:
          "Regular sweeping and occasional damp mopping keep laminate floors looking new with minimal effort.",
      },
      {
        icon: "moisture",
        title: "Moisture-Resistant Options",
        description:
          "Many modern laminate products offer improved moisture resistance for kitchens, hallways, and living areas.",
      },
      {
        icon: "styles",
        title: "Wide Range of Styles",
        description:
          "Choose realistic wood-look laminate, stone-look designs, and a variety of plank sizes and finishes.",
      },
    ],
  },
];

const highlightsContent = [
  {
    items: [
      { icon: "installation", title: "Installation Services Available" },
      { icon: "consultation", title: "Free Consultations" },
      { icon: "support", title: "Expert Support" },
      { icon: "selection", title: "Wide Selection of Flooring Types" },
    ],
  },
];

const typesContent = [
  {
    eyebrow: "Product Options",
    title: "Types of Laminate Flooring",
    items: [
      {
        title: "Wood-Look Laminate Flooring",
        description:
          "Designed to mimic natural hardwood with authentic textures and patterns — plus superior durability for everyday living.",
        image: "/images/features/67700 - 433RB Bloomington Oak-01.png",
      },
      {
        title: "Waterproof & Water-Resistant Laminate",
        description:
          "Advanced laminate options provide enhanced protection against moisture and spills in busy homes and light commercial spaces.",
        image: "/images/features/3.jpg",
      },
      {
        title: "Click-Lock Laminate Flooring",
        description:
          "Floating laminate floors with click-lock installation for a fast, secure, and glue-free professional finish.",
        image: "/images/features/6.jpg",
      },
    ],
  },
];

const tipsContent = [
  {
    eyebrow: "Care Guide",
    title: "Maintenance Tips",
    description:
      "Keep your laminate floors looking their best with a simple, consistent cleaning routine that protects the wear layer and finish.",
    backgroundImage: "/images/process-background.webp",
    tips: [
      "Sweep or vacuum daily to remove dirt and debris that can cause scratches.",
      "Use a soft-bristle broom or a vacuum with a hard-floor setting.",
      "Damp mop occasionally — avoid standing water and harsh cleaners.",
      "Place mats at entryways and felt pads under furniture legs.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Laminate Flooring Applications",
    description: "Laminate flooring is ideal for residential and light commercial spaces, including:",
    items: [
      "Living rooms and family rooms",
      "Bedrooms and hallways",
      "Home offices",
      "Dining rooms",
      "Retail spaces and light commercial areas",
      "Rental properties and remodels",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Laminate Flooring vs Other Flooring Types",
    featureLabel: "Feature",
    columns: ["Laminate Flooring", "Hardwood Flooring", "Vinyl Flooring"],
    rows: [
      { feature: "Cost", values: ["Low", "High", "Moderate"] },
      { feature: "Scratch Resistance", values: ["High", "Moderate", "High"] },
      { feature: "Moisture Resistance", values: ["Moderate", "Low", "High"] },
      { feature: "Maintenance", values: ["Easy", "Moderate", "Easy"] },
      { feature: "Natural Wood", values: [false, true, false] },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Laminate Flooring Installation",
    description:
      "Our experienced installers specialize in laminate flooring installation, ensuring proper subfloor preparation, precise plank placement, and a clean, professional finish.",
    servicesTitle: "Our Laminate Flooring Services Include:",
    services: [
      "Free in-home consultations",
      "Accurate project estimates",
      "Professional laminate floor installation",
      "Residential and commercial laminate solutions",
    ],
    image: "/images/features/2.jpg",
    imageAlt: "Professional laminate flooring installation",
  },
];

const testimonialsContent = [
  {
    eyebrow: "Testimonials",
    title: "What Our Customers Say",
    backgroundImage: "/images/testimonial-bg.jpg",
    items: [
      {
        quote:
          "The team at FMP Flooring LLC provided us with exceptional service from start to finish. They helped us choose the perfect flooring that suits our high-traffic environment. The laminate has held up tremendously well, and cleaning it is a breeze.",
        author: "Lewis Bennett",
      },
      {
        quote:
          "We chose FMP Flooring LLC for our new laminate flooring, and the results exceeded our expectations. The installation process was quick and hassle-free, and we received numerous compliments on the new look.",
        author: "Mike J",
      },
      {
        quote:
          "Working with FMP Flooring LLC was a great experience. Their attention to detail and commitment to quality was evident throughout the project. The new laminate flooring looks fantastic and is incredibly durable.",
        author: "Lisa R",
      },
    ],
  },
];

const faqContent = [
  {
    title: "Laminate Flooring FAQs",
    items: [
      {
        question: "What is laminate flooring made of?",
        answer:
          "Laminate flooring is made of multiple layers, including a high-density fiberboard core and a durable wear layer.",
      },
      {
        question: "Is laminate flooring waterproof?",
        answer:
          "Standard laminate is water-resistant, and newer waterproof laminate options provide additional protection.",
      },
      {
        question: "Is laminate flooring good for pets?",
        answer:
          "Yes. Laminate floors are scratch-resistant and easy to clean, making them ideal for pet-friendly homes.",
      },
      {
        question: "How long does laminate flooring last?",
        answer:
          "With proper care, laminate flooring can last 15–25 years or longer.",
      },
    ],
  },
];

const ctaContent = [
  {
    headlineWhite: "Get a Free",
    headlineTeal: "Laminate Flooring Quote",
    description:
      "Upgrade your space with stylish, durable laminate flooring. Contact FMP Flooring today for a free estimate and expert installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/cta-bg.jpg",
  },
];

export default function LaminatePage() {
  return (
    <main className="flex flex-1 flex-col">
      <ServicePageHero content={heroContent} />
      <ServiceIntroSection content={introContent} />
      <ServiceBenefitsSection content={benefitsContent} />
      <ServiceHighlightsStrip content={highlightsContent} />
      <ServiceTypesSection content={typesContent} />
      <ServiceTipsSection content={tipsContent} />
      <ServiceApplicationsSection content={applicationsContent} />
      <ServiceCompareSection content={compareContent} />
      <ServiceInstallSection content={installContent} />
      <TestimonialsSection content={testimonialsContent} />
      <FaqSection content={faqContent} />
      <CtaSection content={ctaContent} />
    </main>
  );
}
