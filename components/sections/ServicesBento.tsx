import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import ServiceCard from "./ServiceCard";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

// Tile size is mapped from actual demand signal (data/services.ts), not
// picked arbitrarily:
// - wiring-rewiring: highest ticket value + most-searched electrical job,
//   already flagged `featured` -> large 2x2 flagship tile.
// - pipe-leak-repair: emergency-driven, highest call-volume plumbing job,
//   already flagged `featured` -> wide 2x1 flagship tile.
// - bathroom-kitchen-plumbing: also `featured`, high-frequency renovation
//   driver -> tall 1x2 tile.
// `cctv-smart-home` is also `featured` in the data but deliberately stays
// standard-size here: it's a new-construction upsell, not an urgent-demand
// driver, so giving it a flagship tile would dilute the "this is what
// breaks and we fix it fast" signal the sizing is meant to send.
const TILE_SPANS: Record<string, string> = {
  "wiring-rewiring": "md:col-span-2 md:row-span-2",
  "pipe-leak-repair": "md:col-span-2",
  "bathroom-kitchen-plumbing": "md:row-span-2",
};

interface ServicesBentoProps {
  services: Service[];
  className?: string;
}

export default function ServicesBento({ services, className }: ServicesBentoProps) {
  return (
    <StaggerGroup
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:auto-rows-[22rem] md:grid-flow-row-dense",
        className
      )}
    >
      {services.map((service) => {
        const span = TILE_SPANS[service.slug];
        return (
          <StaggerItem key={service.slug} className={span}>
            <ServiceCard service={service} variant={span ? "featured" : "default"} className="h-full" />
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
