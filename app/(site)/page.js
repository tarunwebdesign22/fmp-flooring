import BeforeAfterSection from "@/components/homev2/BeforeAfterSection";
import BrandsSection from "@/components/homev2/BrandsSection";
import ComparisonSection from "@/components/homev2/ComparisonSection";
import CtaSection from "@/components/homev2/CtaSection";
import EducationalResourcesSection from "@/components/homev2/EducationalResourcesSection";
import EducationalVideosSection from "@/components/homev2/EducationalVideosSection";
import ExploreVideosSection from "@/components/homev2/ExploreVideosSection";
import FacebookFeedSection from "@/components/homev2/FacebookFeedSection";
import FaqSection from "@/components/homev2/FaqSection";
import FeaturesSection from "@/components/homev2/FeaturesSection";
import FederalContractorSection from "@/components/homev2/FederalContractorSection";
import HowWeManageProjectsSection from "@/components/homev2/HowWeManageProjectsSection";
import FederalMarquee from "@/components/homev2/FederalMarquee";
import GoogleReviewsSection from "@/components/homev2/GoogleReviewsSection";
import HeroSection from "@/components/homev2/HeroSection";
import HeroSectionCopy from "@/components/homev2/HeroSectionCopy";
import LatestProjectsSection from "@/components/homev2/LatestProjectsSection";
import MeetOurTeamSection from "@/components/homev2/MeetOurTeamSection";
import MeetTheFounderSection from "@/components/homev2/MeetTheFounderSection";
import ProcessSection from "@/components/homev2/ProcessSection";
import QuoteCtaSection from "@/components/homev2/QuoteCtaSection";
import TestimonialsSection from "@/components/homev2/TestimonialsSection";
import WhyChooseSection from "@/components/homev2/WhyChooseSection";
import OffersSliderSection from "@/components/OffersSliderSection";
import ServicesSection from "@/components/homev2/ServicesSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import { blogPosts } from "@/data/blog-posts";

const heroContent = [
  {
    topBar: "Federal & State Flooring Contractor",
    slides: [
      {
        id: "financing",
        type: "financing",
        backgroundImage: "/images/finance-banner-image.webp",
        eyebrow: "Flexible Payment Options",
        title: "Financing Available",
        description:
          "Buy now and pay over time! We offer several different financing programs.",
        benefits: [
          { icon: "approvals", title: "Fast Approvals*" },
          { icon: "noPayments", title: "No Payments*" },
          { icon: "zeroPercent", title: "Financing" },
        ],
        buttonText: "Explore Financing Options",
        buttonHref: "/financing",
        footnote: "*Subject to credit approval. Terms and conditions apply.",
      },
      {
        id: "in-stock-specials",
        type: "service",
        backgroundImage: "/images/instock-banner-1.webp",
        icon: "plank",
        eyebrow: "Limited Time Deals",
        title: "In Stock Specials",
        description:
          "Closeout flooring deals ready to install — waterproof LVP, laminate, and engineered hardwood at prices you won’t see again.",
        bullets: [
          "In-stock closeout pricing from $1/sf",
          "FREE quarter round with LVP purchases",
          "Limited quantities — once gone, gone",
          "Professional installation available",
        ],
        buttonText: "Shop In Stock Specials",
        buttonHref: "/in-stock-specials",
      },
      {
        id: "luxury-vinyl-plank",
        type: "service",
        backgroundImage: "/images/lvp-banner.webp",
        icon: "plank",
        eyebrow: "Featured Service",
        title: "Luxury Vinyl Plank",
        description:
          "Waterproof, scratch-resistant, and beautifully realistic wood looks — built for busy homes and demanding commercial spaces.",
        bullets: [
          "100% waterproof construction",
          "Pet and kid friendly wear layers",
          "Warm, quiet underfoot",
          "Fast professional installation",
        ],
        buttonText: "Explore Luxury Vinyl Plank",
        buttonHref: "/luxury-vinyl-plank",
      },
      {
        id: "broadloom-carpet",
        type: "service",
        backgroundImage: "/images/broadloom-carpet-image.webp",
        icon: "carpet",
        eyebrow: "Featured Service",
        title: "Broadloom Carpet",
        description:
          "Soft, sound-absorbing comfort with premium padding included on every carpet installation we complete.",
        bullets: [
          '½" premium pad included',
          "Stain-resistant fiber options",
          "Residential and commercial grades",
          "Seamless wall-to-wall coverage",
        ],
        buttonText: "Explore Broadloom Carpet",
        buttonHref: "/broadloom-carpet",
      },
      {
        id: "hardwood",
        type: "service",
        backgroundImage: "/images/hardwood-banner-image.webp",
        icon: "hardwood",
        eyebrow: "Featured Service",
        title: "Hardwood Flooring",
        description:
          "Timeless solid and engineered hardwood that adds lasting warmth, character, and resale value to any space.",
        bullets: [
          "Solid and engineered options",
          "Wide plank and classic widths",
          "Refinishable for decades of use",
          "Expert subfloor preparation",
        ],
        buttonText: "Explore Hardwood",
        buttonHref: "/hardwood",
      },
    ],
    form: {
      title: "Free In-Home Estimate",
      description: "Fill out the form below and we'll get back to you shortly.",
      promoText: "FREE INSTALLATION & 50% OFF",
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
    stats: [
      { value: "1,000+", label: "Happy Customer" },
      { text: "Federal & State", label: "Flooring Contractor" },
      { value: "10+", label: "Years Experience" },
      { value: "500+", label: "Projects Completed" },
      { text: "No Middlemen", label: "Direct Importer & Distributor" },
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

const quoteCtaContent = [
  {
    eyebrow: "Start Your Project",
    title: "Ready for Beautiful New Floors?",
    description:
      "Tell us about your space and get a free, no-obligation quote from our flooring experts.",
    buttonText: "Get a Quote",
    buttonHref: "/estimate",
  },
];

const servicesContent = [
  {
    eyebrow: "What We Offer",
    title: "Our Flooring Services",
    description:
      "Explore durable, stylish flooring solutions for residential and commercial spaces — installed with care by our expert team.",
    services: [
      {
        title: "Carpet Tile",
        description:
          "Flexible, modular carpet tiles built for busy offices and high-traffic spaces with easy replacement and installation.",
        image: "/images/home-services/Carpet-Tile-Services-benefits.png.webp",
        href: "/carpet-tile",
      },
      {
        title: "Broadloom Carpet",
        description:
          "Soft, wall-to-wall carpet that brings cozy elegance, warmth, and comfort to living spaces.",
        image: "/images/home-services/Carpet-Broadloom-work.png.webp",
        href: "/broadloom-carpet",
      },
      {
        title: "Hardwood",
        description:
          "Timeless natural beauty and lasting durability that elevates any room with classic hardwood craftsmanship.",
        image: "/images/home-services/Hardwood-FLOORING.webp",
        href: "/hardwood",
        badge: "New",
      },
      {
        title: "Laminate",
        description:
          "An elegant, budget-friendly alternative to hardwood with realistic wood looks and everyday durability.",
        image: "/images/home-services/Laminates-flooring-1024x576.jpg.webp",
        href: "/laminate",
      },
      {
        title: "Rubber Flooring",
        description:
          "Slip-resistant rubber flooring ideal for gyms, play areas, and spaces that demand performance and safety.",
        image: "/images/home-services/Rubber-Flooring-1024x768.jpg.webp",
        href: "/rubber",
      },
      {
        title: "Vinyl Composition Tiles (VCT)",
        description:
          "Durable VCT flooring designed for schools, hospitals, and commercial spaces that need robust, easy-care floors.",
        image: "/images/home-services/Vinyl-Composition-Tiles-work.webp",
        href: "/vct",
      },
      {
        title: "Luxury Vinyl Plank (LVP/LVT)",
        description:
          "High-end wood and tile looks with waterproof performance, comfort underfoot, and easy maintenance.",
        image: "/images/home-services/Vinyl-Plank-Flooringss-1024x731.jpg.webp",
        href: "/luxury-vinyl-plank",
      },
      {
        title: "Ceramic Flooring",
        description:
          "Stylish ceramic tile flooring that delivers water resistance, long-term durability, and design versatility.",
        image: "/images/ceramic-gallery/Ceramic-Flooring-Servicess.png",
        href: "/ceramic",
      },
    ],
  },
];

const featuresContent = [
  {
    eyebrow: "Our Work USP",
    title: "Service Highlights",
    backgroundImage: "/images/294-Wood-Flooring.webp",
    cards: [
      {
        icon: "furniture",
        title: "We move furniture before installation.",
      },
      {
        icon: "preparation",
        title: "We prepare the floor before installation.",
      },
      {
        icon: "challenges",
        title: "We handle all flooring preparation and installation challenges.",
      },
      {
        icon: "hassleFree",
        title: "We ensure a hassle-free installation process.",
      },
    ],
  },
];

const howWeManageProjectsContent = [
  {
    eyebrow: "Project Management",
    title: "How We Manage Every Project",
    description:
      "A clear, step-by-step process so every flooring project stays organized, efficient, and stress-free from start to finish.",
    steps: [
      {
        step: "01",
        title: "Furniture & Fixture Removal",
        description:
          "We carefully move and protect your furniture and remove toilets or other fixtures when needed to prepare the space for installation.",
        image: "/images/process-feature/01-furniture-moving.jpg",
        imageAlt: "Crew moving and protecting furniture before flooring work",
      },
      {
        step: "02",
        title: "Subfloor Preparation",
        description:
          "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your new flooring.",
        image: "/images/process-feature/02-floor-preparation.jpg",
        imageAlt: "Technician preparing and leveling the subfloor",
      },
      {
        step: "03",
        title: "Professional Flooring Installation",
        description:
          "Our experienced installers precisely lay your new flooring for a clean, seamless, and professional finish.",
        image: "/images/process-feature/03-installation.jpg",
        imageAlt: "Professional installing new flooring planks",
      },
      {
        step: "04",
        title: "Trim, Fixtures & Final Touches",
        description:
          "We complete the installation with trim and finishing details, then reinstall removed fixtures and ensure everything is clean, polished, and ready to enjoy.",
        image: "/images/process-feature/how-to-replace-bathroom-tiles.jpg",
        imageAlt: "Bathroom tile and fixture work for flooring installation",
      },
    ],
  },
];

const founderContent = [
  {
    eyebrow: "Meet the Founder",
    headline: "Built on Passion. Driven by Purpose",
    headlineAccent: ".",
    description:
      "FMP Flooring & Installation Services was founded with a simple belief — every space deserves quality floors and exceptional service. Our mission is to deliver unmatched craftsmanship, honest solutions, and lasting value in every project we take on.",
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
    videoAspectRatio: "576 / 1024",
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
    backgroundImage: "/images/flooring-process-bg.jpg",
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
      "Financing Available",
      "In-Home Free Estimate",
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
        image: "/images/School-Flooring-Image.webp",
      },
      {
        title: "Hospitals",
        icon: "hospitals",
        description:
          "Hygienic, slip-resistant, and compliant flooring solutions for healthcare facilities.",
        image: "/images/Hospital-Flooring-Image.webp",
      },
      {
        title: "Government",
        icon: "government",
        description:
          "Reliable, specification-ready flooring for government buildings and public agencies.",
        image: "/images/Govt-Flooring-Image.webp",
      },
      {
        title: "Offices",
        icon: "offices",
        description:
          "Professional, long-lasting flooring systems for municipal and administrative spaces.",
        image: "/images/Office-Flooring-Image.webp",
      },
      {
        title: "Universities",
        icon: "schools",
        description:
          "High-performance flooring for campus buildings, lecture halls, and student facilities.",
        image: "/images/Universities-Flooring-Image.webp",
      },
      {
        title: "Courthouses",
        icon: "government",
        description:
          "Durable, professional, impact-resistant flooring solutions for courtrooms and judicial facilities.",
        image: "/images/CourtFlooring-Image.webp",
      },
      {
        title: "Military Bases",
        icon: "military",
        description:
          "Reliable flooring built for demanding military and defense facility environments.",
        image: "/images/military-Flooring-Image.webp",
      },
      {
        title: "Colleges",
        icon: "schools",
        description:
          "Stylish, durable, slip-resistant flooring for college campuses and academic buildings.",
        image: "/images/College-Flooring-Image.webp",
      },
      {
        title: "Social Service Offices",
        icon: "offices",
        description:
          "Welcoming, easy-care flooring for social service and community support offices.",
        image: "/images/Social-Flooring-Image.webp",
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
          {
            title: "Showroom tour 4",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=450&fit=crop",
            duration: "1:24",
          },
          {
            title: "Showroom tour 5",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=450&fit=crop",
            duration: "1:18",
          },
          {
            title: "Showroom tour 6",
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
          {
            title: "Warehouse overview 4",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=450&fit=crop",
            duration: "1:18",
          },
          {
            title: "Warehouse overview 5",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
            duration: "1:42",
          },
          {
            title: "Warehouse overview 6",
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
          {
            title: "Installation 4",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=450&fit=crop",
            duration: "1:35",
          },
          {
            title: "Installation 5",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=450&fit=crop",
            duration: "2:10",
          },
          {
            title: "Installation 6",
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
          {
            title: "Customer story 4",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop",
            duration: "0:58",
          },
          {
            title: "Customer story 5",
            src: "/images/dummyvideo.webm",
            poster:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop",
            duration: "1:12",
          },
          {
            title: "Customer story 6",
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

const facebookFeedContent = [
  {
    eyebrow: "Social Updates",
    title: "Follow Us On Social Media",
    description:
      "See the latest project photos, flooring tips, and community updates from FMP Flooring on Facebook.",
    pageUrl: "https://www.facebook.com/people/FMP-Flooring/100084480100386/",
    embedPageUrl: "https://www.facebook.com/profile.php?id=100084480100386",
    buttonText: "Visit Our Facebook Page",
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
      "Guides and tips to help you choose smarter — from LVP trends and sound-resistant floors to care tips and buying advice.",
    buttonText: "View All Articles",
    buttonHref: "/blog",
    posts: blogPosts.slice(0, 3).map(
      ({ title, excerpt, category, date, dateLabel, image, href }) => ({
        title,
        excerpt,
        category,
        date,
        dateLabel,
        image,
        href,
      }),
    ),
  },
];

const educationalVideosContent = [
  {
    eyebrow: "Watch & Learn",
    title: "Educational Videos",
    description:
      "Short videos covering flooring tips, product education, and installation insights to help you make confident decisions.",
    buttonText: "View Our Youtube Channel",
    buttonHref: "https://www.youtube.com/@furnishmyplace4954",
    videos: [
      {
        title: "Showroom tour 1",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=450&fit=crop",
        duration: "1:24",
      },
      {
        title: "Showroom tour 2",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=450&fit=crop",
        duration: "1:18",
      },
      {
        title: "Showroom tour 3",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=450&fit=crop",
        duration: "1:35",
      },
      {
        title: "Warehouse overview 1",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=450&fit=crop",
        duration: "1:18",
      },
      {
        title: "Warehouse overview 2",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
        duration: "1:42",
      },
      {
        title: "Installation 1",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=450&fit=crop",
        duration: "1:35",
      },
      {
        title: "Installation 2",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=450&fit=crop",
        duration: "2:10",
      },
      {
        title: "Customer story 1",
        youtubeId: "M7lc1UVf-VE",
        poster:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop",
        duration: "0:58",
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
        theme: "teal",
        highlight: "Special Discount",
        title: "Military, Veterans & Senior Citizens",
        description: "Thank you for your service and loyalty.",
        buttonText: "Free In-Home Estimate",
        buttonHref: "/estimate",
        image: "/images/Offer-banner-image.webp",
        imageAlt: "Healthcare worker smiling outdoors",
      },
    ],
  },
];

const workShowcaseContent = [
  {
    eyebrow: "Our Work",
    title: "Work Showcase",
    description:
      "Browse real flooring projects from FMP Flooring — completed installs, product looks, and spaces transformed by our team.",
    images: [
      { src: "/images/home-gallery/01-1.jpg", alt: "Completed flooring installation project" },
      { src: "/images/home-gallery/04-1.jpg", alt: "Flooring project showcase" },
      { src: "/images/home-gallery/05-1.jpg", alt: "Installed flooring detail" },
      { src: "/images/home-gallery/3.jpg", alt: "Residential flooring project" },
      { src: "/images/home-gallery/5.jpg", alt: "Flooring installation result" },
      { src: "/images/home-gallery/6.jpeg", alt: "Finished flooring room" },
      { src: "/images/home-gallery/7.jpg", alt: "Flooring project photo" },
      { src: "/images/home-gallery/9.jpeg", alt: "Completed flooring space" },
      { src: "/images/home-gallery/9.jpg", alt: "Installed floor surface" },
      { src: "/images/home-gallery/10.jpeg", alt: "Flooring showcase image" },
      { src: "/images/home-gallery/10.jpg", alt: "Professional flooring install" },
      { src: "/images/home-gallery/12.jpg", alt: "Flooring project gallery photo" },
      {
        src: "/images/home-gallery/67700 - 433RB Bloomington Oak-01.png",
        alt: "Bloomington Oak flooring sample",
      },
      { src: "/images/home-gallery/67756653 (1).jpg", alt: "Flooring installation showcase" },
      { src: "/images/home-gallery/n7 (1).jpg", alt: "Flooring project photo 1" },
      { src: "/images/home-gallery/n7 (2).jpg", alt: "Flooring project photo 2" },
      { src: "/images/home-gallery/n7 (3).jpg", alt: "Flooring project photo 3" },
      { src: "/images/home-gallery/new10.jpg", alt: "Recent flooring project" },
      { src: "/images/home-gallery/new11.jpg", alt: "Recent flooring install" },
      { src: "/images/home-gallery/new13.jpg", alt: "Recent flooring showcase" },
      { src: "/images/home-gallery/Renwick Oak01.jpg", alt: "Renwick Oak flooring look" },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <FederalMarquee items={federalContent[0].marqueeItems} />
      {/* <HeroSection content={heroContent} /> */}
      <HeroSectionCopy content={heroContent} />
      <FederalContractorSection content={federalContent} />
      <ProcessSection content={processContent} />
      <ServicesSection content={servicesContent} />
      <QuoteCtaSection content={quoteCtaContent} />
      <MeetTheFounderSection content={founderContent} />
      <FeaturesSection content={featuresContent} />
      <HowWeManageProjectsSection content={howWeManageProjectsContent} />
      <ExploreVideosSection content={videosContent} />
      <GoogleReviewsSection content={googleReviewsContent} />
      <BrandsSection content={brandsContent} />
      <FacebookFeedSection content={facebookFeedContent} />
      <BeforeAfterSection content={beforeAfterContent} />
      <MeetOurTeamSection content={teamContent} />
      <OffersSliderSection content={offersContent} />
      <FederalMarquee items={federalContent[0].marqueeItems} />
      <WhyChooseSection content={whyChooseContent} />
      
      <ComparisonSection content={whyBuyDirectContent} />
      
      
      <LatestProjectsSection content={latestProjectsContent} />
      <ImageGallerySection content={workShowcaseContent} />
      <QuoteCtaSection content={quoteCtaContent} />
      <EducationalResourcesSection content={educationalResourcesContent} />
      <EducationalVideosSection content={educationalVideosContent} />
      <TestimonialsSection content={testimonialsContent} />
      <QuoteCtaSection content={quoteCtaContent} />
      <FaqSection content={faqContent} />
      <FederalMarquee items={federalContent[0].marqueeItems} />
      <CtaSection content={ctaContent} />
      
    </main>
  );
}
