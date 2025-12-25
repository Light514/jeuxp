"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

const glitchMessages = [
  "ERREUR_SYSTÈME",
  "ACCÈS_REFUSÉ",
  "DONNÉES_CORROMPUES",
  "SIGNAL_PERDU",
  "404_NOT_FOUND",
];

const crypticLines = [
  "> Connexion interrompue...",
  "> Recherche du chemin...",
  "> Échec de la synchronisation",
  "> Cette réalité n'existe pas",
  "> Retour au point d'origine recommandé",
];

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404");
  const [showCryptic, setShowCryptic] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  // Glitch effect on 404
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchText(glitchMessages[Math.floor(Math.random() * glitchMessages.length)]);
        setTimeout(() => setGlitchText("404"), 150);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Show cryptic lines progressively
  useEffect(() => {
    const timeout = setTimeout(() => setShowCryptic(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showCryptic) {
      crypticLines.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, index]);
        }, index * 400);
      });
    }
  }, [showCryptic]);

  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center relative overflow-hidden">
      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.1) 2px, rgba(0,240,255,0.1) 4px)",
        }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          {/* Glitchy 404 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 relative"
          >
            <span
              className="font-display text-[100px] md:text-[160px] font-bold bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent relative"
              style={{
                textShadow: "0 0 40px rgba(0,240,255,0.5), 0 0 80px rgba(255,0,255,0.3)",
              }}
            >
              {glitchText}
            </span>
            {/* Glitch layers */}
            <span
              className="absolute inset-0 font-display text-[100px] md:text-[160px] font-bold text-neon-cyan/20 blur-sm"
              style={{ transform: "translate(2px, 2px)" }}
              aria-hidden="true"
            >
              404
            </span>
            <span
              className="absolute inset-0 font-display text-[100px] md:text-[160px] font-bold text-neon-magenta/20 blur-sm"
              style={{ transform: "translate(-2px, -2px)" }}
              aria-hidden="true"
            >
              404
            </span>
          </motion.div>

          <h1 className="font-display text-2xl md:text-3xl text-white mb-4 uppercase tracking-wider">
            Zone Inaccessible
          </h1>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Cette section du système est corrompue ou n&apos;existe pas dans cette dimension.
          </p>

          {/* Cryptic terminal lines */}
          {showCryptic && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 text-left max-w-sm mx-auto font-mono text-sm"
            >
              {crypticLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={visibleLines.includes(index) ? { opacity: 1, x: 0 } : {}}
                  className={index === crypticLines.length - 1 ? "text-neon-cyan" : "text-gray-500"}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}

          <Link href="/">
            <Button size="lg" className="group">
              <span className="group-hover:animate-pulse">Réinitialiser</span>
            </Button>
          </Link>

          {/* Easter egg hint */}
          <p className="mt-8 text-xs text-gray-600 font-mono">
            [SYS_LOG] Agent perdu? Le chemin commence toujours à l&apos;origine.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
