"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Accordion } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface FAQContentProps {
  faq: Dictionary["faq"];
}

export function FAQContent({ faq }: FAQContentProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              {faq.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              {faq.hero.subtitle}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 border-t border-cyber-gray-light/50">
        <Container size="narrow">
          <div className="space-y-16">
            {faq.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="font-display text-sm uppercase tracking-widest text-gray-500 mb-6">
                  {section.title}
                </h2>
                <Accordion items={section.items} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
