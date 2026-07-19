"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

export type SignatureLineVariant = "circuit" | "pipe" | "perimeter";

interface SignatureLineProps {
  variant?: SignatureLineVariant;
  /** Scroll-scrubbed circuit->pipe morph. Reserve for the Services page section transition. */
  morph?: boolean;
  /** Delay (seconds) before the trace-in starts — used to slot into an orchestrated sequence like HeroReveal. */
  delay?: number;
  className?: string;
}

const VIEWBOX = "0 0 420 200";

// Both paths share the identical command sequence (M + 5 C) and anchor
// points — only control points differ — so framer-motion's string
// interpolation can morph one into the other without distortion.
const CIRCUIT_PATH =
  "M 20,130 C 60,130 100,130 140,130 C 140,103.33 140,76.67 140,50 C 186.67,50 233.33,50 280,50 C 280,83.33 280,116.67 280,150 C 320,150 360,150 400,150";

const PIPE_PATH =
  "M 20,130 C 60,130 128.7,141.3 140,130 C 151.3,118.7 128.7,61.3 140,50 C 151.3,38.7 268.7,38.7 280,50 C 291.3,61.3 268.7,138.7 280,150 C 291.3,161.3 360,150 400,150";

// Traces a closed boundary matching the layout box but keeps the M + 5 C sequence to align points
const PERIMETER_PATH =
  "M 140,50 C 186.67,50 233.33,50 280,50 C 280,83.33 280,116.67 280,150 C 233.33,150 186.67,150 140,150 C 140,116.67 140,83.33 140,50 C 140,50 140,50 140,50";

const JOINTS = [
  { x: 140, y: 130 },
  { x: 140, y: 50 },
  { x: 280, y: 50 },
  { x: 280, y: 150 },
];

const PERIMETER_JOINTS = [
  { x: 140, y: 50 },
  { x: 280, y: 50 },
  { x: 280, y: 150 },
  { x: 140, y: 150 },
];

const VOLTAGE = "#F4A83C";
const COPPER = "#B5652E";
const SECURITY_ACCENT = "#3D9970";

export default function SignatureLine({ variant = "circuit", morph = false, delay = 0, className }: SignatureLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(svgRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const morphedPath = useTransform(scrollYProgress, [0.35, 0.65], [CIRCUIT_PATH, PIPE_PATH]);
  const morphedStroke = useTransform(scrollYProgress, [0.35, 0.65], [VOLTAGE, COPPER]);
  const jointOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [1, 0.5, 0]);
  const flangeOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 0.5, 1]);

  const isMorphing = morph && !shouldReduceMotion;
  const staticPath = variant === "circuit" ? CIRCUIT_PATH : variant === "pipe" ? PIPE_PATH : PERIMETER_PATH;
  const staticStroke = variant === "circuit" ? VOLTAGE : variant === "pipe" ? COPPER : SECURITY_ACCENT;

  const traced = shouldReduceMotion ? true : isMorphing ? true : isInView;

  const activeJoints = variant === "perimeter" ? PERIMETER_JOINTS : JOINTS;

  return (
    <div ref={containerRef} className={className}>
      <svg
        ref={svgRef}
        viewBox={VIEWBOX}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d={isMorphing ? morphedPath : staticPath}
          stroke={isMorphing ? morphedStroke : staticStroke}
          strokeWidth={4}
          strokeLinecap="round"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
          animate={{ pathLength: traced ? 1 : 0 }}
          transition={
            isMorphing
               ? { duration: 0 }
              : { duration: shouldReduceMotion ? 0.01 : 1.6, delay: shouldReduceMotion ? 0 : delay, ease: [0.65, 0, 0.35, 1] }
          }
        />

        {/* Junction markers: squares (circuit nodes) <-> circles (pipe flanges) <-> camera-nodes */}
        {activeJoints.map((p, i) => (
          <g key={i}>
            {variant === "circuit" && (
              <motion.rect
                x={p.x - 4}
                y={p.y - 4}
                width={8}
                height={8}
                fill={VOLTAGE}
                style={{ opacity: isMorphing ? jointOpacity : 1 }}
              />
            )}
            {variant === "pipe" && (
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={5}
                fill={COPPER}
                style={{ opacity: isMorphing ? flangeOpacity : 1 }}
              />
            )}
            {variant === "perimeter" && (
              <motion.g
                initial={{ scale: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ scale: traced ? 1 : 0, opacity: traced ? 1 : 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : delay + 1.2,
                  duration: shouldReduceMotion ? 0.01 : 0.4,
                }}
              >
                {/* Camera-node visual structure: outer ring + inner lens + little pointing camera line */}
                <circle cx={p.x} cy={p.y} r={6} stroke={SECURITY_ACCENT} strokeWidth={1.5} fill="#FAF8F5" />
                <circle cx={p.x} cy={p.y} r={2.5} fill={SECURITY_ACCENT} />
                <line
                  x1={p.x}
                  y1={p.y}
                  x2={p.x + (i % 2 === 0 ? 3.5 : -3.5)}
                  y2={p.y + (i < 2 ? 3.5 : -3.5)}
                  stroke={SECURITY_ACCENT}
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              </motion.g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
