import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/sections/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { getServicesByCategory } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Electrical Services Coimbatore | Licensed Electricians | Shreekumar Builders",
  description:
    "Licensed electrical services in Coimbatore — house wiring, MCB panel upgrades, earthing, CCTV wiring, generator installation. Free estimates. Call now.",
  alternates: { canonical: `${siteConfig.url}/services/electrical` },
};

const electricalHighlights = [
  "All cable IS 694-certified copper — no aluminium substitutes",
  "MCB panels from Havells, Schneider, and Legrand only",
  "ISI-marked switches and sockets supplied",
  "Insulation resistance test after every job",
  "EB inspection clearance assistance",
  "Licensed under Tamil Nadu Electrical Licensing Board",
];

export default function ElectricalPage() {
  const electrical = getServicesByCategory("electrical");

  return (
    <>
      <section className="gradient-brand py-16 md:py-24" aria-labelledby="elec-heading">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-voltage/15 flex items-center justify-center">
              <Zap className="w-6 h-6 text-voltage" />
            </div>
            <span className="text-voltage text-xs font-bold uppercase tracking-widest">Electrical Services</span>
          </div>
          <h1 id="elec-heading" className="text-graphite mb-4 max-w-3xl">
            Licensed Electrical Services in Coimbatore
          </h1>
          <p className="text-slate-body text-lg max-w-2xl leading-relaxed mb-8">
            From simple socket additions to full house rewires, our certified electricians complete every job to IS standards — with a 5-year warranty on all workmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`tel:${siteConfig.phone}`} className="btn-accent">
              <span className="font-semibold">Call: {siteConfig.phone}</span>
            </Link>
            <Link href="/quote" className="btn-ghost-white">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us for electrical */}
      <section className="section-padding section-alt" aria-labelledby="elec-why-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="elec-why-heading" className="text-graphite mb-6">
                Why Choose a Licensed Electrician?
              </h2>
              <p className="text-slate-body mb-6 leading-relaxed">
                Electrical work done by unlicensed contractors is a leading cause of domestic fires in India. Our work is performed by certified electricians, uses ISI-marked materials, and is tested before hand-over — protecting your family, your property, and your insurance policy.
              </p>
              <ul className="space-y-3">
                {electricalHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite">
                    <CheckCircle className="w-5 h-5 text-security-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-warm-white p-6 space-y-4">
              <p className="text-sm font-bold text-graphite mb-4">Emergency Warning Signs — Call Us Now</p>
              {[
                "Breakers tripping repeatedly or not resetting",
                "Burning smell or scorch marks near sockets",
                "Sparks when plugging in an appliance",
                "Flickering lights across multiple rooms",
                "Electric shock sensation from taps or appliances",
              ].map((sign) => (
                <div key={sign} className="flex items-center gap-3 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {sign}
                </div>
              ))}
              <Link href={`tel:${siteConfig.phone}`} className="btn-primary w-full justify-center mt-4">
                Call Now — Don&apos;t Wait
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="section-padding" aria-labelledby="elec-services-heading">
        <div className="section-container">
          <h2 id="elec-services-heading" className="text-graphite text-center mb-10">
            All Electrical Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electrical.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
