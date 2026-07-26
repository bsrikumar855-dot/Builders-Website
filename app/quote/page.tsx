import type { Metadata } from "next";
import { Phone, FileText } from "lucide-react";
import Link from "next/link";
import QuoteForm from "@/components/forms/QuoteForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Free Quote | Electrical & Plumbing Services | Shreekumar Builders",
  description:
    "Request a free written estimate from Shreekumar Builders — licensed electricians and plumbers in Coimbatore. No obligation. We respond within 2 hours.",
  alternates: { canonical: `${siteConfig.url}/quote` },
};

export default function QuotePage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-brand py-16 md:py-20" aria-labelledby="quote-heading">
        <div className="section-container max-w-3xl mx-auto text-center">
          <p className="text-copper text-xs font-bold uppercase tracking-widest mb-3">Free Estimate</p>
          <h1 id="quote-heading" className="text-graphite mb-4">Request a Free Quote</h1>
          <p className="text-slate-600 text-lg mb-6">
            Fill in the form below and we will review your details and call you to arrange a free site visit. All estimates are written, itemised, and carry no obligation.
          </p>
          <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl px-5 py-3 text-sm font-semibold">
            For electrical faults, burst pipes, or emergencies — call us immediately:{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-red-900 font-bold underline hover:no-underline ml-1">
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
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <h3 className="font-bold text-slate-900 mb-4 text-base flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-700" />
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  {[
                    "We review your request within 2 hours",
                    "We call to confirm details and book a site visit",
                    "A licensed estimator visits your property",
                    "You receive a written, itemised quote",
                    "No obligation to proceed",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full gradient-brand text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 className="font-bold text-amber-900 mb-2 text-base">Prefer to Call?</h3>
                <p className="text-amber-700 text-sm mb-4 leading-relaxed">
                  We are happy to discuss your project over the phone and arrange a visit directly.
                </p>
                <Link href={`tel:${siteConfig.phone}`} className="btn-primary w-full justify-center">
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">What&apos;s Included</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {["Free site visit", "Written itemised quote", "ISI-certified materials", "5-year workmanship warranty", "Licensed & insured team"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
