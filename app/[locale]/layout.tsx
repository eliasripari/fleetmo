import "../globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { mainMenu, footerMenu } from "@/menu.config";
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
  alternates: {
    canonical: "/",
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
          <Nav />
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  const t = useTranslations("Menu");
  return (
    <nav className={cn("sticky z-50 top-0 pt-4", className)} id={id}>
      <div
        id="nav-container"
        className="w-[calc(100%-2rem)] grid grid-cols-[1fr_auto_1fr] mx-auto py-4 px-4 sm:px-6 flex justify-between items-center bg-foreground rounded-xl"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center relative"
          href="/"
        >
          <div className="relative">
            <Image
              src={Logo}
              alt="Logo"
              loading="eager"
              className="dark:invert"
              width={200}
              height={26.44}
            ></Image>
            <h2 className="text-[10px] text-white border-[1px] rounded-full px-1 py-0.2 absolute -top-2 -right-10">
              Beta
            </h2>
          </div>
        </Link>
        {children}
        <div className="flex items-center gap-2 ">
          <div className="mx-2 hidden md:flex text-white">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="sm">
                <Link href={href}>{t(key)}</Link>
              </Button>
            ))}
          </div>
        </div>
        <Button asChild className="hidden" variant="secondary">
          <Link href="https://my.fleetmo.app">Get Started</Link>
        </Button>
        <div className="flex items-center gap-2 justify-end">
          <Link href="#introduction">
            <Button variant="outline" className="bg-foreground text-white">
              {t("discoverMore")}
            </Button>
          </Link>
          <Link href="" className="relative">
            <Button
              disabled
              className="bg-white text-foreground hover:bg-white/80 relative"
            >
              {t("areYouProvider")}
            </Button>
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section className="bg-foreground !-mt-12 border-t border-white/10  !p-0 !bg-black">
        <div className="w-full min-h-[200px]">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
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
