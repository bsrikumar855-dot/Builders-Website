import StatCounter from "@/components/motion/StatCounter";
import { siteConfig } from "@/lib/site-config";

export default function TrustBar() {
  const years = new Date().getFullYear() - siteConfig.established;

  return (
    <section className="bg-graphite py-10 md:py-12" aria-label="Trust signals">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center md:text-left text-warm-white/70">
          <StatCounter
            value={years}
            suffix="+"
            label="Years Active"
            valueClassName="text-3xl md:text-4xl text-voltage"
          />
          <StatCounter
            value={500}
            suffix="+"
            label="Jobs Completed"
            valueClassName="text-3xl md:text-4xl text-voltage"
          />
          <StatCounter
            value={siteConfig.licence}
            label="Licence Number"
            valueClassName="text-base md:text-lg text-warm-white"
          />
          <StatCounter
            value="24/7"
            label="Emergency Service"
            valueClassName="text-3xl md:text-4xl text-voltage"
          />
        </div>
      </div>
    </section>
  );
}
