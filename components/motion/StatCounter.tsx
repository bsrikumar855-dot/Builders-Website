"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number | string;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
  valueClassName?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1.8,
  className,
  valueClassName,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const isNumeric = typeof value === "number";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("en-IN"));
  const [display, setDisplay] = useState(isNumeric ? "0" : "");

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    if (shouldReduceMotion) {
      setDisplay(value.toLocaleString("en-IN"));
      return;
    }

    const controls = animate(count, value, { duration, ease: [0.21, 0.47, 0.32, 0.98] });
    const unsubscribe = rounded.on("change", setDisplay);
    return () => {
      controls.stop();
      unsubscribe();
    };
    // count/rounded are stable motion-value refs from framer-motion, safe to omit
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, isNumeric, value, duration, shouldReduceMotion]);

  const chars = !isNumeric ? String(value).split("") : [];

  return (
    <div ref={ref} className={className}>
      {isNumeric ? (
        <p className={cn("font-mono font-medium tabular-nums tracking-wide", valueClassName)}>
          {display}
          {suffix}
        </p>
      ) : (
        <p className={cn("font-mono font-medium tracking-wide", valueClassName)} aria-label={String(value)}>
          {chars.map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.05, delay: shouldReduceMotion ? 0 : i * 0.045 }}
            >
              {ch}
            </motion.span>
          ))}
        </p>
      )}
      <p className="text-xs mt-1 opacity-80">{label}</p>
    </div>
  );
}
