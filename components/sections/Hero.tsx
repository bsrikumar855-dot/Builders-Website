import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  badge?: string;
}

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta = { label: "Call Now", href: `tel:${siteConfig.phone}` },
  secondaryCta = { label: "Get a Free Quote", href: "/quote" },
  backgroundImage = "/images/hero-bg.svg",
  badge,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-[85vh] flex items-center"
      aria-label="Hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      {/* Diagonal accent bar */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 0 100%)" }}
      />

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              {eyebrow}
            </p>
          )}

          {badge && (
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="trust-badge bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-white text-balance mb-6">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl text-pretty">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCta.href}
              className="btn-primary text-base px-8 py-4 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="btn-accent text-base px-8 py-4 shadow-lg"
            >
              {secondaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            No call-out fee for estimates · Licence {siteConfig.licence}
          </p>
        </div>
      </div>
    </section>
  );
}
