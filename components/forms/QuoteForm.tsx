"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").or(z.literal("")),
  address: z.string().min(5, "Please enter your address"),
  propertyType: z.enum(["residential", "commercial", "industrial"], {
    required_error: "Select a property type",
  }),
  service: z.string().min(1, "Please select a service category"),
  description: z.string().min(15, "Please provide more detail (min 15 characters)"),
  timeline: z.string().min(1, "When do you need this done?"),
  budget: z.string().optional(),
  // Honeypot
  url: z.string().max(0, "Bot detected"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const serviceOptions = [
  "House Wiring / Rewiring",
  "Distribution Board Upgrade",
  "Earthing & Lightning Protection",
  "Power Points & Sockets",
  "CCTV & Smart Home Wiring",
  "Generator & UPS Installation",
  "Pipe Leak Detection & Repair",
  "Bathroom & Kitchen Plumbing",
  "Water Tank & Pump Installation",
  "Drain Cleaning & Unblocking",
  "Water Heater Installation",
  "Commercial Plumbing Project",
  "Full Electrical + Plumbing (New Build)",
  "Other / Not Sure",
];

const timelineOptions = [
  "Emergency — need today",
  "This week",
  "Within 2 weeks",
  "This month",
  "Planning for next 2–3 months",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹50,000",
  "₹50,000 – ₹2,00,000",
  "Over ₹2,00,000",
  "Prefer not to say",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { url: "" },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "quote" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle className="w-16 h-16 text-green-500" />
        <h3 className="text-2xl font-bold text-slate-900">Quote Request Received!</h3>
        <p className="text-slate-500 max-w-md">
          Thank you! We will review your details and call you within 2 business hours to discuss and schedule a free site visit.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-2">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Quote request form"
      className="space-y-6"
    >
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="url-hp">Leave this empty</label>
        <input id="url-hp" tabIndex={-1} autoComplete="off" {...register("url")} />
      </div>

      {/* Section: Contact Details */}
      <div>
        <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-4">
          <span className="w-7 h-7 rounded-full gradient-brand text-white flex items-center justify-center text-xs font-black">1</span>
          Your Contact Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="q-name" className="form-label">Full Name *</label>
            <input id="q-name" type="text" autoComplete="name" placeholder="Your name"
              className={cn("form-input", errors.name && "border-red-400")} {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="q-phone" className="form-label">Phone Number *</label>
            <input id="q-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210"
              className={cn("form-input", errors.phone && "border-red-400")} {...register("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="q-email" className="form-label">Email <span className="text-slate-400 font-normal">(optional)</span></label>
            <input id="q-email" type="email" autoComplete="email" placeholder="you@example.com"
              className="form-input" {...register("email")} />
          </div>
          <div>
            <label htmlFor="q-address" className="form-label">Site / Property Address *</label>
            <input id="q-address" type="text" placeholder="Flat 3B, XYZ Street, RS Puram"
              className={cn("form-input", errors.address && "border-red-400")} {...register("address")} />
            {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}
          </div>
        </div>
      </div>

      {/* Section: Project Details */}
      <div>
        <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-4">
          <span className="w-7 h-7 rounded-full gradient-brand text-white flex items-center justify-center text-xs font-black">2</span>
          Project Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="q-property" className="form-label">Property Type *</label>
            <select id="q-property" className={cn("form-input", errors.propertyType && "border-red-400")}
              defaultValue="" {...register("propertyType")}>
              <option value="" disabled>Select type…</option>
              <option value="residential">Residential (House / Apartment / Villa)</option>
              <option value="commercial">Commercial (Office / Shop / Hotel)</option>
              <option value="industrial">Industrial (Factory / Warehouse)</option>
            </select>
            {errors.propertyType && <p className="mt-1 text-xs text-red-500">{errors.propertyType.message}</p>}
          </div>
          <div>
            <label htmlFor="q-service" className="form-label">Service Required *</label>
            <select id="q-service" className={cn("form-input", errors.service && "border-red-400")}
              defaultValue="" {...register("service")}>
              <option value="" disabled>Select service…</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
          </div>
          <div>
            <label htmlFor="q-timeline" className="form-label">When do you need it? *</label>
            <select id="q-timeline" className={cn("form-input", errors.timeline && "border-red-400")}
              defaultValue="" {...register("timeline")}>
              <option value="" disabled>Select timeline…</option>
              {timelineOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.timeline && <p className="mt-1 text-xs text-red-500">{errors.timeline.message}</p>}
          </div>
          <div>
            <label htmlFor="q-budget" className="form-label">Approximate Budget <span className="text-slate-400 font-normal">(optional)</span></label>
            <select id="q-budget" className="form-input" defaultValue="" {...register("budget")}>
              <option value="" disabled>Select range…</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="q-description" className="form-label">Describe the Work Needed *</label>
          <textarea id="q-description" rows={5}
            placeholder="Please describe in as much detail as possible — property size, number of rooms, current issues, what you'd like done, etc."
            className={cn("form-input resize-none", errors.description && "border-red-400")}
            {...register("description")} />
          {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or call us.
        </p>
      )}

      <button type="submit" disabled={status === "loading"}
        className="btn-accent w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? (
          <><Loader2 className="w-5 h-5 animate-spin" />Submitting…</>
        ) : (
          <><FileText className="w-5 h-5" />Request Free Quote</>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        All estimates are free and carry no obligation. We will call you to arrange a convenient site visit.
      </p>
    </form>
  );
}
