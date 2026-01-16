'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Network, Cpu, Settings } from 'lucide-react'

const floatingIcons = [
  { Icon: Code2, delay: 0, position: 'top-20 left-10' },
  { Icon: Network, delay: 0.2, position: 'top-40 right-20' },
  { Icon: Cpu, delay: 0.4, position: 'bottom-32 left-20' },
  { Icon: Settings, delay: 0.6, position: 'bottom-20 right-10' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
          >
            <Icon className="w-12 h-12 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Welcome to EDSS Group
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming Ideas Into{' '}
            <span className="gradient-text">Digital Reality</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We deliver cutting-edge software solutions, network infrastructure, 
            smart systems, and enterprise integration services that drive business growth.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
              View Our Work
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-16 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by leading businesses across industries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['Enterprise', 'Manufacturing', 'Healthcare', 'Retail', 'Logistics'].map((industry) => (
                <span key={industry} className="font-heading font-semibold text-foreground">
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
