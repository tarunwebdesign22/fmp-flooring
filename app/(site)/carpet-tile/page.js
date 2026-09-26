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
  title: "Carpet Tile Flooring & Installation | FMP Flooring",
  description:
    "Explore durable carpet tile flooring for offices, retail spaces, schools, and homes. FMP Flooring provides professional carpet tile selection and installation.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Carpet Tile Flooring" },
    ],
    slides: [
      {
        id: "carpet-tile-service",
        backgroundImage: "/images/carpet-tile-gallery/Carpet-Tile-Banner.webp",
        financing: {
          eyebrow: "Carpet Tile Flooring",
          eyebrowAsBadge: true,
          titleBefore: "Durable ",
          titleHighlightValue: "Carpet Tile Flooring",
          titleAfter: " for Commercial & Residential Spaces",
          description:
            "Upgrade your space with versatile carpet tile flooring designed for offices, retail spaces, schools, and modern homes. Choose from durable styles that offer easy maintenance and flexible replacement.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "carpet-tile-financing",
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
      defaultService: "Carpet Tile",
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
    eyebrow: "Carpet Tile Flooring",
    title: "Carpet Tile Flooring for Commercial & Residential Spaces",
    paragraphs: [
      "Carpet tile flooring, also known as modular carpet flooring, is a practical flooring solution for spaces that need durability, design flexibility, and easy maintenance. Unlike traditional wall to wall carpet, carpet tiles are installed as individual sections, making them easier to replace when a specific area becomes worn or damaged.",
      "At FMP Flooring, we provide carpet tile and flooring solutions for offices, retail stores, schools, healthcare facilities, apartments, home offices, and other residential or commercial spaces. We help you select carpet tiles based on traffic, appearance, maintenance needs, and budget, then provide professional installation for a clean and finished result.",
    ],
    images: [
      {
        src: "/images/carpet-tile-gallery/carpet-tile-gallery-1.webp",
        alt: "Modular carpet tile flooring in a commercial office",
      },
      {
        src: "/images/carpet-tile-gallery/carpet-tile-gallery-2.webp",
        alt: "Professional carpet tile flooring installation",
      },
      {
        src: "/images/carpet-tile-gallery/carpet-tile-gallery-3.webp",
        alt: "Carpet tile installation in progress",
      },
      {
        src: "/images/carpet-tile-gallery/carpet-tile-gallery-4.webp",
        alt: "Carpet tile flooring installation services",
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
  "Get New Carpet Tile Flooring in 4 Simple Steps",
  "Our straightforward installation process keeps your carpet tile flooring project organized and efficient from initial preparation through final finishing.",
  [
    {
      step: "01",
      title: "Remove Existing Flooring",
      description:
        "We carefully remove existing carpet, tile, or other flooring and clear the space so it is ready for your new carpet tile flooring installation.",
    },
    {
      step: "02",
      title: "Prepare the Subfloor",
      description:
        "We inspect and prepare the subfloor to create a clean, smooth, and stable foundation for your new carpet floor tiles.",
    },
    {
      step: "03",
      title: "Professional Carpet Tile Installation",
      description:
        "Our experienced installers carefully position and install each carpet tile to create a clean, secure, and professional finished floor.",
    },
    {
      step: "04",
      title: "Finishing Details & Final Walkthrough",
      description:
        "We complete the installation with edges, transitions, trim, and other finishing details, then clean the space and perform a final walkthrough.",
    },
  ],
);

const financeBannerContent = [
  {
    title: "Financing Available",
    description: "Convenient monthly payment options may help make your new carpet tile flooring more manageable for your budget.",
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
    title: "Why Choose Carpet Tile Flooring?",
    description:
      "Carpet tile flooring combines durability, design flexibility, easy maintenance, and convenient replacement, making it a practical choice for many residential and commercial spaces.",
    backgroundImage: "/images/carpet-tile-gallery/why-choose-carpet-flooring.webp",
    items: [
      {
        icon: "durable",
        title: "Durable Carpet Tiles for High Traffic Areas",
        description:
          "Carpet tiles are available in durable options designed for busy spaces such as offices, hallways, conference rooms, and retail areas. The right carpet tile can provide reliable performance in areas with frequent foot traffic.",
      },
      {
        icon: "affordable",
        title: "Easy Installation & Individual Tile Replacement",
        description:
          "Carpet tile flooring offers a practical advantage when repairs are needed. Individual carpet tiles can often be replaced when they become damaged or heavily stained, reducing the need to replace the entire floor.",
      },
      {
        icon: "maintenance",
        title: "Low Maintenance Carpet Tile Flooring",
        description:
          "Routine vacuuming and prompt spot cleaning can help keep carpet tiles looking their best. Because the flooring is modular, individual damaged areas can be addressed without replacing the entire installation.",
      },
      {
        icon: "styles",
        title: "Flexible Designs with Modular Carpet Tiles",
        description:
          "Carpet tiles are available in a wide range of colors, textures, patterns, and layouts. Their modular format makes it easier to create distinctive designs that complement offices, retail spaces, schools, and modern interiors.",
      },
      {
        icon: "moisture",
        title: "Eco Friendly Carpet Tile Options",
        description:
          "Some carpet tile products are manufactured with recycled materials or designed with recycling programs in mind. Product availability and sustainability features vary by manufacturer, so we can help you select an option that fits your project requirements.",
      },
    ],
  },
];

const highlightsContent = [
  {
    items: [
      { icon: "installation", lines: ["Professional Carpet ", "Tile Installation"] },
      { icon: "consultation", lines: ["Free Flooring", "Consultations"] },
      { icon: "support", lines: ["Expert Flooring", "Support"] },
      { icon: "selection", lines: ["Wide Selection of", "Carpet Tile Options"] },
    ],
  },
];

const tipsContent = [
  {
    eyebrow: "Care Guide",
    title: "Carpet Tile Flooring Maintenance Tips",
    description:
      "Regular maintenance helps keep carpet tile flooring clean, attractive, and ready for everyday use. Vacuum regularly, address spills promptly, and replace individual tiles when necessary to maintain the appearance of your floor.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      "Vacuum regularly to remove dirt, dust, and debris before they become embedded in carpet tile fibers.",
      "Clean spills promptly using an appropriate carpet cleaning solution to help prevent stains from setting into the carpet fibers.",
      "Schedule periodic professional or deep cleaning based on the carpet tile manufacturer's care recommendations to maintain appearance and performance.",
      "Replace individual damaged or heavily stained carpet tiles when needed instead of replacing the entire floor.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Carpet Tile Flooring Applications",
    description:
      "Carpet tile flooring works well in a variety of commercial and residential spaces where durability, design flexibility, and easy maintenance are important.",
    items: [
      "Commercial Office Carpet Tile Flooring",
      "Corporate & Coworking Spaces",
      "Retail Stores & Showrooms",
      "Conference & Meeting Rooms",
      "Schools & Educational Facilities",
      "Healthcare & Medical Offices",
      "Home Offices",
      "Basements & Playrooms",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Carpet Tile Flooring vs Broadloom Carpet",
    intro:
      "Compare carpet tile flooring and broadloom carpet to determine which option better fits your space, maintenance needs, design preferences, and replacement requirements.",
    featureLabel: "Feature",
    columns: ["Carpet Tile Flooring", "Broadloom Carpet"],
    rows: [
      {
        feature: "Installation",
        values: ["Modular tile installation", "Wall to wall installation"],
      },
      {
        feature: "Replacement",
        values: ["Individual tile replacement", "Larger area replacement"],
      },
      {
        feature: "Design Options",
        values: ["Flexible patterns and layouts", "Wide range of colors and styles"],
      },
      {
        feature: "High Traffic Performance",
        values: [
          "Well suited for many high traffic areas",
          "Performance varies by carpet type",
        ],
      },
      {
        feature: "Maintenance",
        values: [
          "Individual tiles can be replaced when needed",
          "Damaged areas may require larger replacement",
        ],
      },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Carpet Tile Flooring Installation Services",
    paragraphs: [
      "Our experienced installers provide professional carpet tile flooring installation for commercial and residential projects. We focus on accurate layout, proper preparation, secure installation, clean edges, and a finished appearance that fits your space.",
    ],
    servicesTitle: "Our Carpet Tile Flooring Services Include:",
    services: [
      "Free on site flooring consultations",
      "Accurate flooring measurements and estimates",
      "Professional carpet tile installation",
      "Commercial and residential carpet tile solutions",
      "Proper layout and tile positioning",
      "Final cleanup and project walkthrough",
    ],
    image:
      "/images/carpet-tile-gallery/Professional-Carpet-Tile-Image.webp",
    imageAlt: "Professional carpet tile flooring installation",
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
          "Carpet tiles can be made from several types of carpet fibers, including nylon, polypropylene, polyester, and recycled materials. The specific fiber affects characteristics such as durability, appearance, stain resistance, and maintenance requirements.",
      },
      {
        question: "Are carpet tiles waterproof?",
        answer:
          "Carpet tiles are generally not completely waterproof. Their moisture resistance depends on the carpet fiber, backing, installation system, and specific product. For areas exposed to moisture, the flooring should be selected according to the manufacturer's performance specifications.",
      },
      {
        question: "How much does carpet tile flooring cost?",
        answer:
          "The cost of carpet tile flooring depends on the product, quality, materials, installation requirements, subfloor condition, project size, and preparation work. The best way to determine your project cost is to request a flooring measurement and estimate based on your specific space.",
      },
      {
        question: "Are carpet tiles good for offices?",
        answer:
          "Yes. Carpet tiles can be a practical choice for offices because they offer design flexibility, easy maintenance, and convenient individual tile replacement. They are available in options designed for different levels of commercial foot traffic.",
      },
      {
        question: "What is carpet tile flooring?",
        answer:
          "Carpet tile flooring is a modular flooring system made from individual carpet tiles that are installed together to cover a floor. Unlike traditional broadloom carpet, damaged or heavily worn sections can often be replaced individually.",
      },
      {
        question: "What are the benefits of carpet tile flooring?",
        answer:
          "Carpet tile flooring offers design flexibility, convenient installation, easy maintenance, and individual tile replacement. It can be a useful flooring option for offices, retail spaces, schools, healthcare facilities, apartments, and other areas with regular foot traffic.",
      },
      {
        question: "Where are carpet floor tiles commonly used?",
        answer:
          "Carpet floor tiles are commonly used in offices, corporate spaces, coworking areas, retail stores, schools, conference rooms, healthcare offices, home offices, basements, and other residential or commercial spaces.",
      },
      {
        question: "Can individual carpet tiles be replaced?",
        answer:
          "Yes. One of the main advantages of modular carpet tiles is that an individual damaged or heavily stained tile can often be removed and replaced without replacing the entire floor.",
      },
      {
        question: "Are carpet tiles good for high traffic areas?",
        answer:
          "Carpet tiles can be suitable for high traffic areas when the product is selected according to the expected level of use. Commercial grade options are available for spaces such as offices, hallways, retail environments, schools, and other busy areas.",
      },
      {
        question: "What is the difference between carpet tiles and broadloom carpet?",
        answer:
          "Carpet tiles are individual modular pieces that can be installed in different patterns and replaced individually when necessary. Broadloom carpet is supplied in larger continuous rolls and is typically installed wall to wall. The better option depends on the space, design requirements, traffic, maintenance needs, and replacement preferences.",
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
        image: "/images/carpet-tile-gallery/carpet-tile-flooring-special-image.webp",
        imageAlt: "Carpet tile flooring in a commercial office",
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
    eyebrow: "READY FOR NEW CARPET?",
    title: "Find the Right Carpet Tile Flooring for Your Space",
    description:
      "Whether you are updating an office, retail space, school, apartment, or home, FMP Flooring can help you choose the right carpet tiles and provide professional installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Get Your Free Estimate",
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
