"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// Timing budget (3-line headline): lines finish ~0.8s, subhead ~1.05s,
// CTA settles ~1.35s — everything a visitor needs to act on is
// interactive well under 2s. The signature line is purely decorative and
// is allowed to keep tracing a little longer in parallel (~1.9s finish).
const BASE_DELAY = 0.1;
const LINE_STAGGER = 0.1;
const LINE_DURATION = 0.5;
const SUBHEAD_GAP = 0.15;
const SUBHEAD_DURATION = 0.5;
const CTA_GAP = 0.3;
const CTA_DURATION = 0.5;

// Fixed, independent of headline length — the signature line lives outside
// HeroReveal's own tree (its own grid column), so callers import this
// directly for <SignatureLine delay={HERO_SIGNATURE_DELAY} />.
export const HERO_SIGNATURE_DELAY = 0.35;

interface HeroRevealProps {
  eyebrow?: ReactNode;
  headlineLines: ReactNode[];
  subhead: ReactNode;
  cta: ReactNode;
  className?: string;
}

export default function HeroReveal({ eyebrow, headlineLines, subhead, cta, className }: HeroRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const d = (v: number) => (shouldReduceMotion ? 0 : v);
  const dur = shouldReduceMotion ? 0.01 : undefined;

  const eyebrowVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: dur ?? 0.5, delay: 0, ease: EASE } },
  };

  const lineVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: dur ?? LINE_DURATION, delay: d(BASE_DELAY + i * LINE_STAGGER), ease: EASE },
    }),
  };

  const subheadDelay = BASE_DELAY + headlineLines.length * LINE_STAGGER + SUBHEAD_GAP;
  const subheadVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: dur ?? SUBHEAD_DURATION, delay: d(subheadDelay), ease: EASE } },
  };

  const ctaDelay = subheadDelay + CTA_GAP;
  const ctaVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: dur ?? CTA_DURATION, delay: d(ctaDelay), ease: EASE } },
  };

  return (
    <div className={className}>
      {eyebrow && (
        <motion.div initial="hidden" animate="visible" variants={eyebrowVariants}>
          {eyebrow}
        </motion.div>
      )}

      <div>
        {headlineLines.map((line, i) => (
          <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={lineVariants}>
            {line}
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" animate="visible" variants={subheadVariants}>
        {subhead}
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={ctaVariants}>
        {cta}
      </motion.div>
    </div>
  );
}
