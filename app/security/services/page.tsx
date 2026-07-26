import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Shield, Bell, Key, ShieldCheck } from "lucide-react";
import ServicesBento from "@/components/sections/ServicesBento";
import CTASection from "@/components/sections/CTASection";
import { securityServices } from "@/data/security-services";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Security Solutions & CCTV | Sabari Security Service Coimbatore",
  description:
    "Explore our complete range of security system designs, professional CCTV installations, remote monitoring services, alarm networks, and access controls.",
  alternates: { canonical: `${siteConfig.url}/security/services` },
};

export default function ServicesPage() {
  const cctvSystems = securityServices.filter(
    (s) => ["cctv-installation", "cctv-monitoring", "security-amc"].includes(s.slug)
  );
  const physicalSecurity = securityServices.filter(
    (s) => ["alarm-systems", "access-control", "manned-guarding"].includes(s.slug)
  );

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-security-primary text-warm-white py-16 md:py-24" aria-labelledby="services-page-heading">
        <div className="section-container text-center max-w-2xl mx-auto relative z-10">
          <p className="text-security-accent text-xs font-bold uppercase tracking-widest mb-3">Service Catalog</p>
          <h1 id="services-page-heading" className="text-white mb-4">Sabari Security Solutions</h1>
          <p className="text-warm-white/80 text-lg leading-relaxed">
            From smart residential dome cameras to enterprise multi-tenant biometric locks, we configure high-spec security systems customized to your exact layout.
          </p>
        </div>
      </section>

      {/* CCTV & Monitoring Systems */}
      <section className="section-padding" aria-labelledby="cctv-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-security-accent/15 flex items-center justify-center">
              <Eye className="w-5 h-5 text-security-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-security-accent">Category</p>
              <h2 id="cctv-heading" className="text-2xl md:text-3xl font-display font-bold text-graphite leading-none">
                CCTV & Monitoring Systems
              </h2>
            </div>
          </div>
          <p className="text-slate-body mb-8 max-w-2xl">
            Custom camera layouts, digital NVR storage configurations, automated threat alerts, and around-the-clock remote video monitoring solutions.
          </p>
          <ServicesBento services={cctvSystems} />
        </div>
      </section>

      {/* Access Control & Alarms */}
      <section className="section-padding section-alt" aria-labelledby="alarms-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-security-accent/15 flex items-center justify-center">
              <Key className="w-5 h-5 text-security-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-security-accent">Category</p>
              <h2 id="alarms-heading" className="text-2xl md:text-3xl font-display font-bold text-graphite leading-none">
                Access Control & Alarms
              </h2>
            </div>
          </div>
          <p className="text-slate-body mb-8 max-w-2xl">
            Biometric scans, magnetic door latches, motion detection triggers, alarm sounder sirens, and police-verified physical security guards.
          </p>
          <ServicesBento services={physicalSecurity} />
        </div>
      </section>

      {/* Compliance / Regulatory block */}
      <section className="section-padding bg-security-primary text-warm-white py-12" aria-labelledby="legal-heading">
        <div className="section-container max-w-3xl text-center">
          <ShieldCheck className="w-12 h-12 text-security-accent mx-auto mb-4" />
          <h2 id="legal-heading" className="text-white text-xl md:text-2xl font-bold mb-4">Fully Licensed and Legally Compliant</h2>
          <p className="text-warm-white/70 text-sm leading-relaxed max-w-xl mx-auto mb-6">
            Sabari Security Service operates in strict compliance with the Tamil Nadu Private Security Agencies (Regulation) Rules. All cameras are positioned to respect neighbor privacy codes while providing optimal perimeter coverage.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="securityOutline" asChild className="border-white/20 text-white hover:bg-white/10">
              <Link href="/security/contact">
                Talk to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection variant="light" heading="Not Sure Which Security System Fits Your Site?" body="Book a threat survey. Our designers inspect your property boundaries and recommend layout specifications." />
    </>
  );
}
