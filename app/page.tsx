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
} from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

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
      title: "Carica o aggiungi le tue corse.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      icon: File,
    },
    {
      title: "Introduction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      icon: File,
    },
    {
      title: "Introduction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      icon: File,
    },
    {
      title: "Introduction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      icon: File,
    },
    {
      title: "Introduction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      icon: File,
    },
  ];
  return (
    <main className="space-y-6 -mt-[200px]">
      <section className="flex flex-col p-12 pt-[300px] gap-8 bg-foreground text-white justify-center items-center">
        <h1 className="text-6xl font-semibold text-center max-w-4xl mx-auto tracking-tight">
          <Balancer>
            Discover the <u>most advanced</u> Limo Software in the world
          </Balancer>
        </h1>

        <p className="text-center text-lg max-w-4xl mx-auto">
          <Balancer>
            Fleetmo is the most advanced management system for NCC in the world,
            add, manage and assign your rides. Receive directly from your
            providers and distribute them to your collaborators and dedicated
            app for your drivers.
          </Balancer>
        </p>

        <div className="flex justify-center gap-4">
          <Button variant="outline" className="bg-foreground">
            Discover more
          </Button>
          <Button variant="secondary">Get Started</Button>
        </div>
        <Image
          src={"/hero-intro.png"}
          alt="Fleetmo"
          width={1200}
          height={1000}
        />
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-2 gap-16">
            <div className=" h-full">
              <div className="flex flex-col gap-4 sticky top-28 items-start">
                <Badge>Introduction</Badge>
                <h2 className="text-4xl font-semibold tracking-tighter">
                  Ricevi, gestisci, assegna e verifica lo stato delle tue corse
                  da un’unica piattaforma.
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-4 p-8 border border-foreground rounded-lg sticky top-28 bg-white"
                >
                  {React.createElement(feature.icon)}
                  <h3 className="text-2xl font-semibold tracking-tighter">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
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
    <Section className="bg-foreground text-white">
      <Container>
        <div className="flex flex-col gap-28 justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center max-w-2xl ">
            <Badge variant="secondary">How It Works</Badge>
            <Balancer>
              <h2 className="text-5xl font-semibold tracking-tighter text-center">
                Organizza le giornate di lavoro dei tuoi driver in 4 semplici
                step.
              </h2>
            </Balancer>
          </div>
          <div className="flex flex-col gap-32 w-full">
            <div className="grid grid-cols-2 gap-32 w-full">
              <div></div>
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex flex-row gap-4 justify-start items-center">
                  <span className="text-lg font-medium bg-white text-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-3xl font-medium tracking-tighter">
                    Carica o aggiungi le tue corse.
                  </h3>
                </div>
                <p className="text-lg">
                  Potrai caricare tutte le tue corse direttamente dall’app
                  attraverso un form dedicato oppure potrai utilizzare il nostro
                  template per caricarle tutte insieme.
                </p>
                <div className="w-full bg-white rounded-lg h-[250px]"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-32 w-full">
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex flex-row gap-4 justify-start items-center">
                  <span className="text-lg font-medium bg-white text-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-3xl font-medium tracking-tighter">
                    Carica o aggiungi le tue corse.
                  </h3>
                </div>
                <p className="text-lg">
                  Potrai caricare tutte le tue corse direttamente dall’app
                  attraverso un form dedicato oppure potrai utilizzare il nostro
                  template per caricarle tutte insieme.
                </p>
                <div className="w-full bg-white rounded-lg h-[250px]"></div>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-2 gap-32 w-full">
              <div></div>
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex flex-row gap-4 justify-start items-center">
                  <span className="text-lg font-medium bg-white text-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-3xl font-medium tracking-tighter">
                    Carica o aggiungi le tue corse.
                  </h3>
                </div>
                <p className="text-lg">
                  Potrai caricare tutte le tue corse direttamente dall’app
                  attraverso un form dedicato oppure potrai utilizzare il nostro
                  template per caricarle tutte insieme.
                </p>
                <div className="w-full bg-white rounded-lg h-[250px]"></div>
              </div>
            </div>
            <div className="flex flex-row gap-32 w-full p-8 border rounded-lg">
              <div className="flex-1 flex flex-col gap-4 justify-center">
                <h3 className="text-3xl font-medium tracking-tighter flex flex-row gap-4 items-center">
                  Conclusione del servizio{" "}
                  <Sparkles className="w-6 h-6 stroke-1" />
                </h3>
                <p className="text-lg">
                  Potrai caricare tutte le tue corse direttamente dall’app
                  attraverso un form dedicato oppure potrai utilizzare il nostro
                  template per caricarle tutte insieme.
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-4 col-span-1 justify-start items-start">
                  <Badge className="text-green-500 border-green-500 flex flex-row gap-1 items-center pl-1">
                    <Check className="w-4 h-4 stroke- 1" />
                    Completed
                  </Badge>
                  <p>
                    Potrai caricare tutte le tue corse direttamente dall’app
                    attraverso un form dedicato oppure potrai utilizzare il
                    nostro template per caricarle tutte insieme.
                  </p>
                  <div className="w-full bg-white rounded-lg h-[250px]"></div>
                </div>
                <div className="flex flex-col gap-4 col-span-1 justify-start items-start">
                  <Badge className="text-orange-500 border-orange-500 flex flex-row gap-1 items-center pl-1">
                    <X className="w-4 h-4 stroke-1" />
                    No Show
                  </Badge>
                  <p>
                    Potrai caricare tutte le tue corse direttamente dall’app
                    attraverso un form dedicato oppure potrai utilizzare il
                    nostro template per caricarle tutte insieme.
                  </p>
                  <div className="w-full bg-white rounded-lg h-[250px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const DriverApp = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-4 mx-auto max-w-2xl justify-center items-center ">
          <Badge>Introduction</Badge>
          <Balancer>
            <h2 className="text-4xl font-semibold tracking-tighter text-center">
              App dedicata per gestire i servizi alla perfezione.
            </h2>
          </Balancer>
        </div>
        <div className="grid grid-cols-12 gap-12 mt-20">
          <div className="col-span-3 flex flex-col gap-[250px]">
            <div className="flex flex-col gap-4 justify-end items-end mt-28">
              <h3 className="text-xl font-medium tracking-tighter">
                Gestione delle corse
              </h3>
              <p className="text-right">
                Gestione delle corse, assegna e verifica lo stato delle tue
                corse da un’unica piattaforma.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-end items-end">
              <h3 className="text-xl font-medium tracking-tighter">
                Gestione delle corse
              </h3>
              <p className="text-right">
                Gestione delle corse, assegna e verifica lo stato delle tue
                corse da un’unica piattaforma.
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <Image
              src={"/mobileApp.png"}
              alt="Fleetmo"
              width={1200}
              height={1000}
              className="max-w-[400px] mx-auto"
            />
          </div>
          <div className="col-span-3 flex flex-col gap-[250px] justify-end">
            <div className="flex flex-col gap-4 mt-36">
              <h3 className="text-xl font-medium tracking-tighter">
                Gestione delle corse
              </h3>
              <p className="">
                Gestione delle corse, assegna e verifica lo stato delle tue
                corse da un’unica piattaforma.
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <h3 className="text-xl font-medium tracking-tighter">
                Gestione delle corse
              </h3>
              <p className="">
                Gestione delle corse, assegna e verifica lo stato delle tue
                corse da un’unica piattaforma.
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
    <Section className="bg-gray-100 bg-[url('/globo.png')] bg-no-repeat bg-bottom bg-opacity-30">
      <Container>
        <div className="flex flex-col gap-4 mx-auto max-w-2xl justify-center items-center ">
          <Badge>Pricing</Badge>
          <Balancer>
            <h2 className="text-4xl font-semibold tracking-tighter text-center">
              Simple and trasparent.
              <br />A single subscription for you business.
            </h2>
          </Balancer>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4 bg-white p-8 rounded-lg w-full max-w-md mt-10">
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
            <Button className="mt-4">Get Started</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const ComingSoon = () => {
  return (
    <Section className="bg-foreground text-white !mt-0">
      <Container>
        <div className="flex flex-col gap-6 justify-start items-start">
          <Badge variant="secondary">Coming Soon</Badge>
          <h2 className="text-4xl font-semibold tracking-tighter">
            We are working hard <br />
            To make it better.
          </h2>
          <div className="grid grid-cols-3 w-full gap-4">
            <div className="flex flex-col gap-4 bg-white p-6 rounded-lg text-black">
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
            </div>
            <div className="flex flex-col gap-4 bg-white p-6 rounded-lg text-black">
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
            </div>
            <div className="flex flex-col gap-4 bg-white p-6 rounded-lg text-black">
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
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-xl mx-auto mt-12">
            <Balancer className="text-2xl">
              With over 88 years of experience in the limo service industry, I
              recognized the need for a technological solution that could
              streamline and automate the complexities of managing my daily
              operations. Unable to find an existing platform specifically
              tailored to the unique demands of this business, I decided to
              create an advanced, practical, and user-friendly tool.
            </Balancer>
            <Balancer className="text-2xl">
              The result is a specialized platform designed by limo service
              professionals for limo service professionals, built to simplify
              day-to-day management, enhance operational efficiency, and deliver
              exceptional client experiences. Today, I am proud to offer this
              solution to any company seeking to elevate their limousine
              services, automate workflows, reduce errors, and maximize
              profitability.
            </Balancer>
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
