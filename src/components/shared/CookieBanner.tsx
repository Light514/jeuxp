"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "jeuxp-cookie-consent";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-cyber-dark/95 backdrop-blur-sm border border-cyber-gray-light/50 rounded-sm p-5 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-neon-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm text-white mb-2">
                  Cookies
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience.{" "}
                  <Link
                    href="/legal#confidentialite"
                    className="text-neon-cyan hover:underline"
                  >
                    En savoir plus
                  </Link>
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleDecline}
                    className="px-3 py-1.5 text-xs text-gray-400 hover:text-white border border-cyber-gray-light hover:border-gray-500 transition-colors rounded-sm"
                  >
                    Refuser
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-3 py-1.5 text-xs bg-neon-cyan text-cyber-black font-semibold hover:bg-white transition-colors rounded-sm"
                  >
                    Accepter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
