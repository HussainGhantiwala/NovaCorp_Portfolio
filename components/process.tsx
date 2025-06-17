"use client"

import { useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Palette, Code, Rocket } from "lucide-react"
import { GradientText } from "./gradient-text"
import { ScrollReveal } from "./scroll-reveal"

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // For the light animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  // Transform the scroll progress to the light position (horizontal)
  const lightPosition = useTransform(scrollYProgress, [0, 1], ["0%", "75%"])

  const steps = [
    {
      icon: <Search className="h-6 w-6 text-purple-400" />,
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and target audience to create a strategic foundation.",
    },
    {
      icon: <Palette className="h-6 w-6 text-cyan-400" />,
      title: "Design",
      description:
        "Our designers create intuitive, visually stunning interfaces that align with your brand and engage users.",
    },
    {
      icon: <Code className="h-6 w-6 text-pink-400" />,
      title: "Development",
      description:
        "We build your website using modern technologies and best practices to ensure performance and scalability.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-purple-400" />,
      title: "Launch",
      description:
        "After thorough testing, we deploy your website and provide ongoing support to ensure continued success.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-32 bg-zinc-950/50">
      <div className="container px-4">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Our <GradientText>Process</GradientText>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results for every project.
          </p>
        </ScrollReveal>

        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          <motion.div 
            ref={ref} 
            initial="hidden" 
            animate={inView ? "visible" : "hidden"} 
            variants={containerVariants}
            className="relative"
          >
            {/* Horizontal connection line */}
            <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent hidden md:block">
              {/* Animated light that follows scroll */}
              <motion.div
                style={{
                  left: lightPosition,
                  position: "absolute",
                  width: "120px",
                  height: "2px",
                  background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.6), transparent)",
                  transform: "translateX(-50%)",
                  filter: "blur(1px)",
                }}
              />
            </div>

            {/* Process steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative text-center group"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step number circle */}
                  <div className="relative mx-auto mb-6">
                    <motion.div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 
                        border transition-all duration-300 relative z-10
                        ${hoveredStep === index
                          ? "bg-gradient-to-r from-purple-600 to-cyan-600 border-transparent text-white"
                          : "bg-zinc-900 border-zinc-700 text-zinc-400"
                        }
                      `}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-sm font-semibold">{index + 1}</span>
                    </motion.div>
                    
                    {/* Connecting dots for mobile */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-6 left-6 w-8 h-px bg-zinc-700 md:hidden"></div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center mx-auto transition-all duration-300
                      ${hoveredStep === index 
                        ? "bg-zinc-800 shadow-lg" 
                        : "bg-zinc-900"
                      }
                    `}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Subtle hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: hoveredStep === index 
                        ? "linear-gradient(135deg, rgba(168, 85, 247, 0.02), rgba(6, 182, 212, 0.02))"
                        : "transparent"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}