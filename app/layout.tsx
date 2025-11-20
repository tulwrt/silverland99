import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { CurrencyProvider } from "@/hooks/use-currency";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Silverland99 | ที่ดินสำหรับ Data Center",
    template: "%s | Silverland99",
  },
  description:
    "แพลตฟอร์มขายอสังหาริมทรัพย์เน้นแปลงขนาดใหญ่สำหรับ Data Center พร้อมข้อมูลโครงสร้างพื้นฐานครบครัน ไฟฟ้า น้ำ Fiber และระยะห่างจากสถานีไฟฟ้า",
  keywords: [
    "ที่ดิน",
    "Data Center",
    "อสังหาริมทรัพย์",
    "ที่ดินอุตสาหกรรม",
    "ที่ดินแปลงใหญ่",
    "ซื้อที่ดิน",
    "ลงทุนที่ดิน",
    "Silverland99",
  ],
  authors: [{ name: "Silverland99" }],
  creator: "Silverland99",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Silverland99",
    title: "Silverland99 | ที่ดินสำหรับ Data Center",
    description:
      "แพลตฟอร์มขายอสังหาริมทรัพย์เน้นแปลงขนาดใหญ่สำหรับ Data Center",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silverland99",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silverland99 | ที่ดินสำหรับ Data Center",
    description:
      "แพลตฟอร์มขายอสังหาริมทรัพย์เน้นแปลงขนาดใหญ่สำหรับ Data Center",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <NextIntlClientProvider messages={messages}>
          <CurrencyProvider>
            {children}
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
