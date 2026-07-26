import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle, MapPin, Eye, Bell, Lock } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ServicesBento from "@/components/sections/ServicesBento";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { securityServices } from "@/data/security-services";
import { testimonials } from "@/data/testimonials";
import { areas } from "@/data/areas";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sabari Security Service | CCTV & Access Control Coimbatore",
  description:
    "Sabari Security Service — Coimbatore's premium provider of CCTV networks, live remote monitoring, access control systems, and alarms. Fully compliant and certified.",
  alternates: { canonical: `${siteConfig.url}/security` },
};

const securityProcess = [
  { step: 1, title: "Book a Site Survey", description: "Request an on-site consultation via our online portal or call us directly." },
  { step: 2, title: "Threat & Design Audit", description: "We assess coverage blind spots, lighting, and entry vulnerability points." },
  { step: 3, title: "Structured Installation", description: "Concealed heavy-duty cabling, solid mountings, and clean component calibration." },
  { step: 4, title: "Remote Feed Setup", description: "Secure encrypted mobile alerts, remote camera feeds, and monitoring center connection." },
];

export default function SecurityLandingPage() {
  const featuredServices = securityServices.filter(s => s.featured || ["cctv-installation", "alarm-systems", "access-control"].includes(s.slug));
  const securityReviews = testimonials.filter(t => ["cctv-smart-home"].includes(t.service) || t.type === "commercial");

  return (
    <>
      <Hero
        eyebrow="Premium Security and CCTV Monitoring Systems"
        headlineLines={["Securing What", "Matters Most", "To You"]}
        subheadline="High-definition camera setups, intrusion detection alarms, and access control for residences and businesses across Coimbatore district."
        primaryCta={{ label: "Book a Survey", href: "/security/quote" }}
        secondaryCta={{ label: "Explore Solutions", href: "/security/services" }}
      />

      {/* Trust Badges */}
      <section className="bg-security-primary py-8 text-warm-white border-b border-white/5" aria-label="Certifications">
        <div className="section-container flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-semibold tracking-wide text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-security-accent" />
            <span>TN PSAR Act Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-security-accent" />
            <span>Police Verified Security Staff</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-security-accent" />
            <span>2-Year Equipment Warranty</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" aria-labelledby="services-heading">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-security-accent mb-2">Systems & Operations</p>
              <h2 id="services-heading" className="text-graphite">Our Security Solutions</h2>
            </div>
            <Button variant="securityOutline" asChild>
              <Link href="/security/services">
                View All Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <ServicesBento services={featuredServices} />
        </div>
      </section>

      {/* Security Brand Differentiators */}
      <section className="section-padding section-alt" aria-labelledby="diff-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-security-accent mb-3">Enterprise Grade Protection</p>
              <h2 id="diff-heading" className="text-graphite mb-6">
                Why Sabari Security Service?
              </h2>
              <p className="text-slate-body leading-relaxed mb-8">
                Unlike off-the-shelf DIY camera kits that fail in critical moments, we provide structured, fully calibrated commercial-grade installations. We ensure high-spec storage retention, failover power systems, and remote viewing capabilities.
              </p>
              <ul className="space-y-4">
                {[
                  "Concealed heavy-duty conduit routing — prevents cable tampering",
                  "Encrypted remote network configurations to stop cyber attacks",
                  "Backup power UPS planning to ensure continuous recording",
                  "Comprehensive maintenance agreements for lens cleaning and firmware updates",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-security-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-graphite">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-security-primary rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-security-accent/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-bold mb-4">Complete Access & Intrusion Control</h3>
              <p className="text-warm-white/70 text-sm leading-relaxed mb-8">
                Combine HD CCTV networks with multi-factor access control systems and magnetic door locks to secure critical inventory zones, entry points, or residential boundaries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <Eye className="w-6 h-6 text-security-accent mb-2" />
                  <p className="font-bold text-sm">Face Analytics</p>
                  <p className="text-xs text-warm-white/60 mt-1">High-definition details</p>
                </div>
                <div className="border border-white/10 rounded-xl p-4 bg-white/5">
                  <Bell className="w-6 h-6 text-security-accent mb-2" />
                  <p className="font-bold text-sm">Active Intrusion</p>
                  <p className="text-xs text-warm-white/60 mt-1">Real-time alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSteps steps={securityProcess} heading="Our Security Integration Process" />

      {/* Testimonials */}
      <TestimonialCarousel testimonials={securityReviews} />

      {/* CTA Section */}
      <CTASection
        heading="Book a Professional Site Threat Assessment"
        body="Our senior integration engineers visit your Coimbatore site to identify security weak spots and design a customized, no-obligation solution plan."
        primaryLabel={`Call Sabari: ${siteConfig.phone}`}
        primaryHref={`tel:${siteConfig.phone}`}
        secondaryLabel="Schedule Survey Online"
        secondaryHref="/security/quote"
      />
    </>
  );
}
