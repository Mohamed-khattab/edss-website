'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Package, LayoutDashboard, Users, 
  CheckCircle2, ArrowRight, ArrowUpRight,
  TrendingUp, Clock, Target, Zap
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const caseStudies = [
  {
    id: 'alto',
    icon: Package,
    title: 'Alto Platform',
    subtitle: 'B2B Marketplace for Plastic & Packaging',
    description: 'A comprehensive B2B marketplace that revolutionized how plastic and packaging suppliers connect with customers, streamlining procurement and sales processes.',
    color: 'from-blue-500 to-cyan-500',
    challenge: 'The plastic and packaging industry lacked a dedicated digital platform for connecting suppliers with buyers. Manual processes led to inefficiencies, delayed communications, and missed opportunities.',
    solution: 'We built Alto, a full-featured B2B marketplace with real-time inventory, automated order management, secure payments, and analytics dashboards for both suppliers and buyers.',
    results: [
      { icon: TrendingUp, label: '50%', description: 'Faster Order Processing' },
      { icon: Users, label: '200+', description: 'Active Suppliers' },
      { icon: Target, label: '10K+', description: 'Transactions Completed' },
      { icon: Clock, label: '70%', description: 'Time Saved on Procurement' },
    ],
    features: [
      'Real-time inventory management',
      'Automated order workflows',
      'Secure payment gateway integration',
      'Supplier verification system',
      'Analytics & reporting dashboards',
      'Mobile-responsive design',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
  },
  {
    id: 'erp',
    icon: LayoutDashboard,
    title: 'Custom ERP System',
    subtitle: 'Enterprise Resource Planning Solution',
    description: 'A fully customized ERP solution built from the ground up, featuring integrated modules for inventory, sales, purchasing, production, and accounting.',
    color: 'from-purple-500 to-pink-500',
    challenge: 'A growing manufacturing company struggled with disconnected systems, manual data entry, and lack of real-time visibility into their operations, leading to costly inefficiencies.',
    solution: 'We developed a custom ERP system tailored to their specific workflows, with seamless integration between all departments and real-time data synchronization.',
    results: [
      { icon: TrendingUp, label: '30%', description: 'Cost Reduction' },
      { icon: Zap, label: '100%', description: 'Process Automation' },
      { icon: Clock, label: 'Real-time', description: 'Data Insights' },
      { icon: Target, label: '99.9%', description: 'System Uptime' },
    ],
    features: [
      'Inventory management with barcode scanning',
      'Sales order processing & CRM',
      'Purchase order management',
      'Production planning & scheduling',
      'Financial accounting & reporting',
      'HR & payroll integration',
    ],
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'membership',
    icon: Users,
    title: 'Membership Management System',
    subtitle: 'All-in-One Club Management Platform',
    description: 'An all-in-one membership management system handling registrations, renewals, communications, events, and comprehensive analytics for organizations.',
    color: 'from-emerald-500 to-teal-500',
    challenge: 'A large sports club with thousands of members was using spreadsheets and manual processes to manage memberships, leading to errors, missed renewals, and poor member engagement.',
    solution: 'We created a comprehensive membership platform with automated workflows, self-service portals, event management, and detailed analytics to transform member experience.',
    results: [
      { icon: Users, label: '5K+', description: 'Members Managed' },
      { icon: TrendingUp, label: '90%', description: 'Renewal Rate' },
      { icon: Zap, label: 'Automated', description: 'Renewal Reminders' },
      { icon: Target, label: '60%', description: 'Admin Time Saved' },
    ],
    features: [
      'Online membership registration',
      'Automated renewal notifications',
      'Member self-service portal',
      'Event management & booking',
      'Communication & newsletter tools',
      'Comprehensive reporting',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'SendGrid', 'Stripe'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover how we&apos;ve helped businesses transform their operations 
              with innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={`#${study.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
              >
                <study.icon className="w-4 h-4" />
                {study.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          id={study.id}
          className={`section-padding ${index % 2 === 0 ? '' : 'bg-muted'}`}
        >
          <div className="container-wide">
            {/* Header */}
            <motion.div
              className="max-w-3xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6`}>
                <study.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-primary mb-2 block">
                {study.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {study.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.description}
              </p>
            </motion.div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold">!</span>
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </motion.div>

              <motion.div
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-sm font-bold">✓</span>
                  Our Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Results</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {study.results.map((result) => (
                  <motion.div
                    key={result.description}
                    variants={itemVariants}
                    className="bg-card rounded-xl border border-border p-6 text-center"
                  >
                    <result.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{result.label}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features & Technologies */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {study.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Let&apos;s discuss how we can help transform your business with innovative technology solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
