import { useTranslations } from "next-intl";
import {
  HeroSuppliers,
  IntroductionSuppliers,
  BenefitsSuppliers,
  HowItWorksSuppliers,
  PricingSuppliers,
} from "@/components/Sections/Suppliers";

export default function Suppliers() {
  const t = useTranslations("SuppliersPage");

  return (
    <main className="space-y-0">
      <HeroSuppliers />
      <IntroductionSuppliers t={t} />
      <BenefitsSuppliers />
      <HowItWorksSuppliers t={t} />
      <PricingSuppliers />
    </main>
  );
}
