import Link from "next/link";
import { Home, Phone, Shield, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-warm-white via-white to-warm-white">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* Animated 404 number */}
          <div
            className="font-display font-black text-[160px] md:text-[200px] leading-none select-none mb-2 bg-gradient-to-br from-graphite/10 to-graphite/5 bg-clip-text text-transparent"
            aria-hidden="true"
          >
            404
          </div>

          {/* Brand accent line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[80px] bg-voltage" />
            <div className="w-2 h-2 rounded-full bg-voltage" />
            <div className="h-px flex-1 max-w-[80px] bg-voltage" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-graphite mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-body text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. If you need emergency electrical or plumbing help, call us
            directly.
          </p>

          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button variant="graphite" asChild className="px-7 py-5 text-base">
              <Link href="/">
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
            </Button>
            <Button variant="voltage" asChild className="px-7 py-5 text-base">
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </Link>
            </Button>
          </div>

          {/* Quick links */}
          <div className="border-t border-warm-white pt-8">
            <p className="text-sm font-semibold text-slate-body mb-5 uppercase tracking-widest">
              You might be looking for
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
              {[
                { label: "Electrical Services", href: "/services/electrical" },
                { label: "Plumbing Services", href: "/services/plumbing" },
                { label: "Get a Quote", href: "/quote" },
                { label: "Service Areas", href: "/areas" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm text-slate-body hover:text-graphite hover:bg-graphite/5 rounded-lg px-3 py-2 transition-colors border border-warm-white"
                >
                  <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Security brand link */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-body">
            <Shield className="w-4 h-4 text-security-primary" />
            <span>Looking for CCTV &amp; Security?</span>
            <Link
              href="/security"
              className="text-security-primary font-semibold hover:underline"
            >
              Visit Sabari Security →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
