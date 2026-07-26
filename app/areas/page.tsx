import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Zap, Droplets } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Areas | Electrician & Plumber in Coimbatore | Shreekumar Builders",
  description:
    "Shreekumar Builders provides licensed electrical and plumbing services across all areas of Coimbatore — RS Puram, Gandhipuram, Saravanampatti, Singanallur, and more.",
  alternates: { canonical: `${siteConfig.url}/areas` },
};

export default function AreasPage() {
  return (
    <>
      <section className="gradient-brand py-16 md:py-24" aria-labelledby="areas-page-heading">
        <div className="section-container text-center max-w-2xl mx-auto">
          <p className="text-copper text-xs font-bold uppercase tracking-widest mb-3">Service Coverage</p>
          <h1 id="areas-page-heading" className="text-graphite mb-4">Areas We Serve</h1>
          <p className="text-slate-body text-lg">
            We cover all areas of Coimbatore city and district. Click your area below for local service information and availability.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Service areas list">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {areas.map((area) => {
              const areaServices = area.services
                .map((slug) => services.find((s) => s.slug === slug))
                .filter(Boolean) as typeof services;

              return (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-white border border-warm-white rounded-2xl p-6 hover:border-graphite/20 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center shrink-0 group-hover:bg-graphite/10 transition-colors">
                      <MapPin className="w-6 h-6 text-graphite" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h2 className="text-lg font-bold text-graphite group-hover:text-graphite transition-colors">
                          {area.name}
                        </h2>
                        <ArrowRight className="w-5 h-5 text-slate-body/50 group-hover:text-graphite group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-body mb-3">{area.district}, Tamilnadu</p>
                      <p className="text-sm text-slate-body leading-relaxed line-clamp-2 mb-4">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {areaServices.slice(0, 3).map((s) => (
                          <span
                            key={s.slug}
                            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                              s.category === "electrical"
                                ? "bg-warm-white text-graphite"
                                : "bg-cyan-50 text-cyan-700"
                            }`}
                          >
                            {s.category === "electrical" ? (
                              <Zap className="w-3 h-3" />
                            ) : (
                              <Droplets className="w-3 h-3" />
                            )}
                            {s.name}
                          </span>
                        ))}
                        {areaServices.length > 3 && (
                          <span className="text-xs text-slate-body/50">+{areaServices.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Catchall note */}
          <div className="bg-warm-white border border-graphite/10 rounded-2xl p-6 text-center">
            <h3 className="font-bold text-graphite mb-2">Don&apos;t See Your Area?</h3>
            <p className="text-slate-body text-sm mb-4 max-w-lg mx-auto">
              We serve all of Coimbatore district. If your area isn&apos;t listed, call or message us — we almost certainly cover it.
            </p>
            <Link href={`tel:${siteConfig.phone}`} className="btn-primary">
              Call: {siteConfig.phone}
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="light" heading="Same-Day Service Across Coimbatore" body="Call for emergencies or submit a quote request for planned work. We respond within 2 hours on business days." />
    </>
  );
}
