"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    })
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-border/50 bg-card/30 p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-2xl font-bold">Quote Request Received</h3>
        <p className="mb-6 text-muted-foreground">
          Thank you for your interest! We've received your quote request and will get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border/50 bg-card/30 p-6 shadow-sm md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Your company name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" type="tel" placeholder="(555) 123-4567" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="service">Service Needed</Label>
          <Select defaultValue={serviceParam || ""}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-design">Web Design</SelectItem>
              <SelectItem value="ui-ux-solutions">UI/UX Solutions</SelectItem>
              <SelectItem value="website-development">Website Development</SelectItem>
              <SelectItem value="e-commerce">E-commerce Solutions</SelectItem>
              <SelectItem value="seo-analytics">SEO & Analytics</SelectItem>
              <SelectItem value="mobile-optimization">Mobile Optimization</SelectItem>
              <SelectItem value="cms-integration">CMS Integration</SelectItem>
              <SelectItem value="website-maintenance">Website Maintenance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="less-5k">Less than $5,000</SelectItem>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
              <SelectItem value="20k-plus">$20,000+</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Project Description</Label>
          <Textarea
            id="description"
            placeholder="Tell us about your project, goals, and timeline..."
            className="min-h-32"
            required
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="file" className="block">
            Attach Files (optional)
          </Label>
          <Input id="file" type="file" className="cursor-pointer" />
          <p className="text-xs text-muted-foreground">
            You can upload design references, briefs, or any other relevant documents (Max 10MB)
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Quote Request"
          )}
        </Button>
      </div>
    </form>
  )
}
