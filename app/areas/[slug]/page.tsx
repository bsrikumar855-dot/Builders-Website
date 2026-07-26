import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { getAreaBySlug, areas } from "@/data/areas";
import { services } from "@/data/services";
import ServiceCard from "@/components/sections/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getAreaBySlug(params.slug);
  if (!area) return {};

  return {
    title: `Electrician & Plumber in ${area.name} | Shreekumar Builders Coimbatore`,
    description: `Licensed electrical and plumbing services in ${area.name}, Coimbatore. Same-day service available. Call ${siteConfig.phone} or get a free quote.`,
    alternates: { canonical: `${siteConfig.url}/areas/${area.slug}` },
  };
}

export default function AreaPage({ params }: Props) {
  const area = getAreaBySlug(params.slug);
  if (!area) notFound();

  const areaServices = area.services
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services;

  return (
    <>
      {/* Hero */}
      <section className="gradient-brand py-16 md:py-24" aria-labelledby="area-heading">
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <Link href="/areas" className="hover:text-graphite transition-colors">Areas</Link>
            <span>/</span>
            <span className="text-graphite font-semibold">{area.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-copper" />
            <span className="text-copper text-sm font-semibold">{area.district}, Tamilnadu</span>
          </div>
          <h1 id="area-heading" className="text-graphite mb-4">
            Electrician & Plumber in {area.name}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
            {area.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`tel:${siteConfig.phone}`} className="btn-accent px-8 py-4">
              <Phone className="w-5 h-5" />
              Call Now: {siteConfig.phone}
            </Link>
            <Link href="/quote" className="btn-outline px-8 py-4">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding section-alt" aria-labelledby="area-highlights-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="area-highlights-heading" className="text-slate-900 mb-6">
                Our Services in {area.name}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                We provide fully licensed electrical and plumbing services throughout {area.name}. Our team is familiar with the local building stock and can attend at short notice for urgent problems.
              </p>
              <ul className="space-y-3">
                {area.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency box */}
            <div className="bg-blue-900 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Emergency Call-Out — {area.name}</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                For electrical faults, burst pipes, or sewage emergencies in {area.name}, call us immediately. We aim to attend within 2–4 hours of your call.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-accent w-full justify-center text-base py-4"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
              <p className="text-xs text-blue-400 text-center mt-3">
                No call-out fee for emergency attendance in {area.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      {areaServices.length > 0 && (
        <section className="section-padding" aria-labelledby="area-services-heading">
          <div className="section-container">
            <h2 id="area-services-heading" className="text-slate-900 text-center mb-10">
              Services Available in {area.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Need an Electrician or Plumber in ${area.name}?`}
        body={`Licensed, insured team covering ${area.name} and all of Coimbatore. Free estimates, 5-year warranty.`}
      />
    </>
  );
}
