import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services-overview"
import Process from "@/components/process"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CallToAction />
    </>
  )
}
