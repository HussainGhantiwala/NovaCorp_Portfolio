"use client"

import { useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Palette, Code, Rocket } from "lucide-react"

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

  // Transform the scroll progress to the light position
  const lightPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const steps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and target audience to create a strategic foundation for your project.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design",
      description:
        "Our designers create intuitive, visually stunning interfaces that align with your brand and engage your users.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Development",
      description:
        "We build your website using modern technologies and best practices to ensure performance, security, and scalability.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="bg-muted/10 px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Process</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We follow a proven methodology to deliver exceptional results for every project.
          </p>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-5xl">
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
            {/* Connection line with animated light */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/10 to-primary/10 md:block">
              {/* Animated light that follows scroll */}
              <motion.div
                style={{
                  top: lightPosition,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(0,0,0,0) 100%)",
                  filter: "blur(4px)",
                  opacity: 0.8,
                  position: "absolute",
                  height: "6rem",
                  width: "100%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-32 flex flex-col items-center md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`flex-1 transition-all duration-300 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                  } ${hoveredStep === index ? "scale-105" : ""}`}
                >
                  <div className={`mb-4 flex items-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <div
                      className={`mr-3 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 md:mr-0 md:ml-3 ${
                        hoveredStep === index ? "bg-primary/30 shadow-lg shadow-primary/20" : "bg-primary/10"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div
                  className={`relative my-8 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background transition-all duration-300 ${
                    hoveredStep === index
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-primary text-white"
                  }`}
                >
                  {index + 1}
                  {hoveredStep === index && (
                    <div className="absolute -inset-2 -z-10 animate-pulse rounded-full bg-primary/20 blur-md"></div>
                  )}
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
