import { notFound } from "next/navigation";
import CommercialProjectDetailPage from "@/components/CommercialProjectDetailPage";
import {
  getAllCommercialProjectSlugs,
  getCommercialProjectBySlug,
} from "@/data/commercial-project-details";

export function generateStaticParams() {
  return getAllCommercialProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getCommercialProjectBySlug(slug);
  if (!project) {
    return { title: "Commercial Project | FMP Flooring" };
  }

  return {
    title: `${project.title} | Commercial Project | FMP Flooring`,
    description:
      project.description ||
      `${project.title} commercial flooring project by FMP Flooring.`,
  };
}

export default async function CommercialProjectSlugPage({ params }) {
  const { slug } = await params;
  const project = getCommercialProjectBySlug(slug);
  if (!project) notFound();
  return <CommercialProjectDetailPage project={project} />;
}
