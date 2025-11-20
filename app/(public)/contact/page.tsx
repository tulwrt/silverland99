import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  // Team members data from translations
  // Initials are kept in English (W, S, D) regardless of language
  const teamMembers = [
    {
      name: t("team.members.0.name"),
      initial: "W",
      position: t("team.members.0.position"),
      phone: t("team.members.0.phone"),
      wechat: t("team.members.0.wechat"),
      line: t("team.members.0.line"),
      email: t("team.members.0.email"),
    },
    {
      name: t("team.members.1.name"),
      initial: "S",
      position: t("team.members.1.position"),
      phone: t("team.members.1.phone"),
      wechat: t("team.members.1.wechat"),
      line: t("team.members.1.line"),
      email: t("team.members.1.email"),
    },
    {
      name: t("team.members.2.name"),
      initial: "W",
      position: t("team.members.2.position"),
      phone: t("team.members.2.phone"),
      wechat: t("team.members.2.wechat"),
      line: t("team.members.2.line"),
      email: t("team.members.2.email"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">{t("team.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.initial}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Phone/WhatsApp */}
                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-green-600" />
                    </div>
                    <span>{member.phone}</span>
                  </a>

                  {/* WeChat */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span>WeChat: {member.wechat}</span>
                  </div>

                  {/* Line */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Line: {member.line}</span>
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>{member.email}</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Office Location */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">{t("office.title")}</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground leading-relaxed">
                    {t("office.address")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
