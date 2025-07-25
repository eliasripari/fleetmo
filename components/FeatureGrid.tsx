import dynamic from "next/dynamic";
import React from "react";

// Lazy loaded components
const AnimatedContent = dynamic(
  () => import("@/components/AnimatedContent/AnimatedContent"),
  { ssr: false }
);

// Feature Configuration Interface
export interface FeatureConfig {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  columns: number;
  design: "standard" | "accent";
  delay: number;
  row: number;
}

// Feature Card Component
interface FeatureCardProps {
  feature: FeatureConfig;
  index: number;
  t: any;
  translationKey?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index,
  t,
  translationKey = "features",
}) => {
  const isAccent = feature.design === "accent";

  const baseClasses =
    "flex flex-col gap-4 p-6 rounded-2xl relative transition-all duration-300 h-[280px]";
  const standardClasses = "border border-gray-200 bg-white hover:shadow-lg";
  const accentClasses =
    "border-2 border-[#41CF8F] hover:shadow-xl hover:shadow-[#41CF8F]/20 group bg-white";

  const cardClasses = `${baseClasses} ${
    isAccent ? accentClasses : standardClasses
  }`;

  return (
    <div className={`md:col-span-${feature.columns}`}>
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.5}
        delay={feature.delay}
      >
        <div className={cardClasses}>
          {/* Icon */}
          <div className="flex-shrink-0 relative">
            {isAccent && (
              <div className="absolute inset-0 bg-[#41CF8F]/20 rounded-full blur-md scale-150 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            )}
            {React.createElement(feature.icon, {
              className: `w-6 h-6 ${
                isAccent ? "relative z-10 text-[#41CF8F]" : ""
              }`,
            })}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-2">
            <h3
              className={`font-semibold tracking-tighter text-xl ${
                isAccent
                  ? "bg-gradient-to-r from-gray-900 to-[#41CF8F] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {t(`${translationKey}.feature${feature.id}.title`)}
            </h3>
            <p
              className={`text-xs leading-relaxed ${
                isAccent ? "text-gray-700" : "text-gray-600"
              }`}
            >
              {t(`${translationKey}.feature${feature.id}.description`)}
            </p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

// Main FeatureGrid Component
interface FeatureGridProps {
  features: FeatureConfig[];
  t: any;
  translationKey?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  t,
  translationKey = "features",
}) => {
  // Group features by row
  const featuresByRow = features.reduce((acc, feature) => {
    if (!acc[feature.row]) acc[feature.row] = [];
    acc[feature.row].push(feature);
    return acc;
  }, {} as Record<number, FeatureConfig[]>);

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(featuresByRow).map(([rowNumber, rowFeatures]) => (
        <div key={rowNumber} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {rowFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              t={t}
              translationKey={translationKey}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// Utility function to create feature configurations
export const createFeatureConfig = (
  id: number,
  icon: React.ComponentType<{ className?: string }>,
  badge: string,
  columns: number = 1,
  design: "standard" | "accent" = "standard",
  delay: number = 200,
  row: number = 1
): FeatureConfig => ({
  id,
  icon,
  badge,
  columns,
  design,
  delay,
  row,
});

// Preset configurations for common layouts
export const LAYOUT_PRESETS = {
  // 2-1-1 layout (one large, two small)
  HERO_ROW: (baseDelay: number = 200) => [
    { columns: 2, delay: baseDelay },
    { columns: 1, delay: baseDelay + 100 },
    { columns: 1, delay: baseDelay + 200 },
  ],

  // 1-1-1-1 layout (four equal)
  EQUAL_ROW: (baseDelay: number = 200) => [
    { columns: 1, delay: baseDelay },
    { columns: 1, delay: baseDelay + 100 },
    { columns: 1, delay: baseDelay + 200 },
    { columns: 1, delay: baseDelay + 300 },
  ],

  // 1-1-2 layout (two single, one double)
  MIXED_ROW: (baseDelay: number = 200) => [
    { columns: 1, delay: baseDelay },
    { columns: 1, delay: baseDelay + 100 },
    { columns: 2, delay: baseDelay + 200, design: "accent" as const },
  ],
};
