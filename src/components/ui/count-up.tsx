"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export interface CountUpProps {
  value?: number | null;
  to?: number;
  from?: number;
  suffix?: string;
  staticValue?: string;
  duration?: number; // duration in seconds (default: 1.8s)
  delay?: number; // delay in seconds before animation begins (default: 0.1s)
  className?: string;
  inView?: boolean;
}

/**
 * Format a number as an integer with thousand commas (e.g. 50,000).
 */
function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(num));
}

export function CountUp({
  value,
  to,
  from = 0,
  suffix = "",
  staticValue,
  duration = 1.8,
  delay = 0.1,
  className,
  inView: externalInView,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const internalInView = useInView(ref, { once: true, amount: 0.2 });
  const isInView = externalInView !== undefined ? externalInView : internalInView;
  const shouldReduceMotion = useReducedMotion();

  const targetValue = value !== undefined ? value : to ?? null;

  // If this is a static text stat (e.g. "PAN India"), display it directly without animation.
  const isStatic = targetValue === null;

  const [displayValue, setDisplayValue] = useState<number>(from);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (isStatic || targetValue === null) return;

    // Accessibility: Respect prefers-reduced-motion by displaying final value immediately
    if (shouldReduceMotion) {
      setDisplayValue(targetValue);
      setIsComplete(true);
      return;
    }

    if (!isInView) return;

    let rafId: number;
    let timerId: ReturnType<typeof setTimeout>;

    const startAnimation = () => {
      const startTime = performance.now();
      const durationMs = duration * 1000;
      const startVal = from;
      const endVal = targetValue;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // Smooth cubic ease-out for professional deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (endVal - startVal) * eased);

        setDisplayValue(current);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setDisplayValue(endVal);
          setIsComplete(true);
        }
      };

      rafId = requestAnimationFrame(step);
    };

    if (delay > 0) {
      timerId = setTimeout(startAnimation, delay * 1000);
    } else {
      startAnimation();
    }

    return () => {
      if (timerId) clearTimeout(timerId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, isStatic, targetValue, from, duration, delay, shouldReduceMotion]);

  if (isStatic) {
    return <span className={className}>{staticValue}</span>;
  }

  const finalFormatted = formatNumber(targetValue!);
  const currentFormatted = formatNumber(displayValue);

  return (
    <span ref={ref} className={className ? `inline-block ${className}` : "inline-block"}>
      {/* Screen readers and SEO crawlers get the final formatted text immediately */}
      <span className="sr-only">{`${finalFormatted}${suffix}`}</span>

      {/* Visual animated count-up */}
      <span aria-hidden="true">
        {currentFormatted}
        {isComplete ? suffix : ""}
      </span>
    </span>
  );
}
