import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { securityServices } from "@/data/security-services";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/sections/ServiceCard";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: { slug: string };
}

function getSecurityServiceBySlug(slug: string) {
  return securityServices.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return securityServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getSecurityServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.name} in Coimbatore | Sabari Security Service`,
    description: `${service.tagline}. Professional security systems integration contractor serving Coimbatore. Free survey request.`,
    alternates: { canonical: `${siteConfig.url}/security/services/${service.slug}` },
    openGraph: {
      title: service.name,
      description: service.tagline,
      images: [{ url: service.image, alt: service.name }],
    },
  };
}

export default function SecurityServicePage({ params }: Props) {
  const service = getSecurityServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((slug) => securityServices.find((s) => s.slug === slug))
    .filter(Boolean) as typeof securityServices;

  return (
    <>
      <ServiceJsonLd
        name={service.name}
        description={service.description}
        url={`/security/services/${service.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-security-primary text-warm-white py-16 md:py-24" aria-labelledby="svc-heading">
        <div className="section-container max-w-3xl relative z-10">
          <div className="flex items-center gap-2 text-warm-white/70 text-sm mb-4">
            <Link href="/security/services" className="hover:text-white transition-colors">Services</Link>
            <span>&rarr;</span>
            <span className="bg-security-accent/20 text-security-accent border border-security-accent/25 rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wider">
              Security
            </span>
          </div>
          <h1 id="svc-heading" className="text-white mb-4">{service.name}</h1>
          <p className="text-warm-white/80 text-lg leading-relaxed mb-8 max-w-2xl">{service.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="securityPrimary" asChild className="px-8 py-6 text-base shadow-md">
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="w-5 h-5" />
                Call Sabari: {siteConfig.phone}
              </Link>
            </Button>
            <Button variant="securityOutline" asChild className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base">
              <Link href="/security/quote">
                Request a Free Survey <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust factors */}
      <section className="section-padding py-12 border-b border-warm-white" aria-label="Why choose this security service">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-security-accent/10 flex items-center justify-center text-security-primary shrink-0">
                  <CheckCircle className="w-6 h-6 text-security-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-graphite mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-body leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" aria-label="Service details">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-graphite mb-6">Structured System Integration</h2>
              <div className="prose text-slate-body leading-relaxed max-w-none mb-8">
                <p className="mb-4">{service.description}</p>
                <p className="font-semibold text-graphite mt-6 mb-3">Key Issues We Resolve:</p>
                <p className="text-sm bg-red-50 border border-red-200/50 rounded-xl p-4 text-red-800 mb-6">{service.problem}</p>
              </div>

              <h3 className="font-bold text-graphite mb-4 text-lg">What is Included:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite">
                    <CheckCircle className="w-5 h-5 text-security-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service image */}
            <div className="relative rounded-2xl overflow-hidden h-96 bg-warm-white border border-warm-white shadow-md">
              <Image
                src={service.image}
                alt={`${service.name} — Sabari Security, Coimbatore`}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration process */}
      <ProcessSteps steps={service.process} heading="Integration and Setup Process" />

      {/* Pricing / survey note */}
      <section className="section-padding py-10 bg-security-primary text-warm-white" aria-label="Survey assessment info">
        <div className="section-container text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <ShieldCheck className="w-5 h-5 text-security-accent shrink-0" />
            <div className="text-left">
              <p className="font-bold text-sm">Free On-Site Assessment</p>
              <p className="text-xs text-warm-white/60">We visit, map the camera angles, calculate storage space, and provide a written diagram blueprint.</p>
            </div>
            <Button variant="securityPrimary" asChild className="ml-4 text-sm px-5 py-3 shrink-0 shadow-md">
              <Link href="/security/quote">
                Book a Survey
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding section-alt" aria-labelledby="related-heading">
          <div className="section-container">
            <h2 id="related-heading" className="text-graphite text-center mb-10">
              Related Security Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rs) => (
                <ServiceCard key={rs.slug} service={rs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <FAQAccordion faqs={service.faqs} heading={`${service.name} — FAQs`} />

      <CTASection
        heading="Book a Professional Site Threat Assessment"
        body={`Our senior integration engineers visit your Coimbatore site to identify security weak spots and design a customized, no-obligation solution plan.`}
        primaryLabel={`Call Sabari: ${siteConfig.phone}`}
        primaryHref={`tel:${siteConfig.phone}`}
        secondaryLabel="Schedule Survey Online"
        secondaryHref="/security/quote"
        bgImage="/images/security-hero-bg.webp"
        bgOverlay="bg-security-primary/95"
      />
    </>
  );
}

const certifications = [
  {
    title: "PSAR Act Compliant",
    desc: "Fully registered systems installer meeting all Tamil Nadu security rules.",
  },
  {
    title: "Police Verified",
    desc: "Every installer and monitoring agent undergoes strict verification checks.",
  },
  {
    title: "2-Year Warranty",
    desc: "High-spec IP video cameras, NVRs, and alarm sensors covered completely.",
  },
];
