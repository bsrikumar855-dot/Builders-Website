import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Droplets } from "lucide-react";
import ServiceCard from "@/components/sections/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { services, getServicesByCategory } from "@/data/services";
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
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 id="services-page-heading" className="text-white mb-4">Our Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Licensed electrical and plumbing services for residential and commercial properties in Coimbatore.
            All work comes with a 5-year workmanship warranty and free written estimates.
          </p>
        </div>
      </section>

      {/* Electrical */}
      <section className="section-padding" aria-labelledby="electrical-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Category</p>
              <h2 id="electrical-heading" className="text-2xl md:text-3xl font-bold text-slate-900 leading-none">
                Electrical Services
              </h2>
            </div>
          </div>
          <p className="text-slate-500 mb-8 max-w-2xl">
            From wiring new homes to upgrading panels in existing properties, our licensed electricians handle every aspect of residential and commercial electrical work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electrical.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/services/electrical" className="btn-outline">
              Electrical Services Overview <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Plumbing */}
      <section className="section-padding section-alt" aria-labelledby="plumbing-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-cyan-700" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Category</p>
              <h2 id="plumbing-heading" className="text-2xl md:text-3xl font-bold text-slate-900 leading-none">
                Plumbing Services
              </h2>
            </div>
          </div>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Leak detection and repair, full bathroom fit-outs, water tank and pump systems, drain clearance, and large-scale commercial plumbing projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumbing.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
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
