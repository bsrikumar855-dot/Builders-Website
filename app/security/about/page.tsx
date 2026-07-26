import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Users, Award, Star, CheckCircle } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Sabari Security | CCTV & Access Control Specialists Coimbatore",
  description:
    "Learn about Sabari Security Service — established 2012 in Coimbatore. Specialized technicians in CCTV systems, alarms, and enterprise access control.",
  alternates: { canonical: `${siteConfig.url}/security/about` },
};

const team = [
  {
    name: "R. Krishnaswamy",
    role: "Head of Security Integration",
    experience: "15+ years",
    bio: "Certified CCTV network engineer with over 15 years experience in IP video architecture and remote monitoring deployments.",
  },
  {
    name: "M. Saravanan",
    role: "Senior Alarm Systems Installer",
    experience: "10+ years",
    bio: "Specialist in smart security alarms, door interlock networks, and biometric credentials hardware.",
  },
  {
    name: "A. Vinoth",
    role: "CCTV Control Room Supervisor",
    experience: "8+ years",
    bio: "Supervises our 24/7 video monitoring center. Highly trained in incident identification and emergency coordination protocols.",
  },
];

const certifications = [
  "TN Private Security Agencies (Regulation) Act Compliant",
  "Police Verified Security Engineers & Control Room Staff",
  "Authorized Dahua, Hikvision, and Honeywell Installer",
  "Fully Insured for Commercial CCTV & Alarm Deployments",
  "2-Year Equipment Warranty on all Digital IP Installations",
];

const milestones = [
  { year: 2012, event: "Founded as CCTV installation business in Saravanampatti" },
  { year: 2015, event: "Launched 24/7 remote monitoring control room" },
  { year: 2018, event: "Added biometric access control and gate automation" },
  { year: 2021, event: "Expanded to industrial site CCTV contracts" },
  { year: 2025, event: "Over 400 residential and commercial sites secured" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-security-primary text-warm-white py-16 md:py-24" aria-labelledby="about-heading">
        <div className="section-container text-center max-w-3xl mx-auto relative z-10">
          <p className="text-security-accent text-xs font-bold uppercase tracking-widest mb-3">Our Identity</p>
          <h1 id="about-heading" className="text-white mb-4">
            Coimbatore&apos;s Premium Security Systems Integrator Since 2012
          </h1>
          <p className="text-warm-white/80 text-lg leading-relaxed">
            Sabari Security Service is Shreekumar Builders&apos; dedicated security systems brand. We design, install, and support high-spec commercial and residential security architectures with zero compromises.
          </p>
        </div>
      </section>

      {/* Story + Certifications */}
      <section className="section-padding section-alt" aria-labelledby="story-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="story-heading" className="text-graphite mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-body leading-relaxed">
                <p>
                  Sabari Security Service was established in 2012 in response to the growing demand in Coimbatore for professional-grade CCTV and alarm networks. While many local operators offered basic DIY consumer camera setups, home and business owners lacked a partner capable of running secure, tamper-proof security designs.
                </p>
                <p>
                  We began by designing and installing structured CCTV networks for industrial warehouses in Singanallur and commercial storefronts in RS Puram. By utilizing concealed cabling and encrypted data storage runs, we earned a reputation for tamper-proof installations.
                </p>
                <p>
                  Today, Sabari Security Service manages systems for over 400 clients across Coimbatore. Whether a private residential villa or a multi-tenant corporate office block, our approach remains identical: rigorous threat assessments, top-tier equipment, and solid workmanship.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl border border-warm-white p-7">
              <h3 className="text-lg font-bold text-graphite mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-security-accent" />
                Compliance & Quality
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-graphite">
                    <CheckCircle className="w-5 h-5 text-security-accent shrink-0 mt-0.5" />
                    {cert}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-warm-white">
                <p className="text-xs text-slate-body">We perform strict police verification on all staff to ensure complete security integrity and client confidentiality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" aria-labelledby="timeline-heading">
        <div className="section-container max-w-3xl">
          <h2 id="timeline-heading" className="text-graphite text-center mb-10">Our Journey</h2>
          <div className="relative pl-6 border-l-2 border-graphite/10 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[1.75rem] w-5 h-5 rounded-full bg-gradient-to-br from-security-primary to-security-accent border-2 border-white" />
                <p className="text-xs font-bold text-graphite mb-1">{m.year}</p>
                <p className="text-graphite font-medium">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-alt" aria-labelledby="team-heading">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 id="team-heading" className="text-graphite mb-3">Meet the Team</h2>
            <p className="text-slate-body max-w-xl mx-auto">
              Certified security engineers and technicians dedicated to protecting Coimbatore homes and commercial sites.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-warm-white p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-security-primary to-security-accent flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-graphite text-lg">{member.name}</h3>
                <p className="text-graphite text-sm font-semibold mb-1">{member.role}</p>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-body mb-4">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-security-accent fill-security-accent" />{member.experience}</span>
                </div>
                <p className="text-sm text-slate-body leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" heading="Deploy an Uncompromising Security System" body="Contact us for an honest threat survey. We design camera and access setups customized to your actual site layout." />
    </>
  );
}
