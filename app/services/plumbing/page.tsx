import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Droplets, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/sections/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { getServicesByCategory } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Plumbing Services Coimbatore | Licensed Plumbers | Shreekumar Builders",
  description:
    "Licensed plumbing services in Coimbatore — leak detection, bathroom fit-outs, water tank & pump installation, drain cleaning. Free estimates. Call now.",
  alternates: { canonical: `${siteConfig.url}/services/plumbing` },
};

const plumbingHighlights = [
  "CPVC and UPVC pipes — no GI for new installations",
  "Pressure-tested after every new installation",
  "Acoustic and thermal leak detection equipment",
  "Motorised drain auger and high-pressure water jetting",
  "Sanitary ware from Hindware, Jaquar, and Cera",
  "AMC (Annual Maintenance Contracts) available",
];

export default function PlumbingPage() {
  const plumbing = getServicesByCategory("plumbing");

  return (
    <>
      <section
        className="py-16 md:py-24 gradient-brand"
        aria-labelledby="plumb-heading"
      >
        <div className="section-container">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-copper/15 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-copper" />
            </div>
            <span className="text-copper text-xs font-bold uppercase tracking-widest">Plumbing Services</span>
          </div>
          <h1 id="plumb-heading" className="text-graphite mb-4 max-w-3xl">
            Professional Plumbing Services in Coimbatore
          </h1>
          <p className="text-slate-body text-lg max-w-2xl leading-relaxed mb-8">
            Leak detection and repair, full bathroom and kitchen plumbing, water tank and pump installations, drain clearance, and commercial plumbing — all with a 5-year workmanship warranty.
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

      {/* Why licensed */}
      <section className="section-padding section-alt" aria-labelledby="plumb-why-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="plumb-why-heading" className="text-graphite mb-6">
                Why Choose a Licensed Plumber?
              </h2>
              <p className="text-slate-body mb-6 leading-relaxed">
                Poorly installed pipework and unvented drains cause costly water damage, dampness, and health issues. Our licensed plumbers ensure correct gradient runs, code-compliant venting, and sound solder or compression joins.
              </p>
              <ul className="space-y-3">
                {[
                  "All work carried out by fully qualified, licensed plumbers",
                  "Advanced leak location technology and pipeline cameras",
                  "Clear, upfront, written quote with zero hidden extras",
                  "5-year guarantee on every pipe run and joint",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite">
                    <CheckCircle className="w-5 h-5 text-voltage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency box */}
            <div className="bg-white rounded-2xl border border-warm-white p-6 space-y-4 shadow-sm">
              <p className="text-sm font-bold text-graphite mb-4">Emergency Plumbing Warning Signs</p>
              {[
                "Burst pipe flooding a room or underfloor",
                "Raw sewage overflow in bathroom or drain",
                "No water supply to the entire building",
                "Gas smell near water heater or boiler",
                "Water leaking through ceiling from floor above",
              ].map((sign) => (
                <div key={sign} className="flex items-center gap-3 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {sign}
                </div>
              ))}
              <Button variant="graphite" asChild className="w-full justify-center mt-4 py-6">
                <Link href={`tel:${siteConfig.phone}`}>
                  Call Now — Emergency Response
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="plumb-services-heading">
        <div className="section-container">
          <h2 id="plumb-services-heading" className="text-graphite text-center mb-10">
            All Plumbing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumbing.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
