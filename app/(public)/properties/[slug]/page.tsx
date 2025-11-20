import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations("properties");

  // TODO: Fetch property data
  return {
    title: `Property ${slug}`,
    description: t("detail.title"),
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const t = await getTranslations("properties");

  // TODO: Fetch property data from database
  // const property = await getPropertyBySlug(slug);
  // if (!property) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t("detail.title")}</h1>
        <p className="mt-2 text-muted-foreground">Slug: {slug}</p>
      </div>

      {/* Property detail content will be added here */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Gallery and info */}
          <p className="text-muted-foreground">{t("detail.contentPlaceholder")}</p>
        </div>
        <div>
          {/* Sidebar with inquiry form */}
          <p className="text-muted-foreground">{t("detail.formPlaceholder")}</p>
        </div>
      </div>
    </div>
  );
}
