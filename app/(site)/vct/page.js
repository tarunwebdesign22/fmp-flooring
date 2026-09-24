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
          titleBefore: "High Quality ",
          titleHighlightValue: "VCT Flooring",
          titleAfter: " for Commercial & High Traffic Spaces",
          description:
            "Upgrade your facility with durable, cost effective VCT flooring designed for schools, healthcare facilities, offices, retail spaces, and other commercial environments.",
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
    title: "VCT Flooring for Durable, Cost Effective Commercial Spaces",
    paragraphs: [
      "VCT flooring, or vinyl composition tile, is a durable and versatile flooring option commonly used in commercial, institutional, and high traffic environments. VCT floor tiles are available in a wide range of colors and patterns, making them suitable for both practical flooring needs and custom interior designs.",
      "At FMP Flooring, we provide VCT flooring solutions and professional installation for facilities that need dependable performance, easy maintenance, and long term value. From schools and healthcare facilities to offices, retail stores, and other commercial spaces, we can help you select and install flooring suited to your project.",
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
  "Our straightforward installation process helps keep your VCT flooring project organized, efficient, and ready for long term performance.",
  [
    {
      step: "01",
      title: "Existing Flooring Removal",
      description:
        "We remove existing flooring and prepare the area for your new VCT installation, helping create a clean workspace for the next stage of the project.",
    },
    {
      step: "02",
      title: "Subfloor Preparation",
      description:
        "We inspect and prepare the subfloor to create a smooth, clean, and stable surface for VCT tile installation. Proper preparation helps support a professional finished floor.",
    },
    {
      step: "03",
      title: "Professional VCT Installation",
      description:
        "Our experienced installers carefully measure, cut, and place VCT tiles according to the project layout, creating a clean and consistent finished floor.",
    },
    {
      step: "04",
      title: "Finishing & Final Inspection",
      description:
        "We complete the project with finishing details, inspect the installed flooring, and make sure the space is clean and ready for use.",
    },
  ],
);

const financeBannerContent = [
  {
    title: "Financing Available",
    description: "Convenient monthly payment options can help make your flooring project easier to manage",
    buttonText: "View Financing Options",
    buttonHref: "/financing",
    backgroundImage: "/images/finance-banner-One.webp",
    footnote: "¹With approved credit.",
    footnoteLinkText: "Details Apply",
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
        title: "Durable & Long Lasting",
        description:
          "VCT flooring is designed for everyday commercial use and can handle regular foot traffic when the right product is selected and properly maintained.",
      },
      {
        icon: "affordable",
        title: "Cost Effective Flooring Solution",
        description:
          "VCT can provide a practical flooring solution for large commercial spaces where durability, maintenance, and project budget are important considerations.",
      },
      {
        icon: "maintenance",
        title: "Easy Maintenance & Repair",
        description:
          "VCT flooring can be maintained through routine cleaning and periodic care. Individual damaged tiles can also be replaced without replacing the entire floor.",
      },
      {
        icon: "moisture",
        title: "Slip Resistant Options",
        description:
          "VCT products are available with different surface characteristics and performance specifications. Choosing the right product can help meet the safety and usage requirements of your facility.",
      },
      {
        icon: "styles",
        title: "Wide Range of Colors & Patterns",
        description:
          "VCT tiles are available in many colors and patterns, allowing facilities to create custom layouts, borders, directional patterns, and design accents.",
      },
      {
        icon: "highTraffic",
        title: "Ideal for High Traffic Areas",
        description:
          "VCT is commonly used in facilities that experience regular foot traffic, including schools, healthcare facilities, offices, retail spaces, and institutional buildings.",
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
      "Proper maintenance helps keep VCT flooring clean, attractive, and ready for everyday commercial use.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      {
        title: "Routine Sweeping & Cleaning",
        description:
          "Sweep or dust mop regularly to remove dirt, dust, and debris before they can build up on the flooring surface.",
      },
      {
        title: "Damp Mopping",
        description:
          "Use appropriate cleaning products and damp mopping methods recommended for VCT flooring. Avoid excessive moisture and follow the manufacturer's care instructions.",
      },
      {
        title: "Periodic Stripping & Finishing",
        description:
          "Commercial VCT floors may require periodic stripping and finishing as part of their maintenance program. The frequency depends on traffic levels, facility use, and the flooring manufacturer's recommendations.",
      },
      {
        title: "Replace Damaged Tiles",
        description:
          "One advantage of VCT tile flooring is that individual damaged tiles can often be replaced without removing the entire floor.",
      },
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "VCT Flooring Applications",
    description: "VCT flooring is well suited for commercial, institutional, and high traffic environments, including:",
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
    intro:
      "Different commercial flooring materials offer different advantages. Compare VCT with LVT and ceramic tile to help determine which option fits your facility.",
    featureLabel: "Feature",
    columns: ["VCT Flooring", "LVT Flooring", "Ceramic Tile"],
    rows: [
      { feature: "Cost", values: ["Low to Moderate", "Moderate", "Moderate to High"] },
      { feature: "Durability", values: ["High", "High", "Very High"] },
      { feature: "Maintenance", values: ["Moderate", "Low", "Low"] },
      { feature: "Tile Replacement", values: ["Easy", "Easy", "More Difficult"] },
      { feature: "Design Options", values: ["Wide", "Wide", "Wide"] },
      {
        feature: "Large Commercial Areas",
        values: ["Excellent", "Excellent", "Good"],
      },
    ],
    footnote:
      "VCT flooring can be a practical choice for large commercial facilities where cost, durability, maintenance, and tile replacement are important considerations. LVT may be preferred when design realism and moisture resistance are priorities, while ceramic tile can be suitable when a hard, highly durable surface is required.",
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional VCT Flooring Installation",
    paragraphs: [
      "Proper installation is an important part of VCT flooring performance. Our professional installers prepare the subfloor, plan the tile layout, make accurate cuts, and install VCT tiles using appropriate installation methods for the project.",
      "Whether you are replacing flooring in an office, school, healthcare facility, retail space, or another commercial environment, FMP Flooring provides professional VCT flooring installation based on your facility's requirements.",
    ],
    servicesTitle: "Our VCT Flooring Services Include:",
    services: [
      "Free on site commercial consultations",
      "Accurate VCT flooring estimates",
      "Professional VCT flooring installation",
      "Subfloor preparation",
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
