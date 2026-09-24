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
  title: "Tile Flooring | Ceramic, Porcelain & All Types of Tile | FMP Flooring",
  description:
    "Premium ceramic tile, porcelain tile, and specialty tile flooring from FMP Flooring. Durable, moisture-resistant tile installation for kitchens, bathrooms, homes, and commercial spaces.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Ceramic Flooring" },
    ],
    slides: [
      {
        id: "ceramic-service",
        backgroundImage: "/images/ceramic-mainbanner.webp",
        financing: {
          eyebrow: "Ceramic Flooring",
          eyebrowAsBadge: true,
          titleBefore: "High Quality ",
          titleHighlightValue: "Ceramic Tile Flooring",
          titleAfter: " for Homes & Businesses",
          description:
            "Upgrade your space with durable and stylish ceramic floor tiles, porcelain tile, and specialty tile flooring. We provide professional tile installation for residential and commercial spaces.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "ceramic-financing",
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
      defaultService: "Ceramic Flooring",
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
    eyebrow: "Ceramic Flooring",
    title: "Premium Ceramic Tile Flooring for Every Space",
    paragraphs: [
      "Ceramic tile flooring combines timeless style, durability, and easy maintenance, making it a practical choice for both residential and commercial spaces. At FMP Flooring, we offer a wide selection of ceramic floor tiles, porcelain tile, and specialty tile flooring for kitchens, bathrooms, entryways, offices, retail locations, and more.",
      "Our ceramic floor tiles are available in a variety of colors, patterns, sizes, textures, and finishes, allowing you to create a look that complements your space. Whether you need durable flooring for a busy commercial property or stylish tile for your home, we can help you choose the right flooring solution for your project.",
    ],
    images: [
      {
        src: "/images/ceramic-gallery/ceramic-gallery-image-1.webp",
        alt: "Ceramic tile flooring in a modern living room",
      },
      {
        src: "/images/ceramic-gallery/ceramic-gallery-image-2.webp",
        alt: "Large-format ceramic tile in a commercial lounge",
      },
      {
        src: "/images/ceramic-gallery/ceramic-gallery-image-3.webp",
        alt: "Professional ceramic tile flooring installation",
      },
      {
        src: "/images/ceramic-gallery/ceramic-gallery-image-4.webp",
        alt: "Ceramic tile flooring showcase",
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
  "Get New Ceramic Tile Flooring in 4 Simple Steps",
  "A clear, step-by-step process so your ceramic tile flooring project stays organized, efficient, and stress free from start to finish",
  [
    {
      step: "01",
      title: "Old Flooring & Haul Away",
      description:
        "We remove your existing carpet, tile, or other flooring and haul it away so the space is clear and ready for installation.",
    },
    {
      step: "02",
      title: "Subfloor Preparation",
      description:
        "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your new ceramic tile flooring.",
    },
    {
      step: "03",
      title: "Professional Tile Installation",
      description:
        "Our experienced installers precisely lay your ceramic floor tiles for a clean, level, seamless, and professional finish.",
    },
    {
      step: "04",
      title: "Trim, Fixtures & Final Touches",
      description:
        "We complete the installation with trim and finishing details, then reinstall removed fixtures and ensure everything is clean, polished, and ready to enjoy.",
    },
  ],
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
    title: "Why Choose Tile Flooring?",
    backgroundImage: "/images/ceramic-gallery/Ceramic-WhyChoose.webp",
    items: [
      {
        icon: "durable",
        title: "Durable & Long Lasting",
        description:
          "Ceramic and porcelain tile flooring is designed for durability and everyday performance. Ceramic floor tiles resist scratches, moisture, stains, and heavy foot traffic, making them suitable for busy residential and commercial spaces.",
      },
      {
        icon: "moisture",
        title: "Moisture & Water Resistant",
        description:
          "Ceramic tile flooring performs well in moisture prone areas such as kitchens, bathrooms, laundry rooms, and entryways. Porcelain tile offers especially low water absorption for areas where moisture resistance is important.",
      },
      {
        icon: "maintenance",
        title: "Easy to Clean & Maintain",
        description:
          "Ceramic floor tiles are simple to clean and maintain. Regular sweeping and occasional mopping help keep tile flooring looking fresh while reducing everyday maintenance.",
      },
      {
        icon: "styles",
        title: "Endless Style Options",
        description:
          "Choose from a wide range of ceramic tiles in different shapes, sizes, colors, patterns, finishes, and textures. From classic designs to modern styles, ceramic floor tiles can complement almost any interior.",
      },
      {
        icon: "affordable",
        title: "Sustainable & Eco Friendly",
        description:
          "Tile flooring can be a sustainable flooring choice because many tile products are made from natural materials and offer long service lives. Durable ceramic floor tiles can help reduce the need for frequent flooring replacement.",
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
    title: "Ceramic Tile Flooring Maintenance Tips",
    description:
      "Keep your ceramic floors looking their best with a simple, consistent cleaning routine that protects tile surfaces and grout lines.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      {
        title: "Sweep or Vacuum Regularly",
        description:
          "Remove dirt and debris from ceramic floor tiles and grout lines to help prevent scratches and buildup.",
      },
      {
        title: "Use a Tile Safe Cleaner",
        description:
          "Mop with a suitable tile cleaner and avoid harsh chemicals that may damage tile finishes or grout.",
      },
      {
        title: "Clean Spills Promptly",
        description:
          "Wipe up spills quickly to keep ceramic tile flooring looking clean and help prevent staining.",
      },
      {
        title: "Use Mats at Entryways",
        description:
          "Place mats near entrances to reduce tracked in dirt and grit that can wear tile surfaces and grout over time.",
      },
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Tile Flooring Applications",
    description: "Ceramic tile flooring is a versatile choice for residential and commercial spaces, including:",

    items: [
      "Kitchen floors and tile backsplashes",
      "Bathroom floors and walls",
      "Mudrooms and laundry rooms",
      "Entryways, foyers, and hallways",
      "Interior commercial spaces",
      "Outdoor patios with exterior rated tiles",
      "Living rooms and dining areas",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Ceramic Tile Flooring vs Other Floor Types",
    featureLabel: "Feature",
    columns: ["Ceramic Tile Flooring", "Hardwood Flooring", "Vinyl Flooring"],
    rows: [
      { feature: "Water Resistance", values: ["Excellent", "Poor", "Good"] },
      { feature: "Durability", values: ["Very High", "Moderate", "Moderate"] },
      { feature: "Maintenance", values: ["Easy", "Moderate", "Easy"] },
      { feature: "Style Variety", values: ["Extensive", "Moderate", "Moderate"] },
      {
        feature: "Best for Kitchens & Bathrooms",
        values: [true, false, true],
      },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Ceramic Tile Installation",
    paragraphs: [
      "Our experienced flooring installers bring years of experience to every ceramic tile flooring project. From precise tile layout and leveling to expert grout and seal application, we ensure your ceramic floor tiles are installed correctly for a clean, durable, and professional finish.",
    ],
    servicesTitle: "Our Tile Flooring Services Include:",
    services: [
      "Free on site consultations",
      "Detailed project estimates",
      "Professional ceramic tile installation",
      "Residential and commercial tile flooring solutions",
    ],
    image: "/images/ceramic-gallery/Professional-Ceramic-Flooring-Image.webp",
    imageAlt: "Professional ceramic tile flooring installation",
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
          "The porcelain tiles we chose from FMP Flooring LLC have truly elevated our office environment. The staff was knowledgeable and guided us through the selection process. The durability and appearance have exceeded our expectations!",
        author: "David",
      },
      {
        quote:
          "FMP Flooring LLC revamped our store with gorgeous glazed ceramic tiles. The variety of styles they offered made it easy to find the perfect look for our space. Our customers frequently compliment the new flooring!",
        author: "Andrew T. Cano",
      },
      {
        quote:
          "We faced serious slip hazards in our restaurant prior to switching to quarry tiles. Thanks to FMP Flooring LLC, our floors are now not only safe but also visually appealing. The installation was quick and the team was professional throughout the entire process.",
        author: "Crystal J",
      },
    ],
  },
];

const faqContent = [
  {
    title: "Tile Flooring FAQs",
    items: [
      {
        question: "What is the difference between ceramic and porcelain tile?",
        answer:
          "Ceramic and porcelain tiles are both made from clay based materials, but porcelain is denser and has a lower water absorption rate. Porcelain tile is often preferred for high traffic and moisture prone areas, while ceramic tiles offer a wide range of styles for residential and commercial flooring.",
      },
      {
        question: "Are ceramic floor tiles easy to clean?",
        answer:
          "Yes. Ceramic floor tiles are generally easy to clean and maintain. Regular sweeping or vacuuming followed by occasional mopping with a tile safe cleaner can help keep the surface looking its best.",
      },
      {
        question: "Is ceramic tile flooring good for bathrooms?",
        answer:
          "Yes. Ceramic tile flooring is a popular choice for bathrooms because it is durable, easy to clean, and resistant to moisture when properly installed and maintained.",
      },
      {
        question: "How long do ceramic floor tiles last?",
        answer:
          "Properly installed and maintained ceramic floor tiles can provide many years of service. Their lifespan depends on factors such as tile quality, installation, traffic levels, maintenance, and the environment where they are installed.",
      },
      {
        question: "Is ceramic tile flooring good for kitchens?",
        answer:
          "Yes. Ceramic tile flooring is well suited for kitchens because it is durable, easy to clean, and available in a wide range of styles, colors, and finishes.",
      },
      {
        question: "What is the difference between ceramic tile and porcelain tile?",
        answer:
          "Porcelain is a type of ceramic tile made from more refined materials and fired at higher temperatures. It is generally denser and less porous than standard ceramic tile, making it a strong choice for areas exposed to moisture or heavy traffic.",
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
        image: "/images/Ceramic-Special.webp",
        imageAlt: "Ceramic tile flooring in a commercial lounge",
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
    headlineTeal: "Tile Flooring Quote",
    description:
      "Transform your space with beautiful, durable tile flooring. Contact FMP Flooring today for a free estimate and expert installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function CeramicPage() {
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
