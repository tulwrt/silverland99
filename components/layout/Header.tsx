"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { type Locale } from "@/i18n/config";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("common");
  const tHeader = useTranslations("header");

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("properties"), href: "/properties" },
    { name: t("services"), href: "/services" },
    { name: t("blog"), href: "/blog" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="hidden md:block border-b bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:02-xxx-xxxx"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>02-xxx-xxxx</span>
              </a>
              <a
                href="mailto:contact@silverland99.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>contact@silverland99.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher currentLocale={locale} />
              <Link
                href="/login"
                className="text-muted-foreground hover:text-foreground"
              >
                {tHeader("topBar.login")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
              <Image
                src="/logo-new.png"
                alt="Silver Land 99"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-700 to-amber-600 bg-clip-text text-transparent">
                Silver Land 99
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1 tracking-wider">
                LAND & REAL ESTATE
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link href="/contact">{t("contactUs")}</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left">{tHeader("menu")}</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button asChild className="w-full">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        {t("contactUs")}
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
