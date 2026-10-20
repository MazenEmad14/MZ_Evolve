"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const InteractiveDemonstrations = dynamic(
  () =>
    import("./InteractiveDemonstrations").then(
      (module) => module.InteractiveDemonstrations,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        role="status"
        className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 text-center text-sm text-[var(--text-secondary)]"
      >
        Loading interactive demonstrations...
      </div>
    ),
  },
);

export const DeferredInteractiveDemonstrations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setShouldLoad(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto my-12">
      {shouldLoad ? (
        <InteractiveDemonstrations />
      ) : (
        <div
          role="status"
          className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 text-center text-sm text-[var(--text-secondary)]"
        >
          Interactive demonstrations load as you reach this section.
        </div>
      )}
    </div>
  );
};
