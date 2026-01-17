'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current || !blockRef.current) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      })
      tl.from(blockRef.current, { opacity: 0, y: 30, duration: 0.6 })
        .from(badgeRef.current, { opacity: 0, scale: 0.9, duration: 0.5 }, '-=0.3')
        .from(titleRef.current, { opacity: 0, y: 24, duration: 0.6 }, '-=0.35')
        .from(descRef.current, { opacity: 0, y: 20, duration: 0.5 }, '-=0.4')
        .from(buttonsRef.current, { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <div
          ref={blockRef}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 md:p-16 lg:p-20"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Ready to Transform Your Business?
            </div>

            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Let&apos;s Build Something Amazing Together
            </h2>

            <p
              ref={descRef}
              className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Whether you need custom software, network infrastructure, or enterprise integration,
              our team is ready to turn your vision into reality.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/20"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
