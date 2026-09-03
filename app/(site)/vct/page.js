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
  title: "VCT Flooring | Vinyl Composition Tile Flooring Solutions | FMP Flooring",
  description:
    "Durable, cost-effective VCT flooring installation from FMP Flooring. Commercial-grade vinyl composition tile for schools, hospitals, offices, retail, and high-traffic spaces.",
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
        backgroundImage: "/images/vct-page-banner.png",
        financing: {
          eyebrow: "Vinyl Composition Tile",
          titleBefore: "We Offer High-Quality VCT Flooring — ",
          titleHighlightValue: "65%  Off Sale",
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
        src: "/images/vct-gallery/Vinyl-Composition-Tiles-dining.png",
        alt: "Vinyl composition tile flooring in a commercial dining space",
      },
      {
        src: "/images/vct-gallery/Vinyl-Composition-Tiles-others.png",
        alt: "VCT flooring in a commercial corridor",
      },
      {
        src: "/images/vct-gallery/Professional-VCT-Flooring-Installation.png",
        alt: "Professional VCT flooring installation",
      },
      {
        src: "/images/vct-gallery/Untitled-design-7.png",
        alt: "Installed vinyl composition tile flooring",
      },
      {
        src: "/images/home-services/new/Vinyl_Composition_Tiles.webp",
        alt: "Commercial vinyl composition tiles showcase",
      },
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
    backgroundImage: "/images/vct-gallery/Vinyl-Composition-Tiles-others.png",
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
    backgroundImage: "/images/294-Wood-Flooring.webp",
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
    image: "/images/vct-gallery/Professional-VCT-Flooring-Installation.png",
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
    backgroundImage: "/images/laminate-reviews.webp",
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
          "VCT stands for Vinyl Composition Tile, a commercial-grade flooring material made from vinyl resins and fillers.",
      },
      {
        question: "Is VCT flooring good for commercial use?",
        answer:
          "Yes. VCT flooring is specifically designed for high-traffic commercial and institutional environments.",
      },
      {
        question: "Is VCT flooring waterproof?",
        answer:
          "VCT tiles are moisture-resistant but not fully waterproof. Proper installation and maintenance are essential.",
      },
      {
        question: "How long does VCT flooring last?",
        answer:
          "With proper care and maintenance, VCT flooring can last 20–30 years or longer.",
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
        image: "/images/vct-gallery/Vinyl-Composition-Tiles-dining.png",
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
    headlineWhite: "Get a Free",
    headlineTeal: "VCT Flooring Quote",
    description:
      "Upgrade your facility with durable, cost-effective VCT flooring. Whether you need vinyl composition tile for schools, offices, hospitals, or retail spaces, our team is ready to help.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
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
