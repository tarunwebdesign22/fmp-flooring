import EducationalVideosSection from "@/components/homev2/EducationalVideosSection";

export const metadata = {
  title: "Educational Videos | FMP Flooring",
  description:
    "Watch short flooring tips, product education, and installation insights from FMP Flooring.",
};

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

export default function EducationalVideosPage() {
  return (
    <main className="flex flex-1 flex-col">
      <EducationalVideosSection content={educationalVideosContent} />
    </main>
  );
}
