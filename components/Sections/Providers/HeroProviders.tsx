"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Container, Section } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import { useWaitlist } from "@/components/WaitlistProvider";
import Link from "next/link";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});

export const HeroProviders = () => {
  const { openWaitlistModal } = useWaitlist();
  const t = useTranslations("ProvidersPage");
  return (
    <Section className="py-20 bg-foreground -mt-[200px] !pt-[300px]">
      <Container className="flex flex-row">
        <div className="flex flex-col flex-1 items-start text-left max-w-4xl space-y-8 text-white">
          <div className="inline-flex items-center bg-opacity-10 bg-brand text-[#84E0BA]  border border-[#84E0BA] px-3 rounded-full text-sm py-1 announcement-badge bg-opacity-10 bg-[#84E0BA]">
            {t("hero.badge")}
          </div>

          <SplitText
            text={t("hero.title")}
            className="text-4xl md:text-6xl font-semibold tracking-tighter !text-left"
            delay={50}
            animationFrom={{
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.1}
            rootMargin="-50px"
          />

          <p className="text-xl text-white max-w-2xl">{t("hero.subtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              variant="green"
              size="lg"
              className="group"
              onClick={openWaitlistModal}
            >
              {t("hero.cta")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="green-accent" size="lg" className="" asChild>
              <a href="#discover-more">{t("hero.secondary")}</a>
            </Button>
          </div>
        </div>
        <div className="flex-1"></div>
      </Container>
    </Section>
  );
};
