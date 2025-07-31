import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { TrendingUpDown, Store, Bot } from "lucide-react";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});
const SpotlightCard = dynamic(
  () => import("@/components/SpotlightCard/SpotlightCard"),
  { ssr: false }
);

export const ComingSoonSection = () => {
  const t = useTranslations("HomePage");

  const comingSoonBoxes = [
    {
      icon: Bot,
      title: t("comingSoon.box3.title"),
      description: t("comingSoon.box3.description"),
      hasBadge: true,
    },
    {
      icon: TrendingUpDown,
      title: t("comingSoon.box1.title"),
      description: t("comingSoon.box1.description"),
      hasBadge: true,
    },
    {
      icon: Store,
      title: t("comingSoon.box2.title"),
      description: t("comingSoon.box2.description"),
      hasBadge: false,
    },
  ];

  return (
    <Section className="bg-foreground text-white !mt-0 !py-20" id="coming-soon">
      <Container>
        <div className="flex flex-col gap-6 justify-start items-start">
          <Badge variant="secondary">{t("comingSoon.badge")}</Badge>
          <Balancer className="max-w-2xl">
            <SplitText
              text={t("comingSoon.title")}
              className="text-4xl md:text-5xl font-semibold tracking-tighter w-full"
              delay={50}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </Balancer>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            {comingSoonBoxes.map((box, index) => {
              const Icon = box.icon;
              return (
                <SpotlightCard
                  key={index}
                  className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  {box.hasBadge ? (
                    <div className="flex items-center justify-between">
                      <Icon className="w-8 h-8 stroke-1" />
                      <Badge variant="secondary" className="text-xs">
                        {t("comingSoon.developmentBadge")}
                      </Badge>
                    </div>
                  ) : (
                    <Icon className="w-8 h-8 stroke-1" />
                  )}
                  <h3 className="text-xl font-semibold tracking-tighter flex flex-row gap-2 items-center">
                    {box.title}
                  </h3>
                  <p className="text-sm">{box.description}</p>
                </SpotlightCard>
              );
            })}
            {/* <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6 border-dashed border-2 justify-center items-center"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <h3 className="text-xl font-normal text-[#262626] tracking-tighter flex flex-row gap-2 items-center">
                Coming Soon
              </h3>
            </SpotlightCard> */}
          </div>
          <div className="flex flex-col gap-6 w-full max-w-xl mx-auto mt-12">
            <p className="text-2xl">{t("testimonial.text1")}</p>
            <p className="text-2xl">{t("testimonial.text2")}</p>

            <div className="flex flex-row gap-4 items-center">
              <Image
                src={"/emanuele.png"}
                alt="Fleetmo"
                width={100}
                height={100}
                className="rounded-full w-14 h-14"
              />
              <div className="flex flex-col gap-0">
                <span className="text-lg font-semibold">
                  {t("testimonial.name")}
                </span>
                <span className="text-sm">{t("testimonial.position")}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
