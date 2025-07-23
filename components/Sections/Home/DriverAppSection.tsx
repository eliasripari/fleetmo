"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { AppCarousel } from "@/components/ui/app-carousel";
import { Calendar, Plane, Settings, FileCheck } from "lucide-react";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});

export const DriverAppSection = () => {
  const t = useTranslations("HomePage");

  // App screenshots for the carousel
  const appScreenshots = [
    {
      src: "/mobileApp.png",
      alt: "Fleetmo Driver App - Screen 1",
    },
    {
      src: "/mobileApp2.png",
      alt: "Fleetmo Driver App - Screen 2",
    },
    {
      src: "/mobileApp3.png",
      alt: "Fleetmo Driver App - Screen 3",
    },
    {
      src: "/mobileApp4.png",
      alt: "Fleetmo Driver App - Screen 4",
    },
    {
      src: "/mobileApp5.png",
      alt: "Fleetmo Driver App - Screen 5",
    },
    {
      src: "/mobileApp6.png",
      alt: "Fleetmo Driver App - Screen 6",
    },
    {
      src: "/mobileApp7.png",
      alt: "Fleetmo Driver App - Screen 7",
    },
  ];

  return (
    <Section id="driver-app" className="!py-20">
      <Container>
        <div className="flex flex-col gap-4 mx-auto max-w-2xl justify-center items-center ">
          <Badge>{t("driverApp.badge")}</Badge>
          <Balancer className="text-center">
            <SplitText
              text={t("driverApp.title")}
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
        </div>
      </Container>
      {/* Full Width Carousel */}
      <div className="w-full max-w-7xl mx-auto relative min-h-[60vh]">
        {/* Features Grid */}
        <div className="[perspective:1500px] absolute inset-0 pointer-events-none z-10">
          {/* First card - Top Left */}
          <motion.div
            className="h-[250px] w-[250px] [transform-style:preserve-3d] absolute top-20 left-32 pointer-events-auto"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: -10,
              rotateY: 15,
              rotateZ: 0,
            }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              rotateZ: 1,
              scale: 1,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col gap-4 p-6 border border-foreground rounded-2xl bg-white relative h-full shadow-lg hover:shadow-xl transition-all duration-300 [transform-style:preserve-3d]">
              <span className="text-[10px] font-semibold tracking-wider absolute top-0 right-6 uppercase bg-black px-2 py-1 text-white rounded-b-md">
                Schedule
              </span>
              <div className="flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-semibold tracking-tighter text-xl">
                  {t("driverApp.features.feature1.title")}
                </h3>
                <p className="text-gray-600 text-xs">
                  {t("driverApp.features.feature1.description")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second card - Top Right */}
          <motion.div
            className="h-[250px] w-[250px] [transform-style:preserve-3d] absolute top-10 right-10 pointer-events-auto"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: -20,
              rotateY: -20,
              rotateZ: 1,
            }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 1,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col gap-4 p-6 border border-foreground rounded-2xl bg-white relative h-full shadow-lg hover:shadow-xl transition-all duration-300 [transform-style:preserve-3d]">
              <span className="text-[10px] font-semibold tracking-wider absolute top-0 right-6 uppercase bg-black px-2 py-1 text-white rounded-b-md">
                Navigation
              </span>
              <div className="flex-shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-semibold tracking-tighter text-xl">
                  {t("driverApp.features.feature2.title")}
                </h3>
                <p className="text-gray-600 text-xs">
                  {t("driverApp.features.feature2.description")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third card - Bottom Left */}
          <motion.div
            className="h-[250px] w-[250px] [transform-style:preserve-3d] absolute bottom-10 left-20 pointer-events-auto"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 15,
              rotateY: 15,
              rotateZ: -10,
            }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 1,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col gap-4 p-6 border border-foreground rounded-2xl bg-white relative h-full shadow-lg hover:shadow-xl transition-all duration-300 [transform-style:preserve-3d]">
              <span className="text-[10px] font-semibold tracking-wider absolute top-0 right-6 uppercase bg-black px-2 py-1 text-white rounded-b-md">
                Settings
              </span>
              <div className="flex-shrink-0">
                <Settings className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-semibold tracking-tighter text-xl">
                  {t("driverApp.features.feature3.title")}
                </h3>
                <p className="text-gray-600 text-xs">
                  {t("driverApp.features.feature3.description")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fourth card - Bottom Right */}
          <motion.div
            className="h-[250px] w-[250px] [transform-style:preserve-3d] absolute bottom-10 right-32 pointer-events-auto"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: -15,
              rotateZ: 2,
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              rotateZ: 1,
              scale: 1,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col gap-4 p-6 border border-foreground rounded-2xl bg-white relative h-full shadow-lg hover:shadow-xl transition-all duration-300 [transform-style:preserve-3d]">
              <span className="text-[10px] font-semibold tracking-wider absolute top-0 right-6 uppercase bg-black px-2 py-1 text-white rounded-b-md">
                Reports
              </span>
              <div className="flex-shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-semibold tracking-tighter text-xl">
                  {t("driverApp.features.feature4.title")}
                </h3>
                <p className="text-gray-600 text-xs">
                  {t("driverApp.features.feature4.description")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center min-h-[60vh] relative z-0">
          <AppCarousel
            images={appScreenshots}
            className="w-full mx-auto"
            // iphoneFrame="/iphonescreen.avif"
          />
        </div>
      </div>
    </Section>
  );
};
