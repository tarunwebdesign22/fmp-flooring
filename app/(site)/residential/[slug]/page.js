import { notFound } from "next/navigation";
import CommercialProjectDetailPage from "@/components/CommercialProjectDetailPage";
import {
  getAllResidentialProjectSlugs,
  getResidentialProjectBySlug,
} from "@/data/residential-project-details";

export function generateStaticParams() {
  return getAllResidentialProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getResidentialProjectBySlug(slug);
  if (!project) {
    return { title: "Residential Project | FMP Flooring" };
  }

  return {
    title: `${project.title} | Residential Project | FMP Flooring`,
    description:
      project.description ||
      `${project.title} residential flooring project by FMP Flooring.`,
  };
}

export default async function ResidentialProjectSlugPage({ params }) {
  const { slug } = await params;
  const project = getResidentialProjectBySlug(slug);
  if (!project) notFound();
  return <CommercialProjectDetailPage project={project} />;
}
