'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { motion } from 'framer-motion'
import { 
  Package, LayoutDashboard, Users, 
  CheckCircle2, ArrowRight, ArrowUpRight,
  TrendingUp, Clock, Target, Zap
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const caseStudies = [
  {
    id: 'alto',
    icon: Package,
    title: 'منصة Alto',
    subtitle: 'سوق B2B للبلاستيك والتغليف',
    description: 'منصة متكاملة تربط الموردين بالعملاء وتبسّط عمليات الشراء والبيع.',
    color: 'from-blue-500 to-cyan-500',
    challenge: 'غياب منصة رقمية مخصصة أدى إلى بطء العمليات وفرص مفقودة.',
    solution: 'بناء منصة سوق إلكتروني بإدارة مخزون لحظية وطلبات مؤتمتة ومدفوعات آمنة ولوحات تحكم.',
    results: [
      { icon: TrendingUp, label: '50%', description: 'سرعة في معالجة الطلبات' },
      { icon: Users, label: '200+', description: 'مورد نشط' },
      { icon: Target, label: '10K+', description: 'معاملة منجزة' },
      { icon: Clock, label: '70%', description: 'توفير الوقت' },
    ],
    features: [
      'إدارة مخزون لحظية',
      'سير عمل مؤتمت للطلبات',
      'تكامل مع بوابات الدفع',
      'نظام تحقق الموردين',
      'لوحات تحليلات وتقارير',
      'تصميم متجاوب',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
  },
  {
    id: 'erp',
    icon: LayoutDashboard,
    title: 'نظام ERP مخصص',
    subtitle: 'حل تخطيط موارد المؤسسة',
    description: 'نظام ERP متكامل يشمل وحدات للمخزون والمبيعات والشراء والإنتاج والمحاسبة.',
    color: 'from-purple-500 to-pink-500',
    challenge: 'أنظمة متفرقة وإدخال يدوي للبيانات أدى إلى انخفاض الكفاءة.',
    solution: 'تطوير ERP مخصص مع تكامل كامل بين الأقسام ومزامنة بيانات لحظية.',
    results: [
      { icon: TrendingUp, label: '30%', description: 'خفض التكاليف' },
      { icon: Zap, label: '100%', description: 'أتمتة العمليات' },
      { icon: Clock, label: 'لحظي', description: 'رؤى البيانات' },
      { icon: Target, label: '99.9%', description: 'استقرار النظام' },
    ],
    features: [
      'إدارة المخزون مع الباركود',
      'إدارة المبيعات والعملاء',
      'إدارة المشتريات',
      'تخطيط الإنتاج',
      'تقارير مالية',
      'تكامل الموارد البشرية',
    ],
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'membership',
    icon: Users,
    title: 'نظام إدارة العضويات',
    subtitle: 'منصة إدارة الأندية والمنظمات',
    description: 'منصة لإدارة التسجيلات والتجديدات والتواصل والفعاليات والتحليلات.',
    color: 'from-emerald-500 to-teal-500',
    challenge: 'اعتماد الجداول اليدوية أدى إلى أخطاء وفقدان فرص التجديد.',
    solution: 'منصة شاملة بأتمتة التجديدات وبوابات خدمة ذاتية وتحليلات متقدمة.',
    results: [
      { icon: Users, label: '5K+', description: 'عضو مُدار' },
      { icon: TrendingUp, label: '90%', description: 'نسبة تجديد' },
      { icon: Zap, label: 'مؤتمت', description: 'تذكير التجديد' },
      { icon: Target, label: '60%', description: 'توفير وقت الإدارة' },
    ],
    features: [
      'تسجيل عضويات عبر الإنترنت',
      'إشعارات تجديد تلقائية',
      'بوابة خدمة ذاتية',
      'إدارة الفعاليات والحجوزات',
      'أدوات تواصل ونشرات',
      'تقارير شاملة',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'SendGrid', 'Stripe'],
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

export default function CaseStudiesPageAr() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroWords = [
    { text: 'قصص', gradient: false },
    { text: 'نجاح', gradient: true },
  ]

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.cases-hero-pill', { opacity: 0, y: 20, duration: 0.5 })
        .from('.cases-hero-title span', { opacity: 0, y: 40, duration: 0.7, stagger: 0.08 }, '-=0.2')
        .from('.cases-hero-lead', { opacity: 0, y: 20, duration: 0.55 }, '-=0.25')

      gsap.to('.cases-orb', {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    },
    { scope: pageRef }
  )

  return (
    <div ref={pageRef}>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />
        <div className="cases-orb absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="cases-orb absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />

        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="cases-hero-pill inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              أعمالنا
            </span>
            <h1 className="cases-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {heroWords.map((word, index) => (
                <span
                  key={word.text}
                  className={`inline-block ${word.gradient ? 'gradient-text' : ''}`}
                >
                  {word.text}
                  {index < heroWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <p className="cases-hero-lead text-lg md:text-xl text-muted-foreground leading-relaxed">
              اكتشف كيف ساعدنا الشركات على تحويل عملياتها بحلول تقنية مبتكرة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={`#${study.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
              >
                <study.icon className="w-4 h-4" />
                {study.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          id={study.id}
          className={`section-padding ${index % 2 === 0 ? '' : 'bg-muted'}`}
        >
          <div className="container-wide">
            <motion.div
              className="max-w-3xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6`}>
                <study.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-primary mb-2 block">
                {study.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {study.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold">!</span>
                  التحدي
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </motion.div>

              <motion.div
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-sm font-bold">✓</span>
                  الحل
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">النتائج الرئيسية</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {study.results.map((result) => (
                  <motion.div
                    key={result.description}
                    variants={itemVariants}
                    className="bg-card rounded-xl border border-border p-6 text-center"
                  >
                    <result.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{result.label}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">الميزات الرئيسية</h3>
                <ul className="space-y-3">
                  {study.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">التقنيات المستخدمة</h3>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                جاهز لتكون قصة النجاح القادمة؟
              </h2>
              <p className="text-lg text-white/80 mb-8">
                دعنا نناقش كيف يمكننا تحويل أعمالك بحلول تقنية مبتكرة.
              </p>
              <Link
                href="/ar/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all"
              >
                ابدأ مشروعك
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
