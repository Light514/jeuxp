"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => Promise<void>;
      destroy: () => void;
    };
  }
}

interface HeroUnicornProps {
  projectId: string;
  fallbackImage?: string;
}

export function HeroUnicorn({
  projectId,
  fallbackImage = "/images/challenges/toxic.webp",
}: HeroUnicornProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "loading";

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setStatus("error"); // Show fallback for accessibility
      return;
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setStatus("error");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Load Unicorn Studio embed script
    const script = document.createElement("script");
    script.src = "https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js";
    script.async = true;

    script.onload = () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.init()
          .then(() => {
            setStatus("ready");
          })
          .catch(() => {
            setStatus("error");
          });
      } else {
        setStatus("error");
      }
    };

    script.onerror = () => {
      setStatus("error");
    };

    document.head.appendChild(script);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy();
      }
      // Clean up script
      const existingScript = document.querySelector(
        'script[src*="unicornStudio"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Show fallback image for reduced motion or errors
  if (prefersReducedMotion || status === "error") {
    return (
      <div className="absolute inset-0">
        <Image
          src={fallbackImage}
          alt="JeuXP Cyberpunk Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-cyber-black/30" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* Loading state */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-cyber-black flex items-center justify-center z-10"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-gray-400 font-display uppercase tracking-wider">
                Loading experience...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unicorn Studio embed container */}
      <div
        data-us-project={projectId}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-cyber-black/30 pointer-events-none" />
    </div>
  );
}
