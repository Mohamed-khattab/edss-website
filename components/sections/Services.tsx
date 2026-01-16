'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code2, Network, Cpu, Settings, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions, B2B platforms, web applications, and mobile apps tailored to your business needs.',
    href: '/services#software',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Network,
    title: 'Network Solutions',
    description: 'Enterprise network infrastructure, connectivity solutions, and secure network architecture design.',
    href: '/services#networks',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Cpu,
    title: 'Smart Systems',
    description: 'IoT solutions, automation systems, and intelligent devices that modernize your operations.',
    href: '/services#smart-systems',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Settings,
    title: 'System Integration',
    description: 'End-to-end enterprise solutions, ERP systems, and seamless integration of complex systems.',
    href: '/services#integration',
    color: 'from-orange-500 to-orange-600',
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

export function Services() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeading
          label="What We Do"
          title="Comprehensive Technology Solutions"
          description="From custom software to enterprise integration, we deliver end-to-end solutions that transform your business."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
            >
              <Link
                href={service.href}
                className="group block h-full p-8 bg-card rounded-2xl border border-border card-hover"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/services" className="btn-secondary">
            Explore All Services
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
