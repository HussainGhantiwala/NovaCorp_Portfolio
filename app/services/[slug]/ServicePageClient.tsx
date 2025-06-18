"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { GradientText } from "@/components/gradient-text"
import { AnimatedButton } from "@/components/animated-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Card } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"

interface ServicePageClientProps {
  service: {
    slug: string
    title: string
    description: string
    shortDescription?: string
    category: string
    features: string[]
    technologies: string[]
    process: Array<{
      title: string
      description: string
    }>
    examples?: Array<{
      title: string
      description: string
      image?: string
    }>
    image?: string
  }
}

export function ServicePageClient({ service }: ServicePageClientProps) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="relative bg-black">
      {/* Service Header */}
      <section className="py-16 bg-zinc-950/50">
        <div className="container px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm font-medium text-zinc-300 backdrop-blur-sm">
                  {service.category}
                </span>
              </motion.div>

              <motion.h1 className="text-4xl md:text-5xl font-heading mb-6 text-white" variants={itemVariants}>
                {service.title}
              </motion.h1>

              <motion.p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
                {service.description}
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features and Image Section */}
      <ParallaxSection baseVelocity={3} className="py-24 bg-zinc-950/50">
        <div className="container px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <ScrollReveal>
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-heading mb-8">
                  What's <GradientText>Included</GradientText>
                </h2>

                <div className="mb-12 space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start group cursor-pointer"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="mr-4 h-5 w-5 flex-shrink-0 text-green-500 group-hover:text-green-400 transition-colors duration-300 mt-0.5" />
                      <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300 text-lg">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-4xl md:text-5xl font-heading mb-8">
                  Technologies We <GradientText>Use</GradientText>
                </h2>

                <div className="mb-12 flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-pointer"
                    >
                      <span className="inline-block px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800/50 hover:text-white hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block overflow-hidden rounded-lg"
                >
                  <AnimatedButton
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white relative isolate"
                    glowColor="rgba(168, 85, 247, 0.4)"
                    style={{ clipPath: "inset(0 round 0.5rem)" }}
                  >
                    <Link href="/quote" className="flex items-center relative z-10">
                      Get a Quote for {service.title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </AnimatedButton>
                </motion.div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div variants={itemVariants}>
                <AnimatedCard glowColor="purple" className="h-full">
                  <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group hover:border-zinc-700/50 transition-colors duration-500">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.image || "/placeholder.svg?height=600&width=800"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Card>
                </AnimatedCard>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Process Section */}
      <ParallaxSection baseVelocity={2} className="py-24 bg-zinc-950/50">
        <div className="container px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading mb-16 text-center">
              Our <GradientText>Process</GradientText>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.process.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <AnimatedCard glowColor="cyan" className="h-full" hoverScale={1.05}>
                    <Card className="p-8 bg-zinc-900/50 border-zinc-800 h-full relative overflow-hidden group hover:bg-zinc-900/80 hover:border-zinc-700/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <motion.div
                        className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-400 font-bold text-lg border border-purple-500/30 relative z-10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {index + 1}
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300 relative z-10">
                        {step.title}
                      </h3>

                      <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300 leading-relaxed relative z-10">
                        {step.description}
                      </p>
                    </Card>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Examples Section */}
      {service.examples && service.examples.length > 0 && (
        <ParallaxSection baseVelocity={3} className="py-24 bg-zinc-950/50">
          <div className="container px-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-heading mb-16 text-center">
                Project <GradientText>Examples</GradientText>
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {service.examples.map((example, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <AnimatedCard glowColor="pink" className="h-full" hoverScale={1.05}>
                      <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group hover:border-zinc-700/50 transition-colors duration-500">
                        <div className="relative aspect-video">
                          <Image
                            src={example.image || "/placeholder.svg?height=400&width=600"}
                            alt={example.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <div className="p-8">
                          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                            {example.title}
                          </h3>
                          <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300 leading-relaxed">
                            {example.description}
                          </p>
                        </div>
                      </Card>
                    </AnimatedCard>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      )}

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Ready to get <GradientText>started?</GradientText>
            </h2>

            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's discuss your project and create a tailored solution that meets your specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <AnimatedButton
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white overflow-hidden relative"
                  glowColor="rgba(168, 85, 247, 0.4)"
                >
                  <Link href="/quote" className="flex items-center relative z-10">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get a Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white overflow-hidden relative"
                  glowColor="rgba(6, 182, 212, 0.3)"
                >
                  <Link href="/contact" className="flex items-center relative z-10">
                    Contact Us
                  </Link>
                </AnimatedButton>
              </motion.div>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
                  <h3 className="text-xl font-bold text-white mb-3">Consultation</h3>
                  <p className="text-zinc-300">
                    Schedule a free consultation to discuss your {service.title.toLowerCase()} requirements and goals.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
                  <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
                  <p className="text-zinc-300">
                    We'll develop a comprehensive strategy tailored to your specific business needs and objectives.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
                  <h3 className="text-xl font-bold text-white mb-3">Delivery</h3>
                  <p className="text-zinc-300">
                    Our team will deliver your {service.title.toLowerCase()} with cutting-edge technology and
                    exceptional design.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
