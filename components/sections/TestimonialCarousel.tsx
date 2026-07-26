"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="section-padding gradient-brand" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-graphite mb-3">
            What Our Customers Say
          </h2>
          <p className="text-slate-500">Real feedback from real Coimbatore customers</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id}>
                  <article className="bg-white/80 backdrop-blur-md border border-slate-100/80 rounded-2xl p-8 md:p-10 relative shadow-lg mx-1">
                    <Quote className="absolute top-6 left-6 w-10 h-10 text-slate-100" aria-hidden="true" />

                    <div className="flex gap-1 mb-6" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn("w-5 h-5", i < t.rating ? "text-voltage fill-voltage" : "text-slate-200")}
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
                        <p className="text-sm text-slate-500">{t.location}</p>
                      </div>
                      {t.verified && (
                        <span className="ml-auto text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full font-semibold">
                          Verified Customer
                        </span>
                      )}
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={current === 0}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    i === current ? "w-8 h-2.5 bg-voltage" : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={current === count - 1}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
