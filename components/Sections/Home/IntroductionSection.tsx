import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { FeatureGrid, createFeatureConfig } from "@/components/FeatureGrid";

// Icons
import {
  Upload,
  PlaneTakeoff,
  ArrowRightLeft,
  TicketSlash,
  Airplay,
  CircleDotDashedIcon,
  UserRoundX,
  CreditCard,
  Users,
  Brain,
} from "lucide-react";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});

export const IntroductionSection = () => {
  const t = useTranslations("HomePage");

  // Schema configuration for all features using the utility function
  const featuresSchema = [
    // Row 1: 1 large + 2 small
    createFeatureConfig(1, Upload, "Upload", 2, "standard", 200, 1),
    createFeatureConfig(
      2,
      PlaneTakeoff,
      "Flight Status",
      1,
      "standard",
      300,
      1
    ),
    createFeatureConfig(3, ArrowRightLeft, "Exchange", 1, "standard", 400, 1),

    // Row 2: 4 equal cards
    createFeatureConfig(4, TicketSlash, "Vouchers", 1, "standard", 500, 2),
    createFeatureConfig(5, Airplay, "Driver App", 1, "standard", 600, 2),
    createFeatureConfig(
      6,
      CircleDotDashedIcon,
      "Tracking",
      1,
      "standard",
      700,
      2
    ),
    createFeatureConfig(7, UserRoundX, "No-Show", 1, "standard", 800, 2),

    // Row 3: 2 single + 1 double (accent)
    createFeatureConfig(8, CreditCard, "Transactions", 1, "standard", 900, 3),
    createFeatureConfig(9, Users, "Driver Management", 1, "standard", 1000, 3),
    createFeatureConfig(10, Brain, "Coming Soon", 2, "accent", 1100, 3),
  ];

  return (
    <section id="introduction" className="!py-20">
      <Container className="">
        {/* Header */}
        <div className="flex flex-col gap-4 justify-center items-center max-w-4xl mx-auto mb-16">
          <Badge>{t("introduction")}</Badge>
          <SplitText
            text={t("introductionTitle")}
            className="text-4xl md:text-5xl font-semibold tracking-tighter text-center"
            delay={50}
            animationFrom={{
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </div>

        {/* Feature Grid */}
        <FeatureGrid
          features={featuresSchema}
          t={t}
          translationKey="features"
        />
      </Container>
    </section>
  );
};
