import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BlogPage() {
  const t = await getTranslations("blog");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="mt-2 text-muted-foreground">
          {t("description")}
        </p>
      </div>

      {/* Blog posts will be added here */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <p className="col-span-full text-center text-muted-foreground py-12">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
