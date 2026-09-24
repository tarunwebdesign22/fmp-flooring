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
          titleBefore: "Durable ",
          titleHighlightValue: "Rubber Flooring",
          titleAfter: " for Gyms, Exercise Rooms & Commercial Spaces",
          description:
            "Create a safer, more comfortable space with high quality rubber flooring designed for demanding environments. Our rubber flooring solutions provide durability, excellent traction, impact resistance, and comfortable performance for gyms, exercise rooms, schools, and commercial spaces.",
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
    title: "Rubber Flooring That Is Durable, Comfortable & Long Lasting",
    paragraphs: [
      "Rubber flooring is a versatile flooring solution designed to handle high traffic, heavy equipment, and everyday use. Its resilient surface provides excellent durability, slip resistance, and comfort underfoot, making it a practical choice for both commercial and residential spaces.",
      "Rubber flooring is especially popular for gyms, fitness centers, exercise rooms, schools, childcare facilities, healthcare spaces, garages, and other areas where performance and durability matter. FMP Flooring offers a range of rubber flooring options to help you find the right solution for your space and project requirements.",
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
  "Our straightforward flooring process keeps your project organized, efficient, and stress free from the first consultation to the final installation.",
  [
    {
      step: "01",
      title: "Old Flooring Removal",
      description:
        "We remove existing carpet, tile, or other flooring and haul it away so your space is clean and ready for the next stage of your flooring project.",
    },
    {
      step: "02",
      title: "Subfloor Preparation",
      description:
        "We inspect and prepare the subfloor to create a clean, level, and stable foundation for your new rubber flooring. Proper preparation helps support a smooth and long lasting installation.",
    },
    {
      step: "03",
      title: "Professional Rubber Flooring Installation",
      description:
        "Our experienced flooring professionals carefully install your new rubber flooring with accurate layouts, precise cuts, and attention to detail for a clean and professional finish.",
    },
    {
      step: "04",
      title: "Finishing & Final Touches",
      description:
        "We complete the installation with careful trimming and finishing details, reinstall removed fixtures where needed, and make sure your new floor is clean and ready to use.",
    },
  ],
);

const financeBannerContent = [
  {
    title: "Financing Available",
    description: "Convenient monthly payment options can help make your new flooring project easier to manage.",
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
    title: "Why Choose Rubber Flooring?",
    backgroundImage: "/images/rubber-gallery/why-choose-rubber-flooring.webp",
    items: [
      {
        icon: "durable",
        title: "Extremely Durable & Long Lasting",
        description:
          "Rubber flooring is designed to withstand heavy traffic, daily use, and impact. Its resilient construction makes it a dependable choice for gyms, fitness centers, schools, and commercial spaces.",
      },
      {
        icon: "highTraffic",
        title: "Comfortable & Shock Absorbing",
        description:
          "Rubber flooring provides cushioning underfoot and helps absorb impact. This makes it a comfortable option for exercise rooms, fitness areas, training spaces, and areas where people spend extended periods standing.",
      },
      {
        icon: "moisture",
        title: "Slip Resistant & Safe",
        description:
          "Rubber flooring provides excellent traction and slip resistance, helping create a safer surface for gyms, schools, locker rooms, exercise areas, and other active spaces.",
      },
      {
        icon: "moisture",
        title: "Moisture Resistant",
        description:
          "Rubber flooring can perform well in areas exposed to moisture when the appropriate product and installation method are selected. It is a practical option for locker rooms, fitness facilities, and other high use areas.",
      },
      {
        icon: "maintenance",
        title: "Low Maintenance & Easy to Clean",
        description:
          "Rubber floors are simple to maintain. Regular sweeping or vacuuming followed by damp mopping can help keep the surface clean and looking its best.",
      },
      {
        icon: "styles",
        title: "Recycled & Sustainable Options",
        description:
          "Many rubber flooring products are available with recycled material content. These options can provide a durable flooring solution while supporting projects with sustainability goals.",
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
    title: "Rubber Flooring Maintenance Tips",
    description:
      "Keep your rubber flooring looking its best with a simple cleaning routine that helps protect the surface and maintain its performance.",
    backgroundImage: "/images/Maintenance-Tips-Banner-Image.webp",
    tips: [
      {
        title: "Sweep or Vacuum Regularly",
        description:
          "Sweep or vacuum regularly to remove dirt, dust, and debris from the surface before they build up.",
      },
      {
        title: "Use a Suitable Cleaner",
        description:
          "Damp mop the floor with a suitable pH neutral cleaner. Avoid harsh chemicals and cleaning products that may damage the flooring surface.",
      },
      {
        title: "Clean Spills Quickly",
        description:
          "Address spills and stubborn stains promptly using an appropriate cleaning solution and a soft brush or mop.",
      },
      {
        title: "Use Mats at Entrances",
        description:
          "Place mats at entrances to help reduce dirt and grit being brought onto the floor and to support easier daily maintenance.",
      },
    ],
  },
];

const applicationsContent = [
  {
    eyebrow: "Where It Works",
    title: "Applications for Rubber Flooring",
    description: "Rubber flooring is a practical choice for spaces that need durability, traction, comfort, and easy maintenance.",
    items: [
      "Commercial Gyms & Fitness Centers",
      "Home Gyms",
      "Exercise Rooms",
      "Childcare & Preschool Play Areas",
      "Healthcare Facilities & Clinics",
      "Schools & Educational Facilities",
      "Locker Rooms & Wet Areas",
      "Garages & Workshop Floors",
      "Retail & Commercial Spaces",
    ],
  },
];

const compareContent = [
  {
    eyebrow: "Compare Options",
    title: "Rubber Flooring vs Other Floor Types",
    intro:
      "Choosing the right flooring depends on how the space will be used. Compare rubber flooring with other common flooring options to understand which solution may work best for your project.",
    featureLabel: "Feature",
    columns: ["Rubber Flooring", "Vinyl Flooring", "Carpet Flooring"],
    rows: [
      { feature: "Durability", values: ["Excellent", "Good", "Moderate"] },
      {
        feature: "Moisture Resistance",
        values: ["Very Good", "Very Good", "Limited"],
      },
      { feature: "Comfort Underfoot", values: ["High", "Moderate", "High"] },
      {
        feature: "Impact Absorption",
        values: ["Excellent", "Moderate", "Moderate"],
      },
      {
        feature: "Slip Resistance",
        values: ["Excellent", "Good", "Moderate"],
      },
      {
        feature: "Gym & Exercise Areas",
        values: ["Excellent", "Good", "Limited"],
      },
      {
        feature: "High Traffic Areas",
        values: ["Excellent", "Good", "Moderate"],
      },
      { feature: "Maintenance", values: ["Easy", "Easy", "Moderate"] },
    ],
    footnote:
      "Rubber flooring is particularly well suited to active environments where durability, impact resistance, traction, and comfort are important. Vinyl and carpet may be better suited to other applications depending on the space and project requirements.",
  },
];

const installContent = [
  {
    eyebrow: "Professional Installation",
    title: "Professional Rubber Flooring Installation",
    paragraphs: [
      "Proper installation plays an important role in the appearance, performance, and longevity of your rubber flooring. Our experienced flooring professionals handle the installation process with careful planning, accurate measurements, precise cuts, and detailed finishing.",
      "Whether you need rubber gym flooring, rubber exercise room flooring, or commercial rubber flooring, we can help you plan and complete your flooring project with professional service from start to finish.",
    ],
    servicesTitle: "Our Rubber Flooring Services Include:",
    services: [
      "Free on site consultation and measurement",
      "Accurate project quotes",
      "Professional rubber flooring installation",
      "Commercial and residential flooring solutions",
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
