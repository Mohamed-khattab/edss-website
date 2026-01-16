'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Package, LayoutDashboard, Users } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const caseStudies = [
  {
    id: 'alto',
    icon: Package,
    title: 'Alto Platform',
    category: 'B2B Software',
    description: 'A comprehensive B2B marketplace connecting plastic and packaging suppliers with customers, streamlining the entire procurement process.',
    results: ['50% faster ordering', '200+ active suppliers', '10K+ transactions'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'erp',
    icon: LayoutDashboard,
    title: 'Custom ERP System',
    category: 'Enterprise Software',
    description: 'A fully customized ERP solution with integrated modules for inventory, sales, purchasing, production, and accounting.',
    results: ['30% cost reduction', '100% process automation', 'Real-time insights'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'membership',
    icon: Users,
    title: 'Membership Management',
    category: 'SaaS Platform',
    description: 'An all-in-one membership management system handling registrations, renewals, communications, and analytics.',
    results: ['5K+ members managed', '90% renewal rate', 'Automated workflows'],
    color: 'from-emerald-500 to-teal-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function CaseStudies() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeading
          label="Our Work"
          title="Featured Case Studies"
          description="Discover how we've helped businesses transform their operations with innovative technology solutions."
        />

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
            >
              <Link
                href={`/case-studies#${study.id}`}
                className="group block h-full bg-card rounded-2xl border border-border overflow-hidden card-hover"
              >
                {/* Card Header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${study.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {study.category}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <study.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
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
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
