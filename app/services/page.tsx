import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Droplets } from "lucide-react";
import ServicesBento from "@/components/sections/ServicesBento";
import CTASection from "@/components/sections/CTASection";
import SignatureLine from "@/components/motion/SignatureLine";
import { getServicesByCategory } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "All Services — Electrical & Plumbing | Shreekumar Builders Coimbatore",
  description:
    "Browse all electrical and plumbing services offered by Shreekumar Builders in Coimbatore. Licensed contractors for residential and commercial work.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  const electrical = getServicesByCategory("electrical");
  const plumbing = getServicesByCategory("plumbing");

  return (
    <>
      {/* Page Header */}
      <section className="gradient-brand py-16 md:py-24" aria-labelledby="services-page-heading">
        <div className="section-container text-center">
          <p className="text-voltage text-xs font-bold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 id="services-page-heading" className="text-warm-white mb-4">Our Services</h1>
          <p className="text-warm-white/75 max-w-2xl mx-auto text-lg">
            Licensed electrical and plumbing services for residential and commercial properties in Coimbatore.
            All work comes with a 5-year workmanship warranty and free written estimates.
          </p>
        </div>
      </section>

      {/* Electrical */}
      <section className="section-padding" aria-labelledby="electrical-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-voltage/15 flex items-center justify-center">
              <Zap className="w-5 h-5 text-graphite" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-graphite">Category</p>
              <h2 id="electrical-heading" className="text-2xl md:text-3xl font-display font-bold text-graphite leading-none">
                Electrical Services
              </h2>
            </div>
          </div>
          <p className="text-slate-body mb-8 max-w-2xl">
            From wiring new homes to upgrading panels in existing properties, our licensed electricians handle every aspect of residential and commercial electrical work.
          </p>
          <ServicesBento services={electrical} />
          <div className="mt-6 text-center">
            <Link href="/services/electrical" className="btn-outline">
              Electrical Services Overview <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature scroll transition: circuit trace (electrical) morphs into a
          pipe run (plumbing) as the user scrolls through this divider. The
          only place this motif is used decoratively/interactively beyond the
          hero — kept rare on purpose. */}
      <div className="section-container">
        <SignatureLine variant="circuit" morph className="w-full h-56 md:h-72" />
      </div>

      {/* Plumbing */}
      <section className="section-padding section-alt" aria-labelledby="plumbing-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-copper/15 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-graphite" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-graphite">Category</p>
              <h2 id="plumbing-heading" className="text-2xl md:text-3xl font-display font-bold text-graphite leading-none">
                Plumbing Services
              </h2>
            </div>
          </div>
          <p className="text-slate-body mb-8 max-w-2xl">
            Leak detection and repair, full bathroom fit-outs, water tank and pump systems, drain clearance, and large-scale commercial plumbing projects.
          </p>
          <ServicesBento services={plumbing} />
          <div className="mt-6 text-center">
            <Link href="/services/plumbing" className="btn-outline">
              Plumbing Services Overview <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="light" heading="Not Sure Which Service You Need?" body="Call us and describe the problem — we will advise you honestly on the best approach and the most cost-effective solution." />
    </>
  );
}
