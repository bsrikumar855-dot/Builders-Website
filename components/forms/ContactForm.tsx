"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number").max(15),
  email: z.string().email("Enter a valid email address").or(z.literal("")),
  service: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Please describe your requirement (min 10 characters)"),
  // Honeypot — should remain empty
  website: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  "House Wiring / Rewiring",
  "Distribution Board Upgrade",
  "Earthing & Lightning Protection",
  "Power Points & Sockets",
  "CCTV & Smart Home Wiring",
  "Generator & UPS",
  "Pipe Leak Detection & Repair",
  "Bathroom & Kitchen Plumbing",
  "Water Tank & Pump",
  "Drain Cleaning & Unblocking",
  "Water Heater Installation",
  "Commercial Plumbing",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle className="w-16 h-16 text-security-accent" />
        <h3 className="text-xl font-bold text-graphite">Message Received!</h3>
        <p className="text-slate-body max-w-sm">
          We will call you back within 2 business hours. For urgent matters, please call us directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-2"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={cn("form-input", errors.name && "border-red-400")}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />{errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={cn("form-input", errors.phone && "border-red-400")}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />{errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label">
          Email Address <span className="text-slate-body/50 font-normal">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={cn("form-input", errors.email && "border-red-400")}
          {...register("email")}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="form-label">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          className={cn("form-input", errors.service && "border-red-400")}
          {...register("service")}
          defaultValue=""
        >
          <option value="" disabled>Select a service…</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.service.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Describe Your Problem or Requirement <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="E.g. 'The main switch keeps tripping when we turn on the AC. It's a 2 BHK flat on the 3rd floor.'"
          className={cn("form-input resize-none", errors.message && "border-red-400")}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-slate-body/50 text-center">
        We typically respond within 2 business hours. For emergencies, please call us.
      </p>
    </form>
  );
}
