import BeforeAfterSection from "@/components/BeforeAfterSection";
import BrandsSection from "@/components/BrandsSection";
import CtaSection from "@/components/CtaSection";
import ExploreVideosSection from "@/components/ExploreVideosSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import FederalContractorSection from "@/components/FederalContractorSection";
import HeroSection from "@/components/HeroSection";
import LatestProjectsSection from "@/components/LatestProjectsSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import MeetTheFounderSection from "@/components/MeetTheFounderSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";

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
    backgroundImage: "/images/cta-bg.jpg",
  },
];

const featuresContent = [
  {
    icon: "wind",
    title: "Dustless Tile Removal",
    description:
      "Qualifying purchases include advanced containment systems that minimize dust and disruption.",
  },
  {
    icon: "wrench",
    title: "Professional Floor Prep Included",
    description:
      "Subfloors properly prepared to ensure stability, longevity, and flawless finished installations.",
  },
  {
    icon: "paintbrush",
    title: "Painted Wall Base",
    description:
      "Clean, finished wall bases professionally painted for a polished, move-in-ready appearance.",
  },
  {
    icon: "layers",
    title: '½" Premium Carpet Pad on All Carpet Installations',
    description:
      "Thicker premium padding improves comfort, durability, sound reduction, and carpet performance.",
  },
  {
    icon: "wind",
    title: "Free Air-Duct Cleaning (Included with Qualified Purchases)",
    description:
      "Improves indoor air quality while removing construction dust at no cost.",
  },
  {
    icon: "user",
    title: "Manager Check-In During Install",
    description:
      "On-site management oversight ensures quality standards, timelines, and customer communication.",
  },
  {
    icon: "search",
    title: "Final Walkthrough with a Flooring Expert",
    description:
      "Detailed inspection confirms craftsmanship, addresses questions, and ensures complete satisfaction.",
  },
  {
    icon: "shield",
    title: "Lifetime Labor Guarantee",
    description:
      "Installation workmanship guaranteed for life, providing long-term confidence and protection.",
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
    buttonHref: "/about",
    videoSrc: "/images/dummyvideo.webm",
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
    ],
  },
];

const federalContent = [
  {
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
              "https://images.unsplash.com/photo-1615874959474-d609967a2f00?w=800&h=450&fit=crop",
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
              "https://images.unsplash.com/photo-1581858726788-75bc0f1421d0?w=800&h=450&fit=crop",
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

const latestProjectsContent = [
  {
    title: "Our Latest Project",
    image: "/images/latest-project-image.png",
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

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection content={heroContent} />
      <FeaturesSection title="Included with Features" features={featuresContent} />
      <FederalContractorSection content={federalContent} />
      <MeetTheFounderSection content={founderContent} />
      <ExploreVideosSection content={videosContent} />
      <ProcessSection content={processContent} />
      <BeforeAfterSection content={beforeAfterContent} />
      <BrandsSection content={brandsContent} />
      <MeetOurTeamSection content={teamContent} />
      <LatestProjectsSection content={latestProjectsContent} />
      <TestimonialsSection content={testimonialsContent} />
      <FaqSection content={faqContent} />
      <CtaSection content={ctaContent} />
    </main>
  );
}
