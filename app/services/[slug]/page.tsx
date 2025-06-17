import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { services } from "@/lib/services"
import { GradientText } from "@/components/gradient-text"
import { AnimatedCard } from "@/components/animated-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found | Nova Corp",
    }
  }

  return {
    title: `${service.title} | Nova Corp`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background elements similar to home page */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-128 h-128 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <Badge 
                variant="outline" 
                className="border-purple-500/50 text-purple-400 bg-purple-500/10 backdrop-blur-sm"
              >
                {service.category}
              </Badge>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-mono">
              <GradientText>{service.title}</GradientText>
            </h1>
            <p className="max-w-3xl text-xl text-zinc-300 leading-relaxed">{service.description}</p>
          </div>
        </ScrollReveal>

        <div className="mb-16 grid gap-16 md:grid-cols-2">
          <ScrollReveal className="order-2 md:order-1">
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl text-white">
                What's <GradientText>Included</GradientText>
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500 group-hover:text-green-400 transition-colors" />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <h2 className="mb-6 mt-12 text-2xl font-bold md:text-3xl text-white">
                Technologies We <GradientText>Use</GradientText>
              </h2>
              <div className="mb-8 flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-sm bg-zinc-800/50 text-zinc-300 border-zinc-700 hover:bg-zinc-700/50 hover:text-white transition-all cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/quote">
                  <AnimatedButton
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                    glowColor="rgba(168, 85, 247, 0.4)"
                  >
                    Get a Quote for {service.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 md:order-2">
            <AnimatedCard glowColor="purple" className="h-full">
              <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
                <Image
                  src={service.image || "/placeholder.svg?height=600&width=800"}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-white">
              Our <GradientText>Process</GradientText>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {service.process.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <AnimatedCard 
                    glowColor={index % 3 === 0 ? "purple" : index % 3 === 1 ? "cyan" : "pink"}
                    className="h-full"
                  >
                    <motion.div 
                      className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 h-full backdrop-blur-sm group"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-white font-bold border border-purple-500/30"
                        whileHover={{ 
                          scale: 1.1,
                          background: "linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(6, 182, 212, 0.4))"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {index + 1}
                      </motion.div>
                      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors">
                        {step.description}
                      </p>
                    </motion.div>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {service.examples && service.examples.length > 0 && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl text-white">
                Project <GradientText>Examples</GradientText>
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {service.examples.map((example, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <AnimatedCard 
                      glowColor={index % 2 === 0 ? "purple" : "cyan"}
                      className="h-full"
                    >
                      <motion.div 
                        className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={example.image || "/placeholder.svg?height=400&width=600"}
                            alt={example.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {example.title}
                          </h3>
                          <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors">
                            {example.description}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatedCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <AnimatedCard glowColor="purple" className="w-full">
            <div className="rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-900/20 via-zinc-900/50 to-cyan-900/20 p-8 text-center backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl text-white">
                Ready to get <GradientText>started?</GradientText>
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-zinc-300 leading-relaxed">
                Let's discuss your project and create a tailored solution that meets your specific requirements.
              </p>
              <Link href="/quote">
                <AnimatedButton
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                  glowColor="rgba(168, 85, 247, 0.4)"
                >
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </div>
  )
}