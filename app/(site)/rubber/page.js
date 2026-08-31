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
  title: "Rubber Flooring | Durable Commercial & Residential Rubber Floors | FMP Flooring",
  description:
    "Premium rubber flooring installation from FMP Flooring. Durable, slip-resistant, and comfortable rubber floors for gyms, schools, healthcare facilities, garages, and homes.",
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
        backgroundImage: "/images/rubber-page-banner.webp",
        financing: {
          eyebrow: "Rubber Flooring",
          titleBefore: "We Offer High-Quality Rubber Flooring — ",
          titleHighlightValue: "65%  Off Sale",
          titleAfter: "",
          description:
            "Upgrade your space with professional rubber flooring installation — durable, slip-resistant floors for gyms, schools, and commercial projects.",
          buttonText: "Get My Free Estimate",
          buttonHref: "/estimate",
        },
      },
      {
        id: "rubber-financing",
        backgroundImage: "/images/finance-banner.webp",
        financing: {
          eyebrow: "Flexible Payment Options",
          title: "Financing Available",
          description:
            "Buy now and pay over time! We offer several different financing programs for your rubber flooring project.",
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
      defaultService: "Rubber",
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
    eyebrow: "Rubber Flooring",
    title: "Rubber Flooring – Resilient, Comfortable & Long-Lasting",
    paragraphs: [
      "Rubber flooring is a versatile, heavy-duty flooring solution ideal for commercial and residential use. Known for its durability, slip resistance, comfort underfoot, and noise-reducing performance, rubber floors are perfect for gyms, fitness centers, playrooms, schools, healthcare facilities, garages, and more.",
      "At FMP Flooring, we offer premium commercial rubber flooring and residential rubber flooring options in a range of thicknesses, colors, and styles to match your project’s needs.",
    ],
    image: "/images/rubber-gallery/Flooring-ruber-school.png.webp",
    imageAlt: "Rubber flooring in a school hallway",
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
  "Get Brand New Rubber Flooring in 4 Simple Steps",
  "A clear, step-by-step process so your rubber flooring project stays organized, efficient, and stress-free from start to finish.",
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
    title: "Why Choose Rubber Flooring?",
    backgroundImage: "/images/home-services/Rubber-Flooring-1024x768.jpg.webp",
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
      "Maintaining rubber flooring is crucial for longevity. Regular sweeping and damp mopping with mild cleaners will keep it looking fresh.",
    backgroundImage: "/images/home-services/Rubber-Flooring-1024x768.jpg.webp",
    tips: [
      "Regular sweeping and damp mopping with mild cleaners will keep it looking fresh.",
      "Address stubborn stains promptly with a soft brush and gentle solution to prevent lasting damage.",
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
    image: "/images/rubber-gallery/Untitled-design-5.png.webp",
    imageAlt: "Professional rubber flooring installation",
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
        question: "What is rubber flooring made of?",
        answer:
          "Rubber flooring is typically made from natural or synthetic rubber, often including recycled rubber granules.",
      },
      {
        question: "Is rubber flooring good for gyms?",
        answer:
          "Yes. Gym rubber flooring is one of the most popular choices due to its durability, shock-absorption, and easy maintenance.",
      },
      {
        question: "Can rubber flooring be used outdoors?",
        answer:
          "Some rubber flooring products are rated for outdoor use — check product specifications for UV and weather resistance.",
      },
      {
        question: "How do you clean rubber floors?",
        answer: "Sweep or vacuum regularly and mop with a pH-neutral cleaner as needed.",
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
    headlineTeal: "Rubber Flooring Quote",
    description:
      "Upgrade your space with high-performance rubber flooring — perfect for commercial rubber flooring projects, home gyms, play areas, garages, and more. Our expert team will help you choose the best rubber flooring and provide professional installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

export default function RubberPage() {
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
