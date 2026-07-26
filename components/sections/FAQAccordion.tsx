"use client";


import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQAccordionProps {
  faqs: FAQ[];
  heading?: string;
  schema?: boolean; // emit schema.org FAQPage JSON-LD
}

export default function FAQAccordion({ faqs, heading = "Frequently Asked Questions", schema = true }: FAQAccordionProps) {
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

        <Accordion type="single" collapsible className="space-y-3 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="bg-white border border-graphite/10 rounded-xl overflow-hidden px-6"
            >
              <AccordionTrigger className="w-full flex items-center justify-between py-4 font-semibold text-graphite hover:text-copper hover:no-underline transition-colors focus-visible:outline-none [&[data-state=open]>svg]:rotate-180 [&>svg]:hidden">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-slate-body/50 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="text-slate-body leading-relaxed border-t border-warm-white pt-4 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
