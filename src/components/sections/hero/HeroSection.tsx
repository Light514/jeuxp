"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroUnicorn } from "./HeroUnicorn";
import { Button } from "@/components/ui";

interface HeroSectionProps {
  announcement: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
}

export function HeroSection({ announcement, tagline, ctaText, ctaHref }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Unicorn Studio Background */}
      <HeroUnicorn jsonFilePath="/hero-scene.json" />

      {/* Bottom Content - Below the face */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 pt-8 bg-gradient-to-t from-cyber-black via-cyber-black/80 to-transparent">
        <div className="flex flex-col items-center px-4">
          {/* Announcement - Above tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-base text-neon-cyan/80 tracking-widest uppercase mb-4"
          >
            {announcement}
          </motion.p>

          {/* Main Tagline - H1 for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center mb-6 max-w-4xl bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent"
          >
            {tagline}
          </motion.h1>

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
      </div>

    </section>
  );
}
