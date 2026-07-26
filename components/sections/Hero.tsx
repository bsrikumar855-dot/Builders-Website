import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import HeroReveal, { HERO_SIGNATURE_DELAY } from "@/components/motion/HeroReveal";
import SignatureLine from "@/components/motion/SignatureLine";
import MagneticButton from "@/components/motion/MagneticButton";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

interface HeroProps {
  eyebrow?: string;
  /** Up to 3 lines — each staggers in as its own line. */
  headlineLines: string[];
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  eyebrow,
  headlineLines,
  subheadline,
  primaryCta = { label: "Call Now", href: `tel:${siteConfig.phone}` },
  secondaryCta = { label: "Get a Free Quote", href: "/quote" },
}: HeroProps) {
  return (
    <section className="relative overflow-hidden gradient-brand" aria-label="Hero">
      <div className="section-container relative z-10 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left: headline, subhead, CTAs */}
          <HeroReveal
            eyebrow={
              eyebrow && (
                <p className="inline-block bg-voltage text-graphite text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                  {eyebrow}
                </p>
              )
            }
             headlineLines={headlineLines.map((line) => (
              <span key={line} className="block font-display text-display-xl text-graphite text-balance">
                {line}
              </span>
            ))}
            subhead={
              <p className="text-lg md:text-xl text-slate-body leading-relaxed mt-6 mb-10 max-w-xl text-pretty">
                {subheadline}
              </p>
            }
            cta={
              <div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="voltage" asChild className="text-base px-8 py-6 shadow-lg">
                      <Link href={primaryCta.href}>
                        <Phone className="w-5 h-5" />
                        {primaryCta.label}
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="outline" asChild className="text-base px-8 py-6 bg-white/50 backdrop-blur-sm">
                      <Link href={secondaryCta.href}>
                        {secondaryCta.label}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
                <p className="mt-6 text-xs text-slate-body">
                  No call-out fee for estimates · Licence {siteConfig.licence}
                </p>
              </div>
            }
          />

          {/* Right: signature element — the one place this motif appears decoratively at rest */}
          <div className="hidden lg:block relative h-72" aria-hidden="true">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-graphite/[0.04] to-transparent" />
            <SignatureLine variant="circuit" delay={HERO_SIGNATURE_DELAY} className="w-full h-full p-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
