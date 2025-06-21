"use client"

import { useState } from "react"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TeamMembers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Track which card is flipped
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const team = [
    {
      name: "Hussain Mohammed Ghantiwala",
      // role: "Founder & Creative Director",
      image: "/images/HussainG.jpeg?height=400&width=400",
      // bio: "Alex has over 15 years of experience in web design and development. He founded Nova Corp with a vision to help businesses succeed online.",
      // social: {
      //   twitter: "#",
      //   linkedin: "#",
      // },
    },
    {
      name: "Yusuf Deesawala",
      role: "Lead UI/UX Designer",
      image: "/images/Desaa.jpeg?height=400&width=400",
      bio: "Jamie specializes in creating intuitive user experiences and beautiful interfaces. She has designed award-winning websites for clients across various industries.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mustafa Tinwala",
      role: "Senior Developer",
      image: "/images/Tehni.jpeg?height=400&width=400",
      bio: "Sam is an expert in front-end and back-end development with a passion for clean code and performance optimization. He leads our development team.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Murtaza Sohangpur",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Taylor ensures all projects run smoothly from concept to completion. With her attention to detail, she keeps everything on track and on budget.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
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

  const handleCardClick = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null)
    } else {
      setFlippedCard(index)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {team.map((member, index) => (
        <motion.div key={index} variants={itemVariants}>
        <div
  className="relative h-[400px] cursor-pointer rounded-lg border border-border/50 bg-card/30 shadow-sm transition-all duration-300 hover:shadow-[0_0_12px_#a855f7,0_0_20px_#06b6d4,0_0_28px_#ec4899]"
>
  <div className="absolute inset-0 transition-all duration-300">
              <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mx-auto mb-4 aspect-square h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                {/* <p className="text-sm text-muted-foreground">{member.role}</p> */}
                <div className="mt-4 flex justify-center gap-3">
                  {/* <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">Twitter</span>
                    <Twitter size={18} />
                  </Link>
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin size={18} />
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 backface-hidden transition-all duration-500"
              style={{
                transform: flippedCard === index ? "rotateY(0deg)" : "rotateY(-180deg)",
                opacity: flippedCard === index ? 1 : 0,
                pointerEvents: flippedCard === index ? "auto" : "none",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                {/* <p className="mb-4 text-sm text-muted-foreground">{member.role}</p> */}
                {/* <p className="text-sm">{member.bio}</p> */}
                <div className="mt-auto flex justify-center gap-3 pt-4">
                  {/* <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">Twitter</span>
                    <Twitter size={18} />
                  </Link>
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin size={18} />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
