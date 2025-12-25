"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Console Easter Egg - ASCII art and hacker message
export function ConsoleEasterEgg() {
  useEffect(() => {
    const asciiArt = `
%c     ██╗███████╗██╗   ██╗██╗  ██╗██████╗
     ██║██╔════╝██║   ██║╚██╗██╔╝██╔══██╗
     ██║█████╗  ██║   ██║ ╚███╔╝ ██████╔╝
██   ██║██╔══╝  ██║   ██║ ██╔██╗ ██╔═══╝
╚█████╔╝███████╗╚██████╔╝██╔╝ ██╗██║
 ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝
`;

    const hackerMessages = [
      "%c> CONNEXION ÉTABLIE...",
      "%c> BIENVENUE, AGENT.",
      "%c> Tu cherches quelque chose?",
      "%c> Les meilleurs puzzles t'attendent à LaSalle.",
      "%c> ↑↑↓↓←→←→BA pour débloquer le mode glitch ;)",
      "%c> ",
      "%c> Curieux et développeur? On recrute: contact@jeuxp.com",
    ];

    // Log ASCII art
    console.log(asciiArt, "color: #00F0FF; font-weight: bold;");

    // Log hacker messages with delays
    hackerMessages.forEach((msg, i) => {
      setTimeout(() => {
        console.log(msg, "color: #FF00FF;");
      }, 500 + i * 300);
    });
  }, []);

  return null;
}

// Konami Code Hook
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export function useKonamiCode(callback: () => void) {
  const inputSequenceRef = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      inputSequenceRef.current = [...inputSequenceRef.current, e.code].slice(-KONAMI_CODE.length);

      if (inputSequenceRef.current.join(",") === KONAMI_CODE.join(",")) {
        callback();
        inputSequenceRef.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
}

// Glitch Effect Overlay
export function GlitchOverlay({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* Glitch layers */}
          <motion.div
            animate={{
              x: [0, -5, 5, -3, 3, 0],
              opacity: [0.8, 0.5, 0.8, 0.3, 0.8],
            }}
            transition={{ duration: 0.3, repeat: 5 }}
            className="absolute inset-0 bg-neon-cyan/20 mix-blend-screen"
          />
          <motion.div
            animate={{
              x: [0, 5, -5, 3, -3, 0],
              opacity: [0.5, 0.8, 0.3, 0.8, 0.5],
            }}
            transition={{ duration: 0.25, repeat: 6 }}
            className="absolute inset-0 bg-neon-magenta/20 mix-blend-screen"
          />
          {/* Scan lines */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          />
          {/* Glitch text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.span
              animate={{
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  "2px 0 #FF00FF, -2px 0 #00F0FF",
                  "-2px 0 #FF00FF, 2px 0 #00F0FF",
                  "2px 0 #FF00FF, -2px 0 #00F0FF",
                ],
              }}
              transition={{ duration: 0.1, repeat: 15 }}
              className="font-display text-4xl md:text-6xl text-white uppercase tracking-widest"
            >
              SYSTÈME COMPROMIS
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Secret Logo Click Counter
export function useSecretLogoClick(threshold: number = 5) {
  const [clickCount, setClickCount] = useState(0);
  const [activated, setActivated] = useState(false);

  const handleClick = useCallback(() => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= threshold && !activated) {
        setActivated(true);
        console.log("%c🎮 SECRET UNLOCKED: Tu as trouvé l'easter egg!", "color: #FFFF00; font-size: 16px;");
        console.log("%c> Félicitations, Agent. Tu es prêt pour nos défis.", "color: #00F0FF;");
        // Reset after showing
        setTimeout(() => {
          setActivated(false);
          setClickCount(0);
        }, 3000);
      }
      return newCount;
    });

    // Reset after 2 seconds of no clicks
    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  }, [threshold, activated]);

  return { handleClick, activated, clickCount };
}

// Secret Message Popup
export function SecretMessage({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] px-6 py-4 bg-cyber-dark border border-neon-cyan rounded-lg shadow-[0_0_30px_rgba(0,240,255,0.3)]"
        >
          <p className="font-display text-neon-cyan text-sm uppercase tracking-wider">
            Secret Unlocked
          </p>
          <p className="text-white text-lg mt-1">
            Félicitations, Agent! 🎮
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Main Easter Eggs Provider
export function EasterEggsProvider({ children }: { children: React.ReactNode }) {
  const [glitchActive, setGlitchActive] = useState(false);

  // Konami code activates glitch
  useKonamiCode(() => {
    setGlitchActive(true);
    console.log("%c🕹️ KONAMI CODE ACTIVATED!", "color: #FF00FF; font-size: 20px; font-weight: bold;");
    setTimeout(() => setGlitchActive(false), 2000);
  });

  return (
    <>
      <ConsoleEasterEgg />
      <GlitchOverlay active={glitchActive} />
      {children}
    </>
  );
}
