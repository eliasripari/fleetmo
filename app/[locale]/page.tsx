// Sections import
import {
  HeroSection,
  IntroductionSection,
  HowItWorksSection,
  DriverAppSection,
  PricingSection,
  ComingSoonSection,
} from "@/components/Sections/Home";

// Craft Imports
import { Section } from "@/components/craft";

// Layered Blur Effect
import LayeredBlurEffect from "@/components/LayeredBlurEffect";

export default function Home() {
  return (
    <Section className="relative">
      {/* Layered Blur Effect applied to entire home page - Customizable! */}
      <LayeredBlurEffect
        startGradient={80} // Gradient starts at 80% (earlier = more coverage)
        startBlur={90} // Blur starts at 90% (earlier = more blur)
        endBlur={95} // Blur fully visible at 95% (earlier = stronger transition)
        blurIntensity={4} // 4px blur strength (higher = more blur)
      />
      <Content />
    </Section>
  );
}

const Content = () => {
  return (
    <main className="space-y-6" id="start">
      <HeroSection />
      <IntroductionSection />
      <HowItWorksSection />
      <DriverAppSection />
      <PricingSection />
      <ComingSoonSection />
    </main>
  );
};
