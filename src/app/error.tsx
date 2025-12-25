"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

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
            <span className="font-display text-6xl md:text-8xl font-bold text-neon-magenta">
              Erreur
            </span>
          </motion.div>

          <h1 className="font-display text-2xl md:text-3xl text-white mb-4">
            Une erreur est survenue
          </h1>

          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Quelque chose s&apos;est mal passé. Veuillez réessayer ou retourner à l&apos;accueil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} variant="outline">
              Réessayer
            </Button>
            <Button onClick={() => window.location.href = "/"}>
              Retour à l&apos;accueil
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
