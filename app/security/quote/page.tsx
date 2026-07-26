import type { Metadata } from "next";
import { Phone, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/forms/QuoteForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a Security Survey | CCTV & Alarm Designs Coimbatore",
  description:
    "Book a CCTV site survey or security design assessment from Sabari Security Service in Coimbatore. Professional layout blueprints and itemized quotes.",
  alternates: { canonical: `${siteConfig.url}/security/quote` },
};

export default function QuotePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-security-primary text-warm-white py-16 md:py-20" aria-labelledby="quote-heading">
        <div className="section-container max-w-3xl mx-auto text-center relative z-10">
          <p className="text-security-accent text-xs font-bold uppercase tracking-widest mb-3">Threat Assessment</p>
          <h1 id="quote-heading" className="text-white mb-4">Request a Security Survey</h1>
          <p className="text-warm-white/80 text-lg mb-6">
            Fill in the form below to request a detailed on-site assessment of your cameras, alarms, and access vulnerabilities.
          </p>
          <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-400/40 text-red-200 rounded-xl px-5 py-3 text-sm font-semibold">
            For urgent system offline faults or emergency support — call immediately:{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-white font-bold underline hover:no-underline ml-1">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Quote request form">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-warm-white p-5">
                <h3 className="font-bold text-graphite mb-4 text-base flex items-center gap-2">
                  <FileText className="w-5 h-5 text-security-primary" />
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-sm text-slate-body">
                  {[
                    "We review your security request within 2 hours",
                    "We call to schedule an on-site survey time",
                    "A security design engineer visits your site",
                    "You receive a written layout and itemized quote",
                    "Complete confidentiality guaranteed",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-security-primary to-security-accent text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-security-accent/10 border border-security-accent/20 rounded-2xl p-5">
                <h3 className="font-bold text-graphite mb-2 text-base">Speak to an Engineer</h3>
                <p className="text-security-primary text-sm mb-4 leading-relaxed">
                  Have unique parameters or a complex site layout? Call us directly to discuss your options.
                </p>
                <Button variant="securityPrimary" asChild className="w-full justify-center py-6 text-base shadow-md">
                  <Link href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-warm-white p-6 md:p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
