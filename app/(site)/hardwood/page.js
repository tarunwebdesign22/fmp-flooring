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
  title: "Hardwood Flooring & Installation for Homes & Businesses | FMP Flooring",
  description:
    "Explore quality hardwood flooring for homes and commercial spaces. Choose from solid and engineered hardwood with professional flooring installation from FMP Flooring.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Hardwood Flooring" },
    ],
    slides: [
      {
        id: "hardwood-service",
        backgroundImage: "/images/hardwood-gallery/hardwood-flooring-banner.webp",
        financing: {
          eyebrow: "Hardwood Flooring",
          eyebrowAsBadge: true,
          titleBefore: "We Offer High-Quality ",
          titleHighlightValue: "Hardwood Flooring",
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
    eyebrow: "Hardwood Flooring",
    title: "Hardwood Flooring – Timeless Beauty, Strength & Long-Lasting Value",
    paragraphs: [
      "Hardwood flooring is one of the most popular and premium flooring options for homes and commercial spaces. Known for its natural beauty, durability, and long-term value, hardwood floors add warmth, elegance, and character to any interior. Whether you choose solid hardwood flooring or engineered hardwood flooring, hardwood floors offer unmatched style and performance.",
      "At FMP Flooring, we provide high-quality hardwood flooring installation for residential and commercial projects, offering a wide selection of wood species, finishes, and plank styles.",
    ],
    images: [
      {
        src: "/images/hardwood-gallery/hardwood-gallery-1.webp",
        alt: "Hardwood flooring in an elegant dining room",
      },
      {
        src: "/images/hardwood-gallery/hardwood-gallery-2.webp",
        alt: "Professional hardwood flooring installation",
      },
      {
        src: "/images/hardwood-gallery/hardwood-gallery-3.webp",
        alt: "Wide-plank hardwood flooring in a modern living space",
      },
      {
        src: "/images/hardwood-gallery/hardwood-gallery-4.webp",
        alt: "Hardwood flooring installation in progress",
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
    backgroundImage: "/images/hardwood-gallery/hardwood-WhyChoose-Image.webp",
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
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
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
    image: "/images/hardwood-gallery/Professional-Hardwood-Image.webp",
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
    backgroundColor: "#221e53",
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
        question: "What is the difference between solid and engineered hardwood flooring?",
        answer:
          "Solid hardwood flooring is made from a single piece of natural wood, while engineered hardwood flooring consists of a real wood surface attached to a layered core. Both provide the appearance of natural wood, but their construction and suitable applications can differ.",
      },
      {
        question: "Is hardwood flooring a good choice for homes?",
        answer:
          "Yes. Hardwood flooring is a popular choice for homes because it provides natural beauty, a wide range of design options, and long lasting performance when properly installed and maintained.",
      },
      {
        question: "What is the difference between hardwood flooring and wood flooring?",
        answer:
          "Wood flooring is a broad term that can include several types of flooring made with wood, including solid hardwood and engineered hardwood. Hardwood flooring generally refers to flooring made from natural wood designed for use as a finished floor surface.",
      },
      {
        question: "How long does hardwood flooring last?",
        answer:
          "The lifespan of hardwood flooring depends on the wood species, product quality, installation, traffic, maintenance, and environmental conditions. Properly maintained hardwood flooring can provide many years of service.",
      },
      {
        question: "Can hardwood floors be refinished?",
        answer:
          "Many solid hardwood floors can be sanded and refinished multiple times, depending on their thickness and condition. Some engineered hardwood products can also be refinished, depending on the thickness of the real wood wear layer.",
      },
      {
        question: "Is engineered hardwood flooring durable?",
        answer:
          "Yes. Quality engineered hardwood flooring can provide durable performance for residential and commercial applications. Its layered construction also provides dimensional stability compared with solid wood in certain environments.",
      },
      {
        question: "Is hardwood flooring good for kitchens?",
        answer:
          "Hardwood flooring can be used in kitchens, but the area should be managed carefully because spills and moisture can affect wood flooring. Promptly cleaning spills and following the flooring manufacturer's care recommendations are important.",
      },
      {
        question: "How do you clean hardwood flooring?",
        answer:
          "Regular sweeping or vacuuming can remove dirt and debris. For deeper cleaning, use a hardwood flooring cleaner appropriate for the specific finish and avoid excessive water or standing moisture.",
      },
      {
        question: "How much does hardwood floor installation cost?",
        answer:
          "Hardwood flooring installation costs vary depending on the flooring material, project size, subfloor condition, layout, removal requirements, and installation method. FMP Flooring can provide a project specific estimate after evaluating your space.",
      },
      {
        question: "Can FMP Flooring install hardwood flooring near me?",
        answer:
          "FMP Flooring provides professional hardwood flooring installation for eligible residential and commercial projects. Contact our team to discuss your location, project requirements, flooring preferences, and installation needs.",
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
        image: "/images/hardwood-gallery/Hardwood-Special-Discount.webp",
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
    title: "Ready for Beautiful New Hardwood Flooring?",
    description:
      "Bring natural warmth, character, and lasting style to your space with quality hardwood flooring. Whether you are considering solid hardwood or engineered hardwood, FMP Flooring can help you select and install the right flooring for your project.",
    buttonText: "Get Your Free Estimate",
    buttonHref: "/estimate",
    secondaryButtonText: "Schedule a Consultation",
    secondaryButtonHref: "/estimate",
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
