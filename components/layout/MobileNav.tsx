"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X, Phone, ChevronRight, Zap, Droplets } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const electrical = services.filter((s) => s.category === "electrical");
  const plumbing = services.filter((s) => s.category === "plumbing");

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-bold text-slate-900">Shreekumar Builders</span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-6" aria-label="Mobile navigation">
          {/* Electrical */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-blue-700" />
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Electrical</p>
            </div>
            <ul className="space-y-1">
              {electrical.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    {s.name}
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plumbing */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-4 h-4 text-cyan-700" />
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Plumbing</p>
            </div>
            <ul className="space-y-1">
              {plumbing.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
                  >
                    {s.name}
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other links */}
          <div className="border-t border-slate-100 pt-4 space-y-1">
            {[
              { label: "All Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "Service Areas", href: "/areas" },
              { label: "Blog", href: "/blog" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {link.label}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer CTAs */}
        <div className="px-6 py-6 border-t border-slate-100 space-y-3">
          <Link
            href={`tel:${siteConfig.phone}`}
            onClick={onClose}
            className="btn-primary w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            Call Now: {siteConfig.phone}
          </Link>
          <Link
            href="/quote"
            onClick={onClose}
            className="btn-accent w-full justify-center"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
