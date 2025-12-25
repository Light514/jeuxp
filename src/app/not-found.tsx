"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-display text-[120px] md:text-[180px] font-bold bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              404
            </span>
          </motion.div>

          <h1 className="font-display text-2xl md:text-3xl text-white mb-4">
            Page non trouvée
          </h1>

          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour continuer votre aventure.
          </p>

          <Link href="/">
            <Button size="lg">
              Retour à l&apos;accueil
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}
