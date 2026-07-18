import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Droplets, CheckCircle } from "lucide-react";
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
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(160deg, #0c4a6e 0%, #0369a1 60%, #0ea5e9 100%)" }}
        aria-labelledby="plumb-heading"
      >
        <div className="section-container">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-cyan-300" />
            </div>
            <span className="text-cyan-300 text-xs font-bold uppercase tracking-widest">Plumbing Services</span>
          </div>
          <h1 id="plumb-heading" className="text-white mb-4 max-w-3xl">
            Professional Plumbing Services in Coimbatore
          </h1>
          <p className="text-sky-100 text-lg max-w-2xl leading-relaxed mb-8">
            Leak detection and repair, full bathroom and kitchen plumbing, water tank and pump installations, drain clearance, and commercial plumbing — all with a 5-year workmanship warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`tel:${siteConfig.phone}`} className="btn-accent">
              Call: {siteConfig.phone}
            </Link>
            <Link href="/quote" className="btn-ghost-white">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why licensed */}
      <section className="section-padding section-alt" aria-labelledby="plumb-why-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="plumb-why-heading" className="text-slate-900 mb-6">
                The Cost of Poor Plumbing
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                A small undetected leak can cause structural damage worth lakhs of rupees within months. Poor drainage design leads to recurring blockages. Our team uses proper materials, correct jointing techniques, and always tests before closing walls.
              </p>
              <ul className="space-y-3">
                {plumbingHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
              <p className="text-sm font-bold text-slate-900 mb-4">Emergency Plumbing — Call Immediately If You See:</p>
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
              <Link href={`tel:${siteConfig.phone}`} className="btn-primary w-full justify-center mt-4">
                Call Now — Emergency Response
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="plumb-services-heading">
        <div className="section-container">
          <h2 id="plumb-services-heading" className="text-slate-900 text-center mb-10">
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
