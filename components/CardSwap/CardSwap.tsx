import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  overlayOpacity?: number;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, overlayOpacity = 0, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 w-full h-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] overflow-hidden p-1 ${
        customClass ?? ""
      } ${rest.className ?? ""}`.trim()}
    >
      {rest.children}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black rounded-xl pointer-events-none card-overlay"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  )
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: 0,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number, index: number) => {
  const overlayEl = el.querySelector(".card-overlay") as HTMLElement;
  const overlayOpacity = index === 0 ? 0 : Math.min(0.7, index * 0.15);
  const cardZIndex = index === 0 ? 50 : slot.zIndex; // First card gets z-50, others use normal zIndex

  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    scale: 1 - index * 0.05, // Scale decreases by 5% for each card
    transformOrigin: "center center",
    zIndex: cardZIndex,
    force3D: true,
  });

  // Update overlay opacity
  if (overlayEl) {
    gsap.set(overlayEl, { opacity: overlayOpacity });
  }
};

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 800,
  cardDistance = 80,
  verticalDistance = 95,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current!,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount,
        i
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        opacity: 0,
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const overlayEl = el.querySelector(".card-overlay") as HTMLElement;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        const newOverlayOpacity = i === 0 ? 0 : Math.min(0.7, i * 0.15);
        const newZIndex = i === 0 ? 50 : slot.zIndex; // First position gets z-50

        tl.set(el, { zIndex: newZIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            scale: 1 - i * 0.05, // Update scale based on new position
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );

        // Animate overlay opacity
        if (overlayEl) {
          tl.to(
            overlayEl,
            {
              opacity: newOverlayOpacity,
              duration: config.durMove,
              ease: config.ease,
            },
            `promote+=${i * 0.15}`
          );
        }
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      const backOverlayOpacity = Math.min(0.7, (refs.length - 1) * 0.15);
      const elFrontOverlay = elFront.querySelector(
        ".card-overlay"
      ) as HTMLElement;

      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          opacity: 1,
          scale: 1 - (refs.length - 1) * 0.05,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      // Animate overlay for card going to back
      if (elFrontOverlay) {
        tl.to(
          elFrontOverlay,
          {
            opacity: backOverlayOpacity,
            duration: config.durReturn,
            ease: config.ease,
          },
          "return"
        );
      }

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) => {
    const currentIndex = order.current.indexOf(i);
    const overlayOpacity =
      currentIndex === 0 ? 0 : Math.min(0.7, currentIndex * 0.15); // Progressive black overlay

    return isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          overlayOpacity,
          style: { width: "100%", height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child;
  });

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 w-full transform translate-x-[0%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
