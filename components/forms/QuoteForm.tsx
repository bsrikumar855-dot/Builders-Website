"use client";



import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

        <CheckCircle className="w-16 h-16 text-security-accent" />

        <h3 className="text-2xl font-bold text-graphite">Quote Request Received!</h3>

        <p className="text-slate-body max-w-md">

          Thank you! We will review your details and call you within 2 business hours to discuss and schedule a free site visit.

        </p>

        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-2">

          Submit Another Request

        </Button>

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

        <Label htmlFor="url-hp">Leave this empty</Label>

        <Input id="url-hp" tabIndex={-1} autoComplete="off" {...register("url")} />

      </div>



      {/* Section: Contact Details */}

      <div>

        <h3 className="flex items-center gap-2 text-base font-bold text-graphite mb-4">

          <span className="w-7 h-7 rounded-full gradient-brand text-white flex items-center justify-center text-xs font-black">1</span>

          Your Contact Details

        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>

            <Label htmlFor="q-name" className="text-sm font-semibold text-graphite mb-1.5 block">Full Name *</Label>

            <Input id="q-name" type="text" autoComplete="name" placeholder="Your name"

              className={cn("bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2", errors.name && "border-red-400")} {...register("name")} />

            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}

          </div>

          <div>

            <Label htmlFor="q-phone" className="text-sm font-semibold text-graphite mb-1.5 block">Phone Number *</Label>

            <Input id="q-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210"

              className={cn("bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2", errors.phone && "border-red-400")} {...register("phone")} />

            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}

          </div>

          <div>

            <Label htmlFor="q-email" className="text-sm font-semibold text-graphite mb-1.5 block">Email <span className="text-slate-body/50 font-normal">(optional)</span></Label>

            <Input id="q-email" type="email" autoComplete="email" placeholder="you@example.com"

              className="bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2" {...register("email")} />

          </div>

          <div>

            <Label htmlFor="q-address" className="text-sm font-semibold text-graphite mb-1.5 block">Site / Property Address *</Label>

            <Input id="q-address" type="text" placeholder="Flat 3B, XYZ Street, RS Puram"

              className={cn("bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2", errors.address && "border-red-400")} {...register("address")} />

            {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}

          </div>

        </div>

      </div>



      {/* Section: Project Details */}

      <div>

        <h3 className="flex items-center gap-2 text-base font-bold text-graphite mb-4">

          <span className="w-7 h-7 rounded-full gradient-brand text-white flex items-center justify-center text-xs font-black">2</span>

          Project Details

        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>

            <Label htmlFor="q-property" className="text-sm font-semibold text-graphite mb-1.5 block">Property Type *</Label>

            <select id="q-property" className={cn("bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2", errors.propertyType && "border-red-400")}

              defaultValue="" {...register("propertyType")}>

              <option value="" disabled>Select type…</option>

              <option value="residential">Residential (House / Apartment / Villa)</option>

              <option value="commercial">Commercial (Office / Shop / Hotel)</option>

              <option value="industrial">Industrial (Factory / Warehouse)</option>

            </select>

            {errors.propertyType && <p className="mt-1 text-xs text-red-500">{errors.propertyType.message}</p>}

          </div>

          <div>

            <Label htmlFor="q-service" className="text-sm font-semibold text-graphite mb-1.5 block">Service Required *</Label>

            <select id="q-service" className={cn("bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2", errors.service && "border-red-400")}

              defaultValue="" {...register("service")}>

              <option value="" disabled>Select service…</option>

              {serviceOptions.map((opt) => (

                <option key={opt} value={opt}>{opt}</option>

              ))}

            </select>

            {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}

          </div>

          <div>

            <Label htmlFor="q-timeline" className="text-sm font-semibold text-graphite mb-1.5 block">When do you need it? *</Label>

            <select id="q-timeline" className={cn("bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2", errors.timeline && "border-red-400")}

              defaultValue="" {...register("timeline")}>

              <option value="" disabled>Select timeline…</option>

              {timelineOptions.map((opt) => (

                <option key={opt} value={opt}>{opt}</option>

              ))}

            </select>

            {errors.timeline && <p className="mt-1 text-xs text-red-500">{errors.timeline.message}</p>}

          </div>

          <div>

            <Label htmlFor="q-budget" className="text-sm font-semibold text-graphite mb-1.5 block">Approximate Budget <span className="text-slate-body/50 font-normal">(optional)</span></Label>

            <select id="q-budget" className="bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2" defaultValue="" {...register("budget")}>

              <option value="" disabled>Select range…</option>

              {budgetOptions.map((opt) => (

                <option key={opt} value={opt}>{opt}</option>

              ))}

            </select>

          </div>

        </div>

        <div className="mt-4">

          <Label htmlFor="q-description" className="text-sm font-semibold text-graphite mb-1.5 block">Describe the Work Needed *</Label>

          <Textarea id="q-description" rows={5}

            placeholder="Please describe in as much detail as possible — property size, number of rooms, current issues, what you'd like done, etc."

            className={cn("bg-white border-graphite/10 focus-visible:ring-voltage focus-visible:ring-offset-0 focus-visible:ring-2 resize-none", errors.description && "border-red-400")}

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



      <Button type="submit" disabled={status === "loading"}

        variant="voltage" className="w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">

        {status === "loading" ? (

          <><Loader2 className="w-5 h-5 animate-spin" />Submitting…</>

        ) : (

          <><FileText className="w-5 h-5" />Request Free Quote</>

        )}

      </Button>



      <p className="text-xs text-slate-body/50 text-center">

        All estimates are free and carry no obligation. We will call you to arrange a convenient site visit.

      </p>

    </form>

  );

}

