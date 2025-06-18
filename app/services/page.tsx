"use client";

import { services } from "@/lib/services";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { GradientText } from "@/components/gradient-text";

export default function ServiceGrid() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-128 h-128 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm font-medium text-zinc-300 backdrop-blur-sm">
              Professional Services
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our <GradientText>Services</GradientText>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-xl text-zinc-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We offer comprehensive web solutions tailored to your business
            needs. From design to development, we've got you covered.
          </motion.p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.iconComponent;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-sm" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800/50 border border-zinc-700 group-hover:border-purple-500/50 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-7 w-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </motion.div>

                  <motion.h3
                    className="mb-4 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="mb-6 text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-3 p-2 -m-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <AnimatedButton
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                        glowColor="rgba(168, 85, 247, 0.6)"
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </AnimatedButton>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <AnimatedButton
                        variant="outline"
                        className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                        glowColor="rgba(6, 182, 212, 0.5)"
                      >
                        <Link href="/quote" className="flex items-center">
                          <Sparkles className="mr-2 h-4 w-4" />
                          Get Quote
                        </Link>
                      </AnimatedButton>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading mb-6 text-white">
              Need a <GradientText>custom solution?</GradientText>
            </h2>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              We create tailored digital experiences that perfectly match your
              unique business requirements.
            </p>
            <div className="flex justify-center px-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatedButton
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg"
                  glowColor="rgba(168, 85, 247, 0.4)"
                >
                  <Link href="/contact" className="flex items-center">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Let's Discuss Your Project
                  </Link>
                </AnimatedButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
