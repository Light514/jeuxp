"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-cyber-gray-light rounded-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={cn(
              "w-full px-6 py-4 text-left flex items-center justify-between",
              "bg-cyber-gray/30 hover:bg-cyber-gray/50 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-inset"
            )}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-white pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-neon-cyan text-2xl flex-shrink-0 font-light"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-400 bg-cyber-dark/50 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
