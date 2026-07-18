import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-black text-slate-100 leading-none select-none mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          The page you are looking for doesn&apos;t exist. If you need immediate help with an electrical or plumbing problem, call us now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <Link href={`tel:${siteConfig.phone}`} className="btn-accent">
            <Phone className="w-5 h-5" /> Call Now
          </Link>
        </div>
      </div>
    </div>
  );
}
