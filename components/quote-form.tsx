"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ChevronRight, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const steps = [
  { id: "project-info", title: "Project Information", description: "Tell us about your project" },
  { id: "services", title: "Services", description: "Select the services you need" },
  { id: "budget", title: "Budget & Timeline", description: "Provide your budget and timeline" },
  { id: "contact", title: "Contact Details", description: "How can we reach you" },
];

const serviceOptions = [
  "web-design", "ui-ux-solutions", "website-development", "e-commerce", "seo-analytics",
  "mobile-optimization", "cms-integration", "website-maintenance", "other"
];

const budgetOptions = [
  { value: "less-5k", label: "Less than $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-20k", label: "$10,000 - $20,000" },
  { value: "20k-plus", label: "$20,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", budget: "", description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; description: string; variant?: "default" | "destructive" } | null>(null);
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1 && isStepValid()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.description.trim() !== "";
      case 1:
        return formData.service !== "";
      case 2:
        return formData.budget !== "";
      case 3:
        return formData.name.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        budget: budgetOptions.find((opt) => opt.value === formData.budget)?.label || "",
        description: formData.description,
        to_name: "Nova Corp Team",
        reply_to: formData.email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUOTE!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      const successMessage = {
        title: "Quote Request Sent!",
        description: "We've received your request and will get back to you within 24 hours.",
        variant: "default" as const,
      };

      toast({
        title: successMessage.title,
        description: successMessage.description,
        className: "bg-background text-foreground border-border shadow-lg",
        duration: 5000,
      });

      setToastMessage(successMessage);
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      const errorMessage = {
        title: "Error",
        description: "Failed to send quote request. Please try again later.",
        variant: "destructive" as const,
      };

      toast({
        title: errorMessage.title,
        description: errorMessage.description,
        variant: "destructive",
        className: "bg-destructive text-destructive-foreground border-border shadow-lg",
        duration: 5000,
      });

      setToastMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to get a custom quote for your project. We'll respond within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                  {index < steps.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-full h-[2px] bg-border">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: currentStep > index ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= index ? "bg-primary text-primary-foreground" : "bg-background border border-border"
                    }`}
                    animate={{
                      scale: currentStep === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep > index ? <Check className="w-5 h-5" /> : index + 1}
                  </motion.div>
                  <p className={`mt-2 text-sm font-medium ${currentStep >= index ? "text-foreground" : "text-muted-foreground"}`}>
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg bg-card p-6 md:p-8 shadow-lg border border-border">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {currentStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <h2 className="text-2xl font-bold mb-2">{steps[0].title}</h2>
                      <p className="text-muted-foreground mb-6">{steps[0].description}</p>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="description">Project Description</Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            placeholder="Describe your project, goals, and timeline..."
                            className="mt-1 min-h-[120px]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <h2 className="text-2xl font-bold mb-2">{steps[1].title}</h2>
                      <p className="text-muted-foreground mb-6">{steps[1].description}</p>
                      <div>
                        <Label htmlFor="service">Service Needed</Label>
                        <Select
                          defaultValue={serviceParam || formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <h2 className="text-2xl font-bold mb-2">{steps[2].title}</h2>
                      <p className="text-muted-foreground mb-6">{steps[2].description}</p>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <h2 className="text-2xl font-bold mb-2">{steps[3].title}</h2>
                      <p className="text-muted-foreground mb-6">{steps[3].description}</p>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Your name"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="your@email.com"
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="company">Company (optional)</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Your company name"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone (optional)</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 123-4567"
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex justify-between">
                  {currentStep > 0 && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        className="px-6 py-2"
                      >
                        Back
                      </Button>
                    </motion.div>
                  )}
                  <div className="flex-1" />
                  {currentStep < steps.length - 1 ? (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={`px-6 py-2 ${isStepValid() ? "bg-primary hover:bg-primary/90" : "bg-muted cursor-not-allowed"}`}
                      >
                        Next <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        disabled={!isStepValid() || isSubmitting}
                        className={`px-6 py-2 ${isStepValid() && !isSubmitting ? "bg-primary hover:bg-primary/90" : "bg-muted cursor-not-allowed"}`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Quote Request Submitted!</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for your request. We'll review your details and respond within 24 hours.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={() => { setIsSubmitted(false); setCurrentStep(0); setFormData({ name: "", company: "", email: "", phone: "", service: "", budget: "", description: "" }); }}>
                    Submit Another Request
                  </Button>
                </motion.div>
              </motion.div>
            )}
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-lg border shadow-lg ${
                  toastMessage.variant === "destructive"
                    ? "bg-destructive text-destructive-foreground border-border"
                    : "bg-background text-foreground border-border"
                }`}
              >
                <h3 className="text-lg font-semibold">{toastMessage.title}</h3>
                <p className="text-sm">{toastMessage.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}