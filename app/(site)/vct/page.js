import CommercialProjectsSection from "@/components/CommercialProjectsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import FederalMarquee from "@/components/FederalMarquee";
import FinanceBannerSection from "@/components/FinanceBannerSection";
import MailingListSection from "@/components/MailingListSection";
import OffersSliderSection from "@/components/OffersSliderSection";
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
} from "@/components/ServicePageSections";
import HowWeManageProjectsSection from "@/components/homev2/HowWeManageProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { createFlooringProcessContent } from "@/data/flooring-process-content";

export const metadata = {
  title: "VCT Flooring & Installation | Commercial VCT Flooring",
  description:
    "Explore durable VCT flooring for commercial and institutional spaces. FMP Flooring provides vinyl composition tile, professional VCT installation, and flooring solutions.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vinyl Composition Tile" },
    ],
    slides: [
      {
        id: "vct-service",
        backgroundImage: "/images/vct-mainbanner.webp",
        financing: {
          eyebrow: "Vinyl Composition Tile",
          eyebrowAsBadge: true,
          titleBefore: "We Offer High-Quality ",
          titleHighlightValue: "VCT Flooring",
          titleAfter: "",
          description:
            "Upgrade your facility with durable, cost-effective vinyl composition tile flooring designed for schools, hospitals, offices, and commercial spaces.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "vct-financing",
        backgroundImage: "/images/finance-banner-001.webp",
        financing: {
          eyebrow: "Flexible Payment Options",
          title: "Financing Available",
          description:
            "",
          benefits: [
            
          ],
          buttonText: "Explore Financing Options",
          buttonHref: "/financing",
          footnote: "",
        },
      },
    ],
    form: {
      title: "Free In-Home Estimate",
      description: "Fill out the form below and we'll get back to you shortly.",
      buttonText: "Get My Free Estimate",
      defaultService: "VCT",
      services: [
        "Luxury Vinyl Plank",
        "Broadloom Carpet",
        "Carpet Tile",
        "Ceramic Flooring",
        "Rubber",
        "Hardwood",
        "Laminate",
        "VCT",
      ],
    },
  },
];

const introContent = [
  {
    eyebrow: "Vinyl Composition Tile",
    title: "VCT Flooring – Durable, Cost-Effective & Commercial-Grade Flooring",
    paragraphs: [
      "VCT flooring (Vinyl Composition Tile) is a highly durable, affordable, and proven flooring solution widely used in commercial, institutional, and industrial spaces. Known for its strength, easy maintenance, and long lifespan, vinyl composition tile flooring is ideal for schools, hospitals, offices, retail stores, and high-traffic environments.",
      "At FMP Flooring, we specialize in commercial VCT flooring installation and provide high-quality VCT tiles designed for performance, durability, and long-term value.",
    ],
    images: [
      {
        src: "/images/vct-gallery/vct-gallery-1.webp",
        alt: "Vinyl composition tile flooring in a commercial dining space",
      },
      {
        src: "/images/vct-gallery/vct-gallery-2.webp",
        alt: "VCT flooring in a commercial corridor",
      },
      {
        src: "/images/vct-gallery/vct-gallery-3.webp",
        alt: "Professional VCT flooring installation",
      },
      {
        src: "/images/vct-gallery/vct-gallery-4.webp",
        alt: "Installed vinyl composition tile flooring",
      }
    ],
    // offer: {
    //   topLabel: "Huge Savings",
    //   value: "65",
    //   suffix: "%",
    //   offLabel: "Off",
    //   bottomLabel: "Special Offer!",
    // },
    buttonText: "Schedule Consultation",
    buttonHref: "/estimate",
  },
];

// const mailingListContent = [
//   {
//     lineOne: "Join Our Mailing List Today &",
//     highlight: "GET $99 OFF",
//     lineTwo: "Your Next Install!",
//     placeholder: "Email*",
//     buttonText: "Subscribe",
//     successMessage: "Thanks for subscribing! Check your inbox soon.",
//   },
// ];

const simpleProcessContent = createFlooringProcessContent(
  "Get Brand New VCT Flooring in 4 Simple Steps",
  "A clear, step-by-step process so your vinyl composition tile project stays organized, efficient, and stress-free from start to finish.",
);

const financeBannerContent = [
  {
    title: "Financing Available",
    description: "Convenient monthly payments for your budget¹",
    buttonText: "View Financing Options",
    buttonHref: "/financing",
    backgroundImage: "/images/finance-banner-One.webp",
    footnote: "¹With approved credit.",
    footnoteLinkText: "Details",
    footnoteHref: "/financing",
  },
];

const benefitsContent = [
  {
    eyebrow: "Why Choose Us",
    title: "Why Choose VCT Flooring?",
    backgroundImage: "/images/vct-gallery/vct-bg-image.webp",
    items: [
      {
        icon: "durable",
        title: "Heavy-Duty & Long-Lasting",
        description:
          "VCT flooring is engineered to handle heavy foot traffic, rolling loads, and daily wear, making it one of the most reliable commercial flooring options available.",
      },
      {
        icon: "affordable",
        title: "Cost-Effective Flooring Solution",
        description:
          "Vinyl composition tile is one of the most budget-friendly commercial flooring materials, offering excellent durability at a lower upfront cost compared to other hard surface floors.",
      },
      {
        icon: "maintenance",
        title: "Easy Maintenance & Repair",
        description:
          "VCT flooring is easy to maintain with routine cleaning and periodic polishing. Individual VCT tiles can be replaced without removing the entire floor.",
      },
      {
        icon: "moisture",
        title: "Slip-Resistant & Safe",
        description:
          "When properly finished, VCT floors provide good slip resistance, making them suitable for schools, healthcare facilities, and commercial buildings.",
      },
      {
        icon: "styles",
        title: "Wide Range of Colors & Patterns",
        description:
          "VCT tiles are available in many colors and patterns, allowing for custom layouts, borders, and design accents.",
      },
    ],
  },
];

const highlightsContent = [
  {
    items: [
      { icon: "installation", lines: ["Installation Services", "Available"] },
      { icon: "consultation", lines: ["Free", "Consultations"] },
      { icon: "support", lines: ["Expert", "Support"] },
      { icon: "selection", lines: ["Wide Selection of", "Flooring Types"] },
    ],
  },
];

const tipsContent = [
  {
    eyebrow: "Care Guide",
    title: "VCT Flooring Maintenance",
    description:
      "To maximize the lifespan of vinyl composition tile flooring, regular maintenance is recommended.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      "Routine sweeping and damp mopping",
      "Periodic stripping and waxing",
      "Prompt spill cleanup",
      "Tile replacement as needed",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "VCT Flooring Applications",
    description: "VCT flooring is ideal for:",
    items: [
      "Commercial office buildings",
      "Schools and educational facilities",
      "Hospitals and healthcare centers",
      "Retail stores and supermarkets",
      "Government buildings",
      "Industrial and institutional facilities",
      "Back-of-house commercial spaces",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "VCT Flooring vs Other Commercial Flooring",
    featureLabel: "Feature",
    columns: ["VCT Flooring", "LVT Flooring", "Ceramic Tile"],
    rows: [
      { feature: "Cost", values: ["Low", "Moderate", "High"] },
      { feature: "Durability", values: ["High", "High", "Very High"] },
      { feature: "Maintenance", values: ["Moderate", "Low", "Low"] },
      { feature: "Tile Replacement", values: ["Easy", "Easy", "Difficult"] },
      { feature: "Best for Large Commercial Areas", values: [true, false, false] },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional VCT Flooring Installation",
    description:
      "Proper installation is critical for VCT flooring performance. Our professional installers ensure correct subfloor preparation, accurate tile placement, and proper adhesive application.",
    servicesTitle: "Our VCT Flooring Services Include:",
    services: [
      "Free on-site commercial consultations",
      "Accurate VCT flooring estimates",
      "Professional VCT flooring installation",
      "Commercial and institutional flooring solutions",
    ],
    image: "/images/vct-gallery/Professional-VCT.webp",
    imageAlt: "Professional VCT flooring installation",
    // offer: {
    //   topLabel: "Interest Free",
    //   value: "60",
    //   rightLines: ["Month", "", ""],
    //   bottomLabel: "Financing",
    // },
  },
];

const testimonialsContent = [
  {
    eyebrow: "Testimonials",
    title: "What Our Customers Say",
    backgroundColor: "#221e53",
    items: [
      {
        quote:
          "FMP Flooring LLC transformed our office space with stunning vinyl composition tiles. Their attention to detail and professionalism made the entire process seamless. We receive compliments from clients all the time!",
        author: "Tom R",
      },
      {
        quote:
          "We needed a flooring solution that would withstand heavy traffic in our retail store. FMP Flooring LLC delivered with their VCT tiles. They were affordable, easy to maintain, and look great!",
        author: "James K",
      },
      {
        quote:
          "Working with FMP Flooring LLC was a wonderful experience. Their expert team guided us through the selection process, and the end result exceeded our expectations. Our space feels fresh and inviting!",
        author: "Rachel M",
      },
    ],
  },
];

const faqContent = [
  {
    title: "VCT Flooring FAQs",
    items: [
      {
        question: "What does VCT stand for?",
        answer:
          "VCT stands for Vinyl Composition Tile. It is a resilient flooring product commonly used in commercial, institutional, and high traffic environments.",
      },
      {
        question: "What is VCT flooring?",
        answer:
          "VCT flooring is a resilient tile flooring material made primarily from vinyl resins and mineral fillers. VCT floor tiles are available in various colors and patterns and are commonly used in commercial and institutional spaces.",
      },
      {
        question: "Is VCT flooring good for commercial use?",
        answer:
          "Yes. VCT flooring is commonly used in commercial and institutional facilities because it can provide durable performance, design flexibility, and practical maintenance for high traffic areas.",
      },
      {
        question: "Is VCT flooring waterproof?",
        answer:
          "VCT is moisture resistant but should not automatically be considered waterproof. Proper installation, maintenance, and moisture control are important, especially in areas exposed to water. Always follow the flooring manufacturer's specifications.",
      },
      {
        question: "How long does VCT flooring last?",
        answer:
          "The lifespan of VCT flooring depends on product quality, traffic, installation, maintenance, and facility conditions. Regular cleaning and proper maintenance can help extend the useful life of the flooring.",
      },
      {
        question: "How much does VCT flooring cost?",
        answer:
          "VCT flooring cost depends on the product, project size, existing flooring removal, subfloor preparation, installation requirements, and finishing work. FMP Flooring can provide a project specific estimate based on your facility.",
      },
      {
        question: "Is VCT flooring easy to maintain?",
        answer:
          "VCT flooring can be maintained with routine sweeping, cleaning, and periodic commercial floor care. Maintenance requirements vary based on traffic and facility use.",
      },
      {
        question: "Can damaged VCT tiles be replaced?",
        answer:
          "Yes. One advantage of VCT floor tiles is that individual damaged tiles can often be replaced without removing the entire flooring system, provided matching replacement tiles are available.",
      },
      {
        question: "Where is VCT flooring commonly used?",
        answer:
          "VCT flooring is commonly used in schools, healthcare facilities, offices, retail stores, government buildings, institutional facilities, and other commercial spaces.",
      },
      {
        question: "What is the difference between VCT and LVT flooring?",
        answer:
          "VCT and LVT are both resilient flooring products, but they differ in construction, appearance, performance characteristics, and typical applications. VCT is commonly selected for practical commercial applications, while LVT is often chosen for more realistic wood and stone designs and additional moisture resistance.",
      },
    ],
  },
];

const offersContent = [
  {
    eyebrow: "Special Offers",
    title: "Exclusive Savings",
    offers: [
      {
        theme: "blue",
        highlight: "Special Discount",
        title: "Military, Veterans & Senior Citizens",
        description: "Thank you for your service and loyalty.",
        buttonText: "Free In-Home Estimate",
        buttonHref: "/estimate",
        image: "/images/vct-special-one.webp",
        imageAlt: "Vinyl composition tile flooring in a commercial space",
      },
    ],
  },
];

const commercialProjectsContent = [
  {
    eyebrow: "Featured Project",
    title: "Our Recent Commercial Flooring Projects",
    items: [
      {
        title: "Cumberland County",
        image: "/images/commercial-projects/cumberland-county.png",
        badge: "Latest",
        buttonText: "Explore More",
        href: "/commercial/cumberland-county",
      },
      {
        title: "Probition Office (Jacksonville)",
        image: "/images/commercial-projects/probition-office-jacksonville.jpg",
        buttonText: "Explore More",
        href: "#",
      },
      {
        title: "Hollings Cancer Center Charleston",
        image: "/images/commercial-projects/hollings-cancer-center-charleston.png",
        buttonText: "Explore More",
        href: "/commercial/holing-cancer-center-charleston-sc",
      },
      {
        title: "Stanley Community",
        image: "/images/commercial-projects/stanley-community.png",
        buttonText: "Explore More",
        href: "#",
      },
      {
        title: "Hendersonville County",
        image: "/images/commercial-projects/hendersonville-county.png",
        buttonText: "Explore More",
        href: "#",
      },
      {
        title: "United Housing",
        image: "/images/commercial-projects/united-housing.png",
        buttonText: "Explore More",
        href: "#",
      },
      {
        title: "Pitt County",
        image: "/images/commercial-projects/pitt-county.png",
        buttonText: "Explore More",
        href: "/commercial/pitt-county-schools",
      },
      {
        title: "Johnsonville Elementary",
        image: "/images/commercial-projects/johnsonville-elementary.png",
        buttonText: "Explore More",
        href: "/commercial/johnsonville-elementary-school",
      },
      {
        title: "Orange County",
        image: "/images/commercial-projects/orange-county.png",
        buttonText: "Explore More",
        href: "/commercial/orange-county",
      },
    ],
  },
];

const ctaContent = [
  {
    title: "Ready for New VCT Flooring?",
    description:
      "Upgrade your commercial or institutional space with durable VCT flooring designed for everyday performance. Explore VCT tile options and get professional installation from FMP Flooring.",
    buttonText: "Get My Free Estimate",
    buttonHref: "/estimate",
    secondaryButtonText: "Schedule a Consultation",
    secondaryButtonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function VctPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ServicePageHero content={heroContent} />
      <FederalMarquee />
      <ServiceIntroSection content={introContent} />
      {/* <MailingListSection content={mailingListContent} /> */}
      <HowWeManageProjectsSection content={simpleProcessContent} />
      <FinanceBannerSection content={financeBannerContent} />
      <ServiceBenefitsSection content={benefitsContent} />
      <ServiceHighlightsStrip content={highlightsContent} />
      <OffersSliderSection content={offersContent} />
      <ServiceTipsSection content={tipsContent} />
      <ServiceApplicationsSection content={applicationsContent} />
      <ServiceCompareSection content={compareContent} />
      <ServiceInstallSection content={installContent} />
      <CommercialProjectsSection content={commercialProjectsContent} />
      <TestimonialsSection content={testimonialsContent} />
      <FaqSection content={faqContent} />
      <FederalMarquee />
      <CtaSection content={ctaContent} />
    </main>
  );
}
