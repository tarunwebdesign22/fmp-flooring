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
  title: "Carpet Broadloom | Residential & Commercial Broadloom Carpet | FMP Flooring",
  description:
    "Broadloom carpet installation from FMP Flooring. Soft, quiet, and comfortable wall-to-wall carpet for homes, offices, multi-family properties, and commercial spaces.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Carpet Broadloom Services" },
    ],
    slides: [
      {
        id: "carpet-broadloom-service",
        backgroundImage: "/images/carpet-broadloom-page-banner.png",
        financing: {
          eyebrow: "Carpet Broadloom Services",
          titleBefore: "We Offer High-Quality Broadloom Carpet — ",
          titleHighlightValue: "65%  Off Sale",
          titleAfter: "",
          description:
            "Upgrade your space with professional carpet broadloom installation for warmer, quieter, more comfortable homes and commercial spaces.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "carpet-broadloom-financing",
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
      defaultService: "Broadloom Carpet",
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
    eyebrow: "Carpet Broadloom Services",
    title: "Carpet Broadloom Installation (Residential & Commercial)",
    paragraphs: [
      "When you want a space to feel warmer, quieter, and more comfortable, nothing beats carpet broadloom. At FMP Flooring LLC, we supply and install broadloom carpet in a wide range of qualities, thicknesses, and styles—from budget-friendly rentals to premium, high-performance carpet built for busy homes and commercial traffic.",
      "Whether you’re updating a bedroom, finishing a basement, or replacing carpet across an entire office, we’ll help you choose the right carpet and install it the right way.",
    ],
    images: [
      {
        src: "/images/carpet-broadloom-gallery/Carpet-Broadloom.png",
        alt: "Broadloom carpet in a modern living room",
      },
      {
        src: "/images/carpet-broadloom-gallery/Carpet-Broadloom-work.png",
        alt: "Cream broadloom carpet in a bright living space",
      },
      {
        src: "/images/carpet-broadloom-gallery/Broadloom-Carpet.png",
        alt: "Textured broadloom carpet flooring showcase",
      },
      {
        src: "/images/carpet-broadloom-gallery/interior-design-of-ethnic-living-room.jpg",
        alt: "Broadloom carpet in a stylish residential interior",
      },
      {
        src: "/images/home-services/new/Broadloom_Carpet.webp",
        alt: "Installed broadloom carpet flooring",
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
  "Get Brand New Broadloom Carpet in 4 Simple Steps",
  "A clear, step-by-step process so your carpet broadloom project stays organized, efficient, and stress-free from start to finish.",
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
    title: "Why Customers Choose Our Broadloom Carpet",
    backgroundImage: "/images/carpet-broadloom-gallery/Carpet-Broadloom.png",
    items: [
      {
        icon: "affordable",
        title: "Quality Selections at Every Price Level",
        description:
          "Choose from good, better, and best carpet options so you can match quality, thickness, and budget for rentals, homes, and commercial projects.",
      },
      {
        icon: "styles",
        title: "Right Thickness + Pad Combo",
        description:
          "We help you select the right carpet style, thickness, and pad for bedrooms, living rooms, stairs, and high-traffic commercial areas.",
      },
      {
        icon: "durable",
        title: "Clean, Professional Installation",
        description:
          "Our installers focus on stretching, seam work, edges, and transitions for a finished look that feels smooth underfoot and lasts longer.",
      },
      {
        icon: "maintenance",
        title: "Built for Homes & Commercial Spaces",
        description:
          "Options for stairs, hallways, bedrooms, offices, retail spaces, and multi-family properties with stain-resistant and high-traffic fibers available.",
      },
      {
        icon: "moisture",
        title: "Clear Communication & Straightforward Pricing",
        description:
          "From free measure and quote to final walkthrough, we keep the process simple with clear recommendations and transparent pricing.",
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
      "Maintaining your carpet broadloom involves regular vacuuming, immediate spot cleaning, and periodic professional cleanings to keep it looking fresh and prolong its lifespan.",
    backgroundImage: "/images/294-Wood-Flooring.webp",
    tips: [
      "Vacuum regularly to remove dirt and debris from carpet fibers.",
      "Address spills immediately with a mild cleaner to prevent staining.",
      "Schedule periodic professional cleanings to refresh appearance and extend lifespan.",
      "Use mats at entryways and protect high-traffic paths to reduce premature wear.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Great For Homes, Offices & Multi-Family",
    description: "Broadloom carpet is ideal for:",
    items: [
      "Bedrooms, living rooms, basements",
      "Stairs and hallways",
      "Offices, suites, and retail spaces",
      "Apartments, rentals, and multi-family turnover projects",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Broadloom Carpet vs Carpet Tile",
    featureLabel: "Feature",
    columns: ["Broadloom Carpet", "Carpet Tile"],
    rows: [
      {
        feature: "Installation",
        values: ["Wall-to-wall roll installation", "Modular tile installation"],
      },
      {
        feature: "Comfort Underfoot",
        values: ["Soft and cushioned", "Moderate"],
      },
      {
        feature: "Seamless Look",
        values: [true, "Partial"],
      },
      {
        feature: "Replacement",
        values: ["Full-area replacement", "Easy tile replacement"],
      },
      {
        feature: "Best For",
        values: ["Bedrooms & living spaces", "Offices & high-traffic zones"],
      },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Carpet Broadloom Installation",
    description:
      "Our experienced installers handle free measuring, carpet selection, old carpet removal, stretching, seam work, edges, and transitions—then finish with a final walkthrough to make sure everything looks and feels right.",
    servicesTitle: "Our Carpet Broadloom Services Include:",
    services: [
      "Free measure and quick quote",
      "Help selecting carpet style, thickness, and pad",
      "Removal and disposal of old carpet (if needed)",
      "Professional residential and commercial installation",
    ],
    image: "/images/carpet-broadloom-gallery/Carpet-Broadloom-work.png",
    imageAlt: "Professional broadloom carpet installation",
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
          "FMP Flooring LLC transformed my living room with their beautiful broadloom carpet. The installation was quick and professional, and the quality is outstanding. Highly recommend!",
        author: "Sarah T",
      },
      {
        quote:
          "I was impressed by the wide color range and the knowledgeable staff. They helped me choose the perfect carpet for my bedroom. The whole process was seamless and enjoyable.",
        author: "James M",
      },
      {
        quote:
          "Great service from start to finish! The team at FMP Flooring LLC made sure everything was perfect, and my new carpet looks fantastic. Couldn't be happier!",
        author: "Emily R",
      },
    ],
  },
];

const faqContent = [
  {
    title: "Carpet Broadloom FAQs",
    items: [
      {
        question: "Is carpet broadloom suitable for all types of rooms?",
        answer:
          "Yes, it can be used in various rooms, including bedrooms, living rooms, and offices.",
      },
      {
        question: "What are the different types of carpet materials available?",
        answer: "Common materials include nylon, polyester, wool, and olefin.",
      },
      {
        question: "What size is broadloom carpet?",
        answer:
          "Broadloom carpets typically come in rolls that are 12 to 15 feet wide.",
      },
      {
        question: "What are the benefits of broadloom carpet?",
        answer:
          "Benefits include comfort, aesthetic appeal, insulation, and sound absorption.",
      },
      {
        question: "What is the most popular residential carpet?",
        answer:
          "Plush and textured carpets are very popular in residential settings.",
      },
      {
        question: "How much does broadloom carpet cost?",
        answer:
          "The cost can vary, but it generally starts around $0.99 per square foot, depending on the material and quality.",
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
        image: "/images/carpet-broadloom-gallery/Carpet-Broadloom.png",
        imageAlt: "Broadloom carpet in a modern living room",
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
    headlineTeal: "Carpet Broadloom Quote",
    description:
      "Ready to upgrade your space with carpet broadloom? Contact FMP Flooring today for a free estimate and expert installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function CarpetBroadloomPage() {
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
