import React from "react";
import dynamic from "next/dynamic";
import { Container, Section } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Network,
  Users,
  MapPin,
  DollarSign,
  Clipboard,
} from "lucide-react";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});
const AnimatedContent = dynamic(
  () => import("@/components/AnimatedContent/AnimatedContent"),
  { ssr: false }
);

// Feature Card Component
const FeatureCard = ({
  feature,
  index,
  isLarge = false,
  isHighlighted = false,
}: {
  feature: any;
  index: number;
  isLarge?: boolean;
  isHighlighted?: boolean;
}) => {
  const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1";
  const iconColor = isHighlighted ? "text-brand" : "";
  const cardClass = isHighlighted
    ? "border-2 border-brand bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 hover:shadow-xl hover:shadow-brand/20"
    : "border border-gray-200 hover:shadow-lg";
  const badgeClass = isHighlighted ? "bg-brand" : "bg-black";

  return (
    <div className={colSpan}>
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.5}
        delay={200 + index * 100}
      >
        <div
          className={`flex flex-col gap-4 p-6 rounded-2xl bg-white relative h-[250px] transition-all duration-300 group ${cardClass}`}
        >
          <span
            className={`text-[10px] font-semibold tracking-wider absolute top-0 right-6 uppercase px-2 py-1 text-white rounded-b-md ${badgeClass}`}
          >
            {feature.badge}
          </span>
          <div className="flex-shrink-0 relative">
            {isHighlighted && (
              <div className="absolute inset-0 bg-brand/20 rounded-full blur-md scale-150 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            )}
            {React.createElement(feature.icon, {
              className: `w-6 h-6 relative z-10 ${iconColor}`,
            })}
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3
              className={`font-semibold tracking-tighter text-xl ${
                isHighlighted
                  ? "bg-gradient-to-r from-gray-900 to-brand bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {feature.title}
            </h3>
            <p className="text-gray-600 text-xs">{feature.description}</p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export const IntroductionSuppliers = ({ t }: { t: any }) => {
  const features = [
    {
      title: t("introduction.features.feature1.title"),
      description: t("introduction.features.feature1.description"),
      icon: Clipboard,
      badge: t("introduction.features.feature1.badge"),
    },
    {
      title: t("introduction.features.feature2.title"),
      description: t("introduction.features.feature2.description"),
      icon: Brain,
      badge: t("introduction.features.feature2.badge"),
    },
    {
      title: t("introduction.features.feature3.title"),
      description: t("introduction.features.feature3.description"),
      icon: Network,
      badge: t("introduction.features.feature3.badge"),
    },
    {
      title: t("introduction.features.feature4.title"),
      description: t("introduction.features.feature4.description"),
      icon: Users,
      badge: t("introduction.features.feature4.badge"),
    },
    {
      title: t("introduction.features.feature5.title"),
      description: t("introduction.features.feature5.description"),
      icon: MapPin,
      badge: t("introduction.features.feature5.badge"),
    },
    {
      title: t("introduction.features.feature6.title"),
      description: t("introduction.features.feature6.description"),
      icon: DollarSign,
      badge: t("introduction.features.feature6.badge"),
    },
  ];

  return (
    <Section className="py-16 bg-white">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t("introduction.badge")}
          </Badge>
          <SplitText
            text={t("introduction.title")}
            className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.1}
            rootMargin="-50px"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("introduction.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Prima riga: 1 grande + 2 piccole */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard feature={features[0]} index={0} isLarge={true} />
            <FeatureCard feature={features[1]} index={1} isHighlighted={true} />
            <FeatureCard feature={features[2]} index={2} />
          </div>

          {/* Seconda riga: 3 card uniformi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.slice(3, 6).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                feature={feature}
                index={index + 3}
                isHighlighted={index === 1} // GPS Tracking feature
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
