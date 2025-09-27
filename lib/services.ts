import {
  CreditCard,
  Bell,
  BarChart3,
  Settings2,
  Shield,
} from "lucide-react";

export const services = [
  {
    title: "Billing Automation",
    slug: "billing-automation",
    category: "Automation",
    shortDescription:
      "Eliminate manual invoicing and collections. Automate recurring billing with precision.",
    description:
      "Our billing automation engine takes care of invoices, reminders, and collections so your team can focus on growth. Scale your revenue operations without scaling headcount.",
    iconComponent: CreditCard,
    features: [
      "Recurring invoice scheduling",
      "Automated payment links",
      "GST/tax compliance",
      "Multi-currency support",
      "Auto-reconciliation",
    ],
    technologies: ["Stripe", "Razorpay", "Xero API", "QuickBooks API"],
    process: [
      { title: "Setup", description: "Connect your accounts and define billing rules." },
      { title: "Automation", description: "Invoices, reminders, and follow-ups run on autopilot." },
      { title: "Monitoring", description: "Track payments and retries from a single dashboard." },
    ],
    examples: [
      {
        title: "SaaS Startup",
        description: "Cut invoice time by 90% and reduced late payments by 40%.",
      },
      {
        title: "Consulting Firm",
        description: "Automated recurring retainers and reconciled payments with Xero.",
      },
    ],
  },
  {
    title: "Reminder Automation",
    slug: "reminder-automation",
    category: "Communication",
    shortDescription:
      "Never chase clients manually again. Automated payment reminders across channels.",
    description:
      "Late payments crush cash flow. Our reminder automation system sends WhatsApp, SMS, and email nudges at the right time — polite, professional, and consistent.",
    iconComponent: Bell,
    features: [
      "Multi-channel reminders (WhatsApp, SMS, Email)",
      "Personalized messaging",
      "Smart retry scheduling",
      "Customer segmentation",
      "Custom reminder flows",
    ],
    technologies: ["Twilio", "WhatsApp API", "SendGrid"],
    process: [
      { title: "Integration", description: "Connect CRM or billing system." },
      { title: "Configuration", description: "Define reminder rules and timing." },
      { title: "Go Live", description: "Sit back as reminders reduce your DSO automatically." },
    ],
    examples: [
      {
        title: "Freelance Collective",
        description: "Improved collection rates from 60% to 92% within 3 months.",
      },
    ],
  },
  {
    title: "Revenue Dashboard",
    slug: "revenue-dashboard",
    category: "Analytics",
    shortDescription:
      "One place to track dues, collections, and cash flow in real-time.",
    description:
      "Our dashboard gives founders and finance teams crystal-clear visibility into money in, money out, and what’s stuck. Export reports or integrate directly with your accounting stack.",
    iconComponent: BarChart3,
    features: [
      "Real-time revenue tracking",
      "Dues aging report",
      "Cash flow forecasting",
      "Automated CSV/Excel exports",
      "Team permissions",
    ],
    technologies: ["Next.js", "Supabase", "Metabase", "BigQuery"],
    process: [
      { title: "Connect", description: "Hook into billing + payment systems." },
      { title: "Visualize", description: "Interactive dashboards update in real-time." },
      { title: "Decide", description: "Use insights to plan collections and growth." },
    ],
    examples: [
      {
        title: "Agency Network",
        description: "Centralized finance ops for 12 subsidiaries across 3 countries.",
      },
    ],
  },
  {
    title: "Future Automations",
    slug: "future-automations",
    category: "Roadmap",
    shortDescription:
      "Payroll, compliance, inventory — automation doesn’t stop with billing.",
    description:
      "We’re building toward an automation suite that will extend beyond billing. Early adopters shape the roadmap and get lifetime discounts.",
    iconComponent: Settings2,
    features: [
      "Payroll automation",
      "Compliance workflows",
      "Inventory sync",
      "Vendor payments",
    ],
    technologies: ["Coming Soon"],
    process: [
      { title: "Research", description: "Work with early customers to prioritize pain points." },
      { title: "Beta", description: "Release MVP modules for select partners." },
      { title: "Launch", description: "Roll out as part of the automation suite." },
    ],
    examples: [
      {
        title: "Beta Cohort",
        description: "Exclusive group of customers shaping our roadmap.",
      },
    ],
  },
];
