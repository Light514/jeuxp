"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Icon } from "@/components/shared";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface AboutContentProps {
  about: Dictionary["about"];
}

export function AboutContent({ about }: AboutContentProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              {about.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neon-cyan"
            >
              {about.hero.slogan}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 border-t border-cyber-gray-light/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-sm uppercase tracking-widest text-gray-500 mb-2">
                {about.mission.title}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-gray-300 text-lg leading-relaxed">
              {about.mission.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Differentiators - Simpler horizontal list */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {about.differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="text-neon-cyan mb-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                  <Icon name={item.icon} size={28} />
                </div>
                <h3 className="font-display text-white group-hover:text-neon-cyan transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="py-20 border-t border-cyber-gray-light/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-sm uppercase tracking-widest text-gray-500 mb-2">
                {about.vision.title}
              </h2>
            </div>
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                {about.vision.content}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
