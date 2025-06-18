"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { FloatingText } from "@/components/floating-text";
import { ParallaxText } from "@/components/parallax-text";
import { GradientText } from "@/components/gradient-text";

type TeamMemberProps = {
  name: string;
  // role: string;
  image: string;
};

const TeamMember = ({ name, image }: TeamMemberProps) => {
  return (
    <motion.div
      className="w-full md:w-64 bg-zinc-900/60 rounded-2xl p-6 text-center border border-zinc-800/50 shadow-md transition-all duration-300"
      whileHover={{ y: -8, scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={`${name}'s profile`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      {/* <p className="text-zinc-400 text-sm">{role}</p> */}
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <h1 className="font-heading text-5xl md:text-7xl mb-6 tracking-tighter text-center">
              About <GradientText>Nova Corp</GradientText>
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Founded with a vision to redefine digital experiences, Nova Corp has evolved into a powerhouse of innovation and creativity.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  We're not just developers; we're digital architects crafting the future of web and SaaS solutions. Our team blends technical expertise with artistic vision to deliver captivating, engaging, and conversion-driven experiences.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  With a client-first approach and an unwavering commitment to excellence, we’ve empowered businesses across industries to establish powerful digital presences and transformative SaaS solutions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="relative h-[450px] rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
                <Image
                  src="/placeholder.svg?height=900&width=600"
                  alt="Nova Corp Office"
                  fill
                  className="object-cover transition-opacity duration-300 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-zinc-950/50 relative">
        <div className="container px-4 mx-auto">
          <FloatingText>
            <h2 className="font-heading text-3xl md:text-5xl mb-16 text-center">
              Our Core <GradientText>Values</GradientText>
            </h2>
          </FloatingText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Innovation", description: "Pushing boundaries and exploring new frontiers in digital experiences." },
              { title: "Excellence", description: "Committing to the highest standards in every project we undertake." },
              { title: "Collaboration", description: "Working closely with clients to bring their vision to life." },
              { title: "Impact", description: "Creating solutions that drive meaningful results for our clients." },
            ].map((value, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <motion.div
                  className="p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 h-full flex flex-col items-center text-center transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-black/80 relative">
        <div className="container px-4 mx-auto">
          <FloatingText>
            <h2 className="font-heading text-3xl md:text-5xl mb-16 text-center">
              Meet Our <GradientText>Team</GradientText>
            </h2>
          </FloatingText>

          <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
            {[
              {
                name: "Hussain Ghantiwala",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Yusuf Z",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Mustafa A",
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Murtaza Sohangpur",
                image: "/placeholder.svg?height=400&width=400"
              }
            ].map((member, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <TeamMember name={member.name} image={member.image} />
              </FadeIn>
            ))}
            {/* <FadeIn delay={0.2}>
              <TeamMember
                name="Mustafa A"
                image="/placeholder.svg?height=400&width=400"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <TeamMember
                name="Yusuf Z"
                image="/placeholder.svg?height=400&width=400"
              />
            </FadeIn>
             <FadeIn delay={0.4}>
              <TeamMember
                name="Hussain Ghantiwala"
                image="/placeholder.svg?height=400&width=400"
              />
            </FadeIn>
            <FadeIn delay={0.5}>
              <TeamMember
                name="Murtaza Sohangpur"
                image="/placeholder.svg?height=400&width=400"
              />
            </FadeIn> */}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 bg-zinc-950/70 overflow-hidden">
        <ParallaxText baseVelocity={-2}>
          INNOVATION • CREATIVITY • EXCELLENCE •
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
           PASSION • DEDICATION • EXPERTISE •
        </ParallaxText>
      </section>
    </div>
  );
}