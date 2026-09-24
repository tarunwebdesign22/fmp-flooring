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
  title: "Rubber Flooring for Gyms & Commercial Spaces | FMP Flooring",
  description:
    "Explore durable rubber flooring for gyms, exercise rooms, schools, and commercial spaces. FMP Flooring offers quality rubber flooring and professional installation.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Rubber Flooring" },
    ],
    slides: [
      {
        id: "rubber-service",
        backgroundImage: "/images/rubber-gallery/rubber-flooring-banner.webp",
        financing: {
          eyebrow: "Rubber Flooring",
          eyebrowAsBadge: true,
          titleBefore: "We Offer High-Quality ",
          titleHighlightValue: "Rubber Flooring",
          titleAfter: "",
          description:
            "Upgrade your space with professional rubber flooring installation — durable, slip-resistant floors for gyms, schools, and commercial projects.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "rubber-financing",
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
      defaultService: "Rubber",
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
    eyebrow: "Rubber Flooring",
    title: "Rubber Flooring – Resilient, Comfortable & Long-Lasting",
    paragraphs: [
      "Rubber flooring is a versatile, heavy-duty flooring solution ideal for commercial and residential use. Known for its durability, slip resistance, comfort underfoot, and noise-reducing performance, rubber floors are perfect for gyms, fitness centers, playrooms, schools, healthcare facilities, garages, and more.",
      "At FMP Flooring, we offer premium commercial rubber flooring and residential rubber flooring options in a range of thicknesses, colors, and styles to match your project’s needs.",
    ],
    images: [
      {
        src: "/images/rubber-gallery/rubber-flooring-gallery-1.webp",
        alt: "Rubber flooring in a school playground",
      },
      {
        src: "/images/rubber-gallery/rubber-flooring-gallery-2.webp",
        alt: "Rubber flooring in a commercial gym",
      },
      {
        src: "/images/rubber-gallery/rubber-flooring-gallery-3.webp",
        alt: "Speckled rubber flooring in a modern interior",
      },
      {
        src: "/images/rubber-gallery/rubber-flooring-gallery-4.webp",
        alt: "Professional rubber flooring installation in a gym",
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
  "Get Brand New Rubber Flooring in 4 Simple Steps",
  "A clear, step-by-step process so your rubber flooring project stays organized, efficient, and stress-free from start to finish.",
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
    title: "Why Choose Rubber Flooring?",
    backgroundImage: "/images/rubber-gallery/why-choose-rubber-flooring.webp",
    items: [
      {
        icon: "durable",
        title: "Extremely Durable & Long-Lasting",
        description:
          "Rubber flooring is engineered to withstand high-traffic areas and impact, making it ideal for commercial rubber flooring, gym flooring, and busy spaces that require long-lasting performance.",
      },
      {
        icon: "affordable",
        title: "Comfortable & Shock-Absorbing",
        description:
          "Rubber floors provide cushioning underfoot, reducing fatigue and minimizing stress on joints — perfect for fitness rooms, gyms, childcare areas, and standing workstations.",
      },
      {
        icon: "moisture",
        title: "Slip-Resistant & Safe",
        description:
          "Rubber flooring delivers excellent traction and slip resistance, making it a safe choice for gyms, school hallways, and wet areas such as locker rooms or poolsides.",
      },
      {
        icon: "maintenance",
        title: "Low-Maintenance & Easy to Clean",
        description:
          "Rubber floors are simple to maintain. Regular sweeping and damp mopping keep your rubber flooring looking great without special cleaners.",
      },
      {
        icon: "styles",
        title: "Eco-Friendly & Recyclable Options",
        description:
          "Many rubber flooring products are made from recycled materials and can be recycled again at end of life, making them a sustainable flooring choice.",
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
      "Keep your rubber floors looking their best with a simple, consistent cleaning routine that protects the surface and slip-resistant texture.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      "Sweep or vacuum regularly to remove dirt and debris from the textured surface.",
      "Damp mop with a pH-neutral cleaner — avoid harsh chemicals and solvents.",
      "Address stubborn stains promptly with a soft brush and a gentle solution.",
      "Place mats at entryways to reduce grit and extend the life of the floor.",
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Applications for Rubber Flooring",
    description: "Rubber flooring is ideal for:",
    items: [
      "Commercial gym and fitness center flooring",
      "Home gym flooring",
      "Childcare and preschool play areas",
      "Healthcare facilities and clinics",
      "School hallways and classrooms",
      "Locker rooms and wet zones",
      "Garages and workshop floors",
      "Retail and commercial spaces",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Rubber Flooring vs Other Floor Types",
    featureLabel: "Feature",
    columns: ["Rubber Flooring", "Vinyl Flooring", "Carpet Flooring"],
    rows: [
      { feature: "Durability", values: ["Excellent", "Good", "Moderate"] },
      { feature: "Moisture Resistance", values: ["Very Good", "Very Good", "Poor"] },
      { feature: "Comfort Underfoot", values: ["High", "Moderate", "High"] },
      { feature: "Slip Resistance", values: ["Excellent", "Good", "Poor"] },
      { feature: "Best For Gyms/Play Areas", values: [true, "Partial", false] },
    ],
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Rubber Flooring Installation",
    description:
      "Our experienced flooring professionals ensure proper layout, precise cuts, and secure installation for every rubber flooring project — whether commercial or residential.",
    servicesTitle: "Our Rubber Flooring Services Include:",
    services: [
      "Free on-site consultation and measurement",
      "Accurate project quotes",
      "Professional rubber flooring installation",
      "Commercial and residential rubber flooring solutions",
    ],
    image: "/images/rubber-gallery/Professional-Rubber-Flooring-Image.webp",
    imageAlt: "Professional rubber flooring installation",
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
          "FMP Flooring LLC provided exceptional service from start to finish. Their knowledge and expertise helped us choose the perfect flooring for our retail store, enhancing both safety and style.",
        author: "James T",
      },
      {
        quote:
          "The team at FMP Flooring LLC was incredibly helpful in guiding us through the selection process. The rubber flooring they installed in our restaurant has held up beautifully against spills and high foot traffic.",
        author: "Mike L",
      },
      {
        quote:
          "We recently installed rubber flooring from FMP Flooring LLC in our gym, and the difference is astounding! It not only looks fantastic but also provides excellent shock absorption for our fitness classes.",
        author: "Sarah J",
      },
    ],
  },
];

const faqContent = [
  {
    title: "Rubber Flooring Frequently Asked Questions",
    items: [
      {
        question: "What is rubber flooring?",
        answer:
          "Rubber flooring is a resilient flooring material made from natural or synthetic rubber. It is designed to provide durability, traction, impact resistance, and comfort for a wide range of residential and commercial applications.",
      },
      {
        question: "Is rubber flooring good for gyms?",
        answer:
          "Yes. Rubber flooring is an excellent option for gyms and fitness facilities. It provides durability, impact resistance, traction, and cushioning underfoot, making it suitable for workout areas, weight rooms, and training spaces.",
      },
      {
        question: "Is rubber flooring good for exercise rooms?",
        answer:
          "Yes. Rubber exercise room flooring provides a comfortable and durable surface for workout spaces. It can help absorb impact and provide good traction during exercise and training activities.",
      },
      {
        question: "Can rubber flooring be used outdoors?",
        answer:
          "Some rubber flooring products are designed for outdoor applications, while others are intended for indoor use. The appropriate product should be selected based on exposure to weather, moisture, sunlight, temperature, and the intended application.",
      },
      {
        question: "How do you clean rubber flooring?",
        answer:
          "Regular sweeping or vacuuming followed by damp mopping can help keep rubber flooring clean. Use a suitable pH neutral cleaner and avoid harsh chemicals unless the flooring manufacturer specifically recommends them.",
      },
      {
        question: "How long does rubber flooring last?",
        answer:
          "The lifespan of rubber flooring depends on the product, installation, traffic, maintenance, and environment. High quality rubber flooring can provide long lasting performance when properly installed and maintained.",
      },
      {
        question: "What is the difference between rolled rubber flooring and rubber floor mats?",
        answer:
          "Rolled rubber flooring is supplied in larger rolls and is generally suited to covering larger areas such as gyms, fitness centers, and exercise rooms. Rubber floor mats are better suited to smaller areas, equipment zones, entrances, and targeted protection.",
      },
      {
        question: "Is rubber flooring suitable for commercial spaces?",
        answer:
          "Yes. Commercial rubber flooring is designed for demanding environments where durability, traction, impact resistance, and easy maintenance are important. It can be used in gyms, schools, healthcare facilities, retail spaces, and other commercial environments.",
      },
      {
        question: "Does rubber flooring require professional installation?",
        answer:
          "Professional installation can help ensure accurate measurements, proper preparation, precise cuts, and a clean finished result. FMP Flooring provides professional rubber flooring installation for residential and commercial projects.",
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
        image: "/images/rubber-gallery/Rubber-Flooring-Special-Discount.webp",
        imageAlt: "Rubber flooring in a commercial gym",
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
    title: "Ready for New Rubber Flooring?",
    description:
      "Upgrade your space with durable, comfortable, and reliable rubber flooring. Whether you are planning a gym, exercise room, commercial facility, school, or residential project, FMP Flooring can help you find the right flooring solution.",
    buttonText: "Get Your Free Estimate",
    buttonHref: "/estimate",
    secondaryButtonText: "Schedule a Consultation",
    secondaryButtonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function RubberPage() {
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
