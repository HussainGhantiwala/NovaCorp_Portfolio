"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; description: string; variant?: "default" | "destructive" } | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Nova Corp Team",
        reply_to: formData.email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      const successMessage = {
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default" as const,
      };

      // Trigger Shadcn/UI toast
      toast({
        title: successMessage.title,
        description: successMessage.description,
        className: "bg-background text-foreground border-border shadow-lg",
        duration: 5000,
      });

      // Set toast message for display below form
      setToastMessage(successMessage);

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const errorMessage = {
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive" as const,
      };

      // Trigger Shadcn/UI toast
      toast({
        title: errorMessage.title,
        description: errorMessage.description,
        variant: "destructive",
        className: "bg-destructive text-destructive-foreground border-border shadow-lg",
        duration: 5000,
      });

      // Set toast message for display below form
      setToastMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="rounded-lg bg-background p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
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
            onChange={handleChange}
            required
            placeholder="Your email"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            rows={5}
            className="mt-1"
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
      {toastMessage && (
        <div
          className={`mt-6 p-4 rounded-lg border shadow-lg ${
            toastMessage.variant === "destructive"
              ? "bg-destructive text-destructive-foreground border-border"
              : "bg-background text-foreground border-border"
          }`}
        >
          <h3 className="text-lg font-semibold">{toastMessage.title}</h3>
          <p className="text-sm">{toastMessage.description}</p>
        </div>
      )}
    </div>
  );
}