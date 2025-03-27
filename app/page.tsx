// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Next.js Imports
import Link from "next/link";
import Image from "next/image";
import React from "react";
// Icons
import {
  File,
  Pen,
  Tag,
  Diamond,
  User,
  Folder,
  Sparkles,
  Check,
  X,
  TrendingUpDown,
  Store,
  Bot,
  Upload,
  PlaneTakeoff,
  PlaneLanding,
  ArrowRightLeft,
  TicketSlash,
  Airplay,
  CircleDotDashedIcon,
  UserRoundX,
  CircleCheckBig,
} from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";
import AnimatedLine from "@/components/svg/lineArrrowLeft";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import SplitText from "@/components/SplitText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section>
      <Content />
    </Section>
  );
}

// This is just some example TSX
const Content = () => {
  const features = [
    {
      title: "Upload or Add Your Rides",
      badge: "Upload",
      description:
        "Easily upload multiple bookings at once or manually add individual rides directly from your smartphone or tablet. Manage your schedule effortlessly and keep your operations running smoothly.",
      icon: Upload,
    },
    {
      title: "Real-Time Flight Status Verification",
      badge: "Flight Status",
      description:
        "Instantly access live flight information, including delays, early arrivals, or cancellations. Stay informed and proactively manage your transportation services to offer a reliable customer experience.",
      icon: PlaneTakeoff,
    },
    {
      title: "Exchange Services with Other Suppliers",
      badge: "Exchange",
      description:
        "Conveniently exchange, transfer, or share bookings with your network of trusted partner suppliers. Optimize your capacity, reduce downtime, and enhance collaboration within your business ecosystem.",
      icon: ArrowRightLeft,
    },

    {
      title: "Manage Vouchers and No-Shows",
      badge: "Vouchers",
      description:
        "Efficiently handle vouchers, cancellations, amendments, and no-shows directly from the application. Streamline your administrative tasks, reduce paperwork, and ensure accurate records for easy reporting.",
      icon: TicketSlash,
    },
    {
      title: "Dedicated App for Your Drivers",
      badge: "Driver App",
      description:
        "Efficiently handle vouchers, cancellations, amendments, and no-shows directly from the application. Streamline your administrative tasks, reduce paperwork, and ensure accurate records for easy reporting.",
      icon: Airplay,
    },
    {
      title: "Real-Time Ride Status Tracking",
      badge: "Tracking",
      description:
        "Gain complete visibility of your rides through continuous real-time tracking. Monitor service progress, anticipate delays, and respond quickly to any situation to guarantee exceptional service reliability.",
      icon: CircleDotDashedIcon,
    },
    {
      title: "No-Show System",
      badge: "No-Show",
      description:
        "If a customer doesn’t show up, the driver can take a photo as proof. Our integrated No-Show System automatically captures and records the exact GPS coordinates, date, and time directly on the photo, updating the service status accordingly.",
      icon: UserRoundX,
    },
  ];
  return (
    <main className="space-y-6 ">
      <section
        className="flex flex-col p-4 md:p-12 !pt-[300px] gap-8 bg-foreground text-white justify-center items-center -mt-[200px] "
        id="hero"
      >
        <Balancer className="flex flex-col gap-4 text-center">
          <SplitText
            text="Discover the most simple and intuitive Limo Software in the world."
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
            <p className="text-center text-lg max-w-4xl mx-auto">
              Fleetmo is the most advanced management system for NCC in the
              world, add, manage and assign your rides. Receive directly from
              your providers and distribute them to your collaborators and
              dedicated app for your drivers.
            </p>
          </Balancer>
        </AnimatedContent>

        <div className="flex justify-center gap-4">
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
            <Link href="#introduction">
              <Button variant="outline" className="bg-foreground">
                Discover more
              </Button>
            </Link>
          </AnimatedContent>
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
            <Link href="https://my.fleetmo.app" className="w-full">
              <Button variant="secondary" className="w-full">
                Get Started
              </Button>
            </Link>
          </AnimatedContent>
        </div>
        <Image
          src={"/hero-intro.png"}
          alt="Fleetmo"
          width={1200}
          height={1000}
        />
      </section>

      <section id="introduction">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className=" h-full">
              <div className="flex flex-col gap-4 sticky top-28 items-start">
                <Badge>Introduction</Badge>
                <SplitText
                  text="Receive, manage, assign, and monitor the status of your
                  rides—all from a single platform."
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
                        {feature.title}
                      </h3>
                      <p>{feature.description}</p>
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
  return (
    <Section className="bg-foreground text-white" id="how-it-works">
      <Container className="p-8">
        <div className="flex flex-col gap-28 justify-center items-center ">
          <div className="flex flex-col gap-4 justify-center items-center max-w-2xl ">
            <Badge variant="secondary">How It Works</Badge>
            <Balancer className="text-center">
              <SplitText
                text="Organizza le giornate di lavoro dei tuoi driver in 4 semplici
                step."
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
                    Upload or add your rides.
                  </h3>
                </div>
                <p className="text-lg">
                  Add your drivers to automatically create accounts for them,
                  enabling them to easily receive and manage the bookings you
                  assign.
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
                    Add your drivers.
                  </h3>
                </div>
                <p className="text-lg">
                  Assign services individually or in bulk to your drivers, and
                  monitor the progress and status of each ride in real-time.
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
                    Assign Rides to your drivers.
                  </h3>
                </div>
                <p className="text-lg">
                  You can upload all your rides directly through the app using a
                  dedicated form, or you can use our template to upload them all
                  at once.
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
                    Conclusion of the service{" "}
                    <CircleCheckBig className="w-8 h-8 stroke-2" />
                  </h3>
                  <p className="text-lg">
                    You can upload all your rides directly through the app using
                    a dedicated form, or you can use our template to upload them
                    all together.
                  </p>
                  <Link href="https://my.fleetmo.app" className="w-full">
                    <Button variant="secondary" className="">
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4 col-span-1 justify-start items-start">
                    <Badge className="text-green-500 border-green-500 flex flex-row gap-1 items-center pl-1">
                      <Check className="w-4 h-4 stroke- 1" />
                      Completed
                    </Badge>
                    <p>
                      Once the driver uploads the signed voucher, the service
                      status automatically updates to completed. Easily confirm
                      the successful completion of your rides in real time.
                    </p>
                    <div className="w-full bg-white rounded-lg h-[250px]"></div>
                  </div>
                  <div className="flex flex-col gap-4 col-span-1 justify-start items-start">
                    <Badge className="text-orange-500 border-orange-500 flex flex-row gap-1 items-center pl-1">
                      <X className="w-4 h-4 stroke-1" />
                      No Show
                    </Badge>
                    <p>
                      If a customer doesn’t show up, the driver can take a photo
                      as proof. The integrated No-Show System automatically logs
                      evidence, updating the service status accordingly.
                    </p>
                    <div className="w-full bg-white rounded-lg h-[250px]"></div>
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
  return (
    <Section id="driver-app">
      <Container>
        <div className="flex flex-col gap-4 mx-auto max-w-2xl justify-center items-center ">
          <Badge>Driver App</Badge>
          <Balancer className="text-center">
            <SplitText
              text="Dedicated app to manage services perfectly."
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
                Daily Services View
              </h3>
              <p className="text-center md:text-right">
                Add your drivers—this automatically creates accounts for them,
                allowing them to receive and manage assigned services.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center md:justify-end md:items-end">
              <h3 className="text-xl font-medium tracking-tighter">
                Live Flight Status
              </h3>
              <p className="text-center md:text-right">
                Manage your rides, assign and verify the status of your rides
                from a single platform.
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
                Advanced ride status management
              </h3>
              <p className="text-center md:text-left ">
                Manage your rides, assign and verify the status of your rides
                from a single platform.
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <h3 className="text-xl font-medium tracking-tighter text-center md:text-left">
                Integrated Proof No-Show system
              </h3>
              <p className="text-center md:text-left">
                Manage your rides, assign and verify the status of your rides
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
  const featuresList = [
    "Add single Service or Bulk system",
    "Swap services with other suppliers",
    "Add and manage collaborators",
    "Add and manage drivers",
    "Native mobile app for drivers",
    "Edit and assign services",
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
          <Badge>Pricing</Badge>
          <Balancer className="text-center">
            <SplitText
              text="Simple and trasparent. A single subscription for you business."
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
                  <sup className="text-lg absolute top-0 -left-4 top-1">€</sup>
                  100
                </span>
              </h3>
              <span className="">by month</span>
            </div>
            <span className="font-semibold">
              All features included. No hidden fees.
            </span>
            <ul className="flex flex-col  divide-y divide-gray-200">
              {featuresList.map((feature) => (
                <li
                  key={feature}
                  className="flex flex-row gap-2 items-center py-2"
                >
                  <Check className="w-4 h-4 stroke-1" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="https://my.fleetmo.app" className="w-full">
              <Button className="mt-4 w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const ComingSoon = () => {
  return (
    <Section className="bg-foreground text-white !mt-0" id="coming-soon">
      <Container>
        <div className="flex flex-col gap-6 justify-start items-start">
          <Badge variant="secondary">Coming Soon</Badge>
          <Balancer className="max-w-2xl">
            <SplitText
              text="We are working hard to make it better."
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
                Live Tracking
              </h3>
              <p className="text-sm">
                Keep an eye on every ride in real time, receiving instant
                location updates, status notifications, and performance
                analytics. Ensure timely pickups, proactive adjustments, and
                superior customer experiences.
              </p>
            </SpotlightCard>

            <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Store className="w-8 h-8 stroke-1" />
              <h3 className="text-xl font-semibold tracking-tighter flex flex-row gap-2 items-center">
                Marketplace
              </h3>
              <p className="text-sm">
                Easily publish your available services on the marketplace to
                facilitate quick trading among providers. Optimize fleet
                utilization, monetize unused rides, and efficiently match demand
                with available resources.
              </p>
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Bot className="w-8 h-8 stroke-1" />
              <h3 className="text-xl font-semibold tracking-tighter flex flex-row gap-2 items-center">
                AI Integration
              </h3>
              <p className="text-sm">
                Harness the power of artificial intelligence to fully automate
                daily ride assignments to drivers, instantly reassign trips if a
                driver cancels or misses a service, and optimize schedules
                dynamically—saving time, reducing manual effort, and maximizing
                operational efficiency.
              </p>
            </SpotlightCard>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-xl mx-auto mt-12">
            <p className="text-2xl">
              With over 8 years of experience in the limo service industry, I
              recognized the need for a technological solution that could
              streamline and automate the complexities of managing my daily
              operations. Unable to find an existing platform specifically
              tailored to the unique demands of this business, I decided to
              create an advanced, practical, and user-friendly tool.
            </p>
            <p className="text-2xl">
              The result is a specialized platform designed by limo service
              professionals for limo service professionals, built to simplify
              day-to-day management, enhance operational efficiency, and deliver
              exceptional client experiences. Today, I am proud to offer this
              solution to any company seeking to elevate their limousine
              services, automate workflows, reduce errors, and maximize
              profitability.
            </p>
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
                  Emanuele Campanari
                </span>
                <span className="text-sm">CEO & Founder</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
