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
  title: "Broadloom Carpet Flooring & Installation | FMP Flooring",
  description:
    "Explore broadloom carpet flooring for homes, offices, apartments, and commercial spaces. FMP Flooring provides professional carpet selection and installation services.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: " Broadloom Carpet Flooring" },
    ],
    slides: [
      {
        id: "carpet-broadloom-service",
        backgroundImage: "/images/carpet-broadloom-gallery/Broadloom-Carpet-Main-Banner.webp",
        financing: {
          eyebrow: "Broadloom Carpet Flooring",
          eyebrowAsBadge: true,
          titleBefore: "High Quality ",
          titleHighlightValue: "Broadloom Carpet Flooring",
          titleAfter: " for Homes & Businesses",
          description:
            "Create a warmer, quieter, and more comfortable space with broadloom carpet flooring professionally selected and installed for residential and commercial environments.",
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
    eyebrow: "Carpet Broadloom Flooring",
    title: "Broadloom Carpet Flooring Installation for Residential & Commercial Spaces",
    paragraphs: [
      "Broadloom carpet flooring is a wall to wall carpet solution designed to create a comfortable, finished look across an entire room or larger space. It is available in a wide range of colors, patterns, textures, thicknesses, and performance levels, making it suitable for both residential and commercial environments.",
      "At FMP Flooring, we help homeowners, property managers, businesses, and contractors select the right broadloom carpet for their space, budget, and expected level of foot traffic. From bedrooms and living rooms to offices, apartments, and larger commercial areas, we provide professional carpet selection and installation.",
    ],
    images: [
      {
        src: "/images/carpet-broadloom-gallery/Broadloom-Gallery-Image-1.webp",
        alt: "Broadloom carpet in a modern living room",
      },
      {
        src: "/images/carpet-broadloom-gallery/Broadloom-Gallery-Image-2.webp",
        alt: "Cream broadloom carpet in a bright living space",
      },
      {
        src: "/images/carpet-broadloom-gallery/Broadloom-Gallery-Image-3.webp",
        alt: "Textured broadloom carpet flooring showcase",
      },
      {
        src: "/images/carpet-broadloom-gallery/Broadloom-Gallery-Image-4.webp",
        alt: "Broadloom carpet in a stylish residential interior",
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
  "Get New Broadloom Carpet Flooring in 4 Simple Steps",
  "Our straightforward installation process keeps your broadloom carpet flooring project organized and efficient from initial preparation through final finishing.",
  [
    {
      step: "01",
      title: "Remove Existing Flooring",
      description:
        "We carefully remove existing carpet, tile, or other flooring and clear the space so it is ready for your new broadloom carpet flooring installation.",
    },
    {
      step: "02",
      title: "Prepare the Subfloor",
      description:
        "We inspect and prepare the subfloor to create a clean, smooth, and stable foundation for your new broadloom carpet flooring.",
    },
    {
      step: "03",
      title: "Professional Broadloom Carpet Installation",
      description:
        "Our experienced installers carefully install your broadloom carpet for a smooth, secure, and professional wall to wall finish.",
    },
    {
      step: "04",
      title: "Finishing Details & Final Walkthrough",
      description:
        "We complete the installation with finishing details, transitions, and final adjustments, then clean the space and walk through the completed project with you.",
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
    title: "Why Customers Choose Our Broadloom Carpet Flooring",
    description:
      "We make it easier to choose, budget, and install the right broadloom carpet for your home, rental property, office, or commercial space.",
    backgroundImage: "/images/carpet-broadloom-gallery/why-choose-broadloom-flooring.webp",
    items: [
      {
        icon: "affordable",
        title: "Quality Broadloom Carpet at Every Price Level",
        description:
          "Choose from a range of broadloom carpet styles, qualities, thicknesses, and price points to find an option that fits your space, performance needs, and budget.",
      },
      {
        icon: "styles",
        title: "The Right Carpet, Thickness & Pad",
        description:
          "We help you choose the right broadloom carpet style, thickness, and carpet pad based on the room, expected foot traffic, comfort needs, and budget.",
      },
      {
        icon: "durable",
        title: "Clean, Professional Carpet Installation",
        description:
          "Our installers focus on proper stretching, seams, edges, transitions, and finishing details to create a smooth, secure, and professional carpet installation.",
      },
      {
        icon: "maintenance",
        title: "Broadloom Carpet for Homes & Commercial Spaces",
        description:
          "Choose carpet options for bedrooms, stairs, hallways, offices, retail spaces, apartments, and multi family properties, including options designed for higher traffic areas.",
      },
      {
        icon: "moisture",
        title: "Clear Recommendations & Straightforward Pricing",
        description:
          "From measuring and carpet selection to installation and final walkthrough, we keep the process simple with clear recommendations and straightforward pricing.",
      },
    ],
  },
];

const highlightsContent = [
  {
    items: [
      { icon: "installation", lines: ["Professional Carpet", "Installation"] },
      { icon: "consultation", lines: ["Free In Home", "Consultations"] },
      { icon: "support", lines: ["Expert Flooring", "Support"] },
      { icon: "selection", lines: ["Wide Selection of", "Carpet Options"] },
    ],
  },
];

const tipsContent = [
  {
    eyebrow: "Care Guide",
    title: "Broadloom Carpet Maintenance Tips",
    description:
      "Proper maintenance helps keep broadloom carpet flooring looking clean and comfortable while extending its appearance and service life. Regular vacuuming, prompt spot cleaning, and periodic professional cleaning can help protect your carpet.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      "Vacuum regularly to remove dirt, dust, and debris before they become embedded in the carpet fibers.",
      "Clean spills promptly using an appropriate carpet cleaning solution to help prevent stains from setting into the fibers.",
      "Schedule professional carpet cleaning periodically to refresh the appearance and help extend the life of your broadloom carpet.",
      "Use entryway mats and consider protective measures in high traffic areas to help reduce dirt buildup and premature carpet wear.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Broadloom Carpet Flooring for Homes, Offices & Multi Family Properties",
    description: "Broadloom carpet flooring is a versatile option for residential and commercial spaces that benefit from warmth, comfort, noise reduction, and a finished wall to wall appearance.",
    items: [
      "Bedrooms, Living Rooms & Basements",
      "Stairs & Hallways",
      "Offices, Suites & Retail Spaces",
      "Apartments, Rental Properties & Multi Family Projects",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Broadloom Carpet Flooring vs Carpet Tile",
    intro:
      "Compare broadloom carpet and carpet tile to determine which flooring format is better suited to your space, installation needs, appearance, and maintenance requirements.",
    featureLabel: "Feature",
    columns: ["Broadloom Carpet", "Carpet Tile"],
    rows: [
      {
        feature: "Installation",
        values: ["Wall to wall carpet installation", "Modular tile installation"],
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
        values: ["Full area replacement", "Individual tile replacement"],
      },
      {
        feature: "Best For",
        values: [
          "Bedrooms, living spaces, offices, and larger areas",
          "Offices and high traffic areas",
        ],
      },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Broadloom Carpet Flooring Installation",
    paragraphs: [
      "Our experienced installers provide complete broadloom carpet flooring installation from measuring and product selection to old carpet removal, stretching, seam work, edges, transitions, and final cleanup.",
    ],
    servicesTitle: "Our Broadloom Carpet Flooring Services Include:",
    services: [
      "Free measuring and quick quotes",
      "Help selecting carpet style, thickness, and pad",
      "Removal and disposal of old carpet when needed",
      "Professional residential and commercial carpet installation",
      "Stretching, seam, edge, and transition work",
      "Final cleanup and project walkthrough",
    ],
    image: "/images/carpet-broadloom-gallery/Professional-Broadloom-Image.webp",
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
    backgroundColor: "#221e53",
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
        question: "What is broadloom carpet flooring?",
        answer:
          "Broadloom carpet flooring is a continuous carpet product typically installed wall to wall across a room or larger space. It provides a seamless carpet appearance and is available in a wide range of styles, colors, textures, fibers, and performance levels.",
      },
      {
        question: "Is broadloom carpet good for commercial spaces?",
        answer:
          "Yes. Commercial broadloom carpet flooring can be suitable for offices, suites, hospitality environments, apartments, and other commercial areas where comfort, appearance, and wall to wall coverage are important. Carpet selection should be based on expected foot traffic and the specific requirements of the space.",
      },
      {
        question: "How is broadloom carpet installed?",
        answer:
          "Broadloom carpet installation typically involves measuring the space, preparing the subfloor, installing the appropriate carpet pad, positioning the carpet, securing and stretching it properly, completing seams and edges, and finishing transitions.",
      },
      {
        question: "How long does broadloom carpet last?",
        answer:
          "The lifespan of broadloom carpet depends on the carpet fiber, quality, backing, pad, installation, foot traffic, maintenance, and environment. Choosing an appropriate carpet for the expected level of use can help maximize its service life.",
      },
      {
        question: "Is broadloom carpet easy to maintain?",
        answer:
          "Yes. Regular vacuuming, prompt spot cleaning, entryway mats, and periodic professional cleaning can help keep broadloom carpet looking fresh and performing well.",
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
        image: "/images/carpet-broadloom-gallery/Broadloom-Flooring-Special-Discount.webp",
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
