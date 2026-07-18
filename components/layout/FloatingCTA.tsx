"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function FloatingCTA() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPast && !footerVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.8 }}
          transition={shouldReduceMotion ? { duration: 0.01 } : { type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 lg:hidden"
          aria-label="Quick contact options"
        >
          {/* WhatsApp */}
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20need%20help%20with%20electrical%2Fplumbing%20work.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-warm-white shadow-xl flex items-center justify-center transition-colors active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>

          {/* Call */}
          <Link
            href={`tel:${siteConfig.phone}`}
            aria-label={`Call us at ${siteConfig.phone}`}
            className="relative w-14 h-14 rounded-full bg-voltage text-graphite shadow-xl flex items-center justify-center transition-transform active:scale-95"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-voltage animate-ping opacity-30 motion-reduce:hidden"
            />
            <Phone className="w-6 h-6 relative" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
