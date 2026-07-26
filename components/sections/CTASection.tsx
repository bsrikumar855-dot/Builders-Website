import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  heading?: string;
  body?: string;
  urgencyNote?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
}

export default function CTASection({
  heading = "Need a Reliable Electrician or Plumber?",
  body = "We provide 24/7 emergency support and scheduled services with transparent, upfront pricing.",
  urgencyNote = "Fast 60-Minute Response for Emergencies in Coimbatore City",
  primaryLabel = `Call Now: ${siteConfig.phone}`,
  primaryHref = `tel:${siteConfig.phone}`,
  secondaryLabel = "Get a Free Quote",
  secondaryHref = "/quote",
  variant = "dark",
}: CTASectionProps) {
  if (variant === "light") {
    return (
      <section className="section-padding section-alt" aria-labelledby="cta-light-heading">
        <div className="section-container text-center max-w-2xl">
          <h2 id="cta-light-heading" className="text-graphite mb-4">{heading}</h2>
          <p className="text-slate-body mb-8">{body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="graphite" asChild className="px-8 py-6">
              <Link href={primaryHref}>
                <Phone className="w-5 h-5" />
                {primaryLabel}
              </Link>
            </Button>
            <Button variant="outline" asChild className="px-8 py-6">
              <Link href={secondaryHref}>
                {secondaryLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
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
          <p className="text-warm-white/70 text-lg mb-8 leading-relaxed">{body}</p>

          {/* Urgency note */}
          <div className="bg-red-500/20 border border-red-400/40 text-red-200 rounded-xl px-5 py-3 text-sm font-semibold mb-8 inline-block">
            {urgencyNote}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="voltage" asChild className="px-8 py-6 text-base shadow-lg">
              <Link href={primaryHref}>
                <Phone className="w-5 h-5" />
                {primaryLabel}
              </Link>
            </Button>
            <Button variant="ghostWhite" asChild className="px-8 py-6 text-base">
              <Link href={secondaryHref}>
                {secondaryLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
