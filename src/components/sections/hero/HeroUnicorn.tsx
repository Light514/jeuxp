"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UnicornScene from "unicornstudio-react";

interface HeroUnicornProps {
  jsonFilePath: string;
}

export function HeroUnicorn({ jsonFilePath }: HeroUnicornProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
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

    // Set ready after a short delay to ensure component is mounted
    const timeout = setTimeout(() => {
      if (status === "loading") {
        setStatus("ready");
      }
    }, 2000);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      clearTimeout(timeout);
    };
  }, [status]);

  // Show black screen fallback for reduced motion or errors
  if (prefersReducedMotion || status === "error") {
    return <div className="absolute inset-0 bg-cyber-black" />;
  }

  return (
    <div className="absolute inset-0">
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
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-2 border-neon-cyan border-t-transparent rounded-full"
              />
              <span className="text-sm text-gray-400 font-display uppercase tracking-wider">
                Loading experience...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unicorn Studio React component */}
      <div
        id="hero-3d-container"
        className="absolute inset-0 w-full h-full"
        aria-label="3D visual element"
      >
        <UnicornScene
          jsonFilePath={jsonFilePath}
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-cyber-black/30 pointer-events-none" />
    </div>
  );
}
