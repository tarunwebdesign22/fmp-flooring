import CommercialProjectsSection from "@/components/CommercialProjectsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import FederalMarquee from "@/components/FederalMarquee";
import FinanceBannerSection from "@/components/FinanceBannerSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import MailingListSection from "@/components/MailingListSection";
import SeniorDiscountSection from "@/components/SeniorDiscountSection";
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
import SimpleProcessSection from "@/components/SimpleProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Laminate Flooring | Durable & Affordable Laminate Floors | FMP Flooring",
  description:
    "Stylish, durable, and cost-effective laminate flooring installation from FMP Flooring. Wood-look finishes, waterproof options, and professional installation for homes and commercial spaces.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Laminate Services" },
    ],
    slides: [
      {
        id: "laminate-service",
        backgroundImage: "/images/laminate-page-banner.webp",
        financing: {
          eyebrow: "Laminate Services",
          titleBefore: "We Offer High-Quality Laminate Flooring — ",
          titleHighlightValue: "65%  Off Sale",
          titleAfter: "",
          description:
            "Upgrade your space with professional laminate flooring installation designed for busy homes and light commercial spaces.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "laminate-financing",
        backgroundImage: "/images/finance-banner.webp",
        financing: {
          eyebrow: "Flexible Payment Options",
          title: "Financing Available",
          description:
            "Buy now and pay over time! We offer several different financing programs for your laminate flooring project.",
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
      defaultService: "Laminate",
      highlight: "Free Installation & 50% Off Vinyl",
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
    eyebrow: "Laminate Services",
    title: "Stylish, Durable & Cost-Effective Flooring",
    paragraphs: [
      "Laminate flooring is a popular and affordable flooring option that delivers the look of natural hardwood or tile with enhanced durability and easy maintenance. Designed for modern living, laminate floors are ideal for residential and light commercial spaces where style, performance, and value matter.",
      "At FMP Flooring, we offer high-quality laminate flooring installation with a wide range of colors, textures, and wood-look finishes to suit every space and budget.",
    ],
    image: "/images/features/Renwick Oak01.jpg",
    imageAlt: "Wood-look laminate flooring in a modern living space",
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

const simpleProcessContent = [
  {
    title: "Get Brand New Laminate in 3 Simple Steps",
    steps: [
      {
        number: "1",
        title: "Schedule a Free In-Home Consult with a Flooring Expert",
        image: "/images/process-feature/04-final-walkthrough.jpg",
        imageAlt: "Scheduling a free in-home flooring consultation",
        buttonText: "Get Started Now",
        buttonHref: "/estimate",
      },
      {
        number: "2",
        title: "No Surprises, No Hidden Fees",
        description:
          "A flooring expert will bring samples, help you pick the right floors, measure your rooms, and give you an All-Inclusive Price Estimate.",
        image: "/images/process-feature/02-floor-preparation.jpg",
        imageAlt: "Flooring expert reviewing samples and estimate with homeowners",
      },
      {
        number: "3",
        title: "Schedule-Friendly Installation",
        description:
          "Upon approval, you will be able to finance your purchase and schedule your professional installation.",
        image: "/images/process-feature/03-installation.jpg",
        imageAlt: "Professional crew installing laminate flooring",
      },
    ],
  },
];

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
    title: "Why Choose Laminate Flooring?",
    backgroundImage: "/images/294-Wood-Flooring.webp",
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
      "Keep your laminate floors looking their best with a simple, consistent cleaning routine that protects the wear layer and finish.",
    backgroundImage: "/images/294-Wood-Flooring.webp",
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
    image: "/images/features/2.jpg",
    imageAlt: "Professional laminate flooring installation",
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
        question: "What is laminate flooring made of?",
        answer:
          "Laminate flooring is made of multiple layers, including a high-density fiberboard core and a durable wear layer.",
      },
      {
        question: "Is laminate flooring waterproof?",
        answer:
          "Standard laminate is water-resistant, and newer waterproof laminate options provide additional protection.",
      },
      {
        question: "Is laminate flooring good for pets?",
        answer:
          "Yes. Laminate floors are scratch-resistant and easy to clean, making them ideal for pet-friendly homes.",
      },
      {
        question: "How long does laminate flooring last?",
        answer:
          "With proper care, laminate flooring can last 15–25 years or longer.",
      },
    ],
  },
];

const seniorDiscountContent = [
  {
    highlight: "Save 10%",
    title: "Senior Citizen Discounts",
    description: "Save an additional 10%",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    image: "/images/old-flooring-image.jpg",
    imageAlt: "Senior couple reviewing flooring options at home",
  },
];

const healthcareDiscountContent = [
  {
    theme: "yellow",
    highlight: "Save 10%",
    title: "Healthcare Workers",
    description: "Save an additional 10%",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    image: "/images/heathcare.jpg",
    imageAlt: "Healthcare worker smiling outdoors",
  },
];

const militaryDiscountContent = [
  {
    theme: "teal",
    highlight: "Save 10%",
    title: "Military & Veterans",
    description: "Save an additional 10%",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    image: "/images/miltary.webp",
    imageAlt: "Thank you for your service chalkboard with American flag",
  },
];

const galleryContent = [
  {
    eyebrow: "Project Gallery",
    title: "Laminate Flooring Gallery",
    description:
      "Browse real laminate installations — wood-look finishes, living spaces, and professional project results from FMP Flooring.",
    images: [
      {
        src: "/images/laminate-gallery/Professional-Laminate-Flooring-Installation.png.webp",
        alt: "Professional laminate flooring installation",
      },
      {
        src: "/images/laminate-gallery/Laminating-Services-installation.png.webp",
        alt: "Laminate services installation",
      },
      {
        src: "/images/laminate-gallery/1.jpg",
        alt: "Laminate flooring project 1",
      },
      {
        src: "/images/laminate-gallery/2.jpg",
        alt: "Laminate flooring project 2",
      },
      {
        src: "/images/laminate-gallery/3.jpg",
        alt: "Laminate flooring project 3",
      },
      {
        src: "/images/laminate-gallery/8.jpg",
        alt: "Laminate flooring project 8",
      },
      {
        src: "/images/laminate-gallery/06 Jul 2023-3.jpg",
        alt: "Laminate flooring installation July 2023",
      },
      {
        src: "/images/laminate-gallery/06 Jul 2023-4.jpg",
        alt: "Completed laminate flooring project",
      },
      {
        src: "/images/laminate-gallery/06 Jul 2023-5.jpg",
        alt: "Laminate flooring detail",
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
    headlineTeal: "Laminate Flooring Quote",
    description:
      "Upgrade your space with stylish, durable laminate flooring. Contact FMP Flooring today for a free estimate and expert installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function LaminatePage() {
  return (
    <main className="flex flex-1 flex-col">
      <ServicePageHero content={heroContent} />
      <FederalMarquee />
      <ServiceIntroSection content={introContent} />
      <MailingListSection content={mailingListContent} />
      <SimpleProcessSection content={simpleProcessContent} />
      <FinanceBannerSection content={financeBannerContent} />
      <ServiceBenefitsSection content={benefitsContent} />
      <ServiceHighlightsStrip content={highlightsContent} />
      <SeniorDiscountSection content={seniorDiscountContent} />
      <ServiceTipsSection content={tipsContent} />
      <ServiceApplicationsSection content={applicationsContent} />
      <SeniorDiscountSection content={healthcareDiscountContent} />
      <ServiceCompareSection content={compareContent} />
      <ServiceInstallSection content={installContent} />
      <CommercialProjectsSection content={commercialProjectsContent} />
      
      
      <SeniorDiscountSection content={militaryDiscountContent} />
      <ImageGallerySection content={galleryContent} />
      <TestimonialsSection content={testimonialsContent} />
      <FaqSection content={faqContent} />
      <FederalMarquee />
      <CtaSection content={ctaContent} />
    </main>
  );
}
