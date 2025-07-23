import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import WebApp from "@/components/Sections/Home/WebApp";

// Lazy loaded components
const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});
const AnimatedContent = dynamic(
  () => import("@/components/AnimatedContent/AnimatedContent"),
  { ssr: false }
);
const JoinWaitlist = dynamic(() => import("@/components/joinWaitlist"), {
  ssr: false,
});

export const HeroSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      className="flex flex-col p-4 md:p-0 !pt-[300px] gap-8 bg-foreground text-white justify-center items-center -mt-[200px] relative"
      id="hero"
    >
      <div className="relative flex flex-row items-center p-1 pr-3 text-sm w-auto gap-2 text-left rounded-full bg-opacity-20 border border-[#202020] bg-[#202020]">
        <div className="inline-flex items-center bg-opacity-10 bg-brand text-[#84E0BA]  border border-[#84E0BA] px-3 rounded-full text-sm py-1 announcement-badge bg-opacity-10 bg-[#84E0BA]">
          {t("announcement.badge")}
        </div>
        <span className="text-foreground announcement-text text-white">
          {t("announcement.text")}
        </span>
      </div>
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
          <p className="text-center text-lg max-w-4xl mx-auto z-20">
            {t("paragraphHero")}
          </p>
        </Balancer>
      </AnimatedContent>

      <div className="flex justify-center gap-4 z-40">
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

      <WebApp />

      <Image
        src="/hero-intro.png"
        alt="Fleetmo"
        width={1200}
        height={1000}
        className="z-10 hidden"
        priority
        quality={100}
        unoptimized={true}
      />
    </section>
  );
};
