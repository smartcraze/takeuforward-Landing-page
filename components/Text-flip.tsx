"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ContainerTextFlipDemo() {
  const words = ["DSA", "System Design", "Core CS", "Interview Prep"];

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-5xl dark:text-zinc-100"
      )}
      layout
    >
      <div className="inline-block text-center">
        The One-Stop Platform for <br />
        <div
  className="inline-block relative overflow-hidden align-middle 
  h-[4.5rem] md:h-[6rem] text-4xl md:text-7xl font-bold text-zinc-900 dark:text-white"
>
  <ContainerTextFlip words={words} />
</div>

      </div>
    </motion.h1>
  );
}
