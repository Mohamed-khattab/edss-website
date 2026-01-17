'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const testimonials = [
  {
    id: 1,
    quote: 'حوّلت EDSS سلسلة الإمداد بالكامل عبر منصة Alto. النتائج كانت مذهلة والعملاء سعداء.',
    author: 'أحمد حسن',
    role: 'الرئيس التنفيذي',
    company: 'PackagePro Industries',
  },
  {
    id: 2,
    quote: 'نظام ERP المخصص غيّر طريقة عملنا جذريًا. بيانات لحظية وعمليات مؤتمتة ودعم رائع.',
    author: 'سارة محمد',
    role: 'مديرة العمليات',
    company: 'Delta Manufacturing',
  },
  {
    id: 3,
    quote: 'التعاون مع EDSS في منصة العضويات كان نقطة تحول. فريق محترف وتسليم يفوق التوقعات.',
    author: 'عمر خليل',
    role: 'المؤسس',
    company: 'Elite Sports Club',
  },
]

export function TestimonialsAr() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

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
        .from(cardRef.current, { opacity: 0, y: 40, duration: 0.6 }, '-=0.35')

      gsap.to('.testimonial-orb', {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      })
    },
    { scope: sectionRef }
  )

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="testimonial-orb absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="testimonial-orb absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="container-wide relative">
        <div ref={headingRef}>
          <SectionHeading
            label="آراء العملاء"
            title="ماذا يقول عملاؤنا"
            description="استمع إلى تجارب العملاء الذين حققوا النجاح معنا."
          />
        </div>

        <div ref={cardRef} className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <div className="absolute -top-6 left-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {testimonials[currentIndex].author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`الانتقال إلى تقييم ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                  aria-label="السابق"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                  aria-label="التالي"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
