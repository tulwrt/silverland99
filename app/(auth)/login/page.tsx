import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("login");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LoginPage() {
  const t = await getTranslations("login");

  return (
    <div className="bg-card rounded-lg border p-8 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("description")}
        </p>
      </div>

      {/* Login form will be added here */}
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            {t("password")}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md bg-background"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
