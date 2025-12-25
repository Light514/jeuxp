"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroUnicorn } from "./HeroUnicorn";
import { Button } from "@/components/ui";

interface HeroSectionProps {
  announcement: string;
  ctaText: string;
  ctaHref: string;
}

export function HeroSection({ announcement, ctaText, ctaHref }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Unicorn Studio Background */}
      <HeroUnicorn
        projectId="Va6sWzNQd5xX2lsuqITZ"
        fallbackImage="/images/challenges/toxic.webp"
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-gray/80 backdrop-blur-sm border border-neon-cyan/30 rounded-full">
            <span className="text-neon-yellow">&#10022;</span>
            <span className="text-sm md:text-base font-medium text-white">
              {announcement}
            </span>
            <span className="text-neon-yellow">&#10022;</span>
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href={ctaHref}>
            <Button size="lg" className="text-base md:text-lg">
              {ctaText}
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-neon-cyan/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-neon-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
