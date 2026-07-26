import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import BlogClient from "./BlogClient";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog | Electrical & Plumbing Advice for Coimbatore Homeowners | Shreekumar Builders",
  description:
    "Practical electrical and plumbing advice for homeowners in Coimbatore — MCB faults, hidden leaks, rewiring signs, earthing, water heaters, and more from our licensed technicians.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="gradient-brand py-16 md:py-24" aria-labelledby="blog-page-heading">
        <div className="section-container text-center">
          <p className="text-copper text-xs font-bold uppercase tracking-widest mb-3">Homeowner Resources</p>
          <h1 id="blog-page-heading" className="text-graphite mb-4">The Shreekumar Builders Blog</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Straight answers to the electrical and plumbing questions Coimbatore homeowners actually ask us —
            written by the electricians and plumbers who do the work.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Blog articles">
        <div className="section-container">
          <BlogClient />
        </div>
      </section>

      <CTASection
        variant="light"
        heading="Have a Problem Right Now?"
        body="Skip the reading — call us and describe what's happening. We'll tell you honestly whether it can wait or needs a same-day visit."
      />
    </>
  );
}
