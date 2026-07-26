"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/data/services";

interface FAQAccordionProps {
  faqs: FAQ[];
  heading?: string;
  schema?: boolean; // emit schema.org FAQPage JSON-LD
}

export default function FAQAccordion({ faqs, heading = "Frequently Asked Questions", schema = true }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="section-padding" aria-labelledby="faq-heading">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <div className="section-container max-w-3xl">
        <h2 id="faq-heading" className="text-graphite text-center mb-10">
          {heading}
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-graphite/10 rounded-xl overflow-hidden">
              <button
                id={`faq-btn-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-graphite hover:text-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-body/50 shrink-0 transition-transform duration-200",
                    open === i && "rotate-180 text-copper"
                  )}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-5 text-slate-body leading-relaxed border-t border-warm-white pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
