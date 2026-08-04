import BeforeAfterSection from "@/components/BeforeAfterSection";
import BrandsSection from "@/components/BrandsSection";
import ComparisonSection from "@/components/ComparisonSection";
import CtaSection from "@/components/CtaSection";
import EducationalResourcesSection from "@/components/EducationalResourcesSection";
import ExploreVideosSection from "@/components/ExploreVideosSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import FederalContractorSection from "@/components/FederalContractorSection";
import FederalMarquee from "@/components/FederalMarquee";
import FinancingSection from "@/components/FinancingSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import HeroSection from "@/components/HeroSection";
import LatestProjectsSection from "@/components/LatestProjectsSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import MeetTheFounderSection from "@/components/MeetTheFounderSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";

const heroContent = [
  {
    topBar: "Federal & State Flooring Contractor",
    welcome: "Welcome to",
    headline: "FMP Flooring LLC",
    backgroundImage: "/images/Hero-Image.jpg",
    tagline: "Premium flooring solutions for homes and businesses.",
    trustBadges: [
      { icon: "experience", label: "25+ Years of Experience" },
      { icon: "family", label: "Family Owned & Operated" },
      { icon: "quality", label: "Quality Flooring You Can Trust" },
    ],
    ctas: [
      { label: "Explore Commercial Projects", href: "/commercial" },
      { label: "Explore Residential Projects", href: "/residential" },
    ],
    form: {
      title: "Free In-Home Estimate",
      description: "Fill out the form below and we'll get back to you shortly.",
      buttonText: "Get My Free Estimate",
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
    products: [
      { icon: "plank", label: "Luxury Vinyl Plank" },
      { icon: "carpet", label: "Broadloom Carpet" },
      { icon: "tile", label: "Carpet Tile" },
      { icon: "ceramic", label: "Ceramic Flooring" },
      { icon: "rubber", label: "Rubber" },
      { icon: "hardwood", label: "Hardwood" },
      { icon: "vct", label: "VCT" },
    ],
  },
];

const ctaContent = [
  {
    headlineWhite: "WE BRING OUR FLOORS AND YOU",
    headlineTeal: "NEVER PAY MORE.",
    description:
      "Experience the convenience of in-home shopping. Our professionally trained design consultants bring large flooring samples to your home for free at a time most convenient for you.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "FREE IN-HOME ESTIMATE",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

const featuresContent = [
  {
    icon: "wind",
    title: "Dustless Tile Removal",
    description:
      "Qualifying purchases include advanced containment systems that minimize dust and disruption.",
    image: "/images/features/1.jpg",
  },
  {
    icon: "wrench",
    title: "Professional Floor Prep Included",
    description:
      "Subfloors properly prepared to ensure stability, longevity, and flawless finished installations.",
    image: "/images/features/2.jpg",
  },
  {
    icon: "paintbrush",
    title: "Painted Wall Base",
    description:
      "Clean, finished wall bases professionally painted for a polished, move-in-ready appearance.",
    image: "/images/features/3.jpg",
  },
  {
    icon: "layers",
    title: '½" Premium Carpet Pad on All Carpet Installations',
    description:
      "Thicker premium padding improves comfort, durability, sound reduction, and carpet performance.",
    image: "/images/features/6.jpg",
  },
  {
    icon: "wind",
    title: "Free Air-Duct Cleaning (Included with Qualified Purchases)",
    description:
      "Improves indoor air quality while removing construction dust at no cost.",
    image: "/images/features/04-1.jpg",
  },
  {
    icon: "user",
    title: "Manager Check-In During Install",
    description:
      "On-site management oversight ensures quality standards, timelines, and customer communication.",
    image: "/images/features/Renwick Oak01.jpg",
  },
  {
    icon: "search",
    title: "Final Walkthrough with a Flooring Expert",
    description:
      "Detailed inspection confirms craftsmanship, addresses questions, and ensures complete satisfaction.",
    image: "/images/features/67700 - 433RB Bloomington Oak-01.png",
  },
  {
    icon: "shield",
    title: "Lifetime Labor Guarantee",
    description:
      "Installation workmanship guaranteed for life, providing long-term confidence and protection.",
    image: "/images/features/13.jpg",
  },
];

const founderContent = [
  {
    eyebrow: "Meet the Founder",
    headline: "Built on Passion. Driven by Purpose",
    headlineAccent: ".",
    description:
      "FlooriFloor Flooring & Installation Services was founded with a simple belief — every space deserves quality floors and exceptional service. Our mission is to deliver unmatched craftsmanship, honest solutions, and lasting value in every project we take on.",
    values: [
      {
        icon: "quality",
        title: "Quality",
        description: "We never compromise on materials or craftsmanship.",
      },
      {
        icon: "integrity",
        title: "Integrity",
        description: "Honest communication and transparent processes.",
      },
      {
        icon: "commitment",
        title: "Commitment",
        description: "We treat every project like it's our own.",
      },
    ],
    buttonText: "Learn More About Our Story",
    buttonHref: "/about-us",
    videoSrc: "/images/MicrosoftTeams-video (1).webm",
    videoPoster: "/images/founder-portrait.png",
  },
];

const financingContent = [
  {
    eyebrow: "Flexible Payment Options",
    title: "Financing Available",
    description:
      "Buy now and pay over time! We offer several different financing programs.",
    backgroundImage: "/images/finance-banner.webp",
    benefits: [
      { icon: "approvals", title: "Fast Approvals*" },
      { icon: "noPayments", title: "No Payments*" },
      { icon: "zeroPercent", title: "0% Financing" },
    ],
    buttonText: "Explore Financing Options",
    buttonHref: "/financing",
    footnote: "*Subject to credit approval. Terms and conditions apply.",
  },
];

const teamContent = [
  {
    eyebrow: "Meet Our Team",
    headline: "Dedicated Experts. Exceptional Results",
    headlineAccent: ".",
    description:
      "Our experienced team is committed to delivering top-quality flooring solutions with integrity, expertise, and care.",
    members: [
      {
        name: "Mike Thompson",
        role: "Founder & CEO",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Sarah Johnson",
        role: "Operations Manager",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Chris Martinez",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "Jessica Davis",
        role: "Design Consultant",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces",
      },
      {
        name: "David Chen",
        role: "Installation Lead",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=faces",
      },
    ],
  },
];

const processContent = [
  {
    title: "How We Manage Every Project",
    subtitle: "A simple 5-step process:",
    backgroundImage: "/images/process-background.webp",
    buttonText: "Start Your Project Today",
    buttonHref: "/estimate",
    steps: [
      { step: "01", title: "Consultation", icon: "consultation" },
      { step: "02", title: "Site Measurement", icon: "measurement" },
      { step: "03", title: "Material Selection", icon: "selection" },
      { step: "04", title: "Professional Installation", icon: "installation" },
      { step: "05", title: "Final Quality Inspection", icon: "inspection" },
    ],
  },
];

const brandsContent = [
  {
    eyebrow: "Manufacturer / Brand Logos",
    headline: "Quality Brands. Trusted by Us",
    headlineAccent: ".",
    description:
      "We partner with the industry's leading manufacturers to bring you stylish, durable, and high-performance flooring you can trust.",
    logos: [
      { name: "Mohawk", logo: "/images/manufacturer/Mohawk-150x150.png" },
      { name: "Shaw Floors", logo: "/images/manufacturer/Shaw--150x150.png" },
      {
        name: "Mannington",
        logo: "/images/manufacturer/Mannington-150x150.png",
      },
      {
        name: "Armstrong Flooring",
        logo: "/images/manufacturer/Armstrong--150x150.png",
      },
      { name: "Tarkett", logo: "/images/manufacturer/Tarkett-150x150.png" },
      {
        name: "Interface",
        logo: "/images/manufacturer/Interface-150x150.png",
      },
      {
        name: "Patcraft",
        logo: "/images/manufacturer/Patcraft--150x150.png",
      },
      {
        name: "Bentley Mills",
        logo: "/images/manufacturer/Bentley-Mills--150x150.png",
      },
      {
        name: "JJ Flooring",
        logo: "/images/manufacturer/JJ-Flooring-150x150.png",
      },
      { name: "Roppe", logo: "/images/manufacturer/Roppe-150x150.png" },
      {
        name: "Chesapeake",
        logo: "/images/manufacturer/Chesapeake-150x150.png",
      },
      {
        name: "American Olean",
        logo: "/images/manufacturer/AMERICAN-OLEAN-150x150.png",
      },
      {
        name: "Crossville",
        logo: "/images/manufacturer/CROSSVILLE-150x150.png",
      },
      { name: "Daltile", logo: "/images/manufacturer/DALTILE--150x150.png" },
      {
        name: "EF Contract",
        logo: "/images/manufacturer/EF-Contract-150x150.png",
      },
      {
        name: "Johnsonite",
        logo: "/images/manufacturer/JOHNSONITE-150x150.png",
      },
      {
        name: "Louisville Tile",
        logo: "/images/manufacturer/Louisville-Tile-150x150.png",
      },
      { name: "Milliken", logo: "/images/manufacturer/Milliken-150x150.png" },
      {
        name: "Portobello",
        logo: "/images/manufacturer/Portobello-1-150x150.png",
      },
      { name: "Schluter", logo: "/images/manufacturer/SCHLUTER-150x150.png" },
    ],
  },
];

const federalContent = [
  {
    marqueeItems: [
      "Federal & State Flooring Contractor",
      "Direct Importer & Distributor – No Middlemen",
    ],
    headlineBlue: "Federal & State",
    headlineTeal: "Flooring Contractor",
    description:
      "We specialize in high-performance flooring solutions for federal, state, and public sector facilities. Our experience, compliance, and commitment to quality make us a trusted partner for projects that serve our communities.",
    buttonText: "Learn More About Our Services",
    buttonHref: "/services",
    sectors: [
      {
        title: "Schools",
        icon: "schools",
        description:
          "Durable, safe, and easy-to-maintain flooring for high-traffic educational environments.",
        image:
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=560&fit=crop",
      },
      {
        title: "Hospitals",
        icon: "hospitals",
        description:
          "Hygienic, slip-resistant, and compliant flooring solutions for healthcare facilities.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=560&fit=crop",
      },
      {
        title: "Government",
        icon: "government",
        description:
          "Reliable, specification-ready flooring for government buildings and public agencies.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=560&fit=crop",
      },
      {
        title: "Offices",
        icon: "offices",
        description:
          "Professional, long-lasting flooring systems for municipal and administrative spaces.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=560&fit=crop",
      },
    ],
  },
];

const videosContent = [
  {
    title: "Explore Our Work",
    tabs: [
      {
        id: "showroom",
        label: "Showroom",
        icon: "showroom",
        videos: [
          {
            title: "Showroom tour 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=450&fit=crop",
            duration: "1:24",
          },
          {
            title: "Showroom tour 2",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=450&fit=crop",
            duration: "1:18",
          },
          {
            title: "Showroom tour 3",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=450&fit=crop",
            duration: "1:35",
          },
        ],
      },
      {
        id: "warehouse",
        label: "Warehouse",
        icon: "warehouse",
        videos: [
          {
            title: "Warehouse overview 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=450&fit=crop",
            duration: "1:18",
          },
          {
            title: "Warehouse overview 2",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
            duration: "1:42",
          },
          {
            title: "Warehouse overview 3",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=450&fit=crop",
            duration: "1:05",
          },
        ],
      },
      {
        id: "installations",
        label: "Installations",
        icon: "installations",
        videos: [
          {
            title: "Installation 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=450&fit=crop",
            duration: "1:35",
          },
          {
            title: "Installation 2",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=450&fit=crop",
            duration: "2:10",
          },
          {
            title: "Installation 3",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=450&fit=crop",
            duration: "1:28",
          },
        ],
      },
      {
        id: "testimonials",
        label: "Testimonials",
        icon: "testimonials",
        videos: [
          {
            title: "Customer story 1",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop",
            duration: "0:58",
          },
          {
            title: "Customer story 2",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop",
            duration: "1:12",
          },
          {
            title: "Customer story 3",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=450&fit=crop",
            duration: "1:45",
          },
        ],
      },
    ],
  },
];

const faqContent = [
  {
    title: "People Also Ask",
    items: [
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes, we provide free, no-obligation estimates for all flooring projects. Contact us to schedule your consultation and get a detailed quote tailored to your needs.",
      },
      {
        question: "What flooring is best for homes with pets?",
        answer:
          "We recommend scratch-resistant options like Luxury Vinyl Plank (LVP), tile, or laminate with a durable wear layer. These materials handle paw traffic and are easy to clean.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We proudly serve residential and commercial customers throughout our region. Contact us to confirm service availability in your specific area.",
      },
      {
        question: "What is the most durable flooring for high-traffic areas?",
        answer:
          "For high-traffic areas like hallways, living rooms, and entryways, we recommend porcelain tile, Luxury Vinyl Plank (LVP), or engineered hardwood. These materials are designed to resist wear, scratches, and daily use while maintaining a beautiful appearance for years.",
      },
      {
        question: "Can new flooring be installed over existing floors?",
        answer:
          "In many cases, yes. Depending on the condition of your current flooring, we can often install new flooring directly over it. Our team will assess your subfloor during the consultation.",
      },
      {
        question: "Do you offer waterproof flooring options?",
        answer:
          "Yes, we carry a wide selection of 100% waterproof flooring, including LVP and LVT, perfect for kitchens, bathrooms, basements, and laundry rooms.",
      },
      {
        question: "Can I see flooring samples before purchasing?",
        answer:
          "Absolutely! Visit our showroom to view our full range of samples, or request an in-home consultation where we bring samples directly to you.",
      },
      {
        question: "How soon can my flooring be installed?",
        answer:
          "Installation timing depends on product availability and scheduling. Many in-stock products can be installed within just a few days of your order.",
      },
    ],
  },
];

const testimonialsContent = [
  {
    eyebrow: "Testimonials",
    title: "What Our Clients Say",
    backgroundImage: "/images/testimonial-bg.jpg",
    items: [
      {
        quote:
          "FMP Flooring LLC transformed my living room with their stunning laminate flooring. The installation was quick, and the team was professional and courteous. I couldn't be happier with the results!",
        author: "Emily R",
      },
      {
        quote:
          "I was impressed with the selection of eco-friendly flooring options. The bamboo flooring we chose looks amazing and fits perfectly with our home's aesthetic. Highly recommend!",
        author: "Mark T.",
      },
      {
        quote:
          "The carpet tiles we installed in our office have not only improved the look of our space but are also incredibly easy to maintain. Their service was top-notch, and I appreciate the advice they provided!",
        author: "Jason P.",
      },
    ],
  },
];

const statsContent = [
  {
    eyebrow: "Our Track Record",
    title: "Trusted Flooring Results",
    items: [
      { value: "1,000+", label: "Happy Customer" },
      { value: "5", label: "Company Rating", stars: 5 },
      { value: "10+", label: "Years Experience" },
    ],
  },
];

const googleReviewsContent = [
  {
    eyebrow: "Customer Reviews",
    title: "FMP Flooring LLC Reviews",
    rating: "5.0",
    reviewCount: "50+",
    description:
      "See what homeowners and commercial clients say about our flooring products, installation, and service across Concord and the greater Charlotte area.",
    viewAllHref:
      "https://www.google.com/maps/search/?api=1&query=FMP+Flooring+LLC+4013+Dearborn+Pl+Concord+NC+28027",
    writeReviewHref:
      "https://www.google.com/maps/search/?api=1&query=FMP+Flooring+LLC+4013+Dearborn+Pl+Concord+NC+28027",
    reviews: [
      {
        author: "Emily R.",
        date: "2 months ago",
        rating: 5,
        avatarColor: "#2abcaf",
        text: "FMP Flooring LLC transformed my living room with their stunning laminate flooring. The installation was quick, and the team was professional and courteous. I couldn't be happier with the results!",
      },
      {
        author: "Lewis Bennett",
        date: "3 months ago",
        rating: 5,
        avatarColor: "#221e53",
        text: "Exceptional service from start to finish. They helped us choose the perfect flooring for our high-traffic space. The laminate has held up tremendously well, and cleaning it is a breeze.",
      },
      {
        author: "Mike J.",
        date: "4 months ago",
        rating: 5,
        avatarColor: "#4285F4",
        text: "We chose FMP Flooring for our new laminate flooring and the results exceeded expectations. Installation was quick and hassle-free — we've received so many compliments on the new look.",
      },
      {
        author: "Lisa R.",
        date: "5 months ago",
        rating: 5,
        avatarColor: "#EA4335",
        text: "Attention to detail and commitment to quality throughout the project. Delivered on time, and the new laminate looks fantastic and is incredibly durable. Game-changer for our office.",
      },
      {
        author: "Jason P.",
        date: "6 months ago",
        rating: 5,
        avatarColor: "#FBBC05",
        text: "The carpet tiles we installed in our office improved the look of our space and are incredibly easy to maintain. Top-notch service and great product advice.",
      },
      {
        author: "Mark T.",
        date: "7 months ago",
        rating: 5,
        avatarColor: "#34A853",
        text: "Impressed with the selection and quality. The flooring we chose looks amazing and fits perfectly with our home's aesthetic. Highly recommend FMP Flooring LLC!",
      },
    ],
  },
];

const latestProjectsContent = [
  {
    title: "Our Latest Project",
    embedUrl: "https://trusty.app/embed/project-map/37869d9b-531a-4f71-aaef-2a6d1006f3f3",
  },
];

const beforeAfterContent = [
  {
    eyebrow: "Our Transformations",
    title: "Before and After Transformations",
    tagline: "Same room. Same light. Completely new life.",
    paragraphs: [
      "New flooring changes how a space looks, feels, and functions. From worn carpet to refined hardwood or vinyl, every transformation elevates daily living.",
      "Drag the slider to see the difference. Then schedule a free in-home estimate and start your own before-and-after story.",
    ],
    buttonText: "Free In-Home Estimate",
    buttonHref: "/estimate",
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
  },
];

const whyChooseContent = [
  {
    eyebrow: "Why Choose Us",
    title: "Why Choose FMP?",
    description:
      "Family owned since 1995 — we bring warehouse pricing, expert installation, and honest guidance to every residential and commercial project.",
    items: [
      {
        icon: "professionals",
        title: "Experienced Professionals",
        description:
          "Skilled installers with years of industry experience, delivering careful, long-lasting results on every job.",
      },
      {
        icon: "selection",
        title: "Wide Range of Options",
        description:
          "Carpet, carpet tile, LVP, laminate, hardwood, ceramic, VCT, rubber, and more — all under one roof.",
      },
      {
        icon: "pricing",
        title: "Affordable & Transparent Pricing",
        description:
          "No hidden fees. No surprises. Clear estimates and cost-effective solutions without cutting quality.",
      },
      {
        icon: "expertise",
        title: "Residential & Commercial Expertise",
        description:
          "Homes, offices, retail, and large commercial spaces — we understand each project and deliver accordingly.",
      },
      {
        icon: "quality",
        title: "Quality Materials & Workmanship",
        description:
          "Trusted materials and proven installation techniques for durability, performance, and lasting appeal.",
      },
      {
        icon: "satisfaction",
        title: "Customer Satisfaction First",
        description:
          "Clear communication, on-time completion, and dependable service — your satisfaction is our priority.",
      },
    ],
  },
];

const whyBuyDirectContent = [
  {
    eyebrow: "Buy Direct Advantage",
    title: "Why Buy Direct?",
    description:
      "Skip the retail markups. When you buy direct from FMP, you get warehouse pricing, a fuller selection, and professional installation — without the middleman.",
    featureLabel: "Compare",
    traditionalLabel: "Traditional Retail",
    directLabel: "Buy Direct with FMP",
    rows: [
      {
        feature: "Pricing",
        traditional: "Retail markups & middlemen",
        direct: "Warehouse / direct pricing",
      },
      {
        feature: "Product selection",
        traditional: "Limited showroom samples",
        direct: "Full warehouse inventory",
      },
      {
        feature: "Transparent estimates",
        traditional: false,
        direct: true,
      },
      {
        feature: "Free in-home consultation",
        traditional: false,
        direct: true,
      },
      {
        feature: "Expert installation available",
        traditional: "Often upsold separately",
        direct: true,
      },
      {
        feature: "Residential & commercial",
        traditional: "Mostly residential focus",
        direct: true,
      },
      {
        feature: "Family-owned accountability",
        traditional: false,
        direct: true,
      },
    ],
    footnote:
      "We bring our floors to you — so you never pay more for the same quality materials and craftsmanship.",
  },
];

const educationalResourcesContent = [
  {
    eyebrow: "From Our Blog",
    title: "Educational Resources",
    description:
      "Guides and tips to help you choose smarter — from LVP vs. laminate to wear layers, care, and everyday flooring advice.",
    buttonText: "View All Articles",
    buttonHref: "/blog",
    posts: [
      {
        title: "LVP vs. Laminate: Which Flooring Is Right for You?",
        excerpt:
          "Compare durability, water resistance, cost, and style so you can pick the best fit for kitchens, living rooms, and high-traffic spaces.",
        category: "Comparisons",
        date: "2025-03-15",
        dateLabel: "March 15, 2025",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop",
        href: "/blog/lvp-vs-laminate",
      },
      {
        title: "Understanding Wear Layers: The Key to Durable Vinyl",
        excerpt:
          "Learn what mil thickness means, how wear layers protect against scratches and stains, and which rating fits your home or commercial space.",
        category: "Guides",
        date: "2025-03-08",
        dateLabel: "March 8, 2025",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
        href: "/blog/understanding-wear-layers",
      },
      {
        title: "Flooring Tips: Care, Cleaning & Longevity",
        excerpt:
          "Simple maintenance habits that protect your investment — from daily sweeping to moisture-safe mopping and high-traffic area tips.",
        category: "Tips",
        date: "2025-03-06",
        dateLabel: "March 6, 2025",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
        href: "/blog/flooring-care-tips",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection content={heroContent} />
      <FinancingSection content={financingContent} />
      <FederalContractorSection content={federalContent} />
      <ProcessSection content={processContent} />
      <MeetTheFounderSection content={founderContent} />
      <FeaturesSection title="Included with Features" features={featuresContent} />
      <ExploreVideosSection content={videosContent} />
      <StatsSection content={statsContent} />
      <GoogleReviewsSection content={googleReviewsContent} />
      <BrandsSection content={brandsContent} />
      <BeforeAfterSection content={beforeAfterContent} />
      <MeetOurTeamSection content={teamContent} />
      <FederalMarquee items={federalContent[0].marqueeItems} />
      <WhyChooseSection content={whyChooseContent} />
      <ComparisonSection content={whyBuyDirectContent} />
      <LatestProjectsSection content={latestProjectsContent} />
      <EducationalResourcesSection content={educationalResourcesContent} />
      <TestimonialsSection content={testimonialsContent} />
      <FaqSection content={faqContent} />
      <FederalMarquee items={federalContent[0].marqueeItems} />
      <CtaSection content={ctaContent} />
    </main>
  );
}
