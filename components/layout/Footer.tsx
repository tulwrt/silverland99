import Link from "next/link";
import Image from "next/image";
import { MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/80 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-new.png"
                  alt="Silver Land 99"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-gray-700 to-amber-600 bg-clip-text text-transparent">
                  Silver Land 99
                </span>
                <span className="text-[9px] text-muted-foreground -mt-0.5 tracking-wider">
                  LAND & REAL ESTATE
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs leading-relaxed">481/240 Suetrong Premium Rama 2 - Samae Dam, Soi Samae Dam, Rama 2 Road, Samae Dam Sub-district, Bang Khun Thian District, Bangkok 10150 THAILAND</span>
              </div>
            </div>
          </div>

          {/* Properties links */}
          <div>
            <h3 className="font-semibold mb-4">{t("properties.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties?category=data-center"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("properties.dataCenter")}
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?category=land"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("properties.land")}
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?category=industrial"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("properties.industrial")}
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("properties.all")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-semibold mb-4">{t("services.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#consulting"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("services.consulting")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services#valuation"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("services.valuation")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services#due-diligence"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("services.dueDiligence")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold mb-4">{t("company.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("company.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("company.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("company.contact")}
                </Link>
              </li>
            </ul>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com/silverland99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://linkedin.com/company/silverland99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/silverland99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Silver Land 99. {t("copyright")}</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              {t("legal.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t("legal.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
