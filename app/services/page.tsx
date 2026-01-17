'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { motion } from 'framer-motion'
import { 
  Code2, Network, Cpu, Settings, 
  CheckCircle2, ArrowRight, ArrowUpRight,
  Smartphone, Globe, Database, Cloud,
  Shield, Wifi, Server, Router,
  Lightbulb, Gauge, Fingerprint, Home,
  LayoutDashboard, Package, Wallet, BarChart3
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    id: 'software',
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your unique business requirements. From web applications to enterprise systems, we build scalable, secure, and user-friendly software.',
    color: 'from-blue-500 to-blue-600',
    features: [
      { icon: Globe, text: 'Web Applications & Portals' },
      { icon: Smartphone, text: 'Mobile App Development' },
      { icon: Database, text: 'Database Design & Management' },
      { icon: Cloud, text: 'Cloud-Native Solutions' },
    ],
    highlights: [
      'Agile development methodology',
      'Full-stack expertise',
      'API development & integration',
      'Quality assurance & testing',
      'Ongoing maintenance & support',
    ],
  },
  {
    id: 'networks',
    icon: Network,
    title: 'Network Solutions',
    description: 'Enterprise-grade network infrastructure that keeps your business connected, secure, and running smoothly. We design, implement, and manage networks of any scale.',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      { icon: Shield, text: 'Network Security' },
      { icon: Wifi, text: 'Wireless Networks' },
      { icon: Server, text: 'Data Center Solutions' },
      { icon: Router, text: 'Network Infrastructure' },
    ],
    highlights: [
      'Network architecture design',
      'Security assessment & implementation',
      'Performance optimization',
      '24/7 monitoring & support',
      'Disaster recovery planning',
    ],
  },
  {
    id: 'smart-systems',
    icon: Cpu,
    title: 'Smart Systems',
    description: 'Intelligent automation and IoT solutions that modernize your operations. From smart offices to industrial automation, we bring intelligence to your infrastructure.',
    color: 'from-purple-500 to-purple-600',
    features: [
      { icon: Lightbulb, text: 'Smart Building Systems' },
      { icon: Gauge, text: 'Industrial IoT' },
      { icon: Fingerprint, text: 'Access Control Systems' },
      { icon: Home, text: 'Building Automation' },
    ],
    highlights: [
      'Sensor integration & deployment',
      'Real-time monitoring dashboards',
      'Predictive maintenance',
      'Energy management systems',
      'Custom automation workflows',
    ],
  },
  {
    id: 'integration',
    icon: Settings,
    title: 'System Integration',
    description: 'Seamlessly connect your business systems for unified operations. We specialize in ERP implementations, data integration, and enterprise solutions.',
    color: 'from-orange-500 to-orange-600',
    features: [
      { icon: LayoutDashboard, text: 'ERP Implementation' },
      { icon: Package, text: 'Inventory Management' },
      { icon: Wallet, text: 'Financial Systems' },
      { icon: BarChart3, text: 'Business Intelligence' },
    ],
    highlights: [
      'Custom ERP development',
      'Legacy system modernization',
      'Data migration services',
      'Process automation',
      'Training & change management',
    ],
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

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroWords = [
    { text: 'Comprehensive', gradient: false },
    { text: 'Technology', gradient: true },
    { text: 'Solutions', gradient: true },
  ]

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.services-hero-pill', { opacity: 0, y: 20, duration: 0.5 })
        .from('.services-hero-title span', { opacity: 0, y: 40, duration: 0.7, stagger: 0.08 }, '-=0.2')
        .from('.services-hero-lead', { opacity: 0, y: 20, duration: 0.55 }, '-=0.25')

      gsap.to('.services-orb', {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    },
    { scope: pageRef }
  )

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />
        <div className="services-orb absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="services-orb absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="services-hero-pill inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="services-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {heroWords.map((word, index) => (
                <span
                  key={word.text}
                  className={`inline-block ${word.gradient ? 'gradient-text' : ''}`}
                >
                  {word.text}
                  {index < heroWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <p className="services-hero-lead text-lg md:text-xl text-muted-foreground leading-relaxed">
              From custom software to enterprise integration, we deliver end-to-end solutions 
              that transform how businesses operate and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading
            label="Our Services"
            title="Explore Our Core Capabilities"
            description="A quick snapshot of our key service pillars. Jump to any section to learn more."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group block h-full rounded-2xl border border-border bg-card p-6 card-hover"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-muted' : ''}`}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className={index % 2 === 1 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                    >
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              {/* Highlights Card */}
              <motion.div
                className={index % 2 === 1 ? 'lg:order-1' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    What We Offer
                  </h3>
                  <motion.ul
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        variants={itemVariants}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your challenges and goals. Our team will help you find the right solution.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
