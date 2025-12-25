"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { Icon } from "@/components/shared";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const contactSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  eventType: z.string().min(1, "Type d'événement requis"),
  participants: z.string().min(1, "Nombre de participants requis"),
  message: z.string().optional(),
  honeypot: z.string().max(0), // Anti-spam
});

type ContactFormData = z.infer<typeof contactSchema>;

interface GroupsEventsContentProps {
  groupsEvents: Dictionary["groupsEvents"];
}

export function GroupsEventsContent({ groupsEvents }: GroupsEventsContentProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      eventType: "birthday",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.honeypot) return;

    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          eventType: data.eventType,
          participants: data.participants,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

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
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="text-neon-cyan text-5xl mb-4">✓</div>
                  <h3 className="font-display text-xl text-white mb-2">
                    Message envoyé!
                  </h3>
                  <p className="text-gray-400">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="absolute -left-[9999px]"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        {groupsEvents.form.fields.name}
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        className={`w-full px-0 py-3 bg-transparent border-b text-white focus:outline-none transition-colors ${
                          errors.name ? "border-red-500" : "border-cyber-gray-light focus:border-neon-cyan"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        {groupsEvents.form.fields.email}
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className={`w-full px-0 py-3 bg-transparent border-b text-white focus:outline-none transition-colors ${
                          errors.email ? "border-red-500" : "border-cyber-gray-light focus:border-neon-cyan"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        {groupsEvents.form.fields.eventType}
                      </label>
                      <select
                        {...register("eventType")}
                        className="w-full px-0 py-3 bg-transparent border-b border-cyber-gray-light text-white focus:border-neon-cyan focus:outline-none transition-colors"
                      >
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
                        {...register("participants")}
                        className={`w-full px-0 py-3 bg-transparent border-b text-white focus:outline-none transition-colors ${
                          errors.participants ? "border-red-500" : "border-cyber-gray-light focus:border-neon-cyan"
                        }`}
                      />
                      {errors.participants && (
                        <p className="text-red-500 text-xs mt-1">{errors.participants.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      {groupsEvents.form.fields.message}
                    </label>
                    <textarea
                      rows={4}
                      {...register("message")}
                      className="w-full px-0 py-3 bg-transparent border-b border-cyber-gray-light text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="px-8 py-3 bg-neon-cyan text-cyber-black font-display font-semibold uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === "loading" ? "Envoi..." : groupsEvents.form.submit}
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
