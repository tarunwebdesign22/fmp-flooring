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
  title: "Carpet Tile Flooring | Commercial & Residential Carpet Tiles | FMP Flooring",
  description:
    "Durable modular carpet tile flooring from FMP Flooring. Commercial and residential carpet tiles with easy installation, design flexibility, and professional installation.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Carpet Tile Services" },
    ],
    slides: [
      {
        id: "carpet-tile-service",
        backgroundImage: "/images/carpet-tile-page-banner.png",
        financing: {
          eyebrow: "Carpet Tile Services",
          titleBefore: "We Offer High-Quality Carpet Tile Flooring — ",
          titleHighlightValue: "65%  Off Sale",
          titleAfter: "",
          description:
            "Upgrade your space with durable modular carpet tiles designed for offices, retail, schools, and modern homes.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "carpet-tile-financing",
        backgroundImage: "/images/finance-banner.webp",
        financing: {
          eyebrow: "Flexible Payment Options",
          title: "Financing Available",
          description:
            "Buy now and pay over time! We offer several different financing programs for your carpet tile flooring project.",
          benefits: [
            { icon: "approvals", title: "Fast Approvals*" },
            { icon: "noPayments", title: "No Payments*" },
            { icon: "zeroPercent", title: "Financing" },
          ],
          buttonText: "Explore Financing Options",
          buttonHref: "/financing",
          footnote: "*Subject to credit approval. Terms and conditions apply.",
        },
      },
    ],
    form: {
      title: "Free In-Home Estimate",
      description: "Fill out the form below and we'll get back to you shortly.",
      buttonText: "Get My Free Estimate",
      defaultService: "Carpet Tile",
      highlight: "Financing Available Vinyl",
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
    eyebrow: "Carpet Tile Services",
    title: "Carpet Tile Flooring – Durable, Modular & Modern Flooring Solution",
    paragraphs: [
      "Carpet tile flooring, also known as modular carpet tiles, is a versatile, durable, and cost-effective flooring solution for both commercial and residential spaces. Designed for high-traffic environments, carpet tiles are widely used in offices, retail stores, schools, healthcare facilities, and modern homes.",
      "At FMP Flooring, we specialize in commercial carpet tile flooring and residential carpet tiles that combine performance, comfort, and design flexibility. Whether you are upgrading an office or remodeling your home, carpet tile flooring offers long-lasting value and easy maintenance.",
    ],
    image: "/images/carpet-tile-gallery/Carpet-Tile-Services-benefits.png",
    imageAlt: "Modular carpet tile flooring in a commercial space",
    offer: {
      topLabel: "Huge Savings",
      value: "65",
      suffix: "%",
      offLabel: "Off",
      bottomLabel: "Special Offer!",
    },
    buttonText: "Schedule Consultation",
    buttonHref: "/estimate",
  },
];

const mailingListContent = [
  {
    lineOne: "Join Our Mailing List Today &",
    highlight: "GET $99 OFF",
    lineTwo: "Your Next Install!",
    placeholder: "Email*",
    buttonText: "Subscribe",
    successMessage: "Thanks for subscribing! Check your inbox soon.",
  },
];

const simpleProcessContent = createFlooringProcessContent(
  "Get Brand New Carpet Tile in 4 Simple Steps",
  "A clear, step-by-step process so your carpet tile flooring project stays organized, efficient, and stress-free from start to finish.",
);

const financeBannerContent = [
  {
    title: "Floors Now, Pay Over Time",
    description: "Convenient monthly payments for your budget¹",
    buttonText: "View Financing Options",
    buttonHref: "/financing",
    backgroundImage: "/images/finance-banner.webp",
    footnote: "¹With approved credit.",
    footnoteLinkText: "Details",
    footnoteHref: "/financing",
  },
];

const benefitsContent = [
  {
    eyebrow: "Why Choose Us",
    title: "Why Choose Carpet Tile Flooring?",
    backgroundImage: "/images/carpet-tile-gallery/interior-design-of-ethnic-living-room.jpg",
    items: [
      {
        icon: "durable",
        title: "Durable Carpet Tiles for High-Traffic Areas",
        description:
          "Carpet tiles are engineered for durability, making them ideal for commercial flooring applications such as offices, hallways, conference rooms, and retail spaces. High-performance fibers resist wear, stains, and crushing caused by heavy foot traffic.",
      },
      {
        icon: "affordable",
        title: "Easy Installation & Tile Replacement",
        description:
          "Unlike traditional broadloom carpet, carpet tile flooring installs quickly and efficiently. Individual tiles can be replaced if damaged or stained, eliminating the need to replace the entire floor.",
      },
      {
        icon: "maintenance",
        title: "Low-Maintenance Carpet Flooring",
        description:
          "Carpet tiles are easy to maintain with routine vacuuming and spot cleaning. Their modular design helps reduce long-term maintenance and repair costs.",
      },
      {
        icon: "styles",
        title: "Design Flexibility with Modular Carpet Tiles",
        description:
          "Available in a wide range of colors, textures, and patterns, carpet tiles allow you to create custom layouts, modern designs, and unique flooring patterns for any space.",
      },
      {
        icon: "moisture",
        title: "Eco-Friendly Carpet Tile Options",
        description:
          "Many carpet tiles are manufactured using recycled materials and are recyclable at the end of their life cycle, making them a sustainable flooring choice.",
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

const tipsContent = [
  {
    eyebrow: "Care Guide",
    title: "Carpet Tile Maintenance Tips",
    description:
      "To keep your carpet tiles in top condition, vacuum regularly to remove dirt and debris. Address spills quickly with a mild cleaner and perform periodic deep cleans to maintain their appearance and durability.",
    backgroundImage: "/images/carpet-tile-gallery/interior-design-of-ethnic-living-room.jpg",
    tips: [
      "Vacuum regularly to remove dirt and debris from carpet tile surfaces.",
      "Address spills quickly with a mild cleaner to prevent staining.",
      "Perform periodic deep cleans to maintain appearance and durability.",
      "Replace individual damaged tiles instead of the entire floor when needed.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Carpet Tile Flooring Applications",
    description:
      "Carpet tile flooring is suitable for a wide range of commercial and residential uses, including:",
    items: [
      "Commercial office carpet tile flooring",
      "Corporate and coworking spaces",
      "Retail stores and showrooms",
      "Conference and meeting rooms",
      "Schools and educational facilities",
      "Healthcare and medical offices",
      "Home offices",
      "Basements and playrooms",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Carpet Tile Flooring vs Broadloom Carpet",
    featureLabel: "Feature",
    columns: ["Carpet Tile Flooring", "Broadloom Carpet"],
    rows: [
      {
        feature: "Installation",
        values: ["Modular tile installation", "One-piece installation"],
      },
      {
        feature: "Replacement",
        values: ["Easy tile replacement", "Entire floor replacement"],
      },
      {
        feature: "Design Options",
        values: ["Flexible design options", "Fixed design"],
      },
      {
        feature: "High-Traffic Performance",
        values: ["Ideal for high-traffic areas", "Wears faster in traffic zones"],
      },
      {
        feature: "Long-Term Maintenance",
        values: ["Lower long-term maintenance", "Higher maintenance costs"],
      },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Carpet Tile Installation Services",
    description:
      "We provide expert carpet tile installation for both commercial and residential projects. Our experienced installers ensure proper layout, secure adhesion, and a clean, professional finish.",
    servicesTitle: "Our Carpet Tile Services Include:",
    services: [
      "Free on-site consultations",
      "Accurate flooring estimates",
      "Professional carpet tile installation",
      "Commercial and residential flooring solutions",
    ],
    image:
      "/images/carpet-tile-gallery/Professional-Carpet-Tile-Installation-Services.png",
    imageAlt: "Professional carpet tile flooring installation",
    offer: {
      topLabel: "Interest Free",
      value: "60",
      rightLines: ["Month", "", ""],
      bottomLabel: "Financing",
    },
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
          "From start to finish, the team at FMP Flooring LLC provided exceptional service. The carpet tiles look fantastic and are holding up great. The installation was quick, and we couldn't be happier with the results!",
        author: "John M",
      },
      {
        quote:
          "FMP Flooring LLC transformed our office with their carpet tile installation. The process was seamless, and the results exceeded our expectations. The tiles are not only stylish but also durable—highly recommend their services!",
        author: "Emily T",
      },
      {
        quote:
          "FMP Flooring LLC did a stellar job with our new carpet tiles. The installation was efficient, and the tiles have been incredibly easy to maintain. The eco-friendly options were a huge plus for us!",
        author: "Michael R",
      },
    ],
  },
];

const faqContent = [
  {
    title: "Carpet Tile Flooring FAQs",
    items: [
      {
        question: "What are carpet tiles made of?",
        answer:
          "Carpet tiles are commonly made from nylon, polypropylene, polyester, or recycled fibers for durability and stain resistance.",
      },
      {
        question: "Are carpet tiles waterproof?",
        answer:
          "Carpet tiles are moisture-resistant but not waterproof. They perform well in areas with occasional spills.",
      },
      {
        question: "How much does carpet tile flooring cost?",
        answer:
          "The cost of carpet tile flooring varies based on material, quality, and design. Contact us for a customized quote.",
      },
      {
        question: "Are carpet tiles good for offices?",
        answer:
          "Yes. Commercial carpet tiles are one of the most popular flooring options for offices due to durability, noise reduction, and easy replacement.",
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
        image: "/images/Offer-banner-image-remastered.webp",
        imageAlt: "Healthcare worker smiling outdoors",
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
        href: "#",
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
        href: "#",
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
        href: "#",
      },
      {
        title: "Johnsonville Elementary",
        image: "/images/commercial-projects/johnsonville-elementary.png",
        buttonText: "Explore More",
        href: "#",
      },
      {
        title: "Orange County",
        image: "/images/commercial-projects/orange-county.png",
        buttonText: "Explore More",
        href: "#",
      },
    ],
  },
];

const ctaContent = [
  {
    headlineWhite: "Get a Free",
    headlineTeal: "Carpet Tile Flooring Quote",
    description:
      "Upgrade your space with durable, stylish carpet tile flooring. Whether you need commercial carpet tile flooring or residential carpet tiles, our team is ready to help. Contact FMP Flooring today for a free estimate and professional carpet tile installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function CarpetTilePage() {
  return (
    <main className="flex flex-1 flex-col">
      <ServicePageHero content={heroContent} />
      <FederalMarquee />
      <ServiceIntroSection content={introContent} />
      <MailingListSection content={mailingListContent} />
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
