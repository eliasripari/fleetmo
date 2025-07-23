import { useTranslations } from "next-intl";
import {
  HeroProviders,
  IntroductionProviders,
  BenefitsProviders,
  HowItWorksProviders,
  PricingProviders,
} from "@/components/Sections/Providers";

export default function Providers() {
  const t = useTranslations("ProvidersPage");

  return (
    <main className="space-y-0">
      <HeroProviders />
      <IntroductionProviders t={t} />
      <BenefitsProviders />
      <HowItWorksProviders t={t} />
      <PricingProviders />
    </main>
  );
}
