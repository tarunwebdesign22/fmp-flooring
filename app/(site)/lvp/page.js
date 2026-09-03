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
  title: "Luxury Vinyl Plank | Waterproof LVP Flooring | FMP Flooring",
  description:
    "Affordable waterproof luxury vinyl plank flooring from FMP Flooring. Durable wood-look LVP installation for homes and commercial spaces in North Carolina.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "LVP Flooring Services" },
    ],
    slides: [
      {
        id: "lvp-service",
        backgroundImage: "/images/lvp-page-banner.webp",
        financing: {
          eyebrow: "LVP Flooring Services",
          titleBefore: "We Offer High-Quality Luxury Vinyl Plank — ",
          titleHighlightValue: "65%  Off Sale",
          titleAfter: "",
          description:
            "Upgrade your space with waterproof LVP flooring that delivers the look of hardwood with superior durability and easy maintenance.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "lvp-financing",
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
      defaultService: "Luxury Vinyl Plank",
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
    eyebrow: "LVP Flooring Services",
    title: "Luxury Vinyl Plank Flooring — Waterproof LVP Solutions",
    paragraphs: [
      "Luxury Vinyl Plank flooring (LVP) is one of the most popular modern flooring options for homes and commercial spaces. Designed to replicate the natural look of hardwood, LVP flooring offers superior durability, waterproof performance, and easy maintenance at a more affordable price.",
      "At FMP Flooring, we offer premium luxury vinyl plank flooring installation for residential and commercial projects, with a wide range of wood-look styles, textures, and plank sizes.",
    ],
    images: [
      {
        src: "/images/home-services/new/Service_Luxury_Vinyl_Plank.webp",
        alt: "Luxury vinyl plank flooring in a modern space",
      },
      {
        src: "/images/lvp-gallery/Urban-Pine-01.png",
        alt: "Urban Pine luxury vinyl plank flooring",
      },
      {
        src: "/images/lvp-gallery/Bloomington-Oak.png",
        alt: "Bloomington Oak LVP flooring",
      },
      {
        src: "/images/lvp-gallery/Caramel.jpg",
        alt: "Caramel luxury vinyl plank flooring",
      },
      {
        src: "/images/lvp-gallery/Renwick-Oak01.jpg",
        alt: "Renwick Oak LVP flooring",
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
  "Get Brand New LVP Flooring in 4 Simple Steps",
  "A clear, step-by-step process so your luxury vinyl plank flooring project stays organized, efficient, and stress-free from start to finish.",
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
    title: "Why Choose Luxury Vinyl Plank Flooring?",
    backgroundImage: "/images/lvp-gallery/Urban-Pine-01.png",
    items: [
      {
        icon: "moisture",
        title: "Waterproof & Moisture-Resistant",
        description:
          "Luxury vinyl plank flooring is 100% waterproof, making it ideal for kitchens, bathrooms, basements, laundry rooms, and high-moisture environments.",
      },
      {
        icon: "durable",
        title: "Durable & Scratch-Resistant",
        description:
          "LVP flooring is built to handle heavy foot traffic, pets, and everyday wear. Its protective wear layer resists scratches, dents, and stains.",
      },
      {
        icon: "styles",
        title: "Realistic Hardwood Look",
        description:
          "Advanced printing and embossed textures give luxury vinyl plank the appearance of real hardwood without the maintenance challenges.",
      },
      {
        icon: "maintenance",
        title: "Easy Maintenance",
        description:
          "LVP flooring is easy to clean with regular sweeping and occasional damp mopping. No refinishing or special treatments required.",
      },
      {
        icon: "affordable",
        title: "Comfortable & Quiet Underfoot",
        description:
          "Luxury vinyl plank provides warmth, sound reduction, and comfort compared to traditional hard flooring surfaces.",
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
      "Keep your LVP floors looking their best with a simple cleaning routine that protects the wear layer and waterproof surface.",
    backgroundImage: "/images/294-Wood-Flooring.webp",
    tips: [
      "Vacuum daily to remove debris from the plank surface.",
      "Damp mop with a mild vinyl floor cleaner or mild dish soap.",
      "Clean spills quickly to maintain appearance and longevity.",
      "Avoid harsh chemicals that can damage the wear layer finish.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Luxury Vinyl Plank Flooring Applications",
    description: "Luxury vinyl plank flooring is ideal for:",
    items: [
      "Living rooms and family rooms",
      "Kitchens and bathrooms",
      "Basements and laundry rooms",
      "Bedrooms and hallways",
      "Retail spaces and offices",
      "Rental properties and remodels",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "LVP Flooring vs Other Flooring Types",
    featureLabel: "Feature",
    columns: ["LVP Flooring", "Hardwood Flooring", "Laminate Flooring"],
    rows: [
      { feature: "Waterproof", values: [true, false, "Partial"] },
      { feature: "Scratch Resistance", values: ["High", "Moderate", "High"] },
      { feature: "Hardwood Look", values: [true, true, true] },
      { feature: "Maintenance", values: ["Easy", "Moderate", "Easy"] },
      { feature: "Pet & Kid Friendly", values: [true, "Partial", true] },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Luxury Vinyl Plank Installation",
    description:
      "Our expert installers specialize in luxury vinyl plank flooring installation, ensuring proper subfloor preparation, precise plank placement, and a long-lasting finish.",
    servicesTitle: "Our LVP Flooring Services Include:",
    services: [
      "Free in-home consultations",
      "Accurate flooring estimates",
      "Professional LVP flooring installation",
      "Residential and commercial LVP solutions",
    ],
    image: "/images/lvp-gallery/Bloomington-Oak.png",
    imageAlt: "Professional luxury vinyl plank flooring installation",
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
          "We’re very happy with the work this team did for us! They replaced our flooring with beautiful LVP and completely redid our staircase — everything looks stunning and was done with great attention to detail. The crew was professional, respectful, and finished everything on time. Highly recommend them!",
        author: "Vitalika M",
      },
      {
        quote:
          "The best investment I’ve made! Furnish My Place Flooring’s LVP flooring is high-quality, easy to install and completely transformed my space!! Their attention to detail and commitment to customer satisfaction are outstanding!!!",
        author: "Georgia Austin",
      },
      {
        quote:
          "I recently purchased LVP flooring from Furnish My Place. The quality is outstanding—durable, stylish, and exactly what I was looking for. The prices were incredibly affordable compared to other options I checked out. Highly recommend this company if you're looking for high-quality flooring at great prices!",
        author: "Philip Kylian",
      },
    ],
  },
];

const faqContent = [
  {
    title: "LVP Flooring FAQs",
    items: [
      {
        question: "What is luxury vinyl plank flooring?",
        answer:
          "Luxury vinyl plank flooring is a durable, waterproof flooring option designed to look like real hardwood.",
      },
      {
        question: "Is LVP flooring waterproof?",
        answer: "Yes. Most luxury vinyl plank flooring is 100% waterproof.",
      },
      {
        question: "Is luxury vinyl plank good for pets?",
        answer:
          "Yes. LVP flooring is scratch-resistant and easy to clean, making it ideal for pet-friendly homes.",
      },
      {
        question: "How long does LVP flooring last?",
        answer:
          "With proper installation and care, luxury vinyl plank flooring can last 15–25 years or longer.",
      },
      {
        question: "What is the warranty on LVP flooring?",
        answer:
          "We offer a lifetime warranty on all LVP flooring products, ensuring long-lasting protection against manufacturing defects.",
      },
      {
        question: "Is LVP Flooring pet and kid friendly?",
        answer:
          "Yes, LVP flooring is perfect for homes with pets and children. Its scratch-resistant and waterproof features make it durable enough to handle everyday wear and tear from active households.",
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
        image: "/images/lvp-gallery/Caramel.jpg",
        imageAlt: "Caramel luxury vinyl plank flooring",
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
    headlineTeal: "Luxury Vinyl Plank Quote",
    description:
      "Upgrade your space with beautiful, durable luxury vinyl plank flooring. Contact FMP Flooring today for a free estimate and expert installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function LvpPage() {
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
