import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import ProjectsClient from "./ProjectsClient";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projects Gallery | Electrical & Plumbing Work | Shreekumar Builders Coimbatore",
  description:
    "Browse completed electrical and plumbing projects by Shreekumar Builders in Coimbatore — residential, commercial, and industrial. Licensed, quality workmanship.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="gradient-brand py-16 md:py-24" aria-labelledby="projects-page-heading">
        <div className="section-container text-center">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Our Work</p>
          <h1 id="projects-page-heading" className="text-white mb-4">Completed Projects</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Real projects. Real results. Browse our portfolio of residential, commercial, and industrial electrical and plumbing work across Coimbatore.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Projects gallery">
        <div className="section-container">
          <ProjectsClient />
        </div>
      </section>

      <CTASection variant="light" heading="Start Your Project" body="Request a free site visit and written estimate. No obligation." />
    </>
  );
}
