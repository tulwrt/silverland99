import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";

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
          className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          {t("submit")}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-muted-foreground/20"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            {t("orDivider")}
          </span>
        </div>
      </div>

      {/* Webmail Button */}
      <a
        href="https://mailpro-01.zth.netdesignhost.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-md border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 hover:border-primary/40 transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Mail className="h-4 w-4 text-primary" />
        </div>
        <div className="text-left">
          <div className="font-medium text-sm">{t("webmail")}</div>
          <div className="text-xs text-muted-foreground">{t("webmailDescription")}</div>
        </div>
      </a>
    </div>
  );
}
