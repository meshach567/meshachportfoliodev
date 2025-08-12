"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  rootMargin?: string;
}

export default function LazySection({ children, rootMargin = "200px" }: PropsWithChildren<LazySectionProps>) {
  const { ref, inView } = useInView({ rootMargin, triggerOnce: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) setMounted(true);
  }, [inView]);

  return (
    <div ref={ref}>
      {mounted ? children : (
        <div className="w-full min-h-[200px]" aria-hidden />
      )}
    </div>
  );
}

