"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "./animated-button";
import { GradientText } from "./gradient-text";
import { ScrollReveal } from "./scroll-reveal";
import { AnimatedCard } from "./animated-card";

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioItems = [
    {
      title: "Bharat Hydraulics and Engineering Company Website",
      tags: ["Web Development"],
      image: "/our work/bharat-photo.png",
      color: "purple",
      link: "https://bharat-hydraulics.vercel.app/",
    },
    {
      title: "Taha Hardware Website",
      tags: ["Web Development", "Branding"],
      image: "/our work/taha-photo.png",
      color: "cyan",
      link: "https://www.google.com/search?q=taha+hardware&ie=UTF-8",
    },
    {
      title: "Cresa Website",
      tags: ["UI/UX Design", "Web Development"],
      image: "/our work/Cresa.jpg",
      color: "pink",
      link: "https://cresa-web.vercel.app/",
    },
    {
      title: "Accountable",
      tags: ["SaaS", "Development"],
      image: "/our work/Accountable-web.jpg",
      color: "purple",
      link: "https://accountable-web.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-zinc-950/50">
      <div className="container px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Our <GradientText>Work</GradientText>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses
            transform their online presence with cutting-edge solutions.
          </p>
        </ScrollReveal>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((item) => (
            <ScrollReveal key={item.title} delay={0.1}>
              <AnimatedCard
                glowColor={item.color as "purple" | "cyan" | "pink"}
                className="h-full"
                hoverScale={1.02}
              >
                <motion.div
                  variants={itemVariants}
                  className="portfolio-card group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      layout="responsive"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Always visible text section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <motion.h3
                        className="mb-3 text-xl font-bold"
                        whileHover={{
                          color: ["#ffffff", "#a855f7", "#06b6d4", "#ffffff"],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                      >
                        {item.title}
                      </motion.h3>

                      <div className="mb-3 flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="rounded-full bg-zinc-800/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-zinc-300 border border-zinc-700"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(168, 85, 247, 0.2)",
                              borderColor: "rgba(168, 85, 247, 0.4)",
                              color: "#a855f7",
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="relative inline-block rounded-md">
                          <AnimatedButton
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                            glowColor="rgba(168, 85, 247, 0.4)"
                          >
                            View Our Work{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </AnimatedButton>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
