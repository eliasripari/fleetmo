"use client";

import { useTranslations } from "next-intl";
import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/components/WaitlistProvider";

export const CTASuppliers = () => {
  const { openWaitlistModal } = useWaitlist();
  const t = useTranslations("SuppliersPage");
  return (
    <Section className="py-20 bg-gradient-to-r from-brand to-emerald-600">
      <Container>
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="green"
              size="lg"
              className=""
              onClick={openWaitlistModal}
            >
              {t("cta.primaryButton")}
            </Button>
            <Button variant="green-outline" size="lg" className="">
              {t("cta.secondaryButton")}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
