"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Container, Section } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Users, BarChart3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistProvider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// Lazy loaded components
const AnimatedContent = dynamic(
  () => import("@/components/AnimatedContent/AnimatedContent"),
  { ssr: false }
);

export const BenefitsProviders = () => {
  const { openWaitlistModal } = useWaitlist();
  const t = useTranslations("ProvidersPage");
  const tools = [
    {
      id: "assignment",
      title: t("benefits.tools.assignment.title"),
      description: t("benefits.tools.assignment.description"),
      badge: t("benefits.tools.assignment.badge"),
      icon: Target,
      joinWaitlist: t("benefits.tools.assignment.joinWaitlist"),
    },
    {
      id: "dashboard",
      title: t("benefits.tools.dashboard.title"),
      description: t("benefits.tools.dashboard.description"),
      badge: t("benefits.tools.dashboard.badge"),
      icon: BarChart3,
      joinWaitlist: t("benefits.tools.dashboard.joinWaitlist"),
    },
    {
      id: "network",
      title: t("benefits.tools.network.title"),
      description: t("benefits.tools.network.description"),
      badge: t("benefits.tools.network.badge"),
      icon: Users,
      joinWaitlist: t("benefits.tools.network.joinWaitlist"),
    },
    {
      id: "tracking",
      title: t("benefits.tools.tracking.title"),
      description: t("benefits.tools.tracking.description"),
      badge: t("benefits.tools.tracking.badge"),
      icon: MapPin,
      joinWaitlist: t("benefits.tools.tracking.joinWaitlist"),
    },
  ];

  return (
    <Section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Badge className="bg-brand text-white mb-4">
            {t("benefits.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
            {t("benefits.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </div>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.5}
          delay={300}
        >
          <Tabs defaultValue="assignment" className="w-full mx-auto">
            {/* Tab Triggers */}
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-2 bg-white border border-gray-200">
              {tools.map((tool) => (
                <TabsTrigger
                  key={tool.id}
                  value={tool.id}
                  className="flex flex-row items-center gap-2 p-4 data-[state=active]:bg-brand data-[state=active]:text-white transition-all duration-300 rounded-lg"
                >
                  <tool.icon className="w-5 h-5" />
                  <span className="text-sm font-medium hidden md:block">
                    {tool.title}
                  </span>
                  <span className="text-sm font-medium md:hidden">
                    {tool.badge}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Contents */}
            {tools.map((tool, index) => (
              <TabsContent
                key={tool.id}
                value={tool.id}
                className="mt-8 focus:outline-none"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Content Column */}
                    <div className="space-y-4 flex flex-col justify-between h-full col-span-1">
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col items-start gap-3">
                            <Badge variant="outline" className="text-sm">
                              {tool.badge}
                            </Badge>
                            <h3 className="text-2xl font-semibold">
                              {tool.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {tool.description}
                        </p>
                      </div>
                      <Button
                        className="w-fit group"
                        onClick={openWaitlistModal}
                      >
                        {tool.joinWaitlist}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end col-span-2">
                      <div className="relative w-full">
                        <Image
                          src={`/screens/${
                            index === 0
                              ? "assegnazione-supplier.png"
                              : index === 1
                              ? "dashboard.png"
                              : index === 2
                              ? "rete-fornitori.png"
                              : "tracking.png"
                          }`}
                          alt={tool.title}
                          width={1000}
                          height={1000}
                          className="w-full border rounded-lg shadow-lg"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedContent>
      </Container>
    </Section>
  );
};
