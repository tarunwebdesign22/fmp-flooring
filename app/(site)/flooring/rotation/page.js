import CloseoutProductDetailPage from "@/components/CloseoutProductDetailPage";
import { rotationProduct } from "@/data/products/rotation";

export const metadata = {
  title: "Rotation LVP Flooring | 20 MIL Waterproof | FMP Flooring",
  description:
    "Shop Rotation luxury vinyl plank flooring — 20 MIL wear layer, 7″ × 60″ waterproof SPC planks with attached pad. In-stock closeout pricing at $1.99/sf from FMP Flooring.",
};

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
          "I am more than happy to express that my new waterproof vinyl plank flooring amazingly transformed my space. I can't thank FMP Flooring LLC enough for offering such a versatile and unparalleled collection of luxury vinyl plank flooring.",
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

const ctaContent = [
  {
    headlineWhite: "Get a Free",
    headlineTeal: "Luxury Vinyl Plank Flooring Quote",
    description:
      "Upgrade your space with beautiful, durable luxury vinyl plank flooring. Whether you need waterproof LVP for your home or commercial luxury vinyl plank, our team is ready to help.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "Get My Free Estimate",
    buttonHref: "/estimate",
    backgroundImage: "/images/lvp-banner.webp",
  },
];

export default function RotationProductPage() {
  return (
    <CloseoutProductDetailPage
      product={rotationProduct}
      testimonialsContent={testimonialsContent}
      ctaContent={ctaContent}
    />
  );
}
