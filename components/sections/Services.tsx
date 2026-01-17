'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
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

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current || !headingRef.current) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      })
      tl.from(headingRef.current, { opacity: 0, y: 40, duration: 0.7 })
        .from(
          gridRef.current?.children ?? [],
          { opacity: 0, y: 50, duration: 0.6, stagger: 0.1 },
          '-=0.35'
        )
        .from(ctaRef.current, { opacity: 0, y: 24, duration: 0.5 }, '-=0.25')
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section-padding bg-muted">
      <div className="container-wide">
        <div ref={headingRef}>
          <SectionHeading
            label="What We Do"
            title="Comprehensive Technology Solutions"
            description="From custom software to enterprise integration, we deliver end-to-end solutions that transform your business."
          />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
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
          ))}
        </div>

        <div ref={ctaRef} className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            Explore All Services
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
