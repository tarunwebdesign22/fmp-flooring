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
  title: "Laminate Flooring & Installation | FMP Flooring",
  description:
    "Shop quality laminate flooring for residential and commercial spaces. Explore wood look and waterproof laminate flooring with professional installation from FMP Flooring.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Laminate Flooring" },
    ],
    slides: [
      {
        id: "laminate-service",
        backgroundImage: "/images/laminate-mainbanner.webp",
        financing: {
          eyebrow: "Laminate Flooring",
          eyebrowAsBadge: true,
          titleBefore: "We Offer High-Quality ",
          titleHighlightValue: "Laminate Flooring",
          titleAfter: "",
          description:
            "Upgrade your space with professional laminate flooring installation designed for busy homes and light commercial spaces.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "laminate-financing",
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
      defaultService: "Laminate",
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
    eyebrow: "Laminate Flooring",
    title: "Stylish, Durable & Cost-Effective Flooring",
    paragraphs: [
      "Laminate flooring is a popular and affordable flooring option that delivers the look of natural hardwood or tile with enhanced durability and easy maintenance. Designed for modern living, laminate floors are ideal for residential and light commercial spaces where style, performance, and value matter.",
      "At FMP Flooring, we offer high-quality laminate flooring installation with a wide range of colors, textures, and wood-look finishes to suit every space and budget.",
    ],
    images: [
      {
        src: "/images/about-laminate.webp",
        alt: "Wood-look laminate flooring in a modern living space",
      },
      {
        src: "/images/laminate-gallery/Professional-Laminate-Flooring-Installation.png.webp",
        alt: "Professional laminate flooring installation",
      },
      {
        src: "/images/laminate-gallery/Laminating-Services-installation.png.webp",
        alt: "Laminate flooring installation in progress",
      },
      {
        src: "/images/laminate-installing.webp",
        alt: "Laminate flooring being installed",
      },
      {
        src: "/images/laminate-gallery/1.jpg",
        alt: "Installed laminate flooring showcase",
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
  "Get Brand New Laminate in 4 Simple Steps",
  "A clear, step-by-step process so your laminate flooring project stays organized, efficient, and stress-free from start to finish.",
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
    title: "Why Choose Laminate Flooring?",
    backgroundImage: "/images/laminate-whychhose-image.webp",
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
      "Keep your laminate floors looking their best with a simple, consistent cleaning routine that protects the wear layer and finish.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
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
    image: "/images/laminate-installing.webp",
    imageAlt: "Professional laminate flooring installation",
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
        question: "What is laminate flooring?",
        answer:
          "Laminate flooring is a multi layer flooring product designed with a decorative surface, protective wear layer, and core material. It is available in a wide range of wood look, stone look, colors, textures, and patterns.",
      },
      {
        question: "Is laminate flooring waterproof?",
        answer:
          "Some laminate flooring products are designed with waterproof or enhanced moisture resistant features, while others are not. Always check the specific product's water resistance rating and installation requirements before choosing laminate flooring for moisture prone areas.",
      },
      {
        question: "Is laminate flooring good for pets?",
        answer:
          "Laminate flooring can be a practical option for homes with pets because many products are designed to handle everyday wear. Choosing a product with an appropriate wear layer and following recommended maintenance practices can help protect the floor.",
      },
      {
        question: "How long does laminate flooring last?",
        answer:
          "The lifespan of laminate flooring depends on product quality, wear layer, installation, traffic, maintenance, and environmental conditions. Choosing the right product for the expected level of use can help support long term performance.",
      },
      {
        question: "Is laminate flooring cheaper than hardwood?",
        answer:
          "Laminate flooring is generally available at a lower price point than many hardwood flooring products. However, total project cost depends on the flooring product, installation, subfloor preparation, removal, and other project requirements.",
      },
      {
        question: "How much does laminate flooring installation cost?",
        answer:
          "Laminate flooring installation cost varies based on project size, flooring selection, subfloor preparation, existing flooring removal, layout, and finishing requirements. FMP Flooring can provide a project specific estimate after reviewing your space.",
      },
      {
        question: "Is laminate flooring easy to maintain?",
        answer:
          "Yes. Regular sweeping or vacuuming can remove dirt and debris, while occasional cleaning with a laminate safe product can help maintain the flooring. Avoid excessive water and follow the manufacturer's care instructions.",
      },
      {
        question: "Can laminate flooring be installed in a kitchen?",
        answer:
          "Laminate flooring can be suitable for some kitchens, particularly products designed with enhanced moisture resistance. Spills should be cleaned promptly, and the product's installation and moisture specifications should be followed.",
      },
      {
        question: "What is wood look laminate flooring?",
        answer:
          "Wood look laminate flooring is designed to replicate the appearance of natural wood through printed decorative layers, realistic grain patterns, textures, colors, and plank designs.",
      },
      {
        question: "How do I find laminate flooring installers near me?",
        answer:
          "Look for experienced flooring installers who offer professional installation, accurate estimates, suitable flooring options, and clear project support. FMP Flooring provides laminate flooring installation for eligible residential and commercial projects.",
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
        image: "/images/Offer-banner-laminate.webp",
        imageAlt: "Laminate flooring in a bright living room",
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
    title: "Ready for New Laminate Flooring?",
    description:
      "Give your space a fresh new look with durable, stylish laminate flooring. Explore wood look and moisture resistant options and work with FMP Flooring for professional installation.",
    buttonText: "Get Your Free Estimate",
    buttonHref: "/estimate",
    secondaryButtonText: "Schedule a Consultation",
    secondaryButtonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function LaminatePage() {
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
