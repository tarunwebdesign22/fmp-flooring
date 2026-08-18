import CloseoutProductsSection from "@/components/CloseoutProductsSection";
import CtaSection from "@/components/CtaSection";
import FederalMarquee from "@/components/FederalMarquee";
import FinanceBannerSection from "@/components/FinanceBannerSection";
import GoogleReviewsSection from "@/components/homev2/GoogleReviewsSection";
import ServicePageHero from "@/components/ServicePageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { closeoutCollections, closeoutProducts } from "@/data/closeout-products";

export const metadata = {
  title: "In Stock Specials | Closeout Flooring Deals | FMP Flooring",
  description:
    "Shop in-stock flooring specials from FMP Flooring. Waterproof LVP, laminate, and engineered hardwood at closeout prices — plus FREE quarter round with LVP purchases.",
};

const heroContent = [
  {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "In Stock Specials" },
    ],
    slides: [
      {
        id: "closeout-specials",
        backgroundImage: "/images/lvp-banner.webp",
        financing: {
          eyebrow: "In Stock Specials",
          titleBefore: "Closeout Flooring Deals — ",
          titleHighlightValue: "From $1/sf",
          titleAfter: "",
          description:
            "Waterproof LVP, laminate, and engineered hardwood ready to install. Limited quantities at closeout pricing — once they’re gone, they’re gone.",
          buttonText: "Shop In-Stock Floors",
          buttonHref: "#specials",
        },
      },
      {
        id: "closeout-financing",
        backgroundImage: "/images/finance-banner.webp",
        financing: {
          eyebrow: "Flexible Payment Options",
          title: "Financing Available",
          description:
            "Buy now and pay over time! We offer several different financing programs for your flooring project.",
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
      defaultService: "Luxury Vinyl Plank",
      highlight: "FREE Quarter Round with LVP",
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

const testimonialsContent = [
  {
    eyebrow: "Testimonials",
    title: "What Our Customers Say",
    backgroundImage: "/images/clientbg.jpg",
    items: [
      {
        quote:
          "A wide range of LVP vinyl plank flooring options on FMP Flooring LLC exceeded my expectations. I could easily find the perfect flooring for my home. I was able to make informed decisions through the detailed product information and reviews on their website.",
        author: "Verified Customer",
      },
      {
        quote:
          "I am more than happy to express that my new waterproof vinyl plank flooring amazingly transformed my space. I can’t thank FMP Flooring LLC enough for offering such a versatile and unparalleled collection of luxury vinyl plank flooring.",
        author: "Verified Customer",
      },
      {
        quote:
          "Unable to find the best luxury vinyl plank flooring options for your space? I was too, unless FMP Flooring LLC impressed me with a variety of waterproof vinyl flooring. The quality they offer cannot be matched.",
        author: "Verified Customer",
      },
    ],
  },
];

const googleReviewsContent = [
  {
    eyebrow: "Customer Reviews",
    title: "What Our Customers Say",
    rating: "5.0",
    reviewCount: "43",
    description:
      "See what homeowners say about our in-stock LVP, installation quality, and closeout pricing.",
    viewAllHref:
      "https://www.google.com/maps/search/?api=1&query=FMP+Flooring+LLC+4013+Dearborn+Pl+Concord+NC+28027",
    writeReviewHref:
      "https://www.google.com/maps/search/?api=1&query=FMP+Flooring+LLC+4013+Dearborn+Pl+Concord+NC+28027",
    reviews: [
      {
        author: "Vitalika M.",
        date: "Posted on Google",
        rating: 5,
        avatarColor: "#2abcaf",
        text: "We’re very happy with the work this team did for us! They replaced our flooring with beautiful LVP and completely redid our staircase — everything looks stunning and was done with great attention to detail. The crew was professional, respectful, and finished everything on time. Highly recommend them!",
      },
      {
        author: "Georgia Austin",
        date: "Posted on Google",
        rating: 5,
        avatarColor: "#221e53",
        text: "The best investment I’ve made! Furnish My Place Flooring’s LVP flooring is high-quality, easy to install and completely transformed my space!! Their attention to detail and commitment to customer satisfaction are outstanding!!!",
      },
      {
        author: "Philip Kylian",
        date: "Posted on Google",
        rating: 5,
        avatarColor: "#4285F4",
        text: "I recently purchased LVP flooring from Furnish My Place. The quality is outstanding—durable, stylish, and exactly what I was looking for. The prices were incredibly affordable compared to other options I checked out. Highly recommend this company if you're looking for high-quality flooring at great prices!",
      },
      {
        author: "Deepti Sidana",
        date: "Posted on Google",
        rating: 5,
        avatarColor: "#EA4335",
        text: "They did a fantastic job and were very professional. Carpet looks great and job site was clean. I would highly recommend for all of your flooring needs!!",
      },
      {
        author: "Satinder Singh",
        date: "Posted on Google",
        rating: 5,
        avatarColor: "#FBBC05",
        text: "We took their services to install carpet in our prayer hall, which was done very neatly and nice. Will recommend them to others for their work.",
      },
      {
        author: "Tapan Saren",
        date: "Posted on Google",
        rating: 5,
        avatarColor: "#34A853",
        text: "Great experience purchasing LVP flooring from Furnish My Place Flooring.",
      },
    ],
  },
];

const ctaContent = [
  {
    headlineWhite: "Get a Free",
    headlineTeal: "Luxury Vinyl Plank Flooring Quote",
    description:
      "Upgrade your space with beautiful, durable luxury vinyl plank flooring. Whether you need waterproof LVP for your home or commercial luxury vinyl plank, our team is ready to help. Contact FMP Flooring today for a free estimate and professional installation.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/lvp-banner.webp",
  },
];

function PromoStrip() {
  return (
    <section className="bg-blue py-4 sm:py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 text-center sm:flex-row sm:gap-3 sm:px-8 lg:px-10">
        <span className="text-lg" aria-hidden="true">
          🎁
        </span>
        <p className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
          FREE Quarter Round{" "}
          <span className="text-[#fdbf3e]">with any LVP purchase</span>
        </p>
      </div>
    </section>
  );
}

export default function InStockSpecialsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ServicePageHero content={heroContent} />
      <FederalMarquee />
      <PromoStrip />
      <CloseoutProductsSection
        collections={closeoutCollections}
        products={closeoutProducts}
      />
      <FinanceBannerSection content={financeBannerContent} />
      <TestimonialsSection content={testimonialsContent} />
      <GoogleReviewsSection content={googleReviewsContent} />
      <FederalMarquee />
      <CtaSection content={ctaContent} />
    </main>
  );
}
