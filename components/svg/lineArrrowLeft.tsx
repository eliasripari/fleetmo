"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedLineProps {
  direction?: "left" | "right";
  easing?: gsap.EaseFunction | string;
  start?: string;
  end?: string;
}

export default function AnimatedLine({
  direction = "left",
  easing = "power2.out",
  start = "top 100%",
  end = "bottom 20%",
}: AnimatedLineProps) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path,
        start: start,
        end: end,
        scrub: true,
        markers: false,
      },
      ease: easing,
    });
  }, [easing, start, end]);

  const pathData = direction === "left" ? "M317.5 6H8V361" : "M6 6H315V361";

  return (
    <svg width="323" height="362" viewBox="0 0 323 362" fill="none">
      <path
        ref={pathRef}
        d={pathData}
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
