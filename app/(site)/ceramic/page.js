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
      { label: "Ceramic Flooring Service" },
    ],
    slides: [
      {
        id: "ceramic-service",
        backgroundImage: "/images/ceramic-page-banner.png",
        financing: {
          eyebrow: "Ceramic Flooring Service",
          titleBefore: "We Offer High-Quality Ceramic Tile Flooring — ",
          titleHighlightValue: "65%  Off Sale",
          titleAfter: "",
          description:
            "Upgrade your space with professional ceramic, porcelain, and specialty tile flooring installation for homes and commercial projects.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "ceramic-financing",
        backgroundImage: "/images/finance-banner.webp",
        financing: {
          eyebrow: "Flexible Payment Options",
          title: "Financing Available",
          description:
            "Buy now and pay over time! We offer several different financing programs for your ceramic and tile flooring project.",
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
      defaultService: "Ceramic Flooring",
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
    eyebrow: "Ceramic Flooring Service",
    title: "Premium Tile Flooring – Ceramic, Porcelain & More",
    paragraphs: [
      "Tile flooring gives your space timeless beauty, long-lasting performance, and easy maintenance. At FMP Flooring, we offer a complete range of ceramic tile, porcelain tile, and specialty tile flooring solutions for residential and commercial spaces. From kitchens and bathrooms to entryways, offices, and retail locations, tile flooring delivers style, durability, and moisture resistance.",
      "Whether you’re searching for ceramic tile flooring, porcelain tile flooring, glazed or matte-finish tiles, or designer tile floors, we have the perfect options for your project.",
    ],
    image: "/images/ceramic-gallery/Ceramic-Flooring-Servicess.png",
    imageAlt: "Premium ceramic tile flooring installation",
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
  "Get Brand New Ceramic Tile in 4 Simple Steps",
  "A clear, step-by-step process so your ceramic tile flooring project stays organized, efficient, and stress-free from start to finish.",
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
    title: "Why Choose Tile Flooring?",
    backgroundImage: "/images/ceramic-gallery/interior-design-of-ethnic-living-room.jpg",
    items: [
      {
        icon: "durable",
        title: "Durable & Long-Lasting",
        description:
          "Tile flooring — including ceramic tile and porcelain tile — is engineered for strength. Tile floors resist scratches, moisture, stains, and heavy foot traffic, making them ideal for high-use areas.",
      },
      {
        icon: "moisture",
        title: "Moisture & Water Resistant",
        description:
          "Tile flooring performs exceptionally well in moisture-prone environments like kitchens, bathrooms, laundry rooms, and entryways. Porcelain tiles are especially known for their low water absorption rate.",
      },
      {
        icon: "maintenance",
        title: "Easy to Clean & Maintain",
        description:
          "Tile floors are simple to keep clean. Regular sweeping and occasional mopping keep your tile flooring looking new for years.",
      },
      {
        icon: "styles",
        title: "Endless Style Options",
        description:
          "Choose from a wide variety of tile shapes, sizes, colors, finishes, and textures. From classic subway tiles and wood-look tiles to large-format porcelain and mosaic accents, there’s a tile look for every design.",
      },
      {
        icon: "affordable",
        title: "Sustainable & Eco-Friendly",
        description:
          "Tile flooring is a sustainable flooring choice. Many tiles are made with natural materials, low VOC finishes, and long lifespans that reduce replacement frequency.",
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
    title: "Maintenance Tips",
    description:
      "Keeping your ceramic floors clean is essential for maintaining their appearance and longevity. Regularly sweep and mop the tiles to remove dirt and debris.",
    backgroundImage: "/images/ceramic-gallery/interior-design-of-ethnic-living-room.jpg",
    tips: [
      "Sweep or vacuum regularly to remove dirt and debris from tile surfaces and grout lines.",
      "Mop with a tile-safe cleaner — avoid harsh chemicals that can damage finishes or grout.",
      "Wipe up spills promptly to keep floors looking fresh and prevent staining.",
      "Place mats at entryways to reduce tracked-in grit that can wear tile and grout over time.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Tile Flooring Applications",
    description: "Tile flooring is perfect for:",
    items: [
      "Kitchen floors and tile backsplashes",
      "Bathroom floors and walls",
      "Mudrooms and laundry rooms",
      "Entryways, foyers, and hallways",
      "Interior commercial spaces",
      "Outdoor patios (exterior-rated tiles)",
      "Living rooms and dining areas",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Tile Flooring vs Other Floor Types",
    featureLabel: "Feature",
    columns: ["Tile Flooring", "Hardwood Flooring", "Vinyl Flooring"],
    rows: [
      { feature: "Water Resistance", values: ["Excellent", "Poor", "Good"] },
      { feature: "Durability", values: ["Very High", "Moderate", "Moderate"] },
      { feature: "Maintenance", values: ["Easy", "Moderate", "Easy"] },
      { feature: "Style Variety", values: ["Extensive", "Moderate", "Moderate"] },
      { feature: "Best For Kitchens/Baths", values: [true, false, true] },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Tile Installation",
    description:
      "Our flooring installers bring years of experience to every tile project. From precise tile layout and leveling to expert grout and seal application, we ensure your tile flooring is installed right the first time.",
    servicesTitle: "Our Tile Flooring Services Include:",
    services: [
      "Free on-site consultations",
      "Detailed project estimates",
      "Professional tile installation",
      "Residential and commercial tile flooring solutions",
    ],
    image: "/images/ceramic-gallery/Ceramic-Flooring-Service.png",
    imageAlt: "Professional ceramic tile flooring installation",
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
          "Porcelain tiles are denser, harder, and have a lower moisture absorption rate than ceramic, making porcelain ideal for high-traffic and moisture-prone areas.",
      },
      {
        question: "Are tile floors easy to clean?",
        answer:
          "Yes. Sweep or vacuum regularly and mop with a tile-safe cleaner for best results.",
      },
      {
        question: "Is tile flooring good for bathrooms?",
        answer:
          "Absolutely — tile flooring is one of the best options for bathrooms due to its water resistance and durability.",
      },
      {
        question: "How long do tile floors last?",
        answer:
          "With proper installation and maintenance, tile flooring can last decades.",
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
    headlineTeal: "Tile Flooring Quote",
    description:
      "Transform your space with beautiful, durable tile flooring — from ceramic tile flooring to porcelain tiles and decorative accent tile. Contact FMP Flooring today for a free estimate and expert installation.",
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
