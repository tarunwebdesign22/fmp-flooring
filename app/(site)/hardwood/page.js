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
  title: "Hardwood Flooring | Solid & Engineered Hardwood Floors | FMP Flooring",
  description:
    "Premium hardwood flooring installation from FMP Flooring. Solid and engineered hardwood floors with timeless beauty, lasting durability, and professional installation for homes and commercial spaces.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hardwood Services" },
    ],
    slides: [
      {
        id: "hardwood-service",
        backgroundImage: "/images/hardwood-page-banner.webp",
        financing: {
          eyebrow: "Hardwood Services",
          titleBefore: "We Offer High-Quality Hardwood Flooring — ",
          titleHighlightValue: "65%  Off Sale",
          titleAfter: "",
          description:
            "Upgrade your space with professional hardwood flooring installation — solid and engineered options for homes and commercial projects.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "hardwood-financing",
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
      defaultService: "Hardwood",
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
    eyebrow: "Hardwood Services",
    title: "Hardwood Flooring – Timeless Beauty, Strength & Long-Lasting Value",
    paragraphs: [
      "Hardwood flooring is one of the most popular and premium flooring options for homes and commercial spaces. Known for its natural beauty, durability, and long-term value, hardwood floors add warmth, elegance, and character to any interior. Whether you choose solid hardwood flooring or engineered hardwood flooring, hardwood floors offer unmatched style and performance.",
      "At FMP Flooring, we provide high-quality hardwood flooring installation for residential and commercial projects, offering a wide selection of wood species, finishes, and plank styles.",
    ],
    images: [
      {
        src: "/images/hardwood-gallery/Hardwood-Flooring-flooring.png.webp",
        alt: "Hardwood flooring in an elegant dining room",
      },
      {
        src: "/images/hardwood-gallery/Professional-Hardwood-Flooring-Installation.png.webp",
        alt: "Professional hardwood flooring installation",
      },
      {
        src: "/images/hardwood-gallery/hardwood-flooring-benefits.png.webp",
        alt: "Wide-plank hardwood flooring in a modern living space",
      },
      {
        src: "/images/hardwood-gallery/Hardwood-Flooring-Installation.png.webp",
        alt: "Hardwood flooring installation in progress",
      },
      {
        src: "/images/hardwood-gallery/Understanding-Hardwood-Flooring.png.webp",
        alt: "Installed hardwood flooring showcase",
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
  "Get Brand New Hardwood in 4 Simple Steps",
  "A clear, step-by-step process so your hardwood flooring project stays organized, efficient, and stress-free from start to finish.",
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
    title: "Why Choose Hardwood Flooring?",
    backgroundImage: "/images/hardwood-gallery/hardwood-flooring-benefits.png.webp",
    items: [
      {
        icon: "styles",
        title: "Timeless & Elegant Appearance",
        description:
          "Hardwood flooring delivers a classic, upscale look that never goes out of style. Natural wood grain patterns and rich finishes enhance any room’s design.",
      },
      {
        icon: "durable",
        title: "Durable & Long-Lasting",
        description:
          "High-quality hardwood floors can last for decades. With proper care, solid hardwood flooring can be sanded and refinished multiple times.",
      },
      {
        icon: "affordable",
        title: "Adds Value to Your Property",
        description:
          "Hardwood flooring increases home resale value and is highly attractive to buyers, making it a smart long-term investment.",
      },
      {
        icon: "maintenance",
        title: "Easy to Clean & Maintain",
        description:
          "Hardwood floors are easy to maintain with regular sweeping and occasional mopping using hardwood-safe cleaners.",
      },
      {
        icon: "moisture",
        title: "Healthy Indoor Flooring Option",
        description:
          "Hardwood flooring does not trap dust, allergens, or pet dander, making it a great choice for healthier indoor air quality.",
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
    title: "Maintenance Tips",
    description:
      "Keep your hardwood floors looking their best with a simple, consistent cleaning routine that protects the finish and natural wood grain.",
    backgroundImage: "/images/294-Wood-Flooring.webp",
    tips: [
      "Sweep or vacuum regularly to remove dirt and debris that can scratch the finish.",
      "Use a soft-bristle broom or a vacuum with a hard-floor setting.",
      "Damp mop with a hardwood-safe cleaner — avoid standing water and harsh chemicals.",
      "Place mats at entryways and felt pads under furniture legs.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Hardwood Flooring Applications",
    description: "Hardwood flooring is perfect for:",
    items: [
      "Living rooms and family rooms",
      "Bedrooms and hallways",
      "Dining rooms",
      "Home offices",
      "Commercial offices and retail spaces",
      "Stairs and upper levels",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Hardwood Flooring vs Other Flooring Types",
    featureLabel: "Feature",
    columns: ["Hardwood Flooring", "Laminate Flooring", "Vinyl Flooring"],
    rows: [
      { feature: "Natural Wood", values: [true, false, false] },
      { feature: "Durability", values: ["High", "Moderate", "Moderate"] },
      { feature: "Refinishable", values: [true, false, false] },
      { feature: "Adds Home Value", values: [true, false, "Partial"] },
      { feature: "Timeless Style", values: [true, "Partial", "Partial"] },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Hardwood Flooring Installation",
    description:
      "Our expert installers specialize in hardwood flooring installation, ensuring precise plank placement, proper subfloor preparation, and a flawless finish.",
    servicesTitle: "Our Hardwood Flooring Services Include:",
    services: [
      "Free in-home consultations",
      "Accurate flooring estimates",
      "Professional hardwood floor installation",
      "Residential and commercial hardwood solutions",
    ],
    image: "/images/hardwood-gallery/Professional-Hardwood-Flooring-Installation.png.webp",
    imageAlt: "Professional hardwood flooring installation",
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
          "FMP Flooring LLC transformed our office space with their stunning hardwood floors. The entire process was seamless, and the results are outstanding.",
        author: "Jane D",
      },
      {
        quote:
          "Our restaurant's ambiance has never been better. The hardwood floors add a touch of sophistication that our customers love.",
        author: "Tom R",
      },
      {
        quote:
          "From consultation to installation, the experience was flawless. Our home now feels warm and inviting, thanks to the stunning hardwood floors. Thank you, FMP Flooring LLC!",
        author: "Ellena K. Shaw",
      },
    ],
  },
];

const faqContent = [
  {
    title: "Hardwood Flooring FAQs",
    items: [
      {
        question: "What is the difference between solid and engineered hardwood?",
        answer:
          "Solid hardwood is made from a single piece of wood, while engineered hardwood has a layered construction for improved stability.",
      },
      {
        question: "Is hardwood flooring good for kitchens?",
        answer:
          "Engineered hardwood can be suitable for kitchens when properly installed and maintained.",
      },
      {
        question: "How long does hardwood flooring last?",
        answer: "With proper care, hardwood flooring can last 30–100 years.",
      },
      {
        question: "Can hardwood floors be refinished?",
        answer:
          "Yes. Solid hardwood floors can be refinished multiple times to restore their appearance.",
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
        image: "/images/hardwood-gallery/Hardwood-Flooring-flooring.png.webp",
        imageAlt: "Hardwood flooring in an elegant dining room",
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
    headlineTeal: "Hardwood Flooring Quote",
    description:
      "Enhance your space with beautiful, long-lasting hardwood flooring. Contact FMP Flooring today for a free estimate and expert installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function HardwoodPage() {
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
