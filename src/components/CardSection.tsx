"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function CardSection({ id, children, className }: CardSectionProps) {
  return (
    <section id={id} className="py-1">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={[
          "mx-auto max-w-6xl px-6 lg:px-12",
          className ?? "",
        ].join(" ")}
      >
        <div className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:p-14">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
