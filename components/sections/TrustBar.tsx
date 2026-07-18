import { Shield, Award, Clock, ThumbsUp, Wrench, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const trustItems = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    value: siteConfig.licence,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: Award,
    title: "5-Year Workmanship Warranty",
    value: "On all installations",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "Est. 2008",
    value: `${new Date().getFullYear() - siteConfig.established}+ Years Experience`,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: ThumbsUp,
    title: "500+ Projects Completed",
    value: "Residential & Commercial",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    icon: Wrench,
    title: "ISI-Certified Materials",
    value: "IS-marked cable & fittings",
    color: "text-slate-700",
    bg: "bg-slate-50",
  },
  {
    icon: Star,
    title: "24/7 Emergency Service",
    value: "No extra call-out charge",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-100 py-10" aria-label="Trust signals">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <p className="text-xs font-bold text-slate-900 leading-tight">{item.title}</p>
                <p className="text-xs text-slate-500">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
