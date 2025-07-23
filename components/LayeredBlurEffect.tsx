"use client";

interface LayeredBlurEffectProps {
  startGradient?: number; // When gradient starts (default: 80%)
  startBlur?: number; // When blur starts (default: 90%)
  endBlur?: number; // When blur is fully visible (default: 95%)
  blurIntensity?: number; // Blur strength in px (default: 4px)
}

// Hybrid Effect: Real blur + gradient for performance
const LayeredBlurEffect = ({
  startGradient = 80,
  startBlur = 90,
  endBlur = 95,
  blurIntensity = 4,
}: LayeredBlurEffectProps = {}) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Background gradient for smooth transition */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            transparent ${startGradient}%, 
            rgba(0, 0, 0, 0.02) ${startGradient + 5}%, 
            rgba(0, 0, 0, 0.05) ${startGradient + 10}%, 
            rgba(0, 0, 0, 0.08) ${startGradient + 15}%, 
            rgba(0, 0, 0, 0.1) 100%
          )`,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Real blur effect only at the very bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: `blur(${blurIntensity}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity}px)`,
          maskImage: `linear-gradient(to bottom, transparent ${startBlur}%, black ${endBlur}%, black 100%)`,
          WebkitMaskImage: `linear-gradient(to bottom, transparent ${startBlur}%, black ${endBlur}%, black 100%)`,
          transform: "translate3d(0, 0, 0)",
          willChange: "backdrop-filter",
        }}
      />
    </div>
  );
};

export default LayeredBlurEffect;
