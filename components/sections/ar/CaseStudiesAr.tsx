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
    title: 'منصة Alto',
    category: 'برمجيات B2B',
    description: 'سوق إلكتروني متكامل يربط موردي البلاستيك والتغليف بالعملاء ويبسّط عملية الشراء بالكامل.',
    results: ['طلبات أسرع 50%', '200+ مورد نشط', '10K+ معاملة'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'erp',
    icon: LayoutDashboard,
    title: 'نظام ERP مخصص',
    category: 'برمجيات مؤسسية',
    description: 'حل ERP مخصص بالكامل مع وحدات متكاملة للمخزون والمبيعات والمشتريات والإنتاج والمحاسبة.',
    results: ['خفض التكاليف 30%', 'أتمتة 100%', 'رؤى لحظية'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'membership',
    icon: Users,
    title: 'إدارة العضويات',
    category: 'منصة SaaS',
    description: 'نظام شامل لإدارة العضويات والتجديدات والتواصل والتحليلات.',
    results: ['إدارة 5K+ عضو', 'نسبة تجديد 90%', 'عمليات مؤتمتة'],
    color: 'from-emerald-500 to-teal-500',
  },
]

export function CaseStudiesAr() {
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
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, clearProps: 'opacity,transform' }
      )
        .fromTo(
          gridRef.current?.children ?? [],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, clearProps: 'opacity,transform' },
          '-=0.35'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.5, clearProps: 'opacity,transform' },
          '-=0.25'
        )

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
            label="أعمالنا"
            title="دراسات حالة مميزة"
            description="اكتشف كيف ساعدنا الشركات على تحويل عملياتها بحلول تقنية مبتكرة."
          />
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-3 gap-8 relative">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/ar/case-studies#${study.id}`}
              className="group block h-full bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
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
          <Link href="/ar/case-studies" className="btn-primary">
            عرض جميع الدراسات
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
