"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type StackedSectionProps = {
  index: number;
  id?: string;
  children: ReactNode;
  className?: string;
  rounded?: boolean;
  sticky?: boolean;
  mode?: "cover" | "enter" | "none";
  coverDirection?: "up" | "down";
};

export function StackedSection({
  index,
  id,
  children,
  className,
  rounded = true,
  sticky = true,
  mode = "cover",
  coverDirection = "up",
}: StackedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:
      mode === "enter"
        ? ["start 90%", "start 20%"]
        : ["start start", "end start"],
  });

  const scale =
    mode === "cover" ? useTransform(scrollYProgress, [0, 1], [1, 0.96]) : undefined;
  const coverYOffset = coverDirection === "down" ? 96 : -96;
  const y =
    mode === "cover"
      ? useTransform(scrollYProgress, [0, 1], [0, coverYOffset])
      : mode === "enter"
        ? useTransform(scrollYProgress, [0, 1], [140, 0])
        : undefined;
  const opacity =
    mode === "enter" ? useTransform(scrollYProgress, [0, 1], [0.6, 1]) : undefined;

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ scale, y, opacity, zIndex: 10 + index }}
      className={[
        sticky ? "sticky top-0" : "relative",
        "min-h-[100svh] w-full overflow-hidden",
        rounded
          ? "rounded-t-[56px] shadow-[0_-18px_45px_rgba(0,0,0,0.18)]"
          : "",
        "border border-gray-200",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </motion.section>
  );
}
