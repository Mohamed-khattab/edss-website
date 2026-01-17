'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Zap, Users, Award, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const values = [
  {
    icon: Target,
    title: 'التميز',
    description: 'نسعى للتميز في كل مشروع لنقدم حلولًا تتجاوز التوقعات.',
  },
  {
    icon: Zap,
    title: 'الابتكار',
    description: 'نعتمد أحدث التقنيات لتقديم حلول مستقبلية.',
  },
  {
    icon: Heart,
    title: 'المصداقية',
    description: 'نبني الثقة عبر الشفافية والنزاهة والأخلاقيات.',
  },
  {
    icon: Users,
    title: 'التعاون',
    description: 'نعمل مع عملائنا كشركاء لتحقيق النجاح المشترك.',
  },
]

const team = [
  {
    name: 'فريق القيادة',
    description: 'خبراء يقودون رؤيتنا واستراتيجيتنا للنمو.',
    count: 5,
  },
  {
    name: 'فريق التطوير',
    description: 'مهندسون محترفون لصناعة حلول مبتكرة.',
    count: 12,
  },
  {
    name: 'التصميم وتجربة المستخدم',
    description: 'عقول إبداعية تصمم تجارب رائعة وسهلة.',
    count: 4,
  },
  {
    name: 'الدعم والعمليات',
    description: 'فريق متخصص لضمان تقديم الخدمة بسلاسة.',
    count: 4,
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

export default function AboutPageAr() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroWords = [
    { text: 'نقود', gradient: false },
    { text: 'التحول', gradient: true },
    { text: 'الرقمي', gradient: true },
  ]

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.about-hero-pill', { opacity: 0, y: 20, duration: 0.5 })
        .from('.about-hero-title span', { opacity: 0, y: 40, duration: 0.7, stagger: 0.08 }, '-=0.2')
        .from('.about-hero-lead', { opacity: 0, y: 20, duration: 0.55 }, '-=0.25')

      gsap.to('.about-orb', {
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
        <div className="about-orb absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="about-orb absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />

        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="about-hero-pill inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              عن EDSS
            </span>
            <h1 className="about-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
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
            <p className="about-hero-lead text-lg md:text-xl text-muted-foreground leading-relaxed">
              منذ تأسيسنا، كانت EDSS في طليعة الابتكار التقني، نساعد الشركات في مصر والشرق الأوسط على تبني الحلول الرقمية التي تعزز النمو والكفاءة.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card rounded-2xl border border-border p-8 md:p-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                تمكين الشركات بحلول تقنية مبتكرة تبسّط العمليات وتزيد الإنتاجية وتفتح فرص نمو جديدة، مع تقديم قيمة حقيقية عبر الجودة والشراكة طويلة الأمد.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl border border-border p-8 md:p-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-teal-600 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون الشريك التقني الأول في المنطقة، معترفًا بنا لالتزامنا بالابتكار والجودة ونجاح عملائنا.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            label="قيمنا"
            title="قيمنا الأساسية"
            description="المبادئ التي توجه كل ما نقوم به وكيف نخدم عملاءنا."
          />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading
            label="فريقنا"
            title="تعرف على فريقنا"
            description="مجموعة من المحترفين الموهوبين لتقديم أفضل النتائج."
          />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {team.map((group) => (
              <motion.div
                key={group.name}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={group.count} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{group.name}</h3>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">انضم إلى فريقنا</h3>
                  <p className="text-muted-foreground">نبحث دائمًا عن مواهب جديدة.</p>
                </div>
              </div>
              <div className="md:ml-auto">
                <a
                  href="mailto:careers@edss-group.com"
                  className="btn-primary"
                >
                  عرض الوظائف المتاحة
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                موقعنا
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                مقرنا في القاهرة ونخدم العالم
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                يقع مقرنا الرئيسي في ديستريكت 5، القاهرة الجديدة، مصر. من هنا نخدم العملاء في الشرق الأوسط وخارجه بحلول تقنية عالمية.
              </p>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">مقر EDSS الرئيسي</h3>
                  <p className="text-muted-foreground">ديستريكت 5، القاهرة الجديدة<br />القاهرة، مصر</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">خريطة تفاعلية قريبًا</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
