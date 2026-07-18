"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding gradient-brand" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-blue-200">Real feedback from real Coimbatore customers</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 relative">
            <Quote
              className="absolute top-6 left-6 w-10 h-10 text-white/20"
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6" aria-label={`Rating: ${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-white/20"}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 text-pretty">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-brand border-2 border-white/40 flex items-center justify-center text-white font-bold text-lg">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-blue-200">{t.location}</p>
              </div>
              {t.verified && (
                <span className="ml-auto text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full font-semibold">
                  Verified Customer
                </span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "w-8 h-2.5 bg-amber-400"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
