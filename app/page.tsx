import type { Metadata } from "next";

import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesBento from "@/components/sections/ServicesBento";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/sections/ProjectCard";
import { getFeaturedServices } from "@/data/services";
import { getFeaturedProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { areas } from "@/data/areas";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shreekumar Builders | Licensed Electricians & Plumbers in Coimbatore",
  description:
    "Shreekumar Builders — licensed, insured electrical and plumbing contractors serving Coimbatore since 2008. Call for same-day service or get a free quote.",
  alternates: { canonical: siteConfig.url },
};

const homeProcess = [
  { step: 1, title: "Call or Request a Quote", description: "Reach us by phone for emergencies or submit our online form for planned work." },
  { step: 2, title: "Free Site Visit", description: "We visit at a time that suits you, assess the job, and provide a written estimate." },
  { step: 3, title: "Work Completed", description: "Our licensed team completes the work using ISI-certified materials." },
  { step: 4, title: "Tested & Warranted", description: "Every job is tested and covered by our 5-year workmanship warranty." },
];

export default function HomePage() {
  const featured = getFeaturedServices();
  const projects = getFeaturedProjects();

  return (
    <>
      <Hero
        eyebrow="Coimbatore's Trusted Electrical & Plumbing Specialists"
        headlineLines={["Electrical &", "Plumbing,", "Done Right"]}
        subheadline="Licensed, insured, and serving Coimbatore since 2008. Residential and commercial work done right — the first time."
      />

      <TrustBar />

      {/* Services Section */}
      <section className="section-padding" aria-labelledby="services-heading">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-graphite mb-2">What We Do</p>
              <h2 id="services-heading" className="text-graphite">Our Core Services</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-graphite hover:text-graphite shrink-0">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ServicesBento services={featured} />
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding section-alt" aria-labelledby="why-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-graphite mb-3">Why Shreekumar Builders</p>
              <h2 id="why-heading" className="text-graphite mb-6">
                Experience You Can Trust,<br />Results That Last
              </h2>
              <p className="text-slate-body leading-relaxed mb-8">
                With over {new Date().getFullYear() - siteConfig.established} years serving Coimbatore, we understand local wiring standards, water pressure conditions, and building types — from 1970s bungalows to modern high-rises. Every job comes with a written quote, ISI-marked materials, and a 5-year workmanship warranty.
              </p>
              <ul className="space-y-3">
                {[
                  "Licence no. " + siteConfig.licence + " — registered with Tamil Nadu EB",
                  "All cable IS 694-certified, no substandard materials",
                  "Permanent team — no sub-contractors on safety-critical work",
                  "Post-work insulation resistance and earth tests on every job",
                  "Clean site policy: dust sheets down, cleaned up daily",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite">
                    <CheckCircle className="w-5 h-5 text-security-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button variant="graphite" asChild className="px-6 py-4">
                  <Link href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-5 h-5" /> Call Now
                  </Link>
                </Button>
                <Button variant="outline" asChild className="px-6 py-4">
                  <Link href="/about">
                    About Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: `${new Date().getFullYear() - siteConfig.established}+`, label: "Years in Business", color: "gradient-brand text-white" },
                { value: "500+", label: "Projects Completed", color: "bg-voltage text-graphite" },
                { value: "100%", label: "Licensed & Insured", color: "bg-graphite text-white" },
                { value: "5 Year", label: "Workmanship Warranty", color: "bg-copper text-white" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-6 flex flex-col gap-2 ${stat.color}`}
                >
                  <span className="text-4xl font-black leading-none">{stat.value}</span>
                  <span className="text-sm font-semibold opacity-80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={homeProcess} heading="Our Simple 4-Step Process" />

      {/* Projects Section */}
      <section className="section-padding" aria-labelledby="projects-heading">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-graphite mb-2">Recent Work</p>
              <h2 id="projects-heading" className="text-graphite">Featured Projects</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-graphite hover:text-graphite">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      {/* Areas */}
      <section className="section-padding" aria-labelledby="areas-heading">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-graphite mb-2">Service Coverage</p>
            <h2 id="areas-heading" className="text-graphite mb-3">Areas We Serve</h2>
            <p className="text-slate-body max-w-xl mx-auto">
              Based in Coimbatore, we cover the entire city and surrounding suburbs. Same-day response available across all service areas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-white border border-warm-white rounded-xl p-5 hover:border-graphite/20 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-graphite shrink-0" />
                  <h3 className="font-bold text-graphite group-hover:text-graphite transition-colors">{area.name}</h3>
                </div>
                <p className="text-xs text-slate-body">{area.district}, Tamilnadu</p>
                <p className="text-xs font-semibold text-graphite mt-3 group-hover:underline">
                  View services in {area.name} →
                </p>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-slate-body">
            Don&apos;t see your area?{" "}
            <Link href="/contact" className="text-graphite font-semibold hover:underline">
              Contact us
            </Link>{" "}
            — we cover all of Coimbatore district.
          </p>
        </div>
      </section>

      <CTASection
        heading="Need a Licensed Electrician or Plumber in Coimbatore?"
        body="Call us for same-day service on urgent problems, or request a free written quote for planned work. We cover all of Coimbatore."
      />
    </>
  );
}
