"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Container, Section } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";
import { useWaitlist } from "@/components/WaitlistProvider";

// Lazy loaded components
const AnimatedContent = dynamic(
  () => import("@/components/AnimatedContent/AnimatedContent"),
  { ssr: false }
);

export const PricingSuppliers = () => {
  const { openWaitlistModal } = useWaitlist();
  const t = useTranslations("SuppliersPage");

  const plans = [
    {
      name: t("pricing.plans.standard.name"),
      price: t("pricing.plans.standard.price"),
      period: t("pricing.plans.standard.period"),
      description: t("pricing.plans.standard.description"),
      button: t("pricing.plans.standard.button"),
      features: t.raw("pricing.plans.standard.features"),
      highlighted: false,
    },
    {
      name: t("pricing.plans.pro.name"),
      price: t("pricing.plans.pro.price"),
      period: t("pricing.plans.pro.period"),
      description: t("pricing.plans.pro.description"),
      button: t("pricing.plans.pro.button"),
      badge: t("pricing.plans.pro.badge"),
      features: t.raw("pricing.plans.pro.features"),
      highlighted: true,
    },
  ];

  return (
    <Section className="py-16 !pb-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t("pricing.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Mobile Cards View */}
        <div className="flex flex-col lg:hidden gap-6 max-w-md mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-8 rounded-lg border-2 shadow-xl relative ${
                plan.highlighted
                  ? "bg-gradient-to-br from-green-50 to-emerald-50"
                  : "bg-white"
              }`}
              style={{
                borderColor: plan.highlighted ? "#41CF8F" : "#e5e7eb",
              }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge
                    className="text-white"
                    style={{ backgroundColor: "#41CF8F" }}
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="flex flex-col gap-2 justify-center items-center">
                <Badge
                  variant="secondary"
                  className="text-white"
                  style={{ backgroundColor: "#41CF8F" }}
                >
                  {plan.name}
                </Badge>
                <h3 className="text-3xl font-medium tracking-tighter text-center">
                  <span className="text-6xl font-bold relative">
                    {plan.price}
                  </span>
                </h3>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <span className="font-semibold text-center">
                {plan.description}
              </span>

              <ul className="space-y-3">
                {plan.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "#41CF8F" }}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "green" : "green-outline"}
                className="mt-4 w-full"
                onClick={openWaitlistModal}
              >
                {plan.button}
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop Cards View */}
        <div className="hidden lg:block mt-10 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Standard Plan Card */}
            <div className="flex flex-col border bg-white rounded-xl lg:rounded-r-none border-r-0">
              <div className="px-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 pb-2">
                    <h3 className="text-foreground text-2xl font-normal uppercase flex items-center gap-4 font-mono">
                      {plans[0].name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {plans[0].description}
                </p>
                <Button
                  variant="green-outline"
                  className="w-full flex items-center justify-center text-base px-4 py-2 h-[42px] mb-4"
                  onClick={openWaitlistModal}
                >
                  {plans[0].button}
                </Button>
                <div className="text-foreground flex items-baseline text-5xl font-normal border-b border-gray-200 py-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-2">
                      <div className="flex items-end">
                        <p className="mt-2 pb-1 font-mono text-5xl">
                          {plans[0].price}
                        </p>
                        <p className="text-gray-500 mb-1.5 ml-1 text-[13px] leading-4">
                          {plans[0].period}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-bl-[4px] flex-1 flex-col px-8 py-6">
                <p className="text-gray-500 text-[13px] mt-2 mb-4">
                  What&apos;s included:
                </p>
                <ul className="space-y-3 flex-1">
                  {plans[0].features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "#41CF8F" }}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan Card */}
            <div
              className="flex flex-col border bg-white rounded-xl border-2 lg:-ml-[1px] scale-105"
              style={{ borderColor: "#41CF8F" }}
            >
              <div className="px-8 pt-6 rounded-tr-[9px] rounded-tl-[9px]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 pb-2">
                    <h3 className="text-foreground text-2xl font-normal uppercase flex items-center gap-4 font-mono">
                      {plans[1].name}
                    </h3>
                    <Badge
                      className="text-white text-[13px] leading-4 inline-flex gap-1 items-center px-2 py-0.5"
                      style={{ backgroundColor: "#41CF8F" }}
                    >
                      <Sparkles className="w-3 h-3" />
                      {plans[1].badge}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {plans[1].description}
                </p>
                <Button
                  variant="green"
                  className="w-full flex items-center justify-center text-base px-4 py-2 h-[42px] mb-4"
                  onClick={openWaitlistModal}
                >
                  {plans[1].button}
                </Button>
                <div className="text-foreground flex items-baseline text-5xl font-normal border-b border-gray-200 py-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-2">
                      <div className="flex items-end">
                        <p className="mt-2 pb-1 font-mono text-5xl">
                          {plans[1].price}
                        </p>
                        <p className="text-gray-500 mb-1.5 ml-1 text-[13px] leading-4">
                          {plans[1].period}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-br-[9px] flex-1 flex-col px-8 py-6">
                <p className="text-gray-500 text-[13px] mt-2 mb-4">
                  Everything in Standard, plus:
                </p>
                <ul className="space-y-3 flex-1">
                  {plans[1].features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "#41CF8F" }}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
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
