import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { getPostsByServiceSlug } from "@/data/blog-posts";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/sections/ServiceCard";
import BlogCard from "@/components/sections/BlogCard";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const categoryLabel = service.category === "electrical" ? "Electrical" : "Plumbing";

  return {
    title: `${service.name} in Coimbatore | ${categoryLabel} Services | Shreekumar Builders`,
    description: `${service.tagline}. Licensed ${categoryLabel.toLowerCase()} contractor serving Coimbatore. Free estimate. Call ${siteConfig.phone}.`,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: service.name,
      description: service.tagline,
      images: [{ url: service.image, alt: service.name }],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services;

  const relatedPosts = getPostsByServiceSlug(service.slug).slice(0, 2);

  return (
    <>
      <ServiceJsonLd
        name={service.name}
        description={service.description}
        url={`/services/${service.slug}`}
      />

      {/* Hero */}
      <section className="relative gradient-brand py-20 md:py-28 overflow-hidden" aria-labelledby="svc-heading">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={service.category === "electrical" ? "category-chip-electrical" : "category-chip-plumbing"}>
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </span>
            </div>
            <h1 id="svc-heading" className="text-graphite mb-4">{service.name}</h1>
            <p className="text-slate-body text-lg leading-relaxed mb-8 max-w-2xl">{service.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="voltage" asChild className="px-8 py-6 text-base shadow-md">
                <Link href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-5 h-5" />
                  Call Now: {siteConfig.phone}
                </Link>
              </Button>
              <Button variant="outline" asChild className="px-8 py-6 text-base">
                <Link href="/quote">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding section-alt" aria-labelledby="problem-heading">
        <div className="section-container max-w-4xl">
          <div className="bg-voltage/10 border border-voltage/20 rounded-2xl p-6 md:p-8 mb-10">
            <h2 id="problem-heading" className="text-xl font-bold text-graphite mb-3">
              Why This Matters
            </h2>
            <p className="text-slate-body leading-relaxed">{service.problem}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-graphite mb-6">About {service.name}</h2>
              <p className="text-slate-body leading-relaxed mb-8">{service.description}</p>

              {/* What's included */}
              <h3 className="text-lg font-bold text-graphite mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite">
                    <CheckCircle className="w-5 h-5 text-security-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service image */}
            <div className="relative rounded-2xl overflow-hidden h-80 bg-warm-white">
              <Image
                src={service.image}
                alt={`${service.name} — Shreekumar Builders, Coimbatore`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps steps={service.process} heading={`How We Handle ${service.name}`} />

      {/* Pricing note */}
      <section className="py-10 bg-white border-y border-warm-white" aria-label="Pricing information">
        <div className="section-container text-center">
          <div className="inline-flex items-center gap-3 bg-security-accent/10 border border-security-accent/20 text-security-primary rounded-2xl px-6 py-4">
            <IndianRupee className="w-5 h-5 text-security-accent shrink-0" />
            <div className="text-left">
              <p className="font-bold text-sm">Free Written Estimate</p>
              <p className="text-xs text-security-accent">No call-out fee. We visit, assess, and provide a written quote with no obligation.</p>
            </div>
            <Button variant="voltage" asChild className="ml-4 text-sm px-5 py-3.5 shrink-0">
              <Link href="/quote">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={service.faqs} heading={`${service.name} — FAQs`} />

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding section-alt" aria-labelledby="related-heading">
          <div className="section-container">
            <h2 id="related-heading" className="text-graphite text-center mb-10">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section-padding" aria-labelledby="related-articles-heading">
          <div className="section-container">
            <h2 id="related-articles-heading" className="text-graphite text-center mb-10">
              Helpful Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Need ${service.name} in Coimbatore?`}
        body={`Call us now for same-day attendance or request a free written estimate. We cover all of Coimbatore for ${service.name.toLowerCase()}.`}
      />
    </>
  );
}
