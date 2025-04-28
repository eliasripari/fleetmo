// Dynamic imports
import dynamic from "next/dynamic";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});
const AnimatedContent = dynamic(
  () => import("@/components/AnimatedContent/AnimatedContent"),
  { ssr: false }
);
const AnimatedLine = dynamic(() => import("@/components/svg/lineArrrowLeft"), {
  ssr: false,
});
const Aurora = dynamic(() => import("@/components/Aurora/Aurora"), {
  ssr: false,
});
const SpotlightCard = dynamic(
  () => import("@/components/SpotlightCard/SpotlightCard"),
  { ssr: false }
);
const JoinWaitlist = dynamic(() => import("@/components/joinWaitlist"), {
  ssr: false,
});

// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Next.js Imports
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

// Icons
import {
  Upload,
  PlaneTakeoff,
  ArrowRightLeft,
  TicketSlash,
  Airplay,
  CircleDotDashedIcon,
  UserRoundX,
  CircleCheckBig,
  TrendingUpDown,
  Store,
  Bot,
  Check,
  X,
} from "lucide-react";

import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

export default function Home() {
  return (
    <Section>
      <Content />
    </Section>
  );
}

const Content = () => {
  const t = useTranslations("HomePage");
  const features = [
    {
      title: "Upload or Add Your Rides",
      badge: "Upload",
      description: "Easily upload multiple bookings...",
      icon: Upload,
    },
    {
      title: "Real-Time Flight Status Verification",
      badge: "Flight Status",
      description: "Instantly access live flight information...",
      icon: PlaneTakeoff,
    },
    {
      title: "Exchange Rides with Other Suppliers",
      badge: "Exchange",
      description: "Conveniently exchange bookings...",
      icon: ArrowRightLeft,
    },
    {
      title: "Manage Vouchers and No-Shows",
      badge: "Vouchers",
      description: "Efficiently handle vouchers...",
      icon: TicketSlash,
    },
    {
      title: "Dedicated App for Your Drivers",
      badge: "Driver App",
      description: "Efficiently handle vouchers...",
      icon: Airplay,
    },
    {
      title: "Real-Time Ride Status Tracking",
      badge: "Tracking",
      description: "Gain complete visibility of your rides...",
      icon: CircleDotDashedIcon,
    },
    {
      title: "No-Show System",
      badge: "No-Show",
      description: "If a customer doesn't show up...",
      icon: UserRoundX,
    },
  ];

  return (
    <main className="space-y-6" id="start">
      <section
        className="flex flex-col p-4 md:p-12 !pt-[300px] gap-8 bg-foreground text-white justify-center items-center -mt-[200px] relative"
        id="hero"
      >
        <Balancer className="flex flex-col gap-4 text-center z-10">
          <SplitText
            text={t("titleHero")}
            className="text-4xl md:text-6xl font-semibold max-w-4xl mx-auto tracking-tight text-center"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
        </Balancer>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.5}
          delay={200}
        >
          <Balancer>
            <p className="text-center text-lg max-w-4xl mx-auto z-10">
              {t("paragraphHero")}
            </p>
          </Balancer>
        </AnimatedContent>

        <div className="flex justify-center gap-4 z-20">
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.5}
            delay={400}
          >
            <JoinWaitlist />
          </AnimatedContent>
        </div>

        <Image
          src="/hero-intro.png"
          alt="Fleetmo"
          width={1200}
          height={1000}
          className="z-10"
          priority
        />

        <div className="absolute bottom-0 left-0 w-full h-full rotate-180 z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={3.5}
            amplitude={1}
            speed={0.5}
          />
        </div>
      </section>

      <section id="introduction">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className=" h-full">
              <div className="flex flex-col gap-4 sticky top-28 items-start">
                <Badge>{t("introduction")}</Badge>
                <SplitText
                  text={t("introductionTitle")}
                  className="text-4xl md:text-5xl font-semibold tracking-tighter !text-left"
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
            </div>
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  className="sticky"
                  style={{ top: `${150 + index * 25}px` }}
                  key={index}
                >
                  <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.5}
                    delay={200}
                  >
                    <div
                      key={feature.title}
                      className="flex flex-col gap-4 p-8 border border-foreground rounded-lg  bg-white relative"
                    >
                      <span className="text-[10px] font-semibold tracking-wider absolute top-0 right-10 uppercase bg-black px-2 py-1 text-white rounded-b-md">
                        {feature.badge}
                      </span>
                      {React.createElement(feature.icon)}
                      <h3 className="text-2xl font-semibold tracking-tighter">
                        {t(`features.feature${index + 1}.title`)}
                      </h3>
                      <p>{t(`features.feature${index + 1}.description`)}</p>
                    </div>
                  </AnimatedContent>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <HowItWorks />
      <DriverApp />
      <Pricing />
      <ComingSoon />
    </main>
  );
};

const HowItWorks = () => {
  const t = useTranslations("HomePage");
  return (
    <Section className="bg-foreground text-white" id="how-it-works">
      <Container className="p-8">
        <div className="flex flex-col gap-28 justify-center items-center ">
          <div className="flex flex-col gap-4 justify-center items-center max-w-2xl ">
            <Badge variant="secondary">{t("howItWorks.badge")}</Badge>
            <Balancer className="text-center">
              <SplitText
                text={t("howItWorks.title")}
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
          <div className="flex flex-col gap-32 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full">
              <div className="flex flex-col gap-4 items-end justify-end hidden md:flex">
                <AnimatedLine direction="left" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex flex-row gap-4 justify-start items-center">
                  <span className="text-lg font-medium bg-white text-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-3xl font-medium tracking-tighter">
                    {t("howItWorks.steps.step1.title")}
                  </h3>
                </div>
                <p className="text-lg">
                  {t("howItWorks.steps.step1.description")}
                </p>
                <Image
                  className="w-full rounded-lg h-[250px] object-cover"
                  src="/appImages/addNewRides.png"
                  alt="Upload Your Rides - Fleetmo"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full">
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex flex-row gap-4 justify-start items-center">
                  <span className="text-lg font-medium bg-white text-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-3xl font-medium tracking-tighter">
                    {t("howItWorks.steps.step2.title")}
                  </h3>
                </div>
                <p className="text-lg">
                  {t("howItWorks.steps.step2.description")}
                </p>
                <Image
                  className="w-full rounded-lg h-[250px] object-cover"
                  src="/appImages/addNewDriver.png"
                  alt="Add Your Drivers - Fleetmo"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className="flex flex-col gap-4 items-start justify-end hidden md:flex">
                <AnimatedLine direction="right" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full">
              <div className="flex flex-col gap-4 items-end justify-end hidden md:flex">
                <AnimatedLine direction="left" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex flex-row gap-4 justify-start items-center">
                  <span className="text-lg font-medium bg-white text-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-3xl font-medium tracking-tighter">
                    {t("howItWorks.steps.step3.title")}
                  </h3>
                </div>
                <p className="text-lg">
                  {t("howItWorks.steps.step3.description")}
                </p>
                <Image
                  className="w-full rounded-lg h-[250px] object-cover"
                  src="/appImages/assignDriver.png"
                  alt="Assign Rides to your drivers - Fleetmo"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
            </div>
            <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col md:flex-row gap-32 w-full rounded-lg">
                <div className="flex-1 flex flex-col gap-4 justify-center">
                  <h3 className="text-3xl font-medium tracking-tighter flex flex-row gap-4 items-center">
                    {t("howItWorks.conclusion.title")}
                    <CircleCheckBig className="w-8 h-8 stroke-2" />
                  </h3>
                  <p className="text-lg">
                    {t("howItWorks.conclusion.description")}
                  </p>
                  <Link href="#start" className="w-full">
                    <Button variant="secondary" className="">
                      {t("howItWorks.conclusion.button")}
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4 col-span-1 justify-start items-start">
                    <Badge className="text-green-500 border-green-500 flex flex-row gap-1 items-center pl-1">
                      <Check className="w-4 h-4 stroke- 1" />
                      {t("howItWorks.conclusion.status.completed")}
                    </Badge>
                    <p>{t("howItWorks.conclusion.status.textCompleted")}</p>
                    <div
                      className="w-full rounded-lg h-[250px]"
                      style={{
                        backgroundImage: `url(${"/service_done.png"})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-4 col-span-1 justify-start items-start">
                    <Badge className="text-orange-500 border-orange-500 flex flex-row gap-1 items-center pl-1">
                      <X className="w-4 h-4 stroke-1" />
                      {t("howItWorks.conclusion.status.noShow")}
                    </Badge>
                    <p>{t("howItWorks.conclusion.status.textCancelled")}</p>
                    <div
                      className="w-full rounded-lg h-[250px]"
                      style={{
                        backgroundImage: `url(${"/service_noShow.png"})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const DriverApp = () => {
  const t = useTranslations("HomePage");
  return (
    <Section id="driver-app">
      <Container>
        <div className="flex flex-col gap-4 mx-auto max-w-2xl justify-center items-center ">
          <Badge>Driver App</Badge>
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
        <div className="grid grid-cols-12 gap-auto md:gap-12 mt-20">
          <div className="col-span-12 md:col-span-3 flex flex-col gap-8 md:gap-[250px] w-full">
            <div className="flex flex-col gap-4 justify-center items-center md:justify-end md:items-end mt-28">
              <h3 className="text-xl  font-medium tracking-tighter">
                {t("driverApp.features.feature1.title")}
              </h3>
              <p className="text-center md:text-right">
                {t("driverApp.features.feature1.description")}
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center md:justify-end md:items-end">
              <h3 className="text-xl font-medium tracking-tighter">
                {t("driverApp.features.feature2.title")}
              </h3>
              <p className="text-center md:text-right">
                {t("driverApp.features.feature2.description")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Image
              src={"/mobileApp.png"}
              alt="Fleetmo"
              width={1200}
              height={1000}
              className="w-full max-w-[300px] md:max-w-[400px] mx-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col gap-8 md:gap-[250px] justify-start md:justify-end">
            <div className="flex flex-col gap-4 mt-36">
              <h3 className="text-xl font-medium tracking-tighter text-center md:text-left">
                {t("driverApp.features.feature3.title")}
              </h3>
              <p className="text-center md:text-left ">
                {t("driverApp.features.feature3.description")}
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <h3 className="text-xl font-medium tracking-tighter text-center md:text-left">
                {t("driverApp.features.feature4.title")}
              </h3>
              <p className="text-center md:text-left">
                {t("driverApp.features.feature4.description")}
                from a single platform.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Pricing = () => {
  const t = useTranslations("HomePage");
  const featuresList = [
    "Add single Service or Bulk system",
    "Swap Rides with other suppliers",
    "Add and manage collaborators",
    "Add and manage drivers",
    "Native mobile app for drivers",
    "Edit and assign rides",
    "Live flight status tracking",
    "Rides status",
    "Add and manage Providers",
    "Rides Archive",
    "Advanced rides data table",
    "Advanced rides filter",
    "Summary dashboard with daily info",
    "Upload Voucher system",
    "Upoload No Show system",
  ];

  return (
    <Section
      className="bg-gray-100 bg-[url('/globo.png')] bg-no-repeat bg-bottom bg-opacity-30"
      id="pricing"
    >
      <Container>
        <div className="flex flex-col gap-4 mx-auto max-w-3xl justify-center items-center ">
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
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col gap-4 bg-white p-8 rounded-lg w-full max-w-md mt-10 border shadow-xl">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="text-3xl font-medium tracking-tighter text-center">
                <span className="text-7xl font-bold relative">
                  <sup className="text-lg absolute top-0 -left-4 top-1">$</sup>
                  100
                </span>
              </h3>
              <span className="">by month</span>
            </div>
            <span className="font-semibold">{t("pricing.description2")}</span>
            <ul className="flex flex-col  divide-y divide-gray-200">
              {featuresList.map((feature: string, index: number) => (
                <li
                  key={feature}
                  className="flex flex-row gap-2 items-center py-2"
                >
                  <Check className="w-4 h-4 stroke-1" />
                  {t(`pricing.features.feature${index + 1}`)}
                </li>
              ))}
            </ul>
            <Link href="#start" className="w-full">
              <Button className="mt-4 w-full">{t("pricing.button")}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const ComingSoon = () => {
  const t = useTranslations("HomePage");
  return (
    <Section className="bg-foreground text-white !mt-0" id="coming-soon">
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
            <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <TrendingUpDown className="w-8 h-8 stroke-1" />
              <h3 className="text-xl font-semibold tracking-tighter flex flex-row gap-2 items-center">
                {t("comingSoon.box1.title")}
              </h3>
              <p className="text-sm">{t("comingSoon.box1.description")}</p>
            </SpotlightCard>

            <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Store className="w-8 h-8 stroke-1" />
              <h3 className="text-xl font-semibold tracking-tighter flex flex-row gap-2 items-center">
                {t("comingSoon.box2.title")}
              </h3>
              <p className="text-sm">{t("comingSoon.box2.description")}</p>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Bot className="w-8 h-8 stroke-1" />
              <h3 className="text-xl font-semibold tracking-tighter flex flex-row gap-2 items-center">
                {t("comingSoon.box3.title")}
              </h3>
              <p className="text-sm">{t("comingSoon.box3.description")}</p>
            </SpotlightCard>
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
