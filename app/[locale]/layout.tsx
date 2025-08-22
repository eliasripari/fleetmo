import "../globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { Nav as MegaNav } from "@/components/nav/mega-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { footerMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/site.config";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo-fleetmo.svg";
import Balancer from "react-wrap-balancer";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Aurora from "@/components/Aurora/Aurora";
import JoinWaitlist from "@/components/joinWaitlist";
import { ArrowRight } from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { WaitlistProvider } from "@/components/WaitlistProvider";
const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fleetmo",
  description:
    "Fleetmo is a platform that helps you manage your fleet of vehicles.",
  metadataBase: new URL(siteConfig.site_domain),
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
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Import messages for the locale
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <WaitlistProvider>
              <MegaNav />
              {children}
            </WaitlistProvider>
          </NextIntlClientProvider>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer>
      <Section className="bg-foreground !-mt-12 border-t border-white/10  !p-0 bg-black">
        <div className="w-full min-h-[200px]">
          <Aurora
            colorStops={["#41CF8F", "#22C55E", "#10B981"]}
            blend={3.5}
            amplitude={1}
            speed={0.5}
          />
        </div>
        <div className="w-full max-w-7xl mx-auto p-8">
          <Image
            src={Logo}
            alt="Logo"
            loading="eager"
            className="dark:invert w-screen"
            width={1920}
            height={1080}
          ></Image>
        </div>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12 text-white px-8">
          <div className="flex flex-col gap-6 not-prose">
            <p>
              <Balancer>{siteConfig.site_description}</Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Links</h5>
            {Object.entries(footerMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {/* <h5 className="font-medium text-base">Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))} */}
          </div>
        </Container>
        <Container className="not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center p-8">
          {/* <ThemeToggle /> */}
          <div className="border-t border-white/10 w-full py-8">
            <p className="text-muted-foreground">
              &copy; <a href="https://9d8.dev">{siteConfig.site_name}</a> -
              Service offered by Wonder Rides FZCO - All rights reserved -
              2025-present.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
