"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { GradientText } from "./gradient-text";

const steps = [
  {
    id: "project-info",
    title: "Project Information",
    description: "Tell us about your project",
  },
  {
    id: "services",
    title: "Services",
    description: "Select the services you need",
  },
  { id: "timeline", title: "Timeline", description: "Provide your timeline" },
  {
    id: "contact",
    title: "Contact Details",
    description: "How can we reach you",
  },
];

const projectGoals = [
  { id: "increase-sales", label: "Increase Sales", emoji: "📈" },
  { id: "brand-awareness", label: "Brand Awareness", emoji: "🌟" },
  { id: "user-engagement", label: "User Engagement", emoji: "👥" },
  { id: "new-launch", label: "New Product Launch", emoji: "🚀" },
];

const serviceOptions = [
  { id: "web-design", label: "Web Design", emoji: "🎨" },
  { id: "ui-ux-solutions", label: "UI/UX Solutions", emoji: "📱" },
  { id: "website-development", label: "Website Development", emoji: "💻" },
  { id: "e-commerce", label: "E-commerce Solutions", emoji: "🛒" },
  { id: "seo-analytics", label: "SEO & Analytics", emoji: "🔍" },
  { id: "mobile-optimization", label: "Mobile Optimization", emoji: "📲" },
  { id: "website-maintenance", label: "Website Maintenance", emoji: "🔧" },
  { id: "other", label: "Other", emoji: "➕" },
];

const timelineOptions = [
  { id: "1-month", label: "Within 1 Month", emoji: "⏰" },
  { id: "1-3-months", label: "1-3 Months", emoji: "📅" },
  { id: "3-6-months", label: "3-6 Months", emoji: "🕒" },
  { id: "6-plus-months", label: "6+ Months", emoji: "⏳" },
];

const contactPreferences = [
  { id: "email", label: "Email", emoji: "📧" },
  { id: "phone", label: "Phone", emoji: "📞" },
  { id: "video-call", label: "Video Call", emoji: "💻" },
];

// Mock UI Components
type ButtonVariant = "default" | "outline";

const Button = ({
  children,
  onClick,
  disabled,
  variant = "default",
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  className?: string;
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 px-6 py-2";
  const variants: Record<ButtonVariant, string> = {
    default:
      "bg-gradient-to-r from-purple-400 to-blue-500 text-white hover:from-purple-500 hover:to-blue-600 shadow-md",
    outline:
      "border border-border bg-transparent text-muted-foreground hover:bg-muted/50 hover:border-primary",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

interface InputProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
  type?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  value,
  onChange,
  required,
  placeholder,
  type = "text",
  className = "",
}) => (
  <motion.input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
    placeholder={placeholder}
    className={`flex h-10 w-full rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 p-2 ${className}`}
    whileFocus={{ scale: 1.02 }}
    whileHover={{
      boxShadow: "rgba(147, 51, 234, 0) 0px 0px 0px",
      transform: "none",
    }}
    transition={{ duration: 0.2 }}
  />
);

interface TextareaProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  onChange,
  required,
  placeholder,
  className = "",
}) => (
  <motion.textarea
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    placeholder={placeholder}
    className={`flex min-h-[100px] w-full rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 p-2 ${className}`}
    whileFocus={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  />
);

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label = ({ children, htmlFor, className = "" }: LabelProps) => (
  <label
    {...(htmlFor ? { htmlFor } : {})}
    className={`text-sm font-medium text-muted-foreground ${className}`}
  >
    {children}
  </label>
);

const Select: React.FC<{
  children?: React.ReactNode;
  onValueChange: (value: string) => void;
}> = ({ children, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(label);
    onValueChange(value);
    setIsOpen(false);
  };

  const primaryColor = "bg-gradient-to-r from-purple-400 to-blue-500";

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-border bg-background text-foreground px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <span
          className={
            selectedValue ? "text-foreground" : "text-muted-foreground"
          }
        >
          {selectedValue || "Select your timeline"}
        </span>
        <ChevronRight
          className={`h-4 w-4 text-muted-foreground transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-1 w-full rounded-md border border-border bg-background shadow-lg"
          >
            {timelineOptions.map((option) => (
              <motion.button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id, option.label)}
                className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-muted transition-colors duration-200"
                whileHover={{ backgroundColor: "#e5e7eb" }}
                transition={{ duration: 0.2 }}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mock Toast Component
const useToast = () => {
  const toast = ({
    title,
    description,
    variant,
  }: {
    title: string;
    description: string;
    variant: string;
  }) => {
    console.log(`Toast: ${title} - ${description} (${variant})`);
  };
  return { toast };
};

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  interface QuoteFormData {
    projectGoals: string[];
    description: string;
    services: string[];
    otherServices: string;
    timelines: string[];
    name: string;
    email: string;
    company: string;
    phone: string;
    contactPrefs: string[];
  }

  const [formData, setFormData] = useState<QuoteFormData>({
    projectGoals: [],
    description: "",
    services: [],
    otherServices: "",
    timelines: [],
    name: "",
    email: "",
    company: "",
    phone: "",
    contactPrefs: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Phone number formatting
    if (name === "phone") {
      const cleaned = value.replace(/[^\d]/g, "");
      if (cleaned.length <= 10) {
        let formatted = cleaned;
        if (cleaned.length > 6)
          formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(
            3,
            6
          )}-${cleaned.slice(6, 10)}`;
        else if (cleaned.length > 3)
          formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        else formatted = cleaned;
        setFormData((prev) => ({ ...prev, [name]: formatted }));
      } else if (cleaned.length <= 11 && cleaned.startsWith("1")) {
        let formatted = `+${cleaned.slice(0, 1)} ${cleaned.slice(
          1,
          4
        )}-${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;
        setFormData((prev) => ({ ...prev, [name]: formatted }));
      }
    }
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const current = (prev[name as keyof typeof prev] as string[]) || [];
      return {
        ...prev,
        [name]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
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
        return (
          formData.projectGoals.length > 0 && formData.description.trim() !== ""
        );
      case 1:
        return formData.services.length > 0;
      case 2:
        return formData.timelines.length > 0;
      case 3:
        return (
          formData.name.trim() !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
          formData.contactPrefs.length > 0 &&
          (formData.phone === "" ||
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              formData.phone.replace(/[^\d]/g, "")
            ) ||
            /^\+1[ -]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              formData.phone
            ))
        );
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        project_goals: formData.projectGoals
          .map((id) => projectGoals.find((goal) => goal.id === id)?.label || id)
          .join(", "),
        description: formData.description,
        services: [...formData.services, formData.otherServices]
          .filter(Boolean)
          .join(", "),
        timelines: formData.timelines
          .map(
            (id) =>
              timelineOptions.find((timeline) => timeline.id === id)?.label ||
              id
          )
          .join(", "),
        contact_prefs: formData.contactPrefs
          .map(
            (id) =>
              contactPreferences.find((pref) => pref.id === id)?.label || id
          )
          .join(", "),
        to_name: "Nova Corp Team",
        reply_to: formData.email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_1_ID || "your_template_id",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      const errorMessage = {
        title: "Error",
        description: "Failed to send quote request. Please try again later.",
        variant: "destructive",
      };

      toast({
        title: errorMessage.title,
        description: errorMessage.description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-heading tracking-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Request a{" "}
            <span className="text-4xl md:text-5xl font-heading tracking-tight">
              <GradientText>Quote</GradientText>
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Fill out the form below to get a custom quote for your project.
            We'll respond within 24 hours.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-start justify-between relative">
              <div className="absolute top-5 left-0 w-full h-0.5 bg-border -z-10">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-cyan-600 transition-all duration-500 ease-in-out"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(currentStep / (steps.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center relative z-10 w-1/4"
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
                      currentStep >= index
                        ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white border-none"
                        : "bg-background border-border text-muted-foreground"
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: currentStep === index ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep > index ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </motion.div>
                  <motion.div
                    className={`mt-3 text-center ${
                      currentStep >= index
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <p className="text-xs sm:text-sm font-medium max-w-[80px] leading-tight">
                      {step.title}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            className="rounded-lg bg-card p-6 md:p-8 shadow-lg border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {currentStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.9 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120,
                      }}
                    >
                      <h2 className="text-2xl font-bold mb-2 text-foreground">
                        {steps[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {steps[0].description}
                      </p>
                      <div className="space-y-6">
                        <div>
                          <Label className="mb-3 block" htmlFor="project-goals">
                            Project Goals *
                          </Label>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ staggerChildren: 0.1 }}
                          >
                            {projectGoals.map((goal) => (
                              <motion.label
                                key={goal.id}
                                className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${
                                  formData.projectGoals.includes(goal.id)
                                    ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border-transparent"
                                    : "border-border hover:bg-muted"
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.projectGoals.includes(
                                    goal.id
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      "projectGoals",
                                      goal.id
                                    )
                                  }
                                  className="sr-only"
                                />
                                <div
                                  className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                                    formData.projectGoals.includes(goal.id)
                                      ? "bg-primary border-primary"
                                      : "border-border"
                                  }`}
                                >
                                  {formData.projectGoals.includes(goal.id) && (
                                    <Check className="w-3 h-3 text-primary-foreground" />
                                  )}
                                </div>
                                <span className="flex items-center text-foreground">
                                  <span className="mr-2">{goal.emoji}</span>
                                  {goal.label}
                                </span>
                              </motion.label>
                            ))}
                          </motion.div>
                        </div>
                        <div>
                          <Label htmlFor="description" className="mb-2 block">
                            Project Description *
                          </Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            placeholder="Describe your project, goals, and any specific requirements..."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.9 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120,
                      }}
                    >
                      <h2 className="text-2xl font-bold mb-2 text-foreground">
                        {steps[1].title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {steps[1].description}
                      </p>
                      <div>
                        <Label className="mb-3 block">Services Needed *</Label>
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ staggerChildren: 0.1 }}
                        >
                          {serviceOptions.map((service) => (
                            <motion.label
                              key={service.id}
                              className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${
                                formData.services.includes(service.id)
                                  ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border-transparent"
                                  : "border-border hover:bg-muted"
                              }`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                            >
                              <input
                                type="checkbox"
                                checked={formData.services.includes(service.id)}
                                onChange={() =>
                                  handleCheckboxChange("services", service.id)
                                }
                                className="sr-only"
                              />
                              <div
                                className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                                  formData.services.includes(service.id)
                                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 border-transparent"
                                    : "border-border"
                                }`}
                              >
                                {formData.services.includes(service.id) && (
                                  <Check className="w-3 h-3 text-primary-foreground" />
                                )}
                              </div>
                              <span className="flex items-center text-foreground">
                                <span className="mr-2">{service.emoji}</span>
                                {service.label}
                              </span>
                            </motion.label>
                          ))}
                        </motion.div>
                        {formData.services.includes("other") && (
                          <div className="mt-4">
                            <Label
                              htmlFor="otherServices"
                              className="mb-2 block"
                            >
                              Other Services
                            </Label>
                            <Textarea
                              id="otherServices"
                              name="otherServices"
                              value={formData.otherServices}
                              onChange={handleInputChange}
                              placeholder="Please specify other services..."
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.9 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120,
                      }}
                    >
                      <h2 className="text-2xl font-bold mb-2 text-foreground">
                        {steps[2].title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {steps[2].description}
                      </p>
                      <div className="space-y-6">
                        <div>
                          <Label className="mb-3 block">
                            Timeline Preferences *
                          </Label>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ staggerChildren: 0.1 }}
                          >
                            {timelineOptions.map((timeline) => (
                              <motion.label
                                key={timeline.id}
                                className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${
                                  formData.timelines.includes(timeline.id)
                                    ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border-transparent"
                                    : "border-border hover:bg-muted"
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.timelines.includes(
                                    timeline.id
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      "timelines",
                                      timeline.id
                                    )
                                  }
                                  className="sr-only"
                                />
                                <div
                                  className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                                    formData.timelines.includes(timeline.id)
                                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 border-transparent"
                                      : "border-border"
                                  }`}
                                >
                                  {formData.timelines.includes(timeline.id) && (
                                    <Check className="w-3 h-3 text-primary-foreground" />
                                  )}
                                </div>
                                <span className="flex items-center text-foreground">
                                  <span className="mr-2">{timeline.emoji}</span>
                                  {timeline.label}
                                </span>
                              </motion.label>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.9 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120,
                      }}
                    >
                      <h2 className="text-2xl font-bold mb-2 text-foreground">
                        {steps[3].title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {steps[3].description}
                      </p>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="mb-2 block">
                              Name *
                            </Label>
                            <Input
                              className="p-2"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="mb-2 block">
                              Email *
                            </Label>
                            <Input
                              className="p-2"
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="company" className="mb-2 block">
                              Company
                            </Label>
                            <Input
                              className="p-2"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Your company name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="mb-2 block">
                              Phone
                            </Label>
                            <Input
                              className="p-2"
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 123-4567 or +1 555-123-4567"
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                              WhatsApp number is preferable
                            </p>
                          </div>
                        </div>
                        <div>
                          <Label className="mb-3 block">
                            Preferred Contact Methods *
                          </Label>
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ staggerChildren: 0.1 }}
                          >
                            {contactPreferences.map((pref) => (
                              <motion.label
                                key={pref.id}
                                className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${
                                  formData.contactPrefs.includes(pref.id)
                                    ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border-transparent"
                                    : "border-border hover:bg-muted"
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.contactPrefs.includes(
                                    pref.id
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(
                                      "contactPrefs",
                                      pref.id
                                    )
                                  }
                                  className="sr-only"
                                />
                                <div
                                  className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                                    formData.contactPrefs.includes(pref.id)
                                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 border-transparent"
                                      : "border-border"
                                  }`}
                                >
                                  {formData.contactPrefs.includes(pref.id) && (
                                    <Check className="w-3 h-3 text-primary-foreground" />
                                  )}
                                </div>
                                <span className="flex items-center text-foreground">
                                  <span className="mr-2">{pref.emoji}</span>
                                  {pref.label}
                                </span>
                              </motion.label>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-10 flex justify-between items-center">
                  {currentStep > 0 && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                    </motion.div>
                  )}
                  <div className="flex-1" />
                  {currentStep < steps.length - 1 ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={
                          !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                        }
                      >
                        Next <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        disabled={!isStepValid() || isSubmitting}
                        className={
                          !isStepValid() || isSubmitting
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request{" "}
                            <ArrowRight className="ml-2 w-4 h-4" />
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
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                className="text-center py-10"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: 1, ease: "linear" }}
                >
                  <CheckCircle className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Quote Request Submitted!
                </motion.h2>
                <motion.p
                  className="text-muted-foreground mb-8 max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Thank you for your request. We'll review your details and
                  respond within 24 hours.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(0);
                      setFormData({
                        projectGoals: [],
                        description: "",
                        services: [],
                        otherServices: "",
                        timelines: [],
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        contactPrefs: [],
                      });
                    }}
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
