import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

export default function Footer() {
  const electrical = services.filter((s) => s.category === "electrical");
  const plumbing = services.filter((s) => s.category === "plumbing");

  return (
    <footer className="bg-graphite text-warm-white/70">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <p className="font-bold text-white text-base leading-none">Shreekumar Builders</p>
                <p className="text-xs text-slate-body/50 tracking-wide mt-0.5">Electrical & Plumbing</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-body/50">
              Licensed electrical and plumbing contractors serving Coimbatore and surrounding areas since{" "}
              {siteConfig.established}. Residential and commercial work.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-voltage shrink-0" />
                <span>Licence: {siteConfig.licence}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-voltage shrink-0" />
                <span>Fully Insured · 5-Year Warranty</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-graphite flex items-center justify-center hover:bg-graphite transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-graphite flex items-center justify-center hover:bg-graphite transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Electrical Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Electrical Services
            </h3>
            <ul className="space-y-2.5">
              {electrical.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-body/50 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/electrical" className="text-sm font-semibold text-voltage hover:text-voltage transition-colors">
                  All Electrical →
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white mt-8 mb-5">
              Plumbing Services
            </h3>
            <ul className="space-y-2.5">
              {plumbing.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-body/50 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/plumbing" className="text-sm font-semibold text-voltage hover:text-voltage transition-colors">
                  All Plumbing →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Areas + Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Areas Served
            </h3>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm text-slate-body/50 hover:text-white transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-slate-body">+ surrounding localities</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white mt-8 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Quote", href: "/quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-body/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-voltage/100/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-voltage/100 transition-colors">
                  <Phone className="w-4 h-4 text-voltage group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-body font-medium">Call Us</p>
                  <p className="text-sm font-semibold text-white group-hover:text-voltage transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-graphite flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-graphite transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-body font-medium">Email</p>
                  <p className="text-sm text-slate-body/50 group-hover:text-white transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-graphite flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-slate-body/50" />
                </div>
                <div>
                  <p className="text-xs text-slate-body font-medium">Office</p>
                  <p className="text-sm text-slate-body/50 leading-relaxed">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-graphite flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-slate-body/50" />
                </div>
                <div>
                  <p className="text-xs text-slate-body font-medium">Hours</p>
                  <p className="text-sm text-slate-body/50">{siteConfig.hours.weekdays}</p>
                  <p className="text-sm text-slate-body/50">{siteConfig.hours.sunday}</p>
                  <p className="text-sm font-semibold text-voltage mt-1">{siteConfig.hours.emergency}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-graphite">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-body">
          <p>
            © {new Date().getFullYear()} Shreekumar Builders. All rights reserved. |{" "}
            Licensed Electrical & Plumbing Contractor, Coimbatore, Tamilnadu.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-slate-body/50 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
