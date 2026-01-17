'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { motion } from 'framer-motion'
import { 
  Code2, Network, Cpu, Settings, 
  CheckCircle2, ArrowRight, ArrowUpRight,
  Smartphone, Globe, Database, Cloud,
  Shield, Wifi, Server, Router,
  Lightbulb, Gauge, Fingerprint, Home,
  LayoutDashboard, Package, Wallet, BarChart3
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    id: 'software',
    icon: Code2,
    title: 'تطوير البرمجيات',
    description: 'حلول برمجية مخصصة تناسب متطلبات أعمالك. من تطبيقات الويب إلى الأنظمة المؤسسية، نبني حلولًا قابلة للتوسع وآمنة وسهلة الاستخدام.',
    color: 'from-blue-500 to-blue-600',
    features: [
      { icon: Globe, text: 'تطبيقات ويب وبوابات' },
      { icon: Smartphone, text: 'تطوير تطبيقات الموبايل' },
      { icon: Database, text: 'تصميم وإدارة قواعد البيانات' },
      { icon: Cloud, text: 'حلول سحابية' },
    ],
    highlights: [
      'منهجية تطوير مرنة',
      'خبرة شاملة في جميع الطبقات',
      'تطوير وربط واجهات APIs',
      'ضمان الجودة والاختبارات',
      'صيانة ودعم مستمر',
    ],
  },
  {
    id: 'networks',
    icon: Network,
    title: 'حلول الشبكات',
    description: 'بنية تحتية للشبكات تضمن الاتصال والأمان والاستقرار. نصمم وننفذ وندير شبكات بمختلف الأحجام.',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      { icon: Shield, text: 'أمن الشبكات' },
      { icon: Wifi, text: 'شبكات لاسلكية' },
      { icon: Server, text: 'مراكز بيانات' },
      { icon: Router, text: 'بنية الشبكات' },
    ],
    highlights: [
      'تصميم معماري للشبكات',
      'تقييم أمني وتنفيذ',
      'تحسين الأداء',
      'مراقبة ودعم 24/7',
      'خطط التعافي من الكوارث',
    ],
  },
  {
    id: 'smart-systems',
    icon: Cpu,
    title: 'الأنظمة الذكية',
    description: 'حلول أتمتة وإنترنت الأشياء لتحديث عملياتك. من المباني الذكية إلى الأتمتة الصناعية.',
    color: 'from-purple-500 to-purple-600',
    features: [
      { icon: Lightbulb, text: 'أنظمة المباني الذكية' },
      { icon: Gauge, text: 'إنترنت الأشياء الصناعي' },
      { icon: Fingerprint, text: 'أنظمة التحكم بالدخول' },
      { icon: Home, text: 'أتمتة المباني' },
    ],
    highlights: [
      'تكامل الحساسات والنشر',
      'لوحات متابعة لحظية',
      'صيانة تنبؤية',
      'إدارة الطاقة',
      'أتمتة مخصصة للعمليات',
    ],
  },
  {
    id: 'integration',
    icon: Settings,
    title: 'تكامل الأنظمة',
    description: 'ربط أنظمتك لتحقيق عمليات موحدة. نمتلك خبرة في أنظمة ERP وتكامل البيانات والحلول المؤسسية.',
    color: 'from-orange-500 to-orange-600',
    features: [
      { icon: LayoutDashboard, text: 'تطبيق ERP' },
      { icon: Package, text: 'إدارة المخزون' },
      { icon: Wallet, text: 'الأنظمة المالية' },
      { icon: BarChart3, text: 'ذكاء الأعمال' },
    ],
    highlights: [
      'تطوير ERP مخصص',
      'تحديث الأنظمة القديمة',
      'ترحيل البيانات',
      'أتمتة العمليات',
      'تدريب وإدارة التغيير',
    ],
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

export default function ServicesPageAr() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroWords = [
    { text: 'حلول', gradient: false },
    { text: 'تقنية', gradient: true },
    { text: 'شاملة', gradient: true },
  ]

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.services-hero-pill', { opacity: 0, y: 20, duration: 0.5 })
        .from('.services-hero-title span', { opacity: 0, y: 40, duration: 0.7, stagger: 0.08 }, '-=0.2')
        .from('.services-hero-lead', { opacity: 0, y: 20, duration: 0.55 }, '-=0.25')

      gsap.to('.services-orb', {
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
        <div className="services-orb absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="services-orb absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />

        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="services-hero-pill inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              خدماتنا
            </span>
            <h1 className="services-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
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
            <p className="services-hero-lead text-lg md:text-xl text-muted-foreground leading-relaxed">
              من البرمجيات المخصصة إلى التكامل المؤسسي، نقدم حلولًا شاملة تغيّر طريقة عمل الشركات ونموّها.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading
            label="خدماتنا"
            title="استكشف قدراتنا الأساسية"
            description="لمحة سريعة عن ركائز خدماتنا الرئيسية. انتقل لأي قسم لمعرفة المزيد."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group block h-full rounded-2xl border border-border bg-card p-6 card-hover"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-muted' : ''}`}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className={index % 2 === 1 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                    >
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link href="/ar/contact" className="btn-primary">
                  ناقش مشروعك
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                className={index % 2 === 1 ? 'lg:order-1' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    ماذا نقدم
                  </h3>
                  <motion.ul
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        variants={itemVariants}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              غير متأكد من الخدمة المناسبة؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              دعنا نناقش التحديات والأهداف وسنقترح الحل الأمثل.
            </p>
            <Link href="/ar/contact" className="btn-primary text-lg px-8 py-4">
              احجز استشارة
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
