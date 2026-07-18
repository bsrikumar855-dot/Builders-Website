import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface CTASectionProps {
  heading?: string;
  body?: string;
  urgencyNote?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "primary" | "light";
}

export default function CTASection({
  heading = "Ready to Get Started?",
  body = "Call us now for emergencies or fill out our quick quote form for planned work. We respond within 2 hours on business days.",
  urgencyNote = "For electrical faults, gas leaks, or burst pipes — call immediately. Do not submit a form.",
  primaryLabel = `Call ${siteConfig.phone}`,
  primaryHref = `tel:${siteConfig.phone}`,
  secondaryLabel = "Get a Free Quote",
  secondaryHref = "/quote",
  variant = "primary",
}: CTASectionProps) {
  if (variant === "light") {
    return (
      <section className="section-padding section-alt" aria-labelledby="cta-light-heading">
        <div className="section-container text-center max-w-2xl">
          <h2 id="cta-light-heading" className="text-slate-900 mb-4">{heading}</h2>
          <p className="text-slate-500 mb-8">{body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryHref} className="btn-primary px-8 py-4">
              <Phone className="w-5 h-5" />
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn-outline px-8 py-4">
              {secondaryLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding gradient-brand" aria-labelledby="cta-heading">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-white mb-4">
            {heading}
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">{body}</p>

          {/* Urgency note */}
          <div className="bg-red-500/20 border border-red-400/40 text-red-200 rounded-xl px-5 py-3 text-sm font-semibold mb-8 inline-block">
            {urgencyNote}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryHref} className="btn-accent px-8 py-4 text-base">
              <Phone className="w-5 h-5" />
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn-ghost-white px-8 py-4 text-base">
              {secondaryLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
