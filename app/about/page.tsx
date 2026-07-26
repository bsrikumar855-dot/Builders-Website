import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Users, Award, Star, CheckCircle } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Shreekumar Builders | Licensed Electricians & Plumbers, Coimbatore",
  description:
    "Learn about Shreekumar Builders — established 2008 in Coimbatore. Licensed electrical and plumbing contractors with 500+ completed projects and a 5-year warranty.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const team = [
  {
    name: "K. Shreekumar",
    role: "Founder & Master Electrician",
    licence: "TN-ELEC-2008-04521",
    experience: "18+ years",
    bio: "Qualified electrical engineer with 18 years of field experience. Holds a Class A Electrical Contractor Licence from the Tamil Nadu Electrical Licensing Board.",
  },
  {
    name: "S. Venkatesh",
    role: "Senior Plumbing Engineer",
    licence: "TN-PLUMB-2010-02314",
    experience: "14+ years",
    bio: "Specialises in commercial plumbing design and large-scale water supply installations. Has led projects for hotels, factories, and apartment complexes across Coimbatore.",
  },
  {
    name: "R. Karthikeyan",
    role: "Electrical Supervisor",
    licence: "TN-ELEC-2015-07832",
    experience: "9+ years",
    bio: "Oversees all on-site electrical teams. Specialises in distribution board design, earthing systems, and industrial electrical installations.",
  },
];

const certifications = [
  "Tamil Nadu Electrical Licensing Board — Class A Contractor",
  "IS 732:2019 Electrical Wiring Installation Compliant",
  "IS 3043:2018 Earthing Compliant",
  "Fully Insured — Public Liability & Employer Liability",
  "5-Year Workmanship Warranty on All Installations",
];

const milestones = [
  { year: 2008, event: "Founded in Coimbatore with a team of 3" },
  { year: 2012, event: "Expanded to commercial electrical work" },
  { year: 2015, event: "Added plumbing division" },
  { year: 2019, event: "Completed 250th project" },
  { year: 2022, event: "Industrial sector expansion" },
  { year: 2024, event: "500+ projects milestone" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-brand py-16 md:py-24" aria-labelledby="about-heading">
        <div className="section-container text-center max-w-3xl mx-auto">
          <p className="text-copper text-xs font-bold uppercase tracking-widest mb-3">About Us</p>
          <h1 id="about-heading" className="text-graphite mb-4">
            Coimbatore&apos;s Trusted Electrical & Plumbing Contractors Since 2008
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            We are a family-run business built on honest advice, quality workmanship, and long-term relationships with our customers. Every job — from fitting a socket to wiring a factory — gets the same standard of care.
          </p>
        </div>
      </section>

      {/* Story + Certifications */}
      <section className="section-padding section-alt" aria-labelledby="story-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="story-heading" className="text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Shreekumar Builders was founded in 2008 by K. Shreekumar, a qualified electrical engineer who saw that Coimbatore&apos;s homeowners and business owners were being let down by unlicensed contractors cutting corners on safety-critical work.
                </p>
                <p>
                  Starting with residential wiring in RS Puram and Gandhipuram, we grew steadily by delivering on our promises — on time, on budget, and to a standard that stands behind a 5-year warranty.
                </p>
                <p>
                  By 2015 we had added a dedicated plumbing division, recognising that our customers needed the same trustworthy, licensed approach to water supply and drainage. Today we are a team of 12 — electricians, plumbers, and supervisors — serving residential, commercial, and industrial clients across Coimbatore.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl border border-slate-100 p-7">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                Licences & Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {cert}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs text-slate-500">Licence number visible on every quote and invoice. Customers can verify with the Tamil Nadu Electrical Licensing Board.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" aria-labelledby="timeline-heading">
        <div className="section-container max-w-3xl">
          <h2 id="timeline-heading" className="text-slate-900 text-center mb-10">Our Journey</h2>
          <div className="relative pl-6 border-l-2 border-blue-100 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[1.75rem] w-5 h-5 rounded-full gradient-brand border-2 border-white" />
                <p className="text-xs font-bold text-blue-700 mb-1">{m.year}</p>
                <p className="text-slate-700 font-medium">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-alt" aria-labelledby="team-heading">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 id="team-heading" className="text-slate-900 mb-3">Meet the Team</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Licensed professionals with decades of combined experience in Coimbatore.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-slate-100 p-6 text-center">
                <div className="w-16 h-16 rounded-full gradient-brand flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                <p className="text-blue-700 text-sm font-semibold mb-1">{member.role}</p>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" />{member.experience}</span>
                  <span>Lic: {member.licence}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" heading="Work With an Honest, Licensed Team" body="Call us for a free, no-obligation estimate. We will tell you exactly what needs doing and what it will cost — no surprises." />
    </>
  );
}
