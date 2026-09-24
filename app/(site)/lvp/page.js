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
  title: "Luxury Vinyl Plank Flooring & Installation | FMP Flooring",
  description:
    "Discover luxury vinyl plank flooring from FMP Flooring. Explore waterproof, durable LVP flooring and professional vinyl plank flooring installation for homes and businesses.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Luxury Vinyl Plank Flooring" },
    ],
    slides: [
      {
        id: "lvp-service",
        backgroundImage: "/images/lvp-update-banner.webp",
        financing: {
          eyebrow: "LVP Flooring",
          eyebrowAsBadge: true,
          titleBefore: "",
          titleHighlightValue: "Luxury Vinyl Plank Flooring",
          titleAfter: " for Homes & Businesses",
          description:
            "Upgrade your home or commercial space with luxury vinyl plank flooring that combines the realistic look of hardwood with waterproof performance, exceptional durability, and easy maintenance.",
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
    eyebrow: "LVP Flooring",
    title: "Luxury Vinyl Plank Flooring: Waterproof LVP Solutions",
    paragraphs: [
      "Luxury vinyl plank flooring is a popular flooring solution for homes and commercial spaces because it combines the appearance of natural hardwood with excellent durability and water resistance. Available in a wide range of colors, textures, plank sizes, and wood inspired designs, luxury vinyl plank flooring makes it easy to create a stylish and practical space.",
      "At FMP Flooring, we provide premium luxury vinyl plank flooring solutions for residential and commercial projects. Our flooring options are designed for everyday performance while offering easy maintenance, comfortable underfoot performance, and the realistic appearance of hardwood.",
    ],
    images: [
      {
        src: "/images/lvp-gallery/lvp-gallery-1.webp",
        alt: "Luxury vinyl plank flooring in a modern space",
      },
      {
        src: "/images/lvp-gallery/lvp-gallery-2.webp",
        alt: "Urban Pine luxury vinyl plank flooring",
      },
      {
        src: "/images/lvp-gallery/lvp-gallery-3.webp",
        alt: "Bloomington Oak LVP flooring",
      },
      {
        src: "/images/lvp-gallery/lvp-gallery-4.webp",
        alt: "Caramel luxury vinyl plank flooring",
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
  "Get New Luxury Vinyl Plank Flooring in 4 Simple Steps",
  "Our simple installation process keeps your luxury vinyl plank flooring project organized, efficient, and stress free from the initial preparation to the final finishing touches.",
  [
    {
      step: "01",
      title: "Remove Existing Flooring",
      description:
        "We carefully remove your existing carpet, tile, or other flooring and clear the space so it is clean and ready for your new vinyl plank flooring installation.",
    },
    {
      step: "02",
      title: "Prepare the Subfloor",
      description:
        "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your luxury vinyl plank flooring.",
    },
    {
      step: "03",
      title: "Professional Vinyl Plank Flooring Installation",
      description:
        "Our experienced installers carefully place your new vinyl planks for a clean, seamless, and professional finish. We follow proper installation practices to help ensure long lasting performance.",
    },
    {
      step: "04",
      title: "Trim, Fixtures & Final Touches",
      description:
        "We complete your vinyl plank flooring installation with trim and finishing details, reinstall removed fixtures, and make sure the space is clean, polished, and ready to enjoy.",
    },
  ],
);

const financeBannerContent = [
  {
    title: "Financing Available",
    description: "Convenient monthly payment options can make your new luxury vinyl plank flooring project easier to budget.",
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
    title: "Why Choose Luxury Vinyl Plank Flooring?",
    description:
      "Luxury vinyl plank flooring combines the appearance of hardwood with practical features designed for busy homes and commercial spaces.",
    backgroundImage: "/images/lvp-gallery/why-choose-luxury-flooring.webp",
    items: [
      {
        icon: "moisture",
        title: "Waterproof Vinyl Plank Flooring",
        description:
          "Luxury vinyl plank flooring is designed to provide waterproof performance, making it a practical choice for moisture prone areas such as kitchens, bathrooms, basements, and laundry rooms.",
      },
      {
        icon: "durable",
        title: "Durable & Scratch Resistant Vinyl Flooring",
        description:
          "Luxury vinyl plank flooring is built to handle everyday foot traffic, pets, and normal wear. Its protective wear layer helps resist scratches, dents, and stains while maintaining its appearance.",
      },
      {
        icon: "styles",
        title: "Realistic Hardwood Look",
        description:
          "Advanced printing and embossed textures give luxury vinyl plank flooring the realistic appearance of natural hardwood while providing easier maintenance and everyday durability.",
      },
      {
        icon: "maintenance",
        title: "Easy Maintenance",
        description:
          "Luxury vinyl plank flooring is easy to maintain with regular sweeping or vacuuming and occasional damp mopping. Unlike traditional hardwood, it does not require refinishing to maintain its everyday appearance.",
      },
      {
        icon: "affordable",
        title: "Comfortable & Quiet Underfoot",
        description:
          "Luxury vinyl plank flooring provides a comfortable surface underfoot and can offer a quieter feel compared with traditional hard flooring surfaces.",
      },
    ],
  },
];

const highlightsContent = [
  {
    items: [
      { icon: "installation", lines: ["Professional Installation", "Services"] },
      { icon: "consultation", lines: ["Free In Home", "Consultations"] },
      { icon: "support", lines: ["Expert Flooring", "Support"] },
      { icon: "selection", lines: ["Wide Selection of", "Flooring Options"] },
    ],
  },
];

const tipsContent = [
  {
    eyebrow: "Care Guide",
    title: "Luxury Vinyl Plank Flooring Maintenance Tips",
    description:
      "Keep your luxury vinyl plank flooring looking its best with a simple cleaning routine that helps protect the wear layer, maintain its appearance, and preserve its waterproof performance.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      "Vacuum or sweep regularly to remove dirt, dust, and debris from the luxury vinyl plank surface.",
      "Damp mop regularly using a manufacturer approved vinyl floor cleaner or other suitable mild cleaning solution.",
      "Clean spills promptly to help maintain the appearance and long term performance of your vinyl plank flooring.",
      "Avoid harsh chemicals, abrasive cleaners, and cleaning methods that may damage the protective wear layer.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Luxury Vinyl Plank Flooring Applications",
    description: "Luxury vinyl plank flooring is ideal for residential and commercial spaces where durability, water resistance, easy maintenance, and a hardwood inspired appearance are important.",

    items: [
      "Living Rooms and Family Rooms",
      "Kitchens and Bathrooms",
      "Basements and Laundry Rooms",
      "Bedrooms and Hallways",
      "Retail Spaces and Offices",
      "Rental Properties and Remodeling Projects",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Luxury Vinyl Plank Flooring vs Hardwood and Laminate Flooring",
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
    title: "Professional Vinyl Plank Flooring Installation",
    paragraphs: [
      "Professional installation helps ensure your luxury vinyl plank flooring looks great and performs as intended. Our experienced installers specialize in proper subfloor preparation, precise plank placement, finishing details, and a clean professional result.",
    ],
    servicesTitle: "Our Luxury Vinyl Plank Flooring Services Include:",
    services: [
      "Free in home consultations",
      "Accurate flooring estimates",
      "Professional vinyl plank flooring installation",
      "Subfloor preparation",
      "Residential and commercial flooring solutions",
      "Final cleanup and finishing",
    ],
    image: "/images/lvp-gallery/Professional-Luxury-Image.webp",
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
    backgroundColor: "#221e53",
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
          "Luxury vinyl plank flooring is a durable flooring solution designed to replicate the appearance of natural hardwood while offering water resistance, easy maintenance, and excellent everyday performance.",
      },
      {
        question: "Is luxury vinyl plank flooring waterproof?",
        answer:
          "Many luxury vinyl plank flooring products are designed to provide waterproof performance. The exact level of water resistance depends on the specific product and installation system, so product specifications should always be reviewed before installation.",
      },
      {
        question: "Where can vinyl plank flooring be installed?",
        answer:
          "Vinyl plank flooring can be installed in many residential and commercial spaces, including living rooms, bedrooms, kitchens, bathrooms, basements, offices, retail spaces, and rental properties.",
      },
      {
        question: "How is vinyl plank flooring installed?",
        answer:
          "Vinyl plank flooring installation generally involves preparing the subfloor, measuring and planning the layout, installing the planks according to the manufacturer's requirements, and completing trim and finishing work.",
      },
      {
        question: "Is luxury vinyl plank flooring easy to maintain?",
        answer:
          "Yes. Luxury vinyl plank flooring generally requires regular sweeping or vacuuming and occasional damp mopping with an appropriate floor cleaner.",
      },
      {
        question: "Is vinyl plank flooring good for homes with pets and children?",
        answer:
          "Luxury vinyl plank flooring can be a practical choice for busy households because many products offer strong scratch resistance, easy maintenance, and water resistant or waterproof performance.",
      },
      {
        question: "Can luxury vinyl plank flooring be used in commercial spaces?",
        answer:
          "Yes. Luxury vinyl plank flooring can be suitable for many commercial environments, including offices, retail spaces, rental properties, and other areas where durability and easy maintenance are important.",
      },
      {
        question: "Why should I choose professional vinyl plank flooring installation?",
        answer:
          "Professional installation helps ensure proper subfloor preparation, accurate plank placement, appropriate finishing, and a clean final result. Proper installation can also help support the flooring manufacturer's requirements.",
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
        image: "/images/lvp-gallery/Luxury-Flooring-Special-Discount.webp",
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
    headlineWhite: "Get Your Free",
    headlineTeal: "Luxury Vinyl Plank Flooring Estimate",
    description:
      "Ready to transform your home or commercial space? Contact FMP Flooring for expert guidance, accurate estimates, and professional luxury vinyl plank flooring installation.",
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
