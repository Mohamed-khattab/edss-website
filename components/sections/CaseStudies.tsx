'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
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

export function CaseStudies() {
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
          { opacity: 0, y: 50, duration: 0.6, stagger: 0.15 },
          '-=0.35'
        )
        .from(ctaRef.current, { opacity: 0, y: 24, duration: 0.5 }, '-=0.25')

      gsap.to('.case-orb', {
        y: -14,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-noise opacity-15 mix-blend-soft-light" />
      <div className="case-orb absolute -top-24 left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="case-orb absolute -bottom-24 right-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="container-wide">
        <div ref={headingRef}>
          <SectionHeading
            label="Our Work"
            title="Featured Case Studies"
            description="Discover how we've helped businesses transform their operations with innovative technology solutions."
          />
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-3 gap-8 relative">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
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
          ))}
        </div>

        <div ref={ctaRef} className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
