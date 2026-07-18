"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    const child = track?.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.max(0, Math.min(testimonials.length - 1, index)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [testimonials.length]);

  return (
    <section className="section-padding gradient-brand" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-warm-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-warm-white/70">Real feedback from real Coimbatore customers</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div
            ref={trackRef}
            role="region"
            aria-label="Customer testimonials"
            className={cn(
              "flex overflow-x-auto snap-x snap-mandatory gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              !shouldReduceMotion && "scroll-smooth"
            )}
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="snap-center shrink-0 w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 relative"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-white/20" aria-hidden="true" />

                <div className="flex gap-1 mb-6" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn("w-5 h-5", i < t.rating ? "text-voltage fill-voltage" : "text-white/20")}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-warm-white leading-relaxed mb-8 text-pretty">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-brand border-2 border-white/40 flex items-center justify-center text-warm-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-warm-white">{t.name}</p>
                    <p className="text-sm text-warm-white/60">{t.location}</p>
                  </div>
                  {t.verified && (
                    <span className="ml-auto text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full font-semibold">
                      Verified Customer
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed border border-white/20 flex items-center justify-center text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    i === activeIndex ? "w-8 h-2.5 bg-voltage" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === testimonials.length - 1}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed border border-white/20 flex items-center justify-center text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
