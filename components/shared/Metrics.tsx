"use client";

import React, { useEffect, useRef, useState } from "react";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
};

const metrics: Metric[] = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Projects Shipped", value: 35, suffix: "+" },
  { label: "Happy Clients", value: 18, suffix: "+" },
  { label: "Open Source PRs", value: 50, suffix: "+" },
];

function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const step = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs]);

  return value;
}

export default function Metrics() {
  return (
    <section className="px-4 lg:px-8 mt-16">
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4">
        {metrics.map((m) => (
          <MetricCard key={m.label} label={m.label} value={m.value} suffix={m.suffix} />
        ))}
      </div>
    </section>
  );
}

function MetricCard({ label, value, suffix }: Metric) {
  const count = useCountUp(value);
  return (
    <div className="col-span-6 md:col-span-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="text-4xl font-bold text-white">
          {count}
          {suffix}
        </div>
        <div className="mt-2 text-sm text-gray-300">{label}</div>
      </div>
    </div>
  );
}


