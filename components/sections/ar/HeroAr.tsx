'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { ArrowRight, Code2, Network, Cpu, Settings } from 'lucide-react'

const floatingIcons = [
  { Icon: Code2, position: 'top-20 left-10' },
  { Icon: Network, position: 'top-40 right-20' },
  { Icon: Cpu, position: 'bottom-32 left-20' },
  { Icon: Settings, position: 'bottom-20 right-10' },
]

const titleWords = [
  { text: 'نحوّل', gradient: false },
  { text: 'الأفكار', gradient: false },
  { text: 'إلى', gradient: false },
  { text: 'واقع', gradient: true },
  { text: 'رقمي', gradient: true },
]

export function HeroAr() {
  const heroRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollDotRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!heroRef.current || !badgeRef.current) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(badgeRef.current, { opacity: 0, y: 30, duration: 0.6 })
        .from('.hero-title-word', { opacity: 0, y: 50, duration: 0.75, stagger: 0.06 }, '-=0.35')
        .from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.6 }, '-=0.45')
        .from(ctaRef.current, { opacity: 0, y: 30, duration: 0.5 }, '-=0.35')
        .from(trustRef.current, { opacity: 0, duration: 0.6 }, '-=0.25')
        .from(scrollRef.current, { opacity: 0, y: -10, duration: 0.5 }, '-=0.2')

      gsap.fromTo(
        '.float-icon',
        { y: -10 },
        { y: 10, yoyo: true, repeat: -1, duration: 2, ease: 'sine.inOut', stagger: 0.2 }
      )

      gsap.to('.hero-blob', {
        scale: 1.08,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-blob', {
        y: -24,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.hero-orb', {
        y: 12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })

      gsap.to('.hero-ring', {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: 'none',
      })

      if (scrollDotRef.current) {
        gsap.to(scrollDotRef.current, {
          y: 5,
          duration: 0.75,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 1,
        })
      }
    },
    { scope: heroRef }
  )

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden isolate"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-blob hero-orb absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="hero-blob hero-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="hero-ring absolute -top-40 right-10 w-[420px] h-[420px] border border-primary/15 rounded-full" />
      </div>

      {floatingIcons.map(({ Icon, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} hidden lg:block`}
        >
          <div className="float-icon">
            <Icon className="w-12 h-12 text-primary" />
          </div>
        </div>
      ))}

      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <span
            ref={badgeRef}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            مرحبًا بكم في مجموعة EDSS
          </span>

          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight flex flex-wrap justify-center gap-x-3 gap-y-2"
          >
            {titleWords.map((word) => (
              <span
                key={word.text}
                className={`hero-title-word inline-block ${word.gradient ? 'gradient-text' : ''}`}
              >
                {word.text}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            نقدم حلولًا برمجية متقدمة، وبنية تحتية للشبكات، وأنظمة ذكية، وخدمات تكامل مؤسسي تدفع نمو الأعمال.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/ar/contact" className="btn-primary text-lg px-8 py-4">
              ابدأ مشروعك
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/ar/case-studies" className="btn-secondary text-lg px-8 py-4">
              شاهد أعمالنا
            </Link>
          </div>

          <div ref={trustRef} className="mt-16 pt-16 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">
              موثوق من شركات رائدة عبر قطاعات متعددة
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['المؤسسات', 'التصنيع', 'الرعاية الصحية', 'التجزئة', 'الخدمات اللوجستية'].map((industry) => (
                <span key={industry} className="font-heading font-semibold text-foreground">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div
            ref={scrollDotRef}
            className="w-1 h-2 rounded-full bg-muted-foreground/50"
          />
        </div>
      </div>
    </section>
  )
}
