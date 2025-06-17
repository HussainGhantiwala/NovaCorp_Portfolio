"use client"

import { services } from "@/lib/services"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GradientText } from "@/components/gradient-text"
import { AnimatedCard } from "@/components/animated-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedButton } from "@/components/animated-button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function ServiceGrid() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10" />
      
      {/* Animated gradient orbs - positioned to avoid overflow */}
      <motion.div
        className="absolute top-1/4 left-1/8 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/8 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />

      {/* Main container with proper padding */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <ScrollReveal>
          <div className="pt-20 pb-16 text-center">
            <motion.h1 
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our <GradientText>Services</GradientText>
            </motion.h1>
            <motion.p 
              className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We offer comprehensive web solutions tailored to your business needs. From design to development, we've got
              you covered.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((service, index) => {
            const Icon = service.iconComponent
            const glowColors = ["purple", "cyan", "pink"] as const
            const glowColor = glowColors[index % 3]

            return (
              <ScrollReveal key={service.slug} delay={index * 0.1}>
                <AnimatedCard 
                  glowColor={glowColor}
                  className="h-full"
                  hoverScale={1.02}
                >
                  <motion.div
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm h-full flex flex-col group"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Icon with gradient background */}
                    <motion.div 
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.05,
                        background: "linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(6, 182, 212, 0.4))"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors" />
                    </motion.div>

                    <motion.h3 
                      className="mb-3 text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="mb-6 text-sm sm:text-base text-zinc-300 group-hover:text-zinc-200 transition-colors flex-grow leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Button container */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <Link href={`/services/${service.slug}`} className="flex-1">
                        <AnimatedButton
                          variant="secondary"
                          className="w-full bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 hover:text-white border-zinc-700 text-sm"
                          glowColor="rgba(168, 85, 247, 0.3)"
                        >
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </AnimatedButton>
                      </Link>
                      <Link href="/quote">
                        <AnimatedButton
                          variant="outline"
                          className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 text-sm px-4"
                          glowColor="rgba(6, 182, 212, 0.3)"
                        >
                          <Sparkles className="mr-1 h-3 w-3" />
                          Quote
                        </AnimatedButton>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatedCard>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="pb-20">
            <AnimatedCard glowColor="purple" className="w-full">
              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 via-zinc-900/50 to-cyan-900/20 p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
                <motion.h2 
                  className="mb-4 text-2xl sm:text-3xl font-bold text-white text-center"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Need a <GradientText>Custom Solution?</GradientText>
                </motion.h2>
                <p className="mx-auto mb-8 max-w-2xl text-zinc-300 leading-relaxed text-center text-sm sm:text-base">
                  Don't see exactly what you're looking for? We specialize in creating tailored solutions that perfectly match your unique requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact">
                    <AnimatedButton
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white w-full sm:w-auto"
                      glowColor="rgba(168, 85, 247, 0.4)"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Discuss Your Project
                    </AnimatedButton>
                  </Link>
                  <Link href="/portfolio">
                    <AnimatedButton
                      size="lg"
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white w-full sm:w-auto"
                      glowColor="rgba(6, 182, 212, 0.3)"
                    >
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
} 