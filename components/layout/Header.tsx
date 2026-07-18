"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Phone, ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const electrical = services.filter((s) => s.category === "electrical");
  const plumbing = services.filter((s) => s.category === "plumbing");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Shreekumar Builders — Home">
              <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
                S
              </div>
              <div className="leading-tight">
                <p className="font-bold text-slate-900 text-base leading-none">Shreekumar</p>
                <p className="text-xs text-slate-500 font-medium tracking-wide">BUILDERS</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      id="services-menu-btn"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")}
                      />
                    </button>

                    {servicesOpen && (
                      <div
                        role="menu"
                        aria-labelledby="services-menu-btn"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 animate-fade-in"
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-800 mb-3">
                              Electrical
                            </p>
                            <ul className="space-y-1">
                              {electrical.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/services/${s.slug}`}
                                    role="menuitem"
                                    onClick={() => setServicesOpen(false)}
                                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                                  >
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">
                              Plumbing
                            </p>
                            <ul className="space-y-1">
                              {plumbing.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/services/${s.slug}`}
                                    role="menuitem"
                                    onClick={() => setServicesOpen(false)}
                                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 transition-colors"
                                  >
                                    {s.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="text-sm font-semibold text-blue-800 hover:underline"
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-sm font-bold text-blue-800 hover:text-blue-900"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phone}</span>
              </Link>
              <Link href="/quote" className="btn-accent text-sm px-5 py-2.5">
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
