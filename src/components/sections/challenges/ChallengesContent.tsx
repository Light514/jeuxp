"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const pillarIcons: Record<string, string> = {
  challenges: "/images/icons/target.webp",
  time: "/images/icons/stopwatch.webp",
  xp: "/images/icons/xp.webp",
  infinite: "/images/icons/infinity.webp",
  cyberpunk: "/images/icons/cyberpunk-1.webp",
};

interface ChallengesContentProps {
  challenges: Dictionary["challenges"];
}

export function ChallengesContent({ challenges }: ChallengesContentProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-neon-cyan uppercase tracking-widest mb-4"
            >
              {challenges.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              {challenges.subtitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              {challenges.intro}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Pillars Section */}
      <section className="py-20 border-y border-cyber-gray-light/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 text-center">
            {challenges.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-default"
              >
                {pillarIcons[pillar.id] && (
                  <motion.div
                    className="w-24 h-24 mb-5 relative"
                    whileHover={{
                      filter: "drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={pillarIcons[pillar.id]}
                      alt={pillar.title}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                )}
                <h3 className="font-display text-xl text-white group-hover:text-neon-cyan transition-colors duration-300 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenges Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden mb-4">
                  <Image
                    src={`/images/challenges/${room.image}`}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  {/* Hover glow border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-neon-cyan/50 pointer-events-none" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-white group-hover:text-neon-cyan transition-colors duration-300">
                      {room.name}
                    </h3>
                    <span className="text-xs text-gray-500">{room.players}</span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{room.description}</p>
                  <div className="flex gap-3 pt-1">
                    {room.type.map((tag) => (
                      <span key={tag} className="text-xs text-neon-cyan">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="py-20 border-t border-cyber-gray-light/50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                {challenges.location.title}
              </p>
              <p className="font-display text-2xl text-white">{challenges.location.mall}</p>
              <p className="text-gray-400 mt-1">{challenges.location.address}</p>
            </div>
            <a
              href="https://maps.app.goo.gl/V4vVvQNDdLXUpo9n8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-white transition-colors text-sm"
            >
              {challenges.location.mapLink} &rarr;
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
