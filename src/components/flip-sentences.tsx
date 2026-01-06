"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface FlipSentencesProps {
  children: string[];
  className?: string;
  variants?: Variants;
}

export function FlipSentences({
  children,
  className,
  variants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
  },
}: FlipSentencesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
