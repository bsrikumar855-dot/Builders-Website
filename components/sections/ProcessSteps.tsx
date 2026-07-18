"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

interface Step {
  step: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  heading?: string;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function ProcessSteps({ steps, heading = "How We Work" }: ProcessStepsProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding section-alt" aria-labelledby="process-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="process-heading" className="text-graphite mb-4">
            {heading}
          </h2>
          <p className="text-slate-body max-w-xl mx-auto">
            A clear, transparent process from first call to final handover.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting line — draws left to right as the section scrolls into view */}
          <div ref={lineRef} className="hidden md:block absolute top-8 left-0 right-0 h-0.5 overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-transparent via-voltage/50 to-transparent"
              style={{ transformOrigin: "left" }}
              initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
              animate={{ scaleX: isInView || shouldReduceMotion ? 1 : 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 1, ease: EASE }}
            />
          </div>

          <StaggerGroup className="flex flex-col md:grid md:grid-cols-4 gap-0 md:gap-8 relative">
            {steps.map((step, index) => (
              <StaggerItem key={step.step} className="relative pb-10 md:pb-0">
                <div className="flex items-start md:flex-col md:items-center gap-4 md:gap-0">
                  <div className="relative shrink-0 md:mb-5">
                    <div className="w-16 h-16 rounded-full gradient-brand flex flex-col items-center justify-center text-warm-white shadow-lg">
                      <span className="text-[10px] font-mono opacity-70 leading-none">STEP</span>
                      <span className="text-xl font-mono font-bold leading-none">{step.step}</span>
                    </div>
                  </div>

                  <div className="text-left md:text-center pt-2 md:pt-0">
                    <h3 className="text-base font-bold text-graphite mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-body leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Mobile connecting line — draws top to bottom between steps */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden">
                    <motion.div
                      className="w-full h-full bg-voltage/40"
                      style={{ transformOrigin: "top" }}
                      initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: EASE }}
                    />
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
