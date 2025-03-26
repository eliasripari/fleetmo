"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedLineProps {
  direction?: "left" | "right";
}

export default function AnimatedLine({
  direction = "left",
}: AnimatedLineProps) {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path,
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "none",
    });
  }, []);

  const pathData =
    direction === "left"
      ? "M317.5 6H8V361" // Percorso verso sinistra
      : "M6 6H315V361"; // Percorso verso destra

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
