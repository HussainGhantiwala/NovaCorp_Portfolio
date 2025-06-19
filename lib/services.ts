import {
  Code,
  Palette,
  Layout,
  ShoppingCart,
  LineChart,
  Smartphone,
  Globe,
  Shield,
} from "lucide-react";

export const services = [
  {
    title: "Web Design",
    slug: "web-design",
    category: "Design",
    shortDescription:
      "Beautiful, user-focused designs that elevate your brand and engage your audience.",
    description:
      "Our web design services focus on creating visually stunning, on-brand websites that capture your company's essence...",
    iconComponent: Palette,
    features: [
      "Custom website design tailored to your brand",
      "Responsive layouts that work on all devices",
      "User experience (UX) focused design",
      "Interactive prototypes and wireframes",
      "Brand consistency across all pages",
      "Accessibility compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    process: [
      {
        title: "Discovery",
        description: "We learn about your brand, goals, and target audience...",
      },
      {
        title: "Wireframing",
        description: "We create the structural blueprint of your website...",
      },
      {
        title: "Visual Design",
        description: "We develop the visual elements...",
      },
    ],
    examples: [
      {
        title: "E-commerce Redesign",
        description:
          "A complete redesign that increased conversion rates by 35%",
      },
      {
        title: "Corporate Website",
        description:
          "Modern design that strengthened brand perception and user engagement",
      },
    ],
  },
  {
    title: "UI/UX Solutions",
    slug: "ui-ux-solutions",
    category: "Design",
    shortDescription:
      "Intuitive interfaces and seamless user experiences that convert visitors into customers.",
    description:
      "Our UI/UX solutions are centered around creating intuitive, enjoyable user experiences...",
    iconComponent: Layout,
    features: [
      "User research and persona development",
      "Information architecture design",
      "User flow mapping and optimization",
      "Interactive prototyping",
      "Usability testing",
      "Conversion rate optimization",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "InVision",
      "Maze",
      "Hotjar",
      "Optimal Workshop",
    ],
    process: [
      {
        title: "Research",
        description: "We conduct user research...",
      },
      {
        title: "Strategy",
        description: "We develop a UX strategy...",
      },
      {
        title: "Design & Testing",
        description: "We create and test interfaces...",
      },
    ],
    examples: [
      {
        title: "App Redesign",
        description:
          "Simplified user flows that increased user retention by 40%",
      },
      {
        title: "Checkout Process Optimization",
        description:
          "Streamlined checkout that reduced cart abandonment by 25%",
      },
    ],
  },
  {
    title: "Website Development",
    slug: "website-development",
    category: "Development",
    shortDescription:
      "Fast, responsive, and accessible websites built with modern technologies.",
    description:
      "We build websites using the latest technologies and best practices...",
    iconComponent: Code,
    features: [
      "Custom website development",
      "Front-end and back-end programming",
      "Responsive and mobile-first development",
      "Performance optimization",
      "SEO-friendly code structure",
      "Cross-browser compatibility",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Vercel",
    ],
    process: [
      {
        title: "Planning",
        description: "We define technical requirements...",
      },
      {
        title: "Development",
        description: "We write clean, efficient code...",
      },
      {
        title: "Testing & Deployment",
        description: "We thoroughly test and deploy your website...",
      },
    ],
    examples: [
      {
        title: "E-commerce Platform",
        description:
          "Custom-built online store with integrated payment processing",
      },
      {
        title: "SaaS Application",
        description:
          "Feature-rich web application with user authentication and dashboard",
      },
    ],
  },
  {
    title: "E-commerce Solutions",
    slug: "e-commerce",
    category: "Development",
    shortDescription:
      "Online stores that drive sales and provide seamless shopping experiences.",
    description:
      "Our e-commerce solutions are designed to maximize conversions...",
    iconComponent: ShoppingCart,
    features: [
      "Custom e-commerce website development",
      "Shopping cart and checkout optimization",
      "Payment gateway integration",
      "Inventory management systems",
      "Customer account portals",
      "Order tracking and management",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Next.js Commerce",
      "Stripe",
      "PayPal",
      "Snipcart",
    ],
    process: [
      {
        title: "Strategy",
        description: "We develop an e-commerce strategy...",
      },
      {
        title: "Development",
        description: "We build your online store...",
      },
      {
        title: "Optimization",
        description: "We optimize your store...",
      },
    ],
    examples: [
      {
        title: "Fashion Boutique",
        description: "Custom online store with virtual try-on features",
      },
      {
        title: "Subscription Box Service",
        description: "Recurring billing platform with customer portal",
      },
    ],
  },
  {
    title: "SEO & Analytics",
    slug: "seo-analytics",
    category: "Marketing",
    shortDescription:
      "Data-driven strategies to increase visibility and measure performance.",
    description:
      "We implement comprehensive SEO strategies to improve your website's visibility...",
    iconComponent: LineChart,
    features: [
      "Technical SEO audits and optimization",
      "Keyword research and strategy",
      "On-page and off-page SEO",
      "Content optimization",
      "Analytics setup and reporting",
      "Conversion tracking",
    ],
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Hotjar",
      "Tag Manager",
    ],
    process: [
      {
        title: "Audit",
        description: "We analyze your current SEO performance...",
      },
      {
        title: "Strategy",
        description: "We develop a comprehensive SEO strategy...",
      },
      {
        title: "Implementation & Monitoring",
        description: "We implement optimizations and monitor performance...",
      },
    ],
    examples: [
      {
        title: "Local Business SEO",
        description: "Increased organic traffic by 150% in 6 months",
      },
      {
        title: "E-commerce SEO Campaign",
        description: "Improved search rankings for 200+ product pages",
      },
    ],
  },
  {
    title: "Mobile Optimization",
    slug: "mobile-optimization",
    category: "Development",
    shortDescription:
      "Responsive designs that provide exceptional experiences on all devices.",
    description:
      "With mobile traffic accounting for over half of all web visits...",
    iconComponent: Smartphone,
    features: [
      "Responsive web design",
      "Mobile-first development approach",
      "Touch-friendly navigation",
      "Mobile performance optimization",
      "Progressive Web App (PWA) development",
      "Mobile usability testing",
    ],
    technologies: [
      "Responsive CSS",
      "Progressive Web Apps",
      "AMP",
      "Mobile Testing Tools",
      "Touch Events API",
    ],
    process: [
      {
        title: "Analysis",
        description: "We analyze your mobile user data...",
      },
      {
        title: "Optimization",
        description: "We implement responsive design...",
      },
      {
        title: "Testing",
        description: "We test across multiple devices...",
      },
    ],
    examples: [
      {
        title: "Restaurant Website",
        description: "Mobile-optimized menu and ordering system",
      },
      {
        title: "News Portal",
        description: "Fast-loading mobile experience with offline capabilities",
      },
    ],
  },
  {
    title: "CMS Integration",
    slug: "cms-integration",
    category: "Development",
    shortDescription:
      "Easy-to-update content management systems tailored to your needs.",
    description:
      "We integrate powerful content management systems that make updating your website simple...",
    iconComponent: Globe,
    features: [
      "CMS selection and customization",
      "Content migration and setup",
      "Custom post types and fields",
      "User role management",
      "Workflow optimization",
      "Training and documentation",
    ],
    technologies: [
      "WordPress",
      "Contentful",
      "Sanity",
      "Strapi",
      "Prismic",
      "Headless CMS",
    ],
    process: [
      {
        title: "Requirements",
        description: "We identify your content management needs...",
      },
      {
        title: "Implementation",
        description: "We set up and customize the CMS...",
      },
      {
        title: "Training",
        description: "We provide training and documentation...",
      },
    ],
    examples: [
      {
        title: "Corporate Blog",
        description: "Custom WordPress implementation with editorial workflow",
      },
      {
        title: "Multi-language Website",
        description: "Headless CMS powering content in 5 languages",
      },
    ],
  },
  {
    title: "Website Maintenance",
    slug: "website-maintenance",
    category: "Support",
    shortDescription:
      "Ongoing support to keep your website secure, updated, and performing optimally.",
    description:
      "Our website maintenance services ensure your site remains secure, up-to-date, and performing at its best. We offer regular updates, security monitoring, performance optimization, and content updates.",
    iconComponent: Shield,
    features: [
      "Regular software updates",
      "Security monitoring and patches",
      "Performance optimization",
      "Content updates and management",
      "Backup and recovery",
      "Technical support",
    ],
    technologies: [
      "Monitoring Tools",
      "Security Scanners",
      "Backup Solutions",
      "Performance Optimization Tools",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We assess your website's current state and maintenance needs.",
      },
      {
        title: "Maintenance Plan",
        description:
          "We develop a customized maintenance plan for your website.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide regular maintenance and respond quickly to any issues.",
      },
    ],
    examples: [
      {
        title: "E-commerce Platform",
        description: "Ongoing maintenance resulting in 99.9% uptime",
      },
      {
        title: "Membership Website",
        description:
          "Regular updates and security monitoring for sensitive user data",
      },
    ],
  },
];
