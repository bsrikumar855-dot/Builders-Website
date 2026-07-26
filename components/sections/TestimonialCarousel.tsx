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
          <h2 id="testimonials-heading" className="text-graphite mb-3">
            What Our Customers Say
          </h2>
          <p className="text-slate-body">Real feedback from real Coimbatore customers</p>
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
                className="snap-center shrink-0 w-full bg-white/80 backdrop-blur-md border border-warm-white/80 rounded-2xl p-8 md:p-10 relative shadow-lg"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-warm-white" aria-hidden="true" />

                <div className="flex gap-1 mb-6" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn("w-5 h-5", i < t.rating ? "text-voltage fill-voltage" : "text-graphite/10")}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-graphite leading-relaxed mb-8 text-pretty">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-graphite flex items-center justify-center text-warm-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-graphite">{t.name}</p>
                    <p className="text-sm text-slate-body">{t.location}</p>
                  </div>
                  {t.verified && (
                    <span className="ml-auto text-xs bg-security-accent/10 text-security-accent border border-security-accent/20 px-3 py-1 rounded-full font-semibold">
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
              className="w-10 h-10 rounded-full bg-white hover:bg-warm-white disabled:opacity-30 disabled:cursor-not-allowed border border-graphite/10 flex items-center justify-center text-graphite transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm"
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
                    i === activeIndex ? "w-8 h-2.5 bg-voltage" : "w-2.5 h-2.5 bg-graphite/10 hover:bg-slate-body/50"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === testimonials.length - 1}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white hover:bg-warm-white disabled:opacity-30 disabled:cursor-not-allowed border border-graphite/10 flex items-center justify-center text-graphite transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
