import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Check, Sparkles, X } from "lucide-react";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});

export const PricingSection = () => {
  const t = useTranslations("HomePage");

  // Standard features (15 features)
  const standardFeatures = Array.from({ length: 15 }, (_, i) =>
    t(`pricing.features.feature${i + 1}`)
  );

  // AI features (5 additional features)
  const aiFeatures = Array.from({ length: 5 }, (_, i) =>
    t(`pricing.aiFeatures.feature${i + 1}`)
  );

  const allFeatures = [
    ...standardFeatures.map((feature, index) => ({
      name: feature,
      standard: true,
      pro: true,
      isAI: false,
    })),
    ...aiFeatures.map((feature, index) => ({
      name: feature,
      standard: false,
      pro: true,
      isAI: true,
    })),
  ];

  return (
    <Section
      className="bg-gray-200 bg-[url('/globo.png')] bg-no-repeat bg-bottom bg-opacity-30 !py-20"
      id="pricing"
    >
      <Container>
        <div className="flex flex-col gap-4 mx-auto max-w-3xl justify-center items-center">
          <Badge>{t("pricing.badge")}</Badge>
          <Balancer className="text-center">
            <SplitText
              text={t("pricing.title")}
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
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            {t("pricing.description")}
          </p>
        </div>

        {/* Mobile Cards View */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch max-w-4xl mx-auto mt-10">
            {/* Standard Plan */}
            <div className="flex flex-col gap-4 bg-white p-8 rounded-lg border shadow-xl">
              <div className="flex flex-col gap-2 justify-center items-center">
                <Badge variant="outline">
                  {t("pricing.plans.standard.name")}
                </Badge>
                <h3 className="text-3xl font-medium tracking-tighter text-center">
                  <span className="text-6xl font-bold relative">
                    Standard
                    <sup className="text-lg absolute top-0 -left-4 top-1">
                      $
                    </sup>
                    100
                  </span>
                </h3>
                <span className="text-gray-600">
                  {t("pricing.plans.standard.period")}
                </span>
              </div>
              <span className="font-semibold text-center">
                {t("pricing.plans.standard.description")}
              </span>
              <ul className="flex flex-col divide-y divide-gray-200 flex-1">
                {standardFeatures.map((feature: string, index: number) => (
                  <li
                    key={feature}
                    className="flex flex-row gap-2 items-center py-2 text-sm"
                  >
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#41CF8F" }}
                    >
                      <Check className="w-2.5 h-2.5 text-white stroke-2" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#start" className="w-full">
                <Button variant="green-outline" className="mt-4 w-full">
                  {t("pricing.plans.standard.button")}
                </Button>
              </Link>
            </div>

            {/* Pro Plan with AI */}
            <div
              className="flex flex-col gap-4 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border-2 shadow-xl relative"
              style={{ borderColor: "#41CF8F" }}
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <Badge
                  variant="secondary"
                  className="text-white"
                  style={{ backgroundColor: "#41CF8F" }}
                >
                  {t("pricing.plans.pro.name")}
                </Badge>
                <h3 className="text-3xl font-medium tracking-tighter text-center">
                  <span className="text-6xl font-bold relative">
                    <sup className="text-lg absolute top-0 -left-4 top-1">
                      $
                    </sup>
                    150
                  </span>
                </h3>
                <span className="text-gray-600">
                  {t("pricing.plans.pro.period")}
                </span>
              </div>
              <span className="font-semibold text-center">
                {t("pricing.plans.pro.description")}
              </span>
              <ul className="flex flex-col divide-y divide-gray-200 flex-1">
                {[...standardFeatures, ...aiFeatures].map(
                  (feature: string, index: number) => (
                    <li
                      key={feature}
                      className="flex flex-row gap-2 items-center py-2 text-sm"
                    >
                      {index >= standardFeatures.length ? (
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#41CF8F" }}
                        >
                          <Sparkles className="w-2.5 h-2.5 text-white" />
                        </div>
                      ) : (
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#41CF8F" }}
                        >
                          <Check className="w-2.5 h-2.5 text-white stroke-2" />
                        </div>
                      )}
                      {feature}
                    </li>
                  )
                )}
              </ul>
              <Link href="#start" className="w-full">
                <Button variant="green" className="mt-4 w-full">
                  {t("pricing.plans.pro.button")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Cards View */}
        <div className="hidden lg:block mt-10 max-w-4xl mx-auto mt-20">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Standard Plan Card */}
            <div className="flex flex-col border bg-white rounded-xl lg:rounded-r-none border-r-0">
              <div className="px-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 pb-2">
                    <h3 className="text-foreground text-2xl font-normal uppercase flex items-center gap-4 font-mono">
                      {t("pricing.plans.standard.name")}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {t("pricing.plans.standard.description")}
                </p>
                <Link href="#start" className="w-full">
                  <Button
                    variant="green-outline"
                    className="w-full flex items-center justify-center text-base px-4 py-2 h-[42px]"
                  >
                    {t("pricing.plans.standard.button")}
                  </Button>
                </Link>
                <div className="text-foreground flex items-baseline text-5xl font-normal border-b border-gray-200 py-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-2">
                      <div className="flex items-end">
                        <p className="mt-2 pb-1 font-mono text-5xl">$100</p>
                        <p className="text-gray-500 mb-1.5 ml-1 text-[13px] leading-4">
                          {t("pricing.plans.standard.period")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-bl-[4px] flex-1 flex-col px-8 py-6">
                <p className="text-gray-500 text-[13px] mt-2 mb-4">
                  Get started with:
                </p>
                <ul className="text-[13px] flex-1 text-gray-500">
                  {standardFeatures.map((feature, index) => (
                    <li key={index} className="flex flex-col py-2 first:mt-0">
                      <div className="flex items-center">
                        <div className="flex w-6">
                          <Check
                            className="h-4 w-4 text-brand stroke-[3]"
                            style={{ color: "#41CF8F" }}
                          />
                        </div>
                        <span className="text-foreground mb-0">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan Card */}
            <div
              className="flex flex-col border bg-white rounded-xl  border-2 lg:-ml-[1px] scale-105"
              style={{ borderColor: "#41CF8F" }}
            >
              <div className="px-8 pt-6 rounded-tr-[9px] rounded-tl-[9px]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 pb-2">
                    <h3 className="text-foreground text-2xl font-normal uppercase flex items-center gap-4 font-mono">
                      {t("pricing.plans.pro.name")}
                    </h3>
                    <Badge
                      className="text-white text-[13px] leading-4 inline-flex gap-1 items-center px-2 py-0.5"
                      style={{ backgroundColor: "#41CF8F" }}
                    >
                      <Sparkles className="w-3 h-3" />
                      {t("pricing.plans.pro.badge")}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {t("pricing.plans.pro.description")}
                </p>
                <Link href="#start" className="w-full">
                  <Button
                    variant="green"
                    className="w-full flex items-center justify-center text-base px-4 py-2 h-[42px]"
                  >
                    {t("pricing.plans.pro.button")}
                  </Button>
                </Link>
                <div className="text-foreground flex items-baseline text-5xl font-normal border-b border-gray-200 py-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-2">
                      <div className="flex items-end">
                        <p className="mt-2 pb-1 font-mono text-5xl">$150</p>
                        <p className="text-gray-500 mb-1.5 ml-1 text-[13px] leading-4">
                          {t("pricing.plans.pro.period")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col px-8 py-6 mb-0.5 rounded-bl-[4px] rounded-br-[4px]">
                <p className="text-gray-500 text-[13px] mt-2 mb-4">
                  Everything in Standard Plan, plus:
                </p>
                <ul className="text-[13px] flex-1 text-gray-500">
                  {aiFeatures.map((feature, index) => (
                    <li key={index} className="flex flex-col py-2 first:mt-0">
                      <div className="flex items-center">
                        <div className="flex w-6">
                          <Sparkles
                            className="h-4 w-4 stroke-[3]"
                            style={{ color: "#41CF8F" }}
                          />
                        </div>
                        <span className="text-foreground mb-0">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
