"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";
import { useMotionSafe } from "@/lib/motion-safe";

type ParallaxScrollProps = {
  /** Items in reading order — laid out as rows of two (left / right). */
  items: ReactNode[];
  className?: string;
};

type ParallaxRowProps = {
  left: ReactNode;
  right: ReactNode;
  rowIndex: number;
  wide: boolean;
};

/** One 2-card row with its own scroll-driven split animation (desktop only). */
function ParallaxRow({ left, right, rowIndex, wide }: ParallaxRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { reduceMotion } = useMotionSafe();
  const parallaxEnabled = wide && !reduceMotion;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 0.92", "end 0.08"],
  });

  const xIn = wide ? 36 : 12;
  const xOut = wide ? -96 : -40;
  const yOut = wide ? -56 : -28;
  const yInRight = wide ? -8 : -4;
  const yOutRight = wide ? 32 : 16;
  const rotate = wide ? 4 : 2;

  const translateXLeft = useTransform(scrollYProgress, [0, 1], [xIn, xOut]);
  const translateXRight = useTransform(scrollYProgress, [0, 1], [-xIn, -xOut]);
  const translateYLeft = useTransform(scrollYProgress, [0, 1], [0, yOut]);
  const translateYRight = useTransform(scrollYProgress, [0, 1], [yInRight, yOutRight]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -rotate]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [0, rotate]);

  const leftStyle = parallaxEnabled
    ? {
        y: translateYLeft,
        x: translateXLeft,
        rotateZ: rotateLeft,
      }
    : undefined;

  const rightStyle = parallaxEnabled
    ? {
        y: translateYRight,
        x: translateXRight,
        rotateZ: rotateRight,
      }
    : undefined;

  return (
    <div
      ref={rowRef}
      className="mx-auto grid w-full max-w-[88rem] grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-10"
      data-parallax-row={rowIndex}
    >
      <motion.div style={leftStyle}>{left}</motion.div>
      <motion.div style={rightStyle}>{right}</motion.div>
    </div>
  );
}

/**
 * Wide 2-column parallax grid — each row splits independently on scroll.
 * Cards begin close together, then drift apart as their row enters the viewport.
 */
export function ParallaxScroll({ items, className }: ParallaxScrollProps) {
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const rows: [ReactNode, ReactNode][] = [];
  for (let i = 0; i < items.length; i += 2) {
    const left = items[i];
    const right = items[i + 1];
    if (left && right) rows.push([left, right]);
  }

  return (
    <div className={cn("flex flex-col gap-10 md:gap-14 lg:gap-16", className)}>
      {rows.map(([left, right], i) => (
        <ParallaxRow
          key={`parallax-row-${i}`}
          left={left}
          right={right}
          rowIndex={i}
          wide={wide}
        />
      ))}
    </div>
  );
}
