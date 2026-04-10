"use client";

import {
  motion,
  type HTMLMotionProps,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  distance?: number;
  scale?: number;
  amount?: number;
  once?: boolean;
};

export function ScrollReveal({
  children,
  delay = 0,
  distance = 32,
  scale = 0.98,
  amount = 0.25,
  once = true,
  transition,
  ...props
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: distance, scale }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
};

export function StaggerReveal({
  children,
  stagger = 0.14,
  delayChildren = 0,
  amount = 0.2,
  once = true,
  ...props
}: StaggerRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? undefined
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: stagger,
                  delayChildren,
                },
              },
            }
      }
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  distance?: number;
};

export function StaggerItem({
  children,
  distance = 28,
  transition,
  ...props
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: distance, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  ...transition,
                },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
