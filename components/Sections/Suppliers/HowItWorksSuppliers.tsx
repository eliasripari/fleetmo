import dynamic from "next/dynamic";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { CircleCheckBig, Check, X } from "lucide-react";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});
const AnimatedLine = dynamic(() => import("@/components/svg/lineArrrowLeft"), {
  ssr: false,
});
const SpotlightCard = dynamic(
  () => import("@/components/SpotlightCard/SpotlightCard"),
  { ssr: false }
);

// Step Component per eliminare duplicazioni
const Step = ({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}: {
  stepNumber: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full">
    {/* Animated Line - Solo desktop */}
    <div
      className={`flex flex-col gap-4 ${
        isReversed ? "items-start justify-end" : "items-end justify-end"
      } hidden md:flex ${isReversed ? "order-2" : ""}`}
    >
      <AnimatedLine direction={isReversed ? "right" : "left"} />
    </div>

    {/* Content */}
    <div
      className={`flex flex-col gap-4 items-start justify-start ${
        isReversed ? "order-1" : ""
      }`}
    >
      <div className="flex flex-row gap-4 justify-start items-center">
        <span className="text-lg font-medium bg-white text-foreground rounded-full w-8 h-8 flex items-center justify-center">
          {stepNumber}
        </span>
        <h3 className="text-3xl font-medium tracking-tighter">{title}</h3>
      </div>
      <p className="text-lg">{description}</p>
      <Image
        className="w-full object-cover"
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={1000}
        unoptimized
      />
    </div>
  </div>
);

// Status Badge Component
const StatusBadge = ({
  type,
  label,
  description,
  imageSrc,
}: {
  type: "success" | "warning";
  label: string;
  description: string;
  imageSrc: string;
}) => {
  const isSuccess = type === "success";
  const colorClass = isSuccess
    ? "text-green-500 border-green-500"
    : "text-orange-500 border-orange-500";
  const Icon = isSuccess ? Check : X;

  return (
    <div className="flex flex-col gap-4 col-span-1 justify-start items-start">
      <Badge className={`${colorClass} flex flex-row gap-1 items-center pl-1`}>
        <Icon className="w-4 h-4 stroke-1" />
        {label}
      </Badge>
      <p>{description}</p>
      <div
        className="w-full rounded-lg h-[250px]"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export const HowItWorksSuppliers = ({ t }: { t: any }) => {
  // Dati degli step
  const steps = [
    {
      number: "1",
      title: t("howItWorks.steps.step1.title"),
      description: t("howItWorks.steps.step1.description"),
      imageSrc: "/screens/creazione-servizio.png",
      imageAlt: "Upload Your Rides - Fleetmo",
      isReversed: false,
    },
    {
      number: "2",
      title: t("howItWorks.steps.step2.title"),
      description: t("howItWorks.steps.step2.description"),
      imageSrc: "/screens/aggiungi-autisti.png",
      imageAlt: "Add Your Drivers - Fleetmo",
      isReversed: true,
    },
    {
      number: "3",
      title: t("howItWorks.steps.step3.title"),
      description: t("howItWorks.steps.step3.description"),
      imageSrc: "/screens/assegnazione-veicolo.png",
      imageAlt: "Assign Rides to your drivers - Fleetmo",
      isReversed: false,
    },
  ];

  return (
    <Section className="bg-foreground text-white" id="how-it-works">
      <Container className="p-8">
        <div className="flex flex-col gap-28 justify-center items-center">
          {/* Header */}
          <div className="flex flex-col gap-4 justify-center items-center max-w-2xl">
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

          {/* Steps */}
          <div className="flex flex-col gap-32 w-full">
            {steps.map((step, index) => (
              <Step
                key={index}
                stepNumber={step.number}
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc}
                imageAlt={step.imageAlt}
                isReversed={step.isReversed}
              />
            ))}

            {/* Conclusion SpotlightCard */}
            <SpotlightCard
              className="custom-spotlight-card flex flex-col text-white rounded-lg gap-4 p-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col gap-16 w-full rounded-lg">
                <div className="flex-1 flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto ">
                  <CircleCheckBig className="w-8 h-8 stroke-2" />
                  <h3 className="text-3xl font-medium tracking-tighter flex flex-row gap-4 items-center justify-center">
                    {t("howItWorks.conclusion.title")}
                  </h3>
                  <p className="text-lg text-center">
                    {t("howItWorks.conclusion.description")}
                  </p>
                  <a href="#start" className="w-fit">
                    <Button variant="green" className="">
                      {t("howItWorks.conclusion.button")}
                    </Button>
                  </a>
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
