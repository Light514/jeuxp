"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Icon } from "@/components/shared";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface GroupsEventsContentProps {
  groupsEvents: Dictionary["groupsEvents"];
}

export function GroupsEventsContent({ groupsEvents }: GroupsEventsContentProps) {
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
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              {groupsEvents.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              {groupsEvents.intro}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Event Types - Simple list */}
      <section className="py-20 border-t border-cyber-gray-light/50">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {groupsEvents.eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="text-neon-magenta mb-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
                  <Icon name={event.icon} size={28} />
                </div>
                <h3 className="font-display text-white group-hover:text-neon-magenta transition-colors duration-300 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits - Inline list */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-sm uppercase tracking-widest text-gray-500">
                Avantages
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {groupsEvents.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h3 className="font-display text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 border-t border-cyber-gray-light/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl text-white mb-4">
                {groupsEvents.form.title}
              </h2>
              <p className="text-gray-400">{groupsEvents.form.subtitle}</p>
            </div>
            <div className="lg:col-span-8">
              <motion.form
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      {groupsEvents.form.fields.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-3 bg-transparent border-b border-cyber-gray-light text-white focus:border-neon-cyan focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      {groupsEvents.form.fields.email}
                    </label>
                    <input
                      type="email"
                      className="w-full px-0 py-3 bg-transparent border-b border-cyber-gray-light text-white focus:border-neon-cyan focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      {groupsEvents.form.fields.eventType}
                    </label>
                    <select className="w-full px-0 py-3 bg-transparent border-b border-cyber-gray-light text-white focus:border-neon-cyan focus:outline-none transition-colors">
                      {Object.entries(groupsEvents.form.eventOptions).map(
                        ([value, label]) => (
                          <option key={value} value={value} className="bg-cyber-black">
                            {label}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      {groupsEvents.form.fields.participants}
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-0 py-3 bg-transparent border-b border-cyber-gray-light text-white focus:border-neon-cyan focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-2">
                    {groupsEvents.form.fields.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-cyber-gray-light text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-neon-cyan text-cyber-black font-display font-semibold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    {groupsEvents.form.submit}
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
