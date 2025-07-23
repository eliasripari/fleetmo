"use client";

import { Container, Section } from "@/components/craft";
import Image from "next/image";

import CardSwap, { Card } from "@/components/CardSwap/CardSwap";

export default function WebApp() {
  return (
    <div className="bg-foreground text-white overflow-hidden !-mt-12 relative w-full max-w-7xl">
      {/* Gradient overlay from black to transparent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-foreground/100 via-foreground/50 to-transparent pointer-events-none z-30" />

      <div className="!pb-0 relative z-20">
        <div style={{ height: "800px", position: "relative" }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={80}
            delay={2000}
            pauseOnHover={false}
            skewAmount={0}
          >
            <Card>
              <Image
                src="/homepage/hero-1.jpg"
                alt="Fleetmo"
                width={1200}
                height={1000}
                className="w-full h-full object-cover object-top z-10 rounded-lg"
                priority
                quality={100}
                unoptimized={true}
              />
            </Card>
            <Card>
              <Image
                src="/homepage/hero-2.jpg"
                alt="Fleetmo"
                width={1200}
                height={1000}
                className="w-full h-full object-cover object-top z-10 rounded-lg"
                priority
                quality={100}
                unoptimized={true}
              />
            </Card>
            <Card>
              <Image
                src="/homepage/hero-3.jpg"
                alt="Fleetmo"
                width={1200}
                height={1000}
                className="w-full h-full object-cover object-top z-10 rounded-lg"
                priority
                quality={100}
                unoptimized={true}
              />
            </Card>
            <Card>
              <Image
                src="/homepage/hero-4.jpg"
                alt="Fleetmo"
                width={1200}
                height={1000}
                className="w-full h-full object-cover object-top z-10 rounded-lg"
                priority
                quality={100}
                unoptimized={true}
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
}
