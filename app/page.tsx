import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Zap,
  Droplets,
  Wifi,
  MapPin,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  TrendingUp,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getLocale } from "@/lib/locale";
import { createClient } from "@/lib/supabase/server";
import { Header, Footer } from "@/components/layout";
import { FeaturedProperties } from "@/components/property";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSlider } from "@/components/ui/hero-slider";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");

  // Fetch featured properties from Supabase
  const supabase = await createClient();
  const { data: featuredProperties, error } = await supabase
    .from("properties")
    .select("*, category:categories(*), images:property_images(*)")
    .eq("status", "published")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(3);

  // Debug logging
  if (error) {
    console.error("Supabase error:", error);
  }
  console.log("Featured properties count:", featuredProperties?.length || 0);

  // Features for Data Center properties
  const features = [
    {
      icon: Zap,
      title: t("features.power.title"),
      description: t("features.power.description"),
    },
    {
      icon: Droplets,
      title: t("features.water.title"),
      description: t("features.water.description"),
    },
    {
      icon: Wifi,
      title: t("features.fiber.title"),
      description: t("features.fiber.description"),
    },
    {
      icon: MapPin,
      title: t("features.location.title"),
      description: t("features.location.description"),
    },
  ];

  // Stats
  const stats = [
    { value: "50+", label: t("stats.plots") },
    { value: "10,000+", label: t("stats.rai") },
    { value: "100+", label: t("stats.mw") },
    { value: "5+", label: t("stats.years") },
  ];

  // Why choose us reasons
  const whyChooseUs = [
    t("whyUs.reasons.0"),
    t("whyUs.reasons.1"),
    t("whyUs.reasons.2"),
    t("whyUs.reasons.3"),
    t("whyUs.reasons.4"),
    t("whyUs.reasons.5"),
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden min-h-[600px] md:min-h-[700px]">
          {/* Background Image Slider */}
          <HeroSlider />

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float z-10" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float animation-delay-300 z-10" />
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-pulse z-10" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/30 rounded-full animate-pulse animation-delay-200 z-10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium shadow-md">
                  <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
                  {t("badge")}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up animation-delay-100 text-foreground">
                {t("heroTitle")}
                <span className="block gradient-text mt-2">{t("heroTitleHighlight")}</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200 text-foreground/80 font-medium">
                {t("heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
                <Button size="lg" className="btn-shine text-base px-8 py-6 shadow-lg shadow-primary/25" asChild>
                  <Link href="/properties">
                    {t("viewProperties")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    {tCommon("contactUs")}
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-medium">Trusted by 100+ Investors</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium">{t("verifiedProperties")}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="font-medium">{t("readyInfrastructure")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 hero-pattern opacity-50" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">{t("badgeInfrastructure")}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("features.title")}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                {t("features.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="text-center card-hover-lift border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <Badge variant="outline" className="mb-3">{t("badgeFeatured")}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">{t("featured.title")}</h2>
                <p className="mt-3 text-muted-foreground text-lg">
                  {t("featured.description")}
                </p>
              </div>
              <Button variant="outline" className="border-2 hover:border-primary group" asChild>
                <Link href="/properties">
                  {tCommon("viewAll")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Property cards with currency switcher */}
            <FeaturedProperties
              properties={featuredProperties}
              locale={locale}
              loadingText={t("featured.loading")}
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-left">
                <Badge variant="outline" className="mb-4">{t("badgeWhyUs")}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("whyUs.title")}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {t("whyUs.description")}
                </p>
                <ul className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 animate-fade-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-10 btn-shine" size="lg" asChild>
                  <Link href="/about">
                    {tCommon("learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative animate-fade-in-right">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
                <div className="relative aspect-square bg-gradient-to-br from-background via-muted/30 to-background rounded-3xl flex items-center justify-center overflow-hidden border-2 border-primary/10">
                  {/* Logo display */}
                  <div className="relative w-2/3 h-2/3 animate-float">
                    <Image
                      src="/logo-new.png"
                      alt="Silver Land 99 Logo"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary/20 rounded-xl" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-secondary/20 rounded-lg" />
                  <div className="absolute top-1/4 right-8 w-3 h-3 bg-primary/30 rounded-full" />
                  <div className="absolute bottom-1/4 left-8 w-2 h-2 bg-secondary/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-amber-600 text-primary-foreground relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              {t("cta.title")}
            </h2>
            <p className="text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-100">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <Button size="lg" variant="secondary" className="text-base px-8 py-6 shadow-xl" asChild>
                <Link href="/properties">{tCommon("properties")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">{tCommon("contactUs")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
