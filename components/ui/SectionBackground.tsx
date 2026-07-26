"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  src: string;
  alt?: string;
  overlayClassName?: string;
  className?: string;
  priority?: boolean;
}

export function SectionBackground({
  src,
  alt = "Background image",
  overlayClassName = "bg-graphite/85",
  className,
  priority = false,
}: SectionBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 z-0 select-none pointer-events-none overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={80}
        priority={priority}
        className="object-cover object-center"
      />
      <div className={cn("absolute inset-0 transition-opacity duration-500", overlayClassName)} />
    </div>
  );
}
