import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <Button variant="voltage" asChild className="px-6 py-4">
              <Link href={`tel:${siteConfig.phone}`}>
                Call: {siteConfig.phone}
              </Link>
            </Button>
            <Button variant="ghostWhite" asChild className="px-6 py-4">
              <Link href="/quote">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why us for electrical */}
      <section className="section-padding section-alt" aria-labelledby="elec-why-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="elec-why-heading" className="text-graphite mb-6">
                Coimbatore&apos;s Preferred Residential Electricians
              </h2>
              <p className="text-slate-body leading-relaxed mb-6">
                From emergency fixes to full-scale renovations, we are local, responsive, and take immense pride in delivering tidy work that exceeds safety codes.
              </p>
              <ul className="space-y-4">
                {[
                  "All work carried out by fully licensed, insured electricians",
                  "Modern, high-spec equipment for swift diagnostics",
                  "Clear, upfront, written quote with zero hidden extras",
                  "5-year guarantee on every wiring installation",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-voltage shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-graphite">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency box */}
            <div className="bg-red-50/50 border-2 border-red-200/60 rounded-2xl p-6">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-red-700 bg-red-100/70 rounded-full px-3 py-1 mb-4">
                <Zap className="w-3 h-3" /> Danger Signs
              </span>
              <h3 className="font-bold text-graphite mb-3 text-lg">Electrical Warning Signs</h3>
              <p className="text-slate-body text-sm leading-relaxed mb-5">
                If you observe any of the following, do not attempt a DIY fix. Isolate the circuit if safe, and contact us immediately:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Burning odor from switches or outlets",
                  "Hot-to-touch electrical panels or sockets",
                  "Sparks when plugging in an appliance",
                  "Flickering lights across multiple rooms",
                  "Electric shock sensation from taps or appliances",
                ].map((sign) => (
                  <div key={sign} className="flex items-center gap-3 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    {sign}
                  </div>
                ))}
              </div>
              <Button variant="graphite" asChild className="w-full justify-center mt-4 py-6">
                <Link href={`tel:${siteConfig.phone}`}>
                  Call Now — Don&apos;t Wait
                </Link>
              </Button>
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
