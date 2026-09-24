import dynamic from "next/dynamic";
import FederalMarquee from "@/components/homev2/FederalMarquee";
import HeroSectionCopy from "@/components/homev2/HeroSectionCopy";
import FederalContractorSection from "@/components/homev2/FederalContractorSection";
import ProcessSection from "@/components/homev2/ProcessSection";
import ServicesSection from "@/components/homev2/ServicesSection";
import QuoteCtaSection from "@/components/homev2/QuoteCtaSection";
import { blogPosts } from "@/data/blog-posts";

const MeetTheFounderSection = dynamic(() => import("@/components/homev2/MeetTheFounderSection"));
const HighlightsWhyChooseSection = dynamic(() =>
  import("@/components/homev2/HighlightsWhyChooseSection"),
);
const HowWeManageProjectsSection = dynamic(() =>
  import("@/components/homev2/HowWeManageProjectsSection"),
);
const ExploreVideosSection = dynamic(() => import("@/components/homev2/ExploreVideosSection"));
const GoogleReviewsSection = dynamic(() => import("@/components/homev2/GoogleReviewsSection"));
const BrandsSection = dynamic(() => import("@/components/homev2/BrandsSection"));
const FacebookFeedSection = dynamic(() => import("@/components/homev2/FacebookFeedSection"));
const BeforeAfterSection = dynamic(() => import("@/components/homev2/BeforeAfterSection"));
const MeetOurTeamSection = dynamic(() => import("@/components/homev2/MeetOurTeamSection"));
const OffersSliderSection = dynamic(() => import("@/components/OffersSliderSection"));
const LatestProjectsSection = dynamic(() => import("@/components/homev2/LatestProjectsSection"));
const EducationalResourcesSection = dynamic(() =>
  import("@/components/homev2/EducationalResourcesSection"),
);
const EducationalVideosSection = dynamic(() =>
  import("@/components/homev2/EducationalVideosSection"),
);
const TestimonialsSection = dynamic(() => import("@/components/homev2/TestimonialsSection"));
const FaqSection = dynamic(() => import("@/components/homev2/FaqSection"));
const CtaSection = dynamic(() => import("@/components/homev2/CtaSection"));

const heroContent = [
  {
    backgroundImage: "/images/mainhero.webp",
    backgroundImages: [
      "/images/mainhero.webp",
      "/images/mainhero-2.webp",
      "/images/mainhero-3-0.webp",
    ],
    badge: "Family Owned & Operated Since 1995",
    title: "Commercial & Residential Flooring Contractor",
    titleHighlight: "in North Carolina & South Carolina",
    description: [
      { text: "Company trusted for jobs that " },
      { text: "can't afford mistakes", highlight: true },
    ],
    ctas: [
      {
        label: "Explore Commercial Projects",
        href: "/commercial",
        variant: "primary",
      },
      {
        label: "Explore Residential Projects",
        href: "/residential",
        variant: "secondary",
      },
      {
        label: "In-Stock Specials",
        href: "/in-stock-specials",
        variant: "highlight",
      },
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
    stats: [
      { value: "1,000+", label: "Happy Customer" },
      { value: "10+", label: "Years Experience" },
      { value: "1000+", label: "Projects Completed" },
      {
        text: "Federal & State",
        label: "Flooring Contractor",
        variant: "highlight",
      },
      {
        text: "No Middlemen",
        label: "Direct Importer & Distributor",
        variant: "highlight",
      },
    ],
  },
];

const ctaContent = [
  {
    eyebrow: "START YOUR FLOORING PROJECT",
    title: "Let's Transform Your Space With Quality Flooring",
    description:
      "Whether you need flooring for your home, office, commercial facility, or public project, FMP Flooring is ready to help. Get expert guidance, quality flooring options, and professional installation from start to finish.",
    phone: "+1 9802521648",
    phoneHref: "tel:+19802521648",
    buttonText: "GET YOUR FREE ESTIMATE",
    buttonHref: "/estimate",
    backgroundImage: "/images/Hero-Image.jpg",
  },
];

const quoteCtaContent = [
  {
    eyebrow: "Start Your Project",
    title: "Ready for Beautiful New Floors?",
    description:
      "Tell us about your space and get a free, no obligation quote from our flooring experts.",
    buttonText: "Get a Quote",
    buttonHref: "/estimate",
  },
];

const servicesContent = [
  {
    eyebrow: "What We Offer",
    title: "Our Flooring Services",
    description:
      "Explore durable and stylish flooring solutions for residential and commercial spaces, professionally installed by our experienced team.",    
    services: [
      
      {
        title: "Luxury Vinyl Plank Flooring",
        description:
          "Durable and stylish luxury vinyl plank flooring that combines the look of natural materials with easy maintenance and everyday performance.",
        image: "/images/home-services/new/Service_Luxury_Vinyl_Plank.webp",
        href: "/lvp",
      },
      {
        title: "Broadloom Carpet Flooring",
        description:
          "Soft, comfortable wall to wall carpet that adds warmth, style, and comfort to residential and commercial spaces.",
        image: "/images/home-services/new/Broadloom_Carpet.webp",
        href: "/broadloom-carpet",
      },
      {
        title: "Carpet Tile",
        description:
          "Flexible modular carpet tiles designed for offices and high traffic spaces with convenient installation, maintenance, and replacement.",
        image: "/images/home-services/new/Carpet_Tile.webp",
        href: "/carpet-tile",
      },
      {
        title: "Hardwood",
        description:
          "Timeless hardwood flooring that brings natural beauty, durability, and lasting value to your home or commercial space.",
        image: "/images/home-services/new/Hardwood.webp",
        href: "/hardwood",
        badge: "",
      },
      {
        title: "Laminate",
        description:
          "Attractive and durable laminate flooring that provides the look of natural materials with easy maintenance and everyday practicality.",
        image: "/images/home-services/new/Laminate.webp",
        href: "/laminate",
      },
      {
        title: "Ceramic Flooring",
        description:
          "Durable ceramic flooring available in a range of styles for residential, commercial, and high use environments.",
        image: "/images/home-services/new/Ceramic_Flooring.webp",
        href: "/ceramic",
      },
      {
        title: "Rubber Flooring",
        description:
          "Resilient rubber flooring designed for durability, comfort, safety, and performance in demanding environments.",
        image: "/images/home-services/new/Rubber_Flooring.webp",
        href: "/rubber",
      },
      {
        title: "Vinyl Composition Tiles (VCT)",
        description:
          "Versatile vinyl composition tile flooring designed for commercial environments that require durability, easy maintenance, and long lasting performance.",
        image: "/images/home-services/new/Vinyl_Composition_Tiles.webp",
        href: "/vct",
      },
    ],
  },
];

const featuresContent = [
  {
    eyebrow: "Our Work USP",
    title: "Service Highlights",
    description: "From preparation to installation, we take care of the details that make your flooring project easier and more successful.",
    backgroundImage: "/images/294-Wood-Flooring.webp",

    cards: [
      {
        icon: "furniture",
        title: "Furniture Carefully Moved",
       
      },
      {
        icon: "preparation",
        title: "Complete Floor Preparation",
       
      },
      {
        icon: "removal",
        title: "Old Flooring Removal",
        
      },
      {
        icon: "challenges",
        title: "Installation Challenges Handled",
        
      },
      {
        icon: "hassleFree",
        title: "Hassle Free Installation",
        
      },
    ],
  },
];

const howWeManageProjectsContent = [
  {
    eyebrow: "Project Management",
    title: "How We Manage Every Project",
    description:
      "A clear, step by step process helps every flooring project stay organized, efficient, and stress free. From removing your old flooring to completing the final finishing touches, our team manages each stage with care.",
    steps: [
      {
        step: "01",
        title: "Old Flooring & Haul Away",
        description:
          "We remove your existing carpet, tile, or other flooring and haul it away so the space is clear and ready for installation.",
        image: "/images/process-feature/01-old-flooring-haul-away.jpg",
        imageAlt: "Crew removing old carpet and hauling flooring debris away",
      },
      {
        step: "02",
        title: "Subfloor Preparation",
        description:
          "We inspect, level, and prepare the subfloor to create a smooth, stable foundation for your new flooring.",
        image: "/images/process-feature/02-subfloor-preparation.jpg",
        imageAlt: "Technician leveling and preparing the subfloor",
      },
      {
        step: "03",
        title: "Professional Flooring Installation",
        description:
          "Our experienced installers precisely lay your new flooring for a clean, seamless, and professional finish.",
        image: "/images/process-feature/03-flooring-installation.jpg",
        imageAlt: "Professional installing new wood-look flooring planks",
      },
      {
        step: "04",
        title: "Trim, Fixtures & Final Touches",
        description:
          "We complete the installation with trim and finishing details, then reinstall removed fixtures and ensure everything is clean, polished, and ready to enjoy.",
        image: "/images/process-feature/04-trim-final-touches.jpg",
        imageAlt: "Installer fitting baseboard trim on newly installed flooring",
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
      "FMP Flooring & Installation Services was founded with a simple belief: every space deserves quality flooring and exceptional service. Our mission is to provide dependable flooring solutions, honest guidance, skilled installation, and lasting value for every project we take on.",

    values: [
      {
        icon: "quality",
        title: "Quality",
        description: "We never compromise on the quality of our materials, workmanship, or finished results.",
      },
      {
        icon: "integrity",
        title: "Integrity",
        description: "We believe in honest communication, transparent processes, and dependable service.",
      },
      {
        icon: "commitment",
        title: "Commitment",
        description: "We treat every flooring project like it is our own and remain committed from start to finish.",
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
    backgroundImage: "/images/flooring-process-bg-remastered-new.webp",
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
        image: "/images/School-Image-Federal.webp",
      },
      {
        title: "Hospitals",
        icon: "hospitals",
        description:
          "Hygienic, slip-resistant, and compliant flooring solutions for healthcare facilities.",
        image: "/images/Hostpital-Image-Federal.webp",
      },
      {
        title: "Government",
        icon: "government",
        description:
          "Reliable, specification-ready flooring for government buildings and public agencies.",
        image: "/images/Govt-Image-Federal.webp",
      },
      {
        title: "Offices",
        icon: "offices",
        description:
          "Professional, long-lasting flooring systems for municipal and administrative spaces.",
        image: "/images/Office-Image-Federal.webp",
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
        image: "/images/CourtFlooringNewImage.webp",
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
    description: "Take a closer look at our flooring projects, installations, showroom, warehouse, and completed work. See the quality and attention to detail we bring to every project.",
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
        question: "Do you offer free flooring estimates?",
        answer:
          "Yes. FMP Flooring provides free, no obligation estimates for flooring projects. Contact our team to discuss your space, flooring needs, and project requirements and receive a quote tailored to your project.",
      },
      {
        question: "What flooring is best for homes with pets?",
        answer:
          "Luxury vinyl plank, ceramic flooring, and other durable flooring options can be excellent choices for homes with pets. Our team can help you choose flooring based on your lifestyle, maintenance needs, and preferred style.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "FMP Flooring serves residential and commercial customers across North Carolina and South Carolina, including the greater Charlotte area. Contact us to confirm service availability for your location.",
      },
      {
        question: "What is the most durable flooring for high traffic areas?",
        answer:
          "The best flooring for a high traffic area depends on the type of space and how it is used. Luxury vinyl plank, carpet tile, rubber, VCT, ceramic, and other commercial flooring options can provide excellent durability when properly selected and installed.",
      },
      {
        question: "Can new flooring be installed over existing floors?",
        answer:
          "In some cases, new flooring can be installed over an existing floor. The existing surface must first be inspected to determine whether it is clean, level, stable, and suitable for the new flooring. Our team can recommend the proper preparation for your project.",
      },
      {
        question: "Do you offer waterproof flooring options?",
        answer:
          "Yes. We offer flooring options designed to provide excellent moisture resistance and performance. Luxury vinyl plank is one popular option for spaces where easy maintenance and moisture resistance are important.",
      },
      {
        question: "Can I see flooring samples before purchasing?",
        answer:
          "Yes. Flooring samples can help you compare colors, textures, patterns, and finishes before making a decision. Contact FMP Flooring to discuss available flooring options and samples for your project.",
      },
      {
        question: "How soon can my flooring be installed?",
        answer:
          "Installation time depends on the flooring type, project size, preparation requirements, and product availability. After reviewing your project, our team can provide a clearer installation timeline.",
      },
      {
        question: "Do you provide commercial flooring installation?",
        answer:
          "Yes. FMP Flooring provides commercial flooring installation for offices, retail spaces, schools, healthcare facilities, government buildings, and other commercial environments.",
      },
      {
        question: "Do you provide residential flooring installation?",
        answer:
          "Yes. We provide residential flooring installation for homeowners looking for quality flooring products and professional installation. Our team can help with flooring selection, preparation, installation, and finishing.",
      },
    ],
  },
];

const testimonialsContent = [
  {
    eyebrow: "Testimonials",
    title: "What Our Clients Say",
    backgroundImage: "/images/laminate-reviews.webp",
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
      "See our latest flooring projects, installation updates, flooring tips, and company news from FMP Flooring. Follow us on Facebook to stay connected with our latest work.",
    pageUrl: "https://www.facebook.com/people/FMP-Flooring/100084480100386/",
    embedPageUrl: "https://www.facebook.com/profile.php?id=100084480100386",
    buttonText: "Visit Our Facebook Page",
    image: "/images/flooring-sm.webp",
    imageAlt: "FMP Flooring team installing new flooring",
  },
];

const latestProjectsContent = [
  {
    title: "Our Latest Flooring Projects",
    description:
      "Explore our latest flooring projects and see how FMP Flooring transforms residential, commercial, and public spaces with quality flooring products and professional installation.",
    embedUrl: "https://trusty.app/embed/project-map/37869d9b-531a-4f71-aaef-2a6d1006f3f3",
  },
];

const beforeAfterContent = [
  {
    eyebrow: "Our Transformations",
    title: "Before and After Flooring Transformations",
    tagline: "Same room. Same light. Completely new life.",
    paragraphs: [
      "New flooring can completely change how a space looks, feels, and functions. From worn carpet to refined hardwood or luxury vinyl plank, every flooring transformation can bring new life to a home or commercial space.",
      "Browse our flooring transformations and see the difference professional flooring installation can make.",
    ],
    buttonText: "Free In Home Estimate",
    buttonHref: "/estimate",
    projects: [
      {
        label: "Project 54",
        beforeImage: "/images/before-after/54-Before.webp",
        afterImage: "/images/before-after/54-After.jpg",
      },
      {
        label: "Project 58",
        beforeImage: "/images/before-after/58-Before.jpg",
        afterImage: "/images/before-after/58-After.jpg",
      },
      {
        label: "Project 62",
        beforeImage: "/images/before-after/62-Before.jpg",
        afterImage: "/images/before-after/62-After.jpeg",
      },
      {
        label: "Project 99",
        beforeImage: "/images/before-after/99-Before.jpeg",
        afterImage: "/images/before-after/99-After.jpeg",
      },
      {
        label: "Residential Remodel",
        beforeImage: "/images/before-after/78-Before.jpeg",
        afterImage: "/images/before-after/78-After.jpg",
      },
    ],
  },
];

const whyChooseContent = [
  {
    eyebrow:"",
    title: "Why Choose FMP?",
    description:
      "Family owned since 1995, FMP Flooring combines quality materials, professional installation, warehouse pricing, and honest guidance for residential and commercial flooring projects.",

    items: [
      {
        icon: "professionals",
        title: "Experienced Professionals",
        description:
          "Skilled flooring installers with industry experience, delivering careful workmanship and dependable results on every project.",
      },
      {
        icon: "selection",
        title: "Wide Range of Flooring Options",
        description:
          "Choose from carpet, carpet tile, luxury vinyl plank, laminate, hardwood, ceramic, VCT, rubber, and more.",
      },
      {
        icon: "pricing",
        title: "Affordable & Transparent Pricing",
        description:
          "Clear estimates, competitive pricing, and straightforward service without unnecessary surprises.",
      },
      {
        icon: "expertise",
        title: "Residential & Commercial Expertise",
        description:
          "We work with homeowners, offices, retail spaces, public facilities, and large commercial projects.",
      },
      {
        icon: "quality",
        title: "Quality Materials & Workmanship",
        description:
          "We use trusted flooring products and proven installation methods designed for durability, performance, and lasting appeal.",
      },
      {
        icon: "satisfaction",
        title: "Customer Satisfaction First",
        description:
          "Clear communication, dependable service, careful installation, and attention to detail are at the heart of every project.",
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
      <HighlightsWhyChooseSection
        highlights={featuresContent[0]}
        whyChoose={whyChooseContent[0]}
      />
      <HowWeManageProjectsSection content={howWeManageProjectsContent} />
      <ExploreVideosSection content={videosContent} />
      <GoogleReviewsSection content={googleReviewsContent} />
      <BrandsSection content={brandsContent} />
      <FacebookFeedSection content={facebookFeedContent} />
      <BeforeAfterSection content={beforeAfterContent} />
      <MeetOurTeamSection content={teamContent} />
      <OffersSliderSection content={offersContent} />
      <FederalMarquee items={federalContent[0].marqueeItems} />
      {/* <ComparisonSection content={whyBuyDirectContent} /> */}
      
      <LatestProjectsSection content={latestProjectsContent} />
      {/* <ImageGallerySection content={workShowcaseContent} /> */}
      <QuoteCtaSection content={quoteCtaContent} />
      <EducationalResourcesSection content={educationalResourcesContent} />
      <EducationalVideosSection content={educationalVideosContent} />
      {/*<TestimonialsSection content={testimonialsContent} />*/}
      <QuoteCtaSection content={quoteCtaContent} />
      <FaqSection content={faqContent} />
      <FederalMarquee items={federalContent[0].marqueeItems} />
      <CtaSection content={ctaContent} />
      
    </main>
  );
}
