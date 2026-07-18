import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us | Shreekumar Builders | Electrician & Plumber Coimbatore",
  description:
    "Contact Shreekumar Builders — licensed electricians and plumbers in Coimbatore. Call for emergencies, or use our form for quote requests and general enquiries.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-brand py-16 md:py-20" aria-labelledby="contact-heading">
        <div className="section-container text-center max-w-2xl mx-auto">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 id="contact-heading" className="text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">
            For emergencies, call immediately. For planned work and quote requests, use the form below.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="section-container text-center">
          <p className="font-bold text-sm md:text-base">
            Electrical fault or burst pipe?{" "}
            <a href={`tel:${siteConfig.phone}`} className="underline hover:no-underline ml-1">
              Call us now: {siteConfig.phone}
            </a>
            {" "}— Do not use the form for emergencies.
          </p>
        </div>
      </div>

      <section className="section-padding" aria-label="Contact information and form">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-slate-900 text-2xl font-bold">Contact Information</h2>

              <a href={`tel:${siteConfig.phone}`}
                className="group flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Phone (Calls & WhatsApp)</p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors">{siteConfig.phone}</p>
                  <p className="text-xs text-slate-400 mt-1">24/7 for emergencies</p>
                </div>
              </a>

              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5 hover:border-green-200 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">WhatsApp</p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">{siteConfig.phone}</p>
                  <p className="text-xs text-slate-400 mt-1">Message us anytime</p>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Email</p>
                  <p className="text-base font-semibold text-slate-900 group-hover:text-blue-800 transition-colors break-all">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5">
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Office Address</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5">
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Working Hours</p>
                  <p className="text-sm text-slate-700">{siteConfig.hours.weekdays}</p>
                  <p className="text-sm text-slate-700">{siteConfig.hours.sunday}</p>
                  <p className="text-sm font-bold text-amber-600 mt-1">{siteConfig.hours.emergency}</p>
                </div>
              </div>
            </div>

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                <p className="text-sm text-slate-500 mb-6">
                  For quote requests, please use our{" "}
                  <Link href="/quote" className="text-blue-800 font-semibold hover:underline">
                    detailed quote form
                  </Link>{" "}
                  instead.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-16" aria-label="Map location">
        <div className="section-container">
          <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <MapPin className="w-10 h-10 mx-auto mb-2 text-blue-700" />
              <p className="font-semibold">42, Avinashi Road, Coimbatore</p>
              <p className="text-sm mt-1">
                <a
                  href="https://maps.google.com/?q=Coimbatore,Tamilnadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
