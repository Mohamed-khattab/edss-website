'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Briefcase, Users, Award, Calendar } from 'lucide-react'

const stats = [
  {
    icon: Briefcase,
    value: 150,
    suffix: '+',
    label: 'مشاريع مُنجزة',
    description: 'تسليم ناجح عبر قطاعات متعددة',
  },
  {
    icon: Users,
    value: 80,
    suffix: '+',
    label: 'عملاء سعداء',
    description: 'تحويل أعمال حول العالم',
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'خبراء في الفريق',
    description: 'محترفون مهرة ضمن فريقنا',
  },
  {
    icon: Calendar,
    value: 10,
    suffix: '+',
    label: 'سنوات خبرة',
    description: 'نقدّم التميز منذ البداية',
  },
]

export function StatsAr() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
          { opacity: 0, scale: 0.92, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )

      gsap.to('.stats-orb', {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />
      <div className="stats-orb absolute -top-20 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="stats-orb absolute -bottom-24 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />

      <div className="container-wide relative">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            تأثيرنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            EDSS بالأرقام
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="relative group">
              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
