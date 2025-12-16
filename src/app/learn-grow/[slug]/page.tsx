import { notFound } from "next/navigation";
import { getTutorialBySlug, getAllTutorialSlugs } from "@/lib/tutorials";
import TutorialContent from "./TutorialContent";

interface TutorialPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  return <TutorialContent tutorial={tutorial} />;
}

// Generate static params for all tutorials
export async function generateStaticParams() {
  const slugs = getAllTutorialSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
