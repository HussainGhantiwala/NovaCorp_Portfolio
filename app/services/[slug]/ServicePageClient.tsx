"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { GradientText } from "@/components/gradient-text";
import { AnimatedButton } from "@/components/animated-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ParallaxSection } from "@/components/parallax-section";
import { AnimatedCard } from "@/components/animated-card";

interface ServicePageClientProps {
  service: {
    slug: string;
    title: string;
    description: string;
    shortDescription?: string;  
    category: string;
    features: string[];
    technologies: string[];
    process: Array<{
      title: string;
      description: string;
    }>;
    examples?: Array<{
      title: string;
      description: string;
      image?: string;
    }>;
    image?: string;
  };
}

export function ServicePageClient({ service }: ServicePageClientProps) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <div className="relative bg-black min-h-screen">

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div variants={itemVariants} className="mb-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-sm font-medium text-purple-300 backdrop-blur-sm">
                  <Zap className="w-4 h-4" />
                  {service.category}
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-heading mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                variants={itemVariants}
              >
                {service.title}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-12"
                variants={itemVariants}
              >
                {service.description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <AnimatedButton
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                  glowColor="rgba(168, 85, 247, 0.4)"
                >
                  <Link href="/quote" className="flex items-center">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <ParallaxSection baseVelocity={2} className="py-24 relative">
        <div className="container px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading mb-6">
                What's <GradientText>Included</GradientText>
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Comprehensive solutions designed to exceed your expectations
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4 md:gap-6">
                {service.features.map((feature, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <motion.div
                      className="flex items-center gap-4 p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 group"
                      whileHover={{ x: 8, scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:text-green-400 transition-colors duration-300" />
                      <span className="text-lg text-zinc-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Technologies Section */}
      <ParallaxSection
        baseVelocity={3}
        className="py-24 bg-zinc-950/30 relative"
      >
        <div className="container px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading mb-6">
                Technologies We <GradientText>Master</GradientText>
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Cutting-edge tools and frameworks for superior results
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="cursor-pointer group"
                >
                  <div className="px-6 py-4 rounded-full bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    <span className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Process Section */}
      <ParallaxSection baseVelocity={2} className="py-24 relative">
        <div className="container px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading mb-6">
                Our <GradientText>Process</GradientText>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8 md:grid-cols-3">
                {service.process.map((step, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <div className="text-center group">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="container px-4 text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <motion.div className="mb-8" whileHover={{ scale: 1.05 }}>
                <Rocket className="w-16 h-16 mx-auto text-purple-400 mb-8" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-heading mb-8">
                Ready to <GradientText>Launch?</GradientText>
              </h2>

              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Let's transform your vision into reality with cutting-edge
                technology and exceptional design.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatedButton
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-lg px-8 py-4"
                    glowColor="rgba(168, 85, 247, 0.4)"
                  >
                    <Link href="/quote" className="flex items-center">
                      <Sparkles className="mr-3 h-6 w-6" />
                      Get Your Custom Quote
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                  </AnimatedButton>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatedButton
                    size="lg"
                    variant="outline"
                    className="border-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white text-lg px-8 py-4"
                    glowColor="rgba(6, 182, 212, 0.3)"
                  >
                    <Link href="/contact" className="flex items-center">
                      Let's Talk
                    </Link>
                  </AnimatedButton>
                </motion.div>
              </div>

              {/* Final Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollReveal delay={0.1}>
                  <AnimatedCard glowColor="purple" hoverScale={1.02}>
                    <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-purple-400">
                          1
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        Free Consultation
                      </h3>
                      <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                        Discuss your {service.title.toLowerCase()} requirements
                        and explore possibilities together.
                      </p>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <AnimatedCard glowColor="cyan" hoverScale={1.02}>
                    <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-cyan-400">
                          2
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        Custom Strategy
                      </h3>
                      <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                        We craft a tailored approach that aligns perfectly with
                        your business objectives.
                      </p>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <AnimatedCard glowColor="pink" hoverScale={1.02}>
                    <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-pink-400">
                          3
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                        Premium Delivery
                      </h3>
                      <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                        Experience exceptional {service.title.toLowerCase()}{" "}
                        with cutting-edge technology and design.
                      </p>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
