import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="mt-2 text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Contact form will be added here */}
        <div className="bg-card rounded-lg border p-6">
          <p className="text-muted-foreground text-center">
            {t("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
