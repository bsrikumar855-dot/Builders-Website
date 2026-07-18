"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
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

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

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

  // Unscrolled state keeps a soft graphite scrim (not full transparency) so
  // header text stays legible even on the rare page whose top section isn't
  // a dark hero — it still reads as "transparent over hero" everywhere else.
  const navLinkClass = cn(
    "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    scrolled ? "text-slate-body hover:text-graphite hover:bg-graphite/5" : "text-warm-white/90 hover:text-warm-white hover:bg-white/10"
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-warm-white/95 backdrop-blur-md border-b border-graphite/10 shadow-sm"
            : "bg-gradient-to-b from-graphite/55 via-graphite/25 to-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Shreekumar Builders — Home">
              <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center text-warm-white font-display font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
                S
              </div>
              <div className="leading-tight">
                <p className={cn("font-display font-bold text-base leading-none transition-colors", scrolled ? "text-graphite" : "text-warm-white")}>
                  Shreekumar
                </p>
                <p className={cn("text-xs font-medium tracking-wide transition-colors", scrolled ? "text-slate-body" : "text-warm-white/70")}>
                  BUILDERS
                </p>
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
                      className={cn("flex items-center gap-1", navLinkClass)}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          role="menu"
                          aria-labelledby="services-menu-btn"
                          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: EASE }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 origin-top"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-graphite mb-3">
                                Electrical
                              </p>
                              <ul className="space-y-1">
                                {electrical.map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/services/${s.slug}`}
                                      role="menuitem"
                                      onClick={() => setServicesOpen(false)}
                                      className="block px-3 py-2 rounded-lg text-sm text-slate-body hover:bg-voltage/10 hover:text-graphite transition-colors"
                                    >
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-copper mb-3">
                                Plumbing
                              </p>
                              <ul className="space-y-1">
                                {plumbing.map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/services/${s.slug}`}
                                      role="menuitem"
                                      onClick={() => setServicesOpen(false)}
                                      className="block px-3 py-2 rounded-lg text-sm text-slate-body hover:bg-copper/10 hover:text-graphite transition-colors"
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
                              className="text-sm font-semibold text-graphite hover:underline"
                            >
                              View all services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.label} href={link.href!} className={navLinkClass}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-bold font-mono tracking-wide transition-colors rounded-lg px-2 py-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  scrolled ? "text-graphite" : "text-warm-white"
                )}
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phone}</span>
              </Link>
              <Link href="/quote" className="btn-primary text-sm px-5 py-2.5">
                Get a Quote
              </Link>
            </div>

            {/* Mobile: phone always visible + menu toggle */}
            <div className="flex items-center gap-1 lg:hidden">
              <Link
                href={`tel:${siteConfig.phone}`}
                aria-label={`Call us at ${siteConfig.phone}`}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-2 rounded-lg text-xs font-bold font-mono tracking-wide transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  scrolled ? "text-graphite" : "text-warm-white"
                )}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{siteConfig.phone}</span>
              </Link>
              <button
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  scrolled ? "text-graphite hover:bg-graphite/5" : "text-warm-white hover:bg-white/10"
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
